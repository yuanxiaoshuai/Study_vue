<template>
  <el-dialog
    :title="titleName"
    :visible.sync="wareDetailShow"
    class="demo-form-inline text-left"
    :before-close="closeDialog"
    width="650px">
    <el-form :model="form"  :inline="true">
      <el-form-item label="批次号">
        <el-input v-model="form.sku" placeholder="sku"></el-input>
      </el-form-item>
      <el-form-item label="供应商">
        <el-input v-model="form.name" placeholder="供应商" disabled></el-input>
      </el-form-item>
      <el-form-item label="商品编号">
        <el-input v-model="form.name" placeholder="商品编号" disabled></el-input>
      </el-form-item>
      <el-form-item label="商品名称">
        <el-input v-model="form.region" placeholder="商品名称" disabled></el-input>
      </el-form-item>
      <el-form-item label="采购量">
        <el-input v-model="form.region" placeholder="采购量" disabled></el-input>
      </el-form-item>
      <el-form-item label="采购价">
        <el-input v-model="form.num" placeholder="采购价" disabled></el-input>
      </el-form-item>
      <el-form-item label="实际签收数量">
        <el-input v-model="form.num" placeholder="实际签收数量" disabled></el-input>
      </el-form-item>
      <el-form-item label="退货次品">
        <el-input v-model="form.pay" placeholder="退货次品" disabled></el-input>
      </el-form-item>
      <el-form-item label="实际入库量">
        <el-input v-model="form.pay" placeholder="实际入库量"></el-input>
      </el-form-item>
      <el-form-item label="验货备注">
        <el-select v-model="form.region" placeholder="验货备注">
          <el-option label="有" value="有"></el-option>
          <el-option label="无" value="无"></el-option>
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
          <span class="text_red">最多添加3张图片</span>
        </el-form-item>
      </div>
      <el-form-item label="质检标准" class="lone_item">
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="请填写备注"
          v-model="form.textarea">
        </el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="closeDrag">取 消</el-button>
      <el-button type="primary" @click="submitDrag">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import {mapState} from 'vuex'
  export default{
    props: ['ifShow'],
    data: function () {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        fileList:[],
        form: {
          pay: '',
          sku: '',
          name: '',
          num: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          textarea: '',
          desc: ''
        }
      }
    },
    methods: {
      handleBeforeUpload: function (file) {
        console.log(file)
        this.fileList.push({
          name:file.name,
          url:file.name
        })
      },
      handleRemove: function(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview: function(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      submitDrag: function () {
        this.closeDialog()
      },
      closeDrag: function () {
        this.closeDialog()
      },
      closeDialog: function () {
        this.$store.commit("changeWareDetailShow",{title:"运单号签收"})
      }
    },
    computed:{
      ...mapState({
        wareDetailShow:state=>state.dialog.wareDetailShow,
        titleName:state=>state.dialog.name
      })
    }
  }
</script>

<style>
  .lone_item{
    width: 100%;
  }
  .lone_item .el-form-item__content{
    width: 470px;
  }
</style>
