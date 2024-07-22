import express from 'express';
import env from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRoute from './Routes/index.js';
import mongoose from 'mongoose';
import path from 'path';


env.config({});

const app = express();
const PORT = process.env.PORT || 3000;

// CORS configuration
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  }));
  
app.use(express.json());
app.use(cookieParser());


// Route
app.use("/api/", userRoute);

// Database connection
const DB_MONGODB = async () => {
    try {
        const DatabaseInstance = await mongoose.connect(process.env.DB_URL_MONGODB);
        console.log(`Database instance: ${DatabaseInstance.connection.host}`);
    } catch (error) {
        console.log("DB CONNECTION FAILED", error);
    }
};

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
    DB_MONGODB();
});
