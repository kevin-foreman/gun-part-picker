import React, { useState } from 'react';

const PewPartSelector = ({ onPartSelected }) => {
    const [selectedPart, setSelectedPart] = useState('');
    const [selectedSubPart, setSelectedSubPart] = useState('');
    const [submitSelection, setSubmitSelection] = useState(false);
    // Add a new state variable to handle each part, as it is selected

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
        'Upper Reciever': ['Aero Precision', 'Grey Ghost Precision', 'Radical Firearms', 'Willow Defense', 'Daniel Defense', 'Foxtrot Mike'],
        'Lower Reciever': ['Aero Precision', 'Grey Ghost Precision', 'Radical Firearms', 'Willow Defense', 'Daniel Defense', 'Foxtrot Mike'],
        'Barrel': ['Ballistic Advantage', 'Faxon Firearms', 'WMD Guns', 'Wylde'],
        'Trigger': ['Timney', 'CMC', 'Geissele', 'Hiperfire', 'Wilson Combat'],
        'Stock': ['BCM', 'Magpul', 'Battle Arms', 'Mission First', 'MOE'],
        'Charging-Handle': ['Radian', 'Aero Precision', 'BCM'],
        'Optic': ['Vortex', 'Sig Sauer', 'Swampfox', 'Trijicon'],
        'Bolt Carrier Group': ['Sons of Liberty', 'Aero Precision', 'Alpha Shooting', 'Jacob Grey', 'TRYBE'],
        'Pistol Grip': ['BCM', 'Tyrant', 'Magpul', 'Tactical Deluxe', 'Stark One']
    };

    return (
        <div className='body'>
            <h1>Build a Pew</h1>
            <div>
                {/* This section starts with an inline ternary operator to handle whether a selection has been made*/}
                {submitSelection ? (
                    <div>
                        <strong>
                            Selected part: {selectedSubPart} {selectedPart} added to build
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
                        {selectedSubPart && (
                            <button onClick={handleSubmitSelection}>Submit</button>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default PewPartSelector;