import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {connectDB} from "./Connection.js";
import {errorHandler} from "./Middleware/ErrorHandler.js";
import {userRouter} from "./Router/UserRoutes.js";
import {recipeRouter} from "./Router/RecipeRoutes.js";

dotenv.config();
const port=process.env.PORT || 3001;

connectDB();
const app=express();
//to parse the json data from 
app.use(express.json());

app.use(cors());

app.get("/", async (req, res) => {
    res.status(200).json({ message: "Server running correctly!" });
  });

  
app.use("/users", userRouter);
app.use("/recipe", recipeRouter);
app.use(errorHandler);


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});
