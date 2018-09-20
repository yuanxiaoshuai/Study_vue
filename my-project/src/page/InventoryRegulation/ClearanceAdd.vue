<template>
  <div class="item bgc_white" style="margin: 20px">
    <title-bar :title="titleMsg"></title-bar>
    <el-form :inline="true" :model="formInline" class="demo-form-inline text-left" :label-width="labelWidth">
      <div>
        <el-form-item label="名称">
          <el-input v-model="formInline.sku" placeholder="请输入名称"></el-input>
          <span class="red_tip_icon">*</span>
        </el-form-item>
        <el-form-item label="负责部门">
          <el-input v-model="formInline.sku" placeholder="请输入负责部门"></el-input>
          <span class="red_tip_icon">*</span>
        </el-form-item>
      </div>
      <div>
        <el-form-item label="创建时间大于等于">
          <el-input v-model="formInline.sku" ></el-input>
          <span class="input_txt_end">天</span>
        </el-form-item>
        <el-form-item label="创建时间小于等于">
          <el-input v-model="formInline.sku" ></el-input>
          <span class="input_txt_end">天</span>
        </el-form-item>
        <span class="tip_text">(为正整数且必须为数字，否则默认为0)</span>
      </div>
      <div>
        <el-form-item label="审核时间大于等于">
          <el-input v-model="formInline.sku" ></el-input>
          <span class="input_txt_end">天</span>
        </el-form-item>
        <el-form-item label="审核时间小于等于">
          <el-input v-model="formInline.sku" ></el-input>
          <span class="input_txt_end">天</span>
        </el-form-item>
        <span class="tip_text">(为正整数且必须为数字，否则默认为0)</span>
      </div>
      <div>
        <el-form-item label="产品状态">
          <el-checkbox-group class="checkbox_border" v-model="formInline.checkbox.checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in formInline.checkbox.cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
          <el-checkbox :indeterminate="formInline.checkbox.isIndeterminate" v-model="formInline.checkbox.checkAll" @change="handleCheckAllChange">反选</el-checkbox>
        </el-form-item>
      </div>

      <div>
        <el-form-item label="仓库">
          <el-checkbox-group class="checkbox_border" v-model="formInline.checkbox.checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in formInline.checkbox.cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
          <el-checkbox :indeterminate="formInline.checkbox.isIndeterminate" v-model="formInline.checkbox.checkAll" @change="handleCheckAllChange">反选</el-checkbox>
        </el-form-item>
      </div>
      <div>
        <el-form-item style="width: 100%" label="选择仓位">
          <div>
            <el-input type="textarea" style="width: 800px;"></el-input>
          </div>
          <el-checkbox :label="ck" :key="ck">反选</el-checkbox>
          <span>注：多个仓位以英文逗号（“,”）做间隔</span>
        </el-form-item>
      </div>
      <div>
        <el-form-item label="库存大于等于">
          <el-input v-model="formInline.sku" placeholder=""></el-input>
          <span class="red_tip_icon">*</span>
        </el-form-item>
        <el-form-item label="库存小于等于">
          <el-input v-model="formInline.sku" placeholder=""></el-input>
          <span class="red_tip_icon">*</span>
        </el-form-item>
        <el-form-item label="成本大于等于">
          <el-input v-model="formInline.sku" placeholder=""></el-input>
          <span class="red_tip_icon">*</span>
        </el-form-item>
        <el-form-item label="成本小于等于">
          <el-input v-model="formInline.sku" placeholder=""></el-input>
          <span class="red_tip_icon">*</span>
        </el-form-item>
      </div>
      <div>
        <el-form-item label="库存*成本大于等于">
          <el-input v-model="formInline.sku" placeholder=""></el-input>
          <span class="red_tip_icon">*</span>
        </el-form-item>
        <el-form-item label="库存*成本小于等于">
          <el-input v-model="formInline.sku" placeholder=""></el-input>
          <span class="red_tip_icon">*</span>
        </el-form-item>
        <el-form-item label="周转天数大于等于">
          <el-input v-model="formInline.sku" placeholder=""></el-input>
          <span class="red_tip_icon">*</span>
        </el-form-item>
        <el-form-item label="周转天数小于等于">
          <el-input v-model="formInline.sku" placeholder=""></el-input>
          <span class="red_tip_icon">*</span>
        </el-form-item>
      </div>
      <div>
        <el-form-item label="7天销量大于等于">
          <el-input v-model="formInline.sku" placeholder=""></el-input>
          <span class="red_tip_icon">*</span>
        </el-form-item>
        <el-form-item label="7天销量小于等于">
          <el-input v-model="formInline.sku" placeholder=""></el-input>
          <span class="red_tip_icon">*</span>
        </el-form-item>
        <el-form-item label="30天销量大于等于">
          <el-input v-model="formInline.sku" placeholder=""></el-input>
          <span class="red_tip_icon">*</span>
        </el-form-item>
        <el-form-item label="30天销量小于等于">
          <el-input v-model="formInline.sku" placeholder=""></el-input>
          <span class="red_tip_icon">*</span>
        </el-form-item>
      </div>
      <div>
        <el-form-item label="60天销量大于等于">
          <el-input v-model="formInline.sku" placeholder=""></el-input>
          <span class="red_tip_icon">*</span>
        </el-form-item>
        <el-form-item label="60天销量小于等于">
          <el-input v-model="formInline.sku" placeholder=""></el-input>
          <span class="red_tip_icon">*</span>
        </el-form-item>
        <el-form-item label="90天销量大于等于">
          <el-input v-model="formInline.sku" placeholder=""></el-input>
          <span class="red_tip_icon">*</span>
        </el-form-item>
        <el-form-item label="90天销量小于等于">
          <el-input v-model="formInline.sku" placeholder=""></el-input>
          <span class="red_tip_icon">*</span>
        </el-form-item>
      </div>
      <div>
        <el-form-item label="在途数量大于等于">
          <el-input v-model="formInline.sku" placeholder=""></el-input>
          <span class="red_tip_icon">*</span>
        </el-form-item>
        <el-form-item label="在途数量小于等于">
          <el-input v-model="formInline.sku" placeholder=""></el-input>
          <span class="red_tip_icon">*</span>
        </el-form-item>
        <el-form-item label="待发数量大于等于">
          <el-input v-model="formInline.sku" placeholder=""></el-input>
          <span class="red_tip_icon">*</span>
        </el-form-item>
        <el-form-item label="待发数量小于等于">
          <el-input v-model="formInline.sku" placeholder=""></el-input>
          <span class="red_tip_icon">*</span>
        </el-form-item>
      </div>
      <div>
        <el-form-item label="描述备注">
          <el-input type="textarea" style="width: 800px"></el-input>
        </el-form-item>
      </div>
      <div class="text_center mb_20">
        <el-button type="primary">保存</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
  import TitleBar from '../../components/TitleBar.vue'
  const checkOption = ['停产商品', '清仓商品', '侵权风险商品', '站点违规风险商品','采购不到商品','自动创建','正常商品','质量差商品','暂时采购不到商品','禁用产品']
  export default{
    data(){
      return{
        ck:'ck',
        labelWidth:'110px',
        titleMsg: '新增盘点脚本',
        formInline:{
          checkbox:{
            checkAll: false,
            checkedCities: ['停产商品', '清仓商品'],
            cities:  checkOption,
            isIndeterminate: true
          },
          sku:''
        }
      }
    },
    methods:{
      handleCheckAllChange(val) {
        this.formInline.checkbox.checkedCities = val ? checkOption : [];
        this.formInline.checkbox.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.formInline.checkbox.checkAll = checkedCount === this.formInline.checkbox.cities.length;
        this.formInline.checkbox.isIndeterminate = checkedCount > 0 && checkedCount < this.formInline.checkbox.cities.length;
      }
    },
    components:{
      TitleBar
    }
  }
</script>

<style>
  .red_tip_icon{
    position: absolute;
    top: 0;
    right: -10px;
    color: red;
  }
  .input_txt_end{
    position: absolute;
    top: 0;
    right: 10px;
  }
  .tip_text{
    color: red;
    line-height: 30px;
  }
  .checkbox_border{
    border: 1px solid #d9d9d9;
    padding:0 10px;
  }
</style>
