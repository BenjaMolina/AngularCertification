"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[669],{1669:function(H,Z,c){c.r(Z),c.d(Z,{WeatherModule:function(){return N}});var p=c(3144),l=c(5671),m=c(9808),f=c(3072),x=c(7762),T=c(3900),e=c(5105),F=c(4902),v=c(2340),A=c(520),g=function(){var t=function(){function o(n){(0,l.Z)(this,o),this.http=n,this.baseUrl=v.N.baseURL,this.key=v.N.openWeatherApiKey,this._history=[],this._history=JSON.parse(localStorage.getItem("history"))||[]}return(0,p.Z)(o,[{key:"history",get:function(){return(0,F.Z)(this._history)}},{key:"getWeatherZipCode",value:function(r){return this.http.get("".concat(this.baseUrl,"/weather?zip=").concat(r,",us&units=metric&appid=").concat(this.key))}},{key:"getForcastZipCode",value:function(r){return this.http.get("".concat(this.baseUrl,"/forecast/daily?zip=").concat(r,",us&units=metric&cnt=5&appid=").concat(this.key))}},{key:"addHistory",value:function(r){this._history.find(function(a){return a.zip===r.zip})||this._history.unshift(r),this.saveOnStorage()}},{key:"removeCurrentWeather",value:function(r){this._history=this._history.filter(function(i){return i.zip!==r.zip}),this.saveOnStorage()}},{key:"saveOnStorage",value:function(){localStorage.setItem("history",JSON.stringify(this._history))}}]),o}();return t.\u0275fac=function(n){return new(n||t)(e.LFG(A.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),C=function(){var t=function(){function o(){(0,l.Z)(this,o),this.imageURL=v.N.imageURL}return(0,p.Z)(o,[{key:"transform",value:function(r){switch(r){case"Rain":return"".concat(this.imageURL,"rain.png");case"Clouds":case"Mist":return"".concat(this.imageURL,"clouds.png");case"Snow":return"".concat(this.imageURL,"snow.png");case"Sunny":case"Clear":return"".concat(this.imageURL,"sun.png")}}}]),o}();return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=e.Yjl({name:"imagen",type:t,pure:!0}),t}();function M(t,o){if(1&t&&(e.TgZ(0,"div",1),e.TgZ(1,"div"),e.TgZ(2,"h3"),e._uU(3),e.ALo(4,"date"),e.qZA(),e.TgZ(5,"h4"),e._uU(6),e.qZA(),e.TgZ(7,"h4"),e._uU(8,"Temperatures today:"),e.qZA(),e.TgZ(9,"p"),e._uU(10),e.qZA(),e.qZA(),e.TgZ(11,"div"),e._UZ(12,"img",2),e.ALo(13,"imagen"),e.qZA(),e.qZA()),2&t){var n=o.$implicit;e.xp6(3),e.Oqu(e.xi3(4,6,n.date,"fullDate")),e.xp6(3),e.hij("Current conditions: ",n.conditions,""),e.xp6(4),e.lnq(" Current: ",n.temp," \xb0C - Max: ",n.tempMax," \xb0C - Min: ",n.tempMin," \xb0C "),e.xp6(2),e.Q6J("src",e.lcZ(13,9,n.conditions),e.LSH)}}var U=function(){var t=function(){function o(){(0,l.Z)(this,o),this.forecasts=[]}return(0,p.Z)(o,[{key:"ngOnInit",value:function(){}}]),o}();return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-forecast-day"]],inputs:{forecasts:"forecasts"},decls:1,vars:1,consts:[["class","well flex well-no-background",4,"ngFor","ngForOf"],[1,"well","flex","well-no-background"],[3,"src"]],template:function(n,r){1&n&&e.YNc(0,M,14,11,"div",0),2&n&&e.Q6J("ngForOf",r.forecasts)},directives:[m.sg],pipes:[m.uU,C],styles:[".well-no-background[_ngcontent-%COMP%]{background-color:transparent!important;border:none}"]}),t}();function k(t,o){if(1&t&&(e.TgZ(0,"div",1),e._uU(1),e.qZA()),2&t){var n=e.oxw();e.xp6(1),e.hij(" ",n.errorMessage,"\n")}}var y=function(){var t=function(){function o(){(0,l.Z)(this,o),this.errorMessage=""}return(0,p.Z)(o,[{key:"ngOnInit",value:function(){}}]),o}();return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-error-response"]],inputs:{errorMessage:"errorMessage"},decls:1,vars:1,consts:[["class","alert alert-danger","role","alert",4,"ngIf"],["role","alert",1,"alert","alert-danger"]],template:function(n,r){1&n&&e.YNc(0,k,2,1,"div",0),2&n&&e.Q6J("ngIf",r.errorMessage)},directives:[m.O5],styles:[""]}),t}();function I(t,o){if(1&t){var n=e.EpF();e.TgZ(0,"div",2),e.TgZ(1,"h4"),e._uU(2),e.qZA(),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"h3",5),e._uU(6),e.qZA(),e.qZA(),e._UZ(7,"app-forecast-day",6),e.qZA(),e.TgZ(8,"button",7),e.NdJ("click",function(){return e.CHM(n),e.oxw().back()}),e._uU(9,"< Back to main page"),e.qZA(),e._UZ(10,"br"),e.qZA()}if(2&t){var r=e.oxw();e.xp6(2),e.AsE("Template for 5-day forecast page: ",null==r.forecast?null:r.forecast.name," (",null==r.forecast?null:r.forecast.zip,")"),e.xp6(4),e.AsE("5-day forecast for: ",null==r.forecast?null:r.forecast.name," (",null==r.forecast?null:r.forecast.zip,")"),e.xp6(1),e.Q6J("forecasts",null==r.forecast?null:r.forecast.data)}}function W(t,o){if(1&t&&e._UZ(0,"app-error-response",8),2&t){var n=e.oxw();e.Q6J("errorMessage",n.errorMessage)}}var S=function(){var t=function(){function o(n,r,i){(0,l.Z)(this,o),this.activatedRoute=n,this.weatherService=r,this.router=i}return(0,p.Z)(o,[{key:"ngOnInit",value:function(){var r=this;this.activatedRoute.params.pipe((0,T.w)(function(i){var a=i.zipcode;return r.zipcode=a,r.weatherService.getForcastZipCode(a)})).subscribe({next:function(a){r.forecast={name:a.city.name,zip:r.zipcode,data:[]};var d,s=(0,x.Z)(a.list);try{for(s.s();!(d=s.n()).done;){var h=d.value,Y={name:a.city.name,zip:Number(r.zipcode),conditions:h.weather[0].main,temp:h.temp.day,tempMax:h.temp.max,tempMin:h.temp.min,date:new Date(1e3*h.dt)};r.forecast.data.push(Y)}}catch(E){s.e(E)}finally{s.f()}console.log(r.forecast)},error:function(a){r.errorMessage=a.error.message}})}},{key:"back",value:function(){this.router.navigate(["/weather/list"])}}]),o}();return t.\u0275fac=function(n){return new(n||t)(e.Y36(f.gz),e.Y36(g),e.Y36(f.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-forecast"]],decls:3,vars:2,consts:[["class","container-fluid",4,"ngIf","ngIfElse"],["error",""],[1,"container-fluid"],[1,"panel","panel-default"],[1,"panel-heading"],[1,"panel-title"],[3,"forecasts"],["tabindex","0",1,"btn","btn-success",3,"click"],[3,"errorMessage"]],template:function(n,r){if(1&n&&(e.YNc(0,I,11,5,"div",0),e.YNc(1,W,1,1,"ng-template",null,1,e.W1O)),2&n){var i=e.MAs(2);e.Q6J("ngIf",r.forecast)("ngIfElse",i)}},directives:[m.O5,U,y],encapsulation:2}),t}(),z=function(){var t=function(){function o(){(0,l.Z)(this,o)}return(0,p.Z)(o,[{key:"ngOnInit",value:function(){}}]),o}();return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home"]],decls:2,vars:0,consts:[[1,"container","max-container"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0),e._UZ(1,"router-outlet"),e.qZA())},directives:[f.lC],styles:[".max-container[_ngcontent-%COMP%]{max-width:700px!important}"]}),t}(),u=c(2382);function O(t,o){1&t&&(e.TgZ(0,"p",6),e._uU(1," Please enter a valid US zipcode! "),e.qZA())}var b=function(){var t=function(){function o(n,r){(0,l.Z)(this,o),this.fb=n,this.weatherService=r,this.miFormulario=this.fb.group({zipcode:[,[u.kI.required,u.kI.minLength(3),u.kI.min(0)]]}),this.errorMessage=""}return(0,p.Z)(o,[{key:"ngOnInit",value:function(){}},{key:"validInput",value:function(r){return this.miFormulario.controls[r].errors&&this.miFormulario.controls[r].touched}},{key:"onSubmit",value:function(){var r=this;if(this.miFormulario.invalid)this.miFormulario.markAllAsTouched();else{var i=this.miFormulario.value.zipcode;this.weatherService.getWeatherZipCode(i).subscribe({next:function(s){var d={name:s.name,zip:i,conditions:s.weather[0].main,temp:s.main.temp,tempMax:s.main.temp_max,tempMin:s.main.temp_min,date:new Date};r.weatherService.addHistory(d),r.errorMessage="",r.miFormulario.reset()},error:function(s){r.errorMessage=s.error.message}})}}}]),o}();return t.\u0275fac=function(n){return new(n||t)(e.Y36(u.qu),e.Y36(g))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-zip-code"]],decls:11,vars:6,consts:[[1,"well"],[3,"errorMessage"],["autocomplete","off",3,"formGroup","ngSubmit"],["type","number","placeholder","Zipcode","formControlName","zipcode",1,"form-control"],["class","form-text text-danger",4,"ngIf"],[1,"btn","btn-primary",3,"disabled"],[1,"form-text","text-danger"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"h2"),e._uU(2,"Enter a zipcode:"),e.qZA(),e._UZ(3,"app-error-response",1),e.TgZ(4,"form",2),e.NdJ("ngSubmit",function(){return r.onSubmit()}),e._UZ(5,"input",3),e.YNc(6,O,2,0,"p",4),e._UZ(7,"br"),e.TgZ(8,"button",5),e._uU(9," Add location "),e.qZA(),e.qZA(),e.qZA(),e._UZ(10,"hr")),2&n&&(e.xp6(3),e.Q6J("errorMessage",r.errorMessage),e.xp6(1),e.Q6J("formGroup",r.miFormulario),e.xp6(1),e.ekj("is-invalid",r.validInput("zipcode")),e.xp6(1),e.Q6J("ngIf",r.validInput("zipcode")),e.xp6(2),e.Q6J("disabled",r.miFormulario.invalid))},directives:[y,u._Y,u.JL,u.sg,u.wV,u.Fj,u.JJ,u.u,m.O5],styles:["input.is-invalid[_ngcontent-%COMP%]{border:1px solid red}.text-danger[_ngcontent-%COMP%]{color:red}"]}),t}(),_=function(o){return["/weather/forecast",o]};function q(t,o){if(1&t){var n=e.EpF();e.TgZ(0,"div",1),e.TgZ(1,"div"),e.TgZ(2,"h3"),e._uU(3),e.qZA(),e.TgZ(4,"h4"),e._uU(5),e.qZA(),e.TgZ(6,"h4"),e._uU(7,"Temperatures today:"),e.qZA(),e.TgZ(8,"p"),e._uU(9),e.qZA(),e.TgZ(10,"p"),e.TgZ(11,"a",2),e._uU(12),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"div"),e.TgZ(14,"span",3),e.NdJ("click",function(){var s=e.CHM(n).$implicit;return e.oxw().removeWeather(s)}),e._uU(15,"\xd7"),e.qZA(),e._UZ(16,"img",4),e.ALo(17,"imagen"),e.qZA(),e.qZA()}if(2&t){var r=o.$implicit;e.xp6(3),e.AsE("",r.name," (",r.zip,")"),e.xp6(2),e.hij("Current conditions: ",r.conditions,""),e.xp6(4),e.lnq(" Current: ",r.temp," \xb0C - Max: ",r.tempMax," \xb0C - Min: ",r.tempMin," \xb0C "),e.xp6(2),e.Q6J("routerLink",e.VKq(11,_,r.zip)),e.xp6(1),e.hij("Show 5-day forecast for ",r.name,""),e.xp6(4),e.Q6J("src",e.lcZ(17,9,r.conditions),e.LSH)}}var w=function(){var t=function(){function o(n){(0,l.Z)(this,o),this.weatherService=n}return(0,p.Z)(o,[{key:"history",get:function(){return this.weatherService.history}},{key:"ngOnInit",value:function(){}},{key:"removeWeather",value:function(r){this.weatherService.removeCurrentWeather(r)}}]),o}();return t.\u0275fac=function(n){return new(n||t)(e.Y36(g))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-current-weather"]],decls:2,vars:1,consts:[["class","well flex",4,"ngFor","ngForOf"],[1,"well","flex"],[3,"routerLink"],[1,"close",3,"click"],[3,"src"]],template:function(n,r){1&n&&(e.TgZ(0,"div"),e.YNc(1,q,18,13,"div",0),e.qZA()),2&n&&(e.xp6(1),e.Q6J("ngForOf",r.history))},directives:[m.sg,f.yS],pipes:[C],styles:[""]}),t}(),J=[{path:"",component:z,children:[{path:"list",component:function(){var t=function(){function o(n){(0,l.Z)(this,o),this.weatherService=n}return(0,p.Z)(o,[{key:"ngOnInit",value:function(){}}]),o}();return t.\u0275fac=function(n){return new(n||t)(e.Y36(g))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-list-weather"]],decls:2,vars:0,template:function(n,r){1&n&&(e._UZ(0,"app-zip-code"),e._UZ(1,"app-current-weather"))},directives:[b,w],encapsulation:2}),t}()},{path:"forecast/:zipcode",component:S},{path:"**",redirectTo:"list"}]}],R=function(){var t=(0,p.Z)(function o(){(0,l.Z)(this,o)});return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[f.Bz.forChild(J)],f.Bz]}),t}(),N=function(){var t=(0,p.Z)(function o(){(0,l.Z)(this,o)});return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[m.ez,u.UX,R]]}),t}()}}]);