import MoviesListItem from 'components/MoviesListItem/MoviesListItem'
import css from 'components/MoviesList/MoviesList.module.css'


const MoviesList = ({ movies, page }) => {  

    return (
        <ul className={css.list}>
            {movies && movies.map((el, index) => <MoviesListItem movie={el} page={page} key={index} />)}
        </ul>
    )
}

        
export default MoviesList