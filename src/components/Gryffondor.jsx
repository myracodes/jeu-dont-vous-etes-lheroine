import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Gryffondor extends Component {
    render() {
        return (
            <div>
                <img src="https://data.whicdn.com/images/98093724/original.jpg" alt="gryffondor" /> <br />
                <Link exact to="/" >
                    <span class='small-container'>Recommencer l'aventure</span>
                </Link>
            </div>
        )
    }
}

export default Gryffondor
