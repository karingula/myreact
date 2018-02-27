import React from "react";

export class Header extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="navbar navbar-light">
                            <li> <a href="#">Home</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}