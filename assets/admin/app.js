(function(t){function e(e){for(var a,s,c=e[0],i=e[1],u=e[2],d=0,m=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&m.push(o[s][0]),o[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);l&&l(e);while(m.length)m.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="../../assets/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=i;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"1ce7":function(t,e,n){},"1e4f":function(t,e,n){"use strict";n("e904")},"246b":function(t,e,n){"use strict";n("c58a")},"39af":function(t,e,n){"use strict";n("dbca")},"44b5":function(t,e,n){},"45e7":function(t,e,n){"use strict";n("7ea7")},"4b42":function(t,e,n){},"4f2d":function(t,e,n){"use strict";n("d70a")},"557a":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"dm-documents"}},[n("router-view"),n("dm-notice",{attrs:{showMe:t.showMessage},on:{cancel:t.clearMessage}},[t._v(t._s(t.message))])],1)},r=[],s=n("2f62"),c={name:"app",beforeMount:function(){this.$store.commit("SET_CATEGORIES",window.dm_documents.categories||[]),this.$store.commit("SET_ICONS",window.dm_documents.icons||{}),this.$store.commit("SET_CATEGORY",window.dm_documents.empty.category||{}),this.$store.commit("SET_DOCUMENT",window.dm_documents.empty.document||{}),this.$store.commit("SET_STATUS",window.dm_documents.status||{})},methods:{clearMessage:function(){this.$store.commit("SHOW_MESSAGE",!1),this.$store.commit("SET_MESSAGE","")}},computed:Object(s["c"])(["message","showMessage"])},i=c,u=(n("034f"),n("2877")),l=Object(u["a"])(i,o,r,!1,null,null,null),d=l.exports,m=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("dm-left-sidebar"),n("dm-content"),n("dm-right-sidebar"),n("dm-modal-category"),n("dm-modal-document"),n("dm-modal-shortcode")],1)},v=[],p=(n("4de4"),n("5530")),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"dm-left-sidebar"},[n("div",{staticClass:"dm-stick-top"},[n("dm-button",{attrs:{label:"Categoria",icon:"folder-closed-plus"},on:{click:t.newCategory}}),t.categories.length?n("dm-button",{attrs:{label:"Documento",icon:"file-plus"},on:{click:t.newDocument}}):t._e()],1),n("div",{staticClass:"dm-root-dropzone",attrs:{title:"Arreste as categorias para move para raiz",dropzone:""},on:{drop:t.handlerDropItem,dragenter:t.handlerDragEnter,dragleave:t.handlerDragLeave,dragover:function(t){t.preventDefault()}}}),n("div",{staticClass:"dm-wrap-list"},[t._l(t.categories,(function(t,e){return[n("dm-sidebar-category",{key:e,attrs:{category:t}})]}))],2)])},g=[],b={data:function(){return{dragEnter:!1}},methods:Object(p["a"])({handlerDropItem:function(t){t.target.classList.remove("dragenter");var e=t.dataTransfer.getData("Type"),n=t.dataTransfer.getData("ID");if("category"==e){var a=this.categories.filter((function(t){return t.ID==n}))[0];this.$store.dispatch("saveCategory",Object(p["a"])(Object(p["a"])({},a),{},{titulo:a.titulo_curto,ID_parent:0}))}},handlerDragEnter:function(t){t.target.classList.add("dragenter")},handlerDragLeave:function(t){t.target.classList.remove("dragenter")}},Object(s["b"])(["newCategory","newDocument","saveCategory"])),computed:{categories:function(){return this.$store.state.categories}}},_=b,O=(n("efb2"),Object(u["a"])(_,h,g,!1,null,"09953151",null)),D=O.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"dm-right-sidebar"},[t._m(0),n("div",[n("label",[t._v("Nome do arquivo "),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.term.titulo,expression:"term.titulo"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nome do arquivo"},domProps:{value:t.term.titulo},on:{input:function(e){e.target.composing||t.$set(t.term,"titulo",e.target.value)}}})])]),n("div",[n("label",[t._v("Data "),n("br"),n("date-picker",{staticClass:"form-control",attrs:{lang:t.ptBr,"value-type":t.datePickerConf.format,format:t.datePickerConf.format},model:{value:t.term.data,callback:function(e){t.$set(t.term,"data",e)},expression:"term.data"}})],1)]),n("div",[n("label",[t._v("Ordenar "),n("br"),n("select",{directives:[{name:"model",rawName:"v-model",value:t.order,expression:"order"}],staticClass:"form-control",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.order=e.target.multiple?n:n[0]},t.search]}},[n("option",{attrs:{value:"ID ASC"}},[t._v("Crescente")]),n("option",{attrs:{value:"titulo ASC"}},[t._v("Nome Crescente")]),n("option",{attrs:{value:"data ASC"}},[t._v("Data Crescente")]),n("option",{attrs:{value:"ID DESC"}},[t._v("Decrescente")]),n("option",{attrs:{value:"data DESC"}},[t._v("Data Decrescente")]),n("option",{attrs:{value:"titulo DESC"}},[t._v("Nome Decrescente")])])])]),n("br"),n("div",{staticClass:"dm-cols"},[n("button",{staticClass:"button button-secondary dm-button-block",on:{click:function(e){return e.preventDefault(),t.clear(e)}}},[t._v("Limpar")]),n("button",{staticClass:"button button-primary dm-button-block",on:{click:function(e){return e.preventDefault(),t.search(e)}}},[t._v("Pesquisar")])])])},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dm-stick-top"},[n("strong",[t._v("Pesquisar")])])}],E=(n("b0c0"),n("ac1f"),n("841c"),n("8d7c")),S=n.n(E),w=n("ec45"),T=(n("411c"),{data:function(){return{ptBr:S.a,term:{titulo:"",data:""},order:"ID DESC"}},computed:Object(s["c"])(["datePickerConf"]),methods:{search:function(){var t={name:this.$route.name,params:Object(p["a"])({},this.$route.params),query:Object(p["a"])(Object(p["a"])({},this.$route.query),{},{order:this.order,term:JSON.stringify(this.term)})};this.$router.push(t).catch((function(){window.location.reload()}))},clear:function(){this.term.titulo="",this.term.data="",this.order="ID DESC",this.search()},getFromQuery:function(){var t={titulo:"",data:""};try{t=JSON.parse(this.$route.query.term)}catch(e){t={titulo:"",data:""}}this.term=Object(p["a"])({},t),this.order=this.$route.query.order||"ID DESC"}},watch:{"$route.query.term":function(){this.getFromQuery()}},components:{DatePicker:w["default"]},mounted:function(){this.getFromQuery()}}),j=T,I=(n("4f2d"),Object(u["a"])(j,y,C,!1,null,"d205da8e",null)),$=I.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"dm-stick-top"},[n("strong",[t._v(t._s(t.titulo))]),n("div",[n("dm-pagination")],1)]),t.documents.length?[n("div",{staticClass:"dm-wrap-list"},[t._l(t.documents,(function(t,e){return[n("dm-document",{key:e,attrs:{document:t}})]}))],2)]:t.loadingDocuments?[t._m(0)]:[n("span",{staticClass:"dm-nodocument"},[t._v("NENHUM DOCUMENTO POR AQUI")])]],2)},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"dm-nodocument"},[n("span",{staticClass:"spinner is-active"}),t._v(" CARREGANDO DOCUMENTOS")])}],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.totalPages>1?n("div",{staticClass:"tablenav"},[n("paginate",{attrs:{"page-count":t.totalPages,"container-class":"tablenav-pages","page-class":"tablenav-pages-navspan button","prev-class":"tablenav-pages-navspan button","next-class":"tablenav-pages-navspan button","prev-text":"&lsaquo;","next-text":"&rsaquo;"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1):t._e()},M=[],A=n("8832"),N=n.n(A),P={data:function(){return{page:1}},computed:Object(s["c"])(["totalPages","currentPage"]),watch:{page:function(t){if(t!=this.currentPage){var e=this.$route;this.$router.push(Object(p["a"])(Object(p["a"])({},e),{},{query:Object(p["a"])(Object(p["a"])({},e.query),{},{page:t})}))}},currentPage:function(t){this.page!=t&&(this.page=t)}},components:{Paginate:N.a}},L=P,U=(n("246b"),Object(u["a"])(L,R,M,!1,null,null,null)),G=U.exports,H={components:{dmPagination:G},methods:Object(p["a"])({},Object(s["b"])(["newDocument"])),computed:Object(p["a"])(Object(p["a"])({},Object(s["c"])(["loadingDocuments"])),{},{titulo:function(){return this.$store.state.currentCategory.titulo_curto||"Raiz"},documents:function(){return this.$store.state.documents||[]}})},W=H,q=(n("45e7"),Object(u["a"])(W,k,x,!1,null,"2ccf8264",null)),B=q.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{class:["dm-modal",{show:t.showCategoryModal}]},[n("h3",[t._v(t._s(t.category.ID?"Editando a":"Nova")+" Categoria")]),n("dm-notification-alert",{attrs:{validations:t.validations,messages:t.messages}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.category.ID,expression:"category.ID"}],attrs:{type:"hidden"},domProps:{value:t.category.ID},on:{input:function(e){e.target.composing||t.$set(t.category,"ID",e.target.value)}}}),n("div",[n("label",[t._v("Nome da categoria "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.category.titulo,expression:"category.titulo"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.category.titulo},on:{input:function(e){e.target.composing||t.$set(t.category,"titulo",e.target.value)}}})])]),n("div",[n("label",[t._v("Categoria pai "),n("br"),n("select",{directives:[{name:"model",rawName:"v-model",value:t.category.ID_parent,expression:"category.ID_parent"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.category,"ID_parent",e.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"0"}},[t._v("Raiz")]),t._l(t.listCategories,(function(e,a){return[n("option",{key:a,domProps:{value:e.ID}},[t._v(t._s(e.titulo))])]}))],2)])]),n("div",[n("label",[t._v("Publicado? "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.category.status,expression:"category.status"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.category,"status",e.target.multiple?n:n[0])}}},t._l(t.status,(function(e,a,o){return n("option",{key:o,domProps:{value:a}},[t._v(t._s(e))])})),0)])]),n("div",{staticClass:"dm-cols"},[n("div",[n("button",{staticClass:"button button-secondary dm-button-block",on:{click:function(e){return e.preventDefault(),t.handlerCancel(e)}}},[t._v("Fechar")])]),n("div",[n("button",{staticClass:"button button-primary dm-button-block",on:{click:function(e){return e.preventDefault(),t.handlerSave(e)}}},[t._v("Salvar")])])]),n("dm-loading",{attrs:{show:t.showLoading}})],1),n("div",{staticClass:"dm-backdrop"})])},z=[],F=(n("99af"),n("c975"),n("d81d"),n("2909")),J={data:function(){return{showLoading:!1,messages:{},validations:{}}},computed:Object(p["a"])(Object(p["a"])({},Object(s["c"])(["categories","category","showCategoryModal","status"])),{},{listCategories:function(){var t=this.getExcludeCats(this.category.ID);return this.categories.filter((function(e){return-1==t.indexOf(e.ID)}))}}),methods:{getExcludeCats:function(t){var e=this,n=[];return t&&(n.push(t),this.categories.map((function(a){t==a.ID_parent&&(n=[].concat(Object(F["a"])(n),Object(F["a"])(e.getExcludeCats(a.ID))))}))),n},handlerSave:function(){var t=this;this.showLoading=!0,this.$store.dispatch("saveCategory",this.category).then((function(e){t.showLoading=!1,e.messages?t.messages=Object(p["a"])({},e.messages):t.messages={},e.validations?t.validations=Object(p["a"])({},e.validations):t.validations={}}))},handlerCancel:function(){this.$store.commit("SHOW_CATEGORY_MODAL",!1),this.validations={},this.messages={}}}},Q=J,K=(n("39af"),Object(u["a"])(Q,Y,z,!1,null,"014f08b0",null)),X=K.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{class:["dm-modal",{show:t.showShortcodeModal}]},[t._m(0),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.shortcode,expression:"shortcode"}],staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:t.shortcode},on:{click:function(t){return t.target.select()},input:function(e){e.target.composing||(t.shortcode=e.target.value)}}}),n("br")]),n("div",[n("button",{staticClass:"button button-secondary dm-button-block",on:{click:function(e){return e.preventDefault(),t.handlerCancel(e)}}},[t._v("Fechar")])])]),n("div",{staticClass:"dm-backdrop"})])},Z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h4",[t._v("Copie o código e cole em uma página para mostrar este item")])])}],tt={computed:Object(s["c"])(["shortcode","showShortcodeModal"]),methods:{handlerCancel:function(){this.$store.commit("SHOW_SHORTCODE_MODAL",!1)}}},et=tt,nt=Object(u["a"])(et,V,Z,!1,null,null,null),at=nt.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{class:["dm-modal",{show:t.showDocumentModal}]},[n("h3",[t._v(t._s(t.document.ID?"Editando a":"Novo")+" Documento")]),n("dm-notification-alert",{attrs:{validations:t.validations,messages:t.messages}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.document.ID,expression:"document.ID"}],attrs:{type:"hidden"},domProps:{value:t.document.ID},on:{input:function(e){e.target.composing||t.$set(t.document,"ID",e.target.value)}}}),n("div",{staticClass:"dm-flex"},[n("div",[n("a",{staticClass:"dm-button-dropdown",attrs:{href:"#",title:"Clique para alterar a ícone"},on:{click:function(e){return e.preventDefault(),t.toggleDropdown(e)}}},[n("dm-icon",{attrs:{icon:t.document.icon}})],1),n("div",{ref:"dropdownIcon",staticClass:"dm-dropdown"},t._l(t.sanitize_icons,(function(e,a){return n("a",{key:a,attrs:{href:""},on:{click:function(e){return e.preventDefault(),function(e){return t.setIcon(a)}()}}},[n("dm-icon",{attrs:{icon:a}})],1)})),0)]),n("label",{staticStyle:{flex:"100%","margin-right":"10px"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.document.link,expression:"document.link"}],staticClass:"form-control",attrs:{type:"text",title:t.document.link,placeholder:"LINK"},domProps:{value:t.document.link},on:{input:function(e){e.target.composing||t.$set(t.document,"link",e.target.value)}}})]),n("div",{staticStyle:{"text-align":"right"}},[n("button",{staticClass:"button button-secondary",on:{click:t.getFromWPMedia}},[t._v(" Arquivo local ")])])]),n("div",{staticClass:"dm-flex"},[n("label",[t._v("Nome"),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.document.titulo,expression:"document.titulo"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nome"},domProps:{value:t.document.titulo},on:{input:function(e){e.target.composing||t.$set(t.document,"titulo",e.target.value)}}})])]),n("div",[n("label",[t._v("Categoria "),n("br"),n("select",{directives:[{name:"model",rawName:"v-model",value:t.document.ID_category,expression:"document.ID_category"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.document,"ID_category",e.target.multiple?n:n[0])}}},[t._l(t.categories,(function(e,a){return[n("option",{key:a,domProps:{value:e.ID}},[t._v(t._s(e.titulo))])]}))],2)])]),n("div",[n("label",[t._v("Descrição "),n("br"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.document.descricao,expression:"document.descricao"}],staticClass:"form-control",domProps:{value:t.document.descricao},on:{input:function(e){e.target.composing||t.$set(t.document,"descricao",e.target.value)}}})])]),n("div",{staticClass:"dm-flex"},[n("label",[t._v("Publicado?"),n("br"),n("select",{directives:[{name:"model",rawName:"v-model",value:t.document.status,expression:"document.status"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.document,"status",e.target.multiple?n:n[0])}}},t._l(t.status,(function(e,a,o){return n("option",{key:o,domProps:{value:a}},[t._v(" "+t._s(e)+" ")])})),0)]),n("label",{staticClass:"left: auto;"},[t._v("Data "),n("br"),n("date-picker",{attrs:{lang:t.ptBr,"value-type":t.datePickerConf.format,format:t.datePickerConf.format},model:{value:t.document.data,callback:function(e){t.$set(t.document,"data",e)},expression:"document.data"}})],1)]),n("div",{staticClass:"dm-cols"},[n("div",[n("button",{staticClass:"button button-secondary dm-button-block",on:{click:function(e){return e.preventDefault(),t.handlerCancel(e)}}},[t._v(" Fechar ")])]),n("div",[n("button",{staticClass:"button button-primary dm-button-block",on:{click:function(e){return e.preventDefault(),t.handlerSave(e)}}},[t._v(" Salvar ")])])]),n("dm-loading",{attrs:{show:t.showLoading}})],1),n("div",{staticClass:"dm-backdrop"})])},rt=[],st=(n("b64b"),n("9911"),n("bf19"),{data:function(){return{ptBr:S.a,showLoading:!1,messages:{},validations:{}}},computed:Object(p["a"])(Object(p["a"])({},Object(s["c"])(["document","documents","categories","currentCategory","showDocumentModal","status","icons","datePickerConf"])),{},{sanitize_icons:function(){var t=Object(p["a"])({},this.icons),e=["pen","trash","folder-closed","folder-closed-plus","document-plus"];return Object.keys(t).map((function(n){-1!=e.indexOf(n)&&delete t[n]})),t}}),methods:{handlerSave:function(){var t=this;this.showLoading=!0,this.$store.dispatch("saveDocument",this.document).then((function(e){t.showLoading=!1,e.messages?t.messages=Object(p["a"])({},e.messages):t.messages={},e.validations?t.validations=Object(p["a"])({},e.validations):t.validations={},e.item&&t.$root.$emit("update-documents")}))},handlerCancel:function(){this.$store.commit("SHOW_DOCUMENT_MODAL",!1),this.validations={},this.messages={}},setIcon:function(t){this.document.icon=t,this.toggleDropdown()},toggleDropdown:function(){this.$refs.dropdownIcon.classList.toggle("active")},getFromWPMedia:function(){var t=this,e=window.wp.media({title:"Novo documento",library:{},button:{text:"Adicionar"},multiple:!1}).on("select",(function(){var n=e.state().get("selection").first().toJSON();t.document.icon=Object.keys(t.icons).filter((function(t){return t==n.subtype}))[0]||t.document.icon,t.document.link=n.url,t.document.titulo=n.title})).open()}},components:{DatePicker:w["default"]}}),ct=st,it=(n("899d"),Object(u["a"])(ct,ot,rt,!1,null,"de4dd9c6",null)),ut=it.exports,lt={components:{dmLeftSidebar:D,dmContent:B,dmRightSidebar:$,dmModalCategory:X,dmModalDocument:ut,dmModalShortcode:at},computed:Object(s["c"])(["categories"]),methods:Object(p["a"])(Object(p["a"])({},Object(s["b"])(["getDocuments"])),{},{loadCategory:function(t){var e=t.params.id,n=this.categories.filter((function(t){return t.ID==e}))[0];n||(n=Object(p["a"])({},this.categories[0])),n&&(this.$store.commit("SET_DOCUMENTS",[]),this.getDocuments(Object(p["a"])({ID_category:n.ID,page:t.params.page||1},t.query)),this.$store.commit("SET_CURRENT_CATEGORY",n))}}),mounted:function(){var t=this;this.$root.$on("update-documents",(function(){t.loadCategory(t.$route)}))},beforeRouteEnter:function(t,e,n){n((function(e){e.loadCategory(t)}))},beforeRouteUpdate:function(t,e,n){this.loadCategory(t),n()}},dt=lt,mt=Object(u["a"])(dt,f,v,!1,null,null,null),ft=mt.exports;a["a"].use(m["a"]);var vt=[{path:"/cat/:id",component:ft,name:"category"},{path:"/",component:ft,name:"dashboard"}],pt=new m["a"]({routes:vt,linkActiveClass:"active",linkExactActiveClass:"active"}),ht=pt,gt={icons:{},isLoading:!0,status:{},currentCategory:{},categories:[],shortcode:"",category:{},documents:[],loadingDocuments:!1,document:{},currentDocument:{},totalPages:1,currentPage:1,showCategoryModal:!1,showDocumentModal:!1,showShortcodeModal:!1,showMessage:!1,message:"",datePickerConf:{format:"DD/MM/YYYY"}},bt=(n("a15b"),n("d3b7"),n("96cf"),n("1da1")),_t=n("bc3a"),Ot=n.n(_t),Dt=Object(p["a"])({},window.dm_documents),yt=function(t){return Object.keys(t).map((function(e){return e+"="+encodeURIComponent(t[e])})).join("&")},Ct=function(t,e){var n=t.commit;n("SET_LOADING_DOCUMENTS",!0);var a=yt(e);Ot.a.get("/b/documents/list?".concat(a)).then((function(t){try{var e=t.data,a=e.items,o=e.current_page,r=e.total_pages;n("SET_DOCUMENTS",a),n("SET_CURRENT_PAGE",o),n("SET_TOTAL_PAGES",r)}catch(s){console.error(s)}n("SET_LOADING_DOCUMENTS",!1)})).catch((function(){n("SET_DOCUMENTS",[]),n("SET_CURRENT_PAGE",0),n("SET_TOTAL_PAGES",0),n("SET_LOADING_DOCUMENTS",!1)}))},Et=function(t){var e=t.commit;e("SHOW_CATEGORY_MODAL",!0),e("SET_CATEGORY",Dt.empty.category)},St=function(t){var e=t.commit,n=t.state;e("SHOW_DOCUMENT_MODAL",!0),e("SET_DOCUMENT",Object(p["a"])(Object(p["a"])({},Dt.empty.document),{},{ID_category:n.currentCategory.ID||0}))},wt=function(){var t=Object(bt["a"])(regeneratorRuntime.mark((function t(e,n){var a,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,o=e.dispatch,r="",t.next=4,Ot.a.post("/b/categories/save",n).then((function(t){var e=t.data;r=e,"categories"in e&&a("SET_CATEGORIES",e.categories),n.ID||o("newCategory")}));case 4:return t.abrupt("return",new Promise((function(t){r.messages&&"validation_errors"in r.messages&&(r.validations=r.messages.validation_errors,delete r.messages),t(r)})));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),Tt=function(){var t=Object(bt["a"])(regeneratorRuntime.mark((function t(e,n){var a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.dispatch,o="",t.next=4,Ot.a.post("/b/documents/save",n).then((function(t){var e=t.data;o=e,n.ID||a("newDocument")}));case 4:return t.abrupt("return",new Promise((function(t){o.messages&&"validation_errors"in o.messages&&(o.validations=o.messages.validation_errors,delete o.messages),t(o)})));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),jt=function(){var t=Object(bt["a"])(regeneratorRuntime.mark((function t(e,n){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.next=3,Ot.a.post("/b/categories/delete",n).then((function(t){var e=t.data;try{e.categories&&a("SET_CATEGORIES",e.categories),e.messages&&(a("SET_MESSAGE",e.messages),a("SHOW_MESSAGE",!0))}catch(n){console.log(n)}}));case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),It=function(){var t=Object(bt["a"])(regeneratorRuntime.mark((function t(e,n){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.next=3,Ot.a.post("/b/documents/delete",n).then((function(t){var e=t.data;try{var n=e.items,o=e.current_page,r=e.total_pages;a("SET_DOCUMENTS",n),a("SET_CURRENT_PAGE",o),a("SET_TOTAL_PAGES",r)}catch(s){console.log(s)}}));case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),$t={newDocument:St,newCategory:Et,saveCategory:wt,saveDocument:Tt,getDocuments:Ct,serializeObj:yt,removeCategory:jt,removeDocument:It},kt={SET_ICONS:function(t,e){t.icons=e},SET_STATUS:function(t,e){t.status=e},SET_SHORTCODE:function(t,e){t.shortcode=e},SET_CATEGORIES:function(t,e){t.categories=e},SET_CURRENT_CATEGORY:function(t,e){t.currentCategory=e},SET_CATEGORY:function(t,e){t.category=Object(p["a"])({},e)},SET_DOCUMENTS:function(t,e){t.documents=e},SET_LOADING_DOCUMENTS:function(t,e){t.loadingDocuments=e},SET_DOCUMENT:function(t,e){t.document=Object(p["a"])({},e)},SET_CURRENT_DOCUMENT:function(t,e){t.currentDocument=e},SET_CURRENT_PAGE:function(t,e){t.currentPage=e},SET_TOTAL_PAGES:function(t,e){t.totalPages=e},SHOW_CATEGORY_MODAL:function(t,e){t.showCategoryModal=e},SHOW_DOCUMENT_MODAL:function(t,e){t.showDocumentModal=e},SHOW_SHORTCODE_MODAL:function(t,e){t.showShortcodeModal=e},SHOW_MESSAGE:function(t,e){t.showMessage=e},SET_MESSAGE:function(t,e){t.message=e}};a["a"].use(s["a"]);var xt=new s["a"].Store({state:gt,actions:$t,mutations:kt}),Rt=n("b6d0"),Mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon",style:{backgroundImage:"url('"+t.icons[t.icon]+"')"}})},At=[],Nt={props:["icon"],computed:Object(s["c"])(["icons"])},Pt=Nt,Lt=(n("a351"),Object(u["a"])(Pt,Mt,At,!1,null,null,null)),Ut=Lt.exports,Gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"dm-button",on:{click:function(e){return e.preventDefault(),function(e){return t.$emit("click",e)}(e)}}},[n("dm-icon",{attrs:{icon:t.icon}}),n("span",{staticClass:"label"},[t._v(t._s(t.label))])],1)},Ht=[],Wt={props:{label:{type:String,default:""},icon:{type:String,default:"plus"}}},qt=Wt,Bt=(n("8103"),Object(u["a"])(qt,Gt,Ht,!1,null,"544e7ee8",null)),Yt=Bt.exports,zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"loading"},[n("div",[n("span",{staticClass:"spinner is-active"}),t._v(" "+t._s(t.text))])]):t._e()},Ft=[],Jt={props:{text:{type:String,default:"Salvando..."},show:{type:Boolean,default:!1}}},Qt=Jt,Kt=Object(u["a"])(Qt,zt,Ft,!1,null,null,null),Xt=Kt.exports,Vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dm-actions"},[n("a",{attrs:{href:"",title:"Editar"},on:{click:function(e){return e.preventDefault(),function(e){return t.$emit("edit",e)}(e)}}},[n("dm-icon",{attrs:{icon:"pen"}})],1),n("a",{attrs:{href:"",title:"ShortCode"},on:{click:function(e){return e.preventDefault(),function(e){return t.$emit("shortcode",e)}(e)}}},[n("dm-icon",{attrs:{icon:"shortcode"}})],1),n("a",{attrs:{href:"",title:"Remover"},on:{click:function(e){return e.preventDefault(),function(e){return t.$emit("trash",e)}(e)}}},[n("dm-icon",{attrs:{icon:"trash"}})],1)])},Zt=[],te=(n("8a7a"),{}),ee=Object(u["a"])(te,Vt,Zt,!1,null,null,null),ne=ee.exports,ae=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["dm-document",{dragstart:t.dragstart}],attrs:{draggable:""},on:{dragstart:t.handlerDragStart,dragend:t.handlerDragEnd}},[n("dm-actions",{on:{edit:t.handlerEdit,trash:t.handlerRemove,shortcode:t.handlerShortcode}}),n("dm-notice",{attrs:{showMe:t.confirmRemove,showConfirmButton:!0},on:{confirm:t.handlerConfirmRemove,cancel:t.handlerCancelRemove}},[t._v("Remover o documento: "),n("b",[t._v(t._s(t.document.titulo))]),t._v("?")]),n("div",[n("small",{staticClass:"id"},[t._v("ID#"+t._s(t.document.ID))]),n("small",{staticClass:"date"},[t._v(t._s(t.document.data))]),n("div",[n("dm-icon",{attrs:{icon:t.document.icon}})],1),n("div",{staticClass:"dm-title"},[n("b",[t._v(t._s(t.document.titulo))])])])],1)},oe=[],re={props:{document:{type:Object,default:function(){return{}}}},data:function(){return{dragstart:!1,confirmRemoveMessage:"",confirmRemove:!1}},methods:Object(p["a"])(Object(p["a"])({},Object(s["b"])(["removeDocument"])),{},{handlerEdit:function(){this.$store.commit("SET_DOCUMENT",this.document),this.$store.commit("SHOW_DOCUMENT_MODAL",!0)},handlerDragStart:function(t){t.dataTransfer.setData("ID",this.document.ID),t.dataTransfer.setData("Type","document"),this.dragstart=!0},handlerRemove:function(){this.confirmRemove=!0},handlerCancelRemove:function(){this.confirmRemove=!1},handlerConfirmRemove:function(){this.removeDocument({ID:this.document.ID}),this.confirmRemove=!1},handlerShortcode:function(){this.$store.commit("SET_SHORTCODE",'[dm_document doc="'.concat(this.document.ID,'" ]')),this.$store.commit("SHOW_SHORTCODE_MODAL",!0)},handlerDragEnd:function(){this.dragstart=!1}})},se=re,ce=(n("1e4f"),Object(u["a"])(se,ae,oe,!1,null,"eca974c0",null)),ie=ce.exports,ue=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["dm-sidebar-category",{active:t.isActive,draft:"draft"==t.category.status,dragenter:t.dragEnter,dragself:t.dragSelf}],attrs:{dropzone:"",draggable:""},on:{drop:t.updateDropItem,dragenter:function(e){return e.preventDefault(),t.handlerDragEnter(e)},dragleave:t.handlerDragLeave,dragover:function(t){t.preventDefault()},dragstart:t.handlerDragSelfStart,dragend:t.handlerDragSelfEnd}},[n("dm-notice",{attrs:{showMe:t.confirmRemove,showConfirmButton:!0},on:{confirm:t.handlerConfirmRemove,cancel:t.handlerCancelRemove}},[t._v("Remover a categoria: "),n("b",[t._v(t._s(t.category.titulo))]),t._v("?")]),n("dm-button",{style:{paddingLeft:t.space},attrs:{icon:t.isActive||t.dragEnter?"folder-opened":"folder-closed",label:t.category.titulo_curto+"#"+t.category.ID},on:{click:t.openCategory}}),n("dm-actions",{on:{edit:t.handlerEdit,trash:t.handlerRemove,shortcode:t.handlerShortcode}})],1)},le=[],de={props:{category:{type:Object,default:function(){return{}}}},data:function(){return{dragEnter:!1,dragSelf:!1,confirmRemove:!1}},computed:Object(p["a"])(Object(p["a"])({},Object(s["c"])(["currentCategory","categories"])),{},{isActive:function(){return this.currentCategory.ID==this.category.ID},space:function(){var t=this.category.level;return t>1?8*t+"px":0}}),methods:Object(p["a"])(Object(p["a"])({},Object(s["b"])(["removeCategory"])),{},{getExcludeCats:function(t){var e=this,n=[];return t&&(n.push(t),this.categories.map((function(a){t==a.ID_parent&&(n=[].concat(Object(F["a"])(n),Object(F["a"])(e.getExcludeCats(a.ID))))}))),n},openCategory:function(){this.isActive||this.$router.push({name:"category",params:{id:this.category.ID}})},handlerEdit:function(){var t=Object(p["a"])({},this.category),e=this.category.titulo_curto||this.category.titulo;t.titulo=e,delete t.titulo_curto,this.$store.commit("SET_CATEGORY",t),this.$store.commit("SHOW_CATEGORY_MODAL",!0)},handlerRemove:function(){this.confirmRemove=!0},handlerCancelRemove:function(){this.confirmRemove=!1},handlerConfirmRemove:function(){this.removeCategory({ID:this.category.ID}),this.confirmRemove=!1},handlerShortcode:function(){this.$store.commit("SET_SHORTCODE",'[dm_category cat="'.concat(this.category.ID,'" ]')),this.$store.commit("SHOW_SHORTCODE_MODAL",!0)},updateDropItem:function(t){var e=this,n=t.dataTransfer.getData("Type"),a=t.dataTransfer.getData("ID");switch(n){case"document":this.$store.commit("SET_DOCUMENTS",this.$store.state.documents.filter((function(t){return t.ID!=a||e.category.ID==t.ID_category||(e.$store.dispatch("saveDocument",Object(p["a"])(Object(p["a"])({},t),{},{ID_category:e.category.ID})).then((function(){e.$root.$emit("update-documents")})),!1)})));break;case"category":if(-1==this.getExcludeCats(a).indexOf(this.category.ID)){var o=this.categories.filter((function(t){return t.ID==a}))[0];this.$store.dispatch("saveCategory",Object(p["a"])(Object(p["a"])({},o),{},{titulo:o.titulo_curto,ID_parent:this.category.ID}))}break}this.handlerDragLeave()},handlerDragEnter:function(){this.dragEnter=!0},handlerDragLeave:function(){this.dragEnter=!1},handlerDragSelfStart:function(t){this.dragSelf=!0,t.dataTransfer.setData("ID",this.category.ID),t.dataTransfer.setData("Type","category")},handlerDragSelfEnd:function(){this.dragSelf=!1}})},me=de,fe=(n("b28c"),Object(u["a"])(me,ue,le,!1,null,null,null)),ve=fe.exports,pe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.has_messages,expression:"has_messages"}],class:"notice "+t.message_type},[t._v(t._s(t.first_message))]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.has_validations,expression:"has_validations"}],staticClass:"notice notice-error"},t._l(t.validation_messsages,(function(e,a){return n("p",{key:a},[t._v(t._s(e))])})),0)])},he=[],ge=(n("5319"),{props:{messages:{type:Object,default:function(){return{}}},validations:{type:Object,default:function(){return{}}}},computed:{has_messages:function(){return Object.keys(this.messages).length>0},has_validations:function(){return Object.keys(this.validations).length>0},validation_messsages:function(){var t=this;if(this.has_validations){var e=[];return Object.keys(this.validations).map((function(n){return e.push(t.validations[n][0])})),e}return[]},first_message:function(){if(Object.keys(this.messages).length>0){var t=Object.keys(this.messages)[0];return this.messages[t]}return""},message_type:function(){return Object.keys(this.messages).length>0?Object.keys(this.messages)[0].replace("_","-"):""}}}),be=ge,_e=Object(u["a"])(be,pe,he,!1,null,null,null),Oe=_e.exports,De=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["dm-notice",{show:t.show}]},[n("button",{staticClass:"dm-button-hidden",on:{click:function(e){return e.preventDefault(),t.handlerCancel(e)}}},[t._v(" × ")]),n("div",[t._t("default")],2),t.showConfirmButton?n("div",{staticClass:"dm-cols dm-notice-footer"},[n("button",{staticClass:"button button-secondary",on:{click:function(e){return e.preventDefault(),t.handlerCancel(e)}}},[t._v(" "+t._s(t.cancelButtonText)+" ")]),n("button",{staticClass:"button button-primary",on:{click:function(e){return e.preventDefault(),t.handlerConfirm(e)}}},[t._v(" "+t._s(t.confirmButtonText)+" ")])]):t._e()])},ye=[],Ce=(n("a9e3"),{props:{showMe:{type:Boolean,default:!1},autoHidden:{type:Boolean,default:!1},timeToHidden:{type:Number,default:3e3},showConfirmButton:{type:Boolean,default:!1},confirmButtonText:{type:String,default:"Ok"},cancelButtonText:{type:String,default:"Cancelar"}},data:function(){return{show:!1,timeoutToHidden:null}},methods:{handlerCancel:function(){this.$emit("cancel"),this.show=!1},handlerConfirm:function(){this.$emit("confirm"),this.show=!1}},watch:{showMe:function(t){this.show=t}},updated:function(){var t=this;this.autoHidden&&(this.timeoutToHidden&&clearTimeout(this.timeoutToHidden),this.timeoutToHidden=setTimeout((function(){t.show=!1}),this.timeToHidden))},mounted:function(){this.show=this.showMe}}),Ee=Ce,Se=(n("f55e"),Object(u["a"])(Ee,De,ye,!1,null,null,null)),we=Se.exports;n("d722"),n("8975"),a["a"].use(Rt["a"]),a["a"].component("dm-icon",Ut),a["a"].component("dm-button",Yt),a["a"].component("dm-loading",Xt),a["a"].component("dm-actions",ne),a["a"].component("dm-document",ie),a["a"].component("dm-sidebar-category",ve),a["a"].component("dm-notification-alert",Oe),a["a"].component("dm-notice",we),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(d)},router:ht,store:xt}).$mount("#dm-document")},"7ea7":function(t,e,n){},8103:function(t,e,n){"use strict";n("aaf5")},"85ec":function(t,e,n){},8975:function(t,e,n){"use strict";n.r(e);n("4de4"),n("fb6a"),n("d3b7"),n("25f0");var a=n("2b0e");a["a"].filter("capitalize",(function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""})),a["a"].filter("uppercase",(function(t){return t?(t=t.toString(),t.toUpperCase()):""})),a["a"].filter("slice",(function(t,e){return t?(t=t.toString(),e&&t.length>e?t.slice(0,e)+"...":t):""}))},"899d":function(t,e,n){"use strict";n("44b5")},"8a7a":function(t,e,n){"use strict";n("4b42")},"95cd":function(t,e,n){},a351:function(t,e,n){"use strict";n("1ce7")},aaf5:function(t,e,n){},b28c:function(t,e,n){"use strict";n("557a")},c58a:function(t,e,n){},d70a:function(t,e,n){},d722:function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),o=n("bc3a"),r=n.n(o);r.a.defaults.baseURL=window.dm_documents.restAPI,r.a.interceptors.request.use((function(t){return t.headers["X-WP-Nonce"]=window.dm_documents.token,t})),a["a"].prototype.http=r.a,a["a"].prototype.baseURL=window.dm_documents.baseURL},dbca:function(t,e,n){},e904:function(t,e,n){},ebb6:function(t,e,n){},efb2:function(t,e,n){"use strict";n("ebb6")},f55e:function(t,e,n){"use strict";n("95cd")}});