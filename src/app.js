import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'


const app=express()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))// jese koi url me + hota h % use hota h tab use hota h ye space ko change krne ke lie taki express smj jaye
app.use(express.static("public"))
app.use(cookieParser())

//routes

import userRouter from './routes/user.routes.js'


//routes declaration

app.use("/api/v1/users",userRouter)

export {app }