(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jiaoshi/add-or-update"],{1904:function(i,e,n){"use strict";n.r(e);var t=n("63f6"),a=n("a052");for(var r in a)"default"!==r&&function(i){n.d(e,i,(function(){return a[i]}))}(r);n("4aa2");var o,u=n("f0c5"),s=Object(u["a"])(a["default"],t["b"],t["c"],!1,null,"0ead5950",null,!1,t["a"],o);e["default"]=s.exports},"212b":function(i,e,n){},"4aa2":function(i,e,n){"use strict";var t=n("212b"),a=n.n(t);a.a},"63f6":function(i,e,n){"use strict";var t,a=function(){var i=this,e=i.$createElement;i._self._c},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return t}))},"690c":function(i,e,n){"use strict";(function(i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=a(n("a34a"));function a(i){return i&&i.__esModule?i:{default:i}}function r(i,e,n,t,a,r,o){try{var u=i[r](o),s=u.value}catch(h){return void n(h)}u.done?e(s):Promise.resolve(s).then(t,a)}function o(i){return function(){var e=this,n=arguments;return new Promise((function(t,a){var o=i.apply(e,n);function u(i){r(o,t,a,u,s,"next",i)}function s(i){r(o,t,a,u,s,"throw",i)}u(void 0)}))}}var u=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("ac57"))}.bind(null,n)).catch(n.oe)},s={data:function(){return{ruleForm:{jiaoshigonghao:"",mima:"",jiaoshixingming:"",xingbie:"",zhaopian:"",zhicheng:"",lianxidianhua:"",jiaoshiyouxiang:""},xingbieOptions:[],xingbieIndex:0,zhichengOptions:[],zhichengIndex:0,user:{},ro:{jiaoshigonghao:!1,mima:!1,jiaoshixingming:!1,xingbie:!1,zhaopian:!1,zhicheng:!1,lianxidianhua:!1,jiaoshiyouxiang:!1}}},components:{wPicker:u},computed:{},onLoad:function(){var e=o(t.default.mark((function e(n){var a,r,o,u;return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=i.getStorageSync("nowTable"),e.next=3,this.$api.session(a);case 3:if(r=e.sent,this.user=r.data,this.xingbieOptions="男,女".split(","),this.zhichengOptions="高级讲师,讲师,助教,教师,副教授".split(","),this.ruleForm.userid=i.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid),!n.id){e.next=15;break}return this.ruleForm.id=n.id,e.next=13,this.$api.info("jiaoshi",this.ruleForm.id);case 13:r=e.sent,this.ruleForm=r.data;case 15:if(!n.cross){e.next=54;break}o=i.getStorageSync("crossObj"),e.t0=t.default.keys(o);case 18:if((e.t1=e.t0()).done){e.next=54;break}if(u=e.t1.value,"jiaoshigonghao"!=u){e.next=24;break}return this.ruleForm.jiaoshigonghao=o[u],this.ro.jiaoshigonghao=!0,e.abrupt("continue",18);case 24:if("mima"!=u){e.next=28;break}return this.ruleForm.mima=o[u],this.ro.mima=!0,e.abrupt("continue",18);case 28:if("jiaoshixingming"!=u){e.next=32;break}return this.ruleForm.jiaoshixingming=o[u],this.ro.jiaoshixingming=!0,e.abrupt("continue",18);case 32:if("xingbie"!=u){e.next=36;break}return this.ruleForm.xingbie=o[u],this.ro.xingbie=!0,e.abrupt("continue",18);case 36:if("zhaopian"!=u){e.next=40;break}return this.ruleForm.zhaopian=o[u],this.ro.zhaopian=!0,e.abrupt("continue",18);case 40:if("zhicheng"!=u){e.next=44;break}return this.ruleForm.zhicheng=o[u],this.ro.zhicheng=!0,e.abrupt("continue",18);case 44:if("lianxidianhua"!=u){e.next=48;break}return this.ruleForm.lianxidianhua=o[u],this.ro.lianxidianhua=!0,e.abrupt("continue",18);case 48:if("jiaoshiyouxiang"!=u){e.next=52;break}return this.ruleForm.jiaoshiyouxiang=o[u],this.ro.jiaoshiyouxiang=!0,e.abrupt("continue",18);case 52:e.next=18;break;case 54:this.styleChange();case 55:case"end":return e.stop()}}),e,this)})));function n(i){return e.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(i){this.xingbieIndex=i.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},zhichengChange:function(i){this.zhichengIndex=i.target.value,this.ruleForm.zhicheng=this.zhichengOptions[this.zhichengIndex]},zhaopianTap:function(){var i=this;this.$api.upload((function(e){i.ruleForm.zhaopian=i.$base.url+"upload/"+e.file,i.$forceUpdate(),i.$nextTick((function(){i.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var i=o(t.default.mark((function i(){return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(this.ruleForm.jiaoshigonghao){i.next=3;break}return this.$utils.msg("教师工号不能为空"),i.abrupt("return");case 3:if(this.ruleForm.mima){i.next=6;break}return this.$utils.msg("密码不能为空"),i.abrupt("return");case 6:if(this.ruleForm.jiaoshixingming){i.next=9;break}return this.$utils.msg("教师姓名不能为空"),i.abrupt("return");case 9:if(!this.ruleForm.jiaoshiyouxiang||this.$validate.isEmail(this.ruleForm.jiaoshiyouxiang)){i.next=12;break}return this.$utils.msg("教师邮箱应输入邮件格式"),i.abrupt("return");case 12:if(!this.ruleForm.id){i.next=17;break}return i.next=15,this.$api.update("jiaoshi",this.ruleForm);case 15:i.next=19;break;case 17:return i.next=19,this.$api.add("jiaoshi",this.ruleForm);case 19:this.$utils.msgBack("提交成功");case 20:case"end":return i.stop()}}),i,this)})));function e(){return i.apply(this,arguments)}return e}(),optionsChange:function(i){this.index=i.target.value},bindDateChange:function(i){this.date=i.target.value},getDate:function(i){var e=new Date,n=e.getFullYear(),t=e.getMonth()+1,a=e.getDate();return"start"===i?n-=60:"end"===i&&(n+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(n,"-").concat(t,"-").concat(a)},toggleTab:function(i){this.$refs[i].show()}}};e.default=s}).call(this,n("543d")["default"])},a052:function(i,e,n){"use strict";n.r(e);var t=n("690c"),a=n.n(t);for(var r in t)"default"!==r&&function(i){n.d(e,i,(function(){return t[i]}))}(r);e["default"]=a.a},d0de:function(i,e,n){"use strict";(function(i){n("1fd4"),n("921b");t(n("66fd"));var e=t(n("1904"));function t(i){return i&&i.__esModule?i:{default:i}}i(e.default)}).call(this,n("543d")["createPage"])}},[["d0de","common/runtime","common/vendor"]]]);