const express=require('express')
const router=express.Router()
const studentController=require('../controller/student_controller')

router.route('/')
.get(studentController.getAllStudent)
.post(studentController.addStudent)


module.exports=router