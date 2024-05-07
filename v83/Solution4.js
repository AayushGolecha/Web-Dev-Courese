// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

const psdValidator=(psd)=>{
    // let pattern = new RegExp( 
    //     "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    // ); 
    // if (pattern.test(psd)) {

    //     return `Password format is correct`; 
    // }
    // else{

    //     return `Password format is not correct`;
    // }
    let numbers = /[0-9]/g;
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    
    if(psd.length>=8 && /\d/.test(psd) && /[a-z]/.test(psd) && /[A-Z]/.test(psd)){
        return "Password follow all rules"
    }
    else{
        return "Password is not following all rules"
    }
}

let psd="Rahul555"
console.log(psdValidator(psd))
console.log(psdValidator("rahul555"))
console.log(psdValidator("Rahulaaa"))
console.log(psdValidator("RAHUL666"))