import React from 'react';
import './main.css';

let curDate = new Date().getHours();
let greeting = '';
const cssStyle = {
  textTransform: "uppercase",
};

if(curDate>=1 && curDate<12){
  greeting = "Good Morning";
  cssStyle.color = "green";
  document.body.className = "myclass1";
} else if (curDate >= 12 && curDate < 18){
  greeting = "Good Afternoon";
  cssStyle.color = "orange";
  document.body.className = "myclass2";
} else if (curDate >= 18 && curDate < 20) {
  greeting = "Good Evening";
  cssStyle.color = "rgb(253, 93, 34)";
  document.body.className = "myclass3";
} else {
  greeting = "Good Night";
  cssStyle.color = "gray";
  document.body.className = "myclass4";
}

function Main(){
    return(
        <>
        <div id="mydiv">
        <h1>Hello, <span style={cssStyle}>{greeting}</span></h1>
        </div>
        </>
    )
}

export default Main;