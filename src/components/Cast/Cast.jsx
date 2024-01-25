import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { getCast } from 'services/movies'
import CastItem from 'components/CastItem/CastItem'
import Loader from 'components/Loader/Loader'
import NoInformation from 'components/NoInformation/NoInformation'
import Button from 'components/Button/Button'

import css from 'components/Cast/Cast.module.css'

const Cast = () => {
    const [castData, setCastData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    // 
    // const [castArrays, setCastArrays] = useState([]);
    // const [page, setPage] = useState(1);
    // const [totalPages, setTotalPages] = useState(0);
    // 

    const { cast } = castData;
    const { movieId } = useParams();    

    // function chunkArray(cast, chunk) {
    //     const newArray = [];
    //     for (let i = 0; i < cast?.length; i += chunk) {
    //         newArray.push(cast?.slice(i, i + chunk));
    //     }
    //     return newArray;
    // }
    // const res = chunkArray(cast, 10);
    
    // console.log(res);
    // console.log(cast?.length);

     

    

    // const handleLoadAll = () => { 
    //     setPage((prev) => prev + 1)
    // }
    
    useEffect(() => {
        const getMovieCast = async () => {
            try {
                setIsLoading(true);
                const data = await getCast(movieId);
                setCastData(data);
                // 
                // setCastArrays((prev) => page > 1 ? [...prev, ...response.hits] : response.hits);
                // setTotalPages(Math.ceil(response.totalHits / 12));
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
                <>  
                    <h2 className={css.title}>Cast</h2>
                    {cast?.length > 0 ? (
                        <ul className={css.gallery}>
                            {cast?.map((el, index) => <CastItem element={el} key={index} />)}
                        </ul>) :
                        <NoInformation />}
                    
                    {/*  */}
                    {/* {totalPages > 1 && page !== totalPages && <Button handleLoadAll={handleLoadAll} />} */}
                </>
            }
        </>
    )
}


export default Cast;