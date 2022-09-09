import React, {Component} from 'react';
import empty from '../assets/images/empty.png';
import Global from './Global';
import axios from 'axios';
import {Link} from 'react-router-dom';

class CountryShow extends Component{

    url = Global.url;

    state = {
        countries: [],
        status: false
    }

    componentWillMount(){
        this.getCountries();
    }

    getCountries = ()=>{
        //Get
        axios.get(this.url + "countries")
        .then(res => {
            this.setState({
                countries: res.data,
                status: true
            }) 

        });   
    }

    render(){

        if (this.state.countries.length >= 1){
            var listCountries = this.state.countries.map(country => {
                return(
                    <>
                        <div key={country.countryId} className="image-wrap">
                            <img src={empty} alt="Flag" />
                        </div>

                        <h2>{country.countryName} </h2>
                       
                        <Link to={"/contriesupdate/"+country.countryId+"/"+country.countryName+"/"+country.flag}>Update</Link>
                        <div className="clearfix"></div>

                        <br />
                    </>
                )
            })

            return(
                <>
                    {listCountries}
                </>
                
            )

        }else if (this.state.countries.length === 0 && this.state.status){
            return(
                <h1 className="subheader">Nothing to show...</h1>
            )
            
        }else{
            return(
                <h1 className="subheader">Loading countries...</h1>
            )
            
        }

    }
}
export default CountryShow;