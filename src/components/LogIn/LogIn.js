import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const LogIn = () => {
    const{signInGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/'


    const handleGoogleLogIn = () => {
        signInGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    return (
        <div>
             <div className ='login-form'>
                <div>
                    <h2>Log-In</h2>
                    <form>
                        <input type="email" name="" id="" placeholder = 'Your Email' />
                        <br /> <br />
                        <input type="password" name="" id="" placeholder = 'Your password' />
                        <br /><br />
                        <input type="submit" value="Submit" />
                    </form>
                    <p>new to Foodsense website? <Link to = '/register'>Creat Account</Link></p>
                    <div>---------or------------</div>
                   <Button onClick = {handleGoogleLogIn} variant="outline-dark">Google Sign In</Button>
                </div>
           </div>
           
        </div>
    );
};

export default LogIn;



