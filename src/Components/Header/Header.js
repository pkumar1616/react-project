import React, { useState } from 'react'
import { LOGO_URL } from '../../Utils/Constants'
import './index.css'
import { Link } from 'react-router-dom';
const Header = () => {
    const [btnName, setBtnName] = useState('LogIn');
    return (
        // <div className='header'>
        //     <div className='logo-container'>
        //         <img
        //             className='logo'
        //             src={LOGO_URL}
        //         />
        //     </div>
        //     <div className='nav-items'>
        //         <ul>
        //             <li>
        //                 <Link to='/'>Home</Link>
        //             </li>
        //             <li>
        //                 <Link to='/about'>About Us</Link>

        //             </li>
        //             <li>
        //                 <Link to='/contact'>Contact Us</Link>
        //             </li>
        //             <li>Cart</li>
        //             <button className='LogIn' onClick={() => {
        //                 btnName === 'LogIn' ? setBtnName('LogOut') : setBtnName('LogIn');
        //             }}>{btnName}</button>
        //         </ul>
        //     </div>
        // </div>
        <>
            <div className="d-flex justify-content-start">
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                       
                         <img
                                className='logo >'
                                src={LOGO_URL}
                            />
             
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>

                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header
