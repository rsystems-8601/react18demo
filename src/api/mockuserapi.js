import axios from "axios";
const BASE_URL = "http://localhost:7001";
// const apiUrl = process.env.NODE_ENV !== 'production' ?
//  'http://localhost:7001' : process.env.REACT_APP_API_URL;
//  alert(process.env.REACT_APP_API_URL)
const getList = () => 
axios.get(`${process.env.REACT_APP_API_URL}/users/api/mock`);

const employeeAPI = {
  getList
}
export default employeeAPI;