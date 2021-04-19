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

/* compose.newSection(0, 'allSectionsWrapper', 'Section 0');
compose.newSection(1, 'allSectionsWrapper', '');
element.addSection(1, '1sectionWrapper', '');
element.addTask(0, '0sectionWrapper');
compose.savedTask(1, '0savedSection', 'newTask', '24/3', 'high');
 searchKeys().map((index) =>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtdG9kby8uL3NyYy90b2RvLmNzcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9zcmMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9zcmMvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL3NyYy90b2RvLmNzcz8zZjgzIiwid2VicGFjazovL3RvcC10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC10b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvcC10b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0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QTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDREQUE0RCxJQUFJOztBQUVoRTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsZ0NBQWdDLEtBQUssT0FBTyxtQkFBbUI7QUFDL0Q7QUFDQTs7QUFFNEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRU07QUFDUjtBQUNKO0FBQ0c7QUFDTjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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QUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNvQjtBQUNpQjtBQUNuQjtBQUNDO0FBQytCO0FBQ1g7O0FBRXZDLGdCQUFnQix1REFBVTtBQUMxQjs7O0FBR0E7O0FBRUEsV0FBVyw2Q0FBSTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9pbWFnZXMvbG93LnBuZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qICAgIGhlYWRlciAgICAqLy8qICAgIGhlYWRlciAgICAqLy8qICAgIGhlYWRlciAgICAqLy8qICAgIGhlYWRlciAgICAqL1xcblxcbi5oZWFkZXJXcmFwcGVye1xcbndpZHRoOiAxMDAlO1xcbmhlaWdodDogZml0LWNvbnRlbnQ7XFxuZGlzcGxheTogZmxleDtcXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmxvZ29XcmFwcGVye1xcbndpZHRoOmZpdC1jb250ZW50XFxufVxcbiNsb2dve1xcbndpZHRoOiAyNTBweDtcXG5oZWlnaHQ6NzBweDtcXG5vYmplY3QtZml0OiBjb250YWluO1xcbn1cXG4vKiAgICBtYWluICAgKi8vKiAgICBtYWluICAgKi8vKiAgICBtYWluICAgKi8vKiAgICBtYWluICAgKi8vKiAgICBtYWluICAgKi9cXG4ubWFpbldyYXBwZXJ7XFxuZGlzcGxheTpmbGV4O1xcbmp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG4vKiAgIFNpZGViYXIgICovLyogICBTaWRlYmFyICAqLy8qICAgU2lkZWJhciAgKi9cXG4uc2lkZW5hdiB7XFxuICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAxMDAwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDBweDtcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zaWRlbmF2IGEge1xcbiAgcGFkZGluZzogNnB4IDhweCA2cHggMTZweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGNvbG9yOiAjMGEwYTBhO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zaWRlbmF2IGE6aG92ZXIge1xcbiAgZm9udC1zaXplOiAxNS4ycHg7XFxufVxcblxcbiNwcm9qZWN0TGlzdHtcXG5tYXJnaW46IDBweDtcXG5mb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbmZvbnQtc2l6ZTogMTJweDtcXG5jb2xvcjogcmdiKDgsIDgsIDgpO1xcbn1cXG5cXG4ucHJvamVjdEl0ZW17XFxubGlzdC1zdHlsZS10eXBlOm5vbmU7XFxubWFyZ2luLXRvcDogMHB4O1xcbndpZHRoOjEwMHB4O1xcbn1cXG4ucHJvamVjdEl0ZW06OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDIwMjJcXFwiO1xcbiAgY29sb3I6ICNmM2NmMmM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXFxuICB3aWR0aDogMWVtO1xcbiAgbWFyZ2luLWxlZnQ6IC0xZW07XFxufVxcblxcbi8qICAgU2VjdGlvbnMgKi9cXG4jYWxsU2VjdGlvbnNXcmFwcGVye1xcbmRpc3BsYXk6ZmxleDtcXG53aWR0aDogZml0LWNvbnRlbnQ7XFxuanVzdGlmeS1jb250ZW50OiBzdGFydDtcXG5hbGlnbi1jb250ZW50OiBzdGFydDtcXG5hbGlnbi1zZWxmOiBzdGFydDtcXG5hbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcbi5zZWN0aW9uV3JhcHBlcntcXG53aWR0aDogMzAwcHg7XFxubWluLXdpZHRoOiAzMDBweDtcXG5tYXJnaW46IDIwcHg7XFxuZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xcbmRpc3BsYXk6IGZsZXg7XFxuanVzdGlmeS1pdGVtczogY2VudGVyO1xcbmZsZXgtd3JhcDogd3JhcDtcXG5hbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbmFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuLnNlY3Rpb257XFxud2lkdGg6IDMwMHB4O1xcbn1cXG4uc2VjdGlvblRpdGxle1xcbmZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcXG5mb250LXNpemU6IDMwcHg7XFxuZm9udC13ZWlnaHQ6IDUwMDtcXG5tYXJnaW4tdG9wOiAwcHg7XFxubWFyZ2luLWJvdHRvbTogMjBweDtcXG5wYWRkaW5nOiAwcHg7XFxud2lkdGg6IDIwMHB4O1xcbmJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuLyogIFNhdmVkIFRhc2sgICovLyogIFNhdmVkIFRhc2sgICovLyogIFNhdmVkIFRhc2sgICovXFxuLnNhdmVkV3JhcHBlcntcXG5kaXNwbGF5OiBmbGV4O1xcbmZsZXgtd3JhcDogd3JhcDtcXG5ib3JkZXItc3R5bGU6IHNvbGlkO1xcbmJvcmRlci13aWR0aDogMXB4O1xcbmJvcmRlci1yYWRpdXM6IDVweDtcXG5ib3JkZXItY29sb3I6I2I4YjhiZDtcXG5tYXJnaW4tYm90dG9tOiAyMHB4O1xcbnBhZGRpbmc6IDEwcHg7XFxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuanVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuanVzdGlmeS1pdGVtczogY2VudGVyO1xcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5idXR0b25zV3JhcHBlcntcXG5kaXNwbGF5OmZsZXg7XFxuZmxleC13cmFwOiB3cmFwO1xcbndpZHRoOiAzMHB4O1xcbm1hcmdpbjogMHB4O1xcbn1cXG4uYnRuQ2hlY2t7XFxuYXBwZWFyYW5jZTogbm9uZTtcXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbmJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbndpZHRoOiAyMHB4O1xcbmhlaWdodDogMjBweDtcXG5ib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcbi5zYXZlZFRpdGxlV3JhcHBlcntcXG5kaXNwbGF5OiBmbGV4O1xcbmZsZXgtd3JhcDogbm93cmFwO1xcbn1cXG4uc2F2ZWRTY2hlZHVsZVdyYXBwZXJ7XFxuZGlzcGxheTogZmxleDtcXG5mbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuLnNhdmVkVGl0bGV7XFxud2lkdGg6IDUwcHg7XFxufVxcbi5zYXZlZFNjaGVkdWxle1xcbndpZHRoOjMwcHg7XFxufVxcbi5zYXZlZElucHV0e1xcbndpZHRoOiAxMDBweDtcXG59XFxuLmRlc2NyaXB0aW9uV3JhcHBlcntcXG53aWR0aDoyMDBweDtcXG59XFxuLmRlc2NyaXB0aW9uV3JhcHBlciBpbnB1dHtcXG5hcHBlYXJhbmNlOiBub25lO1xcbmJvcmRlci1zdHlsZTogbm9uZTtcXG5mb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbmZvbnQtc2l6ZTogMTVweDtcXG5tYXJnaW4tbGVmdDoxMHB4XFxufVxcblxcbi8qICBOZXdUYXNrICAqLy8qICBOZXdUYXNrICAqLy8qICBOZXdUYXNrICAqL1xcbi5uZXdXcmFwcGVye1xcbmRpc3BsYXk6IGZsZXg7XFxuYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG5ib3JkZXItd2lkdGg6IDFweDtcXG5ib3JkZXItcmFkaXVzOiA1cHg7XFxuYm9yZGVyLWNvbG9yOiAjYjhiOGJkO1xcbnBhZGRpbmc6IDIwcHg7XFxuaGVpZ2h0OiBmaXQtY29udGVudDtcXG5tYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uZm9ybVdyYXBwZXJ7XFxuZGlzcGxheTogZmxleDtcXG5mbGV4LXdyYXA6IHdyYXA7XFxud2lkdGg6IDEwMCU7XFxuanVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuLm5ld1RpdGxle1xcbmZvbnQtc2l6ZTogMjVweDtcXG59XFxuLmZvcm1JbnB1dHtcXG53aWR0aDogMTAwJTtcXG59XFxuLmZvcm1MYWJlbHtcXG5tYXJnaW4tcmlnaHQ6IDEwMCU7XFxufVxcbi5wcmlvcml0eXN7XFxubWFyZ2luLXJpZ2h0OjEwMCUgO1xcbn1cXG4ucHJpb3JpdHl7XFxuZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG5mb250LXNpemU6IDEycHg7XFxud2lkdGg6IDIwMHB4O1xcbn1cXG4uZm9ybU5vdGVze1xcbndpZHRoOjEwMCU7XFxub3ZlcmZsb3c6c2Nyb2xsO1xcbm1hcmdpbi10b3A6IDVweDtcXG5hbGlnbi1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuLyogZHJvcGRvd24gZm9yIFByb2plY3RzKi8vKiBkcm9wZG93biBmb3IgUHJvamVjdHMqL1xcbi5kcm9wYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsMjI1LDEwOSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qLmRyb3Bkb3duIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5kcm9wZG93bi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBtaW4td2lkdGg6IDE2MHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uZHJvcGRvd24tY29udGVudCBhIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDEycHggMTZweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cXG5cXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge2Rpc3BsYXk6IGJsb2NrO31cXG5cXG4uZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge2JhY2tncm91bmQtY29sb3I6ICMzZThlNDE7fVxcbiovXFxuLyogYWRkKi8vKiBhZGQqLy8qIGFkZCovXFxuXFxuLmFkZFRhc2t7XFxuYXBwZWFyYW5jZTogbm9uZTtcXG5mb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbmZvbnQtc2l6ZTogMjBweDtcXG5mb250LXdlaWdodDogMjAwO1xcbmJvcmRlci13aWR0aDogMXB4O1xcbmJvcmRlci1yYWRpdXM6IDJweDtcXG5ib3JkZXItY29sb3I6I2I4YjhiZDtcXG5ib3JkZXItc3R5bGU6IHNvbGlkO1xcbmNvbG9yOiNiOGI4YmQ7XFxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuaGVpZ2h0OiAzMHB4O1xcbnBhZGRpbmctdG9wOiAwcHg7XFxucGFkZGluZy1yaWdodDogOHB4O1xcbnBhZGRpbmctbGVmdDogOHB4O1xcbnBhZGRpbmctYm90dG9tOiAwcHg7XFxubWFyZ2luLXRvcDogMHB4O1xcbm1hcmdpbi1yaWdodDogMTAwJTtcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxudmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG5cXG59XFxuXFxuLmFkZFNlY3Rpb257XFxuYXBwZWFyYW5jZTogbm9uZTtcXG5mb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbmZvbnQtc2l6ZTogMjBweDtcXG5mb250LXdlaWdodDogMjAwO1xcbmJvcmRlci13aWR0aDogMXB4O1xcbmJvcmRlci1yYWRpdXM6IDJweDtcXG5ib3JkZXItY29sb3I6I2I4YjhiZDtcXG5ib3JkZXItc3R5bGU6IHNvbGlkO1xcbmNvbG9yOiNiOGI4YmQ7XFxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuaGVpZ2h0OiAzMHB4O1xcbnBhZGRpbmctdG9wOiAwcHg7XFxucGFkZGluZy1yaWdodDogOHB4O1xcbnBhZGRpbmctbGVmdDogOHB4O1xcbnBhZGRpbmctYm90dG9tOiAwcHg7XFxubWFyZ2luLXRvcDogNThweDtcXG5tYXJnaW4tcmlnaHQ6IDEwMCU7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbnZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuXFxuXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy90b2RvLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUI7O0FBRXZFO0FBQ0EsV0FBVztBQUNYLG1CQUFtQjtBQUNuQixhQUFhO0FBQ2IsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osV0FBVztBQUNYLG1CQUFtQjtBQUNuQjtBQUNBLGNBQWMsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxjQUFjO0FBQzFFO0FBQ0EsWUFBWTtBQUNaLHNCQUFzQjtBQUN0QixrQkFBa0I7QUFDbEI7QUFDQSxlQUFlLENBQUMsZUFBZSxDQUFDLGVBQWU7QUFDL0M7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsK0JBQStCO0FBQy9CLGVBQWU7QUFDZixtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEIsZUFBZTtBQUNmLFdBQVc7QUFDWDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUEsZUFBZTtBQUNmO0FBQ0EsWUFBWTtBQUNaLGtCQUFrQjtBQUNsQixzQkFBc0I7QUFDdEIsb0JBQW9CO0FBQ3BCLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLFlBQVk7QUFDWixnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLGlDQUFpQztBQUNqQyxhQUFhO0FBQ2IscUJBQXFCO0FBQ3JCLGVBQWU7QUFDZix5QkFBeUI7QUFDekIsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyxlQUFlO0FBQ2YsZ0JBQWdCO0FBQ2hCLGVBQWU7QUFDZixtQkFBbUI7QUFDbkIsWUFBWTtBQUNaLFlBQVk7QUFDWixrQkFBa0I7QUFDbEI7QUFDQSxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUI7QUFDckQ7QUFDQSxhQUFhO0FBQ2IsZUFBZTtBQUNmLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLG9CQUFvQjtBQUNwQixtQkFBbUI7QUFDbkIsYUFBYTtBQUNiLDZCQUE2QjtBQUM3QixvQkFBb0I7QUFDcEIscUJBQXFCO0FBQ3JCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsWUFBWTtBQUNaLGVBQWU7QUFDZixXQUFXO0FBQ1gsV0FBVztBQUNYO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIseURBQThDO0FBQzlDLHdCQUF3QjtBQUN4Qiw0QkFBNEI7QUFDNUIsV0FBVztBQUNYLFlBQVk7QUFDWixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGFBQWE7QUFDYixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQiwrQkFBK0I7QUFDL0IsZUFBZTtBQUNmO0FBQ0E7O0FBRUEsY0FBYyxDQUFDLGNBQWMsQ0FBQyxjQUFjO0FBQzVDO0FBQ0EsYUFBYTtBQUNiLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLHFCQUFxQjtBQUNyQixhQUFhO0FBQ2IsbUJBQW1CO0FBQ25CLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsYUFBYTtBQUNiLGVBQWU7QUFDZixXQUFXO0FBQ1gsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLCtCQUErQjtBQUMvQixlQUFlO0FBQ2YsWUFBWTtBQUNaO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsZUFBZTtBQUNmLGVBQWU7QUFDZixvQkFBb0I7QUFDcEI7O0FBRUEseUJBQXlCLENBQUMseUJBQXlCO0FBQ25EO0VBQ0Usa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTRCQztBQUNELE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTzs7QUFFdkI7QUFDQSxnQkFBZ0I7QUFDaEIsK0JBQStCO0FBQy9CLGVBQWU7QUFDZixnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEIsbUJBQW1CO0FBQ25CLGFBQWE7QUFDYix1QkFBdUI7QUFDdkIsWUFBWTtBQUNaLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCLG1CQUFtQjtBQUNuQixlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixzQkFBc0I7O0FBRXRCOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCLCtCQUErQjtBQUMvQixlQUFlO0FBQ2YsZ0JBQWdCO0FBQ2hCLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEIsb0JBQW9CO0FBQ3BCLG1CQUFtQjtBQUNuQixhQUFhO0FBQ2IsdUJBQXVCO0FBQ3ZCLFlBQVk7QUFDWixnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQixtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsc0JBQXNCOzs7QUFHdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogICAgaGVhZGVyICAgICovLyogICAgaGVhZGVyICAgICovLyogICAgaGVhZGVyICAgICovLyogICAgaGVhZGVyICAgICovXFxuXFxuLmhlYWRlcldyYXBwZXJ7XFxud2lkdGg6IDEwMCU7XFxuaGVpZ2h0OiBmaXQtY29udGVudDtcXG5kaXNwbGF5OiBmbGV4O1xcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubG9nb1dyYXBwZXJ7XFxud2lkdGg6Zml0LWNvbnRlbnRcXG59XFxuI2xvZ297XFxud2lkdGg6IDI1MHB4O1xcbmhlaWdodDo3MHB4O1xcbm9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcbi8qICAgIG1haW4gICAqLy8qICAgIG1haW4gICAqLy8qICAgIG1haW4gICAqLy8qICAgIG1haW4gICAqLy8qICAgIG1haW4gICAqL1xcbi5tYWluV3JhcHBlcntcXG5kaXNwbGF5OmZsZXg7XFxuanVzdGlmeS1jb250ZW50OiBzdGFydDtcXG5hbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcbi8qICAgU2lkZWJhciAgKi8vKiAgIFNpZGViYXIgICovLyogICBTaWRlYmFyICAqL1xcbi5zaWRlbmF2IHtcXG4gIG1pbi13aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDEwMDBweDtcXG4gIG1hcmdpbi1yaWdodDogMTAwcHg7XFxuICBtYXJnaW4tbGVmdDogMHB4O1xcbiAgYmFja2dyb3VuZDogI2VlZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNpZGVuYXYgYSB7XFxuICBwYWRkaW5nOiA2cHggOHB4IDZweCAxNnB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgY29sb3I6ICMwYTBhMGE7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnNpZGVuYXYgYTpob3ZlciB7XFxuICBmb250LXNpemU6IDE1LjJweDtcXG59XFxuXFxuI3Byb2plY3RMaXN0e1xcbm1hcmdpbjogMHB4O1xcbmZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuZm9udC1zaXplOiAxMnB4O1xcbmNvbG9yOiByZ2IoOCwgOCwgOCk7XFxufVxcblxcbi5wcm9qZWN0SXRlbXtcXG5saXN0LXN0eWxlLXR5cGU6bm9uZTtcXG5tYXJnaW4tdG9wOiAwcHg7XFxud2lkdGg6MTAwcHg7XFxufVxcbi5wcm9qZWN0SXRlbTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjAyMlxcXCI7XFxuICBjb2xvcjogI2YzY2YyYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcXG4gIHdpZHRoOiAxZW07XFxuICBtYXJnaW4tbGVmdDogLTFlbTtcXG59XFxuXFxuLyogICBTZWN0aW9ucyAqL1xcbiNhbGxTZWN0aW9uc1dyYXBwZXJ7XFxuZGlzcGxheTpmbGV4O1xcbndpZHRoOiBmaXQtY29udGVudDtcXG5qdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbmFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbmFsaWduLXNlbGY6IHN0YXJ0O1xcbmFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuLnNlY3Rpb25XcmFwcGVye1xcbndpZHRoOiAzMDBweDtcXG5taW4td2lkdGg6IDMwMHB4O1xcbm1hcmdpbjogMjBweDtcXG5mb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XFxuZGlzcGxheTogZmxleDtcXG5qdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuZmxleC13cmFwOiB3cmFwO1xcbmFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG4uc2VjdGlvbntcXG53aWR0aDogMzAwcHg7XFxufVxcbi5zZWN0aW9uVGl0bGV7XFxuZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xcbmZvbnQtc2l6ZTogMzBweDtcXG5mb250LXdlaWdodDogNTAwO1xcbm1hcmdpbi10b3A6IDBweDtcXG5tYXJnaW4tYm90dG9tOiAyMHB4O1xcbnBhZGRpbmc6IDBweDtcXG53aWR0aDogMjAwcHg7XFxuYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG4vKiAgU2F2ZWQgVGFzayAgKi8vKiAgU2F2ZWQgVGFzayAgKi8vKiAgU2F2ZWQgVGFzayAgKi9cXG4uc2F2ZWRXcmFwcGVye1xcbmRpc3BsYXk6IGZsZXg7XFxuZmxleC13cmFwOiB3cmFwO1xcbmJvcmRlci1zdHlsZTogc29saWQ7XFxuYm9yZGVyLXdpZHRoOiAxcHg7XFxuYm9yZGVyLXJhZGl1czogNXB4O1xcbmJvcmRlci1jb2xvcjojYjhiOGJkO1xcbm1hcmdpbi1ib3R0b206IDIwcHg7XFxucGFkZGluZzogMTBweDtcXG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5qdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG5qdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmJ1dHRvbnNXcmFwcGVye1xcbmRpc3BsYXk6ZmxleDtcXG5mbGV4LXdyYXA6IHdyYXA7XFxud2lkdGg6IDMwcHg7XFxubWFyZ2luOiAwcHg7XFxufVxcbi5idG5DaGVja3tcXG5hcHBlYXJhbmNlOiBub25lO1xcbmJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vc3JjL2ltYWdlcy9sb3cucG5nXFxcIik7XFxuYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxud2lkdGg6IDIwcHg7XFxuaGVpZ2h0OiAyMHB4O1xcbmJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuLnNhdmVkVGl0bGVXcmFwcGVye1xcbmRpc3BsYXk6IGZsZXg7XFxuZmxleC13cmFwOiBub3dyYXA7XFxufVxcbi5zYXZlZFNjaGVkdWxlV3JhcHBlcntcXG5kaXNwbGF5OiBmbGV4O1xcbmZsZXgtd3JhcDogbm93cmFwO1xcbn1cXG4uc2F2ZWRUaXRsZXtcXG53aWR0aDogNTBweDtcXG59XFxuLnNhdmVkU2NoZWR1bGV7XFxud2lkdGg6MzBweDtcXG59XFxuLnNhdmVkSW5wdXR7XFxud2lkdGg6IDEwMHB4O1xcbn1cXG4uZGVzY3JpcHRpb25XcmFwcGVye1xcbndpZHRoOjIwMHB4O1xcbn1cXG4uZGVzY3JpcHRpb25XcmFwcGVyIGlucHV0e1xcbmFwcGVhcmFuY2U6IG5vbmU7XFxuYm9yZGVyLXN0eWxlOiBub25lO1xcbmZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuZm9udC1zaXplOiAxNXB4O1xcbm1hcmdpbi1sZWZ0OjEwcHhcXG59XFxuXFxuLyogIE5ld1Rhc2sgICovLyogIE5ld1Rhc2sgICovLyogIE5ld1Rhc2sgICovXFxuLm5ld1dyYXBwZXJ7XFxuZGlzcGxheTogZmxleDtcXG5ib3JkZXItc3R5bGU6IHNvbGlkO1xcbmJvcmRlci13aWR0aDogMXB4O1xcbmJvcmRlci1yYWRpdXM6IDVweDtcXG5ib3JkZXItY29sb3I6ICNiOGI4YmQ7XFxucGFkZGluZzogMjBweDtcXG5oZWlnaHQ6IGZpdC1jb250ZW50O1xcbm1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5mb3JtV3JhcHBlcntcXG5kaXNwbGF5OiBmbGV4O1xcbmZsZXgtd3JhcDogd3JhcDtcXG53aWR0aDogMTAwJTtcXG5qdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG4ubmV3VGl0bGV7XFxuZm9udC1zaXplOiAyNXB4O1xcbn1cXG4uZm9ybUlucHV0e1xcbndpZHRoOiAxMDAlO1xcbn1cXG4uZm9ybUxhYmVse1xcbm1hcmdpbi1yaWdodDogMTAwJTtcXG59XFxuLnByaW9yaXR5c3tcXG5tYXJnaW4tcmlnaHQ6MTAwJSA7XFxufVxcbi5wcmlvcml0eXtcXG5mb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbmZvbnQtc2l6ZTogMTJweDtcXG53aWR0aDogMjAwcHg7XFxufVxcbi5mb3JtTm90ZXN7XFxud2lkdGg6MTAwJTtcXG5vdmVyZmxvdzpzY3JvbGw7XFxubWFyZ2luLXRvcDogNXB4O1xcbmFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4vKiBkcm9wZG93biBmb3IgUHJvamVjdHMqLy8qIGRyb3Bkb3duIGZvciBQcm9qZWN0cyovXFxuLmRyb3BidG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwyMjUsMTA5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyouZHJvcGRvd24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIG1pbi13aWR0aDogMTYwcHg7XFxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5kcm9wZG93bi1jb250ZW50IGEge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMTJweCAxNnB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxcblxcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7ZGlzcGxheTogYmxvY2s7fVxcblxcbi5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7YmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTt9XFxuKi9cXG4vKiBhZGQqLy8qIGFkZCovLyogYWRkKi9cXG5cXG4uYWRkVGFza3tcXG5hcHBlYXJhbmNlOiBub25lO1xcbmZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuZm9udC1zaXplOiAyMHB4O1xcbmZvbnQtd2VpZ2h0OiAyMDA7XFxuYm9yZGVyLXdpZHRoOiAxcHg7XFxuYm9yZGVyLXJhZGl1czogMnB4O1xcbmJvcmRlci1jb2xvcjojYjhiOGJkO1xcbmJvcmRlci1zdHlsZTogc29saWQ7XFxuY29sb3I6I2I4YjhiZDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5oZWlnaHQ6IDMwcHg7XFxucGFkZGluZy10b3A6IDBweDtcXG5wYWRkaW5nLXJpZ2h0OiA4cHg7XFxucGFkZGluZy1sZWZ0OiA4cHg7XFxucGFkZGluZy1ib3R0b206IDBweDtcXG5tYXJnaW4tdG9wOiAwcHg7XFxubWFyZ2luLXJpZ2h0OiAxMDAlO1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG52ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG4uYWRkU2VjdGlvbntcXG5hcHBlYXJhbmNlOiBub25lO1xcbmZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuZm9udC1zaXplOiAyMHB4O1xcbmZvbnQtd2VpZ2h0OiAyMDA7XFxuYm9yZGVyLXdpZHRoOiAxcHg7XFxuYm9yZGVyLXJhZGl1czogMnB4O1xcbmJvcmRlci1jb2xvcjojYjhiOGJkO1xcbmJvcmRlci1zdHlsZTogc29saWQ7XFxuY29sb3I6I2I4YjhiZDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5oZWlnaHQ6IDMwcHg7XFxucGFkZGluZy10b3A6IDBweDtcXG5wYWRkaW5nLXJpZ2h0OiA4cHg7XFxucGFkZGluZy1sZWZ0OiA4cHg7XFxucGFkZGluZy1ib3R0b206IDBweDtcXG5tYXJnaW4tdG9wOiA1OHB4O1xcbm1hcmdpbi1yaWdodDogMTAwJTtcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxudmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG5cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCAnLi9mYWN0b3J5JztcblxuLy8gT24gbG9hZCwgY3JlYXRlIG5lY2Vzc2FyeSBUb2RvcyBiYXNlZCBvbiBPYmplY3Qua2V5cyBpbiBsb2NhbFN0b3JhZ2UsXG5cbi8vIGZpbmQgdW5pcXVlIGluZGV4ZXMgaW4gZGF0YWJhc2VcbmNvbnN0IHNlYXJjaEtleXMgPSAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBbLi4uT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKV07XG5cbiAgY29uc3QgaW5kZXhBcnJheSA9IFtdO1xuICBkYXRhLm1hcCgoa2V5KSA9PiB7XG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKC9bYS16QS1aXS8pO1xuICAgIGNvbnN0IG1hdGNoID0gcmVnZXguZXhlYyhrZXkpO1xuICAgIGluZGV4QXJyYXkucHVzaChrZXkuc2xpY2UoMCwgbWF0Y2guaW5kZXgpKTtcbiAgfSk7XG4gIGNvbnN0IHVuaXF1ZSA9IFsuLi5uZXcgU2V0KGluZGV4QXJyYXkpXTtcblxuICByZXR1cm4gdW5pcXVlO1xufTtcbi8vIGRpc3BsYXkgb2JqZWN0cyB3aXRoIGNvcnJlY3QgaW5kZXhcblxuY29uc3QgZmluZFRhc2sgPSBmdW5jdGlvbihpbmRleCkge1xuICBjb25zdCBzZWFyY2ggPSAoa2V5KSA9PiB7XG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKC9bYS16QS1aXS8pO1xuICAgIGNvbnN0IG1hdGNoID0gcmVnZXguZXhlYyhrZXkpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGtleS5zbGljZSgwLCBtYXRjaC5pbmRleCk7XG4gICAgcmV0dXJuIGluZGV4ID09PSByZXN1bHQ7XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoUmVzdWx0ID0gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKVxuICAgICAgLnNvcnQoKVxuICAgICAgLmZpbHRlcigoa2V5KSA9PiBzZWFyY2goa2V5KSlcbiAgICAgIC5tYXAoKGtleSkgPT4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IHNlYXJjaFJlc3VsdFszXSxcbiAgICAgICAgc2NoZWR1bGU6IHNlYXJjaFJlc3VsdFsyXSxcbiAgICAgICAgcHJpb3JpdHk6IHNlYXJjaFJlc3VsdFsxXSxcbiAgICAgICAgbm90ZXM6IHNlYXJjaFJlc3VsdFswXSxcbiAgICAgIH0sXG4gICk7XG59O1xuXG4vLyBsZXQgc2VhcmNoQXJyYXkgPSBzZWFyY2hLZXlzKClcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4vLyBzZWFyY2hLZXlzKCkubWFwKCBpbmRleCA9PiBjb21wb3NlLnNhdmVkVGFzayhpbmRleFswXSxgJHtjb2x9c2F2ZWRTZWN0aW9uYCwgZmluZFRhc2soaW5kZXgpLnRpdGxlLCBmaW5kVGFzayhuZGV4KS5zY2hlZHVsZSwgZmluZFRhc2soaW5kZXgpLnByaW9yaXR5ICkpXG5cbi8vIENsaWNrIGEgdGFzayBhbmQgb3BlbiBlZGl0b3JcblxuLy8gQ3JlYXRlIG5lY2Vzc2FyeSBMb2dpYyBmb3IgcXVldWVcblxuLy8gQ291bnRlciB0byBtYXAgbGluZXNcblxuY29uc3QgY291bnRlckxpbmVzID0gKGVsZW1lbnQpID0+IHtcbiAgY29uc3QgaWQgPSBlbGVtZW50LmlkO1xuICBjb25zdCBsaW5lSW5kZXggPSBpZC5pbmRleE9mKCcqJykgKyAxO1xuICBjb25zdCBsaW5lID0gaWQuc2xpY2UobGluZUluZGV4KTtcbiAgaWYgKGxpbmUgPT09ICcnKSB7XG4gICAgZWxlbWVudC5pZCA9IGlkICsgMDtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmlkID0gaWQucmVwbGFjZShgKiR7bGluZX1gLCBgKiR7cGFyc2VJbnQobGluZSkgKyAxfWApO1xuICB9XG59O1xuXG5leHBvcnQge2NvdW50ZXJMaW5lcywgc2VhcmNoS2V5cywgZmluZFRhc2t9O1xuIiwiaW1wb3J0IHtmb3JtRHJpdmVyLCB0YXNrRmFjdG9yeX0gZnJvbSAnLi9mYWN0b3J5JztcbmltcG9ydCB7Y291bnRlckxpbmVzfSBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IEhpZ2ggZnJvbSAnLi9pbWFnZXMvaGlndGgucG5nJztcbmltcG9ydCBNZWRpdW0gZnJvbSAnLi9pbWFnZXMvbWVkaXVtLnBuZyc7XG5pbXBvcnQgTG93IGZyb20gJy4vaW1hZ2VzL2xvdy5wbmcnO1xuLy8gQWxsIG5lZWRlZCB3cmFwcGVyc1xuY29uc3Qgd3JhcHBlciA9ICgoKSA9PiB7XG4gIC8vIE5ldyBTZWN0aW9uIFdyYXBwZXJcbiAgY29uc3Qgc2VjdGlvbiA9IChpZCwgYXBwZW5kVG8pID0+IHtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VjdGlvbi5pZCA9IGlkO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0ID0gJ3NlY3Rpb25XcmFwcGVyJztcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBlbmRUbyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICB9O1xuXG4gIGNvbnN0IHNhdmVkU2VjdGlvbiA9IChpZCwgYXBwZW5kVG8pID0+IHtcbiAgICBjb25zdCBzYXZlZFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzYXZlZFNlY3Rpb24uaWQgPSBpZDtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBlbmRUbyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHNhdmVkU2VjdGlvbik7XG4gIH07XG5cbiAgLy8gU2F2ZWQgdGl0bGUgd3JhcHBlcnNcbiAgY29uc3Qgc2F2ZWQgPSAoaWQsIGFwcGVuZFRvKSA9PiB7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwZW5kVG8pO1xuICAgIGNvbnN0IHNhdmVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2F2ZWQuaWQgPSBpZDtcbiAgICBzYXZlZC5jbGFzc0xpc3QgPSAnc2F2ZWRXcmFwcGVyJztcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoc2F2ZWQpO1xuICB9O1xuXG4gIGNvbnN0IGJ1dHRvbiA9IChpZCwgYXBwZW5kVG8pID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b24uaWQgPSBpZDtcbiAgICBidXR0b24uY2xhc3NMaXN0ID0gJ2J1dHRvbnNXcmFwcGVyJztcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBlbmRUbyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIH07XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSAoaWQsIGFwcGVuZFRvKSA9PiB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbi5pZCA9IGlkO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdCA9ICdkZXNjcmlwdGlvbldyYXBwZXInO1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFwcGVuZFRvKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICB9O1xuXG4gIGNvbnN0IHNhdmVkVGl0bGUgPSAoaWQsIGFwcGVuZFRvKSA9PiB7XG4gICAgY29uc3Qgc2F2ZWRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNhdmVkVGl0bGUuaWQgPSBpZDtcbiAgICBzYXZlZFRpdGxlLmNsYXNzTGlzdCA9ICdzYXZlZFRpdGxlV3JhcHBlcic7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwZW5kVG8pO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChzYXZlZFRpdGxlKTtcbiAgfTtcblxuICBjb25zdCBzYXZlZFNoZWR1bGUgPSAoaWQsIGFwcGVuZFRvKSA9PiB7XG4gICAgY29uc3Qgc2F2ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzYXZlZC5pZCA9IGlkO1xuICAgIHNhdmVkLmNsYXNzTGlzdCA9ICdzYXZlZFNjaGVkdWxlV3JhcHBlcic7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwZW5kVG8pO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChzYXZlZCk7XG4gIH07XG4gIC8vIEZvciBuZXcgdGFzayBmb3JtXG4gIGNvbnN0IG5ld1Rhc2sgPSAoaWQsIGFwcGVuZFRvKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdyYXBwZXIuaWQgPSBpZDtcbiAgICB3cmFwcGVyLmNsYXNzTGlzdCA9ICduZXdXcmFwcGVyJztcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBlbmRUbyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICB9O1xuXG4gIGNvbnN0IG5ld0Zvcm0gPSAoaWQsIGFwcGVuZFRvKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdyYXBwZXIuaWQgPSBpZDtcbiAgICB3cmFwcGVyLmNsYXNzTGlzdCA9ICdmb3JtV3JhcHBlcic7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwZW5kVG8pO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNlY3Rpb24sXG4gICAgc2F2ZWRTZWN0aW9uLFxuICAgIHNhdmVkLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIHNhdmVkVGl0bGUsXG4gICAgc2F2ZWRTaGVkdWxlLFxuICAgIG5ld1Rhc2ssXG4gICAgYnV0dG9uLFxuICAgIG5ld0Zvcm0sXG4gIH07XG59KSgpO1xuXG4vLyBBbGwgbmVlZGVkIGVsZW1lbnRzXG5jb25zdCBlbGVtZW50ID0gKCgpID0+IHtcbiAgY29uc3Qgc2VjdGlvblRpdGxlID0gKGlkLCBhcHBlbmRUbywgdGV4dCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aXRsZS5pZCA9IGlkO1xuICAgIHRpdGxlLmNsYXNzTGlzdCA9ICdzZWN0aW9uVGl0bGUnO1xuICAgIHRpdGxlLnR5cGUgPSAndGV4dCc7XG4gICAgdGl0bGUudmFsdWUgPSB0ZXh0O1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFwcGVuZFRvKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICB9O1xuXG4gIC8vIGZvcm1cbiAgY29uc3QgbmV3Rm9ybSA9IChpZCwgYXBwZW5kVG8pID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uaWQgPSBpZDtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBlbmRUbyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGZvcm0pO1xuICB9O1xuXG4gIC8vIGlucHV0c1xuICBjb25zdCBzYXZlZElucHV0ID0gKGlkLCBhcHBlbmRUbywgdGV4dCkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC5pZCA9IGlkO1xuICAgIGlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXQuY2xhc3NMaXN0ID0gJ3NhdmVkSW5wdXQnO1xuICAgIGlucHV0LnZhbHVlID0gdGV4dDtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBlbmRUbyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgfTtcblxuICBjb25zdCBwcmlvcml0eSA9IChpZCwgYXBwZW5kVG8sIGltZykgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpZiAoaWQgIT0gJycpIHtcbiAgICAgIGlucHV0LmlkID0gaWQ7XG4gICAgfVxuICAgIGlucHV0LmNsYXNzTGlzdCA9ICdidG5DaGVjayc7XG4gICAgaW5wdXQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltZ30pYDtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBlbmRUbyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgfTtcblxuICBjb25zdCBpbnB1dCA9IChpZCwgYXBwZW5kVG8sIHR5cGUsIGNsYXNzTGlzdCwgbmFtZSwgY2hlY2tlZCkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpZiAoaWQgIT0gJycpIHtcbiAgICAgIGlucHV0LmlkID0gaWQ7XG4gICAgfVxuICAgIGlucHV0Lm5hbWUgPSBuYW1lO1xuICAgIGlucHV0LnR5cGUgPSB0eXBlO1xuICAgIGlucHV0LmNsYXNzTGlzdCA9IGNsYXNzTGlzdDtcbiAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcbiAgICB9XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwZW5kVG8pO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIH07XG4gIC8vIGxhYmVsc1xuICBjb25zdCBsYWJlbCA9IChpZCwgYXBwZW5kVG8sIGlucHV0LCB0ZXh0LCBjbGFzc0xpc3QpID0+IHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWwuaWQgPSBpZDtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlucHV0KTtcbiAgICBsYWJlbC5pbm5lclRleHQgPSB0ZXh0O1xuICAgIGxhYmVsLmNsYXNzTGlzdCA9IGNsYXNzTGlzdDtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBlbmRUbyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgfTtcblxuICBjb25zdCBuZXdMYWJlbFRpdGxlID0gKGlkLCBhcHBlbmRUbywgaW5wdXQsIHRleHQpID0+IHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgaWYgKGlkICE9ICcnKSB7XG4gICAgICBsYWJlbC5pZCA9IGlkO1xuICAgIH1cbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlucHV0KTtcbiAgICBsYWJlbC5pbm5lclRleHQgPSB0ZXh0O1xuICAgIGxhYmVsLmNsYXNzTGlzdCA9ICduZXdUaXRsZSc7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwZW5kVG8pO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIH07XG5cbiAgLy8gdGV4dEFyZWFcblxuICBjb25zdCB0ZXh0QXJlYSA9IChpZCwgYXBwZW5kVG8pID0+IHtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICB0ZXh0LmlkID0gaWQ7XG4gICAgdGV4dC5jbGFzc0xpc3QgPSAnZm9ybU5vdGVzJztcbiAgICB0ZXh0LnJvd3MgPSA0O1xuICAgIHRleHQuY29scyA9IDIwO1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFwcGVuZFRvKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGV4dCk7XG4gIH07XG5cbiAgLy8gQWRkIG5ldyBwcm9qZWN0XG4gIGNvbnN0IHByb2plY3RJdGVtID0gKGlkLCBuYW1lKSA9PiB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLmlkID0gYCR7aWR9YDtcbiAgICBsaS5jbGFzc0xpc3QgPSAncHJvamVjdEl0ZW0nO1xuICAgIGxpLmlubmVyVGV4dCA9IGAke25hbWV9YDtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TGlzdCcpO1xuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKGxpKTtcbiAgfTtcblxuICAvLyBTdWJtaXQgYnV0dG9uXG4gIGNvbnN0IGZvcm1TdWJtaXQgPSAoYXBwZW5kVG8pID0+IHtcbiAgICBjb25zdCBkcm9wQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZHJvcEJ1dHRvbi5jbGFzc0xpc3QgPSAnZHJvcGJ0bic7XG4gICAgZHJvcEJ1dHRvbi5pbm5lclRleHQgPSAnQWRkJztcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwZW5kVG8pO1xuICAgIGRyb3BCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCB0YXNrID0gdGFza0ZhY3RvcnkoZm9ybURyaXZlcihmb3JtKSk7XG4gICAgICB0YXNrLnNhdmUoKTtcbiAgICB9KTtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBlbmRUbyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGRyb3BCdXR0b24pO1xuICB9O1xuXG4gIC8vIEFkZCB0YXNrIG9yIHNlY3Rpb24gYnV0dG9uXG5cbiAgY29uc3QgYWRkVGFzayA9IChjb2wsIGFwcGVuZFRvKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBidXR0b24uaWQgPSBjb2wgKyAnKic7XG4gICAgYnV0dG9uLnZhbHVlID0gJysnO1xuICAgIGJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgYnV0dG9uLmNsYXNzTGlzdCA9ICdhZGRUYXNrJztcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjb3VudGVyTGluZXMoYnV0dG9uKSk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgIGNvbXBvc2UubmV3VGFzayhgJHtidXR0b24uaWR9Zm9ybWAsIGAke2NvbH1zYXZlZFNlY3Rpb25gKSxcbiAgICApO1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFwcGVuZFRvKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgfTtcblxuICBjb25zdCBhZGRTZWN0aW9uID0gKGNvbCwgYXBwZW5kVG8pID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGJ1dHRvbi5pZCA9IGAke3BhcnNlSW50KGNvbCl9YWRkU2VjdGlvbmA7XG4gICAgYnV0dG9uLnZhbHVlID0gJysnO1xuICAgIGJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgYnV0dG9uLmNsYXNzTGlzdCA9ICdhZGRTZWN0aW9uJztcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cGFyc2VJbnQoY29sKX1zZWN0aW9uV3JhcHBlcmApO1xuICAgICAgc2VjdGlvbi5yZW1vdmUoKTtcbiAgICAgIGNvbXBvc2UubmV3U2VjdGlvbihjb2wsIGBhbGxTZWN0aW9uc1dyYXBwZXJgLCAnTmV3IFNlY3Rpb24nKTtcbiAgICAgIGFkZFRhc2soY29sLCBgJHtwYXJzZUludChjb2wpfXNlY3Rpb25XcmFwcGVyYCk7XG4gICAgICBjb21wb3NlLm5ld1NlY3Rpb24oYCR7cGFyc2VJbnQoY29sKSArIDF9YCwgJ2FsbFNlY3Rpb25zV3JhcHBlcicsICcnKTtcbiAgICAgIGFkZFNlY3Rpb24oYCR7cGFyc2VJbnQoY29sKSArIDF9YCwgYCR7cGFyc2VJbnQoY29sKSArIDF9c2VjdGlvbldyYXBwZXJgKTtcbiAgICB9KTtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBlbmRUbyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzZWN0aW9uVGl0bGUsXG4gICAgbmV3Rm9ybSxcbiAgICBzYXZlZElucHV0LFxuICAgIGxhYmVsLFxuICAgIHByb2plY3RJdGVtLFxuICAgIHByaW9yaXR5LFxuICAgIHRleHRBcmVhLFxuICAgIG5ld0xhYmVsVGl0bGUsXG4gICAgaW5wdXQsXG4gICAgZm9ybVN1Ym1pdCxcbiAgICBhZGRTZWN0aW9uLFxuICAgIGFkZFRhc2ssXG4gIH07XG59KSgpO1xuXG4vLyBDb21wb3NlZCBTdHJ1Y3R1cmVzIDogbmV3U2VjdGlvbigpLCBuZXdUYXNrKCksIHNhdmVkVGFzaygpXG5cbmNvbnN0IGNvbXBvc2UgPSAoKCkgPT4ge1xuICBjb25zdCBuZXdTZWN0aW9uID0gKGNvbCwgYXBwZW5kVG8sIHRpdGxlKSA9PiB7XG4gICAgd3JhcHBlci5zZWN0aW9uKGAke2NvbH1zZWN0aW9uV3JhcHBlcmAsIGFwcGVuZFRvKTtcbiAgICBpZiAodGl0bGUgIT0gJycpIHtcbiAgICAgIGVsZW1lbnQuc2VjdGlvblRpdGxlKGAke2NvbH1zZWN0aW9uVGl0bGVgLCBgJHtjb2x9c2VjdGlvbldyYXBwZXJgLCB0aXRsZSk7XG4gICAgICB3cmFwcGVyLnNhdmVkU2VjdGlvbihgJHtjb2x9c2F2ZWRTZWN0aW9uYCwgYCR7Y29sfXNlY3Rpb25XcmFwcGVyYCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNhdmVkVGFzayA9IChjb2wsIGFwcGVuZFRvLCB0aXRsZSwgc2NoZWR1bGUsIHByaW9yaXR5KSA9PiB7XG4gICAgbGV0IGltZyA9IExvdztcbiAgICBzd2l0Y2ggKHByaW9yaXR5KSB7XG4gICAgICBjYXNlICdsb3cnOlxuICAgICAgICBpbWcgPSBMb3c7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgICAgaW1nID0gTWVkaXVtO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2hpZ2gnOlxuICAgICAgICBpbWcgPSBIaWdoO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGltZztcbiAgICB9XG4gICAgd3JhcHBlci5zYXZlZChgJHtjb2x9c2F2ZWRXcmFwcGVyYCwgYXBwZW5kVG8pO1xuICAgIHdyYXBwZXIuYnV0dG9uKGAke2NvbH1idXR0b25XcmFwcGVyYCwgYCR7Y29sfXNhdmVkV3JhcHBlcmApO1xuICAgIGVsZW1lbnQucHJpb3JpdHkoYCR7Y29sfXByaW9yaXR5YCwgYCR7Y29sfWJ1dHRvbldyYXBwZXJgLCBpbWcpO1xuICAgIHdyYXBwZXIuZGVzY3JpcHRpb24oYCR7Y29sfWRlc2NyaXB0aW9uV3JhcHBlcmAsIGAke2NvbH1zYXZlZFdyYXBwZXJgKTtcbiAgICB3cmFwcGVyLnNhdmVkVGl0bGUoYCR7Y29sfXNhdmVkVGl0bGVgLCBgJHtjb2x9ZGVzY3JpcHRpb25XcmFwcGVyYCk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgICBlbGVtZW50LmxhYmVsKFxuICAgICAgICBgJHtjb2x9c2F2ZWRUaXRsZUxhYmVsYCxcbiAgICAgICAgYCR7Y29sfXNhdmVkVGl0bGVgLFxuICAgICAgICBgJHtjb2x9c2F2ZWRUaXRsZUlucHV0YCxcbiAgICAgICAgJ1RpdGxlJyxcbiAgICApO1xuICAgIGVsZW1lbnQuc2F2ZWRJbnB1dChgJHtjb2x9c2F2ZWRUaXRsZUlucHV0YCwgYCR7Y29sfXNhdmVkVGl0bGVgLCB0aXRsZSk7XG4gICAgd3JhcHBlci5zYXZlZFNoZWR1bGUoYCR7Y29sfXNhdmVkU2hlZHVsZWAsIGAke2NvbH1kZXNjcmlwdGlvbldyYXBwZXJgKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgIGVsZW1lbnQubGFiZWwoXG4gICAgICAgIGAke2NvbH1zYXZlZFNjaGVkdWxlTGFiZWxgLFxuICAgICAgICBgJHtjb2x9c2F2ZWRTaGVkdWxlYCxcbiAgICAgICAgYCR7Y29sfXNhdmVkU2NoZWR1bGVJbnB1dGAsXG4gICAgICAgICdTY2hlZHVsZScsXG4gICAgKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgIGVsZW1lbnQuc2F2ZWRJbnB1dChcbiAgICAgICAgYCR7Y29sfXNhdmVkU2NoZWR1bGVJbnB1dGAsXG4gICAgICAgIGAke2NvbH1zYXZlZFNoZWR1bGVgLFxuICAgICAgICBzY2hlZHVsZSxcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IG5ld1Rhc2sgPSAoY29sLCBhcHBlbmRUbykgPT4ge1xuICAgIHdyYXBwZXIubmV3VGFzayhjb2wsIGFwcGVuZFRvKTtcbiAgICBjb25zdCBzdWJjb2wgPSBwYXJzZUludChjb2wpICsgMTtcbiAgICB3cmFwcGVyLm5ld0Zvcm0oYCR7c3ViY29sfWAsIGNvbCk7XG4gICAgY29uc3QgZm9ybWNvbCA9IGAke2NvbH1mYDtcbiAgICBlbGVtZW50Lm5ld0Zvcm0oYCR7Zm9ybWNvbH1gLCBzdWJjb2wpO1xuXG4gICAgZWxlbWVudC5uZXdMYWJlbFRpdGxlKCcnLCBmb3JtY29sLCAnJywgJ05ldyBUYXNrJyk7XG4gICAgZWxlbWVudC5pbnB1dCgnJywgZm9ybWNvbCwgJ3RleHQnLCAnZm9ybUlucHV0Jyk7XG4gICAgZWxlbWVudC5sYWJlbCgnJywgZm9ybWNvbCwgJycsICdTY2hlZHVsZScpO1xuICAgIGVsZW1lbnQuaW5wdXQoJycsIGZvcm1jb2wsICdkYXRlJywgJ2Zvcm1JbnB1dCcpO1xuICAgIGVsZW1lbnQubGFiZWwoJycsIGZvcm1jb2wsICcnLCAnUHJpb3JpdHknLCAncHJpb3JpdHlzJyk7XG4gICAgZWxlbWVudC5sYWJlbChgJHtjb2x9IGxvd2AsIGZvcm1jb2wsICcnLCAnICAgICAgICAgICAgICBMb3cnLCAncHJpb3JpdHknKTtcbiAgICBlbGVtZW50LmlucHV0KGAke2NvbH0gbG93YCwgZm9ybWNvbCwgJ3JhZGlvJyk7XG4gICAgZWxlbWVudC5sYWJlbChgJHtjb2x9IG1lZGl1bWAsIGZvcm1jb2wsICcnLCAnTWVkaXVtJywgJ3ByaW9yaXR5Jyk7XG4gICAgZWxlbWVudC5pbnB1dChgJHtjb2x9IG1lZGl1bWAsIGZvcm1jb2wsICdyYWRpbycpO1xuICAgIGVsZW1lbnQubGFiZWwoYCR7Y29sfSBoaWdoYCwgZm9ybWNvbCwgJycsICdIaWdoJywgJ3ByaW9yaXR5Jyk7XG4gICAgZWxlbWVudC5pbnB1dChgJHtjb2x9IGhpZ2hgLCBmb3JtY29sLCAncmFkaW8nKTtcbiAgICBlbGVtZW50LmxhYmVsKCcnLCBmb3JtY29sLCAnJywgJ05vdGVzJywgJ2Zvcm1MYWJlbCcpO1xuICAgIGVsZW1lbnQudGV4dEFyZWEoJycsIGZvcm1jb2wpO1xuXG4gICAgZWxlbWVudC5mb3JtU3VibWl0KGZvcm1jb2wpO1xuICB9O1xuICByZXR1cm4ge25ld1NlY3Rpb24sIHNhdmVkVGFzaywgbmV3VGFza307XG59KSgpO1xuXG5leHBvcnQge3dyYXBwZXIsIGVsZW1lbnQsIGNvbXBvc2V9O1xuIiwiaW1wb3J0ICcuL2RvbSc7XG5cbi8vIEZhY3RvcnkgRnVuY3Rpb25cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbi8vIEZvcm0gRHJpdmVyLCB0YWtlcyBpbmZvIGZyb20gdGhlIGZvcm0gYW5kIHJldHVybnMgYW4gYXJyYXkgd2l0aCB0aGUgcHJvcGVydHkgdmFsdWVzXG5jb25zdCBmb3JtRHJpdmVyID0gKGZvcm0pID0+IHtcbiAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybUFycmF5ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3JtQXJyYXkucHVzaChmb3JtW2ldKTtcbiAgICB9XG4gICAgY29uc3QgY2hlY2tlZFByaW9yaXR5ID0gZm9ybUFycmF5LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jaGVja2VkKTtcbiAgICBpZiAoY2hlY2tlZFByaW9yaXR5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdsb3cnO1xuICAgIH1cbiAgICBjb25zdCBwcmlvcml0eUlkID0gY2hlY2tlZFByaW9yaXR5WzBdLmlkO1xuICAgIGNvbnN0IHNsaWNlQXQgPSBwcmlvcml0eUlkLmluZGV4T2YoJyAnKSArIDE7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBwcmlvcml0eUlkLnNsaWNlKHNsaWNlQXQpO1xuICAgIHJldHVybiBwcmlvcml0eTtcbiAgfTtcblxuICBjb25zdCBnZXRJbmRleCA9IChmb3JtKSA9PiB7XG4gICAgY29uc3QgaWQgPSBmb3JtLmlkO1xuICAgIGNvbnN0IHNsaWNlRW5kID0gaWQuaW5kZXhPZignZicpO1xuXG4gICAgcmV0dXJuIGlkLnNsaWNlKDAsIHNsaWNlRW5kKTtcbiAgfTtcblxuICByZXR1cm4gW1xuICAgIGdldEluZGV4KGZvcm0pLFxuICAgIGZvcm1bMF0udmFsdWUsXG4gICAgZm9ybVsxXS52YWx1ZSxcbiAgICBnZXRQcmlvcml0eShmb3JtKSxcbiAgICBmb3JtWzVdLnZhbHVlLFxuICBdO1xufTtcblxuY29uc3QgdGFza1Byb3RvID0ge1xuICBzYXZlOiBmdW5jdGlvbigpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt0aGlzLmluZGV4fXRpdGxlYCwgYCR7dGhpcy50aXRsZX1gKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt0aGlzLmluZGV4fXNjaGVkdWxlYCwgYCR7dGhpcy5zY2hlZHVsZX1gKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt0aGlzLmluZGV4fXByaW9yaXR5YCwgYCR7dGhpcy5wcmlvcml0eX1gKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt0aGlzLmluZGV4fW5vdGVzYCwgYCR7dGhpcy5ub3Rlc31gKTtcbiAgfSxcbiAgZ2V0VGFzazogZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc2VhcmNoID0gKGtleSkgPT4ge1xuICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKC9bYS16QS1aXS8pO1xuICAgICAgY29uc3QgbWF0Y2ggPSByZWdleC5leGVjKGtleSk7XG4gICAgICBjb25zdCByZXN1bHQgPSBrZXkuc2xpY2UoMCwgbWF0Y2guaW5kZXgpO1xuICAgICAgcmV0dXJuIHRoaXMuaW5kZXggPT09IHJlc3VsdDtcbiAgICB9O1xuICAgIGNvbnN0IHNlYXJjaFJlc3VsdCA9IE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSlcbiAgICAgICAgLmZpbHRlcigoa2V5KSA9PiBzZWFyY2goa2V5KSlcbiAgICAgICAgLm1hcCgoa2V5KSA9PiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAgICB7fSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiBzZWFyY2hSZXN1bHRbMF0sXG4gICAgICAgICAgc2NoZWR1bGU6IHNlYXJjaFJlc3VsdFsyXSxcbiAgICAgICAgICBwcmlvcml0eTogc2VhcmNoUmVzdWx0WzNdLFxuICAgICAgICAgIG5vdGVzOiBzZWFyY2hSZXN1bHRbMV0sXG4gICAgICAgIH0sXG4gICAgKTtcbiAgfSxcbiAgcmVtb3ZlVGFzazogZnVuY3Rpb24oKSB7fSxcbn07XG5cbmNvbnN0IHRhc2tGYWN0b3J5ID0gKHZhbHVlcykgPT4ge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKHRhc2tQcm90byksIHtcbiAgICBpbmRleDogdmFsdWVzWzBdLFxuICAgIHRpdGxlOiB2YWx1ZXNbMV0sXG4gICAgc2hlZHVsZTogdmFsdWVzWzJdLFxuICAgIHByaW9yaXR5OiB2YWx1ZXNbM10sXG4gICAgbm90ZXM6IHZhbHVlc1s0XSxcbiAgfSk7XG59O1xuXG5leHBvcnQge2Zvcm1Ecml2ZXIsIHRhc2tGYWN0b3J5fTtcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9kby5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCAnLi90b2RvLmNzcyc7XG5pbXBvcnQgTG9nbyBmcm9tICcuL2ltYWdlcy9sb2dvLnBuZyc7XG5pbXBvcnQgJy4vZG9tLmpzJztcbmltcG9ydCAnLi9mYWN0b3J5JztcbmltcG9ydCB7c2VhcmNoS2V5cywgZmluZFRhc2t9IGZyb20gJy4vY29udHJvbGxlcic7XG5pbXBvcnQge2VsZW1lbnQsIGNvbXBvc2V9IGZyb20gJy4vZG9tJztcblxuY29uc3QgaW5kZXhlcyA9IHNlYXJjaEtleXMoKTtcbmNvbnNvbGUubG9nKGluZGV4ZXMpO1xuXG5cbmNvbnN0IGxvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nbycpO1xuXG5sb2dvLnNyYyA9IExvZ287XG5cbi8qIGNvbXBvc2UubmV3U2VjdGlvbigwLCAnYWxsU2VjdGlvbnNXcmFwcGVyJywgJ1NlY3Rpb24gMCcpO1xuY29tcG9zZS5uZXdTZWN0aW9uKDEsICdhbGxTZWN0aW9uc1dyYXBwZXInLCAnJyk7XG5lbGVtZW50LmFkZFNlY3Rpb24oMSwgJzFzZWN0aW9uV3JhcHBlcicsICcnKTtcbmVsZW1lbnQuYWRkVGFzaygwLCAnMHNlY3Rpb25XcmFwcGVyJyk7XG5jb21wb3NlLnNhdmVkVGFzaygxLCAnMHNhdmVkU2VjdGlvbicsICduZXdUYXNrJywgJzI0LzMnLCAnaGlnaCcpO1xuIHNlYXJjaEtleXMoKS5tYXAoKGluZGV4KSA9PlxuICBjb21wb3NlLnNhdmVkVGFzayhcbiAgICAgIGluZGV4WzBdLFxuICAgICAgYCR7aW5kZXhbMF19c2F2ZWRTZWN0aW9uYCxcbiAgICAgIGZpbmRUYXNrKGluZGV4KS50aXRsZSxcbiAgICAgIGZpbmRUYXNrKGluZGV4KS5zY2hlZHVsZSxcbiAgICAgIGZpbmRUYXNrKGluZGV4KS5wcmlvcml0eSxcbiAgKSxcbik7XG5cbiovXG4iXSwic291cmNlUm9vdCI6IiJ9