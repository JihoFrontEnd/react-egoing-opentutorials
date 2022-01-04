import { Component } from "react";

class Controller extends Component {
  render() {
    return (
      <ul>
        <li>
          <a href="/create" onClick={(e) => {
            e.preventDefault();
            this.props.onChangeMode('create');
          }}>
            Create
          </a>
        </li>
        <li>
          <a href="/update" onClick={(e) => {
            e.preventDefault();
            this.props.onChangeMode('update');
          }}>
            Update
          </a>
        </li>
        <li>
          <input
            type="button"
            value="Delete"
            onClick={(e) => {
              e.preventDefault();
              this.props.onChangeMode('delete');
            }}
          />
        </li>
      </ul>
    );
  }
}

export default Controller;
