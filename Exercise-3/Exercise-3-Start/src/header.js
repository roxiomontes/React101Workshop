import React from "react";

class Title extends React.Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}

class SubTitle extends React.Component {
  render() {
    return <div>Track your bitcoin net worth</div>;
  }
}

export class Header extends React.Component {
  render() {
    return (
      <div>
        <Title text={this.props.title} />
        <SubTitle />
      </div>
    );
  }
}
