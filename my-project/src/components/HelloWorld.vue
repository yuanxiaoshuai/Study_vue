<template>
  <div>
    <hr>
    <h2> 这是从store拿出的数据：{{ $store.state.count }} </h2>
    <el-button @click="routeToDome" type="primary">跳转到dome</el-button>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        count: this.$store.state.count
      }
    },
    methods: {
      routeToDome: function () {
        this.$router.push('/dome/:1')
      }
    }
  }
</script>
