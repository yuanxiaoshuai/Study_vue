<template>
<div>
  <div class="item  bgc_white">
    <el-form :inline="true" :model="formInline" class="demo-form-inline text-left">
      <el-form-item label="sku">
        <el-input v-model="formInline.sku" placeholder="sku"></el-input>
      </el-form-item>
      <el-form-item label="供应商">
        <el-input v-model="formInline.user" placeholder="供应商"></el-input>
      </el-form-item>
      <el-form-item label="付款方式">
        <el-select v-model="formInline.region" placeholder="付款方式">
          <el-option label="阿里巴巴" value="阿里巴巴"></el-option>
          <el-option label="周结" value="周结"></el-option>
          <el-option label="双周结" value="双周结"></el-option>
          <el-option label="月结" value="月结"></el-option>
          <el-option label="淘宝" value="淘宝"></el-option>
          <el-option label="转账" value="转账"></el-option>
          <el-option label="其他" value="其他"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="采购员">
        <el-select v-model="formInline.region" placeholder="采购员">
          <el-option label="sss" value="sss"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否API">
        <el-select v-model="formInline.region" placeholder="是否API">
          <el-option label="是" value="是"></el-option>
          <el-option label="否" value="否"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button @click="resetForm">清空条件</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="item bgc_white mt_20 text_left">
    <div class="mb_20" style="font-size: 14px">
      <el-button>生成批次</el-button>
      <el-button @click="$store.commit('changeShow',{title:'不采购'})">不采购</el-button>
      <span  class="demo-input-suffix ml_20">
        运费：
        <el-input class="input_line" v-model="formInline.pay" placeholder="运费"></el-input>
      </span>
      <span  class="demo-input-suffix ml_20">
        是否到付：
        <el-select v-model="formInline.region" placeholder="是否到付">
          <el-option label="是" value="是"></el-option>
          <el-option label="否" value="否"></el-option>
        </el-select>
      </span>
      <span  class="demo-input-suffix ml_20">
        是否定制：
        <el-select v-model="formInline.region" placeholder="是否定制">
          <el-option label="是" value="是"></el-option>
          <el-option label="否" value="否"></el-option>
        </el-select>
      </span>
    </div>
    <Table></Table>
  </div>
  <no-pay></no-pay>
</div>

</template>

<script>
  import Table from '../../components/Table/Table.vue'
  import NoPay from '../../components/Dialog/NoPay.vue'
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: '',
          pay: ''
        }
      }
    },
    methods: {
      onSubmit: function () {
        console.log('submit!');
      },
      resetForm: function () {
        for (let key in this.formInline) {
          this.formInline[key] = ''
        }
      }
    },
    components: {
      Table,NoPay
    }
  }
</script>

<style>
  .item{
    padding: 20px 20px 0 20px;
  }
</style>
