import React from "react";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  render() {
    return (
      <div style={styles}>
        <h1>San Diego JS</h1>
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
