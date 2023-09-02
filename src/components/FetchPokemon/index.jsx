import React, { useState, useEffect } from 'react'

const FetchPokemon = ({ submittedPokemonName }) => {
  const [pokemonData, setPokemonData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // pokemon abilities
  const [abilities, setAbilities] = useState([]);

  const fetchPokemonData = async () => {
    try {
      // if no pokemon is submitted
      if (submittedPokemonName === '') {
        setError('No pokemon yet, please submit a pokemon!')
        setPokemonData(null)
        setLoading(false)
        return
      }

      // loading
      setLoading(true)

      const url = `https://pokeapi.co/api/v2/pokemon/${submittedPokemonName.toLowerCase()}`
      const response = await fetch(url)
      const data = await response.json()

      // get abilities from object
      const pokemonAbilities = data.abilities.map((abilityObj) => abilityObj.ability.name)
      // update abilities state
      setAbilities(pokemonAbilities)

      // update state with fetched pokemon data
      setPokemonData(data)
      //reset error
      setError('')
      setLoading(false)

    } catch (err) {
      console.error(err)
      // send error message and reset state
      setError('Pokemon not found')
      setPokemonData(null)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPokemonData()
  }, [submittedPokemonName])
  // load when it is changed

  return (
    <div>
    
      {loading && <p>Loading...</p>}

      {!loading && error && <p>{error}</p>}

      {!loading && !error && pokemonData && (
        <div>
          <h2>{pokemonData.name}</h2>
          <img className='pokemonImage'
            src={pokemonData.sprites.front_default}
            alt={`${pokemonData.name} sprite`}
          />
          <p>Height: {pokemonData.height}</p>
          <p>Weight: {pokemonData.weight}</p>

        {!loading && !error && abilities.length > 0 && (
          <div className='abilitiesContainer'>
           <span>Abilities:</span>
           <ul className='abilitiesList'>
             {abilities.map(ability => (
               <li>{ability}</li>
             ))}
           </ul>
          </div>

        )}
        </div>
      )}
    </div>
  )
}

export default FetchPokemon
