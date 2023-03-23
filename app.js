const heading = [React.createElement(
    "div",
    { id: "child1" }, React.createElement("h1",{id: "heading"}, "Heading of child 1")), React.createElement(
        "div",
        { id: "child2" }, React.createElement("h1", {id: "heading"}, "heading of child 2"))];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);