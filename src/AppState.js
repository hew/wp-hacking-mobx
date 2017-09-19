import { observable, autorun, toJS } from 'mobx';

class AppState {
  @observable posts = []
  @observable totalPages = 0

  constructor() {
    autorun(() => null) // something )
  }

  fetchPosts() {
    return fetch('http://demo.wp-api.org/wp-json/wp/v2/posts/?per_page=2')
      .then(
        response =>
          Promise.all([
            response.headers.get('X-WP-TotalPages'),
            response.json(),
          ])
      )
      .then(postsData => {
          this.totalPages = postsData[0]
          this.posts = postsData[1]
        });
  }
}

export default AppState;
