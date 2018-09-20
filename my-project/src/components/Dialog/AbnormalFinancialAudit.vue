<template>
  <el-dialog
    :title="titleName"
    :visible.sync="financialAudit"
    width="700px"
    class="demo-form-inline text-left"
    :before-close="closeDialog">
    <el-table :data="gridData"
              border>
      <el-table-column property="date" label="批次号"></el-table-column>
      <el-table-column property="date" label="SKU"></el-table-column>
      <el-table-column property="name" label="退款金额"></el-table-column>
      <el-table-column property="name" label="财务实收金额">
        <template slot-scope="scope">
          <input type="text" class="table_input_sm" v-model="scope.row.name">
        </template>
      </el-table-column>
      <el-table-column label="财务确认损耗金额">
        <template slot-scope="scope">
          <input type="text" disabled class="table_input_sm" v-model="scope.row.address">
        </template>
      </el-table-column>
    </el-table>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary"  @click="submitDrag">通过</el-button>
      <el-button @click="closeDrag">驳回</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import {mapState} from 'vuex'
  export default{
    name: 'AbnormalFinancialAudit',
    props: ['ifShow'],
    data: function () {
      return {
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
        this.$store.commit('changeFinancialAudit',{title:'财务审核'})
      },
      closeDrag: function () {
        this.closeDialog()
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
      },
      submitDrag: function () { // 通过
        this.closeDialog()
        this.$message.success({
          showClose: true,
          message: '恭喜你，这是一条成功消息',
        })
      },
    },
    computed:{
      ...mapState({
        financialAudit:state=>state.dialog.financialAudit,
        titleName:state=> state.dialog.name
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
