import React from 'react';

import css from './Header.module.css';
import publicUrl from 'utils/publicUrl';

function Header() {
    return (
        <header className={css.header}>
            <div className={css.headerItem}>
                <button>
                    <img src= "https://cdn.glitch.com/ddf8ade4-ca2f-4830-b921-bdb9ee6e327e%2Fcamera.svg?v=1615671264131" alt="Camera"/>
                </button>
            </div>
            <div className={css.headerItem}>
                <button>
                    <img src= "https://cdn.glitch.com/ddf8ade4-ca2f-4830-b921-bdb9ee6e327e%2Flogo.png?v=1615671308554" alt="Logo"/>
                </button>
            </div>
			<div className={css.headerItem}>
                <button>
                    <img src= "https://cdn.glitch.com/ddf8ade4-ca2f-4830-b921-bdb9ee6e327e%2Fmessage.svg?v=1615671315925" alt="Message"/>
                </button>
            </div>
        </header>
    );
}

export default Header;