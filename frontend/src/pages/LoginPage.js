import React from 'react';
import '../App.css';
import { Button } from './Button';
import './LoginPage.css';

const neffington = new URL("../Neff.png", import.meta.url)

function LoginPage() {
    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleInputChange = (event) => {
        setUserName(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    return(
        <div className='loginPage-container' >
            <img src={neffington} alt='Adventure'/> 
            <input
                type="text"
                value={userName}
                onChange={handleInputChange}
                placeholder="User Name"
            />
            <input
                type="password"
                value={password}
                onChange={handlePassword}
                placeholder="Password"
            />
            <div className='loginPage-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                   LOGIN
                </Button>
            </div>
        </div>
    );
}

export default LoginPage;