<template>
<div>
  <div class="item  bgc_white">
    <el-form :inline="true" :model="formInline" class="demo-form-inline text-left">
      <el-form-item label="SKU">
        <el-input v-model="formInline.sku" placeholder="请输入sku"></el-input>
      </el-form-item>
      <el-form-item label="采购员">
        <el-select v-model="formInline.region" placeholder="请选择采购员">
          <el-option label="是" value="是"></el-option>
          <el-option label="否" value="否"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="退货进度">
        <el-select v-model="formInline.region" placeholder="请选择退货进度">
          <el-option label="是" value="是"></el-option>
          <el-option label="否" value="否"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="创建时间">
        <el-date-picker
          v-model="formInline.date"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
        <el-button @click="resetForm">清空条件</el-button>
      </el-form-item>
    </el-form>
  </div>

  <div class="item bgc_white mt_20 text_left">
    <div class="mb_20" style="font-size: 14px">
      <el-button @click="add">新增</el-button>
    </div>

    <el-table
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      border>
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="province" label="SKU"></el-table-column>
      <el-table-column prop="city" label="商品名称"></el-table-column>
      <el-table-column prop="address" label="供应商"></el-table-column>
      <el-table-column prop="zip" label="采购链接"></el-table-column>
      <el-table-column prop="zip" label="状态"></el-table-column>
      <el-table-column prop="zip" label="退货进度"></el-table-column>
      <el-table-column prop="zip" label="采购员"></el-table-column>
      <el-table-column prop="zip" label="供应链"></el-table-column>
      <el-table-column prop="zip" label="库存"></el-table-column>
      <el-table-column prop="zip" label="在途"></el-table-column>
      <el-table-column prop="zip" label="待发货"></el-table-column>
      <el-table-column prop="zip" label="7/30/90天"></el-table-column>
      <el-table-column prop="zip" label="创建时间"></el-table-column>
      <el-table-column prop="zip" label="处理天数"></el-table-column>
      <el-table-column prop="zip" label="销售铺货记录"></el-table-column>
      <el-table-column fixed="right" width="150" label="操作">
        <template slot-scope="scope">
          <el-button
            :disabled="scope.row.dis"
            @click.native.prevent="onGray(scope.$index, tableData)"
            class="mini_btn_noborder" size="mini" type="text">销售铺货</el-button>
        </template>
      </el-table-column>
    </el-table>
    <table-page></table-page>
  </div>
  <lack-add @initDragStyle="initDragStyle" :if-show="ifShow"></lack-add>
</div>

</template>

<script>
  import TablePage from '../../components/TablePage.vue'
  import LackAdd from '../../components/Dialog/LackAdd.vue'
  export default {
    data: function () {
      return {
        ifShow: false,
        multipleSelection: '',
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          dis: false,
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          dis: false,
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          dis: false,
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          dis: false,
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          dis: false,
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          dis: false,
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          dis: false,
        }],
        formInline: {
          sku: '',
          user: '',
          region: '',
          date:'2018-10-1'
        }
      }
    },
    methods: {
      add: function () {
        this.ifShow = true
      },
      initDragStyle:function () {
        this.ifShow = false
      },
      handleSelectionChange: function (val) {
        this.multipleSelection = val;
      },
      onGray: function (index, rows) {
        rows[index].dis = true
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
      LackAdd,
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
