import { create } from "apisauce";

const api = create({
    baseURL: 'https://newsapi.org/v2',

    // 
  })
  const apiKey='?country=us&apiKey=dc7adf5c83414d9f83e7af9bf7483354'
const getTopHeadline=api.get('/top-headlines'+apiKey)
export default {
    getTopHeadline
}
