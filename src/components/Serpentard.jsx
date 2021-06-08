import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Serpentard extends Component {
    render() {
        return (
            <div>
                <img src="https://images.squarespace-cdn.com/content/v1/5e6651e983e54a6b985f20d6/1594647585355-J1V3B8PAIF875GABCWBE/ke17ZwdGBToddI8pDm48kGVAqUhYrGdhEGudzFls7K1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIJit7nLBfbiTxuteTYcG_gtVxz0kc0mKQ8mrhuae_pfEKMshLAGzx4R3EDFOm1kBS/Your+reader+has+an+inner-Slytherin?format=1000w" alt="serpentard" /> <br />
                <Link exact to="/" >
                    <span class='small-container'>Recommencer l'aventure</span>
                </Link>
            </div>
        )
    }
}

export default Serpentard
