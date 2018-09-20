<template>
  <el-container>
    <!--左导航-->
    <el-aside style="width: auto;overflow: visible">
      <el-menu
        class="el-menu-vertical-demo"
        @select="clickMenu"
        :collapse="isCollapse">
        <img class="logo" src="../../static/image/logo-nav.png" alt="">
        <el-submenu index="采购管理">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">采购管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item name="/indexpage/SmartPurchasing" index="智能采购">智能采购</el-menu-item>
            <el-menu-item name="/indexpage/BatchManagement" index="批次管理">批次管理</el-menu-item>
            <el-menu-item name="/indexpage/Sign" index="签收管理">签收管理</el-menu-item>
            <el-menu-item name="/indexpage/Warehousing" index="入库管理">入库管理</el-menu-item>
            <el-submenu index="异常管理">
              <template slot="title">
                <span slot="title">异常管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item name="/indexpage/Abnormal" index="异常批次">异常批次</el-menu-item>
                <el-menu-item name="/indexpage/AbnormalBox" index="异常包裹">异常包裹</el-menu-item>
                <el-menu-item name="/indexpage/LossManagement" index="报损管理">报损管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item name="/indexpage/LackGoodsManagement" index="缺货管理">缺货管理</el-menu-item>
            <el-menu-item name="/indexpage/ReturnManagement" index="退货管理">退货管理</el-menu-item>
            <el-menu-item name="/indexpage/PricesManagement" index="调价管理">调价管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="库存监管">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">库存监管</span>
          </template>
          <el-menu-item-group>
            <el-menu-item name="/indexpage/Embargo" index="禁运产品">禁运产品</el-menu-item>
            <el-menu-item name="/indexpage/Unmarketable" index="滞销产品">滞销产品</el-menu-item>
            <el-menu-item name="/indexpage/Clearance" index="清仓产品">清仓产品</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <el-radio-group v-model="isCollapse" style="float: left;">
          <el-tooltip class="item" effect="dark" content="显示或隐藏左侧导航" placement="top-start">
            <i @click="isCollapse =!isCollapse" style="font-size: 24px;" class="el-icon-menu"></i>
          </el-tooltip>
        </el-radio-group>
        <ul class="title_set fr">
          <li>admin</li>
          <li><i class="el-icon-setting"></i>设置</li>
          <li><i class="el-icon-warning"></i>退出</li>
        </ul>
      </el-header>
      <el-main>
        <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab" @tab-click="tabClick">
          <el-tab-pane
            v-for="(item, index) in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
          >
          </el-tab-pane>
        </el-tabs>
        <div style="padding: 20px;background-color: #F2F2F2">
            <router-view ></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
  export default{
    name: "IndexPage",
    data () {
      return {
        path: '',
        keyArray: [], // 用来存储菜单的点击，判断是否重复
        isCollapse: false, // 导航收缩
        // 下面的是标签页
        editableTabsValue: '1',
        editableTabs: [],
        tabIndex: 1 // 标签页结束
      }
    },
    methods: {
      clickMenu(key , keyPath,c) {
        this.path = c.$el.getAttribute('name')
        let keyInArr = this.keyArray.indexOf(key);
        this.$router.push(this.path)
        if(keyInArr === -1) {
          this.keyArray.push(key)
          this.addTab(key,this.path)
          this.editableTabsValue = this.path
        } else {
          this.editableTabsValue = this.path
        }
      },
      //这是标签页的事件
      tabClick(that,index){
        this.$router.push(that.name)
      },
      addTab(name,path) {
        this.editableTabs.push({
          title: name,
          name: path,
          content: ''
        });
      },
      removeTab(targetName) {
        this.keyArray.splice(this.keyArray.indexOf(targetName), 1 );
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
</script>























<style>
  .el-submenu__title:hover{
    background: #5a98ff;
    color: white;
  }
  .el-menu-item:focus, .el-menu-item:hover {
    outline: 0;
    background-color: #5a98ff;
    color: white;
  }
  .el-aside,.el-menu{
    background-color: #031140;
  }
  .el-submenu__title,.el-menu-item,.el-submenu__title i,.el-menu-item i{
    color: #9aafd0;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-header{
    height: 50px!important;
    border-bottom: 1px solid #e9e9e9;
    background-color: #fff;
  }
  .title_set li{
    width: 80px;
    float: left;
    line-height: 50px;
    font-size: 18px;
    color: #aeaeae;
    cursor: pointer;
  }
  .el-main{
    padding: 0;
  }
  .el-tabs__header{
    margin: 0;
    box-shadow: 3px 3px 3px #999999;
  }
  .el-tabs__item.is-top.is-active.is-closable{
    background-color: #F2F2F2;
  }
  .logo{
    margin: 20px 0;
  }
  .el-radio-group{
    position: relative;
    z-index: 9;
  }
  .el-main>.el-tabs{
    background-color: #fff;
  }
</style>
