import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import authroutes from './routes/auth.routes.js'
import messageroutes from './routes/message.route.js'
import userroute from './routes/user.route.js'
import connectToMongoDB from './db/connetToMongoDB.js';
import cookieParser from 'cookie-parser';
import session from 'express-session';
const server=express();
dotenv.config()
const PORT =process.env.PORT || 5000
//server.use(bodyParser.urlencoded({ extended: false }))


server.use(bodyParser.json())
//server.use(cookieParser)
server.use(session({
  secret: process.env.JWT_Secret, // Secret key for session encryption
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // Set to true if using HTTPS
    httpOnly: true, // Cookie accessible only by the server
}}));
server.use('/api/auth',authroutes);
server.use('/api/user',userroute);
server.use('/api/message',messageroutes);

server.use(express.json());
 

server.get('/',(req,res)=>{
  res.status(200).json({
    hey:"I am running"
  })
})

server.listen(PORT,()=>{
  connectToMongoDB();
  console.log(`Server is running ${PORT}`)
})