import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getReviews } from '../../services/movies';
import ReviewsItem from '../../components/ReviewsItem/ReviewsItem'
import ReviewsLack from '../../components/ReviewsLack/ReviewsLack'
import Loader from '../../components/Loader/Loader'

import css from './Reviews.module.css'

const Reviews = () => {
    const [reviewsData, setReviewsData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { movieId } = useParams();    

    useEffect(() => {
        const getMovieReviews = async () => {
            try {
                setIsLoading(true);
                const data = await getReviews(movieId);
                setReviewsData(data);
            } catch (error) {
            // change:
                setError(error);
            } finally { 
                setIsLoading(false);
            }
        }
        
        getMovieReviews();
    }, [movieId]) 

    return (
        <>
            {error && <h1>{error}</h1>}
            {isLoading ? <Loader /> :
                <>
                    {reviewsData.results?.length > 0 ? (
                        <ul className={css.gallery}>
                            {reviewsData.results?.map((el, index) => <ReviewsItem element={el} key={index} />)}
                        </ul>)
                        // < Outlet />  ???
                        :
                        <ReviewsLack />}
                </>
            }   
        </>
    )
}


export default Reviews;