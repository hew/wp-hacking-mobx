import { observable, autorun, toJS } from 'mobx';

class AppState {
  @observable posts = []
  @observable totalPages = 0
  @observable beep = 'beep'

  constructor() {
    autorun(() => console.log(toJS(this.posts)))
  }

  changeBeep() {
    this.beep = 'blap'
  }

  fetchPosts() {
    return fetch('http://wocker.dev/wp-json/wp/v2/posts/?per_page=2')
      .then(
        response =>
          Promise.all([
            response.headers.get('X-WP-TotalPages'),
            response.json(),
          ])
      )
      .then(postsData => {
          this.totalPages = postsData[0]
          let actualPosts = postsData[1]
          console.log(toJS(actualPosts))
          this.posts = actualPosts
        });
  }
}

export default AppState;
