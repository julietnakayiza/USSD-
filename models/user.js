const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    Class: {
        type: String,
        required: true,
        trim: true,
    },
    Subject: {
        type: String,
        required: true,
        trim: true,
    },
    Topic: {
        type: String,
        required: true,
        trim: true,
    },
    timestamps: true,
});
const User=mongoose.model('User',userSchema);
module.exports=User