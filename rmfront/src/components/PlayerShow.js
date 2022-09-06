import React, {Component} from "react";
import {Link} from 'react-router-dom'
import Global from './Global';
import axios from "axios";
import empty from '../assets/images/empty.png'
import Moment from 'react-moment';

class PlayerShow extends Component{

    url = Global.url;

    componentWillMount(){
        this.getPlayers()
    }

    state = {
        players:[],
        status: false
    }

    getPlayers(){
        axios.get(this.url + "players")
        .then(res => {
            console.log(res.data);
            this.setState({
                players: res.data,
                status: true
            }) 
        });   
    }

    render(){

        if (this.state.players.length >= 1){

            var listPlayers = this.state.players.map((player) => {
                return(
                    <div id="articles">
                        <article className="article-item" id="article-template">
                            <div className="image-wrap">
                                <img src={empty} alt="Player" />
                            </div>
        
                            <h2>{player.firstName + " "+ player.lastName}</h2>
                            <span className="date"> 
                                {/* <Moment to={player.dob} /> */}
                                <Moment titleFormat="MM DD YYYY">
                                    {player.dob}
                                </Moment>
                    
                            </span>
                            <span className="date">
                                    {player.position.positionName}
                            </span>
        
                            <Link to={"/playersupdate/"+player.playerId}>Update</Link>
        
                            <div className="clearfix"></div>
                        </article>
        
                    </div>
                )
            })

            return (
                <>
                    {listPlayers}
                </> 
            );

        }else if (this.state.players.length === 0 && this.state.status){
            return(
                <h1 className="subheader">There is no players to show</h1>
            )
            
        }else{
            return(
                <h1 className="subheader">Loading players...</h1>
            )
            
        }

        
    }
}
export default PlayerShow;