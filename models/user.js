const mongoose=require('mongoose');
const userSchena=mongoose.Schema({
  Admission_number:String
})
const User=mongoose.model('User',userSchena);
module.exports=User