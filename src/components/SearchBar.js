import React, { Component } from 'react';

import CityFetcher from './CityFetcher';

export default class SearchBar extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            prevSearch: "Try Brooklyn",
            hasSearched: false
        }
    }

    handleSubmit = (event) =>
    {
        // Prevent browser reload/refresh
        event.preventDefault();

        this.setState({ prevSearch: event.target.searchbar.value, hasSearched: true });
        event.target.reset();
    }

    render()
    {
        return (
            this.state.hasSearched ?
            <section>
                <form onSubmit={this.handleSubmit}>
                    <div>City</div>
                    <input type="text" name="searchbar" id="searchbar" placeholder={this.state.prevSearch} />
                </form>
                <CityFetcher city={this.state.prevSearch} />
            </section>
            :
            <section>
                <form onSubmit={this.handleSubmit}>
                    <div>City</div>
                    <input type="text" name="searchbar" id="searchbar" placeholder={this.state.prevSearch} />
                </form>
            </section>
        );
    }
}