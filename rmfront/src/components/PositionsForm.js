import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navigate} from 'react-router-dom';
import Global from './Global';
import axios from 'axios';

class PositionsForm extends Component{

    url = Global.url;
    nameRef = React.createRef();

    state={
        position:{},
        status: false
    }

    changeState = ()=>{
        this.setState({
            position:{
                positionName: this.nameRef.current.value         
            }
        })
    }

    submitForm = (e)=>{
        e.preventDefault();
        // Update state
        this.changeState();

        //POst
        axios.post(this.url + "positions/", this.state.position)
            .then(res=>{
                if(res.data){
                    this.setState({
                        position:res.data,
                        status: true
                    })
                }
            })   
    }

    render(){

        if (this.state.status){
            return <Navigate to="/positions"></Navigate>
        }

        return(
            <div className="center">
                <section id="content">

                    <h1 className="subheader">Adding position</h1>

                    <form onSubmit={this.submitForm} className="mid-form">
                        <div className="form-group">
                            <label htmlFor="firstname">Position name</label>
                            <input type="text" 
                                    name="firstname" 
                                    ref={this.nameRef}
                                    onChange={this.changeState}
                            />
                        </div>

                        <div className="clearfix"></div>

                        <input type="submit" value="Create" className="btn btn-success" />

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
export default PositionsForm;