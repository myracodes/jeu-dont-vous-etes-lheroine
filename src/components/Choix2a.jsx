import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Choix2a extends Component {
    render() {
        return (
            <div>
                <h1>La cérémonie du Choixpeau</h1>
            <p>
                Alors que vous êtes enfin au chateau, après un discours d'introduction de la Directrice McGonagall, votre nom retentir. <br />
                Vous vous installez sur le tabouret, on dépose le Choixpeau sur votre tête.
            </p>

            <div class='flex-horizontal'>
            <Link exact to="/poufsouffle" >
                <span class='small-container'>Après quelques secondes, il s'écrie...</span>
            </Link>

            </div>
                
            </div>
        )
    }
}

export default Choix2a
