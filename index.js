const express=require('express')
const bodyParser = require('body-parser');
const User=require('./models/user')
const app=express();

var userCtrl=require('./controllers/userController')
app.use(bodyParser.json());

app.get('/data', function(req,res){
    res.send("hello world");
})
app.get("/add", userCtrl.addUser);

app.get("/users", userCtrl.getUsers);
app.get("/user/:id", userCtrl.getUser);
app.post("/users", userCtrl.postUsers);
app.delete("/user/:id", userCtrl.deleteUser);
app.patch("/user/:id", userCtrl.patchUser);






User.sync();

app.listen(3000, ()=>{
    console.log("App will be run on 3000");
})
module.exports=app;