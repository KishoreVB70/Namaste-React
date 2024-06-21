import React from "react";
import ReactDOM from "react-dom/client";

// Create React elements(Object) - Not HTML DOM element
// Return react object 
const NormalHeading = React.createElement("h2", {id: "heading1"}, "H One");

// React Functional component -> Return JSXs
const jsxDiv = () => (
    <div>
        <h1 id="heading0" >I'm JSX Puffy</h1>
    </div>
);

// Arrow function shorthand notation
const headingElement = () => <h1>Hello Moto</h1>;

const child1 = React.createElement("div", {id: "child1"}, NormalHeading);

const parent = React.createElement("div", {id: "parent"}, [child1, jsxDiv]);



const root = ReactDOM.createRoot(document.getElementById("root"));

// Convert the React element into heading HTML DOM element, and render the DOM
root.render(parent);