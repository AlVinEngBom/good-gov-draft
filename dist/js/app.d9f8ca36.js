(function(e){function t(t){for(var o,d,i=t[0],u=t[1],l=t[2],s=0,b=[];s<i.length;s++)d=i[s],Object.prototype.hasOwnProperty.call(r,d)&&r[d]&&b.push(r[d][0]),r[d]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);a&&a(t);while(b.length)b.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(o=!1)}o&&(c.splice(t--,1),e=d(d.s=n[0]))}return e}var o={},r={app:0},c=[];function d(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.m=e,d.c=o,d.d=function(e,t,n){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)d.d(n,o,function(t){return e[t]}.bind(null,o));return n},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var a=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0c05":function(e,t,n){},"0d1c":function(e,t,n){},"1b9e":function(e,t,n){},"2e79":function(e,t,n){},"348a":function(e,t,n){"use strict";n("1b9e")},5666:function(e,t,n){"use strict";n("0c05")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={class:"container"};function c(e,t,n,c,d,i){var u=Object(o["m"])("Header"),l=Object(o["m"])("AddNote"),a=Object(o["m"])("Notes");return Object(o["i"])(),Object(o["c"])("div",r,[Object(o["f"])(u,{onToggleAddNote:i.toggleAddNote,title:"Welcome to Empty.idk",showAddNote:d.showAddNote},null,8,["onToggleAddNote","showAddNote"]),Object(o["r"])(Object(o["d"])("div",null,[Object(o["f"])(l,{onAddNote:i.addNote},null,8,["onAddNote"])],512),[[o["q"],d.showAddNote]]),Object(o["f"])(a,{onToggleReminder:i.toggleReminder,onDeleteNote:i.deleteNote,notes:d.notes},null,8,["onToggleReminder","onDeleteNote","notes"])])}var d=n("5530"),i=n("2909");n("99af"),n("4de4"),n("d3b7"),n("d81d");function u(e,t,n,r,c,d){var i=Object(o["m"])("Button");return Object(o["i"])(),Object(o["c"])("header",null,[Object(o["d"])("h1",null,Object(o["n"])(n.title),1),Object(o["f"])(i,{onBtnClick:t[0]||(t[0]=function(t){return e.$emit("toggle-add-note")}),text:n.showAddNote?"Close":"Add Note",color:n.showAddNote?"red":"cadetblue"},null,8,["text","color"])])}function l(e,t,n,r,c,d){return Object(o["i"])(),Object(o["c"])("button",{onClick:t[0]||(t[0]=function(e){return d.onClick()}),style:Object(o["h"])({background:n.color}),class:"btn"},Object(o["n"])(n.text),5)}var a={name:"Button",props:{text:String,color:String},methods:{onClick:function(){this.$emit("btn-click")}}},s=n("6b0d"),b=n.n(s);const f=b()(a,[["render",l]]);var m=f,p={name:"Header",props:{title:String,showAddNote:Boolean},components:{Button:m}};n("d234");const O=b()(p,[["render",u],["__scopeId","data-v-dff09506"]]);var j=O;function h(e,t,n,r,c,d){var i=Object(o["m"])("Note");return Object(o["i"])(!0),Object(o["c"])(o["a"],null,Object(o["l"])(n.notes,(function(t){return Object(o["i"])(),Object(o["c"])("div",{key:t.id},[Object(o["f"])(i,{onToggleReminder:function(n){return e.$emit("toggle-reminder",t.id)},onDeleteNote:function(n){return e.$emit("delete-note",t.id)},note:t},null,8,["onToggleReminder","onDeleteNote","note"])])})),128)}function g(e,t,n,r,c,d){return Object(o["i"])(),Object(o["c"])("div",{onDblclick:t[1]||(t[1]=function(t){return e.$emit("toggle-reminder",n.note.id)}),class:Object(o["g"])([n.note.reminder?"reminder":"","note"])},[Object(o["d"])("h3",null,[Object(o["e"])(Object(o["n"])(n.note.text)+" ",1),Object(o["d"])("i",{onClick:t[0]||(t[0]=function(t){return e.$emit("delete-note",n.note.id)}),class:"fas fa-times"})]),Object(o["d"])("p",null,Object(o["n"])(n.note.day),1)],34)}var v={name:"Note",props:{note:Object}};n("348a");const y=b()(v,[["render",g]]);var N=y,x={name:"Notes",props:{notes:Array},components:{Note:N},emits:["delete-note","toggle-reminder"]};const A=b()(x,[["render",h]]);var w=A,k=function(e){return Object(o["k"])("data-v-69d0922c"),e=e(),Object(o["j"])(),e},S={class:"form-control"},T=k((function(){return Object(o["d"])("label",null,"Note",-1)})),_={class:"form-control"},D=k((function(){return Object(o["d"])("label",null,"Day & Time",-1)})),P={class:"form-control form-control-check"},R=k((function(){return Object(o["d"])("label",null,"Set Reminder",-1)})),$=k((function(){return Object(o["d"])("input",{type:"submit",value:"Save Note",class:"btn btn-block"},null,-1)}));function C(e,t,n,r,c,d){return Object(o["i"])(),Object(o["c"])("form",{onSubmit:t[3]||(t[3]=function(){return d.onSubmit&&d.onSubmit.apply(d,arguments)}),class:"add-form"},[Object(o["d"])("div",S,[T,Object(o["r"])(Object(o["d"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.text=e}),name:"text",placeholder:"Add Note Here"},null,512),[[o["p"],c.text]])]),Object(o["d"])("div",_,[D,Object(o["r"])(Object(o["d"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.day=e}),name:"day",id:"Add Day & Time"},null,512),[[o["p"],c.day]])]),Object(o["d"])("div",P,[R,Object(o["r"])(Object(o["d"])("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.reminder=e}),name:"reminder"},null,512),[[o["o"],c.reminder]])]),$],32)}var M={name:"AddNote",data:function(){return{text:"",day:"",reminder:!1}},methods:{onSubmit:function(e){if(e.preventDefault(),this.text){var t={id:Math.floor(1e5*Math.random()),text:this.text,day:this.day,reminder:this.reminder};this.$emit("add-note",t),this.text="",this.day="",this.reminder=!1}else alert("Please add a note")}}};n("a664");const B=b()(M,[["render",C],["__scopeId","data-v-69d0922c"]]);var H=B,U={name:"App",components:{Header:j,Notes:w,AddNote:H},data:function(){return{notes:[],showAddNote:!1}},methods:{toggleAddNote:function(){this.showAddNote=!this.showAddNote},addNote:function(e){this.notes=[].concat(Object(i["a"])(this.notes),[e])},deleteNote:function(e){confirm("Do you sure?")&&(this.notes=this.notes.filter((function(t){return t.id!==e})))},toggleReminder:function(e){this.notes=this.notes.map((function(t){return t.id===e?Object(d["a"])(Object(d["a"])({},t),{},{reminder:!t.reminder}):t}))}},created:function(){this.notes=[{id:"1",text:"text-1",day:"time-1",reminder:!0},{id:"2",text:"text-2",day:"time-2",reminder:!0},{id:"3",text:"text-3",day:"time-3",reminder:!1}]}};n("5666");const V=b()(U,[["render",c]]);var I=V;Object(o["b"])(I).mount("#app")},a664:function(e,t,n){"use strict";n("0d1c")},d234:function(e,t,n){"use strict";n("2e79")}});
//# sourceMappingURL=app.d9f8ca36.js.map