<template>
  <!--编辑弹窗-->
  <el-dialog title="新增" :visible.sync="inventoryShow" width="350px" @close="toFather">
    <el-form :model="formInline" :inline="true" :label-width="labelWidth">
      <el-form-item class="mb_0">
        <el-input type="textarea" style="width: 280px" v-model="formInline.sku" auto-complete="off" placeholder="在这里输入SKU"></el-input>
      </el-form-item>
      <div class="text_red text_left">输入SKU(每行一个SKU和添加数量)</div>
      <div class="text_red text_left">格式：SKU,添加数量</div>
      <div class="text_red text_left">例如：SKU,2</div>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="onSubmit">保 存</el-button>
      <el-button @click="closeDrag">取 消</el-button>
      <el-button @click="seeLog">查看日志</el-button>
    </div>
  </el-dialog>
</template>
<script>
  export default{
    props:['inventoryShow'],
    data: function () {
      return{
        labelWidth:'60px',
        formInline:{
          sku:'',
          region:''
        }
      }
    },
    methods:{
      seeLog(){
        this.toFather()
        this.$router.push('/indexpage/ClearanceSeeLog')
      },
      closeDrag:function () {
        this.toFather()
      },
      onSubmit: function () {
        this.toFather()
      },
      toFather: function () {
        this.$emit('initDragStyle')
      }
    }
  }
</script>

<style>
  textarea.el-textarea__inner{
    height: 150px;
  }
  .mb_0{
    margin-bottom: 0;
  }
</style>
