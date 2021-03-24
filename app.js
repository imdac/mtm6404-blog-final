// Router local components
const Posts = {
  data: function () {
    return {
      posts: []
    }
  },
  created: function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => { this.posts = posts })
  },
  template: `
  <header class="container-fluid row bg-light py-5">
    <div class="row">
      <div class="col">
        <h1 class="display-2">Posts</h1>
      </div>
    </div>
  </header>
  <section class="container py-5">
    <article class="row">
      <div class="col-6" v-for="post in posts">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4 bg-secondary" style="height: 200px">
            
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">
                  <router-link :to="'/post/' + post.id">{{ post.title }}</router-link>
                </h5>
                <p class="card-text">{{ post.body }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
  `
}

const Users = {
  data: function () {
    return {
      users: []
    }
  },
  created: function () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { this.users = users })
  },
  template: `
  <header class="container-fluid row bg-light py-5">
    <div class="row">
      <div class="col">
        <h1 class="display-2">Users</h1>
      </div>
    </div>
  </header>
  <section class="container py-5">
    <article class="row">
      <div class="col-6" v-for="user in users">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4 bg-secondary" style="height: 200px">
              
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ user.name }}</h5>
                <p class="card-text">{{ user.email }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
  `
}

const Post = {
  props: ['id'],
  data: function () {
    return {
      post: {}
    }
  },
  created: function () {
    fetch('https://jsonplaceholder.typicode.com/posts/' + this.id)
      .then(response => response.json())
      .then(post => { this.post = post })
  },
  template: `
  <header class="container-fluid row bg-light py-5">
    <div class="row">
      <div class="col">
        <h1 class="display-2">{{ post.title }}</h1>
      </div>
    </div>
  </header>
  <section class="container py-5">
    <article class="row">
      <div class="col">
        <p>{{ post.body }}</p>
      </div>
    </article>
  </section>
  `
}

// Routes
const routes = [
  { path: '/', component: Posts },
  { path: '/users', component: Users },
  { path: '/post/:id', component: Post, props: true }
]

// Create Router
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: routes
})

const app = Vue.createApp({})

app.use(router)

const vm = app.mount('#app')
