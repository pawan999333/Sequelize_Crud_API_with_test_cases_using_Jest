const {Sequelize}=require('sequelize')

const sequelize=new Sequelize('testing_apis','root','codefire',{
    host:'localhost',
    // logging:false,
    dialect:'mysql'
});


try{
    sequelize.authenticate();
    console.log("Connected");
}catch(error){
    console.log("error is here");
}

module.exports=sequelize;