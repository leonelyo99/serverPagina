function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{ow3J:function(e,n,t){"use strict";t.r(n),t.d(n,"PageModule",(function(){return re}));var a=t("tyNb"),o=t("fXoL"),i=t("ofXK"),r=function(e){return{zoomOut:e}},s=function(){return["/page/conocimientos"]},c=function(){return["/page/conocimientos/lenguajes"]},l=function(){return["/page/conocimientos/frameworks"]},u=function(){return["/page/conocimientos/patrones"]},m=function(){return["/page/estudios"]},d=function(){return["/page/historia"]},b=function(){return["/page/academy"]},p=function(){return["/page/contactame"]};function g(e,n){if(1&e&&(o.Jb(0,"ul",16),o.Jb(1,"li",17),o.Jb(2,"a",18),o.jc(3," Conocimientos "),o.Ib(),o.Jb(4,"div",6),o.Jb(5,"a",7),o.jc(6,"Todos"),o.Ib(),o.Jb(7,"a",7),o.jc(8,"Lenguajes"),o.Ib(),o.Jb(9,"a",7),o.jc(10,"Frameworks"),o.Ib(),o.Jb(11,"a",7),o.jc(12,"Patrones"),o.Ib(),o.Ib(),o.Ib(),o.Jb(13,"li",17),o.Jb(14,"a",19),o.jc(15," Estudios Realizados "),o.Ib(),o.Ib(),o.Jb(16,"li",17),o.Jb(17,"a",19),o.jc(18," Historia "),o.Ib(),o.Ib(),o.Jb(19,"li",17),o.Jb(20,"a",19),o.jc(21," Academy "),o.Ib(),o.Ib(),o.Jb(22,"li",17),o.Jb(23,"a",19),o.jc(24," Contactame "),o.Ib(),o.Ib(),o.Ib()),2&e){var t=o.Sb();o.Xb("ngClass",o.ac(9,r,t.desapareceMenu)),o.wb(5),o.Xb("routerLink",o.Zb(11,s)),o.wb(2),o.Xb("routerLink",o.Zb(12,c)),o.wb(2),o.Xb("routerLink",o.Zb(13,l)),o.wb(2),o.Xb("routerLink",o.Zb(14,u)),o.wb(3),o.Xb("routerLink",o.Zb(15,m)),o.wb(3),o.Xb("routerLink",o.Zb(16,d)),o.wb(3),o.Xb("routerLink",o.Zb(17,b)),o.wb(3),o.Xb("routerLink",o.Zb(18,p))}}var f,h,v,w,k,C=function(e){return{activado:e}},I=function(e){return{visible_menu:e}},y=((k=function(){function e(n){var t=this;_classCallCheck(this,e),this.router=n,this.mostrarX=!1,this.desapareceMenu=!1,n.events.subscribe((function(e){t.rutaActivada=e instanceof a.b&&("/page/conocimientos"===e.url||"/page/conocimientos/frameworks"===e.url||"/page/conocimientos/lenguajes"===e.url||"/page/conocimientos/patrones"===e.url)}))}return _createClass(e,[{key:"abrioElMenu",value:function(){var e=this;1==this.mostrarX?(setTimeout((function(){e.mostrarX=!1}),220),this.desapareceMenu=!0):0==this.mostrarX&&(this.desapareceMenu=!1,this.mostrarX=!0)}},{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||k)(o.Gb(a.d))},k.\u0275cmp=o.Ab({type:k,selectors:[["app-header"]],decls:36,vars:23,consts:[[1,"row",2,"margin-top","4vh"],[1,"col-lg-4","col-md-2","col-6"],["src","/assets/images/logo.jpg","alt","Leonel Mazzan",1,"img-fluid","float-left",2,"height","50px"],[1,"col-lg-8","col-md-10","col-sm-12","row","ocultarMenu",2,"padding-top","1%"],[1,"col-sm-3","text-center","elementosMenuMd"],["type","button","id","dropdownMenuButton","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"dropdown-toggle","letraBold",3,"ngClass"],["aria-labelledby","dropdownMenuButton",1,"dropdown-menu"],[1,"dropdown-item","letraBold",3,"routerLink"],["routerLinkActive","activado",1,"letraBold",3,"routerLink"],[1,"col-sm-2","text-center","elementosMenuMd"],[1,"col-lg-8","col-md-10","col-6","ocultar","mostrarBoton","d-block","d-sm-block","d-md-none","ocultarMenuSd"],[1,"float-right","mr-4",3,"ngClass","click"],["id","#header",1,"menuHamburgesa"],["id","menu_on"],[1,"menuHamburguesaBarra"],["class","col-12 row animated zoomIn ocultarMenuSd","style","padding-top: 1%;",3,"ngClass",4,"ngIf"],[1,"col-12","row","animated","zoomIn","ocultarMenuSd",2,"padding-top","1%",3,"ngClass"],[1,"col-12","text-center","elementosMenuSm"],["type","button","id","dropdownMenuButton","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"dropdown-toggle","aElementosMenuSm","letraBold"],["routerLinkActive","activado",1,"aElementosMenuSm","letraBold",3,"routerLink"]],template:function(e,n){1&e&&(o.Jb(0,"nav",0),o.Jb(1,"div",1),o.Hb(2,"img",2),o.Ib(),o.Jb(3,"ul",3),o.Jb(4,"li",4),o.Jb(5,"a",5),o.jc(6," Conocimientos "),o.Ib(),o.Jb(7,"div",6),o.Jb(8,"a",7),o.jc(9,"Todos"),o.Ib(),o.Jb(10,"a",7),o.jc(11,"Lenguajes"),o.Ib(),o.Jb(12,"a",7),o.jc(13,"Frameworks"),o.Ib(),o.Jb(14,"a",7),o.jc(15,"Patrones"),o.Ib(),o.Ib(),o.Ib(),o.Jb(16,"li",4),o.Jb(17,"a",8),o.jc(18," Estudios Realizados "),o.Ib(),o.Ib(),o.Jb(19,"li",9),o.Jb(20,"a",8),o.jc(21," Historia "),o.Ib(),o.Ib(),o.Jb(22,"li",9),o.Jb(23,"a",8),o.jc(24," Academy "),o.Ib(),o.Ib(),o.Jb(25,"li",9),o.Jb(26,"a",8),o.jc(27," Contactame "),o.Ib(),o.Ib(),o.Ib(),o.Jb(28,"div",10),o.Jb(29,"div",11),o.Qb("click",(function(){return n.abrioElMenu()})),o.Jb(30,"div",12),o.Jb(31,"a",13),o.Hb(32,"span",14),o.Hb(33,"span",14),o.Hb(34,"span",14),o.Ib(),o.Ib(),o.Ib(),o.Ib(),o.hc(35,g,25,19,"ul",15),o.Ib()),2&e&&(o.wb(5),o.Xb("ngClass",o.ac(11,C,n.rutaActivada)),o.wb(3),o.Xb("routerLink",o.Zb(13,s)),o.wb(2),o.Xb("routerLink",o.Zb(14,c)),o.wb(2),o.Xb("routerLink",o.Zb(15,l)),o.wb(2),o.Xb("routerLink",o.Zb(16,u)),o.wb(3),o.Xb("routerLink",o.Zb(17,m)),o.wb(3),o.Xb("routerLink",o.Zb(18,d)),o.wb(3),o.Xb("routerLink",o.Zb(19,b)),o.wb(3),o.Xb("routerLink",o.Zb(20,p)),o.wb(3),o.Xb("ngClass",o.ac(21,I,n.mostrarX)),o.wb(6),o.Xb("ngIf",n.mostrarX))},directives:[i.h,a.f,a.e,i.j],styles:["a[_ngcontent-%COMP%]{cursor:pointer}.elementosMenuMd[_ngcontent-%COMP%]{height:100%!important;align-items:center}.elementosMenuMd[_ngcontent-%COMP%], .elementosMenuSm[_ngcontent-%COMP%]{list-style:none;font-weight:700;color:#b3b3b3;display:flex}.elementosMenuSm[_ngcontent-%COMP%]{height:40%!important;border-bottom:1px solid #000;height:6vh;max-height:45px}.aElementosMenuSm[_ngcontent-%COMP%]{padding-top:20px}.letraBold[_ngcontent-%COMP%]{font-weight:700;color:#b3b3b3}.letraBold[_ngcontent-%COMP%]:hover{color:#777;text-decoration:none}.dropdown-menu[_ngcontent-%COMP%]{border:none}.activado[_ngcontent-%COMP%]{color:#777}@media (max-width:767px){.ocultarMenu[_ngcontent-%COMP%]{display:none}}@media (min-width:767px){.ocultarMenuSd[_ngcontent-%COMP%]{display:none}}.menuHamburgesa[_ngcontent-%COMP%]{width:100%;padding:15px;margin-right:-40px!important;z-index:2}#menu_on[_ngcontent-%COMP%]{display:block;width:30px;height:20px;position:relative;z-index:2}#menu_on[_ngcontent-%COMP%]   .menuHamburguesaBarra[_ngcontent-%COMP%]{width:100%;height:4px;border-radius:4px;display:block;position:absolute;background:#777;transition:all .25s ease;transform-origin:0 100%}#menu_on[_ngcontent-%COMP%]   .menuHamburguesaBarra[_ngcontent-%COMP%]:nth-child(2){top:calc(50% - 2px)}#menu_on[_ngcontent-%COMP%]   .menuHamburguesaBarra[_ngcontent-%COMP%]:nth-child(3){bottom:0}.visible_menu[_ngcontent-%COMP%]   .menuHamburguesaBarra[_ngcontent-%COMP%]:first-child{transform:rotate(45deg) translate(-2px,1px)}.visible_menu[_ngcontent-%COMP%]   .menuHamburguesaBarra[_ngcontent-%COMP%]:nth-child(2){opacity:0}.visible_menu[_ngcontent-%COMP%]   .menuHamburguesaBarra[_ngcontent-%COMP%]:nth-child(3){transform:rotate(-45deg) translate(-3px,3px)}"]}),k),j=((w=function(){function e(){_classCallCheck(this,e),this.year=String((new Date).getFullYear())}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||w)},w.\u0275cmp=o.Ab({type:w,selectors:[["app-footer"]],decls:4,vars:1,consts:[[1,"text-center","letraBold"]],template:function(e,n){1&e&&(o.Jb(0,"footer",0),o.jc(1),o.Ib(),o.Hb(2,"br"),o.Hb(3,"br")),2&e&&(o.wb(1),o.lc(" ",n.year," \xa9Leonel Mazzan\n"))},styles:[".letraBold[_ngcontent-%COMP%]{color:#b3b3b3;clear:both;padding-top:6%}"]}),w),J=((v=function(){function e(){_classCallCheck(this,e),this.mostrarAbajo=!1,this.desaparece=!1,this.mostrarArriba=!1}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||v)},v.\u0275cmp=o.Ab({type:v,selectors:[["app-pages"]],decls:8,vars:0,consts:[[1,"container-page"],[1,"container-content"]],template:function(e,n){1&e&&(o.Jb(0,"div",0),o.Jb(1,"div",1),o.Hb(2,"app-header"),o.Hb(3,"br"),o.Hb(4,"br"),o.Ib(),o.Jb(5,"div",1),o.Hb(6,"router-outlet"),o.Ib(),o.Hb(7,"app-footer"),o.Ib())},directives:[y,a.h,j],styles:[".container-page[_ngcontent-%COMP%]{margin:2vh;height:96vh;background-color:#fff;overflow:scroll;overflow-x:hidden}.container-content[_ngcontent-%COMP%]{margin-left:6vh;margin-right:6vh}"]}),v),x=((h=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||h)},h.\u0275cmp=o.Ab({type:h,selectors:[["app-presentacion"]],decls:7,vars:0,consts:[[1,"text-center"],[2,"font-size","30px"],[1,"mt-3","mb-3","text-center"]],template:function(e,n){1&e&&(o.Jb(0,"h4",0),o.Jb(1,"strong",1),o.jc(2,"BIENVENIDO"),o.Ib(),o.Ib(),o.Jb(3,"h4",0),o.jc(4,"Soy Leonel Mazzan y este es mi portafolio"),o.Ib(),o.Jb(5,"h6",2),o.jc(6,"Aqui podras ver todos mis conocimientos tanto en lenguajes, patrones, librerias y frameworks"),o.Ib())},styles:[""]}),h),_=((f=function(){function e(){_classCallCheck(this,e),this.datosFramework=[{id:1,imagen:"/assets/images/frameworks/angular.png",framwork:"Angular",nivelConocimiento:"95%",datos:"Mis inicios con este framework fueron hace ya 3 a\xf1os desde que estudiaba programaci\xf3n frontend en las escuelas de capacitaci\xf3n Newton. En este framework he trabajado en proyectos bastante grandes como el sistema de un hospital, luego trabaje en el desarrollo de un sistema de control de pedidos. Lo he utilizado para crear PWA con la implementaci\xf3n de service workers y ahora me encuentro utiliz\xe1ndolo en el desarrollo de 4 proyectos bancarios.",alt:"Angular imagen"},{id:1,imagen:"/assets/images/frameworks/react.png",framwork:"React",nivelConocimiento:"95%",datos:"React: Utilizado para la plataforma de gestion de turnos de una veterinaria. Lo manejo solo, con hoks y hoks con redux",alt:"React imagen"},{id:1,imagen:"/assets/images/frameworks/ionic.jpg",framwork:"Ionic",nivelConocimiento:"95%",datos:"Ionic: Utilizado para la realizacion de una tienda y un controlador de tareas, los dos en android",alt:"Ionic imagen"},{id:1,imagen:"/assets/images/frameworks/reactNative.jpg",framwork:"React",nivelConocimiento:"95%",datos:"React Native: Utilizado para una aplicacion de ranking de restaurantes, solo lo e utilizado con expo y en android",alt:"React Naive imagen"},{id:1,imagen:"/assets/images/frameworks/node.png",framwork:"Node",nivelConocimiento:"95%",datos:"Node: Utilizado para desarrollar un api restful con autenticacion, manejo de perfiles y JWT",alt:"Node imagen"},{id:1,imagen:"/assets/images/frameworks/flutter.png",framwork:"Flutter",nivelConocimiento:"95%",datos:"Flutter: Todavia no e tenido el placer de desarrollar en esta tecnologia.",alt:"Flutter imagen"},{id:1,imagen:"/assets/images/frameworks/laravel.png",framwork:"Laravel",nivelConocimiento:"95%",datos:"Laravel: Utilizado para desarrollar un api restful con autenticacion, manejo de perfiles y tokens.",alt:"Laravel imagen"},{id:1,imagen:"/assets/images/frameworks/slim.png",framwork:"Slim",nivelConocimiento:"95%",datos:"Slim: Utilizado para desarrollar un api restful",alt:"Slim imagen"},{id:1,imagen:"/assets/images/frameworks/codeigniter.png",framwork:"Codeigniter",nivelConocimiento:"95%",datos:"Codeigniter: Utilizado para desarrollar un api restful",alt:"Codeigniter imagen"},{id:1,imagen:"/assets/images/frameworks/django.jpg",framwork:"Django",nivelConocimiento:"95%",datos:"Django: Utilizado para realizar un blog con muestra de productos y un portafolio que incluia un blog",alt:"Django imagen"},{id:1,imagen:"/assets/images/frameworks/spring.png",framwork:"Spring",nivelConocimiento:"95%",datos:"Spring: Todavia no e tenido el placer de desarrollar en esta tecnologia solo lo e usado para migrar el front a otras tecnologias como Angular.",alt:"Spring imagen"},{id:1,imagen:"/assets/images/frameworks/jquery.png",framwork:"Jquery",nivelConocimiento:"95%",datos:"Jquery: Utilizado junto con bootstrap o para complementar otros frameworks como Angular y e desarrollado el control de un estacionamiento",alt:"Jquery imagen"}],this.datosLenguajes=[{id:1,imagen:"/assets/images/lenguajes/html.jpg",titulo:"HTML",alt:"HTML imagen"},{id:1,imagen:"/assets/images/lenguajes/javascript.png",titulo:"Javascript",alt:"Javascript imagen"},{id:1,imagen:"/assets/images/lenguajes/css.jpg",titulo:"CSS",alt:"CSS imagen"},{id:1,imagen:"/assets/images/lenguajes/sass.jpg",titulo:"SASS",alt:"SASS imagen"},{id:1,imagen:"/assets/images/lenguajes/typescript.png",titulo:"Typescript",alt:"Typescript imagen"},{id:1,imagen:"/assets/images/lenguajes/python.jpg",titulo:"Python",alt:"Python imagen"},{id:1,imagen:"/assets/images/lenguajes/php.png",titulo:"PHP",alt:"PHP imagen"},{id:1,imagen:"/assets/images/lenguajes/go.png",titulo:"Go",alt:"Go imagen"},{id:1,imagen:"/assets/images/lenguajes/dart.jpg",titulo:"Dart",alt:"Dart imagen"},{id:1,imagen:"/assets/images/lenguajes/Java.jpg",titulo:"Java",alt:"Java imagen"}],this.datosPatrones=[{patron:"Modular",explicacion:"Utilizado en Angular."},{patron:"Flux",explicacion:"Utilizado en React."},{patron:"Redux",explicacion:"Utilizado en React y en Angular."},{patron:"Factory",explicacion:"Utilizado en Angular."},{patron:"Observer",explicacion:"Utilizado en Angular."},{patron:"Singleton",explicacion:"Utilizado en Node y en Flutter"},{patron:"Prototype",explicacion:"Utilizado en Angular."},{patron:"Decorator",explicacion:"Utilizado en Angular, Spring y en Laravel."},{patron:"Strategy",explicacion:"Utilizado en Angular."}]}return _createClass(e,[{key:"obtenerFrameworks",value:function(){return this.datosFramework}},{key:"obtenerLenguajes",value:function(){return this.datosLenguajes}},{key:"obtenerPatrones",value:function(){return this.datosPatrones}}]),e}()).\u0275fac=function(e){return new(e||f)},f.\u0275prov=o.Cb({token:f,factory:f.\u0275fac,providedIn:"root"}),f),M=t("JK/P"),P=t("K3ix"),O=["modal"];function S(e,n){if(1&e){var t=o.Kb();o.Jb(0,"div",1),o.Jb(1,"div",2),o.Jb(2,"h4",3),o.Jb(3,"strong",4),o.jc(4),o.Ib(),o.Ib(),o.Ib(),o.Jb(5,"div",5),o.Jb(6,"h4",6),o.jc(7,"\xbfMi historia con este framework?"),o.Ib(),o.Jb(8,"h6",7),o.jc(9),o.Ib(),o.Jb(10,"h4",8),o.jc(11,"\xbfMi nivel de conocimientos?"),o.Ib(),o.Jb(12,"div",9),o.Hb(13,"div",10),o.Ib(),o.Jb(14,"h4",6),o.jc(15,"\xbfUna demo de mi trabajo?"),o.Ib(),o.Jb(16,"button",11),o.jc(17," Descargar (pr\xf3ximamente) "),o.Ib(),o.Jb(18,"div",12),o.Jb(19,"button",13),o.Qb("click",(function(){return o.dc(t),o.Sb().cancelar()})),o.jc(20," Cerrar "),o.Ib(),o.Ib(),o.Ib(),o.Ib()}if(2&e){var a=o.Sb();o.wb(4),o.kc(a.framework.framwork),o.wb(5),o.kc(a.framework.datos),o.wb(4),o.gc("width",a.framework.nivelConocimiento)}}var z,L,H=((L=function(){function e(n,t){_classCallCheck(this,e),this.bsModalService=n,this.modalService=t}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.subscription=this.modalService.modalFrameworkChanged.subscribe((function(n){e.framework=n,e.modalRef=e.bsModalService.show(e.modal,{keyboard:!1,backdrop:!0})}))}},{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe(),this.cancelar()}},{key:"cancelar",value:function(){this.modalRef&&this.modalRef.hide()}}]),e}()).\u0275fac=function(e){return new(e||L)(o.Gb(P.a),o.Gb(M.a))},L.\u0275cmp=o.Ab({type:L,selectors:[["app-framework-modal"]],viewQuery:function(e,n){var t;1&e&&o.mc(O,!0),2&e&&o.bc(t=o.Rb())&&(n.modal=t.first)},decls:2,vars:0,consts:[["modal",""],[1,"mb-5"],[2,"border-bottom","1px solid rgba(0, 0, 0, 0.125)"],[1,"text-center","mt-3","mb-3"],[2,"font-size","30px"],[1,"mx-auto","mt-4",2,"width","80%"],[1,"text-left","mt-3","mb-3"],[1,"text-justify"],[1,"text-left","mt-3"],[1,"mt-3","progress"],["role","progressbar","aria-valuenow","25","aria-valuemin","0","aria-valuemax","100",1,"progress-bar"],["disabled","",1,"btn","btn-primary"],[1,"mt-5","text-right"],[1,"ml-3","btn","btn-secondary",3,"click"]],template:function(e,n){1&e&&o.hc(0,S,21,4,"ng-template",null,0,o.ic)},styles:[".modalFramework[_ngcontent-%COMP%]{margin-top:20vh}"]}),L),A=((z=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"transform",value:function(e){return e.substring(0,50).trim()+"..."}}]),e}()).\u0275fac=function(e){return new(e||z)},z.\u0275pipe=o.Fb({name:"textoRecorte",type:z,pure:!0}),z);function X(e,n){if(1&e){var t=o.Kb();o.Jb(0,"div",4),o.Jb(1,"div",5),o.Qb("click",(function(){o.dc(t);var e=n.$implicit;return o.Sb().mostrarInformacion(e)})),o.Hb(2,"img",6),o.Jb(3,"div",7),o.Jb(4,"p",8),o.jc(5),o.Tb(6,"textoRecorte"),o.Ib(),o.Ib(),o.Ib(),o.Ib()}if(2&e){var a=n.$implicit;o.wb(2),o.Yb("src",a.imagen,o.ec),o.Yb("alt",a.alt),o.wb(3),o.lc(" ",o.Ub(6,3,a.datos)," ")}}var F,B=((F=function(){function e(n,t){_classCallCheck(this,e),this.conocimientosService=n,this.modalService=t,this.frameorks=this.conocimientosService.obtenerFrameworks()}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"mostrarInformacion",value:function(e){this.modalService.mostrarModalFramework(e)}}]),e}()).\u0275fac=function(e){return new(e||F)(o.Gb(_),o.Gb(M.a))},F.\u0275cmp=o.Ab({type:F,selectors:[["app-frameworks"]],decls:6,vars:1,consts:[[1,"mb-2","font-weight-normal","animated","fadeIn","fast"],["src","../../../assets/icon/arrow-right-solid.svg",1,"iconFont"],[1,"row"],["class","col-12 col-sm-6 col-md-4 col-lg-3 animated fadeIn fast",4,"ngFor","ngForOf"],[1,"col-12","col-sm-6","col-md-4","col-lg-3","animated","fadeIn","fast"],[1,"card","cardCustom","cursorPointer",3,"click"],[1,"img-fluid","altoImagen",3,"src","alt"],[1,"card-body","cardFrameworkText"],[1,"card-text"]],template:function(e,n){1&e&&(o.Hb(0,"app-framework-modal"),o.Jb(1,"h4",0),o.Hb(2,"img",1),o.jc(3," Frameworks"),o.Ib(),o.Jb(4,"div",2),o.hc(5,X,7,5,"div",3),o.Ib()),2&e&&(o.wb(5),o.Xb("ngForOf",n.frameorks))},directives:[H,i.i],pipes:[A],styles:[""]}),F);function U(e,n){if(1&e&&(o.Jb(0,"div",4),o.Jb(1,"div",5),o.Jb(2,"div",6),o.jc(3),o.Ib(),o.Hb(4,"img",7),o.Ib(),o.Ib()),2&e){var t=n.$implicit;o.wb(3),o.kc(t.titulo),o.wb(1),o.Yb("src",t.imagen,o.ec),o.Yb("alt",t.alt)}}var R,Z=((R=function(){function e(n){_classCallCheck(this,e),this.conocimientosService=n,this.lenguajes=this.conocimientosService.obtenerLenguajes()}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||R)(o.Gb(_))},R.\u0275cmp=o.Ab({type:R,selectors:[["app-lenguajes"]],decls:5,vars:1,consts:[[1,"mt-2","mb-2","font-weight-normal","animated","fadeIn","fast"],["src","../../../../assets/icon/arrow-right-solid.svg",1,"iconFont"],[1,"row"],["class","col-12 col-sm-6 col-md-4 col-lg-3 animated fadeIn fast",4,"ngFor","ngForOf"],[1,"col-12","col-sm-6","col-md-4","col-lg-3","animated","fadeIn","fast"],[1,"card","cardCustom"],[1,"card-header"],[1,"img-fluid","altoImagen",3,"src","alt"]],template:function(e,n){1&e&&(o.Jb(0,"h4",0),o.Hb(1,"img",1),o.jc(2," Lenguajes"),o.Ib(),o.Jb(3,"div",2),o.hc(4,U,5,3,"div",3),o.Ib()),2&e&&(o.wb(4),o.Xb("ngForOf",n.lenguajes))},directives:[i.i],styles:[""]}),R);function T(e,n){if(1&e&&(o.Jb(0,"div",4),o.Jb(1,"div",5),o.Jb(2,"div",6),o.jc(3),o.Ib(),o.Jb(4,"div",7),o.Jb(5,"p",8),o.jc(6),o.Ib(),o.Ib(),o.Ib(),o.Ib()),2&e){var t=n.$implicit;o.wb(3),o.kc(t.patron),o.wb(3),o.lc(" ",t.explicacion," ")}}var E,D=((E=function(){function e(n){_classCallCheck(this,e),this.conocimientosService=n,this.patrones=this.conocimientosService.obtenerPatrones()}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||E)(o.Gb(_))},E.\u0275cmp=o.Ab({type:E,selectors:[["app-patrones"]],decls:5,vars:1,consts:[[1,"mt-2","mb-2","font-weight-normal","animated","fadeIn","fast"],["src","../../../../assets/icon/arrow-right-solid.svg",1,"iconFont"],[1,"row"],["class","col-12 col-sm-6 col-md-4 col-lg-3 animated fadeIn fast",4,"ngFor","ngForOf"],[1,"col-12","col-sm-6","col-md-4","col-lg-3","animated","fadeIn","fast"],[1,"card","cardCustom"],[1,"card-header","font-weight-normal",2,"font-size","20px"],[1,"card-body","cardPatron"],[1,"card-text"]],template:function(e,n){1&e&&(o.Jb(0,"h4",0),o.Hb(1,"img",1),o.jc(2," Patrones\n"),o.Ib(),o.Jb(3,"div",2),o.hc(4,T,7,2,"div",3),o.Ib()),2&e&&(o.wb(4),o.Xb("ngForOf",n.patrones))},directives:[i.i],styles:[".cardPatron[_ngcontent-%COMP%]{height:100px}@media (max-width:368px){.cardPatron[_ngcontent-%COMP%]{height:120px}}@media (min-width:351px) and (max-width:368px){.cardPatron[_ngcontent-%COMP%]{height:120px;padding-top:34px}}@media (min-width:492px) and (max-width:575px){.cardPatron[_ngcontent-%COMP%]{height:70px}}@media (min-width:1208px) and (max-width:1254px){.cardPatron[_ngcontent-%COMP%]{height:90px;padding-top:20px}}@media (min-width:1208px){.cardPatron[_ngcontent-%COMP%]{height:75px;padding-top:25px}}"]}),E);function N(e,n){1&e&&o.Hb(0,"app-frameworks")}function G(e,n){1&e&&o.Hb(0,"app-lenguajes")}function q(e,n){1&e&&o.Hb(0,"app-patrones")}var K,Y,Q,$,W,V,ee,ne=((K=function(){function e(n){_classCallCheck(this,e),this.route=n,n.snapshot.url[1]?"frameworks"==n.snapshot.url[1].path?(this.frameworks=!0,this.patrones=!1,this.lenguajes=!1):"lenguajes"==n.snapshot.url[1].path?(this.lenguajes=!0,this.patrones=!1,this.frameworks=!1):"patrones"==n.snapshot.url[1].path&&(this.patrones=!0,this.lenguajes=!1,this.frameworks=!1):(this.frameworks=!0,this.lenguajes=!0,this.patrones=!0)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||K)(o.Gb(a.a))},K.\u0275cmp=o.Ab({type:K,selectors:[["app-conocimientos"]],decls:5,vars:3,consts:[[4,"ngIf"]],template:function(e,n){1&e&&(o.Hb(0,"app-presentacion"),o.hc(1,N,1,0,"app-frameworks",0),o.hc(2,G,1,0,"app-lenguajes",0),o.hc(3,q,1,0,"app-patrones",0),o.Hb(4,"br")),2&e&&(o.wb(1),o.Xb("ngIf",n.frameworks),o.wb(1),o.Xb("ngIf",n.lenguajes),o.wb(1),o.Xb("ngIf",n.patrones))},directives:[x,i.j,B,Z,D],styles:[""]}),K),te=[{path:"",redirectTo:"/page/conocimientos",pathMatch:"full"},{path:"",component:J,children:[{path:"conocimientos",component:ne},{path:"conocimientos/frameworks",component:ne},{path:"conocimientos/lenguajes",component:ne},{path:"conocimientos/patrones",component:ne},{path:"estudios",component:(W=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}(),W.\u0275fac=function(e){return new(e||W)},W.\u0275cmp=o.Ab({type:W,selectors:[["app-cursos-realizados"]],decls:2,vars:0,template:function(e,n){1&e&&(o.Jb(0,"p"),o.jc(1,"cursos-realizados works!"),o.Ib())},styles:[""]}),W)},{path:"academy",component:($=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}(),$.\u0275fac=function(e){return new(e||$)},$.\u0275cmp=o.Ab({type:$,selectors:[["app-academy"]],decls:2,vars:0,template:function(e,n){1&e&&(o.Jb(0,"p"),o.jc(1,"academy works!"),o.Ib())},styles:[""]}),$)},{path:"contactame",component:(Q=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}(),Q.\u0275fac=function(e){return new(e||Q)},Q.\u0275cmp=o.Ab({type:Q,selectors:[["app-contacto"]],decls:2,vars:0,template:function(e,n){1&e&&(o.Jb(0,"p"),o.jc(1,"contacto works!"),o.Ib())},styles:[""]}),Q)},{path:"historia",component:(Y=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}(),Y.\u0275fac=function(e){return new(e||Y)},Y.\u0275cmp=o.Ab({type:Y,selectors:[["app-historia"]],decls:2,vars:0,template:function(e,n){1&e&&(o.Jb(0,"p"),o.jc(1,"historia works!"),o.Ib())},styles:[""]}),Y)}]}],ae=((V=function e(){_classCallCheck(this,e)}).\u0275mod=o.Eb({type:V}),V.\u0275inj=o.Db({factory:function(e){return new(e||V)},imports:[[a.g.forChild(te)],a.g]}),V),oe=t("PCNd"),ie=t("tk/3"),re=((ee=function e(){_classCallCheck(this,e)}).\u0275mod=o.Eb({type:ee}),ee.\u0275inj=o.Db({factory:function(e){return new(e||ee)},providers:[_],imports:[[ae,oe.a,i.b,ie.a]]}),ee)}}]);