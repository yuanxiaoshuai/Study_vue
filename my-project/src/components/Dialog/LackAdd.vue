<template>
  <!--编辑弹窗-->
  <el-dialog title="新增" :visible.sync="ifShow" width="350px" @close="toFather">
    <el-form :model="form" >
      <el-form-item>
        <el-input type="textarea" v-model="form.sku" auto-complete="off" placeholder="在这里输入SKU"></el-input>
      </el-form-item>
      <div class="text_red text_left">注：一行一个</div>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="closeDrag">取 消</el-button>
      <el-button type="primary" @click="onSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
  export default{
    props:['ifShow'],
    data: function () {
      return{
        form:{
          sku:''
        }
      }
    },
    methods:{
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
</style>
