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
  border-radius: 10px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,uBAAuB;AACzB;;;AAGA;IACI,aAAa;IACb,qBAAqB;IACrB,yBAAyB;IACzB,SAAS;IACT,YAAY;AAChB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,kCAAkC;EAClC,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,SAAS;EACT,uBAAuB;EACvB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;;AAGA;IACI,aAAa;IACb,qBAAqB;IACrB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;AACb;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,aAAa;EACb,oCAAoC;EACpC,SAAS;AACX;;AAEA,sBAAsB;AACtB;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,YAAY;AACd;;AAEA,+BAA+B;AAC/B;EACE,UAAU;EACV,QAAQ;EACR,SAAS;AACX;;AAEA,eAAe;AACf;EACE,kBAAkB;EAClB,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,sBAAsB;EACtB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,SAAS;EACT,WAAW;EACX,uBAAuB;EACvB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;GACG,aAAa;GACb,WAAW;;EAEZ,mCAAmC;EACnC,+BAA+B;EAC/B,2BAA2B;AAC7B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: black;\n}\n\n\n.main {\n    display: grid;\n    place-content: center;\n    /* place-items: center; */\n    gap: 50px;\n    color: white;\n}\n\n.control {\n  display: grid;\n  margin: 10px;\n  grid-template-columns: 1fr 1fr 1fr;\n  place-items: center;\n}\n\n.search-container {\n  grid-column: 1/3;\n}\n\n#search {\n  min-height: 25px;\n  width: 250px;\n}\n\n.location-container{\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n  align-items: end;\n  grid-column: 1/3;\n}\n\n.name {\n  font-size: 3rem;\n}\n\n.region {\n  font-size: 0.8rem;\n}\n\n.country {\n  font-size: 0.8rem;\n  color: peachpuff;\n}\n\n\n.top {\n    display: grid;\n    place-content: center;\n    gap: 25px;\n}\n\n.now {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n}\n\n.mid {\n  background: white;\n  color: black;\n  display: grid;\n  place-items: center;\n  border-radius: 10px;\n}\n\n.wind-img, .humidity-img, .air-img {\n  width: 100px;\n  height: 50px;\n  display: flex;\n}\n\n.additional {\n  display: grid;\n  /* grid-template-columns: 1fr 1fr; */\n  gap: 10px;\n}\n\n/* toggle button css */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider:before {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  content: \"°F\";\n  color: black;\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196F3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n   content: \"°C\";\n   color: blue;\n\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}"],"sourceRoot":""}]);
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
        // const airConditonRating = document.createElement("div")

        const airConditionImgDiv = document.createElement("div")
        

        

        const airQuality= data.current.air_quality["us-epa-index"]
        
      

        

        airConditionDiv.classList.add("air-condition")
        airConditionText.classList.add("air-quality")
        airConditionImgDiv.classList.add("air-img")

        airConditionText.textContent = `air quality: ${airQuality}/10`
        // console.log(airQuality)
        
        const airImg = document.createElement("img")
        airImg.src = _img_air_quality_png__WEBPACK_IMPORTED_MODULE_0__

        airConditionImgDiv.appendChild(airImg)

        main.appendChild(airConditionImgDiv)

          
        for (let i = 0; i < 1; i+=1) {
            const airQualityTextDiv = document.createElement("div")
            airQualityTextDiv.classList.add("air-quality")
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


            airConditionDiv.appendChild(airQualityTextDiv)
            
        }


        airConditionDiv.appendChild(airConditionText)
        main.appendChild(airConditionDiv)


    })
    .catch((err) => console.log(err));

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
    .catch((err) => console.log(err));

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
/* harmony import */ var _switch_temp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./switch-temp */ "./src/modules/switch-temp.js");









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
             

            
                inputSearch.value = ""
                inputCheckbox.checked = true
            }
        })
    };

    const checkboxEvent = () => {
        inputCheckbox.addEventListener("click", (e) => {
            if(e.target.checked === false) {
                (0,_switch_temp__WEBPACK_IMPORTED_MODULE_7__["default"])(weather,e)
               
            }
            else if(e.target.checked !== false) {
                (0,_switch_temp__WEBPACK_IMPORTED_MODULE_7__["default"])(weather,e)
              
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

        currentHumidityDiv.textContent = `current humidity: ${currentHumidity}%`
        avgHumidityDiv.textContent = `average humidity: ${avgHumidity}%`
        rainChanceDiv.textContent = `chance of rain: ${rainChance}%`

        const humidityImg = document.createElement("img")
        humidityImg.src = _img_humidity_png__WEBPACK_IMPORTED_MODULE_0__


        humidityConditionImgDiv.append(humidityImg)

        humidityConditionDiv.appendChild(currentHumidityDiv)
        humidityConditionDiv.appendChild(avgHumidityDiv)
        humidityConditionDiv.appendChild(rainChanceDiv)


        main.appendChild(humidityConditionImgDiv)
        main.appendChild(humidityConditionDiv)
    })
    .catch((err) => console.log(err));

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
     .catch((err) => console.log(err));
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

/***/ "./src/modules/switch-temp.js":
/*!************************************!*\
  !*** ./src/modules/switch-temp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ switchTemp)
/* harmony export */ });
function switchTemp(obj, e) {
    return obj.then((data) => {
     
        const feelsLikeTemp = document.querySelector(".feelslike");
        const currentTemp = document.querySelector(".current");
        const minTemp = document.querySelector(".min")
        const maxTemp = document.querySelector(".max")

        const {current} = data
        const {forecast} = data;
     
        const {forecastday} = forecast
        const {day} = forecastday[0]

        const feelslikeC = current.feelslike_c
        const tempC = current.temp_c
        const avgtempC = day.avgtemp_c
        const maxtempC = day.maxtemp_c

        const feelslikeF = current.feelslike_f
        const tempF = current.temp_f
        const avgtempF = day.avgtemp_f
        const maxtempF = day.maxtemp_f

        if(e.target.checked === false) {
          
            feelsLikeTemp.textContent = `feelslike: ${feelslikeF}°F`
            currentTemp.textContent = `current: ${tempF}°F`
            minTemp.textContent = `min: ${avgtempF}°F`
            maxTemp.textContent = `max: ${ maxtempF}°F`
           
           
        } else {
            console.log("world")
            feelsLikeTemp.textContent = `feelslike: ${feelslikeC}°C`
            currentTemp.textContent = `current: ${tempC}°C`
            minTemp.textContent = `min: ${avgtempC}°C`
            maxTemp.textContent = `max: ${maxtempC}°C`
        }

    })
    .catch((err) => console.log(err))
}

/***/ }),

/***/ "./src/modules/temperature.js":
/*!************************************!*\
  !*** ./src/modules/temperature.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayTemp)
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
    .catch((err) => console.log(err));
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
        if(response.status === 200) {
            const weatherData = await response.json()
        
            return weatherData
        } 
        const errorDiv = document.querySelector(".error-container")
        const errorH1 = document.createElement("h1")

        const error = new Error(response.status)
        error.response = response

        errorDiv.textContent = ""

        errorH1.textContent = `${error} bad request`
        console.log(response.statusText)

        errorDiv.appendChild(errorH1)
        throw(error)
        
        
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
    .catch((err) => console.log(err));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvYWlyLWNvbmRpdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2Nsb3VkLWNvbmRpdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2RvbS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvaHVtaWRpdHktY29uZGl0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvbG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9zd2l0Y2gtdGVtcC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3RlbXBlcmF0dXJlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvd2VhdGhlci1hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93aW5kLWNvbmRpdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cblxuLm1haW4ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICAgIC8qIHBsYWNlLWl0ZW1zOiBjZW50ZXI7ICovXG4gICAgZ2FwOiA1MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRyb2wge1xuICBkaXNwbGF5OiBncmlkO1xuICBtYXJnaW46IDEwcHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWFyY2gtY29udGFpbmVyIHtcbiAgZ3JpZC1jb2x1bW46IDEvMztcbn1cblxuI3NlYXJjaCB7XG4gIG1pbi1oZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLmxvY2F0aW9uLWNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGVuZDtcbiAgZ3JpZC1jb2x1bW46IDEvMztcbn1cblxuLm5hbWUge1xuICBmb250LXNpemU6IDNyZW07XG59XG5cbi5yZWdpb24ge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLmNvdW50cnkge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6IHBlYWNocHVmZjtcbn1cblxuXG4udG9wIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDI1cHg7XG59XG5cbi5ub3cge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdhcDogMTBweDtcbn1cblxuLm1pZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi53aW5kLWltZywgLmh1bWlkaXR5LWltZywgLmFpci1pbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmFkZGl0aW9uYWwge1xuICBkaXNwbGF5OiBncmlkO1xuICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7ICovXG4gIGdhcDogMTBweDtcbn1cblxuLyogdG9nZ2xlIGJ1dHRvbiBjc3MgKi9cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMzRweDtcbn1cblxuLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cbi5zd2l0Y2ggaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vKiBUaGUgc2xpZGVyICovXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gIHRyYW5zaXRpb246IC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIsKwRlwiO1xuICBjb2xvcjogYmxhY2s7XG4gIGhlaWdodDogMjZweDtcbiAgd2lkdGg6IDI2cHg7XG4gIGxlZnQ6IDRweDtcbiAgYm90dG9tOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgdHJhbnNpdGlvbjogLjRzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgIGNvbnRlbnQ6IFwiwrBDXCI7XG4gICBjb2xvcjogYmx1ZTtcblxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xufVxuXG4uc2xpZGVyLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcbn1cblxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFNBQVM7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsU0FBUztBQUNYOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxVQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0dBQ0csYUFBYTtHQUNiLFdBQVc7O0VBRVosbUNBQW1DO0VBQ25DLCtCQUErQjtFQUMvQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogcGxhY2UtaXRlbXM6IGNlbnRlcjsgKi9cXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb250cm9sIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBtYXJnaW46IDEwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuI3NlYXJjaCB7XFxuICBtaW4taGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4ubG9jYXRpb24tY29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGVuZDtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxufVxcblxcbi5uYW1lIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLnJlZ2lvbiB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLmNvdW50cnkge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogcGVhY2hwdWZmO1xcbn1cXG5cXG5cXG4udG9wIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDI1cHg7XFxufVxcblxcbi5ub3cge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLm1pZCB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLndpbmQtaW1nLCAuaHVtaWRpdHktaW1nLCAuYWlyLWltZyB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYWRkaXRpb25hbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyAqL1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4vKiB0b2dnbGUgYnV0dG9uIGNzcyAqL1xcbi5zd2l0Y2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDM0cHg7XFxufVxcblxcbi8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXFxuLnN3aXRjaCBpbnB1dCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qIFRoZSBzbGlkZXIgKi9cXG4uc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXG4gIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLnNsaWRlcjpiZWZvcmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCLCsEZcXFwiO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgaGVpZ2h0OiAyNnB4O1xcbiAgd2lkdGg6IDI2cHg7XFxuICBsZWZ0OiA0cHg7XFxuICBib3R0b206IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxuICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XFxufVxcblxcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICAgY29udGVudDogXFxcIsKwQ1xcXCI7XFxuICAgY29sb3I6IGJsdWU7XFxuXFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxufVxcblxcbi5zbGlkZXIucm91bmQge1xcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcXG59XFxuXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGFpciBmcm9tIFwiLi9pbWcvYWlyLXF1YWxpdHkucG5nXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUFpclF1YWxpdHkob2JqKSB7XG4gICAgcmV0dXJuIG9iai50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEuY3VycmVudClcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkaXRpb25hbFwiKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgYWlyQ29uZGl0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCBhaXJDb25kaXRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAvLyBjb25zdCBhaXJDb25kaXRvblJhdGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblxuICAgICAgICBjb25zdCBhaXJDb25kaXRpb25JbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIFxuXG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IGFpclF1YWxpdHk9IGRhdGEuY3VycmVudC5haXJfcXVhbGl0eVtcInVzLWVwYS1pbmRleFwiXVxuICAgICAgICBcbiAgICAgIFxuXG4gICAgICAgIFxuXG4gICAgICAgIGFpckNvbmRpdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwiYWlyLWNvbmRpdGlvblwiKVxuICAgICAgICBhaXJDb25kaXRpb25UZXh0LmNsYXNzTGlzdC5hZGQoXCJhaXItcXVhbGl0eVwiKVxuICAgICAgICBhaXJDb25kaXRpb25JbWdEaXYuY2xhc3NMaXN0LmFkZChcImFpci1pbWdcIilcblxuICAgICAgICBhaXJDb25kaXRpb25UZXh0LnRleHRDb250ZW50ID0gYGFpciBxdWFsaXR5OiAke2FpclF1YWxpdHl9LzEwYFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhaXJRdWFsaXR5KVxuICAgICAgICBcbiAgICAgICAgY29uc3QgYWlySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgICBhaXJJbWcuc3JjID0gYWlyXG5cbiAgICAgICAgYWlyQ29uZGl0aW9uSW1nRGl2LmFwcGVuZENoaWxkKGFpckltZylcblxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGFpckNvbmRpdGlvbkltZ0RpdilcblxuICAgICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE7IGkrPTEpIHtcbiAgICAgICAgICAgIGNvbnN0IGFpclF1YWxpdHlUZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgYWlyUXVhbGl0eVRleHREaXYuY2xhc3NMaXN0LmFkZChcImFpci1xdWFsaXR5XCIpXG4gICAgICAgICAgICBpZihhaXJRdWFsaXR5ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgYWlyUXVhbGl0eVRleHREaXYudGV4dENvbnRlbnQgPSBcIkdvb2QgYWlyIHF1YWxpdHlcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihhaXJRdWFsaXR5ID09PSAyKSB7XG4gICAgICAgICAgICAgICAgYWlyUXVhbGl0eVRleHREaXYudGV4dENvbnRlbnQgPSBcIk1vZGVyYXRlIGFpciBxdWFsaXR5XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoYWlyUXVhbGl0eSA9PT0gMykge1xuICAgICAgICAgICAgICAgIGFpclF1YWxpdHlUZXh0RGl2LnRleHRDb250ZW50ID0gXCJCYWQgYWlyIHF1YWxpdHlcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihhaXJRdWFsaXR5ID09PSA0KSB7XG4gICAgICAgICAgICAgICAgYWlyUXVhbGl0eVRleHREaXYudGV4dENvbnRlbnQgPSBcIlVuaGVhbHRoeSBhaXIgcXVhbGl0eVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGFpclF1YWxpdHkgPT09IDUpIHtcbiAgICAgICAgICAgICAgICBhaXJRdWFsaXR5VGV4dERpdi50ZXh0Q29udGVudCA9IFwiVmVyeSBVbmhlYWx0aHkgYWlyIHF1YWxpdHlcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihhaXJRdWFsaXR5ID09PSA2KSB7XG4gICAgICAgICAgICAgICAgYWlyUXVhbGl0eVRleHREaXYudGV4dENvbnRlbnQgPSBcIkhhemFyZG91cyBhaXIgcXVhbGl0eVwiXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgYWlyQ29uZGl0aW9uRGl2LmFwcGVuZENoaWxkKGFpclF1YWxpdHlUZXh0RGl2KVxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuXG4gICAgICAgIGFpckNvbmRpdGlvbkRpdi5hcHBlbmRDaGlsZChhaXJDb25kaXRpb25UZXh0KVxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGFpckNvbmRpdGlvbkRpdilcblxuXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cbn0gIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUNvbmRpdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqLnRoZW4oKGRhdGEpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG91ZC1jb250YWluZXJcIik7XG4gICAgY29uc3QgY2xvdWRDb25kaXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNsb3VkQ29uZGl0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJjbG91ZC1jb25kaXRpb25cIik7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCJcbiAgICBcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHtjdXJyZW50fSA9IGRhdGE7XG4gICAgIFxuICAgICAgICBjb25zdCB7Y29uZGl0aW9ufSA9IGN1cnJlbnRcbiAgICAgICBcblxuICAgICAgIFxuXG4gICAgICAgIGNvbnN0IGNvbmRpdGlvblRleHQgPSBjb25kaXRpb24udGV4dFxuICAgICAgICBjb25zdCBjb25kaXRpb25JbWcgPSBjb25kaXRpb24uaWNvblxuICAgICAgICBcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcIndlYXRoZXJcIilcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgXG4gICAgICAgIGRpdi50ZXh0Q29udGVudCA9IGNvbmRpdGlvblRleHRcbiAgICAgICAgaW1nLnNyYyA9IGNvbmRpdGlvbkltZ1xuXG5cbiAgICAgICAgY2xvdWRDb25kaXRpb25EaXYuYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgICBjbG91ZENvbmRpdGlvbkRpdi5hcHBlbmRDaGlsZChpbWcpXG5cbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjbG91ZENvbmRpdGlvbkRpdilcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblxufVxuIiwiaW1wb3J0IEZldGNoV2VhdGhlciBmcm9tIFwiLi93ZWF0aGVyLWFwaVwiO1xuaW1wb3J0IGRpc3BsYXlMb2NhdGlvbiBmcm9tIFwiLi9sb2NhdGlvblwiO1xuaW1wb3J0IGRpc3BsYXlDb25kaXRpb24gZnJvbSBcIi4vY2xvdWQtY29uZGl0aW9uXCI7XG5pbXBvcnQgZGlzcGxheVRlbXAgZnJvbSBcIi4vdGVtcGVyYXR1cmVcIjtcbmltcG9ydCBkaXNwbGF5V2luZCBmcm9tIFwiLi93aW5kLWNvbmRpdGlvblwiO1xuaW1wb3J0IGRpc3BsYXlIdW1pZGl0eSBmcm9tIFwiLi9odW1pZGl0eS1jb25kaXRpb25cIjtcbmltcG9ydCBkaXNwbGF5QWlyUXVhbGl0eSBmcm9tIFwiLi9haXItY29uZGl0aW9uXCI7XG5pbXBvcnQgc3dpdGNoVGVtcCBmcm9tIFwiLi9zd2l0Y2gtdGVtcFwiO1xuXG5sZXQgd2VhdGhlcjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvbUNvbnRyb2xsZXIoKSB7XG4gICAgY29uc3QgaW5wdXRDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dpdGNoXCIpO1xuICAgIGNvbnN0IGlucHV0U2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hcIik7XG5cbiAgICBjb25zdCBzZWFyY2hFdmVudCA9ICgpID0+IHtcbiAgICAgICAgaW5wdXRTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZihlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICAgICAgd2VhdGhlciA9IEZldGNoV2VhdGhlcihpbnB1dFNlYXJjaC52YWx1ZSlcbiAgICAgICAgICAgICAgICBkaXNwbGF5TG9jYXRpb24od2VhdGhlcilcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q29uZGl0aW9uKHdlYXRoZXIpXG4gICAgICAgICAgICAgICAgZGlzcGxheVRlbXAod2VhdGhlcilcbiAgICAgICAgICAgICAgICBkaXNwbGF5V2luZCh3ZWF0aGVyKVxuICAgICAgICAgICAgICAgIGRpc3BsYXlIdW1pZGl0eSh3ZWF0aGVyKVxuICAgICAgICAgICAgICAgIGRpc3BsYXlBaXJRdWFsaXR5KHdlYXRoZXIpXG4gICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlucHV0U2VhcmNoLnZhbHVlID0gXCJcIlxuICAgICAgICAgICAgICAgIGlucHV0Q2hlY2tib3guY2hlY2tlZCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgY29uc3QgY2hlY2tib3hFdmVudCA9ICgpID0+IHtcbiAgICAgICAgaW5wdXRDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoVGVtcCh3ZWF0aGVyLGUpXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoZS50YXJnZXQuY2hlY2tlZCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2hUZW1wKHdlYXRoZXIsZSlcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgY29uc3Qgb25Mb2FkRXZlbnQgPSAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICB3ZWF0aGVyID0gRmV0Y2hXZWF0aGVyKFwibG9uZG9uXCIpXG5cbiAgICAgICAgICAgIGRpc3BsYXlMb2NhdGlvbih3ZWF0aGVyKVxuICAgICAgICAgICAgZGlzcGxheUNvbmRpdGlvbih3ZWF0aGVyKVxuICAgICAgICAgICAgZGlzcGxheVRlbXAod2VhdGhlcilcbiAgICAgICAgICAgIGRpc3BsYXlXaW5kKHdlYXRoZXIpXG4gICAgICAgICAgICBkaXNwbGF5SHVtaWRpdHkod2VhdGhlcilcbiAgICAgICAgICAgIGRpc3BsYXlBaXJRdWFsaXR5KHdlYXRoZXIpXG4gICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG9uTG9hZEV2ZW50LFxuICAgICAgICBzZWFyY2hFdmVudCxcbiAgICAgICAgY2hlY2tib3hFdmVudCxcbiAgICB9XG59IiwiaW1wb3J0IGh1bWlkaXR5IGZyb20gXCIuL2ltZy9odW1pZGl0eS5wbmdcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5SHVtaWRpdHkob2JqKSB7XG4gICAgcmV0dXJuIG9iai50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZGl0aW9uYWxcIilcbiAgICAgICAgY29uc3QgaHVtaWRpdHlDb25kaXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNvbnN0IGh1bWlkaXR5Q29uZGl0aW9uSW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGN1cnJlbnRIdW1pZGl0eSA9IGRhdGEuY3VycmVudC5odW1pZGl0eVxuICAgICAgICBjb25zdCBhdmdIdW1pZGl0eSA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmF2Z2h1bWlkaXR5XG4gICAgICAgIGNvbnN0IHJhaW5DaGFuY2UgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpblxuXG4gICAgICAgIGh1bWlkaXR5Q29uZGl0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJodW1pZGl0eS1jb25kaXRpb25cIilcbiAgICAgICAgaHVtaWRpdHlDb25kaXRpb25JbWdEaXYuY2xhc3NMaXN0LmFkZChcImh1bWlkaXR5LWltZ1wiKVxuXG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRIdW1pZGl0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29uc3QgYXZnSHVtaWRpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNvbnN0IHJhaW5DaGFuY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5cbiAgICAgICAgY3VycmVudEh1bWlkaXR5RGl2LmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50LWh1bWlkaXR5XCIpXG4gICAgICAgIGF2Z0h1bWlkaXR5RGl2LmNsYXNzTGlzdC5hZGQoXCJhdmctaHVtaWRpdHlcIilcbiAgICAgICAgcmFpbkNoYW5jZURpdi5jbGFzc0xpc3QuYWRkKFwicmFpbi1jaGFuY2VcIilcblxuICAgICAgICBjdXJyZW50SHVtaWRpdHlEaXYudGV4dENvbnRlbnQgPSBgY3VycmVudCBodW1pZGl0eTogJHtjdXJyZW50SHVtaWRpdHl9JWBcbiAgICAgICAgYXZnSHVtaWRpdHlEaXYudGV4dENvbnRlbnQgPSBgYXZlcmFnZSBodW1pZGl0eTogJHthdmdIdW1pZGl0eX0lYFxuICAgICAgICByYWluQ2hhbmNlRGl2LnRleHRDb250ZW50ID0gYGNoYW5jZSBvZiByYWluOiAke3JhaW5DaGFuY2V9JWBcblxuICAgICAgICBjb25zdCBodW1pZGl0eUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICAgICAgaHVtaWRpdHlJbWcuc3JjID0gaHVtaWRpdHlcblxuXG4gICAgICAgIGh1bWlkaXR5Q29uZGl0aW9uSW1nRGl2LmFwcGVuZChodW1pZGl0eUltZylcblxuICAgICAgICBodW1pZGl0eUNvbmRpdGlvbkRpdi5hcHBlbmRDaGlsZChjdXJyZW50SHVtaWRpdHlEaXYpXG4gICAgICAgIGh1bWlkaXR5Q29uZGl0aW9uRGl2LmFwcGVuZENoaWxkKGF2Z0h1bWlkaXR5RGl2KVxuICAgICAgICBodW1pZGl0eUNvbmRpdGlvbkRpdi5hcHBlbmRDaGlsZChyYWluQ2hhbmNlRGl2KVxuXG5cbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChodW1pZGl0eUNvbmRpdGlvbkltZ0RpdilcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChodW1pZGl0eUNvbmRpdGlvbkRpdilcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlMb2NhdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqLnRoZW4oKGRhdGEpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvbi1jb250YWluZXJcIik7XG4gICAgY29uc3QgbG9jYXRpb25Db25kaXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiXG5cbiAgICBjb25zdCB7bG9jYXRpb259ID0gZGF0YVxuICAgICAgICBcblxuICAgIGxvY2F0aW9uQ29uZGl0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvbi1jb25kaXRpb25cIik7XG5cbiAgICAvLyBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgICBcblxuICAgIGNvbnN0IGRhdGFLZXlzID0gT2JqZWN0LmtleXMobG9jYXRpb24pO1xuICBcbiAgICBjb25zdCBkYXRhVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhsb2NhdGlvbik7XG5cbiAgICBjb25zdCBuYW1lRGF0YSA9IGRhdGFLZXlzLnNwbGljZSgwLCAzKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uRGF0YSA9IGRhdGFWYWx1ZXMuc3BsaWNlKDAsIDMpO1xuICAgIFxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhdGlvbkRhdGEubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChgJHtuYW1lRGF0YVtpXX1gKTtcbiAgICAgICAgZGl2LnRleHRDb250ZW50ID0gbG9jYXRpb25EYXRhW2ldO1xuICAgICAgIFxuICAgICAgICBsb2NhdGlvbkNvbmRpdGlvbkRpdi5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cbiAgICBtYWluLmFwcGVuZENoaWxkKGxvY2F0aW9uQ29uZGl0aW9uRGl2KTtcbiAgICAgfSlcbiAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9XG4gIFxuXG4vLyBleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBkaXNwbGF5TG9jYXRpb24ob2JqKSB7XG4vLyAgICAgdHJ5IHtcbi8vICAgICAgICAgY29uc3Qgd2VhdGhlck9iaiA9IGF3YWl0IG9iajtcblxuLy8gICAgICAgICBjb25zdCB7bG9jYXRpb259ID0gd2VhdGhlck9ialxuXG4vLyAgICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvcFwiKTtcbi8vICAgICAgICAgY29uc3QgbG9jYXRpb25Db25kaXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIFxuLy8gICAgICAgICBsb2NhdGlvbkNvbmRpdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwibG9jYXRpb25cIik7XG4gICAgXG4vLyAgICAgICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIFxuICAgICAgICAgXG4gICAgXG4vLyAgICAgICAgIGNvbnN0IGRhdGFLZXlzID0gT2JqZWN0LmtleXMobG9jYXRpb24pO1xuICAgICAgXG4vLyAgICAgICAgIGNvbnN0IGRhdGFWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGxvY2F0aW9uKTtcbiAgICBcbi8vICAgICAgICAgY29uc3QgbmFtZURhdGEgPSBkYXRhS2V5cy5zcGxpY2UoMCwgMyk7XG4gICAgXG4vLyAgICAgICAgIGNvbnN0IGxvY2F0aW9uRGF0YSA9IGRhdGFWYWx1ZXMuc3BsaWNlKDAsIDMpO1xuICAgIFxuLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2F0aW9uRGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuLy8gICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBcbi8vICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGAke25hbWVEYXRhW2ldfWApO1xuLy8gICAgICAgICAgICAgZGl2LnRleHRDb250ZW50ID0gbG9jYXRpb25EYXRhW2ldO1xuICAgIFxuLy8gICAgICAgICAgICAgbG9jYXRpb25Db25kaXRpb25EaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBtYWluLmFwcGVuZENoaWxkKGxvY2F0aW9uQ29uZGl0aW9uRGl2KTtcblxuLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyh3ZWF0aGVyT2JqKVxuLy8gICAgIH0gY2F0Y2ggKGVycikge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4vLyAgICAgfVxuLy8gICB9XG5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN3aXRjaFRlbXAob2JqLCBlKSB7XG4gICAgcmV0dXJuIG9iai50aGVuKChkYXRhKSA9PiB7XG4gICAgIFxuICAgICAgICBjb25zdCBmZWVsc0xpa2VUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mZWVsc2xpa2VcIik7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50XCIpO1xuICAgICAgICBjb25zdCBtaW5UZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taW5cIilcbiAgICAgICAgY29uc3QgbWF4VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWF4XCIpXG5cbiAgICAgICAgY29uc3Qge2N1cnJlbnR9ID0gZGF0YVxuICAgICAgICBjb25zdCB7Zm9yZWNhc3R9ID0gZGF0YTtcbiAgICAgXG4gICAgICAgIGNvbnN0IHtmb3JlY2FzdGRheX0gPSBmb3JlY2FzdFxuICAgICAgICBjb25zdCB7ZGF5fSA9IGZvcmVjYXN0ZGF5WzBdXG5cbiAgICAgICAgY29uc3QgZmVlbHNsaWtlQyA9IGN1cnJlbnQuZmVlbHNsaWtlX2NcbiAgICAgICAgY29uc3QgdGVtcEMgPSBjdXJyZW50LnRlbXBfY1xuICAgICAgICBjb25zdCBhdmd0ZW1wQyA9IGRheS5hdmd0ZW1wX2NcbiAgICAgICAgY29uc3QgbWF4dGVtcEMgPSBkYXkubWF4dGVtcF9jXG5cbiAgICAgICAgY29uc3QgZmVlbHNsaWtlRiA9IGN1cnJlbnQuZmVlbHNsaWtlX2ZcbiAgICAgICAgY29uc3QgdGVtcEYgPSBjdXJyZW50LnRlbXBfZlxuICAgICAgICBjb25zdCBhdmd0ZW1wRiA9IGRheS5hdmd0ZW1wX2ZcbiAgICAgICAgY29uc3QgbWF4dGVtcEYgPSBkYXkubWF4dGVtcF9mXG5cbiAgICAgICAgaWYoZS50YXJnZXQuY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBcbiAgICAgICAgICAgIGZlZWxzTGlrZVRlbXAudGV4dENvbnRlbnQgPSBgZmVlbHNsaWtlOiAke2ZlZWxzbGlrZUZ9wrBGYFxuICAgICAgICAgICAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSBgY3VycmVudDogJHt0ZW1wRn3CsEZgXG4gICAgICAgICAgICBtaW5UZW1wLnRleHRDb250ZW50ID0gYG1pbjogJHthdmd0ZW1wRn3CsEZgXG4gICAgICAgICAgICBtYXhUZW1wLnRleHRDb250ZW50ID0gYG1heDogJHsgbWF4dGVtcEZ9wrBGYFxuICAgICAgICAgICBcbiAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIndvcmxkXCIpXG4gICAgICAgICAgICBmZWVsc0xpa2VUZW1wLnRleHRDb250ZW50ID0gYGZlZWxzbGlrZTogJHtmZWVsc2xpa2VDfcKwQ2BcbiAgICAgICAgICAgIGN1cnJlbnRUZW1wLnRleHRDb250ZW50ID0gYGN1cnJlbnQ6ICR7dGVtcEN9wrBDYFxuICAgICAgICAgICAgbWluVGVtcC50ZXh0Q29udGVudCA9IGBtaW46ICR7YXZndGVtcEN9wrBDYFxuICAgICAgICAgICAgbWF4VGVtcC50ZXh0Q29udGVudCA9IGBtYXg6ICR7bWF4dGVtcEN9wrBDYFxuICAgICAgICB9XG5cbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlUZW1wKG9iaikge1xuICAgIHJldHVybiBvYmoudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRlbXBEaXYuY2xhc3NMaXN0LmFkZChcInRlbXBlcmF0dXJlXCIpXG4gICAgICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiXG4gICAgICAgIGNvbnN0IHtjdXJyZW50fSA9IGRhdGFcbiAgICAgICAgY29uc3Qge2ZvcmVjYXN0fSA9IGRhdGE7XG4gICAgICAgIC8vIGNvbnN0IHtkYXl9ID0gZm9yZWNhc3RbMF1cbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF5KVxuICAgICAgICBjb25zdCB7Zm9yZWNhc3RkYXl9ID0gZm9yZWNhc3RcbiAgICAgICAgY29uc3Qge2RheX0gPSBmb3JlY2FzdGRheVswXVxuXG4gICAgICAgIGNvbnN0IGZlZWxzbGlrZUMgPSBjdXJyZW50LmZlZWxzbGlrZV9jXG4gICAgICAgIGNvbnN0IHRlbXBDID0gY3VycmVudC50ZW1wX2NcbiAgICAgICAgY29uc3QgYXZndGVtcEMgPSBkYXkuYXZndGVtcF9jXG4gICAgICAgIGNvbnN0IG1heHRlbXBDID0gZGF5Lm1heHRlbXBfY1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUZW1wID0gW2ZlZWxzbGlrZUMsIHRlbXBDXVxuICAgICAgICBjb25zdCBjdXJyZW50VGVtcFRleHQgPSBbXCJmZWVsc2xpa2VcIiwgXCJjdXJyZW50XCJdXG4gICAgICAgIGNvbnN0IGF2Z0FuZE1heFRlbXAgPSBbYXZndGVtcEMsIG1heHRlbXBDXVxuICAgICAgICBjb25zdCBhdmdBbmRNYXhUZW1wVGV4dCA9IFtcIm1pblwiLCBcIm1heFwiXVxuICAgICAgICBcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGN1cnJlbnRUZW1wLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50VGVtcFRleHRbaV19OiAke2N1cnJlbnRUZW1wW2ldfcKwQ2BcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGAke2N1cnJlbnRUZW1wVGV4dFtpXX1gKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0ZW1wRGl2LmFwcGVuZENoaWxkKGRpdilcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhdmdBbmRNYXhUZW1wLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBgJHthdmdBbmRNYXhUZW1wVGV4dFtpXX06ICR7YXZnQW5kTWF4VGVtcFtpXX3CsENgXG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChgJHthdmdBbmRNYXhUZW1wVGV4dFtpXX1gKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0ZW1wRGl2LmFwcGVuZENoaWxkKGRpdilcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHRlbXBEaXYpICAgIFxuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xufVxuIiwiLy8gaW1wb3J0IGRpc3BsYXlMb2NhdGlvbiBmcm9tIFwiLi9sb2NhdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBGZXRjaFdlYXRoZXIobG9jYXRpb24pIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbiY/a2V5PTczNDZmZmY3YWQzNzQxZjQ5ODQyNDEyNjIzMzAwOSZhcWk9eWVzJnE9JHtsb2NhdGlvbn1gO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB3ZWF0aGVyRGF0YVxuICAgICAgICB9IFxuICAgICAgICBjb25zdCBlcnJvckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3ItY29udGFpbmVyXCIpXG4gICAgICAgIGNvbnN0IGVycm9ySDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcblxuICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXMpXG4gICAgICAgIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2VcblxuICAgICAgICBlcnJvckRpdi50ZXh0Q29udGVudCA9IFwiXCJcblxuICAgICAgICBlcnJvckgxLnRleHRDb250ZW50ID0gYCR7ZXJyb3J9IGJhZCByZXF1ZXN0YFxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5zdGF0dXNUZXh0KVxuXG4gICAgICAgIGVycm9yRGl2LmFwcGVuZENoaWxkKGVycm9ySDEpXG4gICAgICAgIHRocm93KGVycm9yKVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9XG59XG5cbiIsIi8vIGltcG9ydCBodW1pZGl0eSBmcm9tIFwiLi9pbWcvaHVtaWRpdHkucG5nXCJcbmltcG9ydCB3aW5kIGZyb20gXCIuL2ltZy93aW5kLnBuZ1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlXaW5kKG9iaikge1xuICAgIHJldHVybiBvYmoudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRpdGlvbmFsXCIpXG4gICAgICAgIGNvbnN0IHdpbmRDb25kaXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNvbnN0IHdpbmRDb25kaXRpb25JbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRXaW5kID0gZGF0YS5jdXJyZW50LndpbmRfa3BoXG4gICAgICAgIGNvbnN0IG1heFdpbmQgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh3aW5kX2twaFxuXG4gICAgICAgIFxuXG4gICAgICAgIHdpbmRDb25kaXRpb25JbWdEaXYuY2xhc3NMaXN0LmFkZChcIndpbmQtaW1nXCIpXG5cbiAgICAgICAgd2luZENvbmRpdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwid2luZC1jb25kaXRpb25cIilcblxuICAgICAgXG5cbiAgICAgICAgY29uc3QgY3VycmVudFdpbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpIFxuICAgICAgICBjb25zdCBtYXhXaW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSBcblxuICAgICAgICBjdXJyZW50V2luZERpdi5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC13aW5kXCIpXG4gICAgICAgIG1heFdpbmREaXYuY2xhc3NMaXN0LmFkZChcIm1heC13aW5kXCIpXG4gICAgICAgIFxuICAgICAgICBjdXJyZW50V2luZERpdi50ZXh0Q29udGVudCA9IGBDdXJyZW50OiAke2N1cnJlbnRXaW5kfSBrcGhgXG4gICAgICAgIG1heFdpbmREaXYudGV4dENvbnRlbnQgPSBgTWF4OiAke21heFdpbmR9IGtwaGBcblxuXG4gICAgICAgIGNvbnN0IHdpbmRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgICAgIHdpbmRJbWcuc3JjID0gd2luZFxuXG5cbiAgICAgICAgd2luZENvbmRpdGlvbkltZ0Rpdi5hcHBlbmRDaGlsZCh3aW5kSW1nKVxuICAgICAgICB3aW5kQ29uZGl0aW9uRGl2LmFwcGVuZENoaWxkKGN1cnJlbnRXaW5kRGl2KVxuICAgICAgICB3aW5kQ29uZGl0aW9uRGl2LmFwcGVuZENoaWxkKG1heFdpbmREaXYpXG5cblxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHdpbmRDb25kaXRpb25JbWdEaXYpXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQod2luZENvbmRpdGlvbkRpdilcblxuXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgRG9tQ29udHJvbGxlciBmcm9tIFwiLi9tb2R1bGVzL2RvbS1jb250cm9sbGVyXCJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbkRvbUNvbnRyb2xsZXIoKS5vbkxvYWRFdmVudCgpXG5Eb21Db250cm9sbGVyKCkuc2VhcmNoRXZlbnQoKVxuRG9tQ29udHJvbGxlcigpLmNoZWNrYm94RXZlbnQoKVxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==