<template>
  <el-dialog
      title="生成异常"
      :visible.sync="createdAbnShow"
      class="demo-form-inline text-left"
      :before-close="closeDialog"
      width="450px"
  >
    <el-form :model="form">
      <el-form-item label="异常类型" class="created_abnormal">
        <el-select v-model="form.region" placeholder="请选择异常类型">
          <el-option label="供应商缺货退款" value="供应商缺货退款"></el-option>
          <el-option label="合并批次入库" value="合并批次入库"></el-option>
        </el-select>
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
    data () {
      return {
        form: {
          region: ''
        }
      }
    },
    methods: {
      submitDrag: function () {
        this.closeDialog()
      },
      closeDrag: function () {
        this.closeDialog()
      },
      closeDialog: function () {
        this.$store.commit("changeCreatedAbnShow",{title:"生成异常"})
      }
    },
    computed:{
      ...mapState({
        createdAbnShow:state=>state.dialog.createdAbnShow
      })
    }
  }
</script>

<style>
.created_abnormal .el-input__inner{
  width: 285px;
}
</style>
