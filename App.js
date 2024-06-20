// Return react object
const heading1 = React.createElement("h1", {id: "heading1"}, "H One");
const heading2 = React.createElement("h1", {id: "heading2"}, "H Two");


const child1 = React.createElement("div", {id: "child1"}, heading1);
const child2 = React.createElement("div", {id: "child2"}, heading2);

const parent = React.createElement("div", {id: "parent"}, [child1, child2]);


const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);

// Convert the heading object into heading HTML element, and render the DOM
root.render(parent);