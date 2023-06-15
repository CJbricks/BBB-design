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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FormGrid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction FormGrid() {\n    _s();\n    //Empty array to store array of input info\n    const stateArr = [];\n    // state for all input fields\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // Push to array\n    stateArr.push([\n        email,\n        name,\n        comment\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.SimpleGrid, {\n            columns: [\n                1,\n                1,\n                2\n            ],\n            w: \"100%\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            textAlign: \"center\",\n            ml: [\n                5,\n                5,\n                5\n            ],\n            mr: [\n                5,\n                5,\n                5\n            ],\n            mt: 10,\n            mb: 10,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                    w: [\n                        \"400px\",\n                        \"500px\",\n                        \"710px\"\n                    ],\n                    fontWeight: 700,\n                    fontSize: [\n                        \"14px\",\n                        \"18px\",\n                        \"28px\"\n                    ],\n                    p: 5,\n                    ml: 5,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                    children: \"Email Address\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                    type: \"email\",\n                                    size: \"sm\",\n                                    onChange: (e)=>setEmail(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                    children: \"Name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                    type: \"name\",\n                                    size: \"sm\",\n                                    onChange: (e)=>setName(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                    children: \"Describe your site or project:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                    type: \"name\",\n                                    size: \"lg\",\n                                    onChange: (e)=>setComment(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                            lineNumber: 27,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            colorScheme: \"red\",\n                            mt: 6,\n                            size: \"md\",\n                            variant: \"outline\",\n                            onClick: (e)=>console.log(stateArr[0], stateArr[1], stateArr[2]),\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                            lineNumber: 52,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                    w: [\n                        \"400px\",\n                        \"500px\",\n                        \"710px\"\n                    ],\n                    p: 5,\n                    ml: [\n                        5,\n                        5,\n                        0\n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                        color: \"alphaBlack.1000\",\n                        fontWeight: 700,\n                        fontSize: [\n                            \"18px\",\n                            \"28px\",\n                            \"48px\"\n                        ],\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Highlight, {\n                            query: [\n                                \"your\",\n                                \"business\",\n                                \"ideas\"\n                            ],\n                            styles: {\n                                px: \"1\",\n                                py: \"1\",\n                                rounded: \"full\",\n                                bg: \"red.500\",\n                                opacity: \"85%\"\n                            },\n                            children: \"Developing and designing responsive sites, graphics, and applications that fit your business and ideas.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n            lineNumber: 25,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(FormGrid, \"5ykVga9KiYFoMQkHDhX3zqo0MJ4=\");\n_c = FormGrid;\nvar _c;\n$RefreshReg$(_c, \"FormGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvRm9ybUdyaWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNvQjtBQUM2RTtBQUM5RjtBQUNJO0FBS2pCLFNBQVNhOztJQUVyQiwwQ0FBMEM7SUFDMUMsTUFBTUMsV0FBVyxFQUFFO0lBRW5CLDZCQUE2QjtJQUM3QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDSyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ08sU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUV2QyxnQkFBZ0I7SUFDaEJFLFNBQVNPLEtBQUs7UUFBQ047UUFBT0U7UUFBTUU7S0FBUTtJQUVyQyxxQkFDRTtrQkFDQSw0RUFBQ2pCLHdEQUFVQTtZQUFDb0IsU0FBUztnQkFBQztnQkFBRztnQkFBRzthQUFFO1lBQUVDLEdBQUU7WUFBT0MsWUFBWTtZQUFVQyxnQkFBZ0I7WUFBVUMsV0FBVztZQUFVQyxJQUFJO2dCQUFDO2dCQUFHO2dCQUFHO2FBQUU7WUFBRUMsSUFBSTtnQkFBQztnQkFBRztnQkFBRzthQUFFO1lBQUVDLElBQUk7WUFBSUMsSUFBSTs7OEJBQ3BKLDhEQUFDMUIsaURBQUdBO29CQUFDbUIsR0FBRzt3QkFBQzt3QkFBUzt3QkFBUztxQkFBUTtvQkFBRVEsWUFBWTtvQkFBS0MsVUFBVTt3QkFBQzt3QkFBUTt3QkFBUTtxQkFBTztvQkFBRUMsR0FBRztvQkFBR04sSUFBSTs7c0NBQ3BHLDhEQUFDdEIseURBQVdBOzs4Q0FDTiw4REFBQ0MsdURBQVNBOzhDQUFDOzs7Ozs7OENBR0wsOERBQUNFLG1EQUFLQTtvQ0FDTjBCLE1BQUs7b0NBQ0xDLE1BQUs7b0NBQ0xDLFVBQVUsQ0FBQ0MsSUFBTXJCLFNBQVNxQixFQUFFQyxPQUFPQzs7Ozs7OzhDQUd6Qyw4REFBQ2pDLHVEQUFTQTs4Q0FBQzs7Ozs7OzhDQUdULDhEQUFDRSxtREFBS0E7b0NBQ04wQixNQUFLO29DQUNMQyxNQUFLO29DQUNMQyxVQUFVLENBQUNDLElBQU1uQixRQUFRbUIsRUFBRUMsT0FBT0M7Ozs7Ozs4Q0FDcEMsOERBQUNqQyx1REFBU0E7OENBQUM7Ozs7Ozs4Q0FHVCw4REFBQ0UsbURBQUtBO29DQUFDMEIsTUFBSztvQ0FDWkMsTUFBSztvQ0FDTEMsVUFBVSxDQUFDQyxJQUFNakIsV0FBV2lCLEVBQUVDLE9BQU9DOzs7Ozs7Ozs7Ozs7c0NBR3ZDLDhEQUFDOUIsb0RBQU1BOzRCQUFDK0IsYUFBWTs0QkFDcEJYLElBQUk7NEJBQ0pNLE1BQUs7NEJBQ0xNLFNBQVE7NEJBQ1JDLFNBQVMsQ0FBQ0wsSUFBTU0sUUFBUUMsSUFBSTlCLFFBQVEsQ0FBQyxFQUFFLEVBQUVBLFFBQVEsQ0FBQyxFQUFFLEVBQUVBLFFBQVEsQ0FBQyxFQUFFO3NDQUNoRTs7Ozs7Ozs7Ozs7OzhCQUVQLDhEQUFDVixpREFBR0E7b0JBQUNtQixHQUFHO3dCQUFDO3dCQUFTO3dCQUFTO3FCQUFRO29CQUFFVSxHQUFHO29CQUFHTixJQUFJO3dCQUFDO3dCQUFHO3dCQUFHO3FCQUFFOzhCQUN0RCw0RUFBQ3hCLGtEQUFJQTt3QkFBQzBDLE9BQU87d0JBQW1CZCxZQUFZO3dCQUFLQyxVQUFVOzRCQUFDOzRCQUFROzRCQUFRO3lCQUFPO2tDQUNuRiw0RUFBQ3RCLHVEQUFTQTs0QkFDUm9DLE9BQU87Z0NBQUM7Z0NBQVE7Z0NBQVk7NkJBQVE7NEJBQ3BDN0MsUUFBUTtnQ0FBRThDLElBQUk7Z0NBQUtDLElBQUk7Z0NBQUtDLFNBQVM7Z0NBQVFDLElBQUk7Z0NBQVdDLFNBQVM7NEJBQU07c0NBQzVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlYO0dBbEV3QnRDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9Gb3JtR3JpZC5qcz8zNzAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvRm9ybS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgU2ltcGxlR3JpZCwgVGV4dCwgQm94LCBGb3JtQ29udHJvbCwgRm9ybUxhYmVsLCBGb3JtSGVscGVyVGV4dCwgSW5wdXQsIEJ1dHRvbiwgSGlnaGxpZ2h0IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbiBcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtR3JpZCgpIHtcblxuICAgLy9FbXB0eSBhcnJheSB0byBzdG9yZSBhcnJheSBvZiBpbnB1dCBpbmZvXG4gICBjb25zdCBzdGF0ZUFyciA9IFtdO1xuXG4gICAvLyBzdGF0ZSBmb3IgYWxsIGlucHV0IGZpZWxkc1xuICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKVxuICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIilcbiAgIGNvbnN0IFtjb21tZW50LCBzZXRDb21tZW50XSA9IHVzZVN0YXRlKFwiXCIpXG4gXG4gICAvLyBQdXNoIHRvIGFycmF5XG4gICBzdGF0ZUFyci5wdXNoKFtlbWFpbCwgbmFtZSwgY29tbWVudF0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxTaW1wbGVHcmlkIGNvbHVtbnM9e1sxLCAxLCAyXX0gdz1cIjEwMCVcIiBhbGlnbkl0ZW1zPXsnY2VudGVyJ30ganVzdGlmeUNvbnRlbnQ9eydjZW50ZXInfSB0ZXh0QWxpZ249eydjZW50ZXInfSBtbD17WzUsIDUsIDVdfSBtcj17WzUsIDUsIDVdfSBtdD17MTB9IG1iPXsxMH0+XG4gICAgICAgIDxCb3ggdz17Wyc0MDBweCcsICc1MDBweCcsICc3MTBweCddfSBmb250V2VpZ2h0PXs3MDB9IGZvbnRTaXplPXtbJzE0cHgnLCAnMThweCcsICcyOHB4J119IHA9ezV9IG1sPXs1fT5cbiAgICAgICAgPEZvcm1Db250cm9sPlxuICAgICAgICAgICAgICA8Rm9ybUxhYmVsPlxuICAgICAgICAgICAgICAgIEVtYWlsIEFkZHJlc3NcbiAgICAgICAgICAgICAgPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxGb3JtTGFiZWw+XG4gICAgICAgICAgICAgICAgTmFtZVxuICAgICAgICAgICAgICA8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgICA8SW5wdXQgXG4gICAgICAgICAgICAgICAgdHlwZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgPEZvcm1MYWJlbD5cbiAgICAgICAgICAgICAgICBEZXNjcmliZSB5b3VyIHNpdGUgb3IgcHJvamVjdDpcbiAgICAgICAgICAgICAgPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJuYW1lXCIgXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxnXCIgXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb21tZW50KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cInJlZFwiXG4gICAgICAgICAgICAgIG10PXs2fVxuICAgICAgICAgICAgICBzaXplPVwibWRcIiBcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gY29uc29sZS5sb2coc3RhdGVBcnJbMF0sIHN0YXRlQXJyWzFdLCBzdGF0ZUFyclsyXSApfVxuICAgICAgICAgICAgICA+U3VibWl0PC9CdXR0b24+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IHc9e1snNDAwcHgnLCAnNTAwcHgnLCAnNzEwcHgnXX0gcD17NX0gbWw9e1s1LCA1LCAwXX0+XG4gICAgICAgICAgPFRleHQgY29sb3I9eydhbHBoYUJsYWNrLjEwMDAnfSBmb250V2VpZ2h0PXs3MDB9IGZvbnRTaXplPXtbJzE4cHgnLCAnMjhweCcsICc0OHB4J119PlxuICAgICAgICAgIDxIaWdobGlnaHRcbiAgICAgICAgICAgIHF1ZXJ5PXtbJ3lvdXInLCAnYnVzaW5lc3MnLCAnaWRlYXMnXX1cbiAgICAgICAgICAgIHN0eWxlcz17eyBweDogJzEnLCBweTogJzEnLCByb3VuZGVkOiAnZnVsbCcsIGJnOiAncmVkLjUwMCcsIG9wYWNpdHk6ICc4NSUnIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgICAgIERldmVsb3BpbmcgYW5kIGRlc2lnbmluZyByZXNwb25zaXZlIHNpdGVzLCBncmFwaGljcyxcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBhbmQgYXBwbGljYXRpb25zIHRoYXQgZml0XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgeW91ciBidXNpbmVzcyBhbmQgaWRlYXMuXG4gICAgICAgICAgICA8L0hpZ2hsaWdodD5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgIDwvU2ltcGxlR3JpZD5cbiAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIlNpbXBsZUdyaWQiLCJUZXh0IiwiQm94IiwiRm9ybUNvbnRyb2wiLCJGb3JtTGFiZWwiLCJGb3JtSGVscGVyVGV4dCIsIklucHV0IiwiQnV0dG9uIiwiSGlnaGxpZ2h0IiwiTGluayIsInVzZVN0YXRlIiwiRm9ybUdyaWQiLCJzdGF0ZUFyciIsImVtYWlsIiwic2V0RW1haWwiLCJuYW1lIiwic2V0TmFtZSIsImNvbW1lbnQiLCJzZXRDb21tZW50IiwicHVzaCIsImNvbHVtbnMiLCJ3IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwidGV4dEFsaWduIiwibWwiLCJtciIsIm10IiwibWIiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJwIiwidHlwZSIsInNpemUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbG9yU2NoZW1lIiwidmFyaWFudCIsIm9uQ2xpY2siLCJjb25zb2xlIiwibG9nIiwiY29sb3IiLCJxdWVyeSIsInB4IiwicHkiLCJyb3VuZGVkIiwiYmciLCJvcGFjaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/FormGrid.js\n"));

/***/ })

});