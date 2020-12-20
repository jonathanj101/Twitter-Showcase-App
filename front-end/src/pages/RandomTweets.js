import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Toast, Button, Image } from 'react-bootstrap'

const RandomTweetsComponent = () => {
    const [user, setUserData] = useState([])
    const [showA, setShowA] = useState(false);
    const [showB, setShowB] = useState(false);
    const [showC, setShowC] = useState(false);

    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);
    const toggleShowC = () => setShowC(!showC);

    useEffect(() => {
        fetch('/randomtweets')
            .then(response => response.json()).then(data => {
                setUserData(data)
            })
    }, [])
    console.log(user)

    return (
        <div
            className="bg-secondary d-flex justify-content-between"
            style={divHeight}>
            <div className="w-25">
                <Toast>
                    <Toast.Header closeButton={false}>
                        <Image
                            className="stick mr-2"
                            // src={user.profile_image.andys}
                            alt="twiiter alike logo"
                            roundedCircle />
                        {/* <strong className="mr-auto">{user.name.andy}</strong> */}
                        {/* <small style={userNameStyle}>@{user.username.andy}</small> */}
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
            <div className="w-25">
                <Toast>
                    <Toast.Header closeButton={false}>
                        <Image
                            className="stick mr-2"
                            // src={user.profile_image}
                            alt="twiiter alike logo"
                            roundedCircle />
                        {/* <strong className="mr-auto">{user.name}</strong> */}
                        {/* <small style={userNameStyle}>@{user.username}</small> */}
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
            <div className="w-25">
                <Toast>
                    <Toast.Header closeButton={false}>
                        <Image
                            className="stick mr-2"
                            // src={user.profile_image.bmws}
                            alt="twiiter alike logo"
                            roundedCircle />
                        {/* <strong className="mr-auto">{user.name.bmw}</strong> */}
                        {/* <small style={userNameStyle}>@{user.username.bmw}</small> */}
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
    top: "15px",
    right: "15rem",
}

export default RandomTweetsComponent