(function(t){function e(e){for(var o,a,i=e[0],l=e[1],u=e[2],d=0,f=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);s&&s(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(o=!1)}o&&(c.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},c=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var s=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2468:function(t,e,n){"use strict";n("8d52")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function r(t,e,n,r,c,a){var i=Object(o["n"])("todo-app");return Object(o["j"])(),Object(o["d"])("div",null,[Object(o["f"])(i)])}var c={class:"main"},a=Object(o["f"])("div",{class:"title"}," T O D O ",-1);function i(t,e,n,r,i,l){var u=Object(o["n"])("todo-form"),s=Object(o["n"])("todo-list");return Object(o["j"])(),Object(o["d"])(o["a"],null,[Object(o["f"])("div",c,[a,Object(o["f"])(u)]),Object(o["f"])(s,{id:"lista"})],64)}var l={class:"inputBox"},u=Object(o["f"])("i",{class:"far fa-smile"},null,-1);function s(t,e,n,r,c,a){return Object(o["j"])(),Object(o["d"])("form",{onSubmit:e[3]||(e[3]=Object(o["t"])((function(){return r.formulario&&r.formulario.apply(r,arguments)}),["prevent"]))},[Object(o["f"])("div",l,[Object(o["s"])(Object(o["f"])("input",{type:"text",class:"form-control my-3 inputField",placeholder:"Ingrese Tarea","onUpdate:modelValue":e[1]||(e[1]=function(t){return r.texto=t})},null,512),[[o["p"],r.texto,void 0,{trim:!0}]]),Object(o["f"])("button",{type:"button",id:"emoji-trigger",onClick:e[2]||(e[2]=function(){return r.handleClick&&r.handleClick.apply(r,arguments)})},[u])])],32)}var d=n("074b"),f={setup:function(){var t=new d["a"],e=document.querySelector("#emoji-trigger");document.querySelector(".form-control");t.on("emoji",(function(t){c.value+=t.emoji}));var n=function(n){n.preventDefault(),t.togglePicker(e)},r=Object(o["i"])("todos"),c=Object(o["l"])(""),a=function(){if(""!==c.value){var t={texto:c.value,estado:!1,id:Date.now()};r.value.push(t),c.value=""}};return{texto:c,formulario:a,handleClick:n}}};n("f37b");f.render=s;var b=f,j={class:"list-group"},p={key:0,class:"list-group-item"};function O(t,e,n,r,c,a){var i=Object(o["n"])("todo-item"),l=Object(o["n"])("draggable"),u=Object(o["n"])("todo-footer"),s=Object(o["n"])("todo-filtro");return Object(o["j"])(),Object(o["d"])("ul",j,[Object(o["f"])(l,{list:r.todos,onChange:r.log},{default:Object(o["r"])((function(){return[(Object(o["j"])(!0),Object(o["d"])(o["a"],null,Object(o["m"])(r.todos,(function(t){return Object(o["j"])(),Object(o["d"])(i,{key:t.id,todo:t},null,8,["todo"])})),128))]})),_:1},8,["list","onChange"]),0===r.todos.length?(Object(o["j"])(),Object(o["d"])("li",p," No hay tareas pendientes ")):Object(o["e"])("",!0),0!==r.todos.length?(Object(o["j"])(),Object(o["d"])(u,{key:1})):Object(o["e"])("",!0),Object(o["f"])(s)])}n("4de4");var v={class:"list-group-item d-flex justify-content-between align-items-center"},m={key:0,class:"fas fa-check"},g=Object(o["f"])("i",{class:"fas fa-times"},null,-1);function y(t,e,n,r,c,a){return Object(o["j"])(),Object(o["d"])("li",v,[Object(o["f"])("span",{role:"button",onClick:e[1]||(e[1]=function(t){return r.completado(n.todo.id)})},[Object(o["f"])("span",{class:[n.todo.estado?"todoItem__text--tachado":"todoItem__text"]},Object(o["o"])(n.todo.texto),3),n.todo.estado?(Object(o["j"])(),Object(o["d"])("i",m)):Object(o["e"])("",!0)]),Object(o["f"])("span",{role:"button",onClick:e[2]||(e[2]=function(t){return r.eliminar(n.todo.id)})},[g])])}n("d81d");var h={props:{todo:{type:Object,required:!0}},setup:function(){var t=Object(o["i"])("todos"),e=function(e){t.value=t.value.filter((function(t){return t.id!==e}))},n=function(e){t.value=t.value.map((function(t){return t.id===e&&(t.estado=!t.estado),t}))};return{eliminar:e,completado:n}}};n("2468");h.render=y;var _=h,k={class:"list-group-item d-flex justify-content-between align-items-center"},x={role:"button"};function C(t,e,n,r,c,a){return Object(o["j"])(),Object(o["d"])("li",k,[Object(o["f"])("span",x,Object(o["o"])(r.contarActivos)+" tareas pendientes",1),Object(o["f"])("span",{role:"button",onClick:e[1]||(e[1]=function(){return r.eliminarCompletados&&r.eliminarCompletados.apply(r,arguments)}),class:"footer__deleteAll"}," Eliminar tareas terminadas ")])}var w={setup:function(){var t=Object(o["i"])("todos"),e=Object(o["b"])((function(){return t.value.filter((function(t){return!1===t.estado})).length})),n=function(){t.value=t.value.filter((function(t){return!1===t.estado}))};return{contarActivos:e,eliminarCompletados:n}}};n("e2c8");w.render=C;var S=w,T={class:"card mt-3"},P={class:"card-body d-flex justify-content-between align-items-center"};function I(t,e,n,r,c,a){return Object(o["j"])(),Object(o["d"])("div",T,[Object(o["f"])("div",P,[Object(o["f"])("span",{role:"button",onClick:e[1]||(e[1]=function(t){return r.filtrar("active")}),class:["active"===r.estado?"button__filters--active":"button__filters"]}," Sin terminar ",2),Object(o["f"])("span",{role:"button",onClick:e[2]||(e[2]=function(t){return r.filtrar("all")}),class:["all"===r.estado?"button__filters--active":"button__filters"]}," Todas ",2),Object(o["f"])("span",{role:"button",onClick:e[3]||(e[3]=function(t){return r.filtrar("complete")}),class:["complete"===r.estado?"button__filters--active":"button__filters"]}," Completadas ",2)])])}var A={setup:function(){var t=Object(o["i"])("estado"),e=function(e){console.log(e),t.value=e};return{estado:t,filtrar:e}}};n("73c4");A.render=I;var q=A,F=n("7d42"),J={components:{TodoItem:_,TodoFooter:S,TodoFiltro:q,draggable:F["a"]},setup:function(){var t=Object(o["i"])("todos"),e=Object(o["l"])("all"),n=Object(o["b"])((function(){return"all"===e.value?t.value:"active"===e.value?t.value.filter((function(t){return!1===t.estado})):"complete"===e.value?t.value.filter((function(t){return!0===t.estado})):void 0})),r=function(t){console.log(t)},c=!0,a=!1;return Object(o["k"])("estado",e),{todos:n,log:r,enabled:c,dragging:a}}};n("ed1c");J.render=O;var M=J,D={components:{TodoForm:b,TodoList:M},setup:function(){var t=Object(o["l"])([]);Object(o["k"])("todos",t),localStorage.getItem("todos")&&(t.value=JSON.parse(localStorage.getItem("todos"))),Object(o["q"])((function(){localStorage.setItem("todos",JSON.stringify(t.value))}))}};n("79ed");D.render=i;var N=D,B={components:{TodoApp:N},name:"App"};B.render=r;var E=B;Object(o["c"])(E).mount("#app")},"73c4":function(t,e,n){"use strict";n("dc5c")},7555:function(t,e,n){},"79ed":function(t,e,n){"use strict";n("7555")},"8aa1":function(t,e,n){},"8d52":function(t,e,n){},dc5c:function(t,e,n){},e2c8:function(t,e,n){"use strict";n("fd58")},eca0:function(t,e,n){},ed1c:function(t,e,n){"use strict";n("8aa1")},f37b:function(t,e,n){"use strict";n("eca0")},fd58:function(t,e,n){}});
//# sourceMappingURL=app.80e188d8.js.map