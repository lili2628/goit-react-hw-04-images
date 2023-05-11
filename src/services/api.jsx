const URL = 'https://pixabay.com/api/';
const BASE_KEY = '33857363-bdd91af921483c20a6a440946';

function apiSearchQuery(query, page) {
  return fetch(`${URL}?q=${query}&page=${page}&key=${BASE_KEY}&image_type=photo&orientation=horizontal&per_page=12`).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error(`Did not find anything by request ${query}`)
    );
  });
}

const api = {
  apiSearchQuery,
}

export default api;