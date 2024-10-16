const { handleCalculations, getAllPastCalculations, removeSingleEntryFromDb, removeAllEntryFromDb} = require('../services/operations.service.js')
const { getEmailFromAuthHeader } = require("../helpers/")


// perform the operation and save to db
async function createOperation(req, res){

	try{

		const email = getEmailFromAuthHeader(req);

		const {input1, input2, operator} = req.body;


		if(typeof input1 !== "number" || typeof input2 !== "number"){
			throw new Error("Input must be number");
		}
		
		const result = await handleCalculations(input1, input2, operator, email);

		if(result === null){
			throw new Error("Operator must be one of +, -, * and /")
		}

		res.status(201).json({ data: { result, input1, input2 } });
	}

	catch(err){
		console.log(err.message);
		res.status(400).json({message: err.message})
	}
}


// get the list of prev operations

async function getOperations(req, res){
	try{
		const email = getEmailFromAuthHeader(req);
		const pastCalculations = await getAllPastCalculations(email);
		res.status(200).json({"data": pastCalculations})
	}
	catch(err){
		console.log(err.message);
		res.status(400).json({message: err.message})
	}
}



// delete single entry from history
async function removeOperation(req, res){

	const id = req.params.id

	try{
		const email = getEmailFromAuthHeader(req);
		await removeSingleEntryFromDb(id);
		res.status(200).json({message: `deleted ${id}`})
	}
	catch(err){
		/* istanbul ignore next */
		console.log(err.message);
		/* istanbul ignore next */
		res.status(400).json({message: err.message})
	}
}




// delete single entry from history
async function removeOperations(req, res){

	try{
		const email = getEmailFromAuthHeader(req);
		await removeAllEntryFromDb(email)
		res.status(200).json({message: `All entries deleted for ${email}`})
	}
	catch(err){
		/* istanbul ignore next */
		console.log(err.message);
		/* istanbul ignore next */
		res.status(400).json({message: err.message})
	}
}






module.exports = { createOperation, getOperations, removeOperation, removeOperations}


