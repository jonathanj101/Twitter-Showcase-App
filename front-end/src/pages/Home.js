import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Toast } from 'react-bootstrap'
import fishingTweets from '../images/fishing-tweet.jpg'

const Home = () => {
    const [initialData, setInitialData] = useState([{}])

    useEffect(() => {
        axios('/home')
            .then(response => {
                setInitialData(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div
            className='bg-secondary'
            style={divHeight}>
            <div className="container pt-2">
                <Toast className='mx-auto' style={toastPadding}>
                    <Toast.Header>
                        <img src={fishingTweets} className="stick rounded mr-2" alt="" />
                        <strong className="mr-auto">Fishing Tweets!</strong>
                    </Toast.Header>
                    <Toast.Body>
                        * This application uses Twitter API to search desired user's tweets
                    </Toast.Body>
                    <Toast.Body>
                        * Click on Search, to search for your favorite person's tweets
                    </Toast.Body>
                    <Toast.Body>
                        *{initialData.name}
                        *{initialData.lastName}
                        * Don't know what to look? Click on Random to see selected Twitter's users tweets!
                    </Toast.Body>
                    <Toast.Body>
                        * Have Fun!
                    </Toast.Body>
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
