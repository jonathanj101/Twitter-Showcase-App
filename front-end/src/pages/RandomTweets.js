import React from 'react'
import idk from '../images/red-blue-tweet.jpg'

const RandomTweetsComponent = () => {
    return (
        <div className="h-100 w-100">

            <div className="card-group">
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
            </div>
        </div>
    )
}

export default RandomTweetsComponent
