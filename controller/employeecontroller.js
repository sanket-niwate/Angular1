const model = require('../model/employeemodel.js');



const addEmp=async(req,res)=>{
    const new_emp=req.body;
    const data=new model.empmodel(new_emp);
    const result= await data.save().then(() => {
        res.send("add")
    }).catch((err) => {
        console.log(err);
    });
    console.log(result);


    
}


module.exports=addEmp;