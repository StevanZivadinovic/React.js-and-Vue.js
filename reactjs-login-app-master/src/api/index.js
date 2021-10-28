import Axios from "axios";

// axios.defaults.baseURL = 'http://localhost:3001/';
Axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/todos';//sa ovim probnim url-om radi, ne znam sto pravi problem sa pravim url-om
Axios.defaults.headers.common['Authorization'] = "9157bc44-2230-4831-a2b4-646ba039c03b";
Axios.defaults.headers.common['Content-Type'] = 'application/json';

