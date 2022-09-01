import React from "react";
import logo from '../assets/images/rm.png';
import {NavLink} from 'react-router-dom';

class Header extends React.Component{

    render(){

        return(
            <>
                <header id="header">
        <div className="center">
            {/* <!-- LOGO --> */}
            <div id="logo">
                <NavLink to="/">
                 <img src={logo} className="app-logo" alt="Real Madrid Logo" />
                </NavLink>
                <span id="brand1">
                        <strong>Real</strong>Madrid FC
                    </span>
            </div>

            {/* <!-- MENU --> */}
            <nav id="menu">
                <ul>
                    <li>
                        <NavLink to="/" activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/error" activeClassName="active">Players</NavLink>
                    </li>
                    <li>
                        <NavLink to="/error" activeClassName="active">Countries</NavLink>
                    </li>
                    <li>
                        <NavLink to="/positions" activeClassName="active">Positions</NavLink>
                    </li>
                </ul>
            </nav>

            {/* <!--Clean float--> */}
            <div className="clearfix"></div>
        </div>
    </header>
            </>
        );
    }
}

export default Header;