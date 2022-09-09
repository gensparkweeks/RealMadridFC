import React, {useRef, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Global from './Global';
import Swal from 'sweetalert2';
import fra from '../assets/images/fra.svg';

export default function CountryUpdate() {

    const url = Global.url;
    const navigate = useNavigate();

    const {id, name, flag} = useParams();

    const nameRef = useRef();
    const [couName, setCouName] = useState(name);
    const [seletedFile, setSelectedFile] = useState(null);
    
    const handleUpdate = (e) => {
        e.preventDefault();

        var flagUpdated = flag;

        if (seletedFile !== null){
            flagUpdated = seletedFile.name;

            const fd = new FormData();
            fd.append('file0', seletedFile);

            //Put
            axios.put("http://localhost:8080/api/upload", fd)
            .then(res =>{
                if(res.ok) {
                    console.log(res.data);
                }
            })
            
        }

        //Put
        axios.put(url + "countries", {countryId:id, countryName: couName, flag: flagUpdated})
            .then(res => {
                if (res.data){ 
                }
            });

        Swal.fire({
            icon: 'success',
            title: 'The country '+ name + '  was updated!'
        })
        navigate("/countries");
    };

    const handleDelete = () => {
        //Delete
        axios.delete(url + "countries/" + id)
            .then(res => {
                if (res.data){  
                }
            });

        Swal.fire({
            icon: 'success',
            title: 'The country '+ name + ' was deleted!'
        })  
        navigate("/countries");
    }


  return (
    <div className="center">
        <section id="content">

            <h1 className="subheader">Country: {name}</h1>

            <div className="image-small">
                <img src={fra} alt="Flag" />
            </div>

            <form className="mid-form">
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
                            onChange={(e)=> setSelectedFile(e.target.files[0])} 
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
                <Link to="/countries" className="btn btn-success">Go Back</Link>
            </div>
        </aside>

        <div className="clearfix"></div>
    </div>
  )
}
