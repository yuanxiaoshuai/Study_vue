<template>
  <div>
    <div class="mb_20 mt_20" style="font-size: 14px">
      <el-button @click="director">主管审核</el-button>
    </div>
    <table-content></table-content>
  </div>
</template>

<script>
  import TablePage from '../TablePage.vue'
  import TableContent from '../Table/AbnTableContent.vue'
  export default {
    data: function () {
      return {

      }
    },
    methods:{
      director: function () {
        this.$confirm('是否通过审核?', '主管审核', {
          confirmButtonText: '通过',
          cancelButtonText: '驳回',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '通过主管审核!'
          });
        }).catch(() => { //驳回
          this.$prompt('驳回原因', {
            confirmButtonText: '确定',
            cancelButtonText: '取消'
          }).then(({ value }) => {
            this.$message({
              type: 'success',
              message: '已驳回'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '取消'
            });
          });
        });
      }
    },
    components: {
      TableContent,
      TablePage
    }
  }
</script>

<style>
</style>
