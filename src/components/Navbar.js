import React from 'react';
import css from './Navbar.module.css';
import publicUrl from 'utils/publicUrl';

function Navbar(props) {
    function handleNavChange(page) {
        if (props.onNavChange) {
            props.onNavChange(page);
        }
    }

    return (
        <nav className={css.navbar}>
            <div className={css.navItem}>
                <button onClick={e=>handleNavChange('home')}>
                    <img src= "https://cdn.glitch.com/ddf8ade4-ca2f-4830-b921-bdb9ee6e327e%2Fhome.svg?v=1615671293543" alt="Home"/>
                </button>
            </div>
            <div className={css.navItem}>
                <button onClick={e=>handleNavChange('explore')}>
                    <img src= "https://cdn.glitch.com/ddf8ade4-ca2f-4830-b921-bdb9ee6e327e%2Fexplore.svg?v=1615671286691" alt="Explore"/>
                </button>
            </div>
			<div className={css.navItem}>
                <button onClick={e=>handleNavChange('newpost')}>
                    <img src= "https://cdn.glitch.com/ddf8ade4-ca2f-4830-b921-bdb9ee6e327e%2Fnewpost.svg?v=1615671322755" alt="New Post"/>
                </button>
            </div>
            <div className={css.navItem}>
                <button onClick={e=>handleNavChange('activity')}>
                    <img src= "https://cdn.glitch.com/ddf8ade4-ca2f-4830-b921-bdb9ee6e327e%2Flike.svg?v=1615671300239" alt="Like"/>
                </button>
            </div>
            <div className={css.navItem}>
                <button onClick={e=>handleNavChange('profile')}>
                    <img src= "https://cdn.glitch.com/ddf8ade4-ca2f-4830-b921-bdb9ee6e327e%2Fprofile.svg?v=1615671397755" alt="Profile"/>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;