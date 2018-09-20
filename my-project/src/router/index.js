import Vue from 'vue'
import Router from 'vue-router'
import Login from '../page/Login.vue' //-----------------------------------登录
import IndexPage from '../page/warp.vue'//----------------------------首页

//----------------智能采购
import SmartPurchasing from '../page/purchasing/SmartPurchasing.vue'  //--------------智能采购
import SmartPurchasingPage from '../page/purchasing/SmartPurchasingPage.vue' //-------智能详情
import BatchManagement from '../page/purchasing/BatchManagement.vue'//--------------- 批次管理
import SeeLog from '../page/purchasing/SeeLog.vue' //---------------------------------批次管理 -- 查看日志
import BatchDetails from '../page/purchasing/BatchDetails.vue' //---------------------批次详情
import Sign from '../page/purchasing/Sign.vue' //-------------------------------------签收管理
import SignDetails from '../page/purchasing/SignDetails.vue'//------------------------签收管理 -- 签收详情
import NewSign from '../page/purchasing/NewSign.vue'//--------------------------------签收管理 -- 新签收
import Warehousing from '../page/purchasing/Warehousing.vue' //-----------------------入库管理
import WareDetails from '../page/purchasing/WareDetails.vue'//------------------------入库管理 -- 详情
import MoreWareHouse from '../page/purchasing/MoreWareHouse.vue'  //------------------入库管理 -- 批量入库
import Abnormal from '../page/purchasing/Abnormal.vue' // ----------------------------异常批次
import AbnormalSeeLog from '../page/purchasing/AbnormalSeeLog.vue' //-----------------异常批次 -- 查看日志
import AbnormalDetails from '../page/purchasing/AbnormalDetails.vue'//----------------异常批次详情
import AbnormalBox from '../page/purchasing/AbnormalBox.vue' //-----------------------异常包裹
import AbnBoxAdd from '../page/purchasing/AbnBoxAdd.vue' // --------------------------异常包裹 -- 新增
import LossManagement from '../page/purchasing/LossManagement.vue' //-----------------报损管理
import LackGoodsManagement from '../page/purchasing/LackGoodsManagement.vue' //-------缺货管理
import LackGoodsDetails from '../page/purchasing/LackGoodsDetails.vue'  //------------缺货管理 -- 缺货详情
import PricesManagement from '../page/purchasing/PricesManagement.vue' //-------------调价管理
import DownPrices from '../page/purchasing/DownPrices.vue' //-------------------------调价管理 -- 降价统计
import ReturnManagement from '../page/purchasing/ReturnManagement.vue' // ------------退货管理
import ReturnDetails from '../page/purchasing/ReturnDetails.vue' //-------------------退货详情
//-------------------  库存监管
import Embargo from '../page/InventoryRegulation/Embargo.vue' // ---------------------禁运产品
import Unmarketable from '../page/InventoryRegulation/Unmarketable.vue'//-------------滞销产品
import Clearance from '../page/InventoryRegulation/Clearance.vue'//-------------------清仓产品
import ClearanceSetting from '../page/InventoryRegulation/ClearanceSetting.vue'//-----清仓配置
import ClearanceAdd from '../page/InventoryRegulation/ClearanceAdd.vue'//-------------清仓-新增
import ClearanceSeeLog from '../page/InventoryRegulation/ClearanceSeeLog.vue' //--------------------查看日志
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/AbnormalDetails',
      name: 'AbnormalDetails',
      component: AbnormalDetails
    },
    {
      path: '/SmartPurchasingPage',
      name: 'SmartPurchasingPage',
      component: SmartPurchasingPage
    },
    {
      path: '/ReturnDetails',
      name: 'ReturnDetails',
      component: ReturnDetails
    },
    {
      path: '/ClearanceAdd',
      name: 'ClearanceAdd',
      component: ClearanceAdd
    },
    {
      path: '/indexpage',
      name: 'IndexPage',
      component: IndexPage,
      children: [
        {
          path: '/indexpage/SmartPurchasing',
          name: 'SmartPurchasing',
          component: SmartPurchasing
        },
        {
          path: '/indexpage/BatchManagement',
          name: 'BatchManagement',
          component: BatchManagement
        },
        {
          path: '/indexpage/SeeLog',
          name: 'SeeLog',
          component: SeeLog
        },
        {
          path: '/indexpage/BatchDetails',
          name: 'BatchDetails',
          component: BatchDetails
        },
        {
          path: '/indexpage/Sign',
          name: 'Sign',
          component: Sign
        },
        {
          path: '/indexpage/SignDetails',
          name: 'SignDetails',
          component: SignDetails
        },
        {
          path: '/indexpage/NewSign',
          name: 'NewSign',
          component: NewSign
        },
        {
          path: '/indexpage/Warehousing',
          name: 'Warehousing',
          component: Warehousing
        },
        {
          path: '/indexpage/WareDetails',
          name: 'WareDetails',
          component: WareDetails
        },
        {
          path: '/indexpage/MoreWareHouse',
          name: 'MoreWareHouse',
          component: MoreWareHouse
        },
        {
          path: '/indexpage/Abnormal',
          name: 'Abnormal',
          component: Abnormal
        },
        {
          path: '/indexpage/AbnormalSeeLog',
          name: 'AbnormalSeeLog',
          component: AbnormalSeeLog
        },
        {
          path: '/indexpage/AbnormalBox',
          name: 'AbnormalBox',
          component: AbnormalBox
        },
        {
          path: '/indexpage/AbnBoxAdd',
          name: 'AbnBoxAdd',
          component:AbnBoxAdd
        },
        {
          path: '/indexpage/LossManagement',
          name: 'LossManagement',
          component:LossManagement
        },
        {
          path: '/indexpage/LackGoodsManagement',
          name: 'LackGoodsManagement',
          component: LackGoodsManagement
        },
        {
          path: '/indexpage/LackGoodsDetails',
          name: 'LackGoodsDetails',
          component: LackGoodsDetails
        },
        {
          path: '/indexpage/PricesManagement',
          name: 'PricesManagement',
          component: PricesManagement
        },
        {
          path: '/indexpage/DownPrices',
          name: 'DownPrices',
          component: DownPrices
        },
        {
          path: '/indexpage/ReturnManagement',
          name: 'ReturnManagement',
          component: ReturnManagement
        },
        {
          path: '/indexpage/Embargo',
          name: 'Embargo',
          component: Embargo
        },
        {
          path: '/indexpage/Unmarketable',
          name: 'Unmarketable',
          component: Unmarketable
        },
        {
          path: '/indexpage/Clearance',
          name: 'Clearance',
          component: Clearance
        },
        {
          path: '/indexpage/ClearanceSetting',
          name: 'ClearanceSetting',
          component: ClearanceSetting
        },
        {
          path: '/indexpage/ClearanceSeeLog',
          name: 'ClearanceSeeLog',
          component: ClearanceSeeLog
        }
      ]
    }
  ]
})
