<template>
<div>
  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    border
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="SKU">
      <template slot-scope="scope">
        <a @dblclick="openNewPage">{{ scope.row.date }}</a>
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="状态">
    </el-table-column>
    <el-table-column
      prop="name"
      label="提交人">
    </el-table-column>
    <el-table-column
      prop="name"
      label="提交时间">
    </el-table-column>
    <el-table-column
      prop="name"
      label="处理天数">
    </el-table-column>
    <el-table-column
      prop="name"
      label="采购员">
    </el-table-column>
    <el-table-column
      prop="name"
      label="供应链">
    </el-table-column>
    <el-table-column
      prop="name"
      label="缺货数量">
    </el-table-column>
    <el-table-column
      prop="name"
      label="主售平台">
    </el-table-column>
    <el-table-column
      prop="date"
      label="处理结果">
    </el-table-column>
    <el-table-column
      prop="date"
      label="处理时间">
    </el-table-column>
    <el-table-column
      prop="date"
      label="销售确认人">
    </el-table-column>
    <el-table-column
      prop="date"
      label="销售确认时间">
    </el-table-column>
    <el-table-column
      prop="name"
      width="180"
      label="操作">
      <template slot-scope="scope" >
        <el-button type="text" size="mini" @click.native.prevent="editTable(scope.$index, scope.row)">编辑</el-button>
        <el-button type="text" size="mini" @click.native.prevent="deleteTable(scope.$index,tableData)">删除</el-button>
        <el-button type="text" size="mini" @click.native.prevent="saleSure(scope.$index, scope.row)">销售确认</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!--编辑弹窗-->
  <el-dialog title="编辑" :visible.sync="dialogFormVisible" width="350px">
    <el-form :model="form" :inline="true"  >
      <el-form-item label="SKU" >
        <el-input disabled v-model="form.sku" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="找货结果">
        <el-select v-model="form.region" placeholder="请选择">
          <el-option label="请选择" value="请选择"></el-option>
          <el-option label="现货" value="现货"></el-option>
          <el-option label="定做" value="定做"></el-option>
          <el-option label="无货" value="无货"></el-option>
        </el-select>
      </el-form-item>
      <div v-show="form.region=='现货'||form.region== '定做'">
        <el-form-item label="供应商ID">
          <el-input v-model="form.sku" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="链接">
          <el-input v-model="form.sku" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="采购价">
          <el-input v-model="form.sku" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item v-show="form.region== '定做'" label="交期">
          <el-input v-model="form.sku" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="form.sku" auto-complete="off"></el-input>
        </el-form-item>
      </div>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
  export default {
    props:['name'],
    data() {
      return {
        dialogFormVisible: false,
        multipleSelection: [],
        form:{
          region: '',
          sku:'',
        },
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
      }
    },
    methods: {
      openNewPage: function (){ //双击表格sku跳转
        this.$router.push("/indexpage/LackGoodsDetails")
      },
      editTable: function (index,row) { //编辑
        this.dialogFormVisible = true
      },
      deleteTable: function (index,row) { //删除

        this.$confirm('确认删除这条数据?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          row.splice(index, 1);
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
      saleSure:function (index,row) { //销售确认
        this.$confirm("是否确认","提示",{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '确认成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        })
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        this.$emit('examineTableData',val)
      }
    },
    watch:{
      name:function (newName,oldName) {
        if(newName != oldName){
          this.multipleSelection = []
          this.$refs.multipleTable.clearSelection();
        }
      }
    }
  }
</script>
