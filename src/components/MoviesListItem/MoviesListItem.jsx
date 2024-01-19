import { Link, useLocation } from 'react-router-dom'
import css from './MoviesListItem.module.css'

const MoviesListItem = ({ movie }) => {
    const location = useLocation();
    
    return (
        <li className={css.galleryItem} key={movie.id} >
            <Link state={{ from: location}} to={`/movies/${movie.id}`}>
                <p className={css.text}>{movie.title}</p>
            </Link>
        </li>
    )
}

export default MoviesListItem;