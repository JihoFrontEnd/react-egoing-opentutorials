import { Component } from "react";

class UpdateContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.content.id,
      title: props.content.title,
      description: props.content.desc,
    };
  }

  inputValueHandler(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const inputValueHandler = this.inputValueHandler.bind(this);
    return (
      <form
        action="/update_process"
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.onSubmit(this.state);
        }
      }>
        <h2>Update Content</h2>
        <input type="hidden" value={this.state.id} />
        <p>
          <input
            name="title"
            type="text"
            placeholder="title"
            value={this.state.title}
            onChange={inputValueHandler}
          />
        </p>
        <p>
          <textarea
            name="description"
            placeholder="description..."
            value={this.state.description}
            onChange={inputValueHandler}
          />
        </p>
        <input type="submit" />
      </form>
    );
  }
}

export default UpdateContent;