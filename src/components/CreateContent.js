import { Component } from "react";

class CreateContent extends Component {
  render() {
    return (
      <form
        action="/create_process"
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.onSubmit(e.target.title.value, e.target.description.value);
        }
      }>
        <h2>Create Content</h2>
        <p><input name="title" type="text" placeholder="title" /></p>
        <p><textarea name="description" placeholder="description..." /></p>
        <input type="submit" />
      </form>
    );
  }
}

export default CreateContent;