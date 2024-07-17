import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {connectDB} from "./src/Connection.js";
import {errorHandler} from "./src/Middleware/ErrorHandler.js";
import {userRouter} from "./src/Router/UserRoutes.js";
import {recipeRouter} from "./src/Router/RecipeRoutes.js";

dotenv.config();
const port=process.env.PORT || 3001;

//connectDB();
const app=express();
//to parse the json data from 
app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get("/health", async (req, res) => {
    res.status(200).json({ message: "Health !" });
  });

//app.use("/users", userRouter);
//app.use("/recipe", recipeRouter);
//app.use(errorHandler);


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});
