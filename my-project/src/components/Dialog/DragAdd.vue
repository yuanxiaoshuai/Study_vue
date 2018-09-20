<template>
  <el-dialog
    :title="titleName"
    :visible.sync="show"
    class="demo-form-inline text-left"
    :before-close="closeDialog"
    width="650px">
    <el-form :model="form"  :inline="true">
      <el-form-item label="sku">
        <el-input v-model="form.sku" placeholder="sku"></el-input>
      </el-form-item>
      <el-form-item label="供应商">
        <el-input v-model="form.name" placeholder="供应商"></el-input>
      </el-form-item>
      <el-form-item label="中文名称">
        <el-input v-model="form.name" placeholder="中文名称" disabled></el-input>
      </el-form-item>
      <el-form-item label="1688起订量">
        <el-input v-model="form.region" placeholder="1688起订量" disabled></el-input>
      </el-form-item>
      <el-form-item label="库存">
        <el-input v-model="form.region" placeholder="库存" disabled></el-input>
      </el-form-item>
      <el-form-item label="在途数量">
        <el-input v-model="form.num" placeholder="在途数量" disabled></el-input>
      </el-form-item>
      <el-form-item label="警戒量">
        <el-input v-model="form.num" placeholder="警戒量" disabled></el-input>
      </el-form-item>
      <el-form-item label="成本价">
        <el-input v-model="form.pay" placeholder="成本价" disabled></el-input>
      </el-form-item>
      <el-form-item label="分拣方">
        <el-input v-model="form.pay" placeholder="分拣方" disabled></el-input>
      </el-form-item>
      <el-form-item label="仓库分拣费">
        <el-input v-model="form.pay" placeholder="仓库分拣费" disabled></el-input>
      </el-form-item>
      <el-form-item label="采购价">
        <el-input v-model="form.pay" placeholder="采购价" ></el-input>
      </el-form-item>
      <el-form-item label="采购量">
        <el-input v-model="form.pay" placeholder="采购量" ></el-input>
      </el-form-item>
      <el-form-item label="运费">
        <el-input v-model="form.pay" placeholder="运费" ></el-input>
      </el-form-item>
      <el-form-item label="SKU分拣费">
        <el-input v-model="form.pay" placeholder="SKU分拣费" ></el-input>
      </el-form-item>
      <el-form-item label="付款方式">
        <el-select v-model="form.region" placeholder="付款方式">
          <el-option label="有" value="有"></el-option>
          <el-option label="无" value="无"></el-option>
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
    data: function () {
      return {
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
          desc: ''
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
        this.$store.commit("changeShow",{title:'追加'})
      }
    },
    computed:{
      ...mapState({
        show:state => state.dialog.show,
        titleName:state => state.dialog.name
      })
    }
  }
</script>

<style>
</style>
