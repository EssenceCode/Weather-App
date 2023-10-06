/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
}

body {
  background-color: black;
}


.main {
    display: grid;
    place-content: center;
    /* place-items: center; */
    gap: 50px;
    color: white;
}

.control {
  display: grid;
  margin: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
}

.search-container {
  grid-column: 1/3;
}

#search {
  min-height: 25px;
  width: 250px;
}

.location-container{
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: end;
  grid-column: 1/3;
}

.name {
  font-size: 3rem;
}

.region {
  font-size: 0.8rem;
}

.country {
  font-size: 0.8rem;
  color: peachpuff;
}


.top {
    display: grid;
    place-content: center;
    gap: 25px;
}

.now {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}

.mid {
  background: white;
  color: black;
  display: grid;
  place-items: center;
}

.wind-img, .humidity-img, .air-img {
  width: 100px;
  height: 50px;
  display: flex;
}

.additional {
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  gap: 10px;
}

/* toggle button css */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  text-align: center;
  content: "°F";
  color: black;
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
   content: "°C";
   color: blue;

  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,uBAAuB;AACzB;;;AAGA;IACI,aAAa;IACb,qBAAqB;IACrB,yBAAyB;IACzB,SAAS;IACT,YAAY;AAChB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,kCAAkC;EAClC,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,SAAS;EACT,uBAAuB;EACvB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;;AAGA;IACI,aAAa;IACb,qBAAqB;IACrB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;AACb;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,aAAa;EACb,oCAAoC;EACpC,SAAS;AACX;;AAEA,sBAAsB;AACtB;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,YAAY;AACd;;AAEA,+BAA+B;AAC/B;EACE,UAAU;EACV,QAAQ;EACR,SAAS;AACX;;AAEA,eAAe;AACf;EACE,kBAAkB;EAClB,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,sBAAsB;EACtB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,SAAS;EACT,WAAW;EACX,uBAAuB;EACvB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;GACG,aAAa;GACb,WAAW;;EAEZ,mCAAmC;EACnC,+BAA+B;EAC/B,2BAA2B;AAC7B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: black;\n}\n\n\n.main {\n    display: grid;\n    place-content: center;\n    /* place-items: center; */\n    gap: 50px;\n    color: white;\n}\n\n.control {\n  display: grid;\n  margin: 10px;\n  grid-template-columns: 1fr 1fr 1fr;\n  place-items: center;\n}\n\n.search-container {\n  grid-column: 1/3;\n}\n\n#search {\n  min-height: 25px;\n  width: 250px;\n}\n\n.location-container{\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n  align-items: end;\n  grid-column: 1/3;\n}\n\n.name {\n  font-size: 3rem;\n}\n\n.region {\n  font-size: 0.8rem;\n}\n\n.country {\n  font-size: 0.8rem;\n  color: peachpuff;\n}\n\n\n.top {\n    display: grid;\n    place-content: center;\n    gap: 25px;\n}\n\n.now {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n}\n\n.mid {\n  background: white;\n  color: black;\n  display: grid;\n  place-items: center;\n}\n\n.wind-img, .humidity-img, .air-img {\n  width: 100px;\n  height: 50px;\n  display: flex;\n}\n\n.additional {\n  display: grid;\n  /* grid-template-columns: 1fr 1fr; */\n  gap: 10px;\n}\n\n/* toggle button css */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  text-align: center;\n  content: \"°F\";\n  color: black;\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196F3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n   content: \"°C\";\n   color: blue;\n\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/air-condition.js":
/*!**************************************!*\
  !*** ./src/modules/air-condition.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayAirQuality)
/* harmony export */ });
/* harmony import */ var _img_air_quality_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/air-quality.png */ "./src/modules/img/air-quality.png");


function displayAirQuality(obj) {
    return obj.then((data) => {
        // console.log(data.current)
        const main = document.querySelector(".additional")
        
        const airConditionDiv = document.createElement("div")
        const airConditionText = document.createElement("div")

        const airConditionImgDiv = document.createElement("div")
        

        

        const airQuality= data.current.air_quality["us-epa-index"]
        
      

        

        airConditionDiv.classList.add("air-condition")
        airConditionImgDiv.classList.add("air-img")

        airConditionDiv.textContent = `air quality:${airQuality}/10`
        // console.log(airQuality)
        
        const airImg = document.createElement("img")
        airImg.src = _img_air_quality_png__WEBPACK_IMPORTED_MODULE_0__

        airConditionImgDiv.appendChild(airImg)

        main.appendChild(airConditionImgDiv)

          
        for (let i = 0; i < 1; i+=1) {
            const airQualityTextDiv = document.createElement("div")
            if(airQuality === 1) {
                airQualityTextDiv.textContent = "Good air quality"
            }
            else if(airQuality === 2) {
                airQualityTextDiv.textContent = "Moderate air quality"
            }
            else if(airQuality === 3) {
                airQualityTextDiv.textContent = "Bad air quality"
            }
            else if(airQuality === 4) {
                airQualityTextDiv.textContent = "Unhealthy air quality"
            }
            else if(airQuality === 5) {
                airQualityTextDiv.textContent = "Very Unhealthy air quality"
            }
            else if(airQuality === 6) {
                airQualityTextDiv.textContent = "Hazardous air quality"
            }


        main.appendChild(airQualityTextDiv)
            
        }


        main.appendChild(airConditionText)
        main.appendChild(airConditionDiv)


    })
} 

/***/ }),

/***/ "./src/modules/cloud-condition.js":
/*!****************************************!*\
  !*** ./src/modules/cloud-condition.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayCondition)
/* harmony export */ });
function displayCondition(obj) {
    return obj.then((data) => {
    const main = document.querySelector(".cloud-container");
    const cloudConditionDiv = document.createElement("div");
    cloudConditionDiv.classList.add("cloud-condition");
    main.textContent = ""
    
        
        const {current} = data;
     
        const {condition} = current
       

       

        const conditionText = condition.text
        const conditionImg = condition.icon
        
        const div = document.createElement("div")
        div.classList.add("weather")
        const img = document.createElement("img")
      
        div.textContent = conditionText
        img.src = conditionImg


        cloudConditionDiv.appendChild(div)
        cloudConditionDiv.appendChild(img)

        main.appendChild(cloudConditionDiv)
    })
}


/***/ }),

/***/ "./src/modules/dom-controller.js":
/*!***************************************!*\
  !*** ./src/modules/dom-controller.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DomController)
/* harmony export */ });
/* harmony import */ var _weather_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-api */ "./src/modules/weather-api.js");
/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location */ "./src/modules/location.js");
/* harmony import */ var _cloud_condition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cloud-condition */ "./src/modules/cloud-condition.js");
/* harmony import */ var _temperature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./temperature */ "./src/modules/temperature.js");
/* harmony import */ var _wind_condition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wind-condition */ "./src/modules/wind-condition.js");
/* harmony import */ var _humidity_condition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./humidity-condition */ "./src/modules/humidity-condition.js");
/* harmony import */ var _air_condition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./air-condition */ "./src/modules/air-condition.js");








let weather;
function DomController() {
    const inputCheckbox = document.getElementById("switch");
    const inputSearch = document.getElementById("search");

    const searchEvent = () => {
        inputSearch.addEventListener("keypress", (e) => {
            if(e.key === "Enter") {
                weather = (0,_weather_api__WEBPACK_IMPORTED_MODULE_0__["default"])(inputSearch.value)
                ;(0,_location__WEBPACK_IMPORTED_MODULE_1__["default"])(weather)
                ;(0,_cloud_condition__WEBPACK_IMPORTED_MODULE_2__["default"])(weather)
                ;(0,_temperature__WEBPACK_IMPORTED_MODULE_3__["default"])(weather)
                ;(0,_wind_condition__WEBPACK_IMPORTED_MODULE_4__["default"])(weather)
                ;(0,_humidity_condition__WEBPACK_IMPORTED_MODULE_5__["default"])(weather)
                ;(0,_air_condition__WEBPACK_IMPORTED_MODULE_6__["default"])(weather)
                console.log(weather)
                inputSearch.value = ""
                inputCheckbox.checked = true
            }
        })
    };

    const checkboxEvent = () => {
        inputCheckbox.addEventListener("click", (e) => {
            if(weather !== undefined) {
                if(e.target.checked === false) {
                    console.log(e.target)
                    console.log(weather)    
                    ;(0,_temperature__WEBPACK_IMPORTED_MODULE_3__.displayTempF)(weather)
                } else {
                    (0,_temperature__WEBPACK_IMPORTED_MODULE_3__["default"])(weather)
                }
            }
        })
    };

    const onLoadEvent = () => {
        window.addEventListener("load", () => {
            weather = (0,_weather_api__WEBPACK_IMPORTED_MODULE_0__["default"])("london")

            ;(0,_location__WEBPACK_IMPORTED_MODULE_1__["default"])(weather)
            ;(0,_cloud_condition__WEBPACK_IMPORTED_MODULE_2__["default"])(weather)
            ;(0,_temperature__WEBPACK_IMPORTED_MODULE_3__["default"])(weather)
            ;(0,_wind_condition__WEBPACK_IMPORTED_MODULE_4__["default"])(weather)
            ;(0,_humidity_condition__WEBPACK_IMPORTED_MODULE_5__["default"])(weather)
            ;(0,_air_condition__WEBPACK_IMPORTED_MODULE_6__["default"])(weather)
        })
    }

    return {
        onLoadEvent,
        searchEvent,
        checkboxEvent,
    }
}

/***/ }),

/***/ "./src/modules/humidity-condition.js":
/*!*******************************************!*\
  !*** ./src/modules/humidity-condition.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayHumidity)
/* harmony export */ });
/* harmony import */ var _img_humidity_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/humidity.png */ "./src/modules/img/humidity.png");


function displayHumidity(obj) {
    return obj.then((data) => {
        const main = document.querySelector(".additional")
        const humidityConditionDiv = document.createElement("div")
        const humidityConditionImgDiv = document.createElement("div")
        
        
        const currentHumidity = data.current.humidity
        const avgHumidity = data.forecast.forecastday[0].day.avghumidity
        const rainChance = data.forecast.forecastday[0].day.daily_chance_of_rain

        humidityConditionDiv.classList.add("humidity-condition")
        humidityConditionImgDiv.classList.add("humidity-img")

        

        const currentHumidityDiv = document.createElement("div")
        const avgHumidityDiv = document.createElement("div")
        const rainChanceDiv = document.createElement("div")

        currentHumidityDiv.classList.add("current-humidity")
        avgHumidityDiv.classList.add("avg-humidity")
        rainChanceDiv.classList.add("rain-chance")

        currentHumidityDiv.textContent = `current humidity:${currentHumidity}%`
        avgHumidityDiv.textContent = `average humidity:${avgHumidity}%`
        rainChanceDiv.textContent = `chance of rain:${rainChance}%`

        const humidityImg = document.createElement("img")
        humidityImg.src = _img_humidity_png__WEBPACK_IMPORTED_MODULE_0__


        humidityConditionImgDiv.append(humidityImg)

        humidityConditionDiv.appendChild(currentHumidityDiv)
        humidityConditionDiv.appendChild(avgHumidityDiv)
        humidityConditionDiv.appendChild(rainChanceDiv)


        main.appendChild(humidityConditionImgDiv)
        main.appendChild(humidityConditionDiv)
    })
}

/***/ }),

/***/ "./src/modules/location.js":
/*!*********************************!*\
  !*** ./src/modules/location.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayLocation)
/* harmony export */ });
function displayLocation(obj) {
    return obj.then((data) => {
    const main = document.querySelector(".location-container");
    const locationConditionDiv = document.createElement("div");
    main.textContent = ""

    const {location} = data
        

    locationConditionDiv.classList.add("location-condition");

    // main.textContent = "";

     

    const dataKeys = Object.keys(location);
  
    const dataValues = Object.values(location);

    const nameData = dataKeys.splice(0, 3);

    const locationData = dataValues.splice(0, 3);
    

    for (let i = 0; i < locationData.length; i += 1) {
        const div = document.createElement("div");

        div.classList.add(`${nameData[i]}`);
        div.textContent = locationData[i];
       
        locationConditionDiv.appendChild(div);
    }
    main.appendChild(locationConditionDiv);
     })
  }
  

// export default async function displayLocation(obj) {
//     try {
//         const weatherObj = await obj;

//         const {location} = weatherObj

//         const main = document.querySelector(".top");
//         const locationConditionDiv = document.createElement("div");
    
//         locationConditionDiv.classList.add("location");
    
//         main.textContent = "";
    
         
    
//         const dataKeys = Object.keys(location);
      
//         const dataValues = Object.values(location);
    
//         const nameData = dataKeys.splice(0, 3);
    
//         const locationData = dataValues.splice(0, 3);
    
//         for (let i = 0; i < locationData.length; i += 1) {
//             const div = document.createElement("div");
    
//             div.classList.add(`${nameData[i]}`);
//             div.textContent = locationData[i];
    
//             locationConditionDiv.appendChild(div);
//         }
//         main.appendChild(locationConditionDiv);

//         // console.log(weatherObj)
//     } catch (err) {
//         console.log(err)
//     }
//   }



/***/ }),

/***/ "./src/modules/temperature.js":
/*!************************************!*\
  !*** ./src/modules/temperature.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayTemp),
/* harmony export */   displayTempF: () => (/* binding */ displayTempF)
/* harmony export */ });
function displayTemp(obj) {
    return obj.then((data) => {
        const main = document.querySelector(".temp-container");
        const tempDiv = document.createElement("div");
        tempDiv.classList.add("temperature")
        main.textContent = ""
        const {current} = data
        const {forecast} = data;
        // const {day} = forecast[0]
        // console.log(day)
        const {forecastday} = forecast
        const {day} = forecastday[0]

        const feelslikeC = current.feelslike_c
        const tempC = current.temp_c
        const avgtempC = day.avgtemp_c
        const maxtempC = day.maxtemp_c

        const currentTemp = [feelslikeC, tempC]
        const currentTempText = ["feelslike", "current"]
        const avgAndMaxTemp = [avgtempC, maxtempC]
        const avgAndMaxTempText = ["min", "max"]
        
        for(let i = 0; i < currentTemp.length; i += 1) {
            const div = document.createElement("div")
            div.textContent = `${currentTempText[i]}: ${currentTemp[i]}°C`
            div.classList.add(`${currentTempText[i]}`)
            
            tempDiv.appendChild(div)
        }

        for(let i = 0; i < avgAndMaxTemp.length; i += 1) {
            const div = document.createElement("div")
            div.textContent = `${avgAndMaxTempText[i]}: ${avgAndMaxTemp[i]}°C`
            div.classList.add(`${avgAndMaxTempText[i]}`)
            
            tempDiv.appendChild(div)
        }

        
        main.appendChild(tempDiv)    
    })
}

function displayTempF(obj) {
    return obj.then((data) => {
        const main = document.querySelector(".temp-container");
        const tempDiv = document.createElement("div");
        tempDiv.classList.add("temperature")
        main.textContent = ""
        const {current} = data
        const {forecast} = data;
        // const {day} = forecast[0]
        // console.log(day)
        const {forecastday} = forecast
        const {day} = forecastday[0]

        const feelslikeC = current.feelslike_f
        const tempC = current.temp_f
        const avgtempC = day.avgtemp_f
        const maxtempC = day.maxtemp_f

        const currentTemp = [feelslikeC, tempC]
        const currentTempText = ["feelslike", "current"]
        const avgAndMaxTemp = [avgtempC, maxtempC]
        const avgAndMaxTempText = ["min", "max"]
        
        for(let i = 0; i < currentTemp.length; i += 1) {
            const div = document.createElement("div")
            div.textContent = `${currentTempText[i]}: ${currentTemp[i]}°F`
            div.classList.add(`${currentTempText[i]}`)
            
            tempDiv.appendChild(div)
        }

        for(let i = 0; i < avgAndMaxTemp.length; i += 1) {
            const div = document.createElement("div")
            div.textContent = `${avgAndMaxTempText[i]}: ${avgAndMaxTemp[i]}°F`
            div.classList.add(`${avgAndMaxTempText[i]}`)
            
            tempDiv.appendChild(div)
        }


        main.appendChild(tempDiv)    
    })
}

/***/ }),

/***/ "./src/modules/weather-api.js":
/*!************************************!*\
  !*** ./src/modules/weather-api.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FetchWeather)
/* harmony export */ });
// import displayLocation from "./location";

async function FetchWeather(location) {
    try {
        const url = `https://api.weatherapi.com/v1/forecast.json&?key=7346fff7ad3741f498424126233009&aqi=yes&q=${location}`;
        const response = await fetch(url);
        const weatherData = await response.json()
        
        return weatherData
    } catch (err) {
        console.log(err)
    }
}



/***/ }),

/***/ "./src/modules/wind-condition.js":
/*!***************************************!*\
  !*** ./src/modules/wind-condition.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayWind)
/* harmony export */ });
/* harmony import */ var _img_wind_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/wind.png */ "./src/modules/img/wind.png");
// import humidity from "./img/humidity.png"


function displayWind(obj) {
    return obj.then((data) => {
        const main = document.querySelector(".additional")
        const windConditionDiv = document.createElement("div")
        const windConditionImgDiv = document.createElement("div")
        main.textContent = "";

        const currentWind = data.current.wind_kph
        const maxWind = data.forecast.forecastday[0].day.maxwind_kph

        

        windConditionImgDiv.classList.add("wind-img")

        windConditionDiv.classList.add("wind-condition")

      

        const currentWindDiv = document.createElement("div") 
        const maxWindDiv = document.createElement("div") 

        currentWindDiv.classList.add("current-wind")
        maxWindDiv.classList.add("max-wind")
        
        currentWindDiv.textContent = `Current: ${currentWind} kph`
        maxWindDiv.textContent = `Max: ${maxWind} kph`


        const windImg = document.createElement("img")
        windImg.src = _img_wind_png__WEBPACK_IMPORTED_MODULE_0__


        windConditionImgDiv.appendChild(windImg)
        windConditionDiv.appendChild(currentWindDiv)
        windConditionDiv.appendChild(maxWindDiv)


        main.appendChild(windConditionImgDiv)
        main.appendChild(windConditionDiv)


    })
}

/***/ }),

/***/ "./src/modules/img/air-quality.png":
/*!*****************************************!*\
  !*** ./src/modules/img/air-quality.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a23d97d3abd4b3f9dbd.png";

/***/ }),

/***/ "./src/modules/img/humidity.png":
/*!**************************************!*\
  !*** ./src/modules/img/humidity.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9777beec7be0cb354ce9.png";

/***/ }),

/***/ "./src/modules/img/wind.png":
/*!**********************************!*\
  !*** ./src/modules/img/wind.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "51b8a36c8909b77f0ead.png";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _modules_dom_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom-controller */ "./src/modules/dom-controller.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



(0,_modules_dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"])().onLoadEvent()
;(0,_modules_dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"])().searchEvent()
;(0,_modules_dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"])().checkboxEvent()



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGFBQWE7QUFDOUQseUNBQXlDLFNBQVM7OztBQUdsRDtBQUNBLHNCQUFzQiwwQ0FBSTs7O0FBRzFCO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7O0FDQW9EO0FBQy9COztBQUVyQixtRUFBYTtBQUNiLG9FQUFhO0FBQ2Isb0VBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2Fpci1jb25kaXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9jbG91ZC1jb25kaXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9kb20tY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2h1bWlkaXR5LWNvbmRpdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2xvY2F0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvdGVtcGVyYXR1cmUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyLWFwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3dpbmQtY29uZGl0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuXG4ubWFpbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gICAgLyogcGxhY2UtaXRlbXM6IGNlbnRlcjsgKi9cbiAgICBnYXA6IDUwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29udHJvbCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1hcmdpbjogMTBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlYXJjaC1jb250YWluZXIge1xuICBncmlkLWNvbHVtbjogMS8zO1xufVxuXG4jc2VhcmNoIHtcbiAgbWluLWhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4ubG9jYXRpb24tY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZW5kO1xuICBncmlkLWNvbHVtbjogMS8zO1xufVxuXG4ubmFtZSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLnJlZ2lvbiB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4uY291bnRyeSB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogcGVhY2hwdWZmO1xufVxuXG5cbi50b3Age1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMjVweDtcbn1cblxuLm5vdyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4ubWlkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbn1cblxuLndpbmQtaW1nLCAuaHVtaWRpdHktaW1nLCAuYWlyLWltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYWRkaXRpb25hbCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgKi9cbiAgZ2FwOiAxMHB4O1xufVxuXG4vKiB0b2dnbGUgYnV0dG9uIGNzcyAqL1xuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xuLnN3aXRjaCBpbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8qIFRoZSBzbGlkZXIgKi9cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgdHJhbnNpdGlvbjogLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb250ZW50OiBcIsKwRlwiO1xuICBjb2xvcjogYmxhY2s7XG4gIGhlaWdodDogMjZweDtcbiAgd2lkdGg6IDI2cHg7XG4gIGxlZnQ6IDRweDtcbiAgYm90dG9tOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgdHJhbnNpdGlvbjogLjRzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgIGNvbnRlbnQ6IFwiwrBDXCI7XG4gICBjb2xvcjogYmx1ZTtcblxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xufVxuXG4uc2xpZGVyLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcbn1cblxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFNBQVM7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxTQUFTO0FBQ1g7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBLGVBQWU7QUFDZjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0dBQ0csYUFBYTtHQUNiLFdBQVc7O0VBRVosbUNBQW1DO0VBQ25DLCtCQUErQjtFQUMvQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogcGxhY2UtaXRlbXM6IGNlbnRlcjsgKi9cXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb250cm9sIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBtYXJnaW46IDEwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuI3NlYXJjaCB7XFxuICBtaW4taGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4ubG9jYXRpb24tY29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGVuZDtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxufVxcblxcbi5uYW1lIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLnJlZ2lvbiB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLmNvdW50cnkge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogcGVhY2hwdWZmO1xcbn1cXG5cXG5cXG4udG9wIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDI1cHg7XFxufVxcblxcbi5ub3cge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLm1pZCB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ud2luZC1pbWcsIC5odW1pZGl0eS1pbWcsIC5haXItaW1nIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5hZGRpdGlvbmFsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7ICovXFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi8qIHRvZ2dsZSBidXR0b24gY3NzICovXFxuLnN3aXRjaCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogMzRweDtcXG59XFxuXFxuLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cXG4uc3dpdGNoIGlucHV0IHtcXG4gIG9wYWNpdHk6IDA7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyogVGhlIHNsaWRlciAqL1xcbi5zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG4uc2xpZGVyOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb250ZW50OiBcXFwiwrBGXFxcIjtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGhlaWdodDogMjZweDtcXG4gIHdpZHRoOiAyNnB4O1xcbiAgbGVmdDogNHB4O1xcbiAgYm90dG9tOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgIGNvbnRlbnQ6IFxcXCLCsENcXFwiO1xcbiAgIGNvbG9yOiBibHVlO1xcblxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbn1cXG5cXG4uc2xpZGVyLnJvdW5kIHtcXG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxufVxcblxcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBhaXIgZnJvbSBcIi4vaW1nL2Fpci1xdWFsaXR5LnBuZ1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlBaXJRdWFsaXR5KG9iaikge1xuICAgIHJldHVybiBvYmoudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLmN1cnJlbnQpXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZGl0aW9uYWxcIilcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGFpckNvbmRpdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29uc3QgYWlyQ29uZGl0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblxuICAgICAgICBjb25zdCBhaXJDb25kaXRpb25JbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIFxuXG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IGFpclF1YWxpdHk9IGRhdGEuY3VycmVudC5haXJfcXVhbGl0eVtcInVzLWVwYS1pbmRleFwiXVxuICAgICAgICBcbiAgICAgIFxuXG4gICAgICAgIFxuXG4gICAgICAgIGFpckNvbmRpdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwiYWlyLWNvbmRpdGlvblwiKVxuICAgICAgICBhaXJDb25kaXRpb25JbWdEaXYuY2xhc3NMaXN0LmFkZChcImFpci1pbWdcIilcblxuICAgICAgICBhaXJDb25kaXRpb25EaXYudGV4dENvbnRlbnQgPSBgYWlyIHF1YWxpdHk6JHthaXJRdWFsaXR5fS8xMGBcbiAgICAgICAgLy8gY29uc29sZS5sb2coYWlyUXVhbGl0eSlcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGFpckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICAgICAgYWlySW1nLnNyYyA9IGFpclxuXG4gICAgICAgIGFpckNvbmRpdGlvbkltZ0Rpdi5hcHBlbmRDaGlsZChhaXJJbWcpXG5cbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChhaXJDb25kaXRpb25JbWdEaXYpXG5cbiAgICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxOyBpKz0xKSB7XG4gICAgICAgICAgICBjb25zdCBhaXJRdWFsaXR5VGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgIGlmKGFpclF1YWxpdHkgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBhaXJRdWFsaXR5VGV4dERpdi50ZXh0Q29udGVudCA9IFwiR29vZCBhaXIgcXVhbGl0eVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGFpclF1YWxpdHkgPT09IDIpIHtcbiAgICAgICAgICAgICAgICBhaXJRdWFsaXR5VGV4dERpdi50ZXh0Q29udGVudCA9IFwiTW9kZXJhdGUgYWlyIHF1YWxpdHlcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihhaXJRdWFsaXR5ID09PSAzKSB7XG4gICAgICAgICAgICAgICAgYWlyUXVhbGl0eVRleHREaXYudGV4dENvbnRlbnQgPSBcIkJhZCBhaXIgcXVhbGl0eVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGFpclF1YWxpdHkgPT09IDQpIHtcbiAgICAgICAgICAgICAgICBhaXJRdWFsaXR5VGV4dERpdi50ZXh0Q29udGVudCA9IFwiVW5oZWFsdGh5IGFpciBxdWFsaXR5XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoYWlyUXVhbGl0eSA9PT0gNSkge1xuICAgICAgICAgICAgICAgIGFpclF1YWxpdHlUZXh0RGl2LnRleHRDb250ZW50ID0gXCJWZXJ5IFVuaGVhbHRoeSBhaXIgcXVhbGl0eVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGFpclF1YWxpdHkgPT09IDYpIHtcbiAgICAgICAgICAgICAgICBhaXJRdWFsaXR5VGV4dERpdi50ZXh0Q29udGVudCA9IFwiSGF6YXJkb3VzIGFpciBxdWFsaXR5XCJcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoYWlyUXVhbGl0eVRleHREaXYpXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG5cbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChhaXJDb25kaXRpb25UZXh0KVxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGFpckNvbmRpdGlvbkRpdilcblxuXG4gICAgfSlcbn0gIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUNvbmRpdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqLnRoZW4oKGRhdGEpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG91ZC1jb250YWluZXJcIik7XG4gICAgY29uc3QgY2xvdWRDb25kaXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNsb3VkQ29uZGl0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJjbG91ZC1jb25kaXRpb25cIik7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCJcbiAgICBcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHtjdXJyZW50fSA9IGRhdGE7XG4gICAgIFxuICAgICAgICBjb25zdCB7Y29uZGl0aW9ufSA9IGN1cnJlbnRcbiAgICAgICBcblxuICAgICAgIFxuXG4gICAgICAgIGNvbnN0IGNvbmRpdGlvblRleHQgPSBjb25kaXRpb24udGV4dFxuICAgICAgICBjb25zdCBjb25kaXRpb25JbWcgPSBjb25kaXRpb24uaWNvblxuICAgICAgICBcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcIndlYXRoZXJcIilcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgXG4gICAgICAgIGRpdi50ZXh0Q29udGVudCA9IGNvbmRpdGlvblRleHRcbiAgICAgICAgaW1nLnNyYyA9IGNvbmRpdGlvbkltZ1xuXG5cbiAgICAgICAgY2xvdWRDb25kaXRpb25EaXYuYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgICBjbG91ZENvbmRpdGlvbkRpdi5hcHBlbmRDaGlsZChpbWcpXG5cbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjbG91ZENvbmRpdGlvbkRpdilcbiAgICB9KVxufVxuIiwiaW1wb3J0IEZldGNoV2VhdGhlciBmcm9tIFwiLi93ZWF0aGVyLWFwaVwiO1xuaW1wb3J0IGRpc3BsYXlMb2NhdGlvbiBmcm9tIFwiLi9sb2NhdGlvblwiO1xuaW1wb3J0IGRpc3BsYXlDb25kaXRpb24gZnJvbSBcIi4vY2xvdWQtY29uZGl0aW9uXCI7XG5pbXBvcnQgZGlzcGxheVRlbXAsIHtkaXNwbGF5VGVtcEZ9IGZyb20gXCIuL3RlbXBlcmF0dXJlXCI7XG5pbXBvcnQgZGlzcGxheVdpbmQgZnJvbSBcIi4vd2luZC1jb25kaXRpb25cIjtcbmltcG9ydCBkaXNwbGF5SHVtaWRpdHkgZnJvbSBcIi4vaHVtaWRpdHktY29uZGl0aW9uXCI7XG5pbXBvcnQgZGlzcGxheUFpclF1YWxpdHkgZnJvbSBcIi4vYWlyLWNvbmRpdGlvblwiO1xuXG5sZXQgd2VhdGhlcjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvbUNvbnRyb2xsZXIoKSB7XG4gICAgY29uc3QgaW5wdXRDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dpdGNoXCIpO1xuICAgIGNvbnN0IGlucHV0U2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hcIik7XG5cbiAgICBjb25zdCBzZWFyY2hFdmVudCA9ICgpID0+IHtcbiAgICAgICAgaW5wdXRTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZihlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICAgICAgd2VhdGhlciA9IEZldGNoV2VhdGhlcihpbnB1dFNlYXJjaC52YWx1ZSlcbiAgICAgICAgICAgICAgICBkaXNwbGF5TG9jYXRpb24od2VhdGhlcilcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q29uZGl0aW9uKHdlYXRoZXIpXG4gICAgICAgICAgICAgICAgZGlzcGxheVRlbXAod2VhdGhlcilcbiAgICAgICAgICAgICAgICBkaXNwbGF5V2luZCh3ZWF0aGVyKVxuICAgICAgICAgICAgICAgIGRpc3BsYXlIdW1pZGl0eSh3ZWF0aGVyKVxuICAgICAgICAgICAgICAgIGRpc3BsYXlBaXJRdWFsaXR5KHdlYXRoZXIpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cod2VhdGhlcilcbiAgICAgICAgICAgICAgICBpbnB1dFNlYXJjaC52YWx1ZSA9IFwiXCJcbiAgICAgICAgICAgICAgICBpbnB1dENoZWNrYm94LmNoZWNrZWQgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIGNvbnN0IGNoZWNrYm94RXZlbnQgPSAoKSA9PiB7XG4gICAgICAgIGlucHV0Q2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZih3ZWF0aGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZihlLnRhcmdldC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cod2VhdGhlcikgICAgXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUZW1wRih3ZWF0aGVyKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUZW1wKHdlYXRoZXIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH07XG5cbiAgICBjb25zdCBvbkxvYWRFdmVudCA9ICgpID0+IHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICAgICAgICAgIHdlYXRoZXIgPSBGZXRjaFdlYXRoZXIoXCJsb25kb25cIilcblxuICAgICAgICAgICAgZGlzcGxheUxvY2F0aW9uKHdlYXRoZXIpXG4gICAgICAgICAgICBkaXNwbGF5Q29uZGl0aW9uKHdlYXRoZXIpXG4gICAgICAgICAgICBkaXNwbGF5VGVtcCh3ZWF0aGVyKVxuICAgICAgICAgICAgZGlzcGxheVdpbmQod2VhdGhlcilcbiAgICAgICAgICAgIGRpc3BsYXlIdW1pZGl0eSh3ZWF0aGVyKVxuICAgICAgICAgICAgZGlzcGxheUFpclF1YWxpdHkod2VhdGhlcilcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvbkxvYWRFdmVudCxcbiAgICAgICAgc2VhcmNoRXZlbnQsXG4gICAgICAgIGNoZWNrYm94RXZlbnQsXG4gICAgfVxufSIsImltcG9ydCBodW1pZGl0eSBmcm9tIFwiLi9pbWcvaHVtaWRpdHkucG5nXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUh1bWlkaXR5KG9iaikge1xuICAgIHJldHVybiBvYmoudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRpdGlvbmFsXCIpXG4gICAgICAgIGNvbnN0IGh1bWlkaXR5Q29uZGl0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCBodW1pZGl0eUNvbmRpdGlvbkltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBjb25zdCBjdXJyZW50SHVtaWRpdHkgPSBkYXRhLmN1cnJlbnQuaHVtaWRpdHlcbiAgICAgICAgY29uc3QgYXZnSHVtaWRpdHkgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5hdmdodW1pZGl0eVxuICAgICAgICBjb25zdCByYWluQ2hhbmNlID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW5cblxuICAgICAgICBodW1pZGl0eUNvbmRpdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwiaHVtaWRpdHktY29uZGl0aW9uXCIpXG4gICAgICAgIGh1bWlkaXR5Q29uZGl0aW9uSW1nRGl2LmNsYXNzTGlzdC5hZGQoXCJodW1pZGl0eS1pbWdcIilcblxuICAgICAgICBcblxuICAgICAgICBjb25zdCBjdXJyZW50SHVtaWRpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNvbnN0IGF2Z0h1bWlkaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCByYWluQ2hhbmNlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXG4gICAgICAgIGN1cnJlbnRIdW1pZGl0eURpdi5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC1odW1pZGl0eVwiKVxuICAgICAgICBhdmdIdW1pZGl0eURpdi5jbGFzc0xpc3QuYWRkKFwiYXZnLWh1bWlkaXR5XCIpXG4gICAgICAgIHJhaW5DaGFuY2VEaXYuY2xhc3NMaXN0LmFkZChcInJhaW4tY2hhbmNlXCIpXG5cbiAgICAgICAgY3VycmVudEh1bWlkaXR5RGl2LnRleHRDb250ZW50ID0gYGN1cnJlbnQgaHVtaWRpdHk6JHtjdXJyZW50SHVtaWRpdHl9JWBcbiAgICAgICAgYXZnSHVtaWRpdHlEaXYudGV4dENvbnRlbnQgPSBgYXZlcmFnZSBodW1pZGl0eToke2F2Z0h1bWlkaXR5fSVgXG4gICAgICAgIHJhaW5DaGFuY2VEaXYudGV4dENvbnRlbnQgPSBgY2hhbmNlIG9mIHJhaW46JHtyYWluQ2hhbmNlfSVgXG5cbiAgICAgICAgY29uc3QgaHVtaWRpdHlJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgICAgIGh1bWlkaXR5SW1nLnNyYyA9IGh1bWlkaXR5XG5cblxuICAgICAgICBodW1pZGl0eUNvbmRpdGlvbkltZ0Rpdi5hcHBlbmQoaHVtaWRpdHlJbWcpXG5cbiAgICAgICAgaHVtaWRpdHlDb25kaXRpb25EaXYuYXBwZW5kQ2hpbGQoY3VycmVudEh1bWlkaXR5RGl2KVxuICAgICAgICBodW1pZGl0eUNvbmRpdGlvbkRpdi5hcHBlbmRDaGlsZChhdmdIdW1pZGl0eURpdilcbiAgICAgICAgaHVtaWRpdHlDb25kaXRpb25EaXYuYXBwZW5kQ2hpbGQocmFpbkNoYW5jZURpdilcblxuXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoaHVtaWRpdHlDb25kaXRpb25JbWdEaXYpXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoaHVtaWRpdHlDb25kaXRpb25EaXYpXG4gICAgfSlcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5TG9jYXRpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iai50aGVuKChkYXRhKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb24tY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGxvY2F0aW9uQ29uZGl0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIlxuXG4gICAgY29uc3Qge2xvY2F0aW9ufSA9IGRhdGFcbiAgICAgICAgXG5cbiAgICBsb2NhdGlvbkNvbmRpdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwibG9jYXRpb24tY29uZGl0aW9uXCIpO1xuXG4gICAgLy8gbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICAgXG5cbiAgICBjb25zdCBkYXRhS2V5cyA9IE9iamVjdC5rZXlzKGxvY2F0aW9uKTtcbiAgXG4gICAgY29uc3QgZGF0YVZhbHVlcyA9IE9iamVjdC52YWx1ZXMobG9jYXRpb24pO1xuXG4gICAgY29uc3QgbmFtZURhdGEgPSBkYXRhS2V5cy5zcGxpY2UoMCwgMyk7XG5cbiAgICBjb25zdCBsb2NhdGlvbkRhdGEgPSBkYXRhVmFsdWVzLnNwbGljZSgwLCAzKTtcbiAgICBcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYXRpb25EYXRhLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoYCR7bmFtZURhdGFbaV19YCk7XG4gICAgICAgIGRpdi50ZXh0Q29udGVudCA9IGxvY2F0aW9uRGF0YVtpXTtcbiAgICAgICBcbiAgICAgICAgbG9jYXRpb25Db25kaXRpb25EaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9XG4gICAgbWFpbi5hcHBlbmRDaGlsZChsb2NhdGlvbkNvbmRpdGlvbkRpdik7XG4gICAgIH0pXG4gIH1cbiAgXG5cbi8vIGV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlMb2NhdGlvbihvYmopIHtcbi8vICAgICB0cnkge1xuLy8gICAgICAgICBjb25zdCB3ZWF0aGVyT2JqID0gYXdhaXQgb2JqO1xuXG4vLyAgICAgICAgIGNvbnN0IHtsb2NhdGlvbn0gPSB3ZWF0aGVyT2JqXG5cbi8vICAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9wXCIpO1xuLy8gICAgICAgICBjb25zdCBsb2NhdGlvbkNvbmRpdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgXG4vLyAgICAgICAgIGxvY2F0aW9uQ29uZGl0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvblwiKTtcbiAgICBcbi8vICAgICAgICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgXG4gICAgICAgICBcbiAgICBcbi8vICAgICAgICAgY29uc3QgZGF0YUtleXMgPSBPYmplY3Qua2V5cyhsb2NhdGlvbik7XG4gICAgICBcbi8vICAgICAgICAgY29uc3QgZGF0YVZhbHVlcyA9IE9iamVjdC52YWx1ZXMobG9jYXRpb24pO1xuICAgIFxuLy8gICAgICAgICBjb25zdCBuYW1lRGF0YSA9IGRhdGFLZXlzLnNwbGljZSgwLCAzKTtcbiAgICBcbi8vICAgICAgICAgY29uc3QgbG9jYXRpb25EYXRhID0gZGF0YVZhbHVlcy5zcGxpY2UoMCwgMyk7XG4gICAgXG4vLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYXRpb25EYXRhLmxlbmd0aDsgaSArPSAxKSB7XG4vLyAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIFxuLy8gICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoYCR7bmFtZURhdGFbaV19YCk7XG4vLyAgICAgICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBsb2NhdGlvbkRhdGFbaV07XG4gICAgXG4vLyAgICAgICAgICAgICBsb2NhdGlvbkNvbmRpdGlvbkRpdi5hcHBlbmRDaGlsZChkaXYpO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQobG9jYXRpb25Db25kaXRpb25EaXYpO1xuXG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKHdlYXRoZXJPYmopXG4vLyAgICAgfSBjYXRjaCAoZXJyKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbi8vICAgICB9XG4vLyAgIH1cblxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVRlbXAob2JqKSB7XG4gICAgcmV0dXJuIG9iai50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGVtcERpdi5jbGFzc0xpc3QuYWRkKFwidGVtcGVyYXR1cmVcIilcbiAgICAgICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCJcbiAgICAgICAgY29uc3Qge2N1cnJlbnR9ID0gZGF0YVxuICAgICAgICBjb25zdCB7Zm9yZWNhc3R9ID0gZGF0YTtcbiAgICAgICAgLy8gY29uc3Qge2RheX0gPSBmb3JlY2FzdFswXVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXkpXG4gICAgICAgIGNvbnN0IHtmb3JlY2FzdGRheX0gPSBmb3JlY2FzdFxuICAgICAgICBjb25zdCB7ZGF5fSA9IGZvcmVjYXN0ZGF5WzBdXG5cbiAgICAgICAgY29uc3QgZmVlbHNsaWtlQyA9IGN1cnJlbnQuZmVlbHNsaWtlX2NcbiAgICAgICAgY29uc3QgdGVtcEMgPSBjdXJyZW50LnRlbXBfY1xuICAgICAgICBjb25zdCBhdmd0ZW1wQyA9IGRheS5hdmd0ZW1wX2NcbiAgICAgICAgY29uc3QgbWF4dGVtcEMgPSBkYXkubWF4dGVtcF9jXG5cbiAgICAgICAgY29uc3QgY3VycmVudFRlbXAgPSBbZmVlbHNsaWtlQywgdGVtcENdXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUZW1wVGV4dCA9IFtcImZlZWxzbGlrZVwiLCBcImN1cnJlbnRcIl1cbiAgICAgICAgY29uc3QgYXZnQW5kTWF4VGVtcCA9IFthdmd0ZW1wQywgbWF4dGVtcENdXG4gICAgICAgIGNvbnN0IGF2Z0FuZE1heFRlbXBUZXh0ID0gW1wibWluXCIsIFwibWF4XCJdXG4gICAgICAgIFxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY3VycmVudFRlbXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgIGRpdi50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRUZW1wVGV4dFtpXX06ICR7Y3VycmVudFRlbXBbaV19wrBDYFxuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoYCR7Y3VycmVudFRlbXBUZXh0W2ldfWApXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRlbXBEaXYuYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGF2Z0FuZE1heFRlbXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgIGRpdi50ZXh0Q29udGVudCA9IGAke2F2Z0FuZE1heFRlbXBUZXh0W2ldfTogJHthdmdBbmRNYXhUZW1wW2ldfcKwQ2BcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGAke2F2Z0FuZE1heFRlbXBUZXh0W2ldfWApXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRlbXBEaXYuYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQodGVtcERpdikgICAgXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlUZW1wRihvYmopIHtcbiAgICByZXR1cm4gb2JqLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcC1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0ZW1wRGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZW1wZXJhdHVyZVwiKVxuICAgICAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIlxuICAgICAgICBjb25zdCB7Y3VycmVudH0gPSBkYXRhXG4gICAgICAgIGNvbnN0IHtmb3JlY2FzdH0gPSBkYXRhO1xuICAgICAgICAvLyBjb25zdCB7ZGF5fSA9IGZvcmVjYXN0WzBdXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRheSlcbiAgICAgICAgY29uc3Qge2ZvcmVjYXN0ZGF5fSA9IGZvcmVjYXN0XG4gICAgICAgIGNvbnN0IHtkYXl9ID0gZm9yZWNhc3RkYXlbMF1cblxuICAgICAgICBjb25zdCBmZWVsc2xpa2VDID0gY3VycmVudC5mZWVsc2xpa2VfZlxuICAgICAgICBjb25zdCB0ZW1wQyA9IGN1cnJlbnQudGVtcF9mXG4gICAgICAgIGNvbnN0IGF2Z3RlbXBDID0gZGF5LmF2Z3RlbXBfZlxuICAgICAgICBjb25zdCBtYXh0ZW1wQyA9IGRheS5tYXh0ZW1wX2ZcblxuICAgICAgICBjb25zdCBjdXJyZW50VGVtcCA9IFtmZWVsc2xpa2VDLCB0ZW1wQ11cbiAgICAgICAgY29uc3QgY3VycmVudFRlbXBUZXh0ID0gW1wiZmVlbHNsaWtlXCIsIFwiY3VycmVudFwiXVxuICAgICAgICBjb25zdCBhdmdBbmRNYXhUZW1wID0gW2F2Z3RlbXBDLCBtYXh0ZW1wQ11cbiAgICAgICAgY29uc3QgYXZnQW5kTWF4VGVtcFRleHQgPSBbXCJtaW5cIiwgXCJtYXhcIl1cbiAgICAgICAgXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjdXJyZW50VGVtcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgZGl2LnRleHRDb250ZW50ID0gYCR7Y3VycmVudFRlbXBUZXh0W2ldfTogJHtjdXJyZW50VGVtcFtpXX3CsEZgXG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChgJHtjdXJyZW50VGVtcFRleHRbaV19YClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGVtcERpdi5hcHBlbmRDaGlsZChkaXYpXG4gICAgICAgIH1cblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXZnQW5kTWF4VGVtcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgZGl2LnRleHRDb250ZW50ID0gYCR7YXZnQW5kTWF4VGVtcFRleHRbaV19OiAke2F2Z0FuZE1heFRlbXBbaV19wrBGYFxuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoYCR7YXZnQW5kTWF4VGVtcFRleHRbaV19YClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGVtcERpdi5hcHBlbmRDaGlsZChkaXYpXG4gICAgICAgIH1cblxuXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQodGVtcERpdikgICAgXG4gICAgfSlcbn0iLCIvLyBpbXBvcnQgZGlzcGxheUxvY2F0aW9uIGZyb20gXCIuL2xvY2F0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIEZldGNoV2VhdGhlcihsb2NhdGlvbikge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uJj9rZXk9NzM0NmZmZjdhZDM3NDFmNDk4NDI0MTI2MjMzMDA5JmFxaT15ZXMmcT0ke2xvY2F0aW9ufWA7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB3ZWF0aGVyRGF0YVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfVxufVxuXG4iLCIvLyBpbXBvcnQgaHVtaWRpdHkgZnJvbSBcIi4vaW1nL2h1bWlkaXR5LnBuZ1wiXG5pbXBvcnQgd2luZCBmcm9tIFwiLi9pbWcvd2luZC5wbmdcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5V2luZChvYmopIHtcbiAgICByZXR1cm4gb2JqLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkaXRpb25hbFwiKVxuICAgICAgICBjb25zdCB3aW5kQ29uZGl0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCB3aW5kQ29uZGl0aW9uSW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgICAgICBjb25zdCBjdXJyZW50V2luZCA9IGRhdGEuY3VycmVudC53aW5kX2twaFxuICAgICAgICBjb25zdCBtYXhXaW5kID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4d2luZF9rcGhcblxuICAgICAgICBcblxuICAgICAgICB3aW5kQ29uZGl0aW9uSW1nRGl2LmNsYXNzTGlzdC5hZGQoXCJ3aW5kLWltZ1wiKVxuXG4gICAgICAgIHdpbmRDb25kaXRpb25EaXYuY2xhc3NMaXN0LmFkZChcIndpbmQtY29uZGl0aW9uXCIpXG5cbiAgICAgIFxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRXaW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSBcbiAgICAgICAgY29uc3QgbWF4V2luZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgXG5cbiAgICAgICAgY3VycmVudFdpbmREaXYuY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtd2luZFwiKVxuICAgICAgICBtYXhXaW5kRGl2LmNsYXNzTGlzdC5hZGQoXCJtYXgtd2luZFwiKVxuICAgICAgICBcbiAgICAgICAgY3VycmVudFdpbmREaXYudGV4dENvbnRlbnQgPSBgQ3VycmVudDogJHtjdXJyZW50V2luZH0ga3BoYFxuICAgICAgICBtYXhXaW5kRGl2LnRleHRDb250ZW50ID0gYE1heDogJHttYXhXaW5kfSBrcGhgXG5cblxuICAgICAgICBjb25zdCB3aW5kSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgICB3aW5kSW1nLnNyYyA9IHdpbmRcblxuXG4gICAgICAgIHdpbmRDb25kaXRpb25JbWdEaXYuYXBwZW5kQ2hpbGQod2luZEltZylcbiAgICAgICAgd2luZENvbmRpdGlvbkRpdi5hcHBlbmRDaGlsZChjdXJyZW50V2luZERpdilcbiAgICAgICAgd2luZENvbmRpdGlvbkRpdi5hcHBlbmRDaGlsZChtYXhXaW5kRGl2KVxuXG5cbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh3aW5kQ29uZGl0aW9uSW1nRGl2KVxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHdpbmRDb25kaXRpb25EaXYpXG5cblxuICAgIH0pXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgRG9tQ29udHJvbGxlciBmcm9tIFwiLi9tb2R1bGVzL2RvbS1jb250cm9sbGVyXCJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbkRvbUNvbnRyb2xsZXIoKS5vbkxvYWRFdmVudCgpXG5Eb21Db250cm9sbGVyKCkuc2VhcmNoRXZlbnQoKVxuRG9tQ29udHJvbGxlcigpLmNoZWNrYm94RXZlbnQoKVxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==