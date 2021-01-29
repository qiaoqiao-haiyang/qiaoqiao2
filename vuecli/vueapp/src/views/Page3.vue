<template>
  <div v-loading="loading" element-loading-text="拼命加载中">
    <h1>这是页面三</h1>
    <el-table :data="dataList" style="width: 100%">
      <el-table-column type="index" prop="date" label="序号" width="50">
      </el-table-column>
      <el-table-column prop="id" label="ID"> </el-table-column>
      <el-table-column prop="title" label="名称"> </el-table-column>
      <el-table-column prop="infotext" label="信息"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="doDetail(scope.row)" type="text" size="small"
            >查看</el-button
          >
        </template>
      </el-table-column>
      <!-- <ul>
          <li v-for="(item) in dataList" :key="item.id"> {{item.title}} </li>
      </ul> -->
    </el-table>
    <el-pagination
      @current-change="changePage"
      background
      layout="prev, pager, next"
      :total="totalnum"
      :page-size="5"
    >
    </el-pagination>
  </div>
</template>
<script>
// import axios from "axios";
import { getList } from "@/api/tv.js";
export default {
  data() {
    return {
      loading: false,
      dataList: [],
      totalnum: 0,
    };
  },
  methods: {
    changePage(num) {
      console.log(num);
      this.getData((num - 1) * 5);
    },
    getData(start) {
      this.loading = true;
      getList(start).then((res) => {
        this.totalnum = res.data.total;
        console.log(res);
        let newArr = res.data.subject_collection_items.map((item) => {
          return {
            id: item.id,
            title: item.title,
            infotext: item.info + item.episodes_info,
          };
        });
        this.dataList = newArr;
        this.loading = false;
      });
      //   axios
      //     .get(
      //       "https://bird.ioliu.cn/v2?url=https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items?start=" +
      //         start +
      //         "&count=5"
      //     )
      //     .then((res) => {
      //       this.totalnum = res.data.total;
      //       console.log(res);
      //       let newArr = res.data.subject_collection_items.map((item) => {
      //         return {
      //           id: item.id,
      //           title: item.title,
      //           infotext: item.info + item.episodes_info,
      //         };
      //       });
      //       this.dataList = newArr;
      //       this.loading = false;
      //     });
    },
    doDetail(item) {
      console.log(item);
      // this.$router.push({
      //     path:"/tvdetail",
      //     query:{
      //         id:item.id
      //     }
      // })
      this.$router.push("/tvdetail/" + item.id);
    },
  },
  created() {
    //对页面有没有依赖来判断放在哪个生命周期函数里    没依赖写created里
    this.getData(0);
  },
};
</script>