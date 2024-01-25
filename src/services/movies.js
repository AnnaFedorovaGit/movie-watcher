import { api } from './api'

const API_KEY = '6c9d40efe40649854134cfb0c7b749ad';

export const getTrendingMovies = async (page) => { 
    const { data } = await api(`3/trending/movie/day?page=${page}&language=en-US&api_key=${API_KEY}`)
    return data
}

export const getMovieDetails = async (movieId) => { 
    const { data } = await api(`3/movie/${movieId}?language=en-US&api_key=${API_KEY}`)
	return data
}

export const getCast = async (movieId) => { 
    const { data } = await api(`3/movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`)
	return data
}

// add query params - page ? 

export const getReviews = async (movieId) => { 
    const { data } = await api(`3/movie/${movieId}/reviews?language=en-US&page=1&api_key=${API_KEY}`)
	return data
}

export const getMoviesByName = async (query) => { 
    const { data } = await api(`3/search/movie?include_adult=false&language=en-US&page=1&query=${query}&api_key=${API_KEY}`)
	return data
}
