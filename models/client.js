const mongoose=require('mongoose')
const schema=mongoose.Schema
const clientschema=new schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
 
}
});
module.exports=client=mongoose.model('users',clientschema)