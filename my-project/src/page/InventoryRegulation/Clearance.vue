<template>
<div>
  <div class="item  bgc_white">
    <el-form :inline="true" :model="formInline" class="demo-form-inline text-left">
      <el-form-item label="查询条件1">
        <el-select v-model="formInline.region" placeholder="请选择查询条件1">
          <el-option label="请选择" value=""></el-option>
          <el-option label="子SKU" value="1"></el-option>
          <el-option label="主SKU" value="2"></el-option>
          <el-option label="商品名称" value="3"></el-option>
          <el-option label="采购员" value="4"></el-option>
          <el-option label="开发员" value="5"></el-option>
          <el-option label="开发员姓名" value="6"></el-option>
          <el-option label="成本价大于等于" value="7"></el-option>
          <el-option label="成本价小于等于" value="8"></el-option>
          <el-option label="重量小于等于" value="9"></el-option>
          <el-option label="重量大于等于" value="10"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input v-model="formInline.sku" placeholder="请输入查询参数"></el-input>
      </el-form-item>
      <el-form-item label="查询条件2">
        <el-select v-model="formInline.region" placeholder="请选择查询条件2">
          <el-option label="请选择" value=""></el-option>
          <el-option label="子SKU" value="1"></el-option>
          <el-option label="主SKU" value="2"></el-option>
          <el-option label="商品名称" value="3"></el-option>
          <el-option label="采购员" value="4"></el-option>
          <el-option label="开发员" value="5"></el-option>
          <el-option label="开发员姓名" value="6"></el-option>
          <el-option label="成本价大于等于" value="7"></el-option>
          <el-option label="成本价小于等于" value="8"></el-option>
          <el-option label="重量小于等于" value="9"></el-option>
          <el-option label="重量大于等于" value="10"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input v-model="formInline.sku" placeholder="请输入查询参数"></el-input>
      </el-form-item>
      <el-form-item label="商品状态">
        <el-select v-model="formInline.region" placeholder="请选择采购员">
          <el-option label="是" value="是"></el-option>
          <el-option label="否" value="否"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="formInline.region" placeholder="请选择退货进度">
          <el-option label="是" value="是"></el-option>
          <el-option label="否" value="否"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="录入日期">
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
      <el-button @click="batchImport">批量导入</el-button>
      <el-button @click="batchEdit">批量修改</el-button>
      <el-button @click="clearanceSetting">清仓配置</el-button>
      <el-button @click="inventory">库存盘点</el-button>
      <el-button>仓库下载</el-button>
      <el-button>清仓下载</el-button>
      <el-button>热销下载</el-button>
      <el-button>下载数据</el-button>
    </div>

    <clear-table @callFather="callFather"></clear-table>
    <table-page></table-page>
  </div>
  <lack-add :if-show="ifShow" @initDragStyle="initDragStyle"></lack-add>
  <batch-edit :batch-edit-show="batchEditShow" @initDragStyle="initDragStyle"></batch-edit>
  <inventory :inventory-show="inventoryShow" @initDragStyle="initDragStyle"></inventory>
</div>

</template>

<script>
  import Inventory from '../../components/Dialog/Inventory.vue'
  import ClearTable from '../../components/Table/ClearTable.vue' //表格
  import BatchEdit from '../../components/Dialog/BatchEdit.vue'  //批量修改
  import LackAdd from '../../components/Dialog/LackAdd.vue'      // 批量导入
  import TablePage from '../../components/TablePage.vue'         // 分页
  export default {
    data: function () {
      return {
        inventoryShow: false,
        ifShow: false,
        batchEditShow: false,
        multipleSelection: '',
        formInline: {
          sku: '',
          user: '',
          region: '',
          date:''
        }
      }
    },
    methods: {
      callFather(data){
        this.multipleSelection = data
        console.log(this.multipleSelection)
      },
      clearanceSetting(){
        this.$router.push("/indexpage/ClearanceSetting")
      },
      inventory(){ // 盘点库存
        this.inventoryShow = true
      },
      batchEdit(){
        this.batchEditShow=true
      },
      batchImport(){ //批量导入
        this.ifShow = true
      },
      initDragStyle: function () {
        this.ifShow = false
        this.batchEditShow = false
        this.inventoryShow = false
      },
      openNewPage: function (page) {
        this.$router.push('/indexpage/' + page)
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
      TablePage,
      BatchEdit,
      ClearTable,
      Inventory
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
