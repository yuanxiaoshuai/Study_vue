<template>
  <table class="table_zt">
    <thead>
    <tr>
      <th></th>
      <th>SKU</th>
      <th>图片</th>
      <th>名称</th>
      <th>采购链接</th>
      <th>库存/ <br>在途数量</th>
      <th>待发货/ <br>订单个数</th>
      <th>异常</th>
      <th>7/30/90</th>
      <th>日销量/ <br>警戒量</th>
      <th>采购天数/ <br> 警戒天数</th>
      <th>分拣方/<br>仓库分拣费</th>
      <th>SKU分拣费</th>
      <th>采购价</th>
      <th>采购量</th>
      <th>买家备注</th>
    </tr>
    </thead>
    <tbody style="margin-top: 10px">
    <tr>
      <td colspan="16"></td>
    </tr>
    <tr>
      <td style="width: 80px;text-align: center">
        <input type="checkbox" name="" v-model="checkAll" @change="checkAllChange">
      </td>
      <td colspan="3">
        供应商：<a @click="openNewPage">深圳市美佳乐有限公司</a>
      </td>
      <td colspan="2">
        1688起订量：
      </td>
      <td colspan="2">
        SKU数量：
      </td>
      <td colspan="8"></td>
    </tr>
    <tr v-for="(item, index) in userData">
      <td  style="width: 80px;text-align: center">
        <input type="checkbox" name="" v-model="checkModel" :value="item.val">
      </td>
      <td>KOSDJH-SDJKF-DOJF</td>
      <td>
        <img src="../../../static/image/img.png" alt="图片">
      </td>
      <td>三层加厚</td>
      <td><a target="_blank" href="https://www.baidu.com/">http://www.baidu.com</a></td>
      <td>0/ <br>5</td>
      <td>0/ <br>5</td>
      <td>是</td>
      <td>0/ <br>5/ <br>5</td>
      <td>5/ <br>5</td>
      <td>5/ <br>5</td>
      <td>仓库/ <br>5</td>
      <td><input type="text" class="table_input_sm"></td>
      <td><input type="text" class="table_input_sm"></td>
      <td><input type="text" class="table_input_sm"></td>
      <td><input type="text" class="table_input_sm"></td>
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
        let {href} = this.$router.resolve({path:'/SmartPurchasingPage'});
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
