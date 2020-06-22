import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data/data.json';
import './css/bootstrap.min.css';
import profilepic from './1077114.svg';
import {BrowserRouter,Route,Link }from 'react-router-dom';
import Resume from './Resume';

function App() {
  return (
    <BrowserRouter>
        <Route exact path='/' component = {Home}/>
        <Route exact path='/resume' component={Resume} />
    </BrowserRouter>
    );


  }

let Home=()=>{

  let profiles=data.profile;
  console.log(profiles);
  return (
    <div className="row justify-content-center">
   
    {profiles.map((value,index)=>( 
       <div className="col-lg-4 col-md-6 col-sm-10 mt-5" key={index}>
     
        <div className="card" style={{width:"25rem",fontStyle:"italic",boxShadow:"0px 8px 8px -8px #000"}}>
            <img  src={profilepic}  />
            <div className="card-body text-center">
                 <h1>{value.basics.name}</h1>
                 <div className="card-text">
                         <h4 className="text-secondary"> {value.basics.role}</h4>
                 </div>
                 <a href={"tel"+value.basics.phone}><h4>{value.basics.phone}</h4></a>
                 <a href={"mailto"+value.basics.email}><h5>{value.basics.email}</h5></a>
               
                 <Link to={{pathname:'/resume',data:{id:index}}} className="btn btn-primary">View Profile</Link>
            </div>
        </div>


     </div>))
   }
   
    
   </div>
    )
}

    
    



export default App;

