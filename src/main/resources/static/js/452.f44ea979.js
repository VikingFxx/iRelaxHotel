"use strict";(self["webpackChunkvue2_v19"]=self["webpackChunkvue2_v19"]||[]).push([[452],{2452:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"wrapper"},[t("div",{staticStyle:{margin:"150px auto","background-color":"rgba(255,255,255,0.5)",height:"300px",padding:"20px","border-radius":"10px",width:"350px"}},[e._m(0),t("el-form",{ref:"employee",attrs:{model:e.employee,rules:e.rules}},[t("el-form-item",{attrs:{prop:"account"}},[t("el-input",{staticStyle:{margin:"10px 0"},attrs:{size:"medium","prefix-icon":"el-icon-user",placeholder:"請輸入帳號"},model:{value:e.employee.account,callback:function(t){e.$set(e.employee,"account",t)},expression:"employee.account"}})],1),t("el-form-item",{attrs:{prop:"passwd"}},[t("el-input",{staticStyle:{margin:"10px 0"},attrs:{size:"medium","prefix-icon":"el-icon-lock","show-password":"",placeholder:"請輸入密碼"},model:{value:e.employee.passwd,callback:function(t){e.$set(e.employee,"passwd",t)},expression:"employee.passwd"}})],1),t("el-form-item",{staticStyle:{margin:"10px 0","text-align":"right"}},[t("el-button",{attrs:{type:"primary",size:"small",autocomplete:"off"},on:{click:e.login}},[e._v(" 登錄 ")])],1)],1)],1)])},l=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"title"},[t("b",[e._v("iRelax Hotel 後台管理系統")])])}],i=(r(7658),r(1120),{name:"login",data(){return{employee:{account:"",passwd:""},rules:{account:[{required:!0,message:"請輸入帳號",trigger:"blur"},{min:3,max:10,message:"長度在 3 到 10 個字",trigger:"blur"}],passwd:[{required:!0,message:"請輸入密碼",trigger:"blur"},{min:1,max:20,message:"長度在 1 到 20 個字",trigger:"blur"}]}}},methods:{login(){this.$refs["employee"].validate((e=>{if(!e)return!1;this.$http.post("/employee/login",this.employee).then((e=>{e?this.$router.push("/home"):this.$message.error("帳號或密碼錯誤")}))}))}}}),a=i,o=r(1001),n=(0,o.Z)(a,s,l,!1,null,null,null),p=n.exports}}]);
//# sourceMappingURL=452.f44ea979.js.map