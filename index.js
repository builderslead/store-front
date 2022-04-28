const express=require("express");
// require("dotenv").config()

const throwerror=require("./middleware/middleware")
const router=require("./routes/route")
const cors=require("cors")
const app=express()

const port=process.env.PORT ||3000;

app.use(express.json());
app.use("/",router)
app.use(cors({
    origin:['http://localhost:4002/', 'https://www.bxstore.in/']
    
}))

app.use(throwerror)




app.listen(port,()=>{
    console.log(`connection is live at port no?${port}`)
})

