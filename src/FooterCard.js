import React from 'react';

const FooterCard = ({ id, description, buttonText }) => {

    return (
        <div >
            <div className='subtitle'>
                <div> {description}</div>
            </div>

            <button> {buttonText}</button>
        </div>
    );
}

export default FooterCard;