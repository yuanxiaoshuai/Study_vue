<template>
<div>
  <div class="item  bgc_white">
    <el-form :inline="true" :model="formInline" class="demo-form-inline text-left">
      <el-form-item label="批次号">
        <el-input v-model="formInline.sku" placeholder="sku"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="formInline.region" placeholder="请选择状态">
          <el-option label="是" value="是"></el-option>
          <el-option label="否" value="否"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="批次运单号">
        <el-input v-model="formInline.user" placeholder="请输入批次运单号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
        <el-button @click="resetForm">清空条件</el-button>
      </el-form-item>
    </el-form>
  </div>

  <div class="item bgc_white mt_20 text_left">
    <div class="mb_20" style="font-size: 14px">
      <el-button>打印入库单</el-button>
      <el-button>扫描运单号</el-button>
      <el-button>智能打印入库单</el-button>
      <el-button @click="openNewPage('NewSign')">新签收</el-button>
    </div>

    <el-table
      :data="tableData"
      style="width: 100%"
      border>
      <el-table-column
        label="批次">
        <template slot-scope="scope">
          <a @dblclick="openNewPage('SignDetails')">{{scope.row.date}}</a>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份">
      </el-table-column>
      <el-table-column
        prop="city"
        label="市区">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            size="mini"
            type="text">
            全部签收
          </el-button>|
          <el-button size="mini" type="text">8×3</el-button>|
          <el-button size="mini" type="text"
          @click.native.prevent="signOne(scope.$index, tableData)"
          >单号</el-button>
        </template>
      </el-table-column>
    </el-table>
    <table-page></table-page>
  </div>
  <sign-tracking></sign-tracking>
</div>

</template>

<script>
  import SignTracking from '../../components/Dialog/SignTracking.vue'
  import TablePage from '../../components/TablePage.vue'
  export default {
    data: function () {
      return {
        ifShow: false,
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }],
        formInline: {
          sku: '',
          user: '',
          region: ''
        }
      }
    },
    methods: {
      callFather: function () {
        this.ifShow= false
      },
      openNewPage: function (page) {
        this.$router.push('/indexpage/' + page)
      },
      signOne: function (index, rows) {
        this.$store.commit("changeSignOrderShow",{title:"单号"})
      },
      deleteRow: function (index, rows) {
        this.$confirm('是否全部签收这个批次?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          rows.splice(index, 1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
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
      SignTracking,
      TablePage
    }
  }
</script>

<style>

</style>
