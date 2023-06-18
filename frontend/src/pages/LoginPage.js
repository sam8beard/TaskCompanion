import React from 'react';
import '../App.css';
import './LoginPage.css';

const neffPic = new URL("../Neff.png", import.meta.url)

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
            <img src={neffPic} alt='Adventure'/> 
            <input
                type="text"
                value={userName}
                onChange={handleInputChange}
                placeholder="User Name"
            />
            <input
                type="text"
                value={password}
                onChange={handlePassword}
                placeholder="Password"
            />
        </div>
    );
}

export default LoginPage;