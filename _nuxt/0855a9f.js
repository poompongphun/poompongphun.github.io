(window.webpackJsonp=window.webpackJsonp||[]).push([[10,7],{390:function(t,e,o){var content=o(405);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(26).default)("236ea40c",content,!0,{sourceMap:!1})},404:function(t,e,o){"use strict";o(390)},405:function(t,e,o){var n=o(25)(!1);n.push([t.i,'.v-application,.v-application [class*=text-]{font-family:"Itim",sans-serif!important}.scroll-up{transform:translateY(100px);opacity:0}.scroll-up-enter{transition:transform 1.5s;transform:translateY(0);opacity:1}.slide-left{transform:translateX(100vw);opacity:0}.slide-left-enter{transition:transform 1.5s,box-shadow .2s;transform:translateX(0);opacity:1}.scale-up{transform:scale(0);opacity:0}.scale-up-enter{transition:transform 1s,opacity 1.5s,box-shadow .2s;transform:scale(1);opacity:1}.scale-up-enter:hover{transform:scale(1.03);transition:transform .2s ease-in-out;z-index:1}::-webkit-scrollbar{height:5px;width:5px}::-webkit-scrollbar-thumb{background-color:#868686;border-radius:10px}::-webkit-scrollbar-thumb:hover{background:#797979}.timeline{height:calc(100vh - 250px);overflow:auto}',""]),t.exports=n},407:function(t,e,o){var content=o(420);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(26).default)("11493088",content,!0,{sourceMap:!1})},413:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{dialog:!1,tab:0}},computed:{personalInfo:function(){return"th"===this.$i18n.locale?this.$store.state.me.th.personalInfo:this.$store.state.me.en.personalInfo},myEducation:function(){return"th"===this.$i18n.locale?this.$store.state.me.th.education:this.$store.state.me.en.education}},methods:{openDialog:function(){this.dialog=!0}}},r=(o(404),o(88)),l=o(113),c=o.n(l),f=o(472),d=o(370),v=o(391),m=o(434),h=o(482),x=o(371),_=o(251),w=o(435),y=o(473),k=o(474),$=o(479),C=o(475),V=o(476),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{scrollable:"",transition:"dialog-transition",width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",{staticClass:"pa-4",attrs:{rounded:"xl"}},[o("v-btn",{staticStyle:{"z-index":"1"},attrs:{icon:"",absolute:"",right:"","aria-label":"close"},on:{click:function(e){t.dialog=!1}}},[o("v-icon",[t._v("mdi-close")])],1),t._v(" "),o("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[o("v-tab-item",[o("div",{staticClass:"text-center"},[o("h1",{staticClass:"py-4"},[t._v(t._s(t.$t("welcome").personal))]),t._v(" "),o("v-avatar",{staticClass:"my-3",attrs:{size:"150",color:"grey"}},[o("v-img",{attrs:{src:"https://www.blexar.com/avatar.png",alt:"alt"}})],1),t._v(" "),o("v-row",{attrs:{align:"center"}},t._l(t.personalInfo,(function(t,i){return o("v-col",{key:i,attrs:{cols:"6"}},[o("v-text-field",{attrs:{label:t.type,value:t.value,readonly:""}})],1)})),1),t._v(" "),o("v-btn",{attrs:{block:"",text:""},on:{click:function(e){t.tab=1}}},[t._v("\n            "+t._s(t.$t("welcome").education)+"\n            "),o("v-icon",{attrs:{right:""}},[t._v("mdi-chevron-double-right")])],1)],1)]),t._v(" "),o("v-tab-item",[o("div",{staticClass:"text-center"},[o("h1",{staticClass:"py-4"},[t._v(t._s(t.$t("welcome").education))]),t._v(" "),o("div",{staticClass:"timeline"},[o("v-timeline",t._l(t.myEducation,(function(e,i){return o("v-timeline-item",{key:i,attrs:{color:e.color,small:"","fill-dot":""},scopedSlots:t._u([{key:"opposite",fn:function(){return[o("span",{class:"font-weight-bold "+e.color+"--text"},[o("h3",[t._v(t._s(e.year))])])]},proxy:!0}],null,!0)},[t._v(" "),o("div",{staticClass:"py-4"},[o("v-avatar",{attrs:{size:"75",color:"white"}},[o("v-img",{attrs:{src:e.image,alt:"alt"}})],1),t._v(" "),o("div",[t._v("\n                    "+t._s(e.name)+"\n                  ")])],1)])})),1)],1),t._v(" "),o("v-btn",{attrs:{block:"",text:""},on:{click:function(e){t.tab=0}}},[o("v-icon",{attrs:{left:""}},[t._v("mdi-chevron-double-left")]),t._v("\n            "+t._s(t.$t("welcome").personal)+"\n          ")],1)],1)])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAvatar:f.a,VBtn:d.a,VCard:v.a,VCol:m.a,VDialog:h.a,VIcon:x.a,VImg:_.a,VRow:w.a,VTabItem:y.a,VTabsItems:k.a,VTextField:$.a,VTimeline:C.a,VTimelineItem:V.a})},419:function(t,e,o){"use strict";o(407)},420:function(t,e,o){var n=o(25)(!1);n.push([t.i,'.v-application[data-v-7f1a2f6a],.v-application [class*=text-][data-v-7f1a2f6a]{font-family:"Itim",sans-serif!important}.scroll-up[data-v-7f1a2f6a]{transform:translateY(100px);opacity:0}.scroll-up-enter[data-v-7f1a2f6a]{transition:transform 1.5s;transform:translateY(0);opacity:1}.slide-left[data-v-7f1a2f6a]{transform:translateX(100vw);opacity:0}.slide-left-enter[data-v-7f1a2f6a]{transition:transform 1.5s,box-shadow .2s;transform:translateX(0);opacity:1}.scale-up[data-v-7f1a2f6a]{transform:scale(0);opacity:0}.scale-up-enter[data-v-7f1a2f6a]{transition:transform 1s,opacity 1.5s,box-shadow .2s;transform:scale(1);opacity:1}.scale-up-enter[data-v-7f1a2f6a]:hover{transform:scale(1.03);transition:transform .2s ease-in-out;z-index:1}[data-v-7f1a2f6a]::-webkit-scrollbar{height:5px;width:5px}[data-v-7f1a2f6a]::-webkit-scrollbar-thumb{background-color:#868686;border-radius:10px}[data-v-7f1a2f6a]::-webkit-scrollbar-thumb:hover{background:#797979}.section[data-v-7f1a2f6a]{height:95vh;background-position:50%;background-repeat:no-repeat;background-attachment:fixed;background-size:cover;background-color:grey}.welcome .images[data-v-7f1a2f6a]{width:400px;right:0}',""]),t.exports=n},436:function(t,e,o){"use strict";o.r(e);var n={components:{aboutme:o(413).default},data:function(){return{backgroundUrl:"/images/code-bg.png"}}},r=(o(419),o(88)),l=o(113),c=o.n(l),f=o(370),d=o(434),v=o(387),m=o(251),h=o(435),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"section",style:{backgroundImage:"url("+t.backgroundUrl+")"}},[o("div",{staticClass:"fill-height welcome",style:{"background-image":t.$vuetify.theme.dark?"linear-gradient(to bottom,rgba(18, 18, 18, 0.6) 70%,rgba(18, 18, 18, 1))":"linear-gradient(to bottom,rgba(255, 255, 255, 0.6) 70%,rgba(255, 255, 255, 1))"}},[o("v-container",{staticClass:"fill-height"},[o("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[o("v-col",{attrs:{cols:"12",md:"9"}},[o("div",{staticClass:"mb-10 text-uppercase",staticStyle:{position:"relative","z-index":"1"}},[o("div",{staticClass:"text-h5 text-sm-h4 text-xl-h3 font-weight-bold"},[t._v("\n              "+t._s(t.$t("welcome").hello)+"!!!\n            ")]),t._v(" "),o("div",{staticClass:"my-5 text-h3 text-sm-h2 text-xl-h1 font-weight-bold"},[t._v("\n              "+t._s(t.$t("welcome").name)+"\n              "+t._s("th"===t.$i18n.locale?t.$store.state.me.th.name:t.$store.state.me.en.name)+"\n            ")]),t._v(" "),o("div",{staticClass:"text-h5 text-xl-h4 font-weight-bold"},[t._v("\n              "+t._s(t.$t("welcome").student)+"\n              "+t._s("th"===t.$i18n.locale?t.$store.state.me.th.career:t.$store.state.me.en.career)+"\n            ")])]),t._v(" "),o("v-btn",{attrs:{dark:!t.$vuetify.theme.dark,light:t.$vuetify.theme.dark},on:{click:function(e){return t.$refs.aboutMe.openDialog()}}},[t._v("\n            "+t._s(t.$t("welcome").buttons.more)+"\n          ")]),t._v(" "),o("aboutme",{ref:"aboutMe"})],1),t._v(" "),t.$vuetify.breakpoint.mdAndUp?o("v-col",{attrs:{cols:"0",md:"3"}},[o("div",{staticClass:"images"},[o("v-img",{style:{right:t.$vuetify.breakpoint.xl?"0px":t.$vuetify.breakpoint.lg?"115px":"190px"},attrs:{width:"100%",src:"https://preview.colorlib.com/theme/satner/img/banner/xhome-right.png.pagespeed.ic.F5fc5uJEZ3.webp"}})],1)]):t._e()],1)],1)],1)])}),[],!1,null,"7f1a2f6a",null);e.default=component.exports;c()(component,{VBtn:f.a,VCol:d.a,VContainer:v.a,VImg:m.a,VRow:h.a})}}]);