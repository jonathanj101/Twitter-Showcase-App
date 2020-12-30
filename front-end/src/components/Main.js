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
            searchedName: '',
            searchedUserName: '',
            userProfileImg: '',
            userFollowersCount: '',
            userFriendsCount: '',
            userTweets: [],
            userData: '',
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
        console.log(this.state.searchedUser, this.state.searchText)
        fetch('/randomtweets')
            .then(response => response.json())
            .then(user => {
                console.log(user)
                this.setState({
                    userData: user
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
                        searchedName: userSearchedData.user_info.name,
                        searchedUserName: userSearchedData.user_info.username,
                        userFollowersCount: userSearchedData.user_info.followers_count,
                        userFriendsCount: userSearchedData.user_info.following,
                        userProfileImg: userSearchedData.user_info.profile_image,
                        userTweets: userSearchedData.user_info.tweets
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
                        searchedName={this.state.searchedName}
                        user_name={this.state.searchedUserName}
                        user_profile_img={this.state.userProfileImg}
                        user_followers={this.state.userFollowersCount}
                        user_friends={this.state.userFriendsCount}
                        user_tweets={this.state.userTweets} />} />
                    <Route path='/random' exact component={() => <RandomTweetsComponent usersData={this.state.userData}
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
