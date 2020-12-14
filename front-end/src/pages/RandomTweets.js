import React, { useState } from 'react'
import { Toast, Button } from 'react-bootstrap'
import redBlueTweet from '../images/red-blue-tweet.jpg'

const RandomTweetsComponent = () => {
    const [showA, setShowA] = useState(false);

    const toggleShowA = () => setShowA(!showA);
    return (
        <div
            className="bg-secondary"
            style={divHeight}>
            <div className="">
                <Toast className="mb-0 w-50">
                    <Toast.Header closeButton={false}>
                        <img
                            className="stick rounded mr-2"
                            src={redBlueTweet}
                            alt="twiiter alike logo" />
                        <strong className="mr-auto">Bootstrap</strong>
                        <strong style={userNameStyle}>username</strong>
                        <small>11 mins ago</small>
                        <Button onClick={toggleShowA}>click me</Button>
                    </Toast.Header>
                </Toast>
                <Toast className="w-50" onClose={toggleShowA} show={showA}>
                    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
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
    right: "17.5rem",
}

var toastPadding = {
    margin: "10% auto"
}

export default RandomTweetsComponent


{/* <div className="card-group">
<div className="card" >
    <img src={idk} class="card-img-top" alt="..." />
    <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">idk</p>
        <button className="btn btn-primary">Go somewhere</button>
    </div>
</div>
<div className="card" >
    <img src={idk} class="card-img-top" alt="..." />
    <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">idk</p>
        <button className="btn btn-primary">Go somewhere</button>
    </div>
</div>
<div className="card" >
    <img src={idk} class="card-img-top" alt="..." />
    <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">idk</p>
        <button className="btn btn-primary">Go somewhere</button>
    </div>
</div>
</div> */}
