/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _reactRedux = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-redux\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _AppContainer = __webpack_require__(1);
	
	var _AppContainer2 = _interopRequireDefault(_AppContainer);
	
	var _store = __webpack_require__(2);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import {Renderer, Camera, Scene} from 'react-threejs'
	
	(0, _reactDom.render)(_react2.default.createElement(_reactRedux.Provider, { store: _store2.default }), document.getElementById("main"));

/***/ },
/* 1 */
/***/ function(module, exports) {

	// import React, { Component } from 'react'
	// import { AudioContextComponent, Destination } from 'react-audio'
	// import Sample from './components/Sample'
	
	// var Context = window.AudioContext || window.webkitAudioContext
	// var context = new Context();
	// var testBuffer = null;
	
	// // function loadSound(url) {
	// //   var request = new XMLHttpRequest();
	// //   request.open('GET', '/sounds/heaven_vox.wav', true);
	// //   request.responseType = 'arraybuffer';
	
	// //   // Decode asynchronously
	// //   request.onload = function() {
	// //     context.decodeAudioData(request.response, function(buffer) {
	// //       testBuffer = buffer;
	// //     }, onError);
	// //   }
	// //   request.send();
	// // }
	
	// // function playSound(buffer) {
	// //   var source = context.createBufferSource();
	// //   source.buffer = buffer;                    
	// //   source.start(0);                         
	// // }
	
	
	// import { 
	//   Oscillator,
	//   BiquadFilter,
	//   Delay,
	//   DynamicsCompressor,
	//   StereoPanner,
	//   Gain,
	//   WaveShaper
	// } from 'react-audio'
	
	// // in a React render()
	
	
	// export default class AppContainer extends Component {
	//   // componentDidMount() {
	//   //   this.animate()
	//   // }
	
	//   // animate = time => {
	//   //   if (this.state && !this.state.startTime) { this.setState({startTime: time}) }
	//   //   requestAnimationFrame(this.animate)
	//   //   this.setState({time})
	//   // }
	
	// 	render() {
	//     // console.log(this.state)
	//     // if (!this.state || !this.state.startTime || !this.state.time) {
	//     //   return null
	//     // }
	// 		return (
	// 		<AudioContextComponent audioContext={context}> 
	
	//       <Sample url='/sounds/heaven_vox.wav' >
	//         <Gain />
	//         <DynamicsCompressor />
	//         <StereoPanner />
	//         <Delay />
	//         <WaveShaper />
	//         <Destination />
	//       </Sample>
	//        <Sample url='/sounds/emotion_pad.wav' >
	//         <Gain />
	//         <BiquadFilter />
	//         <DynamicsCompressor />
	//         <StereoPanner />
	//         <Delay />
	//         <WaveShaper />
	//         <Destination />
	//       </Sample>
	//     </AudioContextComponent>
	// 		)
	// 	}
	// } 
	"use strict";

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"redux\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _reducers = __webpack_require__(3);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _reduxLogger = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"redux-logger\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	var _reduxThunk = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"redux-thunk\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)((0, _reduxLogger2.default)(), _reduxThunk2.default));

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var initialState = {};
	
	var rootReducer = function rootReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    default:
	      return state;
	  }
	};
	
	exports.default = rootReducer;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map