import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
// import productRoutes from './routes/productRoutes.js';
import partnerRoutes from "./routes/partnerRoutes.js";
import { adminRouter } from "./routes/AdminRoutes.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";
import cookieParser from "cookie-parser";
const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

// app.use("/api", productRoutes);
app.use("/api", partnerRoutes);
app.use("/auth", adminRouter);
app.use("/dashboard", authMiddleware, (req, res) => {
  res.send("this is dashboard page");
});

// const PORT = 5000;
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
