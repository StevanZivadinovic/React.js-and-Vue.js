import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.headers.common['Authorization'] = "9157bc44-2230-4831-a2b4-646ba039c03b";
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.baseURL = process.env.baseURL;
console.log(axios)