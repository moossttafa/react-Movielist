import React, {useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {Button} from './Button';
import {RiMovieLine} from 'react-icons/ri';
import { FaBars , FaTimes } from 'react-icons/fa';
import './Navbar.css';


export const Navbar = () => {
      const [click , setClick ] =  useState(false);
    const [button, setButton] = useState(true);
 

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960 ){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect(() =>{
        showButton();
    }, []);


    return (
        <>
             <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    <RiMovieLine className="navbar-icon " />
                         WatchList
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                      {click ? <FaTimes/> : <FaBars/>}
                  </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item ">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu} >
                                WatchList
                            </Link>
                        </li>
                       <li className="nav-item">
                        <Link to="/watched" className="nav-links" onClick={closeMobileMenu} >
                          Watched
                        </Link>
                      </li>
                      
                      <li className ="nav-btn">
                        {button ? (
                            <Link to="/add" className="btn-link">
                                <Button  buttonStyle="btn--outline">+ Add
                                </Button>
                            </Link>
                        ): (
                            <Link to="/add" className="btn-link"   onClick={closeMobileMenu}>
                                <Button buttonStyle="btn--outline" 
                                        buttonSize="btn--mobile" onClick={closeMobileMenu}>
                               + Add
                                </Button>
                            </Link>
                        )}
                    </li>
                      
                    </ul>
                </div>
             </div>
        </>
    )
}
