<template>
  <div>
    <div class="item  bgc_white">
      <title-bar :title="titleMsg1"></title-bar>
      <table class="table_normal">
        <thead>
        <tr>
          <th>供应商</th>
          <th>商品编号</th>
          <th>商品名称</th>
          <th>采购量</th>
          <th>采购价</th>
          <th>实际签收数量</th>
          <th>退货次品</th>
          <th>实际入库量</th>
          <th>质检人</th>
          <th>验货标准</th>
          <th>质检备注</th>
          <th>上传图片</th>
        </tr>
        </thead>
        <tbody class="text_center">
        <tr>
          <td>asdasd</td>
          <td>aasdada</td>
          <td>asdads</td>
          <td>dfgdg</td>
          <td>asda</td>
          <td>asfdsf</td>
          <td>fdgdfg</td>
          <td><input type="text" class="table_input_sm"></td>
          <td>
            <select name="" class="table_select" >
              <option value="">1</option>
              <option value="1">1</option>
            </select>
          </td>
          <td>
            <select name="" class="table_select">
              <option value="">1</option>
              <option value="1">1</option>
            </select>
          </td>
          <td>
            <input type="text" class="table_input_sm">
          </td>
          <td>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :before-upload="handBeforeUpload"
              :file-list="fileList">
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>

          </td>
        </tr>
        </tbody>
      </table>
      <table-page></table-page>
    </div>
  </div>
</template>

<script>
  import TitleBar from '../../components/TitleBar.vue'
  import TablePage from '../../components/TablePage.vue'
  export default{
    data: function () {
      return {
        titleMsg1:'批次号：12313213',
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      }
    },
    methods:{
      handBeforeUpload: function (file) {
        this.fileList.push({
          name:file.name,
          url:file.name
        })
      },
      handleRemove: function (file, fileList) {
        console.log(file, fileList);
      },
      handlePreview: function(file) {
        console.log(file);
      },
      handleExceed: function(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove: function(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    },
    components:{
      TitleBar,
      TablePage
    }
  }
</script>

<style>
</style>
