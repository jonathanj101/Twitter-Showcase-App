import React, { useState } from 'react'
import { Toast, Button, Image } from 'react-bootstrap'

const RandomTweetsComponent = ({ usersData, andyTweets, bmwTweets, gtrTweets }) => {
    const [andysRandomTweets, andysTweetsFunc] = useState([])
    const [fetchBMWSTweets, bmwsTweetsFunc] = useState([])
    const [fetchGTRSTweets, gtrsTweetsFunc] = useState([])

    const [showAndys, setShowAndys] = useState(false);
    const [showBMWS, setShowBMWS] = useState(false);
    const [showGTRS, setShowGTRS] = useState(false);

    const toggleAndysTweets = () => setShowAndys(!showAndys)
    const toggleBMWSTweets = () => setShowBMWS(!showBMWS);
    const toggleGTRSTweets = () => setShowGTRS(!showGTRS);

    const randomNum = (userTweets) => {
        const randomNum = Math.floor(Math.random() * (userTweets.length))
        return randomNum
    }

    const tweetsData = (tweetInfo) => {
        const tweetNum = randomNum(tweetInfo)
        if (tweetInfo === andyTweets) {
            return andysTweetsFunc(tweetInfo[tweetNum])
        }
        else if (tweetInfo === bmwTweets) {
            return bmwsTweetsFunc(tweetInfo[tweetNum])
        }
        else {
            return gtrsTweetsFunc(tweetInfo[tweetNum])
        }
    }

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
                        <div className="mr-auto d-flex flex-column flex-wrap">
                            <strong >{usersData.name.andy}</strong>
                            <small >@{usersData.username.andys}</small>
                        </div>
                        <Button
                            onClick={toggleAndysTweets}>
                            Show Tweets
                        </Button>
                    </Toast.Header>
                    <Toast
                        className="w-100"
                        onClose={toggleAndysTweets}
                        show={showAndys}>
                        <Button
                            onClick={() => tweetsData(andyTweets)}
                            className="mx-auto"
                        >
                            Random Andy's Tweets
                        </Button>
                        <Toast.Body>{andysRandomTweets}</Toast.Body>
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
                        <div className="mr-auto d-flex flex-column flex-wrap">
                            <strong className="mr-auto">{usersData.name.gtr}</strong>
                            <small>@{usersData.username.gtrs}</small>
                        </div>
                        <Button
                            onClick={toggleGTRSTweets}>
                            Show Tweets
                        </Button>
                    </Toast.Header>
                    <Toast
                        className="w-100"
                        onClose={toggleBMWSTweets}
                        show={showGTRS}>
                        <Button
                            onClick={() => tweetsData(gtrTweets)}
                        >
                            Random GTR's Tweets
                        </Button>
                        <Toast.Body>
                            {fetchGTRSTweets}
                        </Toast.Body>
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
                        <div className="mr-auto d-flex flex-column flex-wrap">
                            <strong className="mr-auto">{usersData.name.bmw}</strong>
                            <small>@{usersData.username.bmws}</small>
                        </div>
                        <Button
                            onClick={toggleBMWSTweets}
                        >
                            Show Tweets
                        </Button>
                    </Toast.Header>
                    <Toast
                        className="w-100"
                        onClose={toggleBMWSTweets}
                        show={showBMWS}>
                        <Button
                            onClick={() => tweetsData(bmwTweets)}
                        >
                            Random BMW's Tweets
                        </Button>
                        <Toast.Body>
                            {fetchBMWSTweets}
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

export default RandomTweetsComponent