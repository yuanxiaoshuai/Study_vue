/**
 * Created by Administrator on 2018/9/7.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import dialog_store from './modules/dialog_store'
const store = new Vuex.Store({
  modules:{
    dialog: dialog_store
  }
})
export default store
