const {validateEmail} = require('../validators/');
const { handleCalculations, getAllPastCalculations, clearLatestEntryFromDb, clearAllEntry } = require('../services/operations.service.js')


// POST
// URL - /api/operations
function calculate(req, res){

	try{

		const {input1, input2, operator} = req.body;
		const email = req.query.email;

		// validate email and inputs 
		validateEmail(email);

		if(typeof input1 !== "number" || typeof input2 !== "number"){
			throw new Error("Input must be number");
		}

		const result = handleCalculations(input1, input2, operator, email);

		if(!result){
			throw new Error("Operator must be one of +, -, * and /")
		}

		res.status(200).json({ data: { result, input1, input2 } });
	}

	catch(err){
		console.log(err.message);
		res.status(400).json({message: err.message})
	}
}


// GET

async function showHistory(req, res){
	try{
		const email = req.query.email;

		validateEmail(email);

		const pastCalculations = await getAllPastCalculations(email);
		res.status(200).json({"data": pastCalculations})
	}
	catch(err){
		console.log(err.message);
		res.status(400).json({message: err.message})
	}
}



// DELETE
async function clearSingleEntry(req, res){
	const {email, type:clearType } = req.query;

	try{

		validateEmail(email);


		res.status(200).json({message: `${clearType} cleared`})

	}
	catch(err){
		console.log(err.message);
		res.status(400).json({message: err.message})
	}
}


module.exports = { calculate, showHistory, clearSingleEntry }


