<template>
  <div>
    <div class="item  bgc_white">
      <el-form :inline="true" :model="formInline" class="demo-form-inline text-left">
        <el-form-item label="批次号">
          <el-input v-model="formInline.sku" placeholder="请输入批次号"></el-input>
        </el-form-item>
        <el-form-item label="供应商">
          <el-input v-model="formInline.user" placeholder="请输入供应商"></el-input>
        </el-form-item>
        <el-form-item label="SKU">
          <el-input v-model="formInline.user" placeholder="请输入SKU"></el-input>
        </el-form-item>
        <el-form-item label="商品名称">
          <el-input v-model="formInline.user" placeholder="请输入商品名称"></el-input>
        </el-form-item>
        <el-form-item label="采购员">
          <el-select v-model="formInline.region" placeholder="请选择采购员">
            <el-option label="是" value="是"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="formInline.region" placeholder="请选择状态">
            <el-option label="是" value="是"></el-option>
            <el-option label="否" value="否"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="创建日期">
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
        <el-tab-pane label="仓库" name="first">
          <abn-box-warehouse></abn-box-warehouse>
        </el-tab-pane>
        <el-tab-pane label="采购" name="second">
          <abn-box-purchase></abn-box-purchase>
        </el-tab-pane>
        <el-tab-pane label="主管审核" name="third">
          <abn-box-director></abn-box-director>
        </el-tab-pane>
        <el-tab-pane label="全部状态" name="fourth">
          <abn-box-all></abn-box-all>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
   import AbnBoxWarehouse from '../../components/AbnBoxContent/AbnBoxWarehouse.vue'  //仓库
   import AbnBoxPurchase from '../../components/AbnBoxContent/AbnBoxPurchase.vue'    //采购
   import AbnBoxDirector from '../../components/AbnBoxContent/AbnBoxDirector.vue'    //主管
   import AbnBoxAll from '../../components/AbnBoxContent/AbnBoxAll.vue'              //全部状态
  export default{
    components:{
      AbnBoxWarehouse,AbnBoxPurchase,AbnBoxDirector,AbnBoxAll
    },
    data: function () {
      return {
        activeName: 'first',
        formInline:{
          sku:'',
          user:'',
          region:'',
          createDate:''
        }
      }
    },
    methods:{
      handleClick: function(tab, event) {
        //console.log(tab, event);
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
