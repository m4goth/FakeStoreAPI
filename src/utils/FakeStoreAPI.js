// comunicação com api
import axios from "axios";

    const api = axios.create({
        baseURL: "https://fakestoreapi.com/products/",
    });    

export default api;

    // constructor () {     
    //     // this.api = axios.create({ baseURL: 'https://fakestoreapi.com/products/', })
    //     axios.get('https://fakestoreapi.com/products/',)
    //     .then(response => {
    //         const data = response.data;
    //     })
    //     .catch(error => console.log(error))
    // }