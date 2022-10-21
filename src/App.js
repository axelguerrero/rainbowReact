import './App.css';
import React, { useState } from 'react'
//importing colorBlock comp we just made
import ColorBlock from './ColorBlock'

function App(){
  let [colors, setColors] = useState (["purple", "blue", "red", "orange", "brown"])
  
  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock color={color} />
    )
})

//.map to iterate through the array
return (
  <div className="App">
      {colorMap}
  </div>
)
}

export default App;