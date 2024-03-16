function ValidationLogin(values){
    let error = {}
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    if(values.email===""){
        error.email = "Email should not be empty"
    }else if(!emailPattern.test(values.email)){
        error.email = "Email Didn't match"
    }else{
        error.email = ""
    }

    if(values.password===""){
        error.password = "Password should not be empty"
    }else if(!passwordPattern.test(values.password)){
        error.password = "Password didn't match"
    }else{
        error.password = ""
    }
    return error;
}
export default ValidationLogin;