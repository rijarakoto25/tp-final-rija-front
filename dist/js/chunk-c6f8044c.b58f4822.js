(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c6f8044c"],{"0216":function(e,t,s){},"0f91":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=t.sendForm=t.send=t.init=void 0;var a=s("3245");Object.defineProperty(t,"EmailJSResponseStatus",{enumerable:!0,get:function(){return a.EmailJSResponseStatus}});var n=s("5129"),r=null,i="https://api.emailjs.com";function o(e,t,s){return void 0===s&&(s={}),new Promise((function(n,r){var i=new XMLHttpRequest;for(var o in i.addEventListener("load",(function(e){var t=new a.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?n(t):r(t)})),i.addEventListener("error",(function(e){r(new a.EmailJSResponseStatus(e.target))})),i.open("POST",e,!0),s)i.setRequestHeader(o,s[o]);i.send(t)}))}function u(e){var t=document&&document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}function l(e){return"#"!==e[0]&&"."!==e[0]?"#"+e:e}function c(e,t){r=e,i=t||"https://api.emailjs.com"}function m(e,t,s,a){var n={lib_version:"2.6.4",user_id:a||r,service_id:e,template_id:t,template_params:u(s)};return o(i+"/api/v1.0/email/send",JSON.stringify(n),{"Content-type":"application/json"})}function d(e,t,s,a){if("string"===typeof s&&(s=document.querySelector(l(s))),!s||"FORM"!==s.nodeName)throw"Expected the HTML form element or the style selector of form";n.UI.progressState(s);var u=new FormData(s);return u.append("lib_version","2.6.4"),u.append("service_id",e),u.append("template_id",t),u.append("user_id",a||r),o(i+"/api/v1.0/email/send-form",u).then((function(e){return n.UI.successState(s),e}),(function(e){return n.UI.errorState(s),Promise.reject(e)}))}t.init=c,t.send=m,t.sendForm=d,t.default={init:c,send:m,sendForm:d}},3245:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=void 0;var a=function(){function e(e){this.status=e.status,this.text=e.responseText}return e}();t.EmailJSResponseStatus=a},5129:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UI=void 0;var a=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=a},"7f7f":function(e,t,s){var a=s("86cc").f,n=Function.prototype,r=/^\s*function ([^ (]*)/,i="name";i in n||s("9e1e")&&a(n,i,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},"81e0":function(e,t,s){"use strict";var a=s("0216"),n=s.n(a);n.a},c66d:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-md-11"},[s("header",{staticClass:"jumbotron bg-info"},[s("h3",[e._v("Profil :\n        "),s("strong",[e._v(e._s(e.currentUser.username))])]),s("div",[e._v("\n        "+e._s(e.currentUser.picture)+"\n      ")]),s("v2-table",{attrs:{data:e.list}},[s("v2-table-column",{attrs:{label:"Utilisateur",prop:"username"}}),s("v2-table-column",{attrs:{label:"id",prop:"id"}}),s("v2-table-column",{attrs:{label:"token",prop:"token"}}),s("v2-table-column",{attrs:{label:"email",prop:"mail"}})],1),s("div",[s("hr"),s("h2",[e._v("Messagerie")]),s("form",{staticClass:"contact-form",on:{submit:function(t){return t.preventDefault(),e.sendEmail(t)}}},[s("label",[e._v("Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",name:"name",placeholder:"Nom"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),s("label",[e._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",name:"email",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),s("label",[e._v("Message")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{name:"message",cols:"30",rows:"5",placeholder:"Message"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),s("input",{attrs:{type:"submit",value:"Envoyer"}})])])],1)])},n=[],r=(s("7f7f"),s("0f91")),i=s.n(r),o={name:"Profile",data:function(){return{name:"",email:"",message:"",list:[{username:this.$store.state.auth.user.username,id:this.$store.state.auth.user.id,token:this.$store.state.auth.user.accessToken,mail:this.$store.state.auth.user.email,authorities:this.$store.state.auth.user.roles,picture:this.$store.state.auth.user.picture}]}},computed:{currentUser:function(){return this.$store.state.auth.user}},mounted:function(){this.currentUser.id="YOUR_USER_ID",this.currentUser||this.$router.push("/login")},methods:{sendEmail:function(e){try{i.a.sendForm("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",e.target,"YOUR_USER_ID",{name:this.name,email:this.email,message:this.message})}catch(t){console.log({error:t})}this.name="",this.email="",this.message=""}}},u=o,l=(s("81e0"),s("2877")),c=Object(l["a"])(u,a,n,!1,null,"714f6336",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-c6f8044c.b58f4822.js.map