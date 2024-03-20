const mongoose = require('mongoose');


const connectmongo=()=>{
    mongoose.connect("mongodb://localhost:27017/comp").then(() => {
        console.log("connect");
    }).catch((err) => {
        console.log(err);
    });
}


module.exports=connectmongo;