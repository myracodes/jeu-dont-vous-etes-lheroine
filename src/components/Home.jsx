import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
    render() {
        return (
            <div class="flex-center">
                <h1>Bienvenue à bord du Poudlard Express !</h1>
                <p>
                    Vous venez d'embarquer à bord du célèbre train pour la première fois. <br />
                    Ce voyage vous emmène vers l'école qui sera votre maison pour les 7 prochaines années ! <br />
                    En parlant de maison, peut-être avec-vous une idée de celle qui sera la vôtre... ?
                </p>

                <Link exact to="/commencer" >
                    <h1>Commencer l'aventure</h1>
                </Link>

            </div>
        )
    }
}

export default Home;
