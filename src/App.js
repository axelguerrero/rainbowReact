import React, { useState } from 'react'
//importing colorBlock comp we just made
import ColorBlock from './colorBlock'

function App() {
  let colors = ["purple", "blue", "red", "orange", "brown"]
  let colorMap = colors.map((color, i) => {
    return (
        <ColorBlock color={color} />
    )
})

return (
    <div className="App">
        {colorMap}
    </div>
)
}

export default App;