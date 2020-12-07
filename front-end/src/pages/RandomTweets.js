import React from 'react'
import idk from '../images/red-blue-tweet.jpg'

const RandomTweetsComponent = () => {
    return (
        <div
            className="bg-secondary"
            style={divHeight}>

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
var divHeight = {
    height: '75.25vh',
    minHeight: '75.25vh'
}

export default RandomTweetsComponent
