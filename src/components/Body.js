import React from 'react';
import '../App.css';
//import { Button } from './Button';
import './Body.css';

const neffPic = new URL("../Neffington.png", import.meta.url)

function Body() {
    const [inputValue, setInputValue] = React.useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    return(
        <div className='body-container' >
            <img src={neffPic} alt='Adventure'/> 
            <h1>Welcome!</h1>
            <p>I am your TaskCompanion</p>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type here..."
            />
            <div className='body-btns'>
                
            </div>
            
        </div>
    );
}

export default Body;