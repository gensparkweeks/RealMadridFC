import React from 'react'
import error404 from '../assets/images/error404.png';

const Error = () => {

  return (
    <div className="center">
      {/* <h1>Page not found</h1>     */}
      {/* <p>The Real Madrid FC App Team has not been found the page</p>   */}
      <img className="error404" src={error404} alt="error404" /> 
      <div classname="clearfix"></div>                    
    </div>
                
  )
}
export default Error;
