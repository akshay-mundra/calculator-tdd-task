
// extract email form auth headers and validate it 
function getEmailFromAuthHeader(req){
	const email = req.headers?.email;
	
	
	if(!email) {
        throw new Error("Email not defined");
    }

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        throw new Error("Invalid Email")
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
		throw new Error("Denominator must not be 0");
	}

	return (input1 / input2).toFixed(2);
}



module.exports = { getEmailFromAuthHeader, add, subtract, multiply, divide}