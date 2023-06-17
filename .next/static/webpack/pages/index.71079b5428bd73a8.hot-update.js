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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FormGrid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction FormGrid() {\n    _s();\n    //Empty array to store array of input info\n    const stateArr = [];\n    // state for all input fields\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // Push to array\n    stateArr.push([\n        email,\n        name,\n        comment\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.SimpleGrid, {\n            columns: [\n                1,\n                1,\n                2\n            ],\n            w: \"100%\",\n            align: \"center\",\n            justify: \"center\",\n            textAlign: \"center\",\n            ml: [\n                5,\n                5,\n                8\n            ],\n            mr: [\n                5,\n                5,\n                8\n            ],\n            mt: 10,\n            mb: 10,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                    w: [\n                        \"400px\",\n                        \"500px\",\n                        \"710px\"\n                    ],\n                    fontWeight: 700,\n                    fontSize: [\n                        \"14px\",\n                        \"18px\",\n                        \"32px\"\n                    ],\n                    p: 5,\n                    ml: 5,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                            as: \"h2\",\n                            size: \"2xl\",\n                            color: \"red.600\",\n                            mb: 4,\n                            children: \"Contact us for a Quote\"\n                        }, void 0, false, {\n                            fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                    children: \"Email Address\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                    type: \"email\",\n                                    size: \"sm\",\n                                    onChange: (e)=>setEmail(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                    children: \"Name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                    type: \"name\",\n                                    size: \"sm\",\n                                    onChange: (e)=>setName(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                    children: \"Describe your site or project:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                    type: \"name\",\n                                    size: \"lg\",\n                                    onChange: (e)=>setComment(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                            lineNumber: 30,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            colorScheme: \"red\",\n                            mt: 6,\n                            size: \"md\",\n                            variant: \"outline\",\n                            onClick: (e)=>console.log(stateArr[0], stateArr[1], stateArr[2]),\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                            lineNumber: 55,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                    w: [\n                        \"400px\",\n                        \"500px\",\n                        \"710px\"\n                    ],\n                    p: 5,\n                    ml: [\n                        5,\n                        5,\n                        0\n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                        color: \"alphaBlack.1000\",\n                        fontWeight: 700,\n                        fontSize: [\n                            \"18px\",\n                            \"28px\",\n                            \"48px\"\n                        ],\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Highlight, {\n                            query: [\n                                \"your\",\n                                \"business\",\n                                \"ideas\"\n                            ],\n                            styles: {\n                                px: \"1\",\n                                py: \"1\",\n                                rounded: \"full\",\n                                bg: \"red.500\",\n                                opacity: \"85%\"\n                            },\n                            children: \"Developing and designing responsive sites, graphics, and applications that fit your business and ideas.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n            lineNumber: 26,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(FormGrid, \"5ykVga9KiYFoMQkHDhX3zqo0MJ4=\");\n_c = FormGrid;\nvar _c;\n$RefreshReg$(_c, \"FormGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvRm9ybUdyaWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNvQjtBQUNzRjtBQUN2RztBQUNJO0FBS2pCLFNBQVNjOztJQUVyQiwwQ0FBMEM7SUFDMUMsTUFBTUMsV0FBVyxFQUFFO0lBRW5CLDZCQUE2QjtJQUM3QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDSyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ08sU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUV2QyxnQkFBZ0I7SUFDaEJFLFNBQVNPLEtBQUs7UUFBQ047UUFBT0U7UUFBTUU7S0FBUTtJQUVyQyxxQkFDRTtrQkFFQSw0RUFBQ2xCLHdEQUFVQTtZQUFDcUIsU0FBUztnQkFBQztnQkFBRztnQkFBRzthQUFFO1lBQUVDLEdBQUU7WUFBT0MsT0FBTztZQUFVQyxTQUFTO1lBQVVDLFdBQVc7WUFBVUMsSUFBSTtnQkFBQztnQkFBRztnQkFBRzthQUFFO1lBQUVDLElBQUk7Z0JBQUM7Z0JBQUc7Z0JBQUc7YUFBRTtZQUFFQyxJQUFJO1lBQUlDLElBQUk7OzhCQUV4SSw4REFBQzNCLGlEQUFHQTtvQkFBQ29CLEdBQUc7d0JBQUM7d0JBQVM7d0JBQVM7cUJBQVE7b0JBQUVRLFlBQVk7b0JBQUtDLFVBQVU7d0JBQUM7d0JBQVE7d0JBQVE7cUJBQU87b0JBQUVDLEdBQUc7b0JBQUdOLElBQUk7O3NDQUNsRyw4REFBQ2pCLHFEQUFPQTs0QkFBQ3dCLElBQUk7NEJBQU1DLE1BQU07NEJBQU9DLE9BQU87NEJBQVdOLElBQUk7c0NBQUc7Ozs7OztzQ0FDM0QsOERBQUMxQix5REFBV0E7OzhDQUNOLDhEQUFDQyx1REFBU0E7OENBQUM7Ozs7Ozs4Q0FHTCw4REFBQ0UsbURBQUtBO29DQUNOOEIsTUFBSztvQ0FDTEYsTUFBSztvQ0FDTEcsVUFBVSxDQUFDQyxJQUFNdkIsU0FBU3VCLEVBQUVDLE9BQU9DOzs7Ozs7OENBR3pDLDhEQUFDcEMsdURBQVNBOzhDQUFDOzs7Ozs7OENBR1QsOERBQUNFLG1EQUFLQTtvQ0FDTjhCLE1BQUs7b0NBQ0xGLE1BQUs7b0NBQ0xHLFVBQVUsQ0FBQ0MsSUFBTXJCLFFBQVFxQixFQUFFQyxPQUFPQzs7Ozs7OzhDQUNwQyw4REFBQ3BDLHVEQUFTQTs4Q0FBQzs7Ozs7OzhDQUdULDhEQUFDRSxtREFBS0E7b0NBQUM4QixNQUFLO29DQUNaRixNQUFLO29DQUNMRyxVQUFVLENBQUNDLElBQU1uQixXQUFXbUIsRUFBRUMsT0FBT0M7Ozs7Ozs7Ozs7OztzQ0FHdkMsOERBQUNqQyxvREFBTUE7NEJBQUNrQyxhQUFZOzRCQUNwQmIsSUFBSTs0QkFDSk0sTUFBSzs0QkFDTFEsU0FBUTs0QkFDUkMsU0FBUyxDQUFDTCxJQUFNTSxRQUFRQyxJQUFJaEMsUUFBUSxDQUFDLEVBQUUsRUFBRUEsUUFBUSxDQUFDLEVBQUUsRUFBRUEsUUFBUSxDQUFDLEVBQUU7c0NBQ2hFOzs7Ozs7Ozs7Ozs7OEJBRVAsOERBQUNYLGlEQUFHQTtvQkFBQ29CLEdBQUc7d0JBQUM7d0JBQVM7d0JBQVM7cUJBQVE7b0JBQUVVLEdBQUc7b0JBQUdOLElBQUk7d0JBQUM7d0JBQUc7d0JBQUc7cUJBQUU7OEJBQ3RELDRFQUFDekIsa0RBQUlBO3dCQUFDa0MsT0FBTzt3QkFBbUJMLFlBQVk7d0JBQUtDLFVBQVU7NEJBQUM7NEJBQVE7NEJBQVE7eUJBQU87a0NBQ25GLDRFQUFDdkIsdURBQVNBOzRCQUNSc0MsT0FBTztnQ0FBQztnQ0FBUTtnQ0FBWTs2QkFBUTs0QkFDcEMvQyxRQUFRO2dDQUFFZ0QsSUFBSTtnQ0FBS0MsSUFBSTtnQ0FBS0MsU0FBUztnQ0FBUUMsSUFBSTtnQ0FBV0MsU0FBUzs0QkFBTTtzQ0FDNUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWVg7R0FyRXdCdkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0Zvcm1HcmlkLmpzPzM3MDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Gb3JtLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBTaW1wbGVHcmlkLCBUZXh0LCBCb3gsIEZvcm1Db250cm9sLCBGb3JtTGFiZWwsIEZvcm1IZWxwZXJUZXh0LCBJbnB1dCwgQnV0dG9uLCBIaWdobGlnaHQsIEhlYWRpbmcgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuIFxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1HcmlkKCkge1xuXG4gICAvL0VtcHR5IGFycmF5IHRvIHN0b3JlIGFycmF5IG9mIGlucHV0IGluZm9cbiAgIGNvbnN0IHN0YXRlQXJyID0gW107XG5cbiAgIC8vIHN0YXRlIGZvciBhbGwgaW5wdXQgZmllbGRzXG4gICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpXG4gICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxuICAgY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoXCJcIilcbiBcbiAgIC8vIFB1c2ggdG8gYXJyYXlcbiAgIHN0YXRlQXJyLnB1c2goW2VtYWlsLCBuYW1lLCBjb21tZW50XSlcblxuICByZXR1cm4gKFxuICAgIDw+XG5cbiAgICA8U2ltcGxlR3JpZCBjb2x1bW5zPXtbMSwgMSwgMl19IHc9XCIxMDAlXCIgYWxpZ249eydjZW50ZXInfSBqdXN0aWZ5PXsnY2VudGVyJ30gdGV4dEFsaWduPXsnY2VudGVyJ30gbWw9e1s1LCA1LCA4XX0gbXI9e1s1LCA1LCA4XX0gbXQ9ezEwfSBtYj17MTB9PlxuICAgICAgXG4gICAgICAgIDxCb3ggdz17Wyc0MDBweCcsICc1MDBweCcsICc3MTBweCddfSBmb250V2VpZ2h0PXs3MDB9IGZvbnRTaXplPXtbJzE0cHgnLCAnMThweCcsICczMnB4J119IHA9ezV9IG1sPXs1fT5cbiAgICAgICAgICA8SGVhZGluZyBhcz17J2gyJ30gc2l6ZT17JzJ4bCd9IGNvbG9yPXsncmVkLjYwMCd9IG1iPXs0fT5Db250YWN0IHVzIGZvciBhIFF1b3RlPC9IZWFkaW5nPlxuICAgICAgICA8Rm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgIDxGb3JtTGFiZWw+XG4gICAgICAgICAgICAgICAgRW1haWwgQWRkcmVzc1xuICAgICAgICAgICAgICA8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0IFxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEZvcm1MYWJlbD5cbiAgICAgICAgICAgICAgICBOYW1lXG4gICAgICAgICAgICAgIDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICAgIDxJbnB1dCBcbiAgICAgICAgICAgICAgICB0eXBlPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgICA8Rm9ybUxhYmVsPlxuICAgICAgICAgICAgICAgIERlc2NyaWJlIHlvdXIgc2l0ZSBvciBwcm9qZWN0OlxuICAgICAgICAgICAgICA8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cIm5hbWVcIiBcbiAgICAgICAgICAgICAgICBzaXplPVwibGdcIiBcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbW1lbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwicmVkXCJcbiAgICAgICAgICAgICAgbXQ9ezZ9XG4gICAgICAgICAgICAgIHNpemU9XCJtZFwiIFxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBjb25zb2xlLmxvZyhzdGF0ZUFyclswXSwgc3RhdGVBcnJbMV0sIHN0YXRlQXJyWzJdICl9XG4gICAgICAgICAgICAgID5TdWJtaXQ8L0J1dHRvbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggdz17Wyc0MDBweCcsICc1MDBweCcsICc3MTBweCddfSBwPXs1fSBtbD17WzUsIDUsIDBdfT5cbiAgICAgICAgICA8VGV4dCBjb2xvcj17J2FscGhhQmxhY2suMTAwMCd9IGZvbnRXZWlnaHQ9ezcwMH0gZm9udFNpemU9e1snMThweCcsICcyOHB4JywgJzQ4cHgnXX0+XG4gICAgICAgICAgPEhpZ2hsaWdodFxuICAgICAgICAgICAgcXVlcnk9e1sneW91cicsICdidXNpbmVzcycsICdpZGVhcyddfVxuICAgICAgICAgICAgc3R5bGVzPXt7IHB4OiAnMScsIHB5OiAnMScsIHJvdW5kZWQ6ICdmdWxsJywgYmc6ICdyZWQuNTAwJywgb3BhY2l0eTogJzg1JScgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRGV2ZWxvcGluZyBhbmQgZGVzaWduaW5nIHJlc3BvbnNpdmUgc2l0ZXMsIGdyYXBoaWNzLFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGFuZCBhcHBsaWNhdGlvbnMgdGhhdCBmaXRcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB5b3VyIGJ1c2luZXNzIGFuZCBpZGVhcy5cbiAgICAgICAgICAgIDwvSGlnaGxpZ2h0PlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgPC9TaW1wbGVHcmlkPlxuICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiU2ltcGxlR3JpZCIsIlRleHQiLCJCb3giLCJGb3JtQ29udHJvbCIsIkZvcm1MYWJlbCIsIkZvcm1IZWxwZXJUZXh0IiwiSW5wdXQiLCJCdXR0b24iLCJIaWdobGlnaHQiLCJIZWFkaW5nIiwiTGluayIsInVzZVN0YXRlIiwiRm9ybUdyaWQiLCJzdGF0ZUFyciIsImVtYWlsIiwic2V0RW1haWwiLCJuYW1lIiwic2V0TmFtZSIsImNvbW1lbnQiLCJzZXRDb21tZW50IiwicHVzaCIsImNvbHVtbnMiLCJ3IiwiYWxpZ24iLCJqdXN0aWZ5IiwidGV4dEFsaWduIiwibWwiLCJtciIsIm10IiwibWIiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJwIiwiYXMiLCJzaXplIiwiY29sb3IiLCJ0eXBlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjb2xvclNjaGVtZSIsInZhcmlhbnQiLCJvbkNsaWNrIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwicHgiLCJweSIsInJvdW5kZWQiLCJiZyIsIm9wYWNpdHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/FormGrid.js\n"));

/***/ })

});