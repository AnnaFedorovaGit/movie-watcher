import { Link, useLocation } from 'react-router-dom'
import Zoom from '@mui/material/Zoom'
import { styled } from '@mui/material/styles'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'

import css from 'components/MoviesListItem/MoviesListItem.module.css'
import defaultImage from 'images/default-image.jpg'
import { ReactComponent as IconInfo } from 'images/info_icon.svg'


const MoviesListItem = ({ movie, page }) => {
    const location = useLocation();
    const { id, title, poster_path, overview, name, vote_average, release_date } = movie;
    const imagePath = `https://image.tmdb.org/t/p/w500${poster_path}`;
 
    const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
        <Tooltip {...props} classes={{ popper: className }} />
        ))({
            [`& .${tooltipClasses.tooltip}`]: {
                backgroundColor: '#ffffff',
                color: 'var(--primary-dark-color)',
                lineHeight: '137%',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '15px',
                border: '1px solid var(--primary-dark-color)',
                boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
            },
    });
    
    return (
        <li className={css.galleryItem} key={id} >
            <Link state={{ from: location }} to={`/movies/${id}/?page=${page}`}>
                <div className={css.imageWrapper}>
                    <img className={css.image} src={!poster_path ? defaultImage : imagePath} alt={name} width='215' height='320' />
                </div>
                <div className={css.ratingWrapper}>
                    {vote_average !== 0 ?
                        (<p className={css.ratingText}>{vote_average && Math.round(10 * vote_average)}<span className={css.ratingPersent}>%</span></p>) :
                        (<p className={css.ratingText}>N/A</p>)}                    
                </div>
                {overview !== 0 &&
                    (<>
                    <CustomTooltip TransitionComponent={Zoom} title={overview} placement="top-start">
                        <div className={css.infoWrapper}>
                            <IconInfo width='26px' height='26px'/>
                        </div>
                        </CustomTooltip>
                    </>)
                }
                <p className={css.text}>{title} {release_date && `(${(release_date).slice(0, 4)})`}</p>
            </Link>
        </li>
    )
}


export default MoviesListItem;