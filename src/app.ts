import express from 'express';
import globalErrorHandling from './middlewares/globalErrorHandling.js';
import noteRoute from './note/noteRoute.js';

const app = express();

app.use(express.json());
app.use("/api/notes/",noteRoute);
app.use(express.static("./src/uploads"));
app.use(globalErrorHandling); 


export default app;