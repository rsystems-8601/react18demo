import axios from 'axios';

axios.interceptors.request.use(function (config) {
  const token = '22222'; //store.getState().session.token;
  config.headers.Authorization =  token;
  config.headers.common = {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };
  return config;
});

// const apiUrl = process.env.NODE_ENV !== 'production' ?
//  'http://localhost:7001' : process.env.REACT_APP_API_URL;
//  alert(process.env.REACT_APP_API_URL)
const getList = () => axios.get(`${process.env.REACT_APP_API_URL}/users/api/mock`);

const getLoginToken = (payload) => axios.post(`${process.env.REACT_APP_API_URL}/users/api/getLoginToken`, payload);

const employeeAPI = {
  getList,
  getLoginToken
};
export default employeeAPI;
