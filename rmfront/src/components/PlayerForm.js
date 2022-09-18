import React, {Component} from 'react';
import {Link, Navigate} from 'react-router-dom';
import Global from './Global';
import axios from 'axios';
import Swal from 'sweetalert2';

class PlayerForm extends Component{

    url = Global.url;

    firstRef = React.createRef("");
    lastRef  = React.createRef("");
    dobRef  = React.createRef("");
    bioRef  = React.createRef(" ");
    couRef  = React.createRef("");
    posRef = React.createRef("");
    fileRef = React.createRef("");

    state = {
        countries:{},
        positions:{},
        status: false
    }
        
    onFileChange = (e) =>{
        if (e.target.files[0] !== null){
            this.setState({
                selectedFile: e.target.files[0]
            })
        }
    }
    
    submitForm  = (e)=>{
        e.preventDefault();

        //Upload Picture
        var pictureUpdate = null;

        if (this.state.selectedFile !== null){
            pictureUpdate = this.state.selectedFile

            const fd = new FormData();
            fd.append('file0', this.state.selectedFile);

            //Post
            axios.post("http://localhost:8080/api/upload", fd)
            .then(res =>{
                if(res.ok) {
                    console.log(res.data);
                }
            }) 
        }

        const playerargs = {
            firstName: this.firstRef.current.value,
            lastName: this.lastRef.current.value,
            dob: this.dobRef.current.value,
            picture: pictureUpdate.name,
            bio: this.bioRef.current.value,
            country: {
                countryId: this.couRef.current.value,
                countryName: "",
                flag: ""
            },
            position: {
                positionId:  this.posRef.current.value,
                positionName: ""
            }
 
        }

        //Post
        axios.post(this.url + "players", playerargs)
            .then(res => {
                if (res.data){
                    this.setState({
                        status: true
                    })
                }

            });
        
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
                title: 'The player '+this.firstRef.current.value + " " + this.lastRef.current.value+ ' was added!'
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
                                   
    
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastname">First Name</label>
                            <input type="text" 
                                    name="lastname" 
                                    ref={this.lastRef}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="dob">Date Of Birth</label>
                            <input type="date" 
                                    name="dob" 
                                    ref={this.dobRef}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="position">Position</label>
                            <select name="position" 
                                    id="cars"
                                    ref={this.posRef}
                            >
                                {listPositions}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="country">Country</label>
                            <select name="country" 
                                    id="cars"
                                    ref={this.couRef}
                            >
                                {listCountries}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="bio">Biography</label>
                            <textarea name="bio"
                                        ref={this.bioRef}
                                        
                            ></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="file">Picture</label>
                            <input type="file"  
                                    ref={this.fileRef}
                                    onChange={this.onFileChange}
                            />
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
