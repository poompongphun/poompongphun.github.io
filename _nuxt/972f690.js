(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{393:function(t,e,n){var content=n(402);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("0234f692",content,!0,{sourceMap:!1})},401:function(t,e,n){"use strict";n(393)},402:function(t,e,n){var r=n(25)(!1);r.push([t.i,'.v-application[data-v-571ad0a2],.v-application [class*=text-][data-v-571ad0a2]{font-family:"Itim",sans-serif!important}.scroll-up[data-v-571ad0a2]{transform:translateY(100px);opacity:0}.scroll-up-enter[data-v-571ad0a2]{transition:transform 1.5s;transform:translateY(0);opacity:1}.slide-left[data-v-571ad0a2]{transform:translateX(100vw);opacity:0}.slide-left-enter[data-v-571ad0a2]{transition:transform 1.5s,box-shadow .2s;transform:translateX(0);opacity:1}.scale-up[data-v-571ad0a2]{transform:scale(0);opacity:0}.scale-up-enter[data-v-571ad0a2]{transition:transform 1s,opacity 1.5s,box-shadow .2s;transform:scale(1);opacity:1}.scale-up-enter[data-v-571ad0a2]:hover{transform:scale(1.03);transition:transform .2s ease-in-out}.section[data-v-571ad0a2]{height:95vh;background-position:50%;background-repeat:no-repeat;background-attachment:fixed;background-size:cover;background-color:grey}.welcome .images[data-v-571ad0a2]{width:400px;right:0}',""]),t.exports=r},416:function(t,e,n){"use strict";n(7),n(14),n(18),n(19);var r=n(2),o=(n(36),n(11),n(30),n(64),n(252),n(13),n(29),n(253),n(254),n(255),n(256),n(257),n(258),n(259),n(260),n(261),n(262),n(263),n(264),n(265),n(31),n(37),n(12),n(65),n(251),n(0)),c=n(114),l=n(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],y=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=v.reduce((function(t,e){return t["offset"+Object(l.s)(e)]={type:[String,Number],default:null},t}),{}),h=v.reduce((function(t,e){return t["order"+Object(l.s)(e)]={type:[String,Number],default:null},t}),{}),O={col:Object.keys(y),offset:Object.keys(m),order:Object.keys(h)};function j(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},y),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},h),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=w.get(l);return d||function(){var t,e;for(e in d=[],O)O[e].forEach((function(t){var r=n[t],o=j(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),w.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),o)}})},417:function(t,e,n){"use strict";n(7),n(14),n(18),n(19);var r=n(2),o=(n(37),n(48),n(23),n(11),n(30),n(64),n(252),n(13),n(29),n(253),n(254),n(255),n(256),n(257),n(258),n(259),n(260),n(261),n(262),n(263),n(264),n(265),n(31),n(12),n(251),n(0)),c=n(114),l=n(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],y=["start","end","center"];function m(t,e){return v.reduce((function(n,r){return n[t+Object(l.s)(r)]=e(),n}),{})}var h=function(t){return[].concat(y,["baseline","stretch"]).includes(t)},O=m("align",(function(){return{type:String,default:null,validator:h}})),j=function(t){return[].concat(y,["space-between","space-around"]).includes(t)},w=m("justify",(function(){return{type:String,default:null,validator:j}})),x=function(t){return[].concat(y,["space-between","space-around","stretch"]).includes(t)},k=m("alignContent",(function(){return{type:String,default:null,validator:x}})),S={align:Object.keys(O),justify:Object.keys(w),alignContent:Object.keys(k)},C={align:"align",justify:"justify",alignContent:"align-content"};function _(t,e,n){var r=C[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var P=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},O),{},{justify:{type:String,default:null,validator:j}},w),{},{alignContent:{type:String,default:null,validator:x}},k),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var d=P.get(l);return d||function(){var t,e;for(e in d=[],S)S[e].forEach((function(t){var r=n[t],o=_(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),P.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},420:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{backgroundUrl:"/images/code-bg.png"}}},o=(n(401),n(88)),c=n(113),l=n.n(c),f=n(368),d=n(416),v=n(385),y=n(249),m=n(417),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section",style:{backgroundImage:"url("+t.backgroundUrl+")"}},[n("div",{staticClass:"fill-height welcome",style:{"background-image":t.$vuetify.theme.dark?"linear-gradient(to bottom,rgba(18, 18, 18, 0.6) 70%,rgba(18, 18, 18, 1))":"linear-gradient(to bottom,rgba(255, 255, 255, 0.6) 70%,rgba(255, 255, 255, 1))"}},[n("v-container",{staticClass:"fill-height"},[n("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"9"}},[n("div",{staticClass:"mb-10 text-uppercase",staticStyle:{position:"relative","z-index":"1"}},[n("div",{staticClass:"text-h5 text-sm-h4 text-xl-h3 font-weight-bold"},[t._v("\n              "+t._s(t.$t("welcome").hello)+"!!!\n            ")]),t._v(" "),n("div",{staticClass:"my-5 text-h3 text-sm-h2 text-xl-h1 font-weight-bold"},[t._v("\n              "+t._s(t.$t("welcome").name)+"\n            ")]),t._v(" "),n("div",{staticClass:"text-h5 text-xl-h4 font-weight-bold"},[t._v("\n              "+t._s(t.$t("welcome").student)+"\n            ")])]),t._v(" "),n("v-btn",{attrs:{dark:!t.$vuetify.theme.dark,light:t.$vuetify.theme.dark}},[t._v("\n            "+t._s(t.$t("welcome").buttons.about)+"\n          ")])],1),t._v(" "),t.$vuetify.breakpoint.mdAndUp?n("v-col",{attrs:{cols:"0",md:"3"}},[n("div",{staticClass:"images"},[n("v-img",{style:{right:t.$vuetify.breakpoint.xl?"0px":t.$vuetify.breakpoint.lg?"115px":"190px"},attrs:{width:"100%",src:"https://preview.colorlib.com/theme/satner/img/banner/xhome-right.png.pagespeed.ic.F5fc5uJEZ3.webp"}})],1)]):t._e()],1)],1)],1)])}),[],!1,null,"571ad0a2",null);e.default=component.exports;l()(component,{VBtn:f.a,VCol:d.a,VContainer:v.a,VImg:y.a,VRow:m.a})}}]);