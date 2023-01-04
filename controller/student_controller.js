const Student=require('../models/student')

const getAllStudent=(req, res, next)=>{
    Student.find()
    .then((student)=>{
        res.json(student)
    }).catch((err)=>next(err))
}

const addStudent=(req,res,next)=>{
    let student={
        ...req.body
    }
    Student.create(student)
    .then((students)=>{
        res.status(201).json(students)
    }).catch((err)=>next(err))
}
module.exports={
    getAllStudent,
    addStudent
}