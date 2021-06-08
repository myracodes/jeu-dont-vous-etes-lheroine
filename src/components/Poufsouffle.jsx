import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Poufsouffle extends Component {
    render() {
        return (
            <div>
                <img src="https://static3.srcdn.com/wordpress/wp-content/uploads/2019/07/Newt-Scamander-and-Cedric-Diggory-in-Hufflepuff-House-in-Harry-Potter.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5" alt="poufsouffle" /> <br />
                <Link exact to="/" >
                    <span class='small-container'>Recommencer l'aventure</span>
                </Link>
            </div>
        )
    }
}

export default Poufsouffle
