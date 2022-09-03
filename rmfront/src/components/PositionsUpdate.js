import React, {Component} from 'react';
import {NavLink, Navigate, useParams} from 'react-router-dom';
import Global from './Global';
import axios from 'axios';


class PositionsUpdate extends Component {

    constructor(props){
        super(props);

        this.state={
            position:{
                positionId: props.id,
                positionName: props.name
            },
            status: false,
            value: this.props.name
        }
    }

    url = Global.url;
    nameRef = React.createRef();
    
    // changeState = (event)=>{
    //     this.setState({
    //         position:{
    //             positionId: this.props.positionId,
    //             positionName: this.nameRef
    //         },
    //         status: false,
    //         value: this.nameRef
    //     })
    // }

    submitForm = (e)=>{
        e.preventDefault();
        // Update state
        // this.changeState();

        console.log(this.state.position);

        //POst
        // axios.post(this.url + "positions/", this.state.position)
        //     .then(res=>{
        //         if(res.data){
        //             this.setState({
        //                 position:res.data,
        //                 status: true
        //             })
        //         }
        //     })   
    }

    render(){

        if (this.state.status){
            return <Navigate to="/positions"></Navigate>
        }

        return(
            <div className="center">
                <section id="content">

                    <h1 className="subheader">Position: {this.state.position.name}</h1>

                    <form onSubmit={this.submitForm} className="mid-form">
                        <div className="form-group">
                            <label htmlFor="firstname">Position name</label>
                            <input type="text" 
                                    name="firstname" 
                                    ref={this.nameRef}
                                    onChange={this.changeState}
                                    value= {this.state.value}
                            />
                        </div>

                        <div className="clearfix"></div>


                    <div className='btns'>
                        <input type="submit" value="Update" className="btn btn-update" />
                        {/* <input type="submit" value="Delete" className="btn btn-delete" /> */}
                    </div>
                    

                </form>

            </section>

            <aside id="sidebar">
                <div id="nav-blog" className="sidebar-item">
                    <h3>You can do this</h3>
                    <NavLink to="/positions" className="btn btn-success">Go back</NavLink>
                </div>
            </aside>

            <div className="clearfix"></div>
        </div>

        );
    }
}
export default PositionsUpdate;
