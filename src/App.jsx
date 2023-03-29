import { useState } from 'react'
import './App.css'
import PewPartSelector from '/src/components/pew-part/PewPart'

function App() {

  const handlePartSelected = (part, subPart) => {
    console.log('Selected part:', part);
    console.log('Selected sub-part:', subPart);
    // Store the selected part and sub-part, or make an API call here
  }

  return (
    <div className="App">
      <div>

      </div>

      {/* <Header /> */}

      <PewPartSelector onPartSelected={handlePartSelected} />
      
      </div>
      
  )
}

export default App
