<template>
    <div>
        detail
        <h1>电视剧名: {{tvInfo.title}}</h1>
    </div>
</template>
<script>
// import axios from'axios'
// import request from '@/utils/request'
import {getDetail} from '@/api/tv.js'
export default {
    data(){
        return {
            tvInfo:{}
        }
    },
    methods:{
        getData(id){
        //     axios.get('https://bird.ioliu.cn/v2?url=https://m.douban.com/rexxar/api/v2/tv/'+id)
        //     .then((res)=>{
        //         console.log(res);
        //         this.tvInfo=res.data
        //     })

      getDetail(id).then((res) => {
        this.tvInfo = res.data
      });
    },
  },
    created(){
        // this.getData(this.$route.query.id);
        this.getData(this.$route.params.id)

        // request({
        //     url:'https://bird.ioliu.cn/v2?url=https://m.douban.com/rexxar/api/v2/tv/'+this.$route.params.id,
        //     method:'get',
        // }).then((res)=>{
        //     console.log(res);
        // })

        // getDetail(this.$route.params.id).then((res)=>
        //     {
        //         console.log(res);
        //     })
    }

}
</script>