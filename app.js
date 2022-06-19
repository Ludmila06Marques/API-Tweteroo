import express from "express"
import cors from "cors"

const app=express()
app.use(cors())
app.use(express.json())


const usuarios=[]
const tweets=[]
const usuario={username:"",avatar:""}
const tweet={username:"" , tweet:"" ,avatar:""}

app.post("/sign-up",(req,res)=>{

        usuario.username=req.body.username
        usuario.avatar=req.body.avatar

    usuarios.push(usuario)
    res.send("ok")
})



app.listen(5000,()=>{

    console.log("ta funfando")
})