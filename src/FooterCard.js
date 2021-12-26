import React from 'react';

const FooterCard = ({ id, description, buttonText }) => {

    return (
        <>

            <div> {id}</div>
            <div> {description}</div>
            <button> {buttonText}</button>
        </>
    );
}

export default FooterCard;