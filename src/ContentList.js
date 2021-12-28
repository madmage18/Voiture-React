import React from 'react';
import Content from './Content';
import { bodyContent } from './MoreInfo.js';



const ContentList = () => {

    return (
        <>
            {bodyContent.map((content, i) => {
                return <Content key={bodyContent[i].id} textContent={bodyContent[i].description} />

            })}

        </>
    );
}

export default ContentList;