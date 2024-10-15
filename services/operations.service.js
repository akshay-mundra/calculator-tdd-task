const {add, subtract, multiply, divide} = require("../common/")
const Operations = require("../models/operations.model.js")



// this function will hanlde the calculation based on the operator and call for save to db 
function handleCalculations(input1, input2, operator, email){

	let result;

	try{

		switch(operator){
			case "+":
				result = add(input1, input2);
				break;
			case '-':
				result = subtract(input1, input2);
				break;
			case '*':
				result = multiply(input1, input2);
				break;
			case '/':
				result = divide(input1, input2);
				break;

			default:
				return null;
		}

		saveCalculationToDb(input1, input2, operator, result, email);

		return result;

	}
	catch(err){
		console.log(err);
	}	

}

// this funciton will handle the save to db
function saveCalculationToDb(input1, input2, operator, result, email){
	
	const data = {
		input1,
		input2,
		operator,
		result,
		email
	}

	const operation = new Operations(data);
	operation.save();

}


// get past calculations for a user
async function getAllPastCalculations(email){
	try{
		const operations = await Operations.find({ email }).sort({timestamp: -1});
		return operations;
	}
	catch(err){
		console.log(err);
	}
}



// clear entry from db
async function removeSingleEntryFromDb(id){
		await Operations.deleteOne({_id: id});
}



// clear all Operations history for the user
async function removeAllEntryFromDb(email){
	await Operations.deleteMany({email});
}










module.exports = { handleCalculations, getAllPastCalculations, removeSingleEntryFromDb, removeAllEntryFromDb }