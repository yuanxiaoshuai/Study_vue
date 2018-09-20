<template>
<div style="width: 1200px;margin: 20px auto">
  <!--仓库盘点-->
  <div class="item" style="background-color: white;padding-bottom: 20px">
    <title-bar :title="titleMsg.t1"></title-bar>
    <table class="table_normal">
      <caption class="text_left">供应商：心灵鸡汤供应商</caption>
      <thead>
      <tr>
        <th>SKU</th>
        <th>仓库</th>
        <th>仓位</th>
        <th>及时库存</th>
        <th>盘点库存</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>SH-JY-1418-GD</td>
        <td>上海新仓库</td>
        <td>1</td>
        <td>2AL1214</td>
        <td><el-input v-model="formData.input" placeholder="请输入内容"></el-input></td>
      </tr>
      </tbody>
    </table>
  </div>
  <!--采购确认-->
  <div class="item mt_20" style="background-color: white;padding-bottom: 20px">
    <title-bar :title="titleMsg.t2"></title-bar>
    <el-form :inline="true"  ref="formData"  :model="formData" class="demo-form-inline text-left">
      <el-form-item label="是否可退货">
        <el-select v-model="formData.region" placeholder="是否可退货">
          <el-option label="请选择" value="-1"></el-option>
          <el-option label="是" value="1"></el-option>
          <el-option label="否" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="退货方式" v-show="formData.region == 1">
        <el-select v-model="formData.returnStyle" placeholder="退货方式">
          <el-option label="请选择" value="-1"></el-option>
          <el-option label="全额退" value="1"></el-option>
          <el-option label="打折退" value="2"></el-option>
          <el-option label="换货退" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="退货地址"  v-show="formData.region == 1">
        <el-input v-model="formData.returnWhere"></el-input>
      </el-form-item>
    </el-form>
    <div v-show="formData.returnStyle != -1 && formData.region != -1">
      <table class="table_normal">
        <thead>
        <tr>
          <th>SKU</th>
          <th v-show="formData.returnStyle == 2||formData.returnStyle == 1">成本价</th>
          <th v-show="formData.returnStyle == 2||formData.returnStyle == 1">可退货数量</th>
          <th v-show="formData.returnStyle == 2||formData.returnStyle == 1">退货价格</th>
          <th v-show="formData.returnStyle == 2">折扣</th>
          <th v-show="formData.returnStyle == 3">仓库</th>
          <th v-show="formData.returnStyle == 3">仓位</th>
          <th v-show="formData.returnStyle == 3">即时库存</th>
          <th v-show="formData.returnStyle == 3">盘点库存</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>SH-JY-1418-GD</td>
          <td v-show="formData.returnStyle == 2||formData.returnStyle == 1">上海新仓库</td>
          <td v-show="formData.returnStyle == 2||formData.returnStyle == 1"><el-input v-model="formData.input" placeholder="请输入内容"></el-input></td>
          <td v-show="formData.returnStyle == 2||formData.returnStyle == 1"><el-input v-model="formData.input" placeholder="请输入内容"></el-input></td>
          <td v-show="formData.returnStyle == 2"><el-input v-model="formData.input" placeholder="请输入内容"></el-input></td>
          <td v-show="formData.returnStyle == 3">上海新仓库</td>
          <td v-show="formData.returnStyle == 3">2AL1214</td>
          <td v-show="formData.returnStyle == 3">1</td>
          <td v-show="formData.returnStyle == 3"><el-input v-model="formData.input" placeholder="请输入内容"></el-input></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!--主管审核开始-->
  <div class="item mt_20" style="background-color: white;padding-bottom: 20px">
    <title-bar :title="titleMsg.t3"></title-bar>
    <el-form :inline="true"  ref="formData"  :model="formData" class="demo-form-inline text-left">
      <el-form-item label="审核人">
        <el-input v-model="formData.returnWhere"></el-input>
      </el-form-item>
      <el-form-item label="审核时间">
        <el-input v-model="formData.returnWhere"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="formData.returnWhere"></el-input>
      </el-form-item>
    </el-form>
  </div><!-- 主管审核结束 -->
  <!--仓库退货-->
  <div class="item mt_20" style="background-color: white;padding-bottom: 20px">
    <title-bar :title="titleMsg.t4"></title-bar>
    <el-form :inline="true"  ref="formData"  :model="formData" class="demo-form-inline text-left">
      <el-form-item label="快递公司">
        <el-input v-model="formData.returnWhere"></el-input>
      </el-form-item>
      <el-form-item label="运单号">
        <el-input v-model="formData.returnWhere"></el-input>
      </el-form-item>
      <el-form-item label="退货人">
        <el-input v-model="formData.returnWhere"></el-input>
      </el-form-item>
      <el-form-item label="退货时间">
        <el-input v-model="formData.returnWhere"></el-input>
      </el-form-item>
      <table class="table_normal">
        <thead>
        <tr>
          <th>SKU</th>
          <th>实际打包数量</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>SH-JY-1418-GD</td>
          <td><el-input v-model="formData.returnWhere"></el-input></td>
        </tr>
        </tbody>
      </table>
    </el-form>
  </div>
  <!--退货中-->
  <div class="item mt_20" style="background-color: white;padding-bottom: 20px">
    <title-bar :title="titleMsg.t5"></title-bar>
    <el-form :inline="true"  ref="formData"  :model="formData" class="demo-form-inline text-left">
      <el-form-item label="交易流水号">
        <el-input v-model="formData.returnWhere"></el-input>
      </el-form-item>
      <el-form-item label="实际退款金额">
        <el-input v-model="formData.returnWhere"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="formData.returnWhere"></el-input>
      </el-form-item>
      <table class="table_normal">
        <thead>
        <tr>
          <th>SKU</th>
          <th>退货数量</th>
          <th>退货价格</th>
          <th>应退金额</th>
          <th>供应商实收量</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>SH-JY-1418-GD</td>
          <td>SH-JY-1418-GD</td>
          <td>SH-JY-1418-GD</td>
          <td>SH-JY-1418-GD</td>
          <td><el-input v-model="formData.returnWhere"></el-input></td>
        </tr>
        </tbody>
      </table>
    </el-form>
  </div>  <!--退货中结束-->
  <!--财务审核-->
  <div class="item mt_20" style="background-color: white;padding-bottom: 20px">
    <title-bar :title="titleMsg.t6"></title-bar>
    <el-form :inline="true"  ref="formData"  :model="formData" class="demo-form-inline text-left">
      <el-form-item label="审核人">
        <el-input v-model="formData.returnWhere"></el-input>
      </el-form-item>
      <el-form-item label="审核时间">
        <el-input v-model="formData.returnWhere"></el-input>
      </el-form-item>
      <el-form-item label="成本金额">
        <el-input v-model="formData.returnWhere"></el-input>
      </el-form-item>
      <el-form-item label="实际退款金额">
        <el-input v-model="formData.returnWhere"></el-input>
      </el-form-item>
      <el-form-item label="损益金额">
        <el-input v-model="formData.returnWhere"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="formData.returnWhere"></el-input>
      </el-form-item>
    </el-form>
  </div>  <!--财务审核-->
  <div class="text_center mt_20">
    <el-button type="primary">通过</el-button>
    <el-button>取消</el-button>
    <el-button>驳回</el-button>
  </div>
</div>

</template>

<script>
  import TitleBar from '../../components/TitleBar.vue'
export default{
    components:{
      TitleBar
    },
  data(){
    return {
      titleMsg:{
        t1:'仓库盘点',
        t2:'采购确认',
        t3:'主管审核',
        t4:'仓库退货',
        t5:'退货中',
        t6:'财务审核',
      },
      formData:{
        input:'',
        region:'',
        returnStyle:'-1',
        returnWhere:''
      }
    }
  }
}
</script>

<style>
</style>
