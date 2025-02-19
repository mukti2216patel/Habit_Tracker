const express = require('express');
const app = express();
const userModel = require('./usermodel')
app.get('/' , (req,res)=>{
    res.send('hey');
})
app.get('/create' , async (req,res)=>{
   let createuser = await userModel.create({
        name : 'John',
        email : 'john@gmail.com',
        username:'john1'
    });
    res.send(createuser);
})
app.get('/update' , async (req,res)=>{
   let updateuser =await userModel.findOneAndUpdate({username:'john1'},{name:'mukti'},{new:'true'});
    res.send(updateuser);
})
app.get('/read' , async (req ,res)=>{
  let users =  await userModel.find();
  res.send(users);

})
app.get('/delete' , async (req ,res)=>{
    let users =  await userModel.findOneAndDelete({username:'mukti'});
    res.send("deleted");
})

app.listen(3000);