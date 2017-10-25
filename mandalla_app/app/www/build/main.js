webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SensorsPage = (function () {
    function SensorsPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.reads = [{ sensor: "1", reads: [{ value: "0" }] }, { sensor: "2", reads: [{ value: "0" }] }, { sensor: "3", reads: [{ value: "0" }] }];
        this.time = 500;
        this.ctx1 = null;
        console.log(this.reads);
        this.url = this.navParams.get('url');
        if (this.url) {
            this.sensor().then(function (result) {
                console.log(JSON.parse(result['_body']));
                _this.sensors = JSON.parse(result['_body']);
            });
        }
        else {
            this.plotter();
        }
    }
    SensorsPage.prototype.plotter = function () {
        var _this = this;
        setTimeout(function () {
            _this.list().then(function (result) {
                console.log(JSON.parse(result['_body']));
                _this.sensors = JSON.parse(result['_body']);
                _this.sensors = _this.sensors['sensors'];
                console.log('sasdasd', _this.sensors[0].sensors[0].value);
                (_this.reads[0].reads).push({ "value": _this.sensors[0].sensors[0].value });
                (_this.reads[1].reads).push({ "value": _this.sensors[1].sensors[0].value });
                (_this.reads[2].reads).push({ "value": _this.sensors[2].sensors[0].value });
                _this.ctx1 = _this.myChart1.nativeElement.getContext('2d');
                var myChart = new Chart(_this.ctx1, {
                    type: 'line',
                    data: {
                        labels: _this.reads[0].reads.map(function (item, index, c) { return index; }),
                        datasets: [{
                                label: _this.sensors[0].sensors[0].name,
                                data: _this.reads[0].reads.map(function (item, index, c) { return item.value; }),
                                borderWidth: 1,
                                fill: false
                            }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                        }
                    }
                });
                var ctx2 = _this.myChart2.nativeElement.getContext('2d');
                var myChart = new Chart(ctx2, {
                    type: 'line',
                    data: {
                        labels: _this.reads[1].reads.map(function (item, index, c) { return index; }),
                        datasets: [{
                                label: _this.sensors[1].sensors[0].name,
                                data: _this.reads[1].reads.map(function (item, index, c) { return item.value; }),
                                borderWidth: 1,
                                fill: false
                            }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                        }
                    }
                });
                var ctx3 = _this.myChart3.nativeElement.getContext('2d');
                var myChart = new Chart(ctx3, {
                    type: 'line',
                    data: {
                        labels: _this.reads[2].reads.map(function (item, index, c) { return index; }),
                        datasets: [{
                                label: _this.sensors[2].sensors[0].name,
                                data: _this.reads[2].reads.map(function (item, index, c) { return item.value; }),
                                borderWidth: 1,
                                fill: false
                            }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                        }
                    }
                });
            });
            console.log((_this.reads[0].reads).length);
            _this.time = ((_this.reads[0].reads).length) * 1000;
            _this.plotter();
        }, this.time);
    };
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
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('myChart1'),
    __metadata("design:type", Object)
], SensorsPage.prototype, "myChart1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('myChart2'),
    __metadata("design:type", Object)
], SensorsPage.prototype, "myChart2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('myChart3'),
    __metadata("design:type", Object)
], SensorsPage.prototype, "myChart3", void 0);
SensorsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sensors',template:/*ion-inline-start:"D:\mandallaproject\mandalla_app\app\src\pages\sensors\sensors.html"*/'<!--\n  Generated template for the SensorsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sensores</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card *ngFor="let item of sensors; let i = index" style="border-top: 4px solid green">\n    <ion-card-content>\n      <h1>\n        {{item[\'sensors\'][0][\'id\']}}. {{ ((item[\'sensors\'][0][\'name\']).replace("_", " ").toUpperCase()) }}\n      </h1>\n      <p>Tipo: {{item[\'sensors\'][0][\'type\']}}</p>\n      <p>Versão: {{item[\'version\']}}</p>\n      \n      <!-- <ion-card-title> -->\n      <!-- </ion-card-title> -->\n      <!-- <label>Identificador:</label> -->\n      <ion-badge color="secondary">{{ item[\'sensors\'][0][\'value\'] }}</ion-badge>\n      <!-- <code>\n        Valor: {{ item[\'sensors\'][0][\'value\'] }}\n      </code> -->\n    </ion-card-content>\n  </ion-card>\n  <canvas #myChart1 id="myChart1" width="400" height="400"></canvas>\n  <canvas #myChart2 id="myChart2" width="400" height="400"></canvas>\n  <canvas #myChart3 id="myChart3" width="400" height="400"></canvas>\n\n\n</ion-content>'/*ion-inline-end:"D:\mandallaproject\mandalla_app\app\src\pages\sensors\sensors.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__["a" /* HttpServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__["a" /* HttpServiceProvider */]) === "function" && _c || Object])
], SensorsPage);

var _a, _b, _c;
//# sourceMappingURL=sensors.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlantingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service_http_service__ = __webpack_require__(25);
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
    function PlantingPage(http, platform, navCtrl, navParams, qrScanner) {
        this.http = http;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qrScanner = qrScanner;
        this.planting_date = (new Date()).toISOString();
        this.planting_flag = 1;
        this.harvest_flag = 1;
        this.modify_flag = 0;
        this.itens = [
            { name: "A1-1", value: ["A1", 1], _id: "59ecc86281bcb90c643f47d5" },
            { name: "A2-1", value: ["A2", 1], _id: "59ecc86281bcb90c643f47d6" },
            { name: "A3-1", value: ["A3", 1], _id: "59ecc86281bcb90c643f47d7" },
            { name: "A4-1", value: ["A4", 1], _id: "59ecc86281bcb90c643f47d8" },
            { name: "A1-2", value: ["A1", 2], _id: "59ecc86281bcb90c643f47d9" },
            { name: "A2-2", value: ["A2", 2], _id: "59ecc86281bcb90c643f47da" },
            { name: "A3-2", value: ["A3", 2], _id: "59ecc86281bcb90c643f47db" },
            { name: "A4-2", value: ["A4", 2], _id: "59ecc86281bcb90c643f47dc" },
            { name: "A1-3", value: ["A1", 3], _id: "59ecc86281bcb90c643f47dd" },
            { name: "A2-3", value: ["A2", 3], _id: "59ecc86281bcb90c643f47de" },
            { name: "A3-3", value: ["A3", 3], _id: "59ecc86281bcb90c643f47df" },
            { name: "A4-3", value: ["A4", 3], _id: "59ecc86281bcb90c643f47e0" },
            { name: "A1-4", value: ["A1", 4], _id: "59ecc86281bcb90c643f47e1" },
            { name: "A2-4", value: ["A2", 4], _id: "59ecc86281bcb90c643f47e2" },
            { name: "A3-4", value: ["A3", 4], _id: "59ecc86281bcb90c643f47e3" },
            { name: "A4-4", value: ["A4", 4], _id: "59ecc86281bcb90c643f47e4" },
            { name: "A1-5", value: ["A1", 5], _id: "59ecc86281bcb90c643f47e5" },
            { name: "A2-5", value: ["A2", 5], _id: "59ecc86281bcb90c643f47e6" },
            { name: "A3-5", value: ["A3", 5], _id: "59ecc86281bcb90c643f47e7" },
            { name: "A4-5", value: ["A4", 5], _id: "59ecc86281bcb90c643f47e8" },
            { name: "A1-6", value: ["A1", 6], _id: "59ecc86281bcb90c643f47e9" },
            { name: "A2-6", value: ["A2", 6], _id: "59ecc86281bcb90c643f47ea" },
            { name: "A3-6", value: ["A3", 6], _id: "59ecc86281bcb90c643f47eb" },
            { name: "A4-6", value: ["A4", 6], _id: "59ecc86281bcb90c643f47ec" },
            { name: "A1-7", value: ["A1", 7], _id: "59ecc86281bcb90c643f47ed" },
            { name: "A2-7", value: ["A2", 7], _id: "59ecc86281bcb90c643f47ee" },
            { name: "A3-7", value: ["A3", 7], _id: "59ecc86281bcb90c643f47ef" },
            { name: "A4-7", value: ["A4", 7], _id: "59ecc86281bcb90c643f47f0" },
            { name: "A1-8", value: ["A1", 8], _id: "59ecc86281bcb90c643f47f1" },
            { name: "A2-8", value: ["A2", 8], _id: "59ecc86281bcb90c643f47f2" },
            { name: "A3-8", value: ["A3", 8], _id: "59ecc86281bcb90c643f47f3" },
            { name: "A4-8", value: ["A4", 8], _id: "59ecc86281bcb90c643f47f4" },
            { name: "A1-9", value: ["A1", 9], _id: "59ecf2d8377a092d34be1c81" },
            { name: "A2-9", value: ["A2", 9], _id: "59ecf2d8377a092d34be1c82" },
            { name: "A3-9", value: ["A3", 9], _id: "59ecf2d8377a092d34be1c83" },
            { name: "A4-9", value: ["A4", 9], _id: "59ecf2d8377a092d34be1c84" }
        ];
        this.itens2 = [
            { _id: "59d1397f9d8ccf4ee02752ec", name: "Abobrinha" },
            { _id: "59d1397f9d8ccf4ee02752ed", name: "Alface" },
            { _id: "59d1397f9d8ccf4ee02752ee", name: "Berinjela" },
            { _id: "59d1397f9d8ccf4ee02752ef", name: "Beterraba" },
            { _id: "59d1397f9d8ccf4ee02752f0", name: "Cebola" },
            { _id: "59d1397f9d8ccf4ee02752f1", name: "Cebolinha" },
            { _id: "59d1397f9d8ccf4ee02752f2", name: "Cenoura" },
            { _id: "59d1397f9d8ccf4ee02752f3", name: "Couve" },
            { _id: "59d1397f9d8ccf4ee02752f4", name: "Espinafre" },
            { _id: "59d1397f9d8ccf4ee02752f5", name: "Pepino" },
            { _id: "59d1397f9d8ccf4ee02752f6", name: "Pimentao" },
            { _id: "59d1397f9d8ccf4ee02752f7", name: "Quiabo" },
            { _id: "59d1397f9d8ccf4ee02752f8", name: "Rabanete" },
            { _id: "59d1397f9d8ccf4ee02752f9", name: "Repolho" },
            { _id: "59d1397f9d8ccf4ee02752fa", name: "Tomate" },
            { _id: "59d1397f9d8ccf4ee02752fb", name: "Coentro" },
            { _id: "59d1397f9d8ccf4ee02752fc", name: "Milho" },
            { _id: "59d1397f9d8ccf4ee02752fd", name: "Feijao" },
            { _id: "59d1397f9d8ccf4ee02752fe", name: "Salsa" }
        ];
        console.log(this.navParams);
        if (this.navParams.get("sector_id")) {
            this.sector_id = this.navParams.get("sector_id");
            this.modify_flag = 0;
            this.planting_flag = 0;
            this.harvest_flag = 0;
        }
        if (this.navParams.get("action")) {
            console.log('action ', this.navParams.get("action"));
            switch (this.navParams.get("action")) {
                case "0":
                    this.planting_flag = 1;
                    break;
                case "1":
                    this.harvest_flag = 1;
                    break;
                case "2":
                    this.modify_flag = 1;
                    break;
                default:
                    break;
            }
        }
        if (this.navParams.get("sector_name")) {
            this.sector_name = this.navParams.get("sector_name");
        }
        console.log(this.planting_date);
        console.log(platform);
        // Optionally request the permission early
        /*
        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
          console.log('Scanned something', text);
    
          this.qrScanner.hide(); // hide camera preview
          scanSub.unsubscribe(); // stop scanning
        });
        this.qrScanner.prepare()
          .then((status: QRScannerStatus) => {
            if (status.authorized) {
              // camera permission was granted
    
    
              // start scanning
              let scanSub = this.qrScanner.scan().subscribe((text: string) => {
                console.log('Scanned something', text);
    
                this.qrScanner.hide(); // hide camera preview
                scanSub.unsubscribe(); // stop scanning
              });
    
              // show camera preview
              this.qrScanner.show();
    
              // wait for user to scan something, then the observable callback will be called
    
            } else if (status.denied) {
              console.log('Scanned something');
              // camera permission was permanently denied
              // you must use QRScanner.openSettings() method to guide the user to the settings page
              // then they can grant the permission from there
            } else {
              console.log('Scanned something');
              // permission was denied, but not permanently. You can ask for permission again at a later time.
            }
          })
          .catch((e: any) => console.log('Error is', e));
      
      
        */
    }
    PlantingPage.prototype.modify = function () {
        var _this = this;
        console.log(this.enabled);
        console.log(this.sector_id);
        this.http.api('/sector/enabled', { sector_id: this.sector_id, enabled: this.enabled }).then(function (result) {
            console.log(result);
            _this.navCtrl.popToRoot();
        });
    };
    PlantingPage.prototype.planting = function () {
        var _this = this;
        var data = { planting_date: this.planting_date, crop_name: this.crop_name, sector_id: this.sector_id };
        this.http.api('/planting/', data).then(function (result) {
            console.log(result);
            _this.navCtrl.popToRoot();
        });
    };
    PlantingPage.prototype.harvest = function () {
        var _this = this;
        var data = { harvest_date: this.planting_date, sector_id: this.sector_id };
        this.http.api('/harvest/', data).then(function (result) {
            console.log(result);
            _this.navCtrl.popToRoot();
        });
    };
    PlantingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlantingPage');
    };
    return PlantingPage;
}());
PlantingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-planting',template:/*ion-inline-start:"D:\mandallaproject\mandalla_app\app\src\pages\planting\planting.html"*/'<!--\n  Generated template for the PlantingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Plantação</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <h3 *ngIf="sector_name">\n    Setor: {{sector_name}}\n  </h3>\n\n  <ion-item>\n    <ion-label>Date</ion-label>\n    <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="planting_date"></ion-datetime>\n  </ion-item>\n  <br>\n  <br>\n\n  <ion-list *ngIf="!sector_name">\n    <ion-item>\n      <ion-label>Setor</ion-label>\n      <ion-select [(ngModel)]="sector_id">\n        <ion-option *ngFor="let item of itens" value="{{item._id}}">{{item.name}}</ion-option>\n      </ion-select>\n\n    </ion-item>\n  </ion-list>\n\n  <ion-list *ngIf="planting_flag == 1">\n    <ion-item>\n      <ion-label>Cultura</ion-label>\n      <ion-select [(ngModel)]="crop_name">\n        <ion-option *ngFor="let item2 of itens2" value="{{item2.name}}">{{item2.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <br>\n    <br>\n    <button ion-button block (click)="planting()">Plantar</button>\n    <br>\n    <br>\n  </ion-list>\n  <br>\n  <ion-list *ngIf="!sector_name">\n    <ion-item>\n      <ion-label>Setor</ion-label>\n      <ion-select>\n        <ion-option *ngFor="let item of itens" value="{{item._id}}">{{item.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n  <ion-list *ngIf="harvest_flag == 1">\n\n    <br>\n    <br>\n    <button ion-button block (click)="harvest()">Colher</button>\n  </ion-list>\n\n  <div *ngIf="modify_flag == 1">\n    <br>\n    <br>\n    <ion-item>\n      <ion-label> Habilitado</ion-label>\n      <ion-toggle checked="false" [(ngModel)]="enabled"></ion-toggle>\n    </ion-item>\n    <br>\n    <button ion-button block (click)="modify()">Modificar</button>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\mandallaproject\mandalla_app\app\src\pages\planting\planting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */]])
], PlantingPage);

//# sourceMappingURL=planting.js.map

/***/ }),

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sensors_sensors__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__planting_planting__ = __webpack_require__(101);
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
        this.items = [
            {
                title: 'Plantação',
                component: __WEBPACK_IMPORTED_MODULE_4__planting_planting__["a" /* PlantingPage */],
                desc: 'plantar e colher',
                icon: 'nutrition'
            },
            {
                title: 'Sensores',
                component: __WEBPACK_IMPORTED_MODULE_3__sensors_sensors__["a" /* SensorsPage */],
                desc: 'lista de sensores',
                icon: 'pulse'
            },
            {
                title: 'API',
                component: __WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* ListPage */],
                desc: 'lista das APIs disponíveis',
                icon: 'cloud-circle'
            },
        ];
    }
    ConfigPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfigPage');
    };
    ConfigPage.prototype.itemTapped = function (title, event, item) {
        // That's right, we're pushing to ourselves!
        switch (title) {
            case 'API':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* ListPage */], {});
                break;
            case 'Sensores':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sensors_sensors__["a" /* SensorsPage */], {});
                break;
            case 'Plantação':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__planting_planting__["a" /* PlantingPage */], {});
                break;
            default:
                break;
        }
    };
    return ConfigPage;
}());
ConfigPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-config',template:/*ion-inline-start:"D:\mandallaproject\mandalla_app\app\src\pages\config\config.html"*/'<!--\n  Generated template for the ConfigPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Configurações</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let item of items" (click)="itemTapped(item.title, $event, item)">\n      <ion-avatar item-start>\n        <ion-icon name="{{ item.icon }}" style="font-size:48px;"></ion-icon>\n      </ion-avatar>\n      <h2> {{item.title}}</h2>\n      <p>{{item.note}}</p>\n    </ion-item>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\mandallaproject\mandalla_app\app\src\pages\config\config.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ConfigPage);

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__results_results__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sensors_sensors__ = __webpack_require__(100);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__companion_companion__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enemy_enemy__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__intercropping_intercropping__ = __webpack_require__(202);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__["a" /* HttpServiceProvider */]])
], ResultsPage);

//# sourceMappingURL=results.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CompanionPage);

//# sourceMappingURL=companion.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnemyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], EnemyPage);

//# sourceMappingURL=enemy.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntercroppingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], IntercroppingPage);

//# sourceMappingURL=intercropping.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CirclesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__circle_render_circle_render__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sector_sector__ = __webpack_require__(207);
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
            },
            {
                title: '/sector/enabled',
                note: 'habilitar ou indisponibilizar setor',
                icon: 'checkmark-circle-outline',
                type: 'sector'
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
            case 'sector':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sector_sector__["a" /* SectorPage */], {
                    url: url
                });
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CirclesPage);

//# sourceMappingURL=circles.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CircleRenderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_modal__ = __webpack_require__(206);
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
    function CircleRenderPage(modalCtrl, navCtrl, navParams, http) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.colors = [
            { name: "gray", value: '#dad3d5' },
            { name: "green", value: '#c9ffc6' },
            { name: "yellow", value: '#faff91' },
            { name: "red", value: '#ff8487' }
        ];
        this.sectors = {
            A11: { name: "A1-1", value: ["A1", 1], _id: "59ecc86281bcb90c643f47d5" },
            A21: { name: "A2-1", value: ["A2", 1], _id: "59ecc86281bcb90c643f47d6" },
            A31: { name: "A3-1", value: ["A3", 1], _id: "59ecc86281bcb90c643f47d7" },
            A41: { name: "A4-1", value: ["A4", 1], _id: "59ecc86281bcb90c643f47d8" },
            A12: { name: "A1-2", value: ["A1", 2], _id: "59ecc86281bcb90c643f47d9" },
            A22: { name: "A2-2", value: ["A2", 2], _id: "59ecc86281bcb90c643f47da" },
            A32: { name: "A3-2", value: ["A3", 2], _id: "59ecc86281bcb90c643f47db" },
            A42: { name: "A4-2", value: ["A4", 2], _id: "59ecc86281bcb90c643f47dc" },
            A13: { name: "A1-3", value: ["A1", 3], _id: "59ecc86281bcb90c643f47dd" },
            A23: { name: "A2-3", value: ["A2", 3], _id: "59ecc86281bcb90c643f47de" },
            A33: { name: "A3-3", value: ["A3", 3], _id: "59ecc86281bcb90c643f47df" },
            A43: { name: "A4-3", value: ["A4", 3], _id: "59ecc86281bcb90c643f47e0" },
            A14: { name: "A1-4", value: ["A1", 4], _id: "59ecc86281bcb90c643f47e1" },
            A24: { name: "A2-4", value: ["A2", 4], _id: "59ecc86281bcb90c643f47e2" },
            A34: { name: "A3-4", value: ["A3", 4], _id: "59ecc86281bcb90c643f47e3" },
            A44: { name: "A4-4", value: ["A4", 4], _id: "59ecc86281bcb90c643f47e4" },
            A15: { name: "A1-5", value: ["A1", 5], _id: "59ecc86281bcb90c643f47e5" },
            A25: { name: "A2-5", value: ["A2", 5], _id: "59ecc86281bcb90c643f47e6" },
            A35: { name: "A3-5", value: ["A3", 5], _id: "59ecc86281bcb90c643f47e7" },
            A45: { name: "A4-5", value: ["A4", 5], _id: "59ecc86281bcb90c643f47e8" },
            A16: { name: "A1-6", value: ["A1", 6], _id: "59ecc86281bcb90c643f47e9" },
            A26: { name: "A2-6", value: ["A2", 6], _id: "59ecc86281bcb90c643f47ea" },
            A36: { name: "A3-6", value: ["A3", 6], _id: "59ecc86281bcb90c643f47eb" },
            A46: { name: "A4-6", value: ["A4", 6], _id: "59ecc86281bcb90c643f47ec" },
            A17: { name: "A1-7", value: ["A1", 7], _id: "59ecc86281bcb90c643f47ed" },
            A27: { name: "A2-7", value: ["A2", 7], _id: "59ecc86281bcb90c643f47ee" },
            A37: { name: "A3-7", value: ["A3", 7], _id: "59ecc86281bcb90c643f47ef" },
            A47: { name: "A4-7", value: ["A4", 7], _id: "59ecc86281bcb90c643f47f0" },
            A18: { name: "A1-8", value: ["A1", 8], _id: "59ecc86281bcb90c643f47f1" },
            A28: { name: "A2-8", value: ["A2", 8], _id: "59ecc86281bcb90c643f47f2" },
            A38: { name: "A3-8", value: ["A3", 8], _id: "59ecc86281bcb90c643f47f3" },
            A48: { name: "A4-8", value: ["A4", 8], _id: "59ecc86281bcb90c643f47f4" },
            A19: { name: "A1-9", value: ["A1", 9], _id: "59ecf2d8377a092d34be1c81" },
            A29: { name: "A2-9", value: ["A2", 9], _id: "59ecf2d8377a092d34be1c82" },
            A39: { name: "A3-9", value: ["A3", 9], _id: "59ecf2d8377a092d34be1c83" },
            A49: { name: "A4-9", value: ["A4", 9], _id: "59ecf2d8377a092d34be1c84" }
        };
    }
    /**
     * modal
     */
    CircleRenderPage.prototype.modal = function (data) {
        data = (data[0] + data[1]).replace(" ", "");
        console.log(data);
        console.log(this.sectors[data]['_id']);
        var modal = this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__modal_modal__["a" /* ModalPage */], { sector_id: this.sectors[data]['_id'], sector_name: this.sectors[data]["name"] });
        // modal.present();
    };
    CircleRenderPage.prototype.randomScalingFactor = function () {
        return Math.round(Math.random() * 100);
    };
    CircleRenderPage.prototype.circle1 = function (planted) {
        var _this = this;
        var ctx1 = this.myChart1.nativeElement.getContext('2d');
        var myChart1 = new Chart(ctx1, {
            type: 'doughnut',
            data: {
                labels: [
                    "A1", "A2", "A3", "A4"
                ],
                datasets: [
                    {
                        data: [
                            3, 3, 3, 3
                        ],
                        backgroundColor: [
                            this.colors[(planted[8].status)].value,
                            this.colors[planted[9].status].value,
                            this.colors[planted[10].status].value,
                            this.colors[planted[11].status].value
                        ],
                        label: 'circulo'
                    },
                    {
                        data: [
                            2, 2, 2, 2
                        ],
                        backgroundColor: [
                            this.colors[planted[4].status].value,
                            this.colors[planted[5].status].value,
                            this.colors[planted[6].status].value,
                            this.colors[planted[7].status].value
                        ],
                        label: 'circulo'
                    },
                    {
                        data: [
                            1, 1, 1, 1
                        ],
                        backgroundColor: [
                            this.colors[planted[0].status].value,
                            this.colors[planted[1].status].value,
                            this.colors[planted[2].status].value,
                            this.colors[planted[3].status].value
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
    CircleRenderPage.prototype.circle2 = function (planted) {
        var _this = this;
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
                            8, 8, 8, 8
                        ],
                        backgroundColor: [
                            this.colors[planted[28].status].value,
                            this.colors[planted[29].status].value,
                            this.colors[planted[30].status].value,
                            this.colors[planted[31].status].value,
                        ],
                        label: 'circulo'
                    },
                    {
                        data: [
                            7, 7, 7, 7
                        ],
                        backgroundColor: [
                            this.colors[planted[24].status].value,
                            this.colors[planted[25].status].value,
                            this.colors[planted[26].status].value,
                            this.colors[planted[27].status].value,
                        ],
                        label: 'circulo'
                    },
                    {
                        data: [
                            6, 6, 6, 6
                        ],
                        backgroundColor: [
                            this.colors[planted[20].status].value,
                            this.colors[planted[21].status].value,
                            this.colors[planted[22].status].value,
                            this.colors[planted[23].status].value,
                        ],
                        label: 'circulo'
                    },
                    {
                        data: [
                            5, 5, 5, 5
                        ],
                        backgroundColor: [
                            this.colors[planted[16].status].value,
                            this.colors[planted[17].status].value,
                            this.colors[planted[18].status].value,
                            this.colors[planted[19].status].value,
                        ],
                        label: 'circulo'
                    },
                    {
                        data: [
                            4, 4, 4, 4
                        ],
                        backgroundColor: [
                            this.colors[planted[12].status].value,
                            this.colors[planted[13].status].value,
                            this.colors[planted[14].status].value,
                            this.colors[planted[15].status].value
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
                    text: 'PRODUTIVIDADE ECONÔMICA'
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });
    };
    CircleRenderPage.prototype.circle3 = function (planted) {
        var _this = this;
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
                            9, 9, 9, 9
                        ],
                        backgroundColor: [
                            this.colors[planted[32].status].value,
                            this.colors[planted[33].status].value,
                            this.colors[planted[34].status].value,
                            this.colors[planted[35].status].value,
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
        var _this = this;
        var url = this.navParams.get('url');
        this.http.api('/planting/sector/planted').then(function (result) {
            console.log(JSON.parse(result["_body"]));
            switch (url) {
                case '/circles/life':
                    _this.circle1(JSON.parse(result["_body"]));
                    break;
                case '/circles/economic':
                    _this.circle2(JSON.parse(result["_body"]));
                    break;
                case '/circles/environment':
                    _this.circle3(JSON.parse(result["_body"]));
                    break;
                default:
                    break;
            }
        });
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
        selector: 'page-circle-render',template:/*ion-inline-start:"D:\mandallaproject\mandalla_app\app\src\pages\circle-render\circle-render.html"*/'<!--\n  Generated template for the PlantingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Circulos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding text-center>\n\n  <ion-badge style="background-color:#dad3d5">indisponível</ion-badge>\n  <ion-badge style="background-color:#c9ffc6">livre</ion-badge>\n  <ion-badge style="background-color:#ff8487">ocupado</ion-badge>\n  <br>\n  <br>\n  <canvas #myChart1 id="myChart1" width="400" height="400"></canvas>\n  <canvas #myChart2 id="myChart2" width="400" height="400"></canvas>\n  <canvas #myChart3 id="myChart3" width="400" height="400"></canvas>\n\n\n  <!-- \n    { name: "gray",   value: \'#dad3d5\' },\n    { name: "green",  value: \'#c9ffc6\' },\n    { name: "yellow", value: \'#faff91\' },\n    { name: "red",    value: \'#ff8487\' }\n     -->\n</ion-content>'/*ion-inline-end:"D:\mandallaproject\mandalla_app\app\src\pages\circle-render\circle-render.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__["a" /* HttpServiceProvider */]])
], CircleRenderPage);

//# sourceMappingURL=circle-render.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__planting_planting__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service_http_service__ = __webpack_require__(25);
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
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPage = (function () {
    function ModalPage(http, navCtrl, navParams) {
        var _this = this;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = { area: null, line: null, enabled: null, sets: [{ crop: '', planting_date: null, harvest_date: null }] };
        this.sector_id = this.navParams.get("sector_id");
        this.sector_name = this.navParams.get("sector_name");
        this.http.api("/planting/sector/" + this.sector_id).then(function (result) {
            console.log(JSON.parse(result['_body'])[0]);
            _this.data = JSON.parse(result['_body'])[0];
        });
    }
    ModalPage.prototype.next = function () {
        console.log(this.action);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__planting_planting__["a" /* PlantingPage */], { sector_id: this.sector_id, sector_name: this.sector_name, action: this.action });
    };
    ModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPage');
    };
    return ModalPage;
}());
ModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modal',template:/*ion-inline-start:"D:\mandallaproject\mandalla_app\app\src\pages\modal\modal.html"*/'<!--\n  Generated template for the ModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Setor</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list radio-group [(ngModel)]="action">\n        <ion-list-header>\n          Setor {{sector_name}}\n        </ion-list-header>\n    \n        <ion-item>\n          <ion-label>Plantar</ion-label>\n          <ion-radio checked="true" value="0"></ion-radio>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label>Colher</ion-label>\n          <ion-radio value="1"></ion-radio>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label>Habilitar/Desabilitar</ion-label>\n          <ion-radio value="2"></ion-radio>\n        </ion-item>\n    \n      </ion-list>\n      <button ion-button block (click)="next()">Avançar</button>\n      <br><br><br>\n  <ion-card padding>\n\n    <h2>\n    {{this.data.area}}-{{this.data.line}}\n    </h2>\n    <code>área {{this.data.area}} do {{this.data.line}}° circulo </code>\n    <br>\n    <ion-badge *ngIf="this.data.enabled == true" color="secondary">habilitado</ion-badge>\n    <ion-card-content>\n      <div *ngFor="let item of this.data.sets">\n        <small><b>{{(item.crop).toUpperCase()}}({{item.planting_date}})</b></small>\n        <br>\n        <small *ngIf="item.harvest_date">{{item.harvest_date}}</small>\n        <br>\n        <ion-badge *ngIf="item.harvest_date" color="light">colhido</ion-badge>\n        <br>\n        <br>\n      </div>\n    </ion-card-content>\n\n  </ion-card>\n\n\n</ion-content>'/*ion-inline-end:"D:\mandallaproject\mandalla_app\app\src\pages\modal\modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ModalPage);

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__ = __webpack_require__(25);
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
 * Generated class for the SectorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SectorPage = (function () {
    function SectorPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.itens = [
            { name: "A1-1", value: ["A1", 1], _id: "59ecc86281bcb90c643f47d5" },
            { name: "A2-1", value: ["A2", 1], _id: "59ecc86281bcb90c643f47d6" },
            { name: "A3-1", value: ["A3", 1], _id: "59ecc86281bcb90c643f47d7" },
            { name: "A4-1", value: ["A4", 1], _id: "59ecc86281bcb90c643f47d8" },
            { name: "A1-2", value: ["A1", 2], _id: "59ecc86281bcb90c643f47d9" },
            { name: "A2-2", value: ["A2", 2], _id: "59ecc86281bcb90c643f47da" },
            { name: "A3-2", value: ["A3", 2], _id: "59ecc86281bcb90c643f47db" },
            { name: "A4-2", value: ["A4", 2], _id: "59ecc86281bcb90c643f47dc" },
            { name: "A1-3", value: ["A1", 3], _id: "59ecc86281bcb90c643f47dd" },
            { name: "A2-3", value: ["A2", 3], _id: "59ecc86281bcb90c643f47de" },
            { name: "A3-3", value: ["A3", 3], _id: "59ecc86281bcb90c643f47df" },
            { name: "A4-3", value: ["A4", 3], _id: "59ecc86281bcb90c643f47e0" },
            { name: "A1-4", value: ["A1", 4], _id: "59ecc86281bcb90c643f47e1" },
            { name: "A2-4", value: ["A2", 4], _id: "59ecc86281bcb90c643f47e2" },
            { name: "A3-4", value: ["A3", 4], _id: "59ecc86281bcb90c643f47e3" },
            { name: "A4-4", value: ["A4", 4], _id: "59ecc86281bcb90c643f47e4" },
            { name: "A1-5", value: ["A1", 5], _id: "59ecc86281bcb90c643f47e5" },
            { name: "A2-5", value: ["A2", 5], _id: "59ecc86281bcb90c643f47e6" },
            { name: "A3-5", value: ["A3", 5], _id: "59ecc86281bcb90c643f47e7" },
            { name: "A4-5", value: ["A4", 5], _id: "59ecc86281bcb90c643f47e8" },
            { name: "A1-6", value: ["A1", 6], _id: "59ecc86281bcb90c643f47e9" },
            { name: "A2-6", value: ["A2", 6], _id: "59ecc86281bcb90c643f47ea" },
            { name: "A3-6", value: ["A3", 6], _id: "59ecc86281bcb90c643f47eb" },
            { name: "A4-6", value: ["A4", 6], _id: "59ecc86281bcb90c643f47ec" },
            { name: "A1-7", value: ["A1", 7], _id: "59ecc86281bcb90c643f47ed" },
            { name: "A2-7", value: ["A2", 7], _id: "59ecc86281bcb90c643f47ee" },
            { name: "A3-7", value: ["A3", 7], _id: "59ecc86281bcb90c643f47ef" },
            { name: "A4-7", value: ["A4", 7], _id: "59ecc86281bcb90c643f47f0" },
            { name: "A1-8", value: ["A1", 8], _id: "59ecc86281bcb90c643f47f1" },
            { name: "A2-8", value: ["A2", 8], _id: "59ecc86281bcb90c643f47f2" },
            { name: "A3-8", value: ["A3", 8], _id: "59ecc86281bcb90c643f47f3" },
            { name: "A4-8", value: ["A4", 8], _id: "59ecc86281bcb90c643f47f4" },
            { name: "A1-9", value: ["A1", 9], _id: "59ecf2d8377a092d34be1c81" },
            { name: "A2-9", value: ["A2", 9], _id: "59ecf2d8377a092d34be1c82" },
            { name: "A3-9", value: ["A3", 9], _id: "59ecf2d8377a092d34be1c83" },
            { name: "A4-9", value: ["A4", 9], _id: "59ecf2d8377a092d34be1c84" }
        ];
    }
    SectorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SectorPage');
    };
    SectorPage.prototype.modify = function () {
        console.log(this.enabled);
        console.log(this.sector_id);
        this.http.api('/sector/enabled', { sector_id: this.sector_id, enabled: this.enabled }).then(function (result) {
            console.log(result);
        });
    };
    return SectorPage;
}());
SectorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sector',template:/*ion-inline-start:"D:\mandallaproject\mandalla_app\app\src\pages\sector\sector.html"*/'<!--\n  Generated template for the SectorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Setores</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label>Setor</ion-label>\n      <ion-select [(ngModel)]="sector_id">\n        <ion-option *ngFor="let item of itens" value="{{item._id}}">{{item.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label> Habilitado</ion-label>\n      <ion-toggle checked="false" [(ngModel)]="enabled"></ion-toggle>\n    </ion-item>\n  </ion-list>\n  <br>\n  <br>\n  <button ion-button block (click)="modify()">Modificar</button>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\mandallaproject\mandalla_app\app\src\pages\sector\sector.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__["a" /* HttpServiceProvider */]])
], SectorPage);

//# sourceMappingURL=sector.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_config_config__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_charts_charts__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_sensors_sensors__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_planting_planting__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_circle_render_circle_render__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_circles_circles__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sector_sector__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_modal_modal__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_list_list__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_results_results__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_companion_companion__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_enemy_enemy__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_intercropping_intercropping__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_http_service_http_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_qr_scanner__ = __webpack_require__(203);
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
            __WEBPACK_IMPORTED_MODULE_14__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_results_results__["a" /* ResultsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_companion_companion__["a" /* CompanionPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_enemy_enemy__["a" /* EnemyPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_intercropping_intercropping__["a" /* IntercroppingPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_config_config__["a" /* ConfigPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_charts_charts__["a" /* ChartsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_sensors_sensors__["a" /* SensorsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_planting_planting__["a" /* PlantingPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_circles_circles__["a" /* CirclesPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_circle_render_circle_render__["a" /* CircleRenderPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_sector_sector__["a" /* SectorPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_modal_modal__["a" /* ModalPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_results_results__["a" /* ResultsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_companion_companion__["a" /* CompanionPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_enemy_enemy__["a" /* EnemyPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_intercropping_intercropping__["a" /* IntercroppingPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_config_config__["a" /* ConfigPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_charts_charts__["a" /* ChartsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_sensors_sensors__["a" /* SensorsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_planting_planting__["a" /* PlantingPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_circles_circles__["a" /* CirclesPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_circle_render_circle_render__["a" /* CircleRenderPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_sector_sector__["a" /* SectorPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_modal_modal__["a" /* ModalPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_21__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_qr_scanner__["a" /* QRScanner */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(276);
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
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.set('content-type', 'application/json');
        console.log('Hello HttpServiceProvider Provider');
    }
    /**
     * api
     */
    HttpServiceProvider.prototype.api = function (url, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log('http://localhost' + url);
            if (data) {
                _this.http.post('http://localhost' + url, data, { headers: _this.headers }).subscribe(function (res) {
                    console.log(res);
                    resolve(res);
                });
            }
            else {
                _this.http.get('http://localhost' + url).subscribe(function (res) {
                    console.log(res);
                    resolve(res);
                });
            }
        });
    };
    return HttpServiceProvider;
}());
HttpServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], HttpServiceProvider);

//# sourceMappingURL=http-service.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_config_config__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_circles_circles__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_http_service_http_service__ = __webpack_require__(25);
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
                title: 'Circulos',
                component: __WEBPACK_IMPORTED_MODULE_6__pages_circles_circles__["a" /* CirclesPage */],
                desc: 'setores do plantio',
                icon: 'ionic'
            },
            {
                title: 'Configurações',
                component: __WEBPACK_IMPORTED_MODULE_5__pages_config_config__["a" /* ConfigPage */],
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\mandallaproject\mandalla_app\app\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="dark">\n      <ion-title>Mandala Project</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <!-- <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)"> -->\n       <!-- <ion-icon name="{{ p.icon }}"></ion-icon> {{p.title}} -->\n      <!-- </button> -->\n      <ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-avatar item-start>\n          <ion-icon name="{{ p.icon }}" style="font-size:48px;"></ion-icon>\n        </ion-avatar>\n        <h2>{{p.title}}</h2>\n        <p>{{ p.desc }}</p>\n      </ion-item>      \n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\mandallaproject\mandalla_app\app\src\app\app.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_7__providers_http_service_http_service__["a" /* HttpServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7__providers_http_service_http_service__["a" /* HttpServiceProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ChartsPage);

//# sourceMappingURL=charts.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map