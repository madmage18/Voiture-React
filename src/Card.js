import React from 'react';

const Card = ({ id, make, model, year }) => {

    return (
        <>
            <h1>Cars Card</h1>
            <div>{make}</div>
            <div>{model}</div>
            <div>{year}</div>
        </>
    );
}

export default Card;