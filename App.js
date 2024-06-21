import React from "react";
import ReactDOM from "react-dom/client";




// Create React elements(Object) - Not HTML DOM element
// Return react object 
const NormalHeading = React.createElement("h2", {id: "heading1"}, "H One");

// This also Returns the same React element as others
const jsxDiv =  
<div>
    <h1 id="heading0" >I'm JSX bro</h1>
</div>

const child1 = React.createElement("div", {id: "child1"}, NormalHeading);
const child2 = React.createElement("div", {id: "child2"}, jsxDiv);

const parent = React.createElement("div", {id: "parent"}, [child1, child2]);



const root = ReactDOM.createRoot(document.getElementById("root"));

// Convert the React element into heading HTML DOM element, and render the DOM
root.render(parent);