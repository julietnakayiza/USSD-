import mongoose from "mongoose";

const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
const mongoose = ('mongoose');

const app=express();
const PORT=8000

const user=require('./models/user')

mongoose.connect('mongodb://localhost:27017/ussd');
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('connected to MongoDB');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

// app.get('/'.replace(req,res)=>{send(body?:any):Response=any,number>
//   res.send('Success MESSAGE')
// })
app.get('/',(req,res)=>{
  res.send('Success MESSAGE')
})

app.post('/',(req,res)=>{
  const{phoneNumber,text,sessionId}=req.body
  let response

  if(text==='')
  {
    console.log('1')
    response='CON Welcome to Quicksoma,Enter your admission number/n'
  }

  if(text !=='')
  {
    console.log('2')
    response='CON Get smarter in maths today with Quciksoma'
  }

if(text !=='')
{
  console.log('3')
  response='CON Choose the topic of revision'
  '1.Area'
  '2.Indices'
  '3.Trigonometry'
}
if (text !=='')
{
  console.log('4')
  response='CON What is the area of a  of a square whose side is 6cm? (Tip: Area=S*S)'
}
if(text !==''){
  console.log('5')
  response='CON Choose one answer below'
  '1.36cm'
  '2.12cm'
  '3.6cm'
  '4.24cm'
}
if(text !==''){
  console.log('6')
  response='END Congratulations for revising with QuickSoma.The answer is 36cm^2 To continue revising,press 0 to go back to revision questions.'
}




  setTimeout(()=>{
    console.log(text)
    res.send(response);
    res.end()
    },2000);
  })





app.listen(PORT,() => {
  console.log('app is running on port' + PORT)
})