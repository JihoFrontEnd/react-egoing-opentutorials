import { Component } from "react";

class ContentNormal extends Component {
  render() {
    return (
      <article>
        <h2>HTML</h2>
        <p>
          HTML is HyperText Markup Language.
        </p>
      </article>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </article>
    );
  }
}

export { ContentNormal };
export default Content;