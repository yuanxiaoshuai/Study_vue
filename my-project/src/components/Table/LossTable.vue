<template>
  <el-table
    ref="multipleTable"
    :data="tableData3"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="批次号">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
    prop="name"
    label="供应商">
    </el-table-column>
    <el-table-column label="SKU">
      <el-table-column
      label="商品名称"
      >
        <template slot-scope="scope">
        {{scope.row.name}} <br>{{scope.row.date}}
        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column
    prop="name"
    label="状态">
    </el-table-column>
    <el-table-column
    prop="name"
    label="采购员">
    </el-table-column>
    <el-table-column
    prop="name"
    label="采购价">
    </el-table-column>
    <el-table-column
    prop="name"
    label="异常量">
    </el-table-column>
    <el-table-column
    prop="name"
    label="异常金额">
    </el-table-column>
    <el-table-column
    prop="name"
    label="异常类型">
    </el-table-column>
    <el-table-column
    prop="name"
    label="处理方式">
    </el-table-column>
    <el-table-column
    prop="date"
    label="创建日期">
    </el-table-column>
    <el-table-column
    prop="name"
    label="报损原因">
    </el-table-column>
    <el-table-column
    prop="name"
    label="附件">
    <template slot-scope="scope">
      <i class="el-icon-upload" style="color: #5a98ff"></i>
      {{scope.row.name}}
      <a @click="downLoad(scope.$index, scope.row)">下载</a>
    </template>
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
      downLoad: function (index,row) {
        this.$message("下载")
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        this.$emit('examineTableData',val)
      }
    },
    watch:{
      name:function (newName,oldName) {
        if(newName != oldName){
          this.multipleSelection = []
          this.$refs.multipleTable.clearSelection();
        }
      }
    }
  }
</script>
