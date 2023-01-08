const User = require("../models/User")

const registeruser =  ((req,res,next)=>{
    User.findOne({username : req.body.username})
    .then((user)=>{
        if(user != null){

            let err =  new Error(`This ${req.body.username} user already exists`)
            res.status(400)
            return next(err)
        }
        else{
           user =  new User(req.body)
           user.save().then((user)=>{
            res.json(user)
           })
           .catch(next)
        }
    })
   .catch(next)

})

const loginuser = ((req,res,next)=>{
    User.findOne({username : req.body.username,password:req.body.password}).then(user=>{
        if(user == null){
            res.status(404)
            let err =  new error(`User ${req.body.username} doesnot exist`)
            return next(err)
        }
        else{
             
            res.json({"user " :user,"reply ": "Logged in sucessfully"})
        }
})
})

module.exports =  {registeruser,loginuser}