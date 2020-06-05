import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import CityCard from './CityCard';

export default class CityFetcher extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            city: props.city,
            data: [],
            isFound: false
        }
    }

    componentDidMount()
    {
        const city = this.state.city.toUpperCase();
        const url = `https://ctp-zip-api.herokuapp.com/city/${city}`;

        axios.get(url)
        .then((response) =>
        {
            const data = response.data;

            this.setState({ data, isFound: true });
        })
        .catch((error) =>
        {
            console.log(error);
            this.setState({ data: [], isFound: false });
        });
    }

    componentDidUpdate(prevProps)
    {
        if(this.props.city !== prevProps.city)
        {
            const city = this.props.city.toUpperCase();
            const url = `https://ctp-zip-api.herokuapp.com/city/${city}`;

            axios.get(url)
            .then((response) =>
            {
                const data = response.data;

                this.setState({ data, isFound: true });
            })
            .catch((error) =>
            {
                console.log(error);
                this.setState({ data: [], isFound: false });
            });
        }
    }

    render()
    {
        return (
            this.state.isFound ?
            <section>
                <CityCard zipCodes={this.state.data} />
            </section>
            : <p>No results found</p>
        );
    }
}

CityFetcher.propTypes =
{
    city: PropTypes.string.isRequired
}