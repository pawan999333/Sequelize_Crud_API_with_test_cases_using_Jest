const {DataTypes} = require('sequelize')
const sequelize=require('./index')


const User=sequelize.define('User', {
    firstName:{
        type: DataTypes.STRING,
        allowNull:false
    },
    lastName: {
        type: DataTypes.STRING
    }
},{
    timestamps:false
})


module.exports=User;