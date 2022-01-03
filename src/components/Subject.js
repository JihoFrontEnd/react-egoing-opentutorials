import { Component } from "react";

class SubjectNormal extends Component {
  render() {
    return (
      <header>
        <h1>WEB</h1>
        <p>World Wide Web</p>
      </header>
    );
  }
}

class Subject extends Component {
  render() {
    return (
      <header>
        <a href="/"><h1>{this.props.title}</h1></a>
        <p>{this.props.subTitle}</p>
      </header>
    );
  }
}

export { SubjectNormal };
export default Subject;