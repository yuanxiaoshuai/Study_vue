<template>
  <div>
    <div class="item  bgc_white  ">
      <title-bar :title="title1"></title-bar>
      <el-form :inline="true" :model="formInline" class="demo-form-inline text-left">
        <el-form-item label="批次号">
          <el-input disabled v-model="formInline.sku" placeholder="请输入批次号"></el-input>
        </el-form-item>
        <el-form-item label="订单号">
          <el-input disabled v-model="formInline.user" placeholder="请输入订单号"></el-input>
        </el-form-item>
        <el-form-item label="运单号">
          <el-input disabled v-model="formInline.user" placeholder="请输入运单号"></el-input>
        </el-form-item>
        <el-form-item label="历史运单号">
          <el-input disabled v-model="formInline.user" placeholder="请输入历史运单号"></el-input>
        </el-form-item>
        <el-form-item label="付款方式">
          <el-input disabled v-model="formInline.user" placeholder="请输入付款方式"></el-input>
        </el-form-item>
        <el-form-item label="平台">
          <el-input disabled v-model="formInline.user" placeholder="平台"></el-input>
        </el-form-item>
        <el-form-item label="是否API">
          <el-input disabled v-model="formInline.user" placeholder="是否API"></el-input>
        </el-form-item>
        <el-form-item label="付款链接">
          <el-input disabled v-model="formInline.user" placeholder="请输入付款链接"></el-input>
        </el-form-item>
        <el-form-item label="API信息">
          <el-input disabled v-model="formInline.user" placeholder="API信息"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-input disabled v-model="formInline.user" placeholder="状态"></el-input>
        </el-form-item>
        <el-form-item label="供应商">
          <el-input disabled v-model="formInline.user" placeholder="请输入供应商"></el-input>
        </el-form-item>
        <el-form-item label="采购员">
          <el-input disabled v-model="formInline.user" placeholder="请输入采购员"></el-input>
        </el-form-item>
        <el-form-item label="是否匹配">
          <el-input disabled v-model="formInline.user" placeholder="请输入是否匹配"></el-input>
        </el-form-item>
        <el-form-item label="快递公司">
          <el-input disabled v-model="formInline.user" placeholder="请输入快递公司"></el-input>
        </el-form-item>
        <el-form-item label="采购确定时间">
          <el-input disabled v-model="formInline.user" placeholder="请输入采购确定时间"></el-input>
        </el-form-item>
        <el-form-item label="付款时间">
          <el-input disabled v-model="formInline.user" placeholder="请输入付款时间"></el-input>
        </el-form-item>
        <el-form-item label="预计付款日">
          <el-input disabled v-model="formInline.user" placeholder="请输入预计付款日"></el-input>
        </el-form-item>
        <el-form-item label="付款人">
          <el-input disabled v-model="formInline.user" placeholder="请输入付款人"></el-input>
        </el-form-item>
        <el-form-item label="总采购数">
          <el-input disabled v-model="formInline.user" placeholder="请输入总采购数"></el-input>
        </el-form-item>
        <el-form-item label="采购天数">
          <el-input disabled v-model="formInline.user" placeholder="请输入采购天数"></el-input>
        </el-form-item>
        <el-form-item label="总重量">
          <el-input disabled v-model="formInline.user" placeholder="请输入总重量"></el-input>
        </el-form-item>
        <el-form-item label="采购总价">
          <el-input disabled v-model="formInline.user" placeholder="请输入采购总价"></el-input>
        </el-form-item>
        <el-form-item label="总金额">
          <el-input disabled v-model="formInline.user" placeholder="请输入总金额"></el-input>
        </el-form-item>
        <el-form-item label="1688总金额">
          <el-input disabled v-model="formInline.user" placeholder="请输入1688总金额"></el-input>
        </el-form-item>
        <el-form-item label="运费">
          <el-input disabled v-model="formInline.user" placeholder="请输入运费"></el-input>
        </el-form-item>
        <el-form-item label="1688运费">
          <el-input disabled v-model="formInline.user" placeholder="请输入1688运费"></el-input>
        </el-form-item>
        <el-form-item label="驳回原因">
          <el-input disabled v-model="formInline.user" placeholder="请输入驳回原因"></el-input>
        </el-form-item>
        <el-form-item label="批次备注">
          <el-input v-model="formInline.user" placeholder="请输入批次备注"></el-input>
        </el-form-item>
        <el-form-item label="不可修改备注">
          <el-input v-model="formInline.user" placeholder="请输入不可修改备注"></el-input>
        </el-form-item>
        <el-form-item label="买家备注">
          <el-input v-model="formInline.user" placeholder="请输入买家备注"></el-input>
        </el-form-item>
        <el-form-item label="是否到付">
          <el-select v-model="formInline.region" placeholder="是否到付">
            <el-option label="是" value="是"></el-option>
            <el-option label="否" value="否"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否定制">
          <el-select v-model="formInline.region" placeholder="是否定制">
            <el-option label="是" value="是"></el-option>
            <el-option label="否" value="否"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="定制交期">
          <el-input v-model="formInline.user" placeholder="请输入定制交期"></el-input>
        </el-form-item>
        <div style="padding-left: 100px">
          <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
    <div class="item  bgc_white mt_20">
      <title-bar :title="title2"></title-bar>
      <batach-tables></batach-tables>
      <el-button type="primary" @click="$store.commit('changeShow',{title:'追加'})" >追加</el-button>
    </div>
    <drag-add></drag-add>
  </div>
</template>

<script>
  import BatachTables from '../../components/Table/BatachTables.vue'
  import TitleBar from '../../components/TitleBar.vue'
  import DragAdd from '../../components/Dialog/DragAdd.vue'
  export default {
    data () {
      return {
        dialogFormVisible: false,
        title1: '批次信息',
        title2: '批次详情',
        formInline: {
          user: '',
          region: '',
          createDate: '',
          pay: ''
        }
      }
    },
    methods: {
      initDragStyle: function () { // 弹窗子组件调用方法
        this.dialogFormVisible = false
      },
      onSubmit: function () { // 搜索
        this.$message.success({
          showClose: true,
          message: '批次信息保存成功'
        })
      },
      resetForm: function () { // 清空表单条件
        for (let key in this.formInline) {
          this.formInline[key] = ''
        }
      }
    },
    components: {
      BatachTables,
      TitleBar,
      DragAdd
    }
  }
</script>

<style>
</style>
