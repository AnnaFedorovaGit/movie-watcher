import { Suspense, useEffect, useRef, useState } from 'react'
import { Link, NavLink, useParams, useLocation, Outlet } from "react-router-dom";
import { getMovieDetails } from 'services/movies'
import Loader from 'components/Loader/Loader'
import ScrollToTop from 'components/ScrollToTop/ScrollToTop'

import { ReactComponent as IconArrow } from 'images/arrow_icon.svg'
import defaultImage from 'images/default-image.jpg'
import css from 'pages/MovieDetails/MovieDetails.module.css'


const MovieDetails = () => {
    const [movieData, setMovieData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { title, tagline, release_date, runtime, production_countries, budget, poster_path, vote_average, overview, genres } = movieData;
    const imagePath = `https://image.tmdb.org/t/p/w500${poster_path}`;

    const location = useLocation();
    const backLinkHref = useRef(location.state?.from ?? '/');
    // console.log(backLinkHref.current);
    // console.log(location);

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
        <section>
            {error && <h1>{error}</h1>}
            {isLoading ? <Loader /> :
                <>
                    {/* <Link to={backLinkHref.current.from} state={{ from: `?page=${page}` }}> */}
                    <div className={css.topTextWrapper}>
                        {/* <Link to={backLinkHref.current.from} state={{ from: `?page=${page}` }}> */}
                        <Link to={backLinkHref.current} className={css.link}>
                            <button className={css.button}><IconArrow className={css.icon} /></button> 
                        </Link>
                        <div className={css.titleInner}>
                            <h1 className={css.title}>{title}</h1>
                            {tagline && <p className={css.text}>{`''${tagline}''`}</p>}
                        </div>

                    </div>
                    <div className={css.inner}>
                        <img className={css.image} src={!poster_path ? defaultImage : imagePath} alt={title} width='230' height='345'/>
                        <div className={css.infoWrapper}>
                            <div className={css.line}></div>
                            <table className={css.table}>
                                <tbody>
                                    <tr>
                                        <th>User score</th>
                                        <th>{vote_average ? `${Math.round(10 * vote_average)}%` : '--'}</th>
                                    </tr>
                                    <tr>
                                        <th>Release year</th>
                                        <th>{release_date && (release_date.slice(0, 4))}</th>
                                    </tr>
                                    <tr>
                                        <th>Runtime:</th>
                                        <th>{runtime ? (`${Math.floor(runtime / 60)}h ${(runtime % 60) }m`) : '--'}</th>
                                    </tr>
                                    <tr>
                                        <th>Budget:</th>
                                        <th>{budget ? (`$ ${budget}`) : '--'}</th>
                                    </tr>
                                    <tr>
                                        <th>Genres</th>
                                        <th>{(genres?.length !== 0) ? (genres?.map(({ name }) => name).join(', ')) : '--'}</th>
                                    </tr>
                                    <tr>
                                        <th>Production countries:</th>
                                        <th>{(production_countries?.length !== 0) ? (production_countries?.map(({ name }) => name).join(', ')) : '--'}</th>
                                    </tr>
                                    <tr>
                                        <th>Overview</th>
                                        <th>{overview ? `''${overview}''` : '--'}</th>
                                    </tr>
                                    <tr>
                                        <th>Additional information</th>
                                        <th>
                                            <ul className={css.list}>
                                                <li><NavLink to='cast' className={css.item}>Cast</NavLink></li>
                                                <li><NavLink to='reviews'className={css.item}>Reviews</NavLink></li>  
                                            </ul>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={css.line}></div>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                    <ScrollToTop/>
                </>
            }
        </section>
    )
}


export default MovieDetails;