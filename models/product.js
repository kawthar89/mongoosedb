const mongoose=require('mongoose')
const schema=mongoose.Schema
const productschema=new schema({
name:{
    type:String,
    required:true
},
price:{
    type:String,
 
}
});
module.exports=product=mongoose.model('produits',productschema)