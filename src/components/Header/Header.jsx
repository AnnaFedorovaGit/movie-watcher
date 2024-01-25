import { NavLink } from 'react-router-dom'

import css from 'components/Header/Header.module.css'


const Header = () => {
    return (
        <header>
            <div className={css.wrapper}>
                <nav className={css.navigation}>
                    <NavLink className={({ isActive }) => `${css['headerLink']} ${isActive ? css.active : ''}`} to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => `${css['headerLink']} ${isActive ? css.active : ''}`} to='/movies'>Movies</NavLink>
                </nav>
            </div>
        </header>
    )
}


export default Header;