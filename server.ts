import app from '../backend/src/app.js'
import envConfig from './src/config/config.js';
import connectDB from './src/config/db.js';


const startServer = async () => {
    await connectDB();
    const port = envConfig.port || 4000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

startServer();