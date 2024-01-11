const express =require('express')
const dbconnect=require('./config/db-connect')
const app= express()
dbconnect()
const port=5000
app.listen(port,(err)=>err?console.log(err):console.log(`server is running in ${port}`))