const {validateEmail} = require("../validators/")


// extract email form auth headers and validate it 
function getEmailFromAuthHeader(req){
	const authorization = req.headers.authorization;

	const email = authorization.split(' ')[1];
	
	validateEmail(email);

	return email;

}



// common arithmetic operations
function add(input1, input2){
	return input1 + input2;
}


function subtract(input1, input2){
	return input1 - input2;
}


function multiply(input1, input2){
	return input1 * input2;
}

function divide(input1, input2){
	if(input2 === 0){
		throw new Error("Denominator must not be 0");
	}

	return (input1 / input2).toFixed(2);
}



module.exports = { getEmailFromAuthHeader, add, subtract, multiply, divide}