<template>
<div>
  <div class="item  bgc_white">
    <el-form :inline="true" :model="formInline" class="demo-form-inline text-left">
      <el-form-item label="提交时间">
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
      <el-button>下载</el-button>
    </div>
    <el-table
      border
      stripe
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="序号"
        width="80">
      </el-table-column>
      <el-table-column
        prop="name"
        label="SKU">
      </el-table-column>
      <el-table-column
        prop="name"
        label="采购员">
      </el-table-column>
      <el-table-column
        prop="name"
        label="采购员地区">
      </el-table-column>
      <el-table-column
        prop="name"
        label="降级时间">
      </el-table-column>
      <el-table-column
        prop="name"
        label="未降价天数">
      </el-table-column>
      <el-table-column
        prop="name"
        label="降价员">
      </el-table-column>
      <el-table-column
        prop="name"
        label="降价员地区">
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
        label="新价格采购批次">
      </el-table-column>
      <el-table-column
        prop="name"
        label="入库量">
      </el-table-column>
      <el-table-column
        prop="name"
        label="降价总额">
      </el-table-column>
    </el-table>
    <table-page></table-page>
  </div>
</div>

</template>
<script>
  import TablePage from '../../components/TablePage.vue'
  export default {
    data() {
      return {
        formInline:{date:''},
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {

      checkTableData: function (changeTableData) {
        this.multipleSelection = changeTableData
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

</style>
