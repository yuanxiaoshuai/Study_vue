<template>
  <div class="title_bar_box">
    <div><i></i>{{ title }}</div>
  </div>
</template>

<script>
  export default{
    props: ['title'],
    data: function () {
      return {

      }
    }
  }
</script>

<style>
  .title_bar_box{
    height: 30px;
    /*padding:0 20px;*/
    margin-bottom: 20px;
  }
  .title_bar_box>div{
    border-bottom: 1px solid #d9d9d9;
    line-height: 30px;
    font-weight: 700;
    padding-left: 10px;
    position: relative;
  }
  .title_bar_box i{
    display: inline-block;
    height: 12px;
    width: 3px;
    background-color: #5a98ff;
    position: absolute;
    top: 10px;
    left: 0;
  }
</style>
