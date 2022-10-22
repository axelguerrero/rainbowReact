import './App.css';
import React, { useState } from 'react'
//importing colorBlock comp we just made
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm'

function App(){
  let [colors, setColors] = useState (["purple", "blue", "red", "orange","yellow", "brown"])
  
  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock color={color} key={i} />
    )
})

const addColor = (newColor) => {
  setColors([...colors, newColor])
}

//.map to iterate through the array
return (
  <div className="App">
    {colors.map((color,i) =>
    <ColorBlock key={i} color={color} />
    )}
    <ColorForm addColor = {addColor}/>
  </div>
)
}

export default App;