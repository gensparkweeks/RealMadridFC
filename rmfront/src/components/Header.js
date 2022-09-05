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
                                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/error">Players</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/countries" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Countries</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/positions" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Positions</NavLink>
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