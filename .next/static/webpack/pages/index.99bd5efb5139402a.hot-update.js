"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/FormGrid.js":
/*!*******************************!*\
  !*** ./src/pages/FormGrid.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FormGrid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction FormGrid() {\n    _s();\n    //Empty array to store array of input info\n    const stateArr = [];\n    // state for all input fields\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // Push to array\n    stateArr.push([\n        email,\n        name,\n        comment\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.SimpleGrid, {\n            columns: [\n                1,\n                1,\n                2\n            ],\n            w: \"100%\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            textAlign: \"center\",\n            ml: [\n                5,\n                5,\n                2\n            ],\n            mr: [\n                5,\n                5,\n                2\n            ],\n            mt: 10,\n            mb: 10,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                    w: [\n                        \"240px\",\n                        \"300px\",\n                        \"710px\"\n                    ],\n                    fontWeight: 700,\n                    fontSize: [\n                        \"14px\",\n                        \"18px\",\n                        \"28px\"\n                    ],\n                    p: 5,\n                    border: \"1px solid red\",\n                    ml: 5,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                    children: \"Email Address\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                    type: \"email\",\n                                    size: \"sm\",\n                                    onChange: (e)=>setEmail(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                    children: \"Name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                    type: \"name\",\n                                    size: \"sm\",\n                                    onChange: (e)=>setName(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                    children: \"Describe your site or project:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                    type: \"name\",\n                                    size: \"lg\",\n                                    onChange: (e)=>setComment(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                            lineNumber: 27,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            colorScheme: \"red\",\n                            mt: 6,\n                            size: \"md\",\n                            variant: \"outline\",\n                            onClick: (e)=>console.log(stateArr[0], stateArr[1], stateArr[2]),\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                            lineNumber: 52,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                    w: [\n                        \"240px\",\n                        \"300px\",\n                        \"710px\"\n                    ],\n                    border: \"1px solid red\",\n                    p: 5,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                        color: \"alphaBlack.1000\",\n                        fontWeight: 700,\n                        fontSize: [\n                            \"18px\",\n                            \"28px\",\n                            \"48px\"\n                        ],\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Highlight, {\n                            query: [\n                                \"your\",\n                                \"business\",\n                                \"ideas\"\n                            ],\n                            styles: {\n                                px: \"1\",\n                                py: \"1\",\n                                rounded: \"full\",\n                                bg: \"red.500\",\n                                opacity: \"85%\"\n                            },\n                            children: \"Developing and designing responsive sites, graphics, and applications that fit your business and ideas.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n            lineNumber: 25,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(FormGrid, \"5ykVga9KiYFoMQkHDhX3zqo0MJ4=\");\n_c = FormGrid;\nvar _c;\n$RefreshReg$(_c, \"FormGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvRm9ybUdyaWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNvQjtBQUM2RTtBQUM5RjtBQUNJO0FBS2pCLFNBQVNhOztJQUVyQiwwQ0FBMEM7SUFDMUMsTUFBTUMsV0FBVyxFQUFFO0lBRW5CLDZCQUE2QjtJQUM3QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDSyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ08sU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUV2QyxnQkFBZ0I7SUFDaEJFLFNBQVNPLEtBQUs7UUFBQ047UUFBT0U7UUFBTUU7S0FBUTtJQUVyQyxxQkFDRTtrQkFDQSw0RUFBQ2pCLHdEQUFVQTtZQUFDb0IsU0FBUztnQkFBQztnQkFBRztnQkFBRzthQUFFO1lBQUVDLEdBQUU7WUFBT0MsWUFBWTtZQUFVQyxnQkFBZ0I7WUFBVUMsV0FBVztZQUFVQyxJQUFJO2dCQUFDO2dCQUFHO2dCQUFHO2FBQUU7WUFBRUMsSUFBSTtnQkFBQztnQkFBRztnQkFBRzthQUFFO1lBQUVDLElBQUk7WUFBSUMsSUFBSTs7OEJBQ3BKLDhEQUFDMUIsaURBQUdBO29CQUFDbUIsR0FBRzt3QkFBQzt3QkFBUzt3QkFBUztxQkFBUTtvQkFBRVEsWUFBWTtvQkFBS0MsVUFBVTt3QkFBQzt3QkFBUTt3QkFBUTtxQkFBTztvQkFBRUMsR0FBRztvQkFBR0MsUUFBTztvQkFBZ0JQLElBQUk7O3NDQUMzSCw4REFBQ3RCLHlEQUFXQTs7OENBQ04sOERBQUNDLHVEQUFTQTs4Q0FBQzs7Ozs7OzhDQUdMLDhEQUFDRSxtREFBS0E7b0NBQ04yQixNQUFLO29DQUNMQyxNQUFLO29DQUNMQyxVQUFVLENBQUNDLElBQU10QixTQUFTc0IsRUFBRUMsT0FBT0M7Ozs7Ozs4Q0FHekMsOERBQUNsQyx1REFBU0E7OENBQUM7Ozs7Ozs4Q0FHVCw4REFBQ0UsbURBQUtBO29DQUNOMkIsTUFBSztvQ0FDTEMsTUFBSztvQ0FDTEMsVUFBVSxDQUFDQyxJQUFNcEIsUUFBUW9CLEVBQUVDLE9BQU9DOzs7Ozs7OENBQ3BDLDhEQUFDbEMsdURBQVNBOzhDQUFDOzs7Ozs7OENBR1QsOERBQUNFLG1EQUFLQTtvQ0FBQzJCLE1BQUs7b0NBQ1pDLE1BQUs7b0NBQ0xDLFVBQVUsQ0FBQ0MsSUFBTWxCLFdBQVdrQixFQUFFQyxPQUFPQzs7Ozs7Ozs7Ozs7O3NDQUd2Qyw4REFBQy9CLG9EQUFNQTs0QkFBQ2dDLGFBQVk7NEJBQ3BCWixJQUFJOzRCQUNKTyxNQUFLOzRCQUNMTSxTQUFROzRCQUNSQyxTQUFTLENBQUNMLElBQU1NLFFBQVFDLElBQUkvQixRQUFRLENBQUMsRUFBRSxFQUFFQSxRQUFRLENBQUMsRUFBRSxFQUFFQSxRQUFRLENBQUMsRUFBRTtzQ0FDaEU7Ozs7Ozs7Ozs7Ozs4QkFFUCw4REFBQ1YsaURBQUdBO29CQUFDbUIsR0FBRzt3QkFBQzt3QkFBUzt3QkFBUztxQkFBUTtvQkFBRVcsUUFBTztvQkFBZ0JELEdBQUc7OEJBQzdELDRFQUFDOUIsa0RBQUlBO3dCQUFDMkMsT0FBTzt3QkFBbUJmLFlBQVk7d0JBQUtDLFVBQVU7NEJBQUM7NEJBQVE7NEJBQVE7eUJBQU87a0NBQ25GLDRFQUFDdEIsdURBQVNBOzRCQUNScUMsT0FBTztnQ0FBQztnQ0FBUTtnQ0FBWTs2QkFBUTs0QkFDcEM5QyxRQUFRO2dDQUFFK0MsSUFBSTtnQ0FBS0MsSUFBSTtnQ0FBS0MsU0FBUztnQ0FBUUMsSUFBSTtnQ0FBV0MsU0FBUzs0QkFBTTtzQ0FDNUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWVg7R0FsRXdCdkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0Zvcm1HcmlkLmpzPzM3MDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Gb3JtLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBTaW1wbGVHcmlkLCBUZXh0LCBCb3gsIEZvcm1Db250cm9sLCBGb3JtTGFiZWwsIEZvcm1IZWxwZXJUZXh0LCBJbnB1dCwgQnV0dG9uLCBIaWdobGlnaHQgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuIFxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1HcmlkKCkge1xuXG4gICAvL0VtcHR5IGFycmF5IHRvIHN0b3JlIGFycmF5IG9mIGlucHV0IGluZm9cbiAgIGNvbnN0IHN0YXRlQXJyID0gW107XG5cbiAgIC8vIHN0YXRlIGZvciBhbGwgaW5wdXQgZmllbGRzXG4gICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpXG4gICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxuICAgY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoXCJcIilcbiBcbiAgIC8vIFB1c2ggdG8gYXJyYXlcbiAgIHN0YXRlQXJyLnB1c2goW2VtYWlsLCBuYW1lLCBjb21tZW50XSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPFNpbXBsZUdyaWQgY29sdW1ucz17WzEsIDEsIDJdfSB3PVwiMTAwJVwiIGFsaWduSXRlbXM9eydjZW50ZXInfSBqdXN0aWZ5Q29udGVudD17J2NlbnRlcid9IHRleHRBbGlnbj17J2NlbnRlcid9IG1sPXtbNSwgNSwgMl19IG1yPXtbNSwgNSwgMl19IG10PXsxMH0gbWI9ezEwfT5cbiAgICAgICAgPEJveCB3PXtbJzI0MHB4JywgJzMwMHB4JywgJzcxMHB4J119IGZvbnRXZWlnaHQ9ezcwMH0gZm9udFNpemU9e1snMTRweCcsICcxOHB4JywgJzI4cHgnXX0gcD17NX0gYm9yZGVyPVwiMXB4IHNvbGlkIHJlZFwiIG1sPXs1fT5cbiAgICAgICAgPEZvcm1Db250cm9sPlxuICAgICAgICAgICAgICA8Rm9ybUxhYmVsPlxuICAgICAgICAgICAgICAgIEVtYWlsIEFkZHJlc3NcbiAgICAgICAgICAgICAgPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxGb3JtTGFiZWw+XG4gICAgICAgICAgICAgICAgTmFtZVxuICAgICAgICAgICAgICA8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgICA8SW5wdXQgXG4gICAgICAgICAgICAgICAgdHlwZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgPEZvcm1MYWJlbD5cbiAgICAgICAgICAgICAgICBEZXNjcmliZSB5b3VyIHNpdGUgb3IgcHJvamVjdDpcbiAgICAgICAgICAgICAgPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJuYW1lXCIgXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxnXCIgXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb21tZW50KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cInJlZFwiXG4gICAgICAgICAgICAgIG10PXs2fVxuICAgICAgICAgICAgICBzaXplPVwibWRcIiBcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gY29uc29sZS5sb2coc3RhdGVBcnJbMF0sIHN0YXRlQXJyWzFdLCBzdGF0ZUFyclsyXSApfVxuICAgICAgICAgICAgICA+U3VibWl0PC9CdXR0b24+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IHc9e1snMjQwcHgnLCAnMzAwcHgnLCAnNzEwcHgnXX0gYm9yZGVyPVwiMXB4IHNvbGlkIHJlZFwiIHA9ezV9PlxuICAgICAgICAgIDxUZXh0IGNvbG9yPXsnYWxwaGFCbGFjay4xMDAwJ30gZm9udFdlaWdodD17NzAwfSBmb250U2l6ZT17WycxOHB4JywgJzI4cHgnLCAnNDhweCddfT5cbiAgICAgICAgICA8SGlnaGxpZ2h0XG4gICAgICAgICAgICBxdWVyeT17Wyd5b3VyJywgJ2J1c2luZXNzJywgJ2lkZWFzJ119XG4gICAgICAgICAgICBzdHlsZXM9e3sgcHg6ICcxJywgcHk6ICcxJywgcm91bmRlZDogJ2Z1bGwnLCBiZzogJ3JlZC41MDAnLCBvcGFjaXR5OiAnODUlJyB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBEZXZlbG9waW5nIGFuZCBkZXNpZ25pbmcgcmVzcG9uc2l2ZSBzaXRlcywgZ3JhcGhpY3MsXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYW5kIGFwcGxpY2F0aW9ucyB0aGF0IGZpdFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHlvdXIgYnVzaW5lc3MgYW5kIGlkZWFzLlxuICAgICAgICAgICAgPC9IaWdobGlnaHQ+XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICA8L1NpbXBsZUdyaWQ+XG4gIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJTaW1wbGVHcmlkIiwiVGV4dCIsIkJveCIsIkZvcm1Db250cm9sIiwiRm9ybUxhYmVsIiwiRm9ybUhlbHBlclRleHQiLCJJbnB1dCIsIkJ1dHRvbiIsIkhpZ2hsaWdodCIsIkxpbmsiLCJ1c2VTdGF0ZSIsIkZvcm1HcmlkIiwic3RhdGVBcnIiLCJlbWFpbCIsInNldEVtYWlsIiwibmFtZSIsInNldE5hbWUiLCJjb21tZW50Iiwic2V0Q29tbWVudCIsInB1c2giLCJjb2x1bW5zIiwidyIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInRleHRBbGlnbiIsIm1sIiwibXIiLCJtdCIsIm1iIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwicCIsImJvcmRlciIsInR5cGUiLCJzaXplIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjb2xvclNjaGVtZSIsInZhcmlhbnQiLCJvbkNsaWNrIiwiY29uc29sZSIsImxvZyIsImNvbG9yIiwicXVlcnkiLCJweCIsInB5Iiwicm91bmRlZCIsImJnIiwib3BhY2l0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/FormGrid.js\n"));

/***/ })

});