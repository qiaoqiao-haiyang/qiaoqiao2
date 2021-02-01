<template>
  <div class="app-container">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="序号" type="index" width="150"> </el-table-column>
      <el-table-column prop="levelname" label="级别名称"> </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.row)"
            type="text"
            size="small"
          >
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { levelList, delLevel } from "@/api/level";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    // 获取列表
    getList() {
      levelList().then((res) => {
        console.log(res);
        this.tableData = res.data.data;
      });
    },
    //删除等级
    deleteRow(item) {
      this.$confirm("此操作将永久等级, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          delLevel({ levelid: item.jrid }).then((res) => {
              this.getList()
            this.$message({
              type: "success",
              message: "删除成功!",
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>