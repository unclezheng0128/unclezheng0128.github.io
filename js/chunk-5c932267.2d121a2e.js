(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c932267"],{"399a":function(e,t,r){},"6d10":function(e,t,r){"use strict";var a=r("399a"),s=r.n(a);s.a},"6e7b":function(e,t,r){"use strict";t["a"]={validateUserName:function(e,t,r){""===t?r(new Error("用户名不能为空")):/^[a-zA-Z]\w+/.test(t)?r():r(new Error("用户名(字母或数字，并以字母开头"))},validatePhone:function(e,t,r){t&&""!=t?/^1(3|4|5|7|8)\d{9}$/.test(t)?r():r(new Error("请输入正确的手机号码")):r(new Error("手机号码不能为空"))},validateEmail:function(){},validateMsgCode:function(e,t,r){t&&""!=t?r():r(new Error("短信验证码不能为空"))}}},"935e":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"zv-page",attrs:{id:"page-login"}},[r("div",{staticClass:"auth-wrapper"},[r("div",{staticClass:"auth-wrapper-header"},[r("h3",[e._v("注册账号")]),r("span",{staticClass:"auth-header-sublink"},[e._v("已有账号，"),r("el-button",{attrs:{type:"text"},on:{click:function(t){e.toUrl("login")}}},[e._v("快捷登陆"),r("i",{staticClass:"el-icon-arrow-right"})])],1)]),r("div",{staticClass:"auth-form-wrapper",on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.submitForm("ruleForm")}}},[r("el-form",{ref:"ruleForm",staticClass:"zv-form-auth",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rule}},[r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{attrs:{placeholder:"用户(字母或数字)，且以字母开头"},model:{value:e.ruleForm.username,callback:function(t){e.$set(e.ruleForm,"username",t)},expression:"ruleForm.username"}})],1),r("el-form-item",{attrs:{prop:"pass"}},[r("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"密码"},model:{value:e.ruleForm.pass,callback:function(t){e.$set(e.ruleForm,"pass",t)},expression:"ruleForm.pass"}})],1),r("el-form-item",{attrs:{prop:"checkPass"}},[r("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"确认密码"},model:{value:e.ruleForm.checkPass,callback:function(t){e.$set(e.ruleForm,"checkPass",t)},expression:"ruleForm.checkPass"}})],1),r("el-form-item",{attrs:{prop:"telNumber"}},[r("div",[r("el-input",{attrs:{placeholder:"手机号码"},model:{value:e.ruleForm.telNumber,callback:function(t){e.$set(e.ruleForm,"telNumber",t)},expression:"ruleForm.telNumber"}},[r("template",{slot:"prepend"},[e._v("+86")])],2)],1)]),r("el-form-item",{attrs:{prop:"msgCode"}},[r("div",[r("el-input",{attrs:{placeholder:"短信验证码"},model:{value:e.ruleForm.msgCode,callback:function(t){e.$set(e.ruleForm,"msgCode",t)},expression:"ruleForm.msgCode"}},[r("template",{slot:"append"},[r("el-button",{attrs:{type:"primary",disabled:e.veriBtnDisabled},on:{click:function(t){e.getMsgCode("ruleForm")}}},[e._v(e._s(e.veriBtn)),e.veriBtnDisabled?r("em",[e._v("s")]):e._e()])],1)],2)],1)]),r("el-form-item",{staticStyle:{"margin-bottom":"0"}},[r("el-button",{staticClass:"btn-auth-submit",attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("注册")])],1),r("el-form-item",[r("el-row",{staticStyle:{"margin-top":"10px"},attrs:{align:"middle"}},[r("el-col",{staticStyle:{"line-height":"22px"},attrs:{span:8}},[r("el-checkbox",{staticClass:"checkbox-agreement",attrs:{name:"agree",label:"阅读并同意"},model:{value:e.agree,callback:function(t){e.agree=t},expression:"agree"}})],1),r("el-col",{attrs:{span:16}},[r("div",{staticClass:"agreement-wrapper"},[r("el-button",{staticClass:"zv-text-btn",attrs:{type:"text"},on:{click:function(t){e.showAgreementDialog("serviceDialogVisible")}}},[e._v("《ZValley OS开放平台服务条款》")]),r("el-button",{staticClass:"zv-text-btn",attrs:{type:"text"},on:{click:function(t){e.showAgreementDialog("privacyDialogVisible")}}},[e._v("《ZValley OS开放平台服务条款》")])],1)])],1)],1)],1)],1)]),r("el-dialog",{staticClass:"zl-dialog",attrs:{title:"ZValley OS开放平台服务条款",visible:e.serviceDialogVisible,width:"30%","before-close":e.handleClose("serviceDialogVisible")},on:{"update:visible":function(t){e.serviceDialogVisible=t}}},[r("div",{staticClass:"zl-dialog-wrapper agreement-dialog"},[r("div",{staticClass:"zl-dialog-header"},[e._v("《ZValley OS开放平台服务条款》")]),r("div",{staticClass:"zl-dialog-content"})])]),r("el-dialog",{attrs:{title:"ZValley OS开放平台个人信息保护政策",visible:e.privacyDialogVisible,width:"30%","before-close":e.handleClose("privacyDialogVisible")},on:{"update:visible":function(t){e.privacyDialogVisible=t}}},[r("div",{staticClass:"zl-dialog-wrapper agreement-dialog"},[r("div",{staticClass:"zl-dialog-content"},[e._v("\n                ZValley OS开放平台个人信息保护政策\n                ZValley OS开放平台个人信息保护政策\n            ")])])])],1)},s=[],o=r("6e7b"),l=r("153e"),i={name:"Login",data:function(){var e=this,t=function(t,r,a){""===r?a(new Error("请输入密码")):(""!==e.ruleForm.checkPass&&e.$refs.ruleForm.validateField("checkPass"),a())},r=function(t,r,a){""===r?a(new Error("请再次输入密码")):r!==e.ruleForm.pass?a(new Error("两次输入密码不一致!")):a()};return{privacyDialogVisible:!1,serviceDialogVisible:!1,timeCount:30,veriBtn:"获取验证码",veriBtnDisabled:!1,agree:!0,ruleForm:{username:"",pass:"",checkPass:"",telNumber:"",msgCode:""},rule:{username:[{validator:o["a"].validateUserName,trigger:"blur"}],pass:[{min:6,max:20,message:"请输入6-20位密码",trigger:"blur"},{validator:t,trigger:"blur"}],checkPass:[{validator:r,trigger:"blur"}],telNumber:[{validator:o["a"].validatePhone,trigger:"blur"}],msgCode:[{required:!0,message:"请输入短信验证码",trigger:"blur"},{min:4,max:6,message:"短信验证码位数不正确",trigger:"blur"}]}}},methods:{toUrl:function(e,t){this.$router.push({name:e,params:t})},handleClose:function(){window.console.log("handle close")},showAgreementDialog:function(e){this[e]=!0},resetCountDown:function(){this.veriBtnDisabled=!1,this.veriBtn="发送验证码"},countDownStart:function(){var e=this;e.veriBtnDisabled=!0,e.veriBtn=e.timeCount;var t=function t(){0!=e.veriBtn?setTimeout(function(){e.veriBtn-=1,t()},1e3):e.resetCountDown()};t()},getMsgCode:function(e){var t=this,r=this;if(1==r.veriBtnDisabled)return!1;r.$refs[e].validateField("telNumber",function(e){e||r.$post("base/v1/sms.code",{bizType:"user_reg",phone:r.ruleForm.telNumber}).then(function(e){if(200!=e.status)return window.console.log("error submit!!"),!1;var r=e.data;"0000"==r.code?t.countDownStart():l["a"].notify({title:"错误",message:r.msg,type:"error"})})})},submitForm:function(e){var t=this;window.console.log(t.agree),t.agree?t.$refs[e].validate(function(e){if(!e)return window.console.log("error submit!!"),!1;t.$post("user/v1/auth/register",{dynaCode:t.ruleForm.msgCode,login:t.ruleForm.username,password:t.ruleForm.pass,telNumber:t.ruleForm.telNumber}).then(function(e){if(200==e.status||201==e.status){var r=e.data;"0000"==r.code?l["a"].notify({title:"注册成功",message:"请登陆系统",type:"success",onClose:function(){window.console.log("login"),t.toUrl("login")}}):(window.console.log(r.code),l["a"].notify({title:"错误",message:r.msg,type:"error",onClose:function(){window.console.log("login"),t.toUrl("login")}}))}})}):l["a"].message({type:"error",message:"请阅读并同意平台服务条款"})},resetForm:function(e){this.$refs[e].resetFields()}}},n=i,u=(r("6d10"),r("2877")),c=Object(u["a"])(n,a,s,!1,null,"42e66281",null);t["default"]=c.exports}}]);