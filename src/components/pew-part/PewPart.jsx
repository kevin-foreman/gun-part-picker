import React, { useState } from 'react';

const PewPartSelector = (props) => {
    const [partType, setPartType] = useState('');
    const [partSubType, setPartSubType] = useState('');

    // Need event handler to handle when a part changes
    // const handleChangePart = (event) => {
    //     setPartType(event.target.value);
    //     setPartSubType('');
    // }

    // Need event handler for sub types

    // Need event handler for submission when making a selection
    // const handleSubmit

    const partTypes = ['Upper-Recievers', 'Lower-Recievers', 'Barrels', 'Triggers', 'Stocks', 'Charging-Handles', 'Optics', 'Bolt-Carrier-Groups', 'Pitol-Grips'];
    const partSubTypes = {
        Upper-Recievers: ['Aero Precision', 'Grey Ghost Precision', 'Radical Firearms', 'Willow Defense', 'Daniel Defense', 'Foxtrot Mike'],
        Lower-Recievers: ['Aero Precision', ]
    }
}