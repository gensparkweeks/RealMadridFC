import React, {useRef, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Global from './Global';
import Swal from 'sweetalert2';


export default function PositionsUpdate() {


    const {id, name} = useParams();
    const nameRef = useRef();
    const navigate = useNavigate();

    const [posName, setPosName] = useState(name);

    const url = Global.url;

    const handleUpdate = () => {

        // Put
        axios.put(url + "positions", {positionId:id, positionName: posName})
            .then(res => {
                if (res.data){
                    
                }
            });

        Swal.fire({
            icon: 'success',
            title: 'The position was updated!'
        })
        navigate("/positions");
    };

    const handleDelete = () => {
        axios.delete(url + "positions/" + id)
            .then(res => {
                if (res.data){
                    
                }
            });
        Swal.fire({
            icon: 'success',
            title: 'The position '+name+ ' was deleted!'
        })  
        navigate("/positions");
    }    
             
  return (

     <div className="center">
        
        <section id="content">

            <h1 className="subheader">Position: {name}</h1>

            <form className="mid-form">
                <div className="form-group">
                    <label htmlFor="positionname">Position name</label>
                    <input type="text" 
                            name="positionname" 
                            ref={nameRef}
                            onChange={(e) => setPosName(e.target.value)}
                            value={posName}
                    />
                </div>

                <div className="clearfix"></div>


                <div className='btns'>
                    <input onClick={handleUpdate} type="submit" value="Update" className="btn btn-update" />
                    <input onClick={handleDelete} type="submit" value="Delete" className="btn btn-delete" />
                </div>
            

            </form>

        </section>

        <aside id="sidebar">
            <div id="nav-blog" className="sidebar-item">
                <h3>You can</h3>
                <Link to="/positions" className="btn btn-success">Go back</Link>
            </div>
        </aside>

        <div className="clearfix"></div>
    </div>
  )
}
