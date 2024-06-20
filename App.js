// Return react object
const heading = React.createElement("h1", {id: "heading"}, "H World");


const child = React.createElement("div", {id: "child"}, heading);
const parent = React.createElement("div", {id: "parent"}, child);


const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
console.log(root);

// Convert the heading object into heading HTML element, and render the DOM
root.render(parent);