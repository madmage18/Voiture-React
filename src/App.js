import React, { Component } from 'react';
import Hero from './Hero';
import FooterCardList from './FooterCardList';
import CardList from './CardList';
import ContentList from './ContentList';
import SearchBox from './SearchBox';
import { cars } from './Cars';

class App extends Component {

    constructor() {
        super()
        this.state = {
            cars: cars,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        //console.log(event.target.value)
    }


    render() {

        const filteredCars = cars.filter(cars => {
            return cars.make.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        return (
            <>
                <Hero />
                <SearchBox onChange={this.onSearchChange} />
                <CardList cars={filteredCars} />
                <ContentList />
                <FooterCardList />
            </>
        );

    }
}

export default App;