const mongoose= require('mongoose');

const car=new mongoose.Schema({
    regNo:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    brandName:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Car',car);