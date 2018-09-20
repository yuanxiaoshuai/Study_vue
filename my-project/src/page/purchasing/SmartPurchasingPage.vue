<template>
  <div class="tableBgc" style="margin: 20px;">
    <Table></Table>
  </div>
</template>

<script>
  import Table from '../../components/Table/Table.vue'
  export default{
    data () {
      return {
        msg: ''
      }
    },
    components: {
      Table
    }
  }
</script>

<style>
  .tableBgc{
    background-color: #fff;
  }
</style>
