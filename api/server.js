import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // Assuming you have a separate function for connecting MongoDB
import cors from 'cors';
import newsRouter from './routes/news.routes.js';
import userRouter from './routes/user.routes.js';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
app.use(express.json()); // Middleware to parse JSON

const corsOptions = {
    origin: process.env.FRONTEND_URL || 'https://newscope-sjmt.vercel.app/', // Use environment variable for frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    credentials: true, // Allow credentials (e.g., cookies) to be sent
};

app.use(cors(corsOptions));

// MongoDB connection using environment variable
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Use routes
app.use("/api/v1/news", newsRouter);
app.use("/api/v1/user", userRouter);
// Ensure adminRouter is imported and used
import adminRouter from './routes/admin.routes.js'; // Adjust path as necessary
app.use("/api/v1/admin", adminRouter);

app.get("/", (req, res) => {
    res.json("Hello");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
