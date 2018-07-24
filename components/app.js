import React from 'react';
import CharacterList from './characterList';
import HeroesList from './heroesList';
import Stats from './stats';

const App = () => {
    return (
        <div className="App">
            <h1 className="text-uppercase">Super Squad</h1>
            <div className="col-xs-4">
                <CharacterList />
            </div>
            <div className="col-xs-4">
                <HeroesList />
            </div>
            <div className="col-xs-4">
                <Stats />
            </div>
        </div>
    );
}

export default App;
