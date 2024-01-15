const express=require('express');
const clientRouter=express.Router();
const user=require('../models/client')
//add new client
clientRouter.post('/add',async(req,res)=>{
    try {
        newclient=new user(req.body)
        const result=await newclient.save()
        res.send(({jdid:result,msg:"client is saved"}))
    } catch (error) {
        console.log(error)
    }
})
//get all client
clientRouter.get('/all',async(req,res)=>{
    try {
        let result=await user.find()
        res.send({lists:result,msg:"voici list"})
    } catch (error) {
        console.log(error)
        
    }
})
//get all by id
clientRouter.get("/:id",async(req,res)=>{
    try {
        let result=await user.findById({_id:req.params.id})
        res.send({hahi:result,msg:"voici user"})
    } catch (error) {
        console.log(error)
    }
})



//update client
clientRouter.put("/:id",async(req,res)=>{
    try {
        let result=await user.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}})
        res.send({msg:"user is updated"})
    } catch (error) {
        console.log(error)
    }
})

//delete client

clientRouter.delete("/:id",async(req,res)=>{
    try {
        let result=await user.findByIdAndDelete({_id:req.params.id})
        res.send({msg:"user is deleted"})
    } catch (error) {
        console.log(error)
    }
})
module.exports=clientRouter