import React from 'react';
import Hero from './Hero';
import FooterCardList from './FooterCardList';
import CardList from './CardList';
import ContentList from './ContentList';
import SearchBox from './SearchBox';

const App = () => {

    return (
        <>
            <Hero />
            <SearchBox />
            <CardList />
            <ContentList />
            <FooterCardList />
        </>
    );

}

export default App;