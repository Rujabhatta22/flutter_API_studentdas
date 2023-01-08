const mongoose = require("mongoose")

const Userschema =  mongoose.Schema({

    firstname : {
        type : String,
        required : [true,"Firstname is Required"]
    },
    lastname  : {
        type : String,
        required : [true,"Lastname is Required"]
    },
    batch : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Batch"
    },
    course : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Course"
    }],
    username :{
        type : String,
        required : [true , "Username is Required"]
    },
    password : {
        type : String,
        
    },
    profilepicture :{
        type:String
    }
})
module.exports =  mongoose.model("User",Userschema)