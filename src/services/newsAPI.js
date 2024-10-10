import axios from 'axios';


const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2/top-headlines?country=us';


export const fetchNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}&apiKey=${API_KEY}`);

    
    if (response && response.data && response.data.articles) {
      return response.data.articles; 
    } else {
      console.error('Response data is not in the expected format:', response);
      throw new Error('Invalid response format');
    }
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error; 
  }
};
