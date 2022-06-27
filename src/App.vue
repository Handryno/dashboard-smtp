<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Pegadaian</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/user-create" class="nav-link">Add</router-link>
        </li>
      </div>
    </nav>
  </div>
  <div class="container">
    <nav>
      <router-link to="/user-list">List</router-link> |
      <router-link to="/get-token">Get Token</router-link> |
      <router-link to="/user-edit">Update</router-link>
    </nav>
    <div class="list row">
      <div class="col-md-5">
        <div class="input-group mb-3">
          <!-- <input type="text" class="form-control me-5" placeholder="Search by username" v-model="username" /> -->
          <div class="input-group-append">
            <!-- <button class="btn btn-outline-secondary" type="button" @click="searchUsername">
              Search
            </button> -->
          </div>
        </div>
      </div>
    </div>
    <!-- <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form> -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
