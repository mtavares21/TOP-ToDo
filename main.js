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
___CSS_LOADER_EXPORT___.push([module.id, "/*    header    *//*    header    *//*    header    *//*    header    */\n\n.headerWrapper{\nwidth: 100%;\nheight: fit-content;\ndisplay: flex;\njustify-content: center;\n}\n.logoWrapper{\nwidth:fit-content\n}\n#logo{\nwidth: 250px;\nheight:70px;\nobject-fit: contain;\n}\n/*    main   *//*    main   *//*    main   *//*    main   *//*    main   */\n.mainWrapper{\ndisplay:flex;\njustify-content: start;\nalign-items: start;\n}\n/*   Sidebar  *//*   Sidebar  *//*   Sidebar  */\n.sidenav {\n  min-width: 250px;\n  height: 1000px;\n  margin-right: 100px;\n  margin-left: 0px;\n  background: #eee;\n  border-radius: 5px;\n  position: relative;\n}\n\n.sidenav a {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-family: 'Roboto Slab', serif;\n  font-size: 15px;\n  color: #0a0a0a;\n  display: block;\n}\n\n.sidenav a:hover {\n  font-size: 15.2px;\n}\n\n#projectList{\nmargin: 0px;\nfont-family: 'Lato', sans-serif;\nfont-size: 12px;\ncolor: rgb(8, 8, 8);\n}\n\n.projectItem{\nlist-style-type:none;\nmargin-top: 0px;\nwidth:100px;\n}\n.projectItem::before {\n  content: \"\\2022\";\n  color: #f3cf2c;\n  font-weight: bold;\n  display: inline-block; \n  width: 1em;\n  margin-left: -1em;\n}\n\n/*   Sections */\n#allSectionsWrapper{\ndisplay:flex;\nwidth: fit-content;\njustify-content: start;\nflex-wrap: nowrap;\nalign-content: start;\nalign-self: start;\nalign-items: start;\nflex-direction: row;\n}\n#newSectionWrapper{\ndisplay: flex;\n\n}\n.sectionWrapper{\nwidth: 300px;\nmin-width: 300px;\nmargin: 20px;\nfont-family: 'Roboto Slab', serif;\ndisplay: flex;\njustify-items: center;\nflex-wrap: wrap;\nalign-content: flex-start;\nalign-items: start;\n}\n.section{\nwidth: 300px;\n}\n.sectionTitle{\nfont-family: 'Roboto Slab', serif;\nfont-size: 30px;\nfont-weight: 500;\nmargin-top: 0px;\nmargin-bottom: 20px;\npadding: 0px;\nwidth: 200px;\nborder-style: none;\n}\n/*  Saved Task  *//*  Saved Task  *//*  Saved Task  */\n.savedWrapper{\ndisplay: flex;\nflex-wrap: wrap;\nborder-style: solid;\nborder-width: 1px;\nborder-radius: 5px;\nborder-color:#b8b8bd;\nmargin-bottom: 20px;\npadding: 10px;\njustify-content: space-around;\njustify-self: center;\njustify-items: center;\nalign-items: start;\ntransition: 3s ease-in-out;\n}\n\n.buttonsWrapper{\ndisplay:flex;\nflex-wrap: wrap;\njustify-items: center;\njustify-content: center;\nwidth: 30px;\nmargin: 0px;\n}\n.btnCheck{\nappearance: none;\nbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\nbackground-size: contain;\nbackground-repeat: no-repeat;\nwidth: 16px;\nheight: 16px;\nborder-style: none;\nmargin-top: 4px;\nmargin-bottom: 2px;\noutline: none;\ntransition: 0.1s ease-out;\n}\n.savedTitleWrapper{\ndisplay: flex;\nflex-wrap: nowrap;\n}\n.savedScheduleWrapper{\ndisplay: flex;\nflex-wrap: nowrap;\n}\n.savedTitle{\nwidth: 50px;\n}\n.savedSchedule{\nwidth:30px;\n}\n.savedInput{\nwidth: 100px;\nappearance: none;\nborder: none;\n}\n.savedInput:focus-visible{\nappearance: none;\nborder: none;\noutline: none;\n}\n.descriptionWrapper{\nwidth:200px;\ndisplay: flex;\nflex-wrap: wrap;\nalign-items: flex-start;\nalign-content: flex-start;\n}\n.descriptionWrapper input{\nappearance: none;\nborder-style: none;\nfont-family: 'Lato', sans-serif;\nfont-size: 14 px;\nmargin-left:10px\n}\n\n/*  NewTask  *//*  NewTask  *//*  NewTask  */\n.newWrapper{\ndisplay: flex;\nborder-style: solid;\nborder-width: 1px;\nborder-radius: 5px;\nborder-color: #b8b8bd;\npadding: 20px;\nheight: fit-content;\nmargin-bottom: 20px;\nflex-wrap: ;\n}\n.formWrapper{\ndisplay: flex;\nflex-wrap: wrap;\nwidth: 100%;\njustify-content: start;\n}\n.newTitle{\nfont-size: 25px;\n}\n.formInput{\nwidth: 100%;\n}\n.formLabel{\nmargin-right: 100%;\n}\n.prioritys{\nmargin-right:100% ;\n}\n.priority{\nfont-family: 'Lato', sans-serif;\nfont-size: 12px;\nwidth: 200px;\ntransition: 3s ease-in-out;\n}\n.formNotes{\nwidth:200px;\nmargin-left:;\noverflow:scroll;\nmargin-top: 5px;\nalign-content: start;\n}\n\n/* dropdown for Projects*//* dropdown for Projects*/\n.dropbtn {\n  background-color: rgb(202,225,109);\n  border-radius: 5px;\n  margin-top: 15px;\n  margin-right: 100%;\n  color: black;\n  padding: 10px;\n  font-family: 'Lato', sans-serif;\n  font-size: 15px;\n  border: none;\n}\n\n/*.dropdown {\n  position: relative;\n  display: inline-block;\n  font-family: 'Lato', sans-serif;\n  font-size: 15px;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: rgb(255, 255, 255);\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n}\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-content a:hover {background-color: #ddd;}\n\n.dropdown:hover .dropdown-content {display: block;}\n\n.dropdown:hover .dropbtn {background-color: #3e8e41;}\n*/\n/* add*//* add*//* add*/\n\n.addTask{\nappearance: none;\nfont-family: 'Lato', sans-serif;\nfont-size: 20px;\nfont-weight: 200;\nborder-width: 1px;\nborder-radius: 2px;\nborder-color:#b8b8bd;\nborder-style: solid;\ncolor:#b8b8bd;\nbackground-color: white;\nheight: 30px;\npadding-top: 0px;\npadding-right: 8px;\npadding-left: 8px;\npadding-bottom: 0px;\nmargin-top: 0px;\nmargin-right: 100%;\ntext-align: center;\nvertical-align: center;\n\n}\n\n.addSection{\nappearance: none;\nfont-family: 'Lato', sans-serif;\nfont-size: 20px;\nfont-weight: 200;\nborder-width: 1px;\nborder-radius: 2px;\nborder-color:#b8b8bd;\nborder-style: solid;\ncolor:#b8b8bd;\nbackground-color: white;\nheight: 30px;\npadding-top: 0px;\npadding-right: 8px;\npadding-left: 8px;\npadding-bottom: 0px;\nmargin-top: 75px;\nmargin-right: 100%;\ntext-align: center;\nvertical-align: center;\n\n\n}\n\n.savedNotes{\nmargin-right: 105px;\nmargin-top: 0px;\n}\n.delButton{\nappearance: none;\nwidth: 20px;\nheight: 20px;\nborder-radius: 50%;\nfont-size: 10px;\nbackground-color: rgb(247, 113, 113);\nborder: none;\ncolor:rgb(10, 10, 10);\n}", "",{"version":3,"sources":["webpack://./src/todo.css"],"names":[],"mappings":"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","sourcesContent":["/*    header    *//*    header    *//*    header    *//*    header    */\n\n.headerWrapper{\nwidth: 100%;\nheight: fit-content;\ndisplay: flex;\njustify-content: center;\n}\n.logoWrapper{\nwidth:fit-content\n}\n#logo{\nwidth: 250px;\nheight:70px;\nobject-fit: contain;\n}\n/*    main   *//*    main   *//*    main   *//*    main   *//*    main   */\n.mainWrapper{\ndisplay:flex;\njustify-content: start;\nalign-items: start;\n}\n/*   Sidebar  *//*   Sidebar  *//*   Sidebar  */\n.sidenav {\n  min-width: 250px;\n  height: 1000px;\n  margin-right: 100px;\n  margin-left: 0px;\n  background: #eee;\n  border-radius: 5px;\n  position: relative;\n}\n\n.sidenav a {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-family: 'Roboto Slab', serif;\n  font-size: 15px;\n  color: #0a0a0a;\n  display: block;\n}\n\n.sidenav a:hover {\n  font-size: 15.2px;\n}\n\n#projectList{\nmargin: 0px;\nfont-family: 'Lato', sans-serif;\nfont-size: 12px;\ncolor: rgb(8, 8, 8);\n}\n\n.projectItem{\nlist-style-type:none;\nmargin-top: 0px;\nwidth:100px;\n}\n.projectItem::before {\n  content: \"\\2022\";\n  color: #f3cf2c;\n  font-weight: bold;\n  display: inline-block; \n  width: 1em;\n  margin-left: -1em;\n}\n\n/*   Sections */\n#allSectionsWrapper{\ndisplay:flex;\nwidth: fit-content;\njustify-content: start;\nflex-wrap: nowrap;\nalign-content: start;\nalign-self: start;\nalign-items: start;\nflex-direction: row;\n}\n#newSectionWrapper{\ndisplay: flex;\n\n}\n.sectionWrapper{\nwidth: 300px;\nmin-width: 300px;\nmargin: 20px;\nfont-family: 'Roboto Slab', serif;\ndisplay: flex;\njustify-items: center;\nflex-wrap: wrap;\nalign-content: flex-start;\nalign-items: start;\n}\n.section{\nwidth: 300px;\n}\n.sectionTitle{\nfont-family: 'Roboto Slab', serif;\nfont-size: 30px;\nfont-weight: 500;\nmargin-top: 0px;\nmargin-bottom: 20px;\npadding: 0px;\nwidth: 200px;\nborder-style: none;\n}\n/*  Saved Task  *//*  Saved Task  *//*  Saved Task  */\n.savedWrapper{\ndisplay: flex;\nflex-wrap: wrap;\nborder-style: solid;\nborder-width: 1px;\nborder-radius: 5px;\nborder-color:#b8b8bd;\nmargin-bottom: 20px;\npadding: 10px;\njustify-content: space-around;\njustify-self: center;\njustify-items: center;\nalign-items: start;\ntransition: 3s ease-in-out;\n}\n\n.buttonsWrapper{\ndisplay:flex;\nflex-wrap: wrap;\njustify-items: center;\njustify-content: center;\nwidth: 30px;\nmargin: 0px;\n}\n.btnCheck{\nappearance: none;\nbackground-image: url(\"../src/images/low.png\");\nbackground-size: contain;\nbackground-repeat: no-repeat;\nwidth: 16px;\nheight: 16px;\nborder-style: none;\nmargin-top: 4px;\nmargin-bottom: 2px;\noutline: none;\ntransition: 0.1s ease-out;\n}\n.savedTitleWrapper{\ndisplay: flex;\nflex-wrap: nowrap;\n}\n.savedScheduleWrapper{\ndisplay: flex;\nflex-wrap: nowrap;\n}\n.savedTitle{\nwidth: 50px;\n}\n.savedSchedule{\nwidth:30px;\n}\n.savedInput{\nwidth: 100px;\nappearance: none;\nborder: none;\n}\n.savedInput:focus-visible{\nappearance: none;\nborder: none;\noutline: none;\n}\n.descriptionWrapper{\nwidth:200px;\ndisplay: flex;\nflex-wrap: wrap;\nalign-items: flex-start;\nalign-content: flex-start;\n}\n.descriptionWrapper input{\nappearance: none;\nborder-style: none;\nfont-family: 'Lato', sans-serif;\nfont-size: 14 px;\nmargin-left:10px\n}\n\n/*  NewTask  *//*  NewTask  *//*  NewTask  */\n.newWrapper{\ndisplay: flex;\nborder-style: solid;\nborder-width: 1px;\nborder-radius: 5px;\nborder-color: #b8b8bd;\npadding: 20px;\nheight: fit-content;\nmargin-bottom: 20px;\nflex-wrap: ;\n}\n.formWrapper{\ndisplay: flex;\nflex-wrap: wrap;\nwidth: 100%;\njustify-content: start;\n}\n.newTitle{\nfont-size: 25px;\n}\n.formInput{\nwidth: 100%;\n}\n.formLabel{\nmargin-right: 100%;\n}\n.prioritys{\nmargin-right:100% ;\n}\n.priority{\nfont-family: 'Lato', sans-serif;\nfont-size: 12px;\nwidth: 200px;\ntransition: 3s ease-in-out;\n}\n.formNotes{\nwidth:200px;\nmargin-left:;\noverflow:scroll;\nmargin-top: 5px;\nalign-content: start;\n}\n\n/* dropdown for Projects*//* dropdown for Projects*/\n.dropbtn {\n  background-color: rgb(202,225,109);\n  border-radius: 5px;\n  margin-top: 15px;\n  margin-right: 100%;\n  color: black;\n  padding: 10px;\n  font-family: 'Lato', sans-serif;\n  font-size: 15px;\n  border: none;\n}\n\n/*.dropdown {\n  position: relative;\n  display: inline-block;\n  font-family: 'Lato', sans-serif;\n  font-size: 15px;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: rgb(255, 255, 255);\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n}\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-content a:hover {background-color: #ddd;}\n\n.dropdown:hover .dropdown-content {display: block;}\n\n.dropdown:hover .dropbtn {background-color: #3e8e41;}\n*/\n/* add*//* add*//* add*/\n\n.addTask{\nappearance: none;\nfont-family: 'Lato', sans-serif;\nfont-size: 20px;\nfont-weight: 200;\nborder-width: 1px;\nborder-radius: 2px;\nborder-color:#b8b8bd;\nborder-style: solid;\ncolor:#b8b8bd;\nbackground-color: white;\nheight: 30px;\npadding-top: 0px;\npadding-right: 8px;\npadding-left: 8px;\npadding-bottom: 0px;\nmargin-top: 0px;\nmargin-right: 100%;\ntext-align: center;\nvertical-align: center;\n\n}\n\n.addSection{\nappearance: none;\nfont-family: 'Lato', sans-serif;\nfont-size: 20px;\nfont-weight: 200;\nborder-width: 1px;\nborder-radius: 2px;\nborder-color:#b8b8bd;\nborder-style: solid;\ncolor:#b8b8bd;\nbackground-color: white;\nheight: 30px;\npadding-top: 0px;\npadding-right: 8px;\npadding-left: 8px;\npadding-bottom: 0px;\nmargin-top: 75px;\nmargin-right: 100%;\ntext-align: center;\nvertical-align: center;\n\n\n}\n\n.savedNotes{\nmargin-right: 105px;\nmargin-top: 0px;\n}\n.delButton{\nappearance: none;\nwidth: 20px;\nheight: 20px;\nborder-radius: 50%;\nfont-size: 10px;\nbackground-color: rgb(247, 113, 113);\nborder: none;\ncolor:rgb(10, 10, 10);\n}"],"sourceRoot":""}]);
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
/* harmony export */   "setSectionTitle": () => (/* binding */ setSectionTitle),
/* harmony export */   "editTask": () => (/* binding */ editTask)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _images_higth_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/higth.png */ "./src/images/higth.png");
/* harmony import */ var _images_medium_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/medium.png */ "./src/images/medium.png");
/* harmony import */ var _images_low_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/low.png */ "./src/images/low.png");
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */







// Add necessary event listeners
const newSection = () => {
  _dom__WEBPACK_IMPORTED_MODULE_1__.element.addSection();
  const button = document.getElementById('addSection');
  // How many sections are already saved?
  let col = parseInt(colCounter());
  button.addEventListener('click', () => {
    _dom__WEBPACK_IMPORTED_MODULE_1__.compose.newSection(col, 'allSectionsWrapper', 'New Section');
    col++;
    if (col == 10) {
      button.remove();
    }
  });
};
function lineCounter(col) {
  const keys = Object.keys(localStorage).filter((item) => item[0] != 's');
  const filterCol = keys.filter((item) => item[0] === col);
  let lines = 0;
  filterCol.length === 0 ? (lines = 0) : (lines = filterCol.length / 4);
  return lines;
}
function colCounter() {
  const colArray = [];
  Object.keys(localStorage)
      .sort()
      .filter( (item) => item[0] === 's')
      .map( (item) => colArray.push(item[parseInt(item.length)-1]) );
  if (colArray.length == 0 ) {
    return 0;
  } else {
    return Math.max(...colArray)+1;
  };
}

// find unique indexes in database
function searchKeys() {
  const data = [...Object.keys(localStorage).filter((item) => item[0] != 's')];

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
        index,
        title: searchResult[3],
        schedule: searchResult[2],
        priority: searchResult[1],
        notes: searchResult[0],
      },
  );
};

// Get section titles from localStorage
const setSectionTitle = () => {
  const data = Object.keys(localStorage).sort();
  data
      .filter((item) => item[0] === 's')
      .map((item) => {
        const lastIndex = item.length-1;
        const col = item[lastIndex];
        const title = document.getElementById(col);
        title.value = localStorage.getItem(item);
      });
};

// Click a task and open editor
const editTask = () => {
  const tasksArray = Array.from(
      document.querySelectorAll('.descriptionWrapper'),
  );
  tasksArray.map((item) =>
    item.addEventListener('click', () => edit(item), {once: true}),
  );


  function edit(item) {
    const regex = new RegExp(/[a-zA-Z]/);
    const match = regex.exec(item.id);
    const index = item.id.slice(0, match.index);
    const task = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.taskFactory)(Object.values(findTask(index)));
    const currPriority = document.getElementById(`${index}priority`);
    currPriority.remove();
    // Display priority buttons
    const low = _dom__WEBPACK_IMPORTED_MODULE_1__.element.priority(
        `${index}low`,
        `${index}buttonWrapper`,
        _images_low_png__WEBPACK_IMPORTED_MODULE_4__);
    const medium = _dom__WEBPACK_IMPORTED_MODULE_1__.element.priority(
        `${index}medium`,
        `${index}buttonWrapper`,
        _images_medium_png__WEBPACK_IMPORTED_MODULE_3__,
    );
    const high = _dom__WEBPACK_IMPORTED_MODULE_1__.element.priority(
        `${index}high`,
        `${index}buttonWrapper`,
        _images_higth_png__WEBPACK_IMPORTED_MODULE_2__,
    );
    _dom__WEBPACK_IMPORTED_MODULE_1__.element.formSubmi;
    _dom__WEBPACK_IMPORTED_MODULE_1__.element.label(
        `${index}notes`,
        item.id,
        `${index}notes`,
        'Notes:',
        'savedNotes',
    );
    // Add priority event listeners and current choice display ( bigger image )
    low.addEventListener('click', () =>{
      localStorage.setItem(`${index}priority`, 'low');
      low.style.width='18px';
      low.style.height='18px';
      medium.style.width='16px';
      medium.style.height='16px';
      high.style.width='16px';
      high.style.height='16px';
    });
    medium.addEventListener('click', () =>{
      localStorage.setItem(`${index}priority`, 'medium');
      low.style.width='16px';
      low.style.height='16px';
      medium.style.width='18px';
      medium.style.height='18px';
      high.style.width='16px';
      high.style.height='16px';
    });
    high.addEventListener('click', () =>{
      localStorage.setItem(`${index}priority`, 'high');
      low.style.width='16px';
      low.style.height='16px';
      medium.style.width='16px';
      medium.style.height='16px';
      high.style.width='18px';
      high.style.height='18px';
    });
    // Set readOnly to false and set event listeners for title and schedule inputs
    const titleInput = document.getElementById(`${index}savedTitleInput`);
    titleInput.removeAttribute('readOnly');
    titleInput.addEventListener('blur', () => localStorage.setItem(`${index}title`, titleInput.value));
    const scheduleInput = document.getElementById(`${index}savedScheduleInput`);
    scheduleInput.removeAttribute('readOnly');
    scheduleInput.type = 'date';
    scheduleInput.style.fontSize = '13px';
    scheduleInput.style.width = '120px';
    scheduleInput.addEventListener('blur', () => localStorage.setItem(`${index}schedule`, scheduleInput.value));
    // Display notes and add event listner
    const notes = _dom__WEBPACK_IMPORTED_MODULE_1__.element.textArea(`${index}notes`, item.id);
    notes.value = task.notes;
    notes.addEventListener('blur', () => localStorage.setItem(`${index}notes`, notes.value));
    // Refresh page when user clicks out of the box
    window.addEventListener('click', function(e) {
      if (!document.getElementById(`${index}savedWrapper`).contains(e.target)) {
        location.reload();
      }
    });
    // set up delete task button
    _dom__WEBPACK_IMPORTED_MODULE_1__.element.deleteButton(index, `${index}savedWrapper`);
  }
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
/* eslint-disable max-len */





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
    title.addEventListener('blur', () =>localStorage.setItem(`section${title.id[0]}`, `${title.value}`));
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
    date_fns__WEBPACK_IMPORTED_MODULE_5__.default.eve;
    parent.appendChild(input);
  };

  const priority = (id, appendTo, img) => {
    const input = document.createElement('input');
    if (id != '') {
      input.id = id;
    }
    input.classList = 'btnCheck';
    input.type = 'button';
    input.style.backgroundImage = `url(${img})`;
    const parent = document.getElementById(appendTo);
    parent.appendChild(input);
    return input;
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
    return text;
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
    let counter = (0,_controller__WEBPACK_IMPORTED_MODULE_1__.colCounter)();
    button.addEventListener('click', function() {
      localStorage.setItem(`section${counter}`, 'No title');
      counter++;
    });
  };

  const deleteButton = (index, appendTo) => {
    const delButton = document.createElement('button');
    delButton.classList = 'delButton';
    delButton.innerText = 'X';
    delButton.addEventListener('click', () => {
      const task = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.taskFactory)(Object.values((0,_controller__WEBPACK_IMPORTED_MODULE_1__.findTask)(index)));
      task.removeTask();
      location.reload();
    });
    const parent = document.getElementById(appendTo);
    parent.appendChild(delButton);
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
    deleteButton,
  };
})();

// Composed Structures : newSection(), newTask(), savedTask()

const compose = (() => {
  const newSection = (col, appendTo, title) => {
    wrapper.section(`${col}sectionWrapper`, appendTo);
    element.sectionTitle(`${col}`, `${col}sectionWrapper`, 'New Section');
    wrapper.savedSection(`${col}savedSection`, `${col}sectionWrapper`);
    element.addTask(`${col}`, `${col}sectionWrapper`);
    const addTask = document.getElementById(`${col}*`);
    addTask.id = `${col}*${(0,_controller__WEBPACK_IMPORTED_MODULE_1__.lineCounter)()}`;
    addTask.addEventListener( 'click', () =>
      compose.newTask(`${col}`, `${col}sectionWrapper`));
    // localStorage.setItem(`section${col}`, 'New Section');
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
  removeTask: function() {
    localStorage.removeItem(`${this.index}title`, `${this.title}`);
    localStorage.removeItem(`${this.index}schedule`, `${this.schedule}`);
    localStorage.removeItem(`${this.index}priority`, `${this.priority}`);
    localStorage.removeItem(`${this.index}notes`, `${this.notes}`);
  },
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
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */







const logo = document.getElementById('logo');
logo.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_1__;

// On load, create necessary Todos based on Object.keys in localStorage
// Sections

const data = Object.keys(localStorage).sort();
data.filter((item) => item[0] === 's')
    .map((item) => {
      const lastIndex = item.length-1;
      const col = item[lastIndex];
      const section = document.getElementById(`${item[lastIndex]}sectionWrapper`);
      if (!section) {
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.compose.newSection(`${item[lastIndex]}`, 'allSectionsWrapper', 'Section Title');
      };
      const title = document.getElementById(col);
      title.value = localStorage.getItem(item);
    });
// Tasks
if ( _controller__WEBPACK_IMPORTED_MODULE_4__.searchKeys.length>=0) {
  (0,_controller__WEBPACK_IMPORTED_MODULE_4__.searchKeys)().map( (item) =>{
    const task = (0,_controller__WEBPACK_IMPORTED_MODULE_4__.findTask)(item);
    _dom_js__WEBPACK_IMPORTED_MODULE_2__.compose.savedTask(task.index,
        `${task.index[0]}savedSection`,
        task.title,
        task.schedule,
        task.priority,
        task.notes);
  });
}
(0,_controller__WEBPACK_IMPORTED_MODULE_4__.newSection)();
(0,_controller__WEBPACK_IMPORTED_MODULE_4__.editTask)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtdG9kby8uL3NyYy90b2RvLmNzcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNb250aHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvcC10b2RvLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL3NyYy9mYWN0b3J5LmpzIiwid2VicGFjazovL3RvcC10b2RvLy4vc3JjL3RvZG8uY3NzPzNmODMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC10b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC10b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvcC10b2RvLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ087QUFDbkM7QUFDN0QsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCLENBQUMsNENBQTZCO0FBQ3RHO0FBQ0EscUlBQXFJLGNBQWMsc0JBQXNCLGdCQUFnQiwwQkFBMEIsR0FBRyxlQUFlLHNCQUFzQixRQUFRLGVBQWUsY0FBYyxzQkFBc0IsR0FBRyw0RkFBNEYsZUFBZSx5QkFBeUIscUJBQXFCLEdBQUcsOERBQThELHFCQUFxQixtQkFBbUIsd0JBQXdCLHFCQUFxQixxQkFBcUIsdUJBQXVCLHVCQUF1QixHQUFHLGdCQUFnQiw4QkFBOEIsMEJBQTBCLHNDQUFzQyxvQkFBb0IsbUJBQW1CLG1CQUFtQixHQUFHLHNCQUFzQixzQkFBc0IsR0FBRyxpQkFBaUIsY0FBYyxrQ0FBa0Msa0JBQWtCLHNCQUFzQixHQUFHLGlCQUFpQix1QkFBdUIsa0JBQWtCLGNB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QUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sb0NBQW9DLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSw4QkFBOEIsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLFlBQVksTUFBTSxZQUFZO0FBQ3JHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFPO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxJQUFJO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsR0FBRztBQUNsQjtBQUNBLHNCQUFzQixLQUFLO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDb0I7QUFDaUI7QUFDbkI7QUFDQztBQUNzRTtBQUMzRDs7QUFFOUI7QUFDQSxXQUFXLDZDQUFJOztBQUVmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxnQkFBZ0I7QUFDakU7QUFDQSxRQUFRLHVEQUFrQixJQUFJLGdCQUFnQjtBQUM5QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLLDBEQUFpQjtBQUN0QixFQUFFLHVEQUFVO0FBQ1osaUJBQWlCLHFEQUFRO0FBQ3pCLElBQUksc0RBQWlCO0FBQ3JCLFdBQVcsY0FBYztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHVEQUFVO0FBQ1YscURBQVEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9pbWFnZXMvbG93LnBuZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qICAgIGhlYWRlciAgICAqLy8qICAgIGhlYWRlciAgICAqLy8qICAgIGhlYWRlciAgICAqLy8qICAgIGhlYWRlciAgICAqL1xcblxcbi5oZWFkZXJXcmFwcGVye1xcbndpZHRoOiAxMDAlO1xcbmhlaWdodDogZml0LWNvbnRlbnQ7XFxuZGlzcGxheTogZmxleDtcXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmxvZ29XcmFwcGVye1xcbndpZHRoOmZpdC1jb250ZW50XFxufVxcbiNsb2dve1xcbndpZHRoOiAyNTBweDtcXG5oZWlnaHQ6NzBweDtcXG5vYmplY3QtZml0OiBjb250YWluO1xcbn1cXG4vKiAgICBtYWluICAgKi8vKiAgICBtYWluICAgKi8vKiAgICBtYWluICAgKi8vKiAgICBtYWluICAgKi8vKiAgICBtYWluICAgKi9cXG4ubWFpbldyYXBwZXJ7XFxuZGlzcGxheTpmbGV4O1xcbmp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG4vKiAgIFNpZGViYXIgICovLyogICBTaWRlYmFyICAqLy8qICAgU2lkZWJhciAgKi9cXG4uc2lkZW5hdiB7XFxuICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAxMDAwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDBweDtcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zaWRlbmF2IGEge1xcbiAgcGFkZGluZzogNnB4IDhweCA2cHggMTZweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGNvbG9yOiAjMGEwYTBhO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zaWRlbmF2IGE6aG92ZXIge1xcbiAgZm9udC1zaXplOiAxNS4ycHg7XFxufVxcblxcbiNwcm9qZWN0TGlzdHtcXG5tYXJnaW46IDBweDtcXG5mb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbmZvbnQtc2l6ZTogMTJweDtcXG5jb2xvcjogcmdiKDgsIDgsIDgpO1xcbn1cXG5cXG4ucHJvamVjdEl0ZW17XFxubGlzdC1zdHlsZS10eXBlOm5vbmU7XFxubWFyZ2luLXRvcDogMHB4O1xcbndpZHRoOjEwMHB4O1xcbn1cXG4ucHJvamVjdEl0ZW06OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDIwMjJcXFwiO1xcbiAgY29sb3I6ICNmM2NmMmM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXFxuICB3aWR0aDogMWVtO1xcbiAgbWFyZ2luLWxlZnQ6IC0xZW07XFxufVxcblxcbi8qICAgU2VjdGlvbnMgKi9cXG4jYWxsU2VjdGlvbnNXcmFwcGVye1xcbmRpc3BsYXk6ZmxleDtcXG53aWR0aDogZml0LWNvbnRlbnQ7XFxuanVzdGlmeS1jb250ZW50OiBzdGFydDtcXG5mbGV4LXdyYXA6IG5vd3JhcDtcXG5hbGlnbi1jb250ZW50OiBzdGFydDtcXG5hbGlnbi1zZWxmOiBzdGFydDtcXG5hbGlnbi1pdGVtczogc3RhcnQ7XFxuZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuI25ld1NlY3Rpb25XcmFwcGVye1xcbmRpc3BsYXk6IGZsZXg7XFxuXFxufVxcbi5zZWN0aW9uV3JhcHBlcntcXG53aWR0aDogMzAwcHg7XFxubWluLXdpZHRoOiAzMDBweDtcXG5tYXJnaW46IDIwcHg7XFxuZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xcbmRpc3BsYXk6IGZsZXg7XFxuanVzdGlmeS1pdGVtczogY2VudGVyO1xcbmZsZXgtd3JhcDogd3JhcDtcXG5hbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbmFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuLnNlY3Rpb257XFxud2lkdGg6IDMwMHB4O1xcbn1cXG4uc2VjdGlvblRpdGxle1xcbmZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcXG5mb250LXNpemU6IDMwcHg7XFxuZm9udC13ZWlnaHQ6IDUwMDtcXG5tYXJnaW4tdG9wOiAwcHg7XFxubWFyZ2luLWJvdHRvbTogMjBweDtcXG5wYWRkaW5nOiAwcHg7XFxud2lkdGg6IDIwMHB4O1xcbmJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuLyogIFNhdmVkIFRhc2sgICovLyogIFNhdmVkIFRhc2sgICovLyogIFNhdmVkIFRhc2sgICovXFxuLnNhdmVkV3JhcHBlcntcXG5kaXNwbGF5OiBmbGV4O1xcbmZsZXgtd3JhcDogd3JhcDtcXG5ib3JkZXItc3R5bGU6IHNvbGlkO1xcbmJvcmRlci13aWR0aDogMXB4O1xcbmJvcmRlci1yYWRpdXM6IDVweDtcXG5ib3JkZXItY29sb3I6I2I4YjhiZDtcXG5tYXJnaW4tYm90dG9tOiAyMHB4O1xcbnBhZGRpbmc6IDEwcHg7XFxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuanVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuanVzdGlmeS1pdGVtczogY2VudGVyO1xcbmFsaWduLWl0ZW1zOiBzdGFydDtcXG50cmFuc2l0aW9uOiAzcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmJ1dHRvbnNXcmFwcGVye1xcbmRpc3BsYXk6ZmxleDtcXG5mbGV4LXdyYXA6IHdyYXA7XFxuanVzdGlmeS1pdGVtczogY2VudGVyO1xcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xcbndpZHRoOiAzMHB4O1xcbm1hcmdpbjogMHB4O1xcbn1cXG4uYnRuQ2hlY2t7XFxuYXBwZWFyYW5jZTogbm9uZTtcXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbmJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbndpZHRoOiAxNnB4O1xcbmhlaWdodDogMTZweDtcXG5ib3JkZXItc3R5bGU6IG5vbmU7XFxubWFyZ2luLXRvcDogNHB4O1xcbm1hcmdpbi1ib3R0b206IDJweDtcXG5vdXRsaW5lOiBub25lO1xcbnRyYW5zaXRpb246IDAuMXMgZWFzZS1vdXQ7XFxufVxcbi5zYXZlZFRpdGxlV3JhcHBlcntcXG5kaXNwbGF5OiBmbGV4O1xcbmZsZXgtd3JhcDogbm93cmFwO1xcbn1cXG4uc2F2ZWRTY2hlZHVsZVdyYXBwZXJ7XFxuZGlzcGxheTogZmxleDtcXG5mbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuLnNhdmVkVGl0bGV7XFxud2lkdGg6IDUwcHg7XFxufVxcbi5zYXZlZFNjaGVkdWxle1xcbndpZHRoOjMwcHg7XFxufVxcbi5zYXZlZElucHV0e1xcbndpZHRoOiAxMDBweDtcXG5hcHBlYXJhbmNlOiBub25lO1xcbmJvcmRlcjogbm9uZTtcXG59XFxuLnNhdmVkSW5wdXQ6Zm9jdXMtdmlzaWJsZXtcXG5hcHBlYXJhbmNlOiBub25lO1xcbmJvcmRlcjogbm9uZTtcXG5vdXRsaW5lOiBub25lO1xcbn1cXG4uZGVzY3JpcHRpb25XcmFwcGVye1xcbndpZHRoOjIwMHB4O1xcbmRpc3BsYXk6IGZsZXg7XFxuZmxleC13cmFwOiB3cmFwO1xcbmFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbmFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcbi5kZXNjcmlwdGlvbldyYXBwZXIgaW5wdXR7XFxuYXBwZWFyYW5jZTogbm9uZTtcXG5ib3JkZXItc3R5bGU6IG5vbmU7XFxuZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG5mb250LXNpemU6IDE0IHB4O1xcbm1hcmdpbi1sZWZ0OjEwcHhcXG59XFxuXFxuLyogIE5ld1Rhc2sgICovLyogIE5ld1Rhc2sgICovLyogIE5ld1Rhc2sgICovXFxuLm5ld1dyYXBwZXJ7XFxuZGlzcGxheTogZmxleDtcXG5ib3JkZXItc3R5bGU6IHNvbGlkO1xcbmJvcmRlci13aWR0aDogMXB4O1xcbmJvcmRlci1yYWRpdXM6IDVweDtcXG5ib3JkZXItY29sb3I6ICNiOGI4YmQ7XFxucGFkZGluZzogMjBweDtcXG5oZWlnaHQ6IGZpdC1jb250ZW50O1xcbm1hcmdpbi1ib3R0b206IDIwcHg7XFxuZmxleC13cmFwOiA7XFxufVxcbi5mb3JtV3JhcHBlcntcXG5kaXNwbGF5OiBmbGV4O1xcbmZsZXgtd3JhcDogd3JhcDtcXG53aWR0aDogMTAwJTtcXG5qdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG4ubmV3VGl0bGV7XFxuZm9udC1zaXplOiAyNXB4O1xcbn1cXG4uZm9ybUlucHV0e1xcbndpZHRoOiAxMDAlO1xcbn1cXG4uZm9ybUxhYmVse1xcbm1hcmdpbi1yaWdodDogMTAwJTtcXG59XFxuLnByaW9yaXR5c3tcXG5tYXJnaW4tcmlnaHQ6MTAwJSA7XFxufVxcbi5wcmlvcml0eXtcXG5mb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbmZvbnQtc2l6ZTogMTJweDtcXG53aWR0aDogMjAwcHg7XFxudHJhbnNpdGlvbjogM3MgZWFzZS1pbi1vdXQ7XFxufVxcbi5mb3JtTm90ZXN7XFxud2lkdGg6MjAwcHg7XFxubWFyZ2luLWxlZnQ6O1xcbm92ZXJmbG93OnNjcm9sbDtcXG5tYXJnaW4tdG9wOiA1cHg7XFxuYWxpZ24tY29udGVudDogc3RhcnQ7XFxufVxcblxcbi8qIGRyb3Bkb3duIGZvciBQcm9qZWN0cyovLyogZHJvcGRvd24gZm9yIFByb2plY3RzKi9cXG4uZHJvcGJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLDIyNSwxMDkpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIG1hcmdpbi1yaWdodDogMTAwJTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKi5kcm9wZG93biB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4uZHJvcGRvd24tY29udGVudCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgbWluLXdpZHRoOiAxNjBweDtcXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9XFxuXFxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtkaXNwbGF5OiBibG9jazt9XFxuXFxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4ZTQxO31cXG4qL1xcbi8qIGFkZCovLyogYWRkKi8vKiBhZGQqL1xcblxcbi5hZGRUYXNre1xcbmFwcGVhcmFuY2U6IG5vbmU7XFxuZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG5mb250LXNpemU6IDIwcHg7XFxuZm9udC13ZWlnaHQ6IDIwMDtcXG5ib3JkZXItd2lkdGg6IDFweDtcXG5ib3JkZXItcmFkaXVzOiAycHg7XFxuYm9yZGVyLWNvbG9yOiNiOGI4YmQ7XFxuYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG5jb2xvcjojYjhiOGJkO1xcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbmhlaWdodDogMzBweDtcXG5wYWRkaW5nLXRvcDogMHB4O1xcbnBhZGRpbmctcmlnaHQ6IDhweDtcXG5wYWRkaW5nLWxlZnQ6IDhweDtcXG5wYWRkaW5nLWJvdHRvbTogMHB4O1xcbm1hcmdpbi10b3A6IDBweDtcXG5tYXJnaW4tcmlnaHQ6IDEwMCU7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbnZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcbi5hZGRTZWN0aW9ue1xcbmFwcGVhcmFuY2U6IG5vbmU7XFxuZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG5mb250LXNpemU6IDIwcHg7XFxuZm9udC13ZWlnaHQ6IDIwMDtcXG5ib3JkZXItd2lkdGg6IDFweDtcXG5ib3JkZXItcmFkaXVzOiAycHg7XFxuYm9yZGVyLWNvbG9yOiNiOGI4YmQ7XFxuYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG5jb2xvcjojYjhiOGJkO1xcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbmhlaWdodDogMzBweDtcXG5wYWRkaW5nLXRvcDogMHB4O1xcbnBhZGRpbmctcmlnaHQ6IDhweDtcXG5wYWRkaW5nLWxlZnQ6IDhweDtcXG5wYWRkaW5nLWJvdHRvbTogMHB4O1xcbm1hcmdpbi10b3A6IDc1cHg7XFxubWFyZ2luLXJpZ2h0OiAxMDAlO1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG52ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcblxcblxcbn1cXG5cXG4uc2F2ZWROb3Rlc3tcXG5tYXJnaW4tcmlnaHQ6IDEwNXB4O1xcbm1hcmdpbi10b3A6IDBweDtcXG59XFxuLmRlbEJ1dHRvbntcXG5hcHBlYXJhbmNlOiBub25lO1xcbndpZHRoOiAyMHB4O1xcbmhlaWdodDogMjBweDtcXG5ib3JkZXItcmFkaXVzOiA1MCU7XFxuZm9udC1zaXplOiAxMHB4O1xcbmJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDExMywgMTEzKTtcXG5ib3JkZXI6IG5vbmU7XFxuY29sb3I6cmdiKDEwLCAxMCwgMTApO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdG9kby5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCOztBQUV2RTtBQUNBLFdBQVc7QUFDWCxtQkFBbUI7QUFDbkIsYUFBYTtBQUNiLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLFdBQVc7QUFDWCxtQkFBbUI7QUFDbkI7QUFDQSxjQUFjLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsY0FBYztBQUMxRTtBQUNBLFlBQVk7QUFDWixzQkFBc0I7QUFDdEIsa0JBQWtCO0FBQ2xCO0FBQ0EsZUFBZSxDQUFDLGVBQWUsQ0FBQyxlQUFlO0FBQy9DO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0FBQ0EsV0FBVztBQUNYLCtCQUErQjtBQUMvQixlQUFlO0FBQ2YsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCLGVBQWU7QUFDZixXQUFXO0FBQ1g7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHFCQUFx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Q2hCLCtCQUErQjtBQUMvQixlQUFlO0FBQ2YsZ0JBQWdCO0FBQ2hCLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEIsb0JBQW9CO0FBQ3BCLG1CQUFtQjtBQUNuQixhQUFhO0FBQ2IsdUJBQXVCO0FBQ3ZCLFlBQVk7QUFDWixnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQixtQkFBbUI7QUFDbkIsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsc0JBQXNCOztBQUV0Qjs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQiwrQkFBK0I7QUFDL0IsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLG9CQUFvQjtBQUNwQixtQkFBbUI7QUFDbkIsYUFBYTtBQUNiLHVCQUF1QjtBQUN2QixZQUFZO0FBQ1osZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLHNCQUFzQjs7O0FBR3RCOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25CLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLFdBQVc7QUFDWCxZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLGVBQWU7QUFDZixvQ0FBb0M7QUFDcEMsWUFBWTtBQUNaLHFCQUFxQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAgICBoZWFkZXIgICAgKi8vKiAgICBoZWFkZXIgICAgKi8vKiAgICBoZWFkZXIgICAgKi8vKiAgICBoZWFkZXIgICAgKi9cXG5cXG4uaGVhZGVyV3JhcHBlcntcXG53aWR0aDogMTAwJTtcXG5oZWlnaHQ6IGZpdC1jb250ZW50O1xcbmRpc3BsYXk6IGZsZXg7XFxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5sb2dvV3JhcHBlcntcXG53aWR0aDpmaXQtY29udGVudFxcbn1cXG4jbG9nb3tcXG53aWR0aDogMjUwcHg7XFxuaGVpZ2h0OjcwcHg7XFxub2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuLyogICAgbWFpbiAgICovLyogICAgbWFpbiAgICovLyogICAgbWFpbiAgICovLyogICAgbWFpbiAgICovLyogICAgbWFpbiAgICovXFxuLm1haW5XcmFwcGVye1xcbmRpc3BsYXk6ZmxleDtcXG5qdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbmFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuLyogICBTaWRlYmFyICAqLy8qICAgU2lkZWJhciAgKi8vKiAgIFNpZGViYXIgICovXFxuLnNpZGVuYXYge1xcbiAgbWluLXdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogMTAwMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2lkZW5hdiBhIHtcXG4gIHBhZGRpbmc6IDZweCA4cHggNnB4IDE2cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBjb2xvcjogIzBhMGEwYTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uc2lkZW5hdiBhOmhvdmVyIHtcXG4gIGZvbnQtc2l6ZTogMTUuMnB4O1xcbn1cXG5cXG4jcHJvamVjdExpc3R7XFxubWFyZ2luOiAwcHg7XFxuZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG5mb250LXNpemU6IDEycHg7XFxuY29sb3I6IHJnYig4LCA4LCA4KTtcXG59XFxuXFxuLnByb2plY3RJdGVte1xcbmxpc3Qtc3R5bGUtdHlwZTpub25lO1xcbm1hcmdpbi10b3A6IDBweDtcXG53aWR0aDoxMDBweDtcXG59XFxuLnByb2plY3RJdGVtOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwyMDIyXFxcIjtcXG4gIGNvbG9yOiAjZjNjZjJjO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxcbiAgd2lkdGg6IDFlbTtcXG4gIG1hcmdpbi1sZWZ0OiAtMWVtO1xcbn1cXG5cXG4vKiAgIFNlY3Rpb25zICovXFxuI2FsbFNlY3Rpb25zV3JhcHBlcntcXG5kaXNwbGF5OmZsZXg7XFxud2lkdGg6IGZpdC1jb250ZW50O1xcbmp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuZmxleC13cmFwOiBub3dyYXA7XFxuYWxpZ24tY29udGVudDogc3RhcnQ7XFxuYWxpZ24tc2VsZjogc3RhcnQ7XFxuYWxpZ24taXRlbXM6IHN0YXJ0O1xcbmZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbiNuZXdTZWN0aW9uV3JhcHBlcntcXG5kaXNwbGF5OiBmbGV4O1xcblxcbn1cXG4uc2VjdGlvbldyYXBwZXJ7XFxud2lkdGg6IDMwMHB4O1xcbm1pbi13aWR0aDogMzAwcHg7XFxubWFyZ2luOiAyMHB4O1xcbmZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcXG5kaXNwbGF5OiBmbGV4O1xcbmp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5mbGV4LXdyYXA6IHdyYXA7XFxuYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG5hbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcbi5zZWN0aW9ue1xcbndpZHRoOiAzMDBweDtcXG59XFxuLnNlY3Rpb25UaXRsZXtcXG5mb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XFxuZm9udC1zaXplOiAzMHB4O1xcbmZvbnQtd2VpZ2h0OiA1MDA7XFxubWFyZ2luLXRvcDogMHB4O1xcbm1hcmdpbi1ib3R0b206IDIwcHg7XFxucGFkZGluZzogMHB4O1xcbndpZHRoOiAyMDBweDtcXG5ib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcbi8qICBTYXZlZCBUYXNrICAqLy8qICBTYXZlZCBUYXNrICAqLy8qICBTYXZlZCBUYXNrICAqL1xcbi5zYXZlZFdyYXBwZXJ7XFxuZGlzcGxheTogZmxleDtcXG5mbGV4LXdyYXA6IHdyYXA7XFxuYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG5ib3JkZXItd2lkdGg6IDFweDtcXG5ib3JkZXItcmFkaXVzOiA1cHg7XFxuYm9yZGVyLWNvbG9yOiNiOGI4YmQ7XFxubWFyZ2luLWJvdHRvbTogMjBweDtcXG5wYWRkaW5nOiAxMHB4O1xcbmp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbmp1c3RpZnktc2VsZjogY2VudGVyO1xcbmp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5hbGlnbi1pdGVtczogc3RhcnQ7XFxudHJhbnNpdGlvbjogM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5idXR0b25zV3JhcHBlcntcXG5kaXNwbGF5OmZsZXg7XFxuZmxleC13cmFwOiB3cmFwO1xcbmp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG53aWR0aDogMzBweDtcXG5tYXJnaW46IDBweDtcXG59XFxuLmJ0bkNoZWNre1xcbmFwcGVhcmFuY2U6IG5vbmU7XFxuYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9zcmMvaW1hZ2VzL2xvdy5wbmdcXFwiKTtcXG5iYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG53aWR0aDogMTZweDtcXG5oZWlnaHQ6IDE2cHg7XFxuYm9yZGVyLXN0eWxlOiBub25lO1xcbm1hcmdpbi10b3A6IDRweDtcXG5tYXJnaW4tYm90dG9tOiAycHg7XFxub3V0bGluZTogbm9uZTtcXG50cmFuc2l0aW9uOiAwLjFzIGVhc2Utb3V0O1xcbn1cXG4uc2F2ZWRUaXRsZVdyYXBwZXJ7XFxuZGlzcGxheTogZmxleDtcXG5mbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuLnNhdmVkU2NoZWR1bGVXcmFwcGVye1xcbmRpc3BsYXk6IGZsZXg7XFxuZmxleC13cmFwOiBub3dyYXA7XFxufVxcbi5zYXZlZFRpdGxle1xcbndpZHRoOiA1MHB4O1xcbn1cXG4uc2F2ZWRTY2hlZHVsZXtcXG53aWR0aDozMHB4O1xcbn1cXG4uc2F2ZWRJbnB1dHtcXG53aWR0aDogMTAwcHg7XFxuYXBwZWFyYW5jZTogbm9uZTtcXG5ib3JkZXI6IG5vbmU7XFxufVxcbi5zYXZlZElucHV0OmZvY3VzLXZpc2libGV7XFxuYXBwZWFyYW5jZTogbm9uZTtcXG5ib3JkZXI6IG5vbmU7XFxub3V0bGluZTogbm9uZTtcXG59XFxuLmRlc2NyaXB0aW9uV3JhcHBlcntcXG53aWR0aDoyMDBweDtcXG5kaXNwbGF5OiBmbGV4O1xcbmZsZXgtd3JhcDogd3JhcDtcXG5hbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5hbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG4uZGVzY3JpcHRpb25XcmFwcGVyIGlucHV0e1xcbmFwcGVhcmFuY2U6IG5vbmU7XFxuYm9yZGVyLXN0eWxlOiBub25lO1xcbmZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuZm9udC1zaXplOiAxNCBweDtcXG5tYXJnaW4tbGVmdDoxMHB4XFxufVxcblxcbi8qICBOZXdUYXNrICAqLy8qICBOZXdUYXNrICAqLy8qICBOZXdUYXNrICAqL1xcbi5uZXdXcmFwcGVye1xcbmRpc3BsYXk6IGZsZXg7XFxuYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG5ib3JkZXItd2lkdGg6IDFweDtcXG5ib3JkZXItcmFkaXVzOiA1cHg7XFxuYm9yZGVyLWNvbG9yOiAjYjhiOGJkO1xcbnBhZGRpbmc6IDIwcHg7XFxuaGVpZ2h0OiBmaXQtY29udGVudDtcXG5tYXJnaW4tYm90dG9tOiAyMHB4O1xcbmZsZXgtd3JhcDogO1xcbn1cXG4uZm9ybVdyYXBwZXJ7XFxuZGlzcGxheTogZmxleDtcXG5mbGV4LXdyYXA6IHdyYXA7XFxud2lkdGg6IDEwMCU7XFxuanVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuLm5ld1RpdGxle1xcbmZvbnQtc2l6ZTogMjVweDtcXG59XFxuLmZvcm1JbnB1dHtcXG53aWR0aDogMTAwJTtcXG59XFxuLmZvcm1MYWJlbHtcXG5tYXJnaW4tcmlnaHQ6IDEwMCU7XFxufVxcbi5wcmlvcml0eXN7XFxubWFyZ2luLXJpZ2h0OjEwMCUgO1xcbn1cXG4ucHJpb3JpdHl7XFxuZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG5mb250LXNpemU6IDEycHg7XFxud2lkdGg6IDIwMHB4O1xcbnRyYW5zaXRpb246IDNzIGVhc2UtaW4tb3V0O1xcbn1cXG4uZm9ybU5vdGVze1xcbndpZHRoOjIwMHB4O1xcbm1hcmdpbi1sZWZ0OjtcXG5vdmVyZmxvdzpzY3JvbGw7XFxubWFyZ2luLXRvcDogNXB4O1xcbmFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4vKiBkcm9wZG93biBmb3IgUHJvamVjdHMqLy8qIGRyb3Bkb3duIGZvciBQcm9qZWN0cyovXFxuLmRyb3BidG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwyMjUsMTA5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwMCU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyouZHJvcGRvd24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIG1pbi13aWR0aDogMTYwcHg7XFxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5kcm9wZG93bi1jb250ZW50IGEge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMTJweCAxNnB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxcblxcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7ZGlzcGxheTogYmxvY2s7fVxcblxcbi5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7YmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTt9XFxuKi9cXG4vKiBhZGQqLy8qIGFkZCovLyogYWRkKi9cXG5cXG4uYWRkVGFza3tcXG5hcHBlYXJhbmNlOiBub25lO1xcbmZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuZm9udC1zaXplOiAyMHB4O1xcbmZvbnQtd2VpZ2h0OiAyMDA7XFxuYm9yZGVyLXdpZHRoOiAxcHg7XFxuYm9yZGVyLXJhZGl1czogMnB4O1xcbmJvcmRlci1jb2xvcjojYjhiOGJkO1xcbmJvcmRlci1zdHlsZTogc29saWQ7XFxuY29sb3I6I2I4YjhiZDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5oZWlnaHQ6IDMwcHg7XFxucGFkZGluZy10b3A6IDBweDtcXG5wYWRkaW5nLXJpZ2h0OiA4cHg7XFxucGFkZGluZy1sZWZ0OiA4cHg7XFxucGFkZGluZy1ib3R0b206IDBweDtcXG5tYXJnaW4tdG9wOiAwcHg7XFxubWFyZ2luLXJpZ2h0OiAxMDAlO1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG52ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG4uYWRkU2VjdGlvbntcXG5hcHBlYXJhbmNlOiBub25lO1xcbmZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuZm9udC1zaXplOiAyMHB4O1xcbmZvbnQtd2VpZ2h0OiAyMDA7XFxuYm9yZGVyLXdpZHRoOiAxcHg7XFxuYm9yZGVyLXJhZGl1czogMnB4O1xcbmJvcmRlci1jb2xvcjojYjhiOGJkO1xcbmJvcmRlci1zdHlsZTogc29saWQ7XFxuY29sb3I6I2I4YjhiZDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5oZWlnaHQ6IDMwcHg7XFxucGFkZGluZy10b3A6IDBweDtcXG5wYWRkaW5nLXJpZ2h0OiA4cHg7XFxucGFkZGluZy1sZWZ0OiA4cHg7XFxucGFkZGluZy1ib3R0b206IDBweDtcXG5tYXJnaW4tdG9wOiA3NXB4O1xcbm1hcmdpbi1yaWdodDogMTAwJTtcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxudmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG5cXG5cXG59XFxuXFxuLnNhdmVkTm90ZXN7XFxubWFyZ2luLXJpZ2h0OiAxMDVweDtcXG5tYXJnaW4tdG9wOiAwcHg7XFxufVxcbi5kZWxCdXR0b257XFxuYXBwZWFyYW5jZTogbm9uZTtcXG53aWR0aDogMjBweDtcXG5oZWlnaHQ6IDIwcHg7XFxuYm9yZGVyLXJhZGl1czogNTAlO1xcbmZvbnQtc2l6ZTogMTBweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAxMTMsIDExMyk7XFxuYm9yZGVyOiBub25lO1xcbmNvbG9yOnJnYigxMCwgMTAsIDEwKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCBhZGREYXlzIGZyb20gXCIuLi9hZGREYXlzL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTW9udGhzIGZyb20gXCIuLi9hZGRNb250aHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgYWRkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIHllYXJzLCBtb250aHMsIHdlZWtzLCBkYXlzLCBob3VycywgbWludXRlcyBhbmQgc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIHllYXJzLCBtb250aHMsIHdlZWtzLCBkYXlzLCBob3VycywgbWludXRlcyBhbmQgc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtEdXJhdGlvbn0gZHVyYXRpb24gLSB0aGUgb2JqZWN0IHdpdGggeWVhcnMsIG1vbnRocywgd2Vla3MsIGRheXMsIGhvdXJzLCBtaW51dGVzIGFuZCBzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKlxuICogfCBLZXkgICAgICAgICAgICB8IERlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCB5ZWFycyAgICAgICAgICB8IEFtb3VudCBvZiB5ZWFycyB0byBiZSBhZGRlZCAgICAgICAgfFxuICogfCBtb250aHMgICAgICAgICB8IEFtb3VudCBvZiBtb250aHMgdG8gYmUgYWRkZWQgICAgICAgfFxuICogfCB3ZWVrcyAgICAgICAgICB8IEFtb3VudCBvZiB3ZWVrcyB0byBiZSBhZGRlZCAgICAgICB8XG4gKiB8IGRheXMgICAgICAgICAgIHwgQW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQgICAgICAgICB8XG4gKiB8IGhvdXJzICAgICAgICAgIHwgQW1vdW50IG9mIGhvdXJzIHRvIGJlIGFkZGVkICAgICAgICB8XG4gKiB8IG1pbnV0ZXMgICAgICAgIHwgQW1vdW50IG9mIG1pbnV0ZXMgdG8gYmUgYWRkZWQgICAgICB8XG4gKiB8IHNlY29uZHMgICAgICAgIHwgQW1vdW50IG9mIHNlY29uZHMgdG8gYmUgYWRkZWQgICAgICB8XG4gKlxuICogQWxsIHZhbHVlcyBkZWZhdWx0IHRvIDBcbiAqXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIHNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIHRoZSBmb2xsb3dpbmcgZHVyYXRpb24gdG8gMSBTZXB0ZW1iZXIgMjAxNCwgMTA6MTk6NTBcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZChuZXcgRGF0ZSgyMDE0LCA4LCAxLCAxMCwgMTksIDUwKSwge1xuICogICB5ZWFyczogMixcbiAqICAgbW9udGhzOiA5LFxuICogICB3ZWVrczogMSxcbiAqICAgZGF5czogNyxcbiAqICAgaG91cnM6IDUsXG4gKiAgIG1pbnV0ZXM6IDksXG4gKiAgIHNlY29uZHM6IDMwLFxuICogfSlcbiAqIC8vPT4gVGh1IEp1biAxNSAyMDE3IDE1OjI5OjIwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZChkaXJ0eURhdGUsIGR1cmF0aW9uKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICBpZiAoIWR1cmF0aW9uIHx8IHR5cGVvZiBkdXJhdGlvbiAhPT0gJ29iamVjdCcpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgeWVhcnMgPSAneWVhcnMnIGluIGR1cmF0aW9uID8gdG9JbnRlZ2VyKGR1cmF0aW9uLnllYXJzKSA6IDA7XG4gIHZhciBtb250aHMgPSAnbW9udGhzJyBpbiBkdXJhdGlvbiA/IHRvSW50ZWdlcihkdXJhdGlvbi5tb250aHMpIDogMDtcbiAgdmFyIHdlZWtzID0gJ3dlZWtzJyBpbiBkdXJhdGlvbiA/IHRvSW50ZWdlcihkdXJhdGlvbi53ZWVrcykgOiAwO1xuICB2YXIgZGF5cyA9ICdkYXlzJyBpbiBkdXJhdGlvbiA/IHRvSW50ZWdlcihkdXJhdGlvbi5kYXlzKSA6IDA7XG4gIHZhciBob3VycyA9ICdob3VycycgaW4gZHVyYXRpb24gPyB0b0ludGVnZXIoZHVyYXRpb24uaG91cnMpIDogMDtcbiAgdmFyIG1pbnV0ZXMgPSAnbWludXRlcycgaW4gZHVyYXRpb24gPyB0b0ludGVnZXIoZHVyYXRpb24ubWludXRlcykgOiAwO1xuICB2YXIgc2Vjb25kcyA9ICdzZWNvbmRzJyBpbiBkdXJhdGlvbiA/IHRvSW50ZWdlcihkdXJhdGlvbi5zZWNvbmRzKSA6IDA7IC8vIEFkZCB5ZWFycyBhbmQgbW9udGhzXG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRhdGVXaXRoTW9udGhzID0gbW9udGhzIHx8IHllYXJzID8gYWRkTW9udGhzKGRhdGUsIG1vbnRocyArIHllYXJzICogMTIpIDogZGF0ZTsgLy8gQWRkIHdlZWtzIGFuZCBkYXlzXG5cbiAgdmFyIGRhdGVXaXRoRGF5cyA9IGRheXMgfHwgd2Vla3MgPyBhZGREYXlzKGRhdGVXaXRoTW9udGhzLCBkYXlzICsgd2Vla3MgKiA3KSA6IGRhdGVXaXRoTW9udGhzOyAvLyBBZGQgZGF5cywgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHNcblxuICB2YXIgbWludXRlc1RvQWRkID0gbWludXRlcyArIGhvdXJzICogNjA7XG4gIHZhciBzZWNvbmRzVG9BZGQgPSBzZWNvbmRzICsgbWludXRlc1RvQWRkICogNjA7XG4gIHZhciBtc1RvQWRkID0gc2Vjb25kc1RvQWRkICogMTAwMDtcbiAgdmFyIGZpbmFsRGF0ZSA9IG5ldyBEYXRlKGRhdGVXaXRoRGF5cy5nZXRUaW1lKCkgKyBtc1RvQWRkKTtcbiAgcmV0dXJuIGZpbmFsRGF0ZTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZERheXMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG5cbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTW9udGhzXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1vbnRocyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtb250aHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbW9udGhzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1vbnRocyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNSBtb250aHMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1vbnRocyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgNSlcbiAqIC8vPT4gU3VuIEZlYiAwMSAyMDE1IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTW9udGhzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuXG4gIGlmIChpc05hTihhbW91bnQpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgbW9udGhzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgdmFyIGRheU9mTW9udGggPSBkYXRlLmdldERhdGUoKTsgLy8gVGhlIEpTIERhdGUgb2JqZWN0IHN1cHBvcnRzIGRhdGUgbWF0aCBieSBhY2NlcHRpbmcgb3V0LW9mLWJvdW5kcyB2YWx1ZXMgZm9yXG4gIC8vIG1vbnRoLCBkYXksIGV0Yy4gRm9yIGV4YW1wbGUsIG5ldyBEYXRlKDIwMjAsIDAsIDApIHJldHVybnMgMzEgRGVjIDIwMTkgYW5kXG4gIC8vIG5ldyBEYXRlKDIwMjAsIDEzLCAxKSByZXR1cm5zIDEgRmViIDIwMjEuICBUaGlzIGlzICphbG1vc3QqIHRoZSBiZWhhdmlvciB3ZVxuICAvLyB3YW50IGV4Y2VwdCB0aGF0IGRhdGVzIHdpbGwgd3JhcCBhcm91bmQgdGhlIGVuZCBvZiBhIG1vbnRoLCBtZWFuaW5nIHRoYXRcbiAgLy8gbmV3IERhdGUoMjAyMCwgMTMsIDMxKSB3aWxsIHJldHVybiAzIE1hciAyMDIxIG5vdCAyOCBGZWIgMjAyMSBhcyBkZXNpcmVkLiBTb1xuICAvLyB3ZSdsbCBkZWZhdWx0IHRvIHRoZSBlbmQgb2YgdGhlIGRlc2lyZWQgbW9udGggYnkgYWRkaW5nIDEgdG8gdGhlIGRlc2lyZWRcbiAgLy8gbW9udGggYW5kIHVzaW5nIGEgZGF0ZSBvZiAwIHRvIGJhY2sgdXAgb25lIGRheSB0byB0aGUgZW5kIG9mIHRoZSBkZXNpcmVkXG4gIC8vIG1vbnRoLlxuXG4gIHZhciBlbmRPZkRlc2lyZWRNb250aCA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKTtcbiAgZW5kT2ZEZXNpcmVkTW9udGguc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpICsgYW1vdW50ICsgMSwgMCk7XG4gIHZhciBkYXlzSW5Nb250aCA9IGVuZE9mRGVzaXJlZE1vbnRoLmdldERhdGUoKTtcblxuICBpZiAoZGF5T2ZNb250aCA+PSBkYXlzSW5Nb250aCkge1xuICAgIC8vIElmIHdlJ3JlIGFscmVhZHkgYXQgdGhlIGVuZCBvZiB0aGUgbW9udGgsIHRoZW4gdGhpcyBpcyB0aGUgY29ycmVjdCBkYXRlXG4gICAgLy8gYW5kIHdlJ3JlIGRvbmUuXG4gICAgcmV0dXJuIGVuZE9mRGVzaXJlZE1vbnRoO1xuICB9IGVsc2Uge1xuICAgIC8vIE90aGVyd2lzZSwgd2Ugbm93IGtub3cgdGhhdCBzZXR0aW5nIHRoZSBvcmlnaW5hbCBkYXktb2YtbW9udGggdmFsdWUgd29uJ3RcbiAgICAvLyBjYXVzZSBhbiBvdmVyZmxvdywgc28gc2V0IHRoZSBkZXNpcmVkIGRheS1vZi1tb250aC4gTm90ZSB0aGF0IHdlIGNhbid0XG4gICAgLy8ganVzdCBzZXQgdGhlIGRhdGUgb2YgYGVuZE9mRGVzaXJlZE1vbnRoYCBiZWNhdXNlIHRoYXQgb2JqZWN0IG1heSBoYXZlIGhhZFxuICAgIC8vIGl0cyB0aW1lIGNoYW5nZWQgaW4gdGhlIHVudXN1YWwgY2FzZSB3aGVyZSB3aGVyZSBhIERTVCB0cmFuc2l0aW9uIHdhcyBvblxuICAgIC8vIHRoZSBsYXN0IGRheSBvZiB0aGUgbW9udGggYW5kIGl0cyBsb2NhbCB0aW1lIHdhcyBpbiB0aGUgaG91ciBza2lwcGVkIG9yXG4gICAgLy8gcmVwZWF0ZWQgbmV4dCB0byBhIERTVCB0cmFuc2l0aW9uLiAgU28gd2UgdXNlIGBkYXRlYCBpbnN0ZWFkIHdoaWNoIGlzXG4gICAgLy8gZ3VhcmFudGVlZCB0byBzdGlsbCBoYXZlIHRoZSBvcmlnaW5hbCB0aW1lLlxuICAgIGRhdGUuc2V0RnVsbFllYXIoZW5kT2ZEZXNpcmVkTW9udGguZ2V0RnVsbFllYXIoKSwgZW5kT2ZEZXNpcmVkTW9udGguZ2V0TW9udGgoKSwgZGF5T2ZNb250aCk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIHJlcXVpcmUtanNkb2MgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCAnLi9mYWN0b3J5JztcbmltcG9ydCAnLi9kb20nO1xuaW1wb3J0IHtjb21wb3NlLCBlbGVtZW50fSBmcm9tICcuL2RvbSc7XG5pbXBvcnQge3Rhc2tGYWN0b3J5fSBmcm9tICcuL2ZhY3RvcnknO1xuaW1wb3J0IEhpZ2ggZnJvbSAnLi9pbWFnZXMvaGlndGgucG5nJztcbmltcG9ydCBNZWRpdW0gZnJvbSAnLi9pbWFnZXMvbWVkaXVtLnBuZyc7XG5pbXBvcnQgTG93IGZyb20gJy4vaW1hZ2VzL2xvdy5wbmcnO1xuLy8gQWRkIG5lY2Vzc2FyeSBldmVudCBsaXN0ZW5lcnNcbmNvbnN0IG5ld1NlY3Rpb24gPSAoKSA9PiB7XG4gIGVsZW1lbnQuYWRkU2VjdGlvbigpO1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkU2VjdGlvbicpO1xuICAvLyBIb3cgbWFueSBzZWN0aW9ucyBhcmUgYWxyZWFkeSBzYXZlZD9cbiAgbGV0IGNvbCA9IHBhcnNlSW50KGNvbENvdW50ZXIoKSk7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb21wb3NlLm5ld1NlY3Rpb24oY29sLCAnYWxsU2VjdGlvbnNXcmFwcGVyJywgJ05ldyBTZWN0aW9uJyk7XG4gICAgY29sKys7XG4gICAgaWYgKGNvbCA9PSAxMCkge1xuICAgICAgYnV0dG9uLnJlbW92ZSgpO1xuICAgIH1cbiAgfSk7XG59O1xuZnVuY3Rpb24gbGluZUNvdW50ZXIoY29sKSB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZpbHRlcigoaXRlbSkgPT4gaXRlbVswXSAhPSAncycpO1xuICBjb25zdCBmaWx0ZXJDb2wgPSBrZXlzLmZpbHRlcigoaXRlbSkgPT4gaXRlbVswXSA9PT0gY29sKTtcbiAgbGV0IGxpbmVzID0gMDtcbiAgZmlsdGVyQ29sLmxlbmd0aCA9PT0gMCA/IChsaW5lcyA9IDApIDogKGxpbmVzID0gZmlsdGVyQ29sLmxlbmd0aCAvIDQpO1xuICByZXR1cm4gbGluZXM7XG59XG5mdW5jdGlvbiBjb2xDb3VudGVyKCkge1xuICBjb25zdCBjb2xBcnJheSA9IFtdO1xuICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpXG4gICAgICAuc29ydCgpXG4gICAgICAuZmlsdGVyKCAoaXRlbSkgPT4gaXRlbVswXSA9PT0gJ3MnKVxuICAgICAgLm1hcCggKGl0ZW0pID0+IGNvbEFycmF5LnB1c2goaXRlbVtwYXJzZUludChpdGVtLmxlbmd0aCktMV0pICk7XG4gIGlmIChjb2xBcnJheS5sZW5ndGggPT0gMCApIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoLi4uY29sQXJyYXkpKzE7XG4gIH07XG59XG5cbi8vIGZpbmQgdW5pcXVlIGluZGV4ZXMgaW4gZGF0YWJhc2VcbmZ1bmN0aW9uIHNlYXJjaEtleXMoKSB7XG4gIGNvbnN0IGRhdGEgPSBbLi4uT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW1bMF0gIT0gJ3MnKV07XG5cbiAgY29uc3QgaW5kZXhBcnJheSA9IFtdO1xuICBkYXRhLm1hcCgoa2V5KSA9PiB7XG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKC9bYS16QS1aXS8pO1xuICAgIGNvbnN0IG1hdGNoID0gcmVnZXguZXhlYyhrZXkpO1xuICAgIGluZGV4QXJyYXkucHVzaChrZXkuc2xpY2UoMCwgbWF0Y2guaW5kZXgpKTtcbiAgfSk7XG4gIGNvbnN0IHVuaXF1ZSA9IFsuLi5uZXcgU2V0KGluZGV4QXJyYXkpXTtcblxuICByZXR1cm4gdW5pcXVlO1xufVxuXG4vLyBkaXNwbGF5IG9iamVjdHMgd2l0aCBjb3JyZWN0IGluZGV4XG5jb25zdCBmaW5kVGFzayA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gIGNvbnN0IHNlYXJjaCA9IChrZXkpID0+IHtcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoL1thLXpBLVpdLyk7XG4gICAgY29uc3QgbWF0Y2ggPSByZWdleC5leGVjKGtleSk7XG4gICAgY29uc3QgcmVzdWx0ID0ga2V5LnNsaWNlKDAsIG1hdGNoLmluZGV4KTtcbiAgICByZXR1cm4gaW5kZXggPT09IHJlc3VsdDtcbiAgfTtcblxuICBjb25zdCBzZWFyY2hSZXN1bHQgPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpXG4gICAgICAuc29ydCgpXG4gICAgICAuZmlsdGVyKChrZXkpID0+IHNlYXJjaChrZXkpKVxuICAgICAgLm1hcCgoa2V5KSA9PiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAge1xuICAgICAgICBpbmRleCxcbiAgICAgICAgdGl0bGU6IHNlYXJjaFJlc3VsdFszXSxcbiAgICAgICAgc2NoZWR1bGU6IHNlYXJjaFJlc3VsdFsyXSxcbiAgICAgICAgcHJpb3JpdHk6IHNlYXJjaFJlc3VsdFsxXSxcbiAgICAgICAgbm90ZXM6IHNlYXJjaFJlc3VsdFswXSxcbiAgICAgIH0sXG4gICk7XG59O1xuXG4vLyBHZXQgc2VjdGlvbiB0aXRsZXMgZnJvbSBsb2NhbFN0b3JhZ2VcbmNvbnN0IHNldFNlY3Rpb25UaXRsZSA9ICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuc29ydCgpO1xuICBkYXRhXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtWzBdID09PSAncycpXG4gICAgICAubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IGl0ZW0ubGVuZ3RoLTE7XG4gICAgICAgIGNvbnN0IGNvbCA9IGl0ZW1bbGFzdEluZGV4XTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb2wpO1xuICAgICAgICB0aXRsZS52YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGl0ZW0pO1xuICAgICAgfSk7XG59O1xuXG4vLyBDbGljayBhIHRhc2sgYW5kIG9wZW4gZWRpdG9yXG5jb25zdCBlZGl0VGFzayA9ICgpID0+IHtcbiAgY29uc3QgdGFza3NBcnJheSA9IEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVzY3JpcHRpb25XcmFwcGVyJyksXG4gICk7XG4gIHRhc2tzQXJyYXkubWFwKChpdGVtKSA9PlxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBlZGl0KGl0ZW0pLCB7b25jZTogdHJ1ZX0pLFxuICApO1xuXG5cbiAgZnVuY3Rpb24gZWRpdChpdGVtKSB7XG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKC9bYS16QS1aXS8pO1xuICAgIGNvbnN0IG1hdGNoID0gcmVnZXguZXhlYyhpdGVtLmlkKTtcbiAgICBjb25zdCBpbmRleCA9IGl0ZW0uaWQuc2xpY2UoMCwgbWF0Y2guaW5kZXgpO1xuICAgIGNvbnN0IHRhc2sgPSB0YXNrRmFjdG9yeShPYmplY3QudmFsdWVzKGZpbmRUYXNrKGluZGV4KSkpO1xuICAgIGNvbnN0IGN1cnJQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2luZGV4fXByaW9yaXR5YCk7XG4gICAgY3VyclByaW9yaXR5LnJlbW92ZSgpO1xuICAgIC8vIERpc3BsYXkgcHJpb3JpdHkgYnV0dG9uc1xuICAgIGNvbnN0IGxvdyA9IGVsZW1lbnQucHJpb3JpdHkoXG4gICAgICAgIGAke2luZGV4fWxvd2AsXG4gICAgICAgIGAke2luZGV4fWJ1dHRvbldyYXBwZXJgLFxuICAgICAgICBMb3cpO1xuICAgIGNvbnN0IG1lZGl1bSA9IGVsZW1lbnQucHJpb3JpdHkoXG4gICAgICAgIGAke2luZGV4fW1lZGl1bWAsXG4gICAgICAgIGAke2luZGV4fWJ1dHRvbldyYXBwZXJgLFxuICAgICAgICBNZWRpdW0sXG4gICAgKTtcbiAgICBjb25zdCBoaWdoID0gZWxlbWVudC5wcmlvcml0eShcbiAgICAgICAgYCR7aW5kZXh9aGlnaGAsXG4gICAgICAgIGAke2luZGV4fWJ1dHRvbldyYXBwZXJgLFxuICAgICAgICBIaWdoLFxuICAgICk7XG4gICAgZWxlbWVudC5mb3JtU3VibWk7XG4gICAgZWxlbWVudC5sYWJlbChcbiAgICAgICAgYCR7aW5kZXh9bm90ZXNgLFxuICAgICAgICBpdGVtLmlkLFxuICAgICAgICBgJHtpbmRleH1ub3Rlc2AsXG4gICAgICAgICdOb3RlczonLFxuICAgICAgICAnc2F2ZWROb3RlcycsXG4gICAgKTtcbiAgICAvLyBBZGQgcHJpb3JpdHkgZXZlbnQgbGlzdGVuZXJzIGFuZCBjdXJyZW50IGNob2ljZSBkaXNwbGF5ICggYmlnZ2VyIGltYWdlIClcbiAgICBsb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke2luZGV4fXByaW9yaXR5YCwgJ2xvdycpO1xuICAgICAgbG93LnN0eWxlLndpZHRoPScxOHB4JztcbiAgICAgIGxvdy5zdHlsZS5oZWlnaHQ9JzE4cHgnO1xuICAgICAgbWVkaXVtLnN0eWxlLndpZHRoPScxNnB4JztcbiAgICAgIG1lZGl1bS5zdHlsZS5oZWlnaHQ9JzE2cHgnO1xuICAgICAgaGlnaC5zdHlsZS53aWR0aD0nMTZweCc7XG4gICAgICBoaWdoLnN0eWxlLmhlaWdodD0nMTZweCc7XG4gICAgfSk7XG4gICAgbWVkaXVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtpbmRleH1wcmlvcml0eWAsICdtZWRpdW0nKTtcbiAgICAgIGxvdy5zdHlsZS53aWR0aD0nMTZweCc7XG4gICAgICBsb3cuc3R5bGUuaGVpZ2h0PScxNnB4JztcbiAgICAgIG1lZGl1bS5zdHlsZS53aWR0aD0nMThweCc7XG4gICAgICBtZWRpdW0uc3R5bGUuaGVpZ2h0PScxOHB4JztcbiAgICAgIGhpZ2guc3R5bGUud2lkdGg9JzE2cHgnO1xuICAgICAgaGlnaC5zdHlsZS5oZWlnaHQ9JzE2cHgnO1xuICAgIH0pO1xuICAgIGhpZ2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke2luZGV4fXByaW9yaXR5YCwgJ2hpZ2gnKTtcbiAgICAgIGxvdy5zdHlsZS53aWR0aD0nMTZweCc7XG4gICAgICBsb3cuc3R5bGUuaGVpZ2h0PScxNnB4JztcbiAgICAgIG1lZGl1bS5zdHlsZS53aWR0aD0nMTZweCc7XG4gICAgICBtZWRpdW0uc3R5bGUuaGVpZ2h0PScxNnB4JztcbiAgICAgIGhpZ2guc3R5bGUud2lkdGg9JzE4cHgnO1xuICAgICAgaGlnaC5zdHlsZS5oZWlnaHQ9JzE4cHgnO1xuICAgIH0pO1xuICAgIC8vIFNldCByZWFkT25seSB0byBmYWxzZSBhbmQgc2V0IGV2ZW50IGxpc3RlbmVycyBmb3IgdGl0bGUgYW5kIHNjaGVkdWxlIGlucHV0c1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpbmRleH1zYXZlZFRpdGxlSW5wdXRgKTtcbiAgICB0aXRsZUlucHV0LnJlbW92ZUF0dHJpYnV0ZSgncmVhZE9ubHknKTtcbiAgICB0aXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtpbmRleH10aXRsZWAsIHRpdGxlSW5wdXQudmFsdWUpKTtcbiAgICBjb25zdCBzY2hlZHVsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aW5kZXh9c2F2ZWRTY2hlZHVsZUlucHV0YCk7XG4gICAgc2NoZWR1bGVJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRPbmx5Jyk7XG4gICAgc2NoZWR1bGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgIHNjaGVkdWxlSW5wdXQuc3R5bGUuZm9udFNpemUgPSAnMTNweCc7XG4gICAgc2NoZWR1bGVJbnB1dC5zdHlsZS53aWR0aCA9ICcxMjBweCc7XG4gICAgc2NoZWR1bGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7aW5kZXh9c2NoZWR1bGVgLCBzY2hlZHVsZUlucHV0LnZhbHVlKSk7XG4gICAgLy8gRGlzcGxheSBub3RlcyBhbmQgYWRkIGV2ZW50IGxpc3RuZXJcbiAgICBjb25zdCBub3RlcyA9IGVsZW1lbnQudGV4dEFyZWEoYCR7aW5kZXh9bm90ZXNgLCBpdGVtLmlkKTtcbiAgICBub3Rlcy52YWx1ZSA9IHRhc2subm90ZXM7XG4gICAgbm90ZXMuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke2luZGV4fW5vdGVzYCwgbm90ZXMudmFsdWUpKTtcbiAgICAvLyBSZWZyZXNoIHBhZ2Ugd2hlbiB1c2VyIGNsaWNrcyBvdXQgb2YgdGhlIGJveFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aW5kZXh9c2F2ZWRXcmFwcGVyYCkuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIHNldCB1cCBkZWxldGUgdGFzayBidXR0b25cbiAgICBlbGVtZW50LmRlbGV0ZUJ1dHRvbihpbmRleCwgYCR7aW5kZXh9c2F2ZWRXcmFwcGVyYCk7XG4gIH1cbn07XG4vLyBDb3VudGVyIHRvIG1hcCBsaW5lc1xuY29uc3QgY291bnRlckxpbmVzID0gKGVsZW1lbnQpID0+IHtcbiAgY29uc3QgaWQgPSBlbGVtZW50LmlkO1xuICBjb25zdCBsaW5lSW5kZXggPSBpZC5pbmRleE9mKCcqJykgKyAxO1xuICBjb25zdCBsaW5lID0gaWQuc2xpY2UobGluZUluZGV4KTtcbiAgaWYgKGxpbmUgPT09ICcnKSB7XG4gICAgZWxlbWVudC5pZCA9IGlkICsgMDtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmlkID0gaWQucmVwbGFjZShgKiR7bGluZX1gLCBgKiR7cGFyc2VJbnQobGluZSkgKyAxfWApO1xuICB9XG59O1xuZXhwb3J0IHtcbiAgbmV3U2VjdGlvbixcbiAgbGluZUNvdW50ZXIsXG4gIGNvdW50ZXJMaW5lcyxcbiAgc2VhcmNoS2V5cyxcbiAgZmluZFRhc2ssXG4gIGNvbENvdW50ZXIsXG4gIHNldFNlY3Rpb25UaXRsZSxcbiAgZWRpdFRhc2ssXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IHtmb3JtRHJpdmVyLCB0YXNrRmFjdG9yeX0gZnJvbSAnLi9mYWN0b3J5JztcbmltcG9ydCB7bGluZUNvdW50ZXIsIGZpbmRUYXNrLCBjb2xDb3VudGVyLCBjb3VudGVyTGluZXN9IGZyb20gJy4vY29udHJvbGxlcic7XG5pbXBvcnQgSGlnaCBmcm9tICcuL2ltYWdlcy9oaWd0aC5wbmcnO1xuaW1wb3J0IE1lZGl1bSBmcm9tICcuL2ltYWdlcy9tZWRpdW0ucG5nJztcbmltcG9ydCBMb3cgZnJvbSAnLi9pbWFnZXMvbG93LnBuZyc7XG5pbXBvcnQge2FkZH0gZnJvbSAnZGF0ZS1mbnMnOy8vIEFsbCBuZWVkZWQgd3JhcHBlcnNcbmNvbnN0IHdyYXBwZXIgPSAoKCkgPT4ge1xuICAvLyBOZXcgU2VjdGlvbiBXcmFwcGVyXG4gIGNvbnN0IHNlY3Rpb24gPSAoaWQsIGFwcGVuZFRvKSA9PiB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlY3Rpb24uaWQgPSBpZDtcbiAgICBzZWN0aW9uLmNsYXNzTGlzdCA9ICdzZWN0aW9uV3JhcHBlcic7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwZW5kVG8pO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChzZWN0aW9uKTtcbiAgfTtcblxuICBjb25zdCBzYXZlZFNlY3Rpb24gPSAoaWQsIGFwcGVuZFRvKSA9PiB7XG4gICAgY29uc3Qgc2F2ZWRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2F2ZWRTZWN0aW9uLmlkID0gaWQ7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwZW5kVG8pO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChzYXZlZFNlY3Rpb24pO1xuICB9O1xuXG4gIC8vIFNhdmVkIHRpdGxlIHdyYXBwZXJzXG4gIGNvbnN0IHNhdmVkID0gKGlkLCBhcHBlbmRUbykgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFwcGVuZFRvKTtcbiAgICBjb25zdCBzYXZlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNhdmVkLmlkID0gaWQ7XG4gICAgc2F2ZWQuY2xhc3NMaXN0ID0gJ3NhdmVkV3JhcHBlcic7XG4gICAgc2F2ZWQuc2V0QXR0cmlidXRlKCdyZWFkT25seScsICd0cnVlJyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHNhdmVkKTtcbiAgfTtcblxuICBjb25zdCBidXR0b24gPSAoaWQsIGFwcGVuZFRvKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uLmlkID0gaWQ7XG4gICAgYnV0dG9uLmNsYXNzTGlzdCA9ICdidXR0b25zV3JhcHBlcic7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwZW5kVG8pO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICB9O1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gKGlkLCBhcHBlbmRUbykgPT4ge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb24uaWQgPSBpZDtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QgPSAnZGVzY3JpcHRpb25XcmFwcGVyJztcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBlbmRUbyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgfTtcblxuICBjb25zdCBzYXZlZFRpdGxlID0gKGlkLCBhcHBlbmRUbykgPT4ge1xuICAgIGNvbnN0IHNhdmVkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzYXZlZFRpdGxlLmlkID0gaWQ7XG4gICAgc2F2ZWRUaXRsZS5jbGFzc0xpc3QgPSAnc2F2ZWRUaXRsZVdyYXBwZXInO1xuICAgIHNhdmVkVGl0bGUuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICd0cnVlJyk7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwZW5kVG8pO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChzYXZlZFRpdGxlKTtcbiAgfTtcblxuICBjb25zdCBzYXZlZFNoZWR1bGUgPSAoaWQsIGFwcGVuZFRvKSA9PiB7XG4gICAgY29uc3Qgc2F2ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzYXZlZC5pZCA9IGlkO1xuICAgIHNhdmVkLmNsYXNzTGlzdCA9ICdzYXZlZFNjaGVkdWxlV3JhcHBlcic7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwZW5kVG8pO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChzYXZlZCk7XG4gIH07XG4gIC8vIEZvciBuZXcgdGFzayBmb3JtXG4gIGNvbnN0IG5ld1Rhc2sgPSAoaWQsIGFwcGVuZFRvKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdyYXBwZXIuaWQgPSBpZDtcbiAgICB3cmFwcGVyLmNsYXNzTGlzdCA9ICduZXdXcmFwcGVyJztcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBlbmRUbyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICB9O1xuXG4gIGNvbnN0IG5ld0Zvcm0gPSAoaWQsIGFwcGVuZFRvKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdyYXBwZXIuaWQgPSBpZDtcbiAgICB3cmFwcGVyLmNsYXNzTGlzdCA9ICdmb3JtV3JhcHBlcic7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwZW5kVG8pO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNlY3Rpb24sXG4gICAgc2F2ZWRTZWN0aW9uLFxuICAgIHNhdmVkLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIHNhdmVkVGl0bGUsXG4gICAgc2F2ZWRTaGVkdWxlLFxuICAgIG5ld1Rhc2ssXG4gICAgYnV0dG9uLFxuICAgIG5ld0Zvcm0sXG4gIH07XG59KSgpO1xuXG4vLyBBbGwgbmVlZGVkIGVsZW1lbnRzXG5jb25zdCBlbGVtZW50ID0gKCgpID0+IHtcbiAgY29uc3Qgc2VjdGlvblRpdGxlID0gKGlkLCBhcHBlbmRUbywgdGV4dCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aXRsZS5pZCA9IGlkO1xuICAgIHRpdGxlLmNsYXNzTGlzdCA9ICdzZWN0aW9uVGl0bGUnO1xuICAgIHRpdGxlLnR5cGUgPSAndGV4dCc7XG4gICAgdGl0bGUudmFsdWUgPSB0ZXh0O1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+bG9jYWxTdG9yYWdlLnNldEl0ZW0oYHNlY3Rpb24ke3RpdGxlLmlkWzBdfWAsIGAke3RpdGxlLnZhbHVlfWApKTtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBlbmRUbyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgfTtcblxuICAvLyBmb3JtXG4gIGNvbnN0IG5ld0Zvcm0gPSAoaWQsIGFwcGVuZFRvKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmlkID0gaWQ7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwZW5kVG8pO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgfTtcblxuICAvLyBpbnB1dHNcbiAgY29uc3Qgc2F2ZWRJbnB1dCA9IChpZCwgYXBwZW5kVG8sIHRleHQpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuaWQgPSBpZDtcbiAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0LmNsYXNzTGlzdCA9ICdzYXZlZElucHV0JztcbiAgICBpbnB1dC52YWx1ZSA9IHRleHQ7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdyZWFkT25seScsICd0cnVlJyk7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwZW5kVG8pO1xuICAgIGFkZC5ldmU7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgfTtcblxuICBjb25zdCBwcmlvcml0eSA9IChpZCwgYXBwZW5kVG8sIGltZykgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpZiAoaWQgIT0gJycpIHtcbiAgICAgIGlucHV0LmlkID0gaWQ7XG4gICAgfVxuICAgIGlucHV0LmNsYXNzTGlzdCA9ICdidG5DaGVjayc7XG4gICAgaW5wdXQudHlwZSA9ICdidXR0b24nO1xuICAgIGlucHV0LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWd9KWA7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwZW5kVG8pO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9O1xuXG4gIGNvbnN0IGlucHV0ID0gKGlkLCBhcHBlbmRUbywgdHlwZSwgY2xhc3NMaXN0LCBuYW1lLCBjaGVja2VkKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlmIChpZCAhPSAnJykge1xuICAgICAgaW5wdXQuaWQgPSBpZDtcbiAgICB9XG4gICAgaW5wdXQubmFtZSA9IG5hbWU7XG4gICAgaW5wdXQudHlwZSA9IHR5cGU7XG4gICAgaW5wdXQuY2xhc3NMaXN0ID0gY2xhc3NMaXN0O1xuICAgIGlmIChjaGVja2VkKSB7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xuICAgIH1cbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBlbmRUbyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgfTtcbiAgLy8gbGFiZWxzXG4gIGNvbnN0IGxhYmVsID0gKGlkLCBhcHBlbmRUbywgaW5wdXQsIHRleHQsIGNsYXNzTGlzdCkgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbC5pZCA9IGlkO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaW5wdXQpO1xuICAgIGxhYmVsLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgbGFiZWwuY2xhc3NMaXN0ID0gY2xhc3NMaXN0O1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFwcGVuZFRvKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICB9O1xuXG4gIGNvbnN0IG5ld0xhYmVsVGl0bGUgPSAoaWQsIGFwcGVuZFRvLCBpbnB1dCwgdGV4dCkgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBpZiAoaWQgIT0gJycpIHtcbiAgICAgIGxhYmVsLmlkID0gaWQ7XG4gICAgfVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaW5wdXQpO1xuICAgIGxhYmVsLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgbGFiZWwuY2xhc3NMaXN0ID0gJ25ld1RpdGxlJztcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBlbmRUbyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgfTtcblxuICAvLyB0ZXh0QXJlYVxuXG4gIGNvbnN0IHRleHRBcmVhID0gKGlkLCBhcHBlbmRUbykgPT4ge1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIHRleHQuaWQgPSBpZDtcbiAgICB0ZXh0LmNsYXNzTGlzdCA9ICdmb3JtTm90ZXMnO1xuICAgIHRleHQucm93cyA9IDQ7XG4gICAgdGV4dC5jb2xzID0gMjA7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwZW5kVG8pO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICByZXR1cm4gdGV4dDtcbiAgfTtcblxuICAvLyBBZGQgbmV3IHByb2plY3RcbiAgY29uc3QgcHJvamVjdEl0ZW0gPSAoaWQsIG5hbWUpID0+IHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkuaWQgPSBgJHtpZH1gO1xuICAgIGxpLmNsYXNzTGlzdCA9ICdwcm9qZWN0SXRlbSc7XG4gICAgbGkuaW5uZXJUZXh0ID0gYCR7bmFtZX1gO1xuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RMaXN0Jyk7XG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQobGkpO1xuICB9O1xuXG4gIC8vIFN1Ym1pdCBidXR0b25cbiAgY29uc3QgZm9ybVN1Ym1pdCA9IChhcHBlbmRUbykgPT4ge1xuICAgIGNvbnN0IGRyb3BCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkcm9wQnV0dG9uLmNsYXNzTGlzdCA9ICdkcm9wYnRuJztcbiAgICBkcm9wQnV0dG9uLmlubmVyVGV4dCA9ICdBZGQnO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBlbmRUbyk7XG4gICAgZHJvcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHRhc2sgPSB0YXNrRmFjdG9yeShmb3JtRHJpdmVyKGZvcm0pKTtcbiAgICAgIGNvbnNvbGUubG9nKHRhc2spO1xuICAgICAgdGFzay5zYXZlKCk7XG4gICAgfSk7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwZW5kVG8pO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChkcm9wQnV0dG9uKTtcbiAgfTtcblxuICAvLyBBZGQgdGFzayBvciBzZWN0aW9uIGJ1dHRvblxuICBjb25zdCBhZGRUYXNrID0gKGNvbCwgYXBwZW5kVG8pID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGJ1dHRvbi5pZCA9IGNvbCArICcqJztcbiAgICBidXR0b24udmFsdWUgPSAnKyc7XG4gICAgYnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBidXR0b24uY2xhc3NMaXN0ID0gJ2FkZFRhc2snO1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFwcGVuZFRvKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgfTtcblxuICBjb25zdCBhZGRTZWN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgYnV0dG9uLmlkID0gJ2FkZFNlY3Rpb24nO1xuICAgIGJ1dHRvbi52YWx1ZSA9ICcrJztcbiAgICBidXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QgPSAnYWRkU2VjdGlvbic7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1NlY3Rpb25XcmFwcGVyJyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgbGV0IGNvdW50ZXIgPSBjb2xDb3VudGVyKCk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgc2VjdGlvbiR7Y291bnRlcn1gLCAnTm8gdGl0bGUnKTtcbiAgICAgIGNvdW50ZXIrKztcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVCdXR0b24gPSAoaW5kZXgsIGFwcGVuZFRvKSA9PiB7XG4gICAgY29uc3QgZGVsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsQnV0dG9uLmNsYXNzTGlzdCA9ICdkZWxCdXR0b24nO1xuICAgIGRlbEJ1dHRvbi5pbm5lclRleHQgPSAnWCc7XG4gICAgZGVsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgdGFzayA9IHRhc2tGYWN0b3J5KE9iamVjdC52YWx1ZXMoZmluZFRhc2soaW5kZXgpKSk7XG4gICAgICB0YXNrLnJlbW92ZVRhc2soKTtcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFwcGVuZFRvKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGVsQnV0dG9uKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNlY3Rpb25UaXRsZSxcbiAgICBuZXdGb3JtLFxuICAgIHNhdmVkSW5wdXQsXG4gICAgbGFiZWwsXG4gICAgcHJvamVjdEl0ZW0sXG4gICAgcHJpb3JpdHksXG4gICAgdGV4dEFyZWEsXG4gICAgbmV3TGFiZWxUaXRsZSxcbiAgICBpbnB1dCxcbiAgICBmb3JtU3VibWl0LFxuICAgIGFkZFNlY3Rpb24sXG4gICAgYWRkVGFzayxcbiAgICBkZWxldGVCdXR0b24sXG4gIH07XG59KSgpO1xuXG4vLyBDb21wb3NlZCBTdHJ1Y3R1cmVzIDogbmV3U2VjdGlvbigpLCBuZXdUYXNrKCksIHNhdmVkVGFzaygpXG5cbmNvbnN0IGNvbXBvc2UgPSAoKCkgPT4ge1xuICBjb25zdCBuZXdTZWN0aW9uID0gKGNvbCwgYXBwZW5kVG8sIHRpdGxlKSA9PiB7XG4gICAgd3JhcHBlci5zZWN0aW9uKGAke2NvbH1zZWN0aW9uV3JhcHBlcmAsIGFwcGVuZFRvKTtcbiAgICBlbGVtZW50LnNlY3Rpb25UaXRsZShgJHtjb2x9YCwgYCR7Y29sfXNlY3Rpb25XcmFwcGVyYCwgJ05ldyBTZWN0aW9uJyk7XG4gICAgd3JhcHBlci5zYXZlZFNlY3Rpb24oYCR7Y29sfXNhdmVkU2VjdGlvbmAsIGAke2NvbH1zZWN0aW9uV3JhcHBlcmApO1xuICAgIGVsZW1lbnQuYWRkVGFzayhgJHtjb2x9YCwgYCR7Y29sfXNlY3Rpb25XcmFwcGVyYCk7XG4gICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2NvbH0qYCk7XG4gICAgYWRkVGFzay5pZCA9IGAke2NvbH0qJHtsaW5lQ291bnRlcigpfWA7XG4gICAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PlxuICAgICAgY29tcG9zZS5uZXdUYXNrKGAke2NvbH1gLCBgJHtjb2x9c2VjdGlvbldyYXBwZXJgKSk7XG4gICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHNlY3Rpb24ke2NvbH1gLCAnTmV3IFNlY3Rpb24nKTtcbiAgfTtcblxuICBjb25zdCBzYXZlZFRhc2sgPSAoY29sLCBhcHBlbmRUbywgdGl0bGUsIHNjaGVkdWxlLCBwcmlvcml0eSkgPT4ge1xuICAgIGxldCBpbWcgPSBMb3c7XG4gICAgc3dpdGNoIChwcmlvcml0eSkge1xuICAgICAgY2FzZSAnbG93JzpcbiAgICAgICAgaW1nID0gTG93O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgIGltZyA9IE1lZGl1bTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdoaWdoJzpcbiAgICAgICAgaW1nID0gSGlnaDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpbWc7XG4gICAgfVxuICAgIHdyYXBwZXIuc2F2ZWQoYCR7Y29sfXNhdmVkV3JhcHBlcmAsIGFwcGVuZFRvKTtcbiAgICB3cmFwcGVyLmJ1dHRvbihgJHtjb2x9YnV0dG9uV3JhcHBlcmAsIGAke2NvbH1zYXZlZFdyYXBwZXJgKTtcbiAgICBlbGVtZW50LnByaW9yaXR5KGAke2NvbH1wcmlvcml0eWAsIGAke2NvbH1idXR0b25XcmFwcGVyYCwgaW1nKTtcbiAgICB3cmFwcGVyLmRlc2NyaXB0aW9uKGAke2NvbH1kZXNjcmlwdGlvbldyYXBwZXJgLCBgJHtjb2x9c2F2ZWRXcmFwcGVyYCk7XG4gICAgd3JhcHBlci5zYXZlZFRpdGxlKGAke2NvbH1zYXZlZFRpdGxlYCwgYCR7Y29sfWRlc2NyaXB0aW9uV3JhcHBlcmApO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgZWxlbWVudC5sYWJlbChcbiAgICAgICAgYCR7Y29sfXNhdmVkVGl0bGVMYWJlbGAsXG4gICAgICAgIGAke2NvbH1zYXZlZFRpdGxlYCxcbiAgICAgICAgYCR7Y29sfXNhdmVkVGl0bGVJbnB1dGAsXG4gICAgICAgICdUaXRsZTonLFxuICAgICk7XG4gICAgZWxlbWVudC5zYXZlZElucHV0KGAke2NvbH1zYXZlZFRpdGxlSW5wdXRgLCBgJHtjb2x9c2F2ZWRUaXRsZWAsIHRpdGxlKTtcbiAgICB3cmFwcGVyLnNhdmVkU2hlZHVsZShgJHtjb2x9c2F2ZWRTaGVkdWxlYCwgYCR7Y29sfWRlc2NyaXB0aW9uV3JhcHBlcmApO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgZWxlbWVudC5sYWJlbChcbiAgICAgICAgYCR7Y29sfXNhdmVkU2NoZWR1bGVMYWJlbGAsXG4gICAgICAgIGAke2NvbH1zYXZlZFNoZWR1bGVgLFxuICAgICAgICBgJHtjb2x9c2F2ZWRTY2hlZHVsZUlucHV0YCxcbiAgICAgICAgJ1NjaGVkdWxlOicsXG4gICAgKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgIGVsZW1lbnQuc2F2ZWRJbnB1dChcbiAgICAgICAgYCR7Y29sfXNhdmVkU2NoZWR1bGVJbnB1dGAsXG4gICAgICAgIGAke2NvbH1zYXZlZFNoZWR1bGVgLFxuICAgICAgICBzY2hlZHVsZSxcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IG5ld1Rhc2sgPSAoY29sLCBhcHBlbmRUbykgPT4ge1xuICAgIHdyYXBwZXIubmV3VGFzayhgJHtjb2x9KiR7bGluZUNvdW50ZXIoY29sKX13YCwgYXBwZW5kVG8pO1xuICAgIGNvbnN0IHN1YmNvbCA9IGAke2NvbH0qJHtsaW5lQ291bnRlcihjb2wpfWZ3YDtcbiAgICB3cmFwcGVyLm5ld0Zvcm0oYCR7c3ViY29sfWAsIGAke2NvbH0qJHtsaW5lQ291bnRlcihjb2wpfXdgKTtcbiAgICBjb25zdCBmb3JtY29sID0gYCR7Y29sfSoke2xpbmVDb3VudGVyKGNvbCl9ZmA7XG4gICAgZWxlbWVudC5uZXdGb3JtKGAke2Zvcm1jb2x9YCwgYCR7c3ViY29sfWApO1xuXG4gICAgZWxlbWVudC5uZXdMYWJlbFRpdGxlKCcnLCBmb3JtY29sLCAnJywgJ05ldyBUYXNrJyk7XG4gICAgZWxlbWVudC5pbnB1dCgnJywgZm9ybWNvbCwgJ3RleHQnLCAnZm9ybUlucHV0Jyk7XG4gICAgZWxlbWVudC5sYWJlbCgnJywgZm9ybWNvbCwgJycsICdTY2hlZHVsZScpO1xuICAgIGVsZW1lbnQuaW5wdXQoJycsIGZvcm1jb2wsICdkYXRlJywgJ2Zvcm1JbnB1dCcpO1xuICAgIGVsZW1lbnQubGFiZWwoJycsIGZvcm1jb2wsICcnLCAnUHJpb3JpdHknLCAncHJpb3JpdHlzJyk7XG4gICAgZWxlbWVudC5sYWJlbChgJHtjb2x9IGxvd2AsIGZvcm1jb2wsICcnLCAnICAgICAgICAgICAgICBMb3cnLCAncHJpb3JpdHknKTtcbiAgICBlbGVtZW50LmlucHV0KGAke2NvbH0gbG93YCwgZm9ybWNvbCwgJ3JhZGlvJyk7XG4gICAgZWxlbWVudC5sYWJlbChgJHtjb2x9IG1lZGl1bWAsIGZvcm1jb2wsICcnLCAnTWVkaXVtJywgJ3ByaW9yaXR5Jyk7XG4gICAgZWxlbWVudC5pbnB1dChgJHtjb2x9IG1lZGl1bWAsIGZvcm1jb2wsICdyYWRpbycpO1xuICAgIGVsZW1lbnQubGFiZWwoYCR7Y29sfSBoaWdoYCwgZm9ybWNvbCwgJycsICdIaWdoJywgJ3ByaW9yaXR5Jyk7XG4gICAgZWxlbWVudC5pbnB1dChgJHtjb2x9IGhpZ2hgLCBmb3JtY29sLCAncmFkaW8nKTtcbiAgICBlbGVtZW50LmxhYmVsKCcnLCBmb3JtY29sLCAnJywgJ05vdGVzJywgJ2Zvcm1MYWJlbCcpO1xuICAgIGVsZW1lbnQudGV4dEFyZWEoJycsIGZvcm1jb2wpO1xuXG4gICAgZWxlbWVudC5mb3JtU3VibWl0KGZvcm1jb2wpO1xuICB9O1xuICByZXR1cm4ge25ld1NlY3Rpb24sIHNhdmVkVGFzaywgbmV3VGFza307XG59KSgpO1xuXG5leHBvcnQge3dyYXBwZXIsIGVsZW1lbnQsIGNvbXBvc2V9O1xuIiwiaW1wb3J0ICcuL2RvbSc7XG5cbi8vIEZhY3RvcnkgRnVuY3Rpb25cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbi8vIEZvcm0gRHJpdmVyLCB0YWtlcyBpbmZvIGZyb20gdGhlIGZvcm0gYW5kIHJldHVybnMgYW4gYXJyYXkgd2l0aCB0aGUgcHJvcGVydHkgdmFsdWVzXG5jb25zdCBmb3JtRHJpdmVyID0gKGZvcm0pID0+IHtcbiAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybUFycmF5ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3JtQXJyYXkucHVzaChmb3JtW2ldKTtcbiAgICB9XG4gICAgY29uc3QgY2hlY2tlZFByaW9yaXR5ID0gZm9ybUFycmF5LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jaGVja2VkKTtcbiAgICBpZiAoY2hlY2tlZFByaW9yaXR5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdsb3cnO1xuICAgIH1cbiAgICBjb25zdCBwcmlvcml0eUlkID0gY2hlY2tlZFByaW9yaXR5WzBdLmlkO1xuICAgIGNvbnN0IHNsaWNlQXQgPSBwcmlvcml0eUlkLmluZGV4T2YoJyAnKSArIDE7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBwcmlvcml0eUlkLnNsaWNlKHNsaWNlQXQpO1xuICAgIHJldHVybiBwcmlvcml0eTtcbiAgfTtcblxuICBjb25zdCBnZXRJbmRleCA9IChmb3JtKSA9PiB7XG4gICAgY29uc3QgaWQgPSBmb3JtLmlkO1xuICAgIGNvbnN0IHNsaWNlRW5kID0gaWQuaW5kZXhPZignZicpO1xuXG4gICAgcmV0dXJuIGlkLnNsaWNlKDAsIHNsaWNlRW5kKTtcbiAgfTtcblxuICByZXR1cm4gW1xuICAgIGdldEluZGV4KGZvcm0pLFxuICAgIGZvcm1bMF0udmFsdWUsXG4gICAgZm9ybVsxXS52YWx1ZSxcbiAgICBnZXRQcmlvcml0eShmb3JtKSxcbiAgICBmb3JtWzVdLnZhbHVlLFxuICBdO1xufTtcblxuY29uc3QgdGFza1Byb3RvID0ge1xuICBzYXZlOiBmdW5jdGlvbigpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt0aGlzLmluZGV4fXRpdGxlYCwgYCR7dGhpcy50aXRsZX1gKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt0aGlzLmluZGV4fXNjaGVkdWxlYCwgYCR7dGhpcy5zY2hlZHVsZX1gKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt0aGlzLmluZGV4fXByaW9yaXR5YCwgYCR7dGhpcy5wcmlvcml0eX1gKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt0aGlzLmluZGV4fW5vdGVzYCwgYCR7dGhpcy5ub3Rlc31gKTtcbiAgfSxcbiAgZ2V0VGFzazogZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc2VhcmNoID0gKGtleSkgPT4ge1xuICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKC9bYS16QS1aXS8pO1xuICAgICAgY29uc3QgbWF0Y2ggPSByZWdleC5leGVjKGtleSk7XG4gICAgICBjb25zdCByZXN1bHQgPSBrZXkuc2xpY2UoMCwgbWF0Y2guaW5kZXgpO1xuICAgICAgcmV0dXJuIHRoaXMuaW5kZXggPT09IHJlc3VsdDtcbiAgICB9O1xuICAgIGNvbnN0IHNlYXJjaFJlc3VsdCA9IE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSlcbiAgICAgICAgLmZpbHRlcigoa2V5KSA9PiBzZWFyY2goa2V5KSlcbiAgICAgICAgLm1hcCgoa2V5KSA9PiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAgICB7fSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiBzZWFyY2hSZXN1bHRbMF0sXG4gICAgICAgICAgc2NoZWR1bGU6IHNlYXJjaFJlc3VsdFsyXSxcbiAgICAgICAgICBwcmlvcml0eTogc2VhcmNoUmVzdWx0WzNdLFxuICAgICAgICAgIG5vdGVzOiBzZWFyY2hSZXN1bHRbMV0sXG4gICAgICAgIH0sXG4gICAgKTtcbiAgfSxcbiAgcmVtb3ZlVGFzazogZnVuY3Rpb24oKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYCR7dGhpcy5pbmRleH10aXRsZWAsIGAke3RoaXMudGl0bGV9YCk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYCR7dGhpcy5pbmRleH1zY2hlZHVsZWAsIGAke3RoaXMuc2NoZWR1bGV9YCk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYCR7dGhpcy5pbmRleH1wcmlvcml0eWAsIGAke3RoaXMucHJpb3JpdHl9YCk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYCR7dGhpcy5pbmRleH1ub3Rlc2AsIGAke3RoaXMubm90ZXN9YCk7XG4gIH0sXG59O1xuXG5jb25zdCB0YXNrRmFjdG9yeSA9ICh2YWx1ZXMpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZSh0YXNrUHJvdG8pLCB7XG4gICAgaW5kZXg6IHZhbHVlc1swXSxcbiAgICB0aXRsZTogdmFsdWVzWzFdLFxuICAgIHNjaGVkdWxlOiB2YWx1ZXNbMl0sXG4gICAgcHJpb3JpdHk6IHZhbHVlc1szXSxcbiAgICBub3RlczogdmFsdWVzWzRdLFxuICB9KTtcbn07XG5cbmV4cG9ydCB7Zm9ybURyaXZlciwgdGFza0ZhY3Rvcnl9O1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2RvLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLyogZXNsaW50LWRpc2FibGUgcmVxdWlyZS1qc2RvYyAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0ICcuL3RvZG8uY3NzJztcbmltcG9ydCBMb2dvIGZyb20gJy4vaW1hZ2VzL2xvZ28ucG5nJztcbmltcG9ydCAnLi9kb20uanMnO1xuaW1wb3J0ICcuL2ZhY3RvcnknO1xuaW1wb3J0IHtzZWFyY2hLZXlzLCBmaW5kVGFzaywgbmV3U2VjdGlvbiwgZ2V0U2VjdGlvblRpdGxlLCBlZGl0VGFza30gZnJvbSAnLi9jb250cm9sbGVyJztcbmltcG9ydCB7Y29tcG9zZX0gZnJvbSAnLi9kb20nO1xuXG5jb25zdCBsb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ28nKTtcbmxvZ28uc3JjID0gTG9nbztcblxuLy8gT24gbG9hZCwgY3JlYXRlIG5lY2Vzc2FyeSBUb2RvcyBiYXNlZCBvbiBPYmplY3Qua2V5cyBpbiBsb2NhbFN0b3JhZ2Vcbi8vIFNlY3Rpb25zXG5cbmNvbnN0IGRhdGEgPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLnNvcnQoKTtcbmRhdGEuZmlsdGVyKChpdGVtKSA9PiBpdGVtWzBdID09PSAncycpXG4gICAgLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgbGFzdEluZGV4ID0gaXRlbS5sZW5ndGgtMTtcbiAgICAgIGNvbnN0IGNvbCA9IGl0ZW1bbGFzdEluZGV4XTtcbiAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpdGVtW2xhc3RJbmRleF19c2VjdGlvbldyYXBwZXJgKTtcbiAgICAgIGlmICghc2VjdGlvbikge1xuICAgICAgICBjb21wb3NlLm5ld1NlY3Rpb24oYCR7aXRlbVtsYXN0SW5kZXhdfWAsICdhbGxTZWN0aW9uc1dyYXBwZXInLCAnU2VjdGlvbiBUaXRsZScpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29sKTtcbiAgICAgIHRpdGxlLnZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oaXRlbSk7XG4gICAgfSk7XG4vLyBUYXNrc1xuaWYgKCBzZWFyY2hLZXlzLmxlbmd0aD49MCkge1xuICBzZWFyY2hLZXlzKCkubWFwKCAoaXRlbSkgPT57XG4gICAgY29uc3QgdGFzayA9IGZpbmRUYXNrKGl0ZW0pO1xuICAgIGNvbXBvc2Uuc2F2ZWRUYXNrKHRhc2suaW5kZXgsXG4gICAgICAgIGAke3Rhc2suaW5kZXhbMF19c2F2ZWRTZWN0aW9uYCxcbiAgICAgICAgdGFzay50aXRsZSxcbiAgICAgICAgdGFzay5zY2hlZHVsZSxcbiAgICAgICAgdGFzay5wcmlvcml0eSxcbiAgICAgICAgdGFzay5ub3Rlcyk7XG4gIH0pO1xufVxubmV3U2VjdGlvbigpO1xuZWRpdFRhc2soKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=