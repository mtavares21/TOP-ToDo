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
___CSS_LOADER_EXPORT___.push([module.id, "/*    header    *//*    header    *//*    header    *//*    header    */\n\n.headerWrapper{\nwidth: 100%;\nheight: fit-content;\ndisplay: flex;\njustify-content: center;\n}\n.logoWrapper{\nwidth:fit-content\n}\n#logo{\nwidth: 250px;\nheight:70px;\nobject-fit: contain;\n}\n/*    main   *//*    main   *//*    main   *//*    main   *//*    main   */\n.mainWrapper{\ndisplay:flex;\njustify-content: start;\nalign-items: start;\n}\n/*   Sidebar  *//*   Sidebar  *//*   Sidebar  */\n.sidenav {\n  min-width: 250px;\n  height: 1000px;\n  margin-right: 100px;\n  margin-left: 0px;\n  background: #eee;\n  border-radius: 5px;\n  position: relative;\n}\n\n.sidenav a {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-family: 'Roboto Slab', serif;\n  font-size: 15px;\n  color: #0a0a0a;\n  display: block;\n}\n\n.sidenav a:hover {\n  font-size: 15.2px;\n}\n\n#projectList{\nmargin: 0px;\nfont-family: 'Lato', sans-serif;\nfont-size: 12px;\ncolor: rgb(8, 8, 8);\n}\n\n.projectItem{\nlist-style-type:none;\nmargin-top: 0px;\nwidth:100px;\n}\n.projectItem::before {\n  content: \"\\2022\";\n  color: #f3cf2c;\n  font-weight: bold;\n  display: inline-block; \n  width: 1em;\n  margin-left: -1em;\n}\n\n/*   Sections */\n#allSectionsWrapper{\ndisplay:flex;\nwidth: fit-content;\njustify-content: start;\nalign-content: start;\nalign-self: start;\nalign-items: start;\n}\n.sectionWrapper{\nwidth: 300px;\nmin-width: 300px;\nmargin: 20px;\nfont-family: 'Roboto Slab', serif;\ndisplay: flex;\njustify-items: center;\nflex-wrap: wrap;\nalign-content: flex-start;\nalign-items: start;\n}\n.section{\nwidth: 300px;\n}\n.sectionTitle{\nfont-family: 'Roboto Slab', serif;\nfont-size: 30px;\nfont-weight: 500;\nmargin-top: 0px;\nmargin-bottom: 20px;\npadding: 0px;\nwidth: 200px;\nborder-style: none;\n}\n/*  Saved Task  *//*  Saved Task  *//*  Saved Task  */\n.savedWrapper{\ndisplay: flex;\nflex-wrap: wrap;\nborder-style: solid;\nborder-width: 1px;\nborder-radius: 5px;\nborder-color:#b8b8bd;\nmargin-bottom: 20px;\npadding: 10px;\njustify-content: space-around;\njustify-self: center;\njustify-items: center;\nalign-items: center;\n}\n.buttonsWrapper{\ndisplay:flex;\nflex-wrap: wrap;\nwidth: 30px;\nmargin: 0px;\n}\n.btnCheck{\nappearance: none;\nbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\nbackground-size: contain;\nbackground-repeat: no-repeat;\nwidth: 20px;\nheight: 20px;\nborder-style: none;\n}\n.savedTitleWrapper{\ndisplay: flex;\nflex-wrap: nowrap;\n}\n.savedScheduleWrapper{\ndisplay: flex;\nflex-wrap: nowrap;\n}\n.savedTitle{\nwidth: 50px;\n}\n.savedSchedule{\nwidth:30px;\n}\n.savedInput{\nwidth: 100px;\n}\n.descriptionWrapper{\nwidth:200px;\n}\n.descriptionWrapper input{\nappearance: none;\nborder-style: none;\nfont-family: 'Lato', sans-serif;\nfont-size: 15px;\nmargin-left:10px\n}\n\n/*  NewTask  *//*  NewTask  *//*  NewTask  */\n.newWrapper{\ndisplay: flex;\nborder-style: solid;\nborder-width: 1px;\nborder-radius: 5px;\nborder-color: #b8b8bd;\npadding: 20px;\nheight: fit-content;\nmargin-bottom: 20px;\n}\n.formWrapper{\ndisplay: flex;\nflex-wrap: wrap;\nwidth: 100%;\njustify-content: start;\n}\n.newTitle{\nfont-size: 25px;\n}\n.formInput{\nwidth: 100%;\n}\n.formLabel{\nmargin-right: 100%;\n}\n.prioritys{\nmargin-right:100% ;\n}\n.priority{\nfont-family: 'Lato', sans-serif;\nfont-size: 12px;\nwidth: 200px;\n}\n.formNotes{\nwidth:100%;\noverflow:scroll;\nmargin-top: 5px;\nalign-content: start;\n}\n\n/* dropdown for Projects*//* dropdown for Projects*/\n.dropbtn {\n  background-color: rgb(202,225,109);\n  border-radius: 5px;\n  margin-top: 15px;\n  color: black;\n  padding: 10px;\n  font-family: 'Lato', sans-serif;\n  font-size: 15px;\n  border: none;\n}\n\n/*.dropdown {\n  position: relative;\n  display: inline-block;\n  font-family: 'Lato', sans-serif;\n  font-size: 15px;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: rgb(255, 255, 255);\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n}\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-content a:hover {background-color: #ddd;}\n\n.dropdown:hover .dropdown-content {display: block;}\n\n.dropdown:hover .dropbtn {background-color: #3e8e41;}\n*/\n/* add*//* add*//* add*/\n\n.addTask{\nappearance: none;\nfont-family: 'Lato', sans-serif;\nfont-size: 20px;\nfont-weight: 200;\nborder-width: 1px;\nborder-radius: 2px;\nborder-color:#b8b8bd;\nborder-style: solid;\ncolor:#b8b8bd;\nbackground-color: white;\nheight: 30px;\npadding-top: 0px;\npadding-right: 8px;\npadding-left: 8px;\npadding-bottom: 0px;\nmargin-top: 0px;\nmargin-right: 100%;\ntext-align: center;\nvertical-align: center;\n\n}\n\n.addSection{\nappearance: none;\nfont-family: 'Lato', sans-serif;\nfont-size: 20px;\nfont-weight: 200;\nborder-width: 1px;\nborder-radius: 2px;\nborder-color:#b8b8bd;\nborder-style: solid;\ncolor:#b8b8bd;\nbackground-color: white;\nheight: 30px;\npadding-top: 0px;\npadding-right: 8px;\npadding-left: 8px;\npadding-bottom: 0px;\nmargin-top: 58px;\nmargin-right: 100%;\ntext-align: center;\nvertical-align: center;\n\n\n}", "",{"version":3,"sources":["webpack://./src/todo.css"],"names":[],"mappings":"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","sourcesContent":["/*    header    *//*    header    *//*    header    *//*    header    */\n\n.headerWrapper{\nwidth: 100%;\nheight: fit-content;\ndisplay: flex;\njustify-content: center;\n}\n.logoWrapper{\nwidth:fit-content\n}\n#logo{\nwidth: 250px;\nheight:70px;\nobject-fit: contain;\n}\n/*    main   *//*    main   *//*    main   *//*    main   *//*    main   */\n.mainWrapper{\ndisplay:flex;\njustify-content: start;\nalign-items: start;\n}\n/*   Sidebar  *//*   Sidebar  *//*   Sidebar  */\n.sidenav {\n  min-width: 250px;\n  height: 1000px;\n  margin-right: 100px;\n  margin-left: 0px;\n  background: #eee;\n  border-radius: 5px;\n  position: relative;\n}\n\n.sidenav a {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-family: 'Roboto Slab', serif;\n  font-size: 15px;\n  color: #0a0a0a;\n  display: block;\n}\n\n.sidenav a:hover {\n  font-size: 15.2px;\n}\n\n#projectList{\nmargin: 0px;\nfont-family: 'Lato', sans-serif;\nfont-size: 12px;\ncolor: rgb(8, 8, 8);\n}\n\n.projectItem{\nlist-style-type:none;\nmargin-top: 0px;\nwidth:100px;\n}\n.projectItem::before {\n  content: \"\\2022\";\n  color: #f3cf2c;\n  font-weight: bold;\n  display: inline-block; \n  width: 1em;\n  margin-left: -1em;\n}\n\n/*   Sections */\n#allSectionsWrapper{\ndisplay:flex;\nwidth: fit-content;\njustify-content: start;\nalign-content: start;\nalign-self: start;\nalign-items: start;\n}\n.sectionWrapper{\nwidth: 300px;\nmin-width: 300px;\nmargin: 20px;\nfont-family: 'Roboto Slab', serif;\ndisplay: flex;\njustify-items: center;\nflex-wrap: wrap;\nalign-content: flex-start;\nalign-items: start;\n}\n.section{\nwidth: 300px;\n}\n.sectionTitle{\nfont-family: 'Roboto Slab', serif;\nfont-size: 30px;\nfont-weight: 500;\nmargin-top: 0px;\nmargin-bottom: 20px;\npadding: 0px;\nwidth: 200px;\nborder-style: none;\n}\n/*  Saved Task  *//*  Saved Task  *//*  Saved Task  */\n.savedWrapper{\ndisplay: flex;\nflex-wrap: wrap;\nborder-style: solid;\nborder-width: 1px;\nborder-radius: 5px;\nborder-color:#b8b8bd;\nmargin-bottom: 20px;\npadding: 10px;\njustify-content: space-around;\njustify-self: center;\njustify-items: center;\nalign-items: center;\n}\n.buttonsWrapper{\ndisplay:flex;\nflex-wrap: wrap;\nwidth: 30px;\nmargin: 0px;\n}\n.btnCheck{\nappearance: none;\nbackground-image: url(\"../src/images/low.png\");\nbackground-size: contain;\nbackground-repeat: no-repeat;\nwidth: 20px;\nheight: 20px;\nborder-style: none;\n}\n.savedTitleWrapper{\ndisplay: flex;\nflex-wrap: nowrap;\n}\n.savedScheduleWrapper{\ndisplay: flex;\nflex-wrap: nowrap;\n}\n.savedTitle{\nwidth: 50px;\n}\n.savedSchedule{\nwidth:30px;\n}\n.savedInput{\nwidth: 100px;\n}\n.descriptionWrapper{\nwidth:200px;\n}\n.descriptionWrapper input{\nappearance: none;\nborder-style: none;\nfont-family: 'Lato', sans-serif;\nfont-size: 15px;\nmargin-left:10px\n}\n\n/*  NewTask  *//*  NewTask  *//*  NewTask  */\n.newWrapper{\ndisplay: flex;\nborder-style: solid;\nborder-width: 1px;\nborder-radius: 5px;\nborder-color: #b8b8bd;\npadding: 20px;\nheight: fit-content;\nmargin-bottom: 20px;\n}\n.formWrapper{\ndisplay: flex;\nflex-wrap: wrap;\nwidth: 100%;\njustify-content: start;\n}\n.newTitle{\nfont-size: 25px;\n}\n.formInput{\nwidth: 100%;\n}\n.formLabel{\nmargin-right: 100%;\n}\n.prioritys{\nmargin-right:100% ;\n}\n.priority{\nfont-family: 'Lato', sans-serif;\nfont-size: 12px;\nwidth: 200px;\n}\n.formNotes{\nwidth:100%;\noverflow:scroll;\nmargin-top: 5px;\nalign-content: start;\n}\n\n/* dropdown for Projects*//* dropdown for Projects*/\n.dropbtn {\n  background-color: rgb(202,225,109);\n  border-radius: 5px;\n  margin-top: 15px;\n  color: black;\n  padding: 10px;\n  font-family: 'Lato', sans-serif;\n  font-size: 15px;\n  border: none;\n}\n\n/*.dropdown {\n  position: relative;\n  display: inline-block;\n  font-family: 'Lato', sans-serif;\n  font-size: 15px;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: rgb(255, 255, 255);\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n}\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-content a:hover {background-color: #ddd;}\n\n.dropdown:hover .dropdown-content {display: block;}\n\n.dropdown:hover .dropbtn {background-color: #3e8e41;}\n*/\n/* add*//* add*//* add*/\n\n.addTask{\nappearance: none;\nfont-family: 'Lato', sans-serif;\nfont-size: 20px;\nfont-weight: 200;\nborder-width: 1px;\nborder-radius: 2px;\nborder-color:#b8b8bd;\nborder-style: solid;\ncolor:#b8b8bd;\nbackground-color: white;\nheight: 30px;\npadding-top: 0px;\npadding-right: 8px;\npadding-left: 8px;\npadding-bottom: 0px;\nmargin-top: 0px;\nmargin-right: 100%;\ntext-align: center;\nvertical-align: center;\n\n}\n\n.addSection{\nappearance: none;\nfont-family: 'Lato', sans-serif;\nfont-size: 20px;\nfont-weight: 200;\nborder-width: 1px;\nborder-radius: 2px;\nborder-color:#b8b8bd;\nborder-style: solid;\ncolor:#b8b8bd;\nbackground-color: white;\nheight: 30px;\npadding-top: 0px;\npadding-right: 8px;\npadding-left: 8px;\npadding-bottom: 0px;\nmargin-top: 58px;\nmargin-right: 100%;\ntext-align: center;\nvertical-align: center;\n\n\n}"],"sourceRoot":""}]);
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
/* harmony export */   "counterLines": () => (/* binding */ counterLines),
/* harmony export */   "searchKeys": () => (/* binding */ searchKeys),
/* harmony export */   "findTask": () => (/* binding */ findTask)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");


// On load, create necessary Todos based on Object.keys in localStorage,

// find unique indexes in database
const searchKeys = () => {
  const data = [...Object.keys(localStorage)];

  const indexArray = [];
  data.map((key) => {
    const regex = new RegExp(/[a-zA-Z]/);
    const match = regex.exec(key);
    indexArray.push(key.slice(0, match.index));
  });
  const unique = [...new Set(indexArray)];

  return unique;
};
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

// let searchArray = searchKeys()
// eslint-disable-next-line max-len
// searchKeys().map( index => compose.savedTask(index[0],`${col}savedSection`, findTask(index).title, findTask(ndex).schedule, findTask(index).priority ))

// Click a task and open editor

// Create necessary Logic for queue

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
    const parent = document.getElementById(appendTo);
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
    button.addEventListener('click', () => (0,_controller__WEBPACK_IMPORTED_MODULE_1__.counterLines)(button));
    button.addEventListener('click', () =>
      compose.newTask(`${button.id}form`, `${col}savedSection`),
    );
    const parent = document.getElementById(appendTo);
    parent.appendChild(button);
  };

  const addSection = (col, appendTo) => {
    const button = document.createElement('input');
    button.id = `${parseInt(col)}addSection`;
    button.value = '+';
    button.type = 'button';
    button.classList = 'addSection';
    button.addEventListener('click', () => {
      const section = document.getElementById(`${parseInt(col)}sectionWrapper`);
      section.remove();
      compose.newSection(col, `allSectionsWrapper`, 'New Section');
      addTask(col, `${parseInt(col)}sectionWrapper`);
      compose.newSection(`${parseInt(col) + 1}`, 'allSectionsWrapper', '');
      addSection(`${parseInt(col) + 1}`, `${parseInt(col) + 1}sectionWrapper`);
    });
    const parent = document.getElementById(appendTo);
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
    if (title != '') {
      element.sectionTitle(`${col}sectionTitle`, `${col}sectionWrapper`, title);
      wrapper.savedSection(`${col}savedSection`, `${col}sectionWrapper`);
    }
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
        'Title',
    );
    element.savedInput(`${col}savedTitleInput`, `${col}savedTitle`, title);
    wrapper.savedShedule(`${col}savedShedule`, `${col}descriptionWrapper`);
    // eslint-disable-next-line max-len
    element.label(
        `${col}savedScheduleLabel`,
        `${col}savedShedule`,
        `${col}savedScheduleInput`,
        'Schedule',
    );
    // eslint-disable-next-line max-len
    element.savedInput(
        `${col}savedScheduleInput`,
        `${col}savedShedule`,
        schedule,
    );
  };

  const newTask = (col, appendTo) => {
    wrapper.newTask(col, appendTo);
    const subcol = parseInt(col) + 1;
    wrapper.newForm(`${subcol}`, col);
    const formcol = `${col}f`;
    element.newForm(`${formcol}`, subcol);

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
    shedule: values[2],
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







const indexes = (0,_controller__WEBPACK_IMPORTED_MODULE_4__.searchKeys)();
console.log(indexes);


const logo = document.getElementById('logo');

logo.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_1__;

_dom_js__WEBPACK_IMPORTED_MODULE_2__.compose.newSection(0, 'allSectionsWrapper', 'Section 0', '');
_dom_js__WEBPACK_IMPORTED_MODULE_2__.compose.newSection(1, 'allSectionsWrapper', '');
_dom_js__WEBPACK_IMPORTED_MODULE_2__.element.addSection(1, '1sectionWrapper', '');
_dom_js__WEBPACK_IMPORTED_MODULE_2__.element.addTask(0, '0sectionWrapper');
_dom_js__WEBPACK_IMPORTED_MODULE_2__.compose.savedTask(1, '0savedSection', 'newTask', '24/3', 'high');
/*searchKeys().map((index) =>
  compose.savedTask(
      index[0],
      `${index[0]}savedSection`,
      findTask(index).title,
      findTask(index).schedule,
      findTask(index).priority,
  ),
);
*/


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtdG9kby8uL3NyYy90b2RvLmNzcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9zcmMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9zcmMvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL3NyYy90b2RvLmNzcz8zZjgzIiwid2VicGFjazovL3RvcC10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC10b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvcC10b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0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QTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDREQUE0RCxJQUFJOztBQUVoRTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsZ0NBQWdDLEtBQUssT0FBTyxtQkFBbUI7QUFDL0Q7QUFDQTs7QUFFNEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRU07QUFDUjtBQUNKO0FBQ0c7QUFDTjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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QUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNvQjtBQUNpQjtBQUNuQjtBQUNDO0FBQytCO0FBQ1g7O0FBRXZDLGdCQUFnQix1REFBVTtBQUMxQjs7O0FBR0E7O0FBRUEsV0FBVyw2Q0FBSTs7QUFFZix1REFBa0I7QUFDbEIsdURBQWtCO0FBQ2xCLHVEQUFrQjtBQUNsQixvREFBZTtBQUNmLHNEQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVM7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4vaW1hZ2VzL2xvdy5wbmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiAgICBoZWFkZXIgICAgKi8vKiAgICBoZWFkZXIgICAgKi8vKiAgICBoZWFkZXIgICAgKi8vKiAgICBoZWFkZXIgICAgKi9cXG5cXG4uaGVhZGVyV3JhcHBlcntcXG53aWR0aDogMTAwJTtcXG5oZWlnaHQ6IGZpdC1jb250ZW50O1xcbmRpc3BsYXk6IGZsZXg7XFxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5sb2dvV3JhcHBlcntcXG53aWR0aDpmaXQtY29udGVudFxcbn1cXG4jbG9nb3tcXG53aWR0aDogMjUwcHg7XFxuaGVpZ2h0OjcwcHg7XFxub2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuLyogICAgbWFpbiAgICovLyogICAgbWFpbiAgICovLyogICAgbWFpbiAgICovLyogICAgbWFpbiAgICovLyogICAgbWFpbiAgICovXFxuLm1haW5XcmFwcGVye1xcbmRpc3BsYXk6ZmxleDtcXG5qdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbmFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuLyogICBTaWRlYmFyICAqLy8qICAgU2lkZWJhciAgKi8vKiAgIFNpZGViYXIgICovXFxuLnNpZGVuYXYge1xcbiAgbWluLXdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogMTAwMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2lkZW5hdiBhIHtcXG4gIHBhZGRpbmc6IDZweCA4cHggNnB4IDE2cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBjb2xvcjogIzBhMGEwYTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uc2lkZW5hdiBhOmhvdmVyIHtcXG4gIGZvbnQtc2l6ZTogMTUuMnB4O1xcbn1cXG5cXG4jcHJvamVjdExpc3R7XFxubWFyZ2luOiAwcHg7XFxuZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG5mb250LXNpemU6IDEycHg7XFxuY29sb3I6IHJnYig4LCA4LCA4KTtcXG59XFxuXFxuLnByb2plY3RJdGVte1xcbmxpc3Qtc3R5bGUtdHlwZTpub25lO1xcbm1hcmdpbi10b3A6IDBweDtcXG53aWR0aDoxMDBweDtcXG59XFxuLnByb2plY3RJdGVtOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwyMDIyXFxcIjtcXG4gIGNvbG9yOiAjZjNjZjJjO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxcbiAgd2lkdGg6IDFlbTtcXG4gIG1hcmdpbi1sZWZ0OiAtMWVtO1xcbn1cXG5cXG4vKiAgIFNlY3Rpb25zICovXFxuI2FsbFNlY3Rpb25zV3JhcHBlcntcXG5kaXNwbGF5OmZsZXg7XFxud2lkdGg6IGZpdC1jb250ZW50O1xcbmp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuYWxpZ24tY29udGVudDogc3RhcnQ7XFxuYWxpZ24tc2VsZjogc3RhcnQ7XFxuYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG4uc2VjdGlvbldyYXBwZXJ7XFxud2lkdGg6IDMwMHB4O1xcbm1pbi13aWR0aDogMzAwcHg7XFxubWFyZ2luOiAyMHB4O1xcbmZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcXG5kaXNwbGF5OiBmbGV4O1xcbmp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5mbGV4LXdyYXA6IHdyYXA7XFxuYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG5hbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcbi5zZWN0aW9ue1xcbndpZHRoOiAzMDBweDtcXG59XFxuLnNlY3Rpb25UaXRsZXtcXG5mb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XFxuZm9udC1zaXplOiAzMHB4O1xcbmZvbnQtd2VpZ2h0OiA1MDA7XFxubWFyZ2luLXRvcDogMHB4O1xcbm1hcmdpbi1ib3R0b206IDIwcHg7XFxucGFkZGluZzogMHB4O1xcbndpZHRoOiAyMDBweDtcXG5ib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcbi8qICBTYXZlZCBUYXNrICAqLy8qICBTYXZlZCBUYXNrICAqLy8qICBTYXZlZCBUYXNrICAqL1xcbi5zYXZlZFdyYXBwZXJ7XFxuZGlzcGxheTogZmxleDtcXG5mbGV4LXdyYXA6IHdyYXA7XFxuYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG5ib3JkZXItd2lkdGg6IDFweDtcXG5ib3JkZXItcmFkaXVzOiA1cHg7XFxuYm9yZGVyLWNvbG9yOiNiOGI4YmQ7XFxubWFyZ2luLWJvdHRvbTogMjBweDtcXG5wYWRkaW5nOiAxMHB4O1xcbmp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbmp1c3RpZnktc2VsZjogY2VudGVyO1xcbmp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5hbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYnV0dG9uc1dyYXBwZXJ7XFxuZGlzcGxheTpmbGV4O1xcbmZsZXgtd3JhcDogd3JhcDtcXG53aWR0aDogMzBweDtcXG5tYXJnaW46IDBweDtcXG59XFxuLmJ0bkNoZWNre1xcbmFwcGVhcmFuY2U6IG5vbmU7XFxuYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG5iYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG53aWR0aDogMjBweDtcXG5oZWlnaHQ6IDIwcHg7XFxuYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG4uc2F2ZWRUaXRsZVdyYXBwZXJ7XFxuZGlzcGxheTogZmxleDtcXG5mbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuLnNhdmVkU2NoZWR1bGVXcmFwcGVye1xcbmRpc3BsYXk6IGZsZXg7XFxuZmxleC13cmFwOiBub3dyYXA7XFxufVxcbi5zYXZlZFRpdGxle1xcbndpZHRoOiA1MHB4O1xcbn1cXG4uc2F2ZWRTY2hlZHVsZXtcXG53aWR0aDozMHB4O1xcbn1cXG4uc2F2ZWRJbnB1dHtcXG53aWR0aDogMTAwcHg7XFxufVxcbi5kZXNjcmlwdGlvbldyYXBwZXJ7XFxud2lkdGg6MjAwcHg7XFxufVxcbi5kZXNjcmlwdGlvbldyYXBwZXIgaW5wdXR7XFxuYXBwZWFyYW5jZTogbm9uZTtcXG5ib3JkZXItc3R5bGU6IG5vbmU7XFxuZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG5mb250LXNpemU6IDE1cHg7XFxubWFyZ2luLWxlZnQ6MTBweFxcbn1cXG5cXG4vKiAgTmV3VGFzayAgKi8vKiAgTmV3VGFzayAgKi8vKiAgTmV3VGFzayAgKi9cXG4ubmV3V3JhcHBlcntcXG5kaXNwbGF5OiBmbGV4O1xcbmJvcmRlci1zdHlsZTogc29saWQ7XFxuYm9yZGVyLXdpZHRoOiAxcHg7XFxuYm9yZGVyLXJhZGl1czogNXB4O1xcbmJvcmRlci1jb2xvcjogI2I4YjhiZDtcXG5wYWRkaW5nOiAyMHB4O1xcbmhlaWdodDogZml0LWNvbnRlbnQ7XFxubWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmZvcm1XcmFwcGVye1xcbmRpc3BsYXk6IGZsZXg7XFxuZmxleC13cmFwOiB3cmFwO1xcbndpZHRoOiAxMDAlO1xcbmp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcbi5uZXdUaXRsZXtcXG5mb250LXNpemU6IDI1cHg7XFxufVxcbi5mb3JtSW5wdXR7XFxud2lkdGg6IDEwMCU7XFxufVxcbi5mb3JtTGFiZWx7XFxubWFyZ2luLXJpZ2h0OiAxMDAlO1xcbn1cXG4ucHJpb3JpdHlze1xcbm1hcmdpbi1yaWdodDoxMDAlIDtcXG59XFxuLnByaW9yaXR5e1xcbmZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuZm9udC1zaXplOiAxMnB4O1xcbndpZHRoOiAyMDBweDtcXG59XFxuLmZvcm1Ob3Rlc3tcXG53aWR0aDoxMDAlO1xcbm92ZXJmbG93OnNjcm9sbDtcXG5tYXJnaW4tdG9wOiA1cHg7XFxuYWxpZ24tY29udGVudDogc3RhcnQ7XFxufVxcblxcbi8qIGRyb3Bkb3duIGZvciBQcm9qZWN0cyovLyogZHJvcGRvd24gZm9yIFByb2plY3RzKi9cXG4uZHJvcGJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLDIyNSwxMDkpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKi5kcm9wZG93biB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4uZHJvcGRvd24tY29udGVudCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgbWluLXdpZHRoOiAxNjBweDtcXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9XFxuXFxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtkaXNwbGF5OiBibG9jazt9XFxuXFxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4ZTQxO31cXG4qL1xcbi8qIGFkZCovLyogYWRkKi8vKiBhZGQqL1xcblxcbi5hZGRUYXNre1xcbmFwcGVhcmFuY2U6IG5vbmU7XFxuZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG5mb250LXNpemU6IDIwcHg7XFxuZm9udC13ZWlnaHQ6IDIwMDtcXG5ib3JkZXItd2lkdGg6IDFweDtcXG5ib3JkZXItcmFkaXVzOiAycHg7XFxuYm9yZGVyLWNvbG9yOiNiOGI4YmQ7XFxuYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG5jb2xvcjojYjhiOGJkO1xcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbmhlaWdodDogMzBweDtcXG5wYWRkaW5nLXRvcDogMHB4O1xcbnBhZGRpbmctcmlnaHQ6IDhweDtcXG5wYWRkaW5nLWxlZnQ6IDhweDtcXG5wYWRkaW5nLWJvdHRvbTogMHB4O1xcbm1hcmdpbi10b3A6IDBweDtcXG5tYXJnaW4tcmlnaHQ6IDEwMCU7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbnZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcbi5hZGRTZWN0aW9ue1xcbmFwcGVhcmFuY2U6IG5vbmU7XFxuZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG5mb250LXNpemU6IDIwcHg7XFxuZm9udC13ZWlnaHQ6IDIwMDtcXG5ib3JkZXItd2lkdGg6IDFweDtcXG5ib3JkZXItcmFkaXVzOiAycHg7XFxuYm9yZGVyLWNvbG9yOiNiOGI4YmQ7XFxuYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG5jb2xvcjojYjhiOGJkO1xcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbmhlaWdodDogMzBweDtcXG5wYWRkaW5nLXRvcDogMHB4O1xcbnBhZGRpbmctcmlnaHQ6IDhweDtcXG5wYWRkaW5nLWxlZnQ6IDhweDtcXG5wYWRkaW5nLWJvdHRvbTogMHB4O1xcbm1hcmdpbi10b3A6IDU4cHg7XFxubWFyZ2luLXJpZ2h0OiAxMDAlO1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG52ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcblxcblxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdG9kby5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCOztBQUV2RTtBQUNBLFdBQVc7QUFDWCxtQkFBbUI7QUFDbkIsYUFBYTtBQUNiLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLFdBQVc7QUFDWCxtQkFBbUI7QUFDbkI7QUFDQSxjQUFjLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsY0FBYztBQUMxRTtBQUNBLFlBQVk7QUFDWixzQkFBc0I7QUFDdEIsa0JBQWtCO0FBQ2xCO0FBQ0EsZUFBZSxDQUFDLGVBQWUsQ0FBQyxlQUFlO0FBQy9DO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0FBQ0EsV0FBVztBQUNYLCtCQUErQjtBQUMvQixlQUFlO0FBQ2YsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCLGVBQWU7QUFDZixXQUFXO0FBQ1g7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBLGVBQWU7QUFDZjtBQUNBLFlBQVk7QUFDWixrQkFBa0I7QUFDbEIsc0JBQXNCO0FBQ3RCLG9CQUFvQjtBQUNwQixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxZQUFZO0FBQ1osZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixpQ0FBaUM7QUFDakMsYUFBYTtBQUNiLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2YseUJBQXlCO0FBQ3pCLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQixlQUFlO0FBQ2YsbUJBQW1CO0FBQ25CLFlBQVk7QUFDWixZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCO0FBQ0EsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCO0FBQ3JEO0FBQ0EsYUFBYTtBQUNiLGVBQWU7QUFDZixtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEIsbUJBQW1CO0FBQ25CLGFBQWE7QUFDYiw2QkFBNkI7QUFDN0Isb0JBQW9CO0FBQ3BCLHFCQUFxQjtBQUNyQixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLFlBQVk7QUFDWixlQUFlO0FBQ2YsV0FBVztBQUNYLFdBQVc7QUFDWDtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLHlEQUE4QztBQUM5Qyx3QkFBd0I7QUFDeEIsNEJBQTRCO0FBQzVCLFdBQVc7QUFDWCxZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsK0JBQStCO0FBQy9CLGVBQWU7QUFDZjtBQUNBOztBQUVBLGNBQWMsQ0FBQyxjQUFjLENBQUMsY0FBYztBQUM1QztBQUNBLGFBQWE7QUFDYixtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQixxQkFBcUI7QUFDckIsYUFBYTtBQUNiLG1CQUFtQjtBQUNuQixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLGFBQWE7QUFDYixlQUFlO0FBQ2YsV0FBVztBQUNYLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsZUFBZTtBQUNmLFlBQVk7QUFDWjtBQUNBO0FBQ0EsVUFBVTtBQUNWLGVBQWU7QUFDZixlQUFlO0FBQ2Ysb0JBQW9CO0FBQ3BCOztBQUVBLHlCQUF5QixDQUFDLHlCQUF5QjtBQUNuRDtFQUNFLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0E0QkM7QUFDRCxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU87O0FBRXZCO0FBQ0EsZ0JBQWdCO0FBQ2hCLCtCQUErQjtBQUMvQixlQUFlO0FBQ2YsZ0JBQWdCO0FBQ2hCLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEIsb0JBQW9CO0FBQ3BCLG1CQUFtQjtBQUNuQixhQUFhO0FBQ2IsdUJBQXVCO0FBQ3ZCLFlBQVk7QUFDWixnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQixtQkFBbUI7QUFDbkIsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsc0JBQXNCOztBQUV0Qjs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQiwrQkFBK0I7QUFDL0IsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLG9CQUFvQjtBQUNwQixtQkFBbUI7QUFDbkIsYUFBYTtBQUNiLHVCQUF1QjtBQUN2QixZQUFZO0FBQ1osZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLHNCQUFzQjs7O0FBR3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qICAgIGhlYWRlciAgICAqLy8qICAgIGhlYWRlciAgICAqLy8qICAgIGhlYWRlciAgICAqLy8qICAgIGhlYWRlciAgICAqL1xcblxcbi5oZWFkZXJXcmFwcGVye1xcbndpZHRoOiAxMDAlO1xcbmhlaWdodDogZml0LWNvbnRlbnQ7XFxuZGlzcGxheTogZmxleDtcXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmxvZ29XcmFwcGVye1xcbndpZHRoOmZpdC1jb250ZW50XFxufVxcbiNsb2dve1xcbndpZHRoOiAyNTBweDtcXG5oZWlnaHQ6NzBweDtcXG5vYmplY3QtZml0OiBjb250YWluO1xcbn1cXG4vKiAgICBtYWluICAgKi8vKiAgICBtYWluICAgKi8vKiAgICBtYWluICAgKi8vKiAgICBtYWluICAgKi8vKiAgICBtYWluICAgKi9cXG4ubWFpbldyYXBwZXJ7XFxuZGlzcGxheTpmbGV4O1xcbmp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG4vKiAgIFNpZGViYXIgICovLyogICBTaWRlYmFyICAqLy8qICAgU2lkZWJhciAgKi9cXG4uc2lkZW5hdiB7XFxuICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAxMDAwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDBweDtcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zaWRlbmF2IGEge1xcbiAgcGFkZGluZzogNnB4IDhweCA2cHggMTZweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGNvbG9yOiAjMGEwYTBhO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zaWRlbmF2IGE6aG92ZXIge1xcbiAgZm9udC1zaXplOiAxNS4ycHg7XFxufVxcblxcbiNwcm9qZWN0TGlzdHtcXG5tYXJnaW46IDBweDtcXG5mb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbmZvbnQtc2l6ZTogMTJweDtcXG5jb2xvcjogcmdiKDgsIDgsIDgpO1xcbn1cXG5cXG4ucHJvamVjdEl0ZW17XFxubGlzdC1zdHlsZS10eXBlOm5vbmU7XFxubWFyZ2luLXRvcDogMHB4O1xcbndpZHRoOjEwMHB4O1xcbn1cXG4ucHJvamVjdEl0ZW06OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDIwMjJcXFwiO1xcbiAgY29sb3I6ICNmM2NmMmM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXFxuICB3aWR0aDogMWVtO1xcbiAgbWFyZ2luLWxlZnQ6IC0xZW07XFxufVxcblxcbi8qICAgU2VjdGlvbnMgKi9cXG4jYWxsU2VjdGlvbnNXcmFwcGVye1xcbmRpc3BsYXk6ZmxleDtcXG53aWR0aDogZml0LWNvbnRlbnQ7XFxuanVzdGlmeS1jb250ZW50OiBzdGFydDtcXG5hbGlnbi1jb250ZW50OiBzdGFydDtcXG5hbGlnbi1zZWxmOiBzdGFydDtcXG5hbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcbi5zZWN0aW9uV3JhcHBlcntcXG53aWR0aDogMzAwcHg7XFxubWluLXdpZHRoOiAzMDBweDtcXG5tYXJnaW46IDIwcHg7XFxuZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xcbmRpc3BsYXk6IGZsZXg7XFxuanVzdGlmeS1pdGVtczogY2VudGVyO1xcbmZsZXgtd3JhcDogd3JhcDtcXG5hbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbmFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuLnNlY3Rpb257XFxud2lkdGg6IDMwMHB4O1xcbn1cXG4uc2VjdGlvblRpdGxle1xcbmZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcXG5mb250LXNpemU6IDMwcHg7XFxuZm9udC13ZWlnaHQ6IDUwMDtcXG5tYXJnaW4tdG9wOiAwcHg7XFxubWFyZ2luLWJvdHRvbTogMjBweDtcXG5wYWRkaW5nOiAwcHg7XFxud2lkdGg6IDIwMHB4O1xcbmJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuLyogIFNhdmVkIFRhc2sgICovLyogIFNhdmVkIFRhc2sgICovLyogIFNhdmVkIFRhc2sgICovXFxuLnNhdmVkV3JhcHBlcntcXG5kaXNwbGF5OiBmbGV4O1xcbmZsZXgtd3JhcDogd3JhcDtcXG5ib3JkZXItc3R5bGU6IHNvbGlkO1xcbmJvcmRlci13aWR0aDogMXB4O1xcbmJvcmRlci1yYWRpdXM6IDVweDtcXG5ib3JkZXItY29sb3I6I2I4YjhiZDtcXG5tYXJnaW4tYm90dG9tOiAyMHB4O1xcbnBhZGRpbmc6IDEwcHg7XFxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuanVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuanVzdGlmeS1pdGVtczogY2VudGVyO1xcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5idXR0b25zV3JhcHBlcntcXG5kaXNwbGF5OmZsZXg7XFxuZmxleC13cmFwOiB3cmFwO1xcbndpZHRoOiAzMHB4O1xcbm1hcmdpbjogMHB4O1xcbn1cXG4uYnRuQ2hlY2t7XFxuYXBwZWFyYW5jZTogbm9uZTtcXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL3NyYy9pbWFnZXMvbG93LnBuZ1xcXCIpO1xcbmJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbndpZHRoOiAyMHB4O1xcbmhlaWdodDogMjBweDtcXG5ib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcbi5zYXZlZFRpdGxlV3JhcHBlcntcXG5kaXNwbGF5OiBmbGV4O1xcbmZsZXgtd3JhcDogbm93cmFwO1xcbn1cXG4uc2F2ZWRTY2hlZHVsZVdyYXBwZXJ7XFxuZGlzcGxheTogZmxleDtcXG5mbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuLnNhdmVkVGl0bGV7XFxud2lkdGg6IDUwcHg7XFxufVxcbi5zYXZlZFNjaGVkdWxle1xcbndpZHRoOjMwcHg7XFxufVxcbi5zYXZlZElucHV0e1xcbndpZHRoOiAxMDBweDtcXG59XFxuLmRlc2NyaXB0aW9uV3JhcHBlcntcXG53aWR0aDoyMDBweDtcXG59XFxuLmRlc2NyaXB0aW9uV3JhcHBlciBpbnB1dHtcXG5hcHBlYXJhbmNlOiBub25lO1xcbmJvcmRlci1zdHlsZTogbm9uZTtcXG5mb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbmZvbnQtc2l6ZTogMTVweDtcXG5tYXJnaW4tbGVmdDoxMHB4XFxufVxcblxcbi8qICBOZXdUYXNrICAqLy8qICBOZXdUYXNrICAqLy8qICBOZXdUYXNrICAqL1xcbi5uZXdXcmFwcGVye1xcbmRpc3BsYXk6IGZsZXg7XFxuYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG5ib3JkZXItd2lkdGg6IDFweDtcXG5ib3JkZXItcmFkaXVzOiA1cHg7XFxuYm9yZGVyLWNvbG9yOiAjYjhiOGJkO1xcbnBhZGRpbmc6IDIwcHg7XFxuaGVpZ2h0OiBmaXQtY29udGVudDtcXG5tYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uZm9ybVdyYXBwZXJ7XFxuZGlzcGxheTogZmxleDtcXG5mbGV4LXdyYXA6IHdyYXA7XFxud2lkdGg6IDEwMCU7XFxuanVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuLm5ld1RpdGxle1xcbmZvbnQtc2l6ZTogMjVweDtcXG59XFxuLmZvcm1JbnB1dHtcXG53aWR0aDogMTAwJTtcXG59XFxuLmZvcm1MYWJlbHtcXG5tYXJnaW4tcmlnaHQ6IDEwMCU7XFxufVxcbi5wcmlvcml0eXN7XFxubWFyZ2luLXJpZ2h0OjEwMCUgO1xcbn1cXG4ucHJpb3JpdHl7XFxuZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG5mb250LXNpemU6IDEycHg7XFxud2lkdGg6IDIwMHB4O1xcbn1cXG4uZm9ybU5vdGVze1xcbndpZHRoOjEwMCU7XFxub3ZlcmZsb3c6c2Nyb2xsO1xcbm1hcmdpbi10b3A6IDVweDtcXG5hbGlnbi1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuLyogZHJvcGRvd24gZm9yIFByb2plY3RzKi8vKiBkcm9wZG93biBmb3IgUHJvamVjdHMqL1xcbi5kcm9wYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsMjI1LDEwOSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qLmRyb3Bkb3duIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5kcm9wZG93bi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBtaW4td2lkdGg6IDE2MHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uZHJvcGRvd24tY29udGVudCBhIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDEycHggMTZweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cXG5cXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge2Rpc3BsYXk6IGJsb2NrO31cXG5cXG4uZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge2JhY2tncm91bmQtY29sb3I6ICMzZThlNDE7fVxcbiovXFxuLyogYWRkKi8vKiBhZGQqLy8qIGFkZCovXFxuXFxuLmFkZFRhc2t7XFxuYXBwZWFyYW5jZTogbm9uZTtcXG5mb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbmZvbnQtc2l6ZTogMjBweDtcXG5mb250LXdlaWdodDogMjAwO1xcbmJvcmRlci13aWR0aDogMXB4O1xcbmJvcmRlci1yYWRpdXM6IDJweDtcXG5ib3JkZXItY29sb3I6I2I4YjhiZDtcXG5ib3JkZXItc3R5bGU6IHNvbGlkO1xcbmNvbG9yOiNiOGI4YmQ7XFxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuaGVpZ2h0OiAzMHB4O1xcbnBhZGRpbmctdG9wOiAwcHg7XFxucGFkZGluZy1yaWdodDogOHB4O1xcbnBhZGRpbmctbGVmdDogOHB4O1xcbnBhZGRpbmctYm90dG9tOiAwcHg7XFxubWFyZ2luLXRvcDogMHB4O1xcbm1hcmdpbi1yaWdodDogMTAwJTtcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxudmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG5cXG59XFxuXFxuLmFkZFNlY3Rpb257XFxuYXBwZWFyYW5jZTogbm9uZTtcXG5mb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbmZvbnQtc2l6ZTogMjBweDtcXG5mb250LXdlaWdodDogMjAwO1xcbmJvcmRlci13aWR0aDogMXB4O1xcbmJvcmRlci1yYWRpdXM6IDJweDtcXG5ib3JkZXItY29sb3I6I2I4YjhiZDtcXG5ib3JkZXItc3R5bGU6IHNvbGlkO1xcbmNvbG9yOiNiOGI4YmQ7XFxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuaGVpZ2h0OiAzMHB4O1xcbnBhZGRpbmctdG9wOiAwcHg7XFxucGFkZGluZy1yaWdodDogOHB4O1xcbnBhZGRpbmctbGVmdDogOHB4O1xcbnBhZGRpbmctYm90dG9tOiAwcHg7XFxubWFyZ2luLXRvcDogNThweDtcXG5tYXJnaW4tcmlnaHQ6IDEwMCU7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbnZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuXFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgJy4vZmFjdG9yeSc7XG5cbi8vIE9uIGxvYWQsIGNyZWF0ZSBuZWNlc3NhcnkgVG9kb3MgYmFzZWQgb24gT2JqZWN0LmtleXMgaW4gbG9jYWxTdG9yYWdlLFxuXG4vLyBmaW5kIHVuaXF1ZSBpbmRleGVzIGluIGRhdGFiYXNlXG5jb25zdCBzZWFyY2hLZXlzID0gKCkgPT4ge1xuICBjb25zdCBkYXRhID0gWy4uLk9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSldO1xuXG4gIGNvbnN0IGluZGV4QXJyYXkgPSBbXTtcbiAgZGF0YS5tYXAoKGtleSkgPT4ge1xuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgvW2EtekEtWl0vKTtcbiAgICBjb25zdCBtYXRjaCA9IHJlZ2V4LmV4ZWMoa2V5KTtcbiAgICBpbmRleEFycmF5LnB1c2goa2V5LnNsaWNlKDAsIG1hdGNoLmluZGV4KSk7XG4gIH0pO1xuICBjb25zdCB1bmlxdWUgPSBbLi4ubmV3IFNldChpbmRleEFycmF5KV07XG5cbiAgcmV0dXJuIHVuaXF1ZTtcbn07XG4vLyBkaXNwbGF5IG9iamVjdHMgd2l0aCBjb3JyZWN0IGluZGV4XG5cbmNvbnN0IGZpbmRUYXNrID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgY29uc3Qgc2VhcmNoID0gKGtleSkgPT4ge1xuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgvW2EtekEtWl0vKTtcbiAgICBjb25zdCBtYXRjaCA9IHJlZ2V4LmV4ZWMoa2V5KTtcbiAgICBjb25zdCByZXN1bHQgPSBrZXkuc2xpY2UoMCwgbWF0Y2guaW5kZXgpO1xuICAgIHJldHVybiBpbmRleCA9PT0gcmVzdWx0O1xuICB9O1xuXG4gIGNvbnN0IHNlYXJjaFJlc3VsdCA9IE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSlcbiAgICAgIC5zb3J0KClcbiAgICAgIC5maWx0ZXIoKGtleSkgPT4gc2VhcmNoKGtleSkpXG4gICAgICAubWFwKChrZXkpID0+IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBzZWFyY2hSZXN1bHRbM10sXG4gICAgICAgIHNjaGVkdWxlOiBzZWFyY2hSZXN1bHRbMl0sXG4gICAgICAgIHByaW9yaXR5OiBzZWFyY2hSZXN1bHRbMV0sXG4gICAgICAgIG5vdGVzOiBzZWFyY2hSZXN1bHRbMF0sXG4gICAgICB9LFxuICApO1xufTtcblxuLy8gbGV0IHNlYXJjaEFycmF5ID0gc2VhcmNoS2V5cygpXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuLy8gc2VhcmNoS2V5cygpLm1hcCggaW5kZXggPT4gY29tcG9zZS5zYXZlZFRhc2soaW5kZXhbMF0sYCR7Y29sfXNhdmVkU2VjdGlvbmAsIGZpbmRUYXNrKGluZGV4KS50aXRsZSwgZmluZFRhc2sobmRleCkuc2NoZWR1bGUsIGZpbmRUYXNrKGluZGV4KS5wcmlvcml0eSApKVxuXG4vLyBDbGljayBhIHRhc2sgYW5kIG9wZW4gZWRpdG9yXG5cbi8vIENyZWF0ZSBuZWNlc3NhcnkgTG9naWMgZm9yIHF1ZXVlXG5cbi8vIENvdW50ZXIgdG8gbWFwIGxpbmVzXG5cbmNvbnN0IGNvdW50ZXJMaW5lcyA9IChlbGVtZW50KSA9PiB7XG4gIGNvbnN0IGlkID0gZWxlbWVudC5pZDtcbiAgY29uc3QgbGluZUluZGV4ID0gaWQuaW5kZXhPZignKicpICsgMTtcbiAgY29uc3QgbGluZSA9IGlkLnNsaWNlKGxpbmVJbmRleCk7XG4gIGlmIChsaW5lID09PSAnJykge1xuICAgIGVsZW1lbnQuaWQgPSBpZCArIDA7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5pZCA9IGlkLnJlcGxhY2UoYCoke2xpbmV9YCwgYCoke3BhcnNlSW50KGxpbmUpICsgMX1gKTtcbiAgfVxufTtcblxuZXhwb3J0IHtjb3VudGVyTGluZXMsIHNlYXJjaEtleXMsIGZpbmRUYXNrfTtcbiIsImltcG9ydCB7Zm9ybURyaXZlciwgdGFza0ZhY3Rvcnl9IGZyb20gJy4vZmFjdG9yeSc7XG5pbXBvcnQge2NvdW50ZXJMaW5lc30gZnJvbSAnLi9jb250cm9sbGVyJztcbmltcG9ydCBIaWdoIGZyb20gJy4vaW1hZ2VzL2hpZ3RoLnBuZyc7XG5pbXBvcnQgTWVkaXVtIGZyb20gJy4vaW1hZ2VzL21lZGl1bS5wbmcnO1xuaW1wb3J0IExvdyBmcm9tICcuL2ltYWdlcy9sb3cucG5nJztcbi8vIEFsbCBuZWVkZWQgd3JhcHBlcnNcbmNvbnN0IHdyYXBwZXIgPSAoKCkgPT4ge1xuICAvLyBOZXcgU2VjdGlvbiBXcmFwcGVyXG4gIGNvbnN0IHNlY3Rpb24gPSAoaWQsIGFwcGVuZFRvKSA9PiB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlY3Rpb24uaWQgPSBpZDtcbiAgICBzZWN0aW9uLmNsYXNzTGlzdCA9ICdzZWN0aW9uV3JhcHBlcic7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwZW5kVG8pO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChzZWN0aW9uKTtcbiAgfTtcblxuICBjb25zdCBzYXZlZFNlY3Rpb24gPSAoaWQsIGFwcGVuZFRvKSA9PiB7XG4gICAgY29uc3Qgc2F2ZWRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2F2ZWRTZWN0aW9uLmlkID0gaWQ7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwZW5kVG8pO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChzYXZlZFNlY3Rpb24pO1xuICB9O1xuXG4gIC8vIFNhdmVkIHRpdGxlIHdyYXBwZXJzXG4gIGNvbnN0IHNhdmVkID0gKGlkLCBhcHBlbmRUbykgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFwcGVuZFRvKTtcbiAgICBjb25zdCBzYXZlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNhdmVkLmlkID0gaWQ7XG4gICAgc2F2ZWQuY2xhc3NMaXN0ID0gJ3NhdmVkV3JhcHBlcic7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHNhdmVkKTtcbiAgfTtcblxuICBjb25zdCBidXR0b24gPSAoaWQsIGFwcGVuZFRvKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uLmlkID0gaWQ7XG4gICAgYnV0dG9uLmNsYXNzTGlzdCA9ICdidXR0b25zV3JhcHBlcic7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwZW5kVG8pO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICB9O1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gKGlkLCBhcHBlbmRUbykgPT4ge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb24uaWQgPSBpZDtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QgPSAnZGVzY3JpcHRpb25XcmFwcGVyJztcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBlbmRUbyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgfTtcblxuICBjb25zdCBzYXZlZFRpdGxlID0gKGlkLCBhcHBlbmRUbykgPT4ge1xuICAgIGNvbnN0IHNhdmVkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzYXZlZFRpdGxlLmlkID0gaWQ7XG4gICAgc2F2ZWRUaXRsZS5jbGFzc0xpc3QgPSAnc2F2ZWRUaXRsZVdyYXBwZXInO1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFwcGVuZFRvKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoc2F2ZWRUaXRsZSk7XG4gIH07XG5cbiAgY29uc3Qgc2F2ZWRTaGVkdWxlID0gKGlkLCBhcHBlbmRUbykgPT4ge1xuICAgIGNvbnN0IHNhdmVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2F2ZWQuaWQgPSBpZDtcbiAgICBzYXZlZC5jbGFzc0xpc3QgPSAnc2F2ZWRTY2hlZHVsZVdyYXBwZXInO1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFwcGVuZFRvKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoc2F2ZWQpO1xuICB9O1xuICAvLyBGb3IgbmV3IHRhc2sgZm9ybVxuICBjb25zdCBuZXdUYXNrID0gKGlkLCBhcHBlbmRUbykgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3cmFwcGVyLmlkID0gaWQ7XG4gICAgd3JhcHBlci5jbGFzc0xpc3QgPSAnbmV3V3JhcHBlcic7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwZW5kVG8pO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgfTtcblxuICBjb25zdCBuZXdGb3JtID0gKGlkLCBhcHBlbmRUbykgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3cmFwcGVyLmlkID0gaWQ7XG4gICAgd3JhcHBlci5jbGFzc0xpc3QgPSAnZm9ybVdyYXBwZXInO1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFwcGVuZFRvKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzZWN0aW9uLFxuICAgIHNhdmVkU2VjdGlvbixcbiAgICBzYXZlZCxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBzYXZlZFRpdGxlLFxuICAgIHNhdmVkU2hlZHVsZSxcbiAgICBuZXdUYXNrLFxuICAgIGJ1dHRvbixcbiAgICBuZXdGb3JtLFxuICB9O1xufSkoKTtcblxuLy8gQWxsIG5lZWRlZCBlbGVtZW50c1xuY29uc3QgZWxlbWVudCA9ICgoKSA9PiB7XG4gIGNvbnN0IHNlY3Rpb25UaXRsZSA9IChpZCwgYXBwZW5kVG8sIHRleHQpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGl0bGUuaWQgPSBpZDtcbiAgICB0aXRsZS5jbGFzc0xpc3QgPSAnc2VjdGlvblRpdGxlJztcbiAgICB0aXRsZS50eXBlID0gJ3RleHQnO1xuICAgIHRpdGxlLnZhbHVlID0gdGV4dDtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBlbmRUbyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgfTtcblxuICAvLyBmb3JtXG4gIGNvbnN0IG5ld0Zvcm0gPSAoaWQsIGFwcGVuZFRvKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmlkID0gaWQ7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwZW5kVG8pO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgfTtcblxuICAvLyBpbnB1dHNcbiAgY29uc3Qgc2F2ZWRJbnB1dCA9IChpZCwgYXBwZW5kVG8sIHRleHQpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuaWQgPSBpZDtcbiAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0LmNsYXNzTGlzdCA9ICdzYXZlZElucHV0JztcbiAgICBpbnB1dC52YWx1ZSA9IHRleHQ7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwZW5kVG8pO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIH07XG5cbiAgY29uc3QgcHJpb3JpdHkgPSAoaWQsIGFwcGVuZFRvLCBpbWcpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaWYgKGlkICE9ICcnKSB7XG4gICAgICBpbnB1dC5pZCA9IGlkO1xuICAgIH1cbiAgICBpbnB1dC5jbGFzc0xpc3QgPSAnYnRuQ2hlY2snO1xuICAgIGlucHV0LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWd9KWA7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwZW5kVG8pO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIH07XG5cbiAgY29uc3QgaW5wdXQgPSAoaWQsIGFwcGVuZFRvLCB0eXBlLCBjbGFzc0xpc3QsIG5hbWUsIGNoZWNrZWQpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaWYgKGlkICE9ICcnKSB7XG4gICAgICBpbnB1dC5pZCA9IGlkO1xuICAgIH1cbiAgICBpbnB1dC5uYW1lID0gbmFtZTtcbiAgICBpbnB1dC50eXBlID0gdHlwZTtcbiAgICBpbnB1dC5jbGFzc0xpc3QgPSBjbGFzc0xpc3Q7XG4gICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gICAgfVxuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFwcGVuZFRvKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICB9O1xuICAvLyBsYWJlbHNcbiAgY29uc3QgbGFiZWwgPSAoaWQsIGFwcGVuZFRvLCBpbnB1dCwgdGV4dCwgY2xhc3NMaXN0KSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsLmlkID0gaWQ7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpbnB1dCk7XG4gICAgbGFiZWwuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICBsYWJlbC5jbGFzc0xpc3QgPSBjbGFzc0xpc3Q7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwZW5kVG8pO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIH07XG5cbiAgY29uc3QgbmV3TGFiZWxUaXRsZSA9IChpZCwgYXBwZW5kVG8sIGlucHV0LCB0ZXh0KSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGlmIChpZCAhPSAnJykge1xuICAgICAgbGFiZWwuaWQgPSBpZDtcbiAgICB9XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpbnB1dCk7XG4gICAgbGFiZWwuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICBsYWJlbC5jbGFzc0xpc3QgPSAnbmV3VGl0bGUnO1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFwcGVuZFRvKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICB9O1xuXG4gIC8vIHRleHRBcmVhXG5cbiAgY29uc3QgdGV4dEFyZWEgPSAoaWQsIGFwcGVuZFRvKSA9PiB7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgdGV4dC5pZCA9IGlkO1xuICAgIHRleHQuY2xhc3NMaXN0ID0gJ2Zvcm1Ob3Rlcyc7XG4gICAgdGV4dC5yb3dzID0gNDtcbiAgICB0ZXh0LmNvbHMgPSAyMDtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBlbmRUbyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRleHQpO1xuICB9O1xuXG4gIC8vIEFkZCBuZXcgcHJvamVjdFxuICBjb25zdCBwcm9qZWN0SXRlbSA9IChpZCwgbmFtZSkgPT4ge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS5pZCA9IGAke2lkfWA7XG4gICAgbGkuY2xhc3NMaXN0ID0gJ3Byb2plY3RJdGVtJztcbiAgICBsaS5pbm5lclRleHQgPSBgJHtuYW1lfWA7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdExpc3QnKTtcbiAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChsaSk7XG4gIH07XG5cbiAgLy8gU3VibWl0IGJ1dHRvblxuICBjb25zdCBmb3JtU3VibWl0ID0gKGFwcGVuZFRvKSA9PiB7XG4gICAgY29uc3QgZHJvcEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRyb3BCdXR0b24uY2xhc3NMaXN0ID0gJ2Ryb3BidG4nO1xuICAgIGRyb3BCdXR0b24uaW5uZXJUZXh0ID0gJ0FkZCc7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFwcGVuZFRvKTtcbiAgICBkcm9wQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgdGFzayA9IHRhc2tGYWN0b3J5KGZvcm1Ecml2ZXIoZm9ybSkpO1xuICAgICAgdGFzay5zYXZlKCk7XG4gICAgfSk7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwZW5kVG8pO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChkcm9wQnV0dG9uKTtcbiAgfTtcblxuICAvLyBBZGQgdGFzayBvciBzZWN0aW9uIGJ1dHRvblxuXG4gIGNvbnN0IGFkZFRhc2sgPSAoY29sLCBhcHBlbmRUbykgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgYnV0dG9uLmlkID0gY29sICsgJyonO1xuICAgIGJ1dHRvbi52YWx1ZSA9ICcrJztcbiAgICBidXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QgPSAnYWRkVGFzayc7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY291bnRlckxpbmVzKGJ1dHRvbikpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICBjb21wb3NlLm5ld1Rhc2soYCR7YnV0dG9uLmlkfWZvcm1gLCBgJHtjb2x9c2F2ZWRTZWN0aW9uYCksXG4gICAgKTtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBlbmRUbyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIH07XG5cbiAgY29uc3QgYWRkU2VjdGlvbiA9IChjb2wsIGFwcGVuZFRvKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBidXR0b24uaWQgPSBgJHtwYXJzZUludChjb2wpfWFkZFNlY3Rpb25gO1xuICAgIGJ1dHRvbi52YWx1ZSA9ICcrJztcbiAgICBidXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QgPSAnYWRkU2VjdGlvbic7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3BhcnNlSW50KGNvbCl9c2VjdGlvbldyYXBwZXJgKTtcbiAgICAgIHNlY3Rpb24ucmVtb3ZlKCk7XG4gICAgICBjb21wb3NlLm5ld1NlY3Rpb24oY29sLCBgYWxsU2VjdGlvbnNXcmFwcGVyYCwgJ05ldyBTZWN0aW9uJyk7XG4gICAgICBhZGRUYXNrKGNvbCwgYCR7cGFyc2VJbnQoY29sKX1zZWN0aW9uV3JhcHBlcmApO1xuICAgICAgY29tcG9zZS5uZXdTZWN0aW9uKGAke3BhcnNlSW50KGNvbCkgKyAxfWAsICdhbGxTZWN0aW9uc1dyYXBwZXInLCAnJyk7XG4gICAgICBhZGRTZWN0aW9uKGAke3BhcnNlSW50KGNvbCkgKyAxfWAsIGAke3BhcnNlSW50KGNvbCkgKyAxfXNlY3Rpb25XcmFwcGVyYCk7XG4gICAgfSk7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwZW5kVG8pO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2VjdGlvblRpdGxlLFxuICAgIG5ld0Zvcm0sXG4gICAgc2F2ZWRJbnB1dCxcbiAgICBsYWJlbCxcbiAgICBwcm9qZWN0SXRlbSxcbiAgICBwcmlvcml0eSxcbiAgICB0ZXh0QXJlYSxcbiAgICBuZXdMYWJlbFRpdGxlLFxuICAgIGlucHV0LFxuICAgIGZvcm1TdWJtaXQsXG4gICAgYWRkU2VjdGlvbixcbiAgICBhZGRUYXNrLFxuICB9O1xufSkoKTtcblxuLy8gQ29tcG9zZWQgU3RydWN0dXJlcyA6IG5ld1NlY3Rpb24oKSwgbmV3VGFzaygpLCBzYXZlZFRhc2soKVxuXG5jb25zdCBjb21wb3NlID0gKCgpID0+IHtcbiAgY29uc3QgbmV3U2VjdGlvbiA9IChjb2wsIGFwcGVuZFRvLCB0aXRsZSkgPT4ge1xuICAgIHdyYXBwZXIuc2VjdGlvbihgJHtjb2x9c2VjdGlvbldyYXBwZXJgLCBhcHBlbmRUbyk7XG4gICAgaWYgKHRpdGxlICE9ICcnKSB7XG4gICAgICBlbGVtZW50LnNlY3Rpb25UaXRsZShgJHtjb2x9c2VjdGlvblRpdGxlYCwgYCR7Y29sfXNlY3Rpb25XcmFwcGVyYCwgdGl0bGUpO1xuICAgICAgd3JhcHBlci5zYXZlZFNlY3Rpb24oYCR7Y29sfXNhdmVkU2VjdGlvbmAsIGAke2NvbH1zZWN0aW9uV3JhcHBlcmApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzYXZlZFRhc2sgPSAoY29sLCBhcHBlbmRUbywgdGl0bGUsIHNjaGVkdWxlLCBwcmlvcml0eSkgPT4ge1xuICAgIGxldCBpbWcgPSBMb3c7XG4gICAgc3dpdGNoIChwcmlvcml0eSkge1xuICAgICAgY2FzZSAnbG93JzpcbiAgICAgICAgaW1nID0gTG93O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgIGltZyA9IE1lZGl1bTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdoaWdoJzpcbiAgICAgICAgaW1nID0gSGlnaDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpbWc7XG4gICAgfVxuICAgIHdyYXBwZXIuc2F2ZWQoYCR7Y29sfXNhdmVkV3JhcHBlcmAsIGFwcGVuZFRvKTtcbiAgICB3cmFwcGVyLmJ1dHRvbihgJHtjb2x9YnV0dG9uV3JhcHBlcmAsIGAke2NvbH1zYXZlZFdyYXBwZXJgKTtcbiAgICBlbGVtZW50LnByaW9yaXR5KGAke2NvbH1wcmlvcml0eWAsIGAke2NvbH1idXR0b25XcmFwcGVyYCwgaW1nKTtcbiAgICB3cmFwcGVyLmRlc2NyaXB0aW9uKGAke2NvbH1kZXNjcmlwdGlvbldyYXBwZXJgLCBgJHtjb2x9c2F2ZWRXcmFwcGVyYCk7XG4gICAgd3JhcHBlci5zYXZlZFRpdGxlKGAke2NvbH1zYXZlZFRpdGxlYCwgYCR7Y29sfWRlc2NyaXB0aW9uV3JhcHBlcmApO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgZWxlbWVudC5sYWJlbChcbiAgICAgICAgYCR7Y29sfXNhdmVkVGl0bGVMYWJlbGAsXG4gICAgICAgIGAke2NvbH1zYXZlZFRpdGxlYCxcbiAgICAgICAgYCR7Y29sfXNhdmVkVGl0bGVJbnB1dGAsXG4gICAgICAgICdUaXRsZScsXG4gICAgKTtcbiAgICBlbGVtZW50LnNhdmVkSW5wdXQoYCR7Y29sfXNhdmVkVGl0bGVJbnB1dGAsIGAke2NvbH1zYXZlZFRpdGxlYCwgdGl0bGUpO1xuICAgIHdyYXBwZXIuc2F2ZWRTaGVkdWxlKGAke2NvbH1zYXZlZFNoZWR1bGVgLCBgJHtjb2x9ZGVzY3JpcHRpb25XcmFwcGVyYCk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgICBlbGVtZW50LmxhYmVsKFxuICAgICAgICBgJHtjb2x9c2F2ZWRTY2hlZHVsZUxhYmVsYCxcbiAgICAgICAgYCR7Y29sfXNhdmVkU2hlZHVsZWAsXG4gICAgICAgIGAke2NvbH1zYXZlZFNjaGVkdWxlSW5wdXRgLFxuICAgICAgICAnU2NoZWR1bGUnLFxuICAgICk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgICBlbGVtZW50LnNhdmVkSW5wdXQoXG4gICAgICAgIGAke2NvbH1zYXZlZFNjaGVkdWxlSW5wdXRgLFxuICAgICAgICBgJHtjb2x9c2F2ZWRTaGVkdWxlYCxcbiAgICAgICAgc2NoZWR1bGUsXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBuZXdUYXNrID0gKGNvbCwgYXBwZW5kVG8pID0+IHtcbiAgICB3cmFwcGVyLm5ld1Rhc2soY29sLCBhcHBlbmRUbyk7XG4gICAgY29uc3Qgc3ViY29sID0gcGFyc2VJbnQoY29sKSArIDE7XG4gICAgd3JhcHBlci5uZXdGb3JtKGAke3N1YmNvbH1gLCBjb2wpO1xuICAgIGNvbnN0IGZvcm1jb2wgPSBgJHtjb2x9ZmA7XG4gICAgZWxlbWVudC5uZXdGb3JtKGAke2Zvcm1jb2x9YCwgc3ViY29sKTtcblxuICAgIGVsZW1lbnQubmV3TGFiZWxUaXRsZSgnJywgZm9ybWNvbCwgJycsICdOZXcgVGFzaycpO1xuICAgIGVsZW1lbnQuaW5wdXQoJycsIGZvcm1jb2wsICd0ZXh0JywgJ2Zvcm1JbnB1dCcpO1xuICAgIGVsZW1lbnQubGFiZWwoJycsIGZvcm1jb2wsICcnLCAnU2NoZWR1bGUnKTtcbiAgICBlbGVtZW50LmlucHV0KCcnLCBmb3JtY29sLCAnZGF0ZScsICdmb3JtSW5wdXQnKTtcbiAgICBlbGVtZW50LmxhYmVsKCcnLCBmb3JtY29sLCAnJywgJ1ByaW9yaXR5JywgJ3ByaW9yaXR5cycpO1xuICAgIGVsZW1lbnQubGFiZWwoYCR7Y29sfSBsb3dgLCBmb3JtY29sLCAnJywgJyAgICAgICAgICAgICAgTG93JywgJ3ByaW9yaXR5Jyk7XG4gICAgZWxlbWVudC5pbnB1dChgJHtjb2x9IGxvd2AsIGZvcm1jb2wsICdyYWRpbycpO1xuICAgIGVsZW1lbnQubGFiZWwoYCR7Y29sfSBtZWRpdW1gLCBmb3JtY29sLCAnJywgJ01lZGl1bScsICdwcmlvcml0eScpO1xuICAgIGVsZW1lbnQuaW5wdXQoYCR7Y29sfSBtZWRpdW1gLCBmb3JtY29sLCAncmFkaW8nKTtcbiAgICBlbGVtZW50LmxhYmVsKGAke2NvbH0gaGlnaGAsIGZvcm1jb2wsICcnLCAnSGlnaCcsICdwcmlvcml0eScpO1xuICAgIGVsZW1lbnQuaW5wdXQoYCR7Y29sfSBoaWdoYCwgZm9ybWNvbCwgJ3JhZGlvJyk7XG4gICAgZWxlbWVudC5sYWJlbCgnJywgZm9ybWNvbCwgJycsICdOb3RlcycsICdmb3JtTGFiZWwnKTtcbiAgICBlbGVtZW50LnRleHRBcmVhKCcnLCBmb3JtY29sKTtcblxuICAgIGVsZW1lbnQuZm9ybVN1Ym1pdChmb3JtY29sKTtcbiAgfTtcbiAgcmV0dXJuIHtuZXdTZWN0aW9uLCBzYXZlZFRhc2ssIG5ld1Rhc2t9O1xufSkoKTtcblxuZXhwb3J0IHt3cmFwcGVyLCBlbGVtZW50LCBjb21wb3NlfTtcbiIsImltcG9ydCAnLi9kb20nO1xuXG4vLyBGYWN0b3J5IEZ1bmN0aW9uXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4vLyBGb3JtIERyaXZlciwgdGFrZXMgaW5mbyBmcm9tIHRoZSBmb3JtIGFuZCByZXR1cm5zIGFuIGFycmF5IHdpdGggdGhlIHByb3BlcnR5IHZhbHVlc1xuY29uc3QgZm9ybURyaXZlciA9IChmb3JtKSA9PiB7XG4gIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm1BcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybS5sZW5ndGg7IGkrKykge1xuICAgICAgZm9ybUFycmF5LnB1c2goZm9ybVtpXSk7XG4gICAgfVxuICAgIGNvbnN0IGNoZWNrZWRQcmlvcml0eSA9IGZvcm1BcnJheS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uY2hlY2tlZCk7XG4gICAgaWYgKGNoZWNrZWRQcmlvcml0eS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAnbG93JztcbiAgICB9XG4gICAgY29uc3QgcHJpb3JpdHlJZCA9IGNoZWNrZWRQcmlvcml0eVswXS5pZDtcbiAgICBjb25zdCBzbGljZUF0ID0gcHJpb3JpdHlJZC5pbmRleE9mKCcgJykgKyAxO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gcHJpb3JpdHlJZC5zbGljZShzbGljZUF0KTtcbiAgICByZXR1cm4gcHJpb3JpdHk7XG4gIH07XG5cbiAgY29uc3QgZ2V0SW5kZXggPSAoZm9ybSkgPT4ge1xuICAgIGNvbnN0IGlkID0gZm9ybS5pZDtcbiAgICBjb25zdCBzbGljZUVuZCA9IGlkLmluZGV4T2YoJ2YnKTtcblxuICAgIHJldHVybiBpZC5zbGljZSgwLCBzbGljZUVuZCk7XG4gIH07XG5cbiAgcmV0dXJuIFtcbiAgICBnZXRJbmRleChmb3JtKSxcbiAgICBmb3JtWzBdLnZhbHVlLFxuICAgIGZvcm1bMV0udmFsdWUsXG4gICAgZ2V0UHJpb3JpdHkoZm9ybSksXG4gICAgZm9ybVs1XS52YWx1ZSxcbiAgXTtcbn07XG5cbmNvbnN0IHRhc2tQcm90byA9IHtcbiAgc2F2ZTogZnVuY3Rpb24oKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7dGhpcy5pbmRleH10aXRsZWAsIGAke3RoaXMudGl0bGV9YCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7dGhpcy5pbmRleH1zY2hlZHVsZWAsIGAke3RoaXMuc2NoZWR1bGV9YCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7dGhpcy5pbmRleH1wcmlvcml0eWAsIGAke3RoaXMucHJpb3JpdHl9YCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7dGhpcy5pbmRleH1ub3Rlc2AsIGAke3RoaXMubm90ZXN9YCk7XG4gIH0sXG4gIGdldFRhc2s6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHNlYXJjaCA9IChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgvW2EtekEtWl0vKTtcbiAgICAgIGNvbnN0IG1hdGNoID0gcmVnZXguZXhlYyhrZXkpO1xuICAgICAgY29uc3QgcmVzdWx0ID0ga2V5LnNsaWNlKDAsIG1hdGNoLmluZGV4KTtcbiAgICAgIHJldHVybiB0aGlzLmluZGV4ID09PSByZXN1bHQ7XG4gICAgfTtcbiAgICBjb25zdCBzZWFyY2hSZXN1bHQgPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpXG4gICAgICAgIC5maWx0ZXIoKGtleSkgPT4gc2VhcmNoKGtleSkpXG4gICAgICAgIC5tYXAoKGtleSkgPT4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogc2VhcmNoUmVzdWx0WzBdLFxuICAgICAgICAgIHNjaGVkdWxlOiBzZWFyY2hSZXN1bHRbMl0sXG4gICAgICAgICAgcHJpb3JpdHk6IHNlYXJjaFJlc3VsdFszXSxcbiAgICAgICAgICBub3Rlczogc2VhcmNoUmVzdWx0WzFdLFxuICAgICAgICB9LFxuICAgICk7XG4gIH0sXG4gIHJlbW92ZVRhc2s6IGZ1bmN0aW9uKCkge30sXG59O1xuXG5jb25zdCB0YXNrRmFjdG9yeSA9ICh2YWx1ZXMpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZSh0YXNrUHJvdG8pLCB7XG4gICAgaW5kZXg6IHZhbHVlc1swXSxcbiAgICB0aXRsZTogdmFsdWVzWzFdLFxuICAgIHNoZWR1bGU6IHZhbHVlc1syXSxcbiAgICBwcmlvcml0eTogdmFsdWVzWzNdLFxuICAgIG5vdGVzOiB2YWx1ZXNbNF0sXG4gIH0pO1xufTtcblxuZXhwb3J0IHtmb3JtRHJpdmVyLCB0YXNrRmFjdG9yeX07XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZG8uY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgJy4vdG9kby5jc3MnO1xuaW1wb3J0IExvZ28gZnJvbSAnLi9pbWFnZXMvbG9nby5wbmcnO1xuaW1wb3J0ICcuL2RvbS5qcyc7XG5pbXBvcnQgJy4vZmFjdG9yeSc7XG5pbXBvcnQge3NlYXJjaEtleXMsIGZpbmRUYXNrfSBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IHtlbGVtZW50LCBjb21wb3NlfSBmcm9tICcuL2RvbSc7XG5cbmNvbnN0IGluZGV4ZXMgPSBzZWFyY2hLZXlzKCk7XG5jb25zb2xlLmxvZyhpbmRleGVzKTtcblxuXG5jb25zdCBsb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ28nKTtcblxubG9nby5zcmMgPSBMb2dvO1xuXG5jb21wb3NlLm5ld1NlY3Rpb24oMCwgJ2FsbFNlY3Rpb25zV3JhcHBlcicsICdTZWN0aW9uIDAnLCAnJyk7XG5jb21wb3NlLm5ld1NlY3Rpb24oMSwgJ2FsbFNlY3Rpb25zV3JhcHBlcicsICcnKTtcbmVsZW1lbnQuYWRkU2VjdGlvbigxLCAnMXNlY3Rpb25XcmFwcGVyJywgJycpO1xuZWxlbWVudC5hZGRUYXNrKDAsICcwc2VjdGlvbldyYXBwZXInKTtcbmNvbXBvc2Uuc2F2ZWRUYXNrKDEsICcwc2F2ZWRTZWN0aW9uJywgJ25ld1Rhc2snLCAnMjQvMycsICdoaWdoJyk7XG4vKnNlYXJjaEtleXMoKS5tYXAoKGluZGV4KSA9PlxuICBjb21wb3NlLnNhdmVkVGFzayhcbiAgICAgIGluZGV4WzBdLFxuICAgICAgYCR7aW5kZXhbMF19c2F2ZWRTZWN0aW9uYCxcbiAgICAgIGZpbmRUYXNrKGluZGV4KS50aXRsZSxcbiAgICAgIGZpbmRUYXNrKGluZGV4KS5zY2hlZHVsZSxcbiAgICAgIGZpbmRUYXNrKGluZGV4KS5wcmlvcml0eSxcbiAgKSxcbik7XG4qL1xuXG4iXSwic291cmNlUm9vdCI6IiJ9