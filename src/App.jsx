// import { useEffect } from 'react';
import './App.css';
import PewPartSelector from '/src/components/pew-part/PewPart';
import Header from '/src/components/header/Header.jsx';
import path from 'path';
// const apiUrl = process.env.REACT_APP_API_URL;

function App() {

  const handlePartSelected = (part, subPart) => {
    // console.log('Selected part:', part);
    // console.log('Selected sub-part:', subPart);
    // console.log(submittedParts);
    // Store the selected part and sub-part, or make an API call here
  };

  return (
    <div className="App">
      <div>

      </div>

      <Header />

      <PewPartSelector onPartSelected={handlePartSelected} />
      
      </div>
      
  )
}

export default App
// ඞ
