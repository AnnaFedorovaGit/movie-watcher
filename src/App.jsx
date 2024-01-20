import { Suspense, lazy } from 'react'
import { NavLink, Route, Routes, Outlet } from 'react-router-dom'
import Loader from './components/Loader/Loader'

import css from './App.module.css'

const Home = lazy(() => import('./pages/Home/Home'))
const Movies = lazy(() => import('./pages/Movies/Movies'))
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'))


const App = () => {
    return (
        <div className={css.wrapper}>
            <header>
                <nav className={css.navigation}>
                    <NavLink className={({ isActive }) => `${css['headerLink']} ${isActive ? css.active : ''}`} to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => `${css['headerLink']} ${isActive ? css.active : ''}`} to='/movies'>Movies</NavLink>
                </nav>
                <Outlet />
            </header>        

            <Suspense fallback={ <Loader/> }>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/movies/*' element={<Movies/>}/>
                    <Route path='/movies/:movieId/*' element={<MovieDetails />} />
                    {/* add: */}
                    {/* <Route path="*" element={<NotFound />} /> */}
                </Routes>
            </Suspense>
        </div>
    )
	
}


export default App