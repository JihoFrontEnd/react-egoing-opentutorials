import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Subject from './components/Subject';
import TableOfContents from './components/TableOfContents';
import ReadContent from './components/ReadContent';
import Controller from './components/Controller';
import CreateContent from './components/CreateContent';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'welcome',
      selected_content_id: 1,
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
    let _title, _desc, _article;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.description;
      _article = <ReadContent title={_title} description={_desc} />;
    } else if (this.state.mode === 'read') {
      this.state.contents.some((content) => {
        if (content.id === this.state.selected_content_id) {
          _title = content.title;
          _desc = content.description;
          return true;
        }
        return false;
      });
      _article = <ReadContent title={_title} description={_desc} />;
    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={(title, description) => {
        // this.state.contents.push({
        //   id: ++this.max_content_id,
        //   title,
        //   description
        // });
        // this.setState({ contents: this.state.contents });
        this.setState({
          contents: this.state.contents.concat({
            id: ++this.max_content_id,
            title,
            description
          })
        });
      }} />;
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
          <Subject
            title={this.state.subject.title}
            subTitle={this.state.subject.subTitle}
            onChangePage={() => this.setState({ mode: 'welcome' })}
          />
          <TableOfContents
            data={this.state.contents}
            onChangePage={(id) => this.setState({ mode: 'read', selected_content_id: id })}
          />
          <Controller
            onChangeMode={(mode) => this.setState({ mode })}
          />
          {_article}
        </header>
      </div>
    );
  }
}

export default App;
