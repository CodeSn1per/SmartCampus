(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f45255d"],{"0354":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"search-div"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.recordForm}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{attrs:{size:"small",clearable:"",maxlength:"4"},model:{value:e.recordForm.name,callback:function(t){e.$set(e.recordForm,"name",t)},expression:"recordForm.name"}})],1),a("el-form-item",{staticStyle:{"margin-left":"20px"},attrs:{label:"审批结果"}},[a("el-select",{attrs:{size:"small",clearable:"",placeholder:""},model:{value:e.recordForm.approvalResult,callback:function(t){e.$set(e.recordForm,"approvalResult",t)},expression:"recordForm.approvalResult"}},[a("el-option",{attrs:{label:"批准",value:"1"}}),a("el-option",{attrs:{label:"驳回",value:"0"}})],1)],1),a("el-form-item",[a("el-tooltip",{attrs:{effect:"dark",content:"查询"}},[a("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",size:"small"},on:{click:e.searchList}},[a("i",{staticClass:"fa fa-search"})])],1)],1)],1)],1),a("div",{staticClass:"table-div"},[[a("el-table",{staticStyle:{width:"100%"},attrs:{"header-cell-style":{textAlign:"center"},"cell-style":{textAlign:"center"},data:e.recordList,stripe:""}},[a("el-table-column",{attrs:{type:"index"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"approvalPerson",label:"审批人"}}),a("el-table-column",{attrs:{prop:"approvalResult",label:"审批结果"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{disabled:"","active-value":"1","inactive-value":"0","active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.row.approvalResult,callback:function(a){e.$set(t.row,"approvalResult",a)},expression:"scope.row.approvalResult"}})]}}])}),a("el-table-column",{attrs:{prop:"approvalReason",label:"审批原因"}}),a("el-table-column",{attrs:{prop:"approvalTime",label:"审批时间"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){return e.getDetail(t.row)}}},[e._v("详情 ")]),a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){return e.showEditPage(t.row)}}},[e._v("编辑 ")]),a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){return e.deleteInfo(t.row)}}},[e._v("删除 ")])]}}])})],1)],a("div",{staticStyle:{float:"right"}},[a("el-pagination",{attrs:{"current-page":e.pageParam.pageNum,"page-size":e.pageParam.pageSize,total:e.pageParam.total,background:"",layout:"total, prev, pager, next"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],2),a("el-dialog",{attrs:{title:"审批管理",visible:e.dialogVisible,width:"50%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.record,size:"mini",disabled:e.disabled}},[a("el-row",[a("el-col",{attrs:{span:9,offset:2}},[a("el-form-item",{attrs:{label:"姓名:"}},[a("el-input",{model:{value:e.record.name,callback:function(t){e.$set(e.record,"name",t)},expression:"record.name"}})],1)],1),a("el-col",{attrs:{span:9,offset:2}},[a("el-form-item",{attrs:{label:"审批人:"}},[a("el-input",{attrs:{disabled:""},model:{value:e.record.approvalPersonName,callback:function(t){e.$set(e.record,"approvalPersonName",t)},expression:"record.approvalPersonName"}})],1)],1),a("el-col",{attrs:{span:9,offset:2}},[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0","active-text":"批准","inactive-text":"驳回"},model:{value:e.record.approvalResult,callback:function(t){e.$set(e.record,"approvalResult",t)},expression:"record.approvalResult"}})],1),a("el-col",{attrs:{span:9,offset:2}},[a("el-form-item",{attrs:{label:"审批时间:"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期",disabled:""},model:{value:e.record.approvalTime,callback:function(t){e.$set(e.record,"approvalTime",t)},expression:"record.approvalTime"}})],1)],1),a("el-col",{attrs:{span:20,offset:2}},[a("el-form-item",{attrs:{label:"审批原因:"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.record.approvalReason,callback:function(t){e.$set(e.record,"approvalReason",t)},expression:"record.approvalReason"}})],1)],1),a("el-col",{attrs:{span:10,offset:8}},[e.hasButton?a("div",[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.editRecord}},[e._v("确 定")])],1):e._e()])],1)],1)],1)],1)},o=[],r=a("b775"),i=(a("5c96"),{name:"ApprovalRecord",mounted:function(){this.initList()},data:function(){return{recordList:[],recordForm:{name:"",approvalResult:""},pageParam:{pageNum:1,pageSize:10,total:0},record:{id:"",userId:"",applyNo:"",name:"",approvalPerson:"",approvalResult:"",approvalTime:"",approvalReason:"",approvalPersonName:""},updateRecord:{},dialogVisible:!1,disabled:!0,hasButton:!1,applyNos:{applyNos:""}}},methods:{handleSizeChange:function(e){this.pageParam.pageSize=e,this.initList()},handleCurrentChange:function(e){this.pageParam.pageNum=e,this.initList()},initList:function(){var e=this,t=Object.assign(this.recordForm,this.pageParam);Object(r["a"])("/approvalRecord/getApprovalRecordList",t).then((function(t){t&&(e.recordList=t.data.list,e.pageParam.total=t.data.total)}))},searchList:function(){this.initList()},getDetail:function(e){var t=this;Object(r["a"])("/approvalRecord/getApprovalRecordDetail",e).then((function(e){t.hasButton=!1,t.disabled=!0,t.dialogVisible=!0,t.record=e.data}))},showEditPage:function(e){this.disabled=!1,this.hasButton=!0,Object.assign(this.record,e),this.dialogVisible=!0},editRecord:function(){var e=this;Object(r["a"])("/approvalRecord/editApprovalRecord",this.record).then((function(t){t&&(e.dialogVisible=!1,e.initList(),e.$notify({title:"成功",message:"编辑成功",type:"success"}))}))},deleteInfo:function(e){var t=this;this.$confirm("你将删除这些信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.applyNos.applyNos=e.applyNo,Object(r["a"])("/approvalRecord/deleteApprovalRecord",t.applyNos).then((function(e){e&&t.initList()})),t.$notify({title:"成功",message:"删除成功",type:"success"})})).catch((function(){t.$notify({title:"消息",message:"已取消删除"})}))}}}),s=i,n=(a("4143"),a("2877")),c=Object(n["a"])(s,l,o,!1,null,"ff2560a6",null);t["default"]=c.exports},4143:function(e,t,a){"use strict";a("7daf")},"7daf":function(e,t,a){}}]);
//# sourceMappingURL=chunk-3f45255d.0e5471f1.js.map