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
        <h1>
          <a href="/" onClick={(e) => {
            e.preventDefault();
            this.props.onChangePage();
          }}>
            {this.props.title}
          </a>
        </h1>
        <p>{this.props.subTitle}</p>
      </header>
    );
  }
}

export { SubjectNormal };
export default Subject;