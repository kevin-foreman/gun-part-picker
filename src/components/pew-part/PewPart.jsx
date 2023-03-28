import React, { useState } from 'react';

const PewPartSelector = ({ onPartSelected }) => {
    const [selectedPart, setSelctedPart] = useState('');
    const [selectedSubPart, setSelectedSubPart] = useState('');

    // Need event handler to handle when a part changes
    // const handleChangePart = (event) => {
    //     setPartType(event.target.value);
    //     setPartSubType('');
    // }

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
        <div>
            Hello parts!
        </div>
    )
}

export default PewPartSelector;