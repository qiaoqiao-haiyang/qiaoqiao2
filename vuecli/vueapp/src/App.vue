<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>｜
      <!-- <router-link to="/pageone">页面一</router-link> -->
      <router-link v-bind:to="{name:'PageOne',params:{username:'小明'}}">页面一</router-link>|
      <router-link v-bind:to="{name:'PageTwo',query:{username:'小刚'}}">页面二</router-link>｜
      <router-link to="/pagethree/小红">页面三</router-link>|
      <router-link to="/redirect/xiao">重定向</router-link>|
      <router-link to="/pagefour">页面四</router-link>|
      <router-link to="/pagefive">页面五</router-link>|
      <router-link to="/pagesix">页面六</router-link>|
      <router-link to="/pageseven">页面七</router-link>|
      <router-link to="/detail">别名</router-link>|

      <button @click="linkHandle">button跳转</button>
    </div>
    <div class="box">
      <!-- <transition name="fade"> -->
        <!-- <keep-alive> -->
          <router-view/>
        <!-- </keep-alive> -->
        
      <!-- </transition> -->
    </div>
    
    

  </div>
</template>
<script>
export default {
  methods: {
    linkHandle(){
      // this.$router.push("/about")
      // this.$router.push({
      //   name:"PageOne",
      //   params:{
      //     username:"aaa"
      //   }
      // })
      // this.$router.push({
      //   path:"/pagetwo",
      //   query:{
      //     username:"bbb"
      //   }
      // })
      this.$router.replace({
        path:"/pagetwo",
        query:{
          username:"bbb"
        }
      })
      // this.$router.go(-2)
      
      // this.$route 
      // this.$router
    }
  },
}
</script>
<style>
.box{
  position: relative;
}
/* 进入时的过度 */
.fade-enter{
  transform: translateX(100%);
}
.fade-enter-active{
  transition: all 1s ease;
  position: absolute;
  top: 0;
  width: 100%;
}
.fade-enter-to{
  transform: translateX(0);
}
/* 离开时的过度 */
.fade-leave{
  transform: translateX(0);
}
.fade-leave-active{
  transition: all 1s ease;
  position: absolute;
  top: 0;
  width: 100%;
}
.fade-leave-to{
  transform: translateX(-100%);
}


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
