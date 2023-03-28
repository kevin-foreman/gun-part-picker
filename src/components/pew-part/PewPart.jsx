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
        'Barrels': ['XXX', 'YYY', 'ZZZ'],
        'Triggers': ['XXX', 'YYY', 'ZZZ'],
        'Stocks': ['XXX', 'YYY', 'ZZZ'],
        'Charging-Handles': ['XXX', 'YYY', 'ZZZ'],
        'Optics': ['XXX', 'YYY', 'ZZZ'],
        'Bolt-Carrier-Groups': ['XXX', 'YYY', 'ZZZ'],
        'Pistol-Grips': ['XXX', 'YYY', 'ZZZ']
    };

    return (
        <div>
            Hello parts!
        </div>
    )
}

export default PewPartSelector;