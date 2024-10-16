
// custom error handler
function customError(description, statusCode=400){
	const error = new Error(description);
	error.statusCode = statusCode;
	throw error;
}


// extract email form auth headers and validate it 
function getEmailFromAuthHeader(req){
	const email = req.headers?.email;
	
	
	if(!email) {
        // throw new Error("Email not defined");
        customError("Email not defined", 400);
    }

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        customError("Invalid Email", 400);
    }

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
		customError("Denominator must not be 0", 400)
	}
	return (input1 / input2).toFixed(2);
}



module.exports = { getEmailFromAuthHeader, add, subtract, multiply, divide, customError}