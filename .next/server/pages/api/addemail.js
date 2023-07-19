"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/addemail";
exports.ids = ["pages/api/addemail"];
exports.modules = {

/***/ "(api)/./src/pages/api/addemail.js":
/*!***********************************!*\
  !*** ./src/pages/api/addemail.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addEmail)\n/* harmony export */ });\nfunction addEmail(req, res) {\n    if (req.method === \"POST\") {\n        const emailAdd = req?.body;\n        return res.json(emailAdd);\n    }\n    return res.status(500).json({\n        msg: \"No content\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2FkZGVtYWlsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxTQUFTQSxTQUFTQyxHQUFHLEVBQUVDLEdBQUc7SUFDckMsSUFBR0QsSUFBSUUsV0FBVyxRQUFRO1FBQzFCLE1BQU1DLFdBQVdILEtBQUtJO1FBRXRCLE9BQU9ILElBQUlJLEtBQUtGO0lBRWhCO0lBQ0EsT0FBT0YsSUFBSUssT0FBTyxLQUFLRCxLQUFLO1FBQ3hCRSxLQUFLO0lBQ1Q7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2JiYi1kZXNpZ24vLi9zcmMvcGFnZXMvYXBpL2FkZGVtYWlsLmpzPzZhNjUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRW1haWwocmVxLCByZXMpIHtcbiAgICBpZihyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICBjb25zdCBlbWFpbEFkZCA9IHJlcT8uYm9keTtcblxuICAgIHJldHVybiByZXMuanNvbihlbWFpbEFkZCk7XG4gICAgXG4gICAgfVxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgIG1zZzogXCJObyBjb250ZW50XCJcbiAgICB9KVxufSJdLCJuYW1lcyI6WyJhZGRFbWFpbCIsInJlcSIsInJlcyIsIm1ldGhvZCIsImVtYWlsQWRkIiwiYm9keSIsImpzb24iLCJzdGF0dXMiLCJtc2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/addemail.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/addemail.js"));
module.exports = __webpack_exports__;

})();