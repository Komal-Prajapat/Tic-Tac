import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
// import productRoutes from "./routes/productRoutes.js";

dotenv.config(); 



const app = express();

app.use(express.json()); 
app.use(cors()); 

// API Routes
app.use("/api/users", userRoutes);
// app.use("/api/products", productRoutes);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const connectToMongo = async () => {
  try {
    const mongoURI = "mongodb+srv://komalprajapat267:1SqXaaRyOH1STqSt@komal.fjcbbzw.mongodb.net/"; 
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); 
  }
};

connectToMongo();