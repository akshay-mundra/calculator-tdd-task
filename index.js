const express = require('express');
const {connectDb} = require("./db/config.js")
const mongoose = require('mongoose')

const app = express();

const PORT = process.env.PORT || 3000;


connectDb(); // connect to db

app.use(express.json());


app.use('/api', require('./routes/operations.route.js'))


app.listen(PORT, () => {
	console.log(`Server is running on port : ${PORT}`);
})


module.exports = app;