const app = Vue.createApp({
  data: function () {
    return {
      activePage: 'posts',
      post: {},
      posts: [],
      users: []
    }
  },
  created: function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => { this.posts = posts })

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { this.users = users })
  },
  methods: {
    setPage: function (page, id) {
      this.activePage = page

      if (page === 'post') {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
          .then(response => response.json())
          .then(post => { this.post = post })
      }
    }
  }
})

const vm = app.mount('#app')
