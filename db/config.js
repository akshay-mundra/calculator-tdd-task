
const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/calculator');
}

function connectDb(){
	main().then(() => console.log("Db connected")).catch(err => console.log(err));
}


module.exports = {connectDb}