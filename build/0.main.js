webpackJsonp([0],{

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_news__ = __webpack_require__(264);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewNewsPageModule", function() { return ViewNewsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewNewsPageModule = (function () {
    function ViewNewsPageModule() {
    }
    return ViewNewsPageModule;
}());
ViewNewsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__view_news__["a" /* ViewNewsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__view_news__["a" /* ViewNewsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__view_news__["a" /* ViewNewsPage */]
        ]
    })
], ViewNewsPageModule);

//# sourceMappingURL=view-news.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewNewsPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewNewsPage = (function () {
    function ViewNewsPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ViewNewsPage.prototype.ionViewDidLoad = function () {
    };
    return ViewNewsPage;
}());
ViewNewsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        defaultHistory: ['HomePage']
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-view-news',template:/*ion-inline-start:"c:\xampp\htdocs\frontend-test\src\pages\view-news\view-news.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Loren ipsum</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col  col-12 col-md-4>\n        <img src="assets/cover2.jpg" class="img-fluid dropImage"/>\n      </ion-col>\n      <ion-col col-12 col-md-8>\n        <p class="dropContent">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in diam id sem bibendum interdum. Suspendisse et pellentesque ex. In blandit rutrum bibendum. Cras ullamcorper enim lacus, et sagittis massa efficitur commodo. Integer sed felis in neque convallis posuere vitae eu justo. Morbi at volutpat nibh. Vestibulum congue porttitor suscipit. Aenean aliquam, neque sit amet euismod dictum, nibh turpis gravida felis, eget dictum lacus ex id dolor. Nunc in rutrum lacus. Duis lobortis, dui sit amet imperdiet bibendum, nisl mauris pulvinar dolor, et commodo ipsum libero viverra leo. Vivamus pulvinar magna sed luctus congue. Duis ullamcorper vehicula ipsum sit amet blandit. Vivamus id orci at lacus consectetur molestie nec ut sem. Proin accumsan volutpat elit, vel feugiat sapien ornare ac.\n\n          Nulla sagittis sagittis commodo. Fusce at enim scelerisque, suscipit eros non, bibendum turpis. Pellentesque vel risus mi. Fusce a malesuada tortor. Pellentesque pretium sapien a dui scelerisque, ut elementum enim efficitur. Vestibulum sed velit justo. Nunc aliquam purus imperdiet egestas gravida. Cras bibendum velit at tellus rhoncus convallis. Nullam tristique risus id sodales sodales. Integer porta maximus tellus, quis euismod diam vestibulum non. Etiam et nibh pulvinar, consequat quam convallis, sagittis risus. Cras sagittis, dolor nec sollicitudin vulputate, leo mauris pellentesque felis, in bibendum tortor lacus nec neque. Morbi congue, ipsum ac mollis malesuada, eros libero auctor dolor, ac finibus tortor odio sed metus. Nullam nec rutrum odio.\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"c:\xampp\htdocs\frontend-test\src\pages\view-news\view-news.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */]])
], ViewNewsPage);

//# sourceMappingURL=view-news.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map