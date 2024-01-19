import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import { Link, NavLink, Route, Routes, useParams, useLocation } from "react-router-dom";
import { getMovieDetails } from '../../services/movies'
import Loader from '../../components/Loader/Loader'

import defaultImage from '../../images/default-image.jpg'
import css from './MovieDetails.module.css'

const Cast = lazy(() => import('../Cast/Cast'))
const Reviews = lazy(() => import('../Reviews/Reviews'))


const MovieDetails = () => {
    const [movieData, setMovieData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { title, poster_path, vote_average, overview, genres } = movieData;
    const INIT_PATH_IMAGE = 'http://image.tmdb.org/t/p/w500';

    const location = useLocation();
    const backLinkHref = useRef(location.state?.from ?? '/');

    const { movieId } = useParams();

    useEffect(() => {
        const getMovies = async () => {
            try {
                setIsLoading(true);
                const data = await getMovieDetails(movieId);
                setMovieData(data);
            } catch (error) {
            // change:
                setError(error);
            } finally { 
                setIsLoading(false);
            }
        }
        
        getMovies();
    }, [movieId]);

    return (
        <section className={css.wrapper}>
            {error && <h1>{error}</h1>}
            {isLoading ? <Loader /> :
                <>
                    <Link to={backLinkHref.current}>
                        <button>Go back</button> 
                    </Link>
                    <div className={css.inner}>
                        <img className={css.image} src={(poster_path === null) ? defaultImage: (INIT_PATH_IMAGE + poster_path)} alt={title} width='300' height='450'/>
                        <div className={css.infoWrapper}>
                            <h1 className={css.title}>{title}</h1>
                            <p className={css.textAverage}>User score: {vote_average ? vote_average : 'no ratings'}</p>
                            <ul className={css.list}>
                                <li>
                                    <p className={css.textName}>Overview:</p>
                                    <p className={css.text}>{overview ? overview : 'overview is not specified'}</p>
                                </li>
                                <li>
                                    <p className={css.textName}>Genres:</p>
                                    <p className={css.text}>{(genres?.length !== 0) ? (genres?.map(({ name }) => name).join(', ')) : 'genres are not specified'}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className={css.title}>Additional information</h2>
                        <ul className={css.listLinks}>
                            <li><NavLink to='cast' className={css.text}>Cast</NavLink></li>
                            <li><NavLink to='reviews' className={css.text}>Reviews</NavLink></li>  
                        </ul>
                    </div>
                </>
            }

            <Suspense fallback={ <Loader/> }>
                <Routes>
                    <Route path='cast' element={<Cast/>}/>
                    <Route path='reviews' element={<Reviews/>}/>
                </Routes>
            </Suspense>
        </section>
    )
}


export default MovieDetails;