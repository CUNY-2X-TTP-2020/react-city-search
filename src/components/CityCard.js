import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CityCard extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            zipCodes: props.zipCodes
        }
    }

    render()
    {

    }
}

CityCard.propTypes =
{
    zipCodes: PropTypes.array.isRequired
}