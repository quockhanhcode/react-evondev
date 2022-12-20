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
            {/* {on ? 'on' : 'off'} */}
            {/* <div className='toggle-group'>
                <div className='toggle-on' onClick={() => setOn(true)}>On</div>
                <div className='toggle-off' onClick={() => setOn(false)}>Off</div>
            </div> */}
        </div>
    )
}

export default Toggle