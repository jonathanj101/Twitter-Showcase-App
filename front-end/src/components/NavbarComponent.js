import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import twitterBirdIcon from '../images/twitter-bird-icon.jpg'

const NavbarComponent = () => {
    return (
        <div>
            <Navbar
                className="d-flex justify-content-between"

                bg="dark"
                variant="dark">
                <Navbar.Brand>
                    <img
                        alt="twitter bird"
                        src={twitterBirdIcon}
                        width="125"
                        height="100"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Nav
                    variant='pills'
                    className=""
                >
                    <NavLink
                        to="/"
                        exact
                        className="nav-link mr-3"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/search"
                        exact
                        className="nav-link mr-3"
                    >
                        Search
                    </NavLink>
                    <NavLink
                        to="/random"
                        exact
                        className="nav-link "
                    >
                        Random
                    </NavLink>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavbarComponent
