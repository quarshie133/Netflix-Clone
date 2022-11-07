import axios from "axios";



const instance = axios.create({
  baseURL:
    "https://api.themoviedb.org/3",
});

// const instance = axios.create({
//    baseURL: "https://api.themoviedb.org/3",
// });


// https://nextflix-clone-901e1.web.app/



export default instance
