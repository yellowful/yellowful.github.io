import React from 'react';
const Card = (props) => {
    const {id,name,height,mass} = props;
//    debugger;
    return(
        <div className = 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt = 'robots' src = {`https://robohash.org/${id}?200x200`}></img>
            <div>
                <h2> {name} </h2>
                <p> {height} cm </p>
                <p> {mass} kg </p>
            </div>
        </div>
    );
}

export default Card;