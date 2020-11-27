/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/*! namespace exports */
/*! export readable [provided] [no usage info] [missing usage info prevents renaming] */
/*! export storable [provided] [no usage info] [missing usage info prevents renaming] */
/*! export writable [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"writable\": () => /* binding */ writable,\n/* harmony export */   \"readable\": () => /* binding */ readable,\n/* harmony export */   \"storable\": () => /* binding */ storable\n/* harmony export */ });\n/* harmony import */ var _store_writable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/writable.js */ \"./dist/store/writable.js\");\n/* harmony import */ var _store_readable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/readable.js */ \"./dist/store/readable.js\");\n/* harmony import */ var _store_storable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/storable.js */ \"./dist/store/storable.js\");\n// Author: Mats Sommervold - https://github.com/matssom/svelte-storable.git - MIT license\r\n\r\n\r\n\r\nconst writable = (value, start) => (0,_store_writable_js__WEBPACK_IMPORTED_MODULE_0__.default)(value, start);\r\nconst readable = (value, start) => (0,_store_readable_js__WEBPACK_IMPORTED_MODULE_1__.default)(value, start);\r\nconst storable = (key, value, start) => (0,_store_storable_js__WEBPACK_IMPORTED_MODULE_2__.default)(key, value, start);\r\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://storable-state/./dist/index.js?");

/***/ }),

/***/ "./dist/lib/pubsub.js":
/*!****************************!*\
  !*** ./dist/lib/pubsub.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ PubSub\n/* harmony export */ });\nclass PubSub {\r\n    constructor() {\r\n        this.events = {};\r\n    }\r\n    subscribe(event, callback) {\r\n        let self = this;\r\n        if (!self.events.hasOwnProperty(event)) {\r\n            self.events[event] = [];\r\n        }\r\n        self.events[event].push(callback);\r\n        return () => self.events[event].push(callback);\r\n    }\r\n    unsubscribe(event, subscriber) {\r\n        let self = this;\r\n        return self.events[event].splice(subscriber, 1).length >= 1 ? true : false;\r\n    }\r\n    publish(event, data = {}) {\r\n        let self = this;\r\n        if (!self.events.hasOwnProperty(event)) {\r\n            return [];\r\n        }\r\n        return self.events[event].map(callback => callback(data));\r\n    }\r\n}\r\n//# sourceMappingURL=pubsub.js.map\n\n//# sourceURL=webpack://storable-state/./dist/lib/pubsub.js?");

/***/ }),

/***/ "./dist/store/readable.js":
/*!********************************!*\
  !*** ./dist/store/readable.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ \"./dist/store/store.js\");\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((value, start) => {\r\n    return { subscribe: new _store_js__WEBPACK_IMPORTED_MODULE_0__.default(value, start).subscribe };\r\n});\r\n//# sourceMappingURL=readable.js.map\n\n//# sourceURL=webpack://storable-state/./dist/store/readable.js?");

/***/ }),

/***/ "./dist/store/storable.js":
/*!********************************!*\
  !*** ./dist/store/storable.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ \"./dist/store/store.js\");\n\r\nclass Storable extends _store_js__WEBPACK_IMPORTED_MODULE_0__.default {\r\n    constructor(key, value, start) {\r\n        super(value, start);\r\n        this.key = key;\r\n        this.retrieve();\r\n    }\r\n    save(value) {\r\n        localStorage.setItem(this.key, JSON.stringify(value));\r\n    }\r\n    retrieve() {\r\n        const value = localStorage.getItem(this.key);\r\n        if (!!value)\r\n            this.set(JSON.parse(value));\r\n    }\r\n    set(newValue) {\r\n        super.set(newValue);\r\n        this.save(newValue);\r\n    }\r\n    update(mutator) {\r\n        super.update(mutator);\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((key, value, start) => {\r\n    return new Storable(key, value, start);\r\n});\r\n//# sourceMappingURL=storable.js.map\n\n//# sourceURL=webpack://storable-state/./dist/store/storable.js?");

/***/ }),

/***/ "./dist/store/store.js":
/*!*****************************!*\
  !*** ./dist/store/store.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Store\n/* harmony export */ });\n/* harmony import */ var _lib_pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/pubsub.js */ \"./dist/lib/pubsub.js\");\n\r\nclass Store {\r\n    /**\r\n     * Creates a store that allows reading by subscription.\r\n     * @param value initial value\r\n     * @param start start and stop notifications for subscriptions\r\n     */\r\n    constructor(value, start) {\r\n        this.state = value;\r\n        this.event = new _lib_pubsub_js__WEBPACK_IMPORTED_MODULE_0__.default();\r\n        this.start = start;\r\n        this.set = this.set.bind(this);\r\n        this.update = this.update.bind(this);\r\n        this.subscribe = this.subscribe.bind(this);\r\n    }\r\n    set(newValue) {\r\n        this.state = newValue;\r\n        this.event.publish('STATE_CHANGE', newValue);\r\n    }\r\n    update(mutator) {\r\n        this.set(mutator(this.state));\r\n    }\r\n    subscribe(subscriber) {\r\n        this.event.subscribe('STATE_CHANGE', subscriber);\r\n        if (this.event.events['STATE_CHANGE'].length === 1 && this.start)\r\n            this.cleanup = this.start(this.set);\r\n        subscriber(this.state);\r\n        return () => {\r\n            if (this.event.unsubscribe('STATE_CHANGE', subscriber) &&\r\n                this.event.events['STATE_CHANGE'].length === 0) {\r\n                if (this.cleanup)\r\n                    this.cleanup();\r\n            }\r\n        };\r\n    }\r\n}\r\n//# sourceMappingURL=store.js.map\n\n//# sourceURL=webpack://storable-state/./dist/store/store.js?");

/***/ }),

/***/ "./dist/store/writable.js":
/*!********************************!*\
  !*** ./dist/store/writable.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ \"./dist/store/store.js\");\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((value, start) => {\r\n    return new _store_js__WEBPACK_IMPORTED_MODULE_0__.default(value, start);\r\n});\r\n//# sourceMappingURL=writable.js.map\n\n//# sourceURL=webpack://storable-state/./dist/store/writable.js?");

/***/ }),

/***/ "./example/src/app.js":
/*!****************************!*\
  !*** ./example/src/app.js ***!
  \****************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storable.js */ \"./example/src/storable.js\");\n// import './readable.js';\r\n\n\n//# sourceURL=webpack://storable-state/./example/src/app.js?");

/***/ }),

/***/ "./example/src/storable.js":
/*!*********************************!*\
  !*** ./example/src/storable.js ***!
  \*********************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dist_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dist/index.js */ \"./dist/index.js\");\n\r\n\r\nconst countable = (key) => {\r\n    const { set, update, subscribe} = (0,_dist_index_js__WEBPACK_IMPORTED_MODULE_0__.storable)(key, 0, () => {\r\n        console.log(\"sub\")\r\n        return () => console.log(\"unsub\")\r\n    });\r\n\r\n    return {\r\n        increment: () => update(value => value += 1),\r\n        decrement: () => update(value => value -= 1),\r\n        subscribe\r\n    }\r\n}\r\n\r\nconst count = countable();\r\nlet unsub;\r\n\r\n\r\nconst setupCounter = (root) => {\r\n    unsub = count.subscribe(count => {\r\n        root.innerText = count;\r\n    });\r\n}\r\n\r\ndocument.querySelector('#increment').addEventListener('click',() => count.increment());\r\ndocument.querySelector('#decrement').addEventListener('click',() => count.decrement());\r\ndocument.querySelector('#unsubscribe').addEventListener('click',() => unsub());\r\ndocument.querySelector('#subscribe').addEventListener('click',() => setupCounter(document.querySelector('#counter')));\n\n//# sourceURL=webpack://storable-state/./example/src/storable.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./example/src/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;