<template>
  <el-table
    ref="multipleTable"
    :data="tableData3"
    tooltip-effect="dark"
    style="width: 100%"
    border
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="SKU">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
    prop="name"
    label="供应商">
    </el-table-column>
    <el-table-column
    prop="name"
    label="一级目录">
    </el-table-column>
    <el-table-column
    prop="name"
    label="二级目录">
    </el-table-column>
    <el-table-column
    prop="name"
    label="成本价">
    </el-table-column>
    <el-table-column
    prop="name"
    label="原采购价">
    </el-table-column>
    <el-table-column
    prop="name"
    label="新采购价">
    </el-table-column>
    <el-table-column
    prop="name"
    label="差价">
    </el-table-column>
    <el-table-column
    prop="name"
    label="调价幅度">
    </el-table-column>
    <el-table-column
    prop="date"
    label="调价性质">
    </el-table-column>
    <el-table-column
    prop="name"
    label="采购员">
    </el-table-column>
    <el-table-column
      prop="name"
      label="供应链">
    </el-table-column>
    <el-table-column
      prop="name"
      label="提交人">
    </el-table-column>
    <el-table-column
      prop="name"
      label="提交时间">
    </el-table-column>
    <el-table-column
      prop="name"
      label="审核状态">
    </el-table-column>
    <el-table-column
      prop="address"
      label="审核时间">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    props:['name'],
    data() {
      return {
        tableData3: [{
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
        this.$emit('checkTableData',val)
      }
    }
  }
</script>
