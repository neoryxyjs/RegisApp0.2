"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[898],{898:(P,s,n)=>{n.r(s),n.d(s,{RecuperarClavePageModule:()=>h});var v=n(6814),u=n(95),t=n(7027),p=n(7050),g=n(5861),e=n(5879),m=n(7698);const f=[{path:"",component:(()=>{var r;class o{constructor(a,l,c){this.afAuth=a,this.alertController=l,this.navCtrl=c,this.email=""}resetPassword(){var a=this;return(0,g.Z)(function*(){try{yield a.afAuth.sendPasswordResetEmail(a.email),a.presentAlert("Se ha enviado un mensaje de recuperaci\xf3n a su correo.","Recuperaci\xf3n")}catch(l){a.presentAlert("Error al enviar el correo de recuperaci\xf3n.","Error"),console.error("Error al enviar correo de recuperaci\xf3n de contrase\xf1a",l)}})()}presentAlert(a,l){var c=this;return(0,g.Z)(function*(){yield(yield c.alertController.create({header:l,message:a,buttons:[{text:"Ok",handler:()=>{c.navCtrl.navigateRoot("/login")}}]})).present()})()}}return(r=o).\u0275fac=function(a){return new(a||r)(e.Y36(m.zQ),e.Y36(t.Br),e.Y36(t.SH))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-recuperar-clave"]],decls:21,vars:3,consts:[[3,"translucent"],[1,"tittle-nav"],["slot","start"],["defaultHref","/login"],[3,"fullscreen"],[1,"icon-recuperar"],["name","people-circle-outline"],[1,"tittle-recuperar"],[1,"label-email-recuperar"],["position","floating"],["type","email",3,"ngModel","ngModelChange"],[1,"recuperar-button"],["expand","full",3,"click"]],template:function(a,l){1&a&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title"),e._uU(3,"Recuperar Clave"),e.qZA(),e.TgZ(4,"ion-buttons",2),e._UZ(5,"ion-back-button",3),e.qZA()()(),e.TgZ(6,"ion-content",4)(7,"div",5),e._UZ(8,"ion-icon",6),e.qZA(),e.TgZ(9,"div",7)(10,"h1"),e._uU(11,"Ingrese Su Correo"),e.qZA()(),e.TgZ(12,"div",8)(13,"ion-card")(14,"ion-item")(15,"ion-label",9),e._uU(16,"Email"),e.qZA(),e.TgZ(17,"ion-input",10),e.NdJ("ngModelChange",function(d){return l.email=d}),e.qZA()()()(),e.TgZ(18,"div",11)(19,"ion-button",12),e.NdJ("click",function(){return l.resetPassword()}),e._uU(20,"Recuperar"),e.qZA()()()),2&a&&(e.Q6J("translucent",!0),e.xp6(6),e.Q6J("fullscreen",!0),e.xp6(11),e.Q6J("ngModel",l.email))},dependencies:[u.JJ,u.On,t.oU,t.YG,t.Sm,t.PM,t.W2,t.Gu,t.gu,t.pK,t.Ie,t.Q$,t.wd,t.sr,t.j9,t.cs],styles:[".recuperar-button[_ngcontent-%COMP%]{padding-left:50px;padding-right:50px;padding-top:30px}.label-email-recuperar[_ngcontent-%COMP%]{text-align:center;padding-left:15px;padding-right:15px}.tittle-recuperar[_ngcontent-%COMP%]{text-align:center;padding-top:25px}.icon-recuperar[_ngcontent-%COMP%]{font-size:large;font-size:100px;display:flex;flex-direction:column;align-items:center;margin-bottom:5px;margin-top:125px}.tittle-nav[_ngcontent-%COMP%]{text-align:center;display:flex;align-items:center}"]}),o})()}];let C=(()=>{var r;class o{}return(r=o).\u0275fac=function(a){return new(a||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[p.Bz.forChild(f),p.Bz]}),o})(),h=(()=>{var r;class o{}return(r=o).\u0275fac=function(a){return new(a||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[v.ez,u.u5,t.Pc,C]}),o})()}}]);