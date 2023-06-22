import './StartPage.css';
import React from 'react';

//import newLogo from '../Neff.png';
import { useNavigate } from "react-router-dom";
const neffPic = new URL("../Neff.png", import.meta.url)
function StartPage() {
  let navigate = useNavigate();

    return (
      <div className="StartPage">
        <header className="Start-header">
        <b>
              TaskCompanion
            </b>
          <img src={neffPic} className = "Start-logo" alt="logo" />
            
          <div class="Start-button-container">
          <button 
            className= "Start-button"
            onClick = {() => {navigate('/LoginPage');}} 
            > Login </button>
    
        <button 
            className= "Start-button"
            onClick = {() => {navigate('/SignUp');}}
            > Sign Up</button>
 
        </div>

        </header>
        
      </div>
    );
  }
  
  export default StartPage;