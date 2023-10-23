import axios from 'axios'

//change the ip address according to the the ip address you have in your laptop

// ** To get your ip address, search up cmd, type ipconfig, and copy the ipv4 address
//better save this in a process.env file eg of the url
//'http://192.168.8.103:3000/';


// REMEMBER TO SAVE ANY VARIABLE IN ENV WITH EXPO_PUBLIC_PREFIX
const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
console.log("BASE URL ", BASE_URL);

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: false
})

export default instance;