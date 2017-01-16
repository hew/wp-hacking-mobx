import { observable } from 'mobx';

class AppState {
  @observable
  posts = [];

  fetchPosts() {
    return fetch('http://wocker.dev/wp-json/wp/v2/posts/?per_page=2')
      .then(
        response =>
          Promise.all([
            response.headers.get('X-WP-TotalPages'),
            response.json()
          ])
      )
      .then(postsData => console.log(postsData));
  }
}

export default AppState;
