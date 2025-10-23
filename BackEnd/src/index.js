import express from 'express';
import dotenv from "dotenv"
import connectDB from './Connection/db.js';
import cors from 'cors'

const app = express();

dotenv.config()
app.use(express.json());
app.use(cors()); 

const port=3000

// -------------------------------- ROUTES -------------------------
import { AuthRouter } from './Routes/auth.route.js';
app.use("/auth",AuthRouter)



app.listen(port,()=>{
    console.log("backend chal para");
})

connectDB()
