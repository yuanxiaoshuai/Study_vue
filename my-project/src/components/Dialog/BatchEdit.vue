<template>
  <!--编辑弹窗-->
  <el-dialog title="新增" :visible.sync="batchEditShow" width="350px" @close="toFather">
    <el-form :model="formInline" :inline="true" :label-width="labelWidth">
      <el-form-item class="mb_0">
        <el-input type="textarea" style="width: 280px" v-model="formInline.sku" auto-complete="off" placeholder="在这里输入SKU"></el-input>
      </el-form-item>
      <div class="text_red text_left">注：一行一个</div>
      <el-form-item label="商品状态">
        <el-select v-model="formInline.region" placeholder="请选择商品状态">
          <el-option label="请选择" value=""></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="formInline.region" placeholder="请选择状态">
          <el-option label="请选择" value=""></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="仓库">
        <el-select v-model="formInline.region" placeholder="仓库">
          <el-option label="请选择" value=""></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="仓位">
        <el-input v-model="formInline.sku" placeholder="请输入仓位"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="closeDrag">取 消</el-button>
      <el-button type="primary" @click="onSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
  export default{
    props:['batchEditShow'],
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
