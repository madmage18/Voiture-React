import React from 'react';
import { moreInfo } from './MoreInfo';
import FooterCard from './FooterCard';

const FooterCardList = () => {



    return (
        <>
            <h1>Learn more</h1>
            <div>
                {moreInfo.map((info, i) => {
                    return (
                        <FooterCard
                            key={moreInfo[i].id}
                            description={moreInfo[i].description}
                            buttonText={moreInfo[i].buttonText} />)
                }
                )}
            </div>
        </>
    );
}

export default FooterCardList;