import axios from 'axios';

const api = axios.create({
    baseURL: !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ?  ' https://react.massivepixel.io/api/' : "productionURL",
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' },
  });




export default api;