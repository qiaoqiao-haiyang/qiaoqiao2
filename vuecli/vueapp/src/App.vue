<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>  |
      <!-- <router-link to="/pageone">Page1</router-link>  | -->
      <router-link :to="{name:'PageOne',params:{username:'小明'}}">Page1</router-link>  |
      <router-link :to="{name:'PageTwo',query:{username:'小刚'}}">Page2</router-link>  |
      <router-link to="/pageThree/小黑">Page3</router-link>  |



    </div>
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
