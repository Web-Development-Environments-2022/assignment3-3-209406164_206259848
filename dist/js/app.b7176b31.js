(function(e){function t(t){for(var n,a,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);m&&m(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==i[s]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},i={app:0},o=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-56621984":"29bd5d9a","chunk-64b603b9":"6ecd57ba","chunk-651e4775":"17009731","chunk-7a7e62c7":"ce8f0264","chunk-825c0fac":"32c5436e","chunk-89f4591c":"5e4eae93","chunk-eec010e0":"5abfc9c9"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"chunk-56621984":1,"chunk-64b603b9":1,"chunk-651e4775":1,"chunk-7a7e62c7":1,"chunk-825c0fac":1,"chunk-89f4591c":1,"chunk-eec010e0":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-56621984":"46882d5b","chunk-64b603b9":"a7df01c2","chunk-651e4775":"5b36aca4","chunk-7a7e62c7":"1f36a1d9","chunk-825c0fac":"98b20b7d","chunk-89f4591c":"ced048ca","chunk-eec010e0":"9b6cffd7"}[e]+".css",i=c.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===i))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===n||u===i)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var n=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],m.parentNode.removeChild(m),r(o)},m.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){a[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(m);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}i[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var m=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"02de":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",[r("h3",[e._v(" "+e._s(e.title)+": "),e._t("default")],2),r("b-col",e._l(e.recipes,(function(t){return r("b-row",{key:t.id},[r("RecipeViewer",{staticClass:"recipeFull",attrs:{recipe:t,show_ing_and_serv:e.show_ing_and_serv,isPreview:e.isPreview,personal:e.personal}})],1)})),1)],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"recipe-box"},[n("div",{staticClass:"recipe-preview"},[e.personal?n("router-link",{attrs:{to:{path:"/recipe/"+e.recipe.id+"/personal"}}},[n("div",{staticClass:"recipe-body"},[n("img",{staticClass:"recipe-image",attrs:{src:e.recipe.image}})]),n("div",{staticClass:"recipe-footer"},[n("div",{staticClass:"recipe-title",attrs:{title:e.recipe.title}},[n("h4",[e._v(e._s(e.recipe.title))])])])]):e._e(),0==e.personal?n("router-link",{attrs:{to:{path:"/recipe/"+e.recipe.id}}},[n("div",{staticClass:"recipe-body"},[n("img",{staticClass:"recipe-image",attrs:{src:e.recipe.image}})]),n("div",{staticClass:"recipe-footer"},[n("div",{staticClass:"recipe-title",attrs:{title:e.recipe.title}},[n("h4",[e._v(e._s(e.recipe.title))])])])]):e._e(),n("div",{staticClass:"recipe-markings"},[n("b-row",[e.recipe.glutenFree?n("b-col",[n("b-img",{attrs:{src:r("a8c5"),height:"50%",width:"50%"}})],1):e._e(),e.recipe.glutenFree?e._e():n("b-col",[n("b-img",{attrs:{src:r("ff30"),height:"50%",width:"50%"}})],1),e.recipe.vegetarian?n("b-col",[n("b-img",{attrs:{src:r("6e75"),height:"50%",width:"50"}})],1):e._e(),e.recipe.began?n("b-col",[n("b-img",{attrs:{src:r("7b27"),height:"50%",width:"50%"}})],1):e._e()],1),n("br"),e.$root.store.username&&0==e.personal?n("b-row",[n("b-col",[n("b-button",{staticClass:"mb-2",attrs:{disabled:this.recipe.is_favoried,variant:"outline-warning"},on:{click:e.add_to_favorite}},[n("b-icon",{attrs:{icon:this.change_favorite()}})],1)],1),n("b-col",[n("b-icon",{attrs:{icon:this.change_watched(),scale:"2","shift-v":"-8"}})],1)],1):e._e()],1),n("br"),n("div",[n("b-row",{staticClass:"recipe-overview"},[n("b-col",[n("h5",[e._v("Time to make:")]),e._v(" "+e._s(e.recipe.readyInMinutes)+" minutes ")]),n("b-col",[n("h5",[e._v("Popularity:")]),e._v(" "+e._s(e.recipe.aggregateLikes)+" likes ")]),!e.isPreview&&e.show_ing_and_serv?n("b-col",[n("h5",[e._v("Servings:")]),e._v(" "+e._s(e.recipe.servings)+" ")]):e._e()],1)],1),n("br"),e.isPreview?e._e():n("div",[e.show_ing_and_serv?n("b-col",[n("br"),n("h5",[e._v("Ingredients:")]),e._l(e.recipe.ingredients.flat(),(function(t){return n("b-row",{key:t},[n("li",[e._v(e._s(e.instruction))])])}))],2):e._e(),n("b-col",[n("br"),n("h5",[e._v("Instructions:")]),e._l(e.recipe.instructions.flat(),(function(t){return n("b-row",{key:t},[n("li",[e._v(e._s(t))])])}))],2)],1)],1)])},o=[],s=r("c7eb"),c=r("1da1"),l=(r("ac1f"),r("841c"),r("e9c4"),{methods:{add_to_favorite:function(){var e=this;return Object(c["a"])(Object(s["a"])().mark((function t(){var r,n,a;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.recipe.is_favoried){t.next=4;break}return t.abrupt("return",!1);case 4:return t.prev=4,e.axios.defaults.withCredentials=!0,t.next=8,e.axios.post("https://foodisgood.cs.bgu.ac.il/users/addToFavorites",{recipeId:e.recipe.id});case 8:for(r=t.sent,e.axios.defaults.withCredentials=!1,console.log(r.data),n=JSON.parse(sessionStorage.search),a=0;a<n.length;a++)n[a].id==e.recipe.id&&(n[a].is_favoried=!0,sessionStorage.search=JSON.stringify(n));t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](4),console.log(t.t0);case 18:e.recipe.is_favoried=!0;case 19:e.$forceUpdate();case 20:case"end":return t.stop()}}),t,null,[[4,15]])})))()},change_favorite:function(){return this.recipe.is_favoried?"star-fill":"star"},change_watched:function(){return this.recipe.is_watched?"eye-fill":"eye-slash"}},props:{recipe:{type:Object,required:!0},show_ing_and_serv:{type:Boolean,required:!0},isPreview:{type:Boolean,required:!0},personal:{type:Boolean,required:!1}}}),u=l,d=(r("6ce2"),r("2877")),m=Object(d["a"])(u,i,o,!1,null,"216f02cd",null),p=m.exports,f={name:"RecipeList",components:{RecipeViewer:p},props:{title:{type:String,required:!0},recipes:{type:Array,required:!0},isPreview:{type:Boolean,required:!0},show_ing_and_serv:{type:Boolean,required:!0},personal:{type:Boolean,required:!1}}},v=f,b=(r("257b"),Object(d["a"])(v,n,a,!1,null,"6931f348",null));t["a"]=b.exports},"173b":function(e,t,r){},"257b":function(e,t,r){"use strict";var n=r("c66e"),a=r.n(n);a.a},"4d98":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("4160"),r("d3b7"),r("159b");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("b-navbar",{attrs:{toggleable:"xl",variant:"info"}},[r("b-navbar-brand",{attrs:{to:{name:"main"}}},[e._v("FoodIsGood")]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{to:{name:"main"}}},[e._v("Home")]),r("b-nav-item",{attrs:{to:{name:"search"}}},[e._v("Search")]),r("b-nav-item",{attrs:{to:{name:"about"}}},[e._v("About")])],1),e.$root.store.username?r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([e.$root.store.username?{key:"button-content",fn:function(){return[e._v(e._s(e.$root.store.username)+"'s profile")]},proxy:!0}:{key:"button-content",fn:function(){return[e._v(" User ")]},proxy:!0}],null,!0)},[r("b-dropdown-item",{attrs:{to:{name:"favorites"}}},[e._v("Favorite Recipes")]),r("b-dropdown-item",{attrs:{to:{name:"myRecipes"}}},[e._v("Personal Recipes")]),r("b-dropdown-item",{attrs:{to:{name:"familyRecipes"}}},[e._v("Family Recipes")]),r("b-dropdown-item",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-new-personal-recipe",modifiers:{"modal-new-personal-recipe":!0}}]},[e._v("Create Personal Recipe")]),r("b-dropdown-divider"),r("b-dropdown-item",{on:{click:e.Logout}},[e._v("Log Out")])],1)],1):r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item",[e._v("Hello Guest!")]),r("b-nav-item",{attrs:{to:{name:"login"}}},[e._v("Login")]),r("b-nav-item",{attrs:{to:{name:"register"}}},[e._v("Register")])],1)],1)],1),r("b-modal",{attrs:{"hide-footer":!0,id:"modal-new-personal-recipe",scrollable:"",title:"Create Personal Recipe"}},[r("b-form",{on:{submit:function(t){return t.preventDefault(),e.onCreate(t)},reset:function(t){return t.preventDefault(),e.onReset(t)}}},[r("b-form-group",{attrs:{id:"input-group-tilte","label-cols-sm":"3",label:"Title:","label-for":"title"}},[r("b-form-input",{attrs:{disabled:e.canEdit,id:"title",type:"text",state:e.validateState("title")},model:{value:e.$v.form.title.$model,callback:function(t){e.$set(e.$v.form.title,"$model",t)},expression:"$v.form.title.$model"}}),e.$v.form.title.required?e.$v.form.title.length?e._e():r("b-form-invalid-feedback",[e._v(" Recipe title should be at least 1 letter long ")]):r("b-form-invalid-feedback",[e._v(" Recipe needs to have a title ")])],1),r("b-form-group",{attrs:{id:"input-group-readyInMinutes","label-cols-sm":"3",label:"Minutes to make:","label-for":"readyInMinutes"}},[r("b-form-input",{attrs:{disabled:e.canEdit,id:"readyInMinutes",type:"text",state:e.validateState("readyInMinutes")},model:{value:e.$v.form.readyInMinutes.$model,callback:function(t){e.$set(e.$v.form.readyInMinutes,"$model",t)},expression:"$v.form.readyInMinutes.$model"}}),e.$v.form.readyInMinutes.required?e._e():r("b-form-invalid-feedback",[e._v(" Need to specify how long to make ")]),e.$v.form.readyInMinutes.numeric?e._e():r("b-form-invalid-feedback",[e._v(" Time to make should be a number ")])],1),r("b-form-group",{attrs:{id:"input-group-image","label-cols-sm":"3",label:"Image URL:","label-for":"image"}},[r("b-form-input",{attrs:{disabled:e.canEdit,id:"image",type:"text",state:e.validateState("image")},model:{value:e.$v.form.image.$model,callback:function(t){e.$set(e.$v.form.image,"$model",t)},expression:"$v.form.image.$model"}}),e.$v.form.image.required?e._e():r("b-form-invalid-feedback",[e._v(" Image URL is required ")]),e.$v.form.image.url?e._e():r("b-form-invalid-feedback",[e._v(" Image URL should be a valid URL ")])],1),r("b-form-group",{attrs:{id:"input-group-vegan","label-cols-sm":"3",label:"Vegan:","label-for":"vegan"}},[r("b-form-select",{attrs:{disabled:e.canEdit,id:"vegan",options:["No","Yes"],state:e.validateState("vegan")},model:{value:e.$v.form.vegan.$model,callback:function(t){e.$set(e.$v.form.vegan,"$model",t)},expression:"$v.form.vegan.$model"}}),r("b-form-invalid-feedback",[e._v(" Vegan option is required ")])],1),r("b-form-group",{attrs:{id:"input-group-vegetarian","label-cols-sm":"3",label:"Vegetarian:","label-for":"vegetarian"}},[r("b-form-select",{attrs:{disabled:e.canEdit,id:"vegetarian",options:["No","Yes"],state:e.validateState("vegetarian")},model:{value:e.$v.form.vegetarian.$model,callback:function(t){e.$set(e.$v.form.vegetarian,"$model",t)},expression:"$v.form.vegetarian.$model"}}),r("b-form-invalid-feedback",[e._v(" Vegetarian option is required ")])],1),r("b-form-group",{attrs:{id:"input-group-glutenFree","label-cols-sm":"3",label:"Gluten Free:","label-for":"glutenFree"}},[r("b-form-select",{attrs:{disabled:e.canEdit,id:"glutenFree",options:["No","Yes"],state:e.validateState("glutenFree")},model:{value:e.$v.form.glutenFree.$model,callback:function(t){e.$set(e.$v.form.glutenFree,"$model",t)},expression:"$v.form.glutenFree.$model"}}),r("b-form-invalid-feedback",[e._v(" Gluten Free option is required ")])],1),r("b-form-group",{attrs:{id:"input-group-ingredients","label-cols-sm":"3",label:"Ingredients to make:","label-for":"ingredients"}},[r("b-form-textarea",{attrs:{disabled:e.canEdit,id:"ingredients",placeholder:"Write one ingredient per line, for example: 1 large onion",rows:"3","max-rows":"8"},model:{value:e.ingredients,callback:function(t){e.ingredients=t},expression:"ingredients"}})],1),r("b-form-group",{attrs:{id:"input-group-instructions","label-cols-sm":"3",label:"Instructions how to make:","label-for":"instructions"}},[r("b-form-textarea",{attrs:{disabled:e.canEdit,id:"instructions",placeholder:"Write one instructions per line, for example: Dice the onion, put on the side for later",rows:"3","max-rows":"8"},model:{value:e.instructions,callback:function(t){e.instructions=t},expression:"instructions"}})],1),r("b-form-group",{attrs:{id:"input-group-servings","label-cols-sm":"3",label:"How many servings:","label-for":"servings"}},[r("b-form-input",{attrs:{disabled:e.canEdit,id:"servings",type:"text",state:e.validateState("servings")},model:{value:e.$v.form.servings.$model,callback:function(t){e.$set(e.$v.form.servings,"$model",t)},expression:"$v.form.servings.$model"}}),e.$v.form.servings.required?e._e():r("b-form-invalid-feedback",[e._v(" Need to specify how many servings ")]),e.$v.form.servings.numeric?e._e():r("b-form-invalid-feedback",[e._v(" Servings count should be a number ")])],1),r("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reset")]),r("b-button",{staticClass:"ml-5 w-75",staticStyle:{width:"250px"},attrs:{type:"submit",variant:"primary"}},[e._v("Create")])],1),e.form.submitError?r("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[e._v(" "+e._s(e.form.submitError)+" ")]):e._e()],1),r("router-view")],1)},i=[],o=r("c7eb"),s=r("1da1"),c=(r("ac1f"),r("1276"),r("e9c4"),r("b5ae")),l={name:"App",data:function(){return{form:{title:"",readyInMinutes:"",image:"",vegan:"No",vegetarian:"No",glutenFree:"No",servings:"",submitError:void 0},errors:[],validated:!1,ingredients:"",instructions:"",canEdit:!1}},validations:{form:{title:{required:c["required"],length:function(e){return Object(c["minLength"])(1)(e)}},readyInMinutes:{required:c["required"],numeric:c["numeric"]},image:{required:c["required"],url:c["url"]},vegan:{required:c["required"]},vegetarian:{required:c["required"]},glutenFree:{required:c["required"]},servings:{required:c["required"],numeric:c["numeric"]}},ingredients:{required:c["required"]},instructions:{required:c["required"]}},methods:{Logout:function(){var e=this;return Object(s["a"])(Object(o["a"])().mark((function t(){var r;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.axios.defaults.withCredentials=!0,t.next=4,e.axios.post("https://foodisgood.cs.bgu.ac.il/Logout");case 4:r=t.sent,e.axios.defaults.withCredentials=!1,console.log(r),t.next=14;break;case 9:return t.prev=9,t.t0=t["catch"](0),console.log(t.t0.response),e.form.submitError=t.t0.response.data.message,t.abrupt("return");case 14:e.$root.store.logout(),e.$root.toast("Logout","User logged out successfully","success"),e.$router.push("/")["catch"]((function(){e.$forceUpdate()}));case 17:case"end":return t.stop()}}),t,null,[[0,9]])})))()},validateState:function(e){var t=this.$v.form[e],r=t.$dirty,n=t.$error;return r?!n:null},CreateRecipe:function(){var e=this;return Object(s["a"])(Object(o["a"])().mark((function t(){var r,n,a,i,s;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r=e.ingredients.split("\n"),n=JSON.parse(JSON.stringify(r)),a=e.instructions.split("\n"),i=JSON.parse(JSON.stringify(a)),e.axios.defaults.withCredentials=!0,t.next=8,e.axios.post("https://foodisgood.cs.bgu.ac.il/users/createPersonalRecipe",{title:e.form.title,readyInMinutes:e.form.readyInMinutes,image:e.form.image,vegan:e.form.vegan,vegetarian:e.form.vegetarian,glutenFree:e.form.glutenFree,ingredients:n,instructions:i,servings:e.form.servings});case 8:s=t.sent,e.axios.defaults.withCredentials=!1,console.log(s),e.form.submitError="Recipe created! You may now close this window.",e.canEdit=!0,t.next=20;break;case 15:t.prev=15,t.t0=t["catch"](0),console.log(t.t0),console.log(t.t0.response),e.form.submitError=t.t0.response.data.message;case 20:case"end":return t.stop()}}),t,null,[[0,15]])})))()},onCreate:function(){console.log("create method called"),this.$v.form.$touch(),this.$v.form.$anyError||(console.log("create method go"),this.CreateRecipe())},onReset:function(){var e=this;this.form={title:"",readyInMinutes:"",image:"",vegan:"No",vegetarian:"No",glutenFree:"No",servings:""},this.ingredients="",this.instructions="",this.canEdit=!1,this.$nextTick((function(){e.$v.$reset()}))}}},u=l,d=(r("5c0b"),r("2877")),m=Object(d["a"])(u,a,i,!1,null,null,null),p=m.exports,f=r("a7fe"),v=r.n(f),b=r("bc3a"),g=r.n(b),h=(r("3ca3"),r("ddb0"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"float-child"},[r("RecipeViewerList",{attrs:{title:"Explore this Recipes",recipes:e.randomRecipes,isPreview:!0,show_ing_and_serv:!1}})],1),r("div",{staticClass:"float-child"},[e.$root.store.username?e._e():r("LoginPage")],1),r("div",{staticClass:"float-child"},[this.$root.store.username?r("RecipeViewerList",{attrs:{title:"Last Watched Recipes",recipes:e.lastViewedRecipes,isPreview:!0,show_ing_and_serv:!1,disabled:""}}):e._e()],1)])}),_=[],w=r("2909"),$=r("02de"),y=r("62cc"),k={components:{RecipeViewerList:$["a"],LoginPage:y["default"]},data:function(){return{randomRecipes:[],lastViewedRecipes:[]}},methods:{updateRandomRecipes:function(){var e=this;return Object(s["a"])(Object(o["a"])().mark((function t(){var r,n;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.axios.defaults.withCredentials=!0,t.next=4,e.axios.get("https://foodisgood.cs.bgu.ac.il/recipes/random");case 4:n=t.sent,e.axios.defaults.withCredentials=!1,console.log(n),e.randomRecipes=[],(r=e.randomRecipes).push.apply(r,Object(w["a"])(n.data)),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log(t.t0.response);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},updateLastViewedRecipes:function(){var e=this;return Object(s["a"])(Object(o["a"])().mark((function t(){var r,n;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.$root.store.username){t.next=15;break}return t.prev=1,e.axios.defaults.withCredentials=!0,t.next=5,e.axios.get("https://foodisgood.cs.bgu.ac.il/users/getLastWatched");case 5:n=t.sent,e.axios.defaults.withCredentials=!1,console.log(n),e.lastViewedRecipes=[],(r=e.lastViewedRecipes).push.apply(r,Object(w["a"])(n.data)),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](1),console.log(t.t0.response);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})))()}},mounted:function(){this.updateRandomRecipes(),this.updateLastViewedRecipes()}},x=k,C=(r("594d"),Object(d["a"])(x,h,_,!1,null,"77df0667",null)),O=C.exports,R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",[e._v("Four Oh Four you didn't")]),r("router-link",{attrs:{to:"/",exact:""}},[e._v("ET Go Home")])],1)},q=[],E={},j=Object(d["a"])(E,R,q,!1,null,null,null),S=j.exports,L=[{path:"/",name:"main",component:O},{path:"/register",name:"register",component:function(){return r.e("chunk-eec010e0").then(r.bind(null,"eaff"))}},{path:"/login",name:"login",component:function(){return Promise.resolve().then(r.bind(null,"62cc"))}},{path:"/search",name:"search",component:function(){return r.e("chunk-651e4775").then(r.bind(null,"37906"))}},{path:"/about",name:"about",component:function(){return r.e("chunk-825c0fac").then(r.bind(null,"478b"))}},{path:"/favorites",name:"favorites",component:function(){return r.e("chunk-7a7e62c7").then(r.bind(null,"6ab5"))}},{path:"/myRecipes",name:"myRecipes",component:function(){return r.e("chunk-56621984").then(r.bind(null,"fda7"))}},{path:"/familyRecipes",name:"familyRecipes",component:function(){return r.e("chunk-64b603b9").then(r.bind(null,"9983"))}},{path:"/recipe/:recipeId/:personal?",name:"recipe",component:function(){return r.e("chunk-89f4591c").then(r.bind(null,"6619"))}},{path:"*",name:"notFound",component:S}],P=L,I=r("2b27"),F=r.n(I),N=r("8c4f"),M=r("1dce"),T=r.n(M),U=(r("f9e3"),r("2dd8"),r("5f5b")),V=r("b1e0"),A=r("1073"),B=r("cbd0"),D=r("b1fc"),J=r("7049"),H=r("a7e2"),G=r("f9bc"),W=r("44d4"),Y=r("cca8"),K=r("51c2"),z=r("498a");n["default"].use(F.a),n["default"].use(N["a"]);var Q=new N["a"]({routes:P});n["default"].use(U["a"]),n["default"].use(V["a"]),[A["a"],B["a"],D["a"],J["a"],H["a"],G["a"],W["a"],Y["a"],K["a"],z["a"]].forEach((function(e){return n["default"].use(e)})),n["default"].use(T.a),g.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),g.a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),n["default"].use(v.a,g.a),n["default"].config.productionTip=!1;var X={username:localStorage.username,login:function(e){localStorage.setItem("username",e),sessionStorage.setItem("username",e),this.username=e,console.log("login",this.username)},logout:function(){console.log("logout"),localStorage.removeItem("username"),sessionStorage.removeItem("username"),sessionStorage.removeItem("search"),this.username=void 0}};console.log(X),new n["default"]({router:Q,data:function(){return{store:X}},methods:{toast:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:r,solid:!0,appendToast:n,autoHideDelay:3e3})}},render:function(e){return e(p)}}).$mount("#app")},"594d":function(e,t,r){"use strict";var n=r("173b"),a=r.n(n);a.a},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"62cc":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[e._v("Login")]),r("b-form",{on:{submit:function(t){return t.preventDefault(),e.onLogin(t)}}},[r("b-form-group",{attrs:{id:"input-group-Username","label-cols-sm":"3",label:"Username:","label-for":"Username"}},[r("b-form-input",{attrs:{id:"Username",type:"text",state:e.validateState("username")},model:{value:e.$v.form.username.$model,callback:function(t){e.$set(e.$v.form.username,"$model",t)},expression:"$v.form.username.$model"}}),r("b-form-invalid-feedback",[e._v("Username is required")])],1),r("b-form-group",{attrs:{id:"input-group-Password","label-cols-sm":"3",label:"Password:","label-for":"Password"}},[r("b-form-input",{attrs:{id:"Password",type:"password",state:e.validateState("password")},model:{value:e.$v.form.password.$model,callback:function(t){e.$set(e.$v.form.password,"$model",t)},expression:"$v.form.password.$model"}}),r("b-form-invalid-feedback",[e._v("Password is required")])],1),r("b-button",{staticClass:"mx-auto w-100",staticStyle:{width:"100px",display:"block"},attrs:{type:"submit",variant:"primary"}},[e._v("Login")]),r("div",{staticClass:"mt-2"},[e._v("Do not have an account yet?"),r("router-link",{attrs:{to:"register"}},[e._v(" Register in here")])],1)],1),e.form.submitError?r("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[e._v("Login failed: "+e._s(e.form.submitError)+" ")]):e._e()],1)},a=[],i=r("c7eb"),o=r("1da1"),s=r("b5ae"),c={name:"Login",data:function(){return{form:{username:"",password:"",submitError:void 0}}},validations:{form:{username:{required:s["required"]},password:{required:s["required"]}}},methods:{validateState:function(e){var t=this.$v.form[e],r=t.$dirty,n=t.$error;return r?!n:null},onLogin:function(){console.log("onLogin() method called"),this.form.submitError=void 0,this.$v.form.$touch(),this.$v.form.$anyError||this.Login()},Login:function(){var e=this;return Object(o["a"])(Object(i["a"])().mark((function t(){var r;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.axios.defaults.withCredentials=!0,t.next=4,e.axios.post("https://foodisgood.cs.bgu.ac.il/Login",{username:e.form.username,password:e.form.password});case 4:r=t.sent,e.axios.defaults.withCredentials=!1,console.log(r),console.log(e.$root.store.login),e.$root.store.login(e.form.username),e.$router.push("/")["catch"]((function(){e.$forceUpdate()})),t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](0),console.log(t.t0.response),e.form.submitError=t.t0.response.data.message;case 16:case"end":return t.stop()}}),t,null,[[0,12]])})))()}}},l=c,u=(r("b829"),r("2877")),d=Object(u["a"])(l,n,a,!1,null,"69ab5d93",null);t["default"]=d.exports},"6ce2":function(e,t,r){"use strict";var n=r("4d98"),a=r.n(n);a.a},"6e75":function(e,t,r){e.exports=r.p+"img/vegetarian_text.8ac00e62.png"},"7b27":function(e,t,r){e.exports=r.p+"img/vegan_text.317df9ca.png"},"9c0c":function(e,t,r){},a8c5:function(e,t,r){e.exports=r.p+"img/gluten_free_text.f1f4ce7f.png"},b829:function(e,t,r){"use strict";var n=r("bb21"),a=r.n(n);a.a},bb21:function(e,t,r){},c66e:function(e,t,r){},ff30:function(e,t,r){e.exports=r.p+"img/gluten_text.d20b9ae6.png"}});
//# sourceMappingURL=app.b7176b31.js.map