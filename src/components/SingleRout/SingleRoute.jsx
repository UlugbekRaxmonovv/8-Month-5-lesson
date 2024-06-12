import React from 'react';
import './SingleRoute.css'
const SingleRoute = ({detail}) => {
    return (
        <div>
                <h1>SingleRoute</h1>
            <div className="singli">
                <div className="singli_rout">
            <img src={detail.images[0]} width={200} alt="" />
             <span>{detail.price}</span>
                </div>
                <div className="singli_rout">
          <h1>{detail.title}</h1>
          <p>{detail.description}</p>

                </div>
            </div>
        </div>
    );
}

export default SingleRoute;
