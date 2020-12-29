import React, { useEffect, useState } from 'react'
import { Button, Card, Image, Toast } from 'react-bootstrap'
import redBlueImg from '../images/red-blue-tweet.jpg'

const UserCard = ({ searchedUser }) => {
    console.log(searchedUser)
    const [name, setName] = useState('')
    const [username, setUserName] = useState('')
    const [userProfileImg, setUserProfileImg] = useState('')
    const [followersCount, setFollowersCount] = useState('')
    const [friendsCount, setFriendsCount] = useState('')
    const [userTweets, setUserTweets] = useState([])
    const [showToast, setToast] = useState(false)

    const toggleToast = () => setToast(!showToast)

    function requestForSearch(user) {
        if (user !== '') {
            setName(user.name)
            setUserName(user.username)
            setUserProfileImg(user.profile_image)
            setFollowersCount(user.followers_count)
            setFriendsCount(user.following)
            setUserTweets(user.tweets)
        }
        else {
            return <div></div>
        }
    }

    return (
        <div>
            <Card className='card w-25 mx-auto mt-5'>
                <div className="d-flex flex-row ">
                    <Image
                        className='h-50 w-50'
                        src={userProfileImg}
                        roundedCircle />
                    <div className="d-flex justify-content-center flex-column flex-wrap ml-2">
                        <strong>{name}</strong>
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
                    <Button onClick={() => requestForSearch(searchedUser.user_info)}>
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
