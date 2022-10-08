const mongoose=require("mongoose");
const rubickSchema=new mongoose.Schema({
    code:{
        type:Number,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    qty:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    dateAdded:{
        type:String,
        required:true
    },
});
const rubickSchemaModel=mongoose.model("rubickSchemaModel",rubickSchema,"Products");
module.exports=rubickSchemaModel;
