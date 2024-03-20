const express = require('express');
const addEmp = require('../controller/employeecontroller.js');



const router=express.Router();


router.post("/addEmp",addEmp);



module.exports=router;