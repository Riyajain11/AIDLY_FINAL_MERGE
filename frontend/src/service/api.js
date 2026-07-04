import axios from "axios";

const api = axios.create({
  baseURL: "https://aidly-final-merge.onrender.com/api",
});

export default api;

// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:3000/api",
// });

// export default api;