<template>
<div>
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
      label="批次号"
      prop="date"
    >
    </el-table-column>
    <el-table-column
      prop="name"
      label="供应商"
    >
    </el-table-column>
    <el-table-column label="SKU">
      <el-table-column
        prop="name"
        label="商品名称"
        width="120">
      </el-table-column>
    </el-table-column>
    </el-table-column>
    <el-table-column
      prop="name"
      label="状态"
    >
    </el-table-column>
    <el-table-column
      prop="name"
      label="采购员"
    >
    </el-table-column>
    <el-table-column
      prop="name"
      label="采购价"
    >
    </el-table-column>
    <el-table-column
      prop="name"
      label="异常量"
    >
    </el-table-column>
    <el-table-column
      prop="address"
      label="异常金额"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="address"
      label="异常类型"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="address"
      label="处理方式"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="address"
      label="创建日期"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="address"
      label="报损原因"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      label="附件"
    >
      <template slot-scope="scope">
        <a @click="">{{scope.row.name}}</a>
      </template>
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

