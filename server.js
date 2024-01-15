const express =require('express')
const dbconnect=require('./config/db-connect')
//initialisation
const app= express()
require('dotenv').config()
//connexion base données
dbconnect()


//creation middleware
app.use(express.json())
app.use(('/client'),require('./routes/client'))
app.use(('/product'),require('./routes/product'))

//creation du serveur
app.listen(process.env.PORT,(err)=>err?console.log(err):console.log(`server is running in ${process.env.PORT}`))