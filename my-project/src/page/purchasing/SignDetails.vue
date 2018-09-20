<template>
<div>
  <div class="item  bgc_white">
    <title-bar :title="title1"></title-bar>
    <el-form :inline="true" :model="formInline" class="demo-form-inline text-left">
      <el-form-item label="批次号">
        <el-input disabled v-model="formInline.sku" placeholder="请输入批次号"></el-input>
      </el-form-item>
      <el-form-item label="付款方式">
        <el-input disabled v-model="formInline.sku" placeholder="请输入付款方式"></el-input>
      </el-form-item>
      <el-form-item label="采购总价">
        <el-input disabled v-model="formInline.sku" placeholder="请输入采购总价"></el-input>
      </el-form-item>
      <el-form-item label="运费">
        <el-input disabled v-model="formInline.sku" placeholder="请输入运费"></el-input>
      </el-form-item>
      <el-form-item label="运单号">
        <el-input disabled v-model="formInline.sku" placeholder="请输入运单号"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-input disabled   v-model="formInline.sku" placeholder="请输入状态"></el-input>
      </el-form-item>
    </el-form>
  </div>

  <div class="item bgc_white mt_20 text_left">
    <title-bar :title="title2"></title-bar>
    <el-table
      id="table_sign"
      :data="tableData"
      style="width: 100%"
      border>
      <el-table-column
        label="图片"
        prop="date">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份">
      </el-table-column>
      <el-table-column
        prop="city"
        label="市区">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编">
      </el-table-column>
    </el-table>
    <table-page></table-page>
  </div>
</div>

</template>

<script>
  import TablePage from '../../components/TablePage.vue'
  import TitleBar from '../../components/TitleBar.vue'
  export default {
    name: 'SignDetails',
    data: function () {
      return {
        title1: '签收信息',
        title2: '签收详情',
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
          user: ''
        }
      }
    },
    components: {
      TitleBar,TablePage
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
  #table_sign .el-button{
    padding:0;
  }
</style>
