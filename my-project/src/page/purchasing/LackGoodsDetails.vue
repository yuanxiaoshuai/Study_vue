<template>
  <div>
    <div class="item  bgc_white">
      <el-form :inline="true" :model="formInline" class="demo-form-inline text-left">
        <title-bar :title="title1"></title-bar>
        <el-form-item label="SKU">
          <el-input disabled v-model="formInline.sku" placeholder="请输入SKU"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-input disabled v-model="formInline.user" placeholder="请输入状态"></el-input>
        </el-form-item>
        <el-form-item label="提交人">
          <el-input disabled v-model="formInline.user" placeholder="请输入提交人"></el-input>
        </el-form-item>
        <el-form-item label="提交时间">
          <el-input disabled v-model="formInline.user" placeholder="请输入提交时间"></el-input>
        </el-form-item>
        <el-form-item label="处理天数">
          <el-input disabled v-model="formInline.user" placeholder="请输入处理天数"></el-input>
        </el-form-item>
        <el-form-item label="采购员">
          <el-input disabled v-model="formInline.user" placeholder="请输入采购员"></el-input>
        </el-form-item>
        <el-form-item label="供应链">
          <el-input disabled v-model="formInline.user" placeholder="请输入供应链"></el-input>
        </el-form-item>
        <el-form-item label="缺货数量">
          <el-input disabled v-model="formInline.user" placeholder="请输入缺货数量"></el-input>
        </el-form-item>
        <el-form-item label="SKU状态">
          <el-input disabled v-model="formInline.user" placeholder="请输入SKU状态"></el-input>
        </el-form-item>
        <el-form-item label="7/30/90天销量">
          <el-input disabled v-model="formInline.user" placeholder="请输入销量"></el-input>
        </el-form-item>
        <el-form-item label="库存">
          <el-input disabled v-model="formInline.user" placeholder="请输入库存"></el-input>
        </el-form-item>
        <el-form-item label="在途数量">
          <el-input disabled v-model="formInline.user" placeholder="请输入在途数量"></el-input>
        </el-form-item>
        <el-form-item label="待发货">
          <el-input disabled v-model="formInline.user" placeholder="请输入待发货数量"></el-input>
        </el-form-item>
        <el-form-item label="待发货订单">
          <el-input disabled v-model="formInline.user" placeholder="请输入待发货订单量"></el-input>
        </el-form-item>
        <el-form-item label="待发货缺货订单">
          <el-input disabled v-model="formInline.user" placeholder="请输入待发货缺货订单量"></el-input>
        </el-form-item>
        <el-form-item label="当前库存">
          <el-input disabled v-model="formInline.user" placeholder="请输入当前库存量"></el-input>
        </el-form-item>
        <el-form-item label="当前在途">
          <el-input disabled v-model="formInline.user" placeholder="请输入当前在途量"></el-input>
        </el-form-item>
        <el-form-item label="当前待发货">
          <el-input disabled v-model="formInline.user" placeholder="请输入当前待发货量"></el-input>
        </el-form-item>
        <el-form-item label="当前待发货订单">
          <el-input disabled v-model="formInline.user" placeholder="请输入当前待发货订单量"></el-input>
        </el-form-item>
        <el-form-item label="当前待发货缺货订单">
          <el-input disabled v-model="formInline.user" placeholder="请输入当前待发货缺货订单量"></el-input>
        </el-form-item>
        <title-bar :title="title2"></title-bar>
        <el-form-item label="处理结果">
          <el-input disabled v-model="formInline.user" placeholder="请输入当前处理结果"></el-input>
        </el-form-item>
        <el-form-item label="处理人">
          <el-input disabled v-model="formInline.user" placeholder="请输入处理人"></el-input>
        </el-form-item>
        <el-form-item label="处理时间">
          <el-input disabled v-model="formInline.user" placeholder="请输入处理时间"></el-input>
        </el-form-item>
        <el-form-item label="供应商ID">
          <el-input disabled v-model="formInline.user" placeholder="请输入供应商ID"></el-input>
        </el-form-item>
        <el-form-item label="链接">
          <el-input disabled v-model="formInline.user" placeholder="请输入链接"></el-input>
        </el-form-item>
        <el-form-item label="采购价">
          <el-input disabled v-model="formInline.user" placeholder="请输入采购价"></el-input>
        </el-form-item>
        <el-form-item label="交期">
          <el-input disabled v-model="formInline.user" placeholder="请输入交期"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input disabled v-model="formInline.user" placeholder="请输入备注"></el-input>
        </el-form-item>
        <el-form-item label="是否确认停产">
          <el-input disabled v-model="formInline.user" placeholder="是否确认"></el-input>
        </el-form-item>


        <title-bar :title="title3"></title-bar>
        <el-form-item label="主售平台">
          <el-input disabled v-model="formInline.user" placeholder="请输入主售平台"></el-input>
        </el-form-item>
        <el-form-item label="销售确认人">
          <el-input disabled v-model="formInline.user" placeholder="请输入销售确认人"></el-input>
        </el-form-item>
        <el-form-item label="销售确认时间">
          <el-input disabled v-model="formInline.user" placeholder="请输入销售确认时间"></el-input>
        </el-form-item>
        <el-form-item label="是否确认定做">
          <el-input disabled v-model="formInline.user" placeholder="是否确认定做"></el-input>
        </el-form-item>


        <title-bar :title="title4"></title-bar>
        <el-form-item label="回顾结果">
          <el-input disabled v-model="formInline.user" placeholder="请输入回顾结果"></el-input>
        </el-form-item>
        <el-form-item label="回顾人">
          <el-input disabled v-model="formInline.user" placeholder="请输入回顾人"></el-input>
        </el-form-item>
        <el-form-item label="回顾时间">
          <el-input disabled v-model="formInline.user" placeholder="请输入回顾时间"></el-input>
        </el-form-item>



        <title-bar :title="title5"></title-bar>
        <el-form-item label="回顾结果">
          <el-input disabled v-model="formInline.user" placeholder="请输入回顾结果"></el-input>
        </el-form-item>
        <el-form-item label="回顾人">
          <el-input disabled v-model="formInline.user" placeholder="请输入回顾人"></el-input>
        </el-form-item>
        <el-form-item label="回顾时间">
          <el-input disabled v-model="formInline.user" placeholder="请输入回顾时间"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import TitleBar from '../../components/TitleBar.vue'
  export default{
    data: function () {
      return {
        title1:'SKU详情',
        title2:'供应链处理详情',
        title3:'销售处理详情',
        title4:'14天回顾详情',
        title5:'28天回顾详情',
        formInline:{
          sku:'',
          user:'',
          region:'',
          createDate:''
        }
      }
    },
    components:{
      TitleBar
    }
  }
</script>

<style>
</style>
