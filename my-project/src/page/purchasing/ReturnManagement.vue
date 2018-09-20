<template>
  <div>
    <div class="item  bgc_white">
      <el-form :inline="true" :model="formInline" class="demo-form-inline text-left">
        <el-form-item label="SKU">
          <el-input v-model="formInline.sku" placeholder="请输入SKU"></el-input>
        </el-form-item>
        <el-form-item label="供应商">
          <el-input v-model="formInline.user" placeholder="请输入供应商"></el-input>
        </el-form-item>
        <el-form-item label="退货进度">
          <el-select v-model="formInline.region" placeholder="请输入退货进度">
            <el-option label="待仓库盘点" value="待仓库盘点"></el-option>
            <el-option label="待采购确认" value="待采购确认"></el-option>
            <el-option label="待仓库退货" value="待仓库退货"></el-option>
            <el-option label="主管审核" value="主管审核"></el-option>
            <el-option label="退货中" value="退货中"></el-option>
            <el-option label="财务审核" value="财务审核"></el-option>
            <el-option label="已退货" value="已退货"></el-option>
            <el-option label="不可退" value="不可退"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="采购员">
          <el-select v-model="formInline.region" placeholder="请选择采购员">
            <el-option label="是" value="是"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="创建方式">
          <el-select v-model="formInline.region" placeholder="请选择创建方式">
            <el-option label="请选择创建方式" value="-1"></el-option>
            <el-option label="禁运产品" value="禁运产品"></el-option>
            <el-option label="滞销产品" value="滞销产品"></el-option>
            <el-option label="手动创建" value="手动创建"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择日期">
          <el-date-picker
            v-model="formInline.createDate"
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
    <div class="item  bgc_white mt_20 tab_content">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="仓库处理" name="first">
          <div class="item mb_20">
            <el-button>新增</el-button>
            <el-button>下载</el-button>
          </div>
          <return-table :name="name" @examineTableData="examineTableData"></return-table>
        </el-tab-pane>
        <el-tab-pane label="采购处理" name="second">
          <div class="item mb_20">
            <el-button>新增</el-button>
            <el-button>下载</el-button>
          </div>
          <return-table :name="name" @examineTableData="examineTableData"></return-table>
        </el-tab-pane>
        <el-tab-pane label="财务审核" name="third">
          <div class="item mb_20">
            <el-button>新增</el-button>
            <el-button>下载</el-button>
          </div>
          <return-table :name="name" @examineTableData="examineTableData"></return-table>
        </el-tab-pane>
        <el-tab-pane label="主管审核" name="fourth">
          <div class="item mb_20">
            <el-button>新增</el-button>
            <el-button>下载</el-button>
          </div>
          <return-table :name="name" @examineTableData="examineTableData"></return-table>
        </el-tab-pane>
        <el-tab-pane label="全部数据" name="Sixth">
          <div class="item mb_20">
            <el-button>新增</el-button>
            <el-button>下载</el-button>
          </div>
          <return-table :name="name" @examineTableData="examineTableData"></return-table>
        </el-tab-pane>
      </el-tabs>
      <table-page></table-page>
    </div>
  </div>
</template>

<script>
  import LackAdd from '../../components/Dialog/LackAdd.vue'
  import ReturnTable from '../../components/Table/ReturnTable.vue'
  import TablePage from '../../components/TablePage.vue'
  export default{
    components: { ReturnTable ,TablePage ,LackAdd},
    data: function () {
      return {
        name: 'first',
        multipleSelection:[],
        activeName: 'first',
        formInline:{
          sku:'',
          user:'',
          region:'',
          createDate:''
        }
      }
    },
    methods:{
      examineTableData:function (data) { //table传过来的数据
        console.log(data)
        this.multipleSelection = data
      },
      examine: function(title){ //审核通用
        if(this.multipleSelection.length <=0){
          this.$alert('请勾选表格数据','提示')
        }else{
          this.$confirm( title, {
            confirmButtonText: '通过',
            cancelButtonText: '驳回',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '通过'+title+'!'
            });
          }).catch(() => { //驳回
            this.$prompt('驳回原因', {
              confirmButtonText: '确定',
              cancelButtonText: '取消'
            }).then(({ value }) => {
              this.$message({
                type: 'success',
                message: '已驳回'
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
      handleClick: function(tab, event) {
        this.name=tab.name
      },
      onSubmit: function () { // 搜索
        this.$message.success('submit!');
      },
      resetForm: function () { // 清空表单条件
        for (let key in this.formInline) {
          this.formInline[key] = ''
        }
      }
    }
  }
</script>

<style>
  .tab_content .el-tabs__header{
    box-shadow: none;
  }
</style>
