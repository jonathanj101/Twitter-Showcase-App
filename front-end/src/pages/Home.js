import React, { useState } from 'react'
import { Toast, Button } from 'react-bootstrap'
import fishingTweets from '../images/fishing-tweet.jpg'

const Home = () => {
    const [showA, setShowA] = useState(false);

    const toggleShowA = () => setShowA(!showA);

    return (
        <div
            className='bg-secondary'
            style={divHeight}>
            <div className="container pt-2">
                <Toast
                    className='mx-auto mb-0'
                    style={toastPadding}>
                    <Toast.Header closeButton={false}>
                        <img src={fishingTweets} className="stick rounded mr-2" alt="" />
                        <strong className="mr-auto">Fishing Tweets!</strong>
                        <Button onClick={toggleShowA}>Click Me</Button>
                    </Toast.Header>
                    <Toast
                        className="mx-auto w-100"
                        onClose={toggleShowA}
                        show={showA}>
                        <Toast.Body >
                            * This application uses Twitter API to search desired user's tweets
                    </Toast.Body>
                        <Toast.Body>
                            * Click on Search, to search for your favorite person's tweets
                    </Toast.Body>
                        <Toast.Body>
                            * Don't know what to look? Click on Random to see my selected Twitter's users tweets!
                    </Toast.Body>
                        <Toast.Body>
                            * Have fun
                    </Toast.Body>
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

var toastPadding = {
    margin: '10% auto',
}


export default Home
