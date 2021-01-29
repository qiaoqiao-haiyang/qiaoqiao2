<template>
    <div>
        <h1>getters: {{$store.getters.sum}} </h1>
        <h1>count:{{$store.state.count}}</h1>
        <button @click="addHandle">add</button>
        <button @click="reduceHAndle">reduce</button>
        <h1>这是页面二</h1>
        <h1>用户名:{{$route.query.username}}</h1>
    </div>
</template>
<script>
export default {
    created() {
        // console.log(this.$route.query.username)
        console.log(this.$store.state.count);
    },
    methods: {
        addHandle(){
            // ++this.$store.state.count
            this.$store.commit('add',{a:1,b:2})//mutations通过commit调用
        },
        reduceHAndle(){
            this.$store.dispatch('reduceAction',2)//actions通过dispatch调用
        }
    },
}
</script>