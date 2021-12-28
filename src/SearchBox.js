import React from 'react';

const SearchBox = ({ onChange }) => {

    return (
        <input type="search" placeholder="Search by make..." onChange={onChange} />

    );
}

export default SearchBox;