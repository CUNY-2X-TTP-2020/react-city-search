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
        return (
            <section>
                <h3>Zip Codes</h3>
                <ul>
                    {this.getZipCodes}
                </ul>
            </section>
        );
    }

    getZipCodes()
    {
        let listItems = [];

        this.props.zipCodes.forEach(element =>
        {
            listItems.push(<li>{element}</li>);
        });
        
        return listItems;
    }
}

CityCard.propTypes =
{
    zipCodes: PropTypes.array.isRequired
}