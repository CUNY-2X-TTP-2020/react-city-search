import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

export default class CityFetcher extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            city: props.city
        }
    }

    componentDidMount()
    {

    }

    componentDidUpdate(prevProps)
    {
        
    }

    render()
    {

    }
}

CityFetcher.propTypes =
{
    city: PropTypes.string.isRequired
}