import React from 'react';
import Backbone from 'backbone';

const HomePage =  React.createClass({
    displayName: 'HomeView',
    render() {
        return (
            <div>
                <h1>Bienvenue sur l'application de démo FOCUS</h1>
                <p><a onClick={() => Backbone.history.navigate('movies/10001', true)}>Movie 10001</a></p>
                <p><a onClick={() => Backbone.history.navigate('persons/10', true)}>Person 10</a></p>
            </div>
        );
    }
});

export default HomePage;
