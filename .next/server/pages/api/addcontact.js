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
exports.id = "pages/api/addcontact";
exports.ids = ["pages/api/addcontact"];
exports.modules = {

/***/ "(api)/./src/pages/api/addcontact.js":
/*!*************************************!*\
  !*** ./src/pages/api/addcontact.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addContact)\n/* harmony export */ });\nfunction addContact(req, res) {\n    if (req.method === \"POST\") {\n        const contactInfo = req?.body;\n        return res.json(contactInfo);\n    }\n    return res.status(500).json({\n        msg: \"No content\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2FkZGNvbnRhY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUNlLFNBQVNBLFdBQVdDLEdBQUcsRUFBRUMsR0FBRztJQUN2QyxJQUFHRCxJQUFJRSxXQUFXLFFBQVE7UUFDMUIsTUFBTUMsY0FBY0gsS0FBS0k7UUFFekIsT0FBT0gsSUFBSUksS0FBS0Y7SUFFaEI7SUFDQSxPQUFPRixJQUFJSyxPQUFPLEtBQUtELEtBQUs7UUFDeEJFLEtBQUs7SUFDVDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmJiLWRlc2lnbi8uL3NyYy9wYWdlcy9hcGkvYWRkY29udGFjdC5qcz9iYjJiIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkQ29udGFjdChyZXEsIHJlcykge1xuICAgIGlmKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIGNvbnN0IGNvbnRhY3RJbmZvID0gcmVxPy5ib2R5O1xuXG4gICAgcmV0dXJuIHJlcy5qc29uKGNvbnRhY3RJbmZvKTtcbiAgICBcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgbXNnOiBcIk5vIGNvbnRlbnRcIlxuICAgIH0pXG59Il0sIm5hbWVzIjpbImFkZENvbnRhY3QiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJjb250YWN0SW5mbyIsImJvZHkiLCJqc29uIiwic3RhdHVzIiwibXNnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/addcontact.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/addcontact.js"));
module.exports = __webpack_exports__;

})();