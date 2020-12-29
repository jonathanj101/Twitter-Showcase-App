import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import UserCard from '../components/UserCard'

const SearchComponent = ({ getUserText, searchText, searchedUser }) => {
    const [text, getText] = useState('')

    function clearState() {
        getText("")
    }

    function getValueInput(e) {
        const { value } = e.target
        console.log(value)
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
                    placeholder="Search for a user tweet..." />
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
            {searchText !== '' ? <UserCard searchText={searchText} searchedUser={searchedUser} /> : <div></div>}
        </div>
    )
}

var divHeight = {
    height: '75.25vh',
    minHeight: '75.25vh'
}

export default SearchComponent
