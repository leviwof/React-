import react from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", {}, "Hello World");
ReactDOM.render(heading, document.getElementById("root"));

export default heading;