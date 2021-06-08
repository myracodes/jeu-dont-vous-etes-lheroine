import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Commencer extends Component {
    render() {
        return (
            <div class="flex-center">
                <h1>Le cri</h1>
                Vous êtes à bord du train, en train de vous préparer pour l'arrivée au château. <br />
                Soudain, vous entendez un cri de terreur, qui semble venir de quelques wagons plus loin. <br />
                <br />
                Immédiatement, <br />
                <br />
                <div class='flex-horizontal'>
                <Link exact to="/choix1" >
                    <span class='small-container'>vous proposez aux autres personnes présentes dans le wagon de partir ensemble.</span>
                </Link>

                <Link exact to="/choix2" >
                    <span class='small-container'>vous vous élancez en courant en direction du bruit, sans la moindre hésitation. </span>
                </Link>
    
                </div>
            </div>
        )
    }
}

export default Commencer;
