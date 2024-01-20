import css from './NotFoundPath.module.css'

const NotFoundPath = () => {
    
    return (
        <p className={css.text}>Ooops, the route you took doesn't exist. Please, go to page "Home" or "Movies".</p>
    )
}


export default NotFoundPath;