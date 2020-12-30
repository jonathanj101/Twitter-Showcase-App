import React, { useEffect, useState } from 'react'
import { Button, Card, Image, Toast } from 'react-bootstrap'
import redBlueImg from '../images/red-blue-tweet.jpg'

const UserCard = ({ name, searched_username, user_profile_img, user_followers, user_friends, user_tweets }) => {
    console.log(user_followers)
    // console.log(`name > ${name} username > ${username} profile img > ${userProfileImg}, followers count > ${followersCount} friends count > ${friendsCount} tweets > ${userTweets}`)

    const [showToast, setToast] = useState(false)

    const toggleToast = () => setToast(!showToast)

    return (
        <div>
            <Card className='card w-25 mx-auto mt-5'>
                <div className="d-flex flex-row ">
                    <Image
                        className='h-50 w-50'
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