<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    @selection-change="handleSelectionChange"
    border>
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column label="录入日期/">
      <el-table-column label="录入人">
        <template slot-scope="scope">
          {{scope.row.date}} / <br> {{scope.row.date}}
        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column
      prop="address"
      label="商品名称">
    </el-table-column>
    <el-table-column
      prop="address"
      label="采购员">
    </el-table-column>
    <el-table-column label="开发员">
      <el-table-column label="开发员姓名">
        <template slot-scope="scope">
          {{scope.row.date}} / <br> {{scope.row.date}}
        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column label="成本">
      <el-table-column label="重量">
        <template slot-scope="scope">
          {{scope.row.date}} / <br> {{scope.row.date}}
        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column label="7/30/60/90">
      <el-table-column label="即时7/30/60/90">
        <template slot-scope="scope">
          {{scope.row.date}} / <br> {{scope.row.date}}
        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column label="录入库存">
      <el-table-column label="即时库存">
        <template slot-scope="scope">
          {{scope.row.date}} / <br> {{scope.row.date}}
        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column label="录入仓位">
      <el-table-column label="即时仓位">
        <template slot-scope="scope">
          {{scope.row.date}} / <br> {{scope.row.date}}
        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column label="录入状态">
      <el-table-column label="即时状态">
        <template slot-scope="scope">
          {{scope.row.date}} / <br> {{scope.row.date}}
        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column label="在途">
      <el-table-column label="清仓平台">
        <template slot-scope="scope">
          {{scope.row.date}} / <br> {{scope.row.date}}
        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column
      prop="province"
      label="刊登日期">
    </el-table-column>
    <el-table-column
      prop="city"
      label="清仓状态">
      <template slot-scope="scope">
        <el-select v-model="scope.row.region" placeholder="请选择">
          <el-option label="请选择" value=""></el-option>
          <el-option label="新创建" value="1"></el-option>
          <el-option label="清仓中" value="2"></el-option>
          <el-option label="已刊登" value="3"></el-option>
          <el-option label="库存盘点" value="4"></el-option>
          <el-option label="核算中" value="5"></el-option>
          <el-option label="归档完成" value="6"></el-option>
          <el-option label="暂时搁置" value="7"></el-option>
          <el-option label="需要归档" value="8"></el-option>
        </el-select>
      </template>
    </el-table-column>
    <el-table-column label="操作人">
      <el-table-column label="操作时间">
        <template slot-scope="scope">
          {{scope.row.date}} / <br> {{scope.row.date}}
        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column
      fixed="right"
      width="120"
      label="操作">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteTr(scope.$index, tableData)"
          :disabled="scope.row.dis2"
          size="mini" class="mini_btn_noborder" type="text">
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default{
    data(){
      return{
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          dis1: false,
          dis2: false,
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          dis1: false,
          dis2: false,
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          dis1: false,
          dis2: false,
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          dis1: false,
          dis2: false,
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          dis1: false,
          dis2: false,
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          dis1: false,
          dis2: false,
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          dis1: false,
          dis2: false,
        }],
      }
    },
    methods:{
      handleSelectionChange: function (val) {
        this.$emit("callFather",val)
      },
      deleteTr: function (index, rows) {
        this.$confirm('是否全部签收这个批次?', '提示', {
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
      },
    }
  }
</script>

<style>
</style>
