import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/test';

export const getProducts = async (company, category, minPrice, maxPrice, top) => {
  const response = await axios.get(`${API_BASE_URL}/companies/${company}/categories/${category}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
  return response.data;
};