import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Choix1 extends Component {
    render() {
        return (
            <div class="flex-center">
                <h1>Face au groupe</h1>
                <p>
                    Vous vous retrouvez face à une nouvelle recrue. <br />
                    Des oreilles longues et pointues ont poussé sur sa tête, et les élèves en face, plus âgé•es, sont hilares.
                </p>

                <div class='flex-horizontal'>
                <Link exact to="/choix1a" >
                    <span class='small-container'>Vous ricanez puis lui tendez la main, en disant des mots rassurants.</span>
                </Link>

                <Link exact to="/choix1b" >
                    <span class='small-container'>Vous vous interposez immédiatement, sans la moindre hésitation.</span>
                </Link>
    
                </div>

            </div>
        )
    }
}

export default Choix1;
