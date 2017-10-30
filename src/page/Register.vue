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
        <div class="register_index met-member">
            <div class="container">
                <form class="form-register met-form bv-form" novalidate="novalidate">
                    <div class="form-group">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-user"></i></span>
                            <input type="text" name="username" autocomplete="off" class="form-control" placeholder="会员名">
                        </div>
                    <small class="help-block" data-bv-validator="stringLength" data-bv-for="username" data-bv-result="NOT_VALIDATED" style="display: none;">用户名必须在2-30个字符之间</small></div>
                    <div class="form-group">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-unlock-alt"></i></span>
                            <input type="password" name="password"  autocomplete="off"  class="form-control" placeholder="密码">
                        </div>
                    <small class="help-block" data-bv-validator="stringLength" data-bv-for="password" data-bv-result="NOT_VALIDATED" style="display: none;">密码必须在6-30个字符之间</small></div>
                    <div class="form-group">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-unlock-alt"></i></span>
                            <input type="password" name="confirmpassword"  autocomplete="off" class="form-control" placeholder="重复密码">
                        </div>
                    <small class="help-block" data-bv-validator="identical" data-bv-for="confirmpassword" data-bv-result="NOT_VALIDATED" style="display: none;">两次密码输入不一致</small></div>
                    <div class="row login_code">
                        <div class="col-xs-8">
                            <div class="form-group">				
                                <div class="input-group">
                                    <input type="text" name="code" class="form-control" placeholder="验证码">
                                </div>
                            <small class="help-block" data-bv-validator="notEmpty" data-bv-for="code" data-bv-result="NOT_VALIDATED" style="display: none;">此项不能为空</small></div>
                        </div>
                        <div class="col-xs-4 login_code_img">
                            <img :src="imgUrl" class="img-responsive"/>
                            <span @click="refresh"class="icon-refresh">看不清,刷新</span>
                        </div>
                    </div>
                    <button class="btn btn-lg btn-primary btn-block" type="submit">立即注册</button>
                    <router-link class="btn btn-lg btn-primary btn-block login" :to="'login'" tag="a">已有账号？现在登陆</router-link>
                </form>
            </div>
        </div>
        <footer class="container met-footer">
            <p></p><p>— 努力创造优质作品，奉献更多精品佳作(个人邮箱：1103085816@qq.com) —</p><p></p>
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
      errorInfo:'此项不能为空',
      random : 1,
    }
  },
  computed : {
      imgUrl: function(){
          return '//show.metinfo.cn/muban/res018/304/app/system/entrance.php?m=include&c=ajax_pin&a=dogetpin&r=' + this.random;
      }
  },
  methods:{
    refresh: function(){
        this.random = Math.random();
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
div.login_code_img{
    height: 70px;
}
span.icon-refresh{
    display: inline-block;
    width: 100px;
    height: 40px;
    line-height: 40px;
    margin-left: 15px;
    cursor: pointer;
    vertical-align: top;
}
a.login{
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
