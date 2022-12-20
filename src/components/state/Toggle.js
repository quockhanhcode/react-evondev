import React, { useState } from 'react'
import './style.scss';


function Toggle() {
    const array = useState(false);

    const [on, setOn] = useState(false);
    // console.log(on);
    const handleToggle = () => {
        setOn(on => !on)
    }

    return (
        <div>
            <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
                <div className={`spiner ${on ? "active" : ""}`}></div>
            </div>
        </div>
    )
}

export default Toggle