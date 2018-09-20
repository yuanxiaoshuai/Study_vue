<template>
  <div id="app" class=" text-center">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',

}
</script>

<style>
  #app {
    display: flex;
    flex-direction: column;
    display: -webkit-flex;
    flex: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    color: #333333;
    /*background-color: rgb(242, 242, 242);*/
  }

</style>
