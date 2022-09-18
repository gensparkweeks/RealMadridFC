import React, {Component} from 'react';
import {Link, Navigate} from 'react-router-dom';
import Global from './Global';
import axios from 'axios';
import Swal from 'sweetalert2';

class PlayerUpdate extends Component{

    url = Global.url;
    playerId = 5;

    firstRef = React.createRef();
    lastRef  = React.createRef();
    dobRef  = React.createRef();
    bioRef  = React.createRef();
    couRef  = React.createRef();
    posRef = React.createRef();
  

    state = {
        first: "",
        last: "",
        dob: new Date("2016-01-04"),
        bio: "",
        picture:"",
        cou: 0,
        pos: 0,
        players:{},
        countries:[],
        positions:[],
        statusup: false,
        statusdel: false,
        seletedFile:null
    }

    changeState = ()=>{

      if (this.firstRef.current.value !== null){
          this.setState({
              first: this.firstRef.current.value
          })
      }

      if (this.lastRef.current.value !== null){
          this.setState({
              last: this.lastRef.current.value
          })
      }
      if (this.dobRef.current.value !== null){
          this.setState({
              dob: this.dobRef.current.value
          })
      }
      if (this.bioRef.current.value !== null){
          this.setState({
              bio: this.bioRef.current.value
          })
      }
      if (this.couRef.current.value !== null){
          this.setState({
              cou: this.couRef.current.value
          })
      }
      if (this.posRef.current.value !== null){
          this.setState({
              pos: this.posRef.current.value
          })
      }

    }

    fileSelectedHandler = (event)=>{
    this.setState({
        seletedFile: event.target.files[0]
    })
    }

    componentDidMount(){
        this.getCountries();
        this.getPositions();
        this.getPlayer();
    }

    getPlayer(){
    //Get
    axios.get(this.url + "players/"+this.playerId)
    .then(res => {
        this.setState({
            players: res.data 
        }) 
        console.log(res.data)
        this.setState({
            first: res.data.firstName,
            last: res.data.lastName,
            dob: res.data.dob,
            picture:res.data.picture,
            bio: res.data.bio,
            cou: res.data.country.countryId,
            pos: res.data.position.positionId
            })
        });  
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

    handleUpdate = (e) => {

        var pictureUpdate = this.state.players.picture !== null ? this.state.players.picture : null ;

        console.log("Picture: ", pictureUpdate);

        if (this.state.seletedFile !== null){

            pictureUpdate = this.state.seletedFile.name;
            console.log("After Picture: ", pictureUpdate);

            const fd = new FormData();
            fd.append('file0', this.state.seletedFile);

            //Put
            axios.put("http://localhost:8080/api/upload", fd)
            .then(res =>{
                if(res.ok) {
                    console.log(res.data)
                }
            })
        
        }

        const playerargs = {
            playerId: this.state.players.playerId,
            firstName: this.state.first,
            lastName: this.state.last,
            dob: this.state.dob,
            picture: pictureUpdate,
            bio: this.state.bio,
            country: {
                countryId: this.state.cou,
                countryName: "",
                flag: ""
            },
            position: {
                positionId: this.state.pos,
                positionName: ""
            }
 
        }

        // Put
        axios.put(this.url + "players", playerargs)
        .then(res => {
            if (res.data){ 
                this.setState({
                    statusup: "success"
                })
            }
        });
        Swal.fire({
            icon: 'success',
            title: 'The player '+ this.state.players.playerName+ '  was updated!'
        })
    };

        handleDelete = (e) => {

        e.preventDefault();

        //Delete
        axios.delete(this.url + "countries/" )
            .then(res => {
                if (res.data){  
                    this.setState({
                        statusdel: "success"
                    })
                }
            }); 

        Swal.fire({
            icon: 'success',
            title: 'The player '+ this.state.players.playerName+ '  was deleted!'
        })    

    }

    render(){
        if (this.state.statusdel === "success" || this.state.statusup === "success"){
            console.log("statusUp:", this.state.statusup, "statusDel:", this.state.statusdel,);
            return(
                <Navigate to="/players" />
            )
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
                    <h1 className="subheader">Updating a player</h1>

                    <form className="mid-form">
                        <div className="form-group">
                            <label htmlFor="firstname">FirstName</label>
                            <input type="text" 
                                    name="firstname" 
                                    ref={this.firstRef}
                                    onChange={this.changeState}
                                    value={this.state.first}

                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" 
                                    name="lastname" 
                                    ref={this.lastRef}
                                    onChange={this.changeState}
                                    value={this.state.last}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="dob">Date Of Birth</label>
                            <input type="text" 
                                    name="dob" 
                                    ref={this.dobRef}
                                    onChange={this.changeState}
                                    value={this.state.dob}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="position">Position</label>
                            <select name="position" 
                                    id="cars"
                                    ref={this.posRef}
                                    onChange={this.changeState}
                                    value={this.state.pos}
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
                                    value={this.state.cou}
                            >
                                {listCountries}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="bio">Biography</label>
                            <textarea name="bio"
                                        href={this.bioRef}
                                        onChange={this.changeState}
                                        value={this.state.bio}
                            ></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="file">Picture</label>
                            <input type="file" 
                                name="file" 
                                onChange={this.fileSelectedHandler} 
                            
                            />
                        </div>

                        <div className="clearfix"></div>

                        <div className='btns'>
                            <input onClick={this.handleUpdate} type="submit" value="Update" className="btn btn-update" />
                            <input onClick={this.handleDelete} type="submit" value="Delete" className="btn btn-delete" />
                        </div>

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

export default PlayerUpdate;