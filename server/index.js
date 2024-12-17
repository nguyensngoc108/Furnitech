const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');

dotenv.config();
const port = process.env.PORT || 5000;

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");  
const orderRoutes = require("./routes/orderRoutes");
const cartRoutes = require("./routes/cartRoutes");
const categoryRoutes = require("./routes/categoryRoutes");


const {connectDB} = require("./config/db");

const morgan = require("morgan");

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/categories", categoryRoutes);


app.listen(port, () => {
  console.log(`Listening on port ${port}...`);

});
