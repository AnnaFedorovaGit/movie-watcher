import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import { getMoviesByName } from '../../services/movies';
import MoviesList from '../../components/MoviesList/MoviesList'
import Loader from '../../components/Loader/Loader'

import { ReactComponent as IconSearch } from "../../images/search.svg";
import css from './Movies.module.css'


const Movies = () => { 
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchedMovies, setSearchedMovies] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const query = searchParams.get('query');

    useEffect(() => {
        if (!query) return;

        const getMoviesByNameList = async () => {
            try {
                setIsLoading(true);
                const data = await getMoviesByName(query);
                setSearchedMovies(data);
            } catch (error) {
            // change:
                setError(error);
            } finally { 
                setIsLoading(false);
            }
        }
    
        getMoviesByNameList();
     }, [query]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const searchMovies = e.currentTarget.elements.query.value;
        if (!searchMovies) return;
        setSearchParams({ query: searchMovies });
        e.target[0].value = '';
    }
        
    return (
        <section className={css.wrapper}>
            <form onSubmit={handleSubmit} className={css.form}>
                <div className={css.wrapper}>
                    <label className={css.formLabel}>
                        Find movie
                    </label>
                    <input type='text' name='query' className={css.formInput} /> 
                </div>
                <button type='submit' className={css.button}>
                    <IconSearch className={css.iconSearch} />
                </button>
            </form>

            {error && <h1>{error}</h1>}
            {isLoading ? <Loader /> :
                <>
                    {searchedMovies.results?.length > 0 &&
                        (<>
                            <h1 className={css.title}>Movies by your request:</h1>
                            <MoviesList movies={searchedMovies.results} />
                        </>)

                        // <h2>We don't have any movies for your request.</h2>
                    }
                </>
            }
        </section>
	)	
}


export default Movies
