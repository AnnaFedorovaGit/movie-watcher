import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Typography } from '@mui/material'
import Zoom from '@mui/material/Zoom'
import HtmlTooltip from '@mui/material/Tooltip'

import defaultImage from 'images/default-image.jpg'
import { ReactComponent as IconInfo } from 'images/info_icon.svg'
import css from 'components/MoviesListItem/MoviesListItem.module.css'


const MoviesListItem = ({ movie, page }) => {
    const location = useLocation();
    const { id, title, poster_path, overview, name, vote_average, release_date } = movie;
    const imagePath = `https://image.tmdb.org/t/p/w500${poster_path}`;
        
    const CustomTooltip = () => {
        return (
            <HtmlTooltip TransitionProps={{ timeout: 500 }} TransitionComponent={Zoom} arrow title={
                <React.Fragment  >
                    <Typography color="inherit">{title}</Typography>
                    <br/>
                    <b>{'Overview: '}</b>
                    <p>{`  ''${overview}''`}</p>
                </React.Fragment>
                }
            >
            <div className={css.infoWrapper}>
                <IconInfo width='26px' height='26px'/>
            </div>
            </HtmlTooltip>
        )
    }
    
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
                {overview !== 0 && <CustomTooltip />}
                <p className={css.text}>{title} {release_date && `(${(release_date).slice(0, 4)})`}</p>
            </Link>
        </li>
    )
}


export default MoviesListItem;