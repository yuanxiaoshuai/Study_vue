<template>
  <div>
    <div class="item  bgc_white">
      <el-form :inline="true" :model="formInline" class="demo-form-inline text-left">
        <el-form-item label="批次号">
          <el-input v-model="formInline.sku" placeholder="请输入批次号"></el-input>
        </el-form-item>
        <el-form-item label="供应商">
          <el-input v-model="formInline.user" placeholder="请输入供应商"></el-input>
        </el-form-item>
        <el-form-item label="SKU">
          <el-input v-model="formInline.user" placeholder="请输入SKU"></el-input>
        </el-form-item>
        <el-form-item label="商品名称">
          <el-input v-model="formInline.user" placeholder="请输入商品名称"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="formInline.region" placeholder="请选择状态">
            <el-option label="是" value="是"></el-option>
            <el-option label="否" value="否"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="采购员">
          <el-select v-model="formInline.region" placeholder="请选择采购员">
            <el-option label="是" value="是"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="付款方式">
          <el-select v-model="formInline.region" placeholder="请选择付款方式">
            <el-option label="阿里巴巴" value="阿里巴巴"></el-option>
            <el-option label="周结" value="周结"></el-option>
            <el-option label="双周结" value="双周结"></el-option>
            <el-option label="月结" value="月结"></el-option>
            <el-option label="淘宝" value="淘宝"></el-option>
            <el-option label="转账" value="转账"></el-option>
            <el-option label="其他" value="其他"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="异常类型">
          <el-select v-model="formInline.region" placeholder="请选择异常类型">
            <el-option label="有" value="有"></el-option>
            <el-option label="无" value="无"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="处理方式">
          <el-select v-model="formInline.region" placeholder="请选择处理方式">
            <el-option label="是" value="是"></el-option>
            <el-option label="否" value="否"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="仓库处理方式">
          <el-select v-model="formInline.region" placeholder="请选择仓库处理方式">
            <el-option label="是" value="是"></el-option>
            <el-option label="否" value="否"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择日期">
          <el-select v-model="formInline.region" placeholder="请选择日期">
            <el-option label="创建日期" value="创建日期"></el-option>
          </el-select>
          <el-date-picker
            v-model="formInline.createDate"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">搜索</el-button>
          <el-button @click="resetForm">清空条件</el-button>
        </el-form-item>
      </el-form>

    </div>
    <div class="item  bgc_white mt_20">
      <div class="mb_20" style="font-size: 14px">
        <el-button @click="abnormalReissue">异常补发</el-button>
        <el-button @click="financialAudit">财务审核</el-button>
        <el-button>财务导出</el-button>
        <el-button @click="supervisorReview">主管审核</el-button>
        <el-button @click="accountOffset">账期抵扣</el-button>
        <el-button>异常导出</el-button>
        <el-button @click="seeLog">查看日志</el-button>
        <el-button @click="warehouseHandle">仓库处理</el-button>
      </div>
      <abnormal-table></abnormal-table>
      <TablePage></TablePage>
    </div>
    <!--异常补发弹窗-->
    <abnormal-reissue></abnormal-reissue>
    <!--财务审核弹窗-->
    <financial-audit></financial-audit>
  </div>
</template>

<script>
  import AbnormalTable from '../../components/Table/AbnormalTable.vue'  //表格
  import AbnormalReissue from '../../components/Dialog/AbnormalReissue.vue' //异常补发弹窗
  import FinancialAudit from '../../components/Dialog/AbnormalFinancialAudit.vue' //财务审核弹窗
  import TablePage from '../../components/TablePage.vue'
  export default {
    data () {
      return {
        formInline: {
          user: '',
          region: '',
          createDate: '',
          pay: ''
        }
      }
    },
    methods: {
      warehouseHandle: function () { // 仓库处理
        this.$prompt('退货运单号', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '提交成功'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消提交'
          });
        });
      },
      seeLog: function () { // 查看日志
        this.$router.push('/indexpage/AbnormalSeeLog')
      },
      accountOffset: function () { // 账期抵扣
        this.$message.error('请勾选表格数据')
        this.$confirm('<table class="table_normal">' +
          '<tr><td>异常总金额</td></tr>' +
          '<tr><td>12313213</td></tr>' +
          '</table>', '提示', {
          dangerouslyUseHTMLString: true,
          confirmButtonText: '生成批次',
          cancelButtonText: '取消',
        }).then(() => {
          this.$message({
            type: 'success',
            message: '生成批次成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消生成批次'
          });
        });

      },
      supervisorReview: function () { //主管审核
        this.$confirm('是否通过审核?', '主管审核', {
          confirmButtonText: '通过',
          cancelButtonText: '驳回',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '通过主管审核!'
          });
        }).catch(() => {
          //驳回
          this.$prompt('驳回原因', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
          }).then(({ value }) => {
            this.$message({
              type: 'success',
              message: '驳回成功'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '取消输入'
            });
          });
        });
      },
      financialAudit: function () { // 财务审核
        this.$store.commit('changeFinancialAudit',{title:'财务审核'})
      },
      abnormalReissue: function () { //异常补发
        this.$store.commit('changeReissue',{title:'异常补发'})
      },
      initDragStyle: function () {
        this.tableShow = false
        this.ifShow = false
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
      AbnormalTable,
      AbnormalReissue,
      FinancialAudit,
      TablePage
    }
  }
</script>

<style>
</style>
