<template>
  <el-dialog
    title="财务审核"
    :visible.sync="examineShow"
    width="400px"
    class="demo-form-inline text-left"
    :before-close="closeDialog">
    <el-table :data="gridData"
              border>
      <el-table-column property="date" label="总金额" width="150"></el-table-column>
      <el-table-column property="name" label="批次数" width="200"></el-table-column>
    </el-table>
    <div slot="footer" class="dialog-footer">
      <el-button  @click="submitDrag">通过</el-button>
      <el-button type="primary" @click="closeDrag">驳回</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import {mapState} from 'vuex'
  export default{
    name: 'ExamineTable',
    data: function () {
      return {
        ifShow: false,
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },
    methods: {
      closeDialog: function () {
        this.$store.commit("changeExamineShow",{title:"财务审核"})
      },
      submitDrag: function () { // 通过
        this.closeDialog()
        this.$message.success({
          showClose: true,
          message: '恭喜你，这是一条成功消息',
        })
      },
      closeDrag: function () { // 驳回
        this.closeDialog()
        this.returnFalse()
      },
      returnFalse: function () { // 驳回
        this.$prompt('驳回原因', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '驳回成功'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      }
    },
    computed:{
      ...mapState({
        examineShow:state=>state.dialog.examineShow
      })
    }
  }
</script>

<style>
  .el-message-box{
    width: 300px;
  }
  .el-message-box .el-input__inner{
    width: 270px;
  }
</style>
