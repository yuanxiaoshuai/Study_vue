<template>
<div>
  <div class="item  bgc_white">
    <el-form :inline="true" :model="formInline" class="demo-form-inline text-left">
      <el-form-item label="SKU">
        <el-input v-model="formInline.sku" placeholder="请输入sku"></el-input>
      </el-form-item>
      <el-form-item label="主售平台">
        <el-input v-model="formInline.sku" placeholder="请输入主售平台"></el-input>
      </el-form-item>
      <el-form-item label="开发员">
        <el-select v-model="formInline.region" placeholder="请选择开发员">
          <el-option label="是" value="是"></el-option>
          <el-option label="否" value="否"></el-option>
        </el-select>
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
      <el-form-item label="处理情况">
        <el-select v-model="formInline.region" placeholder="请选择处理情况">
          <el-option label="是" value="是"></el-option>
          <el-option label="否" value="否"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="创建日期">
        <el-date-picker
          v-model="formInline.date"
          type="date"
          placeholder="选择日期">
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
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column label="SKU/">
        <el-table-column label="商品名称">
          <template slot-scope="scope">
            {{scope.row.date}} / <br> {{scope.row.date}}
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="供应商">
        <el-table-column label="采购链接">
          <template slot-scope="scope">
            {{scope.row.date}} / <br> <a href="https://www.baidu.com">https://www.baidu.com</a>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="province"
        label="状态">
      </el-table-column>
      <el-table-column
        prop="city"
        label="退货进度">
      </el-table-column>
      <el-table-column
        prop="address"
        label="采购员">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="供应链">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="库存">
      </el-table-column>
      <el-table-column label="在途">
        <el-table-column label="待发货">
          <template slot-scope="scope">
            {{scope.row.date}} / <br> {{scope.row.date}}
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="zip"
        label="7/30天">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="主售平台">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="开发员">
      </el-table-column>
      <el-table-column label="创建人">
        <el-table-column label="创建时间">
          <template slot-scope="scope">
            {{scope.row.name}}/ <br> {{scope.row.date}}
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="开发处理人">
        <el-table-column label="销售处理人">
          <template slot-scope="scope">
            {{scope.row.name}}/ <br> {{scope.row.name}}
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column
        fixed="right"
        width="200"
        label="操作">
        <template slot-scope="scope">
          <el-button
            :disabled="scope.row.dis1"
            @click.native.prevent="onGray1(scope.$index, tableData)"
            class="mini_btn_noborder" size="mini" type="text">开发待处理</el-button>|
          <el-button
            @click.native.prevent="onGray2(scope.$index, tableData)"
            :disabled="scope.row.dis2"
            size="mini" class="mini_btn_noborder" type="text">
            销售待下架
          </el-button>|
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
      onGray1: function (index, rows) {
        rows[index].dis1 = true
      },
      onGray2: function (index, rows) {
        rows[index].dis2 = true
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
