const express=require("express");
const app=express();
const rubickModel=require('./models/rubickModel');

const mongoose=require("mongoose");
require("dotenv").config();

app.use(express.json());

const cors=require("cors");
app.use(cors());

mongoose
    .connect(process.env.MONGO_URL,{
    useNewUrlparser:true,
    useUnifiedTopology:true
    })
    .then(()=>console.log("MongoDB Connected Suceesfully..."))
    .catch((err)=>console.error(err));

app.get("/getProductsList",(req,res)=>{
    rubickModel.find({},(err,result)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

app.post("/createProduct",async(req,res)=>{
    const pro=req.body;
    const newProduct=new rubickModel(pro);
    await newProduct.save();
    res.json(pro);
});

app.listen(3002,()=>{
    console.log("Rubick app server runing on port 3002 ...");
});
