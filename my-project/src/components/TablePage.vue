<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-sizes="[100, 200, 300, 400]"
    :page-size="100"
    class="pageAll"
    layout="total, sizes, prev, pager, next, jumper"
    :total="400">
  </el-pagination>
</template>

<script>
  export default {
    methods: {
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange (val) {
        console.log(`当前页: ${val}`);
      }
    },
    data () {
      return {
        currentPage: 1
      };
    }
  }
</script>

<style>
  .pageAll{
    margin: 20px 0;
    text-align: right;
  }
</style>
