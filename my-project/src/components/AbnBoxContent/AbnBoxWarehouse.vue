<template>
  <div>
    <div class="mb_20 mt_20" style="font-size: 14px">
      <el-button @click="add">新增</el-button>
      <el-button @click="truePacking">确认打包</el-button>
      <el-button @click="SignOff">下架签收</el-button>
    </div>
    <el-table
      ref="multipleTable"
      border
      stripe
      :data="tableData1"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="序号"
        prop="date"
        >
      </el-table-column>
      <el-table-column
        label="运单号"
        >
        <template slot-scope="scope">
          <a @click="">{{scope.row.name}}</a>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="采购员"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="状态"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="处理方式"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="创建人"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="创建时间"
       >
      </el-table-column>
      <el-table-column
        prop="name"
        label="延迟天数"
        >
      </el-table-column>
      <el-table-column
        prop="address"
        label="异常类型"
        show-overflow-tooltip>
      </el-table-column>
    </el-table>
    <table-page></table-page>
  </div>
</template>
<script>
  import TablePage from '../TablePage.vue'
  export default {
    data() {
      return {
        tableData1: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },

    methods: {
      add: function () {
        this.$router.push('/indexpage/AbnBoxAdd')
      },
      truePacking: function () { // 确认打包
        if(this.multipleSelection.length==0){
          this.$alert('请选择需要打包的运单号', '提示');
        } else{
          this.$confirm('确认是否打包该运单号?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '打包成功!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消'
            });
          });
        }
      },
      SignOff: function () { // 下架签收
        if(this.multipleSelection.length==0){
          this.$alert('请选择需要下架签收的运单号', '提示');
        } else{
          this.$confirm('确认是否下架签收该运单号?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '下架签收成功!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消'
            });
          });
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    },
    components: {
      TablePage
    }
  }
</script>

<style>
</style>
