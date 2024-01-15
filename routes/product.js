const express=require('express');
const productRouter=express.Router();
const produit=require('../models/product')
//add new product
productRouter.post('/add',async(req,res)=>{
    try {
        newproduct=new produit(req.body)
        const result= await newproduct.save()
        res.send(({produitjdid:result,msg:"product is saved"}))
    } catch (error) {
        console.log(error)
    }   
})
//get all product
productRouter.get('/all',async(req,res)=>{
    try {
        let result=await produit.find()
        res.send({lists:result,msg:"voici list"})
    } catch (error) {
        console.log(error)
        
    }
})
//get all by id
productRouter.get("/:id",async(req,res)=>{
    try {
        let result=await produit.findById({_id:req.params.id})
        res.send({hahi:result,msg:"voici produit"})
    } catch (error) {
        console.log(error)
    }
})
//update product
productRouter.put("/:id",async(req,res)=>{
    try {
        let result=await produit.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}})
        res.send({msg:"produit is updated"})
    } catch (error) {
        console.log(error)
    }
})
//delete product
productRouter.delete("/:id",async(req,res)=>{
    try {
        let result=await produit.findByIdAndDelete({_id:req.params.id})
        res.send({msg:"produit is deleted"})
    } catch (error) {
        console.log(error)
    }
})
module.exports=productRouter