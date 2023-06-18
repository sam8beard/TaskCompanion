import React from 'react';
import '../App.css';
//import { Button } from './Button';
import './InProgress.css';

const neffPic = new URL("../Neff.png", import.meta.url)

function InProgress() {
    const [inputValue, setInputValue] = React.useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    return(
        <div className='inProgress-container' >
            <img src={neffPic} alt='Adventure'/> 
            <h1>Welcome!</h1>
            <p>I am your TaskCompanion</p>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type here..."
            />
            <div className='inProgress-btns'>
                
            </div>
            
        </div>
    );
}

export default InProgress;