<template>
  <div id="login" class="text_center">
    <div class="login_top">
      <div class="black"></div>
      <div class="title">
        <P class="welcome">WELCOME</P>
        <div class="tit-border">
          <p class="tit-name">竹亭采购系统</p>
          <p class="tit-e">ZHUTING PROCUREMENT SYSTEM</p>
        </div>
      </div>
    </div>
    <div class="login-content">
      <div class="content-main">
        <el-form :model="formData" status-icon :rules="rules" ref="formData" label-width="0" class="demo-formData">
          <el-form-item prop="userName">
            <el-input class="login_input" placeholder="请输入账号" v-model="formData.userName" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input class="login_input" placeholder="请输入密码" v-model="formData.checkPass" type="password"  auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="submitFormData('formData')" style="width: 350px;" type="primary" >提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        formData: {
          userName: '',
          checkPass: ''
        },
        rules: {
          userName: [
            {required: true, message: '请输入账号', trigger: 'blur'}
          ],
          checkPass: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitFormData: function (formName){

        this.$router.push('/indexpage')
//      this.$refs[formName].validate((valid) => {
//        if (valid) {
//          this.$http.post('#',this.formData, {
//            emulateJSON : true
//          }).then(function (res) {
//            this.$message.success(" submit!!")
//          },function (res) {
//            this.$message.error("error submit!!")
//          })
//
//        } else {
//          this.$message.error("error submit!!")
//          return false;
//        }
//      });
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>

<style>
  #login {
    display: flex;
    flex-direction: column;
    display: -webkit-flex;
    flex: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    color: #333333;
    background-color: white;
  }
  .login_input .el-input__inner{
    width: 100%;
    height: 40px;
  }
  .welcome{
    font-size: 60px;
    font-weight: bold;
  }
  .login_top{
    width: 100%;
    height: 410px;
    background: url('../../static/image/login-bg.png') no-repeat;
    background-size:100% 100%
  }
  .black{
    width: 100%;
    height:43%;
  }
  .title{
    color: #ffffff;
  }
  .tit-border{
    width: 350px;
    height: 85px;
    border:1px solid #ffffff;
    margin:  0 auto;
  }
  .tit-name{
    font-size: 36px;
    line-height: 42px;
  }
  .tit-e{
    font-size: 16px;
    line-height: 20px;
  }
  .login-content{
    flex: 1;
    background-color: #fff;
    width: 350px;
    margin: 0 auto;
    padding-top: 20px;
  }
</style>

