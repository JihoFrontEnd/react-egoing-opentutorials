import { Component } from "react";

class TableOfContents extends Component {
  render() {
    return (
      <nav>
        <ul>
          {
            this.props.data.map((item) => (
              <li key={item.id}>
                <a
                  className="App-link"
                  href={"content/" + item.id}
                >
                  {item.title}
                </a>
              </li>
            ))
          }
        </ul>
      </nav>
    );
  }
}

export default TableOfContents;
