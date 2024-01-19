import MoviesListItem from '../MoviesListItem/MoviesListItem'
import css from './MoviesList.module.css'


const MoviesList = ({ movies }) => {  

    return (
        <ul className={css.list}>
            {movies && movies.map((el, index) => <MoviesListItem movie={el} key={index} />)}
        </ul>
    )
}

        
export default MoviesList