import React, {Component} from 'react';
import axios from 'axios';
import Global from './Global';
import {Link} from 'react-router-dom';

class PositionsShow extends Component{

    url = Global.url;

    state = {
        positions: [],
        status: false
    }

    componentWillMount(){
        this.getPositions();
    }

    getPositions = ()=>{
        axios.get(this.url + "positions")
        .then(res => {
            this.setState({
                positions: res.data,
                status: true
            }) 

        });   
    }

    render(){

        if (this.state.positions.length >= 1){

            var listPositions = this.state.positions.map((pos) => {
                return(
                    <>
                        <h1 key={pos} className="subheader">{pos.positionName}</h1>
                        <Link to={"/positionsupdate/"+pos.positionId+"/"+pos.positionName} >Update</Link>
                        <hr />
                    </>
                )
            })

            return(
                <>
                    {listPositions}
                </>
                
            )

        }else if (this.state.positions.length === 0 && this.state.status){
            return(
                <h1 className="subheader">There is no positions to show</h1>
            )
            
        }else{
            return(
                <h1 className="subheader">Loading positions...</h1>
            )
            
        }

        
    }
}
export default PositionsShow;