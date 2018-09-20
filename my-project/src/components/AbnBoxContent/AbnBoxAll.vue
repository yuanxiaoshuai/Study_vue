<template>
  <div>
    <div class="mb_20 mt_20" style="font-size: 14px">
      <el-button>下载</el-button>
    </div>
    <table-content></table-content>
  </div>
</template>

<script>
  import TablePage from '../TablePage.vue'
  import TableContent from '../Table/AbnTableContent.vue'
  export default {
    data: function () {
      return {

      }
    },
    components: {
      TableContent,
      TablePage
    }
  }
</script>

<style>
</style>
