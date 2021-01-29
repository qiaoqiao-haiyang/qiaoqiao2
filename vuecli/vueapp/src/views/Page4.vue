<template>
    <div>
        <h1> {{$store.state.goods.ma}} </h1>
        <h1>这是页面四</h1>
        <!-- <h1>store下的:{{$store.state.count}}</h1> -->
        <h1> page4下的{{count}} </h1>
        <h1> str:{{str}} </h1>
        <h1> {{sumi}} </h1>
        <h1> sum:{{sum}} </h1>
        <button @click="add(5)">add</button>
        <button @click="reduceAction">reduce</button>

    </div>
</template>
<script>
import {mapState,mapMutations,mapActions,mapGetters} from'vuex'
export default {
    data(){
        return {
            i:10
        }
    },
    methods: {
        ...mapMutations(['add']),
        testHandli(){

        },
        ...mapActions(['reduceAction'])
    },
    created() {

    },
    // computed:{
    //     // count(){
    //     //     return this.$store.state.count
    //     // }
    // }


    // computed:mapState({
    //     count:state=> state.count,
    //     str:state=>{
    //         return state.str
    //     }
    // })

    // computed:mapState(['count','str'])

    computed:{
        ...mapState(['count','str']),
        sumi(){
            return this.i
        },
        ...mapGetters(['sum']),
        sum1(){return this.i}
    },

}
</script>