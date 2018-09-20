<template>
  <div :style="styleDome">
    <warehouse-add></warehouse-add>
    <procurement></procurement>
    <stay-return></stay-return>
    <stay-check></stay-check>
    <stay-add-num></stay-add-num>
    <div class="text_center  mt_20">
      <el-button type="primary">确定</el-button>
      <el-button>取消</el-button>
    </div>
    <log></log>
  </div>
</template>

<script>
  import WarehouseAdd from '../../components/AbnBoxAddItem/WarehouseAdd.vue'
  import Procurement from '../../components/AbnBoxAddItem/Procurement.vue'
  import StayReturn from '../../components/AbnBoxAddItem/StayReturn.vue'
  import StayCheck from '../../components/AbnBoxAddItem/StayCheck.vue'
  import StayAddNum from '../../components/AbnBoxAddItem/StayAddNum.vue'
  import Log from '../../components/AbnBoxAddItem/Log.vue'
  export default{
    components:{
      WarehouseAdd,Procurement,StayReturn,StayCheck,StayAddNum,Log
    },
    data: function () {
      return{
          styleDome:{
            width: '1200px',
            margin:'0 auto',
            background:'#fff'
          }
      }
    }
  }
</script>

<style>
</style>
