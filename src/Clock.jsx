import React from 'react';
import './clock.css';

setInterval(clockTiming,1000);
function clockTiming() {
    let d = new Date().toLocaleTimeString();
    document.getElementById('clocktime').innerHTML = d;
} 

 function Clock(){
    return(
        <>
        <div className="datetime">
      <div className="date">
        <span>{new Date().toDateString()}</span>
      </div>
      <div className="time">
        <span id="clocktime"></span>
      </div>
    </div>
        </>
    )
 }

 export default Clock;
