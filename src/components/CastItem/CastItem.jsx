import defaultPersonImage from '../../images/default-person-image.jpg'
import css from './CastItem.module.css'

const CastItem = ({ element }) => {
    const INIT_PATH_IMAGE = 'http://image.tmdb.org/t/p/w500';
    
    return (
        <li>
            <img className={css.image} src={(element.profile_path === null) ? defaultPersonImage : (INIT_PATH_IMAGE + element.profile_path)} alt={element.name} width='220' height='330'/>
            <p className={css.text}>{element.original_name}</p>
        </li>
    )
}


export default CastItem;