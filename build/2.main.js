webpackJsonp([2],{

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(262);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
        ]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"c:\xampp\htdocs\frontend-test\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Frontend Test - Media Application</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div id="indicator" class="carousel slide" data-ride="carousel">\n    <ol class="carousel-indicators">\n      <li data-target="#indicator" data-slide-to="0" class="active"></li>\n      <li data-target="#indicator" data-slide-to="1"></li>\n      <li data-target="#indicator" data-slide-to="2"></li>\n    </ol>\n    <div class="carousel-inner" role="listbox">\n      <div class="carousel-item active">\n        <img class="d-block img-fluid" src="http://placehold.it/1200x300" alt="Image 1">\n      </div>\n      <div class="carousel-item">\n        <img class="d-block img-fluid" src="http://placehold.it/1200x300" alt="Image 2">\n      </div>\n      <div class="carousel-item">\n        <img class="d-block img-fluid" src="http://placehold.it/1200x300" alt="Image 3">\n      </div>\n    </div>\n    <a class="carousel-control-prev" href="#indicator" role="button" data-slide="prev">\n      <span class="carousel-control-prev-icon" aria-hidden="true"></span>\n      <span class="sr-only">Previous</span>\n    </a>\n    <a class="carousel-control-next" href="#indicator" role="button" data-slide="next">\n      <span class="carousel-control-next-icon" aria-hidden="true"></span>\n      <span class="sr-only">Next</span>\n    </a>\n  </div>\n\n  <ion-grid padding>\n    <ion-row>\n      <ion-col col-12 col-md-6>\n        <ion-list>\n          <ion-item-divider color="primary">Latest News</ion-item-divider>\n          <button ion-item *ngFor="let new of [1,2,3,4,5]" (tap)="navCtrl.push(\'ViewNewsPage\')">\n            <ion-icon name="paper" item-left></ion-icon>\n            News Item\n          </button>\n        </ion-list>\n      </ion-col>\n      <ion-col col-12 col-md-6>\n        <img src="http://placehold.it/600x300" class="img-fluid"/>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer class="footer">\n  <ion-toolbar>\n    <ion-title>Media Applications</ion-title>\n    <ion-buttons end margin-right>\n    <button ion-fab  mini (tap)="modalCtrl.create(\'InfoPage\').present()">\n      <ion-icon name="information"></ion-icon></button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"c:\xampp\htdocs\frontend-test\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map