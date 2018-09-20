<template>
<div>
  <div class="item  bgc_white">
    <el-form :inline="true" :model="formInline" class="demo-form-inline text-left">
      <el-form-item label="仓库名称">
        <el-input v-model="formInline.sku" placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-form-item label="SKU">
        <el-input v-model="formInline.sku" placeholder="SKU"></el-input>
      </el-form-item>
      <el-form-item label="操作时间">
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
      <el-button @click="">下载</el-button>
    </div>

    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="name" label="序号"></el-table-column>
      <el-table-column prop="province" label="SKU"></el-table-column>
      <el-table-column prop="name" label="SKU中文名"></el-table-column>
      <el-table-column prop="address" label="成本价"></el-table-column>
      <el-table-column prop="address" label="仓库"></el-table-column>
      <el-table-column prop="date" label="原库存"></el-table-column>
      <el-table-column prop="date" label="新库存"></el-table-column>
      <el-table-column prop="date" label="操作时间"></el-table-column>
      <el-table-column prop="date" label="操作人"></el-table-column>
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
</style>
