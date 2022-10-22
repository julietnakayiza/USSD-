const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
const mongoose = require('mongoose');

const app=express();
const PORT=8000

const user=require('./models/user')

mongoose.connect('mongodb://localhost:27017/ussd');
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('connected to MongoDB');
});

// const database_url='mongodb://localhost:27817/ussd';
// mongoose.connect(database_url);
// const db=mongoose.connecting;
// db.on('error',(err)=>{
//   console.log('Database is running.')
// })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

// app.get('/'.replace(req,res)=>{send(body?:any):Response=any,number>
//   res.send('Success MESSAGE')
// })
app.get('/home',(req,res)=>{
  res.send('Success MESSAGE')
})

app.post('/',(req,res)=>{
  const{phoneNumber,text,sessionId}=req.body
  let response

if(text==='')
  {
    console.log(1)
    response='CON Hello,Welcome,you have subscribed to Quicksoma daily,you will be receiving daily updates and answer questions on different subjects and topics'
  } 
if(text !=='')
  {
    console.log(2)
    response='CON Get smarter in maths today with Quicksoma, Please Choose a topic of revision:'+
      '\n1.Area'+ 
      '\n2.Indices'+
      '\n3.Trigonometry'+
      '\n4.Matrix';
} 
else if (text !=='')
{
  console.log(3)
  response='CON What is the area of a of a square whose side is 6cm? (Tip: Area=S*S).Please Choose one answer below:'+
    '\n1.36cm'+ 
    '\n2.12cm'+
    '\n3.6cm'+
    '\n4.24cm'+
    '\n0.Back'; 
} 
// else if(text !==''){
//   console.log(4)
//   response='END Congratulations for revising with QuickSoma.The answer is 36cm.To continue revising,press 0 to go back to revision questions.'
// }
 
// res.set('Content-Type:text/plain');
// res.send(respond);



  setTimeout(()=>{
    console.log(text)
    res.send(response);
    res.end()
    },2000);
  })


app.listen(PORT,() => {
  console.log('app is running on port' + PORT)
})