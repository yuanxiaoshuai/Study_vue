<template>
  <div>
    <div class="item  bgc_white  ">
      <el-form :inline="true" :model="formInline" class="demo-form-inline text-left">
        <el-form-item label="批次号">
          <el-input v-model="formInline.sku" placeholder="请输入批次号"></el-input>
        </el-form-item>
        <el-form-item label="SKU">
          <el-input v-model="formInline.sku" placeholder="请输入SKU"></el-input>
        </el-form-item>
        <el-form-item label="操作人">
          <el-input v-model="formInline.sku" placeholder="请输入操作人"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">搜索</el-button>
          <el-button @click="resetForm">清空条件</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="item  bgc_white mt_20">
      <el-table
        :data="tableData"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="date"
          label="序号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="批次"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="SKU"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="操作人"
          width="180">
        </el-table-column>
        <el-table-column
          prop="date"
          label="操作时间"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="内容">
        </el-table-column>
      </el-table>
      <page></page>
    </div>
  </div>
</template>

<script>
  import page from '../../components/TablePage.vue'
  export default {
    data () {
      return {
        formInline: {
          sku:''
        },
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      onSubmit: function () { // 搜索
        this.$message.success({
          showClose: true,
          message: '批次信息保存成功'
        })
      },
      resetForm: function () { // 清空表单条件
        for (let key in this.formInline) {
          this.formInline[key] = ''
        }
      }
    },
    components: {
      page
    }
  }
</script>

<style>
</style>
