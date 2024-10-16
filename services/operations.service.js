const {add, subtract, multiply, divide} = require("../helpers/")
const Operation = require("../models/operations.model.js")



// this function will hanlde the calculation based on the operator and call for save to db 
async function handleCalculations(input1, input2, operator, email){

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

		const data = {
			input1,
			input2,
			operator,
			result,
			email
		}

		const operation = new Operation(data);
		await operation.save();

		return result;

	}
	catch(err){
		/* istanbul ignore next */
		console.log(err);
		/* istanbul ignore next */
		throw new Error(err.message);
	}

}


// get past calculations for a user
async function getAllPastCalculations(email){
	return await Operation.find({ email }).sort({timestamp: -1});
}



// clear entry from db
async function removeSingleEntryFromDb(id){
	await Operation.deleteOne({_id: id});
}



// clear all Operations history for the user
async function removeAllEntryFromDb(email){
	await Operation.deleteMany({email});
}




module.exports = { handleCalculations, getAllPastCalculations, removeSingleEntryFromDb, removeAllEntryFromDb }