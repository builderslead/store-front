const express=require("express");
// require("dotenv").config()

const throwerror=require("./middelwere/error")
const router=require("./routes/route")
const app=express()
app.use(throwerror)

const port=process.env.PORT ||3000;

app.use(express.json());
app.use("/",router)


app.listen(port,()=>{
    console.log(`connection is live at port no?${port}`)
})