import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    const styler = function() {
        return {
            main: {
                width: '100%',
                padding: '0 20px',
                boxSizing: 'border-box',
                background: 'teal',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            },
            title: {
                color: 'silver'
            },
            navContainer: {
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center'
            },
            btnLinks: {
                margin: '0 5px',
                height: '30px',
                color: 'yellow',
                background: 'inherit',
                border: 'none',
                fontWeight: 'bold',
                textDecoration: 'underline',
                cursor: 'ponter'
            }
        };
    };

    return (
        <header style={styler().main}>
            <h1 style={styler().title}>Github User Card v2</h1>
            <nav style={styler().navContainer}>
                <Link to='/usersearch'><button style={styler().btnLinks}>Username Search</button></Link>
                <Link to='/idsearch'><button style={styler().btnLinks}>ID Search</button></Link>
            </nav>
        </header>
    );
}

export default Header;