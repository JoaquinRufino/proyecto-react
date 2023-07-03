import axios from "axios";

export const customAxios = axios.create({
  baseURL: "http://localhost:5000/products",
  headers: { 
  Authorization: "dasdadad", 
  "Content-Type": "application/json",
},
});
