import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavbarComponent from '../components/NavbarComponent'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import SearchComponent from './Search'

class Main extends Component {
    constructor() {
        super();
        this.state = {
            userText: ''
        }
        this.getUserText = this.getUserText.bind(this)
    }

    getUserText = (text) => {
        console.log(text)
    }

    render() {
        return (
            <div>
                <NavbarComponent />
                <Switch >
                    <Route path="/" exact component={() => <Home />} />
                    <Route path='/search' exact component={() => <SearchComponent getUserText={this.getUserText} />} />
                </Switch>
                <Footer />
            </div >
        )
    }
}

export default Main
