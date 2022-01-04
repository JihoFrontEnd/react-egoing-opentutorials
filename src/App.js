import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Subject from './components/Subject';
import TableOfContents from './components/TableOfContents';
import ReadContent from './components/ReadContent';
import Controller from './components/Controller';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

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

  getContent() {
    let _title, _desc;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.description;
      return <ReadContent title={_title} description={_desc} />;
    } else if (this.state.mode === 'read') {
      let content = this.getReadContent();
      return <ReadContent title={content.title} description={content.desc} />;
    } else if (this.state.mode === 'create') {
      return <CreateContent onSubmit={(title, description) => {
        this.setState({
          contents: this.state.contents.concat({
            id: ++this.max_content_id,
            title,
            description
          }),
          mode: 'read',
          selected_content_id: this.max_content_id
        });
      }} />;
    } else if (this.state.mode === 'update') {
      return <UpdateContent
        content={this.getReadContent()}
        onSubmit={(_content) => {
          console.log(_content);
          this.setState({
            contents: Array.from(this.state.contents).map((content) => {
              if (_content.id === content.id) content = _content;
              return content;
            }),
            mode: 'read',
            selected_content_id: _content.id
          });
        }}
      />;
    } else if (this.state.mode === 'delete') {
      // 여기서 mode를 다시 수정할 경우 에러가 발생한다.
      // 따로 함수로 만들거나 render 안에서 해결해야 한다.
    }
  }

  getReadContent() {
    let _content = {};
    this.state.contents.some((content) => {
      if (content.id === this.state.selected_content_id) {
        _content.id = content.id;
        _content.title = content.title;
        _content.desc = content.description;
        return true;
      }
      return false;
    });
    return _content;
  }

  render() {
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
            onChangeMode={(mode) => {
              if (mode === 'delete') {
                if (window.confirm('정말로 삭제하시겠습니까?')) {
                  const contents = Array.from(this.state.contents)
                    .filter((content) => content.id !== this.state.selected_content_id);
                  this.setState({ contents, mode: 'welcome' });
                }
              } else this.setState({ mode })
            }}
          />
          {this.getContent()}
        </header>
      </div>
    );
  }

}

export default App;
