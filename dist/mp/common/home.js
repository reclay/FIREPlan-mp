module.exports=function(e,t){e.HTMLElement,e.Element,e.Node,e.localStorage,e.sessionStorage,e.navigator,e.history,e.location,e.performance,e.Image,e.CustomEvent,e.Event,e.requestAnimationFrame,e.cancelAnimationFrame;e.createApp=function(t){function n(e){for(var n,a,o=e[0],i=e[1],u=e[2],c=0,j=[];c<o.length;c++)a=o[c],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&j.push(r[a][0]),r[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);for(d&&d(e);j.length;)j.shift()();return l.push.apply(l,u||[]),s()}function s(){for(var e,t=0;t<l.length;t++){for(var n=l[t],s=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(s=!1)}s&&(l.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={0:0},l=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=e.webpackJsonpcreateApp=e.webpackJsonpcreateApp||[],u=i.push.bind(i);i.push=n,i=i.slice();for(var c=0;c<i.length;c++)n(i[c]);var d=u;return l.push([269,1]),s()}({207:function(e,t,n){var s={"./af":57,"./af.js":57,"./ar":58,"./ar-dz":59,"./ar-dz.js":59,"./ar-kw":60,"./ar-kw.js":60,"./ar-ly":61,"./ar-ly.js":61,"./ar-ma":62,"./ar-ma.js":62,"./ar-sa":63,"./ar-sa.js":63,"./ar-tn":64,"./ar-tn.js":64,"./ar.js":58,"./az":65,"./az.js":65,"./be":66,"./be.js":66,"./bg":67,"./bg.js":67,"./bm":68,"./bm.js":68,"./bn":69,"./bn.js":69,"./bo":70,"./bo.js":70,"./br":71,"./br.js":71,"./bs":72,"./bs.js":72,"./ca":73,"./ca.js":73,"./cs":74,"./cs.js":74,"./cv":75,"./cv.js":75,"./cy":76,"./cy.js":76,"./da":77,"./da.js":77,"./de":78,"./de-at":79,"./de-at.js":79,"./de-ch":80,"./de-ch.js":80,"./de.js":78,"./dv":81,"./dv.js":81,"./el":82,"./el.js":82,"./en-SG":83,"./en-SG.js":83,"./en-au":84,"./en-au.js":84,"./en-ca":85,"./en-ca.js":85,"./en-gb":86,"./en-gb.js":86,"./en-ie":87,"./en-ie.js":87,"./en-il":88,"./en-il.js":88,"./en-nz":89,"./en-nz.js":89,"./eo":90,"./eo.js":90,"./es":91,"./es-do":92,"./es-do.js":92,"./es-us":93,"./es-us.js":93,"./es.js":91,"./et":94,"./et.js":94,"./eu":95,"./eu.js":95,"./fa":96,"./fa.js":96,"./fi":97,"./fi.js":97,"./fo":98,"./fo.js":98,"./fr":99,"./fr-ca":100,"./fr-ca.js":100,"./fr-ch":101,"./fr-ch.js":101,"./fr.js":99,"./fy":102,"./fy.js":102,"./ga":103,"./ga.js":103,"./gd":104,"./gd.js":104,"./gl":105,"./gl.js":105,"./gom-latn":106,"./gom-latn.js":106,"./gu":107,"./gu.js":107,"./he":108,"./he.js":108,"./hi":109,"./hi.js":109,"./hr":110,"./hr.js":110,"./hu":111,"./hu.js":111,"./hy-am":112,"./hy-am.js":112,"./id":113,"./id.js":113,"./is":114,"./is.js":114,"./it":115,"./it-ch":116,"./it-ch.js":116,"./it.js":115,"./ja":117,"./ja.js":117,"./jv":118,"./jv.js":118,"./ka":119,"./ka.js":119,"./kk":120,"./kk.js":120,"./km":121,"./km.js":121,"./kn":122,"./kn.js":122,"./ko":123,"./ko.js":123,"./ku":124,"./ku.js":124,"./ky":125,"./ky.js":125,"./lb":126,"./lb.js":126,"./lo":127,"./lo.js":127,"./lt":128,"./lt.js":128,"./lv":129,"./lv.js":129,"./me":130,"./me.js":130,"./mi":131,"./mi.js":131,"./mk":132,"./mk.js":132,"./ml":133,"./ml.js":133,"./mn":134,"./mn.js":134,"./mr":135,"./mr.js":135,"./ms":136,"./ms-my":137,"./ms-my.js":137,"./ms.js":136,"./mt":138,"./mt.js":138,"./my":139,"./my.js":139,"./nb":140,"./nb.js":140,"./ne":141,"./ne.js":141,"./nl":142,"./nl-be":143,"./nl-be.js":143,"./nl.js":142,"./nn":144,"./nn.js":144,"./pa-in":145,"./pa-in.js":145,"./pl":146,"./pl.js":146,"./pt":147,"./pt-br":148,"./pt-br.js":148,"./pt.js":147,"./ro":149,"./ro.js":149,"./ru":150,"./ru.js":150,"./sd":151,"./sd.js":151,"./se":152,"./se.js":152,"./si":153,"./si.js":153,"./sk":154,"./sk.js":154,"./sl":155,"./sl.js":155,"./sq":156,"./sq.js":156,"./sr":157,"./sr-cyrl":158,"./sr-cyrl.js":158,"./sr.js":157,"./ss":159,"./ss.js":159,"./sv":160,"./sv.js":160,"./sw":161,"./sw.js":161,"./ta":162,"./ta.js":162,"./te":163,"./te.js":163,"./tet":164,"./tet.js":164,"./tg":165,"./tg.js":165,"./th":166,"./th.js":166,"./tl-ph":167,"./tl-ph.js":167,"./tlh":168,"./tlh.js":168,"./tr":169,"./tr.js":169,"./tzl":170,"./tzl.js":170,"./tzm":171,"./tzm-latn":172,"./tzm-latn.js":172,"./tzm.js":171,"./ug-cn":173,"./ug-cn.js":173,"./uk":174,"./uk.js":174,"./ur":175,"./ur.js":175,"./uz":176,"./uz-latn":177,"./uz-latn.js":177,"./uz.js":176,"./vi":178,"./vi.js":178,"./x-pseudo":179,"./x-pseudo.js":179,"./yo":180,"./yo.js":180,"./zh-cn":181,"./zh-cn.js":181,"./zh-hk":182,"./zh-hk.js":182,"./zh-tw":183,"./zh-tw.js":183};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=r,e.exports=a,a.id=207},208:function(e,t,n){"use strict";var s=n(29);n.n(s).a},269:function(e,n,s){"use strict";s.r(n);var a=s(1),r=s(55),l=s(202),o=a.default.extend({name:"App"}),i=s(30),u=Object(i.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)}),[],!1,null,null,null).exports,c=s(53);a.default.use(c.a);var d=new c.a.Store({state:{},actions:{},mutations:{}}),j=s(0),m=s.n(j),f=s(54),h=s.n(f),p={data:function(){return{currentSavings:0,monthPay:5e3,rent:0,consume:0,startDate:"2019-04-01",endDate:"2024-04-01",endDateTen:"2029-04-01",isTen:!0,annualRate:10,showDetail:!0,moment:m.a,monthAccuFund:0,currAccuFund:0}},computed:{monthSavings:function(){return this.monthPay-this.rent-this.consume},innerDate:function(){return this.isTen?this.endDateTen:this.endDate},allSavings:function(){var e=[{date:this.startDate,value:this.currentSavings,accuFund:this.currAccuFund}],t=m()(this.startDate);t=t.add(1,"M");for(var n=m()(this.innerDate).add(1,"d");m.a.max(t,n).format("YYYY-MM-DD")!==t.format("YYYY-MM-DD");){var s=e[e.length-1],a=s.value,r=s.accuFund,l=a*(1+this.monthRate)+this.monthSavings,o=r+this.monthAccuFund;e.push({date:t.format("YYYY-MM-DD"),value:l,accuFund:o}),t=t.add(1,"M")}return e},endSavings:function(){var e=this.allSavings;return h.a.round(e[e.length-1].value,2)},endAccuFund:function(){var e=this.allSavings;return e[e.length-1].accuFund},monthRate:function(){return Math.pow(1+this.annualRate/100,1/12)-1},jobSavings:function(){return this.monthSavings*(this.allSavings.length-1)},originSavings:function(){return this.currentSavings+this.jobSavings},profits:function(){return this.getRoundVal(this.endSavings-this.originSavings)}},methods:{getRoundVal:function(e){return h.a.round(e,2)}}},v=(s(208),Object(i.a)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("el-form",{staticClass:"my-form",attrs:{"label-width":"100px",inline:""}},[n("el-form-item",{attrs:{label:"当前储蓄"}},[n("el-input-number",{attrs:{controls:!1},model:{value:e.currentSavings,callback:function(t){e.currentSavings=t},expression:"currentSavings"}})],1),n("el-form-item",{attrs:{label:"税后月薪"}},[n("el-input-number",{attrs:{controls:!1},model:{value:e.monthPay,callback:function(t){e.monthPay=t},expression:"monthPay"}})],1),n("el-form-item",{attrs:{label:"房租"}},[n("el-input-number",{attrs:{controls:!1},model:{value:e.rent,callback:function(t){e.rent=t},expression:"rent"}})],1),n("el-form-item",{attrs:{label:"消费"}},[n("el-input-number",{attrs:{controls:!1},model:{value:e.consume,callback:function(t){e.consume=t},expression:"consume"}})],1),n("el-form-item",{attrs:{label:"每月储蓄"}},[n("span",[e._v(e._s(e.monthSavings))])]),n("div"),n("el-form-item",{attrs:{label:"十年"}},[n("el-switch",{model:{value:e.isTen,callback:function(t){e.isTen=t},expression:"isTen"}})],1),n("div"),n("el-form-item",{attrs:{label:"开始时间"}},[n("el-date-picker",{attrs:{type:"date"},model:{value:e.startDate,callback:function(t){e.startDate=t},expression:"startDate"}})],1),n("el-form-item",{attrs:{label:"结束时间"}},[e.isTen?n("el-date-picker",{attrs:{type:"date"},model:{value:e.endDateTen,callback:function(t){e.endDateTen=t},expression:"endDateTen"}}):n("el-date-picker",{attrs:{type:"date"},model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}})],1),n("el-form-item",{attrs:{label:"年化 %"}},[n("el-input-number",{attrs:{controls:!1},model:{value:e.annualRate,callback:function(t){e.annualRate=t},expression:"annualRate"}})],1),n("div"),n("el-form-item",{attrs:{label:"到期储蓄"}},[n("span",[e._v(e._s(e.endSavings))])]),n("div")],1),n("el-switch",{attrs:{"inactive-text":"显示详情"},model:{value:e.showDetail,callback:function(t){e.showDetail=t},expression:"showDetail"}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showDetail,expression:"showDetail"}],staticClass:"detail-table"},[n("el-table",{attrs:{data:e.allSavings,height:"300px",size:"mini"}},[n("el-table-column",{attrs:{label:"时间",width:"100px"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("p",[e._v(e._s(e.moment(t.row.date).format("YYYY-MM-DD")))])]}}])}),n("el-table-column",{attrs:{label:"预期资产",width:"100px"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("p",[e._v(e._s(e.getRoundVal(t.row.value)))])]}}])}),n("el-table-column",{attrs:{label:"总和",width:"100px"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("p",[e._v(e._s(e.getRoundVal(t.row.value+t.row.accuFund)))])]}}])})],1)],1)],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("根据储蓄情况、投资时间及年化计算最终资产\n          "),t("br"),this._v("\n          根据结余率计算财务自由时间见："),t("a",{attrs:{href:"./goal.html"}},[this._v("财务自由时间计算器")])])}],!1,null,null,null).exports),b=s(203),g=s.n(b);s.d(n,"default",(function(){return k})),a.default.use(r.a);var y=new r.a({mode:"history",routes:[{path:"/index",name:"index",component:v},{path:"/",redirect:"/index"}]});function k(){var e=t.createElement("div");return e.id="app",t.body.appendChild(e),a.default.config.productionTip=!1,a.default.use(g.a),Object(l.sync)(d,y),new a.default({el:"#app",router:y,store:d,render:function(e){return e(u)}})}},29:function(e,t,n){}}).default};