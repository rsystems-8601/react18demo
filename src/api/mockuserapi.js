import axios from "axios";
const BASE_URL = "http://localhost:7001";

const getList = () => 
axios.get(`${BASE_URL}/users/api/mock`);

const employeeAPI = {
  getList
}
export default employeeAPI;