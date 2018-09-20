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
      <el-table-column label="图片"
      >
        <template slot-scope="scope">
          <img src="../../../static/image/img.png" alt="" style="width: 80px;height: 80px">
        </template>
      </el-table-column>
      <el-table-column label="子SKU">
        <el-table-column label="商品名称">
          <template  slot-scope="scope">
            {{scope.row.age}}/<br>
            {{scope.row.name}}
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="1/7/30/90">
        <template  slot-scope="scope">
          {{scope.row.age}}/{{scope.row.age}}/{{scope.row.age}}/{{scope.row.age}}
        </template>
      </el-table-column>
      <el-table-column label="在途">
        <el-table-column label="待发货">
          <template  slot-scope="scope">
            {{scope.row.age}}/<br>
            {{scope.row.name}}
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="采购量">
        <el-table-column label="采购价">
          <template  slot-scope="scope">
            {{scope.row.age}}/<br>
            <el-input size="small" v-model="scope.row.name" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> <span>{{scope.row.name}}<i class="el-icon-edit"></i></span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="采购总价">
        <el-table-column label="周转天数">
          <template  slot-scope="scope">
            {{scope.row.age}}/<br>
            {{scope.row.name}}
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="仓库分拣费">
        <el-table-column label="SKU分拣费">
          <template  slot-scope="scope">
            {{scope.row.age}}/<br>
            <el-input size="small" v-model="scope.row.name" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> <span>{{scope.row.name}}<i class="el-icon-edit"></i></span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="分拣方">
        <el-table-column label="采购链接">
          <template  slot-scope="scope">
            {{scope.row.age}}/<br>
            <a href="https://www.baidu.com/" target="_blank">https://www.baidu.com/</a>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="签收时间">
        <el-table-column label="入库数量">
          <template  slot-scope="scope">
            {{scope.row.age}}/<br>
            {{scope.row.age}}
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="系统采购价">
        <el-table-column label="是否高价">
          <template  slot-scope="scope">
            {{scope.row.age}}/<br>
            {{scope.row.age}}
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="周转标准">
        <el-table-column label="库存周转">
          <template  slot-scope="scope">
            {{scope.row.age}}/<br>
            <span class="text_red">{{scope.row.age}}</span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="成本价">
        <el-table-column label="价格比">
          <template  slot-scope="scope">
            {{scope.row.age}}/<br>
            {{scope.row.age}}
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="价格备注">
        <el-table-column label="1688属性">
          <template  slot-scope="scope">
            <el-input size="small" v-model="scope.row.name" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> <span>{{scope.row.name}} <i class="el-icon-edit"></i> </span>
            <br>
            {{scope.row.age}}
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'table-smart',
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
        this.$router.push('/indexpage/BatachDetails')
      },
      handleSelectionChange: function (val) {
        this.multipleSelection = val;
      },
      handleCurrentChange: function (row, event, column) {
        console.log(row, event, column, event.currentTarget)
      },
      handleEdit: function (index, row) {
        console.log(index, row);
      },
      handleDelete: function (index, row) {
        console.log(index, row);
      },
      deleteRow: function (index,rows) {
        this.$confirm('确定要删除这条数据吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          rows.splice(index, 1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
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
  i.el-icon-edit{
    margin-left: 10px;
    color: #5a98ff;
    font-size: 16px;
  }
</style>
