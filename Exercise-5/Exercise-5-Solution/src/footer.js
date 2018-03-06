import React from "react";

const styles = {
  margin: "50px"
};

export class Footer extends React.Component {
  render() {
    return (
      <footer style={styles}>
        Created just for: {this.props.name} on 6/3/2018
      </footer>
    );
  }
}
