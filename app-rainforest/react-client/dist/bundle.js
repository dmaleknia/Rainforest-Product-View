/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app-rainforest/react-client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app-rainforest/react-client/src/index.jsx":
/*!***************************************************!*\
  !*** ./app-rainforest/react-client/src/index.jsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/philosophic/SeniorProjects/Rainforest-Product-View/app-rainforest/react-client/src/index.jsx: Unexpected token (56:13)\\n\\n\\u001b[0m \\u001b[90m 54 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 55 | \\u001b[39m    \\u001b[36mif\\u001b[39m (view \\u001b[33m===\\u001b[39m \\u001b[32m'feed'\\u001b[39m) {\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 56 | \\u001b[39m      \\u001b[36mreturn\\u001b[39m \\u001b[33m<\\u001b[39m\\u001b[33mFeed\\u001b[39m blogs\\u001b[33m=\\u001b[39m{\\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mstate\\u001b[33m.\\u001b[39mblogs} handleClick\\u001b[33m=\\u001b[39m{(e) \\u001b[33m=>\\u001b[39m \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mchangeView(e)} \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m             \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 57 | \\u001b[39m    } \\u001b[36melse\\u001b[39m \\u001b[36mif\\u001b[39m (view \\u001b[33m===\\u001b[39m \\u001b[32m'admin'\\u001b[39m) {\\u001b[0m\\n\\u001b[0m \\u001b[90m 58 | \\u001b[39m      \\u001b[36mreturn\\u001b[39m \\u001b[33m<\\u001b[39m\\u001b[33mAdmin\\u001b[39m blogs\\u001b[33m=\\u001b[39m{\\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mstate\\u001b[33m.\\u001b[39mblogs} \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 59 | \\u001b[39m    } \\u001b[36melse\\u001b[39m \\u001b[36mif\\u001b[39m (view \\u001b[33m===\\u001b[39m \\u001b[32m'create'\\u001b[39m) {\\u001b[0m\\n    at Parser.raise (/Users/philosophic/SeniorProjects/Rainforest-Product-View/node_modules/@babel/parser/lib/index.js:3939:15)\\n    at Parser.unexpected (/Users/philosophic/SeniorProjects/Rainforest-Product-View/node_modules/@babel/parser/lib/index.js:5248:16)\\n    at Parser.parseExprAtom (/Users/philosophic/SeniorProjects/Rainforest-Product-View/node_modules/@babel/parser/lib/index.js:6328:20)\\n    at Parser.parseExprSubscripts (/Users/philosophic/SeniorProjects/Rainforest-Product-View/node_modules/@babel/parser/lib/index.js:5924:21)\\n    at Parser.parseMaybeUnary (/Users/philosophic/SeniorProjects/Rainforest-Product-View/node_modules/@babel/parser/lib/index.js:5903:21)\\n    at Parser.parseExprOps (/Users/philosophic/SeniorProjects/Rainforest-Product-View/node_modules/@babel/parser/lib/index.js:5812:21)\\n    at Parser.parseMaybeConditional (/Users/philosophic/SeniorProjects/Rainforest-Product-View/node_modules/@babel/parser/lib/index.js:5784:21)\\n    at Parser.parseMaybeAssign (/Users/philosophic/SeniorProjects/Rainforest-Product-View/node_modules/@babel/parser/lib/index.js:5731:21)\\n    at Parser.parseExpression (/Users/philosophic/SeniorProjects/Rainforest-Product-View/node_modules/@babel/parser/lib/index.js:5684:21)\\n    at Parser.parseReturnStatement (/Users/philosophic/SeniorProjects/Rainforest-Product-View/node_modules/@babel/parser/lib/index.js:7508:28)\\n    at Parser.parseStatementContent (/Users/philosophic/SeniorProjects/Rainforest-Product-View/node_modules/@babel/parser/lib/index.js:7187:21)\\n    at Parser.parseStatement (/Users/philosophic/SeniorProjects/Rainforest-Product-View/node_modules/@babel/parser/lib/index.js:7153:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/philosophic/SeniorProjects/Rainforest-Product-View/node_modules/@babel/parser/lib/index.js:7707:23)\\n    at Parser.parseBlockBody (/Users/philosophic/SeniorProjects/Rainforest-Product-View/node_modules/@babel/parser/lib/index.js:7694:10)\\n    at Parser.parseBlock (/Users/philosophic/SeniorProjects/Rainforest-Product-View/node_modules/@babel/parser/lib/index.js:7683:10)\\n    at Parser.parseStatementContent (/Users/philosophic/SeniorProjects/Rainforest-Product-View/node_modules/@babel/parser/lib/index.js:7212:21)\\n    at Parser.parseStatement (/Users/philosophic/SeniorProjects/Rainforest-Product-View/node_modules/@babel/parser/lib/index.js:7153:17)\\n    at Parser.parseIfStatement (/Users/philosophic/SeniorProjects/Rainforest-Product-View/node_modules/@babel/parser/lib/index.js:7493:28)\\n    at Parser.parseStatementContent (/Users/philosophic/SeniorProjects/Rainforest-Product-View/node_modules/@babel/parser/lib/index.js:7184:21)\\n    at Parser.parseStatement (/Users/philosophic/SeniorProjects/Rainforest-Product-View/node_modules/@babel/parser/lib/index.js:7153:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/philosophic/SeniorProjects/Rainforest-Product-View/node_modules/@babel/parser/lib/index.js:7707:23)\\n    at Parser.parseBlockBody (/Users/philosophic/SeniorProjects/Rainforest-Product-View/node_modules/@babel/parser/lib/index.js:7694:10)\\n    at Parser.parseBlock (/Users/philosophic/SeniorProjects/Rainforest-Product-View/node_modules/@babel/parser/lib/index.js:7683:10)\\n    at Parser.parseFunctionBody (/Users/philosophic/SeniorProjects/Rainforest-Product-View/node_modules/@babel/parser/lib/index.js:6933:24)\\n    at Parser.parseFunctionBodyAndFinish (/Users/philosophic/SeniorProjects/Rainforest-Product-View/node_modules/@babel/parser/lib/index.js:6913:10)\\n    at Parser.parseMethod (/Users/philosophic/SeniorProjects/Rainforest-Product-View/node_modules/@babel/parser/lib/index.js:6865:10)\\n    at Parser.pushClassMethod (/Users/philosophic/SeniorProjects/Rainforest-Product-View/node_modules/@babel/parser/lib/index.js:8087:30)\\n    at Parser.parseClassMemberWithIsStatic (/Users/philosophic/SeniorProjects/Rainforest-Product-View/node_modules/@babel/parser/lib/index.js:8006:12)\\n    at Parser.parseClassMember (/Users/philosophic/SeniorProjects/Rainforest-Product-View/node_modules/@babel/parser/lib/index.js:7948:10)\\n    at Parser.parseClassBody (/Users/philosophic/SeniorProjects/Rainforest-Product-View/node_modules/@babel/parser/lib/index.js:7903:12)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAtcmFpbmZvcmVzdC9yZWFjdC1jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app-rainforest/react-client/src/index.jsx\n");

/***/ })

/******/ });