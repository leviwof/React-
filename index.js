import React from "react";
import ReactDOM from "react-dom/client";

// React.createElemet => object => render done => HtmlElement
// JSX => Babel => React.createElement => object => render done => HtmlElement

// React.createElement(type, props, children)
// const heading = React.createElement("h1", { id: "heading" }, "Heelo Boy😁")

// JSX - HTML-like syntax that allows us to write HTML in React
// const jsxHeading = (
//     <h1 className="head">
//         😎This is JSX Heading h😎
//     </h1>)

// React component - Function that returns JSX
// react function component - function that returns JSX 
// const HeadingComponent2 = () => {
//     <h1 className="head" tabIndex="4">
//         This is a react functional component😊
//     </h1>
// }

// const HeadingComponent3 = () => <h1> This is a react functional component</h1>

// const HeadingComponent1 = () => {
//     <div id="constiner">
//         <h1> This is a react functional component</h1>
//     </div>
// }

// HeadingComponent1 , HeadingComponent2, HeadingComponent3 are all same

const Title = () => (
    <h1> This is title m companent </h1>
)
const HeadingComponent = () => (
    <div className="container">
        <Title />
        <h1> This is a react functional component</h1>
    </div>

)

// ReactDOM.render(heading, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);


