/**
 * Created by Administrator on 2018/9/18.
 */
export default {
  state:{
    name:'',                      //所有弹窗的title名字
    show:false,                  //智能采购-->不采购,   批次管理 --> 新增
    batchUploadShow:false,       //批次管理 --> 批量上传
    examineShow:false,           //批次管理 --> 财务审核弹窗
    createdAbnShow: false,       //批次管理 --> 生成异常批次
    signOrderShow:false,         //签收 --> 单号
    wareDetailShow:false,        //入库详情 --> 入库
    reissue:false,               //异常批次 --> 异常补发
    financialAudit:false,         //异常批次 --> 财务审核
    lackAddShow:false,           //缺货管理 --> 新增
  },
  mutations: {
    changeShow (state,obj) {
      state.show == false?state.show = true:state.show = false
      state.name = obj.title
    },
    changeBatchUploadShow(state,obj){
      state.batchUploadShow == false?state.batchUploadShow = true:state.batchUploadShow = false
      state.name = obj.title
    },
    changeExamineShow(state,obj){
      state.examineShow == false?state.examineShow = true:state.examineShow = false
      state.name = obj.title
    },
    changeCreatedAbnShow(state,obj){
      state.createdAbnShow == false?state.createdAbnShow = true:state.createdAbnShow = false
      state.name = obj.title
    },
    changeSignOrderShow(state,obj){
      state.signOrderShow == false?state.signOrderShow = true:state.signOrderShow = false
      state.name = obj.title
    },
    changeWareDetailShow(state,obj){
      state.wareDetailShow == false?state.wareDetailShow = true:state.wareDetailShow = false
      state.name = obj.title
    },
    changeReissue(state,obj){
      state.reissue == false?state.reissue = true:state.reissue = false
      state.name = obj.title
    },
    changeFinancialAudit(state,obj){
      state.financialAudit == false?state.financialAudit = true:state.financialAudit = false
      state.name = obj.title
    },
    showLackAddShow(state,obj){
      state.lackAddShow == false?state.lackAddShow = true:state.lackAddShow = false
      state.name = obj.title
    },
  }
}






















