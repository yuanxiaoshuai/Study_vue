<template>
<div>
  <div class="item  bgc_white">
    <title-bar :title="titleMsg1"></title-bar>
    <el-form :inline="true" :model="formInline" class="demo-form-inline text-left">
      <el-form-item label="批次号">
        <el-input disabled v-model="formInline.sku" placeholder="请输入批次号"></el-input>
      </el-form-item>
      <el-form-item label="供应商">
        <el-input disabled v-model="formInline.sku" placeholder="请输入供应商"></el-input>
      </el-form-item>
      <el-form-item label="SKU数">
        <el-input disabled v-model="formInline.sku" placeholder="请输入SKU数"></el-input>
      </el-form-item>
      <el-form-item label="总采购数">
        <el-input disabled v-model="formInline.sku" placeholder="请输入总采购数"></el-input>
      </el-form-item>
      <el-form-item label="总金额">
        <el-input disabled v-model="formInline.sku" placeholder="请输入总金额"></el-input>
      </el-form-item>
      <el-form-item label="付款方式">
        <el-input disabled v-model="formInline.sku" placeholder="请输入付款方式"></el-input>
      </el-form-item>
      <el-form-item label="采购总价">
        <el-input disabled v-model="formInline.sku" placeholder="请输入采购总价"></el-input>
      </el-form-item>
      <el-form-item label="采购天数">
        <el-input disabled v-model="formInline.sku" placeholder="请输入采购天数"></el-input>
      </el-form-item>
      <el-form-item label="运费">
        <el-input disabled v-model="formInline.sku" placeholder="请输入运费"></el-input>
      </el-form-item>
      <el-form-item label="运单号">
        <el-input disabled v-model="formInline.sku" placeholder="请输入运单号"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-input disabled v-model="formInline.sku" placeholder="请输入状态"></el-input>
      </el-form-item>
      <el-form-item label="创建时间">
        <el-input disabled v-model="formInline.sku" placeholder="请输入创建时间"></el-input>
      </el-form-item>
      <el-form-item label="扫描时间">
        <el-input disabled v-model="formInline.sku" placeholder="请输入扫描时间"></el-input>
      </el-form-item>
    </el-form>
  </div>

  <div class="item bgc_white mt_20 text_left">
    <title-bar :title="titleMsg2"></title-bar>
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
        label="图片">
        <template slot-scope="scope">
          <img src="" :alt="scope.row.name">
        </template>
      </el-table-column>
      <el-table-column
        prop="province"
        label="SKU">
      </el-table-column>
      <el-table-column
        prop="city"
        label="商品名称">
      </el-table-column>
      <el-table-column
        prop="address"
        label="采购员">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="采购量">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="签收量">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="SKU总价">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="仓位">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="签收时间">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="签收人">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="库存">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="入库时间">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="实际入库时间">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作">
        <template slot-scope="scope">

          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            size="mini"
            class="mini_btn_noborder"
            type="text">
            入库
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <table-page></table-page>
  </div>
  <warehous-drag></warehous-drag>
</div>

</template>

<script>
  import TitleBar from '../../components/TitleBar.vue'
  import WarehousDrag from '../../components/Dialog/WarehousDrag.vue'
  import TablePage from '../../components/TablePage.vue'
  export default {
    data: function () {
      return {
        titleMsg1: '批次信息',
        titleMsg2: '批次详情',
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
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      deleteRow: function (index, rows) {
        this.$store.commit("changeWareDetailShow",{title:"运单号签收"})
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
      TitleBar,WarehousDrag,TablePage
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
