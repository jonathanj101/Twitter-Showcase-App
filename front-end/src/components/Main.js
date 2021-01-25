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
            is401: false,
            is401Msg: '',
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
        fetch('/randomtweets')
            .then(response => response.json())
            .then(user => {
                this.setState({
                    userData: user
                })
            })

        fetch('/andy')
            .then(response => response.json())
            .then(tweet => {
                this.setState({
                    andysTweets: tweet.andys_tweets
                })
            })

        fetch('/bmw')
            .then(response => response.json())
            .then(tweet => {
                this.setState({
                    bmwsTweets: tweet.bmws_tweets
                })
            })

        fetch('/gtr')
            .then(response => response.json())
            .then(tweet => {
                this.setState({
                    gtrsTweets: tweet.gtrs_tweets
                })
            })
    }

    componentDidUpdate(prevProps, prevState) {
        const prevSearchText = this.state.searchText
        if (this.state.searchText !== prevState.searchText) {
            fetch(`/search/${prevSearchText}`)
                .then(response => response.json())
                .then(userSearchedData => {
                    if (userSearchedData.user_not_found) {
                        this.setState({
                            is401: true,
                            searchedName: userSearchedData.user_not_found.name,
                            searchedUserName: userSearchedData.user_not_found.username,
                            is401Msg: userSearchedData.user_not_found.text,
                            userFollowersCount: '0',
                            userFriendsCount: '0',
                        })
                    } else {
                        this.setState({
                            is401: false,
                            searchedName: userSearchedData.user_info.name,
                            searchedUserName: userSearchedData.user_info.username,
                            userFollowersCount: userSearchedData.user_info.followers_count,
                            userFriendsCount: userSearchedData.user_info.following,
                            userProfileImg: userSearchedData.user_info.profile_image,
                            userTweets: userSearchedData.user_info.tweets
                        })
                    }
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
                        user_tweets={this.state.userTweets}
                        is401={this.state.is401}
                        is401ErrMsg={this.state.is401Msg}
                    />} />
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
