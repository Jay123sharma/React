const element = document.createElement("div");
element.innerHTML = "i am in self div";
console.log("ele", element)
// const root = document.getElementById("root");
// root.appendChild(element);
const ele1 = React.createElement("h1", { key: "h1" ,id:"head1"}, "heading 1 csscscscscscs");
const ele2 = React.createElement("h2", { key: "h2" }, "heading 2");
const mainElement = React.createElement(
  "div",
  { style: { color: "green" } },
  [ele1, ele2]
);
console.log("ele11", ele1)
const reactRoot = ReactDOM.createRoot(document.getElementById("root1"));
reactRoot.render(mainElement);