const User = require("../models/user");

var addUser = async (req, res) => {
  const jane = await User.build({ firstName: "pks", lastName: "sharma" });
  await jane.save();
  jane.set({ firstName: "ironman999", lastName: "kkk" });
  // jane.update({firstName:'ironman'})
  res.status(200).json(jane.toJSON());
};

var getUsers = async (req, res) => {
  const data = await User.findAll({});

  res.status(200).json({data:data});
};

var getUser = async (req, res) => {
  const data = await User.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json(data);
};

var postUsers = async (req, res) => {
  var postData = req.body;
  if (postData.length > 1) {
    var data = await User.bulkCreate(postData);
  } else {
    var data = await User.create(postData);
  }
  res.status(200).json(data);
};

var deleteUser = async(req,res)=>{
    const data = await User.destroy({
        where:{
            id:req.params.id
        }
    })
    res.status(200).json(data);
}

var patchUser = async (req,res) => {
    var updatedData=req.body;
    const data = await User.update(updatedData,{
        where:{
            id:req.params.id
        }
    })
    res.status(200).json(data)
}

module.exports = {
  addUser,
  getUsers,
  getUser,
  postUsers,
  deleteUser,
  patchUser,
};
