"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _fontsource_archivo_black_400_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fontsource/archivo-black/400.css */ \"./node_modules/@fontsource/archivo-black/400.css\");\n/* harmony import */ var _fontsource_archivo_black_400_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fontsource_archivo_black_400_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fontsource_open_sans_400_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fontsource/open-sans/400.css */ \"./node_modules/@fontsource/open-sans/400.css\");\n/* harmony import */ var _fontsource_open_sans_400_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fontsource_open_sans_400_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    const colors = {\n        brand: {\n            900: \"#fceec5\",\n            800: \"#367ad3\",\n            700: \"#285E61\",\n            600: \"#a8501a\",\n            500: \"#C53030\"\n        }\n    };\n    const fonts = {\n        heading: \"'Archivo Black', sans-serif\",\n        body: \"'Open Sans', sans-serif \"\n    };\n    const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.extendTheme)({\n        colors,\n        fonts\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ChakraProvider, {\n        theme: theme,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/_app.js\",\n            lineNumber: 30,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/_app.js\",\n        lineNumber: 29,\n        columnNumber: 7\n    }, this);\n}\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNpQztBQUNwQjtBQUNKO0FBR3hCLFNBQVNFLElBQUksS0FBd0I7UUFBeEIsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsR0FBeEI7SUFFMUIsTUFBTUMsU0FBUztRQUNiQyxPQUFPO1lBQ0wsS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7UUFDUDtJQUNGO0lBRUEsTUFBTUMsUUFBUTtRQUNWQyxTQUFVO1FBQ1ZDLE1BQU87SUFFWDtJQUdBLE1BQU1DLFFBQVFULDZEQUFXQSxDQUFDO1FBQUVJO1FBQVFFO0lBQU07SUFFMUMscUJBQ0ksOERBQUNQLDREQUFjQTtRQUFDVSxPQUFPQTtrQkFDckIsNEVBQUNQO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFJaEM7S0EzQndCRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIsIGV4dGVuZFRoZW1lIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgJ0Bmb250c291cmNlL2FyY2hpdm8tYmxhY2svNDAwLmNzcyc7XG5pbXBvcnQgJ0Bmb250c291cmNlL29wZW4tc2Fucy80MDAuY3NzJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG5cbiAgY29uc3QgY29sb3JzID0ge1xuICAgIGJyYW5kOiB7XG4gICAgICA5MDA6ICcjZmNlZWM1JyxcbiAgICAgIDgwMDogJyMzNjdhZDMnLFxuICAgICAgNzAwOiAnIzI4NUU2MScsXG4gICAgICA2MDA6ICcjYTg1MDFhJyxcbiAgICAgIDUwMDogJyNDNTMwMzAnXG4gICAgfSxcbiAgfVxuXG4gIGNvbnN0IGZvbnRzID0ge1xuICAgICAgaGVhZGluZzogYCdBcmNoaXZvIEJsYWNrJywgc2Fucy1zZXJpZmAsXG4gICAgICBib2R5OiBgJ09wZW4gU2FucycsIHNhbnMtc2VyaWYgYCxcblxuICB9XG5cblxuICBjb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHsgY29sb3JzLCBmb250cyB9KVxuICBcbiAgcmV0dXJuIChcbiAgICAgIDxDaGFrcmFQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICAgXG4gIClcbn0iXSwibmFtZXMiOlsiQ2hha3JhUHJvdmlkZXIiLCJleHRlbmRUaGVtZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNvbG9ycyIsImJyYW5kIiwiZm9udHMiLCJoZWFkaW5nIiwiYm9keSIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n"));

/***/ })

});