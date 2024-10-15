const express = require('express');
const {connectDb} = require("./db/config.js")
const mongoose = require('mongoose')

const app = express();

const PORT = process.env.PORT || 3000;


app.use(express.json());





app.listen(PORT, () => {
	console.log(`Server is running on port : ${PORT}`);
})


module.exports = app;