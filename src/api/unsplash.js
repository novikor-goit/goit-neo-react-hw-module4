import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers.common.Authorization = `Client-ID ${
  import.meta.env.VITE_UNSPLASH_ACCESS_KEY
}`;
axios.defaults.params = {
  'Accept-Version': 'v1',
  per_page: 12
};

class Unsplash {
  static async search(query, page = 1) {
    const cacheKey = `unsplash_search_${query}_page_${page}`;
    const cachedData = sessionStorage.getItem(cacheKey);

    if (cachedData) {
      return JSON.parse(cachedData);
    }

    const response = await axios.get('/search/photos', {
      params: {
        query,
        page
      }
    });

    sessionStorage.setItem(cacheKey, JSON.stringify(response.data));

    return response.data;
  }
}

export default Unsplash;
