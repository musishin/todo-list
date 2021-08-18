/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Galatea Regular Regular.woff */ \"./src/fonts/Galatea Regular Regular.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/fonts/Galatea Regular Thin.woff */ \"./src/fonts/Galatea Regular Thin.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/fonts/Galatea Regular Light.woff */ \"./src/fonts/Galatea Regular Light.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Galatea Regular Medium.woff */ \"./src/fonts/Galatea Regular Medium.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Galatea Regular Bold.woff */ \"./src/fonts/Galatea Regular Bold.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_4___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n    font-family: 'Galatea';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('woff');\\n}\\n@font-face {\\n    font-family: Galatea-Thin;\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('woff');\\n}\\n@font-face {\\n    font-family: Galatea-Light;\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format('woff');\\n}\\n@font-face {\\n    font-family: Galatea-Medium;\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format('woff');\\n}\\n@font-face {\\n    font-family: Galatea-Bold;\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \") format('woff');\\n}\\n\\n\\n\\n/* Main Containers */\\n\\nbody {\\n    padding: 0;\\n    margin: 0;\\n}\\n\\n#main-cont {\\n    width: 100%;\\n}\\n\\n#body-cont {\\n    width: 100%;\\n    height: 100vh;\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n\\n\\n/* Title Bar */\\n\\n#title-bar {\\n    min-height: 60px;\\n    display: flex;\\n    justify-content: space-between;\\n    background: cornflowerblue;\\n}\\n\\n#title {\\n    font-family: 'Galatea';\\n    font-size: 27px;\\n    color: white;\\n    height: 100%;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    margin-left: 25px;\\n}\\n\\n#auth-cont {\\n    height: 100%;\\n    width: 100px;\\n    height: 100%;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    margin-right: 25px;\\n}\\n\\n\\n\\n/* Main Content */\\n\\n#side-todo-cont {\\n    flex-grow: 1;\\n    display: flex;\\n}\\n\\n\\n\\n/* Sidebar */\\n\\n#sidebar {\\n    height: 100%;\\n    min-width: 280px;\\n    display: flex;\\n    flex-direction: column;\\n    border-right: 1px solid rgb(236, 236, 236);\\n}\\n\\n#main-cat-cont {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    height: 180px;\\n    width: fit-content;\\n    margin-top: 30px;\\n    margin-left: 30px;\\n}\\n\\n#project-cont {\\n    display: flex;\\n    flex-direction: column;\\n    width: calc(100% - 30px);\\n    margin: 30px 0 0 30px;\\n    font-family: 'Galatea-Thin';\\n}\\n\\n#add-proj-btn {\\n    margin-right: 26px;\\n    cursor: pointer;\\n    font-size: 28px;\\n    transition: 0.3s;\\n    font-weight: bold;\\n}\\n\\n.main-cats {\\n    font-size: 17px;\\n    font-family: 'Galatea-Thin';\\n    cursor: pointer;\\n    transition: 0.1s ease-out;\\n}\\n\\n.main-cats:hover {\\n    font-family: 'Galatea';\\n}\\n\\n#project-title {\\n    font-family: 'Galatea-Light';\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n}\\n\\n#project-title-btn-cont {\\n    font-family: 'Galatea-Light';\\n    font-size: 24px;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n}\\n\\n#new-project-input {\\n    width: calc(100% - 30px);\\n    height: 30px;\\n    margin-top: 15px;\\n    border: none;\\n    background: rgb(245, 245, 245);\\n    padding-left: 5px;\\n    font-family: 'Galatea-Thin';\\n}\\n\\n#new-project-input:focus {\\n    outline-width: 0;\\n}\\n\\n#new-proj-div {\\n    font-size: 17px;\\n    cursor: pointer;\\n    margin-top: 20px;\\n    width: fit-content;\\n}\\n\\n#new-proj-div:hover {\\n    font-family: 'Galatea';\\n}\\n\\n#new-proj-btn {\\n    border: none;\\n    background: cornflowerblue;\\n    width: fit-content;\\n    padding: 5px 10px 5px 10px;\\n    color: white;\\n    margin-top: 10px;\\n    cursor: pointer;\\n    font-family: 'Galatea-Light';\\n}\\n\\n.hide {\\n    display: none;\\n}\\n\\n.selected {\\n    font-family: 'Galatea';\\n}\\n\\n.rotated {\\n    transform: rotate(45deg);\\n}\\n\\n\\n\\n/* Todo Container */\\n\\n#todo-cont {\\n    width: 100%;\\n    height: calc(100vh - 110px);\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    padding-top: 50px;\\n    overflow: auto;\\n}\\n\\n.todo-item-cont {\\n    width: 800px;\\n    height: auto;\\n    background: rgb(245, 245, 245);\\n    display: flex;\\n    flex-direction: column;\\n    margin-bottom: 10px;\\n}\\n\\n.todo-item-cont:hover {\\n    width: 810px;\\n    box-shadow: 1px 2px 6px rgb(32, 33, 36, .28);\\n    transition: 0.1s ease-out;\\n}\\n\\n#todo-item-top-cont {\\n    height: 47px;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    padding: 0 30px 0 30px;\\n    position: relative;\\n}\\n\\n#right-cont {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\n.item-buttons {\\n    width: 12px;\\n    height: 12px;\\n    margin-left: 10px;\\n    background: rgb(75, 75, 75);\\n    cursor: pointer;\\n    border-radius: 10px;\\n}\\n\\n.item-buttons:hover {\\n    background: rgb(160, 160, 160);\\n}\\n\\n.todo-item-font {\\n    font-family: 'Galatea-Thin';\\n    font-size: 14.5px;\\n}\\n\\n#priority-cont {\\n    position: absolute;\\n    left: 0;\\n    height: 100%;\\n    width: 4px;\\n}\\n\\n.high-priority {\\n    background: lightcoral;\\n}\\n\\n.medium-priority {\\n    background: lemonchiffon;\\n}\\n\\n.low-priority {\\n    background: darkseagreen;\\n}\\n\\n#item-edit-cont {\\n    height: 80px;\\n}\\n\\n.hide-edit-cont {\\n    display: none;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/basicInterface.js":
/*!*******************************!*\
  !*** ./src/basicInterface.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createInterface)\n/* harmony export */ });\nfunction createInterface() {\n    const bodyCont = document.createElement('div');\n    const titleBar = document.createElement('div');\n    const title = document.createElement('div');\n    const authCont = document.createElement('div');\n    const sideTodoCont = document.createElement('div');\n    const sideBar = document.createElement('div');\n    const todoCont = document.createElement('div');\n    const mainCatCont = document.createElement('div');\n    const allCat = document.createElement('div');\n    const todayCat = document.createElement('div');\n    const tomCat = document.createElement('div');\n    const weekCat = document.createElement('div');\n    const monthCat = document.createElement('div');\n    const projectCont = document.createElement('div');\n    const projectTitle = document.createElement('div');\n    const projectTitleBtnCont = document.createElement('div');\n    const addProjectBtn = document.createElement('div');\n    const newProjectInput = document.createElement('input');\n    const newProjBtn = document.createElement('button');\n\n    title.innerHTML = 'Things to Do';\n    allCat.innerHTML = 'All Things';\n    todayCat.innerHTML = 'Today';\n    tomCat.innerHTML = 'Tomorrow';\n    weekCat.innerHTML = 'This Week';\n    monthCat.innerHTML = 'This Month';\n    projectTitleBtnCont.innerHTML = 'Projects';\n    addProjectBtn.innerHTML = '+';\n    newProjBtn.innerHTML = 'Create';\n\n    bodyCont.appendChild(titleBar);\n    bodyCont.appendChild(sideTodoCont);\n\n    titleBar.appendChild(title);\n    titleBar.appendChild(authCont);\n\n    sideTodoCont.appendChild(sideBar);\n    sideTodoCont.appendChild(todoCont);\n\n    sideBar.appendChild(mainCatCont);\n    sideBar.appendChild(projectCont);\n\n    mainCatCont.appendChild(allCat);\n    mainCatCont.appendChild(todayCat);\n    mainCatCont.appendChild(tomCat);\n    mainCatCont.appendChild(weekCat);\n    mainCatCont.appendChild(monthCat);\n\n    projectCont.appendChild(projectTitle);\n\n    projectTitle.appendChild(projectTitleBtnCont);\n    projectTitle.appendChild(newProjectInput);\n    projectTitle.appendChild(newProjBtn);\n\n    projectTitleBtnCont.appendChild(addProjectBtn);\n\n    bodyCont.setAttribute('id', 'body-cont');\n    titleBar.setAttribute('id', 'title-bar');\n    title.setAttribute('id', 'title');\n    authCont.setAttribute('id', 'auth-cont');\n    sideTodoCont.setAttribute('id', 'side-todo-cont');\n    sideBar.setAttribute('id', 'sidebar');\n    todoCont.setAttribute('id', 'todo-cont');\n    mainCatCont.setAttribute('id', 'main-cat-cont');\n    projectCont.setAttribute('id', 'project-cont');\n    allCat.classList.add('main-cats');\n    allCat.setAttribute('id', 'all-cat');\n    todayCat.classList.add('main-cats');\n    todayCat.setAttribute('id', 'today-cat');\n    tomCat.classList.add('main-cats');\n    tomCat.setAttribute('id', 'tom-cat');\n    weekCat.classList.add('main-cats');\n    weekCat.setAttribute('id', 'week-cat');\n    monthCat.classList.add('main-cats');\n    monthCat.setAttribute('id', 'month-cat');\n    projectTitle.setAttribute('id', 'project-title');\n    projectTitleBtnCont.setAttribute('id', 'project-title-btn-cont');\n    addProjectBtn.setAttribute('id', 'add-proj-btn');\n    newProjectInput.setAttribute('id', 'new-project-input');\n    newProjectInput.setAttribute('placeholder', 'Enter new project name');\n    newProjectInput.setAttribute('type', 'text');\n    newProjectInput.classList.add('hide');\n    newProjBtn.setAttribute('type', 'button');\n    newProjBtn.setAttribute('id', 'new-proj-btn');\n    newProjBtn.classList.add('hide');\n\n    return bodyCont;\n}\n\n//# sourceURL=webpack://todo-list/./src/basicInterface.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _basicInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basicInterface */ \"./src/basicInterface.js\");\n/* harmony import */ var _todoLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoLogic */ \"./src/todoLogic.js\");\n/* harmony import */ var _renderDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderDOM */ \"./src/renderDOM.js\");\n\n\n\n\n\ndocument.getElementById('main-cont').appendChild((0,_basicInterface__WEBPACK_IMPORTED_MODULE_1__.default)());\n\n(0,_todoLogic__WEBPACK_IMPORTED_MODULE_2__.createTodo)('Wash the car 1', 'description!!!', 'March 4, 2022', 'high', 'Music');\n(0,_todoLogic__WEBPACK_IMPORTED_MODULE_2__.createTodo)('Wash the car 2', 'description!!!', 'March 4, 2022', 'low');\n(0,_todoLogic__WEBPACK_IMPORTED_MODULE_2__.createTodo)('Wash the car 3', 'description!!!', 'March 4, 2022', 'medium', 'School');\n(0,_todoLogic__WEBPACK_IMPORTED_MODULE_2__.createTodo)('Wash the car 4', 'description!!!', 'March 4, 2022', 'high', 'School');\n(0,_todoLogic__WEBPACK_IMPORTED_MODULE_2__.createTodo)('Wash the car 5', 'description!!!', 'March 4, 2022', 'high');\n(0,_todoLogic__WEBPACK_IMPORTED_MODULE_2__.createTodo)('Wash the car 6', 'description!!!', 'March 4, 2022', 'medium', 'Music');\n(0,_todoLogic__WEBPACK_IMPORTED_MODULE_2__.createTodo)('Wash the car 7', 'description!!!', 'March 4, 2022', 'low');\n(0,_todoLogic__WEBPACK_IMPORTED_MODULE_2__.createTodo)('Wash the car 8', 'description!!!', 'March 4, 2022', 'low', 'School');\n(0,_todoLogic__WEBPACK_IMPORTED_MODULE_2__.createTodo)('Wash the car 9', 'description!!!', 'March 4, 2022', 'high');\n(0,_todoLogic__WEBPACK_IMPORTED_MODULE_2__.createTodo)('Wash the car 10', 'description!!!', 'March 4, 2022', 'medium', 'Music');\n(0,_todoLogic__WEBPACK_IMPORTED_MODULE_2__.createTodo)('Wash the car 11', 'description!!!', 'March 4, 2022', 'high', 'School');\n(0,_todoLogic__WEBPACK_IMPORTED_MODULE_2__.createTodo)('Wash the car 12', 'description!!!', 'March 4, 2022', 'low');\n(0,_todoLogic__WEBPACK_IMPORTED_MODULE_2__.createTodo)('Wash the car 13', 'description!!!', 'March 4, 2022', 'medium', 'Music');\n(0,_todoLogic__WEBPACK_IMPORTED_MODULE_2__.createTodo)('Wash the car 14', 'description!!!', 'March 4, 2022', 'high', 'School');\n(0,_todoLogic__WEBPACK_IMPORTED_MODULE_2__.createTodo)('Wash the car 15', 'description!!!', 'March 4, 2022', 'high');\n(0,_todoLogic__WEBPACK_IMPORTED_MODULE_2__.createTodo)('Wash the car 16', 'description!!!', 'March 4, 2022', 'medium', 'Music');\n(0,_todoLogic__WEBPACK_IMPORTED_MODULE_2__.createTodo)('Wash the car 17', 'description!!!', 'March 4, 2022', 'low');\n(0,_todoLogic__WEBPACK_IMPORTED_MODULE_2__.createTodo)('Wash the car 18', 'description!!!', 'March 4, 2022', 'low', 'School');\n(0,_todoLogic__WEBPACK_IMPORTED_MODULE_2__.createTodo)('Wash the car 19', 'description!!!', 'March 4, 2022', 'high', 'Music');\n(0,_todoLogic__WEBPACK_IMPORTED_MODULE_2__.createTodo)('Wash the car 20', 'description!!!', 'March 4, 2022', 'medium');\n\n// Adds listeners to elements on page load.\nconst setListeners = (() => {\n    let count = 0;\n\n    // Listeners for categories.\n    document.getElementById('all-cat').addEventListener('click', () => {\n        (0,_renderDOM__WEBPACK_IMPORTED_MODULE_3__.changeCatDOM)('all-cat');\n        for(count = 0; count < _todoLogic__WEBPACK_IMPORTED_MODULE_2__.todoList.length; count++) {\n            (0,_renderDOM__WEBPACK_IMPORTED_MODULE_3__.renderTodoItem)(count);\n        }\n    });\n    document.getElementById('today-cat').addEventListener('click', () => {\n        (0,_renderDOM__WEBPACK_IMPORTED_MODULE_3__.changeCatDOM)('today-cat');\n    });\n    document.getElementById('tom-cat').addEventListener('click', () => {\n        (0,_renderDOM__WEBPACK_IMPORTED_MODULE_3__.changeCatDOM)('tom-cat');\n    });\n    document.getElementById('week-cat').addEventListener('click', () => {\n        (0,_renderDOM__WEBPACK_IMPORTED_MODULE_3__.changeCatDOM)('week-cat');\n    });\n    document.getElementById('month-cat').addEventListener('click', () => {\n        (0,_renderDOM__WEBPACK_IMPORTED_MODULE_3__.changeCatDOM)('month-cat');\n    });\n\n    // Listener for add new project button.\n    document.getElementById('add-proj-btn').addEventListener('click', () => {\n        document.getElementById('new-project-input').classList.toggle('hide');\n        document.getElementById('new-proj-btn').classList.toggle('hide');\n        document.getElementById('add-proj-btn').classList.toggle('rotated');\n    });\n\n    // Listener for create project button\n    document.getElementById('new-proj-btn').addEventListener('click', () => {\n        if(document.getElementById('new-project-input').value !== '') {\n            (0,_todoLogic__WEBPACK_IMPORTED_MODULE_2__.addProjectToList)(document.getElementById('new-project-input').value);\n            (0,_renderDOM__WEBPACK_IMPORTED_MODULE_3__.renderProject)(_todoLogic__WEBPACK_IMPORTED_MODULE_2__.projectList.length - 1);\n            document.getElementById('new-project-input').value = '';\n            document.getElementById('new-project-input').classList.add('hide');\n            document.getElementById('new-proj-btn').classList.add('hide');\n        }\n    });\n})();\n\n// Initial render of all todo items and projects when first loading page.\nconst initialTodoItemRender = (() => {\n    let count = 0;\n    for(count = 0; count < _todoLogic__WEBPACK_IMPORTED_MODULE_2__.todoList.length; count++) {\n        (0,_renderDOM__WEBPACK_IMPORTED_MODULE_3__.renderTodoItem)(count);\n    }\n    document.getElementById('all-cat').classList.add('selected');\n    for(count = 0; count < _todoLogic__WEBPACK_IMPORTED_MODULE_2__.projectList.length; count++) {\n        (0,_renderDOM__WEBPACK_IMPORTED_MODULE_3__.renderProject)(count);\n    }\n})();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/renderDOM.js":
/*!**************************!*\
  !*** ./src/renderDOM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeCatDOM\": () => (/* binding */ changeCatDOM),\n/* harmony export */   \"renderTodoItem\": () => (/* binding */ renderTodoItem),\n/* harmony export */   \"renderProject\": () => (/* binding */ renderProject)\n/* harmony export */ });\n/* harmony import */ var _todoLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoLogic */ \"./src/todoLogic.js\");\n\n\n// Renders a todo item with the info of the todo and appends it to the todo item container.\nconst renderTodoItem = (count) => {\n    const todoItemCont = document.createElement('div');\n    const todoItemTopCont = document.createElement('div');\n    const itemEditCont = document.createElement('div');\n    const titleCont = document.createElement('div');\n    const rightCont = document.createElement('div');\n    const dueDateCont = document.createElement('div');\n    const editBtn = document.createElement('div');\n    const deleteBtn = document.createElement('div');\n    const priorityCont = document.createElement('div');\n\n    todoItemCont.appendChild(todoItemTopCont);\n    todoItemCont.appendChild(itemEditCont);\n    todoItemTopCont.appendChild(titleCont);\n    todoItemTopCont.appendChild(rightCont);\n    rightCont.appendChild(dueDateCont);\n    rightCont.appendChild(editBtn);\n    rightCont.appendChild(deleteBtn);\n    todoItemTopCont.appendChild(priorityCont);\n\n    todoItemCont.classList.add('todo-item-cont');\n    todoItemCont.classList.add('todo-item-font');\n    todoItemTopCont.setAttribute('id', 'todo-item-top-cont');\n    itemEditCont.setAttribute('id', 'item-edit-cont');\n    itemEditCont.classList.add('hide-edit-cont');\n    rightCont.setAttribute('id', 'right-cont');\n    editBtn.classList.add('item-buttons');\n    deleteBtn.classList.add('item-buttons');\n    priorityCont.setAttribute('id', 'priority-cont');\n\n    if(_todoLogic__WEBPACK_IMPORTED_MODULE_0__.todoList[count].getPriority() === 'high') {\n        priorityCont.classList.add('high-priority');\n    } else if(_todoLogic__WEBPACK_IMPORTED_MODULE_0__.todoList[count].getPriority() === 'medium') {\n        priorityCont.classList.add('medium-priority');\n    } else if(_todoLogic__WEBPACK_IMPORTED_MODULE_0__.todoList[count].getPriority() === 'low') {\n        priorityCont.classList.add('low-priority');\n    }\n\n    editBtn.addEventListener('click', () => {\n        itemEditCont.classList.toggle('hide-edit-cont');\n    });\n    deleteBtn.addEventListener('click', () => {\n        document.getElementById('todo-cont').removeChild(todoItemCont);\n        _todoLogic__WEBPACK_IMPORTED_MODULE_0__.todoList.splice(count, 1);\n    });\n\n    titleCont.innerHTML = _todoLogic__WEBPACK_IMPORTED_MODULE_0__.todoList[count].getTitle();\n    dueDateCont.innerHTML = _todoLogic__WEBPACK_IMPORTED_MODULE_0__.todoList[count].getDue();\n\n    document.getElementById('todo-cont').appendChild(todoItemCont);\n};\n\n//Renders projects from projectList[].\nconst renderProject = (projCount) => {\n    const newProjDiv = document.createElement('div');\n    const projectName = _todoLogic__WEBPACK_IMPORTED_MODULE_0__.projectList[projCount];\n\n    newProjDiv.innerHTML = projectName;\n    document.getElementById('project-cont').appendChild(newProjDiv);\n    newProjDiv.setAttribute('id', 'new-proj-div');\n    newProjDiv.classList.add('new-proj-ID');\n\n    newProjDiv.addEventListener('click', () => {\n        let count = 0;\n        unselectProjs();\n        unselectCats();\n        newProjDiv.classList.add('selected');\n        clearList();\n        for(count = 0; count < _todoLogic__WEBPACK_IMPORTED_MODULE_0__.todoList.length; count++) {\n            if(_todoLogic__WEBPACK_IMPORTED_MODULE_0__.todoList[count].getProject() === projectName) {\n                renderTodoItem(count);\n            }\n        }\n    });\n};\n\n// Makes all necessary DOM changes when a category or project is selected.\nconst changeCatDOM = (category) => {\n    unselectCats();\n    unselectProjs();\n    document.getElementById(category).classList.add('selected');\n    clearList();\n};\n\nconst unselectCats = () => {\n    document.getElementById('all-cat').classList.remove('selected');\n    document.getElementById('today-cat').classList.remove('selected');\n    document.getElementById('tom-cat').classList.remove('selected');\n    document.getElementById('week-cat').classList.remove('selected');\n    document.getElementById('month-cat').classList.remove('selected');\n};\n\nconst unselectProjs = () => {\n    const projects = document.querySelectorAll('div.new-proj-ID');\n    let count;\n    for(count = 0; count < projects.length; count++) {\n        projects[count].classList.remove('selected');\n    }\n};\n\nconst clearList = () => {\n    while(document.getElementById('todo-cont').firstChild) {\n        document.getElementById('todo-cont').removeChild(document.getElementById('todo-cont').firstChild);\n    }\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/renderDOM.js?");

/***/ }),

/***/ "./src/todoLogic.js":
/*!**************************!*\
  !*** ./src/todoLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoList\": () => (/* binding */ todoList),\n/* harmony export */   \"projectList\": () => (/* binding */ projectList),\n/* harmony export */   \"createTodo\": () => (/* binding */ createTodo),\n/* harmony export */   \"addProjectToList\": () => (/* binding */ addProjectToList)\n/* harmony export */ });\nlet todoList = [];\nlet projectList = [];\n\n// Factory function for creating todo items.\nconst Todo = (title, description, dueDate, priority, project) => {\n    let complete = false;\n    const getTitle = () => title;\n    const getDesc = () => description;\n    const getDue = () => dueDate;\n    const getPriority = () => priority;\n    const getProject = () => project;\n    const isComplete = () => complete;\n\n    // add setters as well.\n\n    return { getTitle, getDesc, getDue, getPriority, getProject, isComplete }\n};\n\n// Creates todo item and pushes it into todoList array.\nconst createTodo = (title, description, dueDate, priority, project) => {\n    let newTodo = Todo(title, description, dueDate, priority, project);\n    todoList.push(newTodo);\n};\n\nconst addProjectToList = (name) => {\n    projectList.push(name);\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/todoLogic.js?");

/***/ }),

/***/ "./src/fonts/Galatea Regular Bold.woff":
/*!*********************************************!*\
  !*** ./src/fonts/Galatea Regular Bold.woff ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"86e32bd5772ea9634d21.woff\";\n\n//# sourceURL=webpack://todo-list/./src/fonts/Galatea_Regular_Bold.woff?");

/***/ }),

/***/ "./src/fonts/Galatea Regular Light.woff":
/*!**********************************************!*\
  !*** ./src/fonts/Galatea Regular Light.woff ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c06936443247f735c290.woff\";\n\n//# sourceURL=webpack://todo-list/./src/fonts/Galatea_Regular_Light.woff?");

/***/ }),

/***/ "./src/fonts/Galatea Regular Medium.woff":
/*!***********************************************!*\
  !*** ./src/fonts/Galatea Regular Medium.woff ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f34641a3d2d4558f6815.woff\";\n\n//# sourceURL=webpack://todo-list/./src/fonts/Galatea_Regular_Medium.woff?");

/***/ }),

/***/ "./src/fonts/Galatea Regular Regular.woff":
/*!************************************************!*\
  !*** ./src/fonts/Galatea Regular Regular.woff ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cf9c71d863325d26142c.woff\";\n\n//# sourceURL=webpack://todo-list/./src/fonts/Galatea_Regular_Regular.woff?");

/***/ }),

/***/ "./src/fonts/Galatea Regular Thin.woff":
/*!*********************************************!*\
  !*** ./src/fonts/Galatea Regular Thin.woff ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2e6842576da6e650c172.woff\";\n\n//# sourceURL=webpack://todo-list/./src/fonts/Galatea_Regular_Thin.woff?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;