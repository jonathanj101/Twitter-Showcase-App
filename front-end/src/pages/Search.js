import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import UserCard from '../components/UserCard'

const SearchComponent = ({ getUserText, searchText, searchedUser }) => {
    const [name, setName] = useState('')
    const [username, setUserName] = useState('')
    const [userProfileImg, setUserProfileImg] = useState('')
    const [followersCount, setFollowersCount] = useState('')
    const [friendsCount, setFriendsCount] = useState('')
    const [userTweets, setUserTweets] = useState([])
    const [text, getText] = useState('')

    function clearState() {
        getText("")
    }

    function getValueInput(e) {
        const { value } = e.target
        console.log(value)
        getText(value)
    }

    function requestForSearch(user) {
        console.log(user)
        if (user !== '') {
            console.log(user.name)
            // setName(user.name)
            // setUserName(user.username)
            // setUserProfileImg(user.profile_image)
            // setFollowersCount(user.followers_count)
            // setFriendsCount(user.following)
            // setUserTweets(user.tweets)
        }
        else {
            return <div></div>
        }
    }

    return (
        <div
            className="bg-secondary"
            style={divHeight}>
            <div className="input-group mx-auto w-50">
                <input
                    className="form-control"
                    type="text"
                    value={text}
                    onChange={getValueInput}
                    placeholder="Search for a user tweet..." />
                <div className="input-group-append">
                    <Button
                        onClick={() => {
                            getUserText(text)
                            requestForSearch(searchedUser)
                            clearState()
                        }}
                        className="btn btn-outline-secondary bg-primary text-light" type="button">
                        Search
                    </Button>
                </div>
            </div>
            {searchText !== '' ? <UserCard searchText={searchText} searchedUser={searchedUser} name={name} username={username} userProfileImg={userProfileImg} followersCount={followersCount} friendsCount={friendsCount} userTweets={userTweets} /> : <div></div>}

        </div>
    )
}

var divHeight = {
    height: '75.25vh',
    minHeight: '75.25vh'
}

export default SearchComponent
