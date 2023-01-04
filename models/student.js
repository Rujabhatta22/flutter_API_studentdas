const mongoose=require('mongoose')
const studentSchema=mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    batch:{
        type:String,
        required:true,
    },
    course:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
        minLength:[5,'USername should be longer than 5 characters']

    },
    password:{
        type:String,
        required:true,  
    }
},{timestamps:true})
module.exports=mongoose.model('Student',studentSchema)