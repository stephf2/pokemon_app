import React, { useState } from 'react'
import { Form, FetchPokemon } from './components'


const App = () => {
  const [submittedPokemonName, setSubmittedPokemonName] = useState('')

  return (
    <div>
      <h1>Pokemon</h1>
      <Form onSubmit={setSubmittedPokemonName} />
      <FetchPokemon submittedPokemonName={submittedPokemonName} />
    </div>
  )
}

export default App
