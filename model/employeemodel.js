const mongoose = require('mongoose');


const empschema=new mongoose.Schema({
    name:String,
    id:String,
    salary:Number

})


const empmodel= mongoose.model("emp",empschema);

module.exports={empmodel};