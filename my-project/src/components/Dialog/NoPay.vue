<template>
  <el-dialog
              title="不采购原因"
              :visible.sync="show"
              class="demo-form-inline text-left"
              width="450px"
              :before-close="closeDialog"
  >
    <el-form :model="form">
      <el-form-item label="不采购原因" class="created_abnormal">
        <el-select v-model="form.region" placeholder="请选择不采购原因">
          <el-option label="采购不到" value="采购不到"></el-option>
          <el-option label="不需采购" value="不需采购"></el-option>
          <el-option label="其他" value="其他"></el-option>
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
  import {mapState} from 'vuex';
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
        this.$message.success("确认不采购:" + this.form.region )
        this.closeDialog()
      },
      closeDrag: function () {
        this.closeDialog()
      },
      closeDialog: function () {
        this.$store.commit('changeShow',{title:'不采购'})
      }
    },
    computed:{
      ...mapState({
        show:state=>state.dialog.show
      })
    }
  }
</script>

<style>
.created_abnormal .el-input__inner{
  width: 285px;
}
</style>
