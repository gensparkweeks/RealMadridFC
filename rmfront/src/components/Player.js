import React, {Component} from "react";
import {Link} from 'react-router-dom'
import PlayerShow from "./PlayerShow";

class Player extends Component{

    render(){

        return (
            <div className="center">
                <section id="content">
                    <h2 className="subheader">Real Madrid Soccer Players</h2>

                    <PlayerShow />

                </section>

                <aside id="sidebar">
                    <div id="nav-blog" className="sidebar-item">
                        <h3>You can</h3>
                        <Link to="/playersform" className="btn btn-success">Create player</Link>
                    </div>

                    <div id="search" className="sidebar-item">
                        <h3>Finder</h3>
                        <p>Find a player</p>
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
export default Player;