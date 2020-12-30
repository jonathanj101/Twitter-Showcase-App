import React, { useEffect, useState } from 'react'
import { Button, Card, Image, Toast } from 'react-bootstrap'
import redBlueImg from '../images/red-blue-tweet.jpg'

const UserCard = ({ searchedUser, name, username, userProfileImg, followersCount, friendsCount, userTweets }) => {
    console.log(searchedUser.user_info)
    console.log(`name > ${name} username > ${username} profile img > ${userProfileImg}, followers count > ${followersCount} friends count > ${friendsCount} tweets > ${userTweets}`)

    const [showToast, setToast] = useState(false)

    const toggleToast = () => setToast(!showToast)

    return (
        <div>
            <Card className='card w-25 mx-auto mt-5'>
                <div className="d-flex flex-row ">
                    <Image
                        className='h-50 w-50'
                        src={userProfileImg}
                        roundedCircle />
                    <div className="d-flex justify-content-center flex-column flex-wrap ml-2">
                        <strong>{searchedUser.user_info.name}</strong>
                        <small>{username}</small>
                    </div>
                </div>
                <div className="d-flex flex-row flex-wrap">
                    <Card.Text className="ml-5">{friendsCount} Following</Card.Text>
                    <Card.Text className="ml-5">{followersCount} Followers</Card.Text>
                </div>
                <Button
                    variant="primary"
                    onClick={() => toggleToast()}>
                    Show Tweets
                </Button>
                <Toast
                    onClose={() => toggleToast()}
                    show={showToast}>
                    <Button >
                        Random Tweets
                    </Button>
                    <Toast.Body>
                        Maybe
                    </Toast.Body>
                </Toast>
            </Card>
        </div>
    )
}

export default UserCard

// onClick={() => requestForSearch(searchedUser.user_info)}