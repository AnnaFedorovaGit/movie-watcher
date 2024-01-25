import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';

import css from 'components/Layout/Layout.module.css'


const Layout = () => {
    return (
        <>
            <Header />
            <main className={css.main}>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
}


export default Layout;