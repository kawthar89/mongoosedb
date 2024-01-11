const mongoose=require('mongoose')
const dbconnect=async()=>{
    try {
        await mongoose.connect('mongodb+srv://kawtharalaya66: wuG77pFsjYzRoF8p@cluster0.dpt6ynd.mongodb.net/test')  
        console.log("data base is connected")
    } catch (error) {
        console.log(error)
    }
}
module.exports=dbconnect