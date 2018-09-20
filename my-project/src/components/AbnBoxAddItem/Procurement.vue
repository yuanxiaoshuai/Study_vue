<template>
  <div class="item mt_20">
    <title-bar :title="title"></title-bar>
    <el-form  :model="form" class="demo-form-inline text-left" label-width="100px">
      <el-form-item label="处理方式">
        <el-select v-model="form.region" placeholder="请选择处理方式">
          <el-option label="填写批次号" value="填写批次号"></el-option>
          <el-option label="填写批次号" value="打包处理"></el-option>
          <el-option label="填写批次号" value="退回供应商"></el-option>
          <el-option label="填写批次号" value="退回仓库"></el-option>
          <el-option label="填写批次号" value="盘盈入库"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="批次号" v-if="form.region=='填写批次号'">
        <el-input type="textarea" v-model="form.number"></el-input>
      </el-form-item>
      <el-form-item label="退货地址" v-if="form.region=='退回供应商'">
        <el-input v-model="form.returnWhere"></el-input>
      </el-form-item>
      <el-form-item label="入库SKU" v-if="form.region=='盘盈入库'">
        <el-input v-model="form.returnSku"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import TitleBar from '../TitleBar.vue'
  export default{
    data: function(){
      return{
        title:'采购详情',
        form:{
          region:'',
          desc:'',
          number:'',
          returnWhere:'',
          returnSku:''
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
