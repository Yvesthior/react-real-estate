(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        realEstate: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./assets/js/realEstate/realEstate.js", "vendors~realEstate" ]);
    return checkDeferredModules();
})({
    "./assets/js/realEstate/Filter.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Filter extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "filter"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "inside"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Filter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {\n      name: "neighbourhood",\n      className: "filters neighbourhood",\n      onChange: this.props.onchange\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Neighbourhood"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "Ridgewood"\n    }, "Ridgewood"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "Los Angeles"\n    }, "Los Angeles"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "Santa Fe"\n    }, "Santa Fe"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "Houston"\n    }, "Houston"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "Pomona"\n    }, "Pomona"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "Cincinnati"\n    }, "Cincinnati")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {\n      name: "housetype",\n      className: "filters housetype",\n      onChange: this.props.onchange\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: ""\n    }, "House Type"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "ranch"\n    }, "Ranch"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "house"\n    }, "House"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "appartment"\n    }, "Appartment"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "studio"\n    }, "Studio")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {\n      name: "bedrooms",\n      className: "filters bedrooms",\n      onChange: this.props.onchange\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Bedrooms"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "1"\n    }, "1 BR"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "2"\n    }, "2 BR"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "3"\n    }, "3 BR"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "4"\n    }, "4 BR")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "filters price"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "title"\n    }, "Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "min_price",\n      value: this.props.globalState.min_price,\n      className: "min-price",\n      onChange: this.props.onchange\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "max_price",\n      value: this.props.globalState.max_price,\n      className: "max-price",\n      onChange: this.props.onchange\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "filters floor-space"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "title"\n    }, "Floor Space"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "min_floor_space",\n      value: this.props.globalState.min_floor_space,\n      className: "min-floor-space",\n      onChange: this.props.onchange\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "max_floor_space",\n      value: this.props.globalState.max_floor_space,\n      className: "max-floor-space",\n      onChange: this.props.onchange\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "filters extras"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "title"\n    }, "Extras"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      htmlFor: "elevator"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Elevators"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "checkbox",\n      value: "elevator",\n      name: "elevator",\n      onChange: this.props.onchange\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      htmlFor: "exswimming_pooltras"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Swimming Pool"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "checkbox",\n      value: "swimming_pool",\n      name: "swimming_pool",\n      onChange: this.props.onchange\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      htmlFor: "finished_basement"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Finished Basement"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "checkbox",\n      value: "finished_basement",\n      name: "finished_basement",\n      onChange: this.props.onchange\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      htmlFor: "gym"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Gym"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "checkbox",\n      value: "gym",\n      name: "gym",\n      onChange: this.props.onchange\n    })))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__["a"] = (Filter);\n\n//# sourceURL=webpack:///./assets/js/realEstate/Filter.js?');
    },
    "./assets/js/realEstate/Header.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Header = () => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "logo"\n  }, "Logo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n    href: "#"\n  }, "create ads"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n    href: "#"\n  }, "About Us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n    href: "#"\n  }, "Log in"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n    href: "#",\n    className: "register-btn"\n  }, "register")));\n};\n\n/* harmony default export */ __webpack_exports__["a"] = (Header);\n\n//# sourceURL=webpack:///./assets/js/realEstate/Header.js?');
    },
    "./assets/js/realEstate/Listings.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\n\n\nclass Listings extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.clickedBtn = () => {};\n\n    this.state = {\n      name: \'Joe\'\n    };\n  }\n\n  loopListings() {\n    let {\n      listingsData\n    } = this.props;\n    return listingsData.map((data, index) => {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "col-md-3",\n        key: index\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "listing"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "listing-img",\n        style: {\n          background: "url(\'".concat(data.image, "\') no-repeat center center")\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n        className: "address"\n      }, data.address), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "details"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "col-md-3"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "user-img"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "col-md-9"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "user-details"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n        className: "user-name"\n      }, "Nina Smith"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n        className: "post-date"\n      }, "05/05/2019")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "listing-details"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "floor-space"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n        className: "far fa-square"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, data.floorSpace, " ft\\xB2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "bedrooms"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n        className: "fa fa-bed"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, data.rooms, " Bedrooms"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "view-btn"\n      }, "View Listing")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "bottom-info"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n        className: "price"\n      }, "$", data.price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n        className: "location"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n        className: "fa fa-map-marker",\n        "aria-hidden": "true"\n      }), data.city, ", ", data.state))));\n    });\n  }\n\n  test() {\n    return _asyncToGenerator(function* () {})();\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "listings"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      className: "search-area"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "search"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      className: "sortby-area"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "results"\n    }, "390 results found"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "sort-options"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {\n      name: "sortby",\n      className: "sortby"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "price-asc"\n    }, "Highest Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "price-dsc"\n    }, "Lowest Price")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "view"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fas fa-list-ul"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fas fa-th"\n    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      className: "listing-results"\n    }, this.loopListings()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      className: "pagination"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {\n      className: "pages"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Prev"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {\n      className: "active"\n    }, "1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "5"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Next"))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__["a"] = (Listings);\n\n//# sourceURL=webpack:///./assets/js/realEstate/Listings.js?');
    },
    "./assets/js/realEstate/data/ListingData.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("var listingsData = [{\n  address: '20-34 grand avenue',\n  city: 'Ridgewood',\n  state: 'NY',\n  rooms: 3,\n  price: 220000,\n  floorSpace: 2000,\n  extra: ['elevator', 'gym'],\n  homeType: 'Appartement',\n  image: 'https://creativeoverflow.net/wp-content/uploads/2018/11/modern-homes.jpg'\n}, {\n  address: '10-34 avenue',\n  city: 'Ridgewood',\n  state: 'NY',\n  rooms: 3,\n  price: 220000,\n  floorSpace: 1000,\n  extra: ['elevator', 'gym'],\n  homeType: 'Appartement',\n  image: 'https://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/4206-28/the-kelvin-apartments-exterior.jpg'\n}, {\n  address: '34 grand central',\n  city: 'Ridgewood',\n  state: 'NY',\n  rooms: 3,\n  price: 220000,\n  floorSpace: 3000,\n  extra: ['elevator', 'gym'],\n  homeType: 'Appartement',\n  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYSt3Kp8cUnn5UpkRcd-30BxH-r20JGoE1UVfMV5VIwrEgDc5x'\n}, {\n  address: '2302  Brannon Street',\n  city: 'Los Angeles',\n  state: 'CA',\n  rooms: 4,\n  price: 250000,\n  floorSpace: 2000,\n  extra: ['elevator', 'gym'],\n  homeType: 'Appartement',\n  image: 'https://i.pinimg.com/originals/10/15/1f/10151f97ff80025113b3de92bd382b2f.jpg'\n}, {\n  address: '1553  Goldie Lane',\n  city: 'Cincinnati',\n  state: 'OH',\n  rooms: 5,\n  price: 220000,\n  floorSpace: 2000,\n  extra: ['elevator', 'gym'],\n  homeType: 'Appartement',\n  image: 'http://d2kcmk0r62r1qk.cloudfront.net/imageSponsors/xlarge/2017_03_01_10_23_27_thelofthouse_rendering.jpg'\n}, {\n  address: '2556  Paradise Lane',\n  city: 'Pomona',\n  state: 'CA',\n  rooms: 2,\n  price: 210000,\n  floorSpace: 2000,\n  extra: ['elevator', 'gym'],\n  homeType: 'Appartement',\n  image: 'https://images.thestar.com/Dgq93pGTGO8ujb3i-iqq_m6hNzU=/1200x976/smart/filters:cb(2700061000)/https://www.thestar.com/content/dam/thestar/news/gta/2017/08/29/midrise-housing-has-bright-future-in-toronto-whether-residents-like-it-or-not-hume/mid-rise-condos4.jpg'\n}, {\n  address: '2305  Brannon Street',\n  city: 'Los Angeles',\n  state: 'CA',\n  rooms: 4,\n  price: 250000,\n  floorSpace: 2000,\n  extra: ['elevator', 'gym'],\n  homeType: 'Appartement',\n  image: 'https://creativeoverflow.net/wp-content/uploads/2018/11/modern-homes.jpg'\n}, {\n  address: '1283  Patterson Street',\n  city: 'Houston',\n  state: 'TX',\n  rooms: 3,\n  price: 150000,\n  floorSpace: 2000,\n  extra: ['elevator', 'gym'],\n  homeType: 'Appartement',\n  image: 'https://inhabitat.com/wp-content/blogs.dir/1/files/2016/07/Eco-Green-apartment-homes-in-Los-Angeles-by-Hanover-Company-1-1.jpg'\n}, {\n  address: '821  Westfall Avenue',\n  city: 'Santa Fe',\n  state: 'NM',\n  rooms: 1,\n  price: 29000,\n  floorSpace: 2000,\n  extra: ['elevator', 'gym'],\n  homeType: 'Appartement',\n  image: 'https://1147794.v1.pressablecdn.com/wp-content/uploads/2017/11/360-5th-Street_2.jpg'\n}, {\n  address: '2314  Brannon Street',\n  city: 'Los Angeles',\n  state: 'CA',\n  rooms: 5,\n  price: 350000,\n  floorSpace: 2000,\n  extra: ['elevator', 'gym'],\n  homeType: 'Appartement',\n  image: 'https://07f138315bb5e97f9e43-31068357019044cca7c8e84d92de0d99.ssl.cf3.rackcdn.com/640x480/56587_11491_001.jpg'\n}, {\n  address: '2320  Brannon Street',\n  city: 'Los Angeles',\n  state: 'CA',\n  rooms: 3,\n  price: 210000,\n  floorSpace: 2000,\n  extra: ['elevator', 'gym'],\n  homeType: 'Appartement',\n  image: 'https://odis.homeaway.com/odis/listing/c7b5aa0b-0ec2-49e5-91e7-89d0d7516518.c10.jpg'\n}];\n/* harmony default export */ __webpack_exports__[\"a\"] = (listingsData);\n\n//# sourceURL=webpack:///./assets/js/realEstate/data/ListingData.js?");
    },
    "./assets/js/realEstate/realEstate.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./assets/js/realEstate/Header.js");\n/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Filter */ "./assets/js/realEstate/Filter.js");\n/* harmony import */ var _Listings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Listings */ "./assets/js/realEstate/Listings.js");\n/* harmony import */ var _data_ListingData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/ListingData */ "./assets/js/realEstate/data/ListingData.js");\n\n\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.change = event => {\n      let name = event.target.name;\n      let value = event.target.type === \'checkbox\' ? event.target.checked : event.target.value;\n      this.setState({\n        [name]: value\n      }, () => console.log(this.state));\n    };\n\n    this.state = {\n      name: \'Joe\',\n      listingsData: _data_ListingData__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],\n      min_price: 0,\n      max_price: 10000000,\n      min_floor_space: 0,\n      max_floor_space: 15000,\n      gym: false,\n      finished_basement: false,\n      swimming_pool: false,\n      elevator: false\n    };\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "content-area"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Filter__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {\n      onchange: this.change,\n      globalState: this.state\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Listings__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {\n      listingsData: this.state.listingsData\n    })));\n  }\n\n}\n\nconst app = document.getElementById(\'app\');\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), app);\n\n//# sourceURL=webpack:///./assets/js/realEstate/realEstate.js?');
    }
});