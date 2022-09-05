import React, {useRef, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Global from './Global';
import Swal from 'sweetalert2';

export default function ContryForm() {

    const navigate = useNavigate();
    const url = Global.url;

    const nameRef = useRef();
    const [couName, setCouName] = useState();
    
    const submitForm = () => {
        //Post
        axios.put(url + "countries", {countryName: couName, countryFlag:'not yet'})
            .then(res => {
                if (res.data){
                    
                }
            });

        Swal.fire({
            icon: 'success',
            title: 'The country '+couName+ ' was created!'
        }) 
        navigate("/countries");
    };


  return (
    <div className="center">
                <section id="content">

                    <h1 className="subheader">Adding a country</h1>

                    <form onSubmit={submitForm} className="mid-form" enctype='multipart/form-data'>
                        <div className="form-group">
                            <label htmlFor="contryname">Name</label>
                            <input type="text" 
                                    name="contryname" 
                                    ref={nameRef}
                                    onChange={(e) => setCouName(e.target.value)}
                                    value={couName}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="flag">Upload flag</label>
                            <input type="file" 
                                    name="flag" 
                            />
                        </div>

                        <div className="clearfix"></div>

                        <input type="submit" value="Create" className="btn btn-success" />

                    </form>

                </section>

                <aside id="sidebar">
                    <div id="nav-blog" className="sidebar-item">
                        <h3>You can</h3>
                        <Link to="/countries" className="btn btn-success">Go Back</Link>
                    </div>
                </aside>

                <div className="clearfix"></div>
            </div>
  )
}
