import axios from "axios";

 const checkIfUserIsLogedIn=(setIsLoggedIn, setLoading)=>{
    axios.get('http://localhost:8081/check-login')
      .then(response => {
        console.log(response.data.isLoggedIn)
        setIsLoggedIn(response.data.isLoggedIn);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error checking login status:', error);
        setLoading(false);
      });
}
export default checkIfUserIsLogedIn;