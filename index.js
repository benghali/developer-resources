const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017",{
  useCreateIndex: true, 
   useFindAndModify: false, 
   useNewUrlParser: true, 
   useUnifiedTopology: true 
}).then(()=>{
  console.log("connection is successfull");
}).catch((e)=>{
  console.log(e);
});  


 const mySchema = mongoose.Schema({
language:String,
url:String,
description:String
 });


 module.exports = mongoose.model("dev",mySchema);
