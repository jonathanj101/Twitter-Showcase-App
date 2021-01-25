import React, { useState } from 'react'
import { Button, Card, Image, Toast } from 'react-bootstrap'
import Error401 from '../components/Error401'

const UserCard = ({
    name,
    searched_username,
    user_profile_img,
    user_followers,
    user_friends,
    user_tweets,
    is401Var,
    errMsg }) => {
    const [tweets, setTweets] = useState()
    const [showToast, setToast] = useState(false)

    const toggleToast = () => setToast(!showToast)

    const randomNum = (userTweets) => {
        const randomNum = Math.floor(Math.random() * (userTweets.length))
        return randomNum
    }

    const tweetsData = (tweetInfo) => {
        const tweetNum = randomNum(tweetInfo)
        setTweets(tweetInfo[tweetNum])
    }

    return (
        <div>
            {!is401Var
                ?
                <Card className='card w-25 mx-auto mt-5'>
                    <div className="d-flex flex-row ">
                        <Image
                            className='h-25 w-25'
                            src={user_profile_img}
                            roundedCircle />
                        <div className="d-flex justify-content-center flex-column flex-wrap ml-2">
                            <strong>{name}</strong>
                            <small>@{searched_username}</small>
                        </div>
                    </div>
                    <div className="d-flex flex-row flex-wrap">
                        <Card.Text className="ml-5">{user_friends} <strong>Following</strong></Card.Text>
                        <Card.Text className="ml-5">{user_followers} <strong>Followers</strong></Card.Text>
                    </div>
                    <Button
                        variant="primary"
                        onClick={() => toggleToast()}>
                        Show Tweets
                </Button>
                    <Toast
                        className="text-center"
                        onClose={() => toggleToast()}
                        show={showToast}>
                        <Button
                            onClick={() => tweetsData(user_tweets)}
                            block>
                            Random Tweets
                    </Button>
                        <Toast.Body>
                            {tweets}
                        </Toast.Body>
                    </Toast>
                </Card>
                :
                <Error401 errorMesg={errMsg} />}
        </div >
    )
}

export default UserCard