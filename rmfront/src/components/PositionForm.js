import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class PositionForm extends Component{

    nameRef = React.createRef();

    submitForm = (e)=>{
        e.preventDefault();

        var user = {
            positionName : this.nameRef.current.value
        }

        alert(this.nameRef.current.value);
    }

    render(){

        return(
            <div className="center">
                <section id="content">

                    <h1 className="subheader">Adding position</h1>

                    <form onSubmit={this.submitForm} className="mid-form">
                        <div className="form-group">
                            <label htmlFor="firstname">Position name</label>
                            <input type="text" name="firstname" ref={this.nameRef}/>
                        </div>

                        <div className="clearfix"></div>

                        <input type="submit" value="Send" className="btn btn-success" />

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
export default PositionForm;