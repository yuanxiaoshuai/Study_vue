<template>
  <div class="item mt_20">
    <title-bar :title="title"></title-bar>
    <el-form :inline="true" :model="form" class="demo-form-inline text-left">
      <el-form-item label="退货人">
        <el-input disabled v-model="form.user"></el-input>
      </el-form-item>
      <el-form-item label="退货单号">
        <el-input v-model="form.number"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import TitleBar from '../TitleBar.vue'
  export default{
    data: function(){
      return{
        title:'待退货',
        form:{
          user:'',
          number:''
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
