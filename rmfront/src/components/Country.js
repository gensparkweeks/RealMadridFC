import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import CountryShow from './CountryShow';

class Country extends Component{

    render(){

        return(
            <div className="center">
                <section id="content">
                    <h2 className="subheader">Countries in the Real Madrid squad</h2>
                    <div id="articles">
                        <article className="article-item" id="article-template">
                            
                            <CountryShow />

                        </article>

                    </div>

                </section>

                <aside id="sidebar">
                    <div id="nav-blog" className="sidebar-item">
                        <h3>You can</h3>
                        <Link to="/contriesform" className="btn btn-success">Add a country</Link>
                    </div>

                    <div id="search" className="sidebar-item">
                        <h3>Finder</h3>
                        <p>Find a country</p>
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
export default Country;