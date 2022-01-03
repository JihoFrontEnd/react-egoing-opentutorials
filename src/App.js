import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Subject from './components/Subject';
import TableOfContents from './components/TableOfContents';
import Content from './components/Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'welcome',
      welcome: {
        title: 'Welcome',
        description: 'Hello React!'
      },
      subject: {
        title: 'React',
        subTitle: 'First React App'
      },
      contents: [
        {
          id: 1,
          title: 'HTML',
          description: 'HTML is for information.'
        },
        {
          id: 2,
          title: 'CSS',
          description: 'CSS is for design.'
        },
        {
          id: 3,
          title: 'Javascript',
          description: 'Javascript is for interactive.'
        },
      ]
    };
  }
  render() {
    let _title, _desc;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.description;
    } else {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].description;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello React!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Documents
          </a>
          <a
            className="App-link"
            href="https://youtube.com/playlist?list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Lecture (egoing)
          </a>
          {/* <Subject
            title={this.state.subject.title}
            subTitle={this.state.subject.subTitle}
          /> */}
          <header>
            <a href="/" onClick={(e) => e.preventDefault() /* 페이지 전환 막기 */}>
              <h1>{this.state.subject.title}</h1>
            </a>
            <p>{this.state.subject.subTitle}</p>
          </header>
          <TableOfContents data={this.state.contents} />
          <Content title={_title} description={_desc} />
        </header>
      </div>
    );
  }
}

export default App;
