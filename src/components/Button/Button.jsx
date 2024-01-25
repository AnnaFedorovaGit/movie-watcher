import css from './Button.module.css'


const Button = ({handleLoadAll}) => {    
    return(
        <>
            <button type='button' className={css.button} onClick={handleLoadAll}>Load all</button>
        </>
    )
}


export default Button;