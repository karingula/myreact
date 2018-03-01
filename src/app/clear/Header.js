import React from 'react';

export const Header = (props) => {
        return(
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="navbar navbar-light">
                            <li> <a href="#">{props.homeLink}</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
};