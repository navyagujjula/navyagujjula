import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import morgan from 'morgan';
import mongoose from 'mongoose';
import musicRouter from '../Back end/routes/musicRouter'


dotenv.config();
const app = express();

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//router
app.use('/api',musicRouter)

//db
mongoose.connect('mongodb+srv://admin:rZLa1kW1bRykh8Dv@fullstack.y9fne.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=>console.log("Database connected"))
.catch((err)=>console.error("Database connection failed",err))

//listen
const port  = 3031 || 8000;
app.listen(port,()=>console.log(`server is running on ${port}`))

