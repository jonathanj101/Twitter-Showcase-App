import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NavbarComponent from '../components/NavbarComponent'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import SearchComponent from './Search'

const Main = () => {
    return (
        <div>
            <NavbarComponent />
            <Switch >
                <Route path="/" exact component={() => <Home />} />
                <Route path='/search' exact component={() => <SearchComponent />} />
            </Switch>
            <Footer />
        </div>
    )
}

export default Main
