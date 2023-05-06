import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'



function Navbar() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className='container-fluid'>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-between`} id="navbarsExample09">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item px-4">
                            <Link className="nav-link text-dark" to="/">Home</Link>
                        </li>
                        <li className="nav-item px-4">
                            <Link className="nav-link text-dark" to="/about">About</Link>
                        </li>
                        <li className="nav-item px-4">
                            <Link className="nav-link text-dark" to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item px-4">
                            <Link className="nav-link text-dark" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item px-3">
                            <Link className="nav-link" to="/signin" style={{color: '#8699f6'}}>Sign in</Link>
                        </li>
                        <li className="nav-item px-3">
                            <Link className="nav-link" to="/register" style={{color: '#8699f6'}}>Register</Link>
                        </li>
                    </ul>             
                </div>
            </div>
            </nav>
        </>
    )
}

export default Navbar