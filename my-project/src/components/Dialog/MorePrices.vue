<template>
  <el-dialog
    title="批量调价"
    :visible.sync="ifShow"
    width="400px"
    :before-close="handleClose">
      <el-upload
        class="upload-demo"
        ref="upload"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :auto-upload="false">
        <div slot="tip" class="el-upload__tip"></div>
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="primary" @click="submitUpload">上传</el-button>
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary">下载模板</el-button>
      </el-upload>
  </el-dialog>
</template>
<script>
  export default {
    props:['ifShow'],
    data: function () {
      return {
        fileList: []
      };
    },
    methods: {
      submitUpload: function () {
        this.$refs.upload.submit();
      },
      handleRemove: function (file, fileList) {
        console.log(file, fileList);
      },
      handlePreview: function (file) {
        console.log(file);
      },
      handleClose:function (file) {
        this.$emit('callFather')
      }
    }
  }
</script>

<style>
</style>
