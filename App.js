import React from "react";
import ReactDOM from "react-dom/client";

// Create React elements(Object) - Not HTML DOM element
// Return react object 
// React Functional component -> Return JSXs
let a = "Habibi welcome to puffy Kooty"

const Heading = () => <h1 id="h0" >{a}</h1>;

const JsxDiv = () => (
    <div>
        <Heading/>
        {
            "Habiibii"
        }
    </div>
);

const parent = React.createElement("div", {id: "parent"}, [<JsxDiv/>]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Convert the React element into heading HTML DOM element, and render the DOM
root.render(parent);