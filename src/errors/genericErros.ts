import {messageError} from "../protocols/movies.js"

function conflitctError(message:string) : messageError {  
    return {      
        name:"ConflictError",
        message,
    }

}

function duplicatedEmailError(email:string) : messageError {
    return {
        name:"DuplicatedEmailError",
        message: "There is already an user with given email",
        email,
    }
}

function unathorizedError(): messageError {
      return {
        name: "UnauthrizedError",
        message:"You must be signed in to continue"
    }
}

function notFoundError(): messageError {
    return {
      name: "NotFoundError",
      message: "No result for this search!",
    };
  }
  
  function invalidCredentialsError() : messageError {
    return {
      name: "InvalidCredentialsError",
      message: "Email or password are incorrect",
    };
  }
  

export default{
    conflitctError, 
    duplicatedEmailError,
    unathorizedError,
    notFoundError,
    invalidCredentialsError
}