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
exports.id = "pages/api/myorder";
exports.ids = ["pages/api/myorder"];
exports.modules = {

/***/ "crypto-js":
/*!****************************!*\
  !*** external "crypto-js" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("crypto-js");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./middleware/mongoose.js":
/*!********************************!*\
  !*** ./middleware/mongoose.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDb = (handler)=>async (req, res)=>{\n        if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections)[0].readyState) {\n            return handler(req, res);\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI);\n        return handler(req, res);\n    };\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDb);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9taWRkbGV3YXJlL21vbmdvb3NlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxZQUFZQyxDQUFBQSxVQUFXLE9BQU9DLEtBQUtDO1FBQ3JDLElBQUdKLDZEQUFvQixDQUFDLEVBQUUsQ0FBQ00sVUFBVSxFQUFDO1lBQ2xDLE9BQU9KLFFBQVFDLEtBQUtDO1FBQ3hCO1FBQ0EsTUFBTUosdURBQWdCLENBQUNRLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztRQUM1QyxPQUFPUixRQUFRQyxLQUFLQztJQUN4QjtBQUVBLGlFQUFlSCxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS9tb25nb29zZS5qcz9hNzlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IGNvbm5lY3REYiA9IGhhbmRsZXIgPT4gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBpZihtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKXtcclxuICAgICAgICByZXR1cm4gaGFuZGxlcihyZXEsIHJlcylcclxuICAgIH1cclxuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJJKVxyXG4gICAgcmV0dXJuIGhhbmRsZXIocmVxLCByZXMpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REYjsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0RGIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./middleware/mongoose.js\n");

/***/ }),

/***/ "(api)/./models/Order.js":
/*!*************************!*\
  !*** ./models/Order.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst OrderSchema = new mongoose.Schema({\n    email: {\n        type: String,\n        required: true\n    },\n    orderId: {\n        type: Number,\n        required: true\n    },\n    paymentInfo: {\n        type: String,\n        default: \"\"\n    },\n    products: {\n        type: Object,\n        required: true\n    },\n    address: {\n        type: String,\n        required: true\n    },\n    amount: {\n        type: String,\n        required: true\n    },\n    status: {\n        type: String,\n        default: \"Pending\",\n        required: true\n    }\n}, {\n    timestamps: true\n});\nmongoose.models = {};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose.model(\"Order\", OrderSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvT3JkZXIuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFdBQVdDLG1CQUFPQSxDQUFDO0FBRXpCLE1BQU1DLGNBQWMsSUFBSUYsU0FBU0csTUFBTSxDQUFDO0lBQ3BDQyxPQUFPO1FBQUNDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSTtJQUNwQ0MsU0FBUztRQUFDSCxNQUFNSTtRQUFRRixVQUFVO0lBQUk7SUFDdENHLGFBQWE7UUFBQ0wsTUFBTUM7UUFBUUssU0FBUztJQUFFO0lBQ3ZDQyxVQUFVO1FBQUNQLE1BQU1RO1FBQVFOLFVBQVU7SUFBSTtJQUN2Q08sU0FBUztRQUFDVCxNQUFNQztRQUFRQyxVQUFVO0lBQUk7SUFDdENRLFFBQVE7UUFBQ1YsTUFBTUM7UUFBUUMsVUFBVTtJQUFJO0lBQ3JDUyxRQUFRO1FBQUNYLE1BQU1DO1FBQVFLLFNBQVM7UUFBV0osVUFBVTtJQUFJO0FBQzNELEdBQUc7SUFBQ1UsWUFBWTtBQUFJO0FBRXBCakIsU0FBU2tCLE1BQU0sR0FBRyxDQUFDO0FBQ25CLGlFQUFlbEIsU0FBU21CLEtBQUssQ0FBQyxTQUFTakIsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL21vZGVscy9PcmRlci5qcz9lYjI5Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcclxuXHJcbmNvbnN0IE9yZGVyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICBlbWFpbDoge3R5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWV9LFxyXG4gICAgb3JkZXJJZDoge3R5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWV9LFxyXG4gICAgcGF5bWVudEluZm86IHt0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICcnfSxcclxuICAgIHByb2R1Y3RzOiB7dHlwZTogT2JqZWN0LCByZXF1aXJlZDogdHJ1ZX0sXHJcbiAgICBhZGRyZXNzOiB7dHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZX0sXHJcbiAgICBhbW91bnQ6IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlfSxcclxuICAgIHN0YXR1czoge3R5cGU6IFN0cmluZywgZGVmYXVsdDogJ1BlbmRpbmcnLCByZXF1aXJlZDogdHJ1ZX0sXHJcbiAgfSwge3RpbWVzdGFtcHM6IHRydWV9KTtcclxuICBcclxuICBtb25nb29zZS5tb2RlbHMgPSB7fVxyXG4gIGV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsKFwiT3JkZXJcIiwgT3JkZXJTY2hlbWEpOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJPcmRlclNjaGVtYSIsIlNjaGVtYSIsImVtYWlsIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwib3JkZXJJZCIsIk51bWJlciIsInBheW1lbnRJbmZvIiwiZGVmYXVsdCIsInByb2R1Y3RzIiwiT2JqZWN0IiwiYWRkcmVzcyIsImFtb3VudCIsInN0YXR1cyIsInRpbWVzdGFtcHMiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/Order.js\n");

/***/ }),

/***/ "(api)/./pages/api/myorder.js":
/*!******************************!*\
  !*** ./pages/api/myorder.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _middleware_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../middleware/mongoose */ \"(api)/./middleware/mongoose.js\");\n/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Order */ \"(api)/./models/Order.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar CryptoJS = __webpack_require__(/*! crypto-js */ \"crypto-js\");\nvar jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nconst handler = async (req, res)=>{\n    const token = req.body.token;\n    const data = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(token, process.env.JWT_SECRET);\n    console.log(data.email);\n    let orders = await _models_Order__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({\n        email: data.email\n    });\n    console.log(orders);\n    res.status(200).json({\n        orders\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middleware_mongoose__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbXlvcmRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFrRDtBQUNYO0FBQ0M7QUFDeEMsSUFBSUcsV0FBV0MsbUJBQU9BLENBQUM7QUFDdkIsSUFBSUMsTUFBTUQsbUJBQU9BLENBQUM7QUFFbEIsTUFBTUUsVUFBVSxPQUFPQyxLQUFLQztJQUN4QixNQUFNQyxRQUFRRixJQUFJRyxJQUFJLENBQUNELEtBQUs7SUFDNUIsTUFBTUUsT0FBT1QsMERBQW1CLENBQUNPLE9BQU9JLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtJQUM5REMsUUFBUUMsR0FBRyxDQUFDTixLQUFLTyxLQUFLO0lBQ3RCLElBQUlDLFNBQVMsTUFBTWxCLHFEQUFLQSxDQUFDbUIsSUFBSSxDQUFDO1FBQUNGLE9BQU9QLEtBQUtPLEtBQUs7SUFBQTtJQUNoREYsUUFBUUMsR0FBRyxDQUFDRTtJQUNaWCxJQUFJYSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUNIO0lBQU07QUFDaEM7QUFFQSxpRUFBZW5CLGdFQUFTQSxDQUFDTSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL215b3JkZXIuanM/MjNkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmVjdERiIGZyb20gXCIuLi8uLi9taWRkbGV3YXJlL21vbmdvb3NlXCI7XHJcbmltcG9ydCBPcmRlciBmcm9tIFwiLi4vLi4vbW9kZWxzL09yZGVyXCI7XHJcbmltcG9ydCBqc29ud2VidG9rZW4gZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG52YXIgQ3J5cHRvSlMgPSByZXF1aXJlKCdjcnlwdG8tanMnKTtcclxudmFyIGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpXHJcblxyXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IHJlcS5ib2R5LnRva2VuXHJcbiAgICBjb25zdCBkYXRhID0ganNvbndlYnRva2VuLnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVClcclxuICAgIGNvbnNvbGUubG9nKGRhdGEuZW1haWwpXHJcbiAgICBsZXQgb3JkZXJzID0gYXdhaXQgT3JkZXIuZmluZCh7ZW1haWw6IGRhdGEuZW1haWx9KVxyXG4gICAgY29uc29sZS5sb2cob3JkZXJzKTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtvcmRlcnN9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0RGIoaGFuZGxlcikiXSwibmFtZXMiOlsiY29ubmVjdERiIiwiT3JkZXIiLCJqc29ud2VidG9rZW4iLCJDcnlwdG9KUyIsInJlcXVpcmUiLCJqd3QiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidG9rZW4iLCJib2R5IiwiZGF0YSIsInZlcmlmeSIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwiY29uc29sZSIsImxvZyIsImVtYWlsIiwib3JkZXJzIiwiZmluZCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/myorder.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/myorder.js"));
module.exports = __webpack_exports__;

})();