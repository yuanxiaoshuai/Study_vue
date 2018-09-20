<template>
  <table class="table_zt">
    <thead>
    <tr>
      <th width="45px"></th>
      <th>批次号 <br> (补发批次)</th>
      <th>SKU/ <br>商品名称</th>
      <th>状态/ <br>异常天数</th>
      <th>异常类型</th>
      <th>采购员/ <br>采购价</th>
      <th>采购量/ <br>异常量</th>
      <th>异常金额/ <br>退款金额</th>
      <th>处理方式/ <br>仓库处理方式</th>
      <th>仓库备注</th>
      <th>订单号/ <br>退款流水</th>
    </tr>
    </thead>
    <tbody style="margin-top: 10px">
    <tr>
      <td colspan="11"></td>
    </tr>
    <tr>
      <td style="width: 80px;text-align: center">
        <input type="checkbox" name="" v-model="checkAll" @change="checkAllChange">
      </td>
      <td colspan="2" class="text_left">
        供应商：<a>深圳市美佳乐有限公司</a>
      </td>
      <td colspan="2" class="text_left">
        1688起订量：
      </td>
      <td colspan="2" class="text_left">
        SKU数量：
      </td>
      <td colspan="4"></td>
    </tr>
    <tr v-for="(item, index) in userData">
      <td  style="width: 80px;text-align: center">
        <input type="checkbox" name="" v-model="checkModel" :value="item.val">
      </td>
      <td><a @dblclick="openNewPage">KOSDJH-SDJKF-DOJF <br>KOSDJH-SDJKF-DOJF</a></td>
      <td>
        KOSDJH-SDJKF-DOJF/ <br>收到了开飞机三打两建
      </td>
      <td>未处理/ <br>3</td>
      <td>坏货</td>
      <td>李胜男/ <br>5</td>
      <td>20/ <br>5</td>
      <td>20/ <br>5</td>
      <td>退款/ <br>退回供应商</td>
      <td>来错两个颜色 另外少两个</td>
      <td>564545456456456454/ <br>65465432121654423</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  import '../../../static/css/table.css'
  export default {
    data () {
      return {
        checkAll: false,
        checkModel: [],
        userData: [{'val': true}, {'val': false}]
      };
    },
    methods: {
      openNewPage: function () {
        let {href} = this.$router.resolve({path:'/AbnormalDetails'});
        window.open(href, '_blank');
      },
      checkAllChange: function (e) {
        if(e.target.checked){
          for(var i=0;i<this.userData.length;i++){
            if(!this.userData[i].checked){ // 将未勾选的checkbox选项push到绑定数组中
              this.checkModel.push(this.userData[i].val);
            }
          }
        }else{
          this.checkModel =[]
        }
      }
    },
    watch: {
      checkModel: {
        handler: function () {
          if (this.checkModel.length == this.userData.length) {
            this.checkAll = true
          } else {
            this.checkAll = false
          }
        },
        deep: true // 对象内部的属性监听，也叫深度监听
      }
    }
  }
</script>

<style>
</style>
