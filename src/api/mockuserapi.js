import axios from "axios";
const BASE_URL = "http://15.207.254.188/:7001";

const getList = () => 
axios.get(`${BASE_URL}/users/api/mock`);

const employeeAPI = {
  getList
}
export default employeeAPI;