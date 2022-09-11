import {useState, useEffect} from 'react'
import empty from '../assets/images/empty.png'
import Global from './Global'
import axios from 'axios'
import {Link, useSearchParams} from 'react-router-dom'

function CountryShow(){

    const url = Global.url;
    const imgPath = Global.imgPath;

    const [searchParams, setSerachParams] = useSearchParams();
    const filter = searchParams.get("filter") ?? "";

    var [status, setStatus] = useState(false);
    var [countries, SetCountries] = useState([]);

    const handleFilter = (e)=>{
        setSerachParams({
            filter: e.target.value
        })
    }

    useEffect(() => {
        getCountries();
    }, []);

    const getCountries = ()=>{
        //Get
        axios.get(url + "countries")
        .then(res => {
            SetCountries(res.data);
            setStatus(true) 
        });  
    }


    if (countries.length >= 1){
        var listCountries = 
            countries.filter(country =>{
                if (!filter) {
                    return true;
                }else{
                    return country.countryName.toLowerCase().includes(filter.toLowerCase());
                }
               }).map(country => {
                    if (countries.length >= 1){
                        return(
                            <div id="articles">
                                <article className="article-item" id="article-template">
    
                                    <div key={country.countryId} className="image-wrap">
                                        {country.flag !== null? <img src={imgPath + country.flag} alt="Flag" /> : <img src={empty} alt="Flag" />}
                                    
                                    </div>
    
                                    <h2>{country.countryName} </h2>
                                    
                                    <Link to={"/contriesupdate/"+country.countryId+"/"+country.countryName+"/"+country.flag}>Update</Link>
                                    
                                    <div className="clearfix"></div>                  
                                </article>
    
                            </div>
                        )
                    }else{
                        return(
                            <>
                                <h2>There is no country in this search, please try again...</h2>
                            </>
                        )
                    }
                    
                })

        return(
            <div className="center">
                <section id="content">
                    <h2 className="subheader">Countries in the Real Madrid squad</h2>
                        {listCountries}
                </section>

                <aside id="sidebar">
                    <div id="nav-blog" className="sidebar-item">
                        <h3>You can</h3>
                        <Link to="/contriesform" className="btn btn-success">Add a country</Link>
                    </div>

                    <div id="search" className="sidebar-item">
                        <h3>Finder</h3>
                        <p>Find a country</p>
                        <form>
                            <input type="text"  className='filter'
                                    placeholder='filter'
                                    onChange={handleFilter}  
                                    value={filter}    
                            />
                        </form>
                    </div>
                </aside>
                <div className="clearfix"></div>
            </div>
            
        )

    }else if (countries.length === 0 && status){
        return(
            <h1 className="subheader">Nothing to show...</h1>
        )
        
    }else{
        return(
            <h1 className="subheader">Loading countries...</h1>
        )
        
    }
}
export default CountryShow;