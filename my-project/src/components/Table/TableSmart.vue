<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      border
      stripe
      class="tb-edit"
      highlight-current-row
      @row-click="handleCurrentChange"
      @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="name" label="批次"
      >
        <template slot-scope="scope">
          <a style="cursor: pointer" @dblclick="openDetails">{{scope.row.name}}</a>
        </template>
      </el-table-column>
      <el-table-column prop="age" label="供应商"></el-table-column>
      <el-table-column prop="age" label="总金额"></el-table-column>
      <el-table-column prop="age" label="付款方式"></el-table-column>
      <el-table-column prop="age" label="采购总价"></el-table-column>
      <el-table-column label="运费">
        <template slot-scope="scope">
          <el-input size="small" v-model="scope.row.date" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> <span>{{scope.row.date}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="age" label="采购天数"></el-table-column>
      <el-table-column prop="age" label="状态"></el-table-column>
      <el-table-column prop="age" label="付款链接"></el-table-column>
      <el-table-column label="运单号" >
        <template slot-scope="scope">
          <el-input size="small" v-model="scope.row.date" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> <span>{{scope.row.date}}</span>
        </template>
      </el-table-column>
      <el-table-column label="订单号">
        <template slot-scope="scope">
          <el-input size="small" v-model="scope.row.date" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> <span>{{scope.row.date}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="age" label="是否API"></el-table-column>
      <el-table-column prop="address" label="API信息"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name:'table-smart',
    data: function () {
      return {
        tableData: [
          {date: '2016-05-02', age: '18', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
          {date: '2016-05-04', age: '18', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄'},
          {date: '2016-05-01', age: '18', name: '王小虎', address: '上海市普陀区金沙江路 1519 弄'},
          {date: '2016-05-03', age: '18', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄'}]
      }
    },
    methods: {
      openDetails: function () {
        this.$router.push('/indexpage/BatchDetails')
      },
      handleSelectionChange(val) {
        this.$emit("callFather",val);
      },
      handleCurrentChange (row, event, column) {
        console.log(row, event, column, event.currentTarget)
      },
      handleEdit (index, row) {
        console.log(index, row);
      },
      handleDelete (index, row) {
        console.log(index, row);
      }
    }
  }
</script>
<style>
 .tb-edit .el-input {
   display: none
 }
 .tb-edit .current-row .el-input {
   display: block
 }
 .tb-edit .current-row .el-input+span {
   display: none
 }
</style>
