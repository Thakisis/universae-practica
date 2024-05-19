import React, { useState } from 'react';
import './UniversaeInicio.css';


export function UniversaeInicio ({ imageName }){
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='imageContainer'>
            <img 
                src={`../img/principal/${imageName}.png`}
                alt={imageName} 
                className={isHovered ? "gamePicHover" : "gamePic"}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            />
        </div>
    );
}