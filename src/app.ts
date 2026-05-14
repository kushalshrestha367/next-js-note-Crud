import express from 'express';
import cors from 'cors';
import globalErrorHandling from './middlewares/globalErrorHandling.js';
import noteRoute from './note/noteRoute.js';
import envConfig from './config/config.js';

const app = express();
// Middleware
app.use(express.json());

//cors
app.use(cors({
    origin: envConfig.frontendUrl,
}))

// Routes
app.use("/api/notes/",noteRoute);
// Static files
app.use(express.static("./src/uploads"));
app.use(globalErrorHandling); 


export default app;