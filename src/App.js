import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(data => setPokemonList(data.results))
      .catch(error => console.error('Error fetching Pokemon:', error));
  }, []);

  return (
    <div className="App">
      <h1>Pokemon List</h1>
      <ul>
        {pokemonList.map(pokemon => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
