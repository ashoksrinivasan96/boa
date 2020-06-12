(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./boa_wasm/pkg/index.js":
/*!*******************************!*\
  !*** ./boa_wasm/pkg/index.js ***!
  \*******************************/
/*! exports provided: evaluate, __wbg_log_dfcc360ba3fcf8ca, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ \"./boa_wasm/pkg/index_bg.wasm\");\n/* harmony import */ var _index_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index_bg.js */ \"./boa_wasm/pkg/index_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"evaluate\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"evaluate\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_dfcc360ba3fcf8ca\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_log_dfcc360ba3fcf8ca\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///./boa_wasm/pkg/index.js?");

/***/ }),

/***/ "./boa_wasm/pkg/index_bg.js":
/*!**********************************!*\
  !*** ./boa_wasm/pkg/index_bg.js ***!
  \**********************************/
/*! exports provided: evaluate, __wbg_log_dfcc360ba3fcf8ca, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder, TextEncoder) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"evaluate\", function() { return evaluate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_dfcc360ba3fcf8ca\", function() { return __wbg_log_dfcc360ba3fcf8ca; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ \"./boa_wasm/pkg/index_bg.wasm\");\n\n\nlet cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nfunction logError(f) {\n    return function () {\n        try {\n            return f.apply(this, arguments);\n\n        } catch (e) {\n            let error = (function () {\n                try {\n                    return e instanceof Error ? `${e.message}\\n\\nStack:\\n${e.stack}` : e.toString();\n                } catch(_) {\n                    return \"<failed to stringify thrown value>\";\n                }\n            }());\n            console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", error);\n            throw e;\n        }\n    };\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nlet cachedTextEncoder = new TextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (typeof(arg) !== 'string') throw new Error('expected a string argument');\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n        if (ret.read !== arg.length) throw new Error('failed to pass whole string');\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n/**\n* @param {string} src\n* @returns {string}\n*/\nfunction evaluate(src) {\n    try {\n        var ptr0 = passStringToWasm0(src, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n        var len0 = WASM_VECTOR_LEN;\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"evaluate\"](8, ptr0, len0);\n        var r0 = getInt32Memory0()[8 / 4 + 0];\n        var r1 = getInt32Memory0()[8 / 4 + 1];\n        return getStringFromWasm0(r0, r1);\n    } finally {\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n    }\n}\n\nconst __wbg_log_dfcc360ba3fcf8ca = logError(function(arg0, arg1) {\n    console.log(getStringFromWasm0(arg0, arg1));\n});\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"./node_modules/text-encoding/index.js\")[\"TextDecoder\"], __webpack_require__(/*! text-encoding */ \"./node_modules/text-encoding/index.js\")[\"TextEncoder\"]))\n\n//# sourceURL=webpack:///./boa_wasm/pkg/index_bg.js?");

/***/ }),

/***/ "./boa_wasm/pkg/index_bg.wasm":
/*!************************************!*\
  !*** ./boa_wasm/pkg/index_bg.wasm ***!
  \************************************/
/*! exports provided: memory, evaluate, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./index_bg.js */ \"./boa_wasm/pkg/index_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./boa_wasm/pkg/index_bg.wasm?");

/***/ })

}]);