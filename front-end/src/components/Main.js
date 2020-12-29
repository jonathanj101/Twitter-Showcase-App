import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavbarComponent from './NavbarComponent'
import Footer from './Footer'
import Home from '../pages/Home'
import SearchComponent from '../pages/Search'
import RandomTweetsComponent from '../pages/RandomTweets'

class Main extends Component {
    constructor() {
        super();
        this.state = {
            searchText: '',
            searchedUser: '',
            andysTweets: [],
            bmwsTweets: [],
            gtrsTweets: []

        }
        this.getUserText = this.getUserText.bind(this)
    }

    getUserText = (text) => {
        this.setState({
            searchText: text
        })
    }

    componentDidMount() {
        fetch('/randomtweets')
            .then(response => response.json())
            .then(user => {
                // console.log(user)
                this.setState({
                    usersInfo: user
                })
                // console.log(this.state.usersInfo)
            })
        fetch('/andy')
            .then(response => response.json())
            .then(tweet => {
                // console.log(tweet)
                this.setState({
                    andysTweets: tweet.andys_tweets
                })
                // console.log(this.state.andysTweets)
            })
        fetch('/bmw')
            .then(response => response.json())
            .then(tweet => {
                // console.log(tweet)
                this.setState({
                    bmwsTweets: tweet.bmws_tweets
                })
                // console.log(this.state.bmwsTweets)
            })
        fetch('/gtr')
            .then(response => response.json())
            .then(tweet => {
                // console.log(tweet)
                this.setState({
                    gtrsTweets: tweet.gtrs_tweets
                })
                // console.log(this.state.gtrsTweets)
            })
    }

    componentDidUpdate(prevProps, prevState) {
        const prevSearchText = this.state.searchText
        if (this.state.searchText !== prevState.searchText) {
            fetch(`/search/${prevSearchText}`)
                .then(response => response.json())
                .then(userSearchedData => {
                    console.log(userSearchedData)
                    this.setState({
                        searchedUser: userSearchedData
                    })
                })
        }
    }

    render() {
        return (
            <div className='main'>
                <NavbarComponent />
                <Switch >
                    <Route path="/" exact component={() => <Home />} />
                    <Route path='/search' exact component={() => <SearchComponent getUserText={this.getUserText}
                        searchText={this.state.searchText}
                        searchedUser={this.state.userInfo} />} />
                    <Route path='/random' exact component={() => <RandomTweetsComponent usersData={this.state.searchedUser}
                        andyTweets={this.state.andysTweets}
                        bmwTweets={this.state.bmwsTweets}
                        gtrTweets={this.state.gtrsTweets} />} />
                </Switch>
                <Footer />
            </div >
        )
    }
}

export default Main
