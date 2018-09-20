<template>
  <table class="table_zt">
    <thead>
    <tr>
      <th style="width: 40px;"></th>
      <th>SKU</th>
      <th>商品名称</th>
      <th>状态</th>
      <th>采购链接</th>
      <th>采购员</th>
      <th>即时库存</th>
      <th>盘点库存</th>
      <th>在途</th>
      <th>待发货</th>
      <th>创建方式</th>
      <th>创建时间</th>
      <th>创建人</th>
      <th>操作</th>
    </tr>
    </thead>
    <tbody style="margin-top: 10px">
    <tr>
      <td colspan="14"></td>
    </tr>
    <tr>
      <td style="width: 80px;text-align: center">
        <input type="checkbox" name="" v-model="checkAll" @change="checkAllChange">
      </td>
      <td colspan="2" class="text_left">
        供应商：深圳市美佳乐有限公司
      </td>
      <td colspan="2"  class="text_left">
        退货进度：<a @click="openNewPage">未处理</a>
      </td>
      <td colspan="9"></td>
    </tr>
    <tr v-for="(item, index) in userData">
      <td  style="width: 80px;text-align: center">
        <input type="checkbox" name="" v-model="checkModel" :value="item.val">
      </td>
      <td>KOSDJH-SDJKF-DOJF</td>
      <td>sdfds</td>
      <td>三层加厚</td>
      <td><a target="_blank" href="https://www.baidu.com/">http://www.baidu.com</a></td>
      <td>sdfs</td>
      <td>35</td>
      <td>是</td>
      <td>35</td>
      <td>445</td>
      <td>4</td>
      <td>4</td>
      <td>6</td>
      <td><el-button type="text" @click="deleteTableTe">删除</el-button></td>
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
      deleteTableTe: function () {

      },
      openNewPage: function () {
        let {href} = this.$router.resolve({path:'/ReturnDetails'});
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

        this.$emit("examineTableData",this.checkModel)
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
        deep: true// 对象内部的属性监听，也叫深度监听
      }
    }
  }
</script>

<style>
</style>
