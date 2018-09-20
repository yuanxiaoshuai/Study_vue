<template>
  <div>
    <div class="item  bgc_white">
      <el-form :inline="true" :model="formInline" class="demo-form-inline text-left">
        <el-form-item label="SKU">
          <el-input v-model="formInline.sku" placeholder="请输入SKU"></el-input>
        </el-form-item>
        <el-form-item label="主售平台">
          <el-input v-model="formInline.user" placeholder="请输入主售平台"></el-input>
        </el-form-item>
        <el-form-item label="提交人">
          <el-input v-model="formInline.user" placeholder="请输入提交人"></el-input>
        </el-form-item>
        <el-form-item label="采购员">
          <el-select v-model="formInline.region" placeholder="请选择采购员">
            <el-option label="是" value="是"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="供应链">
          <el-select v-model="formInline.region" placeholder="请选择供应链">
            <el-option label="是" value="是"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="formInline.region" placeholder="请选择状态">
            <el-option label="是" value="是"></el-option>
            <el-option label="否" value="否"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择日期">
          <el-select v-model="formInline.region" placeholder="请选择日期">
            <el-option label="创建日期" value="创建日期"></el-option>
            <el-option label="结束日期" value="结束日期"></el-option>
          </el-select>
          <el-date-picker
            v-model="formInline.createDate"
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
    <div class="item  bgc_white mt_20 tab_content">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="缺货管理" name="first">
          <div class="item mb_20">
            <el-button @click="add">新增</el-button>
            <el-button @click="examine('下载')">下载</el-button>
          </div>
          <lack-table :name="name" @examineTableData="examineTableData"></lack-table>
          <!--<table-page></table-page>-->
        </el-tab-pane>
        <el-tab-pane label="缺货回顾" name="second">
          <lack-table :name="name" @examineTableData="examineTableData"  class="mt_20"></lack-table>
          <!--<table-page></table-page>-->
        </el-tab-pane>
      </el-tabs>
      <table-page></table-page>
    </div>
    <lack-add></lack-add>
  </div>
</template>

<script>
  import TablePage from '../../components/TablePage.vue'
  import LackTable from '../../components/Table/LackTable.vue'
  import LackAdd from '../../components/Dialog/LackAdd.vue'  // 缺货管理-->新增
  export default{
    data: function () {
      return {
        name: 'first',
        multipleSelection:[],
        activeName: 'first',
        formInline:{
          sku:'',
          user:'',
          region:'',
          createDate:''
        }
      }
    },
    components: {
      LackTable,
      LackAdd,
      TablePage
    },
    methods:{
      add: function () {
        this.$store.commit("showLackAddShow",{title:"新增"})
      },
      initDragStyle:function () {
        this.ifShow = false
      },
      examineTableData:function (data) { //table传过来的数据
        this.multipleSelection = data
      },
      examine: function(title){ //审核通用
        if(this.multipleSelection.length <=0){
          this.$alert('请勾选表格数据','提示')
        }else{
          this.$confirm( title, {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: title+'成功!'
            });
          }).catch(() => { //
            this.$message({
              type: 'error',
              message: '取消'+title+'!'
            });
          });
        }
      },
      handleClick: function(tab, event) {
        this.name=tab.name
      },
      onSubmit: function () { // 搜索
        this.$message.success('submit!');
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
  .tab_content .el-tabs__header{
    box-shadow: none;
  }
</style>
