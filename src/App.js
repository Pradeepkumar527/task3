import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data/data.json';
import './css/bootstrap.min.css';
import profilepic from './1077114.svg';

function App() {
  let profiles=data.profile;
  console.log(profiles);
  return (
    <div className="row justify-content-center">
   
    {profiles.map((value)=>( 
       <div className="col-lg-4 col-md-6 col-sm-10 mt-5">
     
        <div className="card" style={{width:"25rem",fontStyle:"italic",boxShadow:"0px 8px 8px -8px #000"}}>
            <img  src={profilepic}  />
            <div className="card-body text-center">
                 <h1>{value.basics.name}</h1>
                 <div className="card-text">
                         <h4> {value.basics.role}</h4>
                 </div>
                 <a href={"tel"+value.basics.phone}>{value.basics.phone}</a>
                 <a href={"mailto"+value.basics.email}>{value.basics.email}</a>
               
                 <button className="btn btn-primary">View Profile</button>
            </div>
        </div>


     </div>))
   }
   
    
   </div>
    )}


    
    



export default App;

