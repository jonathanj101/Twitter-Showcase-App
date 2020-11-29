import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import twitterBirdIcon from '../images/twitter-bird-icon.jpg'

const NavbarComponent = () => {
    return (
        <div>
            <Navbar className="d-flex justify-content-between" bg="dark" variant="dark">
                <Navbar.Brand href="#home">
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
                    className="">
                    <Nav.Link
                        href="#home"
                        className="mr-3"
                    >
                        Home
                    </Nav.Link>
                    <Nav.Link
                        href="#search"
                        className="mr-3"
                    >
                        Search
                    </Nav.Link>
                    <Nav.Link
                        href="#random"
                        className=""
                    >
                        Random
                    </Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavbarComponent
