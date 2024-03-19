import axios from "axios";

 const checkIfUserIsLogedIn=(setIsLoggedIn:React.Dispatch<React.SetStateAction<boolean>>, setLoading:React.Dispatch<React.SetStateAction<boolean>>)=>{

    axios.get('http://localhost:8081/check-login')
      .then(response => {
        console.log(response)
        const checkIfUserLogedIn = response?.data[0]?.id===sessionStorage.getItem('token2');
        setIsLoggedIn(checkIfUserLogedIn);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error checking login status:', error);
        setLoading(false);
      });
}
export default checkIfUserIsLogedIn;