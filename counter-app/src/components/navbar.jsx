import React, { Component } from 'react'

//stateless functional component
//sfc
const NavBar = ({ totalCounters }) => {
    console.log('nav');
    
    //cannot use life cycle hooks
    // in stateless functional components, because here we have a single
    // function that returns the output of this component
    // so if you need to use lifecycle hooks, you can only use class
    // components.

    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar
                <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
}

export default NavBar;