import React, { useState } from 'react'
import { Button, Card, Image, Toast } from 'react-bootstrap'

import redBlue from '../images/red-blue-tweet.jpg'

const SearchComponent = ({ getUserText, searchText }) => {
    const [showToast, setToast] = useState(false)
    const [text, getText] = useState('')

    function clearState() {
        getText("")
    }

    function getValueInput(e) {
        const { value } = e.target
        console.log(value)
        getText(value)
    }

    function requestForSearch(searchText) {
        fetch(`/search/${searchText}`)
            .then(response => response.json())
            .then(data => console.log(data))
    }

    const toggleToast = () => setToast(!showToast)

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
                    <button
                        onClick={() => {
                            getUserText(text)
                            clearState()
                        }}
                        className="btn btn-outline-secondary bg-primary text-light" type="button">
                        Search
                    </button>
                </div>
            </div>
            <Card className='w-25 mx-auto mt-5'>
                <div className="d-flex flex-row ">
                    <Image
                        className='h-50 w-50'
                        src={redBlue}
                        roundedCircle />
                    <div className="d-flex justify-content-center flex-column flex-wrap ml-2">
                        <strong>name</strong>
                        <small>username</small>
                    </div>
                </div>
                <div className="d-flex flex-row flex-wrap">
                    <Card.Text className="ml-5">Following</Card.Text>
                    <Card.Text className="ml-5">Followers</Card.Text>
                </div>
                <Button
                    variant="primary"
                    onClick={() => toggleToast()}>
                    Show Tweets
                </Button>
                <Toast
                    onClose={() => toggleToast()}
                    show={showToast}>
                    <Button onClick={() => requestForSearch(searchText)}>
                        Random Tweets
                    </Button>
                    <Toast.Body>
                        idk
                    </Toast.Body>
                </Toast>
            </Card>
        </div>
    )
}

var divHeight = {
    height: '75.25vh',
    minHeight: '75.25vh'
}

export default SearchComponent
