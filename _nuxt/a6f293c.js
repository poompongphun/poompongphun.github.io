(window.webpackJsonp=window.webpackJsonp||[]).push([[9,6],{393:function(t,e,r){var content=r(402);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("0234f692",content,!0,{sourceMap:!1})},394:function(t,e,r){var content=r(404);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("3527037d",content,!0,{sourceMap:!1})},401:function(t,e,r){"use strict";r(393)},402:function(t,e,r){var n=r(25)(!1);n.push([t.i,'.v-application[data-v-571ad0a2],.v-application [class*=text-][data-v-571ad0a2]{font-family:"Itim",sans-serif!important}.scroll-up[data-v-571ad0a2]{transform:translateY(100px);opacity:0}.scroll-up-enter[data-v-571ad0a2]{transition:transform 1.5s;transform:translateY(0);opacity:1}.slide-left[data-v-571ad0a2]{transform:translateX(100vw);opacity:0}.slide-left-enter[data-v-571ad0a2]{transition:transform 1.5s,box-shadow .2s;transform:translateX(0);opacity:1}.scale-up[data-v-571ad0a2]{transform:scale(0);opacity:0}.scale-up-enter[data-v-571ad0a2]{transition:transform 1s,opacity 1.5s,box-shadow .2s;transform:scale(1);opacity:1}.scale-up-enter[data-v-571ad0a2]:hover{transform:scale(1.03);transition:transform .2s ease-in-out;z-index:1}.section[data-v-571ad0a2]{height:95vh;background-position:50%;background-repeat:no-repeat;background-attachment:fixed;background-size:cover;background-color:grey}.welcome .images[data-v-571ad0a2]{width:400px;right:0}',""]),t.exports=n},403:function(t,e,r){"use strict";r(394)},404:function(t,e,r){var n=r(25)(!1);n.push([t.i,'.v-application,.v-application [class*=text-]{font-family:"Itim",sans-serif!important}.scroll-up{transform:translateY(100px);opacity:0}.scroll-up-enter{transition:transform 1.5s;transform:translateY(0);opacity:1}.slide-left{transform:translateX(100vw);opacity:0}.slide-left-enter{transition:transform 1.5s,box-shadow .2s;transform:translateX(0);opacity:1}.scale-up{transform:scale(0);opacity:0}.scale-up-enter{transition:transform 1s,opacity 1.5s,box-shadow .2s;transform:scale(1);opacity:1}.scale-up-enter:hover{transform:scale(1.03);transition:transform .2s ease-in-out;z-index:1}.custom-slide .v-slide-group__next,.custom-slide .v-slide-group__prev{position:absolute;z-index:1;height:100%;transition:.2s;border-radius:10px}.custom-slide .v-slide-group__next i,.custom-slide .v-slide-group__prev i{color:#fff}.custom-slide .v-slide-group__next{right:0;background-image:linear-gradient(90deg,transparent,rgba(0,0,0,.6))}.custom-slide .v-slide-group__prev{left:0;background-image:linear-gradient(270deg,transparent,rgba(0,0,0,.6))}.custom-slide .v-slide-group__next--disabled,.custom-slide .v-slide-group__prev--disabled{transition:.2s;opacity:0}',""]),t.exports=n},405:function(t,e,r){var content=r(406);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("8f7a87bc",content,!0,{sourceMap:!1})},406:function(t,e,r){var n=r(25)(!1);n.push([t.i,'.v-application,.v-application [class*=text-]{font-family:"Itim",sans-serif!important}.scroll-up{transform:translateY(100px);opacity:0}.scroll-up-enter{transition:transform 1.5s;transform:translateY(0);opacity:1}.slide-left{transform:translateX(100vw);opacity:0}.slide-left-enter{transition:transform 1.5s,box-shadow .2s;transform:translateX(0);opacity:1}.scale-up{transform:scale(0);opacity:0}.scale-up-enter{transition:transform 1s,opacity 1.5s,box-shadow .2s;transform:scale(1);opacity:1}.scale-up-enter:hover{transform:scale(1.03);transition:transform .2s ease-in-out;z-index:1}.v-slide-group{display:flex}.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__next,.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__prev{display:none}.v-slide-group.v-item-group>.v-slide-group__next,.v-slide-group.v-item-group>.v-slide-group__prev{cursor:pointer}.v-slide-item{display:inline-flex;flex:0 1 auto}.v-slide-group__next,.v-slide-group__prev{align-items:center;display:flex;flex:0 1 52px;justify-content:center;min-width:52px}.v-slide-group__content{display:flex;flex:1 0 auto;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-slide-group__wrapper{contain:content;display:flex;flex:1 1 auto;overflow:hidden;touch-action:none}.v-slide-group__next--disabled,.v-slide-group__prev--disabled{pointer-events:none}',""]),t.exports=n},419:function(t,e,r){"use strict";r.r(e);r(54);var n={props:{skills:{type:Array,required:!0}},data:function(){return{isShow:!1,model:null,skillShow:[]}},computed:{size:function(){return this.$vuetify.breakpoint.mdAndUp?"200":this.$vuetify.breakpoint.smAndUp?"175":"150"}},watch:{isShow:function(t){var e=this;if(t)for(var r=function(i){setTimeout((function(){e.skillShow.push(e.skills[i]),setTimeout((function(){e.skillShow[i].show=!0,i===e.skills.length-1&&e.$refs["skill-".concat(i)]&&(e.$refs["skill-".concat(i)][0].$el.classList.value=e.$refs["skill-".concat(i)][0].$el.classList.value+" slide-left-enter")}),60)}),200*i)},i=0;i<this.skills.length;i++)r(i)}},methods:{onIntersect:function(t,e){this.isShow||(this.isShow=t[0].isIntersecting)}}},o=(r(403),r(88)),l=r(113),c=r.n(l),f=r(397),h=r(443),d=r(430),v=r(249),m=(r(11),r(7),r(14),r(18),r(12),r(19),r(2)),w=(r(37),r(23),r(32),r(405),r(366)),x=r(392),y=r(390),_=(r(36),r(21),r(6)),k=r(0),$=k.a.extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default:function(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:function(t){return!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}}},computed:{isMobile:function(){var t=this.$vuetify.breakpoint,e=t.mobile,r=t.width,n=t.name;if(t.mobileBreakpoint===this.mobileBreakpoint)return e;var o=parseInt(this.mobileBreakpoint,10);return!isNaN(o)?r<o:n===this.mobileBreakpoint}},created:function(){this.$attrs.hasOwnProperty("mobile-break-point")&&Object(_.d)("mobile-break-point","mobile-breakpoint",this)}}),O=r(179),C=r(391),S=r(16);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function I(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var A=Object(S.a)(y.a,$).extend({name:"base-slide-group",directives:{Resize:O.a,Touch:C.a},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:function(t){return"boolean"==typeof t||["always","desktop","mobile"].includes(t)}}},data:function(){return{internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return I(I({},y.a.options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext:function(){if(!this.hasAffixes)return!1;var t=this.widths,content=t.content,e=t.wrapper;return content>Math.abs(this.scrollOffset)+e},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(t){this.$refs.content.style.transform="translateX(".concat(-t,"px)")}},beforeUpdate:function(){this.internalItemsLength=(this.$children||[]).length},updated:function(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext:function(){var t=this,slot=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return t.onAffixClick("next")}},key:"next"},[slot])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(t){var e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");var r="".concat(t[0].toUpperCase()).concat(t.slice(1)),n=this["has".concat(r)];return this.showArrows||n?this.$createElement(w.a,{props:{disabled:!n}},this["".concat(e,"Icon")]):null},genPrev:function(){var t=this,slot=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return t.onAffixClick("prev")}},key:"prev"},[slot])},genTransition:function(t){return this.$createElement(x.b,[this.genIcon(t)])},genWrapper:function(){var t=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(e){return t.overflowCheck(e,t.onTouchStart)},move:function(e){return t.overflowCheck(e,t.onTouchMove)},end:function(e){return t.overflowCheck(e,t.onTouchEnd)}}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset:function(t,e,r,n){var o=r?-1:1,l=o*n+("prev"===t?-1:1)*e.wrapper;return o*Math.max(Math.min(l,e.content-e.wrapper),0)},onAffixClick:function(t){this.$emit("click:".concat(t)),this.scrollTo(t)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(t){var content=this.$refs.content;this.startX=this.scrollOffset+t.touchstartX,content.style.setProperty("transition","none"),content.style.setProperty("willChange","transform")},onTouchMove:function(t){this.scrollOffset=this.startX-t.touchmoveX},onTouchEnd:function(){var t=this.$refs,content=t.content,e=t.wrapper,r=content.clientWidth-e.clientWidth;content.style.setProperty("transition",null),content.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-r&&(this.scrollOffset=-r):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=r&&(this.scrollOffset=r)},overflowCheck:function(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView:function(){if(!this.selectedItem&&this.items.length){var t=this.items[this.items.length-1].$el.getBoundingClientRect(),e=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&e.right<t.right||!this.$vuetify.rtl&&e.left>t.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset:function(t,e,r,n){var o=t.clientWidth,l=r?e.content-t.offsetLeft-o:t.offsetLeft;r&&(n=-n);var c=e.wrapper+n,f=o+l,h=.4*o;return l<=n?n=Math.max(l-h,0):c<=f&&(n=Math.min(n-(c-f-h),e.content-e.wrapper)),r?-n:n},calculateCenteredOffset:function(t,e,r){var n=t.offsetLeft,o=t.clientWidth;if(r){var l=e.content-n-o/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,l))}var c=n+o/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,c))},scrollTo:function(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var t=this;window.requestAnimationFrame((function(){var e=t.$refs,content=e.content,r=e.wrapper;t.widths={content:content?content.clientWidth:0,wrapper:r?r.clientWidth:0},t.isOverflowing=t.widths.wrapper+1<t.widths.content,t.scrollIntoView()}))}},render:function(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}}).extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}}),V=r(115),M=k.a.extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(element.data=this._b(element.data||{},element.tag,{class:Object(m.a)({},this.activeClass,this.isActive)}),element):(Object(_.c)("v-item should only contain a single element",this),element)):(Object(_.c)("v-item is missing a default scopedSlot",this),null);var element}}),T=(Object(S.a)(M,Object(V.a)("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),Object(S.a)(M,Object(V.a)("slideGroup")).extend({name:"v-slide-item"})),P=r(433),N=r(395),z=r.n(N),E=r(171),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"intersect",rawName:"v-intersect",value:t.onIntersect,expression:"onIntersect"}],staticClass:"my-10 scroll-up",class:{"scroll-up-enter":t.isShow}},[r("div",{staticClass:"py-5 text-center"},[r("h1",[t._v("\n      "+t._s(t.$t("welcome").skill)+" "),r("v-chip",[t._v(t._s(t.skillShow.length))])],1)]),t._v(" "),r("v-slide-group",{staticClass:"custom-slide background rounded-xl mx-5 pa-1",attrs:{"show-arrows":""},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.skillShow,(function(e,n){return r("v-slide-item",{key:n},[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(o){var l=o.on,c=o.attrs;return[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(o){var f=o.hover;return[r("v-card",t._g(t._b({ref:"skill-"+n,refInFor:!0,staticClass:"my-1 mx-1 pa-5 rounded-xl text-center slide-left",class:{"slide-left-enter":e.show},attrs:{elevation:f?12:0,height:t.size,width:t.size}},"v-card",c,!1),l),[r("v-img",{staticClass:"mx-auto",attrs:{width:"100%",height:"100%",src:e.img,contain:""}})],1)]}}],null,!0)})]}}],null,!0)},[t._v(" "),r("span",[t._v(t._s(e.name))])])],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:f.a,VChip:h.a,VHover:d.a,VImg:v.a,VSlideGroup:A,VSlideItem:T,VTooltip:P.a}),z()(component,{Intersect:E.a})},420:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{backgroundUrl:"/images/code-bg.png"}}},o=(r(401),r(88)),l=r(113),c=r.n(l),f=r(368),h=r(416),d=r(385),v=r(249),m=r(417),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"section",style:{backgroundImage:"url("+t.backgroundUrl+")"}},[r("div",{staticClass:"fill-height welcome",style:{"background-image":t.$vuetify.theme.dark?"linear-gradient(to bottom,rgba(18, 18, 18, 0.6) 70%,rgba(18, 18, 18, 1))":"linear-gradient(to bottom,rgba(255, 255, 255, 0.6) 70%,rgba(255, 255, 255, 1))"}},[r("v-container",{staticClass:"fill-height"},[r("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",md:"9"}},[r("div",{staticClass:"mb-10 text-uppercase",staticStyle:{position:"relative","z-index":"1"}},[r("div",{staticClass:"text-h5 text-sm-h4 text-xl-h3 font-weight-bold"},[t._v("\n              "+t._s(t.$t("welcome").hello)+"!!!\n            ")]),t._v(" "),r("div",{staticClass:"my-5 text-h3 text-sm-h2 text-xl-h1 font-weight-bold"},[t._v("\n              "+t._s(t.$t("welcome").name)+"\n            ")]),t._v(" "),r("div",{staticClass:"text-h5 text-xl-h4 font-weight-bold"},[t._v("\n              "+t._s(t.$t("welcome").student)+"\n            ")])]),t._v(" "),r("v-btn",{attrs:{dark:!t.$vuetify.theme.dark,light:t.$vuetify.theme.dark}},[t._v("\n            "+t._s(t.$t("welcome").buttons.about)+"\n          ")])],1),t._v(" "),t.$vuetify.breakpoint.mdAndUp?r("v-col",{attrs:{cols:"0",md:"3"}},[r("div",{staticClass:"images"},[r("v-img",{style:{right:t.$vuetify.breakpoint.xl?"0px":t.$vuetify.breakpoint.lg?"115px":"190px"},attrs:{width:"100%",src:"https://preview.colorlib.com/theme/satner/img/banner/xhome-right.png.pagespeed.ic.F5fc5uJEZ3.webp"}})],1)]):t._e()],1)],1)],1)])}),[],!1,null,"571ad0a2",null);e.default=component.exports;c()(component,{VBtn:f.a,VCol:h.a,VContainer:d.a,VImg:v.a,VRow:m.a})},421:function(t,e,r){"use strict";r.r(e);r(54);var n={props:{projects:{type:Array,required:!0}},data:function(){return{isShow:!1,projectShow:[]}},computed:{showProject:function(){for(var t=[],e=this.$vuetify.breakpoint.xlAndUp?8:this.$vuetify.breakpoint.mdAndUp?6:4,i=0;i<e;i++)t.push(this.projectShow[i]);return t}},watch:{isShow:function(t){var e=this;t&&function(){for(var t=e.$vuetify.breakpoint.xl?8:e.$vuetify.breakpoint.mdAndUp?6:4,r=e.projects.length>=t?t:e.projects.length,n=function(i){setTimeout((function(){e.projectShow.push(e.projects[i]),setTimeout((function(){e.projectShow[i].show=!0,i===r-1&&(e.$refs["project-".concat(i)][0].$el.classList.value=e.$refs["project-".concat(i)][0].$el.classList.value+" scale-up-enter")}),60)}),200*i)},i=0;i<r;i++)n(i)}()}},methods:{onIntersect:function(t,e){this.isShow||(this.isShow=t[0].isIntersecting)}}},o=r(88),l=r(113),c=r.n(l),f=r(368),h=r(397),d=r(386),v=r(440),m=r(441),w=r(443),x=r(416),y=r(430),_=r(369),k=r(249),$=r(417),O=r(392),C=r(433),S=r(395),j=r.n(S),I=r(171),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"intersect",rawName:"v-intersect",value:t.onIntersect,expression:"onIntersect"}],staticClass:"my-10 scroll-up",class:{"scroll-up-enter":t.isShow}},[r("div",{staticClass:"py-5 text-center"},[r("h1",[t._v("\n      "+t._s(t.$t("welcome").project)+"\n      "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({attrs:{fab:"",icon:"","x-small":"",to:"/project"}},"v-btn",o,!1),n),[r("v-icon",[t._v("mdi-chevron-right")])],1)]}}])},[t._v(" "),r("span",[t._v(t._s(t.$t("welcome").showmore))])])],1)]),t._v(" "),r("v-scroll-y-reverse-transition",[r("v-row",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"mx-2",attrs:{dense:""}},t._l(t.projectShow,(function(e,n){return r("v-col",{key:n,attrs:{cols:"12",sm:"6",md:"4",xl:"3"}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(o){var l=o.hover;return[r("v-card",{ref:"project-"+n,refInFor:!0,staticClass:"rounded-xl scale-up",class:{"scale-up-enter":e.show},attrs:{elevation:l?12:1,to:"/project/"+e.name.split(" ").join("-")}},[r("v-carousel",{attrs:{height:"auto","hide-delimiter-background":"","hide-delimiters":"","next-icon":!1,"prev-icon":!1,cycle:l,interval:"1000"}},t._l(e.img,(function(img,i){return r("v-carousel-item",{key:i},[r("v-img",{staticClass:"align-end",attrs:{"aspect-ratio":16/9,src:img.src}},[r("div",{style:{"background-image":t.$vuetify.theme.dark?"linear-gradient(to bottom,rgba(18, 18, 18, 0) ,rgba(18, 18, 18, 0.8) 80%)":"linear-gradient(to bottom,rgba(255, 255, 255, 0) ,rgba(255, 255, 255, 0.8) 80%)"}},[r("v-card-title",[r("v-chip",{attrs:{light:!t.$vuetify.theme.dark}},[t._v("\n                        "+t._s(e.name)+"\n                        "+t._s(""!==img.name?" : "+img.name:"")+"\n                      ")])],1)],1)])],1)})),1)],1)]}}],null,!0)})],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:f.a,VCard:h.a,VCardTitle:d.b,VCarousel:v.a,VCarouselItem:m.a,VChip:w.a,VCol:x.a,VHover:y.a,VIcon:_.a,VImg:k.a,VRow:$.a,VScrollYReverseTransition:O.c,VTooltip:C.a}),j()(component,{Intersect:I.a})},446:function(t,e,r){"use strict";r.r(e);var n=r(420),o=r(419),l=r(421),c={components:{welcomeSection:n.default,skill:o.default,project:l.default},asyncData:function(t){var e=t.store;return{skills:e.state.skills,projects:e.state.projects}}},f=r(88),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("welcomeSection"),t._v(" "),r("skill",{attrs:{skills:t.skills}}),t._v(" "),r("project",{attrs:{projects:t.projects}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);