import React from 'react'
import { Toast } from 'react-bootstrap'
import stickManFishing from '../images/stickman-fishing.jpg'

const Home = () => {
    return (
        <div className='bg-dark'>
            <div className="container">
                <Toast>
                    <Toast.Header>
                        <img src={stickManFishing} className="stick rounded mr-2" alt="" />
                        <strong className="mr-auto">Fishing Tweets!</strong>
                    </Toast.Header>
                    <Toast.Body>Click on Search to look up Tweets from Twitter</Toast.Body>
                    <Toast.Body>Don't know what to look? Click on Random to see selected Twitter's users tweets!</Toast.Body>
                </Toast>
            </div>
        </div>
    )
}

export default Home
