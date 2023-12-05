import axios from 'axios';

axios.defaults.baseURL = 'https://656e2fffbcc5618d3c24a7a8.mockapi.io/api/v1';

export const fetchOrder = async () => {
  const response = await axios.get('/order');
  return response.data;
};
