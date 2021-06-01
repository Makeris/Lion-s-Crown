(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/cMK":
/*!********************************************************!*\
  !*** ./src/app/shared/pipes/admin-orders-pipe.pipe.ts ***!
  \********************************************************/
/*! exports provided: AdminOrdersPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrdersPipePipe", function() { return AdminOrdersPipePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AdminOrdersPipePipe {
    transform(value, searchProduct) {
        if (!value) {
            return [];
        }
        if (!searchProduct) {
            return value;
        }
        return value.filter(item => item.userName.toLowerCase().includes(searchProduct.toLowerCase()) ||
            item.userPhone.toLowerCase().includes(searchProduct.toLowerCase()) ||
            item.userHouse.toLowerCase().includes(searchProduct.toLowerCase()) ||
            item.userStreet.toLowerCase().includes(searchProduct.toLowerCase()) ||
            item.userCity.toLowerCase().includes(searchProduct.toLowerCase()));
    }
}
AdminOrdersPipePipe.ɵfac = function AdminOrdersPipePipe_Factory(t) { return new (t || AdminOrdersPipePipe)(); };
AdminOrdersPipePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "adminOrdersPipe", type: AdminOrdersPipePipe, pure: true });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\maker\OneDrive\Desktop\reserveCopy\src\main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 130, vars: 0, consts: [[2, "padding", "2%", "padding-top", "85px"], [1, "wrapper"], [1, "main", 2, "background-size", "cover", "background-repeat", "no-repeat", "background-position", "center"], [1, "contacts_us"], [1, "overlay", 2, "border-top-left-radius", "10px", "border-bottom-left-radius", "10px"], [1, "overlay"], [1, "overlay", 2, "border-top-right-radius", "10px", "border-bottom-right-radius", "10px"], [1, "home_history"], [1, "home_history_title"], [1, "home_history_text"], [1, "advantages"], [1, "advantage"], [1, "advantage_icon"], [1, "fas", "fa-check"], [1, "advantage_description"], [1, "advantage_title"], [1, "advantage_text"], [1, "fas", "fa-brush"], [1, "fas", "fa-drafting-compass"], [1, "fas", "fa-ruler-horizontal"], [1, "fas", "fa-people-carry"], [1, "far", "fa-money-bill-alt"], [1, "fas", "fa-lock"], [1, "fas", "fa-wrench"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u041B\u0410\u0421\u041A\u0410\u0412\u041E \u041F\u0420\u041E\u0421\u0418\u041C\u041E \u041D\u0410 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " \u041A\u041E\u0420\u041E\u041D\u0423 \u041B\u0415\u0412\u0410");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044F \u00AB\u041A\u043E\u0440\u043E\u043D\u0430-\u041B\u0435\u0432\u0430\u00BB \u0437\u0430\u0441\u043D\u043E\u0432\u0430\u043D\u0430 \u0443 2008 \u0440\u043E\u0446\u0456, \u0437\u043D\u0430\u0445\u043E\u0434\u0438\u0442\u044C\u0441\u044F \u0432\u043E\u043D\u0430 \u0443 \u041B\u044C\u0432\u043E\u0432\u0456. \u0417\u0430 \u0447\u0430\u0441 \u0456\u0441\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044F \u043D\u0435 \u043B\u0438\u0448\u0435 \u043D\u0430\u0440\u043E\u0441\u0442\u0438\u043B\u0430 \u0432\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u0434\u0432\u0435\u0440\u0435\u0439 \u0434\u043B\u044F \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0438, \u0440\u043E\u0437\u0448\u0438\u0440\u0438\u043B\u0430 \u0433\u043E\u0442\u043E\u0432\u0438\u0439 \u043A\u0430\u0442\u0430\u043B\u043E\u0433 \u0442\u043E\u0432\u0430\u0440\u0456\u0432, \u0430 \u0456 \u0437\u0430\u0432\u043E\u044E\u0432\u0430\u043B\u0430 \u0434\u043E\u0432\u0456\u0440\u0443 \u0437\u0430\u043C\u043E\u0432\u043D\u0438\u043A\u0456\u0432 \u0432 \u0423\u043A\u0440\u0430\u0457\u043D\u0456, \u0430 \u0442\u0430\u043A\u043E\u0436 \u0432 \u043A\u0440\u0430\u0457\u043D\u0430\u0445 \u0421\u041D\u0413. \u0421\u0430\u043B\u043E\u043D \u0434\u0432\u0435\u0440\u0435\u0439 \u0443 \u041B\u044C\u0432\u043E\u0432\u0456 \u00AB\u041A\u043E\u0440\u043E\u043D\u0430-\u041B\u0435\u0432\u0430\u00BB \u0437\u0430\u0439\u043C\u0430\u0454\u0442\u044C\u0441\u044F \u043F\u0440\u043E\u0434\u0430\u0436\u0435\u0439: \u0432\u0445\u0456\u0434\u043D\u0438\u0445 \u043C\u0435\u0442\u0430\u043B\u0435\u0432\u0438\u0445, \u043F\u0440\u043E\u0442\u0438\u043F\u043E\u0436\u0435\u0436\u043D\u0438\u0445, \u043C\u0456\u0436\u043A\u0456\u043C\u043D\u0430\u0442\u043D\u0438\u0445, \u0430 \u0442\u0430\u043A\u043E\u0436 \u0454 \u043F\u043E\u0442\u0443\u0436\u043D\u0438\u043C \u0432\u0438\u0440\u043E\u0431\u043D\u0438\u043A\u043E\u043C \u0441\u0435\u0439\u0444\u0456\u0432 \u0434\u043B\u044F \u0437\u0431\u0440\u043E\u0457, \u0456\u043A\u043E\u043D \u0437 \u0434\u0435\u0440\u0435\u0432\u0438\u043D\u0438 \u0442\u0432\u0435\u0440\u0434\u0438\u0445 \u043F\u043E\u0440\u0456\u0434. \u0417\u0430\u0432\u0434\u044F\u043A\u0438 \u0432\u0438\u0441\u043E\u043A\u043E\u044F\u043A\u0456\u0441\u043D\u043E\u043C\u0443 \u043E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u043D\u044E \u0442\u0430 \u043A\u0432\u0430\u043B\u0456\u0444\u0456\u043A\u043E\u0432\u0430\u043D\u0438\u043C \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0430\u043C, \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457 \u0432\u0434\u0430\u0454\u0442\u044C\u0441\u044F \u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0432\u0430\u0442\u0438 \u0441\u0432\u043E\u0457\u043C \u043A\u043B\u0456\u0454\u043D\u0442\u0430\u043C \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0456\u044E \u043D\u0430\u0439\u0432\u0438\u0449\u043E\u0457 \u044F\u043A\u043E\u0441\u0442\u0456. \u041D\u0430\u0448 \u0441\u0430\u043B\u043E\u043D \u043C\u0430\u0454 \u043D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0438\u0439 \u0434\u0432\u0435\u0440\u043D\u0438\u0439 \u043A\u0430\u0442\u0430\u043B\u043E\u0433 \u0443 \u041B\u044C\u0432\u043E\u0432\u0456. \u041C\u0438 \u0433\u043E\u0442\u043E\u0432\u0456 \u0434\u043E\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u0442\u0456\u043B\u044C\u043A\u0438 \u0432\u0438\u0441\u043E\u043A\u0438\u0445, \u0442\u0430 \u043D\u0430\u0434\u0456\u0439\u043D\u0438\u0445 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A \u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E\u0457 \u044F\u043A\u043E\u0441\u0442\u0456, \u0430 \u0442\u0430\u043A\u043E\u0436 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u043C\u0435\u0445\u0430\u043D\u0456\u0437\u043C\u0456\u0432 \u0437\u0430\u043A\u0440\u0438\u0432\u0430\u043D\u043D\u044F \u0456 \u0444\u0443\u0440\u043D\u0456\u0442\u0443\u0440\u0438: Mul-T-Lock, Cisa, Mottura, Border, ISEO, SAB, Apecs, Archie, Colombo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " \u0413\u043E\u043B\u043E\u0432\u043D\u043E\u044E \u043E\u0441\u043E\u0431\u043B\u0438\u0432\u0456\u0441\u0442\u044E \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0456\u0457 \u0432 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0456 Korona-leva \u0454: \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0438\u0439 \u0432\u0438\u0433\u043B\u044F\u0434, \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B, \u0444\u043E\u0440\u043C\u0430, \u043C\u043E\u0434\u0435\u043B\u044C, \u0430 \u0442\u0430\u043A\u043E\u0436 \u043C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044E \u043A\u043B\u0456\u0454\u043D\u0442\u0430 \u043F\u043E\u0454\u0434\u043D\u0430\u0442\u0438 \u0440\u043E\u0437\u043C\u0456\u0440, \u0434\u0438\u0437\u0430\u0439\u043D, \u044F\u043A\u0456\u0441\u0442\u044C, \u043A\u043E\u043B\u044C\u043E\u0440 \u0442\u0430 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0456\u044E, \u0437 \u0432\u0430\u0440\u0456\u0430\u043D\u0442\u0456\u0432 \u044F\u043A\u0456 \u0437\u0430\u043F\u0440\u043E\u043F\u043E\u043D\u043E\u0432\u0430\u043D\u0456 \u0432\u0438\u0440\u043E\u0431\u043D\u0438\u043A\u043E\u043C. \u0422\u0430\u043A\u043E\u0436 \u043F\u0440\u043E\u0435\u043A\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043C\u0456\u0436\u043A\u0456\u043C\u043D\u0430\u0442\u043D\u0438\u0445 \u0434\u0432\u0435\u0440\u0435\u0439 \u0456 \u0432\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0434\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0457 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0456\u0457 \u0437 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E \u0448\u043F\u043E\u043D\u0430 \u0430\u0431\u043E \u0432\u0438\u0431\u0440\u0430\u0442\u0438 \u0437\u0432\u0438\u0447\u0430\u0439\u043D\u0435 \u0434\u0435\u0440\u0435\u0432\u043E, \u0437\u0430 \u0456\u043D\u0434\u0438\u0432\u0456\u0434\u0443\u0430\u043B\u044C\u043D\u0438\u043C\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F\u043C\u0438 \u0437 \u0437\u0430\u0441\u0442\u043E\u0441\u0443\u0432\u0430\u043D\u043D\u044F\u043C \u0440\u0456\u0437\u044C\u0431\u0438, \u0445\u0443\u0434\u043E\u0436\u043D\u044C\u043E\u0457 \u043A\u043E\u0432\u0430\u043D\u043A\u0438, \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432 \u0437\u0456 \u0441\u043A\u043B\u0430, \u043A\u043E\u043B\u044C\u043E\u0440\u043E\u0432\u0438\u0445 \u043C\u0435\u0442\u0430\u043B\u0456\u0432, \u043D\u0435\u0440\u0436\u0430\u0432\u0456\u044E\u0447\u043E\u0457 \u0441\u0442\u0430\u043B\u0456, \u0441\u043B\u0430\u043D\u0446\u0435\u0432\u043E\u0433\u043E \u043A\u0430\u043C\u0435\u043D\u044F \u0442\u0430 \u0456\u043D\u0448\u0438\u0445 \u0434\u0435\u043A\u043E\u0440\u043E\u0442\u0438\u0432\u043D\u0438\u0445 \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " \u041A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043D\u0430 \u0446\u0456\u043D\u0430, \u044F\u043A\u0456\u0441\u043D\u0438\u0439 \u0442\u043E\u0432\u0430\u0440 \u0432 \u0441\u0430\u043B\u043E\u043D\u0456 \u0434\u0432\u0435\u0440\u0435\u0439 \u0443 \u041B\u044C\u0432\u043E\u0432\u0456 \u00AB\u041A\u043E\u0440\u043E\u043D\u0430-\u041B\u0435\u0432\u0430\u00BB, \u043D\u0430\u0434\u0430\u0454 \u043C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044C \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 \u0456\u0434\u0435\u0430\u043B\u044C\u043D\u0435 \u0441\u043F\u0456\u0432\u0432\u0456\u0434\u043D\u043E\u0448\u0435\u043D\u043D\u044F \u0446\u0456\u043D\u0438 \u0442\u0430 \u044F\u043A\u043E\u0441\u0442\u0456, \u0437\u0430\u0439\u043D\u044F\u0432\u0448\u0438 \u043F\u0440\u0438 \u0446\u044C\u043E\u043C\u0443 \u0432\u0435\u0434\u0443\u0447\u0456 \u043F\u043E\u0437\u0438\u0446\u0456\u0457, \u044F\u043A \u0441\u0435\u0440\u0435\u0434 \u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0445 \u0432\u0438\u0440\u043E\u0431\u043D\u0438\u043A\u0456\u0432, \u0442\u0430\u043A \u0456 \u0441\u0435\u0440\u0435\u0434 \u0456\u043C\u043F\u043E\u0440\u0442\u043D\u043E\u0457 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0456\u0457.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\u0413\u0410\u0420\u0410\u041D\u0422\u0406\u0407");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\u041D\u0430 \u0432\u0441\u0456 \u0432\u0438\u0440\u043E\u0431\u0438 \u0433\u0430\u0440\u0430\u043D\u0442\u0456\u044F 1 \u0440\u0456\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\u0424\u0406\u041D\u0406\u0428\u041D\u0404 \u041E\u0411\u0420\u041E\u0411\u041B\u0415\u041D\u041D\u042F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u041C\u0430\u0441\u0441\u0438\u0432, \u041C\u0414\u0424, HPL, \u0448\u043F\u043E\u043D.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\u0406\u041D\u0414\u0418\u0412\u0406\u0414\u0423\u0410\u041B\u042C\u041D\u0418\u0419 \u0414\u0418\u0417\u0410\u0419\u041D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\u0420\u043E\u0431\u0438\u043C \u0432\u0438\u0440\u043E\u0431\u0438 \u043F\u043E \u0432\u0430\u0448\u043E\u043C\u0443 \u0434\u0438\u0437\u0430\u0439\u043D\u0443 \u043F\u0440\u043E\u0435\u043A\u0442\u0443.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\u0420\u041E\u0417\u041C\u0406\u0420\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\u041E\u0431\u043C\u0435\u0436\u0435\u043D\u044C \u0437\u0430 \u0440\u043E\u0437\u043C\u0456\u0440\u043E\u043C \u043D\u0435\u043C\u0430\u0454.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "\u0414\u041E\u0421\u0422\u0410\u0412\u041A\u0410 \u0406 \u0412\u0421\u0422\u0410\u041D\u041E\u0412\u041B\u0415\u041D\u041D\u042F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0456 \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0442\u043E\u0447\u043D\u043E \u0432 \u0442\u0435\u0440\u043C\u0456\u043D.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "\u0417\u0410\u041C\u041A\u0418 \u0456 \u0426\u0418\u041B\u0406\u041D\u0414\u0420\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "\u0412\u0456\u0434 \u0431\u044E\u0434\u0436\u0435\u0442\u043D\u0438\u0445 \u0434\u043E \u0441\u0430\u043C\u0438\u0445 \u0434\u043E\u0440\u043E\u0433\u0438\u0445 \u0440\u0456\u0448\u0435\u043D\u044C.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "SCREEN DOOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "\u0414\u0440\u0443\u0433\u0456 \u0437\u0430\u0445\u0438\u0441\u043D\u0456 \u0434\u0432\u0435\u0440\u0456 \u0434\u043B\u044F \u0434\u043E\u043C\u0443.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "\u0420\u0415\u0413\u0423\u041B\u042E\u042E\u0427\u0406 \u041F\u0415\u0422\u041B\u0406");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "\u041B\u0435\u0433\u043A\u0435 \u0440\u0435\u0433\u0443\u043B\u044E\u0432\u0430\u043D\u043D\u044F \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C \u0443\u0441\u044C\u043E\u0433\u043E \u0442\u0435\u0440\u043C\u0456\u043D\u0443 \u0441\u043B\u0443\u0436\u0431\u0438.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  height: 100vh;\n  position: relative;\n  display: flex;\n}\n\n.main[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  z-index: 2;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background-image: url(https://images.unsplash.com/photo-1578735547311-9209b441c350?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80);\n  border-radius: 10px;\n  border: 2px solid white;\n  z-index: 3;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  width: 2%;\n  height: 100%;\n  position: relative;\n  z-index: 5;\n  background: url(https://images.unsplash.com/photo-1611838637971-2b137f0ebfaf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjk4fHxvZmZpY2UlMjB3b29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  background-attachment: fixed;\n  transition: 5s linear;\n}\n\n.overlay[_ngcontent-%COMP%]:hover {\n  opacity: 0;\n  transition: 0s linear;\n}\n\n.home_history[_ngcontent-%COMP%] {\n  text-align: center;\n  border: 1px solid white;\n  border-radius: 10px;\n  margin: 0 auto;\n  padding: 5%;\n  margin-top: 50px;\n}\n\n.home_history_title[_ngcontent-%COMP%] {\n  color: lime;\n  font-size: 2em;\n}\n\n.home_history_text[_ngcontent-%COMP%] {\n  margin-top: 3%;\n  font-size: 0.8em;\n  color: white;\n}\n\n.advantages[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  justify-content: center;\n  margin: 60px auto;\n}\n\n.advantage[_ngcontent-%COMP%] {\n  width: 45%;\n  color: black;\n  display: flex;\n  align-items: center;\n  margin: 20px 10px;\n}\n\n.advantage_icon[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  border: 2px solid white;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  margin-right: 10px;\n}\n\n.advantage_title[_ngcontent-%COMP%] {\n  color: lime;\n  font-size: 0.9em;\n}\n\n.advantage_text[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n  color: gray;\n}\n\n@media screen and (max-width: 900px) {\n  .advantage[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksc0JBQUE7QUFGSjs7QUFPQTtFQUVJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFMSjs7QUFTQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFMQUFBO0VBRUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUFQSjs7QUFVQTtFQUNJLFNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esc01BQUE7RUFFQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0FBUko7O0FBV0E7RUFDSSxVQUFBO0VBQ0EscUJBQUE7QUFSSjs7QUFlQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBRUEsZ0JBQUE7QUFiSjs7QUFpQkE7RUFHSSxXQUFBO0VBQ0EsY0FBQTtBQWhCSjs7QUFxQkE7RUFFSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBbkJKOztBQXlCQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUVBLGlCQUFBO0FBdkJKOztBQTRCQTtFQUVJLFVBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBRUEsaUJBQUE7QUE1Qko7O0FBK0JBO0VBRUksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBN0JKOztBQWtDQTtFQUVJLFdBQUE7RUFFQSxnQkFBQTtBQWpDSjs7QUFxQ0E7RUFFSSxnQkFBQTtFQUNBLFdBQUE7QUFuQ0o7O0FBdUNBO0VBQ0k7SUFFSSxXQUFBO0VBckNOO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuKiB7XHJcbiAgIFxyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbn1cclxuXHJcblxyXG4ud3JhcHBlciB7XHJcbiAgICBcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1Nzg3MzU1NDczMTEtOTIwOWI0NDFjMzUwP2l4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmaXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMDUwJnE9ODApO1xyXG4gICAgLy8gYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi5vdmVybGF5IHtcclxuICAgIHdpZHRoOiAyJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MTE4Mzg2Mzc5NzEtMmIxMzdmMGViZmFmP2l4aWQ9TW53eE1qQTNmREI4TUh4elpXRnlZMmg4TWprNGZIeHZabVpwWTJVbE1qQjNiMjlrZkdWdWZEQjhmREI4ZkElM0QlM0QmaXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz01MDAmcT02MCk7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIHRyYW5zaXRpb246IDVzIGxpbmVhcjtcclxufVxyXG5cclxuLm92ZXJsYXk6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IDBzIGxpbmVhcjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5ob21lX2hpc3Rvcnkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICAgIC8vIHBhZGRpbmc6IDMgMDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcblxyXG59XHJcblxyXG4uaG9tZV9oaXN0b3J5X3RpdGxlIHtcclxuXHJcblxyXG4gICAgY29sb3I6IGxpbWU7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuXHJcbn1cclxuXHJcblxyXG4uaG9tZV9oaXN0b3J5X3RleHQge1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmFkdmFudGFnZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLy8gd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogNjBweCBhdXRvO1xyXG4gICAgXHJcblxyXG59XHJcblxyXG4uYWR2YW50YWdlIHtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMjBweCAxMHB4O1xyXG5cclxufVxyXG4uYWR2YW50YWdlX2ljb24ge1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cclxuXHJcbn1cclxuXHJcbi5hZHZhbnRhZ2VfdGl0bGUge1xyXG5cclxuICAgIGNvbG9yOiBsaW1lO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcblxyXG59XHJcblxyXG4uYWR2YW50YWdlX3RleHQge1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICBjb2xvcjogZ3JheTtcclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAuYWR2YW50YWdlIHtcclxuICAgICAgICBcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIFxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_door_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/door.service */ "xYI4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["/admin"]; };
const _c2 = function () { return ["/services"]; };
const _c3 = function () { return ["/contact"]; };
const _c4 = function () { return ["/basket"]; };
class HeaderComponent {
    constructor(doorService) {
        this.doorService = doorService;
        this.ordersCount = 0;
    }
    ngOnInit() {
        this.getOrdersCount();
        // this.doorService.orderCount
        this.doorService.sub$.subscribe(res => {
            this.getOrdersCount();
        });
        // console.log("Header");
    }
    getOrdersCount() {
        var _a;
        this.ordersCount = (_a = JSON.parse(localStorage.getItem('basket'))) === null || _a === void 0 ? void 0 : _a.length;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_door_service__WEBPACK_IMPORTED_MODULE_1__["DoorService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 22, vars: 11, consts: [["type", "checkbox", "id", "check"], ["for", "check", 1, "checkbtn"], [1, "fas", "fa-bars"], [1, "logo"], [1, "logoTitle", 2, "background-color", "black", 3, "routerLink"], ["routerLinkActive", "active", 3, "routerLink"], [1, "basketIcon"], [1, "fas", "fa-shopping-cart"], [1, "countOrders"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lion's Crown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ordersCount);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  text-decoration: none;\n  list-style: none;\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: montserrat;\n}\n\nnav[_ngcontent-%COMP%] {\n  background: #000;\n  height: 80px;\n  position: fixed;\n  z-index: 1001;\n  width: 100%;\n  box-shadow: 0 5px 25px rgba(255, 255, 255, 0.5);\n}\n\nlabel.logo[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 35px;\n  line-height: 80px;\n  padding-left: 100px;\n  font-weight: bold;\n}\n\n.logoTitle[_ngcontent-%COMP%] {\n  color: white;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.logoTitle[_ngcontent-%COMP%] {\n  background-color: black;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  z-index: 5;\n  float: right;\n  margin-right: 40px;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  line-height: 80px;\n  margin: 0 5px;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 300;\n  text-decoration: none;\n  font-size: 17px;\n  padding: 7px 13px;\n  border-radius: 3px;\n  text-transform: uppercase;\n}\n\na.active[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover {\n  background: rgba(128, 128, 128, 0.2);\n  transition: 0.1s;\n}\n\n.checkbtn[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: white;\n  float: right;\n  line-height: 80px;\n  margin-right: 40px;\n  cursor: pointer;\n  display: none;\n}\n\n#check[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (max-width: 952px) {\n  label.logo[_ngcontent-%COMP%] {\n    font-size: 30px;\n    padding: 0px;\n    padding-left: 50px;\n  }\n\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n@media (max-width: 858px) {\n  .checkbtn[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  ul[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    height: 92vh;\n    background: lightgrey;\n    top: 80px;\n    left: -100%;\n    text-align: center;\n    z-index: 1000;\n    transition: all 0.5s;\n  }\n\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: block;\n    margin: 40px 0;\n    line-height: 30px;\n  }\n\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  a[_ngcontent-%COMP%]:hover, a.active[_ngcontent-%COMP%] {\n    background: none;\n    color: white;\n  }\n\n  #check[_ngcontent-%COMP%]:checked    ~ ul[_ngcontent-%COMP%] {\n    left: 0;\n  }\n}\n\nsection[_ngcontent-%COMP%] {\n  background-size: cover;\n  height: calc(100vh - 80px);\n}\n\n.basket[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 2em;\n  color: #fff;\n  right: 10px;\n  top: 10px;\n}\n\n.basketIcon[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.countOrders[_ngcontent-%COMP%] {\n  content: \"\";\n  position: absolute;\n  top: 45%;\n  left: 63%;\n  font-size: 1.3rem;\n  height: 10px;\n  width: 10px;\n  color: red;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUxKOztBQU9FO0VBQ0UsdUJBQUE7QUFKSjs7QUFNRTtFQUNFLGdCQWhCWTtFQWlCWixZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFFQSxXQUFBO0VBQ0EsK0NBQUE7QUFKSjs7QUFNRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBSEo7O0FBTUU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBSEo7O0FBTUU7RUFDSSx1QkFBQTtBQUhOOztBQU1FO0VBQ0ksVUFBQTtFQUNGLFlBQUE7RUFDQSxrQkFBQTtBQUhKOztBQUtFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFGSjs7QUFJRTtFQUVFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUZKOztBQUlFO0VBQ0Usb0NBQUE7RUFNQSxnQkFBQTtBQU5KOztBQVdFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBUko7O0FBVUU7RUFDRSxhQUFBO0FBUEo7O0FBU0U7RUFDRTtJQUNFLGVBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUFOSjs7RUFRRTtJQUNFLGVBQUE7RUFMSjtBQUNGOztBQU9FO0VBQ0U7SUFDRSxjQUFBO0VBTEo7O0VBU0U7SUFDRSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EscUJBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtJQUVBLG9CQUFBO0VBUEo7O0VBU0U7SUFDRSxjQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0VBTko7O0VBUUU7SUFDRSxlQUFBO0VBTEo7O0VBT0U7SUFDRSxnQkFBQTtJQUNBLFlBQUE7RUFKSjs7RUFNRTtJQUNFLE9BQUE7RUFISjtBQUNGOztBQUtFO0VBRUUsc0JBQUE7RUFDQSwwQkFBQTtBQUpKOztBQU9FO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0ExSU87RUEySVAsV0FBQTtFQUNBLFNBQUE7QUFKTjs7QUFPRTtFQUNFLGtCQUFBO0FBSko7O0FBT0U7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFMSiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJHByaW1hcnktY29sb3I6ICMwMDA7XHJcbiR0ZXh0LWNvbG9yOiAjZmZmO1xyXG5cclxuXHJcblxyXG4qe1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBib2R5e1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQ7XHJcbiAgfVxyXG4gIG5hdntcclxuICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTAwMTtcclxuICAgIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAyNXB4IHJnYmEoJGNvbG9yOiB3aGl0ZSwgJGFscGhhOiAwLjUpO1xyXG4gIH1cclxuICBsYWJlbC5sb2dve1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDgwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAubG9nb1RpdGxlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcblxyXG4gIC5sb2dvVGl0bGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIG5hdiB1bHtcclxuICAgICAgei1pbmRleDogNTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICB9XHJcbiAgbmF2IHVsIGxpe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbGluZS1oZWlnaHQ6IDgwcHg7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG4gIH1cclxuICBuYXYgdWwgbGkgYXtcclxuICAgIC8vIGJvcmRlci1ib3R0b20td2lkdGg6IDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBwYWRkaW5nOiA3cHggMTNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIGEuYWN0aXZlLGE6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcjogZ3JheSwgJGFscGhhOiAuMik7XHJcblxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIHRyYW5zaXRpb246IC4xcztcclxuICB9XHJcblxyXG5cclxuXHJcbiAgLmNoZWNrYnRue1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDgwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAjY2hlY2t7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogOTUycHgpe1xyXG4gICAgbGFiZWwubG9nb3tcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgIH1cclxuICAgIG5hdiB1bCBsaSBhe1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4NThweCl7XHJcbiAgICAuY2hlY2tidG57XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICBcclxuICAgIHVse1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDkydmg7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcclxuICAgICAgdG9wOiA4MHB4O1xyXG4gICAgICBsZWZ0OiAtMTAwJTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICBcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIC41cztcclxuICAgIH1cclxuICAgIG5hdiB1bCBsaXtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbjogNDBweCAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIH1cclxuICAgIG5hdiB1bCBsaSBhe1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBhOmhvdmVyLGEuYWN0aXZle1xyXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAjY2hlY2s6Y2hlY2tlZCB+IHVse1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBzZWN0aW9ue1xyXG4gICAgLy8gYmFja2dyb3VuZDogdXJsKGJnMS5qcGcpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcclxuICB9XHJcblxyXG4gIC5iYXNrZXQge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICB0b3A6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuYmFza2V0SWNvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAuY291bnRPcmRlcnMge1xyXG5cclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0NSU7XHJcbiAgICBsZWZ0OiA2MyU7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "4UHR":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/services/doorsTypes/directive-product-page/directive-product-page.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: DirectiveProductPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectiveProductPageComponent", function() { return DirectiveProductPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_door_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/door.service */ "xYI4");
/* harmony import */ var src_app_shared_services_wood_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/wood-products.service */ "YWQT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function DirectiveProductPageComponent_div_16_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Brand:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx_r3.directiveItem == null ? null : ctx_r3.directiveItem.brand), "");
} }
function DirectiveProductPageComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Article:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DirectiveProductPageComponent_div_16_p_6_Template, 5, 3, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DirectiveProductPageComponent_div_16_Template_div_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.productCount(ctx_r4.directiveItem, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DirectiveProductPageComponent_div_16_Template_div_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.productCount(ctx_r6.directiveItem, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DirectiveProductPageComponent_div_16_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.addToBasket(ctx_r7.directiveItem); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, ctx_r0.directiveItem == null ? null : ctx_r0.directiveItem.article), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.directiveItem == null ? null : ctx_r0.directiveItem.brand) != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.directiveItem == null ? null : ctx_r0.directiveItem.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.directiveItem == null ? null : ctx_r0.directiveItem.price, "\u20B4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.currentProductCount);
} }
function DirectiveProductPageComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Preparing time:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Article:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Containment:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Decoration:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Furniture:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DirectiveProductPageComponent_div_17_Template_div_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.productCount(ctx_r8.directiveItem, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DirectiveProductPageComponent_div_17_Template_div_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.productCount(ctx_r10.directiveItem, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DirectiveProductPageComponent_div_17_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.addToBasket(ctx_r11.directiveItem); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.directiveItem == null ? null : ctx_r1.directiveItem.preparingTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.directiveItem == null ? null : ctx_r1.directiveItem.article, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.directiveItem == null ? null : ctx_r1.directiveItem.containment, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.directiveItem == null ? null : ctx_r1.directiveItem.decoration, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.directiveItem == null ? null : ctx_r1.directiveItem.furniture, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.currentProductCount);
} }
function DirectiveProductPageComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Preparing time:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Article:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Containment:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Decoration:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Furniture:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DirectiveProductPageComponent_div_18_Template_div_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.productCount(ctx_r12.directiveItem, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DirectiveProductPageComponent_div_18_Template_div_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.productCount(ctx_r14.directiveItem, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DirectiveProductPageComponent_div_18_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.addToBasket(ctx_r15.directiveItem); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.directiveItem == null ? null : ctx_r2.directiveItem.preparingTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.directiveItem == null ? null : ctx_r2.directiveItem.article, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.directiveItem == null ? null : ctx_r2.directiveItem.containment, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.directiveItem == null ? null : ctx_r2.directiveItem.decoration, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.directiveItem == null ? null : ctx_r2.directiveItem.furniture, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.currentProductCount);
} }
const _c0 = function () { return ["/services"]; };
const _c1 = function (a1) { return ["/services/", a1]; };
const _c2 = function (a1, a2) { return ["/services/", a1, a2, "productPage"]; };
class DirectiveProductPageComponent {
    constructor(doorService, woodProductsService, routerActivate) {
        this.doorService = doorService;
        this.woodProductsService = woodProductsService;
        this.routerActivate = routerActivate;
        this.localProducts = [];
        this.currentProductCount = 1;
    }
    ngOnInit() {
        this.loadFromFirebase();
        const category = this.routerActivate.snapshot;
        this.searchClassName = category.params.className;
        this.searchType = category.params.type;
        this.searchId = category.params.id;
        // console.log(category.params);
    }
    loadFromFirebase() {
        this.doorService.testFirestore().then(res => {
            let allDoors = [];
            let filteredTypesArr = [];
            allDoors = res.docs.map(el => el.data());
            this.directiveItem = allDoors.filter(item => item.className.toLowerCase() == this.searchClassName.toLowerCase() && item.type.toLowerCase() == this.searchType.toLowerCase() && item.id == this.searchId);
            this.directiveItem = this.directiveItem[0];
            console.log(this.directiveItem);
            this.directiveItem.count = 1;
        });
    }
    // loadItemFromDB() {
    //   console.log(typeof category.params.id);
    //   this.doorsService.getDirectionalId(category.params.id).subscribe( data => {
    //   this.directiveItem = data[0];
    //   this.directiveClass = this.directiveItem.className;
    //   console.log(this.directiveClass);
    //   this.directiveItem.count = 1;
    //   console.log(this.directiveItem);
    //  })
    // }
    productCount(product, status) {
        if (status) {
            this.currentProductCount++;
            product.count++;
            // console.log(product.count);
        }
        else {
            if (product.count > 1) {
                product.count--;
                // console.log(product.count);
                this.currentProductCount--;
            }
        }
    }
    addToBasket(product) {
        // this.doorsService.orderCount++
        var _a;
        // console.log(product.count);
        if (((_a = JSON.parse(localStorage.getItem('basket'))) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            // console.log(JSON.parse(localStorage.getItem('basket')));
            this.localProducts = JSON.parse(localStorage.getItem('basket'));
            // console.log(this.localProducts);
            if (this.localProducts.some(localProduct => localProduct.id === product.id)) {
                const index = this.localProducts.findIndex(localProduct => localProduct.id === product.id);
                this.localProducts[index].count = +this.localProducts[index].count;
                this.localProducts[index].count += +product.count;
                product.count = this.currentProductCount;
                // console.log(+this.localProducts[index].count + 1);
                // console.log(product.count);
            }
            else {
                this.localProducts.push(product);
            }
            localStorage.setItem('basket', JSON.stringify(this.localProducts));
        }
        else {
            this.localProducts.push(product);
            // console.log(this.localProducts);
        }
        localStorage.setItem('basket', JSON.stringify(this.localProducts));
        this.doorService.sub$.next('text');
    }
}
DirectiveProductPageComponent.ɵfac = function DirectiveProductPageComponent_Factory(t) { return new (t || DirectiveProductPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_door_service__WEBPACK_IMPORTED_MODULE_1__["DoorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_wood_products_service__WEBPACK_IMPORTED_MODULE_2__["WoodProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
DirectiveProductPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DirectiveProductPageComponent, selectors: [["app-directive-product-page"]], decls: 19, vars: 19, consts: [[2, "color", "white", "padding", "80px 5%"], [2, "text-align", "center", "text-transform", "uppercase"], ["aria-label", "breadcrumb", 2, "--bs-breadcrumb-divider", ">"], [1, "breadcrumb", 2, "text-transform", "uppercase", "background-color", "black", "margin-bottom", "30px", "font-size", "1rem"], ["aria-current", "page", 1, "breadcrumb-item", 3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "text-center", "directiveProductImage"], ["alt", "...", 1, "rounded", 3, "src"], ["class", "productInfo", 4, "ngIf"], [1, "productInfo"], [1, "boldTitle"], [4, "ngIf"], [2, "text-align", "center"], [1, "counterWrapper"], [1, "couterButtons"], [1, "counterButton", 3, "click"], [1, "fas", "fa-angle-left"], ["disabled", "", "type", "text", 1, "counterInput", 3, "value"], [1, "fas", "fa-angle-right"], [1, "counterBasket"], [1, "btn-dark", "btn-block", "btn", "basketButton", 3, "click"], [1, "fas", "fa-shopping-cart"], [2, "max-width", "300px"]], template: function DirectiveProductPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DirectiveProductPageComponent_div_16_Template, 26, 7, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DirectiveProductPageComponent_div_17_Template, 31, 6, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DirectiveProductPageComponent_div_18_Template, 31, 6, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.directiveItem == null ? null : ctx.directiveItem.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 11, ctx.directiveItem == null ? null : ctx.directiveItem.className)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.directiveItem == null ? null : ctx.directiveItem.className);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c2, ctx.directiveItem == null ? null : ctx.directiveItem.className, ctx.directiveItem == null ? null : ctx.directiveItem.type));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.directiveItem == null ? null : ctx.directiveItem.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.directiveItem == null ? null : ctx.directiveItem.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.directiveItem == null ? null : ctx.directiveItem.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.directiveItem == null ? null : ctx.directiveItem.className.toLowerCase()) == "furniture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.directiveItem == null ? null : ctx.directiveItem.className.toLowerCase()) == "entrace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.directiveItem == null ? null : ctx.directiveItem.className.toLowerCase()) == "interior");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"]], styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.counterWrapper[_ngcontent-%COMP%] {\n  margin: 30px auto;\n  width: 150px;\n  border: 1px solid white;\n  padding: 5px;\n  border-radius: 10px;\n  -webkit-box-reflect: below 5px linear-gradient(transparent, #0008);\n}\n\n.couterButtons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  color: white;\n}\n\n.counterButton[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 33.3%;\n  font-size: 3em;\n  cursor: pointer;\n}\n\n.counterInput[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bold;\n  overflow: scroll;\n  border-radius: 50%;\n  height: 50px;\n  width: 20px;\n  color: white;\n  background-color: black;\n  border: 1px solid white;\n  font-size: 1.5em;\n  width: 33.33%;\n  box-sizing: border-box;\n}\n\n.counterInput[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n}\n\n.counterBasket[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.basketButton[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  font-size: 15px;\n  font-family: monospace;\n  border: 1px solid white;\n  background-color: black;\n}\n\n.basketButton[_ngcontent-%COMP%]:hover {\n  background-color: gray;\n}\n\n.boldTitle[_ngcontent-%COMP%] {\n  margin-right: 3px;\n  color: darkgray;\n  font-weight: bold;\n}\n\n.breadcrumb-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.productInfo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGRpcmVjdGl2ZS1wcm9kdWN0LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBQUo7O0FBR0E7RUFFSSxpQkFBQTtFQUdBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtFQUFBO0FBSEo7O0FBT0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FBSko7O0FBT0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUpKOztBQU9BO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLFlBQUE7RUFDQSx1QkFBQTtFQUVBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7QUFQSjs7QUFVQTtFQUNJLFFBQUE7QUFQSjs7QUFVQTtFQUNJLGVBQUE7QUFQSjs7QUFZQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQVRKOztBQVVJO0VBQ0ksc0JBQUE7QUFSUjs7QUFZQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBVEo7O0FBYUE7RUFDSSxlQUFBO0FBVko7O0FBYUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQVZKIiwiZmlsZSI6ImRpcmVjdGl2ZS1wcm9kdWN0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuKiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmNvdW50ZXJXcmFwcGVyIHtcclxuXHJcbiAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG5cclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC13ZWJraXQtYm94LXJlZmxlY3Q6IGJlbG93IDVweCBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsIzAwMDgpO1xyXG5cclxufVxyXG5cclxuLmNvdXRlckJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNvdW50ZXJCdXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzMy4zJTtcclxuICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY291bnRlcklucHV0ICB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcblxyXG4gICAgd2lkdGg6IDMzLjMzJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5jb3VudGVySW5wdXQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAwO1xyXG59XHJcblxyXG4uY291bnRlckJhc2tldCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmJhc2tldEJ1dHRvbiAge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgICAgfVxyXG59XHJcblxyXG4uYm9sZFRpdGxlIHtcclxuICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgY29sb3I6IGRhcmtncmF5O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG4uYnJlYWRjcnVtYi1pdGVtIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByb2R1Y3RJbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFxyXG59Il19 */"] });


/***/ }),

/***/ "5GRp":
/*!****************************************************************************!*\
  !*** ./src/app/pages/services/doorsTypes/furniture/furniture.component.ts ***!
  \****************************************************************************/
/*! exports provided: FurnitureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FurnitureComponent", function() { return FurnitureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_door_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/door.service */ "xYI4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a1) { return ["/services/furniture/", a1, "productPage"]; };
function FurnitureComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FurnitureComponent_div_11_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const furnitureType_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.sendIndex(furnitureType_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const furnitureType_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, furnitureType_r1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", furnitureType_r1, " ");
} }
const _c1 = function () { return ["/services"]; };
class FurnitureComponent {
    constructor(doorService) {
        this.doorService = doorService;
        this.furnitureTypes = [];
        this.arrClassName = [];
    }
    ngOnInit() {
        this.loadFromFirebase();
        // console.log('FURNITURE');
    }
    loadFromFirebase() {
        this.doorService.testFirestore().then(res => {
            let allDoors = [];
            let filteredTypesArr = [];
            allDoors = res.docs.map(el => el.data());
            this.currentClass = allDoors.filter(item => item.className.toLowerCase() == "Furniture".toLowerCase());
            this.currentClass.forEach(element => {
                filteredTypesArr.push(element.type);
            });
            this.furnitureTypes = this.unique(filteredTypesArr);
        });
    }
    // getFurnitureFromDB() {
    //   this.doorService.getDirectionalClass('Furniture').subscribe(data => {
    //     console.log(data);
    //     // this.arrClassName = data[0];
    //     this.currentClass = data[0].className;
    //     console.log(this.currentClass);
    //     data.map(item => this.furnitureTypes.push(item.type));
    //     this.furnitureTypes = this.unique(this.furnitureTypes);
    //     console.log(this.furnitureTypes)
    //   })
    // }
    sendIndex(item) {
        // localStorage.setItem("currentProduct", item);
        // localStorage.setItem("currentClassName", this.currentClass);
        // console.log(item)
    }
    unique(arr) {
        let result = [];
        for (let str of arr) {
            if (!result.includes(str)) {
                result.push(str);
            }
        }
        return result;
    }
}
FurnitureComponent.ɵfac = function FurnitureComponent_Factory(t) { return new (t || FurnitureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_door_service__WEBPACK_IMPORTED_MODULE_1__["DoorService"])); };
FurnitureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FurnitureComponent, selectors: [["app-furniture"]], decls: 12, vars: 3, consts: [[2, "color", "white", "padding", "80px 5%"], [2, "text-align", "center", "text-transform", "uppercase"], ["aria-label", "breadcrumb", 2, "--bs-breadcrumb-divider", ">"], [1, "breadcrumb", 2, "text-transform", "uppercase", "background-color", "black", "margin-bottom", "30px", "font-size", "1rem"], ["aria-current", "page", 1, "breadcrumb-item", 3, "routerLink"], [1, "breadcrumb-item", "active"], [1, "entraceDoorsSelector"], ["class", "entraceDoorItem", "class", "entraceDoorItem", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "entraceDoorItem", 3, "routerLink", "click"], [1, "test"], [1, "entraceDoorImage"], ["src", "https://images.unsplash.com/photo-1525947088131-b701cd0f6dc3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", "alt", "", 1, "productImage"], [1, "entraceDoorTitle"]], template: function FurnitureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Furniture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "FURNITURE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FurnitureComponent_div_11_Template, 8, 6, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.furnitureTypes);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["LowerCasePipe"]], styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.entraceDoorsSelector[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.breadcrumb-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n@media (max-width: 1520px) {\n  .entraceDoorsSelector[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n\n  .entraceDoorItem[_ngcontent-%COMP%] {\n    margin-top: 100px;\n  }\n}\n\n@media (max-width: 1133px) {\n  .entraceDoorsSelector[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n\n.entraceDoorItem[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin: 20px;\n  position: relative;\n  width: 300px;\n  height: 300px;\n  background: linear-gradient(195deg, white, darkgray);\n  position: relative;\n  border-radius: 2%;\n  border: 1px solid white;\n  box-shadow: 0 5px 20px white;\n  z-index: 4;\n}\n\n.test[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 2%;\n  z-index: 5;\n  transition: all linear 0.2s;\n}\n\n.entraceDoorTitle[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n  bottom: 5%;\n  right: 5%;\n  position: absolute;\n  font-size: 1rem;\n  font-weight: 500;\n  z-index: 6;\n}\n\n.entraceDoorItem[_ngcontent-%COMP%]:hover   .test[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.9);\n}\n\n.entraceDoorItem[_ngcontent-%COMP%]:hover   .entraceDoorTitle[_ngcontent-%COMP%] {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 1.4rem;\n  font-family: monospace;\n  font-weight: bold;\n  z-index: 5;\n  overflow: hidden;\n}\n\n.entraceDoorImage[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.entraceDoorImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  border-radius: 2%;\n}\n\n.productImage[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-position: center;\n  background-size: auto;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGZ1cm5pdHVyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RUE7RUFFSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBdkVKOztBQTBFQTtFQUVJLGFBQUE7RUFFQSxlQUFBO0FBekVKOztBQTZFQTtFQUNJLGVBQUE7QUExRUo7O0FBNkVBO0VBQ0k7SUFDSSw4QkFBQTtFQTFFTjs7RUE2RUU7SUFDSSxpQkFBQTtFQTFFTjtBQUNGOztBQTRFQTtFQUNJO0lBQ0ksdUJBQUE7RUExRU47QUFDRjs7QUFnRkE7RUFFSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSxvREFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsVUFBQTtBQWhGSjs7QUFtRkE7RUFHSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0FBbEZKOztBQXFGQTtFQUNJLHFCQUFBO0VBRUEsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBcEZKOztBQXdGQTtFQUNJLG9DQUFBO0FBckZKOztBQXVGQTtFQUdJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBRUEsZ0JBQUE7QUF2Rko7O0FBaUdBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQTlGSjs7QUFtR0E7RUFFSSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7QUFqR0o7O0FBb0dBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUFqR0oiLCJmaWxlIjoiZnVybml0dXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuLy8gKntcclxuXHJcbi8vICAgICBwYWRkaW5nOiAwO1xyXG4vLyAgICAgbWFyZ2luOiAwO1xyXG4vLyAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuLy8gfVxyXG5cclxuLy8gLmVudHJhY2VEb29yc1NlbGVjdG9yIHtcclxuXHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4vLyB9XHJcblxyXG5cclxuLy8gLmVudHJhY2VEb29ySXRlbSB7XHJcblxyXG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgICAgbWFyZ2luOiAyMHB4O1xyXG5cclxuLy8gICAgIHdpZHRoOiAzMDBweDtcclxuLy8gICAgIGhlaWdodDogMzAwcHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTk1ZGVnLHdoaXRlLCBkYXJrZ3JheSk7XHJcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAyJTtcclxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4vLyAgICAgYm94LXNoYWRvdzogMCA1cHggMjBweCB3aGl0ZTtcclxuXHJcbi8vIH1cclxuXHJcblxyXG4vLyAuZW50cmFjZURvb3JJbWFnZSB7XHJcbi8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcblxyXG4vLyB9XHJcblxyXG4vLyAuZW50cmFjZURvb3JJbWFnZSBpbWcge1xyXG4vLyAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbi8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbi8vICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbi8vICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4vLyB9XHJcblxyXG5cclxuLy8gLmVudHJhY2VEb29yVGl0bGUge1xyXG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuLy8gICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgIGJvdHRvbTogNSU7XHJcbi8vICAgICBsZWZ0OiA1JTtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbi8vICAgICBmb250LXNpemU6IDFyZW07XHJcbi8vICAgICBmb250LXdlaWdodDogNTAwO1xyXG5cclxuLy8gfVxyXG5cclxuLy8gLmVudHJhY2VEb29yVGl0bGU6aG92ZXIge1xyXG4vLyAgICAgb3BhY2l0eTogMC43O1xyXG4vLyB9XHJcblxyXG4qe1xyXG5cclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uZW50cmFjZURvb3JzU2VsZWN0b3Ige1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbn1cclxuXHJcbi5icmVhZGNydW1iLWl0ZW0ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNTIwcHgpe1xyXG4gICAgLmVudHJhY2VEb29yc1NlbGVjdG9yIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcblxyXG4gICAgLmVudHJhY2VEb29ySXRlbSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExMzNweCl7XHJcbiAgICAuZW50cmFjZURvb3JzU2VsZWN0b3Ige1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4uZW50cmFjZURvb3JJdGVtIHtcclxuXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxOTVkZWcsd2hpdGUsIGRhcmtncmF5KTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAyMHB4IHdoaXRlO1xyXG4gICAgei1pbmRleDogNDtcclxufVxyXG5cclxuLnRlc3Qge1xyXG4gICAgICAgIFxyXG4gICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgLjJzOyBcclxufVxyXG5cclxuLmVudHJhY2VEb29yVGl0bGUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvdHRvbTogNSU7XHJcbiAgICByaWdodDogNSU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB6LWluZGV4OiA2O1xyXG5cclxufVxyXG5cclxuLmVudHJhY2VEb29ySXRlbTpob3ZlciAudGVzdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAuOSk7XHJcbn1cclxuLmVudHJhY2VEb29ySXRlbTpob3ZlciAuZW50cmFjZURvb3JUaXRsZSB7XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIC8vIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICAvLyB3aGl0ZS1zcGFjZTogd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAvLyBvdmVyZmxvdy13cmFwOm5vcm1hbFxyXG4gICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4uZW50cmFjZURvb3JJbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcblxyXG59XHJcblxyXG4uZW50cmFjZURvb3JJbWFnZSBpbWcge1xyXG4gICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMiU7XHJcbn1cclxuXHJcbi5wcm9kdWN0SW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6YXV0bztcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBcclxuICAgIC8vIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "7yAP":
/*!**********************************************!*\
  !*** ./src/app/pages/news/news.component.ts ***!
  \**********************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NewsComponent {
    constructor() { }
    ngOnInit() {
    }
}
NewsComponent.ɵfac = function NewsComponent_Factory(t) { return new (t || NewsComponent)(); };
NewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsComponent, selectors: [["app-news"]], decls: 2, vars: 0, template: function NewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "news works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "9/PF":
/*!*******************************************************!*\
  !*** ./src/app/shared/configuration/loader.config.ts ***!
  \*******************************************************/
/*! exports provided: loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loader", function() { return loader; });
const loader = {
    fgsType: 'three-strings',
    fgsColor: '#fff',
    pbThickness: 2,
    pbColor: '#fff',
    overlayColor: 'rgba(10,11,10,0.99)',
    blur: 1
};


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    url: 'http://localhost:3000/',
    firebaseConfig: {
        apiKey: "AIzaSyBDpfsk3n9taoj_K-Hpz3bR_5sKNaNxUjQ",
        authDomain: "lion-scrown.firebaseapp.com",
        projectId: "lion-scrown",
        storageBucket: "lion-scrown.appspot.com",
        messagingSenderId: "315418970226",
        appId: "1:315418970226:web:5cc467290ecc4bf1611aeb"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Bl/c":
/*!*********************************************************!*\
  !*** ./src/app/shared/pipes/wood-products-pipe.pipe.ts ***!
  \*********************************************************/
/*! exports provided: WoodProductsPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WoodProductsPipePipe", function() { return WoodProductsPipePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class WoodProductsPipePipe {
    transform(value, searchProduct) {
        if (!value) {
            return [];
        }
        if (!searchProduct) {
            return value;
        }
        return value.filter(item => item.name.toLowerCase().includes(searchProduct.toLowerCase()) ||
            item.minSize.toLowerCase().includes(searchProduct.toLowerCase()) ||
            item.maxSize.toLowerCase().includes(searchProduct.toLowerCase()) ||
            item.article.toLowerCase().includes(searchProduct.toLowerCase()));
    }
}
WoodProductsPipePipe.ɵfac = function WoodProductsPipePipe_Factory(t) { return new (t || WoodProductsPipePipe)(); };
WoodProductsPipePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "woodProductsPipe", type: WoodProductsPipePipe, pure: true });


/***/ }),

/***/ "GsQN":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/services/wood-products/wood-product-page/wood-product-page.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: WoodProductPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WoodProductPageComponent", function() { return WoodProductPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_wood_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/wood-products.service */ "YWQT");
/* harmony import */ var src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/order.service */ "NuUg");
/* harmony import */ var src_app_shared_services_door_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/door.service */ "xYI4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function WoodProductPageComponent_h4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
} }
const _c0 = function () { return ["/services"]; };
const _c1 = function () { return ["/services/woodProducts"]; };
class WoodProductPageComponent {
    constructor(woodProductsService, orderService, doorsService, routerActivate) {
        this.woodProductsService = woodProductsService;
        this.orderService = orderService;
        this.doorsService = doorsService;
        this.routerActivate = routerActivate;
        this.localProducts = [];
        this.currentProductCount = 1;
    }
    ngOnInit() {
        // this.loadProductFromDB();
        // console.log(localStorage.getItem('basket'));
        this.test();
    }
    test() {
        const category = this.routerActivate.snapshot;
        console.log(category.params.id);
        this.woodProductsService.getProductsFromFS().then(res => {
            this.allWoodProducts = res.docs.map(el => el.data());
            this.product = this.allWoodProducts.filter(item => item.id == category.params.id);
            this.product = this.product[0];
            this.product.count = 1;
            // console.log(this.product);
        });
        // console.log(this.currentItem);
    }
    // loadProductFromDB() {
    //   this.woodProductsService.getDirectionalName(localStorage.getItem('woodProduct')).subscribe(data => {
    //     this.currentItem = data; 
    //     console.log(this.currentItem);
    //     this.product = this.currentItem[0];  
    //   })
    // }
    productCount(product, status) {
        if (status) {
            this.currentProductCount++;
            product.count++;
        }
        else {
            if (product.count > 1) {
                product.count--;
                this.currentProductCount--;
            }
        }
    }
    addToBasket(product) {
        // console.log(JSON.parse(localStorage.getItem('basket')));
        if (JSON.parse(localStorage.getItem('basket')).length > 0) {
            this.localProducts = JSON.parse(localStorage.getItem('basket'));
            // console.log(this.localProducts);
            if (this.localProducts.some(localProduct => localProduct.id === product.id)) {
                const index = this.localProducts.findIndex(localProduct => localProduct.id === product.id);
                this.localProducts[index].count = +this.localProducts[index].count;
                this.localProducts[index].count += +product.count;
                // console.log(this.localProducts[index].count);
            }
            else {
                this.localProducts.push(product);
            }
            localStorage.setItem('basket', JSON.stringify(this.localProducts));
        }
        else {
            this.localProducts.push(product);
            // console.log(this.localProducts);
        }
        localStorage.setItem('basket', JSON.stringify(this.localProducts));
        this.doorsService.sub$.next('text');
    }
}
WoodProductPageComponent.ɵfac = function WoodProductPageComponent_Factory(t) { return new (t || WoodProductPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_wood_products_service__WEBPACK_IMPORTED_MODULE_1__["WoodProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_door_service__WEBPACK_IMPORTED_MODULE_3__["DoorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
WoodProductPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WoodProductPageComponent, selectors: [["app-wood-product-page"]], decls: 41, vars: 14, consts: [[2, "color", "white", "padding", "80px 5%"], ["style", "text-align: center; text-transform: uppercase;", 4, "ngFor", "ngForOf"], ["aria-label", "breadcrumb", 2, "--bs-breadcrumb-divider", ">"], [1, "breadcrumb", 2, "text-transform", "uppercase", "background-color", "black", "margin-bottom", "30px", "font-size", "1rem"], ["aria-current", "page", 1, "breadcrumb-item", 3, "routerLink"], [1, "breadcrumb-item", 3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "text-center"], ["alt", "...", 1, "rounded", 3, "src"], [1, "productInfo"], [1, "boldTitle"], [2, "max-width", "300px"], [1, "counterWrapper"], [1, "couterButtons"], [1, "counterButton", 3, "click"], [1, "fas", "fa-angle-left"], ["disabled", "", "type", "text", 1, "counterInput", 3, "value"], [1, "fas", "fa-angle-right"], [1, "counterBasket"], [1, "btn-dark", "btn-block", "btn", "basketButton", 3, "click"], [1, "fas", "fa-shopping-cart"], [2, "text-align", "center", "text-transform", "uppercase"]], template: function WoodProductPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WoodProductPageComponent_h4_1_Template, 2, 1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ol", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Wood PRODUCTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Article:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Minimal Size:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Maximal Size:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WoodProductPageComponent_Template_div_click_33_listener() { return ctx.productCount(ctx.product, false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WoodProductPageComponent_Template_div_click_36_listener() { return ctx.productCount(ctx.product, true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WoodProductPageComponent_Template_button_click_39_listener() { return ctx.addToBasket(ctx.product); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product == null ? null : ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.product == null ? null : ctx.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 10, ctx.product == null ? null : ctx.product.article), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.product == null ? null : ctx.product.minSize, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.product == null ? null : ctx.product.maxSize, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.product == null ? null : ctx.product.description, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.currentProductCount);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.counterWrapper[_ngcontent-%COMP%] {\n  width: 150px;\n  border: 1px solid white;\n  padding: 5px;\n  border-radius: 10px;\n  -webkit-box-reflect: below 5px linear-gradient(transparent, #0008);\n}\n\n.couterButtons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  color: white;\n}\n\n.counterButton[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 33.3%;\n  font-size: 3em;\n  cursor: pointer;\n}\n\n.counterButton[_ngcontent-%COMP%]:hover {\n  color: gray;\n}\n\n.counterInput[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bold;\n  overflow: scroll;\n  border-radius: 50%;\n  height: 50px;\n  width: 20px;\n  color: white;\n  background-color: black;\n  border: 1px solid white;\n  font-size: 1.5em;\n  width: 33.33%;\n  box-sizing: border-box;\n}\n\n.counterInput[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n}\n\n.counterBasket[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.basketButton[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  font-size: 15px;\n  font-family: monospace;\n  border: 1px solid white;\n  background-color: black;\n}\n\n.basketButton[_ngcontent-%COMP%]:hover {\n  background-color: gray;\n}\n\n.breadcrumb-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.productInfo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.boldTitle[_ngcontent-%COMP%] {\n  margin-right: 3px;\n  color: darkgray;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHdvb2QtcHJvZHVjdC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQURKOztBQUlBO0VBRUksWUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0VBQUE7QUFGSjs7QUFNQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFISjs7QUFNQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBSEo7O0FBSUk7RUFDSSxXQUFBO0FBRlI7O0FBTUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBRUEsWUFBQTtFQUNBLHVCQUFBO0VBRUEsdUJBQUE7RUFDQSxnQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtBQU5KOztBQVNBO0VBQ0ksUUFBQTtBQU5KOztBQVNBO0VBQ0ksZUFBQTtBQU5KOztBQVNBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FBTko7O0FBT0k7RUFDSSxzQkFBQTtBQUxSOztBQVVBO0VBQ0ksZUFBQTtBQVBKOztBQVVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFQSjs7QUFXQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBUkoiLCJmaWxlIjoid29vZC1wcm9kdWN0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5jb3VudGVyV3JhcHBlciB7XHJcblxyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtcmVmbGVjdDogYmVsb3cgNXB4IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwjMDAwOCk7XHJcblxyXG59XHJcblxyXG4uY291dGVyQnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY291bnRlckJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDMzLjMlO1xyXG4gICAgZm9udC1zaXplOiAzZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgfVxyXG59XHJcblxyXG4uY291bnRlcklucHV0ICB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcblxyXG4gICAgd2lkdGg6IDMzLjMzJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5jb3VudGVySW5wdXQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAwO1xyXG59XHJcblxyXG4uY291bnRlckJhc2tldCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5iYXNrZXRCdXR0b24gIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICAgIH1cclxufVxyXG5cclxuXHJcbi5icmVhZGNydW1iLWl0ZW0ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucHJvZHVjdEluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbn1cclxuXHJcbi5ib2xkVGl0bGUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICBjb2xvcjogZGFya2dyYXk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "Hz19":
/*!***********************************************!*\
  !*** ./src/app/shared/models/productModel.ts ***!
  \***********************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
    constructor(id, className, type, name, article, avalible, individualSize, preparingTime, containment, decoration, furniture, construction, brand, image, price, description) {
        this.id = id;
        this.className = className;
        this.type = type;
        this.name = name;
        this.article = article;
        this.avalible = avalible;
        this.individualSize = individualSize;
        this.preparingTime = preparingTime;
        this.containment = containment;
        this.decoration = decoration;
        this.furniture = furniture;
        this.construction = construction;
        this.brand = brand;
        this.image = image;
        this.price = price;
        this.description = description;
    }
}


/***/ }),

/***/ "JjJR":
/*!********************************************************************!*\
  !*** ./src/app/pages/admin/admin-orders/admin-orders.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrdersComponent", function() { return AdminOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/order.service */ "NuUg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_pipes_admin_orders_pipe_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/pipes/admin-orders-pipe.pipe */ "/cMK");






function AdminOrdersComponent_tr_21_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r2.price);
} }
function AdminOrdersComponent_tr_21_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "As agreet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminOrdersComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminOrdersComponent_tr_21_td_7_Template, 2, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdminOrdersComponent_tr_21_td_8_Template, 2, 0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r2.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", order_r2.price * 1 == order_r2.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", order_r2.price * 1 != order_r2.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r2.article);
} }
function AdminOrdersComponent_tr_66_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminOrdersComponent_tr_66_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const order_r7 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.viewItem(order_r7, order_r7.allOrders); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "View order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminOrdersComponent_tr_66_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const order_r7 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.deleteItem(order_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r8 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r7.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r7.userPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r7.userCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r7.userStreet);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r7.userHouse);
} }
const _c0 = function () { return ["/admin"]; };
const _c1 = function () { return ["/admin/adminWoodProducts"]; };
const _c2 = function () { return ["/admin/adminOrders"]; };
const _c3 = function () { return ["/admin/subCategory"]; };
class AdminOrdersComponent {
    constructor(orderService) {
        this.orderService = orderService;
        this.allOrders = [];
        this.searchProduct = '';
    }
    ngOnInit() {
        this.getOrdersFromDB();
    }
    getOrdersFromDB() {
        this.orderService.getOrdersFirestore().then(res => {
            this.allOrders = res.docs.map(el => el.data());
            // console.log(this.allOrders);
        });
        // this.orderService.getAllOrders().subscribe(data => {
        //   this.allOrders = data;
        //   console.log(data);
        // })
    }
    viewItem(fullOrder, order) {
        this.fullOrder = fullOrder;
        console.log(fullOrder);
        this.orderInfo = order;
        // console.log(order);
    }
    deleteItem(order) {
        // console.log(order);
        this.orderService.deleteOrderFromFS(order.id).then(res => {
            this.getOrdersFromDB();
        });
        // this.orderService.deleteOrder(order).subscribe(data => {
        //   console.log("Order DELETED")
        //   this.getOrdersFromDB();
        // })
    }
}
AdminOrdersComponent.ɵfac = function AdminOrdersComponent_Factory(t) { return new (t || AdminOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"])); };
AdminOrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminOrdersComponent, selectors: [["app-admin-orders"]], decls: 68, vars: 15, consts: [["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "table", 2, "overflow-x", "scroll"], ["style", "font-size: 0.7rem;", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], [2, "color", "white", "padding", "80px 5%"], [1, "adminPanel"], [1, "adminAside"], [1, "btn-group-vertical", "d-grid", "gap-2"], [3, "routerLink"], [1, "btn-dark", "btn"], [1, "adminPanelFields"], [1, "newProductField"], [1, "searcher", "d-flex"], ["name", "searchProduct", "type", "text", "placeholder", "Search order...", 1, "form-control", "mr-2", 3, "ngModel", "ngModelChange"], [1, "adminProductsTable", "table", "table-light"], [4, "ngFor", "ngForOf"], [2, "font-size", "0.7rem"], [4, "ngIf"], ["style", "color: red", 4, "ngIf"], [2, "color", "red"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "btn-dark", "btn", 3, "click"], ["type", "button", 1, "btn-danger", "btn", 3, "click"]], template: function AdminOrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Order info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u2116");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AdminOrdersComponent_tr_21_Template, 11, 6, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "main", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "aside", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Door Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Wood Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "All orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Sub Categoty & else");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminOrdersComponent_Template_input_ngModelChange_46_listener($event) { return ctx.searchProduct = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Street");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "House");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "View Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, AdminOrdersComponent_tr_66_Template, 19, 6, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](67, "adminOrdersPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orderInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total price: ", ctx.fullOrder == null ? null : ctx.fullOrder.totalPrice, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchProduct);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](67, 8, ctx.allOrders, ctx.searchProduct));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_shared_pipes_admin_orders_pipe_pipe__WEBPACK_IMPORTED_MODULE_5__["AdminOrdersPipePipe"]], styles: [".fontWeightBold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.adminPanel[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.adminAside[_ngcontent-%COMP%] {\n  width: 20%;\n  display: flex;\n  justify-content: center;\n  background-color: #fff;\n  border: 1px solid cyan;\n  border-radius: 10px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.adminPanelFields[_ngcontent-%COMP%] {\n  color: black;\n  height: 700px;\n  overflow-y: scroll;\n  padding: 10px;\n  width: 78%;\n  background-color: #fff;\n  border: 1px solid cyan;\n  border-radius: 10px;\n  min-height: 100px;\n}\n\n.adminAside[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  text-decoration: none;\n}\n\n.adminAside[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: block;\n  cursor: pointer;\n  width: 100%;\n  text-decoration: none;\n}\n\n@media (max-width: 858px) {\n  .adminAside[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .adminPanel[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .adminPanelFields[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow-y: scroll;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWRtaW4tb3JkZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksaUJBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFESjs7QUFLQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUFGSjs7QUFLQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFHQSxhQUFBO0VBRUEsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBTEo7O0FBV0E7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBUko7O0FBWUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQVRKOztBQVlBO0VBQ0k7SUFDQyxXQUFBO0VBVEg7O0VBV0U7SUFDQyxXQUFBO0VBUkg7O0VBVUU7SUFDQyxXQUFBO0lBQ0Esa0JBQUE7RUFQSDtBQUNGIiwiZmlsZSI6ImFkbWluLW9yZGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmZvbnRXZWlnaHRCb2xkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYWRtaW5QYW5lbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxufVxyXG5cclxuLmFkbWluQXNpZGUge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBjeWFuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGhlaWdodDpmaXQtY29udGVudDtcclxufVxyXG5cclxuLmFkbWluUGFuZWxGaWVsZHMge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgaGVpZ2h0OiA3MDBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIFxyXG5cclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgd2lkdGg6IDc4JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBjeWFuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG5cclxuXHJcblxyXG59XHJcblxyXG4uYWRtaW5Bc2lkZSBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG59XHJcblxyXG4uYWRtaW5Bc2lkZSAuYnRuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4NThweCl7XHJcbiAgICAuYWRtaW5Bc2lkZXtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5hZG1pblBhbmVse1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmFkbWluUGFuZWxGaWVsZHN7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "Kbxg":
/*!******************************************************!*\
  !*** ./src/app/pages/services/services.component.ts ***!
  \******************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/services/entrace"]; };
const _c1 = function () { return ["/services/interior"]; };
const _c2 = function () { return ["/services/furniture"]; };
const _c3 = function () { return ["/services/woodProducts"]; };
class ServicesComponent {
    constructor() {
        this.servicesList = ['a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c'];
    }
    ngOnInit() {
    }
}
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(); };
ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 39, vars: 16, consts: [[1, "main", 2, "padding", "80px 0 0"], [1, "servicesTitleSelector"], [1, "servicesSelector"], [1, "square", "three", 3, "routerLink"], [1, "content"], [1, "neonButton", 3, "routerLink"], [1, "neonButton", "neonButton2", 3, "routerLink"], [1, "neonButton", "neonButton3", 3, "routerLink"], [1, "neonButton", "neonButton4", 3, "routerLink"], [2, "width", "100%"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "services works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "OUR SERVICES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " ENTRACE DOORS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " INTERIOR DOORS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " FURNITURE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Wood Products ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c3));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.servicesSelector[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding: 2%;\n}\n\n.square[_ngcontent-%COMP%] {\n  background-color: black;\n  border-radius: 10px;\n  margin-bottom: 30px;\n  transition: all linear 0.3s;\n  cursor: pointer;\n}\n\n.square[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 35px 4px #e4a047;\n}\n\n.square[_ngcontent-%COMP%]:nth-child(2):hover {\n  box-shadow: 0px 0px 35px 4px #bb76bb;\n}\n\n.square[_ngcontent-%COMP%]:nth-child(3):hover {\n  box-shadow: 0px 0px 35px 4px #4bd4ec;\n}\n\n.square[_ngcontent-%COMP%]:nth-child(4):hover {\n  box-shadow: 0px 0px 35px 4px #71e06e;\n}\n\n.three[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 23%;\n}\n\n.servicesTitleSelector[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 4rem;\n  -webkit-text-fill-color: transparent;\n  -webkit-text-stroke-color: white;\n  -webkit-text-stroke-width: 2px;\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n  letter-spacing: 2px;\n}\n\n@media (max-width: 1000px) {\n  .three[_ngcontent-%COMP%] {\n    min-width: 45%;\n  }\n}\n\n@media (max-width: 958px) {\n  .three[_ngcontent-%COMP%] {\n    min-width: 48%;\n  }\n}\n\n.three[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  padding-top: calc(100%);\n}\n\n.content[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.content[_ngcontent-%COMP%]:hover   .neonButton[_ngcontent-%COMP%] {\n  background-color: cyan;\n  color: black;\n  box-shadow: 0 0 5px cyan, 0 0 25px cyan, 0 0 50px cyan, 0 0 200px cyan;\n}\n\n.doorsSelector[_ngcontent-%COMP%] {\n  padding: 0 5%;\n  justify-content: space-between;\n}\n\n.woodElements[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 2%;\n}\n\n.neonButton[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  padding: 25px 30px;\n  margin: 50px 0;\n  color: cyan;\n  text-align: center;\n  font-size: 0.8rem;\n  text-decoration: none;\n  text-transform: uppercase;\n  overflow: hidden;\n  transition: 0.5s;\n  letter-spacing: 4px;\n  -webkit-box-reflect: below 5px linear-gradient(transparent, #0005);\n}\n\n.neonButton[_ngcontent-%COMP%]:hover {\n  background-color: cyan;\n  color: black;\n  box-shadow: 0 0 5px cyan, 0 0 25px cyan, 0 0 50px cyan, 0 0 200px cyan;\n}\n\n.neonButton[_ngcontent-%COMP%] {\n  filter: hue-rotate(228deg);\n}\n\n.neonButton2[_ngcontent-%COMP%] {\n  filter: hue-rotate(150deg);\n}\n\n.neonButton3[_ngcontent-%COMP%] {\n  filter: hue-rotate(380deg);\n}\n\n.neonButton4[_ngcontent-%COMP%] {\n  filter: hue-rotate(300deg);\n}\n\n.neonButton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n}\n\n.neonButton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 2px;\n  background: linear-gradient(90deg, transparent, cyan);\n  animation: animate1 1s linear infinite;\n}\n\n@keyframes animate1 {\n  0% {\n    left: -100%;\n  }\n  50%, 100% {\n    left: 100%;\n  }\n}\n\n.neonButton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  top: -100%;\n  right: 0;\n  width: 2px;\n  height: 100%;\n  background: linear-gradient(180deg, transparent, cyan);\n  animation: animate2 1s linear infinite;\n  animation-delay: 0.25s;\n}\n\n@keyframes animate2 {\n  0% {\n    top: -100%;\n  }\n  50%, 100% {\n    top: 100%;\n  }\n}\n\n.neonButton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  bottom: 0%;\n  right: -100%;\n  width: 100%;\n  height: 2px;\n  background: linear-gradient(270deg, transparent, cyan);\n  animation: animate3 1s linear infinite;\n  animation-delay: 0.5s;\n}\n\n@keyframes animate3 {\n  0% {\n    right: -100%;\n  }\n  50%, 100% {\n    right: 100%;\n  }\n}\n\n.neonButton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\n  bottom: -100%;\n  left: 0;\n  right: -100%;\n  width: 2px;\n  height: 100%;\n  background: linear-gradient(360deg, transparent, cyan);\n  animation: animate4 1s linear infinite;\n  animation-delay: 0.75s;\n}\n\n@keyframes animate4 {\n  0% {\n    bottom: -100%;\n  }\n  50%, 100% {\n    bottom: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFJQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBREo7O0FBTUE7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUFISjs7QUFPQTtFQUNJLG9DQUFBO0FBSko7O0FBT0E7RUFDSSxvQ0FBQTtBQUpKOztBQU9BO0VBQ0ksb0NBQUE7QUFKSjs7QUFPQTtFQUNJLG9DQUFBO0FBSko7O0FBWUE7RUFHSSxrQkFBQTtFQUVBLGNBQUE7QUFaSjs7QUFpQkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxzRUFBQTtFQUNBLG1CQUFBO0FBZEo7O0FBbUJBO0VBQ0k7SUFDSSxjQUFBO0VBaEJOO0FBQ0Y7O0FBa0JBO0VBQ0k7SUFDSSxjQUFBO0VBaEJOO0FBQ0Y7O0FBb0JBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQWxCSjs7QUFxQkE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7QUFuQko7O0FBb0JJO0VBQ0ksc0JBQUE7RUFDSixZQUFBO0VBQ0Esc0VBQUE7QUFsQko7O0FBMEJBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBdkJKOztBQTRCQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUF6Qko7O0FBaUNBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtFQUFBO0FBL0JKOztBQXFDQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHNFQUFBO0FBbENKOztBQXVDQTtFQUNJLDBCQUFBO0FBcENKOztBQXVDQTtFQUNJLDBCQUFBO0FBcENKOztBQXlDQTtFQUNJLDBCQUFBO0FBdENKOztBQXdDQTtFQUNJLDBCQUFBO0FBckNKOztBQTJDQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQXhDSjs7QUEyQ0E7RUFDSSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EscURBQUE7RUFFQSxzQ0FBQTtBQXpDSjs7QUE0Q0E7RUFDSTtJQUNJLFdBQUE7RUF6Q047RUEyQ0U7SUFDSSxVQUFBO0VBekNOO0FBQ0Y7O0FBMkNBO0VBQ0ksVUFBQTtFQUVBLFFBQUE7RUFDQSxVQUFBO0VBRUEsWUFBQTtFQUNBLHNEQUFBO0VBRUEsc0NBQUE7RUFDQSxzQkFBQTtBQTVDSjs7QUErQ0E7RUFDSTtJQUNJLFVBQUE7RUE1Q047RUE4Q0U7SUFDSSxTQUFBO0VBNUNOO0FBQ0Y7O0FBOENBO0VBQ0ksVUFBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0VBRUEsV0FBQTtFQUNBLHNEQUFBO0VBRUEsc0NBQUE7RUFDQSxxQkFBQTtBQS9DSjs7QUFrREE7RUFDSTtJQUNJLFlBQUE7RUEvQ047RUFpREU7SUFDSSxXQUFBO0VBL0NOO0FBQ0Y7O0FBaURBO0VBQ0ksYUFBQTtFQUNBLE9BQUE7RUFFQSxZQUFBO0VBQ0EsVUFBQTtFQUVBLFlBQUE7RUFDQSxzREFBQTtFQUVBLHNDQUFBO0VBQ0Esc0JBQUE7QUFsREo7O0FBcURBO0VBQ0k7SUFDSSxhQUFBO0VBbEROO0VBb0RFO0lBQ0ksWUFBQTtFQWxETjtBQUNGIiwiZmlsZSI6InNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5cclxuXHJcbi5zZXJ2aWNlc1NlbGVjdG9yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwYWRkaW5nOiAyJTsgXHJcbiAgICAvLyBoZWlnaHQ6IDEwMHZoOyAgXHJcbiAgIFxyXG59XHJcblxyXG4uc3F1YXJlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIC4zcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8vIGJveC1zaGFkb3c6IDBweCAwcHggMzVweCA0cHggd2hpdGU7XHJcbn1cclxuXHJcbi5zcXVhcmU6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzNXB4IDRweCByZ2IoMjI4LCAxNjAsIDcxKTtcclxufVxyXG5cclxuLnNxdWFyZTpudGgtY2hpbGQoMik6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzNXB4IDRweCByZ2IoMTg3LCAxMTgsIDE4Nyk7XHJcblxyXG59XHJcbi5zcXVhcmU6bnRoLWNoaWxkKDMpOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMzVweCA0cHggcmdiKDc1LCAyMTIsIDIzNik7XHJcblxyXG59XHJcbi5zcXVhcmU6bnRoLWNoaWxkKDQpOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMzVweCA0cHggcmdiKDExMywgMjI0LCAxMTApO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi50aHJlZSB7XHJcbiAgICBcclxuICAgIC8vIG1hcmdpbjogMSU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvLyBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgbWluLXdpZHRoOiAyMyU7XHJcbn1cclxuXHJcblxyXG5cclxuLnNlcnZpY2VzVGl0bGVTZWxlY3RvciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiB3aGl0ZTtcclxuICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgLy8gLXdlYmtpdC1ib3gtcmVmbGVjdDogYmVsb3cgMXB4IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwjMDAwMSk7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KXtcclxuICAgIC50aHJlZSB7XHJcbiAgICAgICAgbWluLXdpZHRoOiA0NSU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk1OHB4KXtcclxuICAgIC50aHJlZSB7XHJcbiAgICAgICAgbWluLXdpZHRoOiA0OCU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4udGhyZWU6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmctdG9wOiBjYWxjKDEwMCUpO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgICY6aG92ZXIgLm5lb25CdXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGN5YW47XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IGN5YW4sXHJcbiAgICAgICAgICAgICAgICAwIDAgMjVweCBjeWFuLFxyXG4gICAgICAgICAgICAgICAgMCAwIDUwcHggY3lhbixcclxuICAgICAgICAgICAgICAgIDAgMCAyMDBweCBjeWFuO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmRvb3JzU2VsZWN0b3Ige1xyXG4gICAgcGFkZGluZzogMCA1JTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuXHJcblxyXG4ud29vZEVsZW1lbnRzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5uZW9uQnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDI1cHggMzBweDtcclxuICAgIG1hcmdpbjogNTBweCAwO1xyXG4gICAgY29sb3I6IGN5YW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgIC13ZWJraXQtYm94LXJlZmxlY3Q6IGJlbG93IDVweCBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsIzAwMDUpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4ubmVvbkJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCBjeWFuLFxyXG4gICAgICAgICAgICAgICAgMCAwIDI1cHggY3lhbixcclxuICAgICAgICAgICAgICAgIDAgMCA1MHB4IGN5YW4sXHJcbiAgICAgICAgICAgICAgICAwIDAgMjAwcHggY3lhbjtcclxufVxyXG4ubmVvbkJ1dHRvbiB7XHJcbiAgICBmaWx0ZXI6IGh1ZS1yb3RhdGUoMjI4ZGVnKTtcclxufVxyXG5cclxuLm5lb25CdXR0b24yIHtcclxuICAgIGZpbHRlcjogaHVlLXJvdGF0ZSgxNTBkZWcpO1xyXG4gICBcclxufVxyXG5cclxuXHJcbi5uZW9uQnV0dG9uMyB7XHJcbiAgICBmaWx0ZXI6IGh1ZS1yb3RhdGUoMzgwZGVnKTtcclxufVxyXG4ubmVvbkJ1dHRvbjQge1xyXG4gICAgZmlsdGVyOiBodWUtcm90YXRlKDMwMGRlZyk7XHJcbn1cclxuLy8gLm5lb25CdXR0b246bnRoLWNoaWxkKDIpIHtcclxuLy8gICAgIGZpbHRlcjogaHVlLXJvdGF0ZSgyMjhkZWcpO1xyXG4vLyB9XHJcblxyXG4ubmVvbkJ1dHRvbiBzcGFuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubmVvbkJ1dHRvbiBzcGFuOm50aC1jaGlsZCgxKSB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAtMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50LGN5YW4pO1xyXG5cclxuICAgIGFuaW1hdGlvbjogYW5pbWF0ZTEgMXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGUxIHtcclxuICAgIDAlIHtcclxuICAgICAgICBsZWZ0OiAtMTAwJTtcclxuICAgIH1cclxuICAgIDUwJSwxMDAlIHtcclxuICAgICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgfVxyXG59XHJcbi5uZW9uQnV0dG9uIHNwYW46bnRoLWNoaWxkKDIpIHtcclxuICAgIHRvcDogLTEwMCU7XHJcbiAgICBcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDJweDtcclxuICAgIFxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdHJhbnNwYXJlbnQsY3lhbik7XHJcblxyXG4gICAgYW5pbWF0aW9uOiBhbmltYXRlMiAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC4yNXM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbWF0ZTIge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRvcDogLTEwMCU7XHJcbiAgICB9XHJcbiAgICA1MCUsMTAwJSB7XHJcbiAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcbi5uZW9uQnV0dG9uIHNwYW46bnRoLWNoaWxkKDMpIHtcclxuICAgIGJvdHRvbTogMCU7XHJcbiAgICBcclxuICAgIHJpZ2h0OiAtMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIHRyYW5zcGFyZW50LGN5YW4pO1xyXG5cclxuICAgIGFuaW1hdGlvbjogYW5pbWF0ZTMgMXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAuNXM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbWF0ZTMge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHJpZ2h0OiAtMTAwJTtcclxuICAgIH1cclxuICAgIDUwJSwxMDAlIHtcclxuICAgICAgICByaWdodDogMTAwJTtcclxuICAgIH1cclxufVxyXG4ubmVvbkJ1dHRvbiBzcGFuOm50aC1jaGlsZCg0KSB7XHJcbiAgICBib3R0b206IC0xMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIFxyXG4gICAgcmlnaHQ6IC0xMDAlO1xyXG4gICAgd2lkdGg6IDJweDtcclxuICAgIFxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgdHJhbnNwYXJlbnQsY3lhbik7XHJcblxyXG4gICAgYW5pbWF0aW9uOiBhbmltYXRlNCAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC43NXM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbWF0ZTQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIGJvdHRvbTogLTEwMCU7XHJcbiAgICB9XHJcbiAgICA1MCUsMTAwJSB7XHJcbiAgICAgICAgYm90dG9tOiAxMDAlO1xyXG4gICAgfVxyXG59IFxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/services"]; };
const _c1 = function () { return ["/contact"]; };
const _c2 = function () { return ["/basket"]; };
class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 57, vars: 6, consts: [[1, "main-content"], [1, "right", "box"], [1, "content"], ["routerLinkActive", "active", 3, "routerLink"], [1, "fas", "fa-shopping-cart"], [1, "left", "box"], [1, "social"], ["href", "https://www.facebook.com/Korona-Leva-972307229485602/"], [1, "fab", "fa-facebook-f"], ["href", "https://twitter.com/Sheffield_door"], [1, "fab", "fa-twitter"], ["href", "https://www.youtube.com/channel/UCagrJoqv9E-UuBSJAINWeGA"], [1, "fab", "fa-youtube"], [1, "center", "box"], [1, "place"], [1, "fas", "fa-map-marker-alt"], [1, "text"], [1, "phone"], [1, "fas", "fa-phone-alt"], [1, "email"], [1, "fas", "fa-envelope"], [1, "bottom"], [2, "text-align", "center"], [1, "far", "fa-copyright"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Routing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, dignissimos?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "79069, \u0423\u043A\u0440\u0430\u0457\u043D\u0430, \u041B\u044C\u0432\u0456\u0432 \u0432\u0443\u043B. \u0428\u0435\u0432\u0447\u0435\u043D\u043A\u0430, 315");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "+ 38 (098) 119 94 82");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "+ 38 (032) 239 58 05 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "+ 38 (067) 373 44 04");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "korona-leva@korona-leva.lviv.ua");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " 2021 All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  color: #d9d9d9;\n  box-sizing: border-box;\n}\n\n.content1[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 130px auto;\n  text-align: center;\n  padding: 0 20px;\n}\n\n.content1[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 600;\n  color: #202020;\n}\n\n.content1[_ngcontent-%COMP%]   .p[_ngcontent-%COMP%] {\n  font-size: 2.1875rem;\n  font-weight: 600;\n  color: #202020;\n}\n\nfooter[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 100%;\n  width: 100%;\n  background: black;\n  box-shadow: 0 5px 25px rgba(255, 255, 255, 0.5);\n}\n\nli[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 100;\n  text-decoration: none;\n  font-size: 17px;\n  padding: 7px 13px;\n  border-radius: 3px;\n  text-transform: uppercase;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.main-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  flex-basis: 50%;\n  padding: 10px 20px;\n}\n\n.box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n.box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin: 20px 0 0 0;\n  position: relative;\n}\n\n.box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  top: -10px;\n  height: 2px;\n  width: 100%;\n  background: #1a1a1a;\n}\n\n.box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\";\n  height: 2px;\n  width: 15%;\n  background: gray;\n  top: -10px;\n}\n\n.left[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n.left[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n  margin: 20px 0 0 0;\n}\n\n.left[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0 2px;\n}\n\n.left[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  background: #1a1a1a;\n  line-height: 40px;\n  text-align: center;\n  font-size: 18px;\n  border-radius: 5px;\n  transition: 0.3s;\n}\n\n.left[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  background: gray;\n}\n\n.center[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  font-size: 1.4375rem;\n  background: #1a1a1a;\n  height: 45px;\n  width: 45px;\n  line-height: 45px;\n  text-align: center;\n  border-radius: 50%;\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n.center[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%]:hover {\n  background: gray;\n}\n\n.center[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 1.0625rem;\n  font-weight: 500;\n  padding-left: 10px;\n}\n\n.center[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n\n.right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 1.0625rem;\n  margin-bottom: 2px;\n  color: #656565;\n}\n\n.right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .msg[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 1.0625rem;\n  background: #151515;\n  padding-left: 10px;\n  border: 1px solid #222222;\n}\n\n.right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline-color: #3498db;\n}\n\n.right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 35px;\n}\n\n.right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 100%;\n  border: none;\n  outline: none;\n  background: gray;\n  font-size: 1.0625rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: 0.3s;\n}\n\n.right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #000;\n}\n\n.bottom[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin: 0 20px;\n  font-size: 0.9375rem;\n  border-top: 1px solid gray;\n}\n\n.bottom[_ngcontent-%COMP%]   center[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #656565;\n}\n\n.bottom[_ngcontent-%COMP%]   center[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: gray;\n  text-decoration: none;\n}\n\n.bottom[_ngcontent-%COMP%]   center[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n@media screen and (max-width: 900px) {\n  footer[_ngcontent-%COMP%] {\n    position: relative;\n    bottom: 0px;\n  }\n\n  .main-content[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n\n  .main-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    margin: 5px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUpGOztBQU1BO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFIRjs7QUFLQTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRkY7O0FBSUE7RUFDRSxnQkFBQTtFQUVBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQ0FBQTtBQUZGOztBQUtBO0VBQ0kscUJBQUE7QUFGSjs7QUFLQTtFQUVJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUhKOztBQUtBO0VBQ0UsYUFBQTtBQUZGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBREY7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFBRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQUdGOztBQURBO0VBQ0UsbUJBQUE7QUFJRjs7QUFGQTtFQUNFLGtCQUFBO0FBS0Y7O0FBSEE7RUFDRSxjQUFBO0FBTUY7O0FBSkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBT0Y7O0FBTEE7RUFDRSxnQkFBQTtBQVFGOztBQU5BO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBU0Y7O0FBUEE7RUFDRSxnQkFBQTtBQVVGOztBQVJBO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBV0Y7O0FBVEE7RUFDRSxjQUFBO0FBWUY7O0FBVkE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQWFGOztBQVhBO0VBQ0UsZ0JBQUE7QUFjRjs7QUFaQTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQWVGOztBQWJBOztFQUVFLHNCQUFBO0FBZ0JGOztBQWRBO0VBQ0UsWUFBQTtBQWlCRjs7QUFmQTtFQUNFLGdCQUFBO0FBa0JGOztBQWhCQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFtQkY7O0FBakJBO0VBQ0UsZ0JBQUE7QUFvQkY7O0FBbEJBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFFQSxvQkFBQTtFQUVBLDBCQUFBO0FBbUJGOztBQWZBO0VBQ0UsY0FBQTtBQWtCRjs7QUFoQkE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUFtQkY7O0FBakJBO0VBQ0UsMEJBQUE7QUFvQkY7O0FBbEJBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLFdBQUE7RUFxQkY7O0VBbkJBO0lBQ0UsZUFBQTtJQUNBLHNCQUFBO0VBc0JGOztFQXBCQTtJQUNFLGFBQUE7RUF1QkY7QUFDRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJHByaW1hcnktY29sb3I6ICMwMDA7XHJcbiR0ZXh0LWNvbG9yOiAjZmZmO1xyXG5cclxuLy8gQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjQwMCw1MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXAnKTtcclxuKntcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBjb2xvcjogI2Q5ZDlkOTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIFxyXG59XHJcbi5jb250ZW50MXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAxMzBweCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbn1cclxuLmNvbnRlbnQxIC50ZXh0e1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMyMDIwMjA7XHJcbn1cclxuLmNvbnRlbnQxIC5we1xyXG4gIGZvbnQtc2l6ZTogMi4xODc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMyMDIwMjA7XHJcbn1cclxuZm9vdGVye1xyXG4gIHBvc2l0aW9uOnN0aWNreTtcclxuICAvLyBib3R0b206IDBweDtcclxuICB0b3A6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggMjVweCByZ2JhKCRjb2xvcjogd2hpdGUsICRhbHBoYTogMC41KTtcclxufVxyXG5cclxubGkge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG5saSBhe1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbS13aWR0aDogMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHBhZGRpbmc6IDdweCAxM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbi5tYWluLWNvbnRlbnR7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4ubWFpbi1jb250ZW50IC5ib3h7XHJcbiAgZmxleC1iYXNpczogNTAlO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxufVxyXG4uYm94IGgye1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5ib3ggLmNvbnRlbnR7XHJcbiAgbWFyZ2luOiAyMHB4IDAgMCAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uYm94IC5jb250ZW50OmJlZm9yZXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogJyc7XHJcbiAgdG9wOiAtMTBweDtcclxuICBoZWlnaHQ6IDJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjMWExYTFhO1xyXG59XHJcbi5ib3ggLmNvbnRlbnQ6YWZ0ZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIHdpZHRoOiAxNSU7XHJcbiAgYmFja2dyb3VuZDogZ3JheTtcclxuICB0b3A6IC0xMHB4O1xyXG59XHJcbi5sZWZ0IC5jb250ZW50IHB7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG4ubGVmdCAuY29udGVudCAuc29jaWFse1xyXG4gIG1hcmdpbjogMjBweCAwIDAgMDtcclxufVxyXG4ubGVmdCAuY29udGVudCAuc29jaWFsIGF7XHJcbiAgcGFkZGluZzogMCAycHg7XHJcbn1cclxuLmxlZnQgLmNvbnRlbnQgLnNvY2lhbCBhIHNwYW57XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGJhY2tncm91bmQ6ICMxYTFhMWE7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG4ubGVmdCAuY29udGVudCAuc29jaWFsIGEgc3Bhbjpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiBncmF5O1xyXG59XHJcbi5jZW50ZXIgLmNvbnRlbnQgLmZhc3tcclxuICBmb250LXNpemU6IDEuNDM3NXJlbTtcclxuICBiYWNrZ3JvdW5kOiAjMWExYTFhO1xyXG4gIGhlaWdodDogNDVweDtcclxuICB3aWR0aDogNDVweDtcclxuICBsaW5lLWhlaWdodDogNDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jZW50ZXIgLmNvbnRlbnQgLmZhczpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiBncmF5O1xyXG59XHJcbi5jZW50ZXIgLmNvbnRlbnQgLnRleHR7XHJcbiAgZm9udC1zaXplOiAxLjA2MjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLmNlbnRlciAuY29udGVudCAucGhvbmV7XHJcbiAgbWFyZ2luOiAxNXB4IDA7XHJcbn1cclxuLnJpZ2h0IGZvcm0gLnRleHR7XHJcbiAgZm9udC1zaXplOiAxLjA2MjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gIGNvbG9yOiAjNjU2NTY1O1xyXG59XHJcbi5yaWdodCBmb3JtIC5tc2d7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4ucmlnaHQgZm9ybSBpbnB1dCwgLnJpZ2h0IGZvcm0gdGV4dGFyZWF7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxLjA2MjVyZW07XHJcbiAgYmFja2dyb3VuZDogIzE1MTUxNTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzIyMjIyMjtcclxufVxyXG4ucmlnaHQgZm9ybSBpbnB1dDpmb2N1cyxcclxuLnJpZ2h0IGZvcm0gdGV4dGFyZWE6Zm9jdXN7XHJcbiAgb3V0bGluZS1jb2xvcjogIzM0OThkYjtcclxufVxyXG4ucmlnaHQgZm9ybSBpbnB1dHtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuLnJpZ2h0IGZvcm0gLmJ0bntcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5yaWdodCBmb3JtIC5idG4gYnV0dG9ue1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gIGZvbnQtc2l6ZTogMS4wNjI1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IC4zcztcclxufVxyXG4ucmlnaHQgZm9ybSAuYnRuIGJ1dHRvbjpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG59XHJcbi5ib3R0b20ge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luOiAwIDIwcHg7XHJcbi8vICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgZm9udC1zaXplOiAwLjkzNzVyZW07XHJcbi8vICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XHJcbiAgXHJcbiAgXHJcbn1cclxuLmJvdHRvbSBjZW50ZXIgc3BhbntcclxuICBjb2xvcjogIzY1NjU2NTtcclxufVxyXG4uYm90dG9tIGNlbnRlciBhe1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uYm90dG9tIGNlbnRlciBhOmhvdmVye1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgZm9vdGVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgfVxyXG4gIC5tYWluLWNvbnRlbnR7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAubWFpbi1jb250ZW50IC5ib3h7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "NuUg":
/*!**************************************************!*\
  !*** ./src/app/shared/services/order.service.ts ***!
  \**************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");




class OrderService {
    constructor(http, firestore) {
        this.http = http;
        this.firestore = firestore;
        // basket: Subject<any>  = new Subject<any>(); не то
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].url;
        this.apiKey = '';
        this.mapLocation = { lat: 49.84178857391628, lng: 24.031238169561295 }; //пл.Ринок, 1
        this.sector1 = [
            { lat: 49.844575, lng: 24.026266 },
            { lat: 49.844575, lng: 24.038749 },
            { lat: 49.839575, lng: 24.038749 },
            { lat: 49.839575, lng: 24.026266 } //нижня ліва
        ];
        this.sector2 = [
            { lat: 49.849775, lng: 24.005900 },
            { lat: 49.849775, lng: 24.041370 },
            { lat: 49.832200, lng: 24.041370 },
            { lat: 49.832200, lng: 24.005900 } //нижня ліва
        ];
        this.sector1Param = {
            paths: this.sector1,
            strokeColor: 'green',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: 'green',
            editable: false,
            fillOpacity: 0.25,
            geodesic: true
        };
        this.sector2Param = {
            paths: this.sector2,
            strokeColor: 'yellow',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: 'yellow',
            editable: false,
            fillOpacity: 0.25,
            geodesic: true
        };
        this.url += 'orders';
    }
    //  addOrder(order: IBasket): Observable<IBasket> {
    //   return this.http.post<IBasket>(this.url, order);
    // }
    getAllOrders() {
        return this.http.get(this.url);
    }
    addNewOrder(order) {
        return this.http.post(this.url, order);
    }
    deleteOrder(order) {
        return this.http.delete(`${this.url}/${order.id}`);
    }
    getOrdersFirestore() {
        return this.firestore.collection('orders').ref.get();
    }
    createOrdersForFS(order, id) {
        return this.firestore.collection('orders').doc(id).set(order);
    }
    deleteOrderFromFS(id) {
        return this.firestore.collection('orders').doc(id).delete();
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"])); };
OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ui-loader */ "gren");





// import { MouseEvents } from '@agm/core'; 
class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ngx-ui-loader");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], styles: ["body[_ngcontent-%COMP%] {\n  background-color: black;\n}\n\nagm-map[_ngcontent-%COMP%] {\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5hZ20tbWFwIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "WEeH":
/*!******************************************************************!*\
  !*** ./src/app/pages/admin/admin-users/admin-users.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUsersComponent", function() { return AdminUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



const _c0 = function () { return ["/admin"]; };
const _c1 = function () { return ["/admin/adminWoodProducts"]; };
class AdminUsersComponent {
    constructor() {
        this.searchProduct = '';
    }
    ngOnInit() {
    }
}
AdminUsersComponent.ɵfac = function AdminUsersComponent_Factory(t) { return new (t || AdminUsersComponent)(); };
AdminUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminUsersComponent, selectors: [["app-admin-users"]], decls: 41, vars: 5, consts: [[2, "color", "white", "padding", "80px 5%"], [1, "adminPanel"], [1, "adminAside"], [1, "btn-group-vertical", "d-grid", "gap-2"], [3, "routerLink"], [1, "btn-dark", "btn"], [1, "adminPanelFields"], [1, "newProductField"], [1, "searcher", "d-flex"], ["name", "searchProduct", "type", "text", "placeholder", "Search order...", 1, "form-control", "mr-2", 3, "ngModel", "ngModelChange"], [1, "adminProductsTable", "table", "table-light"]], template: function AdminUsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin-users works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aside", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Wood Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminUsersComponent_Template_input_ngModelChange_21_listener($event) { return ctx.searchProduct = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Street");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "House");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "View Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchProduct);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".fontWeightBold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.adminPanel[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.adminAside[_ngcontent-%COMP%] {\n  width: 20%;\n  display: flex;\n  justify-content: center;\n  background-color: #fff;\n  border: 1px solid cyan;\n  border-radius: 10px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.adminPanelFields[_ngcontent-%COMP%] {\n  color: black;\n  height: 700px;\n  overflow-y: scroll;\n  padding: 10px;\n  width: 78%;\n  background-color: #fff;\n  border: 1px solid cyan;\n  border-radius: 10px;\n  min-height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWRtaW4tdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxpQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQURKOztBQUtBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtBQUZKOztBQUtBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUdBLGFBQUE7RUFFQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFMSiIsImZpbGUiOiJhZG1pbi11c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmZvbnRXZWlnaHRCb2xkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYWRtaW5QYW5lbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxufVxyXG5cclxuLmFkbWluQXNpZGUge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBjeWFuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGhlaWdodDpmaXQtY29udGVudDtcclxufVxyXG5cclxuLmFkbWluUGFuZWxGaWVsZHMge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgaGVpZ2h0OiA3MDBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIFxyXG5cclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgd2lkdGg6IDc4JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBjeWFuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG5cclxuXHJcblxyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "YWQT":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/wood-products.service.ts ***!
  \**********************************************************/
/*! exports provided: WoodProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WoodProductsService", function() { return WoodProductsService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");




class WoodProductsService {
    constructor(http, firestore) {
        this.http = http;
        this.firestore = firestore;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].url;
        // this.url += 'woodProducts';
    }
    getProductsFromDB() {
        return this.http.get(this.url);
    }
    //  getDirectionalName(name:string): Observable<IWoodProduct[]> {
    //   return this.http.get<IWoodProduct[]>(this.url + `?name=${name}`);
    // }
    //  addNewProduct(product: IWoodProduct): Observable<IWoodProduct> {
    //   return this.http.post<IWoodProduct>(this.url, product);
    // }
    // deleteProduct(product: IWoodProduct): Observable<IWoodProduct> {
    //   return this.http.delete<IWoodProduct>(`${this.url}/${product.id}`);
    // }
    // updateProduct(product: IWoodProduct): Observable<IWoodProduct> {
    //   return this.http.put<IWoodProduct>(`${this.url}/${product.id}`, product);
    // }
    getProductsFromFS() {
        return this.firestore.collection('woodProducts').ref.get();
    }
    createProductForFS(product, id) {
        return this.firestore.collection('woodProducts').doc(id).set(product);
    }
    deleteProductFromFS(id) {
        return this.firestore.collection('woodProducts').doc(id).delete();
    }
    updateProductFromFS(id, product) {
        return this.firestore.collection('woodProducts').doc(id).set(product);
    }
}
WoodProductsService.ɵfac = function WoodProductsService_Factory(t) { return new (t || WoodProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"])); };
WoodProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WoodProductsService, factory: WoodProductsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Z5OG":
/*!**********************************************************!*\
  !*** ./src/app/shared/pipes/admin-products-pipe.pipe.ts ***!
  \**********************************************************/
/*! exports provided: AdminProductsPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductsPipePipe", function() { return AdminProductsPipePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AdminProductsPipePipe {
    transform(value, searchProduct) {
        if (!value) {
            return [];
        }
        if (!searchProduct) {
            return value;
        }
        return value.filter(item => item.className.toLowerCase().includes(searchProduct.toLowerCase()) ||
            item.type.toLowerCase().includes(searchProduct.toLowerCase()) ||
            item.name.toLowerCase().includes(searchProduct.toLowerCase()) ||
            item.article.toLowerCase().includes(searchProduct.toLowerCase()));
    }
}
AdminProductsPipePipe.ɵfac = function AdminProductsPipePipe_Factory(t) { return new (t || AdminProductsPipePipe)(); };
AdminProductsPipePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "adminProductsPipe", type: AdminProductsPipePipe, pure: true });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_basket_basket_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/basket/basket.component */ "zYrN");
/* harmony import */ var _pages_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/contacts/contacts.component */ "ZuGw");
/* harmony import */ var _pages_information_information_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/information/information.component */ "vfrJ");
/* harmony import */ var _pages_news_news_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/news/news.component */ "7yAP");
/* harmony import */ var _pages_services_services_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/services/services.component */ "Kbxg");
/* harmony import */ var _pages_works_works_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/works/works.component */ "wRh0");
/* harmony import */ var _pages_services_doorsTypes_interior_doors_interior_doors_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/services/doorsTypes/interior-doors/interior-doors.component */ "gT65");
/* harmony import */ var _pages_services_doorsTypes_entrace_doors_entrace_doors_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/services/doorsTypes/entrace-doors/entrace-doors.component */ "xjhd");
/* harmony import */ var _pages_services_doorsTypes_furniture_furniture_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/services/doorsTypes/furniture/furniture.component */ "5GRp");
/* harmony import */ var _pages_services_wood_products_wood_products_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/services/wood-products/wood-products.component */ "ky+U");
/* harmony import */ var _pages_services_doorsTypes_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/services/doorsTypes/product-page/product-page.component */ "ZSOS");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _pages_services_doorsTypes_directive_product_page_directive_product_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/services/doorsTypes/directive-product-page/directive-product-page.component */ "4UHR");
/* harmony import */ var _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/admin/admin.component */ "sS4B");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_pipes_admin_products_pipe_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/pipes/admin-products-pipe.pipe */ "Z5OG");
/* harmony import */ var _pages_services_wood_products_wood_product_page_wood_product_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/services/wood-products/wood-product-page/wood-product-page.component */ "GsQN");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _pages_admin_admin_wood_products_admin_wood_products_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/admin/admin-wood-products/admin-wood-products.component */ "rj1O");
/* harmony import */ var _shared_pipes_wood_products_pipe_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/pipes/wood-products-pipe.pipe */ "Bl/c");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _shared_configuration_loader_config__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./shared/configuration/loader.config */ "9/PF");
/* harmony import */ var _pages_admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/admin/admin-orders/admin-orders.component */ "JjJR");
/* harmony import */ var _pages_admin_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/admin/admin-users/admin-users.component */ "WEeH");
/* harmony import */ var _shared_pipes_admin_orders_pipe_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./shared/pipes/admin-orders-pipe.pipe */ "/cMK");
/* harmony import */ var _pages_admin_admin_sub_admin_sub_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/admin/admin-sub/admin-sub.component */ "dOc4");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/core */ "fXoL");





























// import { NgxUiLoaderModule } from "ngx-ui-loader";










// import { AgmCoreModule, AgmMap } from '@agm/core';
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            swiper_angular__WEBPACK_IMPORTED_MODULE_1__["SwiperModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_24__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_26__["environment"].firebaseConfig),
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_25__["AngularFireStorageModule"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_29__["NgxUiLoaderModule"].forRoot(_shared_configuration_loader_config__WEBPACK_IMPORTED_MODULE_30__["loader"]),
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_29__["NgxUiLoaderRouterModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__["BrowserAnimationsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _pages_basket_basket_component__WEBPACK_IMPORTED_MODULE_7__["BasketComponent"],
        _pages_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__["ContactsComponent"],
        _pages_information_information_component__WEBPACK_IMPORTED_MODULE_9__["InformationComponent"],
        _pages_news_news_component__WEBPACK_IMPORTED_MODULE_10__["NewsComponent"],
        _pages_services_services_component__WEBPACK_IMPORTED_MODULE_11__["ServicesComponent"],
        _pages_works_works_component__WEBPACK_IMPORTED_MODULE_12__["WorksComponent"],
        _pages_services_doorsTypes_interior_doors_interior_doors_component__WEBPACK_IMPORTED_MODULE_13__["InteriorDoorsComponent"],
        _pages_services_doorsTypes_entrace_doors_entrace_doors_component__WEBPACK_IMPORTED_MODULE_14__["EntraceDoorsComponent"],
        _pages_services_doorsTypes_furniture_furniture_component__WEBPACK_IMPORTED_MODULE_15__["FurnitureComponent"],
        _pages_services_wood_products_wood_products_component__WEBPACK_IMPORTED_MODULE_16__["WoodProductsComponent"],
        _pages_services_doorsTypes_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_17__["ProductPageComponent"],
        _pages_services_doorsTypes_directive_product_page_directive_product_page_component__WEBPACK_IMPORTED_MODULE_19__["DirectiveProductPageComponent"],
        _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_20__["AdminComponent"],
        _shared_pipes_admin_products_pipe_pipe__WEBPACK_IMPORTED_MODULE_22__["AdminProductsPipePipe"],
        _pages_services_wood_products_wood_product_page_wood_product_page_component__WEBPACK_IMPORTED_MODULE_23__["WoodProductPageComponent"],
        _pages_admin_admin_wood_products_admin_wood_products_component__WEBPACK_IMPORTED_MODULE_27__["AdminWoodProductsComponent"],
        _shared_pipes_wood_products_pipe_pipe__WEBPACK_IMPORTED_MODULE_28__["WoodProductsPipePipe"],
        _pages_admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_31__["AdminOrdersComponent"],
        _pages_admin_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_32__["AdminUsersComponent"],
        _shared_pipes_admin_orders_pipe_pipe__WEBPACK_IMPORTED_MODULE_33__["AdminOrdersPipePipe"],
        _pages_admin_admin_sub_admin_sub_component__WEBPACK_IMPORTED_MODULE_34__["AdminSubComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        swiper_angular__WEBPACK_IMPORTED_MODULE_1__["SwiperModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_24__["AngularFireModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_25__["AngularFireStorageModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_29__["NgxUiLoaderModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_29__["NgxUiLoaderRouterModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "ZL7T":
/*!************************************************!*\
  !*** ./src/app/shared/services/map.service.ts ***!
  \************************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class MapService {
    constructor(http) {
        this.http = http;
        // apiKey = 'AIzaSyDKmK_ZSFQkIEcNMAIB_NlQ4oZcxHnDPPQ';
        this.key = '6f5ae358ca9e2b2b013f5eb183c2f118';
        this.apiKey = '';
        this.mapLocation = { lat: 49.84178857391628, lng: 24.031238169561295 }; //пл.Ринок, 1
        this.sector1 = [
            { lat: 49.844575, lng: 24.026266 },
            { lat: 49.844575, lng: 24.038749 },
            { lat: 49.839575, lng: 24.038749 },
            { lat: 49.839575, lng: 24.026266 } //нижня ліва
        ];
        this.sector2 = [
            { lat: 49.849775, lng: 24.005900 },
            { lat: 49.849775, lng: 24.041370 },
            { lat: 49.832200, lng: 24.041370 },
            { lat: 49.832200, lng: 24.005900 } //нижня ліва
        ];
        this.sector1Param = {
            paths: this.sector1,
            strokeColor: 'green',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: 'green',
            editable: false,
            fillOpacity: 0.25,
            geodesic: true
        };
        this.sector2Param = {
            paths: this.sector2,
            strokeColor: 'yellow',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: 'yellow',
            editable: false,
            fillOpacity: 0.25,
            geodesic: true
        };
    }
    getNova() {
        // console.log(this.seach);
        return this.http.post(`https://api.novaposhta.ua/v2.0/json/${this.key}`, {
            "modelName": "AddressGeneral",
            "calledMethod": "getWarehouses",
            "methodProperties": {
                "Language": "ua",
                "CityName": "львів",
            },
            "apiKey": this.key
        });
    }
}
MapService.ɵfac = function MapService_Factory(t) { return new (t || MapService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MapService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MapService, factory: MapService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZSOS":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/services/doorsTypes/product-page/product-page.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageComponent", function() { return ProductPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_door_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/door.service */ "xYI4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a1, a2, a4) { return ["/services/", a1, a2, "productPage", a4]; };
function ProductPageComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c0, ctx_r0.currentProduct[0].className, ctx_r0.currentProduct[0] == null ? null : ctx_r0.currentProduct[0].type, product_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1 == null ? null : product_r1.name, " ");
} }
const _c1 = function () { return ["/services"]; };
const _c2 = function (a1) { return ["/services/", a1]; };
// import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'
class ProductPageComponent {
    constructor(doorService, routerActivate) {
        this.doorService = doorService;
        this.routerActivate = routerActivate;
        this.localProducts = [];
        this.currentProductCount = 1;
        this.currentProduct = [];
    }
    ngOnInit() {
        const category = this.routerActivate.snapshot;
        this.searchClassName = category.params.className;
        this.searchType = category.params.type;
        this.loadFromFirebase();
    }
    loadFromFirebase() {
        this.doorService.testFirestore().then(res => {
            let allDoors = [];
            let filteredTypesArr = [];
            allDoors = res.docs.map(el => el.data());
            this.currentProduct = allDoors.filter(item => item.className.toLowerCase() == this.searchClassName.toLowerCase() && item.type.toLowerCase() == this.searchType.toLowerCase());
            // console.log(this.currentProduct);
        });
    }
    showInfo(i) {
        this.isShowhed = i;
        // console.log(i);
    }
    // getCurrentProduct() {
    //   this.doorsService.getDirectionalType(localStorage.getItem('currentClassName'),localStorage.getItem("currentProduct")).subscribe(data => {
    //     this.currentProduct = data;
    //     console.log(data);
    //   })
    // }
    directiveItem(i) {
        localStorage.setItem('directiveItem', i);
    }
    productCount(product, status) {
        if (status) {
            this.currentProductCount++;
            product.count++;
        }
        else {
            if (product.count > 1) {
                product.count--;
                this.currentProductCount--;
            }
        }
    }
    addToBasket(product) {
        // console.log(JSON.parse(localStorage.getItem('basket')));
        if (JSON.parse(localStorage.getItem('basket')).length > 0) {
            this.localProducts = JSON.parse(localStorage.getItem('basket'));
            // console.log(this.localProducts);
            if (this.localProducts.some(localProduct => localProduct.id === product.id)) {
                const index = this.localProducts.findIndex(localProduct => localProduct.id === product.id);
                this.localProducts[index].count = +this.localProducts[index].count;
                this.localProducts[index].count += +product.count;
                // console.log(this.localProducts[index].count);
            }
            else {
                this.localProducts.push(product);
            }
            localStorage.setItem('basket', JSON.stringify(this.localProducts));
        }
        else {
            this.localProducts.push(product);
            // console.log(this.localProducts);
        }
        localStorage.setItem('basket', JSON.stringify(this.localProducts));
    }
}
ProductPageComponent.ɵfac = function ProductPageComponent_Factory(t) { return new (t || ProductPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_door_service__WEBPACK_IMPORTED_MODULE_1__["DoorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ProductPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductPageComponent, selectors: [["app-product-page"]], inputs: { message: "message" }, decls: 15, vars: 12, consts: [[1, "main", 2, "color", "white", "padding", "80px 5%"], [2, "text-align", "center"], ["aria-label", "breadcrumb", 2, "--bs-breadcrumb-divider", ">"], [1, "breadcrumb", 2, "text-transform", "uppercase", "background-color", "black", "margin-bottom", "30px", "font-size", "1rem"], ["aria-current", "page", 1, "breadcrumb-item", 3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "entraceDoorsSelector"], ["class", "entraceDoorItem", "class", "entraceDoorItem square", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "entraceDoorItem", "square", 3, "routerLink"], [1, "test"], [1, "entraceDoorImage"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "entraceDoorTitle"], [2, "text-align", "center", "text-transform", "uppercase"]], template: function ProductPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "PRODUCTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProductPageComponent_div_14_Template, 7, 7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, ctx.currentProduct[0] == null ? null : ctx.currentProduct[0].className));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, ctx.currentProduct[0] == null ? null : ctx.currentProduct[0].className)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentProduct[0] == null ? null : ctx.currentProduct[0].className);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentProduct);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LowerCasePipe"]], styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.entraceDoorsSelector[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n@media (max-width: 1520px) {\n  .entraceDoorsSelector[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n\n  .entraceDoorItem[_ngcontent-%COMP%] {\n    margin-top: 100px;\n  }\n}\n\n@media (max-width: 1133px) {\n  .entraceDoorsSelector[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n\n.entraceDoorItem[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin: 20px;\n  position: relative;\n  width: 300px;\n  height: 300px;\n  background: linear-gradient(195deg, white, darkgray);\n  position: relative;\n  border-radius: 2%;\n  border: 1px solid white;\n  box-shadow: 0 5px 20px white;\n  z-index: 4;\n}\n\n.test[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 2%;\n  z-index: 5;\n  transition: all linear 0.2s;\n}\n\n.entraceDoorTitle[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n  bottom: 5%;\n  right: 5%;\n  position: absolute;\n  font-size: 1rem;\n  font-weight: 500;\n  z-index: 6;\n}\n\n.entraceDoorItem[_ngcontent-%COMP%]:hover   .test[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.9);\n}\n\n.entraceDoorItem[_ngcontent-%COMP%]:hover   .entraceDoorTitle[_ngcontent-%COMP%] {\n  width: 100%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 1.4rem;\n  font-family: monospace;\n  font-weight: bold;\n  z-index: 5;\n  overflow: hidden;\n}\n\n.entraceDoorImage[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.entraceDoorImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  border-radius: 2%;\n}\n\n.productImage[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-position: center;\n  background-size: auto;\n  background-repeat: no-repeat;\n}\n\n.breadcrumb-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHByb2R1Y3QtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrVkE7RUFFRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBbFZGOztBQXFWQTtFQUVFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFuVkY7O0FBdVZBO0VBQ0U7SUFDSSw4QkFBQTtFQXBWSjs7RUF1VkE7SUFDSSxpQkFBQTtFQXBWSjtBQUNGOztBQXNWQTtFQUNFO0lBQ0ksdUJBQUE7RUFwVko7QUFDRjs7QUEwVkE7RUFFRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSxvREFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsVUFBQTtBQTFWRjs7QUE2VkE7RUFHRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0FBNVZGOztBQStWQTtFQUNFLHFCQUFBO0VBRUEsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBOVZGOztBQWtXQTtFQUNFLG9DQUFBO0FBL1ZGOztBQWlXQTtFQUNFLFdBQUE7RUFFQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUVBLGdCQUFBO0FBaFdGOztBQTBXQTtFQUNFLFlBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQXhXRjs7QUE2V0E7RUFFRSxZQUFBO0VBRUEsd0JBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FBNVdGOztBQStXQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0FBNVdGOztBQW1YQTtFQUNFLGVBQUE7QUFoWEYiLCJmaWxlIjoicHJvZHVjdC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuLy8gKntcclxuXHJcbi8vICAgcGFkZGluZzogMDtcclxuLy8gICBtYXJnaW46IDA7XHJcbi8vICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuLy8gfVxyXG5cclxuLy8gLm1haW4ge1xyXG4vLyAgIHBhZGRpbmc6IDgwcHggNSU7XHJcbi8vIH1cclxuXHJcbi8vIC5lbnRyYWNlRG9vcnNTZWxlY3RvciB7XHJcblxyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuLy8gICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4vLyB9XHJcblxyXG4vLyBAbWVkaWEgKG1heC13aWR0aDogMTUyMHB4KXtcclxuLy8gICAuZW50cmFjZURvb3JzU2VsZWN0b3Ige1xyXG4vLyAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbi8vICAgfVxyXG5cclxuLy8gICAuZW50cmFjZURvb3JJdGVtIHtcclxuLy8gICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbi8vICAgfVxyXG4vLyB9XHJcbi8vIEBtZWRpYSAobWF4LXdpZHRoOiAxMTMzcHgpe1xyXG4vLyAgIC5lbnRyYWNlRG9vcnNTZWxlY3RvciB7XHJcbi8vICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4vLyAgIH1cclxuXHJcbi8vIH1cclxuLy8gQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KXtcclxuLy8gICAuZW50cmFjZURvb3JzU2VsZWN0b3Ige1xyXG4vLyAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuLy8gICB9XHJcbi8vICAgLm1haW4ge1xyXG4vLyAgICAgcGFkZGluZzogNSUgMSU7XHJcbi8vICAgfVxyXG5cclxuLy8gfVxyXG5cclxuXHJcblxyXG4vLyAuZW50cmFjZURvb3JJdGVtIHtcclxuXHJcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgIG1hcmdpbjogMjBweDtcclxuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4vLyAgIHdpZHRoOiAzMDBweDtcclxuLy8gICBoZWlnaHQ6IDMwMHB4O1xyXG4vLyAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxOTVkZWcsd2hpdGUsIGRhcmtncmF5KTtcclxuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogMiU7XHJcbi8vICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbi8vICAgYm94LXNoYWRvdzogMCA1cHggMjBweCB3aGl0ZTtcclxuLy8gICB6LWluZGV4OiA0O1xyXG4vLyB9XHJcblxyXG4vLyAucHJvZHVjdFRpdGxlIHtcclxuIFxyXG4vLyAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbi8vICAgY29sb3I6IHdoaXRlO1xyXG4vLyAgIGJvdHRvbTogNSU7XHJcbi8vICAgcmlnaHQ6IDUlO1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBcclxuLy8gICBmb250LXNpemU6IDFyZW07XHJcbi8vICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gICB6LWluZGV4OiA2O1xyXG5cclxuLy8gfVxyXG5cclxuLy8gLnRlc3Qge1xyXG4gICAgICBcclxuIFxyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICB0b3A6IDA7XHJcbi8vICAgYm90dG9tOiAwO1xyXG4vLyAgIGxlZnQ6IDA7XHJcbi8vICAgcmlnaHQ6IDA7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogLjUpO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDIlO1xyXG4vLyAgIHotaW5kZXg6IDU7XHJcbi8vICAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAuMnM7IFxyXG4vLyB9XHJcblxyXG4vLyAuZW50cmFjZURvb3JUaXRsZSB7XHJcbiBcclxuXHJcbi8vICAgZGlzcGxheTogbm9uZTtcclxuICBcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuLy8gICAvLyBmb250LXNpemU6IDFyZW07XHJcbi8vICAgLy8gZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gICAvLyB6LWluZGV4OiA2O1xyXG5cclxuLy8gfVxyXG5cclxuXHJcblxyXG4vLyAuZW50cmFjZURvb3JJdGVtOmhvdmVyIC50ZXN0IHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAuOSk7XHJcbi8vIH1cclxuLy8gLmVudHJhY2VEb29ySXRlbTpob3ZlciAuZW50cmFjZURvb3JUaXRsZSB7XHJcbi8vICAgLy8gd2lkdGg6IDEwMCU7XHJcbi8vICAgLy8gaGVpZ2h0OiAxMDAlO1xyXG4vLyAgIHRvcDogNTAlO1xyXG4vLyAgIGxlZnQ6IDUwJTtcclxuLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbi8vICAgZm9udC1zaXplOiAxLjRyZW07XHJcbi8vICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuLy8gICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICB6LWluZGV4OiA1O1xyXG4vLyAgIC8vIHdoaXRlLXNwYWNlOiB3cmFwO1xyXG4vLyAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgLy8gb3ZlcmZsb3ctd3JhcDpub3JtYWxcclxuIFxyXG4vLyB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIC5lbnRyYWNlRG9vckltYWdlIHtcclxuLy8gICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuXHJcbi8vIH1cclxuXHJcbi8vIC5lbnRyYWNlRG9vckltYWdlIGltZyB7XHJcbi8vICAgLy8gd2lkdGg6IDEwMCU7XHJcbi8vICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuLy8gICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbi8vICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuLy8gICBib3JkZXItcmFkaXVzOiAyJTtcclxuLy8gfVxyXG5cclxuLy8gLnByb2R1Y3RJbWFnZSB7XHJcbi8vICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuLy8gICBiYWNrZ3JvdW5kLXNpemU6YXV0bztcclxuLy8gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIFxyXG4vLyAgIC8vIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuXHJcbi8vIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gLmNvdW50ZXJXcmFwcGVyIHtcclxuXHJcbi8vICAgd2lkdGg6IDE1MHB4O1xyXG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4vLyAgIHBhZGRpbmc6IDVweDtcclxuLy8gICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4vLyAgIC8vIC13ZWJraXQtYm94LXJlZmxlY3Q6IGJlbG93IDVweCBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsIzAwMDgpO1xyXG5cclxuLy8gfVxyXG5cclxuLy8gLmNvdXRlckJ1dHRvbnMge1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gfVxyXG5cclxuLy8gLmNvdW50ZXJCdXR0b24ge1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICB3aWR0aDogMzMuMyU7XHJcbi8vICAgZm9udC1zaXplOiAxLjVlbTtcclxuLy8gICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vICAgJjpob3ZlciB7XHJcbi8vICAgICBjb2xvcjogZ3JheTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIC5jb3VudGVySW5wdXQgIHtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgaGVpZ2h0OiAzMHB4O1xyXG4vLyAgIC8vIHdpZHRoOiAyMHB4O1xyXG5cclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblxyXG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4vLyAgIGZvbnQtc2l6ZTogMWVtO1xyXG5cclxuLy8gICB3aWR0aDogMzMuMzMlO1xyXG4vLyAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbi8vIH1cclxuXHJcbi8vIC5jb3VudGVySW5wdXQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuLy8gICB3aWR0aDogMDtcclxuLy8gfVxyXG5cclxuLy8gLmNvdW50ZXJCYXNrZXQge1xyXG4vLyAgIG1hcmdpbi10b3A6IDVweDtcclxuLy8gfVxyXG5cclxuLy8gLmJhc2tldEJ1dHRvbiAge1xyXG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIGZvbnQtc2l6ZTogMTVweDtcclxuLy8gICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4vLyAgICY6aG92ZXIge1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcblxyXG5cclxuLy8gICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vL0BhdC1yb290XHJcblxyXG5cclxuLy8gLmJ0blZpZXcge1xyXG4vLyAgIGZvbnQtc2l6ZTogMC42ZW07XHJcbi8vICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuLy8gICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuLy8gICBwYWRkaW5nOiAwLjJlbTtcclxuLy8gICAmOmhvdmVyIHtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbi8vICAgfVxyXG5cclxuLy8gfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vICp7XHJcblxyXG4vLyAgICAgcGFkZGluZzogMDtcclxuLy8gICAgIG1hcmdpbjogMDtcclxuLy8gICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbi8vIH1cclxuXHJcbi8vIC5lbnRyYWNlRG9vcnNTZWxlY3RvciB7XHJcblxyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuLy8gfVxyXG5cclxuXHJcbi8vIC5lbnRyYWNlRG9vckl0ZW0ge1xyXG5cclxuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICAgIG1hcmdpbjogMjBweDtcclxuXHJcbi8vICAgICB3aWR0aDogMzAwcHg7XHJcbi8vICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4vLyAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE5NWRlZyx3aGl0ZSwgZGFya2dyYXkpO1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMiU7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuLy8gICAgIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggd2hpdGU7XHJcblxyXG4vLyB9XHJcblxyXG5cclxuLy8gLmVudHJhY2VEb29ySW1hZ2Uge1xyXG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG5cclxuLy8gfVxyXG5cclxuLy8gLmVudHJhY2VEb29ySW1hZ2UgaW1nIHtcclxuLy8gICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4vLyAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4vLyAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuLy8gfVxyXG5cclxuXHJcbi8vIC5lbnRyYWNlRG9vclRpdGxlIHtcclxuLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbi8vICAgICBjb2xvcjogd2hpdGU7XHJcbi8vICAgICBib3R0b206IDUlO1xyXG4vLyAgICAgbGVmdDogNSU7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4vLyAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbi8vIH1cclxuXHJcbi8vIC5lbnRyYWNlRG9vclRpdGxlOmhvdmVyIHtcclxuLy8gICAgIG9wYWNpdHk6IDAuNztcclxuLy8gfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbip7XHJcblxyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5lbnRyYWNlRG9vcnNTZWxlY3RvciB7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE1MjBweCl7XHJcbiAgLmVudHJhY2VEb29yc1NlbGVjdG9yIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgLmVudHJhY2VEb29ySXRlbSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTEzM3B4KXtcclxuICAuZW50cmFjZURvb3JzU2VsZWN0b3Ige1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi5lbnRyYWNlRG9vckl0ZW0ge1xyXG5cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE5NWRlZyx3aGl0ZSwgZGFya2dyYXkpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItcmFkaXVzOiAyJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDVweCAyMHB4IHdoaXRlO1xyXG4gIHotaW5kZXg6IDQ7XHJcbn1cclxuXHJcbi50ZXN0IHtcclxuICAgICAgXHJcbiBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IC41KTtcclxuICBib3JkZXItcmFkaXVzOiAyJTtcclxuICB6LWluZGV4OiA1O1xyXG4gIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgLjJzOyBcclxufVxyXG5cclxuLmVudHJhY2VEb29yVGl0bGUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvdHRvbTogNSU7XHJcbiAgcmlnaHQ6IDUlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB6LWluZGV4OiA2O1xyXG5cclxufVxyXG5cclxuLmVudHJhY2VEb29ySXRlbTpob3ZlciAudGVzdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogLjkpO1xyXG59XHJcbi5lbnRyYWNlRG9vckl0ZW06aG92ZXIgLmVudHJhY2VEb29yVGl0bGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vIGhlaWdodDogMTAwJTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgei1pbmRleDogNTtcclxuICAvLyB3aGl0ZS1zcGFjZTogd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC8vIG92ZXJmbG93LXdyYXA6bm9ybWFsXHJcbiBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4uZW50cmFjZURvb3JJbWFnZSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIC8vIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcblxyXG59XHJcblxyXG4uZW50cmFjZURvb3JJbWFnZSBpbWcge1xyXG4gIC8vIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAvLyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMiU7XHJcbn1cclxuXHJcbi5wcm9kdWN0SW1hZ2Uge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOmF1dG87XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBcclxuICAvLyBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcblxyXG59XHJcblxyXG5cclxuLmJyZWFkY3J1bWItaXRlbSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "ZuGw":
/*!******************************************************!*\
  !*** ./src/app/pages/contacts/contacts.component.ts ***!
  \******************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ContactsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(); };
ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], decls: 49, vars: 0, consts: [[1, "main", "mt-5"], [1, "grid"], [1, "grid-item"], [1, "card"], ["src", "https://images.unsplash.com/photo-1619216910014-1fdb7a8e98e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "alt", "Rome", 1, "card-img"], [1, "card-content"], [1, "card-header", 2, "text-align", "center"], [1, "card-text"], [2, "display", "flex", "justify-content", "space-between"], [1, "icon"], [1, "fab", "fa-telegram"], [1, "fab", "fa-viber"], [1, "fab", "fa-facebook"], ["src", "https://images.unsplash.com/photo-1619216910014-1fdb7a8e98e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "alt", "Grand Canyon", 1, "card-img"], ["src", "https://images.unsplash.com/photo-1619216910014-1fdb7a8e98e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "alt", "Maldives", 1, "card-img"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contacts works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Somebody Important");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, quae quasi omnis minus nihil iste dicta quam aliquid possimus eius. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Grand Carry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim deserunt dolore omnis veniam temporibus vitae. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Name Surname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore in recusandae inventore laborum animi voluptatibus natus! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css?family=Poppins&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\nhtml[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  font-size: 62.5%;\n}\n.main[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 100px 3%;\n}\n.grid[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.grid-item[_ngcontent-%COMP%] {\n  width: 26%;\n  background-color: #fff;\n  border-radius: 0.4rem;\n  overflow: hidden;\n  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  transition: 0.2s;\n}\n.grid-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.5%);\n  box-shadow: 0 4rem 8rem rgba(0, 0, 0, 0.5);\n}\n.card-img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 20rem;\n  object-fit: cover;\n}\n.card-content[_ngcontent-%COMP%] {\n  padding: 3rem;\n}\n.card-header[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 500;\n  color: #0d0d0d;\n  margin-bottom: 1.5rem;\n}\n.card-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  letter-spacing: 0.1rem;\n  line-height: 1.7;\n  color: #3d3d3d;\n  margin-bottom: 1.5rem;\n}\n.card-btn[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 1.5rem;\n  font-size: 1.5rem;\n  text-align: center;\n  color: #3363ff;\n  background-color: #d8e0fd;\n  border: none;\n  border-radius: 0.4rem;\n  transition: 0.2s;\n  cursor: pointer;\n  letter-spacing: 0.1rem;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #000;\n  border-radius: 5px;\n  padding: 10px;\n}\n.icon[_ngcontent-%COMP%]:hover {\n  background-color: black;\n}\n.card-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  transition: 0.2s;\n}\n.card-btn[_ngcontent-%COMP%]:hover, .card-btn[_ngcontent-%COMP%]:active {\n  background-color: #c2cffc;\n}\n.card-btn[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], .card-btn[_ngcontent-%COMP%]:active   span[_ngcontent-%COMP%] {\n  margin-left: 1.5rem;\n}\n@media only screen and (max-width: 950px) {\n  .grid-item[_ngcontent-%COMP%] {\n    width: 45%;\n    margin: 10px;\n  }\n}\n@media only screen and (max-width: 750px) {\n  .grid-item[_ngcontent-%COMP%] {\n    width: 65%;\n    margin: 20px auto;\n  }\n}\n@media only screen and (max-width: 550px) {\n  .grid-item[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: 20px auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb250YWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSwyRUFBQTtBQUVSO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFBRjtBQUdBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtBQUFGO0FBR0E7RUFFRSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsaUJBQUE7QUFGRjtBQUtBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFGRjtBQVFBO0VBRUUsVUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTkY7QUFTQTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7QUFORjtBQVNBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFORjtBQVNBO0VBQ0UsYUFBQTtBQU5GO0FBU0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBTkY7QUFTQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBTkY7QUFTQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQU5GO0FBU0E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFJQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQVRKO0FBSUk7RUFDSSx1QkFBQTtBQUZSO0FBU0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBTkY7QUFTQTs7RUFFRSx5QkFBQTtBQU5GO0FBU0E7O0VBRUUsbUJBQUE7QUFORjtBQVNBO0VBQ0k7SUFDRCxVQUFBO0lBQ0EsWUFBQTtFQU5EO0FBQ0Y7QUFVQTtFQUNJO0lBQ0QsVUFBQTtJQUNBLGlCQUFBO0VBUkQ7QUFDRjtBQVlBO0VBQ0k7SUFDRCxVQUFBO0lBQ0EsaUJBQUE7RUFWRDtBQUNGIiwiZmlsZSI6ImNvbnRhY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LXNpemU6IDYyLjUlO1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHBhZGRpbmc6IDEwMHB4IDMlO1xyXG59XHJcblxyXG4uZ3JpZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4vLyAgIGdyaWQtZ2FwOiA2cmVtO1xyXG4vLyAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzByZW0sIDFmcikpO1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxufVxyXG5cclxuLmdyaWQtaXRlbSB7XHJcblxyXG4gIHdpZHRoOiAyNiU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3gtc2hhZG93OiAwIDNyZW0gNnJlbSByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbn1cclxuXHJcbi5ncmlkLWl0ZW06aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC41JSk7XHJcbiAgYm94LXNoYWRvdzogMCA0cmVtIDhyZW0gcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uY2FyZC1pbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjByZW07XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDNyZW07XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzBkMGQwZDtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi5jYXJkLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbiAgY29sb3I6ICMzZDNkM2Q7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG4uY2FyZC1idG4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMzMzYzZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZTBmZDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZC1idG4gc3BhbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxufVxyXG5cclxuLmNhcmQtYnRuOmhvdmVyLFxyXG4uY2FyZC1idG46YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJjZmZjO1xyXG59XHJcblxyXG4uY2FyZC1idG46aG92ZXIgc3BhbixcclxuLmNhcmQtYnRuOmFjdGl2ZSBzcGFuIHtcclxuICBtYXJnaW4tbGVmdDogMS41cmVtO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MHB4KSB7XHJcbiAgICAuZ3JpZC1pdGVtIHtcclxuICAgd2lkdGg6IDQ1JTtcclxuICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xyXG4gICAgLmdyaWQtaXRlbSB7XHJcbiAgIHdpZHRoOiA2NSU7XHJcbiAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gICAgLmdyaWQtaXRlbSB7XHJcbiAgIHdpZHRoOiA5MCU7XHJcbiAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ceBc":
/*!**********************************************!*\
  !*** ./src/app/shared/models/basketModel.ts ***!
  \**********************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
class Order {
    constructor(id, userName, userPhone, userCity, userStreet, userHouse, allOrders, totalPrice, userComment) {
        this.id = id;
        this.userName = userName;
        this.userPhone = userPhone;
        this.userCity = userCity;
        this.userStreet = userStreet;
        this.userHouse = userHouse;
        this.allOrders = allOrders;
        this.totalPrice = totalPrice;
        this.userComment = userComment;
    }
}


/***/ }),

/***/ "dOc4":
/*!**************************************************************!*\
  !*** ./src/app/pages/admin/admin-sub/admin-sub.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminSubComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSubComponent", function() { return AdminSubComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_door_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/door.service */ "xYI4");
/* harmony import */ var src_app_shared_services_wood_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/wood-products.service */ "YWQT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function AdminSubComponent_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const brand_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", brand_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](brand_r2);
} }
function AdminSubComponent_tr_54_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, type_r6));
} }
function AdminSubComponent_tr_54_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminSubComponent_tr_54_Template_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.categorySelect = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Avalible Types");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminSubComponent_tr_54_option_7_Template, 3, 4, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminSubComponent_tr_54_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r3 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r9.currentChange = 2; return ctx_r9.preEdit(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "ADD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminSubComponent_tr_54_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r3 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.deleteCatetegory(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.className, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.categorySelect);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r3.types);
} }
const _c0 = function () { return ["/admin"]; };
const _c1 = function () { return ["/admin/adminWoodProducts"]; };
const _c2 = function () { return ["/admin/adminOrders"]; };
const _c3 = function () { return ["/admin/subCategory"]; };
class AdminSubComponent {
    constructor(doorService, woodProducts) {
        this.doorService = doorService;
        this.woodProducts = woodProducts;
        this.searchProduct = '';
        this.newBrand = '';
        this.isNewBrandFulled = true;
        this.allItems = [];
        this.allCategories = [];
        this.allSubCategories = [];
        this.currentChange = 1;
        this.categorySelect = '';
        this.brandSelector = '';
        this.newBrnd = {};
    }
    ngOnInit() {
        this.getAllCategories();
    }
    fieldsCheck() {
        if (this.newBrand != '') {
            this.isNewBrandFulled = false;
        }
        else {
            this.isNewBrandFulled = true;
        }
    }
    deleteCatetegory(item) {
        let types = [];
        item.types.forEach(element => {
            if (element.toLowerCase() != this.categorySelect.toLowerCase()) {
                types.push(element);
            }
        });
        item.types = types;
        this.doorService.deleteCategoryForFS(item, item.className).then(res => {
            console.log("DELETED");
            this.getAllCategories();
            this.categorySelect = '';
        });
    }
    preEdit(item) {
        this.currentEditebleItem = item;
        // this.currentClassName = item.className;
        // this.currentTypes = item.types;
        // console.log(this.currentTypes);
    }
    AddNewBrand(obj) {
        if (this.newBrand != '') {
            if (this.currentChange == 2) {
                this.currentEditebleItem.types.push(this.newBrand);
                this.doorService.createCategoryForFS(this.currentEditebleItem, this.currentEditebleItem.className).then(res => {
                    console.log('CREATED');
                    this.getAllCategories();
                });
            }
            else if (this.currentChange == 1) {
                this.avalibleBrands.push(this.newBrand);
                this.newBrnd.subType = "brands";
                this.newBrnd.brands = this.avalibleBrands;
                // console.log(this.newBrnd);
                this.doorService.createBrandForFS(this.newBrnd, this.newBrnd.subType).then(res => {
                    // console.log('CREATED');
                    this.getAllCategories();
                });
            }
        }
    }
    getAllCategories() {
        this.doorService.getCategoriesFirestore().then(res => {
            this.allItems = res.docs.map(el => el.data());
            // console.log(this.allItems);
        });
        this.doorService.getBrandsFirestore().then(res => {
            this.avalibleBrands = res.docs.map(el => el.data())[0].brands;
            // console.log(this.avalibleBrands);
        });
        // this.avalibleBrands = this.doorService.allBrands;
        // console.log(this.avalibleBrands);
        // this.doorService.getAllDoors().subscribe(data => {
        //   this.allItems = data;
        // })
        // console.log(this.allSubCategories);
        // this.doorService.getAllDoors().subscribe(data => {
        //   this.allCategories = this.unique(data);
        // })
    }
    deleteBrand() {
        let brnds = [];
        this.avalibleBrands.forEach(element => {
            if (element.toLowerCase() != this.brandSelector.toLowerCase()) {
                brnds.push(element);
            }
        });
        this.newBrnd.subType = "brands";
        this.newBrnd.brands = brnds;
        // console.log(this.newBrnd);
        this.doorService.createBrandForFS(this.newBrnd, "brands").then(res => {
            // console.log('CREATED');
            this.getAllCategories();
            this.brandSelector = '';
        });
    }
    unique(arr) {
        let result = [];
        for (let str of arr) {
            if (!result.includes(str)) {
                result.push(str);
            }
        }
        return result;
    }
}
AdminSubComponent.ɵfac = function AdminSubComponent_Factory(t) { return new (t || AdminSubComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_door_service__WEBPACK_IMPORTED_MODULE_1__["DoorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_wood_products_service__WEBPACK_IMPORTED_MODULE_2__["WoodProductsService"])); };
AdminSubComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminSubComponent, selectors: [["app-admin-sub"]], decls: 55, vars: 13, consts: [["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], ["type", "text", "name", "newBrand", "placeholder", "Type new item...", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-dark", 3, "disabled", "click"], [2, "color", "white", "padding", "80px 5%"], [1, "adminPanel"], [1, "adminAside"], [1, "btn-group-vertical", "d-grid", "gap-2"], [3, "routerLink"], [1, "btn-dark", "btn"], [1, "adminPanelFields"], [1, "newProductField"], [1, "searcher", "d-flex"], [1, "form-group", "mt-2", "d-flex"], ["id", "my-select", "name", "brandSelector", 1, "form-control", 3, "ngModel", "ngModelChange"], ["selected", "", "disabled", "", "value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "ml-2", "btn", "btn-block", "btn-dark", 3, "click"], ["type", "button", 1, "ml-2", "btn", "btn-block", "btn-primary", 3, "click"], [1, "adminProductsTable", "table", "table-light"], [4, "ngFor", "ngForOf"], [3, "value"], [2, "text-transform", "uppercase"], ["name", "categorySelect", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "", "selected", "", "disabled", ""], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "btn-warning", "btn", 3, "click"], ["type", "button", 1, "btn-danger", "btn", 3, "click"]], template: function AdminSubComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Type brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminSubComponent_Template_input_ngModelChange_9_listener($event) { return ctx.newBrand = $event; })("keyup", function AdminSubComponent_Template_input_keyup_9_listener() { return ctx.fieldsCheck(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminSubComponent_Template_button_click_13_listener() { return ctx.AddNewBrand(ctx.newItem); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "main", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "aside", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Door Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Wood Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "All orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Sub Categoty & else");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminSubComponent_Template_select_ngModelChange_35_listener($event) { return ctx.brandSelector = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Avalible brands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AdminSubComponent_option_38_Template, 2, 2, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminSubComponent_Template_button_click_39_listener() { return ctx.currentChange = 1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminSubComponent_Template_button_click_41_listener() { return ctx.deleteBrand(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "table", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, AdminSubComponent_tr_54_Template, 14, 3, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newBrand);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isNewBrandFulled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.brandSelector);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.avalibleBrands);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allItems);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"]], styles: [".fontWeightBold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.adminPanel[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.adminAside[_ngcontent-%COMP%] {\n  width: 20%;\n  display: flex;\n  justify-content: center;\n  background-color: #fff;\n  border: 1px solid cyan;\n  border-radius: 10px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.adminPanelFields[_ngcontent-%COMP%] {\n  color: black;\n  height: 700px;\n  overflow-y: scroll;\n  padding: 10px;\n  width: 78%;\n  background-color: #fff;\n  border: 1px solid cyan;\n  border-radius: 10px;\n  min-height: 100px;\n}\n\n.adminAside[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  text-decoration: none;\n}\n\n.adminAside[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: block;\n  cursor: pointer;\n  width: 100%;\n  text-decoration: none;\n}\n\n@media (max-width: 858px) {\n  .adminAside[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .adminPanel[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .adminPanelFields[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow-y: scroll;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWRtaW4tc3ViLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksaUJBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFESjs7QUFLQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUFGSjs7QUFLQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFHQSxhQUFBO0VBRUEsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBTEo7O0FBVUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBUEo7O0FBWUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQVRKOztBQVdBO0VBQ0k7SUFDQyxXQUFBO0VBUkg7O0VBVUU7SUFDQyxXQUFBO0VBUEg7O0VBU0U7SUFDQyxXQUFBO0lBQ0Esa0JBQUE7RUFOSDtBQUNGIiwiZmlsZSI6ImFkbWluLXN1Yi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmZvbnRXZWlnaHRCb2xkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYWRtaW5QYW5lbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxufVxyXG5cclxuLmFkbWluQXNpZGUge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBjeWFuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGhlaWdodDpmaXQtY29udGVudDtcclxufVxyXG5cclxuLmFkbWluUGFuZWxGaWVsZHMge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgaGVpZ2h0OiA3MDBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIFxyXG5cclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgd2lkdGg6IDc4JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBjeWFuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG5cclxuXHJcblxyXG59XHJcbi5hZG1pbkFzaWRlIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbn1cclxuXHJcblxyXG4uYWRtaW5Bc2lkZSAuYnRuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDg1OHB4KXtcclxuICAgIC5hZG1pbkFzaWRle1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmFkbWluUGFuZWx7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuYWRtaW5QYW5lbEZpZWxkc3tcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "fzlj":
/*!***************************************************!*\
  !*** ./src/app/shared/models/woodProductModel.ts ***!
  \***************************************************/
/*! exports provided: WoodProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WoodProduct", function() { return WoodProduct; });
class WoodProduct {
    constructor(id, name, article, minSize, maxSize, image, description, count) {
        this.id = id;
        this.name = name;
        this.article = article;
        this.minSize = minSize;
        this.maxSize = maxSize;
        this.image = image;
        this.description = description;
        this.count = count;
    }
}


/***/ }),

/***/ "gT65":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/services/doorsTypes/interior-doors/interior-doors.component.ts ***!
  \**************************************************************************************/
/*! exports provided: InteriorDoorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteriorDoorsComponent", function() { return InteriorDoorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_door_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/door.service */ "xYI4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a1) { return ["/services/interior/", a1, "productPage"]; };
function InteriorDoorsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InteriorDoorsComponent_div_11_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const doorType_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.sendIndex(doorType_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const doorType_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, doorType_r1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", doorType_r1, " ");
} }
const _c1 = function () { return ["/services"]; };
class InteriorDoorsComponent {
    constructor(doorService, routerActivate) {
        this.doorService = doorService;
        this.routerActivate = routerActivate;
        this.interiorDoorsTypes = [];
    }
    ngOnInit() {
        this.loadFromFirebase();
        // console.log("Interior DOORS COMPONENT");
        const category = this.routerActivate.snapshot;
        // console.log(category.params);
    }
    loadFromFirebase() {
        this.doorService.testFirestore().then(res => {
            let allDoors = [];
            let filteredTypesArr = [];
            allDoors = res.docs.map(el => el.data());
            this.currentClass = allDoors.filter(item => item.className.toLowerCase() == "Interior".toLowerCase());
            this.currentClass.forEach(element => {
                filteredTypesArr.push(element.type);
            });
            this.interiorDoorsTypes = this.unique(filteredTypesArr);
        });
    }
    // getDoorsFromDB() {
    //   this.doorsService.getDirectionalClass("Interior").subscribe(data => {
    //     console.log(data);
    //     this.routingClass = data[0].className;
    //     console.log(this.routingClass);
    //     this.currentClass = data[0].className;
    //     console.log(this.currentClass); 
    //     data.map(item => this.interiorDoorsTypes.push(item.type));
    //     this.interiorDoorsTypes = this.unique(this.interiorDoorsTypes);
    //     console.log(this.interiorDoorsTypes);
    //   })
    // }
    sendIndex(item) {
        // localStorage.setItem("currentProduct", item);
        // localStorage.setItem("currentClassName", this.currentClass);
        // console.log(item)
        // console.log(this.currentClass);    
    }
    unique(arr) {
        let result = [];
        for (let str of arr) {
            if (!result.includes(str)) {
                result.push(str);
            }
        }
        return result;
    }
}
InteriorDoorsComponent.ɵfac = function InteriorDoorsComponent_Factory(t) { return new (t || InteriorDoorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_door_service__WEBPACK_IMPORTED_MODULE_1__["DoorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
InteriorDoorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InteriorDoorsComponent, selectors: [["app-interior-doors"]], decls: 12, vars: 4, consts: [[2, "color", "white", "padding", "80px 5%"], [2, "text-align", "center", "text-transform", "uppercase"], ["aria-label", "breadcrumb", 2, "--bs-breadcrumb-divider", ">"], [1, "breadcrumb", 2, "text-transform", "uppercase", "background-color", "black", "margin-bottom", "30px", "font-size", "1rem"], ["aria-current", "page", 1, "breadcrumb-item", 3, "routerLink"], [1, "breadcrumb-item", "active"], [1, "entraceDoorsSelector"], ["class", "entraceDoorItem", "class", "entraceDoorItem", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "entraceDoorItem", 3, "routerLink", "click"], [1, "test"], [1, "entraceDoorImage"], ["src", "https://images.unsplash.com/photo-1506508618093-6fe5ce3def4c?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "alt", "", 1, "productImage"], [1, "entraceDoorTitle"]], template: function InteriorDoorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Interior");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, InteriorDoorsComponent_div_11_Template, 8, 6, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.routingClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.interiorDoorsTypes);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["LowerCasePipe"]], styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.entraceDoorsSelector[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n@media (max-width: 1520px) {\n  .entraceDoorsSelector[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n\n  .entraceDoorItem[_ngcontent-%COMP%] {\n    margin-top: 100px;\n  }\n}\n\n@media (max-width: 1133px) {\n  .entraceDoorsSelector[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n\n.entraceDoorItem[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin: 20px;\n  position: relative;\n  width: 300px;\n  height: 300px;\n  background: linear-gradient(195deg, white, darkgray);\n  position: relative;\n  border-radius: 2%;\n  border: 1px solid white;\n  box-shadow: 0 5px 20px white;\n  z-index: 4;\n}\n\n.test[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 2%;\n  z-index: 5;\n  transition: all linear 0.2s;\n}\n\n.entraceDoorTitle[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n  bottom: 5%;\n  right: 5%;\n  position: absolute;\n  font-size: 1rem;\n  font-weight: 500;\n  z-index: 6;\n}\n\n.entraceDoorItem[_ngcontent-%COMP%]:hover   .test[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.9);\n}\n\n.entraceDoorItem[_ngcontent-%COMP%]:hover   .entraceDoorTitle[_ngcontent-%COMP%] {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 1.4rem;\n  font-family: monospace;\n  font-weight: bold;\n  z-index: 5;\n  overflow: hidden;\n}\n\n.entraceDoorImage[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.entraceDoorImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  border-radius: 2%;\n}\n\n.productImage[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-position: center;\n  background-size: auto;\n  background-repeat: no-repeat;\n}\n\n.breadcrumb-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGludGVyaW9yLWRvb3JzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJFQTtFQUVJLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUEzRUo7O0FBOEVBO0VBRUksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQTVFSjs7QUFnRkE7RUFDSTtJQUNJLDhCQUFBO0VBN0VOOztFQWdGRTtJQUNJLGlCQUFBO0VBN0VOO0FBQ0Y7O0FBK0VBO0VBQ0k7SUFDSSx1QkFBQTtFQTdFTjtBQUNGOztBQW1GQTtFQUVJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9EQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0FBbkZKOztBQXNGQTtFQUdJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7QUFyRko7O0FBd0ZBO0VBQ0kscUJBQUE7RUFFQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUF2Rko7O0FBMkZBO0VBQ0ksb0NBQUE7QUF4Rko7O0FBMEZBO0VBR0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFFQSxnQkFBQTtBQTFGSjs7QUFvR0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBakdKOztBQXNHQTtFQUVJLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBQXBHSjs7QUF1R0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQXBHSjs7QUEyR0E7RUFDSSxlQUFBO0FBeEdKIiwiZmlsZSI6ImludGVyaW9yLWRvb3JzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuLy8gKntcclxuXHJcbi8vICAgICBwYWRkaW5nOiAwO1xyXG4vLyAgICAgbWFyZ2luOiAwO1xyXG4vLyAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuLy8gfVxyXG5cclxuLy8gLmVudHJhY2VEb29yc1NlbGVjdG9yIHtcclxuXHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4vLyB9XHJcblxyXG5cclxuLy8gLmVudHJhY2VEb29ySXRlbSB7XHJcblxyXG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgICAgbWFyZ2luOiAyMHB4O1xyXG5cclxuLy8gICAgIHdpZHRoOiAzMDBweDtcclxuLy8gICAgIGhlaWdodDogMzAwcHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTk1ZGVnLHdoaXRlLCBkYXJrZ3JheSk7XHJcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAyJTtcclxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4vLyAgICAgYm94LXNoYWRvdzogMCA1cHggMjBweCB3aGl0ZTtcclxuXHJcbi8vIH1cclxuXHJcblxyXG4vLyAuZW50cmFjZURvb3JJbWFnZSB7XHJcbi8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcblxyXG4vLyB9XHJcblxyXG4vLyAuZW50cmFjZURvb3JJbWFnZSBpbWcge1xyXG4vLyAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbi8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbi8vICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbi8vICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4vLyB9XHJcblxyXG5cclxuLy8gLmVudHJhY2VEb29yVGl0bGUge1xyXG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuLy8gICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgIGJvdHRvbTogNSU7XHJcbi8vICAgICBsZWZ0OiA1JTtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbi8vICAgICBmb250LXNpemU6IDFyZW07XHJcbi8vICAgICBmb250LXdlaWdodDogNTAwO1xyXG5cclxuLy8gfVxyXG5cclxuLy8gLmVudHJhY2VEb29yVGl0bGU6aG92ZXIge1xyXG4vLyAgICAgb3BhY2l0eTogMC43O1xyXG4vLyB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuKntcclxuXHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmVudHJhY2VEb29yc1NlbGVjdG9yIHtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTUyMHB4KXtcclxuICAgIC5lbnRyYWNlRG9vcnNTZWxlY3RvciB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG5cclxuICAgIC5lbnRyYWNlRG9vckl0ZW0ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTMzcHgpe1xyXG4gICAgLmVudHJhY2VEb29yc1NlbGVjdG9yIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuLmVudHJhY2VEb29ySXRlbSB7XHJcblxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTk1ZGVnLHdoaXRlLCBkYXJrZ3JheSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMjBweCB3aGl0ZTtcclxuICAgIHotaW5kZXg6IDQ7XHJcbn1cclxuXHJcbi50ZXN0IHtcclxuICAgICAgICBcclxuICAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyJTtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIC4yczsgXHJcbn1cclxuXHJcbi5lbnRyYWNlRG9vclRpdGxlIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3R0b206IDUlO1xyXG4gICAgcmlnaHQ6IDUlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgei1pbmRleDogNjtcclxuXHJcbn1cclxuXHJcbi5lbnRyYWNlRG9vckl0ZW06aG92ZXIgLnRlc3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogLjkpO1xyXG59XHJcbi5lbnRyYWNlRG9vckl0ZW06aG92ZXIgLmVudHJhY2VEb29yVGl0bGUge1xyXG4gICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgLy8gd2hpdGUtc3BhY2U6IHdyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLy8gb3ZlcmZsb3ctd3JhcDpub3JtYWxcclxuICAgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLmVudHJhY2VEb29ySW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG5cclxufVxyXG5cclxuLmVudHJhY2VEb29ySW1hZ2UgaW1nIHtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xyXG59XHJcblxyXG4ucHJvZHVjdEltYWdlIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgXHJcbiAgICAvLyBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcblxyXG59XHJcblxyXG5cclxuLmJyZWFkY3J1bWItaXRlbSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "ky+U":
/*!*************************************************************************!*\
  !*** ./src/app/pages/services/wood-products/wood-products.component.ts ***!
  \*************************************************************************/
/*! exports provided: WoodProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WoodProductsComponent", function() { return WoodProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_wood_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/wood-products.service */ "YWQT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a1) { return ["/services/woodProducts", a1]; };
function WoodProductsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WoodProductsComponent_div_10_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const product_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.findItem(product_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, product_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1 == null ? null : product_r1.name, " ");
} }
const _c1 = function () { return ["/services"]; };
class WoodProductsComponent {
    constructor(woodProductsService) {
        this.woodProductsService = woodProductsService;
        this.allWoodProducts = [];
    }
    ngOnInit() {
        this.loadProductsFromDB();
        // console.log("dsda");
    }
    findItem(product) {
        // console.log(product);
        localStorage.setItem("woodProduct", product.name);
    }
    loadProductsFromDB() {
        this.woodProductsService.getProductsFromFS().then(res => {
            this.allWoodProducts = res.docs.map(el => el.data());
            // console.log(this.allWoodProducts);
        });
        // this.doorService.testFirestore().then(res => {
        //   this.doorsList = res.docs.map(el => el.data());
        //   // console.log(this.doorsList);
        //   this.currentCategory = this.doorsList.filter(item => item.className.toLowerCase() == "Entrace".toLowerCase())
        //   console.log(this.currentCategory);
        // })
    }
}
WoodProductsComponent.ɵfac = function WoodProductsComponent_Factory(t) { return new (t || WoodProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_wood_products_service__WEBPACK_IMPORTED_MODULE_1__["WoodProductsService"])); };
WoodProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WoodProductsComponent, selectors: [["app-wood-products"]], decls: 11, vars: 3, consts: [[2, "color", "white", "padding", "80px 5%"], [2, "text-align", "center", "text-transform", "uppercase"], ["aria-label", "breadcrumb", 2, "--bs-breadcrumb-divider", ">"], [1, "breadcrumb", 2, "text-transform", "uppercase", "background-color", "black", "margin-bottom", "30px", "font-size", "1rem"], ["aria-current", "page", 1, "breadcrumb-item", 3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "entraceDoorsSelector"], ["class", "entraceDoorItem", "class", "entraceDoorItem", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "entraceDoorItem", 3, "routerLink", "click"], [1, "test"], [1, "entraceDoorImage"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "entraceDoorTitle"]], template: function WoodProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Wood Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Wood PRODUCTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WoodProductsComponent_div_10_Template, 7, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allWoodProducts);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.entraceDoorsSelector[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n@media (max-width: 1520px) {\n  .entraceDoorsSelector[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n\n  .entraceDoorItem[_ngcontent-%COMP%] {\n    margin-top: 100px;\n  }\n}\n\n@media (max-width: 1133px) {\n  .entraceDoorsSelector[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n\n.entraceDoorItem[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin: 20px;\n  position: relative;\n  width: 300px;\n  height: 300px;\n  background: linear-gradient(195deg, white, darkgray);\n  position: relative;\n  border-radius: 2%;\n  border: 1px solid white;\n  box-shadow: 0 5px 20px white;\n  z-index: 4;\n}\n\n.test[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 2%;\n  z-index: 5;\n  transition: all linear 0.2s;\n}\n\n.entraceDoorTitle[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n  bottom: 5%;\n  right: 5%;\n  position: absolute;\n  font-size: 1rem;\n  font-weight: 500;\n  z-index: 6;\n}\n\n.entraceDoorItem[_ngcontent-%COMP%]:hover   .test[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.9);\n}\n\n.entraceDoorItem[_ngcontent-%COMP%]:hover   .entraceDoorTitle[_ngcontent-%COMP%] {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 1.4rem;\n  font-family: monospace;\n  font-weight: bold;\n  z-index: 5;\n  overflow: hidden;\n}\n\n.entraceDoorImage[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.entraceDoorImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  border-radius: 2%;\n}\n\n.productImage[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-position: center;\n  background-size: auto;\n  background-repeat: no-repeat;\n}\n\n.breadcrumb-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcd29vZC1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRUE7RUFFSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBM0VKOztBQThFQTtFQUVJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUE1RUo7O0FBZ0ZBO0VBQ0k7SUFDSSw4QkFBQTtFQTdFTjs7RUFnRkU7SUFDSSxpQkFBQTtFQTdFTjtBQUNGOztBQStFQTtFQUNJO0lBQ0ksdUJBQUE7RUE3RU47QUFDRjs7QUFtRkE7RUFFSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSxvREFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsVUFBQTtBQW5GSjs7QUFzRkE7RUFHSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0FBckZKOztBQXdGQTtFQUNJLHFCQUFBO0VBRUEsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBdkZKOztBQTJGQTtFQUNJLG9DQUFBO0FBeEZKOztBQTBGQTtFQUdJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBRUEsZ0JBQUE7QUExRko7O0FBb0dBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWpHSjs7QUFzR0E7RUFFSSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7QUFwR0o7O0FBdUdBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUFwR0o7O0FBMkdBO0VBQ0ksZUFBQTtBQXhHSiIsImZpbGUiOiJ3b29kLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuLy8gKntcclxuXHJcbi8vICAgICBwYWRkaW5nOiAwO1xyXG4vLyAgICAgbWFyZ2luOiAwO1xyXG4vLyAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuLy8gfVxyXG5cclxuLy8gLmVudHJhY2VEb29yc1NlbGVjdG9yIHtcclxuXHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4vLyB9XHJcblxyXG5cclxuLy8gLmVudHJhY2VEb29ySXRlbSB7XHJcblxyXG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgICAgbWFyZ2luOiAyMHB4O1xyXG5cclxuLy8gICAgIHdpZHRoOiAzMDBweDtcclxuLy8gICAgIGhlaWdodDogMzAwcHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTk1ZGVnLHdoaXRlLCBkYXJrZ3JheSk7XHJcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAyJTtcclxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4vLyAgICAgYm94LXNoYWRvdzogMCA1cHggMjBweCB3aGl0ZTtcclxuXHJcbi8vIH1cclxuXHJcblxyXG4vLyAuZW50cmFjZURvb3JJbWFnZSB7XHJcbi8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcblxyXG4vLyB9XHJcblxyXG4vLyAuZW50cmFjZURvb3JJbWFnZSBpbWcge1xyXG4vLyAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbi8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbi8vICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbi8vICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4vLyB9XHJcblxyXG5cclxuLy8gLmVudHJhY2VEb29yVGl0bGUge1xyXG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuLy8gICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgIGJvdHRvbTogNSU7XHJcbi8vICAgICBsZWZ0OiA1JTtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbi8vICAgICBmb250LXNpemU6IDFyZW07XHJcbi8vICAgICBmb250LXdlaWdodDogNTAwO1xyXG5cclxuLy8gfVxyXG5cclxuLy8gLmVudHJhY2VEb29yVGl0bGU6aG92ZXIge1xyXG4vLyAgICAgb3BhY2l0eTogMC43O1xyXG4vLyB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuKntcclxuXHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmVudHJhY2VEb29yc1NlbGVjdG9yIHtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTUyMHB4KXtcclxuICAgIC5lbnRyYWNlRG9vcnNTZWxlY3RvciB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG5cclxuICAgIC5lbnRyYWNlRG9vckl0ZW0ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTMzcHgpe1xyXG4gICAgLmVudHJhY2VEb29yc1NlbGVjdG9yIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuLmVudHJhY2VEb29ySXRlbSB7XHJcblxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTk1ZGVnLHdoaXRlLCBkYXJrZ3JheSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMjBweCB3aGl0ZTtcclxuICAgIHotaW5kZXg6IDQ7XHJcbn1cclxuXHJcbi50ZXN0IHtcclxuICAgICAgICBcclxuICAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyJTtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIC4yczsgXHJcbn1cclxuXHJcbi5lbnRyYWNlRG9vclRpdGxlIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3R0b206IDUlO1xyXG4gICAgcmlnaHQ6IDUlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgei1pbmRleDogNjtcclxuXHJcbn1cclxuXHJcbi5lbnRyYWNlRG9vckl0ZW06aG92ZXIgLnRlc3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogLjkpO1xyXG59XHJcbi5lbnRyYWNlRG9vckl0ZW06aG92ZXIgLmVudHJhY2VEb29yVGl0bGUge1xyXG4gICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgLy8gd2hpdGUtc3BhY2U6IHdyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLy8gb3ZlcmZsb3ctd3JhcDpub3JtYWxcclxuICAgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLmVudHJhY2VEb29ySW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG5cclxufVxyXG5cclxuLmVudHJhY2VEb29ySW1hZ2UgaW1nIHtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xyXG59XHJcblxyXG4ucHJvZHVjdEltYWdlIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgXHJcbiAgICAvLyBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcblxyXG59XHJcblxyXG5cclxuLmJyZWFkY3J1bWItaXRlbSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "rj1O":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/admin/admin-wood-products/admin-wood-products.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AdminWoodProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminWoodProductsComponent", function() { return AdminWoodProductsComponent; });
/* harmony import */ var src_app_shared_models_woodProductModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/woodProductModel */ "fzlj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_door_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/door.service */ "xYI4");
/* harmony import */ var src_app_shared_services_wood_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/wood-products.service */ "YWQT");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_pipes_wood_products_pipe_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/pipes/wood-products-pipe.pipe */ "Bl/c");









function AdminWoodProductsComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, ctx_r0.uploadProgress) + "%");
} }
function AdminWoodProductsComponent_button_67_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminWoodProductsComponent_button_67_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r4.fieldsTest(); return ctx_r4.addNewProductInDB(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add new");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.isFieldsFulled);
} }
function AdminWoodProductsComponent_button_70_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminWoodProductsComponent_button_70_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.saveEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r2.isFieldsFulled);
} }
function AdminWoodProductsComponent_tr_112_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminWoodProductsComponent_tr_112_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const product_r8 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.viewItem(product_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminWoodProductsComponent_tr_112_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const product_r8 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r12.editItem(product_r8); ctx_r12.fieldsTest(); ctx_r12.isEdit = true; return ctx_r12.isCreate = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminWoodProductsComponent_tr_112_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const product_r8 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.deleteItem(product_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r9 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r8.article);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r8.minSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r8.maxSize);
} }
const _c0 = function () { return ["/admin"]; };
const _c1 = function () { return ["/admin/adminWoodProducts"]; };
const _c2 = function () { return ["/admin/adminOrders"]; };
const _c3 = function () { return ["/admin/subCategory"]; };
class AdminWoodProductsComponent {
    constructor(doorService, woodProducts, storage) {
        this.doorService = doorService;
        this.woodProducts = woodProducts;
        this.storage = storage;
        this.timeOut = 0;
        this.currentLastId = 0;
        this.searchProduct = '';
        this.allWoodProducts = [];
        this.isFieldsFulled = true;
        this.woodName = '';
        this.woodArticle = '';
        this.woodMinSize = '';
        this.woodMaxSize = '';
        this.productImage = '';
        this.woodDescription = '';
        this.woodCount = 1;
    }
    ngOnInit() {
        this.loadProductsFromDB();
        this.getCureentLastID();
    }
    uploadFile(event) {
        this.isUploaded = true;
        // console.log('Image');
        const file = event.target.files[0];
        const filePath = `images/${this.UUID()}.${file.type.split('/')[1]}`;
        const task = this.storage.upload(filePath, file);
        this.uploadProgress = task.percentageChanges();
        task.then(result => {
            this.storage.ref(`images/${result.metadata.name}`).getDownloadURL().subscribe(data => {
                // console.log(data);
                this.productImage = data;
                this.fieldsTest();
            });
        });
    }
    UUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    getCureentLastID() {
        this.timeOut = 0;
        this.woodProducts.getProductsFromDB().subscribe(data => {
            this.lastWoodProductsIndex = data.slice(-1)[0].id;
            console.log(this.lastWoodProductsIndex);
            this.timeOut++;
            if (this.timeOut == 2) {
                this.getTotalLastIndex();
            }
        });
        // this.doorService.getAllDoors().subscribe(data => {
        //   this.lastDoorsListIndex = data.slice(-1)[0].id;
        //   this.timeOut++
        //   if (this.timeOut == 2) {
        //     this.getTotalLastIndex();
        //   }
        // })
    }
    getTotalLastIndex() {
        if (this.lastWoodProductsIndex > this.lastDoorsListIndex) {
            this.currentLastId = this.lastWoodProductsIndex;
        }
        else {
            this.currentLastId = this.lastDoorsListIndex;
        }
        console.log("current last IF " + this.currentLastId);
    }
    loadProductsFromDB() {
        // this.woodProducts.getProductsFromDB().subscribe(data => {
        //   console.log(data);
        //   this.allWoodProducts = data;
        // })
        this.woodProducts.getProductsFromFS().then(res => {
            this.allWoodProducts = res.docs.map(el => el.data());
        });
    }
    viewItem(product) {
        this.viewedProduct = product;
        console.log(product);
    }
    editItem(product) {
        console.log(product);
        this.editedProduct = product;
        this.isUploaded = true;
        this.woodName = this.editedProduct.name;
        this.woodArticle = this.editedProduct.article;
        this.woodDescription = this.editedProduct.description;
        this.woodMinSize = this.editedProduct.minSize;
        this.woodMaxSize = this.editedProduct.maxSize;
        this.productImage = this.editedProduct.image;
        this.woodPrice = this.editedProduct.price;
    }
    saveEdit() {
        this.editedProduct.name = this.woodName;
        this.editedProduct.article = this.woodArticle;
        this.editedProduct.description = this.woodDescription;
        this.editedProduct.minSize = this.woodMinSize;
        this.editedProduct.maxSize = this.woodMaxSize;
        this.editedProduct.price = null;
        this.editedProduct.image = this.productImage;
        console.log(this.editedProduct);
        this.woodProducts.updateProductFromFS(this.editedProduct.id, this.editedProduct).then(res => {
            // console.log("Updated");
            this.loadProductsFromDB();
        });
        // this.woodProducts.updateProduct(this.editedProduct).subscribe(data => {
        //   this.loadProductsFromDB();
        // })
    }
    addNewProductInDB() {
        // console.log('sadads');
        if (this.woodName != '' && this.woodArticle != '' && this.woodMinSize != '' && this.woodMaxSize != '' && this.woodDescription != '' && this.productImage != '') {
            this.createId = this.UUID();
            const newProduct = new src_app_shared_models_woodProductModel__WEBPACK_IMPORTED_MODULE_0__["WoodProduct"](this.createId, this.woodName, this.woodArticle, this.woodMinSize, this.woodMaxSize, this.productImage, this.woodDescription, this.woodCount);
            // console.log(newProduct);
            let newProd = Object.assign({}, newProduct);
            this.woodProducts.createProductForFS(newProd, this.createId).then(res => {
                // console.log("Added");
                this.loadProductsFromDB();
            });
            // this.woodProducts.addNewProduct(newProduct).subscribe(data => {
            //   this.loadProductsFromDB();
            //   console.log("prodoct added");
            // })
            // this.woodProducts.createProductForFS(newProduct, this.UUID()).then(res => {
            //   console.log('PRODUCT CREATED');
            // })
        }
    }
    deleteItem(product) {
        // this.woodProducts.deleteProduct(product).subscribe(data => {
        //   this.loadProductsFromDB();
        //   console.log('Product deleted')
        // })
        // console.log(product.id);
        this.woodProducts.deleteProductFromFS(product.id).then(res => {
            // console.log("DELETED");
            this.loadProductsFromDB();
        });
    }
    clearFields() {
        this.woodName = '';
        this.woodArticle = '';
        this.woodMinSize = '';
        this.woodMaxSize = '';
        this.productImage = '';
        this.woodDescription = '';
        // this.woodPrice = '';
        this.isUploaded = false;
    }
    fieldsTest() {
        // this.isFieldsFulled = true;
        if (this.isEdit == true) {
            if (this.woodName != '' && this.woodArticle != '' && this.woodMinSize != '' && this.woodMaxSize != '' && this.productImage != '' && this.woodDescription != '') {
                // console.log('false')
                this.isFieldsFulled = false;
            }
            else {
                // console.log('true')
                this.isFieldsFulled = true;
            }
        }
        else {
            if (this.woodName != '' && this.woodArticle != '' && this.woodMinSize != '' && this.woodMaxSize != '' && this.productImage != '' && this.woodDescription != '') {
                // console.log('false')
                this.isFieldsFulled = false;
            }
            else {
                // console.log('true')
                this.isFieldsFulled = true;
            }
        }
    }
}
AdminWoodProductsComponent.ɵfac = function AdminWoodProductsComponent_Factory(t) { return new (t || AdminWoodProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_door_service__WEBPACK_IMPORTED_MODULE_2__["DoorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_wood_products_service__WEBPACK_IMPORTED_MODULE_3__["WoodProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"])); };
AdminWoodProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminWoodProductsComponent, selectors: [["app-admin-wood-products"]], decls: 114, vars: 28, consts: [["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "boldTitle"], [2, "max-width", "200px"], ["alt", "", 1, "card-img-top", 2, "width", "100%", "height", "100%", "background-size", "cover", 3, "src"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-dark"], ["id", "staticBackdrop", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "staticBackdropLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "mt-2"], ["autocomplete", "off", "name", "woodName", "type", "text", "placeholder", "Enter name...", 1, "form-control", "mt-1", 3, "ngModel", "keyup", "ngModelChange"], ["autocomplete", "off", "name", "woodArticle", "type", "text", "placeholder", "Enter article...", 1, "form-control", "mt-1", 3, "ngModel", "keyup", "ngModelChange"], ["autocomplete", "off", "name", "woodMinSize", "type", "text", "placeholder", "Enter minimal size in format: 'a X b'.", 1, "form-control", "mt-1", 3, "ngModel", "keyup", "ngModelChange"], ["autocomplete", "off", "name", "woodMaxSize", "type", "text", "placeholder", "Enter max size in format: 'a X b'.", 1, "form-control", "mt-1", 3, "ngModel", "keyup", "ngModelChange"], ["autocomplete", "off", "name", "woodDescription", "type", "text", "placeholder", "Enter description...", 1, "form-control", "mt-1", 3, "ngModel", "keyup", "ngModelChange"], [1, "custom-file"], ["for", "my-input", 1, "custom-file-label"], ["id", "my-input", "type", "file", "name", "", 1, "custom-file-input", 3, "change"], ["class", "progress mt-3", 4, "ngIf"], ["type", "button", "class", "btn btn-success", "data-bs-dismiss", "modal", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", "class", "btn btn-primary", "class", "btn btn-success", "data-bs-dismiss", "modal", 3, "disabled", "click", 4, "ngIf"], [2, "text-align", "center", "text-transform", "uppercase"], [2, "color", "white", "padding", "80px 5%"], [1, "adminPanel"], [1, "adminAside"], [1, "btn-group-vertical", "d-grid", "gap-2"], [3, "routerLink"], [1, "btn-dark", "btn"], [1, "adminPanelFields"], [1, "newProductField"], [1, "searcher", "d-flex"], ["name", "searchProduct", "type", "text", "placeholder", "Search product...", 1, "form-control", "mr-2", 3, "ngModel", "ngModelChange"], ["data-bs-toggle", "modal", "data-bs-target", "#staticBackdrop", 1, "btn", "btn-success", 2, "width", "100%", 3, "click"], [1, "adminProductsTable", "table", "table-light"], [4, "ngFor", "ngForOf"], [1, "progress", "mt-3"], ["id", "progressImg", "role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "bg-dark"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-success", 3, "disabled", "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "btn-dark", "btn", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#staticBackdrop", 1, "btn-warning", "btn", 3, "click"], ["type", "button", 1, "btn-danger", "btn", 3, "click"]], template: function AdminWoodProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Info about product:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Article:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Minimal Size:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Maximal Size:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Image:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Create new product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminWoodProductsComponent_Template_button_click_41_listener() { return ctx.clearFields(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function AdminWoodProductsComponent_Template_input_keyup_46_listener() { return ctx.fieldsTest(); })("ngModelChange", function AdminWoodProductsComponent_Template_input_ngModelChange_46_listener($event) { return ctx.woodName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Article:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function AdminWoodProductsComponent_Template_input_keyup_49_listener() { return ctx.fieldsTest(); })("ngModelChange", function AdminWoodProductsComponent_Template_input_ngModelChange_49_listener($event) { return ctx.woodArticle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Minimal Size:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function AdminWoodProductsComponent_Template_input_keyup_52_listener() { return ctx.fieldsTest(); })("ngModelChange", function AdminWoodProductsComponent_Template_input_ngModelChange_52_listener($event) { return ctx.woodMinSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Max Size:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function AdminWoodProductsComponent_Template_input_keyup_55_listener() { return ctx.fieldsTest(); })("ngModelChange", function AdminWoodProductsComponent_Template_input_ngModelChange_55_listener($event) { return ctx.woodMaxSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function AdminWoodProductsComponent_Template_input_keyup_58_listener() { return ctx.fieldsTest(); })("ngModelChange", function AdminWoodProductsComponent_Template_input_ngModelChange_58_listener($event) { return ctx.woodDescription = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Image:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Upload image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AdminWoodProductsComponent_Template_input_change_64_listener($event) { return ctx.uploadFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, AdminWoodProductsComponent_div_65_Template, 3, 4, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, AdminWoodProductsComponent_button_67_Template, 2, 1, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminWoodProductsComponent_Template_button_click_68_listener() { return ctx.clearFields(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, AdminWoodProductsComponent_button_70_Template, 2, 1, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "h4", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "main", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "aside", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Door Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Wood Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "All orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Sub Categoty & else");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminWoodProductsComponent_Template_input_ngModelChange_92_listener($event) { return ctx.searchProduct = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminWoodProductsComponent_Template_button_click_93_listener() { ctx.isEdit = false; ctx.isCreate = true; return ctx.getCureentLastID(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Add new product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "table", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Article");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Min Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Max Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](112, AdminWoodProductsComponent_tr_112_Template, 20, 5, "tr", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](113, "woodProductsPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 19, ctx.viewedProduct == null ? null : ctx.viewedProduct.article), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.viewedProduct == null ? null : ctx.viewedProduct.minSize, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.viewedProduct == null ? null : ctx.viewedProduct.maxSize, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.viewedProduct == null ? null : ctx.viewedProduct.description, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.viewedProduct == null ? null : ctx.viewedProduct.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.woodName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.woodArticle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.woodMinSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.woodMaxSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.woodDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isUploaded == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCreate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](24, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](25, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](26, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](27, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchProduct);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](113, 21, ctx.allWoodProducts, ctx.searchProduct));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["UpperCasePipe"], _shared_pipes_wood_products_pipe_pipe__WEBPACK_IMPORTED_MODULE_8__["WoodProductsPipePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".fontWeightBold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.adminPanel[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.adminAside[_ngcontent-%COMP%] {\n  width: 20%;\n  display: flex;\n  justify-content: center;\n  background-color: #fff;\n  border: 1px solid cyan;\n  border-radius: 10px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.adminPanelFields[_ngcontent-%COMP%] {\n  color: black;\n  height: 700px;\n  overflow-y: scroll;\n  padding: 10px;\n  width: 78%;\n  background-color: #fff;\n  border: 1px solid cyan;\n  border-radius: 10px;\n  min-height: 100px;\n}\n\n.adminAside[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  text-decoration: none;\n}\n\n.adminAside[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: block;\n  cursor: pointer;\n  width: 100%;\n  text-decoration: none;\n}\n\n.boldTitle[_ngcontent-%COMP%] {\n  margin-right: 3px;\n  color: black;\n  font-weight: bold;\n}\n\n@media (max-width: 858px) {\n  .adminAside[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .adminPanel[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .adminPanelFields[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow-y: scroll;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWRtaW4td29vZC1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGlCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBREo7O0FBS0E7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBR0EsYUFBQTtFQUVBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUxKOztBQVdBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQVJKOztBQVlBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFUSjs7QUFhQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBVko7O0FBY0E7RUFDSTtJQUNDLFdBQUE7RUFYSDs7RUFhRTtJQUNDLFdBQUE7RUFWSDs7RUFZRTtJQUNDLFdBQUE7SUFDQSxrQkFBQTtFQVRIO0FBQ0YiLCJmaWxlIjoiYWRtaW4td29vZC1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmZvbnRXZWlnaHRCb2xkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYWRtaW5QYW5lbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxufVxyXG5cclxuLmFkbWluQXNpZGUge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBjeWFuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGhlaWdodDpmaXQtY29udGVudDtcclxufVxyXG5cclxuLmFkbWluUGFuZWxGaWVsZHMge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgaGVpZ2h0OiA3MDBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIFxyXG5cclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgd2lkdGg6IDc4JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBjeWFuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG5cclxuXHJcblxyXG59XHJcblxyXG4uYWRtaW5Bc2lkZSBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG59XHJcblxyXG4uYWRtaW5Bc2lkZSAuYnRuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcblxyXG4uYm9sZFRpdGxlIHtcclxuICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODU4cHgpe1xyXG4gICAgLmFkbWluQXNpZGV7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuYWRtaW5QYW5lbHtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5hZG1pblBhbmVsRmllbGRze1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "sS4B":
/*!************************************************!*\
  !*** ./src/app/pages/admin/admin.component.ts ***!
  \************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var src_app_shared_models_productModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/productModel */ "Hz19");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_door_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/door.service */ "xYI4");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var src_app_shared_services_wood_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/wood-products.service */ "YWQT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_pipes_admin_products_pipe_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/pipes/admin-products-pipe.pipe */ "Z5OG");
// import { IDoors } from 'src/app/shared/interfaces/interface/shefieldDoorsInterface';









function AdminComponent_option_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("value", function AdminComponent_option_84_Template_option_value_0_listener() { const productClass_r6 = ctx.$implicit; return productClass_r6; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const productClass_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](productClass_r6);
} }
function AdminComponent_div_85_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("value", function AdminComponent_div_85_option_6_Template_option_value_0_listener() { const productClass_r9 = ctx.$implicit; return productClass_r9; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const productClass_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, productClass_r9));
} }
function AdminComponent_div_85_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Type:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AdminComponent_div_85_Template_select_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r11.fieldsTest(); return ctx_r11.getCurrentImage(ctx_r11.productType); })("ngModelChange", function AdminComponent_div_85_Template_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.productType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Select type...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AdminComponent_div_85_option_6_Template, 3, 3, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function AdminComponent_div_85_Template_input_keyup_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.fieldsTest(); })("ngModelChange", function AdminComponent_div_85_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.productName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Article:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function AdminComponent_div_85_Template_input_keyup_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.fieldsTest(); })("ngModelChange", function AdminComponent_div_85_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.productArticle = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Preparing:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function AdminComponent_div_85_Template_input_keyup_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.fieldsTest(); })("ngModelChange", function AdminComponent_div_85_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.productPreparing = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Containment:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function AdminComponent_div_85_Template_input_keyup_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.fieldsTest(); })("ngModelChange", function AdminComponent_div_85_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.productContainment = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Decoration:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function AdminComponent_div_85_Template_input_keyup_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.fieldsTest(); })("ngModelChange", function AdminComponent_div_85_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.productDecoration = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Furniture:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function AdminComponent_div_85_Template_input_keyup_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.fieldsTest(); })("ngModelChange", function AdminComponent_div_85_Template_input_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.productFurniture = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Construction:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function AdminComponent_div_85_Template_input_keyup_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.fieldsTest(); })("ngModelChange", function AdminComponent_div_85_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.productConstruction = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Image:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Upload image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminComponent_div_85_Template_input_ngModelChange_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.productImageInput = $event; })("change", function AdminComponent_div_85_Template_input_change_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.uploadFile($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.productType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.selectedProductClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.productArticle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.productPreparing);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.productContainment);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.productDecoration);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.productFurniture);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.productConstruction);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.productImageInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 12, ctx_r1.uploadProgress) + "%");
} }
function AdminComponent_div_86_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("value", function AdminComponent_div_86_option_6_Template_option_value_0_listener() { const productClass_r33 = ctx.$implicit; return productClass_r33; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const productClass_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](productClass_r33);
} }
function AdminComponent_div_86_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Brand:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminComponent_div_86_select_11_option_3_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("value", function AdminComponent_div_86_select_11_option_3_Template_option_value_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r37.productClass; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const productBrand_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](productBrand_r36);
} }
function AdminComponent_div_86_select_11_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "select", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AdminComponent_div_86_select_11_Template_select_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r39.fieldsTest(); })("ngModelChange", function AdminComponent_div_86_select_11_Template_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r41.furnitureBrand = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Select type...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AdminComponent_div_86_select_11_option_3_Template, 2, 1, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r32.furnitureBrand);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r32.productBrands);
} }
function AdminComponent_div_86_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Type:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AdminComponent_div_86_Template_select_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r42.fieldsTest(); })("ngModelChange", function AdminComponent_div_86_Template_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r44.productType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Select type...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AdminComponent_div_86_option_6_Template, 2, 1, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function AdminComponent_div_86_Template_input_keyup_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r45.fieldsTest(); })("ngModelChange", function AdminComponent_div_86_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r46.furnitureName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AdminComponent_div_86_p_10_Template, 2, 0, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AdminComponent_div_86_select_11_Template, 4, 2, "select", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Article:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function AdminComponent_div_86_Template_input_keyup_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r47.fieldsTest(); })("ngModelChange", function AdminComponent_div_86_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r48.furnitureArticle = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Descriprion:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function AdminComponent_div_86_Template_input_keyup_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r49.fieldsTest(); })("ngModelChange", function AdminComponent_div_86_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r50.furnitureDescriprion = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function AdminComponent_div_86_Template_input_keyup_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r51.fieldsTest(); })("ngModelChange", function AdminComponent_div_86_Template_input_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r52.furniturePrice = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Image:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Upload image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AdminComponent_div_86_Template_input_change_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r53.uploadFile($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.productType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.selectedProductClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.furnitureName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.productType == "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.productType == "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.furnitureArticle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.furnitureDescriprion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.furniturePrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 10, ctx_r2.uploadProgress) + "%");
} }
function AdminComponent_button_88_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminComponent_button_88_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r54.addNewProductInDB(); return ctx_r54.clearFields(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add new");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r3.isFieldsFulled);
} }
function AdminComponent_button_91_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminComponent_button_91_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r56.saveEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r4.isFieldsFulled);
} }
function AdminComponent_tr_135_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminComponent_tr_135_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r61); const product_r58 = ctx.$implicit; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r60.viewItem(product_r58); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminComponent_tr_135_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r61); const product_r58 = ctx.$implicit; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r62.editItem(product_r58); ctx_r62.isEdit = true; return ctx_r62.isCreate = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminComponent_tr_135_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r61); const product_r58 = ctx.$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r63.deleteItem(product_r58); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r58 = ctx.$implicit;
    const i_r59 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r59 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 5, product_r58.className));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 7, product_r58.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 9, product_r58.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 11, product_r58.article));
} }
const _c0 = function () { return ["/admin"]; };
const _c1 = function () { return ["/admin/adminWoodProducts"]; };
const _c2 = function () { return ["/admin/adminOrders"]; };
const _c3 = function () { return ["/admin/subCategory"]; };
class AdminComponent {
    constructor(doorService, storage, woodProducts) {
        this.doorService = doorService;
        this.storage = storage;
        this.woodProducts = woodProducts;
        this.timeOut = 0;
        this.currentLastId = 0;
        this.allProducts = [];
        this.allProductsClasses = ['entrace', 'interior', 'furniture'];
        this.selectedProductClass = [];
        this.searchProduct = '';
        this.newCustomType = '';
        this.classSelector = '';
        this.productType = '';
        this.productName = '';
        this.productArticle = '';
        this.productPreparing = '';
        this.productContainment = '';
        this.productDecoration = '';
        this.productFurniture = '';
        this.productConstruction = '';
        // productImageInput = '';
        this.productImage = '';
        this.furnitureName = '';
        this.furnitureBrand = '';
        this.furnitureArticle = '';
        this.furnitureDescriprion = '';
        this.furniturePrice = '';
        this.isFieldsFulled = true;
        this.productBrands = ["KALE", "MOTTURA", "BORDER", "CISA", "ISEO", "MUL-T-LOCK", "SECUREMME"];
    }
    ngOnInit() {
        this.loadProductsFromDB();
        this.getBrandsFromDB();
        // this.getCureentLastID()
    }
    uploadFile(event) {
        // console.log('Image');
        const file = event.target.files[0];
        const filePath = `images/${this.UUID()}.${file.type.split('/')[1]}`;
        const task = this.storage.upload(filePath, file);
        this.uploadProgress = task.percentageChanges();
        task.then(result => {
            this.storage.ref(`images/${result.metadata.name}`).getDownloadURL().subscribe(data => {
                // console.log(data);
                this.productImage = data;
                this.fieldsTest();
            });
        });
    }
    UUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    getCureentLastID() {
        this.timeOut = 0;
        this.woodProducts.getProductsFromDB().subscribe(data => {
            this.lastWoodProductsIndex = data.slice(-1)[0].id;
            //  console.log(this.lastWoodProductsIndex);
            this.timeOut++;
            if (this.timeOut == 2) {
                // this.getTotalLastIndex();
            }
        });
        //  this.doorService.getAllDoors().subscribe(data => {
        //    this.lastDoorsListIndex = data.slice(-1)[0].id;
        //    this.timeOut++
        //    if(this.timeOut == 2) {
        //     //  this.getTotalLastIndex();
        //    }
        //  })
    }
    //  getTotalLastIndex() {
    //   if(this.lastWoodProductsIndex > this.lastDoorsListIndex) {
    //     this.currentLastId = this.lastWoodProductsIndex;
    //   } else {
    //     this.currentLastId = this.lastDoorsListIndex;
    //   }
    //   // console.log( "current last IF " + this.currentLastId);
    //  }
    loadProductsFromDB() {
        // this.doorService.getAllDoors().subscribe(data => {
        //   this.allProducts = data;
        //   data.map(item => this.allProductsClasses.push(item.className));
        //   this.allProductsClasses = this.unique(this.allProductsClasses);
        //   this.fieldsTest();
        //   this.lastItemId = this.allProducts.slice(-1)[0].id + 1;
        //   // console.log(this.lastItemId);
        //   this.getCureentLastID()
        // })
        this.doorService.testFirestore().then(res => {
            this.allProducts = res.docs.map(el => el.data());
            this.fieldsTest();
        });
    }
    fieldsTest() {
        if (this.classSelector != '' && this.classSelector != 'furniture') {
            if (this.classSelector != '' && this.productType != '' && this.productName != '' && this.productArticle != '' && this.productPreparing != '' && this.productContainment != '' && this.productDecoration != '' && this.productFurniture != '' && this.productConstruction != '' && this.productImage != '') {
                this.isFieldsFulled = false;
                // console.log(this.isFieldsFulled)
            }
            else {
                this.isFieldsFulled = true;
                // console.log(this.isFieldsFulled)
            }
        }
        else if (this.classSelector == 'furniture') {
            // console.log('aaa');
            if (this.productType != '' && this.furnitureName != '' && this.furnitureArticle != '' && this.furnitureDescriprion != '' && this.furniturePrice != '' && this.productImage != '') {
                if (this.productType == 'lock' && this.furnitureBrand != '') {
                    this.isFieldsFulled = false;
                }
                else {
                    this.isFieldsFulled = false;
                }
            }
        }
        else {
            this.isFieldsFulled = true;
        }
    }
    getBrandsFromDB() {
        this.doorService.getBrandsFirestore().then(res => {
            this.productBrands = res.docs.map(el => el.data())[0].brands;
        });
        // console.log(this.productBrands);
        // this.doorService.getDirectionalType("Furniture",'lock').subscribe(data => {
        //   console.log(data);
        //   data.map(item => this.productBrands.push(item.brand));
        //   this.productBrands = this.unique(this.productBrands);
        // })
    }
    addNewProductInDB() {
        if (this.classSelector == 'furniture') {
            if (this.productType != '' && this.furnitureName != '' && this.furnitureArticle != '' && this.furnitureDescriprion != '' && this.furniturePrice != '') {
                console.log('product');
                this.lastItemId = this.UUID();
                const newFurniture = new src_app_shared_models_productModel__WEBPACK_IMPORTED_MODULE_0__["Product"](this.lastItemId, this.classSelector, this.productType, this.furnitureName, this.furnitureArticle, true, true, '', '', '', '', '', this.furnitureBrand, this.productImage, this.furniturePrice, this.furnitureDescriprion);
                let newObj = Object.assign({}, newFurniture);
                this.doorService.createProductForFS(newObj, this.lastItemId).then(res => {
                    // console.log("Updated");
                    this.loadProductsFromDB();
                });
                // this.doorService.addNewProduct(newFurniture).subscribe(data => {
                //   this.loadProductsFromDB();
                // });
            }
        }
        else {
            if (this.classSelector != '' && this.productType != '' && this.productName != '' && this.productArticle != '' && this.productPreparing != '' && this.productContainment != '' && this.productDecoration != '' && this.productFurniture != '' && this.productConstruction != '') {
                this.lastItemId = this.UUID();
                const newProduct = new src_app_shared_models_productModel__WEBPACK_IMPORTED_MODULE_0__["Product"](this.lastItemId, this.classSelector, this.productType, this.productName, this.productArticle, true, true, this.productPreparing, this.productContainment, this.productDecoration, this.productFurniture, this.productConstruction, "", this.productImage, null, '');
                let newObj = Object.assign({}, newProduct);
                // console.log(newObj);
                this.doorService.createProductForFS(newObj, this.lastItemId).then(res => {
                    // console.log("Created");
                    this.loadProductsFromDB();
                });
                // this.doorService.addNewProduct(newProduct).subscribe(data => {
                //   this.loadProductsFromDB();
                // });
            }
        }
    }
    getCurrentImage(val) {
        // console.log(val);
        // this.doorService.getDirectionalType(this.classSelector,val).subscribe(data => {
        // })
    }
    deleteItem(product) {
        console.log(product.id);
        this.doorService.deleteProductFromFS(product.id).then(res => {
            // console.log('asd');
            this.loadProductsFromDB();
        });
        // this.doorService.deleteProduct(product).subscribe(data => {
        //   console.log("Success")
        // this.loadProductsFromDB();
        // })
    }
    viewItem(product) {
        this.currentItemView = product;
    }
    editItem(product) {
        console.log(product);
        this.fieldsTest();
        this.clearFields();
        this.editedProduct = product;
        this.classSelector = product.className;
        this.selector();
        this.productType = product.type;
        console.log(this.productType);
        this.productName = product.name;
        this.productArticle = product.article;
        this.productPreparing = product.preparingTime;
        this.productContainment = product.containment;
        this.productDecoration = product.decoration;
        this.productFurniture = product.furniture;
        this.productConstruction = product.construction;
        this.productImage = product.image;
        this.furnitureName = product.name;
        this.furnitureBrand = product.brand;
        this.furnitureArticle = product.article;
        this.furnitureDescriprion = product.description;
        this.furniturePrice = product.price;
        // console.log(product.id);
        this.fieldsTest();
    }
    saveEdit() {
        if (this.classSelector == "furniture") {
            this.editedProduct.type = this.productType;
            this.editedProduct.name = this.furnitureName;
            this.editedProduct.brand = this.furnitureBrand;
            this.editedProduct.article = this.furnitureArticle;
            this.editedProduct.description = this.furnitureDescriprion;
            this.editedProduct.price = this.furniturePrice;
            this.doorService.updateProductFromFS(this.editedProduct.id, this.editedProduct).then(res => {
                this.loadProductsFromDB();
            });
        }
        else {
            this.editedProduct.className = this.classSelector;
            this.editedProduct.type = this.productType;
            this.editedProduct.name = this.productName;
            this.editedProduct.article = this.productArticle;
            this.editedProduct.preparingTime = this.productPreparing;
            this.editedProduct.containment = this.productContainment;
            this.editedProduct.decoration = this.productDecoration;
            this.editedProduct.furniture = this.productFurniture;
            this.editedProduct.construction = this.productConstruction;
            this.editedProduct.image = this.productImage;
            // console.log(this.editedProduct.id);
            // console.log(this.editedProduct);
            this.doorService.updateProductFromFS(this.editedProduct.id, this.editedProduct).then(res => {
                // console.log("Updated");
                this.loadProductsFromDB();
            });
        }
        // this.doorService.updateProduct(this.editedProduct).subscribe(data => {
        //   console.log("Edited");
        // })
    }
    selector() {
        this.doorService.getCategoriesFirestore().then(res => {
            let filteredTypes;
            filteredTypes = res.docs.map(el => el.data()).filter(item => item.className.toLowerCase() == this.classSelector.toLowerCase());
            this.selectedProductClass = filteredTypes[0].types;
            // console.log(filteredTypes);
            // console.log( res.docs.map(el => el.data()));
            this.fieldsTest();
        });
        // console.log(this.classSelector.toLowerCase());
        //   this.selectedProductClass = [];
        // if(this.classSelector == "furniture") {
        //   // this.selectedProductClass = [
        //   //   "lock","handle","armour cover","cylinder", "door eye", "key cover"
        //   // ]
        // } else {
        //   this.doorService.getCategoriesFirestore().then(res => {
        //     let filteredTypes;
        //     filteredTypes = res.docs.map(el => el.data()).filter(item => item.className.toLowerCase() == this.classSelector.toLowerCase());
        //     this.selectedProductClass = filteredTypes[0].types;
        //     // console.log(filteredTypes);
        //     // console.log( res.docs.map(el => el.data()));
        //     this.fieldsTest();
        //   })
        //   // this.doorService.testFirestore().then(res => {
        //   //   let filteredTypes;
        //   //   filteredTypes = res.docs.map(el => el.data()).filter(item => item.className.toLowerCase() == this.classSelector.toLowerCase());
        //   //   filteredTypes.map(item => this.selectedProductClass.push(item.type));
        //   //   this.selectedProductClass = this.unique(this.selectedProductClass);
        //   //   this.fieldsTest();
        //   // })
        // }
        // this.selectedProductClass = this.allProductsClasses;
        // this.doorService.getDirectionalClass(this.classSelector).subscribe(data => {
        //   // this.categoryImage 
        //   console.log(data)
        //   data.map(item => this.selectedProductClass.push(item.type));
        //   this.selectedProductClass = this.unique(this.selectedProductClass);
        // })
    }
    clearFields() {
        // console.log(this.productImage);
        this.productImage = '';
        this.isFieldsFulled = true;
        // console.log('Cleared Fields');
        this.classSelector = '';
        this.productType = '';
        this.productName = '';
        this.productArticle = '';
        this.productPreparing = '';
        this.productContainment = '';
        this.productDecoration = '';
        this.productFurniture = '';
        this.productConstruction = '';
        this.furnitureName = '';
        this.furnitureBrand = '';
        this.furnitureArticle = '';
        this.furnitureDescriprion = '';
        this.furniturePrice = '';
        // document.getElementById('progressImg').style.width = '0'
    }
    addProductToClass() {
        // console.log(this.productType);
    }
    unique(arr) {
        let result = [];
        for (let str of arr) {
            if (!result.includes(str)) {
                result.push(str);
            }
        }
        return result;
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_door_service__WEBPACK_IMPORTED_MODULE_2__["DoorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_wood_products_service__WEBPACK_IMPORTED_MODULE_4__["WoodProductsService"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 137, vars: 31, consts: [["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "itemInfo", "d-flex"], [1, "fontWeightBold", "mr-1"], [1, "itemInfo"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-dark"], ["id", "staticBackdrop", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "staticBackdropLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "mt-2"], ["name", "classSelector", "aria-label", ".form-select-lg example", 1, "form-select", "form-select-lg", "mb-3", "form-control", 3, "ngModel", "change", "ngModelChange"], ["disabled", "", "value", "", "selected", "", 3, "click"], ["style", "text-transform: uppercase;", 3, "value", 4, "ngFor", "ngForOf"], ["class", "createItemBlock", 4, "ngIf"], [4, "ngIf"], ["type", "button", "class", "btn btn-success", "data-bs-dismiss", "modal", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", "class", "btn btn-primary", "class", "btn btn-success", "data-bs-dismiss", "modal", 3, "disabled", "click", 4, "ngIf"], [2, "text-align", "center", "text-transform", "uppercase"], [2, "color", "white", "padding", "80px 5%"], [1, "adminPanel"], [1, "adminAside"], [1, "btn-group-vertical", "d-grid", "gap-2"], [3, "routerLink"], [1, "btn-dark", "btn"], [1, "adminPanelFields"], [1, "newProductField"], [1, "searcher", "d-flex"], ["name", "searchProduct", "type", "text", "placeholder", "Search product...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["data-bs-toggle", "modal", "data-bs-target", "#staticBackdrop", 1, "btn-success", "btn-block", "btn", "ml-2", 3, "click"], [1, "adminProductsTable", "table", "table-light"], [4, "ngFor", "ngForOf"], [2, "text-transform", "uppercase", 3, "value"], [1, "createItemBlock"], ["name", "productType", "aria-label", ".form-select-lg example", 1, "form-select", "form-select-lg", "mt-3", "mb-3", "form-control", 3, "ngModel", "change", "ngModelChange"], ["value", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "completeItem"], ["autocomplete", "off", "name", "productName", "type", "text", "placeholder", "Enter name...", 1, "form-control", 3, "ngModel", "keyup", "ngModelChange"], ["autocomplete", "off", "name", "productArticle", "type", "text", "placeholder", "Enter article...", 1, "form-control", 3, "ngModel", "keyup", "ngModelChange"], ["autocomplete", "off", "name", "productPreparing", "type", "text", "placeholder", "Enter preparing time...", 1, "form-control", "mt-1", 3, "ngModel", "keyup", "ngModelChange"], ["autocomplete", "off", "name", "productContainment", "type", "text", "placeholder", "Enter containment...", 1, "form-control", "mt-1", 3, "ngModel", "keyup", "ngModelChange"], ["autocomplete", "off", "name", "productDecoration", "type", "text", "placeholder", "Enter decotarion...", 1, "form-control", "mt-1", 3, "ngModel", "keyup", "ngModelChange"], ["autocomplete", "off", "name", "productFurniture", "type", "text", "placeholder", "Enter furniture...", 1, "form-control", "mt-1", 3, "ngModel", "keyup", "ngModelChange"], ["autocomplete", "off", "name", "productConstruction", "type", "text", "placeholder", "Enter construction...", 1, "form-control", "mt-1", 3, "ngModel", "keyup", "ngModelChange"], [1, "custom-file"], ["for", "my-input", 1, "custom-file-label"], ["id", "my-input", "type", "file", "name", "productImageInput", 1, "custom-file-input", 3, "ngModel", "ngModelChange", "change"], [1, "progress", "mt-3"], ["id", "progressImg", "role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "bg-dark"], [3, "value"], ["autocomplete", "off", "name", "furnitureName", "type", "text", "placeholder", "Enter name...", 1, "form-control", "mt-1", 3, "ngModel", "keyup", "ngModelChange"], ["class", "mt-2", 4, "ngIf"], ["name", "furnitureBrand", "class", "form-select form-select-lg mt-3 mb-3 form-control", "aria-label", ".form-select-lg example", 3, "ngModel", "change", "ngModelChange", 4, "ngIf"], ["autocomplete", "off", "name", "furnitureArticle", "type", "text", "placeholder", "Enter article...", 1, "form-control", "mt-1", 3, "ngModel", "keyup", "ngModelChange"], ["autocomplete", "off", "name", "furnitureDescriprion", "type", "text", "placeholder", "Enter description...", 1, "form-control", "mt-1", 3, "ngModel", "keyup", "ngModelChange"], ["autocomplete", "off", "name", "furniturePrice", "type", "text", "placeholder", "Enter price...", 1, "form-control", "mt-1", 3, "ngModel", "keyup", "ngModelChange"], ["id", "my-input", "type", "file", "name", "", 1, "custom-file-input", 3, "change"], ["name", "furnitureBrand", "aria-label", ".form-select-lg example", 1, "form-select", "form-select-lg", "mt-3", "mb-3", "form-control", 3, "ngModel", "change", "ngModelChange"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-success", 3, "disabled", "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "btn-dark", "btn", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#staticBackdrop", 1, "btn-warning", "btn", 3, "click"], ["type", "button", 1, "btn-danger", "btn", 3, "click"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Info about product:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Class:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Article:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "individual Size:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Preparing Time:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Containment:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Decoration:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Furniture:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Brand:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Image:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Price:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Create new product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_76_listener() { return ctx.clearFields(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Class:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AdminComponent_Template_select_change_81_listener() { return ctx.selector(); })("ngModelChange", function AdminComponent_Template_select_ngModelChange_81_listener($event) { return ctx.classSelector = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminComponent_Template_option_click_82_listener() { return ctx.clearFields(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Select class...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, AdminComponent_option_84_Template, 2, 1, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, AdminComponent_div_85_Template, 38, 14, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](86, AdminComponent_div_86_Template, 30, 12, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](88, AdminComponent_button_88_Template, 2, 1, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_89_listener() { return ctx.clearFields(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](91, AdminComponent_button_91_Template, 2, 1, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "h4", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "main", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "aside", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Door Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Wood Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "All orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Sub Categoty & else");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_113_listener($event) { return ctx.searchProduct = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_114_listener() { ctx.isCreate = true; ctx.isEdit = false; ctx.clearFields(); return ctx.getCureentLastID(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Add new product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "table", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Article");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](135, AdminComponent_tr_135_Template, 24, 13, "tr", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](136, "adminProductsPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentItemView == null ? null : ctx.currentItemView.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentItemView == null ? null : ctx.currentItemView.className);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentItemView == null ? null : ctx.currentItemView.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentItemView == null ? null : ctx.currentItemView.article);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentItemView == null ? null : ctx.currentItemView.individualSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentItemView == null ? null : ctx.currentItemView.preparingTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentItemView == null ? null : ctx.currentItemView.containment);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentItemView == null ? null : ctx.currentItemView.decoration);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentItemView == null ? null : ctx.currentItemView.furniture);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentItemView == null ? null : ctx.currentItemView.brand);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.currentItemView == null ? null : ctx.currentItemView.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentItemView == null ? null : ctx.currentItemView.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.classSelector);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.allProductsClasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.classSelector != "" && ctx.classSelector != "furniture");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.classSelector == "furniture");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCreate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](27, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](28, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](29, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](30, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchProduct);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](136, 24, ctx.allProducts, ctx.searchProduct));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]], pipes: [_shared_pipes_admin_products_pipe_pipe__WEBPACK_IMPORTED_MODULE_8__["AdminProductsPipePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["UpperCasePipe"]], styles: [".fontWeightBold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.adminPanel[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.adminAside[_ngcontent-%COMP%] {\n  width: 20%;\n  display: flex;\n  justify-content: center;\n  background-color: #fff;\n  border: 1px solid cyan;\n  border-radius: 10px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.adminPanelFields[_ngcontent-%COMP%] {\n  color: black;\n  height: 700px;\n  overflow-y: scroll;\n  padding: 10px;\n  width: 78%;\n  background-color: #fff;\n  border: 1px solid cyan;\n  border-radius: 10px;\n  min-height: 100px;\n}\n\n.adminAside[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  text-decoration: none;\n}\n\n.adminAside[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: block;\n  cursor: pointer;\n  width: 100%;\n  text-decoration: none;\n}\n\n@media (max-width: 858px) {\n  .adminAside[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .adminPanel[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .adminPanelFields[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow-y: scroll;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGlCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBREo7O0FBS0E7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBR0EsYUFBQTtFQUVBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUxKOztBQVdBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQVJKOztBQVlBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFUSjs7QUFhQTtFQUNJO0lBQ0MsV0FBQTtFQVZIOztFQVlFO0lBQ0MsV0FBQTtFQVRIOztFQVdFO0lBQ0MsV0FBQTtJQUNBLGtCQUFBO0VBUkg7QUFDRiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmZvbnRXZWlnaHRCb2xkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYWRtaW5QYW5lbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxufVxyXG5cclxuLmFkbWluQXNpZGUge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBjeWFuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGhlaWdodDpmaXQtY29udGVudDtcclxufVxyXG5cclxuLmFkbWluUGFuZWxGaWVsZHMge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgaGVpZ2h0OiA3MDBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIFxyXG5cclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgd2lkdGg6IDc4JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBjeWFuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG5cclxuXHJcblxyXG59XHJcblxyXG4uYWRtaW5Bc2lkZSBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG59XHJcblxyXG4uYWRtaW5Bc2lkZSAuYnRuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODU4cHgpe1xyXG4gICAgLmFkbWluQXNpZGV7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuYWRtaW5QYW5lbHtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5hZG1pblBhbmVsRmllbGRze1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_basket_basket_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/basket/basket.component */ "zYrN");
/* harmony import */ var _pages_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/contacts/contacts.component */ "ZuGw");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_information_information_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/information/information.component */ "vfrJ");
/* harmony import */ var _pages_news_news_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/news/news.component */ "7yAP");
/* harmony import */ var _pages_services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/services/services.component */ "Kbxg");
/* harmony import */ var _pages_works_works_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/works/works.component */ "wRh0");
/* harmony import */ var _pages_services_doorsTypes_interior_doors_interior_doors_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/services/doorsTypes/interior-doors/interior-doors.component */ "gT65");
/* harmony import */ var _pages_services_doorsTypes_entrace_doors_entrace_doors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/services/doorsTypes/entrace-doors/entrace-doors.component */ "xjhd");
/* harmony import */ var _pages_services_doorsTypes_furniture_furniture_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/services/doorsTypes/furniture/furniture.component */ "5GRp");
/* harmony import */ var _pages_services_wood_products_wood_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/services/wood-products/wood-products.component */ "ky+U");
/* harmony import */ var _pages_services_doorsTypes_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/services/doorsTypes/product-page/product-page.component */ "ZSOS");
/* harmony import */ var _pages_services_doorsTypes_directive_product_page_directive_product_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/services/doorsTypes/directive-product-page/directive-product-page.component */ "4UHR");
/* harmony import */ var _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/admin/admin.component */ "sS4B");
/* harmony import */ var _pages_services_wood_products_wood_product_page_wood_product_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/services/wood-products/wood-product-page/wood-product-page.component */ "GsQN");
/* harmony import */ var _pages_admin_admin_wood_products_admin_wood_products_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/admin/admin-wood-products/admin-wood-products.component */ "rj1O");
/* harmony import */ var _pages_admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/admin/admin-orders/admin-orders.component */ "JjJR");
/* harmony import */ var _pages_admin_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/admin/admin-users/admin-users.component */ "WEeH");
/* harmony import */ var _pages_admin_admin_sub_admin_sub_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/admin/admin-sub/admin-sub.component */ "dOc4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "fXoL");






















const routes = [
    { path: "", pathMatch: "full", redirectTo: 'home' },
    { path: 'admin', component: _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_14__["AdminComponent"] },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'services', component: _pages_services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"] },
    { path: 'works', component: _pages_works_works_component__WEBPACK_IMPORTED_MODULE_7__["WorksComponent"] },
    { path: 'info', component: _pages_information_information_component__WEBPACK_IMPORTED_MODULE_4__["InformationComponent"] },
    { path: 'contact', component: _pages_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_2__["ContactsComponent"] },
    { path: 'news', component: _pages_news_news_component__WEBPACK_IMPORTED_MODULE_5__["NewsComponent"] },
    { path: 'basket', component: _pages_basket_basket_component__WEBPACK_IMPORTED_MODULE_1__["BasketComponent"] },
    { path: 'admin/adminWoodProducts', component: _pages_admin_admin_wood_products_admin_wood_products_component__WEBPACK_IMPORTED_MODULE_16__["AdminWoodProductsComponent"] },
    { path: 'admin/adminOrders', component: _pages_admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_17__["AdminOrdersComponent"] },
    { path: 'admin/usersList', component: _pages_admin_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_18__["AdminUsersComponent"] },
    { path: 'admin/subCategory', component: _pages_admin_admin_sub_admin_sub_component__WEBPACK_IMPORTED_MODULE_19__["AdminSubComponent"] },
    // {path : 'services' , children : [
    //   // сюда  пишеш інтерер , ентрейс , фурнитруа , воррд продукт   так більше читабільно
    // ] } 
    { path: 'services/interior', component: _pages_services_doorsTypes_interior_doors_interior_doors_component__WEBPACK_IMPORTED_MODULE_8__["InteriorDoorsComponent"] },
    { path: 'services/entrace', component: _pages_services_doorsTypes_entrace_doors_entrace_doors_component__WEBPACK_IMPORTED_MODULE_9__["EntraceDoorsComponent"] },
    { path: 'services/furniture', component: _pages_services_doorsTypes_furniture_furniture_component__WEBPACK_IMPORTED_MODULE_10__["FurnitureComponent"] },
    { path: 'services/woodProducts', component: _pages_services_wood_products_wood_products_component__WEBPACK_IMPORTED_MODULE_11__["WoodProductsComponent"] },
    { path: 'services/:className/:type/productPage', component: _pages_services_doorsTypes_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_12__["ProductPageComponent"] },
    { path: 'services/:className/:type/productPage/:id', component: _pages_services_doorsTypes_directive_product_page_directive_product_page_component__WEBPACK_IMPORTED_MODULE_13__["DirectiveProductPageComponent"] },
    // {path: 'services/entraceDoors/productPage/DirectiveProductPage', component: DirectiveProductPageComponent},
    { path: 'services/woodProducts/:id', component: _pages_services_wood_products_wood_product_page_wood_product_page_component__WEBPACK_IMPORTED_MODULE_15__["WoodProductPageComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vfrJ":
/*!************************************************************!*\
  !*** ./src/app/pages/information/information.component.ts ***!
  \************************************************************/
/*! exports provided: InformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationComponent", function() { return InformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class InformationComponent {
    constructor() { }
    ngOnInit() {
    }
}
InformationComponent.ɵfac = function InformationComponent_Factory(t) { return new (t || InformationComponent)(); };
InformationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InformationComponent, selectors: [["app-information"]], decls: 2, vars: 0, template: function InformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "information works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "wRh0":
/*!************************************************!*\
  !*** ./src/app/pages/works/works.component.ts ***!
  \************************************************/
/*! exports provided: WorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksComponent", function() { return WorksComponent; });
/* harmony import */ var _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @googlemaps/js-api-loader */ "QnLe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/map.service */ "ZL7T");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["map"];
function WorksComponent_option_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const departament_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](departament_r2.Description);
} }
class WorksComponent {
    constructor(router, cdr, mapService) {
        this.router = router;
        this.cdr = cdr;
        this.mapService = mapService;
        this.gmarker = null;
        this.NPDepartament = 'Select Departament';
    }
    ngOnInit() {
        this.initMap();
        this.initNP();
    }
    initMap() {
        const loader = new _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_0__["Loader"]({
            apiKey: this.mapService.apiKey
        });
        loader.load()
            .then(() => {
            this.map = new google.maps.Map(this.divMap.nativeElement, {
                center: this.mapService.mapLocation,
                zoom: 12.5,
                disableDefaultUI: true
            });
            let marker = new google.maps.Marker({
                position: { lat: this.mapLat, lng: this.mapLng },
                map: this.map,
            });
        });
    }
    initNP() {
        this.mapService.getNova().subscribe(data => {
            this.NPListDepartamets = data.data.filter(item => item.Description.includes("Відділення"));
        });
    }
    getDepartament() {
        let currentDepartamnet = this.NPListDepartamets[this.NPDepartament];
        this.getLocationOfDepartament(currentDepartamnet.Latitude, currentDepartamnet.Longitude);
    }
    getLocationOfDepartament(lat, lng) {
        this.mapLat = +lat;
        this.mapLng = +lng;
        this.initMap();
        // console.log(lat + " " + lng);
    }
}
WorksComponent.ɵfac = function WorksComponent_Factory(t) { return new (t || WorksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"])); };
WorksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WorksComponent, selectors: [["app-works"]], viewQuery: function WorksComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.divMap = _t.first);
    } }, decls: 46, vars: 2, consts: [[1, "mt-5"], [1, "sliderTest", 2, "height", "600px", "width", "60%"], ["id", "carouselExampleControlsNoTouching", "data-bs-touch", "false", "data-bs-interval", "false", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "https://images.unsplash.com/photo-1619017235263-3a96851984be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "alt", "...", 1, "d-block", "w-100"], [1, "carousel-item"], ["type", "button", "data-bs-target", "#carouselExampleControlsNoTouching", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleControlsNoTouching", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], ["id", "map", 1, "full"], ["map", ""], [1, "loginForm"], [1, "mb-3"], ["for", "exampleInputEmail1", 1, "form-label"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", 1, "form-control"], ["id", "emailHelp", 1, "form-text"], ["for", "exampleInputPassword1", 1, "form-label"], ["type", "password", "id", "exampleInputPassword1", 1, "form-control"], [1, "mb-3", "form-check"], ["type", "checkbox", "id", "exampleCheck1", 1, "form-check-input"], ["for", "exampleCheck1", 1, "form-check-label"], ["type", "button", 1, "btn", "btn-primary"], [1, "form-group"], ["for", "my-select"], ["id", "my-select", "name", "NPDepartament", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function WorksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "works works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "div", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "We'll never share your email with anyone else.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Check me out");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Choose Nova Poshta Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function WorksComponent_Template_select_ngModelChange_43_listener($event) { return ctx.NPDepartament = $event; })("change", function WorksComponent_Template_select_change_43_listener() { return ctx.getDepartament(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, WorksComponent_option_45_Template, 2, 2, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.NPDepartament);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.NPListDepartamets);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"]], styles: [".full[_ngcontent-%COMP%] {\n  width: 600px;\n  height: 600px;\n}\n\n@media (max-width: 650px) {\n  section[_ngcontent-%COMP%]   .full[_ngcontent-%COMP%] {\n    width: 400px;\n    height: 400px;\n  }\n}\n\n.loginForm[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: 0 auto;\n  background-color: white;\n  padding: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx3b3Jrcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBREo7O0FBSUU7RUFFSTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VBRk47QUFDRjs7QUFRQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBTkoiLCJmaWxlIjoid29ya3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5mdWxse1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBzZWN0aW9ue1xyXG4gICAgICAuZnVsbHtcclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHt9XHJcbiAgXHJcbi5sb2dpbkZvcm0ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "xYI4":
/*!*************************************************!*\
  !*** ./src/app/shared/services/door.service.ts ***!
  \*************************************************/
/*! exports provided: DoorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoorService", function() { return DoorService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");





class DoorService {
    constructor(http, firestore) {
        var _a;
        this.http = http;
        this.firestore = firestore;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url;
        // sub$: Subject<any> = new Subject();
        this.sub$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.orderCount = (_a = JSON.parse(localStorage.getItem('basket'))) === null || _a === void 0 ? void 0 : _a.length;
        this.allBrands = ['KALE', 'APECS', 'BORDER', 'CISA', 'ISEO', 'MOTTURA', 'MUL-T-LOCK', 'SECUREME', 'SERRATURE'];
        this.url += 'doorsList';
    }
    addNewBrand(arr) {
        this.allBrands = arr;
    }
    //  getAllDoors(): Observable<IDoors[]> {
    //    return this.http.get<IDoors[]>(this.url);
    //  }
    //  getDirectionalType(className: string,type:string): Observable<IDoors[]> {
    //   return this.http.get<IDoors[]>(this.url + `?className=${className}&type=${type}`);
    // }
    //  getDirectionalId(id: number): Observable<any> {
    //   return this.http.get<IDoors[]>(this.url + `?id=${id}`);
    // }
    //  getDirectionalClass(productClass: string): Observable<IDoors[]> {
    //   return this.http.get<IDoors[]>(this.url + `?className=${productClass}`);
    //  }
    //  getDirectionalBrand(brand: string): Observable<IDoors[]> {
    //   return this.http.get<IDoors[]>(this.url + `?className=${brand}`);
    //  }
    addNewProduct(product) {
        return this.http.post(this.url, product);
    }
    deleteProduct(product) {
        return this.http.delete(`${this.url}/${product.id}`);
    }
    updateProduct(product) {
        return this.http.put(`${this.url}/${product.id}`, product);
    }
    testFirestore() {
        return this.firestore.collection('doorsList').ref.get();
    }
    createProductForFS(product, id) {
        return this.firestore.collection('doorsList').doc(id).set(product);
    }
    deleteProductFromFS(id) {
        return this.firestore.collection('doorsList').doc(id).delete();
    }
    updateProductFromFS(id, product) {
        return this.firestore.collection('doorsList').doc(id).set(product);
    }
    getCategoriesFirestore() {
        return this.firestore.collection('doorsTypes').ref.get();
    }
    createCategoryForFS(types, className) {
        return this.firestore.collection('doorsTypes').doc(className).set(types);
    }
    deleteCategoryForFS(types, className) {
        return this.firestore.collection('doorsTypes').doc(className).set(types);
    }
    getBrandsFirestore() {
        return this.firestore.collection('brands').ref.get();
    }
    createBrandForFS(types, className) {
        return this.firestore.collection('brands').doc(className).set(types);
    }
    deleteBrandForFS(types, className) {
        return this.firestore.collection('brands').doc(className).set(types);
    }
}
DoorService.ɵfac = function DoorService_Factory(t) { return new (t || DoorService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"])); };
DoorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DoorService, factory: DoorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "xjhd":
/*!************************************************************************************!*\
  !*** ./src/app/pages/services/doorsTypes/entrace-doors/entrace-doors.component.ts ***!
  \************************************************************************************/
/*! exports provided: EntraceDoorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntraceDoorsComponent", function() { return EntraceDoorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_door_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/door.service */ "xYI4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a1) { return ["/services/entrace/", a1, "productPage"]; };
function EntraceDoorsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntraceDoorsComponent_div_12_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const entraceDoor_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.sendIndex(entraceDoor_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entraceDoor_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, entraceDoor_r1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entraceDoor_r1, " ");
} }
const _c1 = function () { return ["/services"]; };
const _c2 = function (a1) { return ["/services/", a1]; };
class EntraceDoorsComponent {
    constructor(doorService) {
        this.doorService = doorService;
        this.entraceDoorsTypes = [];
    }
    ngOnInit() {
        // this.loadDoorsFromDB();
        this.loadFromFirebase();
    }
    loadFromFirebase() {
        this.doorService.testFirestore().then(res => {
            let allDoors = [];
            let filteredTypesArr = [];
            allDoors = res.docs.map(el => el.data());
            this.currentClass = allDoors.filter(item => item.className.toLowerCase() == "Entrace".toLowerCase());
            this.currentClass.forEach(element => {
                filteredTypesArr.push(element.type);
            });
            this.entraceDoorsTypes = this.unique(filteredTypesArr);
        });
    }
    // loadDoorsFromDB() {
    //     this.doorService.getDirectionalClass('Entrace').subscribe(data => {
    //       this.currentClass = data[0].className;
    //       data.map(item => this.entraceDoorsTypes.push(item.type));
    //       this.entraceDoorsTypes = this.unique(this.entraceDoorsTypes);
    //     })
    // }
    unique(arr) {
        let result = [];
        for (let str of arr) {
            if (!result.includes(str)) {
                result.push(str);
            }
        }
        return result;
    }
    sendIndex(item) {
        // localStorage.setItem("currentProduct", item);
        // localStorage.setItem("currentClassName", this.currentClass);
        // console.log(item)
        this.directiveType = item;
    }
}
EntraceDoorsComponent.ɵfac = function EntraceDoorsComponent_Factory(t) { return new (t || EntraceDoorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_door_service__WEBPACK_IMPORTED_MODULE_1__["DoorService"])); };
EntraceDoorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EntraceDoorsComponent, selectors: [["app-entrace-doors"]], decls: 13, vars: 6, consts: [[2, "color", "white", "padding", "80px 5%"], [2, "text-align", "center", "text-transform", "uppercase"], ["aria-label", "breadcrumb", 2, "--bs-breadcrumb-divider", ">"], [1, "breadcrumb", 2, "text-transform", "uppercase", "background-color", "black", "margin-bottom", "30px", "font-size", "1rem"], ["aria-current", "page", 1, "breadcrumb-item", 3, "routerLink"], [1, "breadcrumb-item", "active", 3, "routerLink"], [1, "entraceDoorsSelector"], ["class", "entraceDoorItem", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "entraceDoorItem", 3, "routerLink", "click"], [1, "test"], [1, "entraceDoorImage"], ["src", "https://images.unsplash.com/photo-1517757910079-f57fd7f49a91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1048&q=80", "alt", "", 1, "productImage"], [1, "entraceDoorTitle"]], template: function EntraceDoorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "entrace-doors works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Select wishful type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ol", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Entrace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EntraceDoorsComponent_div_12_Template, 8, 6, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, ctx.currentClass));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.entraceDoorsTypes);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["LowerCasePipe"]], styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.entraceDoorsSelector[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n@media (max-width: 1520px) {\n  .entraceDoorsSelector[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n\n  .entraceDoorItem[_ngcontent-%COMP%] {\n    margin-top: 100px;\n  }\n}\n\n@media (max-width: 1133px) {\n  .entraceDoorsSelector[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n\n.entraceDoorItem[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin: 20px;\n  position: relative;\n  width: 300px;\n  height: 300px;\n  background: linear-gradient(195deg, white, darkgray);\n  position: relative;\n  border-radius: 2%;\n  border: 1px solid white;\n  box-shadow: 0 5px 20px white;\n  z-index: 4;\n}\n\n.test[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 2%;\n  z-index: 5;\n  transition: all linear 0.2s;\n}\n\n.entraceDoorTitle[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n  bottom: 5%;\n  right: 5%;\n  position: absolute;\n  font-size: 1rem;\n  font-weight: 500;\n  z-index: 6;\n}\n\n.entraceDoorItem[_ngcontent-%COMP%]:hover   .test[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.9);\n}\n\n.entraceDoorItem[_ngcontent-%COMP%]:hover   .entraceDoorTitle[_ngcontent-%COMP%] {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 1.4rem;\n  font-family: monospace;\n  font-weight: bold;\n  z-index: 5;\n  overflow: hidden;\n}\n\n.entraceDoorImage[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.entraceDoorImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  border-radius: 2%;\n}\n\n.productImage[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-position: center;\n  background-size: auto;\n  background-repeat: no-repeat;\n}\n\n.breadcrumb-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGVudHJhY2UtZG9vcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBSEo7O0FBTUE7RUFFSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBSko7O0FBUUE7RUFDSTtJQUNJLDhCQUFBO0VBTE47O0VBUUU7SUFDSSxpQkFBQTtFQUxOO0FBQ0Y7O0FBT0E7RUFDSTtJQUNJLHVCQUFBO0VBTE47QUFDRjs7QUFXQTtFQUVJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9EQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0FBWEo7O0FBY0E7RUFHSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0FBYko7O0FBZ0JBO0VBQ0kscUJBQUE7RUFFQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFmSjs7QUFtQkE7RUFDSSxvQ0FBQTtBQWhCSjs7QUFrQkE7RUFHSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUVBLGdCQUFBO0FBbEJKOztBQTRCQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUF6Qko7O0FBOEJBO0VBRUksWUFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FBNUJKOztBQStCQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0FBNUJKOztBQW1DQTtFQUNJLGVBQUE7QUFoQ0oiLCJmaWxlIjoiZW50cmFjZS1kb29ycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbip7XHJcblxyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5lbnRyYWNlRG9vcnNTZWxlY3RvciB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE1MjBweCl7XHJcbiAgICAuZW50cmFjZURvb3JzU2VsZWN0b3Ige1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuXHJcbiAgICAuZW50cmFjZURvb3JJdGVtIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTEzM3B4KXtcclxuICAgIC5lbnRyYWNlRG9vcnNTZWxlY3RvciB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi5lbnRyYWNlRG9vckl0ZW0ge1xyXG5cclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE5NWRlZyx3aGl0ZSwgZGFya2dyYXkpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMiU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggd2hpdGU7XHJcbiAgICB6LWluZGV4OiA0O1xyXG59XHJcblxyXG4udGVzdCB7XHJcbiAgICAgICAgXHJcbiAgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogLjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMiU7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAuMnM7IFxyXG59XHJcblxyXG4uZW50cmFjZURvb3JUaXRsZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm90dG9tOiA1JTtcclxuICAgIHJpZ2h0OiA1JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIFxyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHotaW5kZXg6IDY7XHJcblxyXG59XHJcblxyXG4uZW50cmFjZURvb3JJdGVtOmhvdmVyIC50ZXN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IC45KTtcclxufVxyXG4uZW50cmFjZURvb3JJdGVtOmhvdmVyIC5lbnRyYWNlRG9vclRpdGxlIHtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIC8vIHdoaXRlLXNwYWNlOiB3cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC8vIG92ZXJmbG93LXdyYXA6bm9ybWFsXHJcbiAgIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5lbnRyYWNlRG9vckltYWdlIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuXHJcbn1cclxuXHJcbi5lbnRyYWNlRG9vckltYWdlIGltZyB7XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyJTtcclxufVxyXG5cclxuLnByb2R1Y3RJbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTphdXRvO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIFxyXG4gICAgLy8gYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG5cclxufVxyXG5cclxuXHJcbi5icmVhZGNydW1iLWl0ZW0ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zYrN":
/*!**************************************************!*\
  !*** ./src/app/pages/basket/basket.component.ts ***!
  \**************************************************/
/*! exports provided: BasketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketComponent", function() { return BasketComponent; });
/* harmony import */ var src_app_shared_models_basketModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/basketModel */ "ceBc");
/* harmony import */ var _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @googlemaps/js-api-loader */ "QnLe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/order.service */ "NuUg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_map_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/map.service */ "ZL7T");
/* harmony import */ var src_app_shared_services_door_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/door.service */ "xYI4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");

// import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { Router } from '@angular/router';








const _c0 = ["map"];
function BasketComponent_div_17_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0433\u0440\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", order_r3.price, " ");
} }
function BasketComponent_div_17_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span");
} }
function BasketComponent_div_17_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span");
} }
function BasketComponent_div_17_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0433\u0440\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](order_r3.count * order_r3.price);
} }
function BasketComponent_div_17_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "AS AGREET");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BasketComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BasketComponent_div_17_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const order_r3 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.deleteProduct(order_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, BasketComponent_div_17_span_13_Template, 4, 1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, BasketComponent_div_17_span_14_Template, 1, 0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, BasketComponent_div_17_span_15_Template, 1, 0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BasketComponent_div_17_Template_span_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const order_r3 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.productCount(order_r3, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BasketComponent_div_17_Template_span_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const order_r3 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.productCount(order_r3, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "b", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\u0417\u0430\u0433\u0430\u043B\u043E\u043C: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, BasketComponent_div_17_span_25_Template, 4, 1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "b", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\u0417\u0430\u0433\u0430\u043B\u043E\u043C: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, BasketComponent_div_17_span_28_Template, 2, 0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", order_r3 == null ? null : order_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](order_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", order_r3.price * 1 == order_r3.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", order_r3.price * 1 != order_r3.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", order_r3.price == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", order_r3.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", order_r3.price * 1 == order_r3.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", order_r3.price * 1 != order_r3.price);
} }
function BasketComponent_option_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const departament_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", i_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](departament_r15.Description);
} }
class BasketComponent {
    constructor(orderService, router, cdr, mapService, doorService) {
        this.orderService = orderService;
        this.router = router;
        this.cdr = cdr;
        this.mapService = mapService;
        this.doorService = doorService;
        this.gmarker = null;
        this.NPDepartament = 'Select Departament';
        this.allOrders = [];
        this.orders = [];
        this.userName = '';
        this.userPhone = '';
        this.userCity = '';
        this.userStreet = '';
        this.userHouse = '';
        // totalPayment: string;
        this.userComment = '';
        this.isFieldsEmpty = true;
    }
    ngOnInit() {
        this.getBasket();
        this.fieldsTest();
        this.initMap();
        this.initNP();
    }
    initMap() {
        const loader = new _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_1__["Loader"]({
            apiKey: this.mapService.apiKey
        });
        loader.load()
            .then(() => {
            this.map = new google.maps.Map(this.divMap.nativeElement, {
                center: this.mapService.mapLocation,
                zoom: 11.5,
                disableDefaultUI: true
            });
            let marker = new google.maps.Marker({
                position: { lat: this.mapLat, lng: this.mapLng },
                map: this.map,
            });
        });
    }
    initNP() {
        this.mapService.getNova().subscribe(data => {
            this.NPListDepartamets = data.data.filter(item => item.Description.includes("Відділення"));
        });
    }
    getDepartament() {
        let currentDepartamnet = this.NPListDepartamets[this.NPDepartament];
        console.log(currentDepartamnet);
        this.getLocationOfDepartament(currentDepartamnet.Latitude, currentDepartamnet.Longitude);
        this.userCity = currentDepartamnet.ShortAddress.split(',')[0];
        this.userStreet = currentDepartamnet.ShortAddress.split(',')[1];
        this.userHouse = currentDepartamnet.ShortAddress.split(',')[2] + "Нова Пошта*";
    }
    getLocationOfDepartament(lat, lng) {
        this.mapLat = +lat;
        this.mapLng = +lng;
        this.initMap();
        // console.log(lat + " " + lng);
    }
    getBasket() {
        var _a;
        this.basketLength = localStorage.getItem('basket');
        console.log(this.basketLength);
        this.basketLength = (_a = JSON.parse(this.basketLength)) === null || _a === void 0 ? void 0 : _a.length;
        // console.log(this.basketLength);
        if (localStorage.length > 0 && localStorage.getItem('basket')) {
            this.orders = JSON.parse(localStorage.getItem('basket'));
            // console.log(this.orders);
        }
        this.total();
    }
    productCount(product, status) {
        if (status) {
            product.count++;
        }
        else {
            if (product.count > 1) {
                product.count--;
            }
        }
        this.total();
        this.updateLocalProducts();
        // this.orderService.basket.next(this.orders);
    }
    deleteProduct(product) {
        const index = this.orders.findIndex(prod => prod.id === product.id);
        this.orders.splice(index, 1);
        this.total();
        this.updateLocalProducts();
        this.doorService.sub$.next(this.orders);
    }
    fieldsTest() {
        if (this.userName != '' && this.userPhone != '' && this.userCity != '' && this.userStreet != '' && this.userHouse != '') {
            this.isFieldsEmpty = false;
            // console.log(this.isFieldsEmpty)
        }
        else {
            this.isFieldsEmpty = true;
            // console.log(this.isFieldsEmpty)
        }
    }
    addOrder() {
        this.lastOrderId = this.UUID();
        if (this.userName != '' && this.userPhone != '' && this.userCity != '' && this.userStreet != '' && this.userHouse != '') {
            console.log("asd");
            const newOrder = new src_app_shared_models_basketModel__WEBPACK_IMPORTED_MODULE_0__["Order"](this.lastOrderId, this.userName, this.userPhone, this.userCity, this.userStreet, this.userHouse, this.orders, this.totalPrice, this.userComment);
            this.orders = [];
            localStorage.setItem('basket', JSON.stringify(this.orders));
            let orderCopy = Object.assign({}, newOrder);
            console.log(orderCopy);
            this.orderService.createOrdersForFS(orderCopy, orderCopy.id).then(res => {
                // console.log("Order created");
                this.getBasket();
                this.clearFields();
                this.doorService.sub$.next(this.orders);
                // копнути його шо в мене тепер пусто щ
            });
        }
        // this.orderService.addNewOrder(newOrder).subscribe(data => {
        //   this.getBasket();
        // })
    }
    clearFields() {
        this.userName = '';
        this.userPhone = '';
        this.userCity = '';
        this.userStreet = '';
        this.userHouse = '';
        this.totalPrice = '';
        this.userComment = '';
    }
    total() {
        // console.log(this.orders);
        let a = 0;
        this.orders.forEach(element => {
            if (element.price * 1 == element.price) {
                // this.totalPrice += element.price*element.count
                a += element.price * element.count;
                // console.log(element.price*element.count);
                // console.log(a);
            }
        });
        this.totalPrice = a;
        // console.log(this.totalPrice);
        // this.totalPrice = this.orders.reduce((total, elem) => {
        //   console.log(elem.price);
        //   if(elem.price*1 == elem.price) {
        //     return total + (elem.price * elem.count);
        //   }
        // }, 0);
    }
    updateLocalProducts() {
        localStorage.setItem('basket', JSON.stringify(this.orders));
    }
    UUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
BasketComponent.ɵfac = function BasketComponent_Factory(t) { return new (t || BasketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_map_service__WEBPACK_IMPORTED_MODULE_5__["MapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_door_service__WEBPACK_IMPORTED_MODULE_6__["DoorService"])); };
BasketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BasketComponent, selectors: [["app-basket"]], viewQuery: function BasketComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.divMap = _t.first);
    } }, decls: 107, vars: 11, consts: [[2, "background-color", "white", "padding", "80px 5%"], [1, "row"], [1, "col-lg-12", "col-lg-push-6", "col-my-lt-12"], [1, "payItems", "smallSlideLeft", "animationDelay-1"], [1, "table"], [1, "tr", "thead"], [1, "tr", "d-flex"], [1, "td"], [1, "tr", "tbody"], ["class", "tr productOrder", 4, "ngFor", "ngForOf"], [1, "tr", "tfoot"], [1, "fullPrice", "cart-total"], [1, "subFullPrice", 2, "display", "none"], [1, "totalFullPrice", 2, "display", "block"], [1, "btnWrapper", "txtRight", "fadeInTop", "mt-3"], [1, "emptySpace40", "emptySpace-xs20"], [1, "payCheckboxs", "text-left"], [1, "emptySpace40"], [1, "emptySpace-lt60", "emptySpace-md45", "emptySpace-xs25"], [1, "col-lg-12", "col-lg-pull-6", "col-my-lt-12", "paySelect"], [1, "emptySpace30"], [1, "payForm", "smallSlideRight"], ["id", "make-order-form"], ["type", "hidden", "name", "payment_type", "value", "cash"], [1, "emptySpace20", "emptySpace-xs15"], [1, "inputWrapper"], ["name", "userName", "type", "text", "value", "", "maxlength", "60", 1, "simpleInput", "name", 3, "ngModel", "keyup", "ngModelChange"], [1, "firstBorderElement"], [1, "secondBorderElement"], [1, "emptySpace10"], ["name", "userPhone", "type", "text", 1, "simpleInput", 3, "ngModel", "keyup", "ngModelChange"], [1, "form-group"], ["for", "my-select"], ["id", "my-select", "name", "NPDepartament", 1, "form-control", 2, "border", "1px solid black", 3, "ngModel", "ngModelChange", "change"], ["selected", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["id", "map", 1, "full"], ["map", ""], ["name", "userCity", "type", "text", 1, "simpleInput", 3, "ngModel", "keyup", "ngModelChange"], ["name", "userStreet", "type", "text", 1, "simpleInput", 3, "ngModel", "keyup", "ngModelChange"], ["name", "userHouse", "type", "text", 1, "simpleInput", 3, "ngModel", "keyup", "ngModelChange"], [1, "textarea"], ["name", "userComment", "id", "", "maxlength", "256", "cols", "30", "rows", "10", 1, "simpleInput", 3, "ngModel", "ngModelChange"], ["type", "submit", 2, "display", "none"], [1, "btnWrapper", "text-center", "mb-3"], ["type", "button", 1, "btn", "btn-dark", "btn-block", 3, "disabled", "click"], [1, "tr", "productOrder"], [1, "delateProduct", "remove-cart-product-popup", "open-popup", 3, "click"], [1, "smallProduct"], ["alt", "", 1, "imgWrapper", 3, "src"], [1, "smallProductInfo"], [1, "h6", "as"], [1, "singleItemPrice"], [4, "ngIf"], [1, "productCountWrapper"], [1, "productCount", "lessProduct", 3, "click"], ["maxlength", "3", "type", "text", 1, "product-qty", 3, "value"], [1, "productCount", "moreProduct", "update-cart-product", 3, "click"], [1, "itemPrice", "productPrice"], [1, "tableMobTitle"], ["style", "color:lime", 4, "ngIf"], [2, "color", "lime"], [3, "value"]], template: function BasketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u0422\u043E\u0432\u0430\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u0426\u0456\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u0417\u0430\u0433\u0430\u043B\u043E\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, BasketComponent_div_17_Template, 30, 8, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "299");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "\u0433\u0440\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "\u0417\u0430\u0433\u0430\u043B\u043E\u043C:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "\u0433\u0440\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "form", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function BasketComponent_Template_input_keyup_48_listener() { return ctx.fieldsTest(); })("ngModelChange", function BasketComponent_Template_input_ngModelChange_48_listener($event) { return ctx.userName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function BasketComponent_Template_input_keyup_56_listener() { return ctx.fieldsTest(); })("ngModelChange", function BasketComponent_Template_input_ngModelChange_56_listener($event) { return ctx.userPhone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Nova Poshta");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "select", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BasketComponent_Template_select_ngModelChange_63_listener($event) { return ctx.NPDepartament = $event; })("change", function BasketComponent_Template_select_change_63_listener() { ctx.getDepartament(); return ctx.fieldsTest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Choose departament");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, BasketComponent_option_67_Template, 2, 2, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "div", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function BasketComponent_Template_input_keyup_74_listener() { return ctx.fieldsTest(); })("ngModelChange", function BasketComponent_Template_input_ngModelChange_74_listener($event) { return ctx.userCity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Street");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function BasketComponent_Template_input_keyup_82_listener() { return ctx.fieldsTest(); })("ngModelChange", function BasketComponent_Template_input_ngModelChange_82_listener($event) { return ctx.userStreet = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function BasketComponent_Template_input_keyup_90_listener() { return ctx.fieldsTest(); })("ngModelChange", function BasketComponent_Template_input_ngModelChange_90_listener($event) { return ctx.userHouse = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "textarea", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BasketComponent_Template_textarea_ngModelChange_98_listener($event) { return ctx.userComment = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](100, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](102, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](103, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BasketComponent_Template_button_click_105_listener() { return ctx.addOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "Create order");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.orders);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.totalPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.NPDepartament);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.NPListDepartamets);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userCity);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userStreet);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userHouse);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userComment);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isFieldsEmpty);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".payItems[_ngcontent-%COMP%] {\n  border: 1px solid #e6e6e6;\n  padding: 0 20px;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-family: \"Comfortaa\";\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .thead[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 20px;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .thead[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%] {\n  font-weight: 600;\n  padding: 24px 15px;\n  width: 14.3333%;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .thead[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%]:first-child {\n  padding: 0;\n  width: 4%;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .thead[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%]:last-child {\n  padding-right: 20px;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tfoot[_ngcontent-%COMP%] {\n  font-size: 16px;\n  text-align: right;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tfoot[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%] {\n  border-bottom: 0;\n  float: right;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tfoot[_ngcontent-%COMP%]   .fullPrice[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 28px;\n  font-weight: 600;\n  padding: 30px 20px;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tfoot[_ngcontent-%COMP%]   .fullPrice[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-right: 5px;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tfoot[_ngcontent-%COMP%]   .fullPrice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tfoot[_ngcontent-%COMP%]   .fullPrice[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #c80000;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%] {\n  padding: 20px 15px;\n  height: 120px;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%]:first-child {\n  padding: 0;\n  width: 1%;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%]:nth-child(2) {\n  padding-left: 0;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e6e6e6;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%]:nth-child(2) {\n  width: 60% !important;\n  padding-left: 0;\n}\n\n.payItems[_ngcontent-%COMP%]   .singleItemPrice[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.payItems[_ngcontent-%COMP%]   .singleItemPrice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 3px;\n}\n\n.payItems[_ngcontent-%COMP%]   .itemPrice[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #000;\n}\n\n.payItems[_ngcontent-%COMP%]   .itemPrice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 3px;\n}\n\n.smallProduct[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 13px;\n  line-height: 18px;\n  font-family: \"Roboto\";\n}\n\n.smallProduct[_ngcontent-%COMP%]   .as[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.smallProduct[_ngcontent-%COMP%]   .as[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: color 0.25s linear;\n}\n\n.smallProduct[_ngcontent-%COMP%]   .imgWrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 90px;\n  height: 90px;\n  margin-top: -45px;\n  margin-left: 5px;\n  display: block;\n  background-size: cover;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  transition: opacity 0.25s linear;\n}\n\n.smallProduct[_ngcontent-%COMP%]   .smallProductInfo[_ngcontent-%COMP%] {\n  padding-left: 110px;\n}\n\n.delateProduct[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  position: relative;\n  cursor: pointer;\n}\n\n.delateProduct[_ngcontent-%COMP%]:before, .delateProduct[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 15px;\n  height: 2px;\n  margin-left: -7px;\n  background: #c80000;\n  transform: rotate(-45deg);\n  transition: background 0.25s linear;\n  content: \"\";\n}\n\n.delateProduct[_ngcontent-%COMP%]:after {\n  transform: rotate(45deg);\n}\n\n.table[_ngcontent-%COMP%] {\n  display: table;\n}\n\n.table[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%] {\n  display: table-row;\n}\n\n.table[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%] {\n  display: table-cell;\n}\n\n.tableMobTitle[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.emptyBasker[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.emptyBas[_ngcontent-%COMP%]   .payItems[_ngcontent-%COMP%] {\n  padding: 0;\n  display: none;\n}\n\n.emptyBas[_ngcontent-%COMP%]   .tablem[_ngcontent-%COMP%], .emptyBas[_ngcontent-%COMP%]   .paySelect[_ngcontent-%COMP%], .emptyBas[_ngcontent-%COMP%]   .btnWrapper[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.emptyBas[_ngcontent-%COMP%]   .emptyBasker[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n  padding: 15px;\n  font-size: 24px;\n  line-height: 30px;\n  font-weight: 600;\n  font-family: \"Comfortaa\";\n}\n\n.emptyBas[_ngcontent-%COMP%]   .emptyBasker[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #c80000;\n}\n\n.deliveryWarning[_ngcontent-%COMP%]   .errorMsg[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n  color: rgba(212, 0, 0, 0.6);\n  border: 1px solid rgba(212, 0, 0, 0.3);\n  padding: 15px;\n  margin-top: 15px;\n  display: none;\n}\n\n.deliveryWarning[_ngcontent-%COMP%]   .errorMsg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 15px;\n  width: 24px;\n  height: 24px;\n  display: block;\n  margin-top: -12px;\n}\n\n.deliveryWarning[_ngcontent-%COMP%]   .errorMsg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-left: 35px;\n}\n\n.invalidMsg[_ngcontent-%COMP%] {\n  padding: 5px 0 10px;\n  color: rgba(212, 0, 0, 0.6);\n  display: none;\n}\n\n.orderDiscount[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 28px;\n  font-weight: 600;\n  padding: 30px 20px;\n  display: inline-block;\n  vertical-align: bottom;\n}\n\n.orderDiscount[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-right: 5px;\n}\n\n.orderDiscount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .orderDiscount[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #c80000;\n}\n\n\n\nlabel[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  \n}\n\nlabel[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1px;\n  height: 0;\n  background: #0e0e0e;\n  z-index: 2;\n  content: \"\";\n  transition: height 300ms linear;\n}\n\nlabel[_ngcontent-%COMP%]:after {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 1px;\n  height: 0;\n  background: #0e0e0e;\n  transition: height 300ms linear;\n  z-index: 2;\n  content: \"\";\n}\n\nlabel[_ngcontent-%COMP%]   .firstBorderElement[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 0;\n  height: 1px;\n  background: #0e0e0e;\n  transition: width 375ms linear;\n  z-index: 2;\n  content: \"\";\n}\n\nlabel[_ngcontent-%COMP%]   .firstBorderElement[_ngcontent-%COMP%]:after {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  width: 0;\n  height: 1px;\n  background: #0e0e0e;\n  transition: width 375ms linear;\n  z-index: 2;\n  content: \"\";\n}\n\nlabel[_ngcontent-%COMP%]   .secondBorderElement[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 0;\n  right: 50%;\n  width: 0;\n  height: 1px;\n  background: #0e0e0e;\n  transition: width 375ms linear;\n  z-index: 2;\n  content: \"\";\n}\n\nlabel[_ngcontent-%COMP%]   .secondBorderElement[_ngcontent-%COMP%]:after {\n  position: absolute;\n  bottom: 0;\n  right: 50%;\n  width: 0;\n  height: 1px;\n  background: #0e0e0e;\n  transition: width 375ms linear;\n  z-index: 2;\n  content: \"\";\n}\n\nlabel.active[_ngcontent-%COMP%]:before, label.active[_ngcontent-%COMP%]:after {\n  height: 100%;\n}\n\nlabel.active[_ngcontent-%COMP%]   .firstBorderElement[_ngcontent-%COMP%]:before, label.active[_ngcontent-%COMP%]   .firstBorderElement[_ngcontent-%COMP%]:after, label.active[_ngcontent-%COMP%]   .secondBorderElement[_ngcontent-%COMP%]:before, label.active[_ngcontent-%COMP%]   .secondBorderElement[_ngcontent-%COMP%]:after {\n  width: 50%;\n}\n\nlabel.light[_ngcontent-%COMP%]   .simpleInput[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.5);\n  color: #fff;\n}\n\nlabel.light[_ngcontent-%COMP%]:before, label.light[_ngcontent-%COMP%]:after {\n  background: #fff;\n}\n\nlabel.light[_ngcontent-%COMP%]   .firstBorderElement[_ngcontent-%COMP%]:before, label.light[_ngcontent-%COMP%]   .firstBorderElement[_ngcontent-%COMP%]:after, label.light[_ngcontent-%COMP%]   .secondBorderElement[_ngcontent-%COMP%]:before, label.light[_ngcontent-%COMP%]   .secondBorderElement[_ngcontent-%COMP%]:after {\n  background: #fff;\n}\n\n.inputWrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.inputWrapper.searchInput[_ngcontent-%COMP%]   .simpleInput[_ngcontent-%COMP%] {\n  padding-right: 50px;\n}\n\n.inputWrapper.searchInput[_ngcontent-%COMP%]   .imgWrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 50px;\n  height: 50px;\n}\n\n.inputWrapper.searchInput[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  display: block;\n  margin: 15px auto;\n}\n\n.simpleInput[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 48px;\n  padding: 0 15px;\n  color: #0e0e0e;\n  height: 50px;\n  width: 100%;\n  border: 1px #e6e6e6 solid;\n  transition: all 200ms linear;\n  font-family: \"Roboto\";\n}\n\n.simpleInput.invalid[_ngcontent-%COMP%] {\n  z-index: 4;\n  border-color: #f11e1e !important;\n}\n\ntextarea.simpleInput[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  line-height: 22px;\n  height: 140px;\n}\n\ntextarea.simpleInput.small[_ngcontent-%COMP%] {\n  height: 80px;\n}\n\ninput[_ngcontent-%COMP%]::-webkit-input-placeholder, textarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.6);\n  opacity: 1;\n}\n\ninput[_ngcontent-%COMP%]:-moz-placeholder, textarea[_ngcontent-%COMP%]:-moz-placeholder {\n  color: rgba(0, 0, 0, 0.6);\n  opacity: 1;\n}\n\ninput[_ngcontent-%COMP%]::-moz-placeholder, textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  color: rgba(0, 0, 0, 0.6);\n  opacity: 1;\n}\n\ninput[_ngcontent-%COMP%]:-ms-input-placeholder, textarea[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.6);\n  opacity: 1;\n}\n\ninput[_ngcontent-%COMP%]::-webkit-input-placeholder, textarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #0e0e0e;\n  opacity: 1;\n}\n\ninput[_ngcontent-%COMP%]:-moz-placeholder, textarea[_ngcontent-%COMP%]:-moz-placeholder {\n  color: #0e0e0e;\n  opacity: 1;\n}\n\ninput[_ngcontent-%COMP%]::-moz-placeholder, textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #0e0e0e;\n  opacity: 1;\n}\n\ninput[_ngcontent-%COMP%]:-ms-input-placeholder, textarea[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #0e0e0e;\n  opacity: 1;\n}\n\nlabel.light[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder, label.light[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.8);\n  opacity: 1;\n}\n\nlabel.light[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-moz-placeholder, label.light[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:-moz-placeholder {\n  color: rgba(255, 255, 255, 0.8);\n  opacity: 1;\n}\n\nlabel.light[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder, label.light[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  color: rgba(255, 255, 255, 0.8);\n  opacity: 1;\n}\n\nlabel.light[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder, label.light[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.8);\n  opacity: 1;\n}\n\n\n\n\n\n.checkboxEntry[_ngcontent-%COMP%] {\n  display: inline-block;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n  min-width: 20px;\n  min-height: 20px;\n}\n\n.checkboxEntry.light[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.checkboxEntry[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.checkboxEntry[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%]:before {\n  background-position: center center;\n}\n\n.checkboxEntry[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%]:after {\n  transform: scale(1);\n  opacity: 1;\n}\n\n.checkboxEntry[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 18px;\n  line-height: 22px;\n  padding-left: 22px;\n  display: block;\n  font-family: \"Comfortaa\";\n  font-weight: 600;\n}\n\n.checkboxEntry[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 4px;\n  left: 0;\n  width: 12px;\n  height: 12px;\n  border: 2px #f7c200 solid;\n  border-radius: 1px;\n  z-index: 1;\n  content: \"\";\n}\n\n.checkboxEntry[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 4px;\n  left: 0;\n  width: 12px;\n  height: 12px;\n  background: #f7c200;\n  transform: scale(0.05);\n  opacity: 1;\n  transition: opacity 0.45s linear, transform 0.45s linear;\n  content: \"\";\n}\n\n.checkboxEntry.radio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before {\n  border-radius: 10px;\n  background: none;\n}\n\n.checkboxEntry.radio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  border-radius: 100%;\n}\n\n\n\n\n\n.sumoWrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.SelectBox[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 15px;\n}\n\n.SumoSelect[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #333;\n  width: 100%;\n}\n\n.SumoSelect[_ngcontent-%COMP%]:before, .SumoSelect[_ngcontent-%COMP%]:after {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  width: 0;\n  height: 1px;\n  background: #0e0e0e;\n  z-index: 2;\n  transition: width 375ms linear;\n  content: \"\";\n}\n\n.SumoSelect[_ngcontent-%COMP%]:after {\n  left: auto;\n  right: 50%;\n}\n\n.SumoSelect[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%] {\n  border: 1px solid #e6e6e6;\n}\n\n.SumoSelect[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]:before, .SumoSelect[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 0;\n  height: 1px;\n  background: #0e0e0e;\n  z-index: 2;\n  transition: width 375ms linear;\n  content: \"\";\n}\n\n.SumoSelect[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]:after {\n  left: auto;\n  right: 50%;\n}\n\n.SumoSelect[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:before, .SumoSelect[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1px;\n  height: 0%;\n  background: #0e0e0e;\n  z-index: 2;\n  transition: height 375ms linear;\n  content: \"\";\n}\n\n.SumoSelect[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:after {\n  top: auto;\n  left: auto;\n  right: 0;\n  bottom: 0;\n}\n\n.SumoSelect[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .SumoSelect[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.SumoSelect[_ngcontent-%COMP%]   .optWrapper[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n\n.SumoSelect[_ngcontent-%COMP%]   .optWrapper[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n\n.SumoSelect[_ngcontent-%COMP%]   .optWrapper[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   li.opt[_ngcontent-%COMP%] {\n  padding: 0;\n  border-bottom: 1px solid #e6e6e6;\n  transition: background 100ms linear;\n}\n\n.SumoSelect[_ngcontent-%COMP%]   .optWrapper[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   li.opt[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n}\n\n.SumoSelect[_ngcontent-%COMP%]   .optWrapper[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   li.opt[_ngcontent-%COMP%]:first-child, .SumoSelect[_ngcontent-%COMP%]   .optWrapper[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   li.opt[_ngcontent-%COMP%]:last-child {\n  border-radius: 0;\n}\n\n.SumoSelect.open[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:before, .SumoSelect.open[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:after {\n  height: 100%;\n}\n\n.SumoSelect.open[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]:before, .SumoSelect.open[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]:after {\n  width: 50%;\n}\n\n.SumoSelect.open[_ngcontent-%COMP%]:before, .SumoSelect.open[_ngcontent-%COMP%]:after {\n  width: 50%;\n}\n\n.SumoSelect.open[_ngcontent-%COMP%]    > .optWrapper[_ngcontent-%COMP%] {\n  top: 50px;\n}\n\n.productCountWrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  padding: 0 24px;\n}\n\n.productCount[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transform: translateY(-50%);\n}\n\n.productCount.lessProduct[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 10px;\n  height: 2px;\n  margin-top: -1px;\n  margin-left: -5px;\n  background: #c80000;\n  transition: background 0.25s linear;\n  content: \"\";\n}\n\n.productCountWrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0 5px;\n}\n\n.productCountWrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  line-height: 38px;\n  font-weight: 500;\n  padding: 0 6px;\n  font-family: \"Roboto\";\n  border: 1px solid #eaeaea;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  font-weight: 400;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 0;\n  background: none;\n  border: none;\n  margin: 0;\n  width: 100%;\n  font-family: \"Arial\";\n}\n\n.productCount.moreProduct[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0;\n}\n\n.productCount.moreProduct[_ngcontent-%COMP%]:before, .productCount.moreProduct[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 10px;\n  height: 2px;\n  margin-top: -1px;\n  margin-left: -5px;\n  background: #c80000;\n  transition: background 0.25s linear;\n  content: \"\";\n}\n\n.productCount.moreProduct[_ngcontent-%COMP%]:after {\n  transform: rotate(-90deg);\n}\n\n.productCount.moreProduct[_ngcontent-%COMP%]:before, .productCount.moreProduct[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 10px;\n  height: 2px;\n  margin-top: -1px;\n  margin-left: -5px;\n  background: #c80000;\n  transition: background 0.25s linear;\n  content: \"\";\n}\n\n#map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n}\n\n.full[_ngcontent-%COMP%] {\n  width: 600px;\n  height: 600px;\n}\n\n@media (max-width: 650px) {\n  section[_ngcontent-%COMP%]   .full[_ngcontent-%COMP%] {\n    width: 400px;\n    height: 400px;\n  }\n}\n\n.loginForm[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: 0 auto;\n  background-color: white;\n  padding: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxiYXNrZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFOztFQUVFLGNBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVFO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7QUFDSjs7QUFFRTtFQUNFLGdDQUFBO0FBQ0o7O0FBRUU7RUFDRSxzQkFBQTtBQUNKOztBQUVFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0FBQ0o7O0FBRUU7RUFDRSxpQkFBQTtBQUNKOztBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUU7RUFDRSxpQkFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBR0UsOEJBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBRUEsc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBR0EsZ0NBQUE7QUFDSjs7QUFFRTtFQUNFLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVFOztFQUVFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFHQSx5QkFBQTtFQUdBLG1DQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVFO0VBR0Usd0JBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtBQUNKOztBQUVFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFRTs7O0VBR0UsYUFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTs7RUFFRSxjQUFBO0FBQ0o7O0FBRUUsU0FBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFHQSwrQkFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFHQSwrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUdBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBR0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFHQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUdBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7QUFDSjs7QUFFRTs7O0VBR0UsVUFBQTtBQUNKOztBQUVFO0VBQ0Usc0NBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQkFBQTtBQUNKOztBQUVFOzs7RUFHRSxnQkFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7QUFDSjs7QUFFRTtFQUNFLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFHQSw0QkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUU7RUFDRSxVQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFFRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7QUFDSjs7QUFFRTs7RUFFRSx5QkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFRTs7RUFFRSx5QkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFRTs7RUFFRSx5QkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFRTs7RUFFRSx5QkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFRTs7RUFFRSxjQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVFOztFQUVFLGNBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUU7O0VBRUUsY0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFFRTs7RUFFRSxjQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVFOztFQUVFLCtCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVFOztFQUVFLCtCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVFOztFQUVFLCtCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVFOztFQUVFLCtCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUNFLFdBQUE7O0FBRUEsaUJBQUE7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtBQUNKOztBQUVFO0VBQ0Usa0NBQUE7QUFDSjs7QUFFRTtFQUdVLG1CQUFBO0VBQ1IsVUFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUVRLGtCQUFBO0VBRVIsVUFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBR1Esc0JBQUE7RUFDUixVQUFBO0VBSUEsd0RBQUE7RUFFQSxXQUFBO0FBQUo7O0FBR0U7RUFFVSxtQkFBQTtFQUNSLGdCQUFBO0FBQUo7O0FBR0U7RUFFVSxtQkFBQTtBQUFaOztBQUVFLGFBQUE7O0FBRUEsYUFBQTs7QUFDQTtFQUNFLGtCQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFHQSw4QkFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHRTtFQUNFLFVBQUE7RUFDQSxVQUFBO0FBQUo7O0FBR0U7RUFDRSx5QkFBQTtBQUFKOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBR0EsOEJBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0U7RUFDRSxVQUFBO0VBQ0EsVUFBQTtBQUFKOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBR0EsK0JBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0U7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0FBQUo7O0FBR0U7RUFFVSxnQkFBQTtBQUFaOztBQUdFO0VBRVUsZ0JBQUE7QUFBWjs7QUFHRTtFQUNFLFVBQUE7RUFDQSxnQ0FBQTtFQUdBLG1DQUFBO0FBQUo7O0FBR0U7RUFDRSxrQkFBQTtBQUFKOztBQUdFO0VBRVUsZ0JBQUE7QUFBWjs7QUFHRTtFQUNFLFlBQUE7QUFBSjs7QUFHRTtFQUNFLFVBQUE7QUFBSjs7QUFHRTtFQUNFLFVBQUE7QUFBSjs7QUFHRTtFQUNFLFNBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUdBLGlCQUFBO0VBR0EsMkJBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUdBLG1DQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUdFO0VBQ0UsY0FBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFHRTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBQUo7O0FBR0U7RUFDRSxVQUFBO0VBQ0EsUUFBQTtBQUFKOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBR0EsbUNBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0U7RUFHRSx5QkFBQTtBQUFKOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBR0EsbUNBQUE7RUFDQSxXQUFBO0FBQUo7O0FBU0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQU5KOztBQVNFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFOSjs7QUFVRTtFQUVJO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUFSTjtBQUNGOztBQWNBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFaSiIsImZpbGUiOiJiYXNrZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGF5SXRlbXMge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnBheUl0ZW1zIC50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBmb250LWZhbWlseTogXCJDb21mb3J0YWFcIjtcclxuICB9XHJcbiAgXHJcbiAgLnBheUl0ZW1zIC50YWJsZSAudGhlYWQge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXlJdGVtcyAudGFibGUgLnRoZWFkIC50ZCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcGFkZGluZzogMjRweCAxNXB4O1xyXG4gICAgd2lkdGg6IDE0LjMzMzMlO1xyXG4gIH1cclxuICBcclxuICAucGF5SXRlbXMgLnRhYmxlIC50aGVhZCAudGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiA0JTtcclxuICB9XHJcbiAgXHJcbiAgLnBheUl0ZW1zIC50YWJsZSAudGhlYWQgLnRkOmxhc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnBheUl0ZW1zIC50YWJsZSAudGZvb3Qge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXlJdGVtcyAudGFibGUgLnRmb290IC50ciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAucGF5SXRlbXMgLnRhYmxlIC50Zm9vdCAuZnVsbFByaWNlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXlJdGVtcyAudGFibGUgLnRmb290IC5mdWxsUHJpY2UgcCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXlJdGVtcyAudGFibGUgLnRmb290IC5mdWxsUHJpY2Ugc3BhbixcclxuICAucGF5SXRlbXMgLnRhYmxlIC50Zm9vdCAuZnVsbFByaWNlIGkge1xyXG4gICAgY29sb3I6ICNjODAwMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXlJdGVtcyAudGFibGUgLnRib2R5IC50ZCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gIH1cclxuICBcclxuICAucGF5SXRlbXMgLnRhYmxlIC50Ym9keSAudGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAxJTtcclxuICB9XHJcbiAgXHJcbiAgLnBheUl0ZW1zIC50YWJsZSAudGJvZHkgLnRkOm50aC1jaGlsZCgyKSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXlJdGVtcyAudGFibGUgLnRyIC50ciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U2ZTZlNjtcclxuICB9XHJcbiAgXHJcbiAgLnBheUl0ZW1zIC50YWJsZSAudGQge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbiAgXHJcbiAgLnBheUl0ZW1zIC50YWJsZSAudGQ6bnRoLWNoaWxkKDIpIHtcclxuICAgIHdpZHRoOiA2MCUhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIH1cclxuICBcclxuICAucGF5SXRlbXMgLnNpbmdsZUl0ZW1QcmljZSB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcbiAgXHJcbiAgLnBheUl0ZW1zIC5zaW5nbGVJdGVtUHJpY2Ugc3BhbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICB9XHJcbiAgXHJcbiAgLnBheUl0ZW1zIC5pdGVtUHJpY2Uge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxuICBcclxuICAucGF5SXRlbXMgLml0ZW1QcmljZSBzcGFuIHtcclxuICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gIH1cclxuICBcclxuICAuc21hbGxQcm9kdWN0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbWFsbFByb2R1Y3QgLmFzIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLnNtYWxsUHJvZHVjdCAuYXMgYSB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIC4yNTBzIGxpbmVhcjtcclxuICAgIC1vLXRyYW5zaXRpb246IGNvbG9yIC4yNTBzIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIC4yNTBzIGxpbmVhcjtcclxuICB9XHJcbiAgXHJcbiAgLnNtYWxsUHJvZHVjdCAuaW1nV3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIG1hcmdpbi10b3A6IC00NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC4yNTBzIGxpbmVhcjtcclxuICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgLjI1MHMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMjUwcyBsaW5lYXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbWFsbFByb2R1Y3QgLnNtYWxsUHJvZHVjdEluZm8ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmRlbGF0ZVByb2R1Y3Qge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5kZWxhdGVQcm9kdWN0OmJlZm9yZSxcclxuICAuZGVsYXRlUHJvZHVjdDphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTdweDtcclxuICAgIGJhY2tncm91bmQ6ICNjODAwMDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgLjI1MHMgbGluZWFyO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMjUwcyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4yNTBzIGxpbmVhcjtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gIH1cclxuICBcclxuICAuZGVsYXRlUHJvZHVjdDphZnRlciB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJsZSB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlIC50ciB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJsZSAudGQge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlTW9iVGl0bGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmVtcHR5QmFza2VyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5lbXB0eUJhcyAucGF5SXRlbXMge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5lbXB0eUJhcyAudGFibGVtLFxyXG4gIC5lbXB0eUJhcyAucGF5U2VsZWN0LFxyXG4gIC5lbXB0eUJhcyAuYnRuV3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAuZW1wdHlCYXMgLmVtcHR5QmFza2VyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbWZvcnRhYVwiO1xyXG4gIH1cclxuICBcclxuICAuZW1wdHlCYXMgLmVtcHR5QmFza2VyIGEge1xyXG4gICAgY29sb3I6ICNjODAwMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5kZWxpdmVyeVdhcm5pbmcgLmVycm9yTXNnIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiByZ2JhKDIxMiwgMCwgMCwgMC42KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjEyLCAwLCAwLCAwLjMpO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAuZGVsaXZlcnlXYXJuaW5nIC5lcnJvck1zZyBpbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IC0xMnB4O1xyXG4gIH1cclxuICBcclxuICAuZGVsaXZlcnlXYXJuaW5nIC5lcnJvck1zZyBwIHtcclxuICAgIHBhZGRpbmctbGVmdDogMzVweDtcclxuICB9XHJcbiAgXHJcbiAgLmludmFsaWRNc2cge1xyXG4gICAgcGFkZGluZzogNXB4IDAgMTBweDtcclxuICAgIGNvbG9yOiByZ2JhKDIxMiwgMCwgMCwgMC42KTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5vcmRlckRpc2NvdW50IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgfVxyXG4gIFxyXG4gIC5vcmRlckRpc2NvdW50IHAge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gIH1cclxuICBcclxuICAub3JkZXJEaXNjb3VudCBzcGFuLFxyXG4gIC5vcmRlckRpc2NvdW50IGkge1xyXG4gICAgY29sb3I6ICNjODAwMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qSW5wdXRzKi9cclxuICBsYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8qTGlnaHQgaW5wdXRzKi9cclxuICB9XHJcbiAgXHJcbiAgbGFiZWw6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogIzBlMGUwZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogaGVpZ2h0IDMwMG1zIGxpbmVhcjtcclxuICAgIC1vLXRyYW5zaXRpb246IGhlaWdodCAzMDBtcyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXMgbGluZWFyO1xyXG4gIH1cclxuICBcclxuICBsYWJlbDphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGUwZTBlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXMgbGluZWFyO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogaGVpZ2h0IDMwMG1zIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IGhlaWdodCAzMDBtcyBsaW5lYXI7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsIC5maXJzdEJvcmRlckVsZW1lbnQ6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGUwZTBlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAzNzVtcyBsaW5lYXI7XHJcbiAgICAtby10cmFuc2l0aW9uOiB3aWR0aCAzNzVtcyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAzNzVtcyBsaW5lYXI7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsIC5maXJzdEJvcmRlckVsZW1lbnQ6YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQ6ICMwZTBlMGU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDM3NW1zIGxpbmVhcjtcclxuICAgIC1vLXRyYW5zaXRpb246IHdpZHRoIDM3NW1zIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDM3NW1zIGxpbmVhcjtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBjb250ZW50OiAnJztcclxuICB9XHJcbiAgXHJcbiAgbGFiZWwgLnNlY29uZEJvcmRlckVsZW1lbnQ6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiA1MCU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzBlMGUwZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMzc1bXMgbGluZWFyO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogd2lkdGggMzc1bXMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMzc1bXMgbGluZWFyO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gIH1cclxuICBcclxuICBsYWJlbCAuc2Vjb25kQm9yZGVyRWxlbWVudDphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogNTAlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQ6ICMwZTBlMGU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDM3NW1zIGxpbmVhcjtcclxuICAgIC1vLXRyYW5zaXRpb246IHdpZHRoIDM3NW1zIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDM3NW1zIGxpbmVhcjtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBjb250ZW50OiAnJztcclxuICB9XHJcbiAgXHJcbiAgbGFiZWwuYWN0aXZlOmJlZm9yZSwgbGFiZWwuYWN0aXZlOmFmdGVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgbGFiZWwuYWN0aXZlIC5maXJzdEJvcmRlckVsZW1lbnQ6YmVmb3JlLCBsYWJlbC5hY3RpdmUgLmZpcnN0Qm9yZGVyRWxlbWVudDphZnRlcixcclxuICBsYWJlbC5hY3RpdmUgLnNlY29uZEJvcmRlckVsZW1lbnQ6YmVmb3JlLFxyXG4gIGxhYmVsLmFjdGl2ZSAuc2Vjb25kQm9yZGVyRWxlbWVudDphZnRlciB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuICBcclxuICBsYWJlbC5saWdodCAuc2ltcGxlSW5wdXQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgbGFiZWwubGlnaHQ6YmVmb3JlLCBsYWJlbC5saWdodDphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICBsYWJlbC5saWdodCAuZmlyc3RCb3JkZXJFbGVtZW50OmJlZm9yZSwgbGFiZWwubGlnaHQgLmZpcnN0Qm9yZGVyRWxlbWVudDphZnRlcixcclxuICBsYWJlbC5saWdodCAuc2Vjb25kQm9yZGVyRWxlbWVudDpiZWZvcmUsXHJcbiAgbGFiZWwubGlnaHQgLnNlY29uZEJvcmRlckVsZW1lbnQ6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0V3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dFdyYXBwZXIuc2VhcmNoSW5wdXQgLnNpbXBsZUlucHV0IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dFdyYXBwZXIuc2VhcmNoSW5wdXQgLmltZ1dyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0V3JhcHBlci5zZWFyY2hJbnB1dCBpbWcge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMTVweCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuc2ltcGxlSW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICBjb2xvcjogIzBlMGUwZTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggI2U2ZTZlNiBzb2xpZDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDIwMG1zIGxpbmVhcjtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAyMDBtcyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgbGluZWFyO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaW1wbGVJbnB1dC5pbnZhbGlkIHtcclxuICAgIHotaW5kZXg6IDQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNmMTFlMWUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgdGV4dGFyZWEuc2ltcGxlSW5wdXQge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgaGVpZ2h0OiAxNDBweDtcclxuICB9XHJcbiAgXHJcbiAgdGV4dGFyZWEuc2ltcGxlSW5wdXQuc21hbGwge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcclxuICB0ZXh0YXJlYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6LW1vei1wbGFjZWhvbGRlcixcclxuICB0ZXh0YXJlYTotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDo6LW1vei1wbGFjZWhvbGRlcixcclxuICB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxyXG4gIHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsXHJcbiAgdGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICMwZTBlMGU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDotbW96LXBsYWNlaG9sZGVyLFxyXG4gIHRleHRhcmVhOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICMwZTBlMGU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDo6LW1vei1wbGFjZWhvbGRlcixcclxuICB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzBlMGUwZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcclxuICB0ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICMwZTBlMGU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICBsYWJlbC5saWdodCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcclxuICBsYWJlbC5saWdodCB0ZXh0YXJlYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgbGFiZWwubGlnaHQgaW5wdXQ6LW1vei1wbGFjZWhvbGRlcixcclxuICBsYWJlbC5saWdodCB0ZXh0YXJlYTotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICBsYWJlbC5saWdodCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlcixcclxuICBsYWJlbC5saWdodCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgbGFiZWwubGlnaHQgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxyXG4gIGxhYmVsLmxpZ2h0IHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgLyogaW5wdXRzICovXHJcbiAgXHJcbiAgLypSYWRpbyBDaGVja0JveCovXHJcbiAgLmNoZWNrYm94RW50cnkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1pbi13aWR0aDogMjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGVja2JveEVudHJ5LmxpZ2h0IHNwYW4ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGVja2JveEVudHJ5IGlucHV0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGVja2JveEVudHJ5IGlucHV0OmNoZWNrZWQgKyBzcGFuOmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuY2hlY2tib3hFbnRyeSBpbnB1dDpjaGVja2VkICsgc3BhbjphZnRlciB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICAuY2hlY2tib3hFbnRyeSBzcGFuIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogXCJDb21mb3J0YWFcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGVja2JveEVudHJ5IHNwYW46YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgYm9yZGVyOiAycHggI2Y3YzIwMCBzb2xpZDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29uLTYucG5nKSAxMDBweCBjZW50ZXIgbm8tcmVwZWF0O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGVja2JveEVudHJ5IHNwYW46YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdjMjAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMDUpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuMDUpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMDUpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuNDUwcyBsaW5lYXIsIC13ZWJraXQtdHJhbnNmb3JtIC40NTBzIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjQ1MHMgbGluZWFyLCAtd2Via2l0LXRyYW5zZm9ybSAuNDUwcyBsaW5lYXI7XHJcbiAgICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IC40NTBzIGxpbmVhciwgdHJhbnNmb3JtIC40NTBzIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjQ1MHMgbGluZWFyLCB0cmFuc2Zvcm0gLjQ1MHMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNDUwcyBsaW5lYXIsIHRyYW5zZm9ybSAuNDUwcyBsaW5lYXIsIC13ZWJraXQtdHJhbnNmb3JtIC40NTBzIGxpbmVhcjtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gIH1cclxuICBcclxuICAuY2hlY2tib3hFbnRyeS5yYWRpbyBzcGFuOmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuY2hlY2tib3hFbnRyeS5yYWRpbyBzcGFuOmFmdGVyIHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICB9XHJcbiAgLyogQ2hlY2tib3ggKi9cclxuICBcclxuICAvKlN1bW9TZWxlY3QqL1xyXG4gIC5zdW1vV3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5TZWxlY3RCb3gge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLlN1bW9TZWxlY3Qge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLlN1bW9TZWxlY3Q6YmVmb3JlLCAuU3Vtb1NlbGVjdDphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzBlMGUwZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDM3NW1zIGxpbmVhcjtcclxuICAgIC1vLXRyYW5zaXRpb246IHdpZHRoIDM3NW1zIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDM3NW1zIGxpbmVhcjtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gIH1cclxuICBcclxuICAuU3Vtb1NlbGVjdDphZnRlciB7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IDUwJTtcclxuICB9XHJcbiAgXHJcbiAgLlN1bW9TZWxlY3QgLkNhcHRpb25Db250IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgfVxyXG4gIFxyXG4gIC5TdW1vU2VsZWN0IC5DYXB0aW9uQ29udDpiZWZvcmUsIC5TdW1vU2VsZWN0IC5DYXB0aW9uQ29udDphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzBlMGUwZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDM3NW1zIGxpbmVhcjtcclxuICAgIC1vLXRyYW5zaXRpb246IHdpZHRoIDM3NW1zIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDM3NW1zIGxpbmVhcjtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gIH1cclxuICBcclxuICAuU3Vtb1NlbGVjdCAuQ2FwdGlvbkNvbnQ6YWZ0ZXIge1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHJpZ2h0OiA1MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5TdW1vU2VsZWN0IC5DYXB0aW9uQ29udCA+IHNwYW46YmVmb3JlLCAuU3Vtb1NlbGVjdCAuQ2FwdGlvbkNvbnQgPiBzcGFuOmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAwJTtcclxuICAgIGJhY2tncm91bmQ6ICMwZTBlMGU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMzc1bXMgbGluZWFyO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogaGVpZ2h0IDM3NW1zIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IGhlaWdodCAzNzVtcyBsaW5lYXI7XHJcbiAgICBjb250ZW50OiAnJztcclxuICB9XHJcbiAgXHJcbiAgLlN1bW9TZWxlY3QgLkNhcHRpb25Db250ID4gc3BhbjphZnRlciB7XHJcbiAgICB0b3A6IGF1dG87XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5TdW1vU2VsZWN0IC5DYXB0aW9uQ29udCA+IHNwYW4sIC5TdW1vU2VsZWN0IC5DYXB0aW9uQ29udCBsYWJlbCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5TdW1vU2VsZWN0IC5vcHRXcmFwcGVyIHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcbiAgXHJcbiAgLlN1bW9TZWxlY3QgLm9wdFdyYXBwZXIgLm9wdGlvbnMge1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuICBcclxuICAuU3Vtb1NlbGVjdCAub3B0V3JhcHBlciAub3B0aW9ucyBsaS5vcHQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTZlNmU2O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDEwMG1zIGxpbmVhcjtcclxuICAgIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQgMTAwbXMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAxMDBtcyBsaW5lYXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5TdW1vU2VsZWN0IC5vcHRXcmFwcGVyIC5vcHRpb25zIGxpLm9wdCBsYWJlbCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5TdW1vU2VsZWN0IC5vcHRXcmFwcGVyIC5vcHRpb25zIGxpLm9wdDpmaXJzdC1jaGlsZCwgLlN1bW9TZWxlY3QgLm9wdFdyYXBwZXIgLm9wdGlvbnMgbGkub3B0Omxhc3QtY2hpbGQge1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuICBcclxuICAuU3Vtb1NlbGVjdC5vcGVuIC5DYXB0aW9uQ29udCA+IHNwYW46YmVmb3JlLCAuU3Vtb1NlbGVjdC5vcGVuIC5DYXB0aW9uQ29udCA+IHNwYW46YWZ0ZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuU3Vtb1NlbGVjdC5vcGVuIC5DYXB0aW9uQ29udDpiZWZvcmUsIC5TdW1vU2VsZWN0Lm9wZW4gLkNhcHRpb25Db250OmFmdGVyIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5TdW1vU2VsZWN0Lm9wZW46YmVmb3JlLCAuU3Vtb1NlbGVjdC5vcGVuOmFmdGVyIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5TdW1vU2VsZWN0Lm9wZW4gPiAub3B0V3JhcHBlciB7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0Q291bnRXcmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBwYWRkaW5nOiAwIDI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0Q291bnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxuICBcclxuICAucHJvZHVjdENvdW50Lmxlc3NQcm9kdWN0OmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYzgwMDAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4yNTBzIGxpbmVhcjtcclxuICAgIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQgLjI1MHMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMjUwcyBsaW5lYXI7XHJcbiAgICBjb250ZW50OiAnJztcclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3RDb3VudFdyYXBwZXIgaW5wdXQge1xyXG4gICAgcGFkZGluZzogMCA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0Q291bnRXcmFwcGVyIGlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcGFkZGluZzogMCA2cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xyXG4gIH1cclxuICBcclxuICAucHJvZHVjdENvdW50Lm1vcmVQcm9kdWN0IHtcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3RDb3VudC5tb3JlUHJvZHVjdDpiZWZvcmUsIC5wcm9kdWN0Q291bnQubW9yZVByb2R1Y3Q6YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTFweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2M4MDAwMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMjUwcyBsaW5lYXI7XHJcbiAgICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4yNTBzIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjI1MHMgbGluZWFyO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0Q291bnQubW9yZVByb2R1Y3Q6YWZ0ZXIge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gIH1cclxuICBcclxuICAucHJvZHVjdENvdW50Lm1vcmVQcm9kdWN0OmJlZm9yZSwgLnByb2R1Y3RDb3VudC5tb3JlUHJvZHVjdDphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYzgwMDAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4yNTBzIGxpbmVhcjtcclxuICAgIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQgLjI1MHMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMjUwcyBsaW5lYXI7XHJcbiAgICBjb250ZW50OiAnJztcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIC8vIE1BUFxyXG5cclxuXHJcbiAgI21hcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfVxyXG5cclxuICAuZnVsbHtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBzZWN0aW9ue1xyXG4gICAgICAuZnVsbHtcclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHt9XHJcbiAgXHJcbi5sb2dpbkZvcm0ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map