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
exports.id = "pages/api/pretransaction";
exports.ids = ["pages/api/pretransaction"];
exports.modules = {

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

/***/ "(api)/./models/Product.js":
/*!***************************!*\
  !*** ./models/Product.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst ProductSchema = new mongoose.Schema({\n    title: {\n        type: String,\n        required: true\n    },\n    slug: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    desc: {\n        type: String,\n        required: true\n    },\n    img: {\n        type: String,\n        required: true\n    },\n    category: {\n        type: String,\n        required: true\n    },\n    size: {\n        type: String\n    },\n    color: {\n        type: String\n    },\n    price: {\n        type: Number,\n        required: true\n    },\n    availableQty: {\n        type: Number,\n        required: true\n    }\n}, {\n    timestamps: true\n});\nmongoose.models = {};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose.model(\"Product\", ProductSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUHJvZHVjdC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsV0FBV0MsbUJBQU9BLENBQUM7QUFFekIsTUFBTUMsZ0JBQWdCLElBQUlGLFNBQVNHLE1BQU0sQ0FBQztJQUN0Q0MsT0FBTztRQUFDQyxNQUFNQztRQUFRQyxVQUFVO0lBQUk7SUFDcENDLE1BQU07UUFBQ0gsTUFBTUM7UUFBUUMsVUFBVTtRQUFNRSxRQUFRO0lBQUk7SUFDakRDLE1BQU07UUFBQ0wsTUFBTUM7UUFBUUMsVUFBVTtJQUFJO0lBQ25DSSxLQUFLO1FBQUNOLE1BQU1DO1FBQVFDLFVBQVU7SUFBSTtJQUNsQ0ssVUFBVTtRQUFDUCxNQUFNQztRQUFRQyxVQUFVO0lBQUk7SUFDdkNNLE1BQU07UUFBQ1IsTUFBTUM7SUFBTTtJQUNuQlEsT0FBTztRQUFDVCxNQUFNQztJQUFNO0lBQ3BCUyxPQUFPO1FBQUNWLE1BQU1XO1FBQVFULFVBQVU7SUFBSTtJQUNwQ1UsY0FBYztRQUFDWixNQUFNVztRQUFRVCxVQUFVO0lBQUk7QUFDN0MsR0FBRztJQUFDVyxZQUFZO0FBQUk7QUFFcEJsQixTQUFTbUIsTUFBTSxHQUFHLENBQUM7QUFDbkIsaUVBQWVuQixTQUFTb0IsS0FBSyxDQUFDLFdBQVdsQixjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbW9kZWxzL1Byb2R1Y3QuanM/MDljNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XHJcblxyXG5jb25zdCBQcm9kdWN0U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICB0aXRsZToge3R5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWV9LFxyXG4gICAgc2x1Zzoge3R5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZX0sXHJcbiAgICBkZXNjOiB7dHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZX0sXHJcbiAgICBpbWc6IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlfSxcclxuICAgIGNhdGVnb3J5OiB7dHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZX0sXHJcbiAgICBzaXplOiB7dHlwZTogU3RyaW5nfSxcclxuICAgIGNvbG9yOiB7dHlwZTogU3RyaW5nfSxcclxuICAgIHByaWNlOiB7dHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZX0sXHJcbiAgICBhdmFpbGFibGVRdHk6IHt0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlfSxcclxuICB9LCB7dGltZXN0YW1wczogdHJ1ZX0pO1xyXG5cclxuICBtb25nb29zZS5tb2RlbHMgPSB7fVxyXG4gIGV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsKFwiUHJvZHVjdFwiLCBQcm9kdWN0U2NoZW1hKTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiUHJvZHVjdFNjaGVtYSIsIlNjaGVtYSIsInRpdGxlIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwic2x1ZyIsInVuaXF1ZSIsImRlc2MiLCJpbWciLCJjYXRlZ29yeSIsInNpemUiLCJjb2xvciIsInByaWNlIiwiTnVtYmVyIiwiYXZhaWxhYmxlUXR5IiwidGltZXN0YW1wcyIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/Product.js\n");

/***/ }),

/***/ "(api)/./pages/api/pretransaction.js":
/*!*************************************!*\
  !*** ./pages/api/pretransaction.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/Order */ \"(api)/./models/Order.js\");\n/* harmony import */ var _middleware_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../middleware/mongoose */ \"(api)/./middleware/mongoose.js\");\n/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Product */ \"(api)/./models/Product.js\");\n\n\n\nconst handler = async (req, res)=>{\n    if (req.method == \"POST\") {\n        console.log(req.body);\n        let product, sumTotal = 0;\n        let cart = req.body.cart;\n        for(let item in cart){\n            console.log(item);\n            sumTotal += cart[item].price * cart[item].qty;\n            product = await _models_Product__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n                slug: item\n            });\n            console.log(product);\n            if (product.availableQty < cart[item].qty) {\n                res.status(200).json({\n                    success: false,\n                    \"error\": \"Out of Stock\"\n                });\n                return;\n            }\n            if (product.price != cart[item].price) {\n                res.status(200).json({\n                    success: false,\n                    \"error\": \"The Price of Some items may have changed. Please try again\"\n                });\n                return;\n            }\n        }\n        if (sumTotal != req.body.subtotal) {\n            console.log(sumTotal, req.body.subtotal);\n            res.status(200).json({\n                success: false,\n                \"error\": \"The Sumtotal of Some items may have changed. Please try again\"\n            });\n            return;\n        }\n        let order = new _models_Order__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            email: req.body.email,\n            orderId: req.body.oid,\n            products: req.body.cart,\n            address: req.body.address,\n            amount: req.body.subtotal,\n            name: req.body.name\n        });\n        await order.save();\n        res.status(200).json({\n            success: \"Order Added\"\n        });\n        let productQtyDec = order.products;\n        for(let slug in productQtyDec){\n            // console.log(productQtyDec[slug].qty);\n            await _models_Product__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOneAndUpdate({\n                slug: slug\n            }, {\n                $inc: {\n                    \"availableQty\": -productQtyDec[slug].qty\n                }\n            });\n        }\n    } else {\n        res.status(400).json({\n            error: \"Order Not Added\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middleware_mongoose__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJldHJhbnNhY3Rpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF1QztBQUNXO0FBQ1A7QUFFM0MsTUFBTUcsVUFBVSxPQUFPQyxLQUFLQztJQUN4QixJQUFJRCxJQUFJRSxNQUFNLElBQUksUUFBUTtRQUN0QkMsUUFBUUMsR0FBRyxDQUFDSixJQUFJSyxJQUFJO1FBQ3BCLElBQUlDLFNBQVNDLFdBQVc7UUFDeEIsSUFBSUMsT0FBT1IsSUFBSUssSUFBSSxDQUFDRyxJQUFJO1FBQ3hCLElBQUssSUFBSUMsUUFBUUQsS0FBTTtZQUNuQkwsUUFBUUMsR0FBRyxDQUFDSztZQUNaRixZQUFZQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsS0FBSyxHQUFHRixJQUFJLENBQUNDLEtBQUssQ0FBQ0UsR0FBRztZQUM3Q0wsVUFBVSxNQUFNUix1REFBT0EsQ0FBQ2MsT0FBTyxDQUFDO2dCQUFFQyxNQUFNSjtZQUFLO1lBQzdDTixRQUFRQyxHQUFHLENBQUNFO1lBRVosSUFBSUEsUUFBUVEsWUFBWSxHQUFHTixJQUFJLENBQUNDLEtBQUssQ0FBQ0UsR0FBRyxFQUFFO2dCQUN2Q1YsSUFBSWMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsU0FBUztvQkFBTyxTQUFTO2dCQUFlO2dCQUMvRDtZQUNKO1lBQ0EsSUFBSVgsUUFBUUksS0FBSyxJQUFJRixJQUFJLENBQUNDLEtBQUssQ0FBQ0MsS0FBSyxFQUFFO2dCQUNuQ1QsSUFBSWMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsU0FBUztvQkFBTyxTQUFTO2dCQUE2RDtnQkFDN0c7WUFDSjtRQUNKO1FBQ0EsSUFBSVYsWUFBWVAsSUFBSUssSUFBSSxDQUFDYSxRQUFRLEVBQUU7WUFDL0JmLFFBQVFDLEdBQUcsQ0FBQ0csVUFBVVAsSUFBSUssSUFBSSxDQUFDYSxRQUFRO1lBQ3ZDakIsSUFBSWMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUztnQkFBTyxTQUFTO1lBQWdFO1lBQ2hIO1FBQ0o7UUFNQSxJQUFJRSxRQUFRLElBQUl2QixxREFBS0EsQ0FBQztZQUNsQndCLE9BQU9wQixJQUFJSyxJQUFJLENBQUNlLEtBQUs7WUFDckJDLFNBQVNyQixJQUFJSyxJQUFJLENBQUNpQixHQUFHO1lBQ3JCQyxVQUFVdkIsSUFBSUssSUFBSSxDQUFDRyxJQUFJO1lBQ3ZCZ0IsU0FBU3hCLElBQUlLLElBQUksQ0FBQ21CLE9BQU87WUFDekJDLFFBQVF6QixJQUFJSyxJQUFJLENBQUNhLFFBQVE7WUFDekJRLE1BQU0xQixJQUFJSyxJQUFJLENBQUNxQixJQUFJO1FBQ3ZCO1FBQ0EsTUFBTVAsTUFBTVEsSUFBSTtRQUNoQjFCLElBQUljLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUFjO1FBRTlDLElBQUlXLGdCQUFnQlQsTUFBTUksUUFBUTtRQUVsQyxJQUFLLElBQUlWLFFBQVFlLGNBQWU7WUFDNUIsd0NBQXdDO1lBQ3hDLE1BQU05Qix1REFBT0EsQ0FBQytCLGdCQUFnQixDQUFDO2dCQUFFaEIsTUFBTUE7WUFBSyxHQUFHO2dCQUFFaUIsTUFBTTtvQkFBRSxnQkFBZ0IsQ0FBRUYsYUFBYSxDQUFDZixLQUFLLENBQUNGLEdBQUc7Z0JBQUM7WUFBRTtRQUN6RztJQUdKLE9BQU87UUFDSFYsSUFBSWMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFZSxPQUFPO1FBQWtCO0lBQ3BEO0FBQ0o7QUFRQSxpRUFBZWxDLGdFQUFTQSxDQUFDRSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3ByZXRyYW5zYWN0aW9uLmpzPzE3MzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE9yZGVyIGZyb20gXCIuLi8uLi9tb2RlbHMvT3JkZXJcIjtcclxuaW1wb3J0IGNvbm5lY3REYiBmcm9tIFwiLi4vLi4vbWlkZGxld2FyZS9tb25nb29zZVwiO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi4vLi4vbW9kZWxzL1Byb2R1Y3RcIjtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGlmIChyZXEubWV0aG9kID09ICdQT1NUJykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxyXG4gICAgICAgIGxldCBwcm9kdWN0LCBzdW1Ub3RhbCA9IDA7XHJcbiAgICAgICAgbGV0IGNhcnQgPSByZXEuYm9keS5jYXJ0XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBpbiBjYXJ0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgICAgICBzdW1Ub3RhbCArPSBjYXJ0W2l0ZW1dLnByaWNlICogY2FydFtpdGVtXS5xdHlcclxuICAgICAgICAgICAgcHJvZHVjdCA9IGF3YWl0IFByb2R1Y3QuZmluZE9uZSh7IHNsdWc6IGl0ZW0gfSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocHJvZHVjdC5hdmFpbGFibGVRdHkgPCBjYXJ0W2l0ZW1dLnF0eSkge1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgXCJlcnJvclwiOiBcIk91dCBvZiBTdG9ja1wiIH0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocHJvZHVjdC5wcmljZSAhPSBjYXJ0W2l0ZW1dLnByaWNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBcImVycm9yXCI6IFwiVGhlIFByaWNlIG9mIFNvbWUgaXRlbXMgbWF5IGhhdmUgY2hhbmdlZC4gUGxlYXNlIHRyeSBhZ2FpblwiIH0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3VtVG90YWwgIT0gcmVxLmJvZHkuc3VidG90YWwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3VtVG90YWwsIHJlcS5ib2R5LnN1YnRvdGFsKTtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgXCJlcnJvclwiOiBcIlRoZSBTdW10b3RhbCBvZiBTb21lIGl0ZW1zIG1heSBoYXZlIGNoYW5nZWQuIFBsZWFzZSB0cnkgYWdhaW5cIiB9KVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG5cclxuXHJcblxyXG4gICAgICAgIGxldCBvcmRlciA9IG5ldyBPcmRlcih7XHJcbiAgICAgICAgICAgIGVtYWlsOiByZXEuYm9keS5lbWFpbCxcclxuICAgICAgICAgICAgb3JkZXJJZDogcmVxLmJvZHkub2lkLFxyXG4gICAgICAgICAgICBwcm9kdWN0czogcmVxLmJvZHkuY2FydCxcclxuICAgICAgICAgICAgYWRkcmVzczogcmVxLmJvZHkuYWRkcmVzcyxcclxuICAgICAgICAgICAgYW1vdW50OiByZXEuYm9keS5zdWJ0b3RhbCxcclxuICAgICAgICAgICAgbmFtZTogcmVxLmJvZHkubmFtZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXdhaXQgb3JkZXIuc2F2ZSgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiBcIk9yZGVyIEFkZGVkXCIgfSlcclxuXHJcbiAgICAgICAgbGV0IHByb2R1Y3RRdHlEZWMgPSBvcmRlci5wcm9kdWN0c1xyXG5cclxuICAgICAgICBmb3IgKGxldCBzbHVnIGluIHByb2R1Y3RRdHlEZWMpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvZHVjdFF0eURlY1tzbHVnXS5xdHkpO1xyXG4gICAgICAgICAgICBhd2FpdCBQcm9kdWN0LmZpbmRPbmVBbmRVcGRhdGUoeyBzbHVnOiBzbHVnIH0sIHsgJGluYzogeyBcImF2YWlsYWJsZVF0eVwiOiAtIHByb2R1Y3RRdHlEZWNbc2x1Z10ucXR5IH0gfSlcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogXCJPcmRlciBOb3QgQWRkZWRcIiB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0RGIoaGFuZGxlcikiXSwibmFtZXMiOlsiT3JkZXIiLCJjb25uZWN0RGIiLCJQcm9kdWN0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwicHJvZHVjdCIsInN1bVRvdGFsIiwiY2FydCIsIml0ZW0iLCJwcmljZSIsInF0eSIsImZpbmRPbmUiLCJzbHVnIiwiYXZhaWxhYmxlUXR5Iiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJzdWJ0b3RhbCIsIm9yZGVyIiwiZW1haWwiLCJvcmRlcklkIiwib2lkIiwicHJvZHVjdHMiLCJhZGRyZXNzIiwiYW1vdW50IiwibmFtZSIsInNhdmUiLCJwcm9kdWN0UXR5RGVjIiwiZmluZE9uZUFuZFVwZGF0ZSIsIiRpbmMiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/pretransaction.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/pretransaction.js"));
module.exports = __webpack_exports__;

})();