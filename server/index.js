import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // Import the cors package
const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

import { connectDB } from "./config/db.js";

import morgan from "morgan";

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use("/api/countries", countryRoute);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
