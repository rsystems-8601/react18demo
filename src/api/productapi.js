const setHeader = (token) => {
  axios.defaults.headers = {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    'X-Request-Type': 'COSMOS',
    'Access-Control-Allow-Origin': '*'
    // "Access-Control-Allow-Headers":
    //   "Origin, X-Requested-With, Content-Type, Accept",
    // " Accept-Language": "en-US",
  };
  if (token) axios.defaults.headers['Authorization'] = `Bearer ${token}`;
};