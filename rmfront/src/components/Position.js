import React from "react";
import {NavLink} from 'react-router-dom';
import position from '../assets/images/formation.png';
import ShowPositions from "./ShowPositions";

class Position extends React.Component{

    render(){

        return(
           
            <div className="center">
            <section id="content">
    
                <article className="article-item article-detail">
                    <div className="image-wrap">
                        <img src={position}  alt="Positions" />
                    </div>

                    <ShowPositions />
                    
                </article>
    
            </section>
    
            <aside id="sidebar">
                <div id="nav-blog" className="sidebar-item">
                    <h3>You can do this</h3>
                    <NavLink to="/positionsform" className="btn btn-success">Add a position</NavLink>
                </div>
    
                <div id="search" className="sidebar-item">
                    <h3>Finder</h3>
                    <p>Find a position</p>
                    <form>
                        <input type="text" name="search" />
                        <input type="submit" name="submit" value="Find" className="btn" />
                    </form>
                </div>
            </aside>
            <div className="clearfix"></div>
        </div>
        );
    }
}
export default Position;