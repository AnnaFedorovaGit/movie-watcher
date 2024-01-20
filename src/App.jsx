import { Suspense, lazy } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Loader from './components/Loader/Loader'
import NotFoundPath from './components/NotFoundPath/NotFoundPath'

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
            </header>        

            <Suspense fallback={ <Loader/> }>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/movies/*' element={<Movies/>}/>
                    <Route path='/movies/:movieId/*' element={<MovieDetails />} />
                    {/* add: */}
                    <Route path="*" element={<NotFoundPath />} />
                </Routes>
            </Suspense>
        </div>
    )
	
}


export default App