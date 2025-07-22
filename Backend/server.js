import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
import { connectDB }from './config/db.js';
import userRoutes from './routes/userRoute.js';


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



app.use('/api/todo',userRoutes)

