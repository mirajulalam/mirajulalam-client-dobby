import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link} from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <nav className='header'>
            <p>Dobby Application</p>
            <div>
                <Link to="/">Home</Link>
                <Link to="/login">login</Link>
                <Link to="/signup">SignUp</Link>
                {user ? <button onClick={handleSignOut}>Sign Out</button>
                    : <Link to='/login'>Login</Link>
                }
            </div>
        </nav>
    );
};

export default Header;