

// reeturn true if email is valid and throw error otherwise.
function validateEmail(email) {

    if(!email) {
        throw new Error("Email not defined");
    }

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        throw new Error("Invalid Email")
    }

    return true;
}



module.exports = {validateEmail}