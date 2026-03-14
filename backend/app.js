import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import connectDB  from "./db/db.js"
import userRoutes from "./routes/user.routes.js"
import cookieParser from "cookie-parser"
import captainRoutes from "./routes/captain.routes.js"
import express from 'express'
const app = express()

connectDB()


app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.send("Welcome to the API")
})
app.use("/api/users",userRoutes)
app.use("/api/captains",captainRoutes)


export default app;