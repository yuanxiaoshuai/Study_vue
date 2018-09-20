<template>
  <div class="item mt_20" style="background-color: white;padding-bottom: 20px;margin: 20px">
    <title-bar :title="titMsg" ></title-bar>
    <el-form :inline="true"  ref="formData"  :model="formData" class="demo-form-inline text-left">
      <el-form-item label="供应商">
        <el-input disabled v-model="formData.sku"></el-input>
      </el-form-item>
      <el-form-item label="SKU">
        <el-input disabled v-model="formData.sku"></el-input>
      </el-form-item>
      <el-form-item label="商品名称">
        <el-input disabled v-model="formData.sku"></el-input>
      </el-form-item>
      <el-form-item label="状态更新天数">
        <el-input disabled v-model="formData.sku"></el-input>
      </el-form-item>
      <el-form-item label="总金额">
        <el-input disabled v-model="formData.sku"></el-input>
      </el-form-item>
      <el-form-item label="采购价">
        <el-input disabled v-model="formData.sku"></el-input>
      </el-form-item>
      <el-form-item label="采购金额">
        <el-input disabled v-model="formData.sku"></el-input>
      </el-form-item>
      <el-form-item label="运费">
        <el-input disabled v-model="formData.sku"></el-input>
      </el-form-item>
      <el-form-item label="采购量">
        <el-input disabled v-model="formData.sku"></el-input>
      </el-form-item>
      <el-form-item label="实际到货量">
        <el-input disabled v-model="formData.sku"></el-input>
      </el-form-item>
      <el-form-item label="异常总量">
        <el-input disabled v-model="formData.sku"></el-input>
      </el-form-item>
      <el-form-item label="异常金额">
        <el-input disabled v-model="formData.sku"></el-input>
      </el-form-item>
      <el-form-item label="创建人">
        <el-input disabled v-model="formData.sku"></el-input>
      </el-form-item>
      <el-form-item label="创建时间">
        <el-input disabled v-model="formData.sku"></el-input>
      </el-form-item>
      <el-form-item label="操作人">
        <el-input disabled v-model="formData.sku"></el-input>
      </el-form-item>
      <el-form-item label="操作时间">
        <el-input disabled v-model="formData.sku"></el-input>
      </el-form-item>
      <el-form-item label="财务操作人">
        <el-input disabled v-model="formData.sku"></el-input>
      </el-form-item>
      <el-form-item label="财务操作时间">
        <el-input disabled v-model="formData.sku"></el-input>
      </el-form-item>
      <el-form-item label="财务备注">
        <el-input disabled v-model="formData.sku"></el-input>
      </el-form-item>
      <el-form-item label="仓库备注">
        <el-input disabled v-model="formData.sku"></el-input>
      </el-form-item>
      <el-form-item label="异常类型">
        <el-select disabled v-model="formData.returnStyle" placeholder="异常类型">
          <el-option label="请选择" value="-1"></el-option>
          <el-option label="多货" value="1"></el-option>
          <el-option label="少货" value="2"></el-option>
          <el-option label="坏货" value="3"></el-option>
          <el-option label="错货" value="4"></el-option>
          <el-option label="没来" value="5"></el-option>
          <el-option label="配件不齐" value="6"></el-option>
          <el-option label="合并批次入库" value="7"></el-option>
          <el-option label="供应商缺货退款" value="8"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="异常量">
        <el-input disabled v-model="formData.sku"></el-input>
      </el-form-item>
      <el-form-item label="异常类型2">
        <el-input disabled v-model="formData.sku"></el-input>
      </el-form-item>
      <el-form-item label="异常量2">
        <el-input disabled v-model="formData.sku"></el-input>
      </el-form-item>
      <div>
        <el-form-item label="异常图片">
          <img src="../../../static/image/img.png" alt="异常图片">
        </el-form-item>
      </div>
      <div>
        <el-form-item label="处理方式">
          <el-select v-model="formData.returnStyle" placeholder="异常类型">
            <el-option label="请选择" value="-1"></el-option>
            <el-option label="合并批次入库" value="1"></el-option>
            <el-option label="多货入库" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="仓库处理方式">
          <el-select v-model="formData.returnStyle" placeholder="异常类型">
            <el-option label="请选择" value="-1"></el-option>
            <el-option label="打包处理" value="1"></el-option>
            <el-option label="退回供应商" value="2"></el-option>
            <el-option label="等待补发配件" value="2"></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div class="clearfix">
        <span class="fl"><label class="el-form-item__label">采购备注</label></span>
        <span class="fl" style="width: 800px"><el-input type="textarea"></el-input></span>
      </div>
      <div style="padding-left: 100px" class="mt_20">
        <el-button type="primary">保存</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
  import TitleBar from '../../components/TitleBar.vue'
  export default{
    data(){
      return {
        titMsg:'异常批次信息',
        formData:{
          sku:''
        }
      }
    },
    components:{
      TitleBar
    }
  }
</script>

<style>
</style>
