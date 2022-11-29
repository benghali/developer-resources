const express =require('express')
const dev = require('./dataBase/index.js')
const cors = require('cors')
const app = express()


app.use(express.json())
app.use(cors())
 app.post("/resorces", async (req,res)=>{

    let data =new  dev({
      language: req.body.language,
    url:req.body.url,
description:req.body.description}
      );
    const result = await data.save();

    res.send(result)

 });
 app.get('/resorces',async (req,res)=>{
    const response = await dev.find()
    res.send(response)
 });

 app.delete('/resorces/:id',async (req,res)=>{
    const response = await dev.findByIdAndDelete(req.params._id)
    res.send(response)
 });

 app.put('/resorces/',async (req,res)=>{
    const response = await dev.findOneAndUpdate({
        language: req.body.language,
      url:req.body.url,
  description:req.body.description})
    res.send(response)
 })

const port = 3000;
 app.listen(port,()=>{
    console.log("you are connected at http://localhost:3000");
 })