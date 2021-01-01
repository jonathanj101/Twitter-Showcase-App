import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import UserCard from '../components/UserCard'

const SearchComponent = ({ getUserText, searchText, searchedName, user_name, user_profile_img, user_followers, user_friends, user_tweets }) => {
    const [text, getText] = useState('')

    function clearState() {
        getText("")
    }

    function getValueInput(e) {
        const { value } = e.target
        getText(value)
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
                    placeholder="Search for a user by typing their username: E.g: nasa..." />
                <div className="input-group-append">
                    <Button
                        onClick={() => {
                            getUserText(text)
                            clearState()
                        }}
                        className="btn btn-outline-secondary bg-primary text-light" type="button">
                        Search
                    </Button>
                </div>
            </div>
            {searchText !== ''
                ?
                <UserCard
                    searchText={searchText}
                    name={searchedName}
                    searched_username={user_name}
                    user_profile_img={user_profile_img}
                    user_followers={user_followers}
                    user_friends={user_friends}
                    user_tweets={user_tweets} />
                :
                <div></div>}

        </div>
    )
}

var divHeight = {
    height: '75.25vh',
    minHeight: '75.25vh'
}

export default SearchComponent
