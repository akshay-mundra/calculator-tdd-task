const express = require('express');
const {connectDb} = require("./db/database.js")
const mongoose = require('mongoose')
const dotenv = require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;


connectDb(); // connect to db

app.use(express.json());


app.use('/api/operations', require('./routes/operations.route.js'))


app.listen(PORT, () => {
	console.log(`Server is running on port : ${PORT}`);
})


module.exports = app;