import css from 'components/ReviewsItem/ReviewsItem.module.css'

const ReviewsItem = ({ element }) => {
    
    return (
        <li>
            <p className={css.caption}>Author: {element.author}</p>
            <p className={css.text}>{element.content}</p>
        </li>
    )
}


export default ReviewsItem;