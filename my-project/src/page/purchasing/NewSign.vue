<template>
  <div>
    <div class="item  bgc_white" style="padding: 20px">
      <span>运单号:</span>
      <span class="">
        <el-input @keydown.enter.native="myAjaxMsg" style="width: auto" v-model="formData.user" placeholder="请输入运单号"></el-input>
      </span>
      <span class="text_red">
         请输入运单号，支持扫描枪与回车键操作。
      </span>
    </div>
    <div class="item  bgc_white" style="padding: 20px">
      <table class="table_zt text_center">
        <thead>
        <tr>
          <th>SKU</th>
          <th>中文名称</th>
          <th>图片</th>
          <th>采购量</th>
          <th>SKU数量</th>
          <th>二维码数量</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td colspan="7" class="text_left">
            <span style="margin-left: 50px">批次号：123132123</span>
            <span style="margin-left: 30px">运单号：454534535</span>
          </td>
        </tr>
        <tr>
          <td>DFGFDG-SD-F-SDF-DF</td>
          <td>风格的风格</td>
          <td><img class="table_img" src="../../../static/image/img.png" alt=""></td>
          <td>20</td>
          <td>20</td>
          <td>20</td>
          <td>
            <el-button size="mini">没来</el-button>
            <el-button size="mini">无图</el-button>
            <el-button size="mini">签收</el-button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default{
    data: function () {
      return {
        formData: {
          user: ''
        }
      }
    },
    methods: {
      myAjaxMsg: function () {
        this.$message.success('正在请求数据')
      }
    }
  }
</script>

<style>

</style>
