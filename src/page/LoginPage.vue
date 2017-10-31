<template>
    <el-row class="contents">
      <div class="container met-head">
        <el-row class="row">
          <el-col :xs="12" :sm="12" class="logo">
            <ul class="list-none">
              <li><a href="#/home" class="met-logo"><img src="https://show.metinfo.cn/muban/M1156010/377/upload/201706/1497771328.png"></a></li>
              <li>会员登录</li>
            </ul>
          </el-col>
          <el-col :xs="12" :sm="12" class="user-info">
            <ol class="breadcrumb pull-right">
              <li><a href="#/home" title="返回首页">返回首页</a></li>
            </ol>
          </el-col>
        </el-row>
      </div>
      <div class="login_index met-member">
        <div class="container">
          <form method="post" autocomplete="on" novalidate="novalidate" class="bv-form">
            <div class="form-group">
              <input type="text" name="username"  class="form-control" placeholder="用户名/邮箱/手机" v-model="username">
            <small class="help-block" data-bv-validator="notEmpty" data-bv-for="username" data-bv-result="NOT_VALIDATED" v-show="unisnull">{{errorInfo}}</small></div>
            <div class="form-group">
              <input type="password" name="password"  class="form-control" placeholder="密码"  v-model="password">
            <small class="help-block" data-bv-validator="notEmpty" data-bv-for="password" data-bv-result="NOT_VALIDATED" v-show="pwisnull">{{errorInfo}}</small></div>
            <div class="login_link"><a>忘记密码？</a></div>
            <button @click="login" class="btn btn-lg btn-primary btn-block" type="button">登录</button>
            <router-link class="btn btn-lg btn-primary btn-block register" :to="'regs'" tag="a">没有账号？现在去注册</router-link>
          </form>
        </div>
      </div>
      <footer class="container met-footer">
        <p></p><p>— 努力创造优质作品，奉献更多精品佳作(本人邮箱：1103085816@qq.com) —</p><p></p>
      </footer>
    </el-row>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'login',
  data () {
    return {
      username : '',
      password : '',
      unisnull : false,
      pwisnull : false,
      errorInfo:'此项不能为空'
    }
  },
  methods:{
    login:function(){
      if(!this.username){
        this.errorInfo ='此项不能为空';
        this.unisnull = true;
      } else if(!this.password){
        this.errorInfo='此项不能为空';
        this.pwisnull = true;
      } else {
         $.ajax({
          url:'/cloudvideo/rest/user/login',
          data:{username : this.username, password : this.password},
          type:'GET',
          dataType:'text',
          success: (data) => {
            if(data.indexOf('success') != -1){
              this.$store.state.home.username = this.username;
              this.$store.state.home.status = 1;
              this.$message('登陆成功,三秒后跳转至首页');
              setTimeout(function() {
                  location.hash = '/home';
              }, 3000);
            } else {
              this.errorInfo = data;
              this.pwisnull = true;
            }
          }
        })
      };
      setTimeout(e=>{
        this.unisnull=false;
        this.pwisnull=false;
      },3000);
    },
    logout: function(){
      this.$store.state.home.username = '';
      this.$store.state.home.status = 0;
    }
  },
  mounted(){
    this.$store.dispatch('setMenuShow',false);
  },
  destroyed(){
    this.$store.dispatch('setMenuShow',true);
  }
}
</script>
<style scoped>
@media (min-width: 1200px){
  .container {
      width: 1170px;
  }
}

@media (min-width: 992px) and (max-width:1200px){
  .container {
    width: 970px;
  }
}
@media (min-width: 768px) and (max-width:992px){
  .container {
    width: 750px;
  }
}
@media (max-width:768px){
  .container {
    width: 750px;
  }
}
div.contents{
  width: 100%;
  height: 100%;
  overflow: hidden;
  float: left;
  margin: 0;
  padding: 0;
  list-style: none;
  display: block;
  overflow: hidden;
  position: relative;
  background: white;
}
.container:before {
    display: table;
    content: " ";
}
.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.login_index {
    background-image: url("//show.metinfo.cn/muban/M1156010/377/app/system/web/user/templates/met/img/2015020201454781.jpg");
}
.met-member {
    background-color: #efefef;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    padding: 50px 0px;
}
.met-head .logo li {
    float: left;
    height: 100px;
    line-height: 100px;
    font-size: 22px;
}
.breadcrumb {
    height: 100px;
    line-height: 100px;
    width: 100%;
    padding: 8px 15px;
    margin-bottom: 20px;
    list-style: none;
    border-radius: 4px;
}
.breadcrumb li{
  float: right!important;
}
a {
  color: #337ab7;
  text-decoration: none;
  background-color: transparent;
}
.met-member form {
    max-width: 400px;
    margin: 0px 10px;
    background-color: rgba(255,255,255,.7);
    padding: 30px;
}
.form-group {
    margin-bottom: 15px;
    height: 70px;
}
.met-member input.form-control, .met-member textarea.form-control {
    border-radius: 0px;
    height: 43px;
}
.login_index .form-control {
    border: 0;
}
.form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}
a.register{
  margin-top:15px; 
}
.help-block {
    display: block;
    margin-top: 5px;
    margin-bottom: 10px;
    color: red;
}
small {
    font-size: 80%;
}
.met-member .login_link {
    text-align: right;
    margin-bottom: 15px;
}
.met-member .btn {
    border-radius: 0px;
}
.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}
.btn-block {
    display: block;
    width: 100%;
}
.btn-group-lg>.btn, .btn-lg {
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.3333333;
    border-radius: 6px;
}
.btn-primary {
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
}
button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
.met-footer {
    text-align: center;
    padding: 30px;
    color: #777;
}
.met-footer p {
    margin-bottom: 5px;
}
p {
    margin: 0 0 10px;
}
</style>
