import React from 'react';
const Card = (props) => {
    const {id,name,hair_color} = props;
    return(
        <div className = 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt = 'robots' src = {`https://robohash.org/${id}?200x200`}></img>
            <div>
                <h2> {name} </h2>
                <p> {hair_color} </p>
            </div>
        </div>
    );
}

export default Card;