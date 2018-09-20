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
      <el-form-item label="运单号">
        <el-input v-model="formInline.user" placeholder="请输入运单号"></el-input>
      </el-form-item>
      <el-form-item label="订单号">
        <el-input v-model="formInline.user" placeholder="请输入订单号"></el-input>
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
      <el-form-item label="物流信息">
        <el-select v-model="formInline.region" placeholder="请选择物流信息">
          <el-option label="有" value="有"></el-option>
          <el-option label="无" value="无"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否API">
        <el-select v-model="formInline.region" placeholder="请选择是否API">
          <el-option label="是" value="是"></el-option>
          <el-option label="否" value="否"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="付款链接">
        <el-select v-model="formInline.region" placeholder="请选择付款链接">
          <el-option label="是" value="是"></el-option>
          <el-option label="否" value="否"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="是否匹配">
        <el-select v-model="formInline.region" placeholder="是否API">
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
      <div>
        <el-form-item label=" ">
          <el-checkbox label="采购天数>5,未匹配"></el-checkbox>
          <el-checkbox label="采购天数>2,无物流信息"></el-checkbox>
          <el-checkbox label="扫描天数>2,未入库"></el-checkbox>
          <el-checkbox label="采购天数>1,未付款"></el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">搜索</el-button>
          <el-button @click="resetForm">清空条件</el-button>
        </el-form-item>
      </div>
    </el-form>

  </div>
  <div class="item  bgc_white mt_20">
    <div class="mb_20" style="font-size: 14px">
      <el-button @click="$store.commit('changeShow',{title:'新增'})">新增</el-button>
      <el-button @click="$store.commit('changeBatchUploadShow',{title:'批量上传'})">批量上传</el-button>
      <el-button @click="purchaseTrue">采购确定</el-button>
      <el-button @click="$store.commit('changeExamineShow',{title:'财务审核'})">财务审核</el-button>
      <el-button>账期付款</el-button>
      <el-button @click="$store.commit('changeExamineShow',{title:'主管审核'})">主管审核</el-button>
      <el-button>打印</el-button>
      <el-button @click="openSeeLog">查看日志</el-button>
      <el-button @click="turnHandwork">转手工单</el-button>
      <el-button @click="$store.commit('changeCreatedAbnShow',{title:'生成异常'})">生成异常</el-button>
      <el-dropdown @command="downloadClick">
        <el-button>
          下载<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="按支付宝下载">按支付宝下载</el-dropdown-item>
          <el-dropdown-item command="按付款方式下载">按付款方式下载</el-dropdown-item>
          <el-dropdown-item command="按SKU下载">按SKU下载</el-dropdown-item>
          <el-dropdown-item command="采购下载">采购下载</el-dropdown-item>
          <el-dropdown-item command="导出采购单">导出采购单</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-button>删除</el-button>
    </div>
    <table-smart @callFather="callFather"></table-smart>
    <table-page></table-page>
    <drag-add></drag-add>
    <upload-file></upload-file>
    <examine-table></examine-table>
    <created-abnormal></created-abnormal>
  </div>
</div>
</template>

<script>
  import TableSmart from '../../components/Table/TableSmart.vue' //表格
  import DragAdd from '../../components/Dialog/DragAdd.vue'       //新增
  import UploadFile from '../../components/Dialog/UploadFile.vue'  //批量上传
  import ExamineTable from '../../components/Dialog/ExamineTable.vue' //财务审核
  import CreatedAbnormal from '../../components/Dialog/CreatedAbnormal.vue' //生成异常
  import TablePage from '../../components/TablePage.vue'  //分页
  export default {
    data () {
      return {
        multipleSelection:'',
        formInline: {
          user: '',
          region: '',
          createDate: '',
          pay: ''
        }
      }
    },
    methods: {
      callFather(data){
        this.multipleSelection = data
        console.log(data)
      },
      purchaseTrue: function () { // 采购确定
        this.$message.success({
          showClose: true,
          message: '采购确定成功'
        });
      },
      onSubmit: function () { // 搜索
        console.log('submit!');
      },
      resetForm: function () { // 清空表单条件
        for (let key in this.formInline) {
          this.formInline[key] = ''
        }
      },
      turnHandwork: function () { // 转手工单
        this.$message.success({
          showClose: true,
          message: '转手工单成功'
        });
      },
      openSeeLog: function () { // 查看日志
        this.$router.push('/indexpage/SeeLog')
      },
      downloadClick: function (a) { // 下载
        console.log(a)
      }
    },
    components: {
      TableSmart,
      DragAdd,
      UploadFile,
      ExamineTable,
      CreatedAbnormal,
      TablePage
    }
  }
</script>

<style>
</style>
