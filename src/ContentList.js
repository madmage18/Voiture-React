import React from 'react';
import Content from './Content';
import { bodyContent } from './MoreInfo.js';



const ContentList = () => {

    return (
        <>
            {bodyContent.map((content, i) => {
                return <Content textContent={bodyContent[i].description} />

            })}

        </>
    );
}

export default ContentList;