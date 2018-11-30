<template>
  <div id="app">
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <RouterLink
            class="header-logo"
            to="/"
          >
            Logo
          </RouterLink>
          <div class="button-burger">
            <span class="line line-1" /><span class="line line-2" /><span class="line line-3" />
          </div>
          <div class="navbar-list__wrapper">
            <ul class="navbar-list">
              <li
                v-for="link in linkMenu"
                :key="link.title"
                class="navbar-item"
              >
                <RouterLink
                  class="navbar-link"
                  :to="`${link.url}`"
                >
                  {{ link.title }}
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- @@@@
      <router-view> отвечает за место отображения компонентов которые будут использованы
    -->
    <RouterView />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <router-view/> -->
  </div>
</template>

<script>
// @ linkMenu - переменная принимающая массив объектов
export default {
  data () {
    return {
      linkMenu: [
        { title: 'Home', url: '/' },
        { title: 'Login', url: '/login' },
        { title: 'Registration', url: '/registration' },
        { title: 'Tasks', url: '/task' }
      ]
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
