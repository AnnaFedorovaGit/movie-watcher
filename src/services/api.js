import axios from 'axios';


export const api = axios.create({
    baseURL: 'https://api.themoviedb.org',
    headers : 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzlkNDBlZmU0MDY0OTg1NDEzNGNmYjBjN2I3NDlhZCIsInN1YiI6IjY1OWVmNjk4ZmM1ZjA2MDBlZWMwNjhkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aIr7-CVGT2jT9DwLttfCYQotn2obDUZrLpp4n756NJ8'
})
