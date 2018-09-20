<template>
  <div>
    <table-content  style="margin-top: 20px"></table-content>
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

