const express = require('express');
const loginRoute = require('./routes/login.js');
const mongoose = require("mongoose");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors")
const app = express();

app.use(cors())
app.use(express.json());
app.use("/", loginRoute);

mongoose
    .connect((process.env.DB_URI || "mongodb+srv://rnishant609:mzU6wALxPdtEi1uw@cluster0.denkz7y.mongodb.net/react-native_login"))
    .then(() => console.log("MongoDB is connected"))
    .catch((err) => console.log(err.message));

app.use(errorHandler); //middleware for error

app.listen(process.env.PORT || 4000, () => {
    console.log(`server is running on ${process.env.PORT || 4000}`);
});