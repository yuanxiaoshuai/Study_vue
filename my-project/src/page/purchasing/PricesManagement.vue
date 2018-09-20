<template>
<div>
  <div class="item  bgc_white">
    <el-form :inline="true" :model="formInline" class="demo-form-inline text-left">
      <el-form-item label="SKU">
        <el-input v-model="formInline.sku" placeholder="sku"></el-input>
      </el-form-item>
      <el-form-item label="供应商">
        <el-input v-model="formInline.sku" placeholder="请输入供应商"></el-input>
      </el-form-item>
      <el-form-item label="调价性质">
        <el-select v-model="formInline.region" placeholder="请选择调价性质">
          <el-option label="涨价" value="涨价"></el-option>
          <el-option label="等价" value="等价"></el-option>
          <el-option label="降价" value="降价"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="采购员">
        <el-select v-model="formInline.region" placeholder="请选择采购员">
          <el-option label="请选择采购员" value="请选择采购员"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="供应链专员">
        <el-select v-model="formInline.region" placeholder="请选择供应链专员">
          <el-option label="请选择采购员" value="请选择供应链专员"></el-option>
          <el-option label="是" value="是"></el-option>
          <el-option label="否" value="否"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="提交人">
        <el-select v-model="formInline.region" placeholder="请选择提交人">
          <el-option label="请选择" value="请选择"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="审核状态">
        <el-select v-model="formInline.region" placeholder="请选择审核状态">
          <el-option label="待审核" value="待审核"></el-option>
          <el-option label="通过" value="通过"></el-option>
          <el-option label="驳回" value="驳回"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="提交时间">
        <el-date-picker
          v-model="formInline.date"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
        <el-button @click="resetForm">清空条件</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="item bgc_white mt_20 text_left">
    <div class="mb_20" style="font-size: 14px">
      <el-button @click="morePrices">批量调价</el-button>
      <el-button>下载</el-button>
      <el-button @click="downPrices">降价统计</el-button>
      <el-button @click="examine">主管审核</el-button>
    </div>
    <prices-table @checkTableData="checkTableData"></prices-table>
    <table-page></table-page>
  </div>
  <more-prices :if-show="ifShow" @callFather="getSonData"></more-prices>
</div>

</template>
<script>
  import PricesTable from '../../components/Table/PricesTable.vue'
  import TablePage from '../../components/TablePage.vue'
  import MorePrices from '../../components/Dialog/MorePrices.vue'
  export default {
    data: function () {
      return {
        ifShow:false,
        multipleSelection:'',
        formInline: {
          sku: '',
          user: '',
          region: ''
        }
      }
    },
    methods: {
      getSonData: function () {
        this.ifShow = false
      },
      checkTableData: function (changeTableData) {
        this.multipleSelection = changeTableData
      },
      downPrices: function () { // 降价统计
        this.$router.push('/indexpage/DownPrices')
      },
      morePrices:function () { // 批量调价
        this.ifShow =true
      },
      examine: function (index, rows) { // 主管审核
        if(this.multipleSelection.length<=0){
          this.$alert('请勾选数据','提示',{
            confirmButtonText: '确定',
            type:'warning',
            callback: action => {
              this.$message({
                type: 'info',
                message: `action: ${ action }`
              });
            }
          })
        }else{
          this.$confirm('是否通过审核?', '主管审核', {
            confirmButtonText: '通过',
            cancelButtonText: '驳回',
            type: 'warning'
          }).then(() => {
            rows.splice(index, 1);
            this.$message({
              type: 'success',
              message: '审核通过!'
            });
          }).catch(() => {
            this.$prompt('驳回原因', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
            }).then(({ value }) => {
              this.$message({
                type: 'success',
                message: '驳回成功: ' + value
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '取消'
              });
            });
          });
        }

      },
      onSubmit: function () { // 搜索
        console.log('submit!');
      },
      resetForm: function () { // 清空表单条件
        for (let key in this.formInline) {
          this.formInline[key] = ''
        }
      }
    },
    components: {
      PricesTable,
      TablePage,
      MorePrices
    }
  }
</script>

<style>

</style>
