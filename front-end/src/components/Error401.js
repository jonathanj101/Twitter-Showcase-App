import React from 'react'
import { Card, Image } from 'react-bootstrap'
import userNotFoundImg from '../images/user-not-found.jpg'

const Error401 = ({ errorMsg }) => {
    return (
        <div>
            <Card className="card w-25 mx-auto mt-5">
                <div className="d-flex flex-row" >
                    <Image
                        className='h-50 w-50'
                        src={userNotFoundImg}
                        roundedCircle />
                    <div className="d-flex justify-content-center flex-column flex-wrap ml-2">
                        <strong>user not found</strong>
                        <small>@user not found</small>
                    </div>
                </div>
                <Card.Text className="">
                    {errorMsg}
                </Card.Text>
            </Card>
        </div>
    )
}

export default Error401
