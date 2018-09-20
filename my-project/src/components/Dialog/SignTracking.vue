  <template>
    <el-dialog
      title="运单号签收"
      :visible.sync="signOrderShow"
      width="400px"
      border
      class="demo-form-inline text-left"
      :before-close="closeDialog">
      <div class="mb_20">
        <span>批次号：{{num}}</span>
        <span>
        <el-button class="fr" @click="addTable">添加运单号</el-button>
      </span>
      </div>
      <el-table :data="form" border class="table_sm">
        <el-table-column property="date" label="运单号">
          <template slot-scope="scope">
            <el-input v-model="scope.row.sku" placeholder="请输入运单号"></el-input>
          </template>
        </el-table-column>
        <el-table-column property="name" label="备注">
          <template slot-scope="scope">
            <el-input v-model="scope.row.bz" placeholder="请输入备注"></el-input>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeDrag">取消</el-button>
        <el-button type="primary"  @click="submitDrag">确定</el-button>
      </div>
    </el-dialog>
  </template>

<script>
  import {mapState} from 'vuex'
  export default{
    props: ['ifShow'],
    data: function () {
      return {
        num: '121321313',
        form: [
          {
            sku: '2131',
            bz: '3232'
          }
        ]
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
        this.$store.commit("changeSignOrderShow",{title:"单号"})
      },
      addTable: function () {
        this.form.push({
          sku: '',
          bz: ''
        })
      }
    },
    computed:{
      ...mapState({
        signOrderShow:state=>state.dialog.signOrderShow
      })
    }
  }
</script>

<style>
  .table_input_sm >.el-input__inner{
    width: 150px;
  }
  .table_sm td .cell{
    height: 33px;
  }
</style>
