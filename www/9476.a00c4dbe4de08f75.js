"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9476],{9476:(x,u,i)=>{i.r(u),i.d(u,{MainPageModule:()=>y});var d=i(6814),p=i(95),o=i(7027),s=i(7050),g=i(5861),n=i(5879),m=i(7862),f=i(7698),h=i(2397);const v=[{path:"",component:(()=>{var t;class r{constructor(e,a,c,P,Z){this.router=e,this.helper=a,this.auth=c,this.storage=P,this.loadingController=Z}ngOnInit(){}asistencia(){this.router.navigateByUrl("asistencia")}home(){this.router.navigateByUrl("home")}escanear(){this.router.navigateByUrl("escanear")}perfil(){this.router.navigateByUrl("perfil")}weather(){this.router.navigateByUrl("weather")}logOut(){var e=this;return(0,g.Z)(function*(){1==(yield e.helper.showConfirm("Desea cerrar la sesi\xf3n actual?","Confirmar","Cancelar"))&&(yield e.auth.signOut(),yield e.router.navigateByUrl("login"))})()}presentLoading(){var e=this;return(0,g.Z)(function*(){const a=yield e.loadingController.create({message:"Cerrando sesi\xf3n..."});return yield a.present(),a})()}}return(t=r).\u0275fac=function(e){return new(e||t)(n.Y36(s.F0),n.Y36(m.W),n.Y36(f.zQ),n.Y36(h.V),n.Y36(o.HT))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-main"]],decls:26,vars:1,consts:[[1,"tittle-main-user"],[3,"translucent"],["slot","end"],[3,"click"],["name","settings-outline",1,"button-setting-login"],[1,"image-main-page"],["name","person-circle-outline"],[1,"text-main-page"],[1,"divEspacio"],["expand","full",1,"editButton",3,"click"],[1,"footer-main-page"],["color","danger","expand","round",3,"click"],["name","log-in-outline"]],template:function(e,a){1&e&&(n.TgZ(0,"ion-content")(1,"div",0)(2,"ion-header",1)(3,"ion-toolbar")(4,"ion-title"),n._uU(5,"Principal"),n.qZA(),n.TgZ(6,"ion-buttons",2)(7,"ion-button",3),n.NdJ("click",function(){return a.perfil()}),n._UZ(8,"ion-icon",4),n.qZA()()()()(),n.TgZ(9,"div",5),n._UZ(10,"ion-icon",6),n.qZA(),n.TgZ(11,"div",7)(12,"h1"),n._uU(13,"Bienvenido Nuevamente"),n.qZA(),n.TgZ(14,"h2"),n._uU(15,"\xbfQue deseas hacer el dia de hoy?"),n.qZA()(),n.TgZ(16,"div",8)(17,"ion-card")(18,"ion-button",9),n.NdJ("click",function(){return a.escanear()}),n._uU(19,"Escanear C\xf3digo"),n.qZA(),n.TgZ(20,"ion-button",9),n.NdJ("click",function(){return a.asistencia()}),n._uU(21,"Ver Asistencia"),n.qZA()()(),n.TgZ(22,"div",10)(23,"ion-toolbar")(24,"ion-button",11),n.NdJ("click",function(){return a.logOut()}),n._UZ(25,"ion-icon",12),n.qZA()()()()),2&e&&(n.xp6(2),n.Q6J("translucent",!0))},dependencies:[o.YG,o.Sm,o.PM,o.W2,o.Gu,o.gu,o.wd,o.sr],styles:[".divEspacio[_ngcontent-%COMP%]{padding-top:20px;padding-bottom:px}.editButton[_ngcontent-%COMP%]{width:full;height:60px}.tittle-main-user[_ngcontent-%COMP%]{flex:content;justify-content:center;text-align:center}.button-setting-login[_ngcontent-%COMP%]{font-size:25px;margin-right:10px}.footer-main-page[_ngcontent-%COMP%]{flex:content;justify-content:center;text-align:center;margin-top:200px}.text-main-page[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.image-main-page[_ngcontent-%COMP%]{font-size:150px;display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:50px}"]}),r})()}];let M=(()=>{var t;class r{}return(t=r).\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[s.Bz.forChild(v),s.Bz]}),r})(),y=(()=>{var t;class r{}return(t=r).\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[d.ez,p.u5,o.Pc,M]}),r})()}}]);