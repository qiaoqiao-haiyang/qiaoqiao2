<template>
  <div>
    <h1>这是页面三</h1>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  created() {
    //对页面有没有依赖来判断放在哪个生命周期函数里    没依赖写created里
    // console.log(this.$route);
    // console.log(this.$router);

    axios
      .get(
        "https://bird.ioliu.cn/v2?url=https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items?start=0&count=18"
      )
      .then((res) => {
        console.log(res);
      });
  },
};
</script>