import React, { useState } from 'react';

const PewPartSelector = ({ onPartSelected }) => {
    const [selectedPart, setSelectedPart] = useState('');
    const [selectedSubPart, setSelectedSubPart] = useState('');

    // Need event handler to handle when a part changes
    const handlePartChange = (event) => {
        setSelectedPart(event.target.value);
        setSelectedSubPart('');
    }

    // Need event handler for sub types

    // Need event handler for submission when making a selection
    // const handleSubmit

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
                <label htmlFor='part'>Part: </label>
                <select id='part' value={selectedPart} onChange={handlePartChange}>

                    <option value=''>Select A Part</option>

                </select>
            </div>
        </div>
    )
}

export default PewPartSelector;