import { getTrendingMovies } from '../../services/movies'
import { useState, useEffect } from 'react'
import MoviesList from '../../components/MoviesList/MoviesList'
import Loader from '../../components/Loader/Loader'

import css from './Home.module.css'


const Home = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        getMovies();
    }, [])

    const getMovies = async () => { 
        try {
            setIsLoading(true);
            const response = await (getTrendingMovies())
            setMovies(response.results);
        } catch (error) {
            // change:
           setError(error);
        } finally { 
           setIsLoading(false);
        }
    }

    return (
        <section className={css.wrapper}>
            {error && <h1>{error}</h1>}
            {isLoading ? <Loader /> :
                <>
                    <h1 className={css.title}>Trending movies today:</h1>
                    <MoviesList movies={movies} />
                </>
            }
        </section>
    );
}


export default Home;
