import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getCast } from '../../services/movies';
import CastItem from '../../components/CastItem/CastItem'
import Loader from '../../components/Loader/Loader'

import css from './Cast.module.css'

const Cast = () => {
    const [castData, setCastData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { cast } = castData;
    const { movieId } = useParams();    
    
    useEffect(() => {
        const getMovieCast = async () => {
            try {
                setIsLoading(true);
                const data = await getCast(movieId);
                setCastData(data);
            } catch (error) {
            // change:
                setError(error);
            } finally { 
                setIsLoading(false);
            }
        }

        getMovieCast();
     }, [movieId]) 

    return (
        <>
            {error && <h1>{error}</h1>}
            {isLoading ? <Loader /> :
                <ul className={css.gallery}>
                    {cast?.map((el, index) => <CastItem element={el} key={index} />)}
                    {/* <Outlet />   ??? */}
                </ul>
            }
        </>
    )
}


export default Cast;