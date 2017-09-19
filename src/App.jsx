import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
class App extends Component {

  componentDidMount() {
    this.props.appState.fetchPosts();
  }

  render() {
    const { posts } = this.props.appState
    return (
      <div>
        {posts.map(post => 
          <div style={{margin: '1em 0'}} dangerouslySetInnerHTML={{__html: post.content.rendered}} key={post.id} />
        )}
        <DevTools />
      </div>
    );
  }

}

export default App;
