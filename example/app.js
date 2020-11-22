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

/***/ "./example/src/app.js":
/*!****************************!*\
  !*** ./example/src/app.js ***!
  \****************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_store_store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/store/store.js */ \"./src/store/store.js\");\n\r\n\r\nconst countable = (initial = 0) => {\r\n    const { set, update, subscribe } = (0,_src_store_store_js__WEBPACK_IMPORTED_MODULE_0__.storable)(initial, () => {\r\n        console.log('got my first count subscriber');\r\n        return () => console.log('lost my last count subscriber');\r\n    });\r\n\r\n    return {\r\n        increment: value => {\r\n            value = typeof value === 'number' ? value : 1;\r\n            update(count => count += value);\r\n        },\r\n        decrement: value =>  {\r\n            value = typeof value === 'number' ? value : 1;\r\n            update(count => count -= value);\r\n        },\r\n        subscribe,\r\n        set\r\n    }\r\n}\r\n\r\nconst count = countable(1);\r\nlet unsub;\r\n\r\nconst setupCounter = (root) => {\r\n    unsub = count.subscribe(count => {\r\n        console.log(count);\r\n        root.innerText = count;\r\n    });\r\n}\r\n\r\ndocument.querySelector('#increment').addEventListener('click',() => count.increment());\r\ndocument.querySelector('#decrement').addEventListener('click',() => count.decrement());\r\ndocument.querySelector('#unsubscribe').addEventListener('click',() => unsub());\r\n\r\nsetupCounter(document.querySelector('#counter'));\n\n//# sourceURL=webpack://storable/./example/src/app.js?");

/***/ }),

/***/ "./src/lib/pubsub.js":
/*!***************************!*\
  !*** ./src/lib/pubsub.js ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ PubSub\n/* harmony export */ });\nclass PubSub {\r\n    constructor() {\r\n        this.events = {};\r\n    }\r\n\r\n    subscribe(event, callback) {\r\n\r\n        let self = this;\r\n\r\n        if(!self.events.hasOwnProperty(event)) {\r\n            self.events[event] = [];\r\n        }\r\n\r\n        self.events[event].push(callback);\r\n        \r\n        return () => self.events[event].push(callback);\r\n    }\r\n\r\n    unsubscribe(event, subscriber) {\r\n        \r\n        let self = this;\r\n        return self.events[event].splice(subscriber, 1).length >= 1 ? true : false;\r\n    }\r\n\r\n    publish(event, data = {}) {\r\n\r\n        let self = this;\r\n\r\n        if(!self.events.hasOwnProperty(event)) {\r\n            return [];\r\n        }\r\n\r\n        return self.events[event].map(callback => callback(data));\r\n    }\r\n}\n\n//# sourceURL=webpack://storable/./src/lib/pubsub.js?");

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Store\n/* harmony export */ });\n/* harmony import */ var _lib_pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/pubsub.js */ \"./src/lib/pubsub.js\");\n\r\n\r\nclass Store {\r\n\r\n    constructor(initialState, init) {\r\n        this.self = this;\r\n\r\n        self.state = initialState;\r\n        self.event = new _lib_pubsub_js__WEBPACK_IMPORTED_MODULE_0__.default();\r\n        self.init = init instanceof Function ? init : () => {};\r\n    }\r\n\r\n    set(newState) {\r\n        self.state = newState;\r\n        self.event.publish('STATE_CHANGE', newState);\r\n    }\r\n\r\n    update(mutator) {\r\n        if (mutator instanceof Function) self.state = mutator(self.state);\r\n        self.event.publish('STATE_CHANGE', self.state);\r\n    }\r\n\r\n    subscribe(subscriber) {\r\n\r\n        subscriber(self.state);\r\n\r\n        self.event.subscribe('STATE_CHANGE', subscriber);\r\n        if (self.event.events['STATE_CHANGE'].length === 1) self.cleanup = init();\r\n\r\n        return () => {\r\n            if (\r\n                    self.cleanup instanceof Function && \r\n                    self.event.unsubscribe('STATE_CHANGE', subscriber) && \r\n                    self.event.events['STATE_CHANGE'].length === 0\r\n                ) cleanup();\r\n        }\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://storable/./src/store/store.js?");

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