/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/todo.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/todo.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_low_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/low.png */ "./src/images/low.png");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_low_png__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*    header    *//*    header    *//*    header    *//*    header    */\n\n.headerWrapper{\nwidth: 100%;\nheight: fit-content;\ndisplay: flex;\njustify-content: center;\n}\n.logoWrapper{\nwidth:fit-content\n}\n#logo{\nwidth: 250px;\nheight:70px;\nobject-fit: contain;\n}\n/*    main   *//*    main   *//*    main   *//*    main   *//*    main   */\n.mainWrapper{\ndisplay:flex;\njustify-content: start;\nalign-items: start;\n}\n/*   Sidebar  *//*   Sidebar  *//*   Sidebar  */\n.sidenav {\n  min-width: 250px;\n  height: 1000px;\n  margin-right: 100px;\n  margin-left: 0px;\n  background: #eee;\n  border-radius: 5px;\n  position: relative;\n}\n\n.sidenav a {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-family: 'Roboto Slab', serif;\n  font-size: 15px;\n  color: #0a0a0a;\n  display: block;\n}\n\n.sidenav a:hover {\n  font-size: 15.2px;\n}\n\n#projectList{\nmargin: 0px;\nfont-family: 'Lato', sans-serif;\nfont-size: 12px;\ncolor: rgb(8, 8, 8);\n}\n\n.projectItem{\nlist-style-type:none;\nmargin-top: 0px;\nwidth:100px;\n}\n.projectItem::before {\n  content: \"\\2022\";\n  color: #f3cf2c;\n  font-weight: bold;\n  display: inline-block; \n  width: 1em;\n  margin-left: -1em;\n}\n\n/*   Sections */\n#allSectionsWrapper{\ndisplay:flex;\nwidth: fit-content;\njustify-content: start;\nflex-wrap: nowrap;\nalign-content: start;\nalign-self: start;\nalign-items: start;\nflex-direction: row;\n}\n#newSectionWrapper{\ndisplay: flex;\n\n}\n.sectionWrapper{\nwidth: 300px;\nmin-width: 300px;\nmargin: 20px;\nfont-family: 'Roboto Slab', serif;\ndisplay: flex;\njustify-items: center;\nflex-wrap: wrap;\nalign-content: flex-start;\nalign-items: start;\n}\n.section{\nwidth: 300px;\n}\n.sectionTitle{\nfont-family: 'Roboto Slab', serif;\nfont-size: 30px;\nfont-weight: 500;\nmargin-top: 0px;\nmargin-bottom: 20px;\npadding: 0px;\nwidth: 200px;\nborder-style: none;\n}\n/*  Saved Task  *//*  Saved Task  *//*  Saved Task  */\n.savedWrapper{\ndisplay: flex;\nflex-wrap: wrap;\nborder-style: solid;\nborder-width: 1px;\nborder-radius: 5px;\nborder-color:#b8b8bd;\nmargin-bottom: 20px;\npadding: 10px;\njustify-content: space-around;\njustify-self: center;\njustify-items: center;\nalign-items: center;\ntransition: ease-out;\n}\n.buttonsWrapper{\ndisplay:flex;\nflex-wrap: wrap;\nwidth: 30px;\nmargin: 0px;\n}\n.btnCheck{\nappearance: none;\nbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\nbackground-size: contain;\nbackground-repeat: no-repeat;\nwidth: 20px;\nheight: 20px;\nborder-style: none;\n}\n.savedTitleWrapper{\ndisplay: flex;\nflex-wrap: nowrap;\n}\n.savedScheduleWrapper{\ndisplay: flex;\nflex-wrap: nowrap;\n}\n.savedTitle{\nwidth: 50px;\n}\n.savedSchedule{\nwidth:30px;\n}\n.savedInput{\nwidth: 100px;\nappearance: none;\nborder: none;\n}\n.savedInput:focus-visible{\nappearance: none;\nborder: none;\noutline: none;\n}\n.descriptionWrapper{\nwidth:200px;\n}\n.descriptionWrapper input{\nappearance: none;\nborder-style: none;\nfont-family: 'Lato', sans-serif;\nfont-size: 15px;\nmargin-left:10px\n}\n\n/*  NewTask  *//*  NewTask  *//*  NewTask  */\n.newWrapper{\ndisplay: flex;\nborder-style: solid;\nborder-width: 1px;\nborder-radius: 5px;\nborder-color: #b8b8bd;\npadding: 20px;\nheight: fit-content;\nmargin-bottom: 20px;\n}\n.formWrapper{\ndisplay: flex;\nflex-wrap: wrap;\nwidth: 100%;\njustify-content: start;\n}\n.newTitle{\nfont-size: 25px;\n}\n.formInput{\nwidth: 100%;\n}\n.formLabel{\nmargin-right: 100%;\n}\n.prioritys{\nmargin-right:100% ;\n}\n.priority{\nfont-family: 'Lato', sans-serif;\nfont-size: 12px;\nwidth: 200px;\n}\n.formNotes{\nwidth:85%;\noverflow:scroll;\nmargin-top: 5px;\nalign-content: start;\n}\n\n/* dropdown for Projects*//* dropdown for Projects*/\n.dropbtn {\n  background-color: rgb(202,225,109);\n  border-radius: 5px;\n  margin-top: 15px;\n  color: black;\n  padding: 10px;\n  font-family: 'Lato', sans-serif;\n  font-size: 15px;\n  border: none;\n}\n\n/*.dropdown {\n  position: relative;\n  display: inline-block;\n  font-family: 'Lato', sans-serif;\n  font-size: 15px;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: rgb(255, 255, 255);\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n}\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-content a:hover {background-color: #ddd;}\n\n.dropdown:hover .dropdown-content {display: block;}\n\n.dropdown:hover .dropbtn {background-color: #3e8e41;}\n*/\n/* add*//* add*//* add*/\n\n.addTask{\nappearance: none;\nfont-family: 'Lato', sans-serif;\nfont-size: 20px;\nfont-weight: 200;\nborder-width: 1px;\nborder-radius: 2px;\nborder-color:#b8b8bd;\nborder-style: solid;\ncolor:#b8b8bd;\nbackground-color: white;\nheight: 30px;\npadding-top: 0px;\npadding-right: 8px;\npadding-left: 8px;\npadding-bottom: 0px;\nmargin-top: 0px;\nmargin-right: 100%;\ntext-align: center;\nvertical-align: center;\n\n}\n\n.addSection{\nappearance: none;\nfont-family: 'Lato', sans-serif;\nfont-size: 20px;\nfont-weight: 200;\nborder-width: 1px;\nborder-radius: 2px;\nborder-color:#b8b8bd;\nborder-style: solid;\ncolor:#b8b8bd;\nbackground-color: white;\nheight: 30px;\npadding-top: 0px;\npadding-right: 8px;\npadding-left: 8px;\npadding-bottom: 0px;\nmargin-top: 75px;\nmargin-right: 100%;\ntext-align: center;\nvertical-align: center;\n\n\n}\n\n.savedNotes{\nmargin-right: 72%;\n\n}", "",{"version":3,"sources":["webpack://./src/todo.css"],"names":[],"mappings":"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","sourcesContent":["/*    header    *//*    header    *//*    header    *//*    header    */\n\n.headerWrapper{\nwidth: 100%;\nheight: fit-content;\ndisplay: flex;\njustify-content: center;\n}\n.logoWrapper{\nwidth:fit-content\n}\n#logo{\nwidth: 250px;\nheight:70px;\nobject-fit: contain;\n}\n/*    main   *//*    main   *//*    main   *//*    main   *//*    main   */\n.mainWrapper{\ndisplay:flex;\njustify-content: start;\nalign-items: start;\n}\n/*   Sidebar  *//*   Sidebar  *//*   Sidebar  */\n.sidenav {\n  min-width: 250px;\n  height: 1000px;\n  margin-right: 100px;\n  margin-left: 0px;\n  background: #eee;\n  border-radius: 5px;\n  position: relative;\n}\n\n.sidenav a {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-family: 'Roboto Slab', serif;\n  font-size: 15px;\n  color: #0a0a0a;\n  display: block;\n}\n\n.sidenav a:hover {\n  font-size: 15.2px;\n}\n\n#projectList{\nmargin: 0px;\nfont-family: 'Lato', sans-serif;\nfont-size: 12px;\ncolor: rgb(8, 8, 8);\n}\n\n.projectItem{\nlist-style-type:none;\nmargin-top: 0px;\nwidth:100px;\n}\n.projectItem::before {\n  content: \"\\2022\";\n  color: #f3cf2c;\n  font-weight: bold;\n  display: inline-block; \n  width: 1em;\n  margin-left: -1em;\n}\n\n/*   Sections */\n#allSectionsWrapper{\ndisplay:flex;\nwidth: fit-content;\njustify-content: start;\nflex-wrap: nowrap;\nalign-content: start;\nalign-self: start;\nalign-items: start;\nflex-direction: row;\n}\n#newSectionWrapper{\ndisplay: flex;\n\n}\n.sectionWrapper{\nwidth: 300px;\nmin-width: 300px;\nmargin: 20px;\nfont-family: 'Roboto Slab', serif;\ndisplay: flex;\njustify-items: center;\nflex-wrap: wrap;\nalign-content: flex-start;\nalign-items: start;\n}\n.section{\nwidth: 300px;\n}\n.sectionTitle{\nfont-family: 'Roboto Slab', serif;\nfont-size: 30px;\nfont-weight: 500;\nmargin-top: 0px;\nmargin-bottom: 20px;\npadding: 0px;\nwidth: 200px;\nborder-style: none;\n}\n/*  Saved Task  *//*  Saved Task  *//*  Saved Task  */\n.savedWrapper{\ndisplay: flex;\nflex-wrap: wrap;\nborder-style: solid;\nborder-width: 1px;\nborder-radius: 5px;\nborder-color:#b8b8bd;\nmargin-bottom: 20px;\npadding: 10px;\njustify-content: space-around;\njustify-self: center;\njustify-items: center;\nalign-items: center;\ntransition: ease-out;\n}\n.buttonsWrapper{\ndisplay:flex;\nflex-wrap: wrap;\nwidth: 30px;\nmargin: 0px;\n}\n.btnCheck{\nappearance: none;\nbackground-image: url(\"../src/images/low.png\");\nbackground-size: contain;\nbackground-repeat: no-repeat;\nwidth: 20px;\nheight: 20px;\nborder-style: none;\n}\n.savedTitleWrapper{\ndisplay: flex;\nflex-wrap: nowrap;\n}\n.savedScheduleWrapper{\ndisplay: flex;\nflex-wrap: nowrap;\n}\n.savedTitle{\nwidth: 50px;\n}\n.savedSchedule{\nwidth:30px;\n}\n.savedInput{\nwidth: 100px;\nappearance: none;\nborder: none;\n}\n.savedInput:focus-visible{\nappearance: none;\nborder: none;\noutline: none;\n}\n.descriptionWrapper{\nwidth:200px;\n}\n.descriptionWrapper input{\nappearance: none;\nborder-style: none;\nfont-family: 'Lato', sans-serif;\nfont-size: 15px;\nmargin-left:10px\n}\n\n/*  NewTask  *//*  NewTask  *//*  NewTask  */\n.newWrapper{\ndisplay: flex;\nborder-style: solid;\nborder-width: 1px;\nborder-radius: 5px;\nborder-color: #b8b8bd;\npadding: 20px;\nheight: fit-content;\nmargin-bottom: 20px;\n}\n.formWrapper{\ndisplay: flex;\nflex-wrap: wrap;\nwidth: 100%;\njustify-content: start;\n}\n.newTitle{\nfont-size: 25px;\n}\n.formInput{\nwidth: 100%;\n}\n.formLabel{\nmargin-right: 100%;\n}\n.prioritys{\nmargin-right:100% ;\n}\n.priority{\nfont-family: 'Lato', sans-serif;\nfont-size: 12px;\nwidth: 200px;\n}\n.formNotes{\nwidth:85%;\noverflow:scroll;\nmargin-top: 5px;\nalign-content: start;\n}\n\n/* dropdown for Projects*//* dropdown for Projects*/\n.dropbtn {\n  background-color: rgb(202,225,109);\n  border-radius: 5px;\n  margin-top: 15px;\n  color: black;\n  padding: 10px;\n  font-family: 'Lato', sans-serif;\n  font-size: 15px;\n  border: none;\n}\n\n/*.dropdown {\n  position: relative;\n  display: inline-block;\n  font-family: 'Lato', sans-serif;\n  font-size: 15px;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: rgb(255, 255, 255);\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n}\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-content a:hover {background-color: #ddd;}\n\n.dropdown:hover .dropdown-content {display: block;}\n\n.dropdown:hover .dropbtn {background-color: #3e8e41;}\n*/\n/* add*//* add*//* add*/\n\n.addTask{\nappearance: none;\nfont-family: 'Lato', sans-serif;\nfont-size: 20px;\nfont-weight: 200;\nborder-width: 1px;\nborder-radius: 2px;\nborder-color:#b8b8bd;\nborder-style: solid;\ncolor:#b8b8bd;\nbackground-color: white;\nheight: 30px;\npadding-top: 0px;\npadding-right: 8px;\npadding-left: 8px;\npadding-bottom: 0px;\nmargin-top: 0px;\nmargin-right: 100%;\ntext-align: center;\nvertical-align: center;\n\n}\n\n.addSection{\nappearance: none;\nfont-family: 'Lato', sans-serif;\nfont-size: 20px;\nfont-weight: 200;\nborder-width: 1px;\nborder-radius: 2px;\nborder-color:#b8b8bd;\nborder-style: solid;\ncolor:#b8b8bd;\nbackground-color: white;\nheight: 30px;\npadding-top: 0px;\npadding-right: 8px;\npadding-left: 8px;\npadding-bottom: 0px;\nmargin-top: 75px;\nmargin-right: 100%;\ntext-align: center;\nvertical-align: center;\n\n\n}\n\n.savedNotes{\nmargin-right: 72%;\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/add/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/esm/add/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ add)
/* harmony export */ });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _addMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../addMonths/index.js */ "./node_modules/date-fns/esm/addMonths/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");






/**
 * @name add
 * @category Common Helpers
 * @summary Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @description
 * Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 *
 * | Key            | Description                        |
 * |----------------|------------------------------------|
 * | years          | Amount of years to be added        |
 * | months         | Amount of months to be added       |
 * | weeks          | Amount of weeks to be added       |
 * | days           | Amount of days to be added         |
 * | hours          | Amount of hours to be added        |
 * | minutes        | Amount of minutes to be added      |
 * | seconds        | Amount of seconds to be added      |
 *
 * All values default to 0
 *
 * @returns {Date} the new date with the seconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add the following duration to 1 September 2014, 10:19:50
 * const result = add(new Date(2014, 8, 1, 10, 19, 50), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30,
 * })
 * //=> Thu Jun 15 2017 15:29:20
 */
function add(dirtyDate, duration) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  if (!duration || typeof duration !== 'object') return new Date(NaN);
  var years = 'years' in duration ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(duration.years) : 0;
  var months = 'months' in duration ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(duration.months) : 0;
  var weeks = 'weeks' in duration ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(duration.weeks) : 0;
  var days = 'days' in duration ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(duration.days) : 0;
  var hours = 'hours' in duration ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(duration.hours) : 0;
  var minutes = 'minutes' in duration ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(duration.minutes) : 0;
  var seconds = 'seconds' in duration ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(duration.seconds) : 0; // Add years and months

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate);
  var dateWithMonths = months || years ? (0,_addMonths_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date, months + years * 12) : date; // Add weeks and days

  var dateWithDays = days || weeks ? (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(dateWithMonths, days + weeks * 7) : dateWithMonths; // Add days, hours, minutes and seconds

  var minutesToAdd = minutes + hours * 60;
  var secondsToAdd = seconds + minutesToAdd * 60;
  var msToAdd = secondsToAdd * 1000;
  var finalDate = new Date(dateWithDays.getTime() + msToAdd);
  return finalDate;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMonths/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/addMonths/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMonths)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */

function addMonths(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.

  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();

  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newSection": () => (/* binding */ newSection),
/* harmony export */   "lineCounter": () => (/* binding */ lineCounter),
/* harmony export */   "counterLines": () => (/* binding */ counterLines),
/* harmony export */   "searchKeys": () => (/* binding */ searchKeys),
/* harmony export */   "findTask": () => (/* binding */ findTask),
/* harmony export */   "colCounter": () => (/* binding */ colCounter),
/* harmony export */   "getSectionTitle": () => (/* binding */ getSectionTitle),
/* harmony export */   "editTask": () => (/* binding */ editTask)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



// Add necessary event listeners
const newSection = () => {
  _dom__WEBPACK_IMPORTED_MODULE_1__.element.addSection();
  const button = document.getElementById('addSection');
  // How many sections are already saved?
  let col = parseInt(colCounter())+1;
  // eslint-disable-next-line max-len
  button.addEventListener('click', () => {
    _dom__WEBPACK_IMPORTED_MODULE_1__.compose.newSection(col, 'allSectionsWrapper', 'New Section');
    col++;
  });
};
// eslint-disable-next-line require-jsdoc
function lineCounter(col) {
  const keys = Object.keys(localStorage).filter((item) => item[0]!='s');
  const filterCol = keys.filter( (item) => item[0] === col);
  let lines = 0;
  filterCol.length === 0 ? lines = 0 :
  lines = filterCol.length/4;
  return lines;
}
// eslint-disable-next-line require-jsdoc
function colCounter() {
  const keys = searchKeys().sort().filter((item) => item[0]!='s');
  let col = 0;
  let lastIndex = keys.length - 1;
  if (lastIndex === -1) {
    lastIndex = 0;
  } else {
    col = keys[lastIndex][0];
  }
  return col;
}

// find unique indexes in database
// eslint-disable-next-line require-jsdoc
function searchKeys() {
  const data = [...Object.keys(localStorage).filter((item) => item[0]!='s')];

  const indexArray = [];
  data.map((key) => {
    const regex = new RegExp(/[a-zA-Z]/);
    const match = regex.exec(key);
    indexArray.push(key.slice(0, match.index));
  });
  const unique = [...new Set(indexArray)];

  return unique;
}

// display objects with correct index

const findTask = function(index) {
  const search = (key) => {
    const regex = new RegExp(/[a-zA-Z]/);
    const match = regex.exec(key);
    const result = key.slice(0, match.index);
    return index === result;
  };

  const searchResult = Object.keys(localStorage)
      .sort()
      .filter((key) => search(key))
      .map((key) => localStorage.getItem(key));

  return Object.assign(
      {},
      {
        title: searchResult[3],
        schedule: searchResult[2],
        priority: searchResult[1],
        notes: searchResult[0],
      },
  );
};

// Get section titles from localStorage
const getSectionTitle = () => {
  const data = Object.keys(localStorage).sort();
  data
      .filter((item) => item[0] === 's')
      .map((item) => {
        const lastIndex = item.length - 1;
        const col = item[lastIndex];
        const title = document.getElementById(col);
        title.value = localStorage.getItem(item);
      });
};

// Click a task and open editor
const editTask = () => {
  const tasksArray = Array.from(document.querySelectorAll('.savedWrapper'));
  tasksArray.map( (item) => item.addEventListener( 'click', () => edit(item), {once: true}));

  // eslint-disable-next-line require-jsdoc
  function edit(item) {
    const regex = new RegExp(/[a-zA-Z]/);
    const match = regex.exec(item);
    const index = item.id.slice(0, match.index-1);
    const task = findTask(index);
    // eslint-disable-next-line max-len
    const priority = _dom__WEBPACK_IMPORTED_MODULE_1__.element.label(`${index}priority`, item.id, `${index}notes`, 'Notes:', 'savedNotes' )
    const label = _dom__WEBPACK_IMPORTED_MODULE_1__.element.label(`${index}notes`, item.id, `${index}notes`, 'Notes:', 'savedNotes' );
    const notes = _dom__WEBPACK_IMPORTED_MODULE_1__.element.textArea(`${index}notes`, item.id );
  };
};
// Counter to map lines
const counterLines = (element) => {
  const id = element.id;
  const lineIndex = id.indexOf('*') + 1;
  const line = id.slice(lineIndex);
  if (line === '') {
    element.id = id + 0;
  } else {
    element.id = id.replace(`*${line}`, `*${parseInt(line) + 1}`);
  }
};

// eslint-disable-next-line max-len



/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapper": () => (/* binding */ wrapper),
/* harmony export */   "element": () => (/* binding */ element),
/* harmony export */   "compose": () => (/* binding */ compose)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ "./src/controller.js");
/* harmony import */ var _images_higth_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/higth.png */ "./src/images/higth.png");
/* harmony import */ var _images_medium_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/medium.png */ "./src/images/medium.png");
/* harmony import */ var _images_low_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/low.png */ "./src/images/low.png");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/add/index.js");





// All needed wrappers
const wrapper = (() => {
  // New Section Wrapper
  const section = (id, appendTo) => {
    const section = document.createElement('div');
    section.id = id;
    section.classList = 'sectionWrapper';
    const parent = document.getElementById(appendTo);
    parent.appendChild(section);
  };

  const savedSection = (id, appendTo) => {
    const savedSection = document.createElement('div');
    savedSection.id = id;
    const parent = document.getElementById(appendTo);
    parent.appendChild(savedSection);
  };

  // Saved title wrappers
  const saved = (id, appendTo) => {
    const parent = document.getElementById(appendTo);
    const saved = document.createElement('div');
    saved.id = id;
    saved.classList = 'savedWrapper';
    saved.setAttribute('readOnly', 'true');
    parent.appendChild(saved);
  };

  const button = (id, appendTo) => {
    const button = document.createElement('div');
    button.id = id;
    button.classList = 'buttonsWrapper';
    const parent = document.getElementById(appendTo);
    parent.appendChild(button);
  };

  const description = (id, appendTo) => {
    const description = document.createElement('div');
    description.id = id;
    description.classList = 'descriptionWrapper';
    const parent = document.getElementById(appendTo);
    parent.appendChild(description);
  };

  const savedTitle = (id, appendTo) => {
    const savedTitle = document.createElement('div');
    savedTitle.id = id;
    savedTitle.classList = 'savedTitleWrapper';
    savedTitle.setAttribute('readonly', 'true');
    const parent = document.getElementById(appendTo);
    parent.appendChild(savedTitle);
  };

  const savedShedule = (id, appendTo) => {
    const saved = document.createElement('div');
    saved.id = id;
    saved.classList = 'savedScheduleWrapper';
    const parent = document.getElementById(appendTo);
    parent.appendChild(saved);
  };
  // For new task form
  const newTask = (id, appendTo) => {
    const wrapper = document.createElement('div');
    wrapper.id = id;
    wrapper.classList = 'newWrapper';
    const parent = document.getElementById(appendTo);
    parent.appendChild(wrapper);
  };

  const newForm = (id, appendTo) => {
    const wrapper = document.createElement('div');
    wrapper.id = id;
    wrapper.classList = 'formWrapper';
    const parent = document.getElementById(appendTo);
    parent.appendChild(wrapper);
  };

  return {
    section,
    savedSection,
    saved,
    description,
    savedTitle,
    savedShedule,
    newTask,
    button,
    newForm,
  };
})();

// All needed elements
const element = (() => {
  const sectionTitle = (id, appendTo, text) => {
    const title = document.createElement('input');
    title.id = id;
    title.classList = 'sectionTitle';
    title.type = 'text';
    title.value = text;
    // eslint-disable-next-line max-len
    title.addEventListener('blur', () =>localStorage.setItem(`section${id}`, `${title.value}`));
    const parent = document.getElementById(appendTo);
    parent.appendChild(title);
  };

  // form
  const newForm = (id, appendTo) => {
    const form = document.createElement('form');
    form.id = id;
    const parent = document.getElementById(appendTo);
    parent.appendChild(form);
  };

  // inputs
  const savedInput = (id, appendTo, text) => {
    const input = document.createElement('input');
    input.id = id;
    input.type = 'text';
    input.classList = 'savedInput';
    input.value = text;
    input.setAttribute('readOnly', 'true');
    const parent = document.getElementById(appendTo);
    date_fns__WEBPACK_IMPORTED_MODULE_5__.default.eve
    parent.appendChild(input);
  };

  const priority = (id, appendTo, img) => {
    const input = document.createElement('input');
    if (id != '') {
      input.id = id;
    }
    input.classList = 'btnCheck';
    input.style.backgroundImage = `url(${img})`;
    const parent = document.getElementById(appendTo);
    parent.appendChild(input);
  };

  const input = (id, appendTo, type, classList, name, checked) => {
    const input = document.createElement('input');
    if (id != '') {
      input.id = id;
    }
    input.name = name;
    input.type = type;
    input.classList = classList;
    if (checked) {
      input.setAttribute('checked', 'checked');
    }
    const parent = document.getElementById(appendTo);
    parent.appendChild(input);
  };
  // labels
  const label = (id, appendTo, input, text, classList) => {
    const label = document.createElement('label');
    label.id = id;
    label.setAttribute('for', input);
    label.innerText = text;
    label.classList = classList;
    const parent = document.getElementById(appendTo);
    parent.appendChild(label);
  };

  const newLabelTitle = (id, appendTo, input, text) => {
    const label = document.createElement('label');
    if (id != '') {
      label.id = id;
    }
    label.setAttribute('for', input);
    label.innerText = text;
    label.classList = 'newTitle';
    const parent = document.getElementById(appendTo);
    parent.appendChild(label);
  };

  // textArea

  const textArea = (id, appendTo) => {
    const text = document.createElement('textarea');
    text.id = id;
    text.classList = 'formNotes';
    text.rows = 4;
    text.cols = 20;
    const parent = document.getElementById(appendTo);
    parent.appendChild(text);
  };

  // Add new project
  const projectItem = (id, name) => {
    const li = document.createElement('li');
    li.id = `${id}`;
    li.classList = 'projectItem';
    li.innerText = `${name}`;
    const projects = document.getElementById('projectList');
    projects.appendChild(li);
  };

  // Submit button
  const formSubmit = (appendTo) => {
    const dropButton = document.createElement('button');
    dropButton.classList = 'dropbtn';
    dropButton.innerText = 'Add';
    const form = document.getElementById(appendTo);
    dropButton.addEventListener('click', () => {
      const task = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.taskFactory)((0,_factory__WEBPACK_IMPORTED_MODULE_0__.formDriver)(form));
      console.log(task);
      task.save();
    });
    const parent = document.getElementById(appendTo);
    parent.appendChild(dropButton);
  };

  // Add task or section button

  const addTask = (col, appendTo) => {
    const button = document.createElement('input');
    button.id = col + '*';
    button.value = '+';
    button.type = 'button';
    button.classList = 'addTask';
    const parent = document.getElementById(appendTo);
    parent.appendChild(button);
  };

  const addSection = () => {
    const button = document.createElement('input');
    button.id = 'addSection';
    button.value = '+';
    button.type = 'button';
    button.classList = 'addSection';
    const parent = document.getElementById('newSectionWrapper');
    parent.appendChild(button);
  };

  return {
    sectionTitle,
    newForm,
    savedInput,
    label,
    projectItem,
    priority,
    textArea,
    newLabelTitle,
    input,
    formSubmit,
    addSection,
    addTask,
  };
})();

// Composed Structures : newSection(), newTask(), savedTask()

const compose = (() => {
  const newSection = (col, appendTo, title) => {
    wrapper.section(`${col}sectionWrapper`, appendTo);
    element.sectionTitle(col, `${col}sectionWrapper`, 'New Section');
    wrapper.savedSection(`${col}savedSection`, `${col}sectionWrapper`);
    element.addTask(`${col}`, `${col}sectionWrapper`);
    const addTask = document.getElementById(`${col}*`);
    addTask.id = `${col}*${(0,_controller__WEBPACK_IMPORTED_MODULE_1__.lineCounter)()}`;
    addTask.addEventListener( 'click', () => 
      compose.newTask(col, `${col}sectionWrapper`));
  };

  const savedTask = (col, appendTo, title, schedule, priority) => {
    let img = _images_low_png__WEBPACK_IMPORTED_MODULE_4__;
    switch (priority) {
      case 'low':
        img = _images_low_png__WEBPACK_IMPORTED_MODULE_4__;
        break;
      case 'medium':
        img = _images_medium_png__WEBPACK_IMPORTED_MODULE_3__;
        break;
      case 'high':
        img = _images_higth_png__WEBPACK_IMPORTED_MODULE_2__;
        break;
      default:
        img;
    }
    wrapper.saved(`${col}savedWrapper`, appendTo);
    wrapper.button(`${col}buttonWrapper`, `${col}savedWrapper`);
    element.priority(`${col}priority`, `${col}buttonWrapper`, img);
    wrapper.description(`${col}descriptionWrapper`, `${col}savedWrapper`);
    wrapper.savedTitle(`${col}savedTitle`, `${col}descriptionWrapper`);
    // eslint-disable-next-line max-len
    element.label(
        `${col}savedTitleLabel`,
        `${col}savedTitle`,
        `${col}savedTitleInput`,
        'Title:',
    );
    element.savedInput(`${col}savedTitleInput`, `${col}savedTitle`, title);
    wrapper.savedShedule(`${col}savedShedule`, `${col}descriptionWrapper`);
    // eslint-disable-next-line max-len
    element.label(
        `${col}savedScheduleLabel`,
        `${col}savedShedule`,
        `${col}savedScheduleInput`,
        'Schedule:',
    );
    // eslint-disable-next-line max-len
    element.savedInput(
        `${col}savedScheduleInput`,
        `${col}savedShedule`,
        schedule,
    );
  };

  const newTask = (col, appendTo) => {
    wrapper.newTask(`${col}*${(0,_controller__WEBPACK_IMPORTED_MODULE_1__.lineCounter)(col)}w`, appendTo);
    const subcol = `${col}*${(0,_controller__WEBPACK_IMPORTED_MODULE_1__.lineCounter)(col)}fw`;
    wrapper.newForm(`${subcol}`, `${col}*${(0,_controller__WEBPACK_IMPORTED_MODULE_1__.lineCounter)(col)}w`);
    const formcol = `${col}*${(0,_controller__WEBPACK_IMPORTED_MODULE_1__.lineCounter)(col)}f`;
    element.newForm(`${formcol}`, `${subcol}`);

    element.newLabelTitle('', formcol, '', 'New Task');
    element.input('', formcol, 'text', 'formInput');
    element.label('', formcol, '', 'Schedule');
    element.input('', formcol, 'date', 'formInput');
    element.label('', formcol, '', 'Priority', 'prioritys');
    element.label(`${col} low`, formcol, '', '              Low', 'priority');
    element.input(`${col} low`, formcol, 'radio');
    element.label(`${col} medium`, formcol, '', 'Medium', 'priority');
    element.input(`${col} medium`, formcol, 'radio');
    element.label(`${col} high`, formcol, '', 'High', 'priority');
    element.input(`${col} high`, formcol, 'radio');
    element.label('', formcol, '', 'Notes', 'formLabel');
    element.textArea('', formcol);

    element.formSubmit(formcol);
  };
  return {newSection, savedTask, newTask};
})();




/***/ }),

/***/ "./src/factory.js":
/*!************************!*\
  !*** ./src/factory.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formDriver": () => (/* binding */ formDriver),
/* harmony export */   "taskFactory": () => (/* binding */ taskFactory)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");


// Factory Function

// eslint-disable-next-line max-len
// Form Driver, takes info from the form and returns an array with the property values
const formDriver = (form) => {
  const getPriority = () => {
    const formArray = [];
    for (let i = 0; i < form.length; i++) {
      formArray.push(form[i]);
    }
    const checkedPriority = formArray.filter((item) => item.checked);
    if (checkedPriority.length === 0) {
      return 'low';
    }
    const priorityId = checkedPriority[0].id;
    const sliceAt = priorityId.indexOf(' ') + 1;
    const priority = priorityId.slice(sliceAt);
    return priority;
  };

  const getIndex = (form) => {
    const id = form.id;
    const sliceEnd = id.indexOf('f');

    return id.slice(0, sliceEnd);
  };

  return [
    getIndex(form),
    form[0].value,
    form[1].value,
    getPriority(form),
    form[5].value,
  ];
};

const taskProto = {
  save: function() {
    localStorage.setItem(`${this.index}title`, `${this.title}`);
    localStorage.setItem(`${this.index}schedule`, `${this.schedule}`);
    localStorage.setItem(`${this.index}priority`, `${this.priority}`);
    localStorage.setItem(`${this.index}notes`, `${this.notes}`);
  },
  getTask: function() {
    const search = (key) => {
      const regex = new RegExp(/[a-zA-Z]/);
      const match = regex.exec(key);
      const result = key.slice(0, match.index);
      return this.index === result;
    };
    const searchResult = Object.keys(localStorage)
        .filter((key) => search(key))
        .map((key) => localStorage.getItem(key));

    return Object.assign(
        {},
        {
          title: searchResult[0],
          schedule: searchResult[2],
          priority: searchResult[3],
          notes: searchResult[1],
        },
    );
  },
  removeTask: function() {},
};

const taskFactory = (values) => {
  return Object.assign(Object.create(taskProto), {
    index: values[0],
    title: values[1],
    schedule: values[2],
    priority: values[3],
    notes: values[4],
  });
};




/***/ }),

/***/ "./src/todo.css":
/*!**********************!*\
  !*** ./src/todo.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./todo.css */ "./node_modules/css-loader/dist/cjs.js!./src/todo.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/images/higth.png":
/*!******************************!*\
  !*** ./src/images/higth.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fe25b17d4b5412ac6efb.png";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "680a93da803bc98d3bc3.png";

/***/ }),

/***/ "./src/images/low.png":
/*!****************************!*\
  !*** ./src/images/low.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "900b7bcb21bc0518edd4.png";

/***/ }),

/***/ "./src/images/medium.png":
/*!*******************************!*\
  !*** ./src/images/medium.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cedfaa4e1a9d9b47485f.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.css */ "./src/todo.css");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/logo.png */ "./src/images/logo.png");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factory */ "./src/factory.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controller */ "./src/controller.js");
/* eslint-disable max-len */







const logo = document.getElementById('logo');
logo.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_1__;

// On load, create necessary Todos based on Object.keys in localStorage,
const indexArray = [...(0,_controller__WEBPACK_IMPORTED_MODULE_4__.searchKeys)()];
indexArray.sort().map(displaySaved);

// eslint-disable-next-line require-jsdoc
function displaySaved(item) {
  const section = document.getElementById(`${item[0]}sectionWrapper`);
  if (!section) {
    _dom_js__WEBPACK_IMPORTED_MODULE_2__.compose.newSection(`${item[0]}`, 'allSectionsWrapper', 'Section Title');
  };

  const task = (0,_controller__WEBPACK_IMPORTED_MODULE_4__.findTask)(item);
  const col = item[0];
  let line = item[2];
  _dom_js__WEBPACK_IMPORTED_MODULE_2__.compose.savedTask(
      `${col}*${line}`,
      `${col}savedSection`,
      task.title,
      task.schedule,
      task.priority);
  line++;
};

(0,_controller__WEBPACK_IMPORTED_MODULE_4__.newSection)();
(0,_controller__WEBPACK_IMPORTED_MODULE_4__.getSectionTitle)();
(0,_controller__WEBPACK_IMPORTED_MODULE_4__.editTask)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtdG9kby8uL3NyYy90b2RvLmNzcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNb250aHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvcC10b2RvLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL3NyYy9mYWN0b3J5LmpzIiwid2VicGFjazovL3RvcC10b2RvLy4vc3JjL3RvZG8uY3NzPzNmODMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC10b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC10b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvcC10b2RvLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ087QUFDbkM7QUFDN0QsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCLENBQUMsNENBQTZCO0FBQ3RHO0FBQ0EscUlBQXFJLGNBQWMsc0JBQXNCLGdCQUFnQiwwQkFBMEIsR0FBRyxlQUFlLHNCQUFzQixRQUFRLGVBQWUsY0FBYyxzQkFBc0IsR0FBRyw0RkFBNEYsZUFBZSx5QkFBeUIscUJBQXFCLEdBQUcsOERBQThELHFCQUFxQixtQkFBbUIsd0JBQXdCLHFCQUFxQixxQkFBcUIsdUJBQXVCLHVCQUF1QixHQUFHLGdCQUFnQiw4QkFBOEIsMEJBQTBCLHNDQUFzQyxvQkFBb0IsbUJBQW1CLG1CQUFtQixHQUFHLHNCQUFzQixzQkFBc0IsR0FBRyxpQkFBaUIsY0FBYyxrQ0FBa0Msa0JBQWtCLHNCQUFzQixHQUFHLGlCQUFpQix1QkFBdUIsa0JBQWtCLGNB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QUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNvQjtBQUNpQjtBQUNuQjtBQUNDO0FBQ3NFO0FBQzFEOztBQUUvQjtBQUNBLFdBQVcsNkNBQUk7O0FBRWY7QUFDQSx1QkFBdUIsdURBQVU7QUFDakM7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0EsSUFBSSx1REFBa0IsSUFBSSxRQUFRO0FBQ2xDOztBQUVBLGVBQWUscURBQVE7QUFDdkI7QUFDQTtBQUNBLEVBQUUsc0RBQWlCO0FBQ25CLFNBQVMsSUFBSSxHQUFHLEtBQUs7QUFDckIsU0FBUyxJQUFJO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1REFBVTtBQUNWLDREQUFlO0FBQ2YscURBQVEsRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuL2ltYWdlcy9sb3cucG5nXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogICAgaGVhZGVyICAgICovLyogICAgaGVhZGVyICAgICovLyogICAgaGVhZGVyICAgICovLyogICAgaGVhZGVyICAgICovXFxuXFxuLmhlYWRlcldyYXBwZXJ7XFxud2lkdGg6IDEwMCU7XFxuaGVpZ2h0OiBmaXQtY29udGVudDtcXG5kaXNwbGF5OiBmbGV4O1xcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubG9nb1dyYXBwZXJ7XFxud2lkdGg6Zml0LWNvbnRlbnRcXG59XFxuI2xvZ297XFxud2lkdGg6IDI1MHB4O1xcbmhlaWdodDo3MHB4O1xcbm9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcbi8qICAgIG1haW4gICAqLy8qICAgIG1haW4gICAqLy8qICAgIG1haW4gICAqLy8qICAgIG1haW4gICAqLy8qICAgIG1haW4gICAqL1xcbi5tYWluV3JhcHBlcntcXG5kaXNwbGF5OmZsZXg7XFxuanVzdGlmeS1jb250ZW50OiBzdGFydDtcXG5hbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcbi8qICAgU2lkZWJhciAgKi8vKiAgIFNpZGViYXIgICovLyogICBTaWRlYmFyICAqL1xcbi5zaWRlbmF2IHtcXG4gIG1pbi13aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDEwMDBweDtcXG4gIG1hcmdpbi1yaWdodDogMTAwcHg7XFxuICBtYXJnaW4tbGVmdDogMHB4O1xcbiAgYmFja2dyb3VuZDogI2VlZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNpZGVuYXYgYSB7XFxuICBwYWRkaW5nOiA2cHggOHB4IDZweCAxNnB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgY29sb3I6ICMwYTBhMGE7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnNpZGVuYXYgYTpob3ZlciB7XFxuICBmb250LXNpemU6IDE1LjJweDtcXG59XFxuXFxuI3Byb2plY3RMaXN0e1xcbm1hcmdpbjogMHB4O1xcbmZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuZm9udC1zaXplOiAxMnB4O1xcbmNvbG9yOiByZ2IoOCwgOCwgOCk7XFxufVxcblxcbi5wcm9qZWN0SXRlbXtcXG5saXN0LXN0eWxlLXR5cGU6bm9uZTtcXG5tYXJnaW4tdG9wOiAwcHg7XFxud2lkdGg6MTAwcHg7XFxufVxcbi5wcm9qZWN0SXRlbTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjAyMlxcXCI7XFxuICBjb2xvcjogI2YzY2YyYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcXG4gIHdpZHRoOiAxZW07XFxuICBtYXJnaW4tbGVmdDogLTFlbTtcXG59XFxuXFxuLyogICBTZWN0aW9ucyAqL1xcbiNhbGxTZWN0aW9uc1dyYXBwZXJ7XFxuZGlzcGxheTpmbGV4O1xcbndpZHRoOiBmaXQtY29udGVudDtcXG5qdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbmZsZXgtd3JhcDogbm93cmFwO1xcbmFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbmFsaWduLXNlbGY6IHN0YXJ0O1xcbmFsaWduLWl0ZW1zOiBzdGFydDtcXG5mbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4jbmV3U2VjdGlvbldyYXBwZXJ7XFxuZGlzcGxheTogZmxleDtcXG5cXG59XFxuLnNlY3Rpb25XcmFwcGVye1xcbndpZHRoOiAzMDBweDtcXG5taW4td2lkdGg6IDMwMHB4O1xcbm1hcmdpbjogMjBweDtcXG5mb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XFxuZGlzcGxheTogZmxleDtcXG5qdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuZmxleC13cmFwOiB3cmFwO1xcbmFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG4uc2VjdGlvbntcXG53aWR0aDogMzAwcHg7XFxufVxcbi5zZWN0aW9uVGl0bGV7XFxuZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xcbmZvbnQtc2l6ZTogMzBweDtcXG5mb250LXdlaWdodDogNTAwO1xcbm1hcmdpbi10b3A6IDBweDtcXG5tYXJnaW4tYm90dG9tOiAyMHB4O1xcbnBhZGRpbmc6IDBweDtcXG53aWR0aDogMjAwcHg7XFxuYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG4vKiAgU2F2ZWQgVGFzayAgKi8vKiAgU2F2ZWQgVGFzayAgKi8vKiAgU2F2ZWQgVGFzayAgKi9cXG4uc2F2ZWRXcmFwcGVye1xcbmRpc3BsYXk6IGZsZXg7XFxuZmxleC13cmFwOiB3cmFwO1xcbmJvcmRlci1zdHlsZTogc29saWQ7XFxuYm9yZGVyLXdpZHRoOiAxcHg7XFxuYm9yZGVyLXJhZGl1czogNXB4O1xcbmJvcmRlci1jb2xvcjojYjhiOGJkO1xcbm1hcmdpbi1ib3R0b206IDIwcHg7XFxucGFkZGluZzogMTBweDtcXG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5qdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG5qdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuYWxpZ24taXRlbXM6IGNlbnRlcjtcXG50cmFuc2l0aW9uOiBlYXNlLW91dDtcXG59XFxuLmJ1dHRvbnNXcmFwcGVye1xcbmRpc3BsYXk6ZmxleDtcXG5mbGV4LXdyYXA6IHdyYXA7XFxud2lkdGg6IDMwcHg7XFxubWFyZ2luOiAwcHg7XFxufVxcbi5idG5DaGVja3tcXG5hcHBlYXJhbmNlOiBub25lO1xcbmJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxud2lkdGg6IDIwcHg7XFxuaGVpZ2h0OiAyMHB4O1xcbmJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuLnNhdmVkVGl0bGVXcmFwcGVye1xcbmRpc3BsYXk6IGZsZXg7XFxuZmxleC13cmFwOiBub3dyYXA7XFxufVxcbi5zYXZlZFNjaGVkdWxlV3JhcHBlcntcXG5kaXNwbGF5OiBmbGV4O1xcbmZsZXgtd3JhcDogbm93cmFwO1xcbn1cXG4uc2F2ZWRUaXRsZXtcXG53aWR0aDogNTBweDtcXG59XFxuLnNhdmVkU2NoZWR1bGV7XFxud2lkdGg6MzBweDtcXG59XFxuLnNhdmVkSW5wdXR7XFxud2lkdGg6IDEwMHB4O1xcbmFwcGVhcmFuY2U6IG5vbmU7XFxuYm9yZGVyOiBub25lO1xcbn1cXG4uc2F2ZWRJbnB1dDpmb2N1cy12aXNpYmxle1xcbmFwcGVhcmFuY2U6IG5vbmU7XFxuYm9yZGVyOiBub25lO1xcbm91dGxpbmU6IG5vbmU7XFxufVxcbi5kZXNjcmlwdGlvbldyYXBwZXJ7XFxud2lkdGg6MjAwcHg7XFxufVxcbi5kZXNjcmlwdGlvbldyYXBwZXIgaW5wdXR7XFxuYXBwZWFyYW5jZTogbm9uZTtcXG5ib3JkZXItc3R5bGU6IG5vbmU7XFxuZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG5mb250LXNpemU6IDE1cHg7XFxubWFyZ2luLWxlZnQ6MTBweFxcbn1cXG5cXG4vKiAgTmV3VGFzayAgKi8vKiAgTmV3VGFzayAgKi8vKiAgTmV3VGFzayAgKi9cXG4ubmV3V3JhcHBlcntcXG5kaXNwbGF5OiBmbGV4O1xcbmJvcmRlci1zdHlsZTogc29saWQ7XFxuYm9yZGVyLXdpZHRoOiAxcHg7XFxuYm9yZGVyLXJhZGl1czogNXB4O1xcbmJvcmRlci1jb2xvcjogI2I4YjhiZDtcXG5wYWRkaW5nOiAyMHB4O1xcbmhlaWdodDogZml0LWNvbnRlbnQ7XFxubWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmZvcm1XcmFwcGVye1xcbmRpc3BsYXk6IGZsZXg7XFxuZmxleC13cmFwOiB3cmFwO1xcbndpZHRoOiAxMDAlO1xcbmp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcbi5uZXdUaXRsZXtcXG5mb250LXNpemU6IDI1cHg7XFxufVxcbi5mb3JtSW5wdXR7XFxud2lkdGg6IDEwMCU7XFxufVxcbi5mb3JtTGFiZWx7XFxubWFyZ2luLXJpZ2h0OiAxMDAlO1xcbn1cXG4ucHJpb3JpdHlze1xcbm1hcmdpbi1yaWdodDoxMDAlIDtcXG59XFxuLnByaW9yaXR5e1xcbmZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuZm9udC1zaXplOiAxMnB4O1xcbndpZHRoOiAyMDBweDtcXG59XFxuLmZvcm1Ob3Rlc3tcXG53aWR0aDo4NSU7XFxub3ZlcmZsb3c6c2Nyb2xsO1xcbm1hcmdpbi10b3A6IDVweDtcXG5hbGlnbi1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuLyogZHJvcGRvd24gZm9yIFByb2plY3RzKi8vKiBkcm9wZG93biBmb3IgUHJvamVjdHMqL1xcbi5kcm9wYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsMjI1LDEwOSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qLmRyb3Bkb3duIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5kcm9wZG93bi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBtaW4td2lkdGg6IDE2MHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uZHJvcGRvd24tY29udGVudCBhIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDEycHggMTZweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cXG5cXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge2Rpc3BsYXk6IGJsb2NrO31cXG5cXG4uZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge2JhY2tncm91bmQtY29sb3I6ICMzZThlNDE7fVxcbiovXFxuLyogYWRkKi8vKiBhZGQqLy8qIGFkZCovXFxuXFxuLmFkZFRhc2t7XFxuYXBwZWFyYW5jZTogbm9uZTtcXG5mb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbmZvbnQtc2l6ZTogMjBweDtcXG5mb250LXdlaWdodDogMjAwO1xcbmJvcmRlci13aWR0aDogMXB4O1xcbmJvcmRlci1yYWRpdXM6IDJweDtcXG5ib3JkZXItY29sb3I6I2I4YjhiZDtcXG5ib3JkZXItc3R5bGU6IHNvbGlkO1xcbmNvbG9yOiNiOGI4YmQ7XFxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuaGVpZ2h0OiAzMHB4O1xcbnBhZGRpbmctdG9wOiAwcHg7XFxucGFkZGluZy1yaWdodDogOHB4O1xcbnBhZGRpbmctbGVmdDogOHB4O1xcbnBhZGRpbmctYm90dG9tOiAwcHg7XFxubWFyZ2luLXRvcDogMHB4O1xcbm1hcmdpbi1yaWdodDogMTAwJTtcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxudmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG5cXG59XFxuXFxuLmFkZFNlY3Rpb257XFxuYXBwZWFyYW5jZTogbm9uZTtcXG5mb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbmZvbnQtc2l6ZTogMjBweDtcXG5mb250LXdlaWdodDogMjAwO1xcbmJvcmRlci13aWR0aDogMXB4O1xcbmJvcmRlci1yYWRpdXM6IDJweDtcXG5ib3JkZXItY29sb3I6I2I4YjhiZDtcXG5ib3JkZXItc3R5bGU6IHNvbGlkO1xcbmNvbG9yOiNiOGI4YmQ7XFxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuaGVpZ2h0OiAzMHB4O1xcbnBhZGRpbmctdG9wOiAwcHg7XFxucGFkZGluZy1yaWdodDogOHB4O1xcbnBhZGRpbmctbGVmdDogOHB4O1xcbnBhZGRpbmctYm90dG9tOiAwcHg7XFxubWFyZ2luLXRvcDogNzVweDtcXG5tYXJnaW4tcmlnaHQ6IDEwMCU7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbnZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuXFxuXFxufVxcblxcbi5zYXZlZE5vdGVze1xcbm1hcmdpbi1yaWdodDogNzIlO1xcblxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdG9kby5jc3NcIl0sXCJuYW1lc1wiOltd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QUFDakIsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLHNCQUFzQjs7O0FBR3RCOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAgICBoZWFkZXIgICAgKi8vKiAgICBoZWFkZXIgICAgKi8vKiAgICBoZWFkZXIgICAgKi8vKiAgICBoZWFkZXIgICAgKi9cXG5cXG4uaGVhZGVyV3JhcHBlcntcXG53aWR0aDogMTAwJTtcXG5oZWlnaHQ6IGZpdC1jb250ZW50O1xcbmRpc3BsYXk6IGZsZXg7XFxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5sb2dvV3JhcHBlcntcXG53aWR0aDpmaXQtY29udGVudFxcbn1cXG4jbG9nb3tcXG53aWR0aDogMjUwcHg7XFxuaGVpZ2h0OjcwcHg7XFxub2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuLyogICAgbWFpbiAgICovLyogICAgbWFpbiAgICovLyogICAgbWFpbiAgICovLyogICAgbWFpbiAgICovLyogICAgbWFpbiAgICovXFxuLm1haW5XcmFwcGVye1xcbmRpc3BsYXk6ZmxleDtcXG5qdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbmFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuLyogICBTaWRlYmFyICAqLy8qICAgU2lkZWJhciAgKi8vKiAgIFNpZGViYXIgICovXFxuLnNpZGVuYXYge1xcbiAgbWluLXdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogMTAwMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2lkZW5hdiBhIHtcXG4gIHBhZGRpbmc6IDZweCA4cHggNnB4IDE2cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBjb2xvcjogIzBhMGEwYTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uc2lkZW5hdiBhOmhvdmVyIHtcXG4gIGZvbnQtc2l6ZTogMTUuMnB4O1xcbn1cXG5cXG4jcHJvamVjdExpc3R7XFxubWFyZ2luOiAwcHg7XFxuZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG5mb250LXNpemU6IDEycHg7XFxuY29sb3I6IHJnYig4LCA4LCA4KTtcXG59XFxuXFxuLnByb2plY3RJdGVte1xcbmxpc3Qtc3R5bGUtdHlwZTpub25lO1xcbm1hcmdpbi10b3A6IDBweDtcXG53aWR0aDoxMDBweDtcXG59XFxuLnByb2plY3RJdGVtOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwyMDIyXFxcIjtcXG4gIGNvbG9yOiAjZjNjZjJjO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxcbiAgd2lkdGg6IDFlbTtcXG4gIG1hcmdpbi1sZWZ0OiAtMWVtO1xcbn1cXG5cXG4vKiAgIFNlY3Rpb25zICovXFxuI2FsbFNlY3Rpb25zV3JhcHBlcntcXG5kaXNwbGF5OmZsZXg7XFxud2lkdGg6IGZpdC1jb250ZW50O1xcbmp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuZmxleC13cmFwOiBub3dyYXA7XFxuYWxpZ24tY29udGVudDogc3RhcnQ7XFxuYWxpZ24tc2VsZjogc3RhcnQ7XFxuYWxpZ24taXRlbXM6IHN0YXJ0O1xcbmZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbiNuZXdTZWN0aW9uV3JhcHBlcntcXG5kaXNwbGF5OiBmbGV4O1xcblxcbn1cXG4uc2VjdGlvbldyYXBwZXJ7XFxud2lkdGg6IDMwMHB4O1xcbm1pbi13aWR0aDogMzAwcHg7XFxubWFyZ2luOiAyMHB4O1xcbmZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcXG5kaXNwbGF5OiBmbGV4O1xcbmp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5mbGV4LXdyYXA6IHdyYXA7XFxuYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG5hbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcbi5zZWN0aW9ue1xcbndpZHRoOiAzMDBweDtcXG59XFxuLnNlY3Rpb25UaXRsZXtcXG5mb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XFxuZm9udC1zaXplOiAzMHB4O1xcbmZvbnQtd2VpZ2h0OiA1MDA7XFxubWFyZ2luLXRvcDogMHB4O1xcbm1hcmdpbi1ib3R0b206IDIwcHg7XFxucGFkZGluZzogMHB4O1xcbndpZHRoOiAyMDBweDtcXG5ib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcbi8qICBTYXZlZCBUYXNrICAqLy8qICBTYXZlZCBUYXNrICAqLy8qICBTYXZlZCBUYXNrICAqL1xcbi5zYXZlZFdyYXBwZXJ7XFxuZGlzcGxheTogZmxleDtcXG5mbGV4LXdyYXA6IHdyYXA7XFxuYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG5ib3JkZXItd2lkdGg6IDFweDtcXG5ib3JkZXItcmFkaXVzOiA1cHg7XFxuYm9yZGVyLWNvbG9yOiNiOGI4YmQ7XFxubWFyZ2luLWJvdHRvbTogMjBweDtcXG5wYWRkaW5nOiAxMHB4O1xcbmp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbmp1c3RpZnktc2VsZjogY2VudGVyO1xcbmp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5hbGlnbi1pdGVtczogY2VudGVyO1xcbnRyYW5zaXRpb246IGVhc2Utb3V0O1xcbn1cXG4uYnV0dG9uc1dyYXBwZXJ7XFxuZGlzcGxheTpmbGV4O1xcbmZsZXgtd3JhcDogd3JhcDtcXG53aWR0aDogMzBweDtcXG5tYXJnaW46IDBweDtcXG59XFxuLmJ0bkNoZWNre1xcbmFwcGVhcmFuY2U6IG5vbmU7XFxuYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9zcmMvaW1hZ2VzL2xvdy5wbmdcXFwiKTtcXG5iYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG53aWR0aDogMjBweDtcXG5oZWlnaHQ6IDIwcHg7XFxuYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG4uc2F2ZWRUaXRsZVdyYXBwZXJ7XFxuZGlzcGxheTogZmxleDtcXG5mbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuLnNhdmVkU2NoZWR1bGVXcmFwcGVye1xcbmRpc3BsYXk6IGZsZXg7XFxuZmxleC13cmFwOiBub3dyYXA7XFxufVxcbi5zYXZlZFRpdGxle1xcbndpZHRoOiA1MHB4O1xcbn1cXG4uc2F2ZWRTY2hlZHVsZXtcXG53aWR0aDozMHB4O1xcbn1cXG4uc2F2ZWRJbnB1dHtcXG53aWR0aDogMTAwcHg7XFxuYXBwZWFyYW5jZTogbm9uZTtcXG5ib3JkZXI6IG5vbmU7XFxufVxcbi5zYXZlZElucHV0OmZvY3VzLXZpc2libGV7XFxuYXBwZWFyYW5jZTogbm9uZTtcXG5ib3JkZXI6IG5vbmU7XFxub3V0bGluZTogbm9uZTtcXG59XFxuLmRlc2NyaXB0aW9uV3JhcHBlcntcXG53aWR0aDoyMDBweDtcXG59XFxuLmRlc2NyaXB0aW9uV3JhcHBlciBpbnB1dHtcXG5hcHBlYXJhbmNlOiBub25lO1xcbmJvcmRlci1zdHlsZTogbm9uZTtcXG5mb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbmZvbnQtc2l6ZTogMTVweDtcXG5tYXJnaW4tbGVmdDoxMHB4XFxufVxcblxcbi8qICBOZXdUYXNrICAqLy8qICBOZXdUYXNrICAqLy8qICBOZXdUYXNrICAqL1xcbi5uZXdXcmFwcGVye1xcbmRpc3BsYXk6IGZsZXg7XFxuYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG5ib3JkZXItd2lkdGg6IDFweDtcXG5ib3JkZXItcmFkaXVzOiA1cHg7XFxuYm9yZGVyLWNvbG9yOiAjYjhiOGJkO1xcbnBhZGRpbmc6IDIwcHg7XFxuaGVpZ2h0OiBmaXQtY29udGVudDtcXG5tYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uZm9ybVdyYXBwZXJ7XFxuZGlzcGxheTogZmxleDtcXG5mbGV4LXdyYXA6IHdyYXA7XFxud2lkdGg6IDEwMCU7XFxuanVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuLm5ld1RpdGxle1xcbmZvbnQtc2l6ZTogMjVweDtcXG59XFxuLmZvcm1JbnB1dHtcXG53aWR0aDogMTAwJTtcXG59XFxuLmZvcm1MYWJlbHtcXG5tYXJnaW4tcmlnaHQ6IDEwMCU7XFxufVxcbi5wcmlvcml0eXN7XFxubWFyZ2luLXJpZ2h0OjEwMCUgO1xcbn1cXG4ucHJpb3JpdHl7XFxuZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG5mb250LXNpemU6IDEycHg7XFxud2lkdGg6IDIwMHB4O1xcbn1cXG4uZm9ybU5vdGVze1xcbndpZHRoOjg1JTtcXG5vdmVyZmxvdzpzY3JvbGw7XFxubWFyZ2luLXRvcDogNXB4O1xcbmFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4vKiBkcm9wZG93biBmb3IgUHJvamVjdHMqLy8qIGRyb3Bkb3duIGZvciBQcm9qZWN0cyovXFxuLmRyb3BidG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwyMjUsMTA5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyouZHJvcGRvd24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIG1pbi13aWR0aDogMTYwcHg7XFxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5kcm9wZG93bi1jb250ZW50IGEge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMTJweCAxNnB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxcblxcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7ZGlzcGxheTogYmxvY2s7fVxcblxcbi5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7YmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTt9XFxuKi9cXG4vKiBhZGQqLy8qIGFkZCovLyogYWRkKi9cXG5cXG4uYWRkVGFza3tcXG5hcHBlYXJhbmNlOiBub25lO1xcbmZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuZm9udC1zaXplOiAyMHB4O1xcbmZvbnQtd2VpZ2h0OiAyMDA7XFxuYm9yZGVyLXdpZHRoOiAxcHg7XFxuYm9yZGVyLXJhZGl1czogMnB4O1xcbmJvcmRlci1jb2xvcjojYjhiOGJkO1xcbmJvcmRlci1zdHlsZTogc29saWQ7XFxuY29sb3I6I2I4YjhiZDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5oZWlnaHQ6IDMwcHg7XFxucGFkZGluZy10b3A6IDBweDtcXG5wYWRkaW5nLXJpZ2h0OiA4cHg7XFxucGFkZGluZy1sZWZ0OiA4cHg7XFxucGFkZGluZy1ib3R0b206IDBweDtcXG5tYXJnaW4tdG9wOiAwcHg7XFxubWFyZ2luLXJpZ2h0OiAxMDAlO1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG52ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG4uYWRkU2VjdGlvbntcXG5hcHBlYXJhbmNlOiBub25lO1xcbmZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuZm9udC1zaXplOiAyMHB4O1xcbmZvbnQtd2VpZ2h0OiAyMDA7XFxuYm9yZGVyLXdpZHRoOiAxcHg7XFxuYm9yZGVyLXJhZGl1czogMnB4O1xcbmJvcmRlci1jb2xvcjojYjhiOGJkO1xcbmJvcmRlci1zdHlsZTogc29saWQ7XFxuY29sb3I6I2I4YjhiZDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5oZWlnaHQ6IDMwcHg7XFxucGFkZGluZy10b3A6IDBweDtcXG5wYWRkaW5nLXJpZ2h0OiA4cHg7XFxucGFkZGluZy1sZWZ0OiA4cHg7XFxucGFkZGluZy1ib3R0b206IDBweDtcXG5tYXJnaW4tdG9wOiA3NXB4O1xcbm1hcmdpbi1yaWdodDogMTAwJTtcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxudmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG5cXG5cXG59XFxuXFxuLnNhdmVkTm90ZXN7XFxubWFyZ2luLXJpZ2h0OiA3MiU7XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgYWRkRGF5cyBmcm9tIFwiLi4vYWRkRGF5cy9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZE1vbnRocyBmcm9tIFwiLi4vYWRkTW9udGhzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGFkZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCB5ZWFycywgbW9udGhzLCB3ZWVrcywgZGF5cywgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCB5ZWFycywgbW9udGhzLCB3ZWVrcywgZGF5cywgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7RHVyYXRpb259IGR1cmF0aW9uIC0gdGhlIG9iamVjdCB3aXRoIHllYXJzLCBtb250aHMsIHdlZWtzLCBkYXlzLCBob3VycywgbWludXRlcyBhbmQgc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICpcbiAqIHwgS2V5ICAgICAgICAgICAgfCBEZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgeWVhcnMgICAgICAgICAgfCBBbW91bnQgb2YgeWVhcnMgdG8gYmUgYWRkZWQgICAgICAgIHxcbiAqIHwgbW9udGhzICAgICAgICAgfCBBbW91bnQgb2YgbW9udGhzIHRvIGJlIGFkZGVkICAgICAgIHxcbiAqIHwgd2Vla3MgICAgICAgICAgfCBBbW91bnQgb2Ygd2Vla3MgdG8gYmUgYWRkZWQgICAgICAgfFxuICogfCBkYXlzICAgICAgICAgICB8IEFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkICAgICAgICAgfFxuICogfCBob3VycyAgICAgICAgICB8IEFtb3VudCBvZiBob3VycyB0byBiZSBhZGRlZCAgICAgICAgfFxuICogfCBtaW51dGVzICAgICAgICB8IEFtb3VudCBvZiBtaW51dGVzIHRvIGJlIGFkZGVkICAgICAgfFxuICogfCBzZWNvbmRzICAgICAgICB8IEFtb3VudCBvZiBzZWNvbmRzIHRvIGJlIGFkZGVkICAgICAgfFxuICpcbiAqIEFsbCB2YWx1ZXMgZGVmYXVsdCB0byAwXG4gKlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCB0aGUgZm9sbG93aW5nIGR1cmF0aW9uIHRvIDEgU2VwdGVtYmVyIDIwMTQsIDEwOjE5OjUwXG4gKiBjb25zdCByZXN1bHQgPSBhZGQobmV3IERhdGUoMjAxNCwgOCwgMSwgMTAsIDE5LCA1MCksIHtcbiAqICAgeWVhcnM6IDIsXG4gKiAgIG1vbnRoczogOSxcbiAqICAgd2Vla3M6IDEsXG4gKiAgIGRheXM6IDcsXG4gKiAgIGhvdXJzOiA1LFxuICogICBtaW51dGVzOiA5LFxuICogICBzZWNvbmRzOiAzMCxcbiAqIH0pXG4gKiAvLz0+IFRodSBKdW4gMTUgMjAxNyAxNToyOToyMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGQoZGlydHlEYXRlLCBkdXJhdGlvbikge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgaWYgKCFkdXJhdGlvbiB8fCB0eXBlb2YgZHVyYXRpb24gIT09ICdvYmplY3QnKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIHllYXJzID0gJ3llYXJzJyBpbiBkdXJhdGlvbiA/IHRvSW50ZWdlcihkdXJhdGlvbi55ZWFycykgOiAwO1xuICB2YXIgbW9udGhzID0gJ21vbnRocycgaW4gZHVyYXRpb24gPyB0b0ludGVnZXIoZHVyYXRpb24ubW9udGhzKSA6IDA7XG4gIHZhciB3ZWVrcyA9ICd3ZWVrcycgaW4gZHVyYXRpb24gPyB0b0ludGVnZXIoZHVyYXRpb24ud2Vla3MpIDogMDtcbiAgdmFyIGRheXMgPSAnZGF5cycgaW4gZHVyYXRpb24gPyB0b0ludGVnZXIoZHVyYXRpb24uZGF5cykgOiAwO1xuICB2YXIgaG91cnMgPSAnaG91cnMnIGluIGR1cmF0aW9uID8gdG9JbnRlZ2VyKGR1cmF0aW9uLmhvdXJzKSA6IDA7XG4gIHZhciBtaW51dGVzID0gJ21pbnV0ZXMnIGluIGR1cmF0aW9uID8gdG9JbnRlZ2VyKGR1cmF0aW9uLm1pbnV0ZXMpIDogMDtcbiAgdmFyIHNlY29uZHMgPSAnc2Vjb25kcycgaW4gZHVyYXRpb24gPyB0b0ludGVnZXIoZHVyYXRpb24uc2Vjb25kcykgOiAwOyAvLyBBZGQgeWVhcnMgYW5kIG1vbnRoc1xuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXRlV2l0aE1vbnRocyA9IG1vbnRocyB8fCB5ZWFycyA/IGFkZE1vbnRocyhkYXRlLCBtb250aHMgKyB5ZWFycyAqIDEyKSA6IGRhdGU7IC8vIEFkZCB3ZWVrcyBhbmQgZGF5c1xuXG4gIHZhciBkYXRlV2l0aERheXMgPSBkYXlzIHx8IHdlZWtzID8gYWRkRGF5cyhkYXRlV2l0aE1vbnRocywgZGF5cyArIHdlZWtzICogNykgOiBkYXRlV2l0aE1vbnRoczsgLy8gQWRkIGRheXMsIGhvdXJzLCBtaW51dGVzIGFuZCBzZWNvbmRzXG5cbiAgdmFyIG1pbnV0ZXNUb0FkZCA9IG1pbnV0ZXMgKyBob3VycyAqIDYwO1xuICB2YXIgc2Vjb25kc1RvQWRkID0gc2Vjb25kcyArIG1pbnV0ZXNUb0FkZCAqIDYwO1xuICB2YXIgbXNUb0FkZCA9IHNlY29uZHNUb0FkZCAqIDEwMDA7XG4gIHZhciBmaW5hbERhdGUgPSBuZXcgRGF0ZShkYXRlV2l0aERheXMuZ2V0VGltZSgpICsgbXNUb0FkZCk7XG4gIHJldHVybiBmaW5hbERhdGU7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSAtIHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IC0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGREYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuXG4gIGlmIChpc05hTihhbW91bnQpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgZGF5cywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZE1vbnRoc1xuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtb250aHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbW9udGhzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1vbnRocyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtb250aHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDUgbW9udGhzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNb250aHMobmV3IERhdGUoMjAxNCwgOCwgMSksIDUpXG4gKiAvLz0+IFN1biBGZWIgMDEgMjAxNSAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1vbnRocyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcblxuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIG1vbnRocywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIHZhciBkYXlPZk1vbnRoID0gZGF0ZS5nZXREYXRlKCk7IC8vIFRoZSBKUyBEYXRlIG9iamVjdCBzdXBwb3J0cyBkYXRlIG1hdGggYnkgYWNjZXB0aW5nIG91dC1vZi1ib3VuZHMgdmFsdWVzIGZvclxuICAvLyBtb250aCwgZGF5LCBldGMuIEZvciBleGFtcGxlLCBuZXcgRGF0ZSgyMDIwLCAwLCAwKSByZXR1cm5zIDMxIERlYyAyMDE5IGFuZFxuICAvLyBuZXcgRGF0ZSgyMDIwLCAxMywgMSkgcmV0dXJucyAxIEZlYiAyMDIxLiAgVGhpcyBpcyAqYWxtb3N0KiB0aGUgYmVoYXZpb3Igd2VcbiAgLy8gd2FudCBleGNlcHQgdGhhdCBkYXRlcyB3aWxsIHdyYXAgYXJvdW5kIHRoZSBlbmQgb2YgYSBtb250aCwgbWVhbmluZyB0aGF0XG4gIC8vIG5ldyBEYXRlKDIwMjAsIDEzLCAzMSkgd2lsbCByZXR1cm4gMyBNYXIgMjAyMSBub3QgMjggRmViIDIwMjEgYXMgZGVzaXJlZC4gU29cbiAgLy8gd2UnbGwgZGVmYXVsdCB0byB0aGUgZW5kIG9mIHRoZSBkZXNpcmVkIG1vbnRoIGJ5IGFkZGluZyAxIHRvIHRoZSBkZXNpcmVkXG4gIC8vIG1vbnRoIGFuZCB1c2luZyBhIGRhdGUgb2YgMCB0byBiYWNrIHVwIG9uZSBkYXkgdG8gdGhlIGVuZCBvZiB0aGUgZGVzaXJlZFxuICAvLyBtb250aC5cblxuICB2YXIgZW5kT2ZEZXNpcmVkTW9udGggPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSk7XG4gIGVuZE9mRGVzaXJlZE1vbnRoLnNldE1vbnRoKGRhdGUuZ2V0TW9udGgoKSArIGFtb3VudCArIDEsIDApO1xuICB2YXIgZGF5c0luTW9udGggPSBlbmRPZkRlc2lyZWRNb250aC5nZXREYXRlKCk7XG5cbiAgaWYgKGRheU9mTW9udGggPj0gZGF5c0luTW9udGgpIHtcbiAgICAvLyBJZiB3ZSdyZSBhbHJlYWR5IGF0IHRoZSBlbmQgb2YgdGhlIG1vbnRoLCB0aGVuIHRoaXMgaXMgdGhlIGNvcnJlY3QgZGF0ZVxuICAgIC8vIGFuZCB3ZSdyZSBkb25lLlxuICAgIHJldHVybiBlbmRPZkRlc2lyZWRNb250aDtcbiAgfSBlbHNlIHtcbiAgICAvLyBPdGhlcndpc2UsIHdlIG5vdyBrbm93IHRoYXQgc2V0dGluZyB0aGUgb3JpZ2luYWwgZGF5LW9mLW1vbnRoIHZhbHVlIHdvbid0XG4gICAgLy8gY2F1c2UgYW4gb3ZlcmZsb3csIHNvIHNldCB0aGUgZGVzaXJlZCBkYXktb2YtbW9udGguIE5vdGUgdGhhdCB3ZSBjYW4ndFxuICAgIC8vIGp1c3Qgc2V0IHRoZSBkYXRlIG9mIGBlbmRPZkRlc2lyZWRNb250aGAgYmVjYXVzZSB0aGF0IG9iamVjdCBtYXkgaGF2ZSBoYWRcbiAgICAvLyBpdHMgdGltZSBjaGFuZ2VkIGluIHRoZSB1bnVzdWFsIGNhc2Ugd2hlcmUgd2hlcmUgYSBEU1QgdHJhbnNpdGlvbiB3YXMgb25cbiAgICAvLyB0aGUgbGFzdCBkYXkgb2YgdGhlIG1vbnRoIGFuZCBpdHMgbG9jYWwgdGltZSB3YXMgaW4gdGhlIGhvdXIgc2tpcHBlZCBvclxuICAgIC8vIHJlcGVhdGVkIG5leHQgdG8gYSBEU1QgdHJhbnNpdGlvbi4gIFNvIHdlIHVzZSBgZGF0ZWAgaW5zdGVhZCB3aGljaCBpc1xuICAgIC8vIGd1YXJhbnRlZWQgdG8gc3RpbGwgaGF2ZSB0aGUgb3JpZ2luYWwgdGltZS5cbiAgICBkYXRlLnNldEZ1bGxZZWFyKGVuZE9mRGVzaXJlZE1vbnRoLmdldEZ1bGxZZWFyKCksIGVuZE9mRGVzaXJlZE1vbnRoLmdldE1vbnRoKCksIGRheU9mTW9udGgpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgJy4vZmFjdG9yeSc7XG5pbXBvcnQgJy4vZG9tJztcbmltcG9ydCB7Y29tcG9zZSwgZWxlbWVudH0gZnJvbSAnLi9kb20nO1xuLy8gQWRkIG5lY2Vzc2FyeSBldmVudCBsaXN0ZW5lcnNcbmNvbnN0IG5ld1NlY3Rpb24gPSAoKSA9PiB7XG4gIGVsZW1lbnQuYWRkU2VjdGlvbigpO1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkU2VjdGlvbicpO1xuICAvLyBIb3cgbWFueSBzZWN0aW9ucyBhcmUgYWxyZWFkeSBzYXZlZD9cbiAgbGV0IGNvbCA9IHBhcnNlSW50KGNvbENvdW50ZXIoKSkrMTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbXBvc2UubmV3U2VjdGlvbihjb2wsICdhbGxTZWN0aW9uc1dyYXBwZXInLCAnTmV3IFNlY3Rpb24nKTtcbiAgICBjb2wrKztcbiAgfSk7XG59O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbmZ1bmN0aW9uIGxpbmVDb3VudGVyKGNvbCkge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW1bMF0hPSdzJyk7XG4gIGNvbnN0IGZpbHRlckNvbCA9IGtleXMuZmlsdGVyKCAoaXRlbSkgPT4gaXRlbVswXSA9PT0gY29sKTtcbiAgbGV0IGxpbmVzID0gMDtcbiAgZmlsdGVyQ29sLmxlbmd0aCA9PT0gMCA/IGxpbmVzID0gMCA6XG4gIGxpbmVzID0gZmlsdGVyQ29sLmxlbmd0aC80O1xuICByZXR1cm4gbGluZXM7XG59XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuZnVuY3Rpb24gY29sQ291bnRlcigpIHtcbiAgY29uc3Qga2V5cyA9IHNlYXJjaEtleXMoKS5zb3J0KCkuZmlsdGVyKChpdGVtKSA9PiBpdGVtWzBdIT0ncycpO1xuICBsZXQgY29sID0gMDtcbiAgbGV0IGxhc3RJbmRleCA9IGtleXMubGVuZ3RoIC0gMTtcbiAgaWYgKGxhc3RJbmRleCA9PT0gLTEpIHtcbiAgICBsYXN0SW5kZXggPSAwO1xuICB9IGVsc2Uge1xuICAgIGNvbCA9IGtleXNbbGFzdEluZGV4XVswXTtcbiAgfVxuICByZXR1cm4gY29sO1xufVxuXG4vLyBmaW5kIHVuaXF1ZSBpbmRleGVzIGluIGRhdGFiYXNlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuZnVuY3Rpb24gc2VhcmNoS2V5cygpIHtcbiAgY29uc3QgZGF0YSA9IFsuLi5PYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZpbHRlcigoaXRlbSkgPT4gaXRlbVswXSE9J3MnKV07XG5cbiAgY29uc3QgaW5kZXhBcnJheSA9IFtdO1xuICBkYXRhLm1hcCgoa2V5KSA9PiB7XG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKC9bYS16QS1aXS8pO1xuICAgIGNvbnN0IG1hdGNoID0gcmVnZXguZXhlYyhrZXkpO1xuICAgIGluZGV4QXJyYXkucHVzaChrZXkuc2xpY2UoMCwgbWF0Y2guaW5kZXgpKTtcbiAgfSk7XG4gIGNvbnN0IHVuaXF1ZSA9IFsuLi5uZXcgU2V0KGluZGV4QXJyYXkpXTtcblxuICByZXR1cm4gdW5pcXVlO1xufVxuXG4vLyBkaXNwbGF5IG9iamVjdHMgd2l0aCBjb3JyZWN0IGluZGV4XG5cbmNvbnN0IGZpbmRUYXNrID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgY29uc3Qgc2VhcmNoID0gKGtleSkgPT4ge1xuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgvW2EtekEtWl0vKTtcbiAgICBjb25zdCBtYXRjaCA9IHJlZ2V4LmV4ZWMoa2V5KTtcbiAgICBjb25zdCByZXN1bHQgPSBrZXkuc2xpY2UoMCwgbWF0Y2guaW5kZXgpO1xuICAgIHJldHVybiBpbmRleCA9PT0gcmVzdWx0O1xuICB9O1xuXG4gIGNvbnN0IHNlYXJjaFJlc3VsdCA9IE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSlcbiAgICAgIC5zb3J0KClcbiAgICAgIC5maWx0ZXIoKGtleSkgPT4gc2VhcmNoKGtleSkpXG4gICAgICAubWFwKChrZXkpID0+IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBzZWFyY2hSZXN1bHRbM10sXG4gICAgICAgIHNjaGVkdWxlOiBzZWFyY2hSZXN1bHRbMl0sXG4gICAgICAgIHByaW9yaXR5OiBzZWFyY2hSZXN1bHRbMV0sXG4gICAgICAgIG5vdGVzOiBzZWFyY2hSZXN1bHRbMF0sXG4gICAgICB9LFxuICApO1xufTtcblxuLy8gR2V0IHNlY3Rpb24gdGl0bGVzIGZyb20gbG9jYWxTdG9yYWdlXG5jb25zdCBnZXRTZWN0aW9uVGl0bGUgPSAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLnNvcnQoKTtcbiAgZGF0YVxuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbVswXSA9PT0gJ3MnKVxuICAgICAgLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBpdGVtLmxlbmd0aCAtIDE7XG4gICAgICAgIGNvbnN0IGNvbCA9IGl0ZW1bbGFzdEluZGV4XTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb2wpO1xuICAgICAgICB0aXRsZS52YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGl0ZW0pO1xuICAgICAgfSk7XG59O1xuXG4vLyBDbGljayBhIHRhc2sgYW5kIG9wZW4gZWRpdG9yXG5jb25zdCBlZGl0VGFzayA9ICgpID0+IHtcbiAgY29uc3QgdGFza3NBcnJheSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNhdmVkV3JhcHBlcicpKTtcbiAgdGFza3NBcnJheS5tYXAoIChpdGVtKSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IGVkaXQoaXRlbSksIHtvbmNlOiB0cnVlfSkpO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIGZ1bmN0aW9uIGVkaXQoaXRlbSkge1xuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgvW2EtekEtWl0vKTtcbiAgICBjb25zdCBtYXRjaCA9IHJlZ2V4LmV4ZWMoaXRlbSk7XG4gICAgY29uc3QgaW5kZXggPSBpdGVtLmlkLnNsaWNlKDAsIG1hdGNoLmluZGV4LTEpO1xuICAgIGNvbnN0IHRhc2sgPSBmaW5kVGFzayhpbmRleCk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgICBjb25zdCBwcmlvcml0eSA9IGVsZW1lbnQubGFiZWwoYCR7aW5kZXh9cHJpb3JpdHlgLCBpdGVtLmlkLCBgJHtpbmRleH1ub3Rlc2AsICdOb3RlczonLCAnc2F2ZWROb3RlcycgKVxuICAgIGNvbnN0IGxhYmVsID0gZWxlbWVudC5sYWJlbChgJHtpbmRleH1ub3Rlc2AsIGl0ZW0uaWQsIGAke2luZGV4fW5vdGVzYCwgJ05vdGVzOicsICdzYXZlZE5vdGVzJyApO1xuICAgIGNvbnN0IG5vdGVzID0gZWxlbWVudC50ZXh0QXJlYShgJHtpbmRleH1ub3Rlc2AsIGl0ZW0uaWQgKTtcbiAgfTtcbn07XG4vLyBDb3VudGVyIHRvIG1hcCBsaW5lc1xuY29uc3QgY291bnRlckxpbmVzID0gKGVsZW1lbnQpID0+IHtcbiAgY29uc3QgaWQgPSBlbGVtZW50LmlkO1xuICBjb25zdCBsaW5lSW5kZXggPSBpZC5pbmRleE9mKCcqJykgKyAxO1xuICBjb25zdCBsaW5lID0gaWQuc2xpY2UobGluZUluZGV4KTtcbiAgaWYgKGxpbmUgPT09ICcnKSB7XG4gICAgZWxlbWVudC5pZCA9IGlkICsgMDtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmlkID0gaWQucmVwbGFjZShgKiR7bGluZX1gLCBgKiR7cGFyc2VJbnQobGluZSkgKyAxfWApO1xuICB9XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuZXhwb3J0IHtuZXdTZWN0aW9uLCBsaW5lQ291bnRlciwgY291bnRlckxpbmVzLCBzZWFyY2hLZXlzLCBmaW5kVGFzaywgY29sQ291bnRlciwgZ2V0U2VjdGlvblRpdGxlLCBlZGl0VGFza307XG4iLCJpbXBvcnQge2Zvcm1Ecml2ZXIsIHRhc2tGYWN0b3J5fSBmcm9tICcuL2ZhY3RvcnknO1xuaW1wb3J0IHtsaW5lQ291bnRlciwgY29sQ291bnRlcn0gZnJvbSAnLi9jb250cm9sbGVyJztcbmltcG9ydCBIaWdoIGZyb20gJy4vaW1hZ2VzL2hpZ3RoLnBuZyc7XG5pbXBvcnQgTWVkaXVtIGZyb20gJy4vaW1hZ2VzL21lZGl1bS5wbmcnO1xuaW1wb3J0IExvdyBmcm9tICcuL2ltYWdlcy9sb3cucG5nJztcbmltcG9ydCB7YWRkfSBmcm9tICdkYXRlLWZucyc7Ly8gQWxsIG5lZWRlZCB3cmFwcGVyc1xuY29uc3Qgd3JhcHBlciA9ICgoKSA9PiB7XG4gIC8vIE5ldyBTZWN0aW9uIFdyYXBwZXJcbiAgY29uc3Qgc2VjdGlvbiA9IChpZCwgYXBwZW5kVG8pID0+IHtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VjdGlvbi5pZCA9IGlkO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0ID0gJ3NlY3Rpb25XcmFwcGVyJztcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBlbmRUbyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICB9O1xuXG4gIGNvbnN0IHNhdmVkU2VjdGlvbiA9IChpZCwgYXBwZW5kVG8pID0+IHtcbiAgICBjb25zdCBzYXZlZFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzYXZlZFNlY3Rpb24uaWQgPSBpZDtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBlbmRUbyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHNhdmVkU2VjdGlvbik7XG4gIH07XG5cbiAgLy8gU2F2ZWQgdGl0bGUgd3JhcHBlcnNcbiAgY29uc3Qgc2F2ZWQgPSAoaWQsIGFwcGVuZFRvKSA9PiB7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwZW5kVG8pO1xuICAgIGNvbnN0IHNhdmVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2F2ZWQuaWQgPSBpZDtcbiAgICBzYXZlZC5jbGFzc0xpc3QgPSAnc2F2ZWRXcmFwcGVyJztcbiAgICBzYXZlZC5zZXRBdHRyaWJ1dGUoJ3JlYWRPbmx5JywgJ3RydWUnKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoc2F2ZWQpO1xuICB9O1xuXG4gIGNvbnN0IGJ1dHRvbiA9IChpZCwgYXBwZW5kVG8pID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b24uaWQgPSBpZDtcbiAgICBidXR0b24uY2xhc3NMaXN0ID0gJ2J1dHRvbnNXcmFwcGVyJztcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBlbmRUbyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIH07XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSAoaWQsIGFwcGVuZFRvKSA9PiB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbi5pZCA9IGlkO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdCA9ICdkZXNjcmlwdGlvbldyYXBwZXInO1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFwcGVuZFRvKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICB9O1xuXG4gIGNvbnN0IHNhdmVkVGl0bGUgPSAoaWQsIGFwcGVuZFRvKSA9PiB7XG4gICAgY29uc3Qgc2F2ZWRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNhdmVkVGl0bGUuaWQgPSBpZDtcbiAgICBzYXZlZFRpdGxlLmNsYXNzTGlzdCA9ICdzYXZlZFRpdGxlV3JhcHBlcic7XG4gICAgc2F2ZWRUaXRsZS5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3RydWUnKTtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBlbmRUbyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHNhdmVkVGl0bGUpO1xuICB9O1xuXG4gIGNvbnN0IHNhdmVkU2hlZHVsZSA9IChpZCwgYXBwZW5kVG8pID0+IHtcbiAgICBjb25zdCBzYXZlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNhdmVkLmlkID0gaWQ7XG4gICAgc2F2ZWQuY2xhc3NMaXN0ID0gJ3NhdmVkU2NoZWR1bGVXcmFwcGVyJztcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBlbmRUbyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHNhdmVkKTtcbiAgfTtcbiAgLy8gRm9yIG5ldyB0YXNrIGZvcm1cbiAgY29uc3QgbmV3VGFzayA9IChpZCwgYXBwZW5kVG8pID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd3JhcHBlci5pZCA9IGlkO1xuICAgIHdyYXBwZXIuY2xhc3NMaXN0ID0gJ25ld1dyYXBwZXInO1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFwcGVuZFRvKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gIH07XG5cbiAgY29uc3QgbmV3Rm9ybSA9IChpZCwgYXBwZW5kVG8pID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd3JhcHBlci5pZCA9IGlkO1xuICAgIHdyYXBwZXIuY2xhc3NMaXN0ID0gJ2Zvcm1XcmFwcGVyJztcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBlbmRUbyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2VjdGlvbixcbiAgICBzYXZlZFNlY3Rpb24sXG4gICAgc2F2ZWQsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgc2F2ZWRUaXRsZSxcbiAgICBzYXZlZFNoZWR1bGUsXG4gICAgbmV3VGFzayxcbiAgICBidXR0b24sXG4gICAgbmV3Rm9ybSxcbiAgfTtcbn0pKCk7XG5cbi8vIEFsbCBuZWVkZWQgZWxlbWVudHNcbmNvbnN0IGVsZW1lbnQgPSAoKCkgPT4ge1xuICBjb25zdCBzZWN0aW9uVGl0bGUgPSAoaWQsIGFwcGVuZFRvLCB0ZXh0KSA9PiB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRpdGxlLmlkID0gaWQ7XG4gICAgdGl0bGUuY2xhc3NMaXN0ID0gJ3NlY3Rpb25UaXRsZSc7XG4gICAgdGl0bGUudHlwZSA9ICd0ZXh0JztcbiAgICB0aXRsZS52YWx1ZSA9IHRleHQ7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgc2VjdGlvbiR7aWR9YCwgYCR7dGl0bGUudmFsdWV9YCkpO1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFwcGVuZFRvKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICB9O1xuXG4gIC8vIGZvcm1cbiAgY29uc3QgbmV3Rm9ybSA9IChpZCwgYXBwZW5kVG8pID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uaWQgPSBpZDtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBlbmRUbyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGZvcm0pO1xuICB9O1xuXG4gIC8vIGlucHV0c1xuICBjb25zdCBzYXZlZElucHV0ID0gKGlkLCBhcHBlbmRUbywgdGV4dCkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC5pZCA9IGlkO1xuICAgIGlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXQuY2xhc3NMaXN0ID0gJ3NhdmVkSW5wdXQnO1xuICAgIGlucHV0LnZhbHVlID0gdGV4dDtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlYWRPbmx5JywgJ3RydWUnKTtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBlbmRUbyk7XG4gICAgYWRkLmV2ZVxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIH07XG5cbiAgY29uc3QgcHJpb3JpdHkgPSAoaWQsIGFwcGVuZFRvLCBpbWcpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaWYgKGlkICE9ICcnKSB7XG4gICAgICBpbnB1dC5pZCA9IGlkO1xuICAgIH1cbiAgICBpbnB1dC5jbGFzc0xpc3QgPSAnYnRuQ2hlY2snO1xuICAgIGlucHV0LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWd9KWA7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwZW5kVG8pO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIH07XG5cbiAgY29uc3QgaW5wdXQgPSAoaWQsIGFwcGVuZFRvLCB0eXBlLCBjbGFzc0xpc3QsIG5hbWUsIGNoZWNrZWQpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaWYgKGlkICE9ICcnKSB7XG4gICAgICBpbnB1dC5pZCA9IGlkO1xuICAgIH1cbiAgICBpbnB1dC5uYW1lID0gbmFtZTtcbiAgICBpbnB1dC50eXBlID0gdHlwZTtcbiAgICBpbnB1dC5jbGFzc0xpc3QgPSBjbGFzc0xpc3Q7XG4gICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gICAgfVxuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFwcGVuZFRvKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICB9O1xuICAvLyBsYWJlbHNcbiAgY29uc3QgbGFiZWwgPSAoaWQsIGFwcGVuZFRvLCBpbnB1dCwgdGV4dCwgY2xhc3NMaXN0KSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsLmlkID0gaWQ7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpbnB1dCk7XG4gICAgbGFiZWwuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICBsYWJlbC5jbGFzc0xpc3QgPSBjbGFzc0xpc3Q7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwZW5kVG8pO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIH07XG5cbiAgY29uc3QgbmV3TGFiZWxUaXRsZSA9IChpZCwgYXBwZW5kVG8sIGlucHV0LCB0ZXh0KSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGlmIChpZCAhPSAnJykge1xuICAgICAgbGFiZWwuaWQgPSBpZDtcbiAgICB9XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpbnB1dCk7XG4gICAgbGFiZWwuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICBsYWJlbC5jbGFzc0xpc3QgPSAnbmV3VGl0bGUnO1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFwcGVuZFRvKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICB9O1xuXG4gIC8vIHRleHRBcmVhXG5cbiAgY29uc3QgdGV4dEFyZWEgPSAoaWQsIGFwcGVuZFRvKSA9PiB7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgdGV4dC5pZCA9IGlkO1xuICAgIHRleHQuY2xhc3NMaXN0ID0gJ2Zvcm1Ob3Rlcyc7XG4gICAgdGV4dC5yb3dzID0gNDtcbiAgICB0ZXh0LmNvbHMgPSAyMDtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBlbmRUbyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRleHQpO1xuICB9O1xuXG4gIC8vIEFkZCBuZXcgcHJvamVjdFxuICBjb25zdCBwcm9qZWN0SXRlbSA9IChpZCwgbmFtZSkgPT4ge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS5pZCA9IGAke2lkfWA7XG4gICAgbGkuY2xhc3NMaXN0ID0gJ3Byb2plY3RJdGVtJztcbiAgICBsaS5pbm5lclRleHQgPSBgJHtuYW1lfWA7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdExpc3QnKTtcbiAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChsaSk7XG4gIH07XG5cbiAgLy8gU3VibWl0IGJ1dHRvblxuICBjb25zdCBmb3JtU3VibWl0ID0gKGFwcGVuZFRvKSA9PiB7XG4gICAgY29uc3QgZHJvcEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRyb3BCdXR0b24uY2xhc3NMaXN0ID0gJ2Ryb3BidG4nO1xuICAgIGRyb3BCdXR0b24uaW5uZXJUZXh0ID0gJ0FkZCc7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFwcGVuZFRvKTtcbiAgICBkcm9wQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgdGFzayA9IHRhc2tGYWN0b3J5KGZvcm1Ecml2ZXIoZm9ybSkpO1xuICAgICAgY29uc29sZS5sb2codGFzayk7XG4gICAgICB0YXNrLnNhdmUoKTtcbiAgICB9KTtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBlbmRUbyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGRyb3BCdXR0b24pO1xuICB9O1xuXG4gIC8vIEFkZCB0YXNrIG9yIHNlY3Rpb24gYnV0dG9uXG5cbiAgY29uc3QgYWRkVGFzayA9IChjb2wsIGFwcGVuZFRvKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBidXR0b24uaWQgPSBjb2wgKyAnKic7XG4gICAgYnV0dG9uLnZhbHVlID0gJysnO1xuICAgIGJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgYnV0dG9uLmNsYXNzTGlzdCA9ICdhZGRUYXNrJztcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBlbmRUbyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIH07XG5cbiAgY29uc3QgYWRkU2VjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGJ1dHRvbi5pZCA9ICdhZGRTZWN0aW9uJztcbiAgICBidXR0b24udmFsdWUgPSAnKyc7XG4gICAgYnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBidXR0b24uY2xhc3NMaXN0ID0gJ2FkZFNlY3Rpb24nO1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdTZWN0aW9uV3JhcHBlcicpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2VjdGlvblRpdGxlLFxuICAgIG5ld0Zvcm0sXG4gICAgc2F2ZWRJbnB1dCxcbiAgICBsYWJlbCxcbiAgICBwcm9qZWN0SXRlbSxcbiAgICBwcmlvcml0eSxcbiAgICB0ZXh0QXJlYSxcbiAgICBuZXdMYWJlbFRpdGxlLFxuICAgIGlucHV0LFxuICAgIGZvcm1TdWJtaXQsXG4gICAgYWRkU2VjdGlvbixcbiAgICBhZGRUYXNrLFxuICB9O1xufSkoKTtcblxuLy8gQ29tcG9zZWQgU3RydWN0dXJlcyA6IG5ld1NlY3Rpb24oKSwgbmV3VGFzaygpLCBzYXZlZFRhc2soKVxuXG5jb25zdCBjb21wb3NlID0gKCgpID0+IHtcbiAgY29uc3QgbmV3U2VjdGlvbiA9IChjb2wsIGFwcGVuZFRvLCB0aXRsZSkgPT4ge1xuICAgIHdyYXBwZXIuc2VjdGlvbihgJHtjb2x9c2VjdGlvbldyYXBwZXJgLCBhcHBlbmRUbyk7XG4gICAgZWxlbWVudC5zZWN0aW9uVGl0bGUoY29sLCBgJHtjb2x9c2VjdGlvbldyYXBwZXJgLCAnTmV3IFNlY3Rpb24nKTtcbiAgICB3cmFwcGVyLnNhdmVkU2VjdGlvbihgJHtjb2x9c2F2ZWRTZWN0aW9uYCwgYCR7Y29sfXNlY3Rpb25XcmFwcGVyYCk7XG4gICAgZWxlbWVudC5hZGRUYXNrKGAke2NvbH1gLCBgJHtjb2x9c2VjdGlvbldyYXBwZXJgKTtcbiAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7Y29sfSpgKTtcbiAgICBhZGRUYXNrLmlkID0gYCR7Y29sfSoke2xpbmVDb3VudGVyKCl9YDtcbiAgICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IFxuICAgICAgY29tcG9zZS5uZXdUYXNrKGNvbCwgYCR7Y29sfXNlY3Rpb25XcmFwcGVyYCkpO1xuICB9O1xuXG4gIGNvbnN0IHNhdmVkVGFzayA9IChjb2wsIGFwcGVuZFRvLCB0aXRsZSwgc2NoZWR1bGUsIHByaW9yaXR5KSA9PiB7XG4gICAgbGV0IGltZyA9IExvdztcbiAgICBzd2l0Y2ggKHByaW9yaXR5KSB7XG4gICAgICBjYXNlICdsb3cnOlxuICAgICAgICBpbWcgPSBMb3c7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgICAgaW1nID0gTWVkaXVtO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2hpZ2gnOlxuICAgICAgICBpbWcgPSBIaWdoO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGltZztcbiAgICB9XG4gICAgd3JhcHBlci5zYXZlZChgJHtjb2x9c2F2ZWRXcmFwcGVyYCwgYXBwZW5kVG8pO1xuICAgIHdyYXBwZXIuYnV0dG9uKGAke2NvbH1idXR0b25XcmFwcGVyYCwgYCR7Y29sfXNhdmVkV3JhcHBlcmApO1xuICAgIGVsZW1lbnQucHJpb3JpdHkoYCR7Y29sfXByaW9yaXR5YCwgYCR7Y29sfWJ1dHRvbldyYXBwZXJgLCBpbWcpO1xuICAgIHdyYXBwZXIuZGVzY3JpcHRpb24oYCR7Y29sfWRlc2NyaXB0aW9uV3JhcHBlcmAsIGAke2NvbH1zYXZlZFdyYXBwZXJgKTtcbiAgICB3cmFwcGVyLnNhdmVkVGl0bGUoYCR7Y29sfXNhdmVkVGl0bGVgLCBgJHtjb2x9ZGVzY3JpcHRpb25XcmFwcGVyYCk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgICBlbGVtZW50LmxhYmVsKFxuICAgICAgICBgJHtjb2x9c2F2ZWRUaXRsZUxhYmVsYCxcbiAgICAgICAgYCR7Y29sfXNhdmVkVGl0bGVgLFxuICAgICAgICBgJHtjb2x9c2F2ZWRUaXRsZUlucHV0YCxcbiAgICAgICAgJ1RpdGxlOicsXG4gICAgKTtcbiAgICBlbGVtZW50LnNhdmVkSW5wdXQoYCR7Y29sfXNhdmVkVGl0bGVJbnB1dGAsIGAke2NvbH1zYXZlZFRpdGxlYCwgdGl0bGUpO1xuICAgIHdyYXBwZXIuc2F2ZWRTaGVkdWxlKGAke2NvbH1zYXZlZFNoZWR1bGVgLCBgJHtjb2x9ZGVzY3JpcHRpb25XcmFwcGVyYCk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgICBlbGVtZW50LmxhYmVsKFxuICAgICAgICBgJHtjb2x9c2F2ZWRTY2hlZHVsZUxhYmVsYCxcbiAgICAgICAgYCR7Y29sfXNhdmVkU2hlZHVsZWAsXG4gICAgICAgIGAke2NvbH1zYXZlZFNjaGVkdWxlSW5wdXRgLFxuICAgICAgICAnU2NoZWR1bGU6JyxcbiAgICApO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgZWxlbWVudC5zYXZlZElucHV0KFxuICAgICAgICBgJHtjb2x9c2F2ZWRTY2hlZHVsZUlucHV0YCxcbiAgICAgICAgYCR7Y29sfXNhdmVkU2hlZHVsZWAsXG4gICAgICAgIHNjaGVkdWxlLFxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgbmV3VGFzayA9IChjb2wsIGFwcGVuZFRvKSA9PiB7XG4gICAgd3JhcHBlci5uZXdUYXNrKGAke2NvbH0qJHtsaW5lQ291bnRlcihjb2wpfXdgLCBhcHBlbmRUbyk7XG4gICAgY29uc3Qgc3ViY29sID0gYCR7Y29sfSoke2xpbmVDb3VudGVyKGNvbCl9ZndgO1xuICAgIHdyYXBwZXIubmV3Rm9ybShgJHtzdWJjb2x9YCwgYCR7Y29sfSoke2xpbmVDb3VudGVyKGNvbCl9d2ApO1xuICAgIGNvbnN0IGZvcm1jb2wgPSBgJHtjb2x9KiR7bGluZUNvdW50ZXIoY29sKX1mYDtcbiAgICBlbGVtZW50Lm5ld0Zvcm0oYCR7Zm9ybWNvbH1gLCBgJHtzdWJjb2x9YCk7XG5cbiAgICBlbGVtZW50Lm5ld0xhYmVsVGl0bGUoJycsIGZvcm1jb2wsICcnLCAnTmV3IFRhc2snKTtcbiAgICBlbGVtZW50LmlucHV0KCcnLCBmb3JtY29sLCAndGV4dCcsICdmb3JtSW5wdXQnKTtcbiAgICBlbGVtZW50LmxhYmVsKCcnLCBmb3JtY29sLCAnJywgJ1NjaGVkdWxlJyk7XG4gICAgZWxlbWVudC5pbnB1dCgnJywgZm9ybWNvbCwgJ2RhdGUnLCAnZm9ybUlucHV0Jyk7XG4gICAgZWxlbWVudC5sYWJlbCgnJywgZm9ybWNvbCwgJycsICdQcmlvcml0eScsICdwcmlvcml0eXMnKTtcbiAgICBlbGVtZW50LmxhYmVsKGAke2NvbH0gbG93YCwgZm9ybWNvbCwgJycsICcgICAgICAgICAgICAgIExvdycsICdwcmlvcml0eScpO1xuICAgIGVsZW1lbnQuaW5wdXQoYCR7Y29sfSBsb3dgLCBmb3JtY29sLCAncmFkaW8nKTtcbiAgICBlbGVtZW50LmxhYmVsKGAke2NvbH0gbWVkaXVtYCwgZm9ybWNvbCwgJycsICdNZWRpdW0nLCAncHJpb3JpdHknKTtcbiAgICBlbGVtZW50LmlucHV0KGAke2NvbH0gbWVkaXVtYCwgZm9ybWNvbCwgJ3JhZGlvJyk7XG4gICAgZWxlbWVudC5sYWJlbChgJHtjb2x9IGhpZ2hgLCBmb3JtY29sLCAnJywgJ0hpZ2gnLCAncHJpb3JpdHknKTtcbiAgICBlbGVtZW50LmlucHV0KGAke2NvbH0gaGlnaGAsIGZvcm1jb2wsICdyYWRpbycpO1xuICAgIGVsZW1lbnQubGFiZWwoJycsIGZvcm1jb2wsICcnLCAnTm90ZXMnLCAnZm9ybUxhYmVsJyk7XG4gICAgZWxlbWVudC50ZXh0QXJlYSgnJywgZm9ybWNvbCk7XG5cbiAgICBlbGVtZW50LmZvcm1TdWJtaXQoZm9ybWNvbCk7XG4gIH07XG4gIHJldHVybiB7bmV3U2VjdGlvbiwgc2F2ZWRUYXNrLCBuZXdUYXNrfTtcbn0pKCk7XG5cbmV4cG9ydCB7d3JhcHBlciwgZWxlbWVudCwgY29tcG9zZX07XG4iLCJpbXBvcnQgJy4vZG9tJztcblxuLy8gRmFjdG9yeSBGdW5jdGlvblxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuLy8gRm9ybSBEcml2ZXIsIHRha2VzIGluZm8gZnJvbSB0aGUgZm9ybSBhbmQgcmV0dXJucyBhbiBhcnJheSB3aXRoIHRoZSBwcm9wZXJ0eSB2YWx1ZXNcbmNvbnN0IGZvcm1Ecml2ZXIgPSAoZm9ybSkgPT4ge1xuICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtQXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm0ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvcm1BcnJheS5wdXNoKGZvcm1baV0pO1xuICAgIH1cbiAgICBjb25zdCBjaGVja2VkUHJpb3JpdHkgPSBmb3JtQXJyYXkuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmNoZWNrZWQpO1xuICAgIGlmIChjaGVja2VkUHJpb3JpdHkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gJ2xvdyc7XG4gICAgfVxuICAgIGNvbnN0IHByaW9yaXR5SWQgPSBjaGVja2VkUHJpb3JpdHlbMF0uaWQ7XG4gICAgY29uc3Qgc2xpY2VBdCA9IHByaW9yaXR5SWQuaW5kZXhPZignICcpICsgMTtcbiAgICBjb25zdCBwcmlvcml0eSA9IHByaW9yaXR5SWQuc2xpY2Uoc2xpY2VBdCk7XG4gICAgcmV0dXJuIHByaW9yaXR5O1xuICB9O1xuXG4gIGNvbnN0IGdldEluZGV4ID0gKGZvcm0pID0+IHtcbiAgICBjb25zdCBpZCA9IGZvcm0uaWQ7XG4gICAgY29uc3Qgc2xpY2VFbmQgPSBpZC5pbmRleE9mKCdmJyk7XG5cbiAgICByZXR1cm4gaWQuc2xpY2UoMCwgc2xpY2VFbmQpO1xuICB9O1xuXG4gIHJldHVybiBbXG4gICAgZ2V0SW5kZXgoZm9ybSksXG4gICAgZm9ybVswXS52YWx1ZSxcbiAgICBmb3JtWzFdLnZhbHVlLFxuICAgIGdldFByaW9yaXR5KGZvcm0pLFxuICAgIGZvcm1bNV0udmFsdWUsXG4gIF07XG59O1xuXG5jb25zdCB0YXNrUHJvdG8gPSB7XG4gIHNhdmU6IGZ1bmN0aW9uKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RoaXMuaW5kZXh9dGl0bGVgLCBgJHt0aGlzLnRpdGxlfWApO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RoaXMuaW5kZXh9c2NoZWR1bGVgLCBgJHt0aGlzLnNjaGVkdWxlfWApO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RoaXMuaW5kZXh9cHJpb3JpdHlgLCBgJHt0aGlzLnByaW9yaXR5fWApO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RoaXMuaW5kZXh9bm90ZXNgLCBgJHt0aGlzLm5vdGVzfWApO1xuICB9LFxuICBnZXRUYXNrOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzZWFyY2ggPSAoa2V5KSA9PiB7XG4gICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoL1thLXpBLVpdLyk7XG4gICAgICBjb25zdCBtYXRjaCA9IHJlZ2V4LmV4ZWMoa2V5KTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGtleS5zbGljZSgwLCBtYXRjaC5pbmRleCk7XG4gICAgICByZXR1cm4gdGhpcy5pbmRleCA9PT0gcmVzdWx0O1xuICAgIH07XG4gICAgY29uc3Qgc2VhcmNoUmVzdWx0ID0gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKVxuICAgICAgICAuZmlsdGVyKChrZXkpID0+IHNlYXJjaChrZXkpKVxuICAgICAgICAubWFwKChrZXkpID0+IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6IHNlYXJjaFJlc3VsdFswXSxcbiAgICAgICAgICBzY2hlZHVsZTogc2VhcmNoUmVzdWx0WzJdLFxuICAgICAgICAgIHByaW9yaXR5OiBzZWFyY2hSZXN1bHRbM10sXG4gICAgICAgICAgbm90ZXM6IHNlYXJjaFJlc3VsdFsxXSxcbiAgICAgICAgfSxcbiAgICApO1xuICB9LFxuICByZW1vdmVUYXNrOiBmdW5jdGlvbigpIHt9LFxufTtcblxuY29uc3QgdGFza0ZhY3RvcnkgPSAodmFsdWVzKSA9PiB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUodGFza1Byb3RvKSwge1xuICAgIGluZGV4OiB2YWx1ZXNbMF0sXG4gICAgdGl0bGU6IHZhbHVlc1sxXSxcbiAgICBzY2hlZHVsZTogdmFsdWVzWzJdLFxuICAgIHByaW9yaXR5OiB2YWx1ZXNbM10sXG4gICAgbm90ZXM6IHZhbHVlc1s0XSxcbiAgfSk7XG59O1xuXG5leHBvcnQge2Zvcm1Ecml2ZXIsIHRhc2tGYWN0b3J5fTtcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9kby5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCAnLi90b2RvLmNzcyc7XG5pbXBvcnQgTG9nbyBmcm9tICcuL2ltYWdlcy9sb2dvLnBuZyc7XG5pbXBvcnQgJy4vZG9tLmpzJztcbmltcG9ydCAnLi9mYWN0b3J5JztcbmltcG9ydCB7c2VhcmNoS2V5cywgZmluZFRhc2ssIG5ld1NlY3Rpb24sIGdldFNlY3Rpb25UaXRsZSwgZWRpdFRhc2t9IGZyb20gJy4vY29udHJvbGxlcic7XG5pbXBvcnQgeyBjb21wb3NlfSBmcm9tICcuL2RvbSc7XG5cbmNvbnN0IGxvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nbycpO1xubG9nby5zcmMgPSBMb2dvO1xuXG4vLyBPbiBsb2FkLCBjcmVhdGUgbmVjZXNzYXJ5IFRvZG9zIGJhc2VkIG9uIE9iamVjdC5rZXlzIGluIGxvY2FsU3RvcmFnZSxcbmNvbnN0IGluZGV4QXJyYXkgPSBbLi4uc2VhcmNoS2V5cygpXTtcbmluZGV4QXJyYXkuc29ydCgpLm1hcChkaXNwbGF5U2F2ZWQpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuZnVuY3Rpb24gZGlzcGxheVNhdmVkKGl0ZW0pIHtcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2l0ZW1bMF19c2VjdGlvbldyYXBwZXJgKTtcbiAgaWYgKCFzZWN0aW9uKSB7XG4gICAgY29tcG9zZS5uZXdTZWN0aW9uKGAke2l0ZW1bMF19YCwgJ2FsbFNlY3Rpb25zV3JhcHBlcicsICdTZWN0aW9uIFRpdGxlJyk7XG4gIH07XG5cbiAgY29uc3QgdGFzayA9IGZpbmRUYXNrKGl0ZW0pO1xuICBjb25zdCBjb2wgPSBpdGVtWzBdO1xuICBsZXQgbGluZSA9IGl0ZW1bMl07XG4gIGNvbXBvc2Uuc2F2ZWRUYXNrKFxuICAgICAgYCR7Y29sfSoke2xpbmV9YCxcbiAgICAgIGAke2NvbH1zYXZlZFNlY3Rpb25gLFxuICAgICAgdGFzay50aXRsZSxcbiAgICAgIHRhc2suc2NoZWR1bGUsXG4gICAgICB0YXNrLnByaW9yaXR5KTtcbiAgbGluZSsrO1xufTtcblxubmV3U2VjdGlvbigpO1xuZ2V0U2VjdGlvblRpdGxlKCk7XG5lZGl0VGFzaygpOyJdLCJzb3VyY2VSb290IjoiIn0=