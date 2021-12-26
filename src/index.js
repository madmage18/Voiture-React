import React from 'react';
import ReactDOM from 'react-dom';
//import Card from './Card';
//import { cars } from './Cars';
import Hero from './Hero';
//import FooterCard from './FooterCard';
import FooterCardList from './FooterCardList';
import CardList from './CardList';
import ContentList from './ContentList.js';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>
    <Hero />
    <CardList />

    <ContentList />

    <FooterCardList />


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//Show cards for available juices in an inventory using react. Available juices should be in a Juice.js file.