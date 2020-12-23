import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Toast, Button, Image } from 'react-bootstrap'

const RandomTweetsComponent = ({ usersData }) => {
    const [fetchAndysTweets, andysTweets] = useState([])
    const [fetchBMWSTweets, bmwsTweets] = useState([])
    const [fetchGTRSTweets, gtrsTweets] = useState([])

    // useEffect(() => {
    //     fetch('/andy')
    //         .then(response => response.json())
    //         .then(tweet => {
    //             console.log(tweet)
    //             andysTweets(tweet)

    //         })
    // }, [])

    // const showAndysTweets = () => {

    // }

    const [showAndys, setShowAndys] = useState(false);
    const [showBMWS, setShowBMWS] = useState(false);
    const [showGTRS, setShowGTRS] = useState(false);

    const toggleAndysTweets = () => setShowAndys(!showAndys);
    const toggleBMWSTweets = () => setShowBMWS(!showBMWS);
    const toggleGTRSTweets = () => setShowGTRS(!showGTRS);

    return (
        <div
            className="bg-secondary d-flex justify-content-between"
            style={divHeight}>
            <div className="w-25">
                <Toast>
                    <Toast.Header closeButton={false}>
                        <Image
                            className="stick mr-2"
                            src={usersData.profile_image.andys}
                            alt="twiiter alike logo"
                            roundedCircle />
                        <strong className="mr-auto">{usersData.name.andy}</strong>
                        <small style={userNameStyle}>@{usersData.username.andy}</small>
                        <Button onClick={toggleAndysTweets}>click me</Button>
                    </Toast.Header>
                    <Toast className="w-100" onClose={toggleAndysTweets} show={showAndys}>
                        <Button  >andy</Button>
                        <Toast.Body>
                            <small>Created at: </small>
                        </Toast.Body>
                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                    </Toast>
                </Toast>
            </div>
            <div className="w-25">
                <Toast>
                    <Toast.Header closeButton={false}>
                        <Image
                            className="stick mr-2"
                            src={usersData.profile_image.gtrs}
                            alt="twiiter alike logo"
                            roundedCircle />
                        <strong className="mr-auto">{usersData.name.gtr}</strong>
                        <small style={userNameStyle}>@{usersData.username.gtrs}</small>
                        <Button onClick={toggleBMWSTweets}>click me</Button>
                    </Toast.Header>
                    <Toast className="w-100" onClose={toggleBMWSTweets} show={showBMWS}>
                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                    </Toast>
                </Toast>
            </div>
            <div className="w-25">
                <Toast>
                    <Toast.Header closeButton={false}>
                        <Image
                            className="stick mr-2"
                            src={usersData.profile_image.bmws}
                            alt="twiiter alike logo"
                            roundedCircle />
                        <strong className="mr-auto">{usersData.name.bmw}</strong>
                        <small style={userNameStyle}>@{usersData.username.bmw}</small>
                        <Button onClick={toggleGTRSTweets}>click me</Button>
                    </Toast.Header>
                    <Toast className="w-100" onClose={toggleGTRSTweets} show={showGTRS}>
                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                    </Toast>
                </Toast>
            </div>
        </div>
    )
}

var divHeight = {
    height: '75.25vh',
    minHeight: '75.25vh'
}

var userNameStyle = {
    position: "relative",
    top: "15px",
    right: "15rem",
}

export default RandomTweetsComponent