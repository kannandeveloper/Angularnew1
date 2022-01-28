const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/crudDB',(err)=>{
    if(!err){
        console.log("mongodb is connected");
    }
    else{
        console.log('Err in Db connection:'+JSON.stringify(err,undefined,2));
    }
})
module.exports = mongoose