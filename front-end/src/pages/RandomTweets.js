import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Toast, Button, Image } from 'react-bootstrap'
import redBlueTweet from '../images/red-blue-tweet.jpg'

const RandomTweetsComponent = () => {
    const [andysTweets, setAndysTweet] = useState({})
    const [showA, setShowA] = useState(false);
    const [showB, setShowB] = useState(false);
    const [showC, setShowC] = useState(false);

    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);
    const toggleShowC = () => setShowC(!showC);

    useEffect(() => {
        axios('/home')
            .then(response => {
                setAndysTweet(response.data)
            })
            .catch(err => console.log(err))
    }, [])
    console.log(andysTweets)

    return (
        <div
            className="bg-secondary d-flex justify-content-between"
            style={divHeight}>
            <div className="w-50">
                <Toast>
                    <Toast.Header closeButton={false}>
                        <Image
                            className="stick mr-2"
                            src={redBlueTweet}
                            alt="twiiter alike logo"
                            roundedCircle />
                        <strong className="mr-auto">{andysTweets.name}</strong>
                        <small style={userNameStyle}>{andysTweets.username}</small>
                        <small>11 mins ago</small>
                        <Button onClick={toggleShowA}>click me</Button>
                    </Toast.Header>
                    <Toast className="w-100" onClose={toggleShowA} show={showA}>
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
            <div className="w-50">
                <Toast>
                    <Toast.Header closeButton={false}>
                        <Image
                            className="stick mr-2"
                            src={redBlueTweet}
                            alt="twiiter alike logo"
                            roundedCircle />
                        <strong className="mr-auto">Bootstrap</strong>
                        <strong style={userNameStyle}>username</strong>
                        <small>11 mins ago</small>
                        <Button onClick={toggleShowB}>click me</Button>
                    </Toast.Header>
                    <Toast className="w-100" onClose={toggleShowB} show={showB}>
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
            <div className="w-50">
                <Toast>
                    <Toast.Header closeButton={false}>
                        <Image
                            className="stick mr-2"
                            src={redBlueTweet}
                            alt="twiiter alike logo"
                            roundedCircle />
                        <strong className="mr-auto">Bootstrap</strong>
                        <strong style={userNameStyle}>username</strong>
                        <small>11 mins ago</small>
                        <Button onClick={toggleShowC}>click me</Button>
                    </Toast.Header>
                    <Toast className="w-100" onClose={toggleShowC} show={showC}>
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
    top: "25px",
    right: "16rem",
}

export default RandomTweetsComponent