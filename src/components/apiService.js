import axios from 'axios';

const BASE_URL = 'https://api1.cognise.art/api/mobile';

const fetchInspiration = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/assessment`, {
      params: {
        pagination: 50,
        hit_point: 'mobile'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching inspiration:', error);
    throw error;
  }
};

export { fetchInspiration };
