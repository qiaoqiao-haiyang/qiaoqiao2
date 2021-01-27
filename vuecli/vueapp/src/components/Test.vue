<template>
    <div>
        <h1>{{msg}}</h1>
        <button @click="addHandle">按钮</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            num:123
        }
    },
    props:['msg'],
    methods: {
        addHandle(){
            ++this.num
        }
    },
}
</script>

<style scoped>
    h1{
        color: red;
    }
</style>