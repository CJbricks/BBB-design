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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FormGrid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction FormGrid() {\n    _s();\n    //Empty array to store array of input info\n    const stateArr = [];\n    // state for all input fields\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // Push to array\n    stateArr.push([\n        email,\n        name,\n        comment\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.SimpleGrid, {\n            columns: [\n                1,\n                1,\n                2\n            ],\n            w: \"100%\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            textAlign: \"center\",\n            m: 2,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                    w: [\n                        \"240px\",\n                        \"300px\",\n                        \"710px\"\n                    ],\n                    fontWeight: 700,\n                    fontSize: [\n                        \"14px\",\n                        \"18px\",\n                        \"28px\"\n                    ],\n                    p: 5,\n                    border: \"1px solid red\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.FormControl, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.FormLabel, {\n                                    children: \"Email Address\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                    type: \"email\",\n                                    size: \"sm\",\n                                    onChange: (e)=>setEmail(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.FormLabel, {\n                                    children: \"Name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                    type: \"name\",\n                                    size: \"sm\",\n                                    onChange: (e)=>setName(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.FormLabel, {\n                                    children: \"Describe your site or project:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                    type: \"name\",\n                                    size: \"lg\",\n                                    onChange: (e)=>setComment(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                            lineNumber: 28,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            colorScheme: \"red\",\n                            mt: 6,\n                            size: \"md\",\n                            variant: \"outline\",\n                            onClick: (e)=>console.log(stateArr[0], stateArr[1], stateArr[2]),\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                            lineNumber: 53,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                    w: [\n                        \"240px\",\n                        \"300px\",\n                        \"710px\"\n                    ],\n                    border: \"1px solid red\",\n                    fontSize: [\n                        \"18px\",\n                        \"28px\",\n                        \"32px\"\n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                        noOfLines: 4,\n                        color: \"red.500\",\n                        children: [\n                            \"I Develop and Design functional responsive sites\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this),\n                            \"and applications that fit you,\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this),\n                            \"your business, and ideas.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/cj/Documents/bbb-design/BBB-design/src/pages/FormGrid.js\",\n            lineNumber: 26,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(FormGrid, \"5ykVga9KiYFoMQkHDhX3zqo0MJ4=\");\n_c = FormGrid;\nvar _c;\n$RefreshReg$(_c, \"FormGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvRm9ybUdyaWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ29CO0FBQ3dIO0FBQ3ZJO0FBQ0Y7QUFDSTtBQUtqQixTQUFTaUI7O0lBRXJCLDBDQUEwQztJQUMxQyxNQUFNQyxXQUFXLEVBQUU7SUFFbkIsNkJBQTZCO0lBQzdCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNLLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDO0lBRXZDLGdCQUFnQjtJQUNoQkUsU0FBU08sS0FBSztRQUFDTjtRQUFPRTtRQUFNRTtLQUFRO0lBRXJDLHFCQUNFO2tCQUNBLDRFQUFDckIsd0RBQVVBO1lBQUN3QixTQUFTO2dCQUFDO2dCQUFHO2dCQUFHO2FBQUU7WUFBRUMsR0FBRTtZQUFPQyxZQUFZO1lBQVVDLGdCQUFnQjtZQUFVQyxXQUFXO1lBQVVDLEdBQUc7OzhCQUM3Ryw4REFBQzNCLGlEQUFHQTtvQkFBQ3VCLEdBQUc7d0JBQUM7d0JBQVM7d0JBQVM7cUJBQVE7b0JBQUVLLFlBQVk7b0JBQUtDLFVBQVU7d0JBQUM7d0JBQVE7d0JBQVE7cUJBQU87b0JBQUVDLEdBQUc7b0JBQUdDLFFBQU87O3NDQUN2Ryw4REFBQzdCLHlEQUFXQTs7OENBQ04sOERBQUNDLHVEQUFTQTs4Q0FBQzs7Ozs7OzhDQUdMLDhEQUFDRyxtREFBS0E7b0NBQ04wQixNQUFLO29DQUNMQyxNQUFLO29DQUNMQyxVQUFVLENBQUNDLElBQU1uQixTQUFTbUIsRUFBRUMsT0FBT0M7Ozs7Ozs4Q0FHekMsOERBQUNsQyx1REFBU0E7OENBQUM7Ozs7Ozs4Q0FHVCw4REFBQ0csbURBQUtBO29DQUNOMEIsTUFBSztvQ0FDTEMsTUFBSztvQ0FDTEMsVUFBVSxDQUFDQyxJQUFNakIsUUFBUWlCLEVBQUVDLE9BQU9DOzs7Ozs7OENBQ3BDLDhEQUFDbEMsdURBQVNBOzhDQUFDOzs7Ozs7OENBR1QsOERBQUNHLG1EQUFLQTtvQ0FBQzBCLE1BQUs7b0NBQ1pDLE1BQUs7b0NBQ0xDLFVBQVUsQ0FBQ0MsSUFBTWYsV0FBV2UsRUFBRUMsT0FBT0M7Ozs7Ozs7Ozs7OztzQ0FHdkMsOERBQUM5QixvREFBTUE7NEJBQUMrQixhQUFZOzRCQUNwQkMsSUFBSTs0QkFDSk4sTUFBSzs0QkFDTE8sU0FBUTs0QkFDUkMsU0FBUyxDQUFDTixJQUFNTyxRQUFRQyxJQUFJN0IsUUFBUSxDQUFDLEVBQUUsRUFBRUEsUUFBUSxDQUFDLEVBQUUsRUFBRUEsUUFBUSxDQUFDLEVBQUU7c0NBQ2hFOzs7Ozs7Ozs7Ozs7OEJBRVAsOERBQUNkLGlEQUFHQTtvQkFBQ3VCLEdBQUc7d0JBQUM7d0JBQVM7d0JBQVM7cUJBQVE7b0JBQUVRLFFBQU87b0JBQWdCRixVQUFVO3dCQUFDO3dCQUFRO3dCQUFRO3FCQUFPOzhCQUM1Riw0RUFBQzlCLGtEQUFJQTt3QkFBQzZDLFdBQVc7d0JBQUdDLE9BQU87OzRCQUFXOzBDQUN0Qyw4REFBQ0M7Ozs7OzRCQUFLOzBDQUVOLDhEQUFDQTs7Ozs7NEJBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPaEI7R0E1RHdCakM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0Zvcm1HcmlkLmpzPzM3MDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Gb3JtLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBTaW1wbGVHcmlkLCBUZXh0LCBCb3gsIEZsZXgsIEZvcm1Db250cm9sLCBGb3JtTGFiZWwsIEZvcm1IZWxwZXJUZXh0LCBGb3JtRXJyb3JNZXNzYWdlLCBJbnB1dCwgQnV0dG9uLCBJbnB1dEdyb3VwLCBJbnB1dExlZnRFbGVtZW50IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuIFxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1HcmlkKCkge1xuXG4gICAvL0VtcHR5IGFycmF5IHRvIHN0b3JlIGFycmF5IG9mIGlucHV0IGluZm9cbiAgIGNvbnN0IHN0YXRlQXJyID0gW107XG5cbiAgIC8vIHN0YXRlIGZvciBhbGwgaW5wdXQgZmllbGRzXG4gICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpXG4gICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxuICAgY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoXCJcIilcbiBcbiAgIC8vIFB1c2ggdG8gYXJyYXlcbiAgIHN0YXRlQXJyLnB1c2goW2VtYWlsLCBuYW1lLCBjb21tZW50XSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPFNpbXBsZUdyaWQgY29sdW1ucz17WzEsIDEsIDJdfSB3PVwiMTAwJVwiIGFsaWduSXRlbXM9eydjZW50ZXInfSBqdXN0aWZ5Q29udGVudD17J2NlbnRlcid9IHRleHRBbGlnbj17J2NlbnRlcid9IG09ezJ9PlxuICAgICAgICA8Qm94IHc9e1snMjQwcHgnLCAnMzAwcHgnLCAnNzEwcHgnXX0gZm9udFdlaWdodD17NzAwfSBmb250U2l6ZT17WycxNHB4JywgJzE4cHgnLCAnMjhweCddfSBwPXs1fSBib3JkZXI9XCIxcHggc29saWQgcmVkXCI+XG4gICAgICAgIDxGb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgPEZvcm1MYWJlbD5cbiAgICAgICAgICAgICAgICBFbWFpbCBBZGRyZXNzXG4gICAgICAgICAgICAgIDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Rm9ybUxhYmVsPlxuICAgICAgICAgICAgICAgIE5hbWVcbiAgICAgICAgICAgICAgPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgICAgPElucHV0IFxuICAgICAgICAgICAgICAgIHR5cGU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICAgIDxGb3JtTGFiZWw+XG4gICAgICAgICAgICAgICAgRGVzY3JpYmUgeW91ciBzaXRlIG9yIHByb2plY3Q6XG4gICAgICAgICAgICAgIDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwibmFtZVwiIFxuICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiIFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29tbWVudChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJyZWRcIlxuICAgICAgICAgICAgICBtdD17Nn1cbiAgICAgICAgICAgICAgc2l6ZT1cIm1kXCIgXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGNvbnNvbGUubG9nKHN0YXRlQXJyWzBdLCBzdGF0ZUFyclsxXSwgc3RhdGVBcnJbMl0gKX1cbiAgICAgICAgICAgICAgPlN1Ym1pdDwvQnV0dG9uPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCB3PXtbJzI0MHB4JywgJzMwMHB4JywgJzcxMHB4J119IGJvcmRlcj1cIjFweCBzb2xpZCByZWRcIiBmb250U2l6ZT17WycxOHB4JywgJzI4cHgnLCAnMzJweCddfT5cbiAgICAgICAgICA8VGV4dCBub09mTGluZXM9ezR9IGNvbG9yPXsncmVkLjUwMCd9PkkgRGV2ZWxvcCBhbmQgRGVzaWduIGZ1bmN0aW9uYWwgcmVzcG9uc2l2ZSBzaXRlcyBcbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBhbmQgYXBwbGljYXRpb25zIHRoYXQgZml0IHlvdSxcbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICB5b3VyIGJ1c2luZXNzLCBhbmQgaWRlYXMuXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICA8L1NpbXBsZUdyaWQ+XG4gIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJTaW1wbGVHcmlkIiwiVGV4dCIsIkJveCIsIkZsZXgiLCJGb3JtQ29udHJvbCIsIkZvcm1MYWJlbCIsIkZvcm1IZWxwZXJUZXh0IiwiRm9ybUVycm9yTWVzc2FnZSIsIklucHV0IiwiQnV0dG9uIiwiSW5wdXRHcm91cCIsIklucHV0TGVmdEVsZW1lbnQiLCJJbWFnZSIsIkxpbmsiLCJ1c2VTdGF0ZSIsIkZvcm1HcmlkIiwic3RhdGVBcnIiLCJlbWFpbCIsInNldEVtYWlsIiwibmFtZSIsInNldE5hbWUiLCJjb21tZW50Iiwic2V0Q29tbWVudCIsInB1c2giLCJjb2x1bW5zIiwidyIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInRleHRBbGlnbiIsIm0iLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJwIiwiYm9yZGVyIiwidHlwZSIsInNpemUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbG9yU2NoZW1lIiwibXQiLCJ2YXJpYW50Iiwib25DbGljayIsImNvbnNvbGUiLCJsb2ciLCJub09mTGluZXMiLCJjb2xvciIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/FormGrid.js\n"));

/***/ })

});