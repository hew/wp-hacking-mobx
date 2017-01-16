import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
class App extends Component {

  render() {
    const { posts } = this.props.appState
    return (
      <div>
        <button onClick={this.onFetch}>
          FETCH!!
        </button>
        <button onClick={this.onBeep}>
          BEEP!!
        </button>
        { posts.map(post => <span key={post.id}>{post.title.rendered}</span>)}
        { this.props.appState.totalPages }
        <DevTools />
      </div>
    );
  }

  onFetch = () => {
    this.props.appState.fetchPosts();
  };

  onBeep = () => {
    this.props.appState.changeBeep();
  };
}

export default App;
