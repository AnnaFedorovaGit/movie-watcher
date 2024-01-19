import css from './ReviewsItem.module.css'

const ReviewsItem = ({ element }) => {
    
    return (
        <li>
            <p className={css.text}>Author: {element.author}</p>
            <p className={css.text}>{element.content}</p>
        </li>
    )
}


export default ReviewsItem;