import { create } from "apisauce";
// GET https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=dc7adf5c83414d9f83e7af9bf7483354

const api = create({
    baseURL: 'https://newsapi.org/v2',
});

const apiKey = '&apiKey=dc7adf5c83414d9f83e7af9bf7483354';

const getTopHeadline = api.get('/top-headlines' + apiKey);

const getByCategory = (category) => api.get(`/top-headlines?country=us&category=${category}${apiKey}`);

export default {
    getTopHeadline,
    getByCategory
};
