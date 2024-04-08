 const handleErrors = (err) => {
    let error={email:'',username:'', password:'', bigError:''}
    if(err.code===11000){
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