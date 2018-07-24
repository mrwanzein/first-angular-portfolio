webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_contact_contact_component__ = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/components/portfolio/portfolio.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_5__components_portfolio_portfolio_component__["a" /* PortfolioComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_3__components_contact_contact_component__["a" /* ContactComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_nav_nav_component__ = __webpack_require__("../../../../../src/app/components/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/components/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_contact_contact_component__ = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_portfolio_portfolio_component__["a" /* PortfolioComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#about {\r\n    margin-top: 30px;\r\n    font-size: 1.2em;\r\n    text-align: justify;\r\n}\r\n\r\n.container {\r\n    background: #fffef4;\r\n    -webkit-box-shadow: 0px 6px 5px 3px #999999;\r\n            box-shadow: 0px 6px 5px 3px #999999;\r\n    padding-bottom: 110px;\r\n}\r\n\r\n.ion-android-star {\r\n    color: red;\r\n    font-size: 1.3em;\r\n}\r\n\r\n.ion-android-star-outline {\r\n    font-size: 1.3em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  \n  <br>\n\n  <h3>BACKGROUND</h3>\n\n  <div>\n    <p id=\"about\">Hi, my name is Mrwan - pronounced mahr-wan - , I live in Cananda Montreal and I started my journey into \n      programming with a focus on web developement since november 2nd 2017. Most of the knowledge that I gained was through \n      the internet(Udemy, freecodecamp, youtube, etc...), so I had to be very disciplined and dedicated about it if I wanted \n      to grow. I am very eager to work with a team of developerse and I can easily be coached so I can refine my craft to the next level and \n      provide a valuable service. I continiously learn outside of the job since I know how dynamic the software developement \n      world can be. Thank you for reading!\n    </p>\n  </div>\n\n  <br>\n\n  <div style=\"margin-left: 1.5%\">\n    <h3>TECHNICAL SKILLS</h3>\n    <br>\n    <h4>FRONT-END</h4>\n    <p>HTML &nbsp;  <i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star-outline\"></i><i class=\"ion-android-star-outline\"></i></p>\n    <p>CSS &nbsp; <i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star-outline\"></i><i class=\"ion-android-star-outline\"></i><i class=\"ion-android-star-outline\"></i></p>\n    <p>JAVASCRIPT &nbsp; <i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star-outline\"></i><i class=\"ion-android-star-outline\"></i><i class=\"ion-android-star-outline\"></i></p>\n    <ul><li>Angular 5 &nbsp; <i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star-outline\"></i><i class=\"ion-android-star-outline\"></i><i class=\"ion-android-star-outline\"></i><i class=\"ion-android-star-outline\"></i></li></ul>\n    <p>Can build bootstrap responsive website</p>\n    <br>\n    <h4>BACK-END</h4>\n    <p>NODE.JS(Express) &nbsp; <i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star-outline\"></i><i class=\"ion-android-star-outline\"></i><i class=\"ion-android-star-outline\"></i><i class=\"ion-android-star-outline\"></i><i class=\"ion-android-star-outline\"></i></p>\n    <p>MongoDB &nbsp; <i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star\"></i><i class=\"ion-android-star-outline\"></i><i class=\"ion-android-star-outline\"></i><i class=\"ion-android-star-outline\"></i><i class=\"ion-android-star-outline\"></i><i class=\"ion-android-star-outline\"></i></p>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/components/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n\r\ninput {\r\n    width: 100%;\r\n    margin: 20px 0;\r\n    background: white;\r\n    border: none;\r\n    border-bottom: 1px solid rgb(80, 178, 235);\r\n}\r\n\r\ninput:focus {\r\n    outline: none;\r\n    -webkit-box-shadow: 0 0 10px 1px rgb(80, 178, 235);\r\n            box-shadow: 0 0 10px 1px rgb(80, 178, 235);\r\n}\r\n\r\ntextarea {\r\n    width: 100%;\r\n    margin: 20px 0;\r\n    background: white;\r\n    border: none;\r\n    border-bottom: 1px solid rgb(80, 178, 235);\r\n}\r\n\r\ntextarea:focus {\r\n    outline: none;\r\n    -webkit-box-shadow: 0 0 10px 1px rgb(80, 178, 235);\r\n            box-shadow: 0 0 10px 1px rgb(80, 178, 235);\r\n}\r\n\r\nbutton {\r\n    display:inline-block;\r\n    padding:0.3em 1.2em;\r\n    margin:0 0.1em 0.1em 0;\r\n    border:0.16em solid rgba(255,255,255,0);\r\n    border-radius:2em;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    text-decoration:none;\r\n    font-family:'Roboto',sans-serif;\r\n    font-weight:300;\r\n    background:rgb(80, 178, 235);\r\n    text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);\r\n    text-align:center;\r\n    -webkit-transition: all 0.2s;\r\n    transition: all 0.2s;\r\n    width: 100%;\r\n}\r\n\r\nbutton:hover {\r\n    border-color: rgba(5, 5, 5, 0.6);\r\n}\r\n\r\nbutton:focus {\r\n    outline: none;\r\n    -webkit-box-shadow: 0 0 10px 2px;\r\n            box-shadow: 0 0 10px 2px;\r\n}\r\n\r\nh4 {\r\n    position: relative;\r\n    left: 19%;\r\n    margin-top: 8%;\r\n}\r\n\r\nh2 {\r\n    position: relative;\r\n    left: 13%;\r\n    margin-top: 2%;\r\n}\r\n\r\n#inputErr {\r\n    color: red;\r\n    font-size: 0.8em;\r\n    font-style: italic;\r\n}\r\n\r\n#msgSuccess {\r\n    position: absolute;\r\n    top: 80%;\r\n    left: 44%;\r\n    color: green;\r\n    font-style: italic;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Want to get in touch? Send me an email directly via this form.</h2>\n  <h4>All fields are required: &nbsp; <span id=\"inputErr\" *ngIf=\"bool == true\">{{ inputErr }}</span></h4>\n  <div class=\"form\">\n    <form onsubmit=\"return false\">\n      <input id=\"inputName\" type=\"text\" name=\"name\" placeholder=\"Your Name and subject of the message\" autocomplete=\"off\">\n      <input id=\"inputEmail\" type=\"text\" name=\"email\" placeholder=\"Your Email Address\" autocomplete=\"off\">\n      <textarea id=\"inputMsg\" name=\"text\" name=\"message\" cols=\"30\" rows=\"10\" placeholder=\"Your Message\" autocomplete=\"off\"></textarea>\n      <button id=\"btn\" (click)=\"sendMail()\" type=\"submit\">SEND</button>\n    </form>\n  </div>\n  <h5 id=\"msgSuccess\" *ngIf=\"bool == false\">{{ msgSuccess }}</h5>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = /** @class */ (function () {
    function ContactComponent(http, router) {
        this.http = http;
        this.router = router;
        this.inputErr = '*Please fill in missing input fields or fill a valid email address';
        this.msgSuccess = 'Your message has been sent!';
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.sendMail = function () {
        var name = document.getElementById('inputName'), email = document.getElementById('inputEmail'), msg = document.getElementById('inputMsg');
        var obj = {
            name: name.value,
            email: email.value,
            message: msg.value
        };
        var validateEmail = function () {
            var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])/;
            return re.test(email.value);
        };
        if (!name.value || !email.value || !msg.value || !validateEmail()) {
            this.bool = true;
        }
        else {
            this.bool = false;
            setTimeout(function () {
                window.location.reload();
            }, 1500);
            // http request must have return statement
            // no need to use json.stringify if you use body-parser
            return this.http.post('https://mrwanzein.herokuapp.com/client-contact', obj).subscribe();
        }
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    background-color: lightgrey;\r\n    color: #3b609b;\r\n    text-align: center;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    font-size: 0.7em;\r\n }\r\n\r\n .ion-social-github {\r\n     font-size: 1.3em\r\n }\r\n ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  Copyright © {{ dynamicDate.getFullYear() }} | Mrwan Zein &nbsp;&nbsp; <a href=\"https://github.com/mrwanzein\" target=\"_blank\"><i class=\"ion-social-github\" title=\"Git hub account\"></i></a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.dynamicDate = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img.bg {\r\n  /* Set rules to fill background */\r\n  min-height: 100%;\r\n  min-width: 1024px;\r\n\t\r\n  /* Set up proportionate scaling */\r\n  width: 100%;\r\n  height: auto;\r\n\t\r\n  /* Set up positioning */\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: -1;\r\n}\r\n\r\nh1 {\r\n  height: 100%;\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  position: relative;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  top: 200px;  \r\n}\r\n\r\n.btn {\r\ndisplay:inline-block;\r\npadding: 0.5em 3em;\r\nborder:0.16em solid rgb(0, 0, 0);\r\nmargin:0 0.3em 0.3em 0;\r\n-webkit-box-sizing: border-box;\r\n        box-sizing: border-box;\r\ntext-decoration:none;\r\ntext-transform:uppercase;\r\nfont-family:'Roboto',sans-serif;\r\nfont-weight:400;\r\ncolor:rgb(0, 0, 0);\r\ntext-align:center;\r\n-webkit-transition: all 0.15s;\r\ntransition: all 0.15s;\r\nposition: absolute;\r\ntop: 80%;\r\nleft: 43.8%;\r\n}\r\n\r\n.btn:hover {\r\n color:rgb(80, 178, 235);\r\n border-color:rgb(80, 178, 235);\r\n}\r\n\r\n.btn:active {\r\ncolor:#BBBBBB;\r\nborder-color:#BBBBBB;\r\n}\r\n\r\n.msgBox {\r\n  background: rgba(0, 0, 0, 0.65);\r\n  color: rgb(255, 255, 255);\r\n  display: inline-block;\r\n  position: absolute;\r\n  padding: 85px;\r\n  padding-bottom: 65px;\r\n  top: 45%;\r\n  left: 40%;\r\n  text-transform: uppercase;\r\n  border-radius: 20%; \r\n}\r\n\r\n.ion-ios-sunny {\r\n  color: yellow;\r\n  margin-left: 40%;\r\n  font-size: 2.5em;\r\n}\r\n\r\n@media screen and (max-width: 350px) {\r\n\r\n  .msgBox {\r\n    left: 20%;\r\n    padding: 15px;\r\n    top: 66%;\r\n  }\r\n\r\n  .btn {\r\n    left: 22%;\r\n    top: 90%;\r\n  }\r\n\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<img class=\"bg\" src=\"https://images.pexels.com/photos/355770/pexels-photo-355770.jpeg?cs=srgb&dl=adventure-alpine-background-355770.jpg&fm=jpg\" alt=\"cold mountain landscape\">\n  \n<div class=\"container\">\n    <div>\n      <h1>Hi, I'm Mrwan Zein and I'm a web developer.</h1>\n    </div>\n\n    <div>\n      <button class=\"btn\" (click)=\"animate1()\"> Click! </button>\n    </div>\n\n    <div class=\"msgBox\" [@divState]='state'>\n      <p>Have a nice day! <br> <i class=\"ion-ios-sunny\"></i></p>\n    </div>\n  </div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.state = 'hide';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.animate1 = function () {
        this.state == 'hide' ? this.state = 'show' : this.state = 'hide';
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('divState', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('show', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        opacity: 1
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('hide', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        opacity: 0
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('hide => show', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('600ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('show => hide', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('600ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header {\r\n    background: #3b609b;\r\n}\r\n\r\nheader::after {\r\n    content:'';\r\n    display: table;\r\n    clear: both;\r\n}\r\n\r\n#welcome {\r\n    float: left;\r\n    padding: 10px 10px;\r\n    color: rgb(80, 178, 235);\r\n}\r\n\r\nnav {\r\n    float: right;\r\n}\r\n\r\nnav ul {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\nnav li {\r\n    display: inline-block;\r\n    margin-right: 55px;\r\n    padding-top: 14px;\r\n}\r\n\r\nnav a {\r\n    text-decoration: none;\r\n    color: white;\r\n    text-transform: uppercase;\r\n    -webkit-text-stroke: 1px rgb(253, 253, 253);\r\n    font-size: 20px;\r\n}\r\n\r\nnav li :hover:not(i) {\r\n    color: rgb(253, 0, 0);\r\n}\r\n\r\n.ion-navicon-round {\r\n    display: none;\r\n}\r\n\r\n@media screen and (max-width: 759px) {\r\n    ul li:not(:last-child) {display: none;}\r\n    li a i.ion-navicon-round {  \r\n     display: block;\r\n     padding-left: 45px;\r\n    }\r\n  }\r\n\r\n@media screen and (max-width: 759px) {\r\n    \r\n    \r\n    li a i.ion-navicon-round{\r\n        position: absolute;\r\n        right: 0;\r\n        top: 0;\r\n        padding-right: 12px;\r\n        padding-top: 15px; \r\n      }\r\n    \r\n     ul.responsive li {\r\n      float: left;  \r\n      display: block;\r\n      width: 100%;\r\n      text-align: center;\r\n    }\r\n  }\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<header>         \n  <h3 id=\"welcome\">Welcome</h3>\n    <nav>\n      <ul class=\"nav\" id=\"responsive-nav\">\n        <li><a routerLink='/home'>Home</a></li>\n        <li><a routerLink='/about'>About</a></li>\n        <li><a routerLink='/portfolio'>Portfolio</a></li>\n        <li><a routerLink='/contact'>Contact</a></li>\n        <li><a href=\"javascript:void(0);\" (click)=\"display()\"><i class=\"ion-navicon-round\"></i></a></li>\n      </ul>\n    </nav>        \n</header>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.display = function () {
        var x = document.getElementById("responsive-nav");
        if (x.className === "nav") {
            x.className += " responsive";
        }
        else {
            x.className = "nav";
        }
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/portfolio/portfolio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\r\n    margin-left: 20%;\r\n    background: #fffef4;\r\n    -webkit-box-shadow: 0px 6px 5px 3px #999999;\r\n            box-shadow: 0px 6px 5px 3px #999999;\r\n    position: absolute;\r\n    height: 100%;\r\n}\r\n\r\n#a {\r\n    margin-top: 5%;\r\n    text-decoration: underline;\r\n}\r\n\r\n#b {\r\n    margin-top: 64%;\r\n    padding-bottom: 75px;\r\n    text-decoration: underline;\r\n    position: absolute; \r\n}\r\n\r\n.projectTemplate {\r\n    width: 510px;\r\n    height: 350px;\r\n    margin: 15px;\r\n}\r\n\r\n#one {\r\n    background: url(\"https://s17.postimg.cc/e8e18r5sf/Web_template.png\") no-repeat;\r\n    background-size: contain;\r\n    float:left;\r\n}\r\n\r\n#one:hover::before {\r\n    content: 'A responsive template website done with flexbox (can also be done with bootstrap)';\r\n    background: rgba(0, 0, 0, 0.7);\r\n    font-size: 1.6em;\r\n    color: white;\r\n    display: block;\r\n    padding: 10px;\r\n}\r\n\r\n#two {\r\n    background: url(\"https://s17.postimg.cc/b43dcfeun/Wiki_viewer.png\") no-repeat;\r\n    background-size: contain;\r\n    float: left;\r\n}\r\n\r\n#two:hover::before {\r\n    content: 'A search bar connected to Wikipedia\\'s Api';\r\n    background: rgba(0, 0, 0, 0.7);\r\n    font-size: 1.6em;\r\n    color: white;\r\n    display: block;\r\n    padding: 10px;\r\n    \r\n}\r\n\r\n#three {\r\n    background: url(\"https://s9.postimg.cc/42y9ht85r/js_calculator.png\") no-repeat;\r\n    background-size: contain;\r\n    float: left;\r\n}\r\n\r\n#three:hover::before {\r\n    content: 'A calculator made with vanilla js';\r\n    background: rgba(0, 0, 0, 0.7);\r\n    font-size: 1.6em;\r\n    color: white;\r\n    display: block;\r\n    padding: 10px;\r\n}\r\n\r\n#four {\r\n    background: url(\"https://s8.postimg.cc/7s0ilz5id/chat_app.png\") no-repeat;\r\n    background-size: contain;\r\n    float: left; \r\n}\r\n\r\n#four:hover::before {\r\n    content: 'A functional chat app made with node and socket.io';\r\n    background: rgba(0, 0, 0, 0.7);\r\n    font-size: 1.6em;\r\n    color: white;\r\n    display: block;\r\n    padding: 10px;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\"> \n  <div class=\"container\">\n\n        <h3 id=\"a\">Some side projects:</h3>\n        \n        <a href=\"https://codepen.io/Neo-dev/full/ppKqjp\" target=\"_blank\"><div class=\"projectTemplate\" id=\"one\"> </div></a>\n\n        <a href=\"https://codepen.io/Neo-dev/full/JOQgqZ\" target=\"_blank\"><div class=\"projectTemplate\" id=\"two\"></div></a>\n\n        <a href=\"https://codepen.io/Neo-dev/full/GQoEzj\" target=\"_blank\"><div class=\"projectTemplate\" id=\"three\"></div></a>\n\n        <a href=\"https://salty-meadow-33783.herokuapp.com\" target=\"_blank\"><div class=\"projectTemplate\" id=\"four\"></div></a>\n\n        <h3 id=\"b\">Client projects: will be displayed here</h3>\n        \n    </div>\n</div>    \n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-portfolio',
            template: __webpack_require__("../../../../../src/app/components/portfolio/portfolio.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map