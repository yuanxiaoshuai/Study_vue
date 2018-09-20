<template>
  <el-dialog
    :title="titleName"
    :visible.sync="reissue"
    width="700px"
    class="demo-form-inline text-left"
    :before-close="closeDialog">
    <el-table :data="gridData"
              border>
      <el-table-column property="date" label="批次号"></el-table-column>
      <el-table-column label="SKU">
        <template slot-scope="scope">
          <input type="text" class="table_input_sm" v-model="scope.row.name">
        </template>
      </el-table-column>
      <el-table-column property="name" label="中文名称"></el-table-column>
      <el-table-column property="name" label="采购价">
        <template slot-scope="scope">
          <input type="text" class="table_input_sm" v-model="scope.row.name">
        </template>
      </el-table-column>
      <el-table-column label="采购量">
        <template slot-scope="scope">
          <input type="text" class="table_input_sm" v-model="scope.row.address">
        </template>
      </el-table-column>
    </el-table>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary"  @click="submitDrag">确定</el-button>
      <el-button @click="closeDrag">取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import {mapState} from 'vuex'
  export default{
    name: 'ExamineTable',
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
        this.$store.commit('changeReissue',{title:'异常补发'})
      },
      closeDrag: function () {
        this.closeDialog()
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
        reissue:state=>state.dialog.reissue,
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
