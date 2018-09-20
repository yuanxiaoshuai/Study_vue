<template>
  <el-dialog
    title="批量上传"
    :visible.sync="batchUploadShow"
    class="demo-form-inline text-left"
    :before-close="closeDialog"
    width="450px">
    <span><i class="el-icon-upload"></i>上传文件（仅支持xls）</span>
    <el-upload
      class="upload-demo"
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :auto-upload="false">
      <el-button slot="trigger" size="small" >选取文件</el-button>
      <el-button style="margin-left: 10px;" size="small"  @click="submitUpload">上传</el-button>
      <el-button style="margin-left: 10px;" size="small"  @click="submitUpload">FBA上传</el-button>
      <el-button style="margin-left: 10px;" size="small"  @click="">下载模板</el-button>
    </el-upload>
  </el-dialog>
</template>

<script>
  import {mapState} from 'vuex'
  export default{
    name: 'UploadShow',
    data: function () {
      return {
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        input: ''
      }
    },
    methods: {
      submitUpload: function () {
        this.$refs.upload.submit();
        this.closeDialog()
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      closeDialog: function () {
        this.$store.commit('changeBatchUploadShow',{title:'批量上传'})
      }
    },
    computed:{
      ...mapState({
        batchUploadShow:state=> state.dialog.batchUploadShow
      })
    }
  }
</script>

<style>
</style>
