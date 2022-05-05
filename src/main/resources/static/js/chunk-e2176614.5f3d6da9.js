(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e2176614"],{"25ce":function(e,l,t){"use strict";t.r(l);var a=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[t("el-descriptions",{staticClass:"margin-top",attrs:{title:"个人信息",column:2,border:""}},[t("template",{slot:"extra"},[t("el-tooltip",{attrs:{content:"操作",effect:"dark"}},[t("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.showEditPage}},[t("i",{staticClass:"fa fa-pencil"})])],1)],1),t("el-descriptions-item",[t("template",{slot:"label"},[t("i",{staticClass:"el-icon-user"}),e._v(" 用户名 ")]),e._v(" "+e._s(e.personalInfo.userName)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[t("i",{staticClass:"fa fa-address-card-o"}),e._v(" 姓名 ")]),e._v(" "+e._s(e.personalInfo.name)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[t("i",{staticClass:"fa fa-eye"}),e._v(" 密码 ")]),e._v(" "+e._s(""!=e.personalInfo.password?"********":"")+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[t("i",{staticClass:"fa fa-male"}),e._v(" 性别 ")]),e._v(" "+e._s(e.personalInfo.sexValue)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[t("i",{staticClass:"fa fa-id-card"}),e._v(" 身份证号 ")]),e._v(" "+e._s(e.personalInfo.idCardNum)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[t("i",{staticClass:"fa fa-frown-o"}),e._v(" 学号 ")]),e._v(" "+e._s(e.personalInfo.studentId)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[t("i",{staticClass:"fa fa-graduation-cap"}),e._v(" 学院 ")]),e._v(" "+e._s(e.personalInfo.college)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[t("i",{staticClass:"fa fa-globe"}),e._v(" 专业 ")]),e._v(" "+e._s(e.personalInfo.professional)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[t("i",{staticClass:"fa fa-users"}),e._v(" 班级 ")]),e._v(" "+e._s(e.personalInfo.className)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[t("i",{staticClass:"fa fa-mobile"}),e._v(" 联系方式 ")]),e._v(" "+e._s(e.personalInfo.telephone)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[t("i",{staticClass:"fa fa-newspaper-o"}),e._v(" 政治面貌 ")]),e._v(" "+e._s(e.personalInfo.politicalStatusValue)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[t("i",{staticClass:"fa fa-thumb-tack"}),e._v(" 年龄 ")]),e._v(" "+e._s(e.personalInfo.age)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[t("i",{staticClass:"fa fa-handshake-o"}),e._v(" 任职情况 ")]),e._v(" "+e._s(e.personalInfo.cognitionValue)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[t("i",{staticClass:"fa fa-hourglass"}),e._v(" 入学时间 ")]),e._v(" "+e._s(e.personalInfo.enterTime)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[t("i",{staticClass:"fa fa-phone"}),e._v(" 父亲联系方式 ")]),e._v(" "+e._s(e.personalInfo.fatherTel)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[t("i",{staticClass:"fa fa-phone"}),e._v(" 母亲联系方式 ")]),e._v(" "+e._s(e.personalInfo.motherTel)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[t("i",{staticClass:"fa fa-hourglass-end"}),e._v(" 出生日期 ")]),e._v(" "+e._s(e.personalInfo.birthTime)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[t("i",{staticClass:"el-icon-tickets"}),e._v(" 备注 ")]),e._v(" "+e._s(e.personalInfo.remark)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[t("i",{staticClass:"fa fa-home"}),e._v(" 户籍地 ")]),e._v(" "+e._s(e.personalInfo.domicile)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[t("i",{staticClass:"fa fa-map-marker"}),e._v(" 现居住地 ")]),e._v(" "+e._s(e.personalInfo.currentAddress)+" ")],2)],2),t("el-dialog",{attrs:{title:"个人信息",visible:e.dialogVisible,width:"50%"},on:{"update:visible":function(l){e.dialogVisible=l}}},[t("el-form",{ref:"form",attrs:{size:"mini",rules:e.rules,model:e.personalInfo}},[t("el-row",[t("el-col",{attrs:{span:9,offset:2}},[t("el-form-item",{attrs:{label:"用户名:",prop:"userName"}},[t("el-input",{model:{value:e.personalInfo.userName,callback:function(l){e.$set(e.personalInfo,"userName",l)},expression:"personalInfo.userName"}})],1)],1),t("el-col",{attrs:{span:9,offset:2}},[t("el-form-item",{attrs:{label:"姓名:",prop:"name"}},[t("el-input",{model:{value:e.personalInfo.name,callback:function(l){e.$set(e.personalInfo,"name",l)},expression:"personalInfo.name"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:9,offset:2}},[t("el-form-item",{attrs:{label:"密码:",prop:"password"}},[t("el-input",{attrs:{type:"password"},model:{value:e.personalInfo.password,callback:function(l){e.$set(e.personalInfo,"password",l)},expression:"personalInfo.password"}})],1)],1),t("el-col",{attrs:{span:9,offset:2}},[t("el-form-item",{attrs:{label:"性别:",prop:"sex"}},[t("el-select",{attrs:{size:"mini"},model:{value:e.personalInfo.sex,callback:function(l){e.$set(e.personalInfo,"sex",l)},expression:"personalInfo.sex"}},[t("el-option",{attrs:{label:"男",value:"1"}}),t("el-option",{attrs:{label:"女",value:"0"}})],1)],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:9,offset:2}},[t("el-form-item",{attrs:{label:"身份证号:",prop:"idCardNum"}},[t("el-input",{model:{value:e.personalInfo.idCardNum,callback:function(l){e.$set(e.personalInfo,"idCardNum",l)},expression:"personalInfo.idCardNum"}})],1)],1),t("el-col",{attrs:{span:9,offset:2}},[t("el-form-item",{attrs:{label:"学号:",prop:"studentId"}},[t("el-input",{model:{value:e.personalInfo.studentId,callback:function(l){e.$set(e.personalInfo,"studentId",l)},expression:"personalInfo.studentId"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:9,offset:2}},[t("el-form-item",{attrs:{label:"学院:",prop:"college"}},[t("el-input",{model:{value:e.personalInfo.college,callback:function(l){e.$set(e.personalInfo,"college",l)},expression:"personalInfo.college"}})],1)],1),t("el-col",{attrs:{span:9,offset:2}},[t("el-form-item",{attrs:{label:"专业:",prop:"professional"}},[t("el-input",{model:{value:e.personalInfo.professional,callback:function(l){e.$set(e.personalInfo,"professional",l)},expression:"personalInfo.professional"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:9,offset:2}},[t("el-form-item",{attrs:{label:"班级:",prop:"className"}},[t("el-input",{model:{value:e.personalInfo.className,callback:function(l){e.$set(e.personalInfo,"className",l)},expression:"personalInfo.className"}})],1)],1),t("el-col",{attrs:{span:9,offset:2}},[t("el-form-item",{attrs:{label:"联系方式:",prop:"telephone"}},[t("el-input",{model:{value:e.personalInfo.telephone,callback:function(l){e.$set(e.personalInfo,"telephone",l)},expression:"personalInfo.telephone"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:9,offset:2}},[t("el-form-item",{attrs:{label:"政治面貌:",prop:"politicalStatus"}},[t("el-select",{attrs:{"value-key":""},model:{value:e.personalInfo.politicalStatus,callback:function(l){e.$set(e.personalInfo,"politicalStatus",l)},expression:"personalInfo.politicalStatus"}},[t("el-option",{attrs:{label:"中共党员",value:"1"}}),t("el-option",{attrs:{label:"中共预备党员",value:"2"}}),t("el-option",{attrs:{label:"共青团员",value:"3"}}),t("el-option",{attrs:{label:"群众",value:"4"}})],1)],1)],1),t("el-col",{attrs:{span:9,offset:2}},[t("el-form-item",{attrs:{label:"年龄:",prop:"age"}},[t("el-input",{model:{value:e.personalInfo.age,callback:function(l){e.$set(e.personalInfo,"age",l)},expression:"personalInfo.age"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:9,offset:2}},[t("el-form-item",{attrs:{label:"任职情况:",prop:"cognition"}},[t("el-select",{model:{value:e.personalInfo.cognition,callback:function(l){e.$set(e.personalInfo,"cognition",l)},expression:"personalInfo.cognition"}},[t("el-option",{attrs:{label:"班长",value:"1"}}),t("el-option",{attrs:{label:"学习委员",value:"2"}}),t("el-option",{attrs:{label:"体育委员",value:"3"}}),t("el-option",{attrs:{label:"生活委员",value:"4"}}),t("el-option",{attrs:{label:"文艺委员",value:"5"}}),t("el-option",{attrs:{label:"寝室长",value:"6"}})],1)],1)],1),t("el-col",{attrs:{span:9,offset:2}},[t("el-form-item",{attrs:{label:"入学时间:",prop:"enterTime"}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.personalInfo.enterTime,callback:function(l){e.$set(e.personalInfo,"enterTime",l)},expression:"personalInfo.enterTime"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:9,offset:2}},[t("el-form-item",{attrs:{label:"父亲联系方式:",prop:"fatherTel"}},[t("el-input",{model:{value:e.personalInfo.fatherTel,callback:function(l){e.$set(e.personalInfo,"fatherTel",l)},expression:"personalInfo.fatherTel"}})],1)],1),t("el-col",{attrs:{span:9,offset:2}},[t("el-form-item",{attrs:{label:"母亲联系方式:",prop:"motherTel"}},[t("el-input",{model:{value:e.personalInfo.motherTel,callback:function(l){e.$set(e.personalInfo,"motherTel",l)},expression:"personalInfo.motherTel"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:9,offset:2}},[t("el-form-item",{attrs:{label:"出生日期:",prop:"birthTime"}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:e.personalInfo.birthTime,callback:function(l){e.$set(e.personalInfo,"birthTime",l)},expression:"personalInfo.birthTime"}})],1)],1),t("el-col",{attrs:{span:9,offset:2}},[t("el-form-item",{attrs:{label:"备注:",prop:"remark"}},[t("el-input",{model:{value:e.personalInfo.remark,callback:function(l){e.$set(e.personalInfo,"remark",l)},expression:"personalInfo.remark"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:9,offset:2}},[t("el-form-item",{attrs:{label:"户籍地:",prop:"domicile"}},[t("el-input",{model:{value:e.personalInfo.domicile,callback:function(l){e.$set(e.personalInfo,"domicile",l)},expression:"personalInfo.domicile"}})],1)],1),t("el-col",{attrs:{span:9,offset:2}},[t("el-form-item",{attrs:{label:"现居住地:",prop:"currentAddress"}},[t("el-input",{model:{value:e.personalInfo.currentAddress,callback:function(l){e.$set(e.personalInfo,"currentAddress",l)},expression:"personalInfo.currentAddress"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:10,offset:8}},[t("div",[t("el-button",{on:{click:function(l){e.dialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.updateUserInfo}},[e._v("确 定")])],1)])],1)],1)],1)],1)},s=[],o=t("b775"),n=(t("5c96"),{name:"PersonalInfo",data:function(){return{rules:{userName:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:4,max:10,message:"长度在 3 到 10 个字符",trigger:"blur"}],name:[{required:!0,message:"请输入姓名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],studentId:[{required:!0,message:"请输入学号",trigger:"blur"},{min:10,max:10,message:"长度为10个字符",trigger:"blur"}]},dialogVisible:!1,personalInfo:{id:"",userId:"",userName:"",password:"",name:"",studentId:"",sexValue:"",sex:"",idCardNum:"",birthTime:"",college:"",professional:"",className:"",telephone:"",politicalStatus:"",politicalStatusValue:"",age:"",cognition:"",cognitionValue:"",enterTime:"",fatherTel:"",motherTel:"",remark:"",currentAddress:"",domicile:""}}},created:function(){this.getPersonalInfo()},methods:{showEditPage:function(){this.dialogVisible=!0,this.getPersonalInfo()},getPersonalInfo:function(){var e=this;Object(o["a"])("/user/getPersonalInfo").then((function(l){l&&(e.personalInfo=l.data)}))},updateUserInfo:function(){var e=this;this.$refs.form.validate((function(l){l&&Object(o["a"])("/user/updatePersonalInfo",e.personalInfo).then((function(l){l?(e.$notify({title:"成功",message:"编辑成功",type:"success"}),e.dialogVisible=!1,e.getPersonalInfo()):(e.$notify.error({title:"失败",message:"新增成功"}),e.dialogVisible=!1,e.getPersonalInfo())}))}))}}}),r=n,i=(t("e1b7"),t("2877")),p=Object(i["a"])(r,a,s,!1,null,"30dad1f4",null);l["default"]=p.exports},"5c05":function(e,l,t){},e1b7:function(e,l,t){"use strict";t("5c05")}}]);
//# sourceMappingURL=chunk-e2176614.5f3d6da9.js.map