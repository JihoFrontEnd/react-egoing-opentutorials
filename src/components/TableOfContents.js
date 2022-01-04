import { Component } from "react";

class TableOfContents extends Component {
  shouldComponentUpdate(newProps, _newState) {
    return newProps.data === this.props.data ? false : true;
  }
  render() {
    return (
      <nav>
        <ul>
          {
            this.props.data.map((item) => (
              <li key={item.id}>
                <a
                  className="App-link"
                  href={"/content/" + item.id}
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.onChangePage(item.id);
                  }}
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
