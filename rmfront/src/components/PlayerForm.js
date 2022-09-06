import React, {Component} from 'react';
import {Link, Navigate} from 'react-router-dom';
import Global from './Global';
import axios from 'axios';
import Swal from 'sweetalert2';

class PlayerForm extends Component{

    url = Global.url;

    firstRef = React.createRef();
    lastRef  = React.createRef();
    dobRef  = React.createRef();
    bioRef  = React.createRef();
    couRef  = React.createRef();
    posRef = React.createRef();

    state = {
        first: "",
        last: "",
        dob: "",
        bio: "",
        cou: 0,
        pos: 0,
        players:{},
        countries:[],
        positions:[],
        status: false
    }

    

    changeState = ()=>{

        if (this.firstRef.current.value !== null){
            this.setState({
                first: this.firstRef.current.value
            })
        }

        if (this.lastRef.current.value !== null){
            this.setState({
                first: this.lastRef.current.value
            })
        }
        if (this.dobRef.current.value !== null){
            this.setState({
                first: this.dobRef.current.value
            })
        }
        if (this.bioRef.current.value !== null){
            this.setState({
                first: this.bioRef.current.value
            })
        }
        if (this.couRef.current.value !== null){
            this.setState({
                first: this.couRef.current.value
            })
        }
        if (this.posRef.current.value !== null){
            this.setState({
                first: this.posRef.current.value
            })
        }

    }
    
    submitForm  = (e)=>{
        e.preventDefault();

        //Set State
        this.setState({
            players: {
                firstName: this.state.first,
                lastName: this.state.last,
                dob: this.state.dob,
                picture: "empty.png",
                bio: this.state.bio,
                country: {
                    countryId: this.state.cou,
                    countryName: "",
                    flag: "empty.png"
                },
                position: {
                    positionId: this.state.pos,
                    positionName: ""
                }
            }
        })

        console.log(this.state.players);

        // //Post
        // axios.put(this.url + "countries", this.state.countries)
        //     .then(res => {
        //         if (res.data){
        //             this.setState({
        //                 status: true
        //             })
        //         }

        //     });
        
    };

    componentWillMount(){
        this.getCountries();
        this.getPositions();
    }

    getCountries(){
        //Get
        axios.get(this.url + "countries")
        .then(res => {
            this.setState({
                countries: res.data
            }) 

        });  
    }

    getPositions(){
        //Get
        axios.get(this.url + "positions")
        .then(res => {
            this.setState({
                positions: res.data
            })
        });  

    }

    render(){

        if (this.state.status){
            Swal.fire({
                icon: 'success',
                title: 'The position '+this.state.countries.firstName + " " + this.state.countries.lastName+ ' was created!'
            }) 
            return <Navigate to="/players"></Navigate>
        }

        if (this.state.countries.length >= 1){
            var listCountries = this.state.countries.map(country => {
                return(
                    <>
                        <option key={country.countryId} value={country.countryId}>{country.countryName}</option>
                    </>
                )
            })
        }

        if (this.state.positions.length >= 1){

            var listPositions = this.state.positions.map((pos) => {
                return(
                    <>
                        <option key={pos.positionId} value={pos.positionId}>{pos.positionName}</option>
                    </>
                )
            })
        }


        return (
            <div className="center">
                <section id="content">
                    <h1 className="subheader">Adding a new player</h1>

                    <form onSubmit={this.submitForm} className="mid-form">
                        <div className="form-group">
                            <label htmlFor="firstname">Name</label>
                            <input type="text" 
                                    name="firstname" 
                                    ref={this.firstRef}
                                    onChange={this.changeState}
    
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastname">First Name</label>
                            <input type="text" 
                                    name="lastname" 
                                    ref={this.lastRef}
                                    onChange={this.changeState}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="dob">Date Of Birth</label>
                            <input type="date" 
                                    name="dob" 
                                    ref={this.dobRef}
                                    onChange={this.changeState}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="position">Position</label>
                            <select name="position" 
                                    id="cars"
                                    ref={this.posRef}
                                    onChange={this.changeState}
                            >
                                {listPositions}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="country">Country</label>
                            <select name="country" 
                                    id="cars"
                                    ref={this.couRef}
                                    onChange={this.changeState}
                            >
                                {listCountries}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="bio">Biography</label>
                            <textarea name="bio"
                                        href={this.bioRef}
                                        onChange={this.changeState}
                            ></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="file">Picture</label>
                            <input type="file" name="file" />
                        </div>

                        <div className="clearfix"></div>

                        <input type="submit" value="Create" className="btn btn-success" />

                    </form>

                </section>

                <aside id="sidebar">
                    <div id="nav-blog" className="sidebar-item">
                        <h3>You can</h3>
                        <Link to="/players" className="btn btn-success">Go Back</Link>
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

export default PlayerForm;
