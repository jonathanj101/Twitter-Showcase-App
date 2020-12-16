import React, { useState } from 'react'
import { Toast, Button, Image } from 'react-bootstrap'
import redBlueTweet from '../images/red-blue-tweet.jpg'

const RandomTweetsComponent = () => {
    const [showA, setShowA] = useState(false);

    const toggleShowA = () => setShowA(!showA);
    return (
        <div
            className="bg-secondary d-flex align-items-center "
            style={divHeight}>
            <div className=" d-flex justify-content-between">
                <Toast className="w-25 h-50">
                    <Toast.Header closeButton={false}>
                        <Image
                            className="stick mr-2"
                            src={redBlueTweet}
                            alt="twiiter alike logo"
                            roundedCircle />
                        <strong className="mr-auto">Bootstrap</strong>
                        <strong style={userNameStyle}>username</strong>
                        <small>created at</small>
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
                <Toast className="w-25 h-50">
                    <Toast.Header closeButton={false}>
                        <Image
                            className="stick mr-2"
                            src={redBlueTweet}
                            alt="twiiter alike logo"
                            roundedCircle />
                        <strong className="mr-auto">Bootstrap</strong>
                        <strong style={userNameStyle}>username</strong>
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
                <Toast className="w-25 h-50">
                    <Toast.Header closeButton={false}>
                        <Image
                            className="stick mr-2"
                            src={redBlueTweet}
                            alt="twiiter alike logo"
                            roundedCircle />
                        <strong className="mr-auto">Bootstrap</strong>
                        <strong style={userNameStyle}>username</strong>
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
    right: "32rem",
}



export default RandomTweetsComponent