import React from 'react';


const Header = () => {
    const headerStyle = {
        width: '100%',
        textAlign: 'center',
        margin: 0
    };

    const imgStyle = {
        width: '85%',
    };
    return (
        <div>
            <header style={headerStyle}>
                <img src='src/assets/pew-professional.png' alt="Pew Professional" style={imgStyle} />
            </header>
        </div>
    )
};

export default Header;