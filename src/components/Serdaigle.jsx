import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Serdaigle extends Component {
    render() {
        return (
            <div>
                <img src="https://img.women.com/images/images/000/182/909/large/luna_lovegood_raveclaw.jpg?1560970732" alt="serdaigle" /> <br />
                <Link exact to="/" >
                    <span class='small-container'>Recommencer l'aventure</span>
                </Link>
            </div>
        )
    }
}

export default Serdaigle
