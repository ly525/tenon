(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c9fc1cc4","chunk-011c4367","chunk-0e27bb10","chunk-26ba5806"],{"02f4":function(t,e,n){var r=n("4588"),i=n("be13");t.exports=function(t){return function(e,n){var o,c,a=String(i(e)),s=r(n),u=a.length;return s<0||s>=u?t?"":void 0:(o=a.charCodeAt(s),o<55296||o>56319||s+1===u||(c=a.charCodeAt(s+1))<56320||c>57343?t?a.charAt(s):o:t?a.slice(s,s+2):c-56320+(o-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var r=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"0a49":function(t,e,n){var r=n("9b43"),i=n("626a"),o=n("4bf8"),c=n("9def"),a=n("cd1c");t.exports=function(t,e){var n=1==t,s=2==t,u=3==t,l=4==t,f=6==t,d=5==t||f,p=e||a;return function(e,a,h){for(var v,b,g=o(e),m=i(g),y=r(a,h,3),j=c(m.length),x=0,w=n?p(e,j):s?p(e,0):void 0;j>x;x++)if((d||x in m)&&(v=m[x],b=y(v,x,g),t))if(n)w[x]=b;else if(b)switch(t){case 3:return!0;case 5:return v;case 6:return x;case 2:w.push(v)}else if(l)return!1;return f?-1:u||l?l:w}}},"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},1169:function(t,e,n){var r=n("2d95");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"11e9":function(t,e,n){var r=n("52a7"),i=n("4630"),o=n("6821"),c=n("6a99"),a=n("69a8"),s=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=o(t),e=c(e,!0),s)try{return u(t,e)}catch(n){}if(a(t,e))return i(!r.f.call(t,e),t[e])}},"20d6":function(t,e,n){"use strict";var r=n("5ca1"),i=n("0a49")(6),o="findIndex",c=!0;o in[]&&Array(1)[o]((function(){c=!1})),r(r.P+r.F*c,"Array",{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(o)},"214f":function(t,e,n){"use strict";n("b0c5");var r=n("2aba"),i=n("32e9"),o=n("79e5"),c=n("be13"),a=n("2b4c"),s=n("520a"),u=a("species"),l=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var d=a(t),p=!o((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),h=p?!o((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[u]=function(){return n}),n[d](""),!e})):void 0;if(!p||!h||"replace"===t&&!l||"split"===t&&!f){var v=/./[d],b=n(c,d,""[t],(function(t,e,n,r,i){return e.exec===s?p&&!i?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),g=b[0],m=b[1];r(String.prototype,t,g),i(RegExp.prototype,d,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},"449e":function(t,e,n){"use strict";n("78fd")},"456d":function(t,e,n){var r=n("4bf8"),i=n("0d58");n("5eda")("keys",(function(){return function(t){return i(r(t))}}))},"520a":function(t,e,n){"use strict";var r=n("0bfb"),i=RegExp.prototype.exec,o=String.prototype.replace,c=i,a="lastIndex",s=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[a]||0!==e[a]}(),u=void 0!==/()??/.exec("")[1],l=s||u;l&&(c=function(t){var e,n,c,l,f=this;return u&&(n=new RegExp("^"+f.source+"$(?!\\s)",r.call(f))),s&&(e=f[a]),c=i.call(f,t),s&&c&&(f[a]=f.global?c.index+c[0].length:e),u&&c&&c.length>1&&o.call(c[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(c[l]=void 0)})),c}),t.exports=c},"5eda":function(t,e,n){var r=n("5ca1"),i=n("8378"),o=n("79e5");t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],c={};c[t]=e(n),r(r.S+r.F*o((function(){n(1)})),"Object",c)}},"5f1b":function(t,e,n){"use strict";var r=n("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},7514:function(t,e,n){"use strict";var r=n("5ca1"),i=n("0a49")(5),o="find",c=!0;o in[]&&Array(1)[o]((function(){c=!1})),r(r.P+r.F*c,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(o)},"78fd":function(t,e,n){},"7a5a":function(t,e,n){},"7d5f":function(t,e,n){"use strict";n("83d4")},"7f7f":function(t,e,n){var r=n("86cc").f,i=Function.prototype,o=/^\s*function ([^ (]*)/,c="name";c in i||n("9e1e")&&r(i,c,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},"83d4":function(t,e,n){},"8e6e":function(t,e,n){var r=n("5ca1"),i=n("990b"),o=n("6821"),c=n("11e9"),a=n("f1ae");r(r.S,"Object",{getOwnPropertyDescriptors:function(t){var e,n,r=o(t),s=c.f,u=i(r),l={},f=0;while(u.length>f)n=s(r,e=u[f++]),void 0!==n&&a(l,e,n);return l}})},9093:function(t,e,n){var r=n("ce10"),i=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},"990b":function(t,e,n){var r=n("9093"),i=n("2621"),o=n("cb7c"),c=n("7726").Reflect;t.exports=c&&c.ownKeys||function(t){var e=r.f(o(t)),n=i.f;return n?e.concat(n(t)):e}},"9d64":function(t,e,n){t.exports=n.p+"img/logo.6811d4b7.png"},"9df5":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Dialog",{staticClass:"project-add",attrs:{title:"新建项目",width:"500px","append-to-body":!0,visible:t.currentVisiable},on:{"update:visible":function(e){t.currentVisiable=e}}},[t._v("\n    项目名称：\n    "),n("InputText",{model:{value:t.project.name,callback:function(e){t.$set(t.project,"name",e)},expression:"project.name"}}),t._v(" 项目分辨率：\n    "),n("div",{staticClass:"f f-ai-c"},[n("InputText",{model:{value:t.project.resolution.width,callback:function(e){t.$set(t.project.resolution,"width",e)},expression:"project.resolution.width"}}),t._v(" X\n        "),n("InputText",{model:{value:t.project.resolution.height,callback:function(e){t.$set(t.project.resolution,"height",e)},expression:"project.resolution.height"}})],1),t.edit?t._e():n("ul",{staticClass:"project-template f"},t._l(t.template,(function(e,r){return n("li",{key:r,class:{active:r===t.templateId},on:{click:function(e){t.templateId=r}}},[t._v(t._s(r))])})),0),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("Button",{on:{click:function(e){t.currentVisiable=!1}}},[t._v("取消")]),n("Button",{attrs:{type:"primary"},on:{click:t.confirm}},[t._v("确定")])],1)],1)},i=[],o=(n("8e6e"),n("ac6a"),n("456d"),n("ade3"));function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var s={props:{visiable:Boolean,edit:Boolean,project:Object},data:function(){return{templateId:"2",template:{1:{name:"NestedLayoutContainer",properties:{name:"NestedLayoutContainer",css:{minHeight:"100%"},style:""},children:[],layout:"nestedLayout"},2:{id:"6e04a6dc-47ee-4e2e-952e-1586ecf5fa51",name:"NestedLayoutContainer",properties:{name:"NestedLayoutContainer",css:{minHeight:"100%",padding:""},style:""},children:[{id:"2e32f1df-d33c-4a64-af9a-a0dd9b0ed31b",name:"NestedLayoutContainer",properties:{name:"Start Project",css:{padding:"8px 15px",minHeight:"",height:"50px",lineHeight:"",display:"flex",alignItems:"center"},style:"",title:"Tenon"},children:[{id:"87d4b52c-3efb-46d9-8fd7-b85389d077b1",name:"Text",properties:{name:"Text",css:{fontSize:"2rem",width:"",display:"inline"},style:"",label:"h1",text:"Start Project"},layout:"nestedLayout"}],layout:"nestedLayout"},{id:"f92f1c00-cfb4-4bc3-9783-ea752fc97e9c",name:"NestedLayoutContainer",properties:{name:"所见即所得",css:{padding:"10rem",minHeight:"150px"},style:"",title:"Tenon"},children:[{id:"c25264e3-634a-4cbf-8ae0-98aa6881d285",name:"NestedLayoutContainer",properties:{name:"NestedLayoutContainer",css:{padding:"5rem",minHeight:"150px",textAlign:"center"},style:"",title:"Tenon"},children:[{id:"8a31f19c-2649-4333-bfbd-ba4947191a34",name:"Marquee",properties:{name:"Marquee",css:{fontSize:"3rem",fontWeight:"300",textAlign:"center"},style:"",text:"全可视化操作，所见即所得",duration:8e3},layout:"nestedLayout"},{id:"124bd95d-f61d-4ae0-b5dd-ee4fdec58fd4",name:"Text",properties:{name:"Text",css:{fontSize:"5rem",textAlign:"center",fontWeight:"300"},style:"",label:"h1",text:"what you see is what you get"},layout:"nestedLayout"},{id:"6c27b5f2-4075-431f-ba9f-69da9bd17621",name:"Marquee",properties:{name:"Marquee",css:{fontSize:"3rem",fontWeight:"300"},style:"",text:"内容可配置，页面结构可配置，逻辑可配置",duration:8e3},layout:"nestedLayout"}],layout:"nestedLayout"}],layout:"nestedLayout"}],layout:"nestedLayout"}}}},computed:{currentVisiable:{get:function(){return this.visiable},set:function(t){this.$emit("update:visiable",t)}}},methods:{confirm:function(){var t=this.project;if(!this.edit){var e=this.$uuid();t=a(a({id:e},this.project),{},{components:a({id:e},this.formatComponents(this.template[this.templateId]))})}this.$emit("confirm",t)},formatComponents:function(t){var e=this,n=function t(n){return n.map((function(n){return n.children&&(n.children=t(n.children)),console.log(n),a(a({},n),{},{id:e.$uuid()})}))},r=n(t.children);return a(a({},t),{},{children:r})}}},u=s,l=(n("a8ae"),n("2877")),f=Object(l["a"])(u,r,i,!1,null,null,null);e["default"]=f.exports},a481:function(t,e,n){"use strict";var r=n("cb7c"),i=n("4bf8"),o=n("9def"),c=n("4588"),a=n("0390"),s=n("5f1b"),u=Math.max,l=Math.min,f=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,(function(t,e,n,v){return[function(r,i){var o=t(this),c=void 0==r?void 0:r[e];return void 0!==c?c.call(r,o,i):n.call(String(o),r,i)},function(t,e){var i=v(n,t,this,e);if(i.done)return i.value;var f=r(t),d=String(this),p="function"===typeof e;p||(e=String(e));var g=f.global;if(g){var m=f.unicode;f.lastIndex=0}var y=[];while(1){var j=s(f,d);if(null===j)break;if(y.push(j),!g)break;var x=String(j[0]);""===x&&(f.lastIndex=a(d,o(f.lastIndex),m))}for(var w="",L=0,S=0;S<y.length;S++){j=y[S];for(var P=String(j[0]),O=u(l(c(j.index),d.length),0),C=[],k=1;k<j.length;k++)C.push(h(j[k]));var T=j.groups;if(p){var _=[P].concat(C,O,d);void 0!==T&&_.push(T);var M=String(e.apply(void 0,_))}else M=b(P,d,O,C,T,e);O>=L&&(w+=d.slice(L,O)+M,L=O+P.length)}return w+d.slice(L)}];function b(t,e,r,o,c,a){var s=r+t.length,u=o.length,l=p;return void 0!==c&&(c=i(c),l=d),n.call(a,l,(function(n,i){var a;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(s);case"<":a=c[i.slice(1,-1)];break;default:var l=+i;if(0===l)return n;if(l>u){var d=f(l/10);return 0===d?n:d<=u?void 0===o[d-1]?i.charAt(1):o[d-1]+i.charAt(1):n}a=o[l-1]}return void 0===a?"":a}))}}))},a8ae:function(t,e,n){"use strict";n("7a5a")},ac6a:function(t,e,n){for(var r=n("cadf"),i=n("0d58"),o=n("2aba"),c=n("7726"),a=n("32e9"),s=n("84f2"),u=n("2b4c"),l=u("iterator"),f=u("toStringTag"),d=s.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=i(p),v=0;v<h.length;v++){var b,g=h[v],m=p[g],y=c[g],j=y&&y.prototype;if(j&&(j[l]||a(j,l,d),j[f]||a(j,f,g),s[g]=d,m))for(b in r)j[b]||o(j,b,r[b],!0)}},ade3:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},b0c5:function(t,e,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},cd1c:function(t,e,n){var r=n("e853");t.exports=function(t,e){return new(r(t))(e)}},e241:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"main-layout f f-fd-c"},[t._t("default")],2)},i=[],o={name:"MainLayout"},c=o,a=(n("7d5f"),n("2877")),s=Object(a["a"])(c,r,i,!1,null,null,null);e["a"]=s.exports},e3eb:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("MainLayout",{staticClass:"tenon"},[r("header",{staticClass:"tenon-header f-fs-0 f f-jc-sb"},[r("h1",[r("img",{attrs:{src:n("9d64"),alt:"logo"}}),t._v("\n            Tenon\n        ")]),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/wuyaoxing/tenon",target:"blank",title:"github"}},[r("i",{staticClass:"icon-github"})])])])]),r("div",{staticClass:"tenon-projects f-f-1 f f-fw-w f-ac-fs"},[t._l(t.projects,(function(e){return r("div",{key:e.id,staticClass:"tenon-project-card f f-fd-c f-jc-sb"},[r("div",{staticClass:"tenon-project-title f f-ai-b f-jc-sb"},[r("h2",{staticClass:"ellipsis-line-clamp-3"},[t._v("\n                    "+t._s(e.name)+"\n                ")]),r("Dropdown",{attrs:{trigger:"click",size:"medium"},on:{command:function(n){return t.moreEvent(n,e.id)}}},[r("i",{staticClass:"el-icon-more",attrs:{title:"More"}}),r("DropdownMenu",{staticClass:"tenon-project-more",attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.moreList,(function(e){return r("DropdownItem",{key:e.value,attrs:{command:e.value}},[r("i",{class:"icon-"+e.value,attrs:{title:e.text}}),t._v("\n                            "+t._s(t.$i18n("projects.action."+e.value))+"\n                        ")])})),1)],1)],1),r("div",{staticClass:"tenon-project-action f f-jc-sb"},[r("a",{attrs:{href:t.getProjectLink(e.id).editor}},[t._v("Designer")]),r("a",{attrs:{href:t.getProjectLink(e.id).viewer}},[t._v("Viewer")])])])})),r("div",{staticClass:"tenon-project-add",on:{click:t.addEvent}},[r("i",{staticClass:"el-icon-plus"})])],2),r("ProjectForm",{attrs:{visiable:t.visiable,edit:t.edit,project:t.project},on:{"update:visiable":function(e){t.visiable=e},confirm:t.confirm}})],1)},i=[],o=(n("7f7f"),n("a481"),n("7514"),n("20d6"),n("e241")),c=n("9df5"),a={name:"tenon",components:{MainLayout:o["a"],ProjectForm:c["default"]},data:function(){return{visiable:!1,edit:!1,project:{name:"",resolution:{width:1024,height:1080}},projects:[],moreList:[{text:"Share",value:"share"},{text:"Edit",value:"edit"},{text:"Duplicate",value:"duplicate"},{text:"Remove",value:"delete"}]}},methods:{confirm:function(t){this.edit?this.updateProject(t):this.addProject(t)},addProject:function(t){this.projects.push(t),this.saveProjects(),this.visiable=!1,this.reset()},updateProject:function(t){var e=this.projects.findIndex((function(e){return e.id===t.id}));this.projects.splice(e,1,t),this.saveProjects(),this.visiable=!1,this.edit=!1,this.reset()},reset:function(){this.project={name:"",resolution:{width:1024,height:1080}}},addEvent:function(){this.reset(),this.visiable=!0},editProject:function(t){var e=this.projects.find((function(e){return e.id===t}));this.project=JSON.parse(JSON.stringify(e)),this.edit=!0,this.visiable=!0},removeProject:function(t){var e=this.projects.findIndex((function(e){return e.id===t}));this.projects.splice(e,1),this.saveProjects()},shareProject:function(t){var e=this,n=this.getProjectLink(t).viewer,r="".concat(window.location.origin).concat(window.location.pathname).concat(n).replace(/(\/)\1+/g,"/");this.$copyText(r).then((function(t){console.log(t),e.$Message.success("clipboard")}),(function(t){e.$Message.success("unclipboard"),console.log(t)}))},duplicateProject:function(t){var e=this.projects.find((function(e){return e.id===t})),n=JSON.parse(JSON.stringify(e));n.id=this.$uuid(),n.name="Duplicate ".concat(n.name),this.projects.push(n),this.saveProjects()},moreEvent:function(t,e){switch(t){case"share":this.shareProject(e);break;case"edit":this.editProject(e);break;case"duplicate":this.duplicateProject(e);break;case"delete":this.removeProject(e);break;default:break}},saveProjects:function(){localStorage.setItem("Tenon-projects",JSON.stringify(this.projects)),console.log("Tenon save projects: ",localStorage.getItem("Tenon-projects"))},fetchProjects:function(){var t=localStorage.getItem("Tenon-projects");this.projects=t?JSON.parse(t):[]},getProjectLink:function(t){return{editor:"/tenon/designer#/projects/".concat(t),viewer:"/tenon/viewer#/projects/".concat(t)}}},created:function(){this.fetchProjects()}},s=a,u=(n("449e"),n("2877")),l=Object(u["a"])(s,r,i,!1,null,null,null);e["default"]=l.exports},e853:function(t,e,n){var r=n("d3f4"),i=n("1169"),o=n("2b4c")("species");t.exports=function(t){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)||(e=void 0),r(e)&&(e=e[o],null===e&&(e=void 0))),void 0===e?Array:e}},f1ae:function(t,e,n){"use strict";var r=n("86cc"),i=n("4630");t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}}}]);