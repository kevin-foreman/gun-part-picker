import React, { useState } from 'react';

const PewPartSelector = ({ onPartSelected }) => {
    const [selectedPart, setSelectedPart] = useState('');
    const [selectedSubPart, setSelectedSubPart] = useState('');
    const [submitSelection, setSubmitSelection] = useState(false);

    // Event handler to handle when a part changes
    const handlePartChange = (event) => {
        setSelectedPart(event.target.value);
        setSelectedSubPart('');
    }

    // Event handler for sub types
    const handleSubPartChange = (event) => {
        setSelectedSubPart(event.target.value);
        onPartSelected(selectedPart, event.target.value); // Notifying the parent component of the state change
    }

    // Need event handler for submission when making a selection
    const handleSubmitSelection = () => {
        setSubmitSelection(true);
        onPartSelected(selectedPart, selectedSubPart);
    }

    // const partTypes = ['Upper-Recievers', 'Lower-Recievers', 'Barrels', 'Triggers', 'Stocks', 'Charging-Handles', 'Optics', 'Bolt-Carrier-Groups', 'Pitol-Grips'];
    const parts = {
        'Upper-Recievers': ['Aero Precision', 'Grey Ghost Precision', 'Radical Firearms', 'Willow Defense', 'Daniel Defense', 'Foxtrot Mike'],
        'Lower-Recievers': ['Aero Precision', 'Grey Ghost Precision', 'Radical Firearms', 'Willow Defense', 'Daniel Defense', 'Foxtrot Mike'],
        'Barrels': ['Ballistic Advantage', 'Faxon Firearms', 'WMD Guns', 'Wylde'],
        'Triggers': ['Timney', 'CMC', 'Geissele', 'Hiperfire', 'Wilson Combat'],
        'Stocks': ['BCM', 'Magpul', 'Battle Arms', 'Mission First', 'MOE'],
        'Charging-Handles': ['Radian', 'Aero Precision', 'BCM'],
        'Optics': ['Vortex', 'Sig Sauer', 'Swampfox', 'Trijicon'],
        'Bolt-Carrier-Groups': ['Sons of Liberty', 'Aero Precision', 'Alpha Shooting', 'Jacob Grey', 'TRYBE'],
        'Pistol-Grips': ['BCM', 'Tyrant', 'Magpul', 'Tactical Deluxe', 'Stark One']
    };

    return (
        <div className='body'>
            <h1>Build a Pew</h1>
            <div>
                {submitSelection ? (
                    <div>
                        <strong>
                            Selected Part: {selectedPart}, Sub-Part: {selectedSubPart}
                        </strong>
                    </div>
                ) : (
                    <>
                        <label htmlFor='part'>Part: </label>
                        <select id='part' value={selectedPart} onChange={handlePartChange}>

                            <option value=''>Select A Part</option>
                            {Object.keys(parts).map((part) => (
                                <option key={part} value={part}>
                                    {part}
                                </option>
                            ))}
                        </select>

                {selectedPart && (
                    <>
                        <label htmlFor='subPart'> Sub-Part: </label>
                        <select id='subPart' value={selectedSubPart} onChange={handleSubPartChange}>
                            <option value=''>Select a sub-part</option>
                            {parts[selectedPart].map((subPart) => (
                                <option key={subPart} value={subPart}>
                                    {subPart}
                                </option>
                            ))}
                        </select>
                    </>
                )}
                {selectedPart && selectedSubPart && (
                    <button onClick={handleSubmitSelection}>Submit</button>
                )}
                </>
            </div>
        </div>
    );
}

export default PewPartSelector;