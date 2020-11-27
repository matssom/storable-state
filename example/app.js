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
/*! export store [provided] [no usage info] [missing usage info prevents renaming] */
/*! export writable [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => /* binding */ store,\n/* harmony export */   \"writable\": () => /* binding */ writable\n/* harmony export */ });\n/* harmony import */ var _store_store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/store.js */ \"./dist/store/store.js\");\n/* harmony import */ var _store_writable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/writable.js */ \"./dist/store/writable.js\");\n// Author: Mats Sommervold - https://github.com/matssom/svelte-storable.git - MIT license\r\n\r\n\r\nconst store = (value, start) => new _store_store_js__WEBPACK_IMPORTED_MODULE_0__.default(value, start);\r\nconst writable = (value, start) => new _store_writable_js__WEBPACK_IMPORTED_MODULE_1__.default(value, start);\r\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://storable-state/./dist/index.js?");

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

/***/ "./dist/store/store.js":
/*!*****************************!*\
  !*** ./dist/store/store.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Store\n/* harmony export */ });\n/* harmony import */ var _lib_pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/pubsub.js */ \"./dist/lib/pubsub.js\");\n\r\nclass Store {\r\n    /**\r\n     * Creates a store that allows reading by subscription.\r\n     * @param value initial value\r\n     * @param start start and stop notifications for subscriptions\r\n     */\r\n    constructor(value, start) {\r\n        this.state = value;\r\n        this.event = new _lib_pubsub_js__WEBPACK_IMPORTED_MODULE_0__.default();\r\n        this.start = start;\r\n        this.set = this.set.bind(this);\r\n        this.update = this.update.bind(this);\r\n        this.subscribe = this.subscribe.bind(this);\r\n    }\r\n    set(newState) {\r\n        throw new Error(\"Setting value of store is not allowed. Use writable instead\");\r\n    }\r\n    update(mutator) {\r\n        throw new Error(\"Updating store is not allowed. Use writable instead\");\r\n    }\r\n    subscribe(subscriber) {\r\n        this.event.subscribe('STATE_CHANGE', subscriber);\r\n        if (this.event.events['STATE_CHANGE'].length === 1)\r\n            this.cleanup = this.start();\r\n        subscriber(this.state);\r\n        return () => {\r\n            if (this.cleanup instanceof Function &&\r\n                this.event.unsubscribe('STATE_CHANGE', subscriber) &&\r\n                this.event.events['STATE_CHANGE'].length === 0) {\r\n                this.cleanup();\r\n            }\r\n        };\r\n    }\r\n}\r\n//# sourceMappingURL=store.js.map\n\n//# sourceURL=webpack://storable-state/./dist/store/store.js?");

/***/ }),

/***/ "./dist/store/writable.js":
/*!********************************!*\
  !*** ./dist/store/writable.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Writable\n/* harmony export */ });\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ \"./dist/store/store.js\");\n\r\nclass Writable extends _store_js__WEBPACK_IMPORTED_MODULE_0__.default {\r\n    /**\r\n     * Creates a `Writable` store that allows reading and writing.\r\n     * @param value initial value\r\n     * @param start start and stop notifications for subscriptions\r\n     */\r\n    constructor(value, start) {\r\n        super(value, start);\r\n    }\r\n    set(newState) {\r\n        this.state = newState;\r\n        this.event.publish('STATE_CHANGE', newState);\r\n    }\r\n    update(mutator) {\r\n        this.state = mutator(this.state);\r\n        this.event.publish('STATE_CHANGE', this.state);\r\n    }\r\n}\r\n//# sourceMappingURL=writable.js.map\n\n//# sourceURL=webpack://storable-state/./dist/store/writable.js?");

/***/ }),

/***/ "./example/src/app.js":
/*!****************************!*\
  !*** ./example/src/app.js ***!
  \****************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dist_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dist/index.js */ \"./dist/index.js\");\n\r\n\r\nconst countable = (initial = 0) => {\r\n    const { set, update, subscribe } = (0,_dist_index_js__WEBPACK_IMPORTED_MODULE_0__.writable)(initial, () => {\r\n        console.log('got my first count subscriber');\r\n        return () => console.log('lost my last count subscriber');\r\n    });\r\n\r\n    return {\r\n        increment: value => {\r\n            value = typeof value === 'number' ? value : 1;\r\n            update(count => count += value);\r\n        },\r\n        decrement: value =>  {\r\n            value = typeof value === 'number' ? value : 1;\r\n            update(count => count -= value);\r\n        },\r\n        subscribe,\r\n        set\r\n    }\r\n}\r\n\r\nconst count = countable(1);\r\nlet unsub;\r\n\r\nconst setupCounter = (root) => {\r\n    unsub = count.subscribe(count => {\r\n        console.log(count);\r\n        root.innerText = count;\r\n    });\r\n}\r\n\r\ndocument.querySelector('#increment').addEventListener('click',() => count.increment());\r\ndocument.querySelector('#decrement').addEventListener('click',() => count.decrement());\r\ndocument.querySelector('#unsubscribe').addEventListener('click',() => unsub());\r\n\r\nsetupCounter(document.querySelector('#counter'));\n\n//# sourceURL=webpack://storable-state/./example/src/app.js?");

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