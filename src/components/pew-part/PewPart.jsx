import React, { useState, useEffect } from 'react';

const PewPartSelector = ({ onPartSelected }) => {
    const [selectedPart, setSelectedPart] = useState('');
    const [selectedSubPart, setSelectedSubPart] = useState('');
    const [submitSelection, setSubmitSelection] = useState(false);
    // Add a new state variable to handle each part, as it is selected
    const [selectedParts, setSelectedParts] = useState([]);
    // Add a state variable to handle each submitted part in the overall build
    const [submittedParts, setSubmittedParts] = useState([]);

    // Add useEffect to have instant access to the submitted parts
    useEffect(() => {
        console.log(submittedParts);
    }, [submittedParts]);

    // Add a state variable to handle conditional rendering of the submit build button
    const [showSubmitButton, setShowSubmitButton] = useState(false);

    // Event handler to handle when a part changes
    const handlePartChange = (event) => {
        setSelectedPart(event.target.value);
        setSelectedSubPart('');
    };

    // Event handler for sub types
    const handleSubPartChange = (event) => {
        setSelectedSubPart(event.target.value);
        onPartSelected(selectedPart, event.target.value); // Notifying the parent component of the state change
    };

    // Need event handler for submission when making a selection
    const handleSubmitSelection = () => {
        setSubmitSelection(true);
        onPartSelected(selectedPart, selectedSubPart);
        setSelectedParts([
            ...selectedParts,
            { part: selectedPart, subPart: selectedSubPart },
        ]);
        // Tried using only useState to handle this bit of code, but due to its asynchronous nature,
        // it would not work for what I wanted to do, addint useEffect as well
        setSubmittedParts([
            ...submittedParts,
            [selectedSubPart, selectedPart]
        ]);
        const newSubmittedBuild = [
            ...submittedParts,
            [selectedSubPart, selectedPart],
        ];
        setSubmittedParts(newSubmittedBuild);

        if (newSubmittedBuild.length >= 9) {
            setShowSubmitButton(true);
        }
        // console.log(submittedParts);
        setSelectedPart('');
        setSelectedSubPart('');
    };

    {/* This is a hard-coded parts array, could be changed later to use dynamic content rendered from custom database
        which would offer different part selections based on the platform selected, another future dev improvement */}
    const parts = {
        'Upper Reciever': ['Aero Precision', 'Grey Ghost Precision', 'Radical Firearms', 'Willow Defense', 'Daniel Defense', 'Foxtrot Mike'],
        'Lower Reciever': ['Aero Precision', 'Grey Ghost Precision', 'Radical Firearms', 'Willow Defense', 'Daniel Defense', 'Foxtrot Mike'],
        'Barrel': ['Ballistic Advantage', 'Faxon Firearms', 'WMD Guns', 'Wylde'],
        'Trigger': ['Timney', 'CMC', 'Geissele', 'Hiperfire', 'Wilson Combat'],
        'Stock': ['BCM', 'Magpul', 'Battle Arms', 'Mission First', 'MOE'],
        'Charging-Handle': ['Radian', 'Aero Precision', 'BCM'],
        'Optic': ['Vortex', 'Sig Sauer', 'Swampfox', 'Trijicon'],
        'Bolt Carrier Group': ['Sons of Liberty', 'Aero Precision', 'Alpha Shooting', 'Jacob Grey', 'TRYBE'],
        'Pistol Grip': ['BCM', 'Tyrant', 'Magpul', 'Tactical Deluxe', 'Stark One'],
        // 'Buffer Spring': ['X', 'XX', 'XXX'],
        // 'BUIS': ['X', 'XX', 'XXX'],
    };

    // JSX version of inline styling, create these objects and pass them into your html tag elements with curly braces
    const lableStyle = {
        color: '#ffffff',
        fontSize: '99%',
        margin: '20px',
    };

    const selectStyle = {
        width: '250px',
        height: '40px',
        fontSize: '18px',
        borderRadius: '10px',
    };

    return (
        <div className='body'>
            <h1>Build a Pew</h1>
            <div>

                {/* Render the parts to the page */}
                {selectedParts.map(({ part, subPart }, index) => (
                    <div key={`${part}-${subPart}-${index}`}>
                        
                        {/* inline style passed in from the objects above */}
                        <strong style={lableStyle}>
                            Selected part: {subPart} {part} added to build
                        </strong>
                    </div>
                ))};

                {/* Render the part and subPart */}
                <label style={lableStyle} htmlFor='part'>Part: </label>
                <select
                    style={selectStyle}
                    id='part'
                    value={selectedPart}
                    onChange={handlePartChange}
                >

                    <option value=''>Select A Part</option>
                    {Object.keys(parts).map((part) => (
                        <option key={part} value={part}>
                            {part}
                        </option>
                    ))}
                </select>

                {selectedPart && (
                    <>
                        <label style={lableStyle} htmlFor='subPart'> Brand: </label>
                        <select style={selectStyle} id='subPart' value={selectedSubPart} onChange={handleSubPartChange}>
                            <option value=''>Select a brand</option>
                            {parts[selectedPart].map((subPart) => (
                                <option key={subPart} value={subPart}>
                                    {subPart}
                                </option>
                            ))}
                        </select>
                    </>
                )};

                {selectedSubPart && (
                    <button onClick={handleSubmitSelection}>Submit</button>
                )}
            </div>
            <div>
                {showSubmitButton ? (
                    <button onClick={() => sendSubmittedBuild(submittedBuild)}>
                        Submit Entire Build
                    </button>
                ) : null}
            </div>
        </div >
    );
};

export default PewPartSelector;