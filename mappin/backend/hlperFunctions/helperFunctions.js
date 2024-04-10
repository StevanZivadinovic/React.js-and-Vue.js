 const handleErrors = (err) => {
    let error={email:'',username:'', password:'', bigError:''}

    if(err.message==='User not found!'){
      error.bigError='User not found!'
    }
    if(err.message==='Wrong username or password!'){
      error.bigError='Wrong username or password!'
    }
    if(err.code===11000 || err.message==='Already in use!'){
      error.bigError="User already exist!"
    }
    if (err?.message.includes('User validation failed')) {
      Object.values(err?.errors).forEach(({properties}) => {
        error[properties.path]=properties.message
      });
    }
    return error;
  };
module.exports = {handleErrors};