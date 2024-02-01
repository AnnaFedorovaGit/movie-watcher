import { useEffect, useState } from 'react'

import { ReactComponent as IconArrow } from 'images/arrow_tick_icon.svg'
import css from './ScrollToTop.module.css'


const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div>
            {isVisible && (
                <button className={css.scrollToTopBtn} type="button" onClick={handleScrollToTop}>
                    <IconArrow className={css.arrow} width="15" height="15"/>
                </button>
            )}
        </div>
    );
}


export default ScrollToTop;
