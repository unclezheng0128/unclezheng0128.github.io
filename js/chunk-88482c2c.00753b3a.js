(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-88482c2c"],{"4aa7":function(t,a,e){"use strict";var s=e("7d35"),i=e.n(s);i.a},"7d35":function(t,a,e){},8761:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-card",{class:t.customClass,attrs:{shadow:"none"}},[e("div",{staticClass:"my-card-header",attrs:{slot:"header"},slot:"header"},[e("div",{staticClass:"card-header-title"},[t._v("账户预览")]),e("div",{staticClass:"card-header-opts"},[t._t("header-right")],2)]),e("div",{staticClass:"account-info-wrap"},[e("div",{staticClass:"info-sec-1"},[e("i",{staticClass:"iconfont iconqiandai1"}),e("span",[t._v("余额账户")])]),e("div",{staticClass:"info-sec-2"},[e("div",{staticClass:"info-sec-2-item"},[e("zv-price",{attrs:{"text-top":"可用余额（元）"}})],1),e("div",{staticClass:"info-sec-2-item"},[e("zv-price",{attrs:{"custom-class":"style-disable","text-top":"不可用余额（元）"}})],1),t._t("default")],2)])])},i=[],c={name:"AccountInfo",props:{customClass:{default:""}},data:function(){return{}},methods:{}},l=c,o=(e("4aa7"),e("2877")),n=Object(o["a"])(l,s,i,!1,null,"2da3dda4",null);a["a"]=n.exports},cdd5:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"zv-page"},[e("div",{staticClass:"zv-content"},[e("div",{staticClass:"zv-block"},[e("AccountInfo"),e("el-card",{staticClass:"my-col-gutter",attrs:{shadow:"none"}},[e("zv-table",{ref:"dataTable",attrs:{table:t.table}},[e("el-button",{attrs:{slot:"ctrl-button-after",type:"primary"},on:{click:t.doExport},slot:"ctrl-button-after"},[t._v("导出")])],1)],1)],1)])])},i=[],c=e("5636"),l=e("8761"),o={name:"settingBill",mixins:[c["a"]],components:{AccountInfo:l["a"]},data:function(){return{table:{query:{},localColumnsKey:"procedureListTable",autoHeight:!0,searchData:[{type:"dateSection",searchType:"custom",width:"250px",isFirstLoading:!1,modelName:["alarmStartTime","alarmEndTime"]},{type:"select",model:"regionId",placeholder:"业务类型",option:[],width:"160px"},{type:"select",model:"regionId",placeholder:"账户类型",option:[],width:"160px"}],customSearchData:[{title:"异常",type:"input",model:"carId",placeholder:"请输入异常"}],columns:[{title:"入账日期",key:"data1",minWidth:"140"},{title:"用户ID",key:"data2"},{title:"统合服务主体",key:"data3",minWidth:"140"},{title:"业务订单流水号",key:"data4",minWidth:"150"},{title:"商户订单号",key:"data5"},{title:"资金流水号",key:"data6",minWidth:"150"},{title:"业务类型",key:"data7"},{title:"账户余额（元）",fixed:"right",key:"data8",minWidth:"160"}]},mockArr:["2020-06-02 15:30:00","01958254","云账户天津","208052171679457335","--","208052171679457335","打款","981.04"]}},computed:{},methods:{doExport:function(){}}},n=o,d=e("2877"),r=Object(d["a"])(n,s,i,!1,null,null,null);a["default"]=r.exports}}]);