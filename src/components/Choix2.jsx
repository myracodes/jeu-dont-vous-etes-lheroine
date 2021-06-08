import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Choix1 extends Component {
    render() {
        return (
            <div class="flex-center">
                <h1>Face au groupe</h1>
                <p>
                    Vous arrivez à monter un groupe de sorcières et sorciers de première année. Ensemble, vous courez jusqu'au bruit.
                </p>

                <div class='flex-horizontal'>
                <Link exact to="/choix2a" >
                <span class='small-container'>vous formez une chaîne serrée pour protéger l'élève. Vous aurez le temps de trouver une solution pour ces oreilles pendant la fin du trajet...</span>
                </Link>

                <Link exact to="/choix2b" >
                    <span class='small-container'>vous annoncez au groupe d'élèves que leur future maison vient sûrement de perdre des points avant même leur arrivée, alors que la vôtre en gagnera, lorsque vous aurez débarrassé ces oreilles. </span>
                </Link>
    
                </div>

            </div>
        )
    }
}

export default Choix1;
