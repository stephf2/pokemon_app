import React, { useState } from 'react'

const Form = ({ onSubmit }) => {
  const [inputText, setInputText] = useState('')

  const handleInput = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //pass submitted pokemon name to parent component
    onSubmit(inputText)
    setInputText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter a Pokemon name:
        <input
          type="text"
          value={inputText}
          onChange={handleInput}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
