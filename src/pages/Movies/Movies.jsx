import { useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom"
import { getMoviesByName } from 'services/movies'
import MoviesList from 'components/MoviesList/MoviesList'
import Loader from 'components/Loader/Loader'

import { ReactComponent as IconSearch } from 'images/search_icon.svg'
import css from 'pages/Movies/Movies.module.css'


const Movies = () => { 
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchedMovies, setSearchedMovies] = useState([]);
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
        <section>
            <form onSubmit={handleSubmit}>
                <h1 className={css.title}>Find movies</h1>
                <div className={css.castomInputWrapper}>
                    <div className={css.castomInput}>
                        <input type='text' name='query' autoFocus placeholder='Start searching...' className={css.formInput} /> 
                        <button type='submit' className={css.button}>
                            <div className={css.iconWrapper}>
                                <IconSearch className={css.iconSearch} />
                            </div>
                        </button>
                    </div>
                </div>
            </form>

            {error && <h1>{error}</h1>}
            {isLoading ? <Loader /> :
                <>
                    {searchedMovies.results?.length > 0 &&
                        (<>
                            <h2 className={css.titleTwo}>Result of your request:</h2>
                            <MoviesList movies={searchedMovies.results} />
                        </>)
                    } 
                    {searchedMovies.results?.length === 0 &&
                        <p className={css.caption}>Movies haven't been found by your request.</p>
                    }
                </>
            }
        </section>
	)	
}


export default Movies
