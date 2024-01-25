import defaultPersonImage from 'images/default-person-image.jpg'
import css from 'components/CastItem/CastItem.module.css'

const CastItem = ({ element }) => {
    const INIT_PATH_IMAGE = 'https://image.tmdb.org/t/p/w500';
    
    return (
        <li className={css.item}>
            <img className={css.image} src={(element.profile_path === null) ? defaultPersonImage : (INIT_PATH_IMAGE + element.profile_path)} alt={element.name} width='170' height='255' />
            <div className={css.textWrapper}>
                <p className={css.text}>{element.original_name}</p>
            </div> 
        </li>
    )
}


export default CastItem;