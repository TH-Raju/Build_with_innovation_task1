import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
// import { AuthContext } from '../../context/UserContext';

import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    let menu = "Menu";
    if (open) {
        menu = "Close";
    } else {
        menu = "Menu";
    }
    // console.log(open)

    return (
        <nav className='header'>
            <span style={{ color: 'wheat', fontWeight: 'bold', fontSize: "25px" }}>BWIPL Task-1</span>

            <div>
                <span className='hid'><button onClick={() => setOpen(!open)} className='nav'>{menu}</button></span>
                <div className={`${open ? ' ' : 'menu'}`}>
                    <div className='fl'>

                        {
                            user?.uid ?
                                <>
                                    <button onClick={logOut} className='btn-logOut'>Log out</button>

                                </>

                                :
                                <>
                                    <Link className='btn-logOut' to="/login">Log in</Link>
                                    <Link className='btn-logOut' to="/register">Sign Up</Link>
                                </>
                        }
                        <Link to="/user">Users</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;