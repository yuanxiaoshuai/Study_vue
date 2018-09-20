<template>
<div>
  <div class="item  bgc_white">
    <el-form :inline="true" :model="formInline" class="demo-form-inline text-left">
      <el-form-item label="批次号">
        <el-input v-model="formInline.sku" placeholder="sku"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="formInline.region" placeholder="请选择状态">
          <el-option label="是" value="是"></el-option>
          <el-option label="否" value="否"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="包裹单号">
        <el-input v-model="formInline.user" placeholder="请输入包裹单号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
        <el-button @click="resetForm">清空条件</el-button>
      </el-form-item>
    </el-form>
  </div>

  <div class="item bgc_white mt_20 text_left">
    <div class="mb_20" style="font-size: 14px">
      <el-button @click="moreWareHouse">批量入库</el-button>
      <el-button>下载数据</el-button>
      <el-button>打印批次号</el-button>
      <el-button>打印入库单</el-button>
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
        label="批次">
        <template slot-scope="scope">
          <a @dblclick="openNewPage('WareDetails')">{{scope.row.date}}</a>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="供应商">
      </el-table-column>
      <el-table-column
        prop="province"
        label="SKU数">
      </el-table-column>
      <el-table-column
        prop="city"
        label="总采购数">
      </el-table-column>
      <el-table-column
        prop="address"
        label="总金额">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="付款方式">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="采购总价">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="采购天数">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="运费">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="运单号">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="状态">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="创建时间">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="扫描时间">
      </el-table-column>
      <el-table-column
        fixed="right"
        width="200"
        label="操作">
        <template slot-scope="scope">

          <el-button class="mini_btn_noborder" size="mini" type="text">8×3</el-button>|
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            size="mini"
            class="mini_btn_noborder"
            type="text">
            重新签收
          </el-button>|
          <el-button class="mini_btn_noborder" size="mini" type="text">默认签收量</el-button>
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
        multipleSelection: '',
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }],
        formInline: {
          sku: '',
          user: '',
          region: ''
        }
      }
    },
    components:{
      TablePage
    },
    methods: {
      moreWareHouse: function () {
        this.$router.push('/indexpage/MoreWareHouse')
      },
      handleSelectionChange: function (val) {
        this.multipleSelection = val;
      },
      openNewPage: function (page) {
        this.$router.push('/indexpage/' + page)
      },
      deleteRow: function (index, rows) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
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
