<template>
  <div class="item">
    <title-bar :title="titleMsg"></title-bar>
    <el-form :inline="true"  ref="formData"  :model="formData" class="demo-form-inline text-left">
      <el-form-item label="运单号">
        <el-input disabled v-model="formData.sku" placeholder="运单号"></el-input>
      </el-form-item>
      <el-form-item label="异常类型">
        <el-input v-model="formData.user" placeholder="请选择异常类型"></el-input>
      </el-form-item>
      <el-form-item label="采购员">
        <el-select v-model="formData.region" placeholder="请选择采购员">
          <el-option label="阿里巴巴" value="阿里巴巴"></el-option>
        </el-select>
      </el-form-item>
      <div>
        <el-form-item label="图片">
          <el-upload
            :file-list="fileList"
            action="#"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :auto-upload="false"
            :limit='3'
            :show-file-list="true"
            multiple
            :before-upload="handleBeforeUpload"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
      </div>
    </el-form>
    <div>

    </div>
  </div>
</template>

<script>
  import TitleBar from '../TitleBar.vue'
  export default{
    data: function(){
      return{
        dialogImageUrl: '',
        dialogVisible: false,
        fileList:[],
        titleMsg: '仓库新增',
        formData: {
          sku:'',
          user: '',
          region: ''
        }
      }
    },
    methods: {
      handleBeforeUpload: function (file) {
        //console.log(file)
        this.fileList.push({
          name:file.name,
          url:file.name
        })
      },
      handleRemove: function(file, fileList) {
       // console.log(file, fileList);
      },
      handlePictureCardPreview: function(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    },
    components:{
      TitleBar
    }
  }
</script>

<style>
</style>
