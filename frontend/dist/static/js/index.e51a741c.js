(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],d=0,m=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={index:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"0ce6":function(t,e,a){"use strict";var n=a("74d7"),r=a.n(n);r.a},"25a8":function(t,e,a){"use strict";var n=a("ed2b"),r=a.n(n);r.a},"54a7":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",{directives:[{name:"show",rawName:"v-show",value:!t.isHome(),expression:"!isHome()"}],staticClass:"navbar navbar-expand-lg navbar-light bg-light",attrs:{id:"nav"}},[a("router-link",{staticClass:"navbar-brand mb-0 h1",attrs:{to:"/"}},[t._v("しりとり最強さん")])],1),a("router-view",{attrs:{id:"view"}})],1)},o=[],i={name:"App",methods:{isHome:function(){return"/"===this.$route.path}}},s=i,c=(a("034f"),a("2877")),l=Object(c["a"])(s,r,o,!1,null,null,null),u=l.exports,d=a("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"fadein"},[n("img",{staticClass:"logo",attrs:{alt:"ロゴ",src:a("cf05")}}),n("h1",{staticClass:"title"},[t._v("しりとり最強さん")]),n("p",{staticClass:"description"},[t._v("0.1秒で単語を検索することができるサービスです")]),n("div",{staticClass:"link"},[n("router-link",{staticClass:"circle",attrs:{to:"/search"}}),n("span",{staticClass:"circle decorate"},[t._v("検索する")])],1)])])},f=[],p={name:"Home"},h=p,v=(a("e90d"),Object(c["a"])(h,m,f,!1,null,"6c5bc826",null)),g=v.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search"},[a("div",{staticClass:"fadein"},[a("div",{staticClass:"main"},[t.formState.format===t.separated?a("SearchForm",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formState.initial,expression:"formState.initial"}],staticClass:"form-control w-25",attrs:{type:"text",placeholder:"頭文字",id:"first-input"},domProps:{value:t.formState.initial},on:{input:[function(e){e.target.composing||t.$set(t.formState,"initial",e.target.value)},t.onChangeText],keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.clearText(e)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formState.length,expression:"formState.length"}],staticClass:"form-control w-25",attrs:{type:"text",placeholder:"文字数",id:"second-input"},domProps:{value:t.formState.length},on:{input:[function(e){e.target.composing||t.$set(t.formState,"length",e.target.value)},t.onChangeText],keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.clearText(e)}}})]):t._e(),t.formState.format===t.composite?a("SearchForm",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formState.text,expression:"formState.text"}],staticClass:"form-control w-50",attrs:{type:"text",placeholder:"頭文字 + 文字数",id:"first-input"},domProps:{value:t.formState.text},on:{input:[function(e){e.target.composing||t.$set(t.formState,"text",e.target.value)},t.onChangeText],keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.clearText(e)}}})]):t._e(),a("div",{staticClass:"results"},t._l(t.results,(function(e,n){return a("div",{key:n,staticClass:"card p-0"},[a("div",{staticClass:"card-header"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.tail,expression:"result.tail"}],staticClass:"form-control",attrs:{type:"text",placeholder:"語尾",maxlength:"1"},domProps:{value:e.tail},on:{input:[function(a){a.target.composing||t.$set(e,"tail",a.target.value)},function(e){return t.onChangeTail(n)}]}})]),a("ul",{staticClass:"list-group"},t._l(e.words,(function(e,n){return a("li",{key:n,staticClass:"list-group-item"},[t._v(" "+t._s(e)+" ")])})),0)])})),0)],1)]),a("SettingModal")],1)},S=[],w=(a("4160"),a("fb6a"),a("ac1f"),a("466d"),a("159b"),a("5530")),C=a("2f62"),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group"},[a("div",{staticClass:"input-group-prepend"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){return t.$store.commit("toggleModal","setting")}}},[a("i",{staticClass:"fas fa-cog"})])]),t._t("default"),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",on:{click:t.clearText}},[t._v("クリア")])])],2)},k=[],_={name:"SearchForm",data:function(){return{separated:"separated",composite:"composite"}},methods:{clearText:function(){var t=this;switch(this.formState.format){case this.separated:this.formState.initial="",this.formState.length="";break;case this.composite:this.formState.text="";break;default:break}document.getElementById("first-input").focus(),this.$store.commit("setWords",[]),this.results.forEach((function(e,a){return t.$store.commit("setResult",a)}))}},computed:Object(w["a"])({},Object(C["b"])({formState:function(t){return t.formState},results:function(t){return t.results}}))},y=_,$=Object(c["a"])(y,x,k,!1,null,null,null),O=$.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.modalState.setting?a("Modal",{attrs:{title:"設定",mode:"setting"}},[a("form",[a("SettingItem",{attrs:{name:"検索形式"}},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.format,expression:"format"}],staticClass:"form-check-input",attrs:{type:"radio",id:"format-separated",value:"separated"},domProps:{checked:t._q(t.format,"separated")},on:{change:[function(e){t.format="separated"},t.changeFormState]}}),a("label",{staticClass:"form-check-label",attrs:{for:"format-separated"}},[t._v(" 分離モード ")])]),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.format,expression:"format"}],staticClass:"form-check-input",attrs:{type:"radio",id:"format-composite",value:"composite"},domProps:{checked:t._q(t.format,"composite")},on:{change:[function(e){t.format="composite"},t.changeFormState]}}),a("label",{staticClass:"form-check-label",attrs:{for:"format-composite"}},[t._v(" 複合モード ")])])]),a("SettingItem",{staticClass:"form-inline",attrs:{name:"検索結果"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.size,expression:"size"}],staticClass:"custom-select mr-2",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.size=e.target.multiple?a:a[0]},t.changeSize]}},t._l(t.maxSize,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0),a("span",[t._v("列")])]),a("SettingItem",{attrs:{name:"単語の種類"}},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.wordKind,expression:"wordKind"}],staticClass:"form-check-input",attrs:{type:"radio",id:"word-default",value:"default"},domProps:{checked:t._q(t.wordKind,"default")},on:{change:[function(e){t.wordKind="default"},t.changeWordKind]}}),a("label",{staticClass:"form-check-label",attrs:{for:"word-default"}},[t._v(" デフォルト ")])]),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.wordKind,expression:"wordKind"}],staticClass:"form-check-input",attrs:{type:"radio",id:"word-clear",value:"simple"},domProps:{checked:t._q(t.wordKind,"simple")},on:{change:[function(e){t.wordKind="simple"},t.changeWordKind]}}),a("label",{staticClass:"form-check-label",attrs:{for:"word-clear"}},[t._v(" シンプル ")])])]),a("SettingItem",{attrs:{name:"エンターキー"}},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.enterAction,expression:"enterAction"}],staticClass:"form-check-input",attrs:{type:"radio",id:"enter-default",value:"default"},domProps:{checked:t._q(t.enterAction,"default")},on:{change:[function(e){t.enterAction="default"},t.changeEnterAction]}}),a("label",{staticClass:"form-check-label",attrs:{for:"enter-default"}},[t._v(" デフォルト ")])]),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.enterAction,expression:"enterAction"}],staticClass:"form-check-input",attrs:{type:"radio",id:"enter-clear",value:"clear"},domProps:{checked:t._q(t.enterAction,"clear")},on:{change:[function(e){t.enterAction="clear"},t.changeEnterAction]}}),a("label",{staticClass:"form-check-label",attrs:{for:"enter-clear"}},[t._v(" 入力クリア ")])])])],1)]):t._e()},A=[],E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"modal",on:{click:function(e){return e.target!==e.currentTarget?null:t.$store.commit("toggleModal",t.mode)}}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content",class:t.mode},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v(t._s(t.title))]),a("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){return t.$store.commit("toggleModal",t.mode)}}},[a("span",[t._v("×")])])]),a("div",{staticClass:"modal-body"},[t._t("default")],2)])])]),a("div",{staticClass:"modal-backdrop show"})])},T=[],K={name:"Modal",props:{title:String,mode:String}},P=K,M=(a("25a8"),Object(c["a"])(P,E,T,!1,null,"a56a78c4",null)),z=M.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("fieldset",{staticClass:"form-group"},[a("div",{staticClass:"row text-left w-100"},[a("legend",{staticClass:"col-form-label col-5 pt-0"},[t._v(t._s(t.name))]),a("div",{staticClass:"col-5"},[t._t("default")],2)])])},F=[],R={name:"SettingItem",props:{name:String}},I=R,W=Object(c["a"])(I,N,F,!1,null,null,null),q=W.exports;function H(){return window.matchMedia("(max-device-width: 480px)").matches}var B={name:"SettingModal",data:function(){return{format:"",size:0,maxSize:H()?3:6,wordKind:"",enterAction:""}},methods:{changeFormState:function(){this.$store.commit("setFormState",this.format)},changeSize:function(){this.$store.commit("setResultSize",this.size)},changeWordKind:function(){var t=this,e={key:"wordKind",value:this.wordKind};this.$store.commit("setOption",e),this.results.forEach((function(e,a){return t.$store.commit("setResult",a)}))},changeEnterAction:function(){var t={key:"enterAction",value:this.enterAction};this.$store.commit("setOption",t)}},computed:Object(w["a"])({},Object(C["b"])({formState:function(t){return t.formState},results:function(t){return t.results},modalState:function(t){return t.modalState}})),created:function(){this.format=this.formState.format,this.size=this.results.length,this.wordKind=this.$store.state.option.wordKind,this.enterAction=this.$store.state.option.enterAction},components:{Modal:z,SettingItem:q}},J=B,V=(a("986a"),a("e4cb"),Object(c["a"])(J,j,A,!1,null,"ea470a2e",null)),D=V.exports,G=a("bc3a").create(),L={name:"Search",data:function(){return{separated:"separated",composite:"composite"}},methods:{isValidSeparatedText:function(t,e){var a=/^[aiueon]$/,n=/^[kstnhmyrwgzjdhpbv][aiueo]$/,r=/^[ぁ-んゔ]$/,o=/^[1-9][0-9]*$/,i=/^[１-９][０-９]*$/;return!(!(a.test(t)||n.test(t)||r.test(t))||!o.test(e)&&!i.test(e))},getSeparatedText:function(t){var e="",a="",n=/^[^0-9０-９]+/,r=t.match(n);return null===r||(e=r[0],a=t.slice(e.length)),{initial:e,length:a}},onChangeText:function(){var t=this,e=function(){switch(t.formState.format){case t.separated:return t.formState;case t.composite:return t.getSeparatedText(t.formState.text);default:return{initial:"",length:""}}}(),a=e.initial,n=e.length;this.isValidSeparatedText(a,n)?G.get("/api/search",{params:{initial:a,length:n}}).then((function(e){t.$store.commit("setWords",e.data),t.results.forEach((function(e,a){return t.$store.commit("setResult",a)}))})).catch((function(){})):(this.$store.commit("setWords",[]),this.results.forEach((function(e,a){return t.$store.commit("setResult",a)})))},onChangeTail:function(t){this.$store.commit("setResult",t)},clearText:function(){var t=this;if("clear"===this.enterAction){switch(this.formState.format){case this.separated:this.formState.initial="",this.formState.length="";break;case this.composite:this.formState.text="";break;default:break}document.getElementById("first-input").focus(),this.$store.commit("setWords",[]),this.results.forEach((function(e,a){return t.$store.commit("setResult",a)}))}}},computed:Object(w["a"])({},Object(C["b"])({formState:function(t){return t.formState},enterAction:function(t){return t.option.enterAction},results:function(t){return t.results}})),components:{SearchForm:O,SettingModal:D}},Q=L,U=(a("0ce6"),Object(c["a"])(Q,b,S,!1,null,"6d415bc4",null)),X=U.exports;n["a"].use(d["a"]);var Y=[{path:"/",name:"Home",component:g},{path:"/search",name:"Search",component:X}],Z=new d["a"]({mode:"history",base:"/",routes:Y}),tt=Z;a("99af"),a("cb29"),a("4de4"),a("d81d");n["a"].use(C["a"]);var et="separated",at="composite";function nt(t){switch(t){case et:return{format:t,initial:"",length:""};case at:return{format:t,text:""};default:return{format:""}}}function rt(){return window.matchMedia("(max-device-width: 480px)").matches}function ot(t,e){var a=Array(e).fill().map((function(){return{tail:"",words:[]}}));return t.concat(a).slice(0,e)}function it(t,e,a){var n=/[が-ござ-ぞだ-どば-ぼぱ-ぽゔぁ-ぉゃ-ょっ]/,r=""===e?t:t.filter((function(t){return t.slice(-1)===e}));if("simple"===a){var o=""===e?100:-1,i=r.filter((function(t){return!n.test(t.slice(1,o))}));r=0===i.length?r:i}return r}var st=new C["a"].Store({state:{words:[],formState:nt(et),results:ot([],rt()?1:3),option:{enterAction:"default",wordKind:"default"},modalState:{setting:!1}},mutations:{toggleModal:function(t,e){t.modalState[e]=!t.modalState[e]},setOption:function(t,e){var a=e.key,n=e.value;t.option[a]=n},setFormState:function(t,e){t.formState=nt(e)},setResultSize:function(t,e){t.results=ot(t.results,e)},setWords:function(t,e){t.words=e},setResult:function(t,e){var a=t.results[e],n=it(t.words,a.tail,t.option.wordKind);a.words=n.sort((function(){return Math.random()-.5})).slice(0,100)}},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:tt,store:st,render:function(t){return t(u)}}).$mount("#app")},"74d7":function(t,e,a){},"7e64":function(t,e,a){},"85ec":function(t,e,a){},"986a":function(t,e,a){"use strict";var n=a("ff97"),r=a.n(n);r.a},cf05:function(t,e,a){t.exports=a.p+"static/img/logo.17ce81a7.png"},e4cb:function(t,e,a){"use strict";var n=a("7e64"),r=a.n(n);r.a},e90d:function(t,e,a){"use strict";var n=a("54a7"),r=a.n(n);r.a},ed2b:function(t,e,a){},ff97:function(t,e,a){}});
//# sourceMappingURL=index.e51a741c.js.map