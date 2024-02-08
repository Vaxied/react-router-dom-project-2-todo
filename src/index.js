import React from "react";
import ReactDOM from "react-dom";
// import App from "./App/index.js";
import "./index.css";

function App(props) {
  return (
    <h1>
      {props.greeting}, {props.name}
    </h1>
  );
}

function withGreeting(greeting) {
  return function WrappedComponentWithGreeting(WrappedComponent) {
    return function Component(props) {
      return (
        <>
          <WrappedComponent {...props} greeting={greeting} />
        </>
      );
    };
  };
}

const AppWithGreeting = withGreeting("Hey")(App);

ReactDOM.render(
  <AppWithGreeting name="Arnold" />,
  // /* <App />,
  document.getElementById("root")
);
