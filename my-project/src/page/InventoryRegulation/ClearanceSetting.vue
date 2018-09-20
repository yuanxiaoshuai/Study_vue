<template>
<div>
  <div class="item  bgc_white">
    <el-form :inline="true" :model="formInline" class="demo-form-inline text-left">
      <el-form-item label="名称">
        <el-input v-model="formInline.sku" placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-form-item label="部门">
        <el-select v-model="formInline.region" placeholder="请选择部门">
          <el-option label="请选择" value=""></el-option>
          <el-option label="仓库" value="1"></el-option>
          <el-option label="清仓组" value="2"></el-option>
          <el-option label="热销组" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
        <el-button @click="resetForm">清空条件</el-button>
      </el-form-item>
    </el-form>
  </div>

  <div class="item bgc_white mt_20 text_left">
    <div class="mb_20" style="font-size: 14px">
      <el-button @click="clearanceAdd">新增</el-button>
      <el-button @click="">上传</el-button>
    </div>

    <el-table
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      border>
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="name"
        label="序号">
      </el-table-column>
      <el-table-column
        prop="province"
        label="名称">
      </el-table-column>
      <el-table-column
        prop="name"
        label="负责人">
      </el-table-column>
      <el-table-column
        prop="address"
        label="描述">
      </el-table-column>
      <el-table-column
        prop="address"
        label="负责部门">
      </el-table-column>
      <el-table-column
        prop="date"
        label="操作时间">
      </el-table-column>
      <el-table-column
        fixed="right"
        width="120"
        label="操作">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="edit(scope.$index, tableData)"
            :disabled="scope.row.dis2"
            size="mini" class="mini_btn_noborder" type="text">
            编辑
          </el-button>|
          <el-button
            @click.native.prevent="deleteTr(scope.$index, tableData)"
            :disabled="scope.row.dis2"
            size="mini" class="mini_btn_noborder" type="text">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <table-page></table-page>
  </div>
</div>

</template>

<script>
  import TablePage from '../../components/TablePage.vue'
  export default {
    data: function () {
      return {
        ifShow: false,
        batchEditShow: false,
        multipleSelection: '',
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
        formInline: {
          sku: '',
          user: '',
          region: '',
          date:''
        }
      }
    },
    methods: {
      clearanceAdd(){
        let {href} = this.$router.resolve({path:'/ClearanceAdd'});
        window.open(href, '_blank');
      },
      handleSelectionChange: function (val) {
        this.multipleSelection = val;
      },
      edit: function(index, rows){
        console.log(rows)
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
      onSubmit: function () { // 搜索
        console.log('submit!');
      },
      resetForm: function () { // 清空表单条件
        for (let key in this.formInline) {
          this.formInline[key] = ''
        }
      }
    },
    components: {
      TablePage
    }
  }
</script>

<style>
  .item{
    padding: 20px 20px 0 20px;
  }
  a {
    cursor: pointer;
  }
  .mini_btn_noborder{
    padding: 0;
  }
</style>
