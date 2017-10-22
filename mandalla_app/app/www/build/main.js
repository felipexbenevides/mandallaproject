webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\mandallaproject\mandalla_app\app\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mandala Project</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center>\n  <img src="assets/imgs/logo.png"/>\n        \n        <p margin>\n          O sistema agrícola mandala é uma plantação sustentável com formato de círculo. Cada anel é destinado a um determinado tipo de cultivo e um ajuda o outro a sobreviver.\n        </p>\n\n  \n  <!-- <button ion-button secondary menuToggle color="danger">Toggle Menu</button> -->\n</ion-content>\n<ion-footer text-center padding>Conheça a página do projeto <a href="https://github.com/felipexbenevides/mandallaproject"> clicando aqui!</a></ion-footer>\n'/*ion-inline-end:"D:\mandallaproject\mandalla_app\app\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__results_results__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sensors_sensors__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [
            {
                title: '/planting/crop/:crop',
                note: 'informações específicas de uma cultura',
                icon: 'ios-flower',
                type: 'planting'
            },
            {
                title: '/planting/crop',
                note: 'culturas presentes',
                icon: 'ios-flower',
                type: 'planting'
            },
            {
                title: '/planting/crop/:id/companion',
                note: 'culturas companheiras',
                icon: 'ios-flower',
                type: 'planting'
            },
            {
                title: '/planting/crop/:id/enemy',
                note: 'culturas inimigas',
                icon: 'ios-flower',
                type: 'planting'
            },
            {
                title: '/planting/crop/:id/intercropping',
                note: 'consórcio',
                icon: 'ios-flower',
                type: 'planting'
            },
            {
                title: '/sensor/water/level',
                note: 'nível de água do tanque central',
                icon: 'cog',
                type: 'sensor'
            },
            {
                title: '/sensor/water/ph',
                note: 'nível do ph da água do tanque central',
                icon: 'cog',
                type: 'sensor'
            },
            {
                title: '/sensor/soil/moisture',
                note: 'umidade do solo',
                icon: 'cog',
                type: 'sensor'
            }
        ];
        // // If we navigated to this page, we will have an item available as a nav param
        // this.selectedItem = navParams.get('item');
        // // Let's populate this page with some filler content for funzies
        // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
        // 'american-football', 'boat', 'bluetooth', 'build'];
        // this.items = [];
        // for (let i = 1; i < 11; i++) {
        //   this.items.push({
        //     title: 'Item ' + i,
        //     note: 'This is item #' + i,
        //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        //   });
        // }
    }
    ListPage.prototype.itemTapped = function (url, event, item) {
        // That's right, we're pushing to ourselves!
        switch (item.type) {
            case 'planting':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__results_results__["a" /* ResultsPage */], {
                    url: url
                });
                break;
            case 'sensor':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sensors_sensors__["a" /* SensorsPage */], {
                    url: url
                });
                break;
            default:
                break;
        }
    };
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"D:\mandallaproject\mandalla_app\app\src\pages\list\list.html"*/' <ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >API</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let item of items" (click)="itemTapped(item.title, $event, item)">\n      <ion-avatar item-start>\n        <ion-icon name="{{ item.icon }}" style="font-size:48px;"></ion-icon>\n      </ion-avatar>\n      <h2> {{item.title}}</h2>\n      <p>{{item.note}}</p>\n    </ion-item>   \n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n\n<!-- <ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content> -->\n'/*ion-inline-end:"D:\mandallaproject\mandalla_app\app\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__companion_companion__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enemy_enemy__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__intercropping_intercropping__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResultsPage = (function () {
    function ResultsPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.url = navParams.get('url');
        this.get(this.url).then(function (result) {
            _this.results = result;
        });
        ;
    }
    /**
     * get
     */
    ResultsPage.prototype.get = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.api(url).then(function (result) {
                console.log(result);
                resolve(JSON.parse(result['_body']));
            });
        });
    };
    /**
     * itemTapped
     */
    ResultsPage.prototype.itemTapped = function (page, url, name) {
        var _this = this;
        switch (page) {
            case 'companion':
                console.log('companion');
                console.warn(url);
                this.get(url).then(function (result) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__companion_companion__["a" /* CompanionPage */], { data: result, name: name });
                });
                break;
            case 'enemy':
                console.log('enemy');
                this.get(url).then(function (result) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__enemy_enemy__["a" /* EnemyPage */], { data: result, name: name });
                });
                break;
            case 'intercropping':
                console.log('intercropping');
                this.get(url).then(function (result) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__intercropping_intercropping__["a" /* IntercroppingPage */], { data: result, name: name });
                });
                break;
            default:
                console.log('default');
                break;
        }
    };
    ResultsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResultsPage');
    };
    return ResultsPage;
}());
ResultsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-results',template:/*ion-inline-start:"D:\mandallaproject\mandalla_app\app\src\pages\results\results.html"*/'<!--\n  Generated template for the ResultsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color=\'dark\'>\n    <ion-title>Culturas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-card *ngFor="let item of results; let i = index">\n  <ion-card-content>\n    <!-- <ion-card-title> -->\n    <h1>    \n    {{ item.name }}\n    </h1>\n      \n      <!-- </ion-card-title> -->\n    <label>Identificador:</label>\n    <p>\n    {{item._id}}\n    </p>\n  </ion-card-content>\n      <button ion-button clear small (click)="itemTapped(\'companion\', \'/planting/crop/\'+item._id+\'/companion\', item.name)">\n        <div>Companheiras</div>\n      </button>\n      <button ion-button  clear small (click)="itemTapped(\'enemy\', \'/planting/crop/\'+item._id+\'/enemy\', item.name)">\n        <div>Inimigas</div>\n      </button>\n      <button ion-button  clear small (click)="itemTapped(\'intercropping\',  \'/planting/crop/\'+item._id+\'/intercropping\', item.name)">\n        <div>Consórcio</div>\n      </button>\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\mandallaproject\mandalla_app\app\src\pages\results\results.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__["a" /* HttpServiceProvider */]])
], ResultsPage);

//# sourceMappingURL=results.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CompanionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CompanionPage = (function () {
    function CompanionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.name = this.navParams.get('name');
        this.data = this.navParams.get('data');
        console.log(this.data);
    }
    CompanionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompanionPage');
    };
    return CompanionPage;
}());
CompanionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-companion',template:/*ion-inline-start:"D:\mandallaproject\mandalla_app\app\src\pages\companion\companion.html"*/'<!--\n  Generated template for the CompanionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Companheiras</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n<ion-card>\n\n\n  <ion-card-content>\n    <h1>{{name}}</h1>\n    <h3>Culturas companheiras:</h3>  \n    <hr>\n    <!-- Add card content here! -->\n<p>{{data[0].companion}}</p>\n    \n  </ion-card-content>\n\n</ion-card>\n</ion-content>\n\n'/*ion-inline-end:"D:\mandallaproject\mandalla_app\app\src\pages\companion\companion.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], CompanionPage);

//# sourceMappingURL=companion.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnemyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EnemyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EnemyPage = (function () {
    function EnemyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.name = this.navParams.get('name');
        this.data = this.navParams.get('data');
    }
    EnemyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnemyPage');
    };
    return EnemyPage;
}());
EnemyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-enemy',template:/*ion-inline-start:"D:\mandallaproject\mandalla_app\app\src\pages\enemy\enemy.html"*/'<!--\n  Generated template for the EnemyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Inimigas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n\n\n    <ion-card-content>\n      <h1>{{name}}</h1>\n      <h3>Culturas inimigas:</h3>\n      <hr>\n      <!-- Add card content here! -->\n      <p>{{data[0].enemy}}</p>\n\n    </ion-card-content>\n\n  </ion-card>\n</ion-content>'/*ion-inline-end:"D:\mandallaproject\mandalla_app\app\src\pages\enemy\enemy.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], EnemyPage);

//# sourceMappingURL=enemy.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntercroppingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the IntercroppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntercroppingPage = (function () {
    function IntercroppingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.name = this.navParams.get('name');
        this.data = this.navParams.get('data');
    }
    IntercroppingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntercroppingPage');
    };
    return IntercroppingPage;
}());
IntercroppingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-intercropping',template:/*ion-inline-start:"D:\mandallaproject\mandalla_app\app\src\pages\intercropping\intercropping.html"*/'<!--\n  Generated template for the IntercroppingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Intercropping</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n  <ion-card>\n\n\n    <ion-card-content>\n      <h1>{{name}}</h1>\n      <h3>Consórcio:</h3>\n      <hr>\n\n      <!-- Add card content here! -->\n      <p>{{data[0].intercropping}}</p>\n\n    </ion-card-content>\n\n  </ion-card>\n</ion-content>'/*ion-inline-end:"D:\mandallaproject\mandalla_app\app\src\pages\intercropping\intercropping.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], IntercroppingPage);

//# sourceMappingURL=intercropping.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfigPage = (function () {
    function ConfigPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConfigPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfigPage');
    };
    return ConfigPage;
}());
ConfigPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-config',template:/*ion-inline-start:"D:\mandallaproject\mandalla_app\app\src\pages\config\config.html"*/'<!--\n  Generated template for the ConfigPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Configurações</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\mandallaproject\mandalla_app\app\src\pages\config\config.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], ConfigPage);

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlantingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PlantingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlantingPage = (function () {
    function PlantingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PlantingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlantingPage');
    };
    return PlantingPage;
}());
PlantingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-planting',template:/*ion-inline-start:"D:\mandallaproject\mandalla_app\app\src\pages\planting\planting.html"*/'<!--\n  Generated template for the PlantingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Plantação</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\mandallaproject\mandalla_app\app\src\pages\planting\planting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], PlantingPage);

//# sourceMappingURL=planting.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CirclesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__circle_render_circle_render__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CirclesPage = (function () {
    function CirclesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [
            {
                title: '/circles/life',
                note: 'circulo da qualidade de vida',
                icon: 'water',
                type: 'circle'
            },
            {
                title: '/circles/economic',
                note: 'circulo da produtividade econômica',
                icon: 'restaurant',
                type: 'circle'
            },
            {
                title: '/circles/environment',
                note: 'circulo do equilibrio ambiental',
                icon: 'flower',
                type: 'circle'
            }
        ];
        // // If we navigated to this page, we will have an item available as a nav param
        // this.selectedItem = navParams.get('item');
        // // Let's populate this page with some filler content for funzies
        // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
        // 'american-football', 'boat', 'bluetooth', 'build'];
        // this.items = [];
        // for (let i = 1; i < 11; i++) {
        //   this.items.push({
        //     title: 'Item ' + i,
        //     note: 'This is item #' + i,
        //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        //   });
        // }
    }
    CirclesPage.prototype.itemTapped = function (url, event, item) {
        // That's right, we're pushing to ourselves!
        switch (item.type) {
            case 'circle':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__circle_render_circle_render__["a" /* CircleRenderPage */], {
                    url: url
                });
                break;
            default:
                break;
        }
    };
    return CirclesPage;
}());
CirclesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-circles',template:/*ion-inline-start:"D:\mandallaproject\mandalla_app\app\src\pages\circles\circles.html"*/' <ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >Circulos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let item of items" (click)="itemTapped(item.title, $event, item)">\n      <ion-avatar item-start>\n        <ion-icon name="{{ item.icon }}" style="font-size:48px;"></ion-icon>\n      </ion-avatar>\n      <h2> {{item.title}}</h2>\n      <p>{{item.note}}</p>\n    </ion-item>   \n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n\n<!-- <ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content> -->\n'/*ion-inline-end:"D:\mandallaproject\mandalla_app\app\src\pages\circles\circles.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], CirclesPage);

//# sourceMappingURL=circles.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CircleRenderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CircleRenderPage = (function () {
    function CircleRenderPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.vermelho = '#ff8487';
        this.amarelo = '#faff91';
        this.verde = '#c9ffc6';
        this.cinza = '#dad3d5';
    }
    /**
     * modal
     */
    CircleRenderPage.prototype.modal = function (data) {
        console.log(data);
    };
    CircleRenderPage.prototype.randomScalingFactor = function () {
        return Math.round(Math.random() * 100);
    };
    CircleRenderPage.prototype.circle1 = function () {
        var _this = this;
        var ctx1 = this.myChart1.nativeElement.getContext('2d');
        var myChart1 = new Chart(ctx1, {
            type: 'doughnut',
            data: {
                labels: [
                    "A1", "A2", "A3", "A4", "A6", "A7", "A8", "A9", "A10",
                ],
                datasets: [
                    {
                        data: [
                            100, 100, 100, 100, 100, 100, 100, 100, 100, 100
                        ],
                        backgroundColor: [
                            this.vermelho
                        ],
                        label: 'circulo'
                    },
                    {
                        data: [
                            10, 10, 10, 10, 10, 10, 10, 10, 10, 10
                        ],
                        backgroundColor: [
                            this.verde
                        ],
                        label: 'circulo'
                    },
                    {
                        data: [
                            1, 1, 1, 1, 1, 1, 1, 1, 1, 1
                        ],
                        backgroundColor: [
                            this.amarelo
                        ],
                        label: 'circulo'
                    }
                ]
            },
            options: {
                tooltips: {
                    custom: function (tooltipModel) {
                        console.log(tooltipModel);
                        console.log(tooltipModel.body[0].lines[0].split(":"));
                        _this.modal(tooltipModel.body[0].lines[0].split(":"));
                    }
                },
                responsive: true,
                legend: {
                    display: false,
                },
                title: {
                    display: true,
                    text: 'QUALIDADE DE VIDA'
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });
    };
    CircleRenderPage.prototype.circle2 = function () {
        this.myChart1.nativeElement.style.display = 'none';
        var ctx2 = this.myChart2.nativeElement.getContext('2d');
        var myChart2 = new Chart(ctx2, {
            type: 'doughnut',
            data: {
                labels: [
                    "A1",
                    "A2",
                    "A3",
                    "A4",
                    "A5"
                ],
                datasets: [
                    {
                        data: [
                            100, 100, 100, 100, 100, 100, 100, 100, 100, 100
                        ],
                        backgroundColor: [
                            this.vermelho
                        ],
                        label: 'circulo'
                    },
                    {
                        data: [
                            10, 10, 10, 10, 10, 10, 10, 10, 10, 10
                        ],
                        backgroundColor: [
                            this.verde
                        ],
                        label: 'circulo'
                    },
                    {
                        data: [
                            1, 1, 1, 1, 1, 1, 1, 1, 1, 1
                        ],
                        backgroundColor: [
                            this.amarelo
                        ],
                        label: 'circulo'
                    },
                    {
                        data: [
                            1, 1, 1, 1, 1, 1, 1, 1, 1, 1
                        ],
                        backgroundColor: [
                            this.amarelo
                        ],
                        label: 'circulo'
                    },
                    {
                        data: [
                            1, 1, 1, 1, 1, 1, 1, 1, 1, 1
                        ],
                        backgroundColor: [
                            this.amarelo
                        ],
                        label: 'circulo'
                    }
                ]
            },
            options: {
                responsive: true,
                legend: {
                    display: false,
                },
                title: {
                    display: true,
                    text: 'PRODUTIVIDADE ECONÔMICA'
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });
    };
    CircleRenderPage.prototype.circle3 = function () {
        this.myChart1.nativeElement.style.display = 'none';
        this.myChart2.nativeElement.style.display = 'none';
        var ctx3 = this.myChart3.nativeElement.getContext('2d');
        var myChart3 = new Chart(ctx3, {
            type: 'doughnut',
            data: {
                labels: [
                    "A1",
                    "A2",
                    "A3",
                    "A4",
                    "A5"
                ],
                datasets: [
                    {
                        data: [
                            1, 1, 1, 1, 1, 1, 1, 1, 1, 1
                        ],
                        backgroundColor: [
                            this.amarelo
                        ],
                        label: 'circulo'
                    }
                ]
            },
            options: {
                responsive: true,
                legend: {
                    display: false,
                },
                title: {
                    display: true,
                    text: 'EQUILIBRIO AMBIENTAL'
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });
    };
    CircleRenderPage.prototype.ionViewDidLoad = function () {
        var url = this.navParams.get('url');
        switch (url) {
            case '/circles/life':
                this.circle1();
                break;
            case '/circles/economic':
                this.circle2();
                break;
            case '/circles/environment':
                this.circle3();
                break;
            default:
                break;
        }
        console.log('ionViewDidLoad PlantingPage');
    };
    return CircleRenderPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('myChart1'),
    __metadata("design:type", Object)
], CircleRenderPage.prototype, "myChart1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('myChart2'),
    __metadata("design:type", Object)
], CircleRenderPage.prototype, "myChart2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('myChart3'),
    __metadata("design:type", Object)
], CircleRenderPage.prototype, "myChart3", void 0);
CircleRenderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-circle-render',template:/*ion-inline-start:"D:\mandallaproject\mandalla_app\app\src\pages\circle-render\circle-render.html"*/'<!--\n  Generated template for the PlantingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="dark">\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Circulos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <canvas #myChart1 id="myChart1" width="400" height="400"></canvas>\n    <canvas #myChart2 id="myChart2" width="400" height="400"></canvas>    \n    <canvas #myChart3 id="myChart3" width="400" height="400"></canvas>       \n    \n</ion-content>\n'/*ion-inline-end:"D:\mandallaproject\mandalla_app\app\src\pages\circle-render\circle-render.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__["a" /* HttpServiceProvider */]])
], CircleRenderPage);

//# sourceMappingURL=circle-render.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_config_config__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_charts_charts__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_sensors_sensors__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_planting_planting__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_circle_render_circle_render__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_circles_circles__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_list_list__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_results_results__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_companion_companion__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_enemy_enemy__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_intercropping_intercropping__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_http_service_http_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_results_results__["a" /* ResultsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_companion_companion__["a" /* CompanionPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_enemy_enemy__["a" /* EnemyPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_intercropping_intercropping__["a" /* IntercroppingPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_config_config__["a" /* ConfigPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_charts_charts__["a" /* ChartsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_sensors_sensors__["a" /* SensorsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_planting_planting__["a" /* PlantingPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_circles_circles__["a" /* CirclesPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_circle_render_circle_render__["a" /* CircleRenderPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_results_results__["a" /* ResultsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_companion_companion__["a" /* CompanionPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_enemy_enemy__["a" /* EnemyPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_intercropping_intercropping__["a" /* IntercroppingPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_config_config__["a" /* ConfigPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_charts_charts__["a" /* ChartsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_sensors_sensors__["a" /* SensorsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_planting_planting__["a" /* PlantingPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_circles_circles__["a" /* CirclesPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_circle_render_circle_render__["a" /* CircleRenderPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_19__providers_http_service_http_service__["a" /* HttpServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_config_config__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sensors_sensors__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_planting_planting__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_circles_circles__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_http_service_http_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, http) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.http = http;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            {
                title: 'Projeto',
                component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                desc: 'página inicial',
                icon: 'home'
            },
            {
                title: 'Plantação',
                component: __WEBPACK_IMPORTED_MODULE_8__pages_planting_planting__["a" /* PlantingPage */],
                desc: 'plantar e colher',
                icon: 'nutrition'
            },
            {
                title: 'Sensores',
                component: __WEBPACK_IMPORTED_MODULE_7__pages_sensors_sensors__["a" /* SensorsPage */],
                desc: 'lista de sensores',
                icon: 'pulse'
            },
            {
                title: 'Circulos',
                component: __WEBPACK_IMPORTED_MODULE_9__pages_circles_circles__["a" /* CirclesPage */],
                desc: 'setores do plantio',
                icon: 'ionic'
            },
            {
                title: 'API',
                component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                desc: 'lista das APIs disponíveis',
                icon: 'cloud-circle'
            },
            {
                title: 'Configurações',
                component: __WEBPACK_IMPORTED_MODULE_6__pages_config_config__["a" /* ConfigPage */],
                desc: 'configurações básicas',
                icon: 'construct'
            }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\mandallaproject\mandalla_app\app\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="dark">\n      <ion-title>Mandala Project</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <!-- <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)"> -->\n       <!-- <ion-icon name="{{ p.icon }}"></ion-icon> {{p.title}} -->\n      <!-- </button> -->\n      <ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-avatar item-start>\n          <ion-icon name="{{ p.icon }}" style="font-size:48px;"></ion-icon>\n        </ion-avatar>\n        <h2>{{p.title}}</h2>\n        <p>{{ p.desc }}</p>\n      </ion-item>      \n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\mandallaproject\mandalla_app\app\src\app\app.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_10__providers_http_service_http_service__["a" /* HttpServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_10__providers_http_service_http_service__["a" /* HttpServiceProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChartsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChartsPage = (function () {
    function ChartsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChartsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChartsPage');
    };
    return ChartsPage;
}());
ChartsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-charts',template:/*ion-inline-start:"D:\mandallaproject\mandalla_app\app\src\pages\charts\charts.html"*/'<!--\n  Generated template for the ChartsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>charts</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\mandallaproject\mandalla_app\app\src\pages\charts\charts.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], ChartsPage);

//# sourceMappingURL=charts.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HttpServiceProvider = (function () {
    function HttpServiceProvider(http) {
        this.http = http;
        this.server = 'http://localhost';
        console.log('Hello HttpServiceProvider Provider');
    }
    /**
     * api
     */
    HttpServiceProvider.prototype.api = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log('http://localhost' + url);
            _this.http.get('http://localhost' + url).subscribe(function (res) {
                console.log(res);
                resolve(res);
            });
        });
    };
    return HttpServiceProvider;
}());
HttpServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], HttpServiceProvider);

//# sourceMappingURL=http-service.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SensorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SensorsPage = (function () {
    function SensorsPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.url = this.navParams.get('url');
        if (this.url) {
            this.sensor().then(function (result) {
                console.log(JSON.parse(result['_body']));
                _this.sensors = JSON.parse(result['_body']);
            });
        }
        else {
            this.list().then(function (result) {
                console.log(JSON.parse(result['_body']));
                _this.sensors = JSON.parse(result['_body']);
                _this.sensors = _this.sensors['sensors'];
            });
        }
    }
    /**
     * list
     */
    SensorsPage.prototype.list = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.api('/sensors').then(function (result) {
                resolve(result);
            });
        });
    };
    /**
     * sensor
     */
    SensorsPage.prototype.sensor = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.api(_this.url).then(function (result) {
                resolve(result);
            });
        });
    };
    SensorsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SensorsPage');
    };
    return SensorsPage;
}());
SensorsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sensors',template:/*ion-inline-start:"D:\mandallaproject\mandalla_app\app\src\pages\sensors\sensors.html"*/'<!--\n  Generated template for the SensorsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sensores</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card *ngFor="let item of sensors; let i = index" style="border-top: 4px solid green">\n    <ion-card-content>\n      <h1>\n        {{item[\'sensors\'][0][\'id\']}}. {{ ((item[\'sensors\'][0][\'name\']).replace("_", " ").toUpperCase()) }}\n      </h1>\n      <p>Tipo: {{item[\'sensors\'][0][\'type\']}}</p>\n      <p>Versão: {{item[\'version\']}}</p>\n      \n      <!-- <ion-card-title> -->\n      <!-- </ion-card-title> -->\n      <!-- <label>Identificador:</label> -->\n      <ion-badge color="secondary">{{ item[\'sensors\'][0][\'value\'] }}</ion-badge>\n      <!-- <code>\n        Valor: {{ item[\'sensors\'][0][\'value\'] }}\n      </code> -->\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\mandallaproject\mandalla_app\app\src\pages\sensors\sensors.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__["a" /* HttpServiceProvider */]])
], SensorsPage);

//# sourceMappingURL=sensors.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map