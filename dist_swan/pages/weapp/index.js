(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["pages/weapp/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/weapp/index.jsx":
/*!*******************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/weapp/index.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Index; });
/* harmony import */ var _Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.scss */ "./src/pages/weapp/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var taro_echarts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! taro-echarts */ "./node_modules/taro-echarts/index.js");










var options = {
  color: ['#37A2DA', '#67E0E3', '#9FE6B8'],
  legend: {
    data: ['A', 'B', 'C'],
    top: 10,
    left: 'center',
    z: 100
  },
  grid: {
    containLabel: true
  },
  tooltip: {
    show: true,
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  yAxis: {
    x: 'center',
    type: 'value',
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    } // show: false

  },
  series: [{
    name: 'A',
    type: 'line',
    smooth: true,
    data: [18, 36, 65, 30, 78, 40, 33]
  }, {
    name: 'B',
    type: 'line',
    smooth: true,
    data: [12, 50, 51, 35, 70, 30, 20]
  }, {
    name: 'C',
    type: 'line',
    smooth: true,
    data: [10, 30, 31, 50, 40, 20, 10]
  }]
};

var Index = /*#__PURE__*/function (_Component) {
  Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Index, _Component);

  var _super = Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Index);

  function Index() {
    var _this;

    Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "setChartRef", function (node) {
      return _this.chartRef = node;
    });

    return _this;
  }

  Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Index, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "b"], {
        className: "weapp-index"
      },  false && /*#__PURE__*/false);
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/* Built-in method references that are verified to be native. */


var DataView = getNative(root, 'DataView');
module.exports = DataView;

/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
module.exports = Hash;

/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
module.exports = ListCache;

/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/* Built-in method references that are verified to be native. */


var Map = getNative(root, 'Map');
module.exports = Map;

/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
module.exports = MapCache;

/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/* Built-in method references that are verified to be native. */


var Promise = getNative(root, 'Promise');
module.exports = Promise;

/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/* Built-in method references that are verified to be native. */


var Set = getNative(root, 'Set');
module.exports = Set;

/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");
/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */


function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();

  while (++index < length) {
    this.add(values[index]);
  }
} // Add methods to `SetCache`.


SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
module.exports = SetCache;

/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
} // Add methods to `Stack`.


Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
module.exports = Stack;

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/** Built-in value references. */


var _Symbol = root.Symbol;
module.exports = _Symbol;

/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/** Built-in value references. */


var Uint8Array = root.Uint8Array;
module.exports = Uint8Array;

/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/* Built-in method references that are verified to be native. */


var WeakMap = getNative(root, 'WeakMap');
module.exports = WeakMap;

/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];

    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }

  return result;
}

module.exports = arrayFilter;

/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}

module.exports = arrayLikeKeys;

/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }

  return array;
}

module.exports = arrayPush;

/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }

  return false;
}

module.exports = arraySome;

/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */


function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}

module.exports = assocIndexOf;

/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */


function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");
/** `Object#toString` result references. */


var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */

function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;

/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */


function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }

  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }

  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;

/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");
/** Used to compose bitmasks for value comparisons. */


var COMPARE_PARTIAL_FLAG = 1;
/** `Object#toString` result references. */

var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */

function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }

    objIsArr = true;
    objIsObj = false;
  }

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }

  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }

  if (!isSameTag) {
    return false;
  }

  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;

/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */


var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;

/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */

function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;

/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }

  var result = [];

  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }

  return result;
}

module.exports = baseKeys;

/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

module.exports = baseTimes;

/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

module.exports = baseUnary;

/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;

/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/** Used to detect overreaching core-js shims. */


var coreJsData = root['__core-js_shared__'];
module.exports = coreJsData;

/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");
/** Used to compose bitmasks for value comparisons. */


var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */

function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  } // Check that cyclic values are equal.


  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);

  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }

  var index = -1,
      result = true,
      seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;
  stack.set(array, other);
  stack.set(other, array); // Ignore non-index properties.

  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }

    if (compared !== undefined) {
      if (compared) {
        continue;
      }

      result = false;
      break;
    } // Recursively compare arrays (susceptible to call stack limits).


    if (seen) {
      if (!arraySome(other, function (othValue, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }

  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;

/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");
/** Used to compose bitmasks for value comparisons. */


var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;
/** `Object#toString` result references. */

var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';
/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */

function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }

      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }

      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      } // Assume cyclic values are equal.


      var stacked = stack.get(object);

      if (stacked) {
        return stacked == other;
      }

      bitmask |= COMPARE_UNORDERED_FLAG; // Recursively compare objects (susceptible to call stack limits).

      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }

  }

  return false;
}

module.exports = equalByTag;

/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");
/** Used to compose bitmasks for value comparisons. */


var COMPARE_PARTIAL_FLAG = 1;
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */

function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }

  var index = objLength;

  while (index--) {
    var key = objProps[index];

    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  } // Check that cyclic values are equal.


  var objStacked = stack.get(object);
  var othStacked = stack.get(other);

  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }

  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;

  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    } // Recursively compare objects (susceptible to call stack limits).


    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }

    skipCtor || (skipCtor = key == 'constructor');
  }

  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor; // Non `Object` object instances with different constructors are not equal.

    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }

  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global && global.Object === Object && global;
module.exports = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */


function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;

/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */


function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

module.exports = getMapData;

/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */


function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

module.exports = getRawTag;

/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Built-in value references. */

var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */

var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
  if (object == null) {
    return [];
  }

  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
module.exports = getSymbols;

/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");
/** `Object#toString` result references. */


var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';
/** Used to detect maps, sets, and weakmaps. */

var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

var getTag = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function getTag(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;

        case mapCtorString:
          return mapTag;

        case promiseCtorString:
          return promiseTag;

        case setCtorString:
          return setTag;

        case weakMapCtorString:
          return weakMapTag;
      }
    }

    return result;
  };
}

module.exports = getTag;

/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;

/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */


function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;

/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;

/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;

/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

module.exports = hashHas;

/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */

function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;

/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  var type = _typeof(value);

  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = _typeof(value);

  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

module.exports = isKeyable;

/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");
/** Used to detect methods masquerading as native. */


var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

module.exports = isMasked;

/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}

module.exports = isPrototype;

/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;

/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");
/** Used for built-in method references. */


var arrayProto = Array.prototype;
/** Built-in value references. */

var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  --this.size;
  return true;
}

module.exports = listCacheDelete;

/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;

/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;

/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */


function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
}

module.exports = listCacheSet;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */


function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

module.exports = mapCacheClear;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */


function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;

/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);
  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;

/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");
/* Built-in method references that are verified to be native. */


var nativeCreate = getNative(Object, 'create');
module.exports = nativeCreate;

/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");
/* Built-in method references for those with the same name as other `lodash` methods. */


var nativeKeys = overArg(Object.keys, Object);
module.exports = nativeKeys;

/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");
/** Detect free variable `exports`. */


var freeExports = ( false ? undefined : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && ( false ? undefined : _typeof(module)) == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */

var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */

var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    } // Legacy `process.binding('util')` for Node.js < 10.


    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

module.exports = nodeUtil;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");
/** Detect free variable `self`. */


var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */

function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);

  return this;
}

module.exports = setCacheAdd;

/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;

/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);
  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;

/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */


function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}

module.exports = stackClear;

/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);
  this.size = data.size;
  return result;
}

module.exports = stackDelete;

/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;

/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;

/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");
/** Used as the size to enable large array optimizations. */


var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */

function stackSet(key, value) {
  var data = this.__data__;

  if (data instanceof ListCache) {
    var pairs = data.__data__;

    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }

    data = this.__data__ = new MapCache(pairs);
  }

  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;

/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}

module.exports = toSource;

/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

module.exports = eq;

/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */

var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */

var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
module.exports = isArguments;

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
module.exports = isArray;

/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */


function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;

/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");
/** Detect free variable `exports`. */


var freeExports = ( false ? undefined : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && ( false ? undefined : _typeof(module)) == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */

var isBuffer = nativeIsBuffer || stubFalse;
module.exports = isBuffer;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isEqual.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isEqual.js ***!
  \****************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");
/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */


function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");
/** `Object#toString` result references. */


var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!isObject(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */

function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = _typeof(value);

  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && _typeof(value) == 'object';
}

module.exports = isObjectLike;

/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");
/* Node.js helper references. */


var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */

var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
module.exports = isTypedArray;

/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */


function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;

/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;

/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;

/***/ }),

/***/ "./node_modules/nervjs/dist/index.esm.js":
/*!***********************************************!*\
  !*** ./node_modules/nervjs/dist/index.esm.js ***!
  \***********************************************/
/*! exports provided: Children, Component, PureComponent, createElement, cloneElement, render, nextTick, options, findDOMNode, isValidElement, unmountComponentAtNode, createPortal, unstable_renderSubtreeIntoContainer, hydrate, createFactory, unstable_batchedUpdates, version, PropTypes, createRef, forwardRef, memo, createContext, renderComponent, getHooks, Current, Fragment, useEffect, useLayoutEffect, useReducer, useState, useRef, useCallback, useMemo, useImperativeHandle, useContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window, document, requestAnimationFrame) {/* unused harmony export Children */
/* unused harmony export Component */
/* unused harmony export PureComponent */
/* unused harmony export createElement */
/* unused harmony export cloneElement */
/* unused harmony export render */
/* unused harmony export nextTick */
/* unused harmony export options */
/* unused harmony export findDOMNode */
/* unused harmony export isValidElement */
/* unused harmony export unmountComponentAtNode */
/* unused harmony export createPortal */
/* unused harmony export unstable_renderSubtreeIntoContainer */
/* unused harmony export hydrate */
/* unused harmony export createFactory */
/* unused harmony export unstable_batchedUpdates */
/* unused harmony export version */
/* unused harmony export PropTypes */
/* unused harmony export createRef */
/* unused harmony export forwardRef */
/* unused harmony export memo */
/* unused harmony export createContext */
/* unused harmony export renderComponent */
/* unused harmony export getHooks */
/* unused harmony export Current */
/* unused harmony export Fragment */
/* unused harmony export useEffect */
/* unused harmony export useLayoutEffect */
/* unused harmony export useReducer */
/* unused harmony export useState */
/* unused harmony export useRef */
/* unused harmony export useCallback */
/* unused harmony export useMemo */
/* unused harmony export useImperativeHandle */
/* unused harmony export useContext */
// tslint:disable-next-line
var global = function () {
  var local;

  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      // tslint:disable-next-line:function-constructor
      local = Function('return this')();
    } catch (e) {
      throw new Error('global object is unavailable in this environment');
    }
  }

  return local;
}();

var isBrowser = typeof window !== 'undefined'; // tslint:disable-next-line:no-empty

function noop() {}

var fakeDoc = {
  createElement: noop,
  createElementNS: noop,
  createTextNode: noop
};
var doc = isBrowser ? document : fakeDoc;
var UA = isBrowser && window.navigator.userAgent.toLowerCase();
var isMacSafari = isBrowser && UA && window.navigator.platform && /mac/i.test(window.navigator.platform) && /^((?!chrome|android).)*safari/i.test(UA);
var isTaro = isBrowser && !document.scripts;
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isiOS = UA && /iphone|ipad|ipod|ios/.test(UA);

function isNumber(arg) {
  return typeof arg === 'number';
}

var isSupportSVG = isFunction(doc.createAttributeNS);

function isString(arg) {
  return typeof arg === 'string';
}

function isFunction(arg) {
  return typeof arg === 'function';
}

function isBoolean(arg) {
  return arg === true || arg === false;
}

var isArray = Array.isArray;

function isObject(arg) {
  return arg === Object(arg) && !isFunction(arg);
}

function isUndefined(o) {
  return o === undefined;
} // Object.is polyfill
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is


function objectIs(x, y) {
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return x !== 0 || 1 / x === 1 / y;
  } // eslint-disable-next-line no-self-compare


  return x !== x && y !== y;
}

var canUsePromise = 'Promise' in global && !isMacSafari;
var resolved;

if (canUsePromise) {
  resolved = Promise.resolve();
}

var nextTick = function nextTick(fn) {
  var args = [],
      len = arguments.length - 1;

  while (len-- > 0) {
    args[len] = arguments[len + 1];
  }

  fn = isFunction(fn) ? fn.bind.apply(fn, [null].concat(args)) : fn;

  if (canUsePromise) {
    return resolved.then(fn);
  }

  var timerFunc = 'requestAnimationFrame' in global && !isMacSafari ? requestAnimationFrame : setTimeout;
  timerFunc(fn);
};
/* istanbul ignore next */
// tslint:disable-next-line


Object.is = Object.is || function (x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  }

  return x !== x && y !== y;
};

function shallowEqual(obj1, obj2) {
  if (obj1 === null || obj2 === null) {
    return false;
  }

  if (Object.is(obj1, obj2)) {
    return true;
  }

  var obj1Keys = obj1 ? Object.keys(obj1) : [];
  var obj2Keys = obj2 ? Object.keys(obj2) : [];

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (var i = 0; i < obj1Keys.length; i++) {
    var obj1KeyItem = obj1Keys[i];

    if (!obj2.hasOwnProperty(obj1KeyItem) || !Object.is(obj1[obj1KeyItem], obj2[obj1KeyItem])) {
      return false;
    }
  }

  return true;
}

var SimpleMap = function SimpleMap() {
  this.cache = [];
  this.size = 0;
};

SimpleMap.prototype.set = function set(k, v) {
  var this$1 = this;
  var len = this.cache.length;

  if (!len) {
    this.cache.push({
      k: k,
      v: v
    });
    this.size += 1;
    return;
  }

  for (var i = 0; i < len; i++) {
    var item = this$1.cache[i];

    if (item.k === k) {
      item.v = v;
      return;
    }
  }

  this.cache.push({
    k: k,
    v: v
  });
  this.size += 1;
};

SimpleMap.prototype.get = function get(k) {
  var this$1 = this;
  var len = this.cache.length;

  if (!len) {
    return;
  }

  for (var i = 0; i < len; i++) {
    var item = this$1.cache[i];

    if (item.k === k) {
      return item.v;
    }
  }
};

SimpleMap.prototype.has = function has(k) {
  var this$1 = this;
  var len = this.cache.length;

  if (!len) {
    return false;
  }

  for (var i = 0; i < len; i++) {
    var item = this$1.cache[i];

    if (item.k === k) {
      return true;
    }
  }

  return false;
};

SimpleMap.prototype['delete'] = function delete$1(k) {
  var this$1 = this;
  var len = this.cache.length;

  for (var i = 0; i < len; i++) {
    var item = this$1.cache[i];

    if (item.k === k) {
      this$1.cache.splice(i, 1);
      this$1.size -= 1;
      return true;
    }
  }

  return false;
};

SimpleMap.prototype.clear = function clear() {
  var this$1 = this;
  var len = this.cache.length;
  this.size = 0;

  if (!len) {
    return;
  }

  while (len) {
    this$1.cache.pop();
    len--;
  }
};

var MapClass = 'Map' in global ? Map : SimpleMap;

function isAttrAnEvent(attr) {
  return attr[0] === 'o' && attr[1] === 'n';
}

var extend = function () {
  if ('assign' in Object) {
    return function (source, from) {
      if (!from) {
        return source;
      }

      Object.assign(source, from);
      return source;
    };
  } else {
    return function (source, from) {
      if (!from) {
        return source;
      }

      for (var key in from) {
        if (from.hasOwnProperty(key)) {
          source[key] = from[key];
        }
      }

      return source;
    };
  }
}();

function clone(obj) {
  return extend({}, obj);
}

var Current = {
  current: null,
  index: 0
};
var EMPTY_CHILDREN = [];
var EMPTY_OBJ = {};

function isNullOrUndef(o) {
  return o === undefined || o === null;
}

function isInvalid(o) {
  return isNullOrUndef(o) || o === true || o === false;
}

function isVNode(node) {
  return !isNullOrUndef(node) && node.vtype === 2
  /* Node */
  ;
}

function isVText(node) {
  return !isNullOrUndef(node) && node.vtype === 1
  /* Text */
  ;
}

function isComponent(instance) {
  return !isInvalid(instance) && instance.isReactComponent === EMPTY_OBJ;
}

function isPortal(vtype, node) {
  return (vtype & 32
  /* Portal */
  ) > 0;
}

function isComposite(node) {
  return !isNullOrUndef(node) && node.vtype === 4
  /* Composite */
  ;
}

function isValidElement(node) {
  return !isNullOrUndef(node) && node.vtype;
} // tslint:disable-next-line:no-empty


function noop$1() {} // typescript will compile the enum's value for us.
// eg.
// Composite = 1 << 2  => Composite = 4


var VType;

(function (VType) {
  VType[VType["Text"] = 1] = "Text";
  VType[VType["Node"] = 2] = "Node";
  VType[VType["Composite"] = 4] = "Composite";
  VType[VType["Void"] = 16] = "Void";
  VType[VType["Portal"] = 32] = "Portal";
})(VType || (VType = {}));

var Ref = {
  update: function update(lastVnode, nextVnode, domNode) {
    var prevRef = lastVnode != null && lastVnode.ref;
    var nextRef = nextVnode != null && nextVnode.ref;

    if (prevRef !== nextRef) {
      this.detach(lastVnode, prevRef, lastVnode.dom);
      this.attach(nextVnode, nextRef, domNode);
    }
  },
  attach: function attach(vnode, ref, domNode) {
    var node = isComposite(vnode) ? vnode.component : domNode;

    if (isFunction(ref)) {
      var componentForCatcher = isComposite(vnode) ? vnode.component : vnode;
      errorCatcher(function () {
        ref(node);
      }, componentForCatcher);
    } else if (isString(ref)) {
      var inst = vnode._owner;

      if (inst && isFunction(inst.render)) {
        inst.refs[ref] = node;
      }
    } else if (isObject(ref)) {
      ref.current = node;
    }
  },
  detach: function detach(vnode, ref, domNode) {
    var node = isComposite(vnode) ? vnode.component : domNode;

    if (isFunction(ref)) {
      var componentForCatcher = isComposite(vnode) ? vnode.component : vnode;
      errorCatcher(function () {
        ref(null);
      }, componentForCatcher);
    } else if (isString(ref)) {
      var inst = vnode._owner;

      if (inst.refs[ref] === node && isFunction(inst.render)) {
        delete inst.refs[ref];
      }
    } else if (isObject(ref)) {
      ref.current = null;
    }
  }
};
var defaultOptions = {
  passive: false,
  capture: false
};

var eventListenerOptionsSupported = function eventListenerOptionsSupported() {
  var supported = false;

  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function get() {
        supported = true;
      }
    });
    window.addEventListener('test', null, opts);
    window.removeEventListener('test', null, opts);
  } catch (e) {
    supported = false;
  }

  return supported;
};

function getDefaultPassiveOption() {
  var passiveOption = !eventListenerOptionsSupported() ? false : defaultOptions;
  return function () {
    return passiveOption;
  };
}

var getPassiveOption = getDefaultPassiveOption();
var supportedPassiveEventMap = {
  scroll: getPassiveOption(),
  wheel: getPassiveOption(),
  touchstart: getPassiveOption(),
  touchmove: getPassiveOption(),
  touchenter: getPassiveOption(),
  touchend: getPassiveOption(),
  touchleave: getPassiveOption(),
  mouseout: getPassiveOption(),
  mouseleave: getPassiveOption(),
  mouseup: getPassiveOption(),
  mousedown: getPassiveOption(),
  mousemove: getPassiveOption(),
  mouseenter: getPassiveOption(),
  mousewheel: getPassiveOption(),
  mouseover: getPassiveOption()
};
var ONINPUT = 'oninput';
var ONPROPERTYCHANGE = 'onpropertychange';
var delegatedEvents = new MapClass();
var unbubbleEvents = {
  onmousemove: 1,
  ontouchmove: 1,
  onmouseleave: 1,
  onmouseenter: 1,
  onload: 1,
  onunload: 1,
  onscroll: 1,
  onfocus: 1,
  onblur: 1,
  onrowexit: 1,
  onbeforeunload: 1,
  onstop: 1,
  ondragdrop: 1,
  ondragenter: 1,
  ondragexit: 1,
  ondraggesture: 1,
  ondragover: 1,
  oncontextmenu: 1,
  onerror: 1,
  onabort: 1,
  oncanplay: 1,
  oncanplaythrough: 1,
  ondurationchange: 1,
  onemptied: 1,
  onended: 1,
  onloadeddata: 1,
  onloadedmetadata: 1,
  onloadstart: 1,
  onencrypted: 1,
  onpause: 1,
  onplay: 1,
  onplaying: 1,
  onprogress: 1,
  onratechange: 1,
  onseeking: 1,
  onseeked: 1,
  onstalled: 1,
  onsuspend: 1,
  ontimeupdate: 1,
  onvolumechange: 1,
  onwaiting: 1
};
unbubbleEvents[ONPROPERTYCHANGE] = 1;
var bindFocus = false;
/* istanbul ignore next */

if (isIE9) {
  var elements = [];
  var values = [];
  doc.addEventListener('selectionchange', function () {
    var el = doc.activeElement;

    if (detectCanUseOnInputNode(el)) {
      var index = elements.indexOf(el);
      var element = elements[index] || elements.push(el);

      if (element.value !== values[index]) {
        var ev = doc.createEvent('CustomEvent');
        ev.initCustomEvent('input', true, true, undefined);
        values[index] = element.value;
        el.dispatchEvent(ev);
      }
    }
  });
}

if (typeof Event !== 'undefined' && !Event.prototype.persist) {
  // tslint:disable-next-line:no-empty
  Event.prototype.persist = noop$1;
}

function attachEvent(domNode, eventName, handler) {
  eventName = fixEvent(domNode, eventName);
  /* istanbul ignore next */

  if (eventName === ONPROPERTYCHANGE) {
    processOnPropertyChangeEvent(domNode, handler);
    return;
  }

  var delegatedRoots = delegatedEvents.get(eventName);

  if (unbubbleEvents[eventName] === 1 || isTaro) {
    if (!delegatedRoots) {
      delegatedRoots = new MapClass();
    }

    var event = attachEventToNode(domNode, eventName, delegatedRoots);
    delegatedEvents.set(eventName, delegatedRoots);

    if (isFunction(handler)) {
      delegatedRoots.set(domNode, {
        eventHandler: handler,
        event: event
      });
    }
  } else {
    if (!delegatedRoots) {
      delegatedRoots = {
        items: new MapClass()
      };
      delegatedRoots.event = attachEventToDocument(doc, eventName, delegatedRoots);
      delegatedEvents.set(eventName, delegatedRoots);
    }

    if (isFunction(handler)) {
      if (isiOS) {
        domNode.onclick = noop$1;
      }

      delegatedRoots.items.set(domNode, handler);
    }
  }
}

function detachEvent(domNode, eventName, handler) {
  eventName = fixEvent(domNode, eventName);

  if (eventName === ONPROPERTYCHANGE) {
    return;
  }

  var delegatedRoots = delegatedEvents.get(eventName);

  if (unbubbleEvents[eventName] === 1 && delegatedRoots || isTaro) {
    var event = delegatedRoots.get(domNode);

    if (event) {
      domNode.removeEventListener(parseEventName(eventName), event.event, false);
      /* istanbul ignore next */

      var delegatedRootsSize = delegatedRoots.size;

      if (delegatedRoots['delete'](domNode) && delegatedRootsSize === 0) {
        delegatedEvents['delete'](eventName);
      }
    }
  } else if (delegatedRoots && delegatedRoots.items) {
    var items = delegatedRoots.items;

    if (items['delete'](domNode) && items.size === 0) {
      doc.removeEventListener(parseEventName(eventName), delegatedRoots.event, false);
      delegatedEvents['delete'](eventName);
    }
  }
}

var propertyChangeActiveElement;
var propertyChangeActiveElementValue;
var propertyChangeActiveElementValueProp;
var propertyChangeActiveHandlers = {};
/* istanbul ignore next */

function propertyChangeHandler(event) {
  if (event.propertyName !== 'value') {
    return;
  }

  var target = event.target || event.srcElement;
  var val = target.value;

  if (val === propertyChangeActiveElementValue) {
    return;
  }

  propertyChangeActiveElementValue = val;
  var handler = propertyChangeActiveHandlers[target.name];

  if (isFunction(handler)) {
    handler.call(target, event);
  }
}
/* istanbul ignore next */


function processOnPropertyChangeEvent(node, handler) {
  propertyChangeActiveHandlers[node.name] = handler;

  if (!bindFocus) {
    // bindFocus = true
    node.addEventListener('focusin', function () {
      unbindOnPropertyChange();
      bindOnPropertyChange(node);
    }, false);
    node.addEventListener('focusout', unbindOnPropertyChange, false);
  }
}
/* istanbul ignore next */


function bindOnPropertyChange(node) {
  propertyChangeActiveElement = node;
  propertyChangeActiveElementValue = node.value;
  propertyChangeActiveElementValueProp = Object.getOwnPropertyDescriptor(node.constructor.prototype, 'value');
  Object.defineProperty(propertyChangeActiveElement, 'value', {
    get: function get() {
      return propertyChangeActiveElementValueProp.get.call(this);
    },
    set: function set(val) {
      propertyChangeActiveElementValue = val;
      propertyChangeActiveElementValueProp.set.call(this, val);
    }
  });
  propertyChangeActiveElement.addEventListener('propertychange', propertyChangeHandler, false);
}
/* istanbul ignore next */


function unbindOnPropertyChange() {
  if (!propertyChangeActiveElement) {
    return;
  }

  delete propertyChangeActiveElement.value;
  propertyChangeActiveElement.removeEventListener('propertychange', propertyChangeHandler, false);
  propertyChangeActiveElement = null;
  propertyChangeActiveElementValue = null;
  propertyChangeActiveElementValueProp = null;
}

function detectCanUseOnInputNode(node) {
  var nodeName = node.nodeName && node.nodeName.toLowerCase();
  var type = node.type;
  return nodeName === 'input' && /text|password/.test(type) || nodeName === 'textarea';
}

function fixEvent(node, eventName) {
  if (isTaro && eventName === 'onClick') {
    eventName = 'onTap';
  }

  if (eventName === 'onDoubleClick') {
    eventName = 'ondblclick';
  } else if (eventName === 'onTouchTap') {
    eventName = 'onclick'; // tslint:disable-next-line:prefer-conditional-expression
  } else if (eventName === 'onChange' && detectCanUseOnInputNode(node)) {
    eventName = ONINPUT in window ? ONINPUT : ONPROPERTYCHANGE;
  } else {
    eventName = eventName.toLowerCase();
  }

  return eventName;
}

function parseEventName(name) {
  return name.substr(2);
}
/* istanbul ignore next */


function stopPropagation() {
  this.cancelBubble = true;
  this.stopImmediatePropagation();
}

function dispatchEvent(event, target, items, count, eventData) {
  var eventsToTrigger = items.get(target);

  if (eventsToTrigger) {
    count--;
    eventData.currentTarget = target; // for React synthetic event compatibility

    Object.defineProperties(event, {
      nativeEvent: {
        value: event
      }
    });
    eventsToTrigger(event);

    if (event.cancelBubble) {
      return;
    }
  }

  if (count > 0) {
    var parentDom = target.parentNode;

    if (parentDom === null || event.type === 'click' && parentDom.nodeType === 1 && parentDom.disabled) {
      return;
    }

    dispatchEvent(event, parentDom, items, count, eventData);
  }
}

function attachEventToDocument(d, eventName, delegatedRoots) {
  var eventHandler = function eventHandler(event) {
    var items = delegatedRoots.items;
    var count = items.size;

    if (count > 0) {
      var eventData = {
        currentTarget: event.target
      };
      /* istanbul ignore next */

      try {
        Object.defineProperties(event, {
          currentTarget: {
            configurable: true,
            get: function get() {
              return eventData.currentTarget;
            }
          },
          stopPropagation: {
            value: stopPropagation
          }
        });
      } catch (error) {// some browsers crashed
        // see: https://stackoverflow.com/questions/44052813/why-cannot-redefine-property
      }

      dispatchEvent(event, event.target, delegatedRoots.items, count, eventData);
    }
  };

  var parsedEventName = parseEventName(eventName);
  d.addEventListener(parsedEventName, eventHandler, supportedPassiveEventMap[parsedEventName] || false);
  return eventHandler;
}

function attachEventToNode(node, eventName, delegatedRoots) {
  var eventHandler = function eventHandler(event) {
    var eventToTrigger = delegatedRoots.get(node);

    if (eventToTrigger && eventToTrigger.eventHandler) {
      var eventData = {
        currentTarget: node
      };
      /* istanbul ignore next */

      Object.defineProperties(event, {
        currentTarget: {
          configurable: true,
          get: function get() {
            return eventData.currentTarget;
          }
        }
      });
      eventToTrigger.eventHandler(event);
    }
  };

  var parsedEventName = parseEventName(eventName);
  node.addEventListener(parsedEventName, eventHandler, supportedPassiveEventMap[parsedEventName] || false);
  return eventHandler;
}

function unmountChildren(children, parentDom) {
  if (isArray(children)) {
    for (var i = 0, len = children.length; i < len; i++) {
      unmount(children[i], parentDom);
    }
  } else {
    unmount(children, parentDom);
  }
}

function unmount(vnode, parentDom) {
  if (isInvalid(vnode)) {
    return;
  }

  var vtype = vnode.vtype; // Bitwise operators for better performance
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators

  var dom = vnode.dom;

  if ((vtype & 4
  /* Composite */
  ) > 0) {
    vnode.destroy();
  } else if ((vtype & 2
  /* Node */
  ) > 0) {
    var props = vnode.props;
    var children = vnode.children;
    var ref = vnode.ref;
    unmountChildren(children);

    for (var propName in props) {
      if (isAttrAnEvent(propName)) {
        detachEvent(dom, propName, props[propName]);
      }
    }

    if (ref !== null) {
      Ref.detach(vnode, ref, dom);
    }
  } else if (vtype & 32
  /* Portal */
  ) {
      unmountChildren(vnode.children, vnode.type);
    }

  if (!isNullOrUndef(parentDom) && !isNullOrUndef(dom)) {
    if (isArray(dom)) {
      for (var i = 0; i < dom.length; i++) {
        parentDom.removeChild(dom[i]);
      }
    } else {
      parentDom.removeChild(dom);
    }
  } // vnode.dom = null

}

var NS = {
  ev: 'http://www.w3.org/2001/xml-events',
  xlink: 'http://www.w3.org/1999/xlink',
  xml: 'http://www.w3.org/XML/1998/namespace'
};
var ATTRS = {
  accentHeight: 'accent-height',
  accumulate: 0,
  additive: 0,
  alignmentBaseline: 'alignment-baseline',
  allowReorder: 'allowReorder',
  alphabetic: 0,
  amplitude: 0,
  arabicForm: 'arabic-form',
  ascent: 0,
  attributeName: 'attributeName',
  attributeType: 'attributeType',
  autoReverse: 'autoReverse',
  azimuth: 0,
  baseFrequency: 'baseFrequency',
  baseProfile: 'baseProfile',
  baselineShift: 'baseline-shift',
  bbox: 0,
  begin: 0,
  bias: 0,
  by: 0,
  calcMode: 'calcMode',
  capHeight: 'cap-height',
  clip: 0,
  clipPath: 'clip-path',
  clipRule: 'clip-rule',
  clipPathUnits: 'clipPathUnits',
  colorInterpolation: 'color-interpolation',
  colorInterpolationFilters: 'color-interpolation-filters',
  colorProfile: 'color-profile',
  colorRendering: 'color-rendering',
  contentScriptType: 'contentScriptType',
  contentStyleType: 'contentStyleType',
  cursor: 0,
  cx: 0,
  cy: 0,
  d: 0,
  decelerate: 0,
  descent: 0,
  diffuseConstant: 'diffuseConstant',
  direction: 0,
  display: 0,
  divisor: 0,
  dominantBaseline: 'dominant-baseline',
  dur: 0,
  dx: 0,
  dy: 0,
  edgeMode: 'edgeMode',
  elevation: 0,
  enableBackground: 'enable-background',
  end: 0,
  evEvent: 'ev:event',
  exponent: 0,
  externalResourcesRequired: 'externalResourcesRequired',
  fill: 0,
  fillOpacity: 'fill-opacity',
  fillRule: 'fill-rule',
  filter: 0,
  filterRes: 'filterRes',
  filterUnits: 'filterUnits',
  floodColor: 'flood-color',
  floodOpacity: 'flood-opacity',
  focusable: 0,
  fontFamily: 'font-family',
  fontSize: 'font-size',
  fontSizeAdjust: 'font-size-adjust',
  fontStretch: 'font-stretch',
  fontStyle: 'font-style',
  fontVariant: 'font-variant',
  fontWeight: 'font-weight',
  format: 0,
  from: 0,
  fx: 0,
  fy: 0,
  g1: 0,
  g2: 0,
  glyphName: 'glyph-name',
  glyphOrientationHorizontal: 'glyph-orientation-horizontal',
  glyphOrientationVertical: 'glyph-orientation-vertical',
  glyphRef: 'glyphRef',
  gradientTransform: 'gradientTransform',
  gradientUnits: 'gradientUnits',
  hanging: 0,
  horizAdvX: 'horiz-adv-x',
  horizOriginX: 'horiz-origin-x',
  ideographic: 0,
  imageRendering: 'image-rendering',
  'in': 0,
  in2: 0,
  intercept: 0,
  k: 0,
  k1: 0,
  k2: 0,
  k3: 0,
  k4: 0,
  kernelMatrix: 'kernelMatrix',
  kernelUnitLength: 'kernelUnitLength',
  kerning: 0,
  keyPoints: 'keyPoints',
  keySplines: 'keySplines',
  keyTimes: 'keyTimes',
  lengthAdjust: 'lengthAdjust',
  letterSpacing: 'letter-spacing',
  lightingColor: 'lighting-color',
  limitingConeAngle: 'limitingConeAngle',
  local: 0,
  markerEnd: 'marker-end',
  markerMid: 'marker-mid',
  markerStart: 'marker-start',
  markerHeight: 'markerHeight',
  markerUnits: 'markerUnits',
  markerWidth: 'markerWidth',
  mask: 0,
  maskContentUnits: 'maskContentUnits',
  maskUnits: 'maskUnits',
  mathematical: 0,
  mode: 0,
  numOctaves: 'numOctaves',
  offset: 0,
  opacity: 0,
  operator: 0,
  order: 0,
  orient: 0,
  orientation: 0,
  origin: 0,
  overflow: 0,
  overlinePosition: 'overline-position',
  overlineThickness: 'overline-thickness',
  paintOrder: 'paint-order',
  panose1: 'panose-1',
  pathLength: 'pathLength',
  patternContentUnits: 'patternContentUnits',
  patternTransform: 'patternTransform',
  patternUnits: 'patternUnits',
  pointerEvents: 'pointer-events',
  points: 0,
  pointsAtX: 'pointsAtX',
  pointsAtY: 'pointsAtY',
  pointsAtZ: 'pointsAtZ',
  preserveAlpha: 'preserveAlpha',
  preserveAspectRatio: 'preserveAspectRatio',
  primitiveUnits: 'primitiveUnits',
  r: 0,
  radius: 0,
  refX: 'refX',
  refY: 'refY',
  renderingIntent: 'rendering-intent',
  repeatCount: 'repeatCount',
  repeatDur: 'repeatDur',
  requiredExtensions: 'requiredExtensions',
  requiredFeatures: 'requiredFeatures',
  restart: 0,
  result: 0,
  rotate: 0,
  rx: 0,
  ry: 0,
  scale: 0,
  seed: 0,
  shapeRendering: 'shape-rendering',
  slope: 0,
  spacing: 0,
  specularConstant: 'specularConstant',
  specularExponent: 'specularExponent',
  speed: 0,
  spreadMethod: 'spreadMethod',
  startOffset: 'startOffset',
  stdDeviation: 'stdDeviation',
  stemh: 0,
  stemv: 0,
  stitchTiles: 'stitchTiles',
  stopColor: 'stop-color',
  stopOpacity: 'stop-opacity',
  strikethroughPosition: 'strikethrough-position',
  strikethroughThickness: 'strikethrough-thickness',
  string: 0,
  stroke: 0,
  strokeDasharray: 'stroke-dasharray',
  strokeDashoffset: 'stroke-dashoffset',
  strokeLinecap: 'stroke-linecap',
  strokeLinejoin: 'stroke-linejoin',
  strokeMiterlimit: 'stroke-miterlimit',
  strokeOpacity: 'stroke-opacity',
  strokeWidth: 'stroke-width',
  surfaceScale: 'surfaceScale',
  systemLanguage: 'systemLanguage',
  tableValues: 'tableValues',
  targetX: 'targetX',
  targetY: 'targetY',
  textAnchor: 'text-anchor',
  textDecoration: 'text-decoration',
  textRendering: 'text-rendering',
  textLength: 'textLength',
  to: 0,
  transform: 0,
  u1: 0,
  u2: 0,
  underlinePosition: 'underline-position',
  underlineThickness: 'underline-thickness',
  unicode: 0,
  unicodeBidi: 'unicode-bidi',
  unicodeRange: 'unicode-range',
  unitsPerEm: 'units-per-em',
  vAlphabetic: 'v-alphabetic',
  vHanging: 'v-hanging',
  vIdeographic: 'v-ideographic',
  vMathematical: 'v-mathematical',
  values: 0,
  vectorEffect: 'vector-effect',
  version: 0,
  vertAdvY: 'vert-adv-y',
  vertOriginX: 'vert-origin-x',
  vertOriginY: 'vert-origin-y',
  viewBox: 'viewBox',
  viewTarget: 'viewTarget',
  visibility: 0,
  widths: 0,
  wordSpacing: 'word-spacing',
  writingMode: 'writing-mode',
  x: 0,
  xHeight: 'x-height',
  x1: 0,
  x2: 0,
  xChannelSelector: 'xChannelSelector',
  xlinkActuate: 'xlink:actuate',
  xlinkArcrole: 'xlink:arcrole',
  xlinkHref: 'xlink:href',
  xlinkRole: 'xlink:role',
  xlinkShow: 'xlink:show',
  xlinkTitle: 'xlink:title',
  xlinkType: 'xlink:type',
  xmlBase: 'xml:base',
  xmlId: 'xml:id',
  xmlns: 0,
  xmlnsXlink: 'xmlns:xlink',
  xmlLang: 'xml:lang',
  xmlSpace: 'xml:space',
  y: 0,
  y1: 0,
  y2: 0,
  yChannelSelector: 'yChannelSelector',
  z: 0,
  zoomAndPan: 'zoomAndPan'
};
var SVGPropertyConfig = {
  Properties: {},
  DOMAttributeNamespaces: {
    'ev:event': NS.ev,
    'xlink:actuate': NS.xlink,
    'xlink:arcrole': NS.xlink,
    'xlink:href': NS.xlink,
    'xlink:role': NS.xlink,
    'xlink:show': NS.xlink,
    'xlink:title': NS.xlink,
    'xlink:type': NS.xlink,
    'xml:base': NS.xml,
    'xml:id': NS.xml,
    'xml:lang': NS.xml,
    'xml:space': NS.xml
  },
  DOMAttributeNames: {}
};
Object.keys(ATTRS).forEach(function (key) {
  SVGPropertyConfig.Properties[key] = 0;

  if (ATTRS[key]) {
    SVGPropertyConfig.DOMAttributeNames[key] = ATTRS[key];
  }
});
/* tslint:disable: no-empty*/

function patch(lastVnode, nextVnode, parentNode, context, isSvg) {
  var lastDom = lastVnode.dom;
  var newDom;
  var lastVnodeIsArray = isArray(lastVnode);
  var nextVnodeisArray = isArray(nextVnode);

  if (isSameVNode(lastVnode, nextVnode)) {
    var vtype = nextVnode.vtype;

    if (vtype & 2
    /* Node */
    ) {
        isSvg = isNullOrUndef(isSvg) ? lastVnode.isSvg : isSvg;

        if (isSvg) {
          nextVnode.isSvg = isSvg;
        }

        patchProps(lastDom, nextVnode.props, lastVnode.props, lastVnode, isSvg);
        patchChildren(lastDom, lastVnode.children, nextVnode.children, context, isSvg);

        if (nextVnode.ref !== null) {
          Ref.update(lastVnode, nextVnode, lastDom);
        }

        newDom = lastDom;
      } else if ((vtype & 4
    /* Composite */
    ) > 0) {
      newDom = nextVnode.update(lastVnode, nextVnode, context);
    } else if (vtype & 1
    /* Text */
    ) {
        return patchVText(lastVnode, nextVnode);
      } else if (vtype & 32
    /* Portal */
    ) {
        patchChildren(lastVnode.type, lastVnode.children, nextVnode.children, context, isSvg);
      } // @TODO: test case


    nextVnode.dom = newDom || lastDom;
  } else if (isArray(lastVnode) && isArray(nextVnode)) {
    patchArrayChildren(lastDom, lastVnode, nextVnode, context, false);
  } else if (lastVnodeIsArray && !nextVnodeisArray) {
    patchArrayChildren(parentNode, lastVnode, [nextVnode], context, false);
  } else if (!lastVnodeIsArray && nextVnodeisArray) {
    newDom = createElement(nextVnode, isSvg, context);
    insertElement(newDom, parentNode, lastDom);
    parentNode.removeChild(lastDom);
  } else {
    unmount(lastVnode);
    newDom = createElement(nextVnode, isSvg, context);

    if (nextVnode !== null) {
      nextVnode.dom = newDom;
    }

    var newDomIsArray = isArray(newDom);
    var lastDomIsArray = isArray(lastDom);

    if (newDomIsArray) {
      insertElement(newDom, parentNode, lastDom);
      parentNode.removeChild(lastDom);
    } else if (lastDomIsArray) {
      parentNode = lastDom[0].parentNode;
      parentNode.insertBefore(newDom, lastDom[0]);

      for (var i = 0; i < lastDom.length; i++) {
        parentNode.removeChild(lastDom[i]);
      }
    } else if (parentNode !== null) {
      if (lastDom != null) {
        parentNode.replaceChild(newDom, lastDom);
      } else {
        parentNode.appendChild(newDom);
      }
    }
  }

  return newDom;
}

function patchArrayChildren(parentDom, lastChildren, nextChildren, context, isSvg) {
  var lastLength = lastChildren.length;
  var nextLength = nextChildren.length;

  if (lastLength === 0) {
    if (nextLength > 0) {
      for (var i = 0; i < nextLength; i++) {
        mountChild(nextChildren[i], parentDom, context, isSvg);
      }
    }
  } else if (nextLength === 0) {
    unmountChildren(lastChildren);
    parentDom.textContent = '';
  } else {
    if (isKeyed(lastChildren, nextChildren)) {
      patchKeyedChildren(lastChildren, nextChildren, parentDom, context, isSvg, lastLength, nextLength);
    } else {
      patchNonKeyedChildren(parentDom, lastChildren, nextChildren, context, isSvg, lastLength, nextLength);
    }
  }
}

function patchChildren(parentDom, lastChildren, nextChildren, context, isSvg) {
  // @TODO: is a better way to compatible with react-router?
  // if (lastChildren === nextChildren) {
  //   return
  // }
  var lastChildrenIsArray = isArray(lastChildren);
  var nextChildrenIsArray = isArray(nextChildren);

  if (lastChildrenIsArray && nextChildrenIsArray) {
    patchArrayChildren(parentDom, lastChildren, nextChildren, context, isSvg);
  } else if (!lastChildrenIsArray && !nextChildrenIsArray) {
    patch(lastChildren, nextChildren, parentDom, context, isSvg);
  } else if (lastChildrenIsArray && !nextChildrenIsArray) {
    patchArrayChildren(parentDom, lastChildren, [nextChildren], context, isSvg);
  } else if (!lastChildrenIsArray && nextChildrenIsArray) {
    patchArrayChildren(parentDom, [lastChildren], nextChildren, context, isSvg);
  }
}

function patchNonKeyedChildren(parentDom, lastChildren, nextChildren, context, isSvg, lastLength, nextLength) {
  var minLength = Math.min(lastLength, nextLength);
  var i = 0;

  while (i < minLength) {
    patch(lastChildren[i], nextChildren[i], parentDom, context, isSvg);
    i++;
  }

  if (lastLength < nextLength) {
    for (i = minLength; i < nextLength; i++) {
      if (parentDom !== null) {
        var refVnode = lastChildren[i - 1];
        mountElement(createElement(nextChildren[i], isSvg, context), parentDom, isValidElement(refVnode) && refVnode.dom != null ? refVnode.dom.nextSibling : null);
      }
    }
  } else if (lastLength > nextLength) {
    for (i = minLength; i < lastLength; i++) {
      unmount(lastChildren[i], parentDom);
    }
  }
}
/**
 *
 * Virtual DOM patching algorithm based on ivi by
 * Boris Kaul (@localvoid)
 * Licensed under the MIT License
 * https://github.com/ivijs/ivi/blob/master/LICENSE
 *
 */


function patchKeyedChildren(a, b, dom, context, isSvg, aLength, bLength) {
  var aEnd = aLength - 1;
  var bEnd = bLength - 1;
  var aStart = 0;
  var bStart = 0;
  var i;
  var j;
  var aNode;
  var bNode;
  var nextNode;
  var nextPos;
  var node;
  var aStartNode = a[aStart];
  var bStartNode = b[bStart];
  var aEndNode = a[aEnd];
  var bEndNode = b[bEnd]; // Step 1
  // tslint:disable-next-line

  outer: {
    // Sync nodes with the same key at the beginning.
    while (aStartNode.key === bStartNode.key) {
      patch(aStartNode, bStartNode, dom, context, isSvg);
      aStart++;
      bStart++;

      if (aStart > aEnd || bStart > bEnd) {
        break outer;
      }

      aStartNode = a[aStart];
      bStartNode = b[bStart];
    } // Sync nodes with the same key at the end.


    while (aEndNode.key === bEndNode.key) {
      patch(aEndNode, bEndNode, dom, context, isSvg);
      aEnd--;
      bEnd--;

      if (aStart > aEnd || bStart > bEnd) {
        break outer;
      }

      aEndNode = a[aEnd];
      bEndNode = b[bEnd];
    }
  }

  if (aStart > aEnd) {
    if (bStart <= bEnd) {
      nextPos = bEnd + 1;
      nextNode = nextPos < bLength ? b[nextPos].dom : null;

      while (bStart <= bEnd) {
        node = b[bStart];
        bStart++;
        attachNewNode(dom, createElement(node, isSvg, context), nextNode);
      }
    }
  } else if (bStart > bEnd) {
    while (aStart <= aEnd) {
      unmount(a[aStart++], dom);
    }
  } else {
    var aLeft = aEnd - aStart + 1;
    var bLeft = bEnd - bStart + 1;
    var sources = new Array(bLeft); // Mark all nodes as inserted.

    for (i = 0; i < bLeft; i++) {
      sources[i] = -1;
    }

    var moved = false;
    var pos = 0;
    var patched = 0; // When sizes are small, just loop them through

    if (bLeft <= 4 || aLeft * bLeft <= 16) {
      for (i = aStart; i <= aEnd; i++) {
        aNode = a[i];

        if (patched < bLeft) {
          for (j = bStart; j <= bEnd; j++) {
            bNode = b[j];

            if (aNode.key === bNode.key) {
              sources[j - bStart] = i;

              if (pos > j) {
                moved = true;
              } else {
                pos = j;
              }

              patch(aNode, bNode, dom, context, isSvg);
              patched++;
              a[i] = null;
              break;
            }
          }
        }
      }
    } else {
      var keyIndex = new MapClass();

      for (i = bStart; i <= bEnd; i++) {
        keyIndex.set(b[i].key, i);
      }

      for (i = aStart; i <= aEnd; i++) {
        aNode = a[i];

        if (patched < bLeft) {
          j = keyIndex.get(aNode.key);

          if (j !== undefined) {
            bNode = b[j];
            sources[j - bStart] = i;

            if (pos > j) {
              moved = true;
            } else {
              pos = j;
            }

            patch(aNode, bNode, dom, context, isSvg);
            patched++;
            a[i] = null;
          }
        }
      }
    }

    if (aLeft === aLength && patched === 0) {
      unmountChildren(a);
      dom.textContent = '';

      while (bStart < bLeft) {
        node = b[bStart];
        bStart++;
        attachNewNode(dom, createElement(node, isSvg, context), null);
      }
    } else {
      i = aLeft - patched;

      while (i > 0) {
        aNode = a[aStart++];

        if (aNode !== null) {
          unmount(aNode, dom);
          i--;
        }
      }

      if (moved) {
        var seq = lis(sources);
        j = seq.length - 1;

        for (i = bLeft - 1; i >= 0; i--) {
          if (sources[i] === -1) {
            pos = i + bStart;
            node = b[pos];
            nextPos = pos + 1;
            attachNewNode(dom, createElement(node, isSvg, context), nextPos < bLength ? b[nextPos].dom : null);
          } else {
            if (j < 0 || i !== seq[j]) {
              pos = i + bStart;
              node = b[pos];
              nextPos = pos + 1;
              attachNewNode(dom, node.dom, nextPos < bLength ? b[nextPos].dom : null);
            } else {
              j--;
            }
          }
        }
      } else if (patched !== bLeft) {
        for (i = bLeft - 1; i >= 0; i--) {
          if (sources[i] === -1) {
            pos = i + bStart;
            node = b[pos];
            nextPos = pos + 1;
            attachNewNode(dom, createElement(node, isSvg, context), nextPos < bLength ? b[nextPos].dom : null);
          }
        }
      }
    }
  }
}

function attachNewNode(parentDom, newNode, nextNode) {
  if (isNullOrUndef(nextNode)) {
    parentDom.appendChild(newNode);
  } else {
    parentDom.insertBefore(newNode, nextNode);
  }
}
/**
 * Slightly modified Longest Increased Subsequence algorithm, it ignores items that have -1 value, they're representing
 * new items.
 *
 * http://en.wikipedia.org/wiki/Longest_increasing_subsequence
 *
 * @param a Array of numbers.
 * @returns Longest increasing subsequence.
 */


function lis(a) {
  var p = a.slice();
  var result = [];
  result.push(0);
  var u;
  var v;

  for (var i = 0, il = a.length; i < il; ++i) {
    if (a[i] === -1) {
      continue;
    }

    var j = result[result.length - 1];

    if (a[j] < a[i]) {
      p[i] = j;
      result.push(i);
      continue;
    }

    u = 0;
    v = result.length - 1;

    while (u < v) {
      var c = (u + v) / 2 | 0;

      if (a[result[c]] < a[i]) {
        u = c + 1;
      } else {
        v = c;
      }
    }

    if (a[i] < a[result[u]]) {
      if (u > 0) {
        p[i] = result[u - 1];
      }

      result[u] = i;
    }
  }

  u = result.length;
  v = result[u - 1];

  while (u-- > 0) {
    result[u] = v;
    v = p[v];
  }

  return result;
}

function isKeyed(lastChildren, nextChildren) {
  return nextChildren.length > 0 && !isNullOrUndef(nextChildren[0]) && !isNullOrUndef(nextChildren[0].key) && lastChildren.length > 0 && !isNullOrUndef(lastChildren[0]) && !isNullOrUndef(lastChildren[0].key);
}

function isSameVNode(a, b) {
  if (isInvalid(a) || isInvalid(b) || isArray(a) || isArray(b)) {
    return false;
  }

  return a.type === b.type && a.vtype === b.vtype && a.key === b.key;
}

function patchVText(lastVNode, nextVNode) {
  var dom = lastVNode.dom;

  if (dom === null) {
    return;
  }

  var nextText = nextVNode.text;
  nextVNode.dom = dom;

  if (lastVNode.text !== nextText) {
    dom.nodeValue = nextText;
  }

  return dom;
}

var skipProps = {
  children: 1,
  key: 1,
  ref: 1,
  owner: 1
};
var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

function setStyle(domStyle, style, value) {
  if (isNullOrUndef(value) || isNumber(value) && isNaN(value)) {
    domStyle[style] = '';
    return;
  }

  if (style === 'float') {
    domStyle['cssFloat'] = value;
    domStyle['styleFloat'] = value;
    return;
  }

  domStyle[style] = !isNumber(value) || IS_NON_DIMENSIONAL.test(style) ? value : value + 'px';
}

function patchEvent(eventName, lastEvent, nextEvent, domNode) {
  if (lastEvent !== nextEvent) {
    if (isFunction(lastEvent)) {
      detachEvent(domNode, eventName, lastEvent);
    }

    attachEvent(domNode, eventName, nextEvent);
  }
}

function patchStyle(lastAttrValue, nextAttrValue, dom) {
  var domStyle = dom.style;
  var style;
  var value;

  if (isString(nextAttrValue)) {
    domStyle.cssText = nextAttrValue;
    return;
  }

  if (!isNullOrUndef(lastAttrValue) && !isString(lastAttrValue)) {
    for (style in nextAttrValue) {
      value = nextAttrValue[style];

      if (value !== lastAttrValue[style]) {
        setStyle(domStyle, style, value);
      }
    }

    for (style in lastAttrValue) {
      if (isNullOrUndef(nextAttrValue[style])) {
        domStyle[style] = '';
      }
    }
  } else {
    for (style in nextAttrValue) {
      value = nextAttrValue[style];
      setStyle(domStyle, style, value);
    }
  }
}

function patchProp(domNode, prop, lastValue, nextValue, lastVnode, isSvg) {
  // fix the value update for textarea/input
  if (lastValue !== nextValue || prop === 'value') {
    if (prop === 'className') {
      prop = 'class';
    }

    if (skipProps[prop] === 1) {
      return;
    } else if (prop === 'class' && !isSvg) {
      domNode.className = nextValue;
    } else if (prop === 'dangerouslySetInnerHTML') {
      var lastHtml = lastValue && lastValue.__html;
      var nextHtml = nextValue && nextValue.__html;

      if (lastHtml !== nextHtml) {
        if (!isNullOrUndef(nextHtml)) {
          if (isValidElement(lastVnode) && lastVnode.children !== EMPTY_CHILDREN) {
            unmountChildren(lastVnode.children);
            lastVnode.children = [];
          }

          domNode.innerHTML = nextHtml;
        }
      }
    } else if (isAttrAnEvent(prop)) {
      patchEvent(prop, lastValue, nextValue, domNode);
    } else if (prop === 'style') {
      patchStyle(lastValue, nextValue, domNode);
    } else if (prop !== 'list' && prop !== 'type' && !isSvg && prop in domNode) {
      setProperty(domNode, prop, nextValue == null ? '' : nextValue);

      if (nextValue == null || nextValue === false) {
        domNode.removeAttribute(prop);
      }
    } else if (isNullOrUndef(nextValue) || nextValue === false) {
      domNode.removeAttribute(prop);
    } else {
      var namespace = SVGPropertyConfig.DOMAttributeNamespaces[prop];

      if (isSvg && namespace) {
        if (nextValue) {
          domNode.setAttributeNS(namespace, prop, nextValue);
        } else {
          var colonPosition = prop.indexOf(':');
          var localName = colonPosition > -1 ? prop.substr(colonPosition + 1) : prop;
          domNode.removeAttributeNS(namespace, localName);
        }
      } else {
        if (!isFunction(nextValue)) {
          domNode.setAttribute(prop, nextValue);
        } // WARNING: Non-event attributes with function values:
        // https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html#changes-in-detail

      }
    }
  }
}

function setProperty(node, name, value) {
  try {
    node[name] = value;
  } catch (e) {}
}

function patchProps(domNode, nextProps, previousProps, lastVnode, isSvg) {
  for (var propName in previousProps) {
    var value = previousProps[propName];

    if (isNullOrUndef(nextProps[propName]) && !isNullOrUndef(value)) {
      if (isAttrAnEvent(propName)) {
        detachEvent(domNode, propName, value);
      } else if (propName === 'dangerouslySetInnerHTML') {
        domNode.textContent = '';
      } else if (propName === 'className') {
        domNode.removeAttribute('class');
      } else {
        domNode.removeAttribute(propName);
      }
    }
  }

  for (var propName$1 in nextProps) {
    patchProp(domNode, propName$1, previousProps[propName$1], nextProps[propName$1], lastVnode, isSvg);
  }
}

var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

function createElement(vnode, isSvg, parentContext, parentComponent) {
  var domNode;

  if (isValidElement(vnode)) {
    var vtype = vnode.vtype;

    if (vtype & 4
    /* Composite */
    ) {
        domNode = vnode.init(parentContext, parentComponent);
      } else if (vtype & 1
    /* Text */
    ) {
        domNode = doc.createTextNode(vnode.text);
        vnode.dom = domNode;
      } else if (vtype & 2
    /* Node */
    ) {
        domNode = mountVNode$1(vnode, isSvg, parentContext, parentComponent);
      } else if (vtype & 16
    /* Void */
    ) {
        domNode = vnode.dom = doc.createTextNode('');
      } else if (isPortal(vtype, vnode)) {
      vnode.type.appendChild(createElement(vnode.children, isSvg, parentContext, parentComponent));
      domNode = doc.createTextNode('');
    }
  } else if (isString(vnode) || isNumber(vnode)) {
    domNode = doc.createTextNode(vnode);
  } else if (isNullOrUndef(vnode) || isBoolean(vnode)) {
    domNode = doc.createTextNode('');
  } else if (isArray(vnode)) {
    domNode = vnode.map(function (child) {
      return createElement(child, isSvg, parentContext, parentComponent);
    });
  } else {
    throw new Error('Unsupported VNode.');
  }

  return domNode;
}

function mountVNode$1(vnode, isSvg, parentContext, parentComponent) {
  if (vnode.isSvg) {
    isSvg = true;
  } else if (vnode.type === 'svg') {
    isSvg = true;
    /* istanbul ignore next */
  } else if (!isSupportSVG) {
    isSvg = false;
  }

  if (isSvg) {
    vnode.namespace = SVG_NAMESPACE;
    vnode.isSvg = isSvg;
  }

  var domNode = !isSvg ? doc.createElement(vnode.type) : doc.createElementNS(vnode.namespace, vnode.type);
  setProps(domNode, vnode, isSvg);

  if (vnode.type === 'foreignObject') {
    isSvg = false;
  }

  var children = vnode.children;

  if (isArray(children)) {
    for (var i = 0, len = children.length; i < len; i++) {
      mountChild(children[i], domNode, parentContext, isSvg, parentComponent);
    }
  } else {
    mountChild(children, domNode, parentContext, isSvg, parentComponent);
  }

  vnode.dom = domNode;

  if (vnode.ref !== null) {
    Ref.attach(vnode, vnode.ref, domNode);
  }

  return domNode;
}

function mountChild(child, domNode, parentContext, isSvg, parentComponent) {
  child.parentContext = parentContext || EMPTY_OBJ;
  var childNode = createElement(child, isSvg, parentContext, parentComponent);
  mountElement(childNode, domNode);
}

function mountElement(element, parentNode, refChild) {
  if (isArray(element)) {
    for (var i = 0; i < element.length; i++) {
      var el = element[i];
      mountElement(el, parentNode);
    }
  } else {
    refChild != null ? parentNode.insertBefore(element, refChild) : parentNode.appendChild(element);
  }
}

function insertElement(element, parentNode, lastDom) {
  if (isArray(element)) {
    for (var i = 0; i < element.length; i++) {
      var el = element[i];
      insertElement(el, parentNode, lastDom);
    }
  } else {
    parentNode.insertBefore(element, lastDom);
  }
}

function setProps(domNode, vnode, isSvg) {
  var props = vnode.props;

  for (var p in props) {
    patchProp(domNode, p, null, props[p], null, isSvg);
  }
}

function createVText(text) {
  return {
    text: text,
    vtype: 1
    /* Text */
    ,
    dom: null
  };
}

function createVoid() {
  return {
    dom: null,
    vtype: 16
    /* Void */

  };
}

function getHooks(index) {
  if (Current.current === null) {
    throw new Error("invalid hooks call: hooks can only be called in a stateless component.");
  }

  var hooks = Current.current.hooks;

  if (index >= hooks.length) {
    hooks.push({});
  }

  return hooks[index];
}

function useState(initialState) {
  if (isFunction(initialState)) {
    initialState = initialState();
  }

  var hook = getHooks(Current.index++);

  if (!hook.state) {
    hook.component = Current.current;
    hook.state = [initialState, function (action) {
      hook.state[0] = isFunction(action) ? action(hook.state[0]) : action;
      hook.component._disable = false;
      hook.component.setState({});
    }];
  }

  return hook.state;
}

function useReducer(reducer, initialState, initializer) {
  if (isFunction(initialState)) {
    initialState = initialState();
  }

  var hook = getHooks(Current.index++);

  if (!hook.state) {
    hook.component = Current.current;
    hook.state = [isUndefined(initializer) ? initialState : initializer(initialState), function (action) {
      hook.state[0] = reducer(hook.state[0], action);
      hook.component._disable = false;
      hook.component.setState({});
    }];
  }

  return hook.state;
}

function areDepsChanged(prevDeps, deps) {
  if (isNullOrUndef(prevDeps) || isNullOrUndef(deps)) {
    return true;
  }

  return deps.some(function (d, i) {
    return !objectIs(d, prevDeps[i]);
  });
}

function invokeEffects(component, delay) {
  if (delay === void 0) delay = false;
  var effects = delay ? component.effects : component.layoutEffects;
  effects.forEach(function (hook) {
    if (isFunction(hook.cleanup)) {
      hook.cleanup();
    }

    var result = hook.effect();

    if (isFunction(result)) {
      hook.cleanup = result;
    }
  });

  if (delay) {
    component.effects = [];
  } else {
    component.layoutEffects = [];
  }
}

var scheduleEffectComponents = [];

function invokeScheduleEffects(component) {
  if (!component._afterScheduleEffect) {
    component._afterScheduleEffect = true;
    scheduleEffectComponents.push(component);

    if (scheduleEffectComponents.length === 1) {
      nextTick(function () {
        setTimeout(function () {
          scheduleEffectComponents.forEach(function (c) {
            c._afterScheduleEffect = false;
            invokeEffects(c, true);
          });
          scheduleEffectComponents = [];
        }, 0);
      });
    }
  }
}

function useEffectImpl(effect, deps, delay) {
  if (delay === void 0) delay = false;
  var hook = getHooks(Current.index++);

  if (areDepsChanged(hook.deps, deps)) {
    hook.effect = effect;
    hook.deps = deps;

    if (delay) {
      Current.current.effects = Current.current.effects.concat(hook);
      invokeScheduleEffects(Current.current);
    } else {
      Current.current.layoutEffects = Current.current.layoutEffects.concat(hook);
    }
  }
}

function useEffect(effect, deps) {
  useEffectImpl(effect, deps, true);
}

function useLayoutEffect(effect, deps) {
  useEffectImpl(effect, deps);
}

function useRef(initialValue) {
  var hook = getHooks(Current.index++);

  if (!hook.ref) {
    hook.ref = {
      current: initialValue
    };
  }

  return hook.ref;
}

function useMemo(factory, deps) {
  var hook = getHooks(Current.index++);

  if (areDepsChanged(hook.deps, deps)) {
    hook.deps = deps;
    hook.callback = factory;
    hook.value = factory();
  }

  return hook.value;
}

function useCallback(callback, deps) {
  return useMemo(function () {
    return callback;
  }, deps);
}

function useContext(context) {
  var provider = Current.current.context[context._id];

  if (isUndefined(provider)) {
    return context._defaultValue;
  }

  var hook = getHooks(Current.index++); // should update when value changes with shouldComponentUpdate:false Component on top

  if (isUndefined(hook.context)) {
    hook.context = true;
    var c = Current.current;
    provider.on(function () {
      return enqueueRender(c);
    });
  }

  return provider.value;
}

function useImperativeHandle(ref, init, deps) {
  useLayoutEffect(function () {
    if (isFunction(ref)) {
      ref(init());
      return function () {
        return ref(null);
      };
    } else if (!isUndefined(ref)) {
      ref.current = init();
      return function () {
        delete ref.current;
      };
    }
  }, isArray(deps) ? deps.concat([ref]) : undefined);
} // import { extend, isFunction, isNumber, isString } from 'nerv-utils'


var readyComponents = [];

function errorCatcher(fn, component) {
  try {
    return fn();
  } catch (error) {
    errorHandler(component, error);
  }
}

function errorHandler(component, error) {
  // if(!component) { throw error ; return }
  var boundary;

  while (true) {
    var ref = component.constructor;
    var getDerivedStateFromError = ref.getDerivedStateFromError;

    if (isFunction(getDerivedStateFromError) || isFunction(component.componentDidCatch)) {
      boundary = component;
      break;
    } else if (component._parentComponent) {
      component = component._parentComponent;
    } else {
      break;
    }
  }

  if (boundary) {
    var ref$1 = boundary.constructor;
    var getDerivedStateFromError$1 = ref$1.getDerivedStateFromError;
    var _disable = boundary._disable;
    boundary._disable = false;

    if (isFunction(getDerivedStateFromError$1)) {
      component.setState(getDerivedStateFromError$1(error));
    } else if (isFunction(component.componentDidCatch)) {
      boundary.componentDidCatch(error);
    }

    boundary._disable = _disable;
  } else {
    throw error;
  }
}

function ensureVirtualNode(rendered) {
  if (isNumber(rendered) || isString(rendered)) {
    return createVText(rendered);
  } else if (isInvalid(rendered)) {
    return createVoid();
  } else if (isArray(rendered)) {
    rendered = rendered.length === 0 ? createVoid() : rendered.map(ensureVirtualNode);
  }

  return rendered;
}

function mountVNode(vnode, parentContext, parentComponent) {
  return createElement(vnode, false, parentContext, parentComponent);
}

function getContextByContextType(vnode, parentContext) {
  var contextType = vnode.type.contextType;
  var hasContextType = !isUndefined(contextType);
  var provider = hasContextType ? parentContext[contextType._id] : null;
  var context = hasContextType ? !isNullOrUndef(provider) ? provider.value : contextType._defaultValue : parentContext;
  return context;
}

function mountComponent(vnode, parentContext, parentComponent) {
  var ref = vnode.ref;

  if (vnode.type.prototype && vnode.type.prototype.render) {
    var context = getContextByContextType(vnode, parentContext);
    vnode.component = new vnode.type(vnode.props, context);
  } else {
    var c = new Component(vnode.props, parentContext);

    c.render = function () {
      return vnode.type.call(c, c.props, c.context);
    };

    vnode.component = c;
  }

  var component = vnode.component;
  component.vnode = vnode;

  if (isComponent(parentComponent)) {
    component._parentComponent = parentComponent;
  }

  var newState = callGetDerivedStateFromProps(vnode.props, component.state, component);

  if (!isUndefined(newState)) {
    component.state = newState;
  }

  if (!hasNewLifecycle(component) && isFunction(component.componentWillMount)) {
    errorCatcher(function () {
      component.componentWillMount();
    }, component);
    component.state = component.getState();
    component.clearCallBacks();
  }

  component._dirty = false;
  var rendered = renderComponent(component);
  rendered.parentVNode = vnode;
  component._rendered = rendered;

  if (!isNullOrUndef(ref)) {
    Ref.attach(vnode, ref, vnode.dom);
  }

  var dom = vnode.dom = mountVNode(rendered, getChildContext(component, parentContext), component);
  invokeEffects(component);

  if (isFunction(component.componentDidMount)) {
    readyComponents.push(component);
  }

  component._disable = false;
  return dom;
}

function getChildContext(component, context) {
  if (context === void 0) context = EMPTY_OBJ;

  if (isFunction(component.getChildContext)) {
    return extend(clone(context), component.getChildContext());
  }

  return clone(context);
}

function renderComponent(component) {
  Current.current = component;
  Current.index = 0;
  invokeEffects(component, true);
  var rendered;
  errorCatcher(function () {
    rendered = component.render();
  }, component);
  rendered = ensureVirtualNode(rendered);
  Current.current = null;
  return rendered;
}

function flushMount() {
  if (!readyComponents.length) {
    return;
  } // @TODO: perf


  var queue = readyComponents.slice(0);
  readyComponents.length = 0;
  queue.forEach(function (item) {
    if (isFunction(item)) {
      item();
    } else if (item.componentDidMount) {
      errorCatcher(function () {
        item.componentDidMount();
      }, item);
    }
  });
}

function getFragmentHostNode(children) {
  var child = children[0];

  if (isArray(child)) {
    return getFragmentHostNode(child);
  } else if (isComposite(child) && child.dom == null) {
    return getFragmentHostNode(child.component._rendered);
  }

  return child != null ? child.dom : null;
}

function reRenderComponent(prev, current) {
  var component = current.component = prev.component;
  var nextProps = current.props;
  var nextContext = current.context;
  component._disable = true;

  if (!hasNewLifecycle(component) && isFunction(component.componentWillReceiveProps)) {
    errorCatcher(function () {
      component.componentWillReceiveProps(nextProps, nextContext);
    }, component);
  }

  component._disable = false;
  component.prevProps = component.props;
  component.prevState = component.state;
  component.prevContext = component.context;
  component.props = nextProps;
  component.context = nextContext;

  if (!isNullOrUndef(current.ref)) {
    Ref.update(prev, current);
  }

  return updateComponent(component);
}

function callShouldComponentUpdate(props, state, context, component) {
  var shouldUpdate = true;
  errorCatcher(function () {
    shouldUpdate = component.shouldComponentUpdate(props, state, context);
  }, component);
  return shouldUpdate;
}

function updateComponent(component, isForce) {
  if (isForce === void 0) isForce = false;
  var vnode = component.vnode;
  var dom = vnode.dom;
  var props = component.props;
  var state = component.getState();
  var context = component.context;
  var prevProps = component.prevProps || props;
  var prevState = component.prevState || component.state;
  var prevContext = component.prevContext || context;
  var stateFromProps = callGetDerivedStateFromProps(props, state, component);

  if (!isUndefined(stateFromProps)) {
    state = stateFromProps;
  }

  component.props = prevProps;
  component.context = prevContext;
  var skip = false;
  var onSCU = props.onShouldComponentUpdate;

  if (!isForce && (isFunction(component.shouldComponentUpdate) && callShouldComponentUpdate(props, state, context, component) === false || isFunction(onSCU) && onSCU(prevProps, props) === false)) {
    skip = true;
  } else if (!hasNewLifecycle(component) && isFunction(component.componentWillUpdate)) {
    errorCatcher(function () {
      component.componentWillUpdate(props, state, context);
    }, component);
  }

  if (!isUndefined(stateFromProps)) {
    component.state = stateFromProps;
  }

  component.props = props;
  component.state = state;
  component.context = context;
  component._dirty = false;

  if (!skip) {
    var lastRendered = component._rendered;
    var rendered = renderComponent(component);
    rendered.parentVNode = vnode;
    var childContext = getChildContext(component, context);
    var snapshot = callGetSnapshotBeforeUpdate(prevProps, prevState, component);
    var parentDom = lastRendered.dom && lastRendered.dom.parentNode;

    if (isArray(lastRendered)) {
      var hostNode = getFragmentHostNode(lastRendered);

      if (hostNode != null) {
        parentDom = lastRendered.dom = hostNode.parentNode;
      }
    }

    dom = vnode.dom = patch(lastRendered, rendered, parentDom || null, childContext);
    component._rendered = rendered;

    if (isFunction(component.componentDidUpdate)) {
      errorCatcher(function () {
        component.componentDidUpdate(prevProps, prevState, snapshot);
      }, component);
    }

    while (vnode = vnode.parentVNode) {
      if ((vnode.vtype & 4
      /* Composite */
      ) > 0) {
        vnode.dom = dom;
      }
    }
  }

  component.prevProps = component.props;
  component.prevState = component.state;
  component.prevContext = component.context;
  component.clearCallBacks();
  flushMount();
  invokeEffects(component);
  return dom;
}

function unmountComponent(vnode) {
  var component = vnode.component;
  component.hooks.forEach(function (hook) {
    if (isFunction(hook.cleanup)) {
      hook.cleanup();
    }
  });

  if (isFunction(component.componentWillUnmount)) {
    errorCatcher(function () {
      component.componentWillUnmount();
    }, component);
  }

  component._disable = true;
  unmount(component._rendered);

  if (!isNullOrUndef(vnode.ref)) {
    Ref.detach(vnode, vnode.ref, vnode.dom);
  }
}

function callGetDerivedStateFromProps(props, state, inst) {
  var ref = inst.constructor;
  var getDerivedStateFromProps = ref.getDerivedStateFromProps;
  var newState; // @TODO show warning

  errorCatcher(function () {
    if (isFunction(getDerivedStateFromProps)) {
      var partialState = getDerivedStateFromProps.call(null, props, state);

      if (!isUndefined(partialState)) {
        newState = extend(clone(state), partialState);
      }
    }
  }, inst);
  return newState;
}

function callGetSnapshotBeforeUpdate(props, state, inst) {
  var getSnapshotBeforeUpdate = inst.getSnapshotBeforeUpdate;
  var snapshot;
  errorCatcher(function () {
    if (isFunction(getSnapshotBeforeUpdate)) {
      snapshot = getSnapshotBeforeUpdate.call(inst, props, state);
    }
  }, inst);
  return snapshot;
}

function hasNewLifecycle(component) {
  if (isFunction(component.constructor.getDerivedStateFromProps)) {
    return true;
  }

  return false;
}

var items = [];

function enqueueRender(component) {
  // tslint:disable-next-line:no-conditional-assignment
  if (!component._dirty && (component._dirty = true) && items.push(component) === 1) {
    nextTick(rerender);
  }
}

function rerender(isForce) {
  if (isForce === void 0) isForce = false;
  var p;
  var list = items;
  items = []; // tslint:disable-next-line:no-conditional-assignment

  while (p = list.pop()) {
    if (p._dirty) {
      updateComponent(p, isForce);
    }
  }
}

var Component = function Component(props, context) {
  this._dirty = true;
  this._disable = true;
  this._pendingStates = [];
  this._pendingCallbacks = [];
  this._afterScheduleEffect = false;
  this.hooks = [];
  this.effects = EMPTY_CHILDREN;
  this.layoutEffects = EMPTY_CHILDREN;

  if (!this.state) {
    this.state = {};
  }

  this.props = props || {};
  this.context = context || EMPTY_OBJ;
  this.refs = {};
};

Component.prototype.setState = function setState(state, callback) {
  if (state) {
    this._pendingStates.push(state);
  }

  if (isFunction(callback)) {
    this._pendingCallbacks.push(callback);
  }

  if (!this._disable) {
    enqueueRender(this);
  }
};

Component.prototype.getState = function getState() {
  var this$1 = this; // tslint:disable-next-line:no-this-assignment

  var ref = this;
  var _pendingStates = ref._pendingStates;
  var state = ref.state;
  var props = ref.props;

  if (!_pendingStates.length) {
    return state;
  }

  var stateClone = clone(state);

  var queue = _pendingStates.concat();

  this._pendingStates.length = 0;
  queue.forEach(function (nextState) {
    if (isFunction(nextState)) {
      nextState = nextState.call(this$1, state, props);
    }

    extend(stateClone, nextState);
  });
  return stateClone;
};

Component.prototype.clearCallBacks = function clearCallBacks() {
  var this$1 = this; // cached the length of callbacks, or callbacks may increase by calling them in the same loop

  var len = this._pendingCallbacks.length;

  while (this._dirty ? this._pendingCallbacks.length : len) {
    var cb = this$1._pendingCallbacks.shift();

    cb.call(this$1);
    len--;
  }
};

Component.prototype.forceUpdate = function forceUpdate(callback) {
  if (isFunction(callback)) {
    this._pendingCallbacks.push(callback);
  }

  updateComponent(this, true);
}; // tslint:disable-next-line


Component.prototype.render = function render(nextProps, nextState, nextContext) {};

Component.prototype.isReactComponent = EMPTY_OBJ;

var PureComponent = function (Component$$1) {
  function PureComponent() {
    Component$$1.apply(this, arguments);
    this.isPureComponent = true;
  }

  if (Component$$1) PureComponent.__proto__ = Component$$1;
  PureComponent.prototype = Object.create(Component$$1 && Component$$1.prototype);
  PureComponent.prototype.constructor = PureComponent;

  PureComponent.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
  };

  return PureComponent;
}(Component);

var options = {
  afterMount: noop$1,
  afterUpdate: noop$1,
  beforeUpdate: noop$1,
  beforeUnmount: noop$1,
  beforeRender: noop$1,
  beforeMount: noop$1,
  afterCreate: noop$1,
  roots: [],
  debug: false
};

function render(vnode, container, callback) {
  if (!container) {
    throw new Error(container + " should be a DOM Element");
  }

  var lastVnode = container._component;
  var dom;
  options.roots.push(vnode);

  if (lastVnode !== undefined) {
    options.roots = options.roots.filter(function (item) {
      return item !== lastVnode;
    });
    dom = patch(lastVnode, vnode, container, {});
  } else {
    dom = mountVNode(vnode, {});
    mountElement(dom, container);
  }

  if (container) {
    container._component = vnode;
  }

  flushMount();

  if (callback) {
    callback();
  }

  return isComposite(vnode) ? vnode.component : dom;
}

function createVNode(type, props, children, key, namespace, owner, ref) {
  return {
    type: type,
    key: key || null,
    vtype: 2
    /* Node */
    ,
    props: props || EMPTY_OBJ,
    children: children,
    namespace: namespace || null,
    _owner: owner,
    dom: null,
    ref: ref || null
  };
}

function h(type, props, children) {
  var childNodes;

  if (props.children) {
    if (!children) {
      children = props.children;
    }
  }

  if (isArray(children)) {
    childNodes = [];
    addChildren(childNodes, children, type);
  } else if (isString(children) || isNumber(children)) {
    children = createVText(String(children));
  } else if (!isValidElement(children)) {
    children = EMPTY_CHILDREN;
  }

  props.children = childNodes !== undefined ? childNodes : children;
  return createVNode(type, props, props.children, props.key, props.namespace, props.owner, props.ref);
}

function addChildren(childNodes, children, type) {
  if (isString(children) || isNumber(children)) {
    childNodes.push(createVText(String(children)));
  } else if (isValidElement(children)) {
    childNodes.push(children);
  } else if (isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      addChildren(childNodes, children[i], type);
    }
  } else {
    childNodes.push(createVoid());
  }
}

var ComponentWrapper = function ComponentWrapper(type, props) {
  this.vtype = 4
  /* Composite */
  ;
  this.type = type;
  this.name = type.name;

  if (isUndefined(this.name)) {
    var names = type.toString().match(/^function\s*([^\s(]+)/);
    this.name = isArray(names) ? names[0] : 'Component';
  }

  type.displayName = this.name;
  this._owner = props.owner;
  delete props.owner;

  if (this.ref = props.ref) {
    delete props.ref;
  }

  if (type._forwarded) {
    if (!isUndefined(this.ref)) {
      props.ref = this.ref;
    }

    delete this.ref;
  }

  this.props = props;
  this.key = props.key || null;
  this.dom = null;
  options.afterCreate(this);
};

ComponentWrapper.prototype.init = function init(parentContext, parentComponent) {
  options.beforeMount(this);
  var dom = mountComponent(this, parentContext, parentComponent);
  options.afterMount(this);
  return dom;
};

ComponentWrapper.prototype.update = function update(previous, current, parentContext, domNode) {
  this.context = getContextByContextType(this, parentContext);
  options.beforeUpdate(this);
  var dom = reRenderComponent(previous, this);
  options.afterUpdate(this);
  return dom;
};

ComponentWrapper.prototype.destroy = function destroy() {
  options.beforeUnmount(this);
  unmountComponent(this);
}; // import StatelessComponent from './stateless-component'


function transformPropsForRealTag(type, props) {
  var newProps = {};

  for (var propName in props) {
    var propValue = props[propName];

    if (propName === 'defaultValue') {
      newProps.value = props.value || props.defaultValue;
      continue;
    }

    var svgPropName = SVGPropertyConfig.DOMAttributeNames[propName];

    if (svgPropName && svgPropName !== propName) {
      newProps[svgPropName] = propValue;
      continue;
    }

    newProps[propName] = propValue;
  }

  return newProps;
}
/**
 *
 * @param props
 * @param defaultProps
 * defaultProps should respect null but ignore undefined
 * @see: https://facebook.github.io/react/docs/react-component.html#defaultprops
 */


function transformPropsForComponent(props, defaultProps) {
  var newProps = {};

  for (var propName in props) {
    var propValue = props[propName];
    newProps[propName] = propValue;
  }

  if (defaultProps) {
    for (var propName$1 in defaultProps) {
      if (isUndefined(newProps[propName$1])) {
        newProps[propName$1] = defaultProps[propName$1];
      }
    }
  }

  return newProps;
}

function createElement$2(type, properties) {
  var _children = [],
      len = arguments.length - 2;

  while (len-- > 0) {
    _children[len] = arguments[len + 2];
  }

  var children = _children;

  if (_children) {
    if (_children.length === 1) {
      children = _children[0];
    } else if (_children.length === 0) {
      children = undefined;
    }
  }

  var props;

  if (isString(type)) {
    props = transformPropsForRealTag(type, properties);
    props.owner = Current.current;
    return h(type, props, children);
  } else if (isFunction(type)) {
    props = transformPropsForComponent(properties, type.defaultProps);

    if (!props.children || props.children === EMPTY_CHILDREN) {
      props.children = children || children === 0 ? children : EMPTY_CHILDREN;
    }

    props.owner = Current.current;
    return new ComponentWrapper(type, props);
  }

  return type;
}

function cloneElement(vnode, props) {
  var children = [],
      len = arguments.length - 2;

  while (len-- > 0) {
    children[len] = arguments[len + 2];
  }

  if (isVText(vnode)) {
    return createVText(vnode.text);
  }

  if (isString(vnode) || isNumber(vnode)) {
    return createVText(vnode);
  }

  if (isInvalid(vnode) || !isInvalid(vnode) && isPortal(vnode.vtype, vnode) || vnode && vnode.vtype & 16
  /* Void */
  ) {
      return createVoid();
    }

  var properties = clone(extend(clone(vnode.props), props));

  if (vnode.namespace) {
    properties.namespace = vnode.namespace;
  }

  if (vnode.vtype & 4
  /* Composite */
  && !isNullOrUndef(vnode.ref)) {
    properties.ref = vnode.ref;
  }

  var childrenTmp = (arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children || properties.children) || [];

  if (childrenTmp.length) {
    if (childrenTmp.length === 1) {
      childrenTmp = children[0];
    }
  }

  if (isArray(vnode)) {
    return vnode.map(function (item) {
      return cloneElement(item);
    });
  }

  var newVNode = createElement$2(vnode.type, properties);

  if (isArray(childrenTmp)) {
    var _children = childrenTmp.map(function (child) {
      return cloneElement(child, child.props);
    });

    if (_children.length === 0) {
      _children = EMPTY_CHILDREN;
    }

    if (isVNode(newVNode)) {
      newVNode.children = _children;
    }

    newVNode.props.children = _children;
  } else if (childrenTmp) {
    if (isVNode(newVNode)) {
      newVNode.children = cloneElement(childrenTmp);
    }

    newVNode.props.children = cloneElement(childrenTmp, childrenTmp.props);
  }

  return newVNode;
}

var Children = {
  map: function map(children, fn, ctx) {
    if (isNullOrUndef(children)) {
      return children;
    }

    children = Children.toArray(children);

    if (ctx && ctx !== children) {
      fn = fn.bind(ctx);
    }

    return children.map(fn);
  },
  forEach: function forEach(children, fn, ctx) {
    if (isNullOrUndef(children)) {
      return;
    }

    children = Children.toArray(children);

    if (ctx && ctx !== children) {
      fn = fn.bind(ctx);
    }

    for (var i = 0, len = children.length; i < len; i++) {
      var child = isInvalid(children[i]) ? null : children[i];
      fn(child, i, children);
    }
  },
  count: function count(children) {
    children = Children.toArray(children);
    return children.length;
  },
  only: function only(children) {
    children = Children.toArray(children);

    if (children.length !== 1) {
      throw new Error('Children.only() expects only one child.');
    }

    return children[0];
  },
  toArray: function toArray(children) {
    if (isNullOrUndef(children)) {
      return [];
    }

    if (isArray(children)) {
      var result = [];
      flatten(children, result);
      return result;
    }

    return EMPTY_CHILDREN.concat(children);
  }
};

function flatten(arr, result) {
  for (var i = 0, len = arr.length; i < len; i++) {
    var value = arr[i];

    if (isArray(value)) {
      flatten(value, result);
    } else {
      result.push(value);
    }
  }

  return result;
} // tslint:disable:no-conditional-assignment


function hydrate(vnode, container, callback) {
  if (container !== null) {
    // lastChild causes less reflow than firstChild
    var dom = container.lastChild; // there should be only a single entry for the root

    while (dom) {
      var next = dom.previousSibling;
      container.removeChild(dom);
      dom = next;
    }

    return render(vnode, container, callback);
  }
}

function createPortal(children, container) {
  return {
    type: container,
    vtype: 32
    /* Portal */
    ,
    children: children,
    dom: null
  };
} // some library check React version
// see: https://github.com/NervJS/nerv/issues/46


var version = '15.4.2';

function unmountComponentAtNode(dom) {
  var component = dom._component;

  if (isValidElement(component)) {
    unmount(component, dom);
    delete dom._component;
    return true;
  }

  return false;
}

function findDOMNode(component) {
  if (isInvalid(component)) {
    return null;
  }

  return isComponent(component) ? component.vnode.dom : isValidElement(component) ? component.dom : component;
}

function createFactory(type) {
  return createElement$2.bind(null, type);
}

var WrapperComponent = function (Component$$1) {
  function WrapperComponent() {
    Component$$1.apply(this, arguments);
  }

  if (Component$$1) WrapperComponent.__proto__ = Component$$1;
  WrapperComponent.prototype = Object.create(Component$$1 && Component$$1.prototype);
  WrapperComponent.prototype.constructor = WrapperComponent;

  WrapperComponent.prototype.getChildContext = function getChildContext$$1() {
    // tslint:disable-next-line
    return this.props.context;
  };

  WrapperComponent.prototype.render = function render$$1() {
    return this.props.children;
  };

  return WrapperComponent;
}(Component);

function unstable_renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
  // @TODO: should handle props.context?
  var wrapper = createElement$2(WrapperComponent, {
    context: getChildContext(parentComponent, parentComponent.context)
  }, vnode);
  var rendered = render(wrapper, container);

  if (callback) {
    callback.call(rendered);
  }

  return rendered;
}

function isValidElement$1(element) {
  return isValidElement(element) && (element.vtype & (4
  /* Composite */
  | 2
  /* Node */
  )) > 0;
}

var unstable_batchedUpdates = nextTick;
var shim = noop$1;
shim.isRequired = noop$1;

function getShim() {
  return shim;
}

var PropTypes = {
  array: shim,
  bool: shim,
  func: shim,
  number: shim,
  object: shim,
  string: shim,
  any: shim,
  arrayOf: getShim,
  element: shim,
  instanceOf: getShim,
  node: shim,
  objectOf: getShim,
  oneOf: getShim,
  oneOfType: getShim,
  shape: getShim,
  exact: getShim,
  PropTypes: {},
  checkPropTypes: noop$1
};
PropTypes.PropTypes = PropTypes;

function createRef() {
  return {};
}

function forwardRef(cb) {
  var fn = function fn(props) {
    var ref = props.ref;
    delete props.ref;
    return cb(props, ref);
  };

  fn._forwarded = true;
  return fn;
}

function memo(component, propsAreEqual) {
  function shouldComponentUpdate(nextProps) {
    var prevRef = this.props.ref;
    var nextRef = nextProps.ref;

    if (prevRef !== nextRef) {
      Ref.detach(this.vnode, prevRef, this.dom);
      Ref.attach(this.vnode, nextRef, this.dom);
      return true;
    }

    return isFunction(propsAreEqual) ? !propsAreEqual(this.props, nextProps) : !shallowEqual(this.props, nextProps);
  }

  function Memoed(props) {
    this.shouldComponentUpdate = shouldComponentUpdate;
    return createElement$2(component, Object.assign({}, props));
  }

  Memoed._forwarded = true;
  Memoed.isMemo = true;
  return Memoed;
}

var Emiter = function Emiter(value) {
  this.handlers = [];
  this.value = value;
};

Emiter.prototype.on = function on(handler) {
  this.handlers.push(handler);
};

Emiter.prototype.off = function off(handler) {
  this.handlers = this.handlers.filter(function (h) {
    return h !== handler;
  });
};

Emiter.prototype.set = function set(value) {
  var this$1 = this;
  this.value = value;
  this.handlers.forEach(function (h) {
    return h(this$1.value);
  });
};

var uid = 0;

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createContext(defaultValue) {
  var contextProp = '__context_' + uid++ + '__';

  var Provider = function (Component$$1) {
    function Provider() {
      Component$$1.apply(this, arguments);
      this.emiter = new Emiter(this.props.value);
    }

    if (Component$$1) Provider.__proto__ = Component$$1;
    Provider.prototype = Object.create(Component$$1 && Component$$1.prototype);
    Provider.prototype.constructor = Provider;

    Provider.prototype.getChildContext = function getChildContext() {
      return obj = {}, obj[contextProp] = this.emiter, obj;
      var obj;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (!objectIs(this.props.value, nextProps.value)) {
        this.emiter.set(nextProps.value);
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(Component);

  Provider.isContextProvider = true; // tslint:disable-next-line: max-classes-per-file

  var Consumer = function (Component$$1) {
    function Consumer() {
      var this$1 = this;
      Component$$1.apply(this, arguments);
      this.state = {
        value: this.getContextValue()
      };

      this.onUpdate = function (value) {
        if (!objectIs(value, this$1.state.value)) {
          this$1.setState({
            value: this$1.getContextValue()
          });
        }
      };
    }

    if (Component$$1) Consumer.__proto__ = Component$$1;
    Consumer.prototype = Object.create(Component$$1 && Component$$1.prototype);
    Consumer.prototype.constructor = Consumer;

    Consumer.prototype.componentWillMount = function componentWillMount() {
      var emiter = this.context[contextProp];

      if (emiter) {
        emiter.off(this.onUpdate);
      }
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      var emiter = this.context[contextProp];

      if (emiter) {
        emiter.on(this.onUpdate);
      }
    };

    Consumer.prototype.getContextValue = function getContextValue() {
      var emiter = this.context[contextProp];
      return isUndefined(emiter) ? defaultValue : emiter.value;
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(Component);

  Consumer.isContextConsumer = true;
  return {
    Provider: Provider,
    Consumer: Consumer,
    _id: contextProp,
    _defaultValue: defaultValue
  };
}

function Fragment(props) {
  return props.children;
} // tslint:disable-next-line: max-line-length


var index = {
  Children: Children,
  Component: Component,
  PureComponent: PureComponent,
  createElement: createElement$2,
  cloneElement: cloneElement,
  render: render,
  nextTick: nextTick,
  options: options,
  findDOMNode: findDOMNode,
  isValidElement: isValidElement$1,
  unmountComponentAtNode: unmountComponentAtNode,
  createPortal: createPortal,
  unstable_renderSubtreeIntoContainer: unstable_renderSubtreeIntoContainer,
  hydrate: hydrate,
  createFactory: createFactory,
  unstable_batchedUpdates: unstable_batchedUpdates,
  version: version,
  PropTypes: PropTypes,
  createRef: createRef,
  forwardRef: forwardRef,
  memo: memo,
  createContext: createContext,
  renderComponent: renderComponent,
  getHooks: getHooks,
  Current: Current,
  useEffect: useEffect,
  useLayoutEffect: useLayoutEffect,
  useReducer: useReducer,
  useState: useState,
  useRef: useRef,
  useCallback: useCallback,
  useMemo: useMemo,
  useImperativeHandle: useImperativeHandle,
  useContext: useContext,
  Fragment: Fragment
};

/* unused harmony default export */ var _unused_webpack_default_export = (index);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["requestAnimationFrame"]))

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var printWarning = function printWarning() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + _typeof(error) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes.resetWarningCache = function () {
  if (true) {
    loggedTypeFailures = {};
  }
};

module.exports = checkPropTypes;

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning = function printWarning() {};

if (true) {
  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */


  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */

  /*eslint-disable no-self-compare*/

  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */


  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }

      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);

        if (type === 'symbol') {
          return String(value);
        }

        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (!checker) {
          continue;
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      } // We need to check all keys in case some are required but missing from
      // props.


      var allKeys = assign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (_typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    } // falsy value can't be a Symbol


    if (!propValue) {
      return false;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


  function getPropType(propValue) {
    var propType = _typeof(propValue);

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  } // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.


  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  } // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"


  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"); // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod


  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}

/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

if (true) {
  (function () {
    'use strict'; // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }

    function typeOf(object) {
      if (_typeof(object) === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode


    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }

    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }

    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }

    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }

    function isElement(object) {
      return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }

    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }

    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }

    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }

    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }

    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }

    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }

    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
  })();
}

/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}

/***/ }),

/***/ "./node_modules/taro-echarts/components/Chart/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/taro-echarts/components/Chart/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chart; });
/* harmony import */ var _Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/taro-echarts/node_modules/@tarojs/taro/dist/index.esm.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_isEqual_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/isEqual.js */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! nervjs */ "./node_modules/nervjs/dist/index.esm.js");
/* harmony import */ var _ec_canvas_echarts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ec-canvas/echarts */ "./node_modules/taro-echarts/components/ec-canvas/echarts.js");
/* harmony import */ var _ec_canvas_echarts__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ec_canvas_echarts__WEBPACK_IMPORTED_MODULE_11__);












var Taro_ = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"];

if (false) {}

var commonFunc = function commonFunc(_this, chart) {
  var _this$props = _this.props,
      option = _this$props.option,
      loading = _this$props.loading,
      loadingConf = _this$props.loadingConf;

  _this.beforeSetOption();

  _this.chartInstance = chart;

  if (loading) {
    _this.chartInstance.showLoading('default', loadingConf);
  } else {
    _this.chartInstance.setOption(option);
  }
};

var initChart = function (type) {
  switch (type) {
    case 'h5':
      return function (_this) {
        var chart = _ec_canvas_echarts__WEBPACK_IMPORTED_MODULE_11__["init"](_this.chartRef.vnode.dom);
        commonFunc(_this, chart);
      };

    case 'weapp':
      return function (_this) {
        _this.chartRef.init(function (canvas, width, height) {
          var chart = _ec_canvas_echarts__WEBPACK_IMPORTED_MODULE_11__["init"](canvas, null, {
            width: width,
            height: height
          });
          canvas.setChart(chart);
          commonFunc(_this, chart);
          return chart;
        });
      };
  }
}("swan");

var Chart = /*#__PURE__*/function (_Taro_$Component) {
  Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Chart, _Taro_$Component);

  var _super = Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Chart);

  function Chart() {
    var _this2;

    Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Chart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super.call.apply(_super, [this].concat(args));

    Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this2), "config", {
      component: true,
      usingComponents: {
        'ec-canvas': '../ec-canvas/ec-canvas'
      }
    });

    Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this2), "refreshChart", function (newOption) {
      var _this2$props = _this2.props,
          option = _this2$props.option,
          loading = _this2$props.loading,
          loadingConf = _this2$props.loadingConf;

      if (_this2.chartInstance) {
        if (loading) {
          _this2.chartInstance.showLoading('default', loadingConf);
        } else {
          _this2.chartInstance.hideLoading();

          _this2.chartInstance.setOption(newOption || option, true);
        }
      }
    });

    Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this2), "beforeSetOption", function () {
      var onBeforeSetOption = _this2.props.onBeforeSetOption;
      onBeforeSetOption && onBeforeSetOption(_ec_canvas_echarts__WEBPACK_IMPORTED_MODULE_11__);
    });

    Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this2), "setChartRef", function (node) {
      return _this2.chartRef = node;
    });

    Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this2), "getImagePath", function () {
      var _assertThisInitialize = Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this2),
          chartRef = _assertThisInitialize.chartRef;

      if (true) throw '该方法只在微信小程序上支持';

      if (!chartRef || !chartRef.canvasToTempFilePath) {
        throw 'getImagePath error';
      }

      return new Promise(function (resolve, reject) {
        chartRef.canvasToTempFilePath({
          success: function success(_ref) {
            var tempFilePath = _ref.tempFilePath;
            return resolve(tempFilePath);
          },
          fail: function fail() {
            return reject('getImagePath fail');
          }
        });
      });
    });

    return _this2;
  }

  Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Chart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      initChart(this);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var newOption = nextProps.option;

      if (!lodash_isEqual_js__WEBPACK_IMPORTED_MODULE_9___default()(nextProps, this.props)) {
        this.refreshChart(newOption);
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return !lodash_isEqual_js__WEBPACK_IMPORTED_MODULE_9___default()(this.props, nextProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          chartId = _this$props2.chartId,
          width = _this$props2.width,
          height = _this$props2.height,
          customStyle = _this$props2.customStyle;
      var chartContainerStyle = "".concat(customStyle, "width:").concat(width, ";height:").concat(height, ";");
      return /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "b"], {
        style: chartContainerStyle
      }, {
        'h5': /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "b"], {
          ref: this.setChartRef,
          style: "width:".concat(width, ";height:").concat(height, ";")
        }),
        'weapp': /*#__PURE__*/React.createElement("ec-canvas", {
          ref: this.setChartRef,
          ec: {
            lazyLoad: false
          }
        })
      }["swan"]);
    }
  }]);

  return Chart;
}(Taro_.Component);


Chart.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  height: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  loadingConf: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  option: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  onBeforeSetOption: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
};
Chart.defaultProps = {
  width: '100%',
  height: '200px',
  customStyle: '',
  loading: null,
  loadingConf: null,
  onBeforeSetOption: null
};

/***/ }),

/***/ "./node_modules/taro-echarts/components/ec-canvas/echarts.js":
/*!*******************************************************************!*\
  !*** ./node_modules/taro-echarts/components/ec-canvas/echarts.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(window, document, navigator) {
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


!function(t,e){ true?e(exports):undefined}(this,function(t){"use strict";function e(t,e){"createCanvas"===t&&(nw=null),ew[t]=e}function i(t){if(null==t||"object"!=typeof t)return t;var e=t,n=Y_.call(t);if("[object Array]"===n){if(!O(t)){e=[];for(var o=0,a=t.length;o<a;o++)e[o]=i(t[o])}}else if(j_[n]){if(!O(t)){var r=t.constructor;if(t.constructor.from)e=r.from(t);else{e=new r(t.length);for(var o=0,a=t.length;o<a;o++)e[o]=i(t[o])}}}else if(!X_[n]&&!O(t)&&!M(t)){e={};for(var s in t)t.hasOwnProperty(s)&&(e[s]=i(t[s]))}return e}function n(t,e,o){if(!w(e)||!w(t))return o?i(e):t;for(var a in e)if(e.hasOwnProperty(a)){var r=t[a],s=e[a];!w(s)||!w(r)||y(s)||y(r)||M(s)||M(r)||b(s)||b(r)||O(s)||O(r)?!o&&a in t||(t[a]=i(e[a],!0)):n(r,s,o)}return t}function o(t,e){for(var i=t[0],o=1,a=t.length;o<a;o++)i=n(i,t[o],e);return i}function a(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}function r(t,e,i){for(var n in e)e.hasOwnProperty(n)&&(i?null!=e[n]:null==t[n])&&(t[n]=e[n]);return t}function s(){return nw||(nw=iw().getContext("2d")),nw}function l(t,e){if(t){if(t.indexOf)return t.indexOf(e);for(var i=0,n=t.length;i<n;i++)if(t[i]===e)return i}return-1}function u(t,e){function i(){}var n=t.prototype;i.prototype=e.prototype,t.prototype=new i;for(var o in n)t.prototype[o]=n[o];t.prototype.constructor=t,t.superClass=e}function h(t,e,i){r(t="prototype"in t?t.prototype:t,e="prototype"in e?e.prototype:e,i)}function c(t){if(t)return"string"!=typeof t&&"number"==typeof t.length}function d(t,e,i){if(t&&e)if(t.forEach&&t.forEach===K_)t.forEach(e,i);else if(t.length===+t.length)for(var n=0,o=t.length;n<o;n++)e.call(i,t[n],n,t);else for(var a in t)t.hasOwnProperty(a)&&e.call(i,t[a],a,t)}function f(t,e,i){if(t&&e){if(t.map&&t.map===Q_)return t.map(e,i);for(var n=[],o=0,a=t.length;o<a;o++)n.push(e.call(i,t[o],o,t));return n}}function p(t,e,i,n){if(t&&e){if(t.reduce&&t.reduce===tw)return t.reduce(e,i,n);for(var o=0,a=t.length;o<a;o++)i=e.call(n,i,t[o],o,t);return i}}function g(t,e,i){if(t&&e){if(t.filter&&t.filter===$_)return t.filter(e,i);for(var n=[],o=0,a=t.length;o<a;o++)e.call(i,t[o],o,t)&&n.push(t[o]);return n}}function m(t,e){var i=J_.call(arguments,2);return function(){return t.apply(e,i.concat(J_.call(arguments)))}}function v(t){var e=J_.call(arguments,1);return function(){return t.apply(this,e.concat(J_.call(arguments)))}}function y(t){return"[object Array]"===Y_.call(t)}function x(t){return"function"==typeof t}function _(t){return"[object String]"===Y_.call(t)}function w(t){var e=typeof t;return"function"===e||!!t&&"object"===e}function b(t){return!!X_[Y_.call(t)]}function S(t){return!!j_[Y_.call(t)]}function M(t){return"object"==typeof t&&"number"==typeof t.nodeType&&"object"==typeof t.ownerDocument}function I(t){return t!=t}function T(t){for(var e=0,i=arguments.length;e<i;e++)if(null!=arguments[e])return arguments[e]}function A(t,e){return null!=t?t:e}function D(t,e,i){return null!=t?t:null!=e?e:i}function C(){return Function.call.apply(J_,arguments)}function L(t){if("number"==typeof t)return[t,t,t,t];var e=t.length;return 2===e?[t[0],t[1],t[0],t[1]]:3===e?[t[0],t[1],t[2],t[1]]:t}function k(t,e){if(!t)throw new Error(e)}function P(t){return null==t?null:"function"==typeof t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}function N(t){t[ow]=!0}function O(t){return t[ow]}function E(t){function e(t,e){i?n.set(t,e):n.set(e,t)}var i=y(t);this.data={};var n=this;t instanceof E?t.each(e):t&&d(t,e)}function R(t){return new E(t)}function z(t,e){for(var i=new t.constructor(t.length+e.length),n=0;n<t.length;n++)i[n]=t[n];var o=t.length;for(n=0;n<e.length;n++)i[n+o]=e[n];return i}function B(){}function V(t,e){var i=new rw(2);return null==t&&(t=0),null==e&&(e=0),i[0]=t,i[1]=e,i}function G(t,e){return t[0]=e[0],t[1]=e[1],t}function F(t){var e=new rw(2);return e[0]=t[0],e[1]=t[1],e}function W(t,e,i){return t[0]=e,t[1]=i,t}function H(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t}function Z(t,e,i,n){return t[0]=e[0]+i[0]*n,t[1]=e[1]+i[1]*n,t}function U(t,e,i){return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t}function X(t){return Math.sqrt(j(t))}function j(t){return t[0]*t[0]+t[1]*t[1]}function Y(t,e,i){return t[0]=e[0]*i,t[1]=e[1]*i,t}function q(t,e){var i=X(e);return 0===i?(t[0]=0,t[1]=0):(t[0]=e[0]/i,t[1]=e[1]/i),t}function K(t,e){return Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]))}function $(t,e){return(t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])}function J(t,e,i,n){return t[0]=e[0]+n*(i[0]-e[0]),t[1]=e[1]+n*(i[1]-e[1]),t}function Q(t,e,i){var n=e[0],o=e[1];return t[0]=i[0]*n+i[2]*o+i[4],t[1]=i[1]*n+i[3]*o+i[5],t}function tt(t,e,i){return t[0]=Math.min(e[0],i[0]),t[1]=Math.min(e[1],i[1]),t}function et(t,e,i){return t[0]=Math.max(e[0],i[0]),t[1]=Math.max(e[1],i[1]),t}function it(){this.on("mousedown",this._dragStart,this),this.on("mousemove",this._drag,this),this.on("mouseup",this._dragEnd,this),this.on("globalout",this._dragEnd,this)}function nt(t,e){return{target:t,topTarget:e&&e.topTarget}}function ot(t,e){var i=t._$eventProcessor;return null!=e&&i&&i.normalizeQuery&&(e=i.normalizeQuery(e)),e}function at(t,e,i,n,o,a){var r=t._$handlers;if("function"==typeof i&&(o=n,n=i,i=null),!n||!e)return t;i=ot(t,i),r[e]||(r[e]=[]);for(var s=0;s<r[e].length;s++)if(r[e][s].h===n)return t;var l={h:n,one:a,query:i,ctx:o||t,callAtLast:n.zrEventfulCallAtLast},u=r[e].length-1,h=r[e][u];return h&&h.callAtLast?r[e].splice(u,0,l):r[e].push(l),t}function rt(t){return t.getBoundingClientRect?t.getBoundingClientRect():{left:0,top:0}}function st(t,e,i,n){return i=i||{},n||!U_.canvasSupported?lt(t,e,i):U_.browser.firefox&&null!=e.layerX&&e.layerX!==e.offsetX?(i.zrX=e.layerX,i.zrY=e.layerY):null!=e.offsetX?(i.zrX=e.offsetX,i.zrY=e.offsetY):lt(t,e,i),i}function lt(t,e,i){var n=rt(t);i.zrX=e.clientX-n.left,i.zrY=e.clientY-n.top}function ut(t,e,i){if(null!=(e=e||window.event).zrX)return e;var n=e.type;if(n&&n.indexOf("touch")>=0){var o="touchend"!==n?e.targetTouches[0]:e.changedTouches[0];o&&st(t,o,e,i)}else st(t,e,e,i),e.zrDelta=e.wheelDelta?e.wheelDelta/120:-(e.detail||0)/3;var a=e.button;return null==e.which&&void 0!==a&&gw.test(e.type)&&(e.which=1&a?1:2&a?3:4&a?2:0),e}function ht(t,e,i){pw?t.addEventListener(e,i):t.attachEvent("on"+e,i)}function ct(t,e,i){pw?t.removeEventListener(e,i):t.detachEvent("on"+e,i)}function dt(t){return 2===t.which||3===t.which}function ft(t){var e=t[1][0]-t[0][0],i=t[1][1]-t[0][1];return Math.sqrt(e*e+i*i)}function pt(t){return[(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2]}function gt(t,e,i){return{type:t,event:i,target:e.target,topTarget:e.topTarget,cancelBubble:!1,offsetX:i.zrX,offsetY:i.zrY,gestureEvent:i.gestureEvent,pinchX:i.pinchX,pinchY:i.pinchY,pinchScale:i.pinchScale,wheelDelta:i.zrDelta,zrByTouch:i.zrByTouch,which:i.which,stop:mt}}function mt(t){mw(this.event)}function vt(){}function yt(t,e,i){if(t[t.rectHover?"rectContain":"contain"](e,i)){for(var n,o=t;o;){if(o.clipPath&&!o.clipPath.contain(e,i))return!1;o.silent&&(n=!0),o=o.parent}return!n||xw}return!1}function xt(){var t=new bw(6);return _t(t),t}function _t(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function wt(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function bt(t,e,i){var n=e[0]*i[0]+e[2]*i[1],o=e[1]*i[0]+e[3]*i[1],a=e[0]*i[2]+e[2]*i[3],r=e[1]*i[2]+e[3]*i[3],s=e[0]*i[4]+e[2]*i[5]+e[4],l=e[1]*i[4]+e[3]*i[5]+e[5];return t[0]=n,t[1]=o,t[2]=a,t[3]=r,t[4]=s,t[5]=l,t}function St(t,e,i){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4]+i[0],t[5]=e[5]+i[1],t}function Mt(t,e,i){var n=e[0],o=e[2],a=e[4],r=e[1],s=e[3],l=e[5],u=Math.sin(i),h=Math.cos(i);return t[0]=n*h+r*u,t[1]=-n*u+r*h,t[2]=o*h+s*u,t[3]=-o*u+h*s,t[4]=h*a+u*l,t[5]=h*l-u*a,t}function It(t,e,i){var n=i[0],o=i[1];return t[0]=e[0]*n,t[1]=e[1]*o,t[2]=e[2]*n,t[3]=e[3]*o,t[4]=e[4]*n,t[5]=e[5]*o,t}function Tt(t,e){var i=e[0],n=e[2],o=e[4],a=e[1],r=e[3],s=e[5],l=i*r-a*n;return l?(l=1/l,t[0]=r*l,t[1]=-a*l,t[2]=-n*l,t[3]=i*l,t[4]=(n*s-r*o)*l,t[5]=(a*o-i*s)*l,t):null}function At(t){var e=xt();return wt(e,t),e}function Dt(t){return t>Iw||t<-Iw}function Ct(t){this._target=t.target,this._life=t.life||1e3,this._delay=t.delay||0,this._initialized=!1,this.loop=null!=t.loop&&t.loop,this.gap=t.gap||0,this.easing=t.easing||"Linear",this.onframe=t.onframe,this.ondestroy=t.ondestroy,this.onrestart=t.onrestart,this._pausedTime=0,this._paused=!1}function Lt(t){return(t=Math.round(t))<0?0:t>255?255:t}function kt(t){return(t=Math.round(t))<0?0:t>360?360:t}function Pt(t){return t<0?0:t>1?1:t}function Nt(t){return Lt(t.length&&"%"===t.charAt(t.length-1)?parseFloat(t)/100*255:parseInt(t,10))}function Ot(t){return Pt(t.length&&"%"===t.charAt(t.length-1)?parseFloat(t)/100:parseFloat(t))}function Et(t,e,i){return i<0?i+=1:i>1&&(i-=1),6*i<1?t+(e-t)*i*6:2*i<1?e:3*i<2?t+(e-t)*(2/3-i)*6:t}function Rt(t,e,i){return t+(e-t)*i}function zt(t,e,i,n,o){return t[0]=e,t[1]=i,t[2]=n,t[3]=o,t}function Bt(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function Vt(t,e){Vw&&Bt(Vw,e),Vw=Bw.put(t,Vw||e.slice())}function Gt(t,e){if(t){e=e||[];var i=Bw.get(t);if(i)return Bt(e,i);var n=(t+="").replace(/ /g,"").toLowerCase();if(n in zw)return Bt(e,zw[n]),Vt(t,e),e;if("#"!==n.charAt(0)){var o=n.indexOf("("),a=n.indexOf(")");if(-1!==o&&a+1===n.length){var r=n.substr(0,o),s=n.substr(o+1,a-(o+1)).split(","),l=1;switch(r){case"rgba":if(4!==s.length)return void zt(e,0,0,0,1);l=Ot(s.pop());case"rgb":return 3!==s.length?void zt(e,0,0,0,1):(zt(e,Nt(s[0]),Nt(s[1]),Nt(s[2]),l),Vt(t,e),e);case"hsla":return 4!==s.length?void zt(e,0,0,0,1):(s[3]=Ot(s[3]),Ft(s,e),Vt(t,e),e);case"hsl":return 3!==s.length?void zt(e,0,0,0,1):(Ft(s,e),Vt(t,e),e);default:return}}zt(e,0,0,0,1)}else{if(4===n.length)return(u=parseInt(n.substr(1),16))>=0&&u<=4095?(zt(e,(3840&u)>>4|(3840&u)>>8,240&u|(240&u)>>4,15&u|(15&u)<<4,1),Vt(t,e),e):void zt(e,0,0,0,1);if(7===n.length){var u=parseInt(n.substr(1),16);return u>=0&&u<=16777215?(zt(e,(16711680&u)>>16,(65280&u)>>8,255&u,1),Vt(t,e),e):void zt(e,0,0,0,1)}}}}function Ft(t,e){var i=(parseFloat(t[0])%360+360)%360/360,n=Ot(t[1]),o=Ot(t[2]),a=o<=.5?o*(n+1):o+n-o*n,r=2*o-a;return e=e||[],zt(e,Lt(255*Et(r,a,i+1/3)),Lt(255*Et(r,a,i)),Lt(255*Et(r,a,i-1/3)),1),4===t.length&&(e[3]=t[3]),e}function Wt(t){if(t){var e,i,n=t[0]/255,o=t[1]/255,a=t[2]/255,r=Math.min(n,o,a),s=Math.max(n,o,a),l=s-r,u=(s+r)/2;if(0===l)e=0,i=0;else{i=u<.5?l/(s+r):l/(2-s-r);var h=((s-n)/6+l/2)/l,c=((s-o)/6+l/2)/l,d=((s-a)/6+l/2)/l;n===s?e=d-c:o===s?e=1/3+h-d:a===s&&(e=2/3+c-h),e<0&&(e+=1),e>1&&(e-=1)}var f=[360*e,i,u];return null!=t[3]&&f.push(t[3]),f}}function Ht(t,e){var i=Gt(t);if(i){for(var n=0;n<3;n++)i[n]=e<0?i[n]*(1-e)|0:(255-i[n])*e+i[n]|0,i[n]>255?i[n]=255:t[n]<0&&(i[n]=0);return qt(i,4===i.length?"rgba":"rgb")}}function Zt(t){var e=Gt(t);if(e)return((1<<24)+(e[0]<<16)+(e[1]<<8)+ +e[2]).toString(16).slice(1)}function Ut(t,e,i){if(e&&e.length&&t>=0&&t<=1){i=i||[];var n=t*(e.length-1),o=Math.floor(n),a=Math.ceil(n),r=e[o],s=e[a],l=n-o;return i[0]=Lt(Rt(r[0],s[0],l)),i[1]=Lt(Rt(r[1],s[1],l)),i[2]=Lt(Rt(r[2],s[2],l)),i[3]=Pt(Rt(r[3],s[3],l)),i}}function Xt(t,e,i){if(e&&e.length&&t>=0&&t<=1){var n=t*(e.length-1),o=Math.floor(n),a=Math.ceil(n),r=Gt(e[o]),s=Gt(e[a]),l=n-o,u=qt([Lt(Rt(r[0],s[0],l)),Lt(Rt(r[1],s[1],l)),Lt(Rt(r[2],s[2],l)),Pt(Rt(r[3],s[3],l))],"rgba");return i?{color:u,leftIndex:o,rightIndex:a,value:n}:u}}function jt(t,e,i,n){if(t=Gt(t))return t=Wt(t),null!=e&&(t[0]=kt(e)),null!=i&&(t[1]=Ot(i)),null!=n&&(t[2]=Ot(n)),qt(Ft(t),"rgba")}function Yt(t,e){if((t=Gt(t))&&null!=e)return t[3]=Pt(e),qt(t,"rgba")}function qt(t,e){if(t&&t.length){var i=t[0]+","+t[1]+","+t[2];return"rgba"!==e&&"hsva"!==e&&"hsla"!==e||(i+=","+t[3]),e+"("+i+")"}}function Kt(t,e){return t[e]}function $t(t,e,i){t[e]=i}function Jt(t,e,i){return(e-t)*i+t}function Qt(t,e,i){return i>.5?e:t}function te(t,e,i,n,o){var a=t.length;if(1===o)for(s=0;s<a;s++)n[s]=Jt(t[s],e[s],i);else for(var r=a&&t[0].length,s=0;s<a;s++)for(var l=0;l<r;l++)n[s][l]=Jt(t[s][l],e[s][l],i)}function ee(t,e,i){var n=t.length,o=e.length;if(n!==o)if(n>o)t.length=o;else for(r=n;r<o;r++)t.push(1===i?e[r]:Hw.call(e[r]));for(var a=t[0]&&t[0].length,r=0;r<t.length;r++)if(1===i)isNaN(t[r])&&(t[r]=e[r]);else for(var s=0;s<a;s++)isNaN(t[r][s])&&(t[r][s]=e[r][s])}function ie(t,e,i){if(t===e)return!0;var n=t.length;if(n!==e.length)return!1;if(1===i){for(a=0;a<n;a++)if(t[a]!==e[a])return!1}else for(var o=t[0].length,a=0;a<n;a++)for(var r=0;r<o;r++)if(t[a][r]!==e[a][r])return!1;return!0}function ne(t,e,i,n,o,a,r,s,l){var u=t.length;if(1===l)for(c=0;c<u;c++)s[c]=oe(t[c],e[c],i[c],n[c],o,a,r);else for(var h=t[0].length,c=0;c<u;c++)for(var d=0;d<h;d++)s[c][d]=oe(t[c][d],e[c][d],i[c][d],n[c][d],o,a,r)}function oe(t,e,i,n,o,a,r){var s=.5*(i-t),l=.5*(n-e);return(2*(e-i)+s+l)*r+(-3*(e-i)-2*s-l)*a+s*o+e}function ae(t){if(c(t)){var e=t.length;if(c(t[0])){for(var i=[],n=0;n<e;n++)i.push(Hw.call(t[n]));return i}return Hw.call(t)}return t}function re(t){return t[0]=Math.floor(t[0]),t[1]=Math.floor(t[1]),t[2]=Math.floor(t[2]),"rgba("+t.join(",")+")"}function se(t){var e=t[t.length-1].value;return c(e&&e[0])?2:1}function le(t,e,i,n,o,a){var r=t._getter,s=t._setter,l="spline"===e,u=n.length;if(u){var h,d=c(n[0].value),f=!1,p=!1,g=d?se(n):0;n.sort(function(t,e){return t.time-e.time}),h=n[u-1].time;for(var m=[],v=[],y=n[0].value,x=!0,_=0;_<u;_++){m.push(n[_].time/h);var w=n[_].value;if(d&&ie(w,y,g)||!d&&w===y||(x=!1),y=w,"string"==typeof w){var b=Gt(w);b?(w=b,f=!0):p=!0}v.push(w)}if(a||!x){for(var S=v[u-1],_=0;_<u-1;_++)d?ee(v[_],S,g):!isNaN(v[_])||isNaN(S)||p||f||(v[_]=S);d&&ee(r(t._target,o),S,g);var M,I,T,A,D,C,L=0,k=0;if(f)var P=[0,0,0,0];var N=new Ct({target:t._target,life:h,loop:t._loop,delay:t._delay,onframe:function(t,e){var i;if(e<0)i=0;else if(e<k){for(i=M=Math.min(L+1,u-1);i>=0&&!(m[i]<=e);i--);i=Math.min(i,u-2)}else{for(i=L;i<u&&!(m[i]>e);i++);i=Math.min(i-1,u-2)}L=i,k=e;var n=m[i+1]-m[i];if(0!==n)if(I=(e-m[i])/n,l)if(A=v[i],T=v[0===i?i:i-1],D=v[i>u-2?u-1:i+1],C=v[i>u-3?u-1:i+2],d)ne(T,A,D,C,I,I*I,I*I*I,r(t,o),g);else{if(f)a=ne(T,A,D,C,I,I*I,I*I*I,P,1),a=re(P);else{if(p)return Qt(A,D,I);a=oe(T,A,D,C,I,I*I,I*I*I)}s(t,o,a)}else if(d)te(v[i],v[i+1],I,r(t,o),g);else{var a;if(f)te(v[i],v[i+1],I,P,1),a=re(P);else{if(p)return Qt(v[i],v[i+1],I);a=Jt(v[i],v[i+1],I)}s(t,o,a)}},ondestroy:i});return e&&"spline"!==e&&(N.easing=e),N}}}function ue(t,e,i,n,o,a,r,s){_(n)?(a=o,o=n,n=0):x(o)?(a=o,o="linear",n=0):x(n)?(a=n,n=0):x(i)?(a=i,i=500):i||(i=500),t.stopAnimation(),he(t,"",t,e,i,n,s);var l=t.animators.slice(),u=l.length;u||a&&a();for(var h=0;h<l.length;h++)l[h].done(function(){--u||a&&a()}).start(o,r)}function he(t,e,i,n,o,a,r){var s={},l=0;for(var u in n)n.hasOwnProperty(u)&&(null!=i[u]?w(n[u])&&!c(n[u])?he(t,e?e+"."+u:u,i[u],n[u],o,a,r):(r?(s[u]=i[u],ce(t,e,u,n[u])):s[u]=n[u],l++):null==n[u]||r||ce(t,e,u,n[u]));l>0&&t.animate(e,!1).when(null==o?500:o,s).delay(a||0)}function ce(t,e,i,n){if(e){var o={};o[e]={},o[e][i]=n,t.attr(o)}else t.attr(i,n)}function de(t,e,i,n){i<0&&(t+=i,i=-i),n<0&&(e+=n,n=-n),this.x=t,this.y=e,this.width=i,this.height=n}function fe(t){for(var e=0;t>=eb;)e|=1&t,t>>=1;return t+e}function pe(t,e,i,n){var o=e+1;if(o===i)return 1;if(n(t[o++],t[e])<0){for(;o<i&&n(t[o],t[o-1])<0;)o++;ge(t,e,o)}else for(;o<i&&n(t[o],t[o-1])>=0;)o++;return o-e}function ge(t,e,i){for(i--;e<i;){var n=t[e];t[e++]=t[i],t[i--]=n}}function me(t,e,i,n,o){for(n===e&&n++;n<i;n++){for(var a,r=t[n],s=e,l=n;s<l;)o(r,t[a=s+l>>>1])<0?l=a:s=a+1;var u=n-s;switch(u){case 3:t[s+3]=t[s+2];case 2:t[s+2]=t[s+1];case 1:t[s+1]=t[s];break;default:for(;u>0;)t[s+u]=t[s+u-1],u--}t[s]=r}}function ve(t,e,i,n,o,a){var r=0,s=0,l=1;if(a(t,e[i+o])>0){for(s=n-o;l<s&&a(t,e[i+o+l])>0;)r=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s),r+=o,l+=o}else{for(s=o+1;l<s&&a(t,e[i+o-l])<=0;)r=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s);var u=r;r=o-l,l=o-u}for(r++;r<l;){var h=r+(l-r>>>1);a(t,e[i+h])>0?r=h+1:l=h}return l}function ye(t,e,i,n,o,a){var r=0,s=0,l=1;if(a(t,e[i+o])<0){for(s=o+1;l<s&&a(t,e[i+o-l])<0;)r=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s);var u=r;r=o-l,l=o-u}else{for(s=n-o;l<s&&a(t,e[i+o+l])>=0;)r=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s),r+=o,l+=o}for(r++;r<l;){var h=r+(l-r>>>1);a(t,e[i+h])<0?l=h:r=h+1}return l}function xe(t,e){function i(i){var s=a[i],u=r[i],h=a[i+1],c=r[i+1];r[i]=u+c,i===l-3&&(a[i+1]=a[i+2],r[i+1]=r[i+2]),l--;var d=ye(t[h],t,s,u,0,e);s+=d,0!==(u-=d)&&0!==(c=ve(t[s+u-1],t,h,c,c-1,e))&&(u<=c?n(s,u,h,c):o(s,u,h,c))}function n(i,n,o,a){var r=0;for(r=0;r<n;r++)u[r]=t[i+r];var l=0,h=o,c=i;if(t[c++]=t[h++],0!=--a)if(1!==n){for(var d,f,p,g=s;;){d=0,f=0,p=!1;do{if(e(t[h],u[l])<0){if(t[c++]=t[h++],f++,d=0,0==--a){p=!0;break}}else if(t[c++]=u[l++],d++,f=0,1==--n){p=!0;break}}while((d|f)<g);if(p)break;do{if(0!==(d=ye(t[h],u,l,n,0,e))){for(r=0;r<d;r++)t[c+r]=u[l+r];if(c+=d,l+=d,(n-=d)<=1){p=!0;break}}if(t[c++]=t[h++],0==--a){p=!0;break}if(0!==(f=ve(u[l],t,h,a,0,e))){for(r=0;r<f;r++)t[c+r]=t[h+r];if(c+=f,h+=f,0===(a-=f)){p=!0;break}}if(t[c++]=u[l++],1==--n){p=!0;break}g--}while(d>=ib||f>=ib);if(p)break;g<0&&(g=0),g+=2}if((s=g)<1&&(s=1),1===n){for(r=0;r<a;r++)t[c+r]=t[h+r];t[c+a]=u[l]}else{if(0===n)throw new Error;for(r=0;r<n;r++)t[c+r]=u[l+r]}}else{for(r=0;r<a;r++)t[c+r]=t[h+r];t[c+a]=u[l]}else for(r=0;r<n;r++)t[c+r]=u[l+r]}function o(i,n,o,a){var r=0;for(r=0;r<a;r++)u[r]=t[o+r];var l=i+n-1,h=a-1,c=o+a-1,d=0,f=0;if(t[c--]=t[l--],0!=--n)if(1!==a){for(var p=s;;){var g=0,m=0,v=!1;do{if(e(u[h],t[l])<0){if(t[c--]=t[l--],g++,m=0,0==--n){v=!0;break}}else if(t[c--]=u[h--],m++,g=0,1==--a){v=!0;break}}while((g|m)<p);if(v)break;do{if(0!=(g=n-ye(u[h],t,i,n,n-1,e))){for(n-=g,f=(c-=g)+1,d=(l-=g)+1,r=g-1;r>=0;r--)t[f+r]=t[d+r];if(0===n){v=!0;break}}if(t[c--]=u[h--],1==--a){v=!0;break}if(0!=(m=a-ve(t[l],u,0,a,a-1,e))){for(a-=m,f=(c-=m)+1,d=(h-=m)+1,r=0;r<m;r++)t[f+r]=u[d+r];if(a<=1){v=!0;break}}if(t[c--]=t[l--],0==--n){v=!0;break}p--}while(g>=ib||m>=ib);if(v)break;p<0&&(p=0),p+=2}if((s=p)<1&&(s=1),1===a){for(f=(c-=n)+1,d=(l-=n)+1,r=n-1;r>=0;r--)t[f+r]=t[d+r];t[c]=u[h]}else{if(0===a)throw new Error;for(d=c-(a-1),r=0;r<a;r++)t[d+r]=u[r]}}else{for(f=(c-=n)+1,d=(l-=n)+1,r=n-1;r>=0;r--)t[f+r]=t[d+r];t[c]=u[h]}else for(d=c-(a-1),r=0;r<a;r++)t[d+r]=u[r]}var a,r,s=ib,l=0,u=[];a=[],r=[],this.mergeRuns=function(){for(;l>1;){var t=l-2;if(t>=1&&r[t-1]<=r[t]+r[t+1]||t>=2&&r[t-2]<=r[t]+r[t-1])r[t-1]<r[t+1]&&t--;else if(r[t]>r[t+1])break;i(t)}},this.forceMergeRuns=function(){for(;l>1;){var t=l-2;t>0&&r[t-1]<r[t+1]&&t--,i(t)}},this.pushRun=function(t,e){a[l]=t,r[l]=e,l+=1}}function _e(t,e,i,n){i||(i=0),n||(n=t.length);var o=n-i;if(!(o<2)){var a=0;if(o<eb)return a=pe(t,i,n,e),void me(t,i,n,i+a,e);var r=new xe(t,e),s=fe(o);do{if((a=pe(t,i,n,e))<s){var l=o;l>s&&(l=s),me(t,i,i+l,i+a,e),a=l}r.pushRun(i,a),r.mergeRuns(),o-=a,i+=a}while(0!==o);r.forceMergeRuns()}}function we(t,e){return t.zlevel===e.zlevel?t.z===e.z?t.z2-e.z2:t.z-e.z:t.zlevel-e.zlevel}function be(t,e,i){var n=null==e.x?0:e.x,o=null==e.x2?1:e.x2,a=null==e.y?0:e.y,r=null==e.y2?0:e.y2;return e.global||(n=n*i.width+i.x,o=o*i.width+i.x,a=a*i.height+i.y,r=r*i.height+i.y),n=isNaN(n)?0:n,o=isNaN(o)?1:o,a=isNaN(a)?0:a,r=isNaN(r)?0:r,t.createLinearGradient(n,a,o,r)}function Se(t,e,i){var n=i.width,o=i.height,a=Math.min(n,o),r=null==e.x?.5:e.x,s=null==e.y?.5:e.y,l=null==e.r?.5:e.r;return e.global||(r=r*n+i.x,s=s*o+i.y,l*=a),t.createRadialGradient(r,s,0,r,s,l)}function Me(){return!1}function Ie(t,e,i){var n=iw(),o=e.getWidth(),a=e.getHeight(),r=n.style;return r&&(r.position="absolute",r.left=0,r.top=0,r.width=o+"px",r.height=a+"px",n.setAttribute("data-zr-dom-id",t)),n.width=o*i,n.height=a*i,n}function Te(t){if("string"==typeof t){var e=mb.get(t);return e&&e.image}return t}function Ae(t,e,i,n,o){if(t){if("string"==typeof t){if(e&&e.__zrImageSrc===t||!i)return e;var a=mb.get(t),r={hostEl:i,cb:n,cbPayload:o};return a?!Ce(e=a.image)&&a.pending.push(r):((e=new Image).onload=e.onerror=De,mb.put(t,e.__cachedImgObj={image:e,pending:[r]}),e.src=e.__zrImageSrc=t),e}return t}return e}function De(){var t=this.__cachedImgObj;this.onload=this.onerror=this.__cachedImgObj=null;for(var e=0;e<t.pending.length;e++){var i=t.pending[e],n=i.cb;n&&n(this,i.cbPayload),i.hostEl.dirty()}t.pending.length=0}function Ce(t){return t&&t.width&&t.height}function Le(t,e){var i=t+":"+(e=e||wb);if(vb[i])return vb[i];for(var n=(t+"").split("\n"),o=0,a=0,r=n.length;a<r;a++)o=Math.max(We(n[a],e).width,o);return yb>xb&&(yb=0,vb={}),yb++,vb[i]=o,o}function ke(t,e,i,n,o,a,r,s){return r?Ne(t,e,i,n,o,r,a,s):Pe(t,e,i,n,o,a,s)}function Pe(t,e,i,n,o,a,r){var s=He(t,e,o,a,r),l=Le(t,e);o&&(l+=o[1]+o[3]);var u=s.outerHeight,h=new de(Oe(0,l,i),Ee(0,u,n),l,u);return h.lineHeight=s.lineHeight,h}function Ne(t,e,i,n,o,a,r,s){var l=Ze(t,{rich:r,truncate:s,font:e,textAlign:i,textPadding:o,textLineHeight:a}),u=l.outerWidth,h=l.outerHeight;return new de(Oe(0,u,i),Ee(0,h,n),u,h)}function Oe(t,e,i){return"right"===i?t-=e:"center"===i&&(t-=e/2),t}function Ee(t,e,i){return"middle"===i?t-=e/2:"bottom"===i&&(t-=e),t}function Re(t,e,i){var n=e.x,o=e.y,a=e.height,r=e.width,s=a/2,l="left",u="top";switch(t){case"left":n-=i,o+=s,l="right",u="middle";break;case"right":n+=i+r,o+=s,u="middle";break;case"top":n+=r/2,o-=i,l="center",u="bottom";break;case"bottom":n+=r/2,o+=a+i,l="center";break;case"inside":n+=r/2,o+=s,l="center",u="middle";break;case"insideLeft":n+=i,o+=s,u="middle";break;case"insideRight":n+=r-i,o+=s,l="right",u="middle";break;case"insideTop":n+=r/2,o+=i,l="center";break;case"insideBottom":n+=r/2,o+=a-i,l="center",u="bottom";break;case"insideTopLeft":n+=i,o+=i;break;case"insideTopRight":n+=r-i,o+=i,l="right";break;case"insideBottomLeft":n+=i,o+=a-i,u="bottom";break;case"insideBottomRight":n+=r-i,o+=a-i,l="right",u="bottom"}return{x:n,y:o,textAlign:l,textVerticalAlign:u}}function ze(t,e,i,n,o){if(!e)return"";var a=(t+"").split("\n");o=Be(e,i,n,o);for(var r=0,s=a.length;r<s;r++)a[r]=Ve(a[r],o);return a.join("\n")}function Be(t,e,i,n){(n=a({},n)).font=e;var i=A(i,"...");n.maxIterations=A(n.maxIterations,2);var o=n.minChar=A(n.minChar,0);n.cnCharWidth=Le("国",e);var r=n.ascCharWidth=Le("a",e);n.placeholder=A(n.placeholder,"");for(var s=t=Math.max(0,t-1),l=0;l<o&&s>=r;l++)s-=r;var u=Le(i,e);return u>s&&(i="",u=0),s=t-u,n.ellipsis=i,n.ellipsisWidth=u,n.contentWidth=s,n.containerWidth=t,n}function Ve(t,e){var i=e.containerWidth,n=e.font,o=e.contentWidth;if(!i)return"";var a=Le(t,n);if(a<=i)return t;for(var r=0;;r++){if(a<=o||r>=e.maxIterations){t+=e.ellipsis;break}var s=0===r?Ge(t,o,e.ascCharWidth,e.cnCharWidth):a>0?Math.floor(t.length*o/a):0;a=Le(t=t.substr(0,s),n)}return""===t&&(t=e.placeholder),t}function Ge(t,e,i,n){for(var o=0,a=0,r=t.length;a<r&&o<e;a++){var s=t.charCodeAt(a);o+=0<=s&&s<=127?i:n}return a}function Fe(t){return Le("国",t)}function We(t,e){return bb.measureText(t,e)}function He(t,e,i,n,o){null!=t&&(t+="");var a=A(n,Fe(e)),r=t?t.split("\n"):[],s=r.length*a,l=s;if(i&&(l+=i[0]+i[2]),t&&o){var u=o.outerHeight,h=o.outerWidth;if(null!=u&&l>u)t="",r=[];else if(null!=h)for(var c=Be(h-(i?i[1]+i[3]:0),e,o.ellipsis,{minChar:o.minChar,placeholder:o.placeholder}),d=0,f=r.length;d<f;d++)r[d]=Ve(r[d],c)}return{lines:r,height:s,outerHeight:l,lineHeight:a}}function Ze(t,e){var i={lines:[],width:0,height:0};if(null!=t&&(t+=""),!t)return i;for(var n,o=_b.lastIndex=0;null!=(n=_b.exec(t));){var a=n.index;a>o&&Ue(i,t.substring(o,a)),Ue(i,n[2],n[1]),o=_b.lastIndex}o<t.length&&Ue(i,t.substring(o,t.length));var r=i.lines,s=0,l=0,u=[],h=e.textPadding,c=e.truncate,d=c&&c.outerWidth,f=c&&c.outerHeight;h&&(null!=d&&(d-=h[1]+h[3]),null!=f&&(f-=h[0]+h[2]));for(L=0;L<r.length;L++){for(var p=r[L],g=0,m=0,v=0;v<p.tokens.length;v++){var y=(k=p.tokens[v]).styleName&&e.rich[k.styleName]||{},x=k.textPadding=y.textPadding,_=k.font=y.font||e.font,w=k.textHeight=A(y.textHeight,Fe(_));if(x&&(w+=x[0]+x[2]),k.height=w,k.lineHeight=D(y.textLineHeight,e.textLineHeight,w),k.textAlign=y&&y.textAlign||e.textAlign,k.textVerticalAlign=y&&y.textVerticalAlign||"middle",null!=f&&s+k.lineHeight>f)return{lines:[],width:0,height:0};k.textWidth=Le(k.text,_);var b=y.textWidth,S=null==b||"auto"===b;if("string"==typeof b&&"%"===b.charAt(b.length-1))k.percentWidth=b,u.push(k),b=0;else{if(S){b=k.textWidth;var M=y.textBackgroundColor,I=M&&M.image;I&&Ce(I=Te(I))&&(b=Math.max(b,I.width*w/I.height))}var T=x?x[1]+x[3]:0;b+=T;var C=null!=d?d-m:null;null!=C&&C<b&&(!S||C<T?(k.text="",k.textWidth=b=0):(k.text=ze(k.text,C-T,_,c.ellipsis,{minChar:c.minChar}),k.textWidth=Le(k.text,_),b=k.textWidth+T))}m+=k.width=b,y&&(g=Math.max(g,k.lineHeight))}p.width=m,p.lineHeight=g,s+=g,l=Math.max(l,m)}i.outerWidth=i.width=A(e.textWidth,l),i.outerHeight=i.height=A(e.textHeight,s),h&&(i.outerWidth+=h[1]+h[3],i.outerHeight+=h[0]+h[2]);for(var L=0;L<u.length;L++){var k=u[L],P=k.percentWidth;k.width=parseInt(P,10)/100*l}return i}function Ue(t,e,i){for(var n=""===e,o=e.split("\n"),a=t.lines,r=0;r<o.length;r++){var s=o[r],l={styleName:i,text:s,isLineHolder:!s&&!n};if(r)a.push({tokens:[l]});else{var u=(a[a.length-1]||(a[0]={tokens:[]})).tokens,h=u.length;1===h&&u[0].isLineHolder?u[0]=l:(s||!h||n)&&u.push(l)}}}function Xe(t){var e=(t.fontSize||t.fontFamily)&&[t.fontStyle,t.fontWeight,(t.fontSize||12)+"px",t.fontFamily||"sans-serif"].join(" ");return e&&P(e)||t.textFont||t.font}function je(t,e){var i,n,o,a,r=e.x,s=e.y,l=e.width,u=e.height,h=e.r;l<0&&(r+=l,l=-l),u<0&&(s+=u,u=-u),"number"==typeof h?i=n=o=a=h:h instanceof Array?1===h.length?i=n=o=a=h[0]:2===h.length?(i=o=h[0],n=a=h[1]):3===h.length?(i=h[0],n=a=h[1],o=h[2]):(i=h[0],n=h[1],o=h[2],a=h[3]):i=n=o=a=0;var c;i+n>l&&(i*=l/(c=i+n),n*=l/c),o+a>l&&(o*=l/(c=o+a),a*=l/c),n+o>u&&(n*=u/(c=n+o),o*=u/c),i+a>u&&(i*=u/(c=i+a),a*=u/c),t.moveTo(r+i,s),t.lineTo(r+l-n,s),0!==n&&t.arc(r+l-n,s+n,n,-Math.PI/2,0),t.lineTo(r+l,s+u-o),0!==o&&t.arc(r+l-o,s+u-o,o,0,Math.PI/2),t.lineTo(r+a,s+u),0!==a&&t.arc(r+a,s+u-a,a,Math.PI/2,Math.PI),t.lineTo(r,s+i),0!==i&&t.arc(r+i,s+i,i,Math.PI,1.5*Math.PI)}function Ye(t){return qe(t),d(t.rich,qe),t}function qe(t){if(t){t.font=Xe(t);var e=t.textAlign;"middle"===e&&(e="center"),t.textAlign=null==e||Sb[e]?e:"left";var i=t.textVerticalAlign||t.textBaseline;"center"===i&&(i="middle"),t.textVerticalAlign=null==i||Mb[i]?i:"top",t.textPadding&&(t.textPadding=L(t.textPadding))}}function Ke(t,e,i,n,o,a){n.rich?Je(t,e,i,n,o,a):$e(t,e,i,n,o,a)}function $e(t,e,i,n,o,a){var r,s=ii(n),l=!1,u=e.__attrCachedBy===rb.PLAIN_TEXT;a!==sb?(a&&(r=a.style,l=!s&&u),e.__attrCachedBy=s?rb.NONE:rb.PLAIN_TEXT):u&&(e.__attrCachedBy=rb.NONE);var h=n.font||wb;h!==e.__fontCache&&(e.font=h,a!==sb&&(e.__fontCache=h));var c=t.__computedFont;t.__styleFont!==h&&(t.__styleFont=h,c=t.__computedFont=e.font);var d=n.textPadding,f=n.textLineHeight,p=t.__textCotentBlock;p&&!t.__dirtyText||(p=t.__textCotentBlock=He(i,c,d,f,n.truncate));var g=p.outerHeight,m=p.lines,v=p.lineHeight,y=ai(g,n,o),x=y.baseX,_=y.baseY,w=y.textAlign||"left",b=y.textVerticalAlign;ti(e,n,o,x,_);var S=Ee(_,g,b),M=x,I=S;if(s||d){var T=Le(i,c);d&&(T+=d[1]+d[3]);var A=Oe(x,T,w);s&&ni(t,e,n,A,S,T,g),d&&(M=hi(x,w,d),I+=d[0])}e.textAlign=w,e.textBaseline="middle",e.globalAlpha=n.opacity||1;for(B=0;B<Ib.length;B++){var D=Ib[B],C=D[0],L=D[1],k=n[C];l&&k===r[C]||(e[L]=ab(e,L,k||D[2]))}I+=v/2;var P=n.textStrokeWidth,N=l?r.textStrokeWidth:null,O=!l||P!==N,E=!l||O||n.textStroke!==r.textStroke,R=si(n.textStroke,P),z=li(n.textFill);if(R&&(O&&(e.lineWidth=P),E&&(e.strokeStyle=R)),z&&(l&&n.textFill===r.textFill||(e.fillStyle=z)),1===m.length)R&&e.strokeText(m[0],M,I),z&&e.fillText(m[0],M,I);else for(var B=0;B<m.length;B++)R&&e.strokeText(m[B],M,I),z&&e.fillText(m[B],M,I),I+=v}function Je(t,e,i,n,o,a){a!==sb&&(e.__attrCachedBy=rb.NONE);var r=t.__textCotentBlock;r&&!t.__dirtyText||(r=t.__textCotentBlock=Ze(i,n)),Qe(t,e,r,n,o)}function Qe(t,e,i,n,o){var a=i.width,r=i.outerWidth,s=i.outerHeight,l=n.textPadding,u=ai(s,n,o),h=u.baseX,c=u.baseY,d=u.textAlign,f=u.textVerticalAlign;ti(e,n,o,h,c);var p=Oe(h,r,d),g=Ee(c,s,f),m=p,v=g;l&&(m+=l[3],v+=l[0]);var y=m+a;ii(n)&&ni(t,e,n,p,g,r,s);for(var x=0;x<i.lines.length;x++){for(var _,w=i.lines[x],b=w.tokens,S=b.length,M=w.lineHeight,I=w.width,T=0,A=m,D=y,C=S-1;T<S&&(!(_=b[T]).textAlign||"left"===_.textAlign);)ei(t,e,_,n,M,v,A,"left"),I-=_.width,A+=_.width,T++;for(;C>=0&&"right"===(_=b[C]).textAlign;)ei(t,e,_,n,M,v,D,"right"),I-=_.width,D-=_.width,C--;for(A+=(a-(A-m)-(y-D)-I)/2;T<=C;)ei(t,e,_=b[T],n,M,v,A+_.width/2,"center"),A+=_.width,T++;v+=M}}function ti(t,e,i,n,o){if(i&&e.textRotation){var a=e.textOrigin;"center"===a?(n=i.width/2+i.x,o=i.height/2+i.y):a&&(n=a[0]+i.x,o=a[1]+i.y),t.translate(n,o),t.rotate(-e.textRotation),t.translate(-n,-o)}}function ei(t,e,i,n,o,a,r,s){var l=n.rich[i.styleName]||{};l.text=i.text;var u=i.textVerticalAlign,h=a+o/2;"top"===u?h=a+i.height/2:"bottom"===u&&(h=a+o-i.height/2),!i.isLineHolder&&ii(l)&&ni(t,e,l,"right"===s?r-i.width:"center"===s?r-i.width/2:r,h-i.height/2,i.width,i.height);var c=i.textPadding;c&&(r=hi(r,s,c),h-=i.height/2-c[2]-i.textHeight/2),ri(e,"shadowBlur",D(l.textShadowBlur,n.textShadowBlur,0)),ri(e,"shadowColor",l.textShadowColor||n.textShadowColor||"transparent"),ri(e,"shadowOffsetX",D(l.textShadowOffsetX,n.textShadowOffsetX,0)),ri(e,"shadowOffsetY",D(l.textShadowOffsetY,n.textShadowOffsetY,0)),ri(e,"textAlign",s),ri(e,"textBaseline","middle"),ri(e,"font",i.font||wb);var d=si(l.textStroke||n.textStroke,p),f=li(l.textFill||n.textFill),p=A(l.textStrokeWidth,n.textStrokeWidth);d&&(ri(e,"lineWidth",p),ri(e,"strokeStyle",d),e.strokeText(i.text,r,h)),f&&(ri(e,"fillStyle",f),e.fillText(i.text,r,h))}function ii(t){return!!(t.textBackgroundColor||t.textBorderWidth&&t.textBorderColor)}function ni(t,e,i,n,o,a,r){var s=i.textBackgroundColor,l=i.textBorderWidth,u=i.textBorderColor,h=_(s);if(ri(e,"shadowBlur",i.textBoxShadowBlur||0),ri(e,"shadowColor",i.textBoxShadowColor||"transparent"),ri(e,"shadowOffsetX",i.textBoxShadowOffsetX||0),ri(e,"shadowOffsetY",i.textBoxShadowOffsetY||0),h||l&&u){e.beginPath();var c=i.textBorderRadius;c?je(e,{x:n,y:o,width:a,height:r,r:c}):e.rect(n,o,a,r),e.closePath()}if(h)if(ri(e,"fillStyle",s),null!=i.fillOpacity){f=e.globalAlpha;e.globalAlpha=i.fillOpacity*i.opacity,e.fill(),e.globalAlpha=f}else e.fill();else if(w(s)){var d=s.image;(d=Ae(d,null,t,oi,s))&&Ce(d)&&e.drawImage(d,n,o,a,r)}if(l&&u)if(ri(e,"lineWidth",l),ri(e,"strokeStyle",u),null!=i.strokeOpacity){var f=e.globalAlpha;e.globalAlpha=i.strokeOpacity*i.opacity,e.stroke(),e.globalAlpha=f}else e.stroke()}function oi(t,e){e.image=t}function ai(t,e,i){var n=e.x||0,o=e.y||0,a=e.textAlign,r=e.textVerticalAlign;if(i){var s=e.textPosition;if(s instanceof Array)n=i.x+ui(s[0],i.width),o=i.y+ui(s[1],i.height);else{var l=Re(s,i,e.textDistance);n=l.x,o=l.y,a=a||l.textAlign,r=r||l.textVerticalAlign}var u=e.textOffset;u&&(n+=u[0],o+=u[1])}return{baseX:n,baseY:o,textAlign:a,textVerticalAlign:r}}function ri(t,e,i){return t[e]=ab(t,e,i),t[e]}function si(t,e){return null==t||e<=0||"transparent"===t||"none"===t?null:t.image||t.colorStops?"#000":t}function li(t){return null==t||"none"===t?null:t.image||t.colorStops?"#000":t}function ui(t,e){return"string"==typeof t?t.lastIndexOf("%")>=0?parseFloat(t)/100*e:parseFloat(t):t}function hi(t,e,i){return"right"===e?t-i[1]:"center"===e?t+i[3]/2-i[1]/2:t+i[3]}function ci(t,e){return null!=t&&(t||e.textBackgroundColor||e.textBorderWidth&&e.textBorderColor||e.textPadding)}function di(t){t=t||{},Kw.call(this,t);for(var e in t)t.hasOwnProperty(e)&&"style"!==e&&(this[e]=t[e]);this.style=new ub(t.style,this),this._rect=null,this.__clipPaths=[]}function fi(t){di.call(this,t)}function pi(t){return parseInt(t,10)}function gi(t){return!!t&&(!!t.__builtin__||"function"==typeof t.resize&&"function"==typeof t.refresh)}function mi(t,e,i){return Db.copy(t.getBoundingRect()),t.transform&&Db.applyTransform(t.transform),Cb.width=e,Cb.height=i,!Db.intersect(Cb)}function vi(t,e){if(t===e)return!1;if(!t||!e||t.length!==e.length)return!0;for(var i=0;i<t.length;i++)if(t[i]!==e[i])return!0}function yi(t,e){for(var i=0;i<t.length;i++){var n=t[i];n.setTransform(e),e.beginPath(),n.buildPath(e,n.shape),e.clip(),n.restoreTransform(e)}}function xi(t,e){var i=document.createElement("div");return i.style.cssText=["position:relative","overflow:hidden","width:"+t+"px","height:"+e+"px","padding:0","margin:0","border-width:0"].join(";")+";",i}function _i(t){return"mousewheel"===t&&U_.browser.firefox?"DOMMouseScroll":t}function wi(t){t._touching=!0,clearTimeout(t._touchTimer),t._touchTimer=setTimeout(function(){t._touching=!1},700)}function bi(t){var e=t.pointerType;return"pen"===e||"touch"===e}function Si(t){function e(t,e){return function(){if(!e._touching)return t.apply(e,arguments)}}d(Nb,function(e){t._handlers[e]=m(Rb[e],t)}),d(Eb,function(e){t._handlers[e]=m(Rb[e],t)}),d(Pb,function(i){t._handlers[i]=e(Rb[i],t)})}function Mi(t){function e(e,i){d(e,function(e){ht(t,_i(e),i._handlers[e])},i)}fw.call(this),this.dom=t,this._touching=!1,this._touchTimer,this._handlers={},Si(this),U_.pointerEventsSupported?e(Eb,this):(U_.touchEventsSupported&&e(Nb,this),e(Pb,this))}function Ii(t,e){var i=new Fb(H_(),t,e);return Gb[i.id]=i,i}function Ti(t,e){Vb[t]=e}function Ai(t){delete Gb[t]}function Di(t){return t instanceof Array?t:null==t?[]:[t]}function Ci(t,e,i){if(t){t[e]=t[e]||{},t.emphasis=t.emphasis||{},t.emphasis[e]=t.emphasis[e]||{};for(var n=0,o=i.length;n<o;n++){var a=i[n];!t.emphasis[e].hasOwnProperty(a)&&t[e].hasOwnProperty(a)&&(t.emphasis[e][a]=t[e][a])}}}function Li(t){return!Zb(t)||Ub(t)||t instanceof Date?t:t.value}function ki(t){return Zb(t)&&!(t instanceof Array)}function Pi(t,e){e=(e||[]).slice();var i=f(t||[],function(t,e){return{exist:t}});return Hb(e,function(t,n){if(Zb(t)){for(o=0;o<i.length;o++)if(!i[o].option&&null!=t.id&&i[o].exist.id===t.id+"")return i[o].option=t,void(e[n]=null);for(var o=0;o<i.length;o++){var a=i[o].exist;if(!(i[o].option||null!=a.id&&null!=t.id||null==t.name||Ei(t)||Ei(a)||a.name!==t.name+""))return i[o].option=t,void(e[n]=null)}}}),Hb(e,function(t,e){if(Zb(t)){for(var n=0;n<i.length;n++){var o=i[n].exist;if(!i[n].option&&!Ei(o)&&null==t.id){i[n].option=t;break}}n>=i.length&&i.push({option:t})}}),i}function Ni(t){var e=R();Hb(t,function(t,i){var n=t.exist;n&&e.set(n.id,t)}),Hb(t,function(t,i){var n=t.option;k(!n||null==n.id||!e.get(n.id)||e.get(n.id)===t,"id duplicates: "+(n&&n.id)),n&&null!=n.id&&e.set(n.id,t),!t.keyInfo&&(t.keyInfo={})}),Hb(t,function(t,i){var n=t.exist,o=t.option,a=t.keyInfo;if(Zb(o)){if(a.name=null!=o.name?o.name+"":n?n.name:Xb+i,n)a.id=n.id;else if(null!=o.id)a.id=o.id+"";else{var r=0;do{a.id="\0"+a.name+"\0"+r++}while(e.get(a.id))}e.set(a.id,t)}})}function Oi(t){var e=t.name;return!(!e||!e.indexOf(Xb))}function Ei(t){return Zb(t)&&t.id&&0===(t.id+"").indexOf("\0_ec_\0")}function Ri(t,e){function i(t,e,i){for(var n=0,o=t.length;n<o;n++)for(var a=t[n].seriesId,r=Di(t[n].dataIndex),s=i&&i[a],l=0,u=r.length;l<u;l++){var h=r[l];s&&s[h]?s[h]=null:(e[a]||(e[a]={}))[h]=1}}function n(t,e){var i=[];for(var o in t)if(t.hasOwnProperty(o)&&null!=t[o])if(e)i.push(+o);else{var a=n(t[o],!0);a.length&&i.push({seriesId:o,dataIndex:a})}return i}var o={},a={};return i(t||[],o),i(e||[],a,o),[n(o),n(a)]}function zi(t,e){return null!=e.dataIndexInside?e.dataIndexInside:null!=e.dataIndex?y(e.dataIndex)?f(e.dataIndex,function(e){return t.indexOfRawIndex(e)}):t.indexOfRawIndex(e.dataIndex):null!=e.name?y(e.name)?f(e.name,function(e){return t.indexOfName(e)}):t.indexOfName(e.name):void 0}function Bi(){var t="__\0ec_inner_"+Yb+++"_"+Math.random().toFixed(5);return function(e){return e[t]||(e[t]={})}}function Vi(t,e,i){if(_(e)){var n={};n[e+"Index"]=0,e=n}var o=i&&i.defaultMainType;!o||Gi(e,o+"Index")||Gi(e,o+"Id")||Gi(e,o+"Name")||(e[o+"Index"]=0);var a={};return Hb(e,function(n,o){var n=e[o];if("dataIndex"!==o&&"dataIndexInside"!==o){var r=o.match(/^(\w+)(Index|Id|Name)$/)||[],s=r[1],u=(r[2]||"").toLowerCase();if(!(!s||!u||null==n||"index"===u&&"none"===n||i&&i.includeMainTypes&&l(i.includeMainTypes,s)<0)){var h={mainType:s};"index"===u&&"all"===n||(h[u]=n);var c=t.queryComponents(h);a[s+"Models"]=c,a[s+"Model"]=c[0]}}else a[o]=n}),a}function Gi(t,e){return t&&t.hasOwnProperty(e)}function Fi(t,e,i){t.setAttribute?t.setAttribute(e,i):t[e]=i}function Wi(t,e){return t.getAttribute?t.getAttribute(e):t[e]}function Hi(t){return"auto"===t?U_.domSupported?"html":"richText":t||"html"}function Zi(t){var e={main:"",sub:""};return t&&(t=t.split(qb),e.main=t[0]||"",e.sub=t[1]||""),e}function Ui(t){k(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t),'componentType "'+t+'" illegal')}function Xi(t,e){t.$constructor=t,t.extend=function(t){var e=this,i=function(){t.$constructor?t.$constructor.apply(this,arguments):e.apply(this,arguments)};return a(i.prototype,t),i.extend=this.extend,i.superCall=Yi,i.superApply=qi,u(i,this),i.superClass=e,i}}function ji(t){var e=["__\0is_clz",$b++,Math.random().toFixed(3)].join("_");t.prototype[e]=!0,t.isInstance=function(t){return!(!t||!t[e])}}function Yi(t,e){var i=C(arguments,2);return this.superClass.prototype[e].apply(t,i)}function qi(t,e,i){return this.superClass.prototype[e].apply(t,i)}function Ki(t,e){function i(t){var e=n[t.main];return e&&e[Kb]||((e=n[t.main]={})[Kb]=!0),e}e=e||{};var n={};if(t.registerClass=function(t,e){return e&&(Ui(e),(e=Zi(e)).sub?e.sub!==Kb&&(i(e)[e.sub]=t):n[e.main]=t),t},t.getClass=function(t,e,i){var o=n[t];if(o&&o[Kb]&&(o=e?o[e]:null),i&&!o)throw new Error(e?"Component "+t+"."+(e||"")+" not exists. Load it first.":t+".type should be specified.");return o},t.getClassesByMainType=function(t){t=Zi(t);var e=[],i=n[t.main];return i&&i[Kb]?d(i,function(t,i){i!==Kb&&e.push(t)}):e.push(i),e},t.hasClass=function(t){return t=Zi(t),!!n[t.main]},t.getAllClassMainTypes=function(){var t=[];return d(n,function(e,i){t.push(i)}),t},t.hasSubTypes=function(t){t=Zi(t);var e=n[t.main];return e&&e[Kb]},t.parseClassType=Zi,e.registerWhenExtend){var o=t.extend;o&&(t.extend=function(e){var i=o.call(this,e);return t.registerClass(i,e.type)})}return t}function $i(t){return t>-aS&&t<aS}function Ji(t){return t>aS||t<-aS}function Qi(t,e,i,n,o){var a=1-o;return a*a*(a*t+3*o*e)+o*o*(o*n+3*a*i)}function tn(t,e,i,n,o){var a=1-o;return 3*(((e-t)*a+2*(i-e)*o)*a+(n-i)*o*o)}function en(t,e,i,n,o,a){var r=n+3*(e-i)-t,s=3*(i-2*e+t),l=3*(e-t),u=t-o,h=s*s-3*r*l,c=s*l-9*r*u,d=l*l-3*s*u,f=0;if($i(h)&&$i(c))$i(s)?a[0]=0:(M=-l/s)>=0&&M<=1&&(a[f++]=M);else{var p=c*c-4*h*d;if($i(p)){var g=c/h,m=-g/2;(M=-s/r+g)>=0&&M<=1&&(a[f++]=M),m>=0&&m<=1&&(a[f++]=m)}else if(p>0){var v=oS(p),y=h*s+1.5*r*(-c+v),x=h*s+1.5*r*(-c-v);(M=(-s-((y=y<0?-nS(-y,lS):nS(y,lS))+(x=x<0?-nS(-x,lS):nS(x,lS))))/(3*r))>=0&&M<=1&&(a[f++]=M)}else{var _=(2*h*s-3*r*c)/(2*oS(h*h*h)),w=Math.acos(_)/3,b=oS(h),S=Math.cos(w),M=(-s-2*b*S)/(3*r),m=(-s+b*(S+sS*Math.sin(w)))/(3*r),I=(-s+b*(S-sS*Math.sin(w)))/(3*r);M>=0&&M<=1&&(a[f++]=M),m>=0&&m<=1&&(a[f++]=m),I>=0&&I<=1&&(a[f++]=I)}}return f}function nn(t,e,i,n,o){var a=6*i-12*e+6*t,r=9*e+3*n-3*t-9*i,s=3*e-3*t,l=0;if($i(r))Ji(a)&&(c=-s/a)>=0&&c<=1&&(o[l++]=c);else{var u=a*a-4*r*s;if($i(u))o[0]=-a/(2*r);else if(u>0){var h=oS(u),c=(-a+h)/(2*r),d=(-a-h)/(2*r);c>=0&&c<=1&&(o[l++]=c),d>=0&&d<=1&&(o[l++]=d)}}return l}function on(t,e,i,n,o,a){var r=(e-t)*o+t,s=(i-e)*o+e,l=(n-i)*o+i,u=(s-r)*o+r,h=(l-s)*o+s,c=(h-u)*o+u;a[0]=t,a[1]=r,a[2]=u,a[3]=c,a[4]=c,a[5]=h,a[6]=l,a[7]=n}function an(t,e,i,n,o,a,r,s,l,u,h){var c,d,f,p,g,m=.005,v=1/0;uS[0]=l,uS[1]=u;for(var y=0;y<1;y+=.05)hS[0]=Qi(t,i,o,r,y),hS[1]=Qi(e,n,a,s,y),(p=hw(uS,hS))<v&&(c=y,v=p);v=1/0;for(var x=0;x<32&&!(m<rS);x++)d=c-m,f=c+m,hS[0]=Qi(t,i,o,r,d),hS[1]=Qi(e,n,a,s,d),p=hw(hS,uS),d>=0&&p<v?(c=d,v=p):(cS[0]=Qi(t,i,o,r,f),cS[1]=Qi(e,n,a,s,f),g=hw(cS,uS),f<=1&&g<v?(c=f,v=g):m*=.5);return h&&(h[0]=Qi(t,i,o,r,c),h[1]=Qi(e,n,a,s,c)),oS(v)}function rn(t,e,i,n){var o=1-n;return o*(o*t+2*n*e)+n*n*i}function sn(t,e,i,n){return 2*((1-n)*(e-t)+n*(i-e))}function ln(t,e,i,n,o){var a=t-2*e+i,r=2*(e-t),s=t-n,l=0;if($i(a))Ji(r)&&(c=-s/r)>=0&&c<=1&&(o[l++]=c);else{var u=r*r-4*a*s;if($i(u))(c=-r/(2*a))>=0&&c<=1&&(o[l++]=c);else if(u>0){var h=oS(u),c=(-r+h)/(2*a),d=(-r-h)/(2*a);c>=0&&c<=1&&(o[l++]=c),d>=0&&d<=1&&(o[l++]=d)}}return l}function un(t,e,i){var n=t+i-2*e;return 0===n?.5:(t-e)/n}function hn(t,e,i,n,o){var a=(e-t)*n+t,r=(i-e)*n+e,s=(r-a)*n+a;o[0]=t,o[1]=a,o[2]=s,o[3]=s,o[4]=r,o[5]=i}function cn(t,e,i,n,o,a,r,s,l){var u,h=.005,c=1/0;uS[0]=r,uS[1]=s;for(var d=0;d<1;d+=.05)hS[0]=rn(t,i,o,d),hS[1]=rn(e,n,a,d),(m=hw(uS,hS))<c&&(u=d,c=m);c=1/0;for(var f=0;f<32&&!(h<rS);f++){var p=u-h,g=u+h;hS[0]=rn(t,i,o,p),hS[1]=rn(e,n,a,p);var m=hw(hS,uS);if(p>=0&&m<c)u=p,c=m;else{cS[0]=rn(t,i,o,g),cS[1]=rn(e,n,a,g);var v=hw(cS,uS);g<=1&&v<c?(u=g,c=v):h*=.5}}return l&&(l[0]=rn(t,i,o,u),l[1]=rn(e,n,a,u)),oS(c)}function dn(t,e,i){if(0!==t.length){var n,o=t[0],a=o[0],r=o[0],s=o[1],l=o[1];for(n=1;n<t.length;n++)o=t[n],a=dS(a,o[0]),r=fS(r,o[0]),s=dS(s,o[1]),l=fS(l,o[1]);e[0]=a,e[1]=s,i[0]=r,i[1]=l}}function fn(t,e,i,n,o,a){o[0]=dS(t,i),o[1]=dS(e,n),a[0]=fS(t,i),a[1]=fS(e,n)}function pn(t,e,i,n,o,a,r,s,l,u){var h,c=nn,d=Qi,f=c(t,i,o,r,_S);for(l[0]=1/0,l[1]=1/0,u[0]=-1/0,u[1]=-1/0,h=0;h<f;h++){var p=d(t,i,o,r,_S[h]);l[0]=dS(p,l[0]),u[0]=fS(p,u[0])}for(f=c(e,n,a,s,wS),h=0;h<f;h++){var g=d(e,n,a,s,wS[h]);l[1]=dS(g,l[1]),u[1]=fS(g,u[1])}l[0]=dS(t,l[0]),u[0]=fS(t,u[0]),l[0]=dS(r,l[0]),u[0]=fS(r,u[0]),l[1]=dS(e,l[1]),u[1]=fS(e,u[1]),l[1]=dS(s,l[1]),u[1]=fS(s,u[1])}function gn(t,e,i,n,o,a,r,s){var l=un,u=rn,h=fS(dS(l(t,i,o),1),0),c=fS(dS(l(e,n,a),1),0),d=u(t,i,o,h),f=u(e,n,a,c);r[0]=dS(t,o,d),r[1]=dS(e,a,f),s[0]=fS(t,o,d),s[1]=fS(e,a,f)}function mn(t,e,i,n,o,a,r,s,l){var u=tt,h=et,c=Math.abs(o-a);if(c%mS<1e-4&&c>1e-4)return s[0]=t-i,s[1]=e-n,l[0]=t+i,void(l[1]=e+n);if(vS[0]=gS(o)*i+t,vS[1]=pS(o)*n+e,yS[0]=gS(a)*i+t,yS[1]=pS(a)*n+e,u(s,vS,yS),h(l,vS,yS),(o%=mS)<0&&(o+=mS),(a%=mS)<0&&(a+=mS),o>a&&!r?a+=mS:o<a&&r&&(o+=mS),r){var d=a;a=o,o=d}for(var f=0;f<a;f+=Math.PI/2)f>o&&(xS[0]=gS(f)*i+t,xS[1]=pS(f)*n+e,u(s,xS,s),h(l,xS,l))}function vn(t,e,i,n,o,a,r){if(0===o)return!1;var s=o,l=0,u=t;if(r>e+s&&r>n+s||r<e-s&&r<n-s||a>t+s&&a>i+s||a<t-s&&a<i-s)return!1;if(t===i)return Math.abs(a-t)<=s/2;var h=(l=(e-n)/(t-i))*a-r+(u=(t*n-i*e)/(t-i));return h*h/(l*l+1)<=s/2*s/2}function yn(t,e,i,n,o,a,r,s,l,u,h){if(0===l)return!1;var c=l;return!(h>e+c&&h>n+c&&h>a+c&&h>s+c||h<e-c&&h<n-c&&h<a-c&&h<s-c||u>t+c&&u>i+c&&u>o+c&&u>r+c||u<t-c&&u<i-c&&u<o-c&&u<r-c)&&an(t,e,i,n,o,a,r,s,u,h,null)<=c/2}function xn(t,e,i,n,o,a,r,s,l){if(0===r)return!1;var u=r;return!(l>e+u&&l>n+u&&l>a+u||l<e-u&&l<n-u&&l<a-u||s>t+u&&s>i+u&&s>o+u||s<t-u&&s<i-u&&s<o-u)&&cn(t,e,i,n,o,a,s,l,null)<=u/2}function _n(t){return(t%=ES)<0&&(t+=ES),t}function wn(t,e,i,n,o,a,r,s,l){if(0===r)return!1;var u=r;s-=t,l-=e;var h=Math.sqrt(s*s+l*l);if(h-u>i||h+u<i)return!1;if(Math.abs(n-o)%RS<1e-4)return!0;if(a){var c=n;n=_n(o),o=_n(c)}else n=_n(n),o=_n(o);n>o&&(o+=RS);var d=Math.atan2(l,s);return d<0&&(d+=RS),d>=n&&d<=o||d+RS>=n&&d+RS<=o}function bn(t,e,i,n,o,a){if(a>e&&a>n||a<e&&a<n)return 0;if(n===e)return 0;var r=n<e?1:-1,s=(a-e)/(n-e);1!==s&&0!==s||(r=n<e?.5:-.5);var l=s*(i-t)+t;return l===o?1/0:l>o?r:0}function Sn(t,e){return Math.abs(t-e)<VS}function Mn(){var t=FS[0];FS[0]=FS[1],FS[1]=t}function In(t,e,i,n,o,a,r,s,l,u){if(u>e&&u>n&&u>a&&u>s||u<e&&u<n&&u<a&&u<s)return 0;var h=en(e,n,a,s,u,GS);if(0===h)return 0;for(var c,d,f=0,p=-1,g=0;g<h;g++){var m=GS[g],v=0===m||1===m?.5:1;Qi(t,i,o,r,m)<l||(p<0&&(p=nn(e,n,a,s,FS),FS[1]<FS[0]&&p>1&&Mn(),c=Qi(e,n,a,s,FS[0]),p>1&&(d=Qi(e,n,a,s,FS[1]))),2===p?m<FS[0]?f+=c<e?v:-v:m<FS[1]?f+=d<c?v:-v:f+=s<d?v:-v:m<FS[0]?f+=c<e?v:-v:f+=s<c?v:-v)}return f}function Tn(t,e,i,n,o,a,r,s){if(s>e&&s>n&&s>a||s<e&&s<n&&s<a)return 0;var l=ln(e,n,a,s,GS);if(0===l)return 0;var u=un(e,n,a);if(u>=0&&u<=1){for(var h=0,c=rn(e,n,a,u),d=0;d<l;d++){f=0===GS[d]||1===GS[d]?.5:1;(p=rn(t,i,o,GS[d]))<r||(GS[d]<u?h+=c<e?f:-f:h+=a<c?f:-f)}return h}var f=0===GS[0]||1===GS[0]?.5:1,p=rn(t,i,o,GS[0]);return p<r?0:a<e?f:-f}function An(t,e,i,n,o,a,r,s){if((s-=e)>i||s<-i)return 0;u=Math.sqrt(i*i-s*s);GS[0]=-u,GS[1]=u;var l=Math.abs(n-o);if(l<1e-4)return 0;if(l%BS<1e-4){n=0,o=BS;p=a?1:-1;return r>=GS[0]+t&&r<=GS[1]+t?p:0}if(a){var u=n;n=_n(o),o=_n(u)}else n=_n(n),o=_n(o);n>o&&(o+=BS);for(var h=0,c=0;c<2;c++){var d=GS[c];if(d+t>r){var f=Math.atan2(s,d),p=a?1:-1;f<0&&(f=BS+f),(f>=n&&f<=o||f+BS>=n&&f+BS<=o)&&(f>Math.PI/2&&f<1.5*Math.PI&&(p=-p),h+=p)}}return h}function Dn(t,e,i,n,o){for(var a=0,r=0,s=0,l=0,u=0,h=0;h<t.length;){var c=t[h++];switch(c===zS.M&&h>1&&(i||(a+=bn(r,s,l,u,n,o))),1===h&&(l=r=t[h],u=s=t[h+1]),c){case zS.M:r=l=t[h++],s=u=t[h++];break;case zS.L:if(i){if(vn(r,s,t[h],t[h+1],e,n,o))return!0}else a+=bn(r,s,t[h],t[h+1],n,o)||0;r=t[h++],s=t[h++];break;case zS.C:if(i){if(yn(r,s,t[h++],t[h++],t[h++],t[h++],t[h],t[h+1],e,n,o))return!0}else a+=In(r,s,t[h++],t[h++],t[h++],t[h++],t[h],t[h+1],n,o)||0;r=t[h++],s=t[h++];break;case zS.Q:if(i){if(xn(r,s,t[h++],t[h++],t[h],t[h+1],e,n,o))return!0}else a+=Tn(r,s,t[h++],t[h++],t[h],t[h+1],n,o)||0;r=t[h++],s=t[h++];break;case zS.A:var d=t[h++],f=t[h++],p=t[h++],g=t[h++],m=t[h++],v=t[h++];h+=1;var y=1-t[h++],x=Math.cos(m)*p+d,_=Math.sin(m)*g+f;h>1?a+=bn(r,s,x,_,n,o):(l=x,u=_);var w=(n-d)*g/p+d;if(i){if(wn(d,f,g,m,m+v,y,e,w,o))return!0}else a+=An(d,f,g,m,m+v,y,w,o);r=Math.cos(m+v)*p+d,s=Math.sin(m+v)*g+f;break;case zS.R:l=r=t[h++],u=s=t[h++];var x=l+t[h++],_=u+t[h++];if(i){if(vn(l,u,x,u,e,n,o)||vn(x,u,x,_,e,n,o)||vn(x,_,l,_,e,n,o)||vn(l,_,l,u,e,n,o))return!0}else a+=bn(x,u,x,_,n,o),a+=bn(l,_,l,u,n,o);break;case zS.Z:if(i){if(vn(r,s,l,u,e,n,o))return!0}else a+=bn(r,s,l,u,n,o);r=l,s=u}}return i||Sn(s,u)||(a+=bn(r,s,l,u,n,o)||0),0!==a}function Cn(t,e,i){return Dn(t,0,!1,e,i)}function Ln(t,e,i,n){return Dn(t,e,!0,i,n)}function kn(t){di.call(this,t),this.path=null}function Pn(t,e,i,n,o,a,r,s,l,u,h){var c=l*(QS/180),d=JS(c)*(t-i)/2+$S(c)*(e-n)/2,f=-1*$S(c)*(t-i)/2+JS(c)*(e-n)/2,p=d*d/(r*r)+f*f/(s*s);p>1&&(r*=KS(p),s*=KS(p));var g=(o===a?-1:1)*KS((r*r*(s*s)-r*r*(f*f)-s*s*(d*d))/(r*r*(f*f)+s*s*(d*d)))||0,m=g*r*f/s,v=g*-s*d/r,y=(t+i)/2+JS(c)*m-$S(c)*v,x=(e+n)/2+$S(c)*m+JS(c)*v,_=iM([1,0],[(d-m)/r,(f-v)/s]),w=[(d-m)/r,(f-v)/s],b=[(-1*d-m)/r,(-1*f-v)/s],S=iM(w,b);eM(w,b)<=-1&&(S=QS),eM(w,b)>=1&&(S=0),0===a&&S>0&&(S-=2*QS),1===a&&S<0&&(S+=2*QS),h.addData(u,y,x,r,s,_,S,c,a)}function Nn(t){if(!t)return new OS;for(var e,i=0,n=0,o=i,a=n,r=new OS,s=OS.CMD,l=t.match(nM),u=0;u<l.length;u++){for(var h,c=l[u],d=c.charAt(0),f=c.match(oM)||[],p=f.length,g=0;g<p;g++)f[g]=parseFloat(f[g]);for(var m=0;m<p;){var v,y,x,_,w,b,S,M=i,I=n;switch(d){case"l":i+=f[m++],n+=f[m++],h=s.L,r.addData(h,i,n);break;case"L":i=f[m++],n=f[m++],h=s.L,r.addData(h,i,n);break;case"m":i+=f[m++],n+=f[m++],h=s.M,r.addData(h,i,n),o=i,a=n,d="l";break;case"M":i=f[m++],n=f[m++],h=s.M,r.addData(h,i,n),o=i,a=n,d="L";break;case"h":i+=f[m++],h=s.L,r.addData(h,i,n);break;case"H":i=f[m++],h=s.L,r.addData(h,i,n);break;case"v":n+=f[m++],h=s.L,r.addData(h,i,n);break;case"V":n=f[m++],h=s.L,r.addData(h,i,n);break;case"C":h=s.C,r.addData(h,f[m++],f[m++],f[m++],f[m++],f[m++],f[m++]),i=f[m-2],n=f[m-1];break;case"c":h=s.C,r.addData(h,f[m++]+i,f[m++]+n,f[m++]+i,f[m++]+n,f[m++]+i,f[m++]+n),i+=f[m-2],n+=f[m-1];break;case"S":v=i,y=n;var T=r.len(),A=r.data;e===s.C&&(v+=i-A[T-4],y+=n-A[T-3]),h=s.C,M=f[m++],I=f[m++],i=f[m++],n=f[m++],r.addData(h,v,y,M,I,i,n);break;case"s":v=i,y=n;var T=r.len(),A=r.data;e===s.C&&(v+=i-A[T-4],y+=n-A[T-3]),h=s.C,M=i+f[m++],I=n+f[m++],i+=f[m++],n+=f[m++],r.addData(h,v,y,M,I,i,n);break;case"Q":M=f[m++],I=f[m++],i=f[m++],n=f[m++],h=s.Q,r.addData(h,M,I,i,n);break;case"q":M=f[m++]+i,I=f[m++]+n,i+=f[m++],n+=f[m++],h=s.Q,r.addData(h,M,I,i,n);break;case"T":v=i,y=n;var T=r.len(),A=r.data;e===s.Q&&(v+=i-A[T-4],y+=n-A[T-3]),i=f[m++],n=f[m++],h=s.Q,r.addData(h,v,y,i,n);break;case"t":v=i,y=n;var T=r.len(),A=r.data;e===s.Q&&(v+=i-A[T-4],y+=n-A[T-3]),i+=f[m++],n+=f[m++],h=s.Q,r.addData(h,v,y,i,n);break;case"A":x=f[m++],_=f[m++],w=f[m++],b=f[m++],S=f[m++],Pn(M=i,I=n,i=f[m++],n=f[m++],b,S,x,_,w,h=s.A,r);break;case"a":x=f[m++],_=f[m++],w=f[m++],b=f[m++],S=f[m++],Pn(M=i,I=n,i+=f[m++],n+=f[m++],b,S,x,_,w,h=s.A,r)}}"z"!==d&&"Z"!==d||(h=s.Z,r.addData(h),i=o,n=a),e=h}return r.toStatic(),r}function On(t,e){var i=Nn(t);return e=e||{},e.buildPath=function(t){if(t.setData)t.setData(i.data),(e=t.getContext())&&t.rebuildPath(e);else{var e=t;i.rebuildPath(e)}},e.applyTransform=function(t){qS(i,t),this.dirty(!0)},e}function En(t,e){return new kn(On(t,e))}function Rn(t,e){return kn.extend(On(t,e))}function zn(t,e,i,n,o,a,r){var s=.5*(i-t),l=.5*(n-e);return(2*(e-i)+s+l)*r+(-3*(e-i)-2*s-l)*a+s*o+e}function Bn(t,e,i){var n=e.points,o=e.smooth;if(n&&n.length>=2){if(o&&"spline"!==o){var a=dM(n,o,i,e.smoothConstraint);t.moveTo(n[0][0],n[0][1]);for(var r=n.length,s=0;s<(i?r:r-1);s++){var l=a[2*s],u=a[2*s+1],h=n[(s+1)%r];t.bezierCurveTo(l[0],l[1],u[0],u[1],h[0],h[1])}}else{"spline"===o&&(n=cM(n,i)),t.moveTo(n[0][0],n[0][1]);for(var s=1,c=n.length;s<c;s++)t.lineTo(n[s][0],n[s][1])}i&&t.closePath()}}function Vn(t,e,i){var n=i&&i.lineWidth;if(e&&n){var o=e.x1,a=e.x2,r=e.y1,s=e.y2;gM(2*o)===gM(2*a)?t.x1=t.x2=Fn(o,n,!0):(t.x1=o,t.x2=a),gM(2*r)===gM(2*s)?t.y1=t.y2=Fn(r,n,!0):(t.y1=r,t.y2=s)}}function Gn(t,e,i){var n=i&&i.lineWidth;if(e&&n){var o=e.x,a=e.y,r=e.width,s=e.height;t.x=Fn(o,n,!0),t.y=Fn(a,n,!0),t.width=Math.max(Fn(o+r,n,!1)-t.x,0===r?0:1),t.height=Math.max(Fn(a+s,n,!1)-t.y,0===s?0:1)}}function Fn(t,e,i){var n=gM(2*t);return(n+gM(e))%2==0?n/2:(n+(i?1:-1))/2}function Wn(t,e,i){var n=t.cpx2,o=t.cpy2;return null===n||null===o?[(i?tn:Qi)(t.x1,t.cpx1,t.cpx2,t.x2,e),(i?tn:Qi)(t.y1,t.cpy1,t.cpy2,t.y2,e)]:[(i?sn:rn)(t.x1,t.cpx1,t.x2,e),(i?sn:rn)(t.y1,t.cpy1,t.y2,e)]}function Hn(t){di.call(this,t),this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.notClear=!0}function Zn(t){return kn.extend(t)}function Un(t,e,i,n){var o=En(t,e);return i&&("center"===n&&(i=jn(i,o.getBoundingRect())),Yn(o,i)),o}function Xn(t,e,i){var n=new fi({style:{image:t,x:e.x,y:e.y,width:e.width,height:e.height},onload:function(t){if("center"===i){var o={width:t.width,height:t.height};n.setStyle(jn(e,o))}}});return n}function jn(t,e){var i,n=e.width/e.height,o=t.height*n;return i=o<=t.width?t.height:(o=t.width)/n,{x:t.x+t.width/2-o/2,y:t.y+t.height/2-i/2,width:o,height:i}}function Yn(t,e){if(t.applyTransform){var i=t.getBoundingRect().calculateTransform(e);t.applyTransform(i)}}function qn(t){var e=t.shape,i=t.style.lineWidth;return DM(2*e.x1)===DM(2*e.x2)&&(e.x1=e.x2=$n(e.x1,i,!0)),DM(2*e.y1)===DM(2*e.y2)&&(e.y1=e.y2=$n(e.y1,i,!0)),t}function Kn(t){var e=t.shape,i=t.style.lineWidth,n=e.x,o=e.y,a=e.width,r=e.height;return e.x=$n(e.x,i,!0),e.y=$n(e.y,i,!0),e.width=Math.max($n(n+a,i,!1)-e.x,0===a?0:1),e.height=Math.max($n(o+r,i,!1)-e.y,0===r?0:1),t}function $n(t,e,i){var n=DM(2*t);return(n+DM(e))%2==0?n/2:(n+(i?1:-1))/2}function Jn(t){return null!=t&&"none"!==t}function Qn(t){if("string"!=typeof t)return t;var e=OM.get(t);return e||(e=Ht(t,-.1),EM<1e4&&(OM.set(t,e),EM++)),e}function to(t){if(t.__hoverStlDirty){t.__hoverStlDirty=!1;var e=t.__hoverStl;if(e){var i=t.__cachedNormalStl={};t.__cachedNormalZ2=t.z2;var n=t.style;for(var o in e)null!=e[o]&&(i[o]=n[o]);i.fill=n.fill,i.stroke=n.stroke}else t.__cachedNormalStl=t.__cachedNormalZ2=null}}function eo(t){var e=t.__hoverStl;if(e&&!t.__highlighted){var i=t.useHoverLayer;t.__highlighted=i?"layer":"plain";var n=t.__zr;if(n||!i){var o=t,a=t.style;i&&(a=(o=n.addHover(t)).style),wo(a),i||to(o),a.extendFrom(e),io(a,e,"fill"),io(a,e,"stroke"),_o(a),i||(t.dirty(!1),t.z2+=PM)}}}function io(t,e,i){!Jn(e[i])&&Jn(t[i])&&(t[i]=Qn(t[i]))}function no(t){var e=t.__highlighted;if(e)if(t.__highlighted=!1,"layer"===e)t.__zr&&t.__zr.removeHover(t);else if(e){var i=t.style,n=t.__cachedNormalStl;n&&(wo(i),t.setStyle(n),_o(i));var o=t.__cachedNormalZ2;null!=o&&t.z2-o===PM&&(t.z2=o)}}function oo(t,e){t.isGroup?t.traverse(function(t){!t.isGroup&&e(t)}):e(t)}function ao(t,e){e=t.__hoverStl=!1!==e&&(e||{}),t.__hoverStlDirty=!0,t.__highlighted&&(t.__cachedNormalStl=null,no(t),eo(t))}function ro(t){return t&&t.__isEmphasisEntered}function so(t){this.__hoverSilentOnTouch&&t.zrByTouch||!this.__isEmphasisEntered&&oo(this,eo)}function lo(t){this.__hoverSilentOnTouch&&t.zrByTouch||!this.__isEmphasisEntered&&oo(this,no)}function uo(){this.__isEmphasisEntered=!0,oo(this,eo)}function ho(){this.__isEmphasisEntered=!1,oo(this,no)}function co(t,e,i){t.isGroup?t.traverse(function(t){!t.isGroup&&ao(t,t.hoverStyle||e)}):ao(t,t.hoverStyle||e),fo(t,i)}function fo(t,e){var i=!1===e;if(t.__hoverSilentOnTouch=null!=e&&e.hoverSilentOnTouch,!i||t.__hoverStyleTrigger){var n=i?"off":"on";t[n]("mouseover",so)[n]("mouseout",lo),t[n]("emphasis",uo)[n]("normal",ho),t.__hoverStyleTrigger=!i}}function po(t,e,i,n,o,a,r){var s,l=(o=o||kM).labelFetcher,u=o.labelDataIndex,h=o.labelDimIndex,c=i.getShallow("show"),d=n.getShallow("show");(c||d)&&(l&&(s=l.getFormattedLabel(u,"normal",null,h)),null==s&&(s=x(o.defaultText)?o.defaultText(u,o):o.defaultText));var f=c?s:null,p=d?A(l?l.getFormattedLabel(u,"emphasis",null,h):null,s):null;null==f&&null==p||(go(t,i,a,o),go(e,n,r,o,!0)),t.text=f,e.text=p}function go(t,e,i,n,o){return mo(t,e,n,o),i&&a(t,i),t}function mo(t,e,i,n){if((i=i||kM).isRectText){var o=e.getShallow("position")||(n?null:"inside");"outside"===o&&(o="top"),t.textPosition=o,t.textOffset=e.getShallow("offset");var a=e.getShallow("rotate");null!=a&&(a*=Math.PI/180),t.textRotation=a,t.textDistance=A(e.getShallow("distance"),n?null:5)}var r,s=e.ecModel,l=s&&s.option.textStyle,u=vo(e);if(u){r={};for(var h in u)if(u.hasOwnProperty(h)){var c=e.getModel(["rich",h]);yo(r[h]={},c,l,i,n)}}return t.rich=r,yo(t,e,l,i,n,!0),i.forceRich&&!i.textStyle&&(i.textStyle={}),t}function vo(t){for(var e;t&&t!==t.ecModel;){var i=(t.option||kM).rich;if(i){e=e||{};for(var n in i)i.hasOwnProperty(n)&&(e[n]=1)}t=t.parentModel}return e}function yo(t,e,i,n,o,a){i=!o&&i||kM,t.textFill=xo(e.getShallow("color"),n)||i.color,t.textStroke=xo(e.getShallow("textBorderColor"),n)||i.textBorderColor,t.textStrokeWidth=A(e.getShallow("textBorderWidth"),i.textBorderWidth),t.insideRawTextPosition=t.textPosition,o||(a&&(t.insideRollbackOpt=n,_o(t)),null==t.textFill&&(t.textFill=n.autoColor)),t.fontStyle=e.getShallow("fontStyle")||i.fontStyle,t.fontWeight=e.getShallow("fontWeight")||i.fontWeight,t.fontSize=e.getShallow("fontSize")||i.fontSize,t.fontFamily=e.getShallow("fontFamily")||i.fontFamily,t.textAlign=e.getShallow("align"),t.textVerticalAlign=e.getShallow("verticalAlign")||e.getShallow("baseline"),t.textLineHeight=e.getShallow("lineHeight"),t.textWidth=e.getShallow("width"),t.textHeight=e.getShallow("height"),t.textTag=e.getShallow("tag"),a&&n.disableBox||(t.textBackgroundColor=xo(e.getShallow("backgroundColor"),n),t.textPadding=e.getShallow("padding"),t.textBorderColor=xo(e.getShallow("borderColor"),n),t.textBorderWidth=e.getShallow("borderWidth"),t.textBorderRadius=e.getShallow("borderRadius"),t.textBoxShadowColor=e.getShallow("shadowColor"),t.textBoxShadowBlur=e.getShallow("shadowBlur"),t.textBoxShadowOffsetX=e.getShallow("shadowOffsetX"),t.textBoxShadowOffsetY=e.getShallow("shadowOffsetY")),t.textShadowColor=e.getShallow("textShadowColor")||i.textShadowColor,t.textShadowBlur=e.getShallow("textShadowBlur")||i.textShadowBlur,t.textShadowOffsetX=e.getShallow("textShadowOffsetX")||i.textShadowOffsetX,t.textShadowOffsetY=e.getShallow("textShadowOffsetY")||i.textShadowOffsetY}function xo(t,e){return"auto"!==t?t:e&&e.autoColor?e.autoColor:null}function _o(t){var e=t.insideRollbackOpt;if(e&&null==t.textFill){var i,n=e.useInsideStyle,o=t.insideRawTextPosition,a=e.autoColor;!1!==n&&(!0===n||e.isRectText&&o&&"string"==typeof o&&o.indexOf("inside")>=0)?(i={textFill:null,textStroke:t.textStroke,textStrokeWidth:t.textStrokeWidth},t.textFill="#fff",null==t.textStroke&&(t.textStroke=a,null==t.textStrokeWidth&&(t.textStrokeWidth=2))):null!=a&&(i={textFill:null},t.textFill=a),i&&(t.insideRollback=i)}}function wo(t){var e=t.insideRollback;e&&(t.textFill=e.textFill,t.textStroke=e.textStroke,t.textStrokeWidth=e.textStrokeWidth,t.insideRollback=null)}function bo(t,e){var i=e||e.getModel("textStyle");return P([t.fontStyle||i&&i.getShallow("fontStyle")||"",t.fontWeight||i&&i.getShallow("fontWeight")||"",(t.fontSize||i&&i.getShallow("fontSize")||12)+"px",t.fontFamily||i&&i.getShallow("fontFamily")||"sans-serif"].join(" "))}function So(t,e,i,n,o,a){if("function"==typeof o&&(a=o,o=null),n&&n.isAnimationEnabled()){var r=t?"Update":"",s=n.getShallow("animationDuration"+r),l=n.getShallow("animationEasing"+r),u=n.getShallow("animationDelay"+r);"function"==typeof u&&(u=u(o,n.getAnimationDelayParams?n.getAnimationDelayParams(e,o):null)),"function"==typeof s&&(s=s(o)),s>0?e.animateTo(i,s,u||0,l,a,!!a):(e.stopAnimation(),e.attr(i),a&&a())}else e.stopAnimation(),e.attr(i),a&&a()}function Mo(t,e,i,n,o){So(!0,t,e,i,n,o)}function Io(t,e,i,n,o){So(!1,t,e,i,n,o)}function To(t,e){for(var i=_t([]);t&&t!==e;)bt(i,t.getLocalTransform(),i),t=t.parent;return i}function Ao(t,e,i){return e&&!c(e)&&(e=Tw.getLocalTransform(e)),i&&(e=Tt([],e)),Q([],t,e)}function Do(t,e,i){var n=0===e[4]||0===e[5]||0===e[0]?1:Math.abs(2*e[4]/e[0]),o=0===e[4]||0===e[5]||0===e[2]?1:Math.abs(2*e[4]/e[2]),a=["left"===t?-n:"right"===t?n:0,"top"===t?-o:"bottom"===t?o:0];return a=Ao(a,e,i),Math.abs(a[0])>Math.abs(a[1])?a[0]>0?"right":"left":a[1]>0?"bottom":"top"}function Co(t,e,i,n){function o(t){var e={position:F(t.position),rotation:t.rotation};return t.shape&&(e.shape=a({},t.shape)),e}if(t&&e){var r=function(t){var e={};return t.traverse(function(t){!t.isGroup&&t.anid&&(e[t.anid]=t)}),e}(t);e.traverse(function(t){if(!t.isGroup&&t.anid){var e=r[t.anid];if(e){var n=o(t);t.attr(o(e)),Mo(t,n,i,t.dataIndex)}}})}}function Lo(t,e){return f(t,function(t){var i=t[0];i=CM(i,e.x),i=LM(i,e.x+e.width);var n=t[1];return n=CM(n,e.y),n=LM(n,e.y+e.height),[i,n]})}function ko(t,e,i){var n=(e=a({rectHover:!0},e)).style={strokeNoScale:!0};if(i=i||{x:-1,y:-1,width:2,height:2},t)return 0===t.indexOf("image://")?(n.image=t.slice(8),r(n,i),new fi(e)):Un(t.replace("path://",""),e,i,"center")}function Po(t,e,i){this.parentModel=e,this.ecModel=i,this.option=t}function No(t,e,i){for(var n=0;n<e.length&&(!e[n]||null!=(t=t&&"object"==typeof t?t[e[n]]:null));n++);return null==t&&i&&(t=i.get(e)),t}function Oo(t,e){var i=WM(t).getParent;return i?i.call(t,e):t.parentModel}function Eo(t){return[t||"",HM++,Math.random().toFixed(5)].join("_")}function Ro(t){return t.replace(/^\s+/,"").replace(/\s+$/,"")}function zo(t,e,i,n){var o=e[1]-e[0],a=i[1]-i[0];if(0===o)return 0===a?i[0]:(i[0]+i[1])/2;if(n)if(o>0){if(t<=e[0])return i[0];if(t>=e[1])return i[1]}else{if(t>=e[0])return i[0];if(t<=e[1])return i[1]}else{if(t===e[0])return i[0];if(t===e[1])return i[1]}return(t-e[0])/o*a+i[0]}function Bo(t,e){switch(t){case"center":case"middle":t="50%";break;case"left":case"top":t="0%";break;case"right":case"bottom":t="100%"}return"string"==typeof t?Ro(t).match(/%$/)?parseFloat(t)/100*e:parseFloat(t):null==t?NaN:+t}function Vo(t,e,i){return null==e&&(e=10),e=Math.min(Math.max(0,e),20),t=(+t).toFixed(e),i?t:+t}function Go(t){return t.sort(function(t,e){return t-e}),t}function Fo(t){if(t=+t,isNaN(t))return 0;for(var e=1,i=0;Math.round(t*e)/e!==t;)e*=10,i++;return i}function Wo(t){var e=t.toString(),i=e.indexOf("e");if(i>0){var n=+e.slice(i+1);return n<0?-n:0}var o=e.indexOf(".");return o<0?0:e.length-1-o}function Ho(t,e){var i=Math.log,n=Math.LN10,o=Math.floor(i(t[1]-t[0])/n),a=Math.round(i(Math.abs(e[1]-e[0]))/n),r=Math.min(Math.max(-o+a,0),20);return isFinite(r)?r:20}function Zo(t,e,i){if(!t[e])return 0;var n=p(t,function(t,e){return t+(isNaN(e)?0:e)},0);if(0===n)return 0;for(var o=Math.pow(10,i),a=f(t,function(t){return(isNaN(t)?0:t)/n*o*100}),r=100*o,s=f(a,function(t){return Math.floor(t)}),l=p(s,function(t,e){return t+e},0),u=f(a,function(t,e){return t-s[e]});l<r;){for(var h=Number.NEGATIVE_INFINITY,c=null,d=0,g=u.length;d<g;++d)u[d]>h&&(h=u[d],c=d);++s[c],u[c]=0,++l}return s[e]/o}function Uo(t){var e=2*Math.PI;return(t%e+e)%e}function Xo(t){return t>-ZM&&t<ZM}function jo(t){if(t instanceof Date)return t;if("string"==typeof t){var e=XM.exec(t);if(!e)return new Date(NaN);if(e[8]){var i=+e[4]||0;return"Z"!==e[8].toUpperCase()&&(i-=e[8].slice(0,3)),new Date(Date.UTC(+e[1],+(e[2]||1)-1,+e[3]||1,i,+(e[5]||0),+e[6]||0,+e[7]||0))}return new Date(+e[1],+(e[2]||1)-1,+e[3]||1,+e[4]||0,+(e[5]||0),+e[6]||0,+e[7]||0)}return null==t?new Date(NaN):new Date(Math.round(t))}function Yo(t){return Math.pow(10,qo(t))}function qo(t){return Math.floor(Math.log(t)/Math.LN10)}function Ko(t,e){var i,n=qo(t),o=Math.pow(10,n),a=t/o;return i=e?a<1.5?1:a<2.5?2:a<4?3:a<7?5:10:a<1?1:a<2?2:a<3?3:a<5?5:10,t=i*o,n>=-20?+t.toFixed(n<0?-n:0):t}function $o(t){function e(t,i,n){return t.interval[n]<i.interval[n]||t.interval[n]===i.interval[n]&&(t.close[n]-i.close[n]==(n?-1:1)||!n&&e(t,i,1))}t.sort(function(t,i){return e(t,i,0)?-1:1});for(var i=-1/0,n=1,o=0;o<t.length;){for(var a=t[o].interval,r=t[o].close,s=0;s<2;s++)a[s]<=i&&(a[s]=i,r[s]=s?1:1-n),i=a[s],n=r[s];a[0]===a[1]&&r[0]*r[1]!=1?t.splice(o,1):o++}return t}function Jo(t){return t-parseFloat(t)>=0}function Qo(t){return isNaN(t)?"-":(t=(t+"").split("."))[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,"$1,")+(t.length>1?"."+t[1]:"")}function ta(t,e){return t=(t||"").toLowerCase().replace(/-(.)/g,function(t,e){return e.toUpperCase()}),e&&t&&(t=t.charAt(0).toUpperCase()+t.slice(1)),t}function ea(t){return null==t?"":(t+"").replace(qM,function(t,e){return KM[e]})}function ia(t,e,i){y(e)||(e=[e]);var n=e.length;if(!n)return"";for(var o=e[0].$vars||[],a=0;a<o.length;a++){var r=$M[a];t=t.replace(JM(r),JM(r,0))}for(var s=0;s<n;s++)for(var l=0;l<o.length;l++){var u=e[s][o[l]];t=t.replace(JM($M[l],s),i?ea(u):u)}return t}function na(t,e,i){return d(e,function(e,n){t=t.replace("{"+n+"}",i?ea(e):e)}),t}function oa(t,e){var i=(t=_(t)?{color:t,extraCssText:e}:t||{}).color,n=t.type,e=t.extraCssText,o=t.renderMode||"html",a=t.markerId||"X";return i?"html"===o?"subItem"===n?'<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:'+ea(i)+";"+(e||"")+'"></span>':'<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+ea(i)+";"+(e||"")+'"></span>':{renderMode:o,content:"{marker"+a+"|}  ",style:{color:i}}:""}function aa(t,e){return t+="","0000".substr(0,e-t.length)+t}function ra(t,e,i){"week"!==t&&"month"!==t&&"quarter"!==t&&"half-year"!==t&&"year"!==t||(t="MM-dd\nyyyy");var n=jo(e),o=i?"UTC":"",a=n["get"+o+"FullYear"](),r=n["get"+o+"Month"]()+1,s=n["get"+o+"Date"](),l=n["get"+o+"Hours"](),u=n["get"+o+"Minutes"](),h=n["get"+o+"Seconds"](),c=n["get"+o+"Milliseconds"]();return t=t.replace("MM",aa(r,2)).replace("M",r).replace("yyyy",a).replace("yy",a%100).replace("dd",aa(s,2)).replace("d",s).replace("hh",aa(l,2)).replace("h",l).replace("mm",aa(u,2)).replace("m",u).replace("ss",aa(h,2)).replace("s",h).replace("SSS",aa(c,3))}function sa(t){return t?t.charAt(0).toUpperCase()+t.substr(1):t}function la(t,e,i,n,o){var a=0,r=0;null==n&&(n=1/0),null==o&&(o=1/0);var s=0;e.eachChild(function(l,u){var h,c,d=l.position,f=l.getBoundingRect(),p=e.childAt(u+1),g=p&&p.getBoundingRect();if("horizontal"===t){var m=f.width+(g?-g.x+f.x:0);(h=a+m)>n||l.newline?(a=0,h=m,r+=s+i,s=f.height):s=Math.max(s,f.height)}else{var v=f.height+(g?-g.y+f.y:0);(c=r+v)>o||l.newline?(a+=s+i,r=0,c=v,s=f.width):s=Math.max(s,f.width)}l.newline||(d[0]=a,d[1]=r,"horizontal"===t?a=h+i:r=c+i)})}function ua(t,e,i){var n=e.width,o=e.height,a=Bo(t.x,n),r=Bo(t.y,o),s=Bo(t.x2,n),l=Bo(t.y2,o);return(isNaN(a)||isNaN(parseFloat(t.x)))&&(a=0),(isNaN(s)||isNaN(parseFloat(t.x2)))&&(s=n),(isNaN(r)||isNaN(parseFloat(t.y)))&&(r=0),(isNaN(l)||isNaN(parseFloat(t.y2)))&&(l=o),i=YM(i||0),{width:Math.max(s-a-i[1]-i[3],0),height:Math.max(l-r-i[0]-i[2],0)}}function ha(t,e,i){i=YM(i||0);var n=e.width,o=e.height,a=Bo(t.left,n),r=Bo(t.top,o),s=Bo(t.right,n),l=Bo(t.bottom,o),u=Bo(t.width,n),h=Bo(t.height,o),c=i[2]+i[0],d=i[1]+i[3],f=t.aspect;switch(isNaN(u)&&(u=n-s-d-a),isNaN(h)&&(h=o-l-c-r),null!=f&&(isNaN(u)&&isNaN(h)&&(f>n/o?u=.8*n:h=.8*o),isNaN(u)&&(u=f*h),isNaN(h)&&(h=u/f)),isNaN(a)&&(a=n-s-u-d),isNaN(r)&&(r=o-l-h-c),t.left||t.right){case"center":a=n/2-u/2-i[3];break;case"right":a=n-u-d}switch(t.top||t.bottom){case"middle":case"center":r=o/2-h/2-i[0];break;case"bottom":r=o-h-c}a=a||0,r=r||0,isNaN(u)&&(u=n-d-a-(s||0)),isNaN(h)&&(h=o-c-r-(l||0));var p=new de(a+i[3],r+i[0],u,h);return p.margin=i,p}function ca(t,e,i,n,o){var a=!o||!o.hv||o.hv[0],s=!o||!o.hv||o.hv[1],l=o&&o.boundingMode||"all";if(a||s){var u;if("raw"===l)u="group"===t.type?new de(0,0,+e.width||0,+e.height||0):t.getBoundingRect();else if(u=t.getBoundingRect(),t.needLocalTransform()){var h=t.getLocalTransform();(u=u.clone()).applyTransform(h)}e=ha(r({width:u.width,height:u.height},e),i,n);var c=t.position,d=a?e.x-u.x:0,f=s?e.y-u.y:0;t.attr("position","raw"===l?[d,f]:[c[0]+d,c[1]+f])}}function da(t,e){return null!=t[oI[e][0]]||null!=t[oI[e][1]]&&null!=t[oI[e][2]]}function fa(t,e,i){function n(i,n){var r={},l=0,u={},h=0;if(iI(i,function(e){u[e]=t[e]}),iI(i,function(t){o(e,t)&&(r[t]=u[t]=e[t]),a(r,t)&&l++,a(u,t)&&h++}),s[n])return a(e,i[1])?u[i[2]]=null:a(e,i[2])&&(u[i[1]]=null),u;if(2!==h&&l){if(l>=2)return r;for(var c=0;c<i.length;c++){var d=i[c];if(!o(r,d)&&o(t,d)){r[d]=t[d];break}}return r}return u}function o(t,e){return t.hasOwnProperty(e)}function a(t,e){return null!=t[e]&&"auto"!==t[e]}function r(t,e,i){iI(t,function(t){e[t]=i[t]})}!w(i)&&(i={});var s=i.ignoreSize;!y(s)&&(s=[s,s]);var l=n(oI[0],0),u=n(oI[1],1);r(oI[0],t,l),r(oI[1],t,u)}function pa(t){return ga({},t)}function ga(t,e){return e&&t&&iI(nI,function(i){e.hasOwnProperty(i)&&(t[i]=e[i])}),t}function ma(t,e){for(var i=t.length,n=0;n<i;n++)if(t[n].length>e)return t[n];return t[i-1]}function va(t){var e=t.get("coordinateSystem"),i={coordSysName:e,coordSysDims:[],axisMap:R(),categoryAxisMap:R()},n=dI[e];if(n)return n(t,i,i.axisMap,i.categoryAxisMap),i}function ya(t){return"category"===t.get("type")}function xa(t){this.fromDataset=t.fromDataset,this.data=t.data||(t.sourceFormat===mI?{}:[]),this.sourceFormat=t.sourceFormat||vI,this.seriesLayoutBy=t.seriesLayoutBy||xI,this.dimensionsDefine=t.dimensionsDefine,this.encodeDefine=t.encodeDefine&&R(t.encodeDefine),this.startIndex=t.startIndex||0,this.dimensionsDetectCount=t.dimensionsDetectCount}function _a(t){var e=t.option.source,i=vI;if(S(e))i=yI;else if(y(e)){0===e.length&&(i=pI);for(var n=0,o=e.length;n<o;n++){var a=e[n];if(null!=a){if(y(a)){i=pI;break}if(w(a)){i=gI;break}}}}else if(w(e)){for(var r in e)if(e.hasOwnProperty(r)&&c(e[r])){i=mI;break}}else if(null!=e)throw new Error("Invalid data");wI(t).sourceFormat=i}function wa(t){return wI(t).source}function ba(t){wI(t).datasetMap=R()}function Sa(t){var e=t.option,i=e.data,n=S(i)?yI:fI,o=!1,a=e.seriesLayoutBy,r=e.sourceHeader,s=e.dimensions,l=Ca(t);if(l){var u=l.option;i=u.source,n=wI(l).sourceFormat,o=!0,a=a||u.seriesLayoutBy,null==r&&(r=u.sourceHeader),s=s||u.dimensions}var h=Ma(i,n,a,r,s),c=e.encode;!c&&l&&(c=Da(t,l,i,n,a,h)),wI(t).source=new xa({data:i,fromDataset:o,seriesLayoutBy:a,sourceFormat:n,dimensionsDefine:h.dimensionsDefine,startIndex:h.startIndex,dimensionsDetectCount:h.dimensionsDetectCount,encodeDefine:c})}function Ma(t,e,i,n,o){if(!t)return{dimensionsDefine:Ia(o)};var a,r,s;if(e===pI)"auto"===n||null==n?Ta(function(t){null!=t&&"-"!==t&&(_(t)?null==r&&(r=1):r=0)},i,t,10):r=n?1:0,o||1!==r||(o=[],Ta(function(t,e){o[e]=null!=t?t:""},i,t)),a=o?o.length:i===_I?t.length:t[0]?t[0].length:null;else if(e===gI)o||(o=Aa(t),s=!0);else if(e===mI)o||(o=[],s=!0,d(t,function(t,e){o.push(e)}));else if(e===fI){var l=Li(t[0]);a=y(l)&&l.length||1}var u;return s&&d(o,function(t,e){"name"===(w(t)?t.name:t)&&(u=e)}),{startIndex:r,dimensionsDefine:Ia(o),dimensionsDetectCount:a,potentialNameDimIndex:u}}function Ia(t){if(t){var e=R();return f(t,function(t,i){if(null==(t=a({},w(t)?t:{name:t})).name)return t;t.name+="",null==t.displayName&&(t.displayName=t.name);var n=e.get(t.name);return n?t.name+="-"+n.count++:e.set(t.name,{count:1}),t})}}function Ta(t,e,i,n){if(null==n&&(n=1/0),e===_I)for(a=0;a<i.length&&a<n;a++)t(i[a]?i[a][0]:null,a);else for(var o=i[0]||[],a=0;a<o.length&&a<n;a++)t(o[a],a)}function Aa(t){for(var e,i=0;i<t.length&&!(e=t[i++]););if(e){var n=[];return d(e,function(t,e){n.push(e)}),n}}function Da(t,e,i,n,o,a){var r=va(t),s={},l=[],u=[],h=t.subType,c=R(["pie","map","funnel"]),f=R(["line","bar","pictorialBar","scatter","effectScatter","candlestick","boxplot"]);if(r&&null!=f.get(h)){var p=t.ecModel,g=wI(p).datasetMap,m=e.uid+"_"+o,v=g.get(m)||g.set(m,{categoryWayDim:1,valueWayDim:0});d(r.coordSysDims,function(t){if(null==r.firstCategoryDimIndex){e=v.valueWayDim++;s[t]=e,u.push(e)}else if(r.categoryAxisMap.get(t))s[t]=0,l.push(0);else{var e=v.categoryWayDim++;s[t]=e,u.push(e)}})}else if(null!=c.get(h)){for(var y,x=0;x<5&&null==y;x++)ka(i,n,o,a.dimensionsDefine,a.startIndex,x)||(y=x);if(null!=y){s.value=y;var _=a.potentialNameDimIndex||Math.max(y-1,0);u.push(_),l.push(_)}}return l.length&&(s.itemName=l),u.length&&(s.seriesName=u),s}function Ca(t){var e=t.option;if(!e.data)return t.ecModel.getComponent("dataset",e.datasetIndex||0)}function La(t,e){return ka(t.data,t.sourceFormat,t.seriesLayoutBy,t.dimensionsDefine,t.startIndex,e)}function ka(t,e,i,n,o,a){function r(t){return(null==t||!isFinite(t)||""===t)&&(!(!_(t)||"-"===t)||void 0)}var s;if(S(t))return!1;var l;if(n&&(l=w(l=n[a])?l.name:l),e===pI)if(i===_I){for(var u=t[a],h=0;h<(u||[]).length&&h<5;h++)if(null!=(s=r(u[o+h])))return s}else for(h=0;h<t.length&&h<5;h++){var c=t[o+h];if(c&&null!=(s=r(c[a])))return s}else if(e===gI){if(!l)return;for(h=0;h<t.length&&h<5;h++)if((d=t[h])&&null!=(s=r(d[l])))return s}else if(e===mI){if(!l)return;if(!(u=t[l])||S(u))return!1;for(h=0;h<u.length&&h<5;h++)if(null!=(s=r(u[h])))return s}else if(e===fI)for(h=0;h<t.length&&h<5;h++){var d=t[h],f=Li(d);if(!y(f))return!1;if(null!=(s=r(f[a])))return s}return!1}function Pa(t,e){if(e){var i=e.seiresIndex,n=e.seriesId,o=e.seriesName;return null!=i&&t.componentIndex!==i||null!=n&&t.id!==n||null!=o&&t.name!==o}}function Na(t,e){var o=t.color&&!t.colorLayer;d(e,function(e,a){"colorLayer"===a&&o||sI.hasClass(a)||("object"==typeof e?t[a]=t[a]?n(t[a],e,!1):i(e):null==t[a]&&(t[a]=e))})}function Oa(t){t=t,this.option={},this.option[bI]=1,this._componentsMap=R({series:[]}),this._seriesIndices,this._seriesIndicesMap,Na(t,this._theme.option),n(t,uI,!1),this.mergeOption(t)}function Ea(t,e){y(e)||(e=e?[e]:[]);var i={};return d(e,function(e){i[e]=(t.get(e)||[]).slice()}),i}function Ra(t,e,i){return e.type?e.type:i?i.subType:sI.determineSubType(t,e)}function za(t,e){t._seriesIndicesMap=R(t._seriesIndices=f(e,function(t){return t.componentIndex})||[])}function Ba(t,e){return e.hasOwnProperty("subType")?g(t,function(t){return t.subType===e.subType}):t}function Va(t){d(MI,function(e){this[e]=m(t[e],t)},this)}function Ga(){this._coordinateSystems=[]}function Fa(t){this._api=t,this._timelineOptions=[],this._mediaList=[],this._mediaDefault,this._currentMediaIndices=[],this._optionBackup,this._newBaseOption}function Wa(t,e,i){var n,o,a=[],r=[],s=t.timeline;if(t.baseOption&&(o=t.baseOption),(s||t.options)&&(o=o||{},a=(t.options||[]).slice()),t.media){o=o||{};var l=t.media;TI(l,function(t){t&&t.option&&(t.query?r.push(t):n||(n=t))})}return o||(o=t),o.timeline||(o.timeline=s),TI([o].concat(a).concat(f(r,function(t){return t.option})),function(t){TI(e,function(e){e(t,i)})}),{baseOption:o,timelineOptions:a,mediaDefault:n,mediaList:r}}function Ha(t,e,i){var n={width:e,height:i,aspectratio:e/i},o=!0;return d(t,function(t,e){var i=e.match(LI);if(i&&i[1]&&i[2]){var a=i[1],r=i[2].toLowerCase();Za(n[r],t,a)||(o=!1)}}),o}function Za(t,e,i){return"min"===i?t>=e:"max"===i?t<=e:t===e}function Ua(t,e){return t.join(",")===e.join(",")}function Xa(t,e){TI(e=e||{},function(e,i){if(null!=e){var n=t[i];if(sI.hasClass(i)){e=Di(e);var o=Pi(n=Di(n),e);t[i]=DI(o,function(t){return t.option&&t.exist?CI(t.exist,t.option,!0):t.exist||t.option})}else t[i]=CI(n,e,!0)}})}function ja(t){var e=t&&t.itemStyle;if(e)for(var i=0,o=NI.length;i<o;i++){var a=NI[i],r=e.normal,s=e.emphasis;r&&r[a]&&(t[a]=t[a]||{},t[a].normal?n(t[a].normal,r[a]):t[a].normal=r[a],r[a]=null),s&&s[a]&&(t[a]=t[a]||{},t[a].emphasis?n(t[a].emphasis,s[a]):t[a].emphasis=s[a],s[a]=null)}}function Ya(t,e,i){if(t&&t[e]&&(t[e].normal||t[e].emphasis)){var n=t[e].normal,o=t[e].emphasis;n&&(i?(t[e].normal=t[e].emphasis=null,r(t[e],n)):t[e]=n),o&&(t.emphasis=t.emphasis||{},t.emphasis[e]=o)}}function qa(t){Ya(t,"itemStyle"),Ya(t,"lineStyle"),Ya(t,"areaStyle"),Ya(t,"label"),Ya(t,"labelLine"),Ya(t,"upperLabel"),Ya(t,"edgeLabel")}function Ka(t,e){var i=PI(t)&&t[e],n=PI(i)&&i.textStyle;if(n)for(var o=0,a=jb.length;o<a;o++){var e=jb[o];n.hasOwnProperty(e)&&(i[e]=n[e])}}function $a(t){t&&(qa(t),Ka(t,"label"),t.emphasis&&Ka(t.emphasis,"label"))}function Ja(t){if(PI(t)){ja(t),qa(t),Ka(t,"label"),Ka(t,"upperLabel"),Ka(t,"edgeLabel"),t.emphasis&&(Ka(t.emphasis,"label"),Ka(t.emphasis,"upperLabel"),Ka(t.emphasis,"edgeLabel"));var e=t.markPoint;e&&(ja(e),$a(e));var i=t.markLine;i&&(ja(i),$a(i));var n=t.markArea;n&&$a(n);var o=t.data;if("graph"===t.type){o=o||t.nodes;var a=t.links||t.edges;if(a&&!S(a))for(s=0;s<a.length;s++)$a(a[s]);d(t.categories,function(t){qa(t)})}if(o&&!S(o))for(s=0;s<o.length;s++)$a(o[s]);if((e=t.markPoint)&&e.data)for(var r=e.data,s=0;s<r.length;s++)$a(r[s]);if((i=t.markLine)&&i.data)for(var l=i.data,s=0;s<l.length;s++)y(l[s])?($a(l[s][0]),$a(l[s][1])):$a(l[s]);"gauge"===t.type?(Ka(t,"axisLabel"),Ka(t,"title"),Ka(t,"detail")):"treemap"===t.type?(Ya(t.breadcrumb,"itemStyle"),d(t.levels,function(t){qa(t)})):"tree"===t.type&&qa(t.leaves)}}function Qa(t){return y(t)?t:t?[t]:[]}function tr(t){return(y(t)?t[0]:t)||{}}function er(t,e){e=e.split(",");for(var i=t,n=0;n<e.length&&null!=(i=i&&i[e[n]]);n++);return i}function ir(t,e,i,n){e=e.split(",");for(var o,a=t,r=0;r<e.length-1;r++)null==a[o=e[r]]&&(a[o]={}),a=a[o];(n||null==a[e[r]])&&(a[e[r]]=i)}function nr(t){d(EI,function(e){e[0]in t&&!(e[1]in t)&&(t[e[1]]=t[e[0]])})}function or(t){d(t,function(e,i){var n=[],o=[NaN,NaN],a=[e.stackResultDimension,e.stackedOverDimension],r=e.data,s=e.isStackedByIndex,l=r.map(a,function(a,l,u){var h=r.get(e.stackedDimension,u);if(isNaN(h))return o;var c,d;s?d=r.getRawIndex(u):c=r.get(e.stackedByDimension,u);for(var f=NaN,p=i-1;p>=0;p--){var g=t[p];if(s||(d=g.data.rawIndexOf(g.stackedByDimension,c)),d>=0){var m=g.data.getByRawIndex(g.stackResultDimension,d);if(h>=0&&m>0||h<=0&&m<0){h+=m,f=m;break}}}return n[0]=h,n[1]=f,n});r.hostModel.setData(l),e.data=l})}function ar(t,e){xa.isInstance(t)||(t=xa.seriesDataToSource(t)),this._source=t;var i=this._data=t.data,n=t.sourceFormat;n===yI&&(this._offset=0,this._dimSize=e,this._data=i),a(this,VI[n===pI?n+"_"+t.seriesLayoutBy:n])}function rr(){return this._data.length}function sr(t){return this._data[t]}function lr(t){for(var e=0;e<t.length;e++)this._data.push(t[e])}function ur(t,e,i,n){return null!=i?t[i]:t}function hr(t,e,i,n){return cr(t[n],this._dimensionInfos[e])}function cr(t,e){var i=e&&e.type;if("ordinal"===i){var n=e&&e.ordinalMeta;return n?n.parseAndCollect(t):t}return"time"===i&&"number"!=typeof t&&null!=t&&"-"!==t&&(t=+jo(t)),null==t||""===t?NaN:+t}function dr(t,e,i){if(t){var n=t.getRawDataItem(e);if(null!=n){var o,a,r=t.getProvider().getSource().sourceFormat,s=t.getDimensionInfo(i);return s&&(o=s.name,a=s.index),GI[r](n,e,a,o)}}}function fr(t,e,i){if(t){var n=t.getProvider().getSource().sourceFormat;if(n===fI||n===gI){var o=t.getRawDataItem(e);return n!==fI||w(o)||(o=null),o?o[i]:void 0}}}function pr(t){return new gr(t)}function gr(t){t=t||{},this._reset=t.reset,this._plan=t.plan,this._count=t.count,this._onDirty=t.onDirty,this._dirty=!0,this.context}function mr(t,e,i,n,o,a){UI.reset(i,n,o,a),t._callingProgress=e,t._callingProgress({start:i,end:n,count:n-i,next:UI.next},t.context)}function vr(t,e){t._dueIndex=t._outputDueEnd=t._dueEnd=0,t._settedOutputEnd=null;var i,n;!e&&t._reset&&((i=t._reset(t.context))&&i.progress&&(n=i.forceFirstProgress,i=i.progress),y(i)&&!i.length&&(i=null)),t._progress=i,t._modBy=t._modDataCount=null;var o=t._downstream;return o&&o.dirty(),n}function yr(t){var e=t.name;Oi(t)||(t.name=xr(t)||e)}function xr(t){var e=t.getRawData(),i=[];return d(e.mapDimension("seriesName",!0),function(t){var n=e.getDimensionInfo(t);n.displayName&&i.push(n.displayName)}),i.join(" ")}function _r(t){return t.model.getRawData().count()}function wr(t){var e=t.model;return e.setData(e.getRawData().cloneShallow()),br}function br(t,e){t.end>e.outputData.count()&&e.model.getRawData().cloneShallow(e.outputData)}function Sr(t,e){d(t.CHANGABLE_METHODS,function(i){t.wrapMethod(i,v(Mr,e))})}function Mr(t){var e=Ir(t);e&&e.setOutputEnd(this.count())}function Ir(t){var e=(t.ecModel||{}).scheduler,i=e&&e.getPipeline(t.uid);if(i){var n=i.currentTask;if(n){var o=n.agentStubMap;o&&(n=o.get(t.uid))}return n}}function Tr(){this.group=new tb,this.uid=Eo("viewChart"),this.renderTask=pr({plan:Cr,reset:Lr}),this.renderTask.context={view:this}}function Ar(t,e){if(t&&(t.trigger(e),"group"===t.type))for(var i=0;i<t.childCount();i++)Ar(t.childAt(i),e)}function Dr(t,e,i){var n=zi(t,e);null!=n?d(Di(n),function(e){Ar(t.getItemGraphicEl(e),i)}):t.eachItemGraphicEl(function(t){Ar(t,i)})}function Cr(t){return JI(t.model)}function Lr(t){var e=t.model,i=t.ecModel,n=t.api,o=t.payload,a=e.pipelineContext.progressiveRender,r=t.view,s=o&&$I(o).updateMethod,l=a?"incrementalPrepareRender":s&&r[s]?s:"render";return"render"!==l&&r[l](e,i,n,o),tT[l]}function kr(t,e,i){function n(){h=(new Date).getTime(),c=null,t.apply(r,s||[])}var o,a,r,s,l,u=0,h=0,c=null;e=e||0;var d=function(){o=(new Date).getTime(),r=this,s=arguments;var t=l||e,d=l||i;l=null,a=o-(d?u:h)-t,clearTimeout(c),d?c=setTimeout(n,t):a>=0?n():c=setTimeout(n,-a),u=o};return d.clear=function(){c&&(clearTimeout(c),c=null)},d.debounceNextCall=function(t){l=t},d}function Pr(t,e,i,n){var o=t[e];if(o){var a=o[eT]||o,r=o[nT];if(o[iT]!==i||r!==n){if(null==i||!n)return t[e]=a;(o=t[e]=kr(a,i,"debounce"===n))[eT]=a,o[nT]=n,o[iT]=i}return o}}function Nr(t,e){var i=t[e];i&&i[eT]&&(t[e]=i[eT])}function Or(t,e,i,n){this.ecInstance=t,this.api=e,this.unfinished;var i=this._dataProcessorHandlers=i.slice(),n=this._visualHandlers=n.slice();this._allHandlers=i.concat(n),this._stageTaskMap=R()}function Er(t,e,i,n,o){function a(t,e){return t.setDirty&&(!t.dirtyMap||t.dirtyMap.get(e.__pipeline.id))}o=o||{};var r;d(e,function(e,s){if(!o.visualType||o.visualType===e.visualType){var l=t._stageTaskMap.get(e.uid),u=l.seriesTaskMap,h=l.overallTask;if(h){var c,d=h.agentStubMap;d.each(function(t){a(o,t)&&(t.dirty(),c=!0)}),c&&h.dirty(),uT(h,n);var f=t.getPerformArgs(h,o.block);d.each(function(t){t.perform(f)}),r|=h.perform(f)}else u&&u.each(function(s,l){a(o,s)&&s.dirty();var u=t.getPerformArgs(s,o.block);u.skip=!e.performRawSeries&&i.isSeriesFiltered(s.context.model),uT(s,n),r|=s.perform(u)})}}),t.unfinished|=r}function Rr(t,e,i,n,o){function a(i){var a=i.uid,s=r.get(a)||r.set(a,pr({plan:Wr,reset:Hr,count:Ur}));s.context={model:i,ecModel:n,api:o,useClearVisual:e.isVisual&&!e.isLayout,plan:e.plan,reset:e.reset,scheduler:t},Xr(t,i,s)}var r=i.seriesTaskMap||(i.seriesTaskMap=R()),s=e.seriesType,l=e.getTargetSeries;e.createOnAllSeries?n.eachRawSeries(a):s?n.eachRawSeriesByType(s,a):l&&l(n,o).each(a);var u=t._pipelineMap;r.each(function(t,e){u.get(e)||(t.dispose(),r.removeKey(e))})}function zr(t,e,i,n,o){function a(e){var i=e.uid,n=s.get(i);n||(n=s.set(i,pr({reset:Vr,onDirty:Fr})),r.dirty()),n.context={model:e,overallProgress:h,modifyOutputEnd:c},n.agent=r,n.__block=h,Xr(t,e,n)}var r=i.overallTask=i.overallTask||pr({reset:Br});r.context={ecModel:n,api:o,overallReset:e.overallReset,scheduler:t};var s=r.agentStubMap=r.agentStubMap||R(),l=e.seriesType,u=e.getTargetSeries,h=!0,c=e.modifyOutputEnd;l?n.eachRawSeriesByType(l,a):u?u(n,o).each(a):(h=!1,d(n.getSeries(),a));var f=t._pipelineMap;s.each(function(t,e){f.get(e)||(t.dispose(),r.dirty(),s.removeKey(e))})}function Br(t){t.overallReset(t.ecModel,t.api,t.payload)}function Vr(t,e){return t.overallProgress&&Gr}function Gr(){this.agent.dirty(),this.getDownstream().dirty()}function Fr(){this.agent&&this.agent.dirty()}function Wr(t){return t.plan&&t.plan(t.model,t.ecModel,t.api,t.payload)}function Hr(t){t.useClearVisual&&t.data.clearAllVisual();var e=t.resetDefines=Di(t.reset(t.model,t.ecModel,t.api,t.payload));return e.length>1?f(e,function(t,e){return Zr(e)}):hT}function Zr(t){return function(e,i){var n=i.data,o=i.resetDefines[t];if(o&&o.dataEach)for(var a=e.start;a<e.end;a++)o.dataEach(n,a);else o&&o.progress&&o.progress(e,n)}}function Ur(t){return t.data.count()}function Xr(t,e,i){var n=e.uid,o=t._pipelineMap.get(n);!o.head&&(o.head=i),o.tail&&o.tail.pipe(i),o.tail=i,i.__idxInPipeline=o.count++,i.__pipeline=o}function jr(t){cT=null;try{t(dT,fT)}catch(t){}return cT}function Yr(t,e){for(var i in e.prototype)t[i]=B}function qr(t){for(_(t)&&(t=(new DOMParser).parseFromString(t,"text/xml")),9===t.nodeType&&(t=t.firstChild);"svg"!==t.nodeName.toLowerCase()||1!==t.nodeType;)t=t.nextSibling;return t}function Kr(){this._defs={},this._root=null,this._isDefine=!1,this._isText=!1}function $r(t,e){for(var i=t.firstChild;i;){if(1===i.nodeType){var n=i.getAttribute("offset");n=n.indexOf("%")>0?parseInt(n,10)/100:n?parseFloat(n):0;var o=i.getAttribute("stop-color")||"#000000";e.addColorStop(n,o)}i=i.nextSibling}}function Jr(t,e){t&&t.__inheritedStyle&&(e.__inheritedStyle||(e.__inheritedStyle={}),r(e.__inheritedStyle,t.__inheritedStyle))}function Qr(t){for(var e=P(t).split(xT),i=[],n=0;n<e.length;n+=2){var o=parseFloat(e[n]),a=parseFloat(e[n+1]);i.push([o,a])}return i}function ts(t,e,i,n){var o=e.__inheritedStyle||{},r="text"===e.type;if(1===t.nodeType&&(is(t,e),a(o,ns(t)),!n))for(var s in bT)if(bT.hasOwnProperty(s)){var l=t.getAttribute(s);null!=l&&(o[bT[s]]=l)}var u=r?"textFill":"fill",h=r?"textStroke":"stroke";e.style=e.style||new ub;var c=e.style;null!=o.fill&&c.set(u,es(o.fill,i)),null!=o.stroke&&c.set(h,es(o.stroke,i)),d(["lineWidth","opacity","fillOpacity","strokeOpacity","miterLimit","fontSize"],function(t){var e="lineWidth"===t&&r?"textStrokeWidth":t;null!=o[t]&&c.set(e,parseFloat(o[t]))}),o.textBaseline&&"auto"!==o.textBaseline||(o.textBaseline="alphabetic"),"alphabetic"===o.textBaseline&&(o.textBaseline="bottom"),"start"===o.textAlign&&(o.textAlign="left"),"end"===o.textAlign&&(o.textAlign="right"),d(["lineDashOffset","lineCap","lineJoin","fontWeight","fontFamily","fontStyle","textAlign","textBaseline"],function(t){null!=o[t]&&c.set(t,o[t])}),o.lineDash&&(e.style.lineDash=P(o.lineDash).split(xT)),c[h]&&"none"!==c[h]&&(e[h]=!0),e.__inheritedStyle=o}function es(t,e){var i=e&&t&&t.match(ST);return i?e[P(i[1])]:t}function is(t,e){var i=t.getAttribute("transform");if(i){var n=null,o=[];(i=i.replace(/,/g," ")).replace(MT,function(t,e,i){o.push(e,i)});for(var a=o.length-1;a>0;a-=2){var r=o[a],s=o[a-1];switch(n=n||xt(),s){case"translate":r=P(r).split(xT),St(n,n,[parseFloat(r[0]),parseFloat(r[1]||0)]);break;case"scale":r=P(r).split(xT),It(n,n,[parseFloat(r[0]),parseFloat(r[1]||r[0])]);break;case"rotate":r=P(r).split(xT),Mt(n,n,parseFloat(r[0]));break;case"skew":r=P(r).split(xT),console.warn("Skew transform is not supported yet");break;case"matrix":r=P(r).split(xT);n[0]=parseFloat(r[0]),n[1]=parseFloat(r[1]),n[2]=parseFloat(r[2]),n[3]=parseFloat(r[3]),n[4]=parseFloat(r[4]),n[5]=parseFloat(r[5])}}}e.setLocalTransform(n)}function ns(t){var e=t.getAttribute("style"),i={};if(!e)return i;var n={};IT.lastIndex=0;for(var o;null!=(o=IT.exec(e));)n[o[1]]=o[2];for(var a in bT)bT.hasOwnProperty(a)&&null!=n[a]&&(i[bT[a]]=n[a]);return i}function os(t,e,i){var n=e/t.width,o=i/t.height,a=Math.min(n,o);return{scale:[a,a],position:[-(t.x+t.width/2)*a+e/2,-(t.y+t.height/2)*a+i/2]}}function as(t,e){return(new Kr).parse(t,e)}function rs(t){return function(e,i,n){e=e&&e.toLowerCase(),fw.prototype[t].call(this,e,i,n)}}function ss(){fw.call(this)}function ls(t,e,n){function o(t,e){return t.__prio-e.__prio}n=n||{},"string"==typeof e&&(e=KT[e]),this.id,this.group,this._dom=t;var a=this._zr=Ii(t,{renderer:n.renderer||"canvas",devicePixelRatio:n.devicePixelRatio,width:n.width,height:n.height});this._throttledZrFlush=kr(m(a.flush,a),17),(e=i(e))&&zI(e,!0),this._theme=e,this._chartsViews=[],this._chartsMap={},this._componentsViews=[],this._componentsMap={},this._coordSysMgr=new Ga;var r=this._api=Ts(this);_e(qT,o),_e(XT,o),this._scheduler=new Or(this,r,XT,qT),fw.call(this,this._ecEventProcessor=new As),this._messageCenter=new ss,this._initEvents(),this.resize=m(this.resize,this),this._pendingActions=[],a.animation.on("frame",this._onframe,this),ms(a,this),N(this)}function us(t,e,i){var n,o=this._model,a=this._coordSysMgr.getCoordinateSystems();e=Vi(o,e);for(var r=0;r<a.length;r++){var s=a[r];if(s[t]&&null!=(n=s[t](o,e,i)))return n}}function hs(t){var e=t._model,i=t._scheduler;i.restorePipelines(e),i.prepareStageTasks(),vs(t,"component",e,i),vs(t,"chart",e,i),i.plan()}function cs(t,e,i,n,o){function a(n){n&&n.__alive&&n[e]&&n[e](n.__model,r,t._api,i)}var r=t._model;if(n){var s={};s[n+"Id"]=i[n+"Id"],s[n+"Index"]=i[n+"Index"],s[n+"Name"]=i[n+"Name"];var l={mainType:n,query:s};o&&(l.subType=o);var u=i.excludeSeriesId;null!=u&&(u=R(Di(u))),r&&r.eachComponent(l,function(e){u&&null!=u.get(e.id)||a(t["series"===n?"_chartsMap":"_componentsMap"][e.__viewId])},t)}else LT(t._componentsViews.concat(t._chartsViews),a)}function ds(t,e){var i=t._chartsMap,n=t._scheduler;e.eachSeries(function(t){n.updateStreamModes(t,i[t.__viewId])})}function fs(t,e){var i=t.type,n=t.escapeConnect,o=ZT[i],s=o.actionInfo,l=(s.update||"update").split(":"),u=l.pop();l=null!=l[0]&&NT(l[0]),this[BT]=!0;var h=[t],c=!1;t.batch&&(c=!0,h=f(t.batch,function(e){return e=r(a({},e),t),e.batch=null,e}));var d,p=[],g="highlight"===i||"downplay"===i;LT(h,function(t){d=o.action(t,this._model,this._api),(d=d||a({},t)).type=s.event||d.type,p.push(d),g?cs(this,u,t,"series"):l&&cs(this,u,t,l.main,l.sub)},this),"none"===u||g||l||(this[VT]?(hs(this),WT.update.call(this,t),this[VT]=!1):WT[u].call(this,t)),d=c?{type:s.event||i,escapeConnect:n,batch:p}:p[0],this[BT]=!1,!e&&this._messageCenter.trigger(d.type,d)}function ps(t){for(var e=this._pendingActions;e.length;){var i=e.shift();fs.call(this,i,t)}}function gs(t){!t&&this.trigger("updated")}function ms(t,e){t.on("rendered",function(){e.trigger("rendered"),!t.animation.isFinished()||e[VT]||e._scheduler.unfinished||e._pendingActions.length||e.trigger("finished")})}function vs(t,e,i,n){function o(t){var e="_ec_"+t.id+"_"+t.type,o=s[e];if(!o){var h=NT(t.type);(o=new(a?YI.getClass(h.main,h.sub):Tr.getClass(h.sub))).init(i,u),s[e]=o,r.push(o),l.add(o.group)}t.__viewId=o.__id=e,o.__alive=!0,o.__model=t,o.group.__ecComponentInfo={mainType:t.mainType,index:t.componentIndex},!a&&n.prepareView(o,t,i,u)}for(var a="component"===e,r=a?t._componentsViews:t._chartsViews,s=a?t._componentsMap:t._chartsMap,l=t._zr,u=t._api,h=0;h<r.length;h++)r[h].__alive=!1;a?i.eachComponent(function(t,e){"series"!==t&&o(e)}):i.eachSeries(o);for(h=0;h<r.length;){var c=r[h];c.__alive?h++:(!a&&c.renderTask.dispose(),l.remove(c.group),c.dispose(i,u),r.splice(h,1),delete s[c.__id],c.__id=c.group.__ecComponentInfo=null)}}function ys(t){t.clearColorPalette(),t.eachSeries(function(t){t.clearColorPalette()})}function xs(t,e,i,n){_s(t,e,i,n),LT(t._chartsViews,function(t){t.__alive=!1}),ws(t,e,i,n),LT(t._chartsViews,function(t){t.__alive||t.remove(e,i)})}function _s(t,e,i,n,o){LT(o||t._componentsViews,function(t){var o=t.__model;t.render(o,e,i,n),Is(o,t)})}function ws(t,e,i,n,o){var a,r=t._scheduler;e.eachSeries(function(e){var i=t._chartsMap[e.__viewId];i.__alive=!0;var s=i.renderTask;r.updatePayload(s,n),o&&o.get(e.uid)&&s.dirty(),a|=s.perform(r.getPerformArgs(s)),i.group.silent=!!e.get("silent"),Is(e,i),Ms(e,i)}),r.unfinished|=a,Ss(t._zr,e),rT(t._zr.dom,e)}function bs(t,e){LT(YT,function(i){i(t,e)})}function Ss(t,e){var i=t.storage,n=0;i.traverse(function(t){t.isGroup||n++}),n>e.get("hoverLayerThreshold")&&!U_.node&&i.traverse(function(t){t.isGroup||(t.useHoverLayer=!0)})}function Ms(t,e){var i=t.get("blendMode")||null;e.group.traverse(function(t){t.isGroup||t.style.blend!==i&&t.setStyle("blend",i),t.eachPendingDisplayable&&t.eachPendingDisplayable(function(t){t.setStyle("blend",i)})})}function Is(t,e){var i=t.get("z"),n=t.get("zlevel");e.group.traverse(function(t){"group"!==t.type&&(null!=i&&(t.z=i),null!=n&&(t.zlevel=n))})}function Ts(t){var e=t._coordSysMgr;return a(new Va(t),{getCoordinateSystems:m(e.getCoordinateSystems,e),getComponentByElement:function(e){for(;e;){var i=e.__ecComponentInfo;if(null!=i)return t._model.getComponent(i.mainType,i.index);e=e.parent}}})}function As(){this.eventInfo}function Ds(t){function e(t,e){for(var n=0;n<t.length;n++)t[n][i]=e}var i="__connectUpdateStatus";LT(UT,function(n,o){t._messageCenter.on(o,function(n){if(QT[t.group]&&0!==t[i]){if(n&&n.escapeConnect)return;var o=t.makeActionFromEvent(n),a=[];LT(JT,function(e){e!==t&&e.group===t.group&&a.push(e)}),e(a,0),LT(a,function(t){1!==t[i]&&t.dispatchAction(o)}),e(a,2)}})})}function Cs(t){QT[t]=!1}function Ls(t){return JT[Wi(t,iA)]}function ks(t,e){KT[t]=e}function Ps(t){jT.push(t)}function Ns(t,e){Bs(XT,t,e,OT)}function Os(t,e,i){"function"==typeof e&&(i=e,e="");var n=PT(t)?t.type:[t,t={event:e}][0];t.event=(t.event||n).toLowerCase(),e=t.event,CT(GT.test(n)&&GT.test(e)),ZT[n]||(ZT[n]={action:i,actionInfo:t}),UT[e]=n}function Es(t,e){Ga.register(t,e)}function Rs(t,e){Bs(qT,t,e,ET,"layout")}function zs(t,e){Bs(qT,t,e,RT,"visual")}function Bs(t,e,i,n,o){(kT(e)||PT(e))&&(i=e,e=n);var a=Or.wrapStageHandler(i,o);return a.__prio=e,a.__raw=i,t.push(a),a}function Vs(t,e){$T[t]=e}function Gs(t){return sI.extend(t)}function Fs(t){return YI.extend(t)}function Ws(t){return jI.extend(t)}function Hs(t){return Tr.extend(t)}function Zs(t){return t}function Us(t,e,i,n,o){this._old=t,this._new=e,this._oldKeyGetter=i||Zs,this._newKeyGetter=n||Zs,this.context=o}function Xs(t,e,i,n,o){for(var a=0;a<t.length;a++){var r="_ec_"+o[n](t[a],a),s=e[r];null==s?(i.push(r),e[r]=a):(s.length||(e[r]=s=[s]),s.push(a))}}function js(t){var e={},i=e.encode={},n=R(),o=[],a=[];d(t.dimensions,function(e){var r=t.getDimensionInfo(e),s=r.coordDim;if(s){var l=i[s];i.hasOwnProperty(s)||(l=i[s]=[]),l[r.coordDimIndex]=e,r.isExtraCoord||(n.set(s,1),qs(r.type)&&(o[0]=e)),r.defaultTooltip&&a.push(e)}oA.each(function(t,e){var n=i[e];i.hasOwnProperty(e)||(n=i[e]=[]);var o=r.otherDims[e];null!=o&&!1!==o&&(n[o]=r.name)})});var r=[],s={};n.each(function(t,e){var n=i[e];s[e]=n[0],r=r.concat(n)}),e.dataDimsOnCoord=r,e.encodeFirstDimNotExtra=s;var l=i.label;l&&l.length&&(o=l.slice());var u=i.tooltip;return u&&u.length?a=u.slice():a.length||(a=o.slice()),i.defaultedLabel=o,i.defaultedTooltip=a,e}function Ys(t){return"category"===t?"ordinal":"time"===t?"time":"float"}function qs(t){return!("ordinal"===t||"time"===t)}function Ks(t){return t._rawCount>65535?uA:cA}function $s(t){var e=t.constructor;return e===Array?t.slice():new e(t)}function Js(t,e){d(dA.concat(e.__wrappedMethods||[]),function(i){e.hasOwnProperty(i)&&(t[i]=e[i])}),t.__wrappedMethods=e.__wrappedMethods,d(fA,function(n){t[n]=i(e[n])}),t._calculationInfo=a(e._calculationInfo)}function Qs(t,e,i,n,o){var a=lA[e.type],r=n-1,s=e.name,l=t[s][r];if(l&&l.length<i){for(var u=new a(Math.min(o-r*i,i)),h=0;h<l.length;h++)u[h]=l[h];t[s][r]=u}for(var c=n*i;c<o;c+=i)t[s].push(new a(Math.min(o-c,i)))}function tl(t){var e=t._invertedIndicesMap;d(e,function(i,n){var o=t._dimensionInfos[n].ordinalMeta;if(o){i=e[n]=new hA(o.categories.length);for(a=0;a<i.length;a++)i[a]=rA;for(var a=0;a<t._count;a++)i[t.get(n,a)]=a}})}function el(t,e,i){var n;if(null!=e){var o=t._chunkSize,a=Math.floor(i/o),r=i%o,s=t.dimensions[e],l=t._storage[s][a];if(l){n=l[r];var u=t._dimensionInfos[s].ordinalMeta;u&&u.categories.length&&(n=u.categories[n])}}return n}function il(t){return t}function nl(t){return t<this._count&&t>=0?this._indices[t]:-1}function ol(t,e){var i=t._idList[e];return null==i&&(i=el(t,t._idDimIdx,e)),null==i&&(i=sA+e),i}function al(t){return y(t)||(t=[t]),t}function rl(t,e){var i=t.dimensions,n=new pA(f(i,t.getDimensionInfo,t),t.hostModel);Js(n,t);for(var o=n._storage={},a=t._storage,r=0;r<i.length;r++){var s=i[r];a[s]&&(l(e,s)>=0?(o[s]=sl(a[s]),n._rawExtent[s]=ll(),n._extent[s]=null):o[s]=a[s])}return n}function sl(t){for(var e=new Array(t.length),i=0;i<t.length;i++)e[i]=$s(t[i]);return e}function ll(){return[1/0,-1/0]}function ul(t,e,n){function o(t,e,i){null!=oA.get(e)?t.otherDims[e]=i:(t.coordDim=e,t.coordDimIndex=i,h.set(e,!0))}xa.isInstance(e)||(e=xa.seriesDataToSource(e)),n=n||{},t=(t||[]).slice();for(var s=(n.dimsDef||[]).slice(),l=R(n.encodeDef),u=R(),h=R(),c=[],f=hl(e,t,s,n.dimCount),p=0;p<f;p++){var g=s[p]=a({},w(s[p])?s[p]:{name:s[p]}),m=g.name,v=c[p]={otherDims:{}};null!=m&&null==u.get(m)&&(v.name=v.displayName=m,u.set(m,p)),null!=g.type&&(v.type=g.type),null!=g.displayName&&(v.displayName=g.displayName)}l.each(function(t,e){if(1===(t=Di(t).slice()).length&&t[0]<0)l.set(e,!1);else{var i=l.set(e,[]);d(t,function(t,n){_(t)&&(t=u.get(t)),null!=t&&t<f&&(i[n]=t,o(c[t],e,n))})}});var y=0;d(t,function(t,e){var n,t,a,s;if(_(t))n=t,t={};else{n=t.name;var u=t.ordinalMeta;t.ordinalMeta=null,(t=i(t)).ordinalMeta=u,a=t.dimsDef,s=t.otherDims,t.name=t.coordDim=t.coordDimIndex=t.dimsDef=t.otherDims=null}var h=l.get(n);if(!1!==h){if(!(h=Di(h)).length)for(var f=0;f<(a&&a.length||1);f++){for(;y<c.length&&null!=c[y].coordDim;)y++;y<c.length&&h.push(y++)}d(h,function(e,i){var l=c[e];if(o(r(l,t),n,i),null==l.name&&a){var u=a[i];!w(u)&&(u={name:u}),l.name=l.displayName=u.name,l.defaultTooltip=u.defaultTooltip}s&&r(l.otherDims,s)})}});var x=n.generateCoord,b=n.generateCoordCount,S=null!=b;b=x?b||1:0;for(var M=x||"value",I=0;I<f;I++)null==(v=c[I]=c[I]||{}).coordDim&&(v.coordDim=cl(M,h,S),v.coordDimIndex=0,(!x||b<=0)&&(v.isExtraCoord=!0),b--),null==v.name&&(v.name=cl(v.coordDim,u)),null==v.type&&La(e,I,v.name)&&(v.type="ordinal");return c}function hl(t,e,i,n){var o=Math.max(t.dimensionsDetectCount||1,e.length,i.length,n||0);return d(e,function(t){var e=t.dimsDef;e&&(o=Math.max(o,e.length))}),o}function cl(t,e,i){if(i||null!=e.get(t)){for(var n=0;null!=e.get(t+n);)n++;t+=n}return e.set(t,!0),t}function dl(t,e,i){var n,o,a,r,s=(i=i||{}).byIndex,l=i.stackedCoordDimension,u=!(!t||!t.get("stack"));if(d(e,function(t,i){_(t)&&(e[i]=t={name:t}),u&&!t.isExtraCoord&&(s||n||!t.ordinalMeta||(n=t),o||"ordinal"===t.type||"time"===t.type||l&&l!==t.coordDim||(o=t))}),!o||s||n||(s=!0),o){a="__\0ecstackresult",r="__\0ecstackedover",n&&(n.createInvertedIndices=!0);var h=o.coordDim,c=o.type,f=0;d(e,function(t){t.coordDim===h&&f++}),e.push({name:a,coordDim:h,coordDimIndex:f,type:c,isExtraCoord:!0,isCalculationCoord:!0}),f++,e.push({name:r,coordDim:r,coordDimIndex:f,type:c,isExtraCoord:!0,isCalculationCoord:!0})}return{stackedDimension:o&&o.name,stackedByDimension:n&&n.name,isStackedByIndex:s,stackedOverDimension:r,stackResultDimension:a}}function fl(t,e){return!!e&&e===t.getCalculationInfo("stackedDimension")}function pl(t,e){return fl(t,e)?t.getCalculationInfo("stackResultDimension"):e}function gl(t,e,i){i=i||{},xa.isInstance(t)||(t=xa.seriesDataToSource(t));var n,o=e.get("coordinateSystem"),a=Ga.get(o),r=va(e);r&&(n=f(r.coordSysDims,function(t){var e={name:t},i=r.axisMap.get(t);if(i){var n=i.get("type");e.type=Ys(n)}return e})),n||(n=a&&(a.getDimensionsInfo?a.getDimensionsInfo():a.dimensions.slice())||["x","y"]);var s,l,u=vA(t,{coordDimensions:n,generateCoord:i.generateCoord});r&&d(u,function(t,e){var i=t.coordDim,n=r.categoryAxisMap.get(i);n&&(null==s&&(s=e),t.ordinalMeta=n.getOrdinalMeta()),null!=t.otherDims.itemName&&(l=!0)}),l||null==s||(u[s].otherDims.itemName=0);var h=dl(e,u),c=new pA(u,e);c.setCalculationInfo(h);var p=null!=s&&ml(t)?function(t,e,i,n){return n===s?i:this.defaultDimValueGetter(t,e,i,n)}:null;return c.hasItemOption=!1,c.initData(t,null,p),c}function ml(t){if(t.sourceFormat===fI){var e=vl(t.data||[]);return null!=e&&!y(Li(e))}}function vl(t){for(var e=0;e<t.length&&null==t[e];)e++;return t[e]}function yl(t){this._setting=t||{},this._extent=[1/0,-1/0],this._interval=0,this.init&&this.init.apply(this,arguments)}function xl(t){this.categories=t.categories||[],this._needCollect=t.needCollect,this._deduplication=t.deduplication,this._map}function _l(t){return t._map||(t._map=R(t.categories))}function wl(t){return w(t)&&null!=t.value?t.value:t+""}function bl(t,e,i,n){var o={},a=t[1]-t[0],r=o.interval=Ko(a/e,!0);null!=i&&r<i&&(r=o.interval=i),null!=n&&r>n&&(r=o.interval=n);var s=o.intervalPrecision=Sl(r);return Il(o.niceTickExtent=[wA(Math.ceil(t[0]/r)*r,s),wA(Math.floor(t[1]/r)*r,s)],t),o}function Sl(t){return Wo(t)+2}function Ml(t,e,i){t[e]=Math.max(Math.min(t[e],i[1]),i[0])}function Il(t,e){!isFinite(t[0])&&(t[0]=e[0]),!isFinite(t[1])&&(t[1]=e[1]),Ml(t,0,e),Ml(t,1,e),t[0]>t[1]&&(t[0]=t[1])}function Tl(t,e,i,n){var o=[];if(!t)return o;e[0]<i[0]&&o.push(e[0]);for(var a=i[0];a<=i[1]&&(o.push(a),(a=wA(a+t,n))!==o[o.length-1]);)if(o.length>1e4)return[];return e[1]>(o.length?o[o.length-1]:i[1])&&o.push(e[1]),o}function Al(t){return t.get("stack")||MA+t.seriesIndex}function Dl(t){return t.dim+t.index}function Cl(t){var e=[],i=t.axis;if("category"===i.type){for(var n=i.getBandWidth(),o=0;o<t.count;o++)e.push(r({bandWidth:n,axisKey:"axis0",stackId:MA+o},t));for(var a=Pl(e),s=[],o=0;o<t.count;o++){var l=a.axis0[MA+o];l.offsetCenter=l.offset+l.width/2,s.push(l)}return s}}function Ll(t,e){var i=[];return e.eachSeriesByType(t,function(t){El(t)&&!Rl(t)&&i.push(t)}),i}function kl(t){var e=[];return d(t,function(t){var i=t.getData(),n=t.coordinateSystem.getBaseAxis(),o=n.getExtent(),a="category"===n.type?n.getBandWidth():Math.abs(o[1]-o[0])/i.count(),r=Bo(t.get("barWidth"),a),s=Bo(t.get("barMaxWidth"),a),l=t.get("barGap"),u=t.get("barCategoryGap");e.push({bandWidth:a,barWidth:r,barMaxWidth:s,barGap:l,barCategoryGap:u,axisKey:Dl(n),stackId:Al(t)})}),Pl(e)}function Pl(t){var e={};d(t,function(t,i){var n=t.axisKey,o=t.bandWidth,a=e[n]||{bandWidth:o,remainedWidth:o,autoWidthCount:0,categoryGap:"20%",gap:"30%",stacks:{}},r=a.stacks;e[n]=a;var s=t.stackId;r[s]||a.autoWidthCount++,r[s]=r[s]||{width:0,maxWidth:0};var l=t.barWidth;l&&!r[s].width&&(r[s].width=l,l=Math.min(a.remainedWidth,l),a.remainedWidth-=l);var u=t.barMaxWidth;u&&(r[s].maxWidth=u);var h=t.barGap;null!=h&&(a.gap=h);var c=t.barCategoryGap;null!=c&&(a.categoryGap=c)});var i={};return d(e,function(t,e){i[e]={};var n=t.stacks,o=t.bandWidth,a=Bo(t.categoryGap,o),r=Bo(t.gap,1),s=t.remainedWidth,l=t.autoWidthCount,u=(s-a)/(l+(l-1)*r);u=Math.max(u,0),d(n,function(t,e){var i=t.maxWidth;i&&i<u&&(i=Math.min(i,s),t.width&&(i=Math.min(i,t.width)),s-=i,t.width=i,l--)}),u=(s-a)/(l+(l-1)*r),u=Math.max(u,0);var h,c=0;d(n,function(t,e){t.width||(t.width=u),h=t,c+=t.width*(1+r)}),h&&(c-=h.width*r);var f=-c/2;d(n,function(t,n){i[e][n]=i[e][n]||{offset:f,width:t.width},f+=t.width*(1+r)})}),i}function Nl(t,e,i){if(t&&e){var n=t[Dl(e)];return null!=n&&null!=i&&(n=n[Al(i)]),n}}function Ol(t,e){var i=Ll(t,e),n=kl(i),o={};d(i,function(t){var e=t.getData(),i=t.coordinateSystem,a=i.getBaseAxis(),r=Al(t),s=n[Dl(a)][r],l=s.offset,u=s.width,h=i.getOtherAxis(a),c=t.get("barMinHeight")||0;o[r]=o[r]||[],e.setLayout({offset:l,size:u});for(var d=e.mapDimension(h.dim),f=e.mapDimension(a.dim),p=fl(e,d),g=h.isHorizontal(),m=zl(a,h,p),v=0,y=e.count();v<y;v++){var x=e.get(d,v),_=e.get(f,v);if(!isNaN(x)){var w=x>=0?"p":"n",b=m;p&&(o[r][_]||(o[r][_]={p:m,n:m}),b=o[r][_][w]);var S,M,I,T;if(g)S=b,M=(A=i.dataToPoint([x,_]))[1]+l,I=A[0]-m,T=u,Math.abs(I)<c&&(I=(I<0?-1:1)*c),p&&(o[r][_][w]+=I);else{var A=i.dataToPoint([_,x]);S=A[0]+l,M=b,I=u,T=A[1]-m,Math.abs(T)<c&&(T=(T<=0?-1:1)*c),p&&(o[r][_][w]+=T)}e.setItemLayout(v,{x:S,y:M,width:I,height:T})}}},this)}function El(t){return t.coordinateSystem&&"cartesian2d"===t.coordinateSystem.type}function Rl(t){return t.pipelineContext&&t.pipelineContext.large}function zl(t,e,i){var n,o,a=e.getGlobalExtent();a[0]>a[1]?(n=a[1],o=a[0]):(n=a[0],o=a[1]);var r=e.toGlobalCoord(e.dataToCoord(0));return r<n&&(r=n),r>o&&(r=o),r}function Bl(t,e){return RA(t,EA(e))}function Vl(t,e){var i,n,o,a=t.type,r=e.getMin(),s=e.getMax(),l=null!=r,u=null!=s,h=t.getExtent();"ordinal"===a?i=e.getCategories().length:(y(n=e.get("boundaryGap"))||(n=[n||0,n||0]),"boolean"==typeof n[0]&&(n=[0,0]),n[0]=Bo(n[0],1),n[1]=Bo(n[1],1),o=h[1]-h[0]||Math.abs(h[0])),null==r&&(r="ordinal"===a?i?0:NaN:h[0]-n[0]*o),null==s&&(s="ordinal"===a?i?i-1:NaN:h[1]+n[1]*o),"dataMin"===r?r=h[0]:"function"==typeof r&&(r=r({min:h[0],max:h[1]})),"dataMax"===s?s=h[1]:"function"==typeof s&&(s=s({min:h[0],max:h[1]})),(null==r||!isFinite(r))&&(r=NaN),(null==s||!isFinite(s))&&(s=NaN),t.setBlank(I(r)||I(s)||"ordinal"===a&&!t.getOrdinalMeta().categories.length),e.getNeedCrossZero()&&(r>0&&s>0&&!l&&(r=0),r<0&&s<0&&!u&&(s=0));var c=e.ecModel;if(c&&"time"===a){var f,p=Ll("bar",c);if(d(p,function(t){f|=t.getBaseAxis()===e.axis}),f){var g=kl(p),m=Gl(r,s,e,g);r=m.min,s=m.max}}return[r,s]}function Gl(t,e,i,n){var o=i.axis.getExtent(),a=o[1]-o[0],r=Nl(n,i.axis);if(void 0===r)return{min:t,max:e};var s=1/0;d(r,function(t){s=Math.min(t.offset,s)});var l=-1/0;d(r,function(t){l=Math.max(t.offset+t.width,l)}),s=Math.abs(s),l=Math.abs(l);var u=s+l,h=e-t,c=h/(1-(s+l)/a)-h;return e+=c*(l/u),t-=c*(s/u),{min:t,max:e}}function Fl(t,e){var i=Vl(t,e),n=null!=e.getMin(),o=null!=e.getMax(),a=e.get("splitNumber");"log"===t.type&&(t.base=e.get("logBase"));var r=t.type;t.setExtent(i[0],i[1]),t.niceExtent({splitNumber:a,fixMin:n,fixMax:o,minInterval:"interval"===r||"time"===r?e.get("minInterval"):null,maxInterval:"interval"===r||"time"===r?e.get("maxInterval"):null});var s=e.get("interval");null!=s&&t.setInterval&&t.setInterval(s)}function Wl(t,e){if(e=e||t.get("type"))switch(e){case"category":return new _A(t.getOrdinalMeta?t.getOrdinalMeta():t.getCategories(),[1/0,-1/0]);case"value":return new SA;default:return(yl.getClass(e)||SA).create(t)}}function Hl(t){var e=t.scale.getExtent(),i=e[0],n=e[1];return!(i>0&&n>0||i<0&&n<0)}function Zl(t){var e=t.getLabelModel().get("formatter"),i="category"===t.type?t.scale.getExtent()[0]:null;return"string"==typeof e?e=function(e){return function(i){return i=t.scale.getLabel(i),e.replace("{value}",null!=i?i:"")}}(e):"function"==typeof e?function(n,o){return null!=i&&(o=n-i),e(Ul(t,n),o)}:function(e){return t.scale.getLabel(e)}}function Ul(t,e){return"category"===t.type?t.scale.getLabel(e):e}function Xl(t){var e=t.model,i=t.scale;if(e.get("axisLabel.show")&&!i.isBlank()){var n,o,a="category"===t.type,r=i.getExtent();o=a?i.count():(n=i.getTicks()).length;var s,l=t.getLabelModel(),u=Zl(t),h=1;o>40&&(h=Math.ceil(o/40));for(var c=0;c<o;c+=h){var d=u(n?n[c]:r[0]+c),f=jl(l.getTextRect(d),l.get("rotate")||0);s?s.union(f):s=f}return s}}function jl(t,e){var i=e*Math.PI/180,n=t.plain(),o=n.width,a=n.height,r=o*Math.cos(i)+a*Math.sin(i),s=o*Math.sin(i)+a*Math.cos(i);return new de(n.x,n.y,r,s)}function Yl(t){var e=t.get("interval");return null==e?"auto":e}function ql(t){return"category"===t.type&&0===Yl(t.getLabelModel())}function Kl(t,e){if("image"!==this.type){var i=this.style,n=this.shape;n&&"line"===n.symbolType?i.stroke=t:this.__isEmptyBrush?(i.stroke=t,i.fill=e||"#fff"):(i.fill&&(i.fill=t),i.stroke&&(i.stroke=t)),this.dirty(!1)}}function $l(t,e,i,n,o,a,r){var s=0===t.indexOf("empty");s&&(t=t.substr(5,1).toLowerCase()+t.substr(6));var l;return l=0===t.indexOf("image://")?Xn(t.slice(8),new de(e,i,n,o),r?"center":"cover"):0===t.indexOf("path://")?Un(t.slice(7),{},new de(e,i,n,o),r?"center":"cover"):new qA({shape:{symbolType:t,x:e,y:i,width:n,height:o}}),l.__isEmptyBrush=s,l.setColor=Kl,l.setColor(a),l}function Jl(t,e){return Math.abs(t-e)<JA}function Ql(t,e,i){var n=0,o=t[0];if(!o)return!1;for(var a=1;a<t.length;a++){var r=t[a];n+=bn(o[0],o[1],r[0],r[1],e,i),o=r}var s=t[0];return Jl(o[0],s[0])&&Jl(o[1],s[1])||(n+=bn(o[0],o[1],s[0],s[1],e,i)),0!==n}function tu(t,e,i){if(this.name=t,this.geometries=e,i)i=[i[0],i[1]];else{var n=this.getBoundingRect();i=[n.x+n.width/2,n.y+n.height/2]}this.center=i}function eu(t){if(!t.UTF8Encoding)return t;var e=t.UTF8Scale;null==e&&(e=1024);for(var i=t.features,n=0;n<i.length;n++)for(var o=i[n].geometry,a=o.coordinates,r=o.encodeOffsets,s=0;s<a.length;s++){var l=a[s];if("Polygon"===o.type)a[s]=iu(l,r[s],e);else if("MultiPolygon"===o.type)for(var u=0;u<l.length;u++){var h=l[u];l[u]=iu(h,r[s][u],e)}}return t.UTF8Encoding=!1,t}function iu(t,e,i){for(var n=[],o=e[0],a=e[1],r=0;r<t.length;r+=2){var s=t.charCodeAt(r)-64,l=t.charCodeAt(r+1)-64;s=s>>1^-(1&s),l=l>>1^-(1&l),o=s+=o,a=l+=a,n.push([s/i,l/i])}return n}function nu(t){return"category"===t.type?au(t):lu(t)}function ou(t,e){return"category"===t.type?su(t,e):{ticks:t.scale.getTicks()}}function au(t){var e=t.getLabelModel(),i=ru(t,e);return!e.get("show")||t.scale.isBlank()?{labels:[],labelCategoryInterval:i.labelCategoryInterval}:i}function ru(t,e){var i=uu(t,"labels"),n=Yl(e),o=hu(i,n);if(o)return o;var a,r;return a=x(n)?mu(t,n):gu(t,r="auto"===n?du(t):n),cu(i,n,{labels:a,labelCategoryInterval:r})}function su(t,e){var i=uu(t,"ticks"),n=Yl(e),o=hu(i,n);if(o)return o;var a,r;if(e.get("show")&&!t.scale.isBlank()||(a=[]),x(n))a=mu(t,n,!0);else if("auto"===n){var s=ru(t,t.getLabelModel());r=s.labelCategoryInterval,a=f(s.labels,function(t){return t.tickValue})}else a=gu(t,r=n,!0);return cu(i,n,{ticks:a,tickCategoryInterval:r})}function lu(t){var e=t.scale.getTicks(),i=Zl(t);return{labels:f(e,function(e,n){return{formattedLabel:i(e,n),rawLabel:t.scale.getLabel(e),tickValue:e}})}}function uu(t,e){return tD(t)[e]||(tD(t)[e]=[])}function hu(t,e){for(var i=0;i<t.length;i++)if(t[i].key===e)return t[i].value}function cu(t,e,i){return t.push({key:e,value:i}),i}function du(t){var e=tD(t).autoInterval;return null!=e?e:tD(t).autoInterval=t.calculateCategoryInterval()}function fu(t){var e=pu(t),i=Zl(t),n=(e.axisRotate-e.labelRotate)/180*Math.PI,o=t.scale,a=o.getExtent(),r=o.count();if(a[1]-a[0]<1)return 0;var s=1;r>40&&(s=Math.max(1,Math.floor(r/40)));for(var l=a[0],u=t.dataToCoord(l+1)-t.dataToCoord(l),h=Math.abs(u*Math.cos(n)),c=Math.abs(u*Math.sin(n)),d=0,f=0;l<=a[1];l+=s){var p=0,g=0,m=ke(i(l),e.font,"center","top");p=1.3*m.width,g=1.3*m.height,d=Math.max(d,p,7),f=Math.max(f,g,7)}var v=d/h,y=f/c;isNaN(v)&&(v=1/0),isNaN(y)&&(y=1/0);var x=Math.max(0,Math.floor(Math.min(v,y))),_=tD(t.model),w=_.lastAutoInterval,b=_.lastTickCount;return null!=w&&null!=b&&Math.abs(w-x)<=1&&Math.abs(b-r)<=1&&w>x?x=w:(_.lastTickCount=r,_.lastAutoInterval=x),x}function pu(t){var e=t.getLabelModel();return{axisRotate:t.getRotate?t.getRotate():t.isHorizontal&&!t.isHorizontal()?90:0,labelRotate:e.get("rotate")||0,font:e.getFont()}}function gu(t,e,i){function n(t){l.push(i?t:{formattedLabel:o(t),rawLabel:a.getLabel(t),tickValue:t})}var o=Zl(t),a=t.scale,r=a.getExtent(),s=t.getLabelModel(),l=[],u=Math.max((e||0)+1,1),h=r[0],c=a.count();0!==h&&u>1&&c/u>2&&(h=Math.round(Math.ceil(h/u)*u));var d=ql(t),f=s.get("showMinLabel")||d,p=s.get("showMaxLabel")||d;f&&h!==r[0]&&n(r[0]);for(var g=h;g<=r[1];g+=u)n(g);return p&&g!==r[1]&&n(r[1]),l}function mu(t,e,i){var n=t.scale,o=Zl(t),a=[];return d(n.getTicks(),function(t){var r=n.getLabel(t);e(t,r)&&a.push(i?t:{formattedLabel:o(t),rawLabel:r,tickValue:t})}),a}function vu(t,e){var i=(t[1]-t[0])/e/2;t[0]+=i,t[1]-=i}function yu(t,e,i,n,o){function a(t,e){return h?t>e:t<e}var r=e.length;if(t.onBand&&!n&&r){var s,l=t.getExtent();if(1===r)e[0].coord=l[0],s=e[1]={coord:l[0]};else{var u=e[1].coord-e[0].coord;d(e,function(t){t.coord-=u/2;var e=e||0;e%2>0&&(t.coord-=u/(2*(e+1)))}),s={coord:e[r-1].coord+u},e.push(s)}var h=l[0]>l[1];a(e[0].coord,l[0])&&(o?e[0].coord=l[0]:e.shift()),o&&a(l[0],e[0].coord)&&e.unshift({coord:l[0]}),a(l[1],s.coord)&&(o?s.coord=l[1]:e.pop()),o&&a(s.coord,l[1])&&e.push({coord:l[1]})}}function xu(t,e){var i=t.mapDimension("defaultedLabel",!0),n=i.length;if(1===n)return dr(t,e,i[0]);if(n){for(var o=[],a=0;a<i.length;a++){var r=dr(t,e,i[a]);o.push(r)}return o.join(" ")}}function _u(t,e,i){tb.call(this),this.updateData(t,e,i)}function wu(t){return[t[0]/2,t[1]/2]}function bu(t,e){this.parent.drift(t,e)}function Su(){!ro(this)&&Iu.call(this)}function Mu(){!ro(this)&&Tu.call(this)}function Iu(){if(!this.incremental&&!this.useHoverLayer){var t=this.__symbolOriginalScale,e=t[1]/t[0];this.animateTo({scale:[Math.max(1.1*t[0],t[0]+3),Math.max(1.1*t[1],t[1]+3*e)]},400,"elasticOut")}}function Tu(){this.incremental||this.useHoverLayer||this.animateTo({scale:this.__symbolOriginalScale},400,"elasticOut")}function Au(t){this.group=new tb,this._symbolCtor=t||_u}function Du(t,e,i,n){return e&&!isNaN(e[0])&&!isNaN(e[1])&&!(n.isIgnore&&n.isIgnore(i))&&!(n.clipShape&&!n.clipShape.contain(e[0],e[1]))&&"none"!==t.getItemVisual(i,"symbol")}function Cu(t){return null==t||w(t)||(t={isIgnore:t}),t||{}}function Lu(t){var e=t.hostModel;return{itemStyle:e.getModel("itemStyle").getItemStyle(["color"]),hoverItemStyle:e.getModel("emphasis.itemStyle").getItemStyle(),symbolRotate:e.get("symbolRotate"),symbolOffset:e.get("symbolOffset"),hoverAnimation:e.get("hoverAnimation"),labelModel:e.getModel("label"),hoverLabelModel:e.getModel("emphasis.label"),cursorStyle:e.get("cursor")}}function ku(t,e,i){var n,o=t.getBaseAxis(),a=t.getOtherAxis(o),r=Pu(a,i),s=o.dim,l=a.dim,u=e.mapDimension(l),h=e.mapDimension(s),c="x"===l||"radius"===l?1:0,d=f(t.dimensions,function(t){return e.mapDimension(t)}),p=e.getCalculationInfo("stackResultDimension");return(n|=fl(e,d[0]))&&(d[0]=p),(n|=fl(e,d[1]))&&(d[1]=p),{dataDimsForPoint:d,valueStart:r,valueAxisDim:l,baseAxisDim:s,stacked:!!n,valueDim:u,baseDim:h,baseDataOffset:c,stackedOverDimension:e.getCalculationInfo("stackedOverDimension")}}function Pu(t,e){var i=0,n=t.scale.getExtent();return"start"===e?i=n[0]:"end"===e?i=n[1]:n[0]>0?i=n[0]:n[1]<0&&(i=n[1]),i}function Nu(t,e,i,n){var o=NaN;t.stacked&&(o=i.get(i.getCalculationInfo("stackedOverDimension"),n)),isNaN(o)&&(o=t.valueStart);var a=t.baseDataOffset,r=[];return r[a]=i.get(t.baseDim,n),r[1-a]=o,e.dataToPoint(r)}function Ou(t,e){var i=[];return e.diff(t).add(function(t){i.push({cmd:"+",idx:t})}).update(function(t,e){i.push({cmd:"=",idx:e,idx1:t})}).remove(function(t){i.push({cmd:"-",idx:t})}).execute(),i}function Eu(t){return isNaN(t[0])||isNaN(t[1])}function Ru(t,e,i,n,o,a,r,s,l,u,h){return"none"!==u&&u?zu.apply(this,arguments):Bu.apply(this,arguments)}function zu(t,e,i,n,o,a,r,s,l,u,h){for(var c=0,d=i,f=0;f<n;f++){var p=e[d];if(d>=o||d<0)break;if(Eu(p)){if(h){d+=a;continue}break}if(d===i)t[a>0?"moveTo":"lineTo"](p[0],p[1]);else if(l>0){var g=e[c],m="y"===u?1:0,v=(p[m]-g[m])*l;vD(xD,g),xD[m]=g[m]+v,vD(_D,p),_D[m]=p[m]-v,t.bezierCurveTo(xD[0],xD[1],_D[0],_D[1],p[0],p[1])}else t.lineTo(p[0],p[1]);c=d,d+=a}return f}function Bu(t,e,i,n,o,a,r,s,l,u,h){for(var c=0,d=i,f=0;f<n;f++){var p=e[d];if(d>=o||d<0)break;if(Eu(p)){if(h){d+=a;continue}break}if(d===i)t[a>0?"moveTo":"lineTo"](p[0],p[1]),vD(xD,p);else if(l>0){var g=d+a,m=e[g];if(h)for(;m&&Eu(e[g]);)m=e[g+=a];var v=.5,y=e[c];if(!(m=e[g])||Eu(m))vD(_D,p);else{Eu(m)&&!h&&(m=p),U(yD,m,y);var x,_;if("x"===u||"y"===u){var w="x"===u?0:1;x=Math.abs(p[w]-y[w]),_=Math.abs(p[w]-m[w])}else x=uw(p,y),_=uw(p,m);mD(_D,p,yD,-l*(1-(v=_/(_+x))))}pD(xD,xD,s),gD(xD,xD,r),pD(_D,_D,s),gD(_D,_D,r),t.bezierCurveTo(xD[0],xD[1],_D[0],_D[1],p[0],p[1]),mD(xD,p,yD,l*v)}else t.lineTo(p[0],p[1]);c=d,d+=a}return f}function Vu(t,e){var i=[1/0,1/0],n=[-1/0,-1/0];if(e)for(var o=0;o<t.length;o++){var a=t[o];a[0]<i[0]&&(i[0]=a[0]),a[1]<i[1]&&(i[1]=a[1]),a[0]>n[0]&&(n[0]=a[0]),a[1]>n[1]&&(n[1]=a[1])}return{min:e?i:n,max:e?n:i}}function Gu(t,e){if(t.length===e.length){for(var i=0;i<t.length;i++){var n=t[i],o=e[i];if(n[0]!==o[0]||n[1]!==o[1])return}return!0}}function Fu(t){return"number"==typeof t?t:t?.5:0}function Wu(t){var e=t.getGlobalExtent();if(t.onBand){var i=t.getBandWidth()/2-1,n=e[1]>e[0]?1:-1;e[0]+=n*i,e[1]-=n*i}return e}function Hu(t,e,i){if(!i.valueDim)return[];for(var n=[],o=0,a=e.count();o<a;o++)n.push(Nu(i,t,e,o));return n}function Zu(t,e,i,n){var o=Wu(t.getAxis("x")),a=Wu(t.getAxis("y")),r=t.getBaseAxis().isHorizontal(),s=Math.min(o[0],o[1]),l=Math.min(a[0],a[1]),u=Math.max(o[0],o[1])-s,h=Math.max(a[0],a[1])-l;if(i)s-=.5,u+=.5,l-=.5,h+=.5;else{var c=n.get("lineStyle.width")||2,d=n.get("clipOverflow")?c/2:Math.max(u,h);r?(l-=d,h+=2*d):(s-=d,u+=2*d)}var f=new vM({shape:{x:s,y:l,width:u,height:h}});return e&&(f.shape[r?"width":"height"]=0,Io(f,{shape:{width:u,height:h}},n)),f}function Uu(t,e,i,n){var o=t.getAngleAxis(),a=t.getRadiusAxis().getExtent().slice();a[0]>a[1]&&a.reverse();var r=o.getExtent(),s=Math.PI/180;i&&(a[0]-=.5,a[1]+=.5);var l=new uM({shape:{cx:Vo(t.cx,1),cy:Vo(t.cy,1),r0:Vo(a[0],1),r:Vo(a[1],1),startAngle:-r[0]*s,endAngle:-r[1]*s,clockwise:o.inverse}});return e&&(l.shape.endAngle=-r[0]*s,Io(l,{shape:{endAngle:-r[1]*s}},n)),l}function Xu(t,e,i,n){return"polar"===t.type?Uu(t,e,i,n):Zu(t,e,i,n)}function ju(t,e,i){for(var n=e.getBaseAxis(),o="x"===n.dim||"radius"===n.dim?0:1,a=[],r=0;r<t.length-1;r++){var s=t[r+1],l=t[r];a.push(l);var u=[];switch(i){case"end":u[o]=s[o],u[1-o]=l[1-o],a.push(u);break;case"middle":var h=(l[o]+s[o])/2,c=[];u[o]=c[o]=h,u[1-o]=l[1-o],c[1-o]=s[1-o],a.push(u),a.push(c);break;default:u[o]=l[o],u[1-o]=s[1-o],a.push(u)}}return t[r]&&a.push(t[r]),a}function Yu(t,e){var i=t.getVisual("visualMeta");if(i&&i.length&&t.count()&&"cartesian2d"===e.type){for(var n,o,a=i.length-1;a>=0;a--){var r=i[a].dimension,s=t.dimensions[r],l=t.getDimensionInfo(s);if("x"===(n=l&&l.coordDim)||"y"===n){o=i[a];break}}if(o){var u=e.getAxis(n),h=f(o.stops,function(t){return{coord:u.toGlobalCoord(u.dataToCoord(t.value)),color:t.color}}),c=h.length,p=o.outerColors.slice();c&&h[0].coord>h[c-1].coord&&(h.reverse(),p.reverse());var g=h[0].coord-10,m=h[c-1].coord+10,v=m-g;if(v<.001)return"transparent";d(h,function(t){t.offset=(t.coord-g)/v}),h.push({offset:c?h[c-1].offset:.5,color:p[1]||"transparent"}),h.unshift({offset:c?h[0].offset:.5,color:p[0]||"transparent"});var y=new IM(0,0,0,0,h,!0);return y[n]=g,y[n+"2"]=m,y}}}function qu(t,e,i){var n=t.get("showAllSymbol"),o="auto"===n;if(!n||o){var a=i.getAxesByScale("ordinal")[0];if(a&&(!o||!Ku(a,e))){var r=e.mapDimension(a.dim),s={};return d(a.getViewLabels(),function(t){s[t.tickValue]=1}),function(t){return!s.hasOwnProperty(e.get(r,t))}}}}function Ku(t,e){var i=t.getExtent(),n=Math.abs(i[1]-i[0])/t.scale.count();isNaN(n)&&(n=0);for(var o=e.count(),a=Math.max(1,Math.round(o/5)),r=0;r<o;r+=a)if(1.5*_u.getSymbolSize(e,r)[t.isHorizontal()?1:0]>n)return!1;return!0}function $u(t){return this._axes[t]}function Ju(t){AD.call(this,t)}function Qu(t,e){return e.type||(e.data?"category":"value")}function th(t,e,i){return t.getCoordSysModel()===e}function eh(t,e,i){this._coordsMap={},this._coordsList=[],this._axesMap={},this._axesList=[],this._initCartesian(t,e,i),this.model=t}function ih(t,e,i,n){function o(t){return t.dim+"_"+t.index}i.getAxesOnZeroOf=function(){return a?[a]:[]};var a,r=t[e],s=i.model,l=s.get("axisLine.onZero"),u=s.get("axisLine.onZeroAxisIndex");if(l){if(null!=u)nh(r[u])&&(a=r[u]);else for(var h in r)if(r.hasOwnProperty(h)&&nh(r[h])&&!n[o(r[h])]){a=r[h];break}a&&(n[o(a)]=!0)}}function nh(t){return t&&"category"!==t.type&&"time"!==t.type&&Hl(t)}function oh(t,e){var i=t.getExtent(),n=i[0]+i[1];t.toGlobalCoord="x"===t.dim?function(t){return t+e}:function(t){return n-t+e},t.toLocalCoord="x"===t.dim?function(t){return t-e}:function(t){return n-t+e}}function ah(t,e){return f(RD,function(e){return t.getReferringComponents(e)[0]})}function rh(t){return"cartesian2d"===t.get("coordinateSystem")}function sh(t){var e={componentType:t.mainType,componentIndex:t.componentIndex};return e[t.mainType+"Index"]=t.componentIndex,e}function lh(t,e,i,n){var o,a,r=Uo(i-t.rotation),s=n[0]>n[1],l="start"===e&&!s||"start"!==e&&s;return Xo(r-zD/2)?(a=l?"bottom":"top",o="center"):Xo(r-1.5*zD)?(a=l?"top":"bottom",o="center"):(a="middle",o=r<1.5*zD&&r>zD/2?l?"left":"right":l?"right":"left"),{rotation:r,textAlign:o,textVerticalAlign:a}}function uh(t){var e=t.get("tooltip");return t.get("silent")||!(t.get("triggerEvent")||e&&e.show)}function hh(t,e,i){if(!ql(t.axis)){var n=t.get("axisLabel.showMinLabel"),o=t.get("axisLabel.showMaxLabel");e=e||[],i=i||[];var a=e[0],r=e[1],s=e[e.length-1],l=e[e.length-2],u=i[0],h=i[1],c=i[i.length-1],d=i[i.length-2];!1===n?(ch(a),ch(u)):dh(a,r)&&(n?(ch(r),ch(h)):(ch(a),ch(u))),!1===o?(ch(s),ch(c)):dh(l,s)&&(o?(ch(l),ch(d)):(ch(s),ch(c)))}}function ch(t){t&&(t.ignore=!0)}function dh(t,e,i){var n=t&&t.getBoundingRect().clone(),o=e&&e.getBoundingRect().clone();if(n&&o){var a=_t([]);return Mt(a,a,-t.rotation),n.applyTransform(bt([],a,t.getLocalTransform())),o.applyTransform(bt([],a,e.getLocalTransform())),n.intersect(o)}}function fh(t){return"middle"===t||"center"===t}function ph(t,e,i){var n=e.axis;if(e.get("axisTick.show")&&!n.scale.isBlank()){for(var o=e.getModel("axisTick"),a=o.getModel("lineStyle"),s=o.get("length"),l=n.getTicksCoords(),u=[],h=[],c=t._transform,d=[],f=0;f<l.length;f++){var p=l[f].coord;u[0]=p,u[1]=0,h[0]=p,h[1]=i.tickDirection*s,c&&(Q(u,u,c),Q(h,h,c));var g=new xM(qn({anid:"tick_"+l[f].tickValue,shape:{x1:u[0],y1:u[1],x2:h[0],y2:h[1]},style:r(a.getLineStyle(),{stroke:e.get("axisLine.lineStyle.color")}),z2:2,silent:!0}));t.group.add(g),d.push(g)}return d}}function gh(t,e,i){var n=e.axis;if(T(i.axisLabelShow,e.get("axisLabel.show"))&&!n.scale.isBlank()){var o=e.getModel("axisLabel"),a=o.get("margin"),r=n.getViewLabels(),s=(T(i.labelRotate,o.get("rotate"))||0)*zD/180,l=GD(i.rotation,s,i.labelDirection),u=e.getCategories(!0),h=[],c=uh(e),f=e.get("triggerEvent");return d(r,function(r,s){var d=r.tickValue,p=r.formattedLabel,g=r.rawLabel,m=o;u&&u[d]&&u[d].textStyle&&(m=new Po(u[d].textStyle,o,e.ecModel));var v=m.getTextColor()||e.get("axisLine.lineStyle.color"),y=[n.dataToCoord(d),i.labelOffset+i.labelDirection*a],x=new aM({anid:"label_"+d,position:y,rotation:l.rotation,silent:c,z2:10});go(x.style,m,{text:p,textAlign:m.getShallow("align",!0)||l.textAlign,textVerticalAlign:m.getShallow("verticalAlign",!0)||m.getShallow("baseline",!0)||l.textVerticalAlign,textFill:"function"==typeof v?v("category"===n.type?g:"value"===n.type?d+"":d,s):v}),f&&(x.eventData=sh(e),x.eventData.targetType="axisLabel",x.eventData.value=g),t._dumbGroup.add(x),x.updateTransform(),h.push(x),t.group.add(x),x.decomposeTransform()}),h}}function mh(t,e){var i={axesInfo:{},seriesInvolved:!1,coordSysAxesInfo:{},coordSysMap:{}};return vh(i,t,e),i.seriesInvolved&&xh(i,t),i}function vh(t,e,i){var n=e.getComponent("tooltip"),o=e.getComponent("axisPointer"),a=o.get("link",!0)||[],r=[];FD(i.getCoordinateSystems(),function(i){function s(n,s,l){var c=l.model.getModel("axisPointer",o),d=c.get("show");if(d&&("auto"!==d||n||Ih(c))){null==s&&(s=c.get("triggerTooltip"));var f=(c=n?yh(l,h,o,e,n,s):c).get("snap"),p=Th(l.model),g=s||f||"category"===l.type,m=t.axesInfo[p]={key:p,axis:l,coordSys:i,axisPointerModel:c,triggerTooltip:s,involveSeries:g,snap:f,useHandle:Ih(c),seriesModels:[]};u[p]=m,t.seriesInvolved|=g;var v=_h(a,l);if(null!=v){var y=r[v]||(r[v]={axesInfo:{}});y.axesInfo[p]=m,y.mapper=a[v].mapper,m.linkGroup=y}}}if(i.axisPointerEnabled){var l=Th(i.model),u=t.coordSysAxesInfo[l]={};t.coordSysMap[l]=i;var h=i.model.getModel("tooltip",n);if(FD(i.getAxes(),WD(s,!1,null)),i.getTooltipAxes&&n&&h.get("show")){var c="axis"===h.get("trigger"),d="cross"===h.get("axisPointer.type"),f=i.getTooltipAxes(h.get("axisPointer.axis"));(c||d)&&FD(f.baseAxes,WD(s,!d||"cross",c)),d&&FD(f.otherAxes,WD(s,"cross",!1))}}})}function yh(t,e,n,o,a,s){var l=e.getModel("axisPointer"),u={};FD(["type","snap","lineStyle","shadowStyle","label","animation","animationDurationUpdate","animationEasingUpdate","z"],function(t){u[t]=i(l.get(t))}),u.snap="category"!==t.type&&!!s,"cross"===l.get("type")&&(u.type="line");var h=u.label||(u.label={});if(null==h.show&&(h.show=!1),"cross"===a){var c=l.get("label.show");if(h.show=null==c||c,!s){var d=u.lineStyle=l.get("crossStyle");d&&r(h,d.textStyle)}}return t.model.getModel("axisPointer",new Po(u,n,o))}function xh(t,e){e.eachSeries(function(e){var i=e.coordinateSystem,n=e.get("tooltip.trigger",!0),o=e.get("tooltip.show",!0);i&&"none"!==n&&!1!==n&&"item"!==n&&!1!==o&&!1!==e.get("axisPointer.show",!0)&&FD(t.coordSysAxesInfo[Th(i.model)],function(t){var n=t.axis;i.getAxis(n.dim)===n&&(t.seriesModels.push(e),null==t.seriesDataCount&&(t.seriesDataCount=0),t.seriesDataCount+=e.getData().count())})},this)}function _h(t,e){for(var i=e.model,n=e.dim,o=0;o<t.length;o++){var a=t[o]||{};if(wh(a[n+"AxisId"],i.id)||wh(a[n+"AxisIndex"],i.componentIndex)||wh(a[n+"AxisName"],i.name))return o}}function wh(t,e){return"all"===t||y(t)&&l(t,e)>=0||t===e}function bh(t){var e=Sh(t);if(e){var i=e.axisPointerModel,n=e.axis.scale,o=i.option,a=i.get("status"),r=i.get("value");null!=r&&(r=n.parse(r));var s=Ih(i);null==a&&(o.status=s?"show":"hide");var l=n.getExtent().slice();l[0]>l[1]&&l.reverse(),(null==r||r>l[1])&&(r=l[1]),r<l[0]&&(r=l[0]),o.value=r,s&&(o.status=e.axis.scale.isBlank()?"hide":"show")}}function Sh(t){var e=(t.ecModel.getComponent("axisPointer")||{}).coordSysAxesInfo;return e&&e.axesInfo[Th(t)]}function Mh(t){var e=Sh(t);return e&&e.axisPointerModel}function Ih(t){return!!t.get("handle.show")}function Th(t){return t.type+"||"+t.id}function Ah(t,e,i,n,o,a){var r=HD.getAxisPointerClass(t.axisPointerClass);if(r){var s=Mh(e);s?(t._axisPointer||(t._axisPointer=new r)).render(e,s,n,a):Dh(t,n)}}function Dh(t,e,i){var n=t._axisPointer;n&&n.dispose(e,i),t._axisPointer=null}function Ch(t,e,i){i=i||{};var n=t.coordinateSystem,o=e.axis,a={},r=o.getAxesOnZeroOf()[0],s=o.position,l=r?"onZero":s,u=o.dim,h=n.getRect(),c=[h.x,h.x+h.width,h.y,h.y+h.height],d={left:0,right:1,top:0,bottom:1,onZero:2},f=e.get("offset")||0,p="x"===u?[c[2]-f,c[3]+f]:[c[0]-f,c[1]+f];if(r){var g=r.toGlobalCoord(r.dataToCoord(0));p[d.onZero]=Math.max(Math.min(g,p[1]),p[0])}a.position=["y"===u?p[d[l]]:c[0],"x"===u?p[d[l]]:c[3]],a.rotation=Math.PI/2*("x"===u?0:1);a.labelDirection=a.tickDirection=a.nameDirection={top:-1,bottom:1,left:-1,right:1}[s],a.labelOffset=r?p[d[s]]-p[d.onZero]:0,e.get("axisTick.inside")&&(a.tickDirection=-a.tickDirection),T(i.labelInside,e.get("axisLabel.inside"))&&(a.labelDirection=-a.labelDirection);var m=e.get("axisLabel.rotate");return a.labelRotate="top"===l?-m:m,a.z2=1,a}function Lh(t,e,i,n,o,a,r){po(t,e,i.getModel("label"),i.getModel("emphasis.label"),{labelFetcher:o,labelDataIndex:a,defaultText:xu(o.getData(),a),isRectText:!0,autoColor:n}),kh(t),kh(e)}function kh(t,e){"outside"===t.textPosition&&(t.textPosition=e)}function Ph(t,e,i){i.style.text=null,Mo(i,{shape:{width:0}},e,t,function(){i.parent&&i.parent.remove(i)})}function Nh(t,e,i){i.style.text=null,Mo(i,{shape:{r:i.shape.r0}},e,t,function(){i.parent&&i.parent.remove(i)})}function Oh(t,e,i,n,o,a,s,l){var u=e.getItemVisual(i,"color"),h=e.getItemVisual(i,"opacity"),c=n.getModel("itemStyle"),d=n.getModel("emphasis.itemStyle").getBarItemStyle();l||t.setShape("r",c.get("barBorderRadius")||0),t.useStyle(r({fill:u,opacity:h},c.getBarItemStyle()));var f=n.getShallow("cursor");f&&t.attr("cursor",f);var p=s?o.height>0?"bottom":"top":o.width>0?"left":"right";l||Lh(t.style,d,n,u,a,i,p),co(t,d)}function Eh(t,e){var i=t.get($D)||0;return Math.min(i,Math.abs(e.width),Math.abs(e.height))}function Rh(t,e,i){var n=t.getData(),o=[],a=n.getLayout("valueAxisHorizontal")?1:0;o[1-a]=n.getLayout("valueAxisStart");var r=new tC({shape:{points:n.getLayout("largePoints")},incremental:!!i,__startPoint:o,__valueIdx:a});e.add(r),zh(r,t,n)}function zh(t,e,i){var n=i.getVisual("borderColor")||i.getVisual("color"),o=e.getModel("itemStyle").getItemStyle(["color","borderColor"]);t.useStyle(o),t.style.fill=null,t.style.stroke=n,t.style.lineWidth=i.getLayout("barWidth")}function Bh(t,e,i,n){var o=e.getData(),a=this.dataIndex,r=o.getName(a),s=e.get("selectedOffset");n.dispatchAction({type:"pieToggleSelect",from:t,name:r,seriesId:e.id}),o.each(function(t){Vh(o.getItemGraphicEl(t),o.getItemLayout(t),e.isSelected(o.getName(t)),s,i)})}function Vh(t,e,i,n,o){var a=(e.startAngle+e.endAngle)/2,r=Math.cos(a),s=Math.sin(a),l=i?n:0,u=[r*l,s*l];o?t.animate().when(200,{position:u}).start("bounceOut"):t.attr("position",u)}function Gh(t,e){function i(){a.ignore=a.hoverIgnore,r.ignore=r.hoverIgnore}function n(){a.ignore=a.normalIgnore,r.ignore=r.normalIgnore}tb.call(this);var o=new uM({z2:2}),a=new pM,r=new aM;this.add(o),this.add(a),this.add(r),this.updateData(t,e,!0),this.on("emphasis",i).on("normal",n).on("mouseover",i).on("mouseout",n)}function Fh(t,e,i,n,o,a,r){function s(e,i){for(var n=e;n>=0&&(t[n].y-=i,!(n>0&&t[n].y>t[n-1].y+t[n-1].height));n--);}function l(t,e,i,n,o,a){for(var r=e?Number.MAX_VALUE:0,s=0,l=t.length;s<l;s++){var u=Math.abs(t[s].y-n),h=t[s].len,c=t[s].len2,d=u<o+h?Math.sqrt((o+h+c)*(o+h+c)-u*u):Math.abs(t[s].x-i);e&&d>=r&&(d=r-10),!e&&d<=r&&(d=r+10),t[s].x=i+d*a,r=d}}t.sort(function(t,e){return t.y-e.y});for(var u,h=0,c=t.length,d=[],f=[],p=0;p<c;p++)(u=t[p].y-h)<0&&function(e,i,n,o){for(var a=e;a<i;a++)if(t[a].y+=n,a>e&&a+1<i&&t[a+1].y>t[a].y+t[a].height)return void s(a,n/2);s(i-1,n/2)}(p,c,-u),h=t[p].y+t[p].height;r-h<0&&s(c-1,h-r);for(p=0;p<c;p++)t[p].y>=i?f.push(t[p]):d.push(t[p]);l(d,!1,e,i,n,o),l(f,!0,e,i,n,o)}function Wh(t,e,i,n,o,a){for(var r=[],s=[],l=0;l<t.length;l++)Hh(t[l])||(t[l].x<e?r.push(t[l]):s.push(t[l]));Fh(s,e,i,n,1,o,a),Fh(r,e,i,n,-1,o,a);for(l=0;l<t.length;l++)if(!Hh(t[l])){var u=t[l].linePoints;if(u){var h=u[1][0]-u[2][0];t[l].x<e?u[2][0]=t[l].x+3:u[2][0]=t[l].x-3,u[1][1]=u[2][1]=t[l].y,u[1][0]=u[2][0]+h}}}function Hh(t){return"center"===t.position}function Zh(){this.group=new tb}function Uh(t,e,i){iD.call(this,t,e,i),this.type="value",this.angle=0,this.name="",this.model}function Xh(t,e,i){this._model=t,this.dimensions=[],this._indicatorAxes=f(t.getIndicatorModels(),function(t,e){var i="indicator_"+e,n=new Uh(i,new SA);return n.name=t.get("name"),n.model=t,t.axis=n,this.dimensions.push(i),n},this),this.resize(t,i),this.cx,this.cy,this.r,this.r0,this.startAngle}function jh(t,e){return r({show:e},t)}function Yh(t){return y(t)||(t=[+t,+t]),t}function qh(t){for(var e,i=0;i<t.length;i++){var n=t[i].getBoundingRect();(e=e||n.clone()).union(n)}return e}function Kh(t,e){var i,n,o=t.svgXML;try{k(null!=(n=(i=o&&as(o,{ignoreViewBox:!0,ignoreRootClip:!0})||{}).root))}catch(t){throw new Error("Invalid svg format\n"+t.message)}var a=i.width,r=i.height,s=i.viewBoxRect;if(e||(e=null==a||null==r?n.getBoundingRect():new de(0,0,0,0),null!=a&&(e.width=a),null!=r&&(e.height=r)),s){var l=os(s,e.width,e.height),u=n;(n=new tb).add(u),u.scale=l.scale,u.position=l.position}return n.setClipPath(new vM({shape:e.plain()})),{root:n,boundingRect:e}}function $h(t){return function(e,i){var n=[];return d(Jh(e),function(o){var a=LC[o.type][t];a&&n.push(a(e,o,i))}),n}}function Jh(t){return AT.retrieveMap(t)||[]}function Qh(t,e,i){ic(t)[e]=i}function tc(t,e,i){var n=ic(t);n[e]===i&&(n[e]=null)}function ec(t,e){return!!ic(t)[e]}function ic(t){return t[PC]||(t[PC]={})}function nc(t){this.pointerChecker,this._zr=t,this._opt={};var e=m,n=e(oc,this),o=e(ac,this),a=e(rc,this),s=e(sc,this),l=e(lc,this);fw.call(this),this.setPointerChecker=function(t){this.pointerChecker=t},this.enable=function(e,u){this.disable(),this._opt=r(i(u)||{},{zoomOnMouseWheel:!0,moveOnMouseMove:!0,moveOnMouseWheel:!1,preventDefaultMouseMove:!0}),null==e&&(e=!0),!0!==e&&"move"!==e&&"pan"!==e||(t.on("mousedown",n),t.on("mousemove",o),t.on("mouseup",a)),!0!==e&&"scale"!==e&&"zoom"!==e||(t.on("mousewheel",s),t.on("pinch",l))},this.disable=function(){t.off("mousedown",n),t.off("mousemove",o),t.off("mouseup",a),t.off("mousewheel",s),t.off("pinch",l)},this.dispose=this.disable,this.isDragging=function(){return this._dragging},this.isPinching=function(){return this._pinching}}function oc(t){if(!(dt(t)||t.target&&t.target.draggable)){var e=t.offsetX,i=t.offsetY;this.pointerChecker&&this.pointerChecker(t,e,i)&&(this._x=e,this._y=i,this._dragging=!0)}}function ac(t){if(this._dragging&&cc("moveOnMouseMove",t,this._opt)&&"pinch"!==t.gestureEvent&&!ec(this._zr,"globalPan")){var e=t.offsetX,i=t.offsetY,n=this._x,o=this._y,a=e-n,r=i-o;this._x=e,this._y=i,this._opt.preventDefaultMouseMove&&mw(t.event),hc(this,"pan","moveOnMouseMove",t,{dx:a,dy:r,oldX:n,oldY:o,newX:e,newY:i})}}function rc(t){dt(t)||(this._dragging=!1)}function sc(t){var e=cc("zoomOnMouseWheel",t,this._opt),i=cc("moveOnMouseWheel",t,this._opt),n=t.wheelDelta,o=Math.abs(n),a=t.offsetX,r=t.offsetY;if(0!==n&&(e||i)){if(e){var s=o>3?1.4:o>1?1.2:1.1;uc(this,"zoom","zoomOnMouseWheel",t,{scale:n>0?s:1/s,originX:a,originY:r})}if(i){var l=Math.abs(n);uc(this,"scrollMove","moveOnMouseWheel",t,{scrollDelta:(n>0?1:-1)*(l>3?.4:l>1?.15:.05),originX:a,originY:r})}}}function lc(t){ec(this._zr,"globalPan")||uc(this,"zoom",null,t,{scale:t.pinchScale>1?1.1:1/1.1,originX:t.pinchX,originY:t.pinchY})}function uc(t,e,i,n,o){t.pointerChecker&&t.pointerChecker(n,o.originX,o.originY)&&(mw(n.event),hc(t,e,i,n,o))}function hc(t,e,i,n,o){o.isAvailableBehavior=m(cc,null,i,n),t.trigger(e,o)}function cc(t,e,i){var n=i[t];return!t||n&&(!_(n)||e.event[n+"Key"])}function dc(t,e,i){var n=t.target,o=n.position;o[0]+=e,o[1]+=i,n.dirty()}function fc(t,e,i,n){var o=t.target,a=t.zoomLimit,r=o.position,s=o.scale,l=t.zoom=t.zoom||1;if(l*=e,a){var u=a.min||0,h=a.max||1/0;l=Math.max(Math.min(h,l),u)}var c=l/t.zoom;t.zoom=l,r[0]-=(i-r[0])*(c-1),r[1]-=(n-r[1])*(c-1),s[0]*=c,s[1]*=c,o.dirty()}function pc(t,e,i){var n=e.getComponentByElement(t.topTarget),o=n&&n.coordinateSystem;return n&&n!==i&&!NC[n.mainType]&&o&&o.model!==i}function gc(t,e){var i=t.getItemStyle(),n=t.get("areaColor");return null!=n&&(i.fill=n),i}function mc(t,e,i,n,o){i.off("click"),i.off("mousedown"),e.get("selectedMode")&&(i.on("mousedown",function(){t._mouseDownFlag=!0}),i.on("click",function(a){if(t._mouseDownFlag){t._mouseDownFlag=!1;for(var r=a.target;!r.__regions;)r=r.parent;if(r){var s={type:("geo"===e.mainType?"geo":"map")+"ToggleSelect",batch:f(r.__regions,function(t){return{name:t.name,from:o.uid}})};s[e.mainType+"Id"]=e.id,n.dispatchAction(s),vc(e,i)}}}))}function vc(t,e){e.eachChild(function(e){d(e.__regions,function(i){e.trigger(t.isSelected(i.name)?"emphasis":"normal")})})}function yc(t,e){var i=new tb;this.uid=Eo("ec_map_draw"),this._controller=new nc(t.getZr()),this._controllerHost={target:e?i:null},this.group=i,this._updateGroup=e,this._mouseDownFlag,this._mapName,this._initialized,i.add(this._regionsGroup=new tb),i.add(this._backgroundGroup=new tb)}function xc(t){var e=this[OC];e&&e.recordVersion===this[EC]&&_c(e,t)}function _c(t,e){var i=t.circle,n=t.labelModel,o=t.hoverLabelModel,a=t.emphasisText,r=t.normalText;e?(i.style.extendFrom(go({},o,{text:o.get("show")?a:null},{isRectText:!0,useInsideStyle:!1},!0)),i.__mapOriginalZ2=i.z2,i.z2+=PM):(go(i.style,n,{text:n.get("show")?r:null,textPosition:n.getShallow("position")||"bottom"},{isRectText:!0,useInsideStyle:!1}),i.dirty(!1),null!=i.__mapOriginalZ2&&(i.z2=i.__mapOriginalZ2,i.__mapOriginalZ2=null))}function wc(t,e,i){var n=t.getZoom(),o=t.getCenter(),a=e.zoom,r=t.dataToPoint(o);if(null!=e.dx&&null!=e.dy){r[0]-=e.dx,r[1]-=e.dy;o=t.pointToData(r);t.setCenter(o)}if(null!=a){if(i){var s=i.min||0,l=i.max||1/0;a=Math.max(Math.min(n*a,l),s)/n}t.scale[0]*=a,t.scale[1]*=a;var u=t.position,h=(e.originX-u[0])*(a-1),c=(e.originY-u[1])*(a-1);u[0]-=h,u[1]-=c,t.updateTransform();o=t.pointToData(r);t.setCenter(o),t.setZoom(a*n)}return{center:t.getCenter(),zoom:t.getZoom()}}function bc(){Tw.call(this)}function Sc(t){this.name=t,this.zoomLimit,Tw.call(this),this._roamTransformable=new bc,this._rawTransformable=new bc,this._center,this._zoom}function Mc(t,e,i,n){var o=i.seriesModel,a=o?o.coordinateSystem:null;return a===this?a[t](n):null}function Ic(t,e,i,n){Sc.call(this,t),this.map=e;var o=kC.load(e,i);this._nameCoordMap=o.nameCoordMap,this._regionsMap=o.regionsMap,this._invertLongitute=null==n||n,this.regions=o.regions,this._rect=o.boundingRect}function Tc(t,e,i,n){var o=i.geoModel,a=i.seriesModel,r=o?o.coordinateSystem:a?a.coordinateSystem||(a.getReferringComponents("geo")[0]||{}).coordinateSystem:null;return r===this?r[t](n):null}function Ac(t,e){var i=t.get("boundingCoords");if(null!=i){var n=i[0],o=i[1];isNaN(n[0])||isNaN(n[1])||isNaN(o[0])||isNaN(o[1])||this.setBoundingRect(n[0],n[1],o[0]-n[0],o[1]-n[1])}var a,r=this.getBoundingRect(),s=t.get("layoutCenter"),l=t.get("layoutSize"),u=e.getWidth(),h=e.getHeight(),c=r.width/r.height*this.aspectScale,d=!1;s&&l&&(s=[Bo(s[0],u),Bo(s[1],h)],l=Bo(l,Math.min(u,h)),isNaN(s[0])||isNaN(s[1])||isNaN(l)||(d=!0));if(d){var f={};c>1?(f.width=l,f.height=l/c):(f.height=l,f.width=l*c),f.y=s[1]-f.height/2,f.x=s[0]-f.width/2}else(a=t.getBoxLayoutParams()).aspect=c,f=ha(a,{width:u,height:h});this.setViewRect(f.x,f.y,f.width,f.height),this.setCenter(t.get("center")),this.setZoom(t.get("zoom"))}function Dc(t,e){d(e.get("geoCoord"),function(e,i){t.addGeoCoord(i,e)})}function Cc(t,e){var i={};return d(t,function(t){t.each(t.mapDimension("value"),function(e,n){var o="ec-"+t.getName(n);i[o]=i[o]||[],isNaN(e)||i[o].push(e)})}),t[0].map(t[0].mapDimension("value"),function(n,o){for(var a="ec-"+t[0].getName(o),r=0,s=1/0,l=-1/0,u=i[a].length,h=0;h<u;h++)s=Math.min(s,i[a][h]),l=Math.max(l,i[a][h]),r+=i[a][h];var c;return c="min"===e?s:"max"===e?l:"average"===e?r/u:r,0===u?NaN:c})}function Lc(t){var e=t.mainData,i=t.datas;i||(i={main:e},t.datasAttr={main:"data"}),t.datas=t.mainData=null,Rc(e,i,t),BC(i,function(i){BC(e.TRANSFERABLE_METHODS,function(e){i.wrapMethod(e,v(kc,t))})}),e.wrapMethod("cloneShallow",v(Nc,t)),BC(e.CHANGABLE_METHODS,function(i){e.wrapMethod(i,v(Pc,t))}),k(i[e.dataType]===e)}function kc(t,e){if(Ec(this)){var i=a({},this[VC]);i[this.dataType]=e,Rc(e,i,t)}else zc(e,this.dataType,this[GC],t);return e}function Pc(t,e){return t.struct&&t.struct.update(this),e}function Nc(t,e){return BC(e[VC],function(i,n){i!==e&&zc(i.cloneShallow(),n,e,t)}),e}function Oc(t){var e=this[GC];return null==t||null==e?e:e[VC][t]}function Ec(t){return t[GC]===t}function Rc(t,e,i){t[VC]={},BC(e,function(e,n){zc(e,n,t,i)})}function zc(t,e,i,n){i[VC][e]=t,t[GC]=i,t.dataType=e,n.struct&&(t[n.structAttr]=n.struct,n.struct[n.datasAttr[e]]=t),t.getLinkedData=Oc}function Bc(t,e,i){this.root,this.data,this._nodes=[],this.hostModel=t,this.levelModels=f(e||[],function(e){return new Po(e,t,t.ecModel)}),this.leavesModel=new Po(i||{},t,t.ecModel)}function Vc(t,e){var i=e.children;t.parentNode!==e&&(i.push(t),t.parentNode=e)}function Gc(t){t.hierNode={defaultAncestor:null,ancestor:t,prelim:0,modifier:0,change:0,shift:0,i:0,thread:null};for(var e,i,n=[t];e=n.pop();)if(i=e.children,e.isExpand&&i.length)for(var o=i.length-1;o>=0;o--){var a=i[o];a.hierNode={defaultAncestor:null,ancestor:a,prelim:0,modifier:0,change:0,shift:0,i:o,thread:null},n.push(a)}}function Fc(t,e){var i=t.isExpand?t.children:[],n=t.parentNode.children,o=t.hierNode.i?n[t.hierNode.i-1]:null;if(i.length){Xc(t);var a=(i[0].hierNode.prelim+i[i.length-1].hierNode.prelim)/2;o?(t.hierNode.prelim=o.hierNode.prelim+e(t,o),t.hierNode.modifier=t.hierNode.prelim-a):t.hierNode.prelim=a}else o&&(t.hierNode.prelim=o.hierNode.prelim+e(t,o));t.parentNode.hierNode.defaultAncestor=jc(t,o,t.parentNode.hierNode.defaultAncestor||n[0],e)}function Wc(t){var e=t.hierNode.prelim+t.parentNode.hierNode.modifier;t.setLayout({x:e},!0),t.hierNode.modifier+=t.parentNode.hierNode.modifier}function Hc(t){return arguments.length?t:Jc}function Zc(t,e){var i={};return t-=Math.PI/2,i.x=e*Math.cos(t),i.y=e*Math.sin(t),i}function Uc(t,e){return ha(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()})}function Xc(t){for(var e=t.children,i=e.length,n=0,o=0;--i>=0;){var a=e[i];a.hierNode.prelim+=n,a.hierNode.modifier+=n,o+=a.hierNode.change,n+=a.hierNode.shift+o}}function jc(t,e,i,n){if(e){for(var o=t,a=t,r=a.parentNode.children[0],s=e,l=o.hierNode.modifier,u=a.hierNode.modifier,h=r.hierNode.modifier,c=s.hierNode.modifier;s=Yc(s),a=qc(a),s&&a;){o=Yc(o),r=qc(r),o.hierNode.ancestor=t;var d=s.hierNode.prelim+c-a.hierNode.prelim-u+n(s,a);d>0&&($c(Kc(s,t,i),t,d),u+=d,l+=d),c+=s.hierNode.modifier,u+=a.hierNode.modifier,l+=o.hierNode.modifier,h+=r.hierNode.modifier}s&&!Yc(o)&&(o.hierNode.thread=s,o.hierNode.modifier+=c-l),a&&!qc(r)&&(r.hierNode.thread=a,r.hierNode.modifier+=u-h,i=t)}return i}function Yc(t){var e=t.children;return e.length&&t.isExpand?e[e.length-1]:t.hierNode.thread}function qc(t){var e=t.children;return e.length&&t.isExpand?e[0]:t.hierNode.thread}function Kc(t,e,i){return t.hierNode.ancestor.parentNode===e.parentNode?t.hierNode.ancestor:i}function $c(t,e,i){var n=i/(e.hierNode.i-t.hierNode.i);e.hierNode.change-=n,e.hierNode.shift+=i,e.hierNode.modifier+=i,e.hierNode.prelim+=i,t.hierNode.change+=n}function Jc(t,e){return t.parentNode===e.parentNode?1:2}function Qc(t,e){var i=t.getItemLayout(e);return i&&!isNaN(i.x)&&!isNaN(i.y)&&"none"!==t.getItemVisual(e,"symbol")}function td(t,e,i){return i.itemModel=e,i.itemStyle=e.getModel("itemStyle").getItemStyle(),i.hoverItemStyle=e.getModel("emphasis.itemStyle").getItemStyle(),i.lineStyle=e.getModel("lineStyle").getLineStyle(),i.labelModel=e.getModel("label"),i.hoverLabelModel=e.getModel("emphasis.label"),!1===t.isExpand&&0!==t.children.length?i.symbolInnerColor=i.itemStyle.fill:i.symbolInnerColor="#fff",i}function ed(t,e,i,n,o,a){var s=!i,l=t.tree.getNodeByDataIndex(e),a=td(l,l.getModel(),a),u=t.tree.root,h=l.parentNode===u?l:l.parentNode||l,c=t.getItemGraphicEl(h.dataIndex),d=h.getLayout(),f=c?{x:c.position[0],y:c.position[1],rawX:c.__radialOldRawX,rawY:c.__radialOldRawY}:d,p=l.getLayout();s?(i=new _u(t,e,a)).attr("position",[f.x,f.y]):i.updateData(t,e,a),i.__radialOldRawX=i.__radialRawX,i.__radialOldRawY=i.__radialRawY,i.__radialRawX=p.rawX,i.__radialRawY=p.rawY,n.add(i),t.setItemGraphicEl(e,i),Mo(i,{position:[p.x,p.y]},o);var g=i.getSymbolPath();if("radial"===a.layout){var m,v,y=u.children[0],x=y.getLayout(),_=y.children.length;if(p.x===x.x&&!0===l.isExpand){var w={};w.x=(y.children[0].getLayout().x+y.children[_-1].getLayout().x)/2,w.y=(y.children[0].getLayout().y+y.children[_-1].getLayout().y)/2,(m=Math.atan2(w.y-x.y,w.x-x.x))<0&&(m=2*Math.PI+m),(v=w.x<x.x)&&(m-=Math.PI)}else(m=Math.atan2(p.y-x.y,p.x-x.x))<0&&(m=2*Math.PI+m),0===l.children.length||0!==l.children.length&&!1===l.isExpand?(v=p.x<x.x)&&(m-=Math.PI):(v=p.x>x.x)||(m-=Math.PI);var b=v?"left":"right";g.setStyle({textPosition:b,textRotation:-m,textOrigin:"center",verticalAlign:"middle"})}if(l.parentNode&&l.parentNode!==u){var S=i.__edge;S||(S=i.__edge=new wM({shape:nd(a,f,f),style:r({opacity:0,strokeNoScale:!0},a.lineStyle)})),Mo(S,{shape:nd(a,d,p),style:{opacity:1}},o),n.add(S)}}function id(t,e,i,n,o,a){for(var r,s=t.tree.getNodeByDataIndex(e),l=t.tree.root,a=td(s,s.getModel(),a),u=s.parentNode===l?s:s.parentNode||s;null==(r=u.getLayout());)u=u.parentNode===l?u:u.parentNode||u;Mo(i,{position:[r.x+1,r.y+1]},o,function(){n.remove(i),t.setItemGraphicEl(e,null)}),i.fadeOut(null,{keepLabel:!0});var h=i.__edge;h&&Mo(h,{shape:nd(a,r,r),style:{opacity:0}},o,function(){n.remove(h)})}function nd(t,e,i){var n,o,a,r,s,l,u,h,c=t.orient;if("radial"===t.layout){s=e.rawX,u=e.rawY,l=i.rawX,h=i.rawY;var d=Zc(s,u),f=Zc(s,u+(h-u)*t.curvature),p=Zc(l,h+(u-h)*t.curvature),g=Zc(l,h);return{x1:d.x,y1:d.y,x2:g.x,y2:g.y,cpx1:f.x,cpy1:f.y,cpx2:p.x,cpy2:p.y}}return s=e.x,u=e.y,l=i.x,h=i.y,"LR"!==c&&"RL"!==c||(n=s+(l-s)*t.curvature,o=u,a=l+(s-l)*t.curvature,r=h),"TB"!==c&&"BT"!==c||(n=s,o=u+(h-u)*t.curvature,a=l,r=h+(u-h)*t.curvature),{x1:s,y1:u,x2:l,y2:h,cpx1:n,cpy1:o,cpx2:a,cpy2:r}}function od(t,e,i){for(var n,o=[t],a=[];n=o.pop();)if(a.push(n),n.isExpand){var r=n.children;if(r.length)for(var s=0;s<r.length;s++)o.push(r[s])}for(;n=a.pop();)e(n,i)}function ad(t,e){for(var i,n=[t];i=n.pop();)if(e(i),i.isExpand){var o=i.children;if(o.length)for(var a=o.length-1;a>=0;a--)n.push(o[a])}}function rd(t,e){var i=Uc(t,e);t.layoutInfo=i;var n=t.get("layout"),o=0,a=0,r=null;"radial"===n?(o=2*Math.PI,a=Math.min(i.height,i.width)/2,r=Hc(function(t,e){return(t.parentNode===e.parentNode?1:2)/t.depth})):(o=i.width,a=i.height,r=Hc());var s=t.getData().tree.root,l=s.children[0];if(l){Gc(s),od(l,Fc,r),s.hierNode.modifier=-l.hierNode.prelim,ad(l,Wc);var u=l,h=l,c=l;ad(l,function(t){var e=t.getLayout().x;e<u.getLayout().x&&(u=t),e>h.getLayout().x&&(h=t),t.depth>c.depth&&(c=t)});var d=u===h?1:r(u,h)/2,f=d-u.getLayout().x,p=0,g=0,m=0,v=0;if("radial"===n)p=o/(h.getLayout().x+d+f),g=a/(c.depth-1||1),ad(l,function(t){m=(t.getLayout().x+f)*p,v=(t.depth-1)*g;var e=Zc(m,v);t.setLayout({x:e.x,y:e.y,rawX:m,rawY:v},!0)});else{var y=t.getOrient();"RL"===y||"LR"===y?(g=a/(h.getLayout().x+d+f),p=o/(c.depth-1||1),ad(l,function(t){v=(t.getLayout().x+f)*g,m="LR"===y?(t.depth-1)*p:o-(t.depth-1)*p,t.setLayout({x:m,y:v},!0)})):"TB"!==y&&"BT"!==y||(p=o/(h.getLayout().x+d+f),g=a/(c.depth-1||1),ad(l,function(t){m=(t.getLayout().x+f)*p,v="TB"===y?(t.depth-1)*g:a-(t.depth-1)*g,t.setLayout({x:m,y:v},!0)}))}}}function sd(t,e,i){if(t&&l(e,t.type)>=0){var n=i.getData().tree.root,o=t.targetNode;if("string"==typeof o&&(o=n.getNodeById(o)),o&&n.contains(o))return{node:o};var a=t.targetNodeId;if(null!=a&&(o=n.getNodeById(a)))return{node:o}}}function ld(t){for(var e=[];t;)(t=t.parentNode)&&e.push(t);return e.reverse()}function ud(t,e){return l(ld(t),e)>=0}function hd(t,e){for(var i=[];t;){var n=t.dataIndex;i.push({name:t.name,dataIndex:n,value:e.getRawValue(n)}),t=t.parentNode}return i.reverse(),i}function cd(t){var e=0;d(t.children,function(t){cd(t);var i=t.value;y(i)&&(i=i[0]),e+=i});var i=t.value;y(i)&&(i=i[0]),(null==i||isNaN(i))&&(i=e),i<0&&(i=0),y(t.value)?t.value[0]=i:t.value=i}function dd(t,e){var i=e.get("color");if(i){var n;return d(t=t||[],function(t){var e=new Po(t),i=e.get("color");(e.get("itemStyle.color")||i&&"none"!==i)&&(n=!0)}),n||((t[0]||(t[0]={})).color=i.slice()),t}}function fd(t){this.group=new tb,t.add(this.group)}function pd(t,e,i,n,o,a){var r=[[o?t:t-WC,e],[t+i,e],[t+i,e+n],[o?t:t-WC,e+n]];return!a&&r.splice(2,0,[t+i+WC,e+n/2]),!o&&r.push([t,e+n/2]),r}function gd(t,e,i){t.eventData={componentType:"series",componentSubType:"treemap",componentIndex:e.componentIndex,seriesIndex:e.componentIndex,seriesName:e.name,seriesType:"treemap",selfType:"breadcrumb",nodeData:{dataIndex:i&&i.dataIndex,name:i&&i.name},treePathInfo:i&&hd(i,e)}}function md(){var t,e=[],i={};return{add:function(t,n,o,a,r){return _(a)&&(r=a,a=0),!i[t.id]&&(i[t.id]=1,e.push({el:t,target:n,time:o,delay:a,easing:r}),!0)},done:function(e){return t=e,this},start:function(){for(var n=e.length,o=0,a=e.length;o<a;o++){var r=e[o];r.el.animateTo(r.target,r.time,r.delay,r.easing,function(){--n||(e.length=0,i={},t&&t())})}return this}}}function vd(t,e,n,o,r,s,l,u,h,c){function d(t,e){w?!t.invisible&&s.push(t):(e(),t.__tmWillVisible||(t.invisible=!1))}function f(e,n,o,a,r,s){var u=l.getModel(),h=T(t.getFormattedLabel(l.dataIndex,"normal",null,null,s?"upperLabel":"label"),u.get("name"));if(!s&&v.isLeafRoot){var c=t.get("drillDownIcon",!0);h=c?c+" "+h:h}var d=u.getModel(s?qC:jC),f=u.getModel(s?KC:YC),p=d.getShallow("show");po(e,n,d,f,{defaultText:p?h:null,autoColor:o,isRectText:!0}),s&&(e.textRect=i(s)),e.truncate=p&&d.get("ellipsis")?{outerWidth:a,outerHeight:r,minChar:2}:null}function p(t,i,o,a){var s=null!=S&&n[t][S],l=r[t];return s?(n[t][S]=null,g(l,s,t)):w||((s=new i({z:yd(o,a)})).__tmDepth=o,s.__tmStorageName=t,m(l,s,t)),e[t][b]=s}function g(t,e,i){(t[b]={}).old="nodeGroup"===i?e.position.slice():a({},e.shape)}function m(t,e,i){var n=t[b]={},a=l.parentNode;if(a&&(!o||"drillDown"===o.direction)){var s=0,u=0,h=r.background[a.getRawIndex()];!o&&h&&h.old&&(s=h.old.width,u=h.old.height),n.old="nodeGroup"===i?[0,u]:{x:s,y:u,width:0,height:0}}n.fadein="nodeGroup"!==i}if(l){var v=l.getLayout();if(v&&v.isInView){var y=v.width,x=v.height,_=v.borderWidth,w=v.invisible,b=l.getRawIndex(),S=u&&u.getRawIndex(),M=l.viewChildren,I=v.upperHeight,A=M&&M.length,D=l.getModel("itemStyle"),C=l.getModel("emphasis.itemStyle"),L=p("nodeGroup",ZC);if(L){if(h.add(L),L.attr("position",[v.x||0,v.y||0]),L.__tmNodeWidth=y,L.__tmNodeHeight=x,v.isAboveViewRoot)return L;var k=p("background",UC,c,JC);if(k&&function(e,i,n){i.dataIndex=l.dataIndex,i.seriesIndex=t.seriesIndex,i.setShape({x:0,y:0,width:y,height:x});var o=l.getVisual("borderColor",!0),a=C.get("borderColor");d(i,function(){var t=eL(D);t.fill=o;var e=tL(C);if(e.fill=a,n){var r=y-2*_;f(t,e,o,r,I,{x:_,y:0,width:r,height:I})}else t.text=e.text=null;i.setStyle(t),co(i,e)}),e.add(i)}(L,k,A&&v.upperHeight),!A){var P=p("content",UC,c,QC);P&&function(e,i){i.dataIndex=l.dataIndex,i.seriesIndex=t.seriesIndex;var n=Math.max(y-2*_,0),o=Math.max(x-2*_,0);i.culling=!0,i.setShape({x:_,y:_,width:n,height:o});var a=l.getVisual("color",!0);d(i,function(){var t=eL(D);t.fill=a;var e=tL(C);f(t,e,a,n,o),i.setStyle(t),co(i,e)}),e.add(i)}(L,P)}return L}}}}function yd(t,e){var i=t*$C+e;return(i-1)/i}function xd(t){var e=t.pieceList;t.hasSpecialVisual=!1,d(e,function(e,i){e.originIndex=i,null!=e.visual&&(t.hasSpecialVisual=!0)})}function _d(t){var e=t.categories,i=t.visual,n=t.categoryMap={};if(oL(e,function(t,e){n[t]=e}),!y(i)){var o=[];w(i)?oL(i,function(t,e){var i=n[e];o[null!=i?i:rL]=t}):o[rL]=i,i=Cd(t,o)}for(var a=e.length-1;a>=0;a--)null==i[a]&&(delete n[e[a]],e.pop())}function wd(t,e){var i=t.visual,n=[];w(i)?oL(i,function(t){n.push(t)}):null!=i&&n.push(i);e||1!==n.length||{color:1,symbol:1}.hasOwnProperty(t.type)||(n[1]=n[0]),Cd(t,n)}function bd(t){return{applyVisual:function(e,i,n){e=this.mapValueToVisual(e),n("color",t(i("color"),e))},_doMap:Ad([0,1])}}function Sd(t){var e=this.option.visual;return e[Math.round(zo(t,[0,1],[0,e.length-1],!0))]||{}}function Md(t){return function(e,i,n){n(t,this.mapValueToVisual(e))}}function Id(t){var e=this.option.visual;return e[this.option.loop&&t!==rL?t%e.length:t]}function Td(){return this.option.visual[0]}function Ad(t){return{linear:function(e){return zo(e,t,this.option.visual,!0)},category:Id,piecewise:function(e,i){var n=Dd.call(this,i);return null==n&&(n=zo(e,t,this.option.visual,!0)),n},fixed:Td}}function Dd(t){var e=this.option,i=e.pieceList;if(e.hasSpecialVisual){var n=i[sL.findPieceIndex(t,i)];if(n&&n.visual)return n.visual[this.type]}}function Cd(t,e){return t.visual=e,"color"===t.type&&(t.parsedVisual=f(e,function(t){return Gt(t)})),e}function Ld(t,e,i){return t?e<=i:e<i}function kd(t,e,i,n,o,a){var r=t.getModel(),s=t.getLayout();if(s&&!s.invisible&&s.isInView){var l,u=t.getModel(cL),h=Pd(u,e,i[t.depth],n),c=u.get("borderColor"),f=u.get("borderColorSaturation");null!=f&&(c=Od(f,l=Nd(h))),t.setVisual("borderColor",c);var p=t.viewChildren;if(p&&p.length){var g=Rd(t,r,s,u,h,p);d(p,function(t,e){(t.depth>=o.length||t===o[t.depth])&&kd(t,Bd(r,h,t,e,g,a),i,n,o,a)})}else l=Nd(h),t.setVisual("color",l)}}function Pd(t,e,i,n){var o=a({},e);return d(["color","colorAlpha","colorSaturation"],function(a){var r=t.get(a,!0);null==r&&i&&(r=i[a]),null==r&&(r=e[a]),null==r&&(r=n.get(a)),null!=r&&(o[a]=r)}),o}function Nd(t){var e=Ed(t,"color");if(e){var i=Ed(t,"colorAlpha"),n=Ed(t,"colorSaturation");return n&&(e=jt(e,null,null,n)),i&&(e=Yt(e,i)),e}}function Od(t,e){return null!=e?jt(e,null,null,t):null}function Ed(t,e){var i=t[e];if(null!=i&&"none"!==i)return i}function Rd(t,e,i,n,o,a){if(a&&a.length){var r=zd(e,"color")||null!=o.color&&"none"!==o.color&&(zd(e,"colorAlpha")||zd(e,"colorSaturation"));if(r){var s=e.get("visualMin"),l=e.get("visualMax"),u=i.dataExtent.slice();null!=s&&s<u[0]&&(u[0]=s),null!=l&&l>u[1]&&(u[1]=l);var h=e.get("colorMappingBy"),c={type:r.name,dataExtent:u,visual:r.range};"color"!==c.type||"index"!==h&&"id"!==h?c.mappingMethod="linear":(c.mappingMethod="category",c.loop=!0);var d=new sL(c);return d.__drColorMappingBy=h,d}}}function zd(t,e){var i=t.get(e);return hL(i)&&i.length?{name:e,range:i}:null}function Bd(t,e,i,n,o,r){var s=a({},e);if(o){var l=o.type,u="color"===l&&o.__drColorMappingBy,h="index"===u?n:"id"===u?r.mapIdToIndex(i.getId()):i.getValue(t.get("visualDimension"));s[l]=o.mapValueToVisual(h)}return s}function Vd(t,e,i,n){var o,a;if(!t.isRemoved()){var r=t.getLayout();o=r.width,a=r.height;var s=(f=t.getModel()).get(vL),l=f.get(yL)/2,u=qd(f),h=Math.max(s,u),c=s-l,d=h-l,f=t.getModel();t.setLayout({borderWidth:s,upperHeight:h,upperLabelHeight:u},!0);var p=(o=fL(o-2*c,0))*(a=fL(a-c-d,0)),g=Gd(t,f,p,e,i,n);if(g.length){var m={x:c,y:d,width:o,height:a},v=pL(o,a),y=1/0,x=[];x.area=0;for(var _=0,w=g.length;_<w;){var b=g[_];x.push(b),x.area+=b.getLayout().area;var S=Zd(x,v,e.squareRatio);S<=y?(_++,y=S):(x.area-=x.pop().getLayout().area,Ud(x,v,m,l,!1),v=pL(m.width,m.height),x.length=x.area=0,y=1/0)}if(x.length&&Ud(x,v,m,l,!0),!i){var M=f.get("childrenVisibleMin");null!=M&&p<M&&(i=!0)}for(var _=0,w=g.length;_<w;_++)Vd(g[_],e,i,n+1)}}}function Gd(t,e,i,n,o,a){var r=t.children||[],s=n.sort;"asc"!==s&&"desc"!==s&&(s=null);var l=null!=n.leafDepth&&n.leafDepth<=a;if(o&&!l)return t.viewChildren=[];Wd(r=g(r,function(t){return!t.isRemoved()}),s);var u=Hd(e,r,s);if(0===u.sum)return t.viewChildren=[];if(u.sum=Fd(e,i,u.sum,s,r),0===u.sum)return t.viewChildren=[];for(var h=0,c=r.length;h<c;h++){var d=r[h].getValue()/u.sum*i;r[h].setLayout({area:d})}return l&&(r.length&&t.setLayout({isLeafRoot:!0},!0),r.length=0),t.viewChildren=r,t.setLayout({dataExtent:u.dataExtent},!0),r}function Fd(t,e,i,n,o){if(!n)return i;for(var a=t.get("visibleMin"),r=o.length,s=r,l=r-1;l>=0;l--){var u=o["asc"===n?r-l-1:l].getValue();u/i*e<a&&(s=l,i-=u)}return"asc"===n?o.splice(0,r-s):o.splice(s,r-s),i}function Wd(t,e){return e&&t.sort(function(t,i){var n="asc"===e?t.getValue()-i.getValue():i.getValue()-t.getValue();return 0===n?"asc"===e?t.dataIndex-i.dataIndex:i.dataIndex-t.dataIndex:n}),t}function Hd(t,e,i){for(var n=0,o=0,a=e.length;o<a;o++)n+=e[o].getValue();var r=t.get("visualDimension");if(e&&e.length)if("value"===r&&i)s=[e[e.length-1].getValue(),e[0].getValue()],"asc"===i&&s.reverse();else{var s=[1/0,-1/0];mL(e,function(t){var e=t.getValue(r);e<s[0]&&(s[0]=e),e>s[1]&&(s[1]=e)})}else s=[NaN,NaN];return{sum:n,dataExtent:s}}function Zd(t,e,i){for(var n,o=0,a=1/0,r=0,s=t.length;r<s;r++)(n=t[r].getLayout().area)&&(n<a&&(a=n),n>o&&(o=n));var l=t.area*t.area,u=e*e*i;return l?fL(u*o/l,l/(u*a)):1/0}function Ud(t,e,i,n,o){var a=e===i.width?0:1,r=1-a,s=["x","y"],l=["width","height"],u=i[s[a]],h=e?t.area/e:0;(o||h>i[l[r]])&&(h=i[l[r]]);for(var c=0,d=t.length;c<d;c++){var f=t[c],p={},g=h?f.getLayout().area/h:0,m=p[l[r]]=fL(h-2*n,0),v=i[s[a]]+i[l[a]]-u,y=c===d-1||v<g?v:g,x=p[l[a]]=fL(y-2*n,0);p[s[r]]=i[s[r]]+pL(n,m/2),p[s[a]]=u+pL(n,x/2),u+=y,f.setLayout(p,!0)}i[s[r]]+=h,i[l[r]]-=h}function Xd(t,e,i,n,o){var a=(e||{}).node,r=[n,o];if(!a||a===i)return r;for(var s,l=n*o,u=l*t.option.zoomToNodeRatio;s=a.parentNode;){for(var h=0,c=s.children,d=0,f=c.length;d<f;d++)h+=c[d].getValue();var p=a.getValue();if(0===p)return r;u*=h/p;var g=s.getModel(),m=g.get(vL);(u+=4*m*m+(3*m+Math.max(m,qd(g)))*Math.pow(u,.5))>UM&&(u=UM),a=s}u<l&&(u=l);var v=Math.pow(u/l,.5);return[n*v,o*v]}function jd(t,e,i){if(e)return{x:e.x,y:e.y};var n={x:0,y:0};if(!i)return n;var o=i.node,a=o.getLayout();if(!a)return n;for(var r=[a.width/2,a.height/2],s=o;s;){var l=s.getLayout();r[0]+=l.x,r[1]+=l.y,s=s.parentNode}return{x:t.width/2-r[0],y:t.height/2-r[1]}}function Yd(t,e,i,n,o){var a=t.getLayout(),r=i[o],s=r&&r===t;if(!(r&&!s||o===i.length&&t!==n)){t.setLayout({isInView:!0,invisible:!s&&!e.intersect(a),isAboveViewRoot:s},!0);var l=new de(e.x-a.x,e.y-a.y,e.width,e.height);mL(t.viewChildren||[],function(t){Yd(t,l,i,n,o+1)})}}function qd(t){return t.get(xL)?t.get(_L):0}function Kd(t){return"_EC_"+t}function $d(t,e){this.id=null==t?"":t,this.inEdges=[],this.outEdges=[],this.edges=[],this.hostGraph,this.dataIndex=null==e?-1:e}function Jd(t,e,i){this.node1=t,this.node2=e,this.dataIndex=null==i?-1:i}function Qd(t){return isNaN(+t.cpx1)||isNaN(+t.cpy1)}function tf(t){return"_"+t+"Type"}function ef(t,e,i){var n=e.getItemVisual(i,"color"),o=e.getItemVisual(i,t),a=e.getItemVisual(i,t+"Size");if(o&&"none"!==o){y(a)||(a=[a,a]);var r=$l(o,-a[0]/2,-a[1]/2,a[0],a[1],n);return r.name=t,r}}function nf(t){var e=new CL({name:"line"});return of(e.shape,t),e}function of(t,e){var i=e[0],n=e[1],o=e[2];t.x1=i[0],t.y1=i[1],t.x2=n[0],t.y2=n[1],t.percent=1,o?(t.cpx1=o[0],t.cpy1=o[1]):(t.cpx1=NaN,t.cpy1=NaN)}function af(t,e,i){tb.call(this),this._createLine(t,e,i)}function rf(t){this._ctor=t||af,this.group=new tb}function sf(t,e,i,n){if(cf(e.getItemLayout(i))){var o=new t._ctor(e,i,n);e.setItemGraphicEl(i,o),t.group.add(o)}}function lf(t,e,i,n,o,a){var r=e.getItemGraphicEl(n);cf(i.getItemLayout(o))?(r?r.updateData(i,o,a):r=new t._ctor(i,o,a),i.setItemGraphicEl(o,r),t.group.add(r)):t.group.remove(r)}function uf(t){var e=t.hostModel;return{lineStyle:e.getModel("lineStyle").getLineStyle(),hoverLineStyle:e.getModel("emphasis.lineStyle").getLineStyle(),labelModel:e.getModel("label"),hoverLabelModel:e.getModel("emphasis.label")}}function hf(t){return isNaN(t[0])||isNaN(t[1])}function cf(t){return!hf(t[0])&&!hf(t[1])}function df(t,e,i){for(var n,o=t[0],a=t[1],r=t[2],s=1/0,l=i*i,u=.1,h=.1;h<=.9;h+=.1)NL[0]=RL(o[0],a[0],r[0],h),NL[1]=RL(o[1],a[1],r[1],h),(f=BL(zL(NL,e)-l))<s&&(s=f,n=h);for(var c=0;c<32;c++){var d=n+u;OL[0]=RL(o[0],a[0],r[0],n),OL[1]=RL(o[1],a[1],r[1],n),EL[0]=RL(o[0],a[0],r[0],d),EL[1]=RL(o[1],a[1],r[1],d);var f=zL(OL,e)-l;if(BL(f)<.01)break;var p=zL(EL,e)-l;u/=2,f<0?p>=0?n+=u:n-=u:p>=0?n-=u:n+=u}return n}function ff(t,e){return t.getVisual("opacity")||t.getModel().get(e)}function pf(t,e,i){var n=t.getGraphicEl(),o=ff(t,e);null!=i&&(null==o&&(o=1),o*=i),n.downplay&&n.downplay(),n.traverse(function(t){"group"!==t.type&&t.setStyle("opacity",o)})}function gf(t,e){var i=ff(t,e),n=t.getGraphicEl();n.highlight&&n.highlight(),n.traverse(function(t){"group"!==t.type&&t.setStyle("opacity",i)})}function mf(t){return t instanceof Array||(t=[t,t]),t}function vf(t){var e=t.coordinateSystem;if(!e||"view"===e.type){var i=t.getGraph();i.eachNode(function(t){var e=t.getModel();t.setLayout([+e.get("x"),+e.get("y")])}),yf(i)}}function yf(t){t.eachEdge(function(t){var e=t.getModel().get("lineStyle.curveness")||0,i=F(t.node1.getLayout()),n=F(t.node2.getLayout()),o=[i,n];+e&&o.push([(i[0]+n[0])/2-(i[1]-n[1])*e,(i[1]+n[1])/2-(n[0]-i[0])*e]),t.setLayout(o)})}function xf(t){var e=t.coordinateSystem;if(!e||"view"===e.type){var i=e.getBoundingRect(),n=t.getData(),o=n.graph,a=0,r=n.getSum("value"),s=2*Math.PI/(r||n.count()),l=i.width/2+i.x,u=i.height/2+i.y,h=Math.min(i.width,i.height)/2;o.eachNode(function(t){var e=t.getValue("value");a+=s*(r?e:1)/2,t.setLayout([h*Math.cos(a)+l,h*Math.sin(a)+u]),a+=s*(r?e:1)/2}),n.setLayout({cx:l,cy:u}),o.eachEdge(function(t){var e,i=t.getModel().get("lineStyle.curveness")||0,n=F(t.node1.getLayout()),o=F(t.node2.getLayout()),a=(n[0]+o[0])/2,r=(n[1]+o[1])/2;+i&&(e=[l*(i*=3)+a*(1-i),u*i+r*(1-i)]),t.setLayout([n,o,e])})}}function _f(t,e,i){for(var n=i.rect,o=n.width,a=n.height,r=[n.x+o/2,n.y+a/2],s=null==i.gravity?.1:i.gravity,l=0;l<t.length;l++){var u=t[l];u.p||(u.p=V(o*(Math.random()-.5)+r[0],a*(Math.random()-.5)+r[1])),u.pp=F(u.p),u.edges=null}var h=.6;return{warmUp:function(){h=.5},setFixed:function(e){t[e].fixed=!0},setUnfixed:function(e){t[e].fixed=!1},step:function(i){for(var n=[],o=t.length,a=0;a<e.length;a++){var l=e[a],u=l.n1;U(n,(p=l.n2).p,u.p);var c=X(n)-l.d,d=p.w/(u.w+p.w);isNaN(d)&&(d=0),q(n,n),!u.fixed&&WL(u.p,u.p,n,d*c*h),!p.fixed&&WL(p.p,p.p,n,-(1-d)*c*h)}for(a=0;a<o;a++)(v=t[a]).fixed||(U(n,r,v.p),WL(v.p,v.p,n,s*h));for(a=0;a<o;a++)for(var u=t[a],f=a+1;f<o;f++){var p=t[f];U(n,p.p,u.p),0===(c=X(n))&&(W(n,Math.random()-.5,Math.random()-.5),c=1);var g=(u.rep+p.rep)/c/c;!u.fixed&&WL(u.pp,u.pp,n,g),!p.fixed&&WL(p.pp,p.pp,n,-g)}for(var m=[],a=0;a<o;a++){var v=t[a];v.fixed||(U(m,v.p,v.pp),WL(v.p,v.p,m,h),G(v.pp,v.p))}h*=.992,i&&i(t,e,h<.01)}}}function wf(t,e,i){var n=t.getBoxLayoutParams();return n.aspect=i,ha(n,{width:e.getWidth(),height:e.getHeight()})}function bf(t,e){var i=t.get("center"),n=e.getWidth(),o=e.getHeight(),a=Math.min(n,o);return{cx:Bo(i[0],e.getWidth()),cy:Bo(i[1],e.getHeight()),r:Bo(t.get("radius"),a/2)}}function Sf(t,e){return e&&("string"==typeof e?t=e.replace("{value}",null!=t?t:""):"function"==typeof e&&(t=e(t))),t}function Mf(t,e){function i(){a.ignore=a.hoverIgnore,r.ignore=r.hoverIgnore}function n(){a.ignore=a.normalIgnore,r.ignore=r.normalIgnore}tb.call(this);var o=new fM,a=new pM,r=new aM;this.add(o),this.add(a),this.add(r),this.updateData(t,e,!0),this.on("emphasis",i).on("normal",n).on("mouseover",i).on("mouseout",n)}function If(t,e){return ha(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()})}function Tf(t,e){for(var i=t.mapDimension("value"),n=t.mapArray(i,function(t){return t}),o=[],a="ascending"===e,r=0,s=t.count();r<s;r++)o[r]=r;return"function"==typeof e?o.sort(e):"none"!==e&&o.sort(function(t,e){return a?n[t]-n[e]:n[e]-n[t]}),o}function Af(t){t.each(function(e){var i,n,o,a,r=t.getItemModel(e),s=r.getModel("label").get("position"),l=r.getModel("labelLine"),u=t.getItemLayout(e),h=u.points,c="inner"===s||"inside"===s||"center"===s;if(c)i="center",a=[[n=(h[0][0]+h[1][0]+h[2][0]+h[3][0])/4,o=(h[0][1]+h[1][1]+h[2][1]+h[3][1])/4],[n,o]];else{var d,f,p,g=l.get("length");"left"===s?(d=(h[3][0]+h[0][0])/2,f=(h[3][1]+h[0][1])/2,n=(p=d-g)-5,i="right"):(d=(h[1][0]+h[2][0])/2,f=(h[1][1]+h[2][1])/2,n=(p=d+g)+5,i="left");var m=f;a=[[d,f],[p,m]],o=m}u.label={linePoints:a,x:n,y:o,verticalAlign:"middle",textAlign:i,inside:c}})}function Df(t){if(!t.parallel){var e=!1;d(t.series,function(t){t&&"parallel"===t.type&&(e=!0)}),e&&(t.parallel=[{}])}}function Cf(t){d(Di(t.parallelAxis),function(e){if(w(e)){var i=e.parallelIndex||0,o=Di(t.parallel)[i];o&&o.parallelAxisDefault&&n(e,o.parallelAxisDefault,!1)}})}function Lf(t,e){var i=t[e]-t[1-e];return{span:Math.abs(i),sign:i>0?-1:i<0?1:e?-1:1}}function kf(t,e){return Math.min(e[1],Math.max(e[0],t))}function Pf(t,e,i){this._axesMap=R(),this._axesLayout={},this.dimensions=t.dimensions,this._rect,this._model=t,this._init(t,e,i)}function Nf(t,e){return $L(JL(t,e[0]),e[1])}function Of(t,e){var i=e.layoutLength/(e.axisCount-1);return{position:i*t,axisNameAvailableWidth:i,axisLabelShow:!0}}function Ef(t,e){var i,n,o=e.layoutLength,a=e.axisExpandWidth,r=e.axisCount,s=e.axisCollapseWidth,l=e.winInnerIndices,u=s,h=!1;return t<l[0]?(i=t*s,n=s):t<=l[1]?(i=e.axisExpandWindow0Pos+t*a-e.axisExpandWindow[0],u=a,h=!0):(i=o-(r-1-t)*s,n=s),{position:i,axisNameAvailableWidth:u,axisLabelShow:h,nameTruncateMaxWidth:n}}function Rf(t){fw.call(this),this._zr=t,this.group=new tb,this._brushType,this._brushOption,this._panels,this._track=[],this._dragging,this._covers=[],this._creatingCover,this._creatingPanel,this._enableGlobalPan,this._uid="brushController_"+vk++,this._handlers={},ak(yk,function(t,e){this._handlers[e]=m(t,this)},this)}function zf(t,e){var o=t._zr;t._enableGlobalPan||Qh(o,fk,t._uid),ak(t._handlers,function(t,e){o.on(e,t)}),t._brushType=e.brushType,t._brushOption=n(i(mk),e,!0)}function Bf(t){var e=t._zr;tc(e,fk,t._uid),ak(t._handlers,function(t,i){e.off(i,t)}),t._brushType=t._brushOption=null}function Vf(t,e){var i=xk[e.brushType].createCover(t,e);return i.__brushOption=e,Wf(i,e),t.group.add(i),i}function Gf(t,e){var i=Zf(e);return i.endCreating&&(i.endCreating(t,e),Wf(e,e.__brushOption)),e}function Ff(t,e){var i=e.__brushOption;Zf(e).updateCoverShape(t,e,i.range,i)}function Wf(t,e){var i=e.z;null==i&&(i=hk),t.traverse(function(t){t.z=i,t.z2=i})}function Hf(t,e){Zf(e).updateCommon(t,e),Ff(t,e)}function Zf(t){return xk[t.__brushOption.brushType]}function Uf(t,e,i){var n=t._panels;if(!n)return!0;var o,a=t._transform;return ak(n,function(t){t.isTargetByCursor(e,i,a)&&(o=t)}),o}function Xf(t,e){var i=t._panels;if(!i)return!0;var n=e.__brushOption.panelId;return null==n||i[n]}function jf(t){var e=t._covers,i=e.length;return ak(e,function(e){t.group.remove(e)},t),e.length=0,!!i}function Yf(t,e){var n=rk(t._covers,function(t){var e=t.__brushOption,n=i(e.range);return{brushType:e.brushType,panelId:e.panelId,range:n}});t.trigger("brush",n,{isEnd:!!e.isEnd,removeOnClick:!!e.removeOnClick})}function qf(t){var e=t._track;if(!e.length)return!1;var i=e[e.length-1],n=e[0],o=i[0]-n[0],a=i[1]-n[1];return uk(o*o+a*a,.5)>ck}function Kf(t){var e=t.length-1;return e<0&&(e=0),[t[0],t[e]]}function $f(t,e,i,n){var o=new tb;return o.add(new vM({name:"main",style:ep(i),silent:!0,draggable:!0,cursor:"move",drift:ok(t,e,o,"nswe"),ondragend:ok(Yf,e,{isEnd:!0})})),ak(n,function(i){o.add(new vM({name:i,style:{opacity:0},draggable:!0,silent:!0,invisible:!0,drift:ok(t,e,o,i),ondragend:ok(Yf,e,{isEnd:!0})}))}),o}function Jf(t,e,i,n){var o=n.brushStyle.lineWidth||0,a=lk(o,dk),r=i[0][0],s=i[1][0],l=r-o/2,u=s-o/2,h=i[0][1],c=i[1][1],d=h-a+o/2,f=c-a+o/2,p=h-r,g=c-s,m=p+o,v=g+o;tp(t,e,"main",r,s,p,g),n.transformable&&(tp(t,e,"w",l,u,a,v),tp(t,e,"e",d,u,a,v),tp(t,e,"n",l,u,m,a),tp(t,e,"s",l,f,m,a),tp(t,e,"nw",l,u,a,a),tp(t,e,"ne",d,u,a,a),tp(t,e,"sw",l,f,a,a),tp(t,e,"se",d,f,a,a))}function Qf(t,e){var i=e.__brushOption,n=i.transformable,o=e.childAt(0);o.useStyle(ep(i)),o.attr({silent:!n,cursor:n?"move":"default"}),ak(["w","e","n","s","se","sw","ne","nw"],function(i){var o=e.childOfName(i),a=op(t,i);o&&o.attr({silent:!n,invisible:!n,cursor:n?gk[a]+"-resize":null})})}function tp(t,e,i,n,o,a,r){var s=e.childOfName(i);s&&s.setShape(up(lp(t,e,[[n,o],[n+a,o+r]])))}function ep(t){return r({strokeNoScale:!0},t.brushStyle)}function ip(t,e,i,n){var o=[sk(t,i),sk(e,n)],a=[lk(t,i),lk(e,n)];return[[o[0],a[0]],[o[1],a[1]]]}function np(t){return To(t.group)}function op(t,e){if(e.length>1)return("e"===(i=[op(t,(e=e.split(""))[0]),op(t,e[1])])[0]||"w"===i[0])&&i.reverse(),i.join("");var i=Do({w:"left",e:"right",n:"top",s:"bottom"}[e],np(t));return{left:"w",right:"e",top:"n",bottom:"s"}[i]}function ap(t,e,i,n,o,a,r,s){var l=n.__brushOption,u=t(l.range),h=sp(i,a,r);ak(o.split(""),function(t){var e=pk[t];u[e[0]][e[1]]+=h[e[0]]}),l.range=e(ip(u[0][0],u[1][0],u[0][1],u[1][1])),Hf(i,n),Yf(i,{isEnd:!1})}function rp(t,e,i,n,o){var a=e.__brushOption.range,r=sp(t,i,n);ak(a,function(t){t[0]+=r[0],t[1]+=r[1]}),Hf(t,e),Yf(t,{isEnd:!1})}function sp(t,e,i){var n=t.group,o=n.transformCoordToLocal(e,i),a=n.transformCoordToLocal(0,0);return[o[0]-a[0],o[1]-a[1]]}function lp(t,e,n){var o=Xf(t,e);return o&&!0!==o?o.clipPath(n,t._transform):i(n)}function up(t){var e=sk(t[0][0],t[1][0]),i=sk(t[0][1],t[1][1]);return{x:e,y:i,width:lk(t[0][0],t[1][0])-e,height:lk(t[0][1],t[1][1])-i}}function hp(t,e,i){if(t._brushType){var n=t._zr,o=t._covers,a=Uf(t,e,i);if(!t._dragging)for(var r=0;r<o.length;r++){var s=o[r].__brushOption;if(a&&(!0===a||s.panelId===a.panelId)&&xk[s.brushType].contain(o[r],i[0],i[1]))return}a&&n.setCursorStyle("crosshair")}}function cp(t){var e=t.event;e.preventDefault&&e.preventDefault()}function dp(t,e,i){return t.childOfName("main").contain(e,i)}function fp(t,e,n,o){var a,r=t._creatingCover,s=t._creatingPanel,l=t._brushOption;if(t._track.push(n.slice()),qf(t)||r){if(s&&!r){"single"===l.brushMode&&jf(t);var u=i(l);u.brushType=pp(u.brushType,s),u.panelId=!0===s?null:s.panelId,r=t._creatingCover=Vf(t,u),t._covers.push(r)}if(r){var h=xk[pp(t._brushType,s)];r.__brushOption.range=h.getCreatingRange(lp(t,r,t._track)),o&&(Gf(t,r),h.updateCommon(t,r)),Ff(t,r),a={isEnd:o}}}else o&&"single"===l.brushMode&&l.removeOnClick&&Uf(t,e,n)&&jf(t)&&(a={isEnd:o,removeOnClick:!0});return a}function pp(t,e){return"auto"===t?e.defaultBrushType:t}function gp(t){if(this._dragging){cp(t);var e=fp(this,t,this.group.transformCoordToLocal(t.offsetX,t.offsetY),!0);this._dragging=!1,this._track=[],this._creatingCover=null,e&&Yf(this,e)}}function mp(t){return{createCover:function(e,i){return $f(ok(ap,function(e){var i=[e,[0,100]];return t&&i.reverse(),i},function(e){return e[t]}),e,i,[["w","e"],["n","s"]][t])},getCreatingRange:function(e){var i=Kf(e);return[sk(i[0][t],i[1][t]),lk(i[0][t],i[1][t])]},updateCoverShape:function(e,i,n,o){var a,r=Xf(e,i);if(!0!==r&&r.getLinearBrushOtherExtent)a=r.getLinearBrushOtherExtent(t,e._transform);else{var s=e._zr;a=[0,[s.getWidth(),s.getHeight()][1-t]]}var l=[n,a];t&&l.reverse(),Jf(e,i,l,o)},updateCommon:Qf,contain:dp}}function vp(t){return t=_p(t),function(e,i){return Lo(e,t)}}function yp(t,e){return t=_p(t),function(i){var n=null!=e?e:i,o=n?t.width:t.height,a=n?t.x:t.y;return[a,a+(o||0)]}}function xp(t,e,i){return t=_p(t),function(n,o,a){return t.contain(o[0],o[1])&&!pc(n,e,i)}}function _p(t){return de.create(t)}function wp(t,e,i){return i&&"axisAreaSelect"===i.type&&e.findComponents({mainType:"parallelAxis",query:i})[0]===t}function bp(t){var e=t.axis;return f(t.activeIntervals,function(t){return{brushType:"lineX",panelId:"pl",range:[e.dataToCoord(t[0],!0),e.dataToCoord(t[1],!0)]}})}function Sp(t,e){return e.getComponent("parallel",t.get("parallelIndex"))}function Mp(t,e){var i=t._model;return i.get("axisExpandable")&&i.get("axisExpandTriggerOn")===e}function Ip(t,e){if(!t.encodeDefine){var i=e.ecModel.getComponent("parallel",e.get("parallelIndex"));if(i){var n=t.encodeDefine=R();d(i.dimensions,function(t){var e=Tp(t);n.set(t,e)})}}}function Tp(t){return+t.replace("dim","")}function Ap(t,e,i){var n=t.model,o=t.getRect(),a=new vM({shape:{x:o.x,y:o.y,width:o.width,height:o.height}}),r="horizontal"===n.get("layout")?"width":"height";return a.setShape(r,0),Io(a,{shape:{width:o.width,height:o.height}},e,i),a}function Dp(t,e,i,n){for(var o=[],a=0;a<i.length;a++){var r=i[a],s=t.get(t.mapDimension(r),e);Pp(s,n.getAxis(r).type)||o.push(n.dataToPoint(s,r))}return o}function Cp(t,e,i,n,o){var a=Dp(t,i,n,o),r=new pM({shape:{points:a},silent:!0,z2:10});return e.add(r),t.setItemGraphicEl(i,r),r}function Lp(t){var e=t.get("smooth",!0);return!0===e&&(e=Sk),{lineStyle:t.getModel("lineStyle").getLineStyle(),smooth:null!=e?e:Sk}}function kp(t,e,i,n){var o=n.lineStyle;e.hasItemOption&&(o=e.getItemModel(i).getModel("lineStyle").getLineStyle()),t.useStyle(o);var a=t.style;a.fill=null,a.stroke=e.getItemVisual(i,"color"),a.opacity=e.getItemVisual(i,"opacity"),n.smooth&&(t.shape.smooth=n.smooth)}function Pp(t,e){return"category"===e?null==t:null==t||isNaN(t)}function Np(t,e){return t.getVisual("opacity")||t.getModel().get(e)}function Op(t,e,i){var n=t.getGraphicEl(),o=Np(t,e);null!=i&&(null==o&&(o=1),o*=i),n.downplay&&n.downplay(),n.traverse(function(t){"group"!==t.type&&t.setStyle("opacity",o)})}function Ep(t,e){var i=Np(t,e),n=t.getGraphicEl();n.highlight&&n.highlight(),n.traverse(function(t){"group"!==t.type&&t.setStyle("opacity",i)})}function Rp(t,e,i){var n=new vM({shape:{x:t.x-10,y:t.y-10,width:0,height:t.height+20}});return Io(n,{shape:{width:t.width+20,height:t.height+20}},e,i),n}function zp(){function t(e,n){if(n>=i.length)return e;for(var o=-1,a=e.length,r=i[n++],s={},l={};++o<a;){var u=r(e[o]),h=l[u];h?h.push(e[o]):l[u]=[e[o]]}return d(l,function(e,i){s[i]=t(e,n)}),s}function e(t,o){if(o>=i.length)return t;var a=[],r=n[o++];return d(t,function(t,i){a.push({key:i,values:e(t,o)})}),r?a.sort(function(t,e){return r(t.key,e.key)}):a}var i=[],n=[];return{key:function(t){return i.push(t),this},sortKeys:function(t){return n[i.length-1]=t,this},entries:function(i){return e(t(i,0),0)}}}function Bp(t,e){return ha(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()})}function Vp(t,e,i,n,o,a,r,s){Fp(t,e,i,o,a,s),Zp(t,e,a,o,n,r,s),eg(t,s)}function Gp(t){d(t,function(t){var e=Qp(t.outEdges,Jp),i=Qp(t.inEdges,Jp),n=Math.max(e,i);t.setLayout({value:n},!0)})}function Fp(t,e,i,n,o,a){for(var r=[],s=[],l=[],u=[],h=0,c=0;c<e.length;c++)r[c]=1;for(c=0;c<t.length;c++)s[c]=t[c].inEdges.length,0===s[c]&&l.push(t[c]);for(;l.length;){for(var d=0;d<l.length;d++){var f=l[d];"vertical"===a?(f.setLayout({y:h},!0),f.setLayout({dy:i},!0)):(f.setLayout({x:h},!0),f.setLayout({dx:i},!0));for(var p=0;p<f.outEdges.length;p++){var g=f.outEdges[p];r[e.indexOf(g)]=0;var m=g.node2;0==--s[t.indexOf(m)]&&u.push(m)}}++h,l=u,u=[]}for(c=0;c<r.length;c++);Wp(t,h,a),Hp(t,"vertical"===a?(o-i)/(h-1):(n-i)/(h-1),a)}function Wp(t,e,i){d(t,function(t){t.outEdges.length||("vertical"===i?t.setLayout({y:e-1},!0):t.setLayout({x:e-1},!0))})}function Hp(t,e,i){d(t,function(t){if("vertical"===i){var n=t.getLayout().y*e;t.setLayout({y:n},!0)}else{var o=t.getLayout().x*e;t.setLayout({x:o},!0)}})}function Zp(t,e,i,n,o,a,r){var s=zp().key(Up(r)).sortKeys(function(t,e){return t-e}).entries(t).map(function(t){return t.values});Xp(t,s,e,i,n,o,r),jp(s,o,i,n,r);for(var l=1;a>0;a--)Yp(s,l*=.99,r),jp(s,o,i,n,r),tg(s,l,r),jp(s,o,i,n,r)}function Up(t){return"vertical"===t?function(t){return t.getLayout().y}:function(t){return t.getLayout().x}}function Xp(t,e,i,n,o,a,r){var s=[];d(e,function(t){var e=t.length,i=0,l=0;d(t,function(t){i+=t.getLayout().value}),l="vertical"===r?(o-(e-1)*a)/i:(n-(e-1)*a)/i,s.push(l)}),s.sort(function(t,e){return t-e});var l=s[0];d(e,function(t){d(t,function(t,e){var i=t.getLayout().value*l;"vertical"===r?(t.setLayout({x:e},!0),t.setLayout({dx:i},!0)):(t.setLayout({y:e},!0),t.setLayout({dy:i},!0))})}),d(i,function(t){var e=+t.getValue()*l;t.setLayout({dy:e},!0)})}function jp(t,e,i,n,o){d(t,function(t){var a,r,s,l=0,u=t.length;if("vertical"===o){var h;for(t.sort(function(t,e){return t.getLayout().x-e.getLayout().x}),s=0;s<u;s++)(r=l-(a=t[s]).getLayout().x)>0&&(h=a.getLayout().x+r,a.setLayout({x:h},!0)),l=a.getLayout().x+a.getLayout().dx+e;if((r=l-e-n)>0)for(h=a.getLayout().x-r,a.setLayout({x:h},!0),l=h,s=u-2;s>=0;--s)(r=(a=t[s]).getLayout().x+a.getLayout().dx+e-l)>0&&(h=a.getLayout().x-r,a.setLayout({x:h},!0)),l=a.getLayout().x}else{var c;for(t.sort(function(t,e){return t.getLayout().y-e.getLayout().y}),s=0;s<u;s++)(r=l-(a=t[s]).getLayout().y)>0&&(c=a.getLayout().y+r,a.setLayout({y:c},!0)),l=a.getLayout().y+a.getLayout().dy+e;if((r=l-e-i)>0)for(c=a.getLayout().y-r,a.setLayout({y:c},!0),l=c,s=u-2;s>=0;--s)(r=(a=t[s]).getLayout().y+a.getLayout().dy+e-l)>0&&(c=a.getLayout().y-r,a.setLayout({y:c},!0)),l=a.getLayout().y}})}function Yp(t,e,i){d(t.slice().reverse(),function(t){d(t,function(t){if(t.outEdges.length){var n=Qp(t.outEdges,qp,i)/Qp(t.outEdges,Jp,i);if("vertical"===i){var o=t.getLayout().x+(n-$p(t,i))*e;t.setLayout({x:o},!0)}else{var a=t.getLayout().y+(n-$p(t,i))*e;t.setLayout({y:a},!0)}}})})}function qp(t,e){return $p(t.node2,e)*t.getValue()}function Kp(t,e){return $p(t.node1,e)*t.getValue()}function $p(t,e){return"vertical"===e?t.getLayout().x+t.getLayout().dx/2:t.getLayout().y+t.getLayout().dy/2}function Jp(t){return t.getValue()}function Qp(t,e,i){for(var n=0,o=t.length,a=-1;++a<o;){var r=+e.call(t,t[a],i);isNaN(r)||(n+=r)}return n}function tg(t,e,i){d(t,function(t){d(t,function(t){if(t.inEdges.length){var n=Qp(t.inEdges,Kp,i)/Qp(t.inEdges,Jp,i);if("vertical"===i){var o=t.getLayout().x+(n-$p(t,i))*e;t.setLayout({x:o},!0)}else{var a=t.getLayout().y+(n-$p(t,i))*e;t.setLayout({y:a},!0)}}})})}function eg(t,e){d(t,function(t){"vertical"===e?(t.outEdges.sort(function(t,e){return t.node2.getLayout().x-e.node2.getLayout().x}),t.inEdges.sort(function(t,e){return t.node1.getLayout().x-e.node1.getLayout().x})):(t.outEdges.sort(function(t,e){return t.node2.getLayout().y-e.node2.getLayout().y}),t.inEdges.sort(function(t,e){return t.node1.getLayout().y-e.node1.getLayout().y}))}),d(t,function(t){var e=0,i=0;d(t.outEdges,function(t){t.setLayout({sy:e},!0),e+=t.getLayout().dy}),d(t.inEdges,function(t){t.setLayout({ty:i},!0),i+=t.getLayout().dy})})}function ig(t,e,i,n,o){var a=t.ends,r=new Pk({shape:{points:o?og(a,n,t):a}});return ng(t,r,e,i,o),r}function ng(t,e,i,n,o){var a=i.hostModel;(0,RM[o?"initProps":"updateProps"])(e,{shape:{points:t.ends}},a,n);var r=i.getItemModel(n),s=r.getModel(Lk),l=i.getItemVisual(n,"color"),u=s.getItemStyle(["borderColor"]);u.stroke=l,u.strokeNoScale=!0,e.useStyle(u),e.z2=100,co(e,r.getModel(kk).getItemStyle())}function og(t,e,i){return f(t,function(t){return t=t.slice(),t[e]=i.initBaseline,t})}function ag(t){var e=[],i=[];return t.eachSeriesByType("boxplot",function(t){var n=t.getBaseAxis(),o=l(i,n);o<0&&(o=i.length,i[o]=n,e[o]={axis:n,seriesModels:[]}),e[o].seriesModels.push(t)}),e}function rg(t){var e,i,n=t.axis,o=t.seriesModels,a=o.length,r=t.boxWidthList=[],s=t.boxOffsetList=[],l=[];if("category"===n.type)i=n.getBandWidth();else{var u=0;Ok(o,function(t){u=Math.max(u,t.getData().count())}),e=n.getExtent(),Math.abs(e[1]-e[0])}Ok(o,function(t){var e=t.get("boxWidth");y(e)||(e=[e,e]),l.push([Bo(e[0],i)||0,Bo(e[1],i)||0])});var h=.8*i-2,c=h/a*.3,d=(h-c*(a-1))/a,f=d/2-h/2;Ok(o,function(t,e){s.push(f),f+=c+d,r.push(Math.min(Math.max(d,l[e][0]),l[e][1]))})}function sg(t,e,i){function n(t,i,n){var o=s.get(i,n),a=[];a[u]=t,a[h]=o;var l;return isNaN(t)||isNaN(o)?l=[NaN,NaN]:(l=r.dataToPoint(a))[u]+=e,l}function o(t,e,i){var n=e.slice(),o=e.slice();n[u]+=l,o[u]-=l,i?t.push(n,o):t.push(o,n)}function a(t,e){var i=e.slice(),n=e.slice();i[u]-=l,n[u]+=l,t.push(i,n)}var r=t.coordinateSystem,s=t.getData(),l=i/2,u="horizontal"===t.get("layout")?0:1,h=1-u,c=["x","y"],d=s.mapDimension(c[u]),f=s.mapDimension(c[h],!0);if(!(null==d||f.length<5))for(var p=0;p<s.count();p++){var g=s.get(d,p),m=n(g,f[2],p),v=n(g,f[0],p),y=n(g,f[1],p),x=n(g,f[3],p),_=n(g,f[4],p),w=[];o(w,y,0),o(w,x,1),w.push(v,y,_,x),a(w,v),a(w,_),a(w,m),s.setItemLayout(p,{initBaseline:m[h],ends:w})}}function lg(t,e,i){var n=t.ends;return new Bk({shape:{points:i?hg(n,t):n},z2:100})}function ug(t,e,i,n){var o=e.getItemModel(i),a=o.getModel(Ek),r=e.getItemVisual(i,"color"),s=e.getItemVisual(i,"borderColor")||r,l=a.getItemStyle(zk);t.useStyle(l),t.style.strokeNoScale=!0,t.style.fill=r,t.style.stroke=s,t.__simpleBox=n,co(t,o.getModel(Rk).getItemStyle())}function hg(t,e){return f(t,function(t){return t=t.slice(),t[1]=e.initBaseline,t})}function cg(t,e,i){var n=t.getData(),o=n.getLayout("largePoints"),a=new Vk({shape:{points:o},__sign:1});e.add(a);var r=new Vk({shape:{points:o},__sign:-1});e.add(r),dg(1,a,t,n),dg(-1,r,t,n),i&&(a.incremental=!0,r.incremental=!0)}function dg(t,e,i,n){var o=t>0?"P":"N",a=n.getVisual("borderColor"+o)||n.getVisual("color"+o),r=i.getModel(Ek).getItemStyle(zk);e.useStyle(r),e.style.fill=null,e.style.stroke=a}function fg(t,e,i,n,o){return i>n?-1:i<n?1:e>0?t.get(o,e-1)<=n?1:-1:1}function pg(t,e){var i,n=t.getBaseAxis(),o="category"===n.type?n.getBandWidth():(i=n.getExtent(),Math.abs(i[1]-i[0])/e.count()),a=Bo(A(t.get("barMaxWidth"),o),o),r=Bo(A(t.get("barMinWidth"),1),o),s=t.get("barWidth");return null!=s?Bo(s,o):Math.max(Math.min(o/2,a),r)}function gg(t){return y(t)||(t=[+t,+t]),t}function mg(t,e){t.eachChild(function(t){t.attr({z:e.z,zlevel:e.zlevel,style:{stroke:"stroke"===e.brushType?e.color:null,fill:"fill"===e.brushType?e.color:null}})})}function vg(t,e){tb.call(this);var i=new _u(t,e),n=new tb;this.add(i),this.add(n),n.beforeUpdate=function(){this.attr(i.getScale())},this.updateData(t,e)}function yg(t){var e=t.data;e&&e[0]&&e[0][0]&&e[0][0].coord&&(t.data=f(e,function(t){var e={coords:[t[0].coord,t[1].coord]};return t[0].name&&(e.fromName=t[0].name),t[1].name&&(e.toName=t[1].name),o([e,t[0],t[1]])}))}function xg(t,e,i){tb.call(this),this.add(this.createLine(t,e,i)),this._updateEffectSymbol(t,e)}function _g(t,e,i){tb.call(this),this._createPolyline(t,e,i)}function wg(t,e,i){xg.call(this,t,e,i),this._lastFrame=0,this._lastFramePercent=0}function bg(){this.group=new tb}function Sg(t){return t instanceof Array||(t=[t,t]),t}function Mg(){var t=iw();this.canvas=t,this.blurSize=30,this.pointSize=20,this.maxOpacity=1,this.minOpacity=0,this._gradientPixels={}}function Ig(t,e,i){var n=t[1]-t[0],o=(e=f(e,function(e){return{interval:[(e.interval[0]-t[0])/n,(e.interval[1]-t[0])/n]}})).length,a=0;return function(t){for(n=a;n<o;n++)if((r=e[n].interval)[0]<=t&&t<=r[1]){a=n;break}if(n===o)for(var n=a-1;n>=0;n--){var r=e[n].interval;if(r[0]<=t&&t<=r[1]){a=n;break}}return n>=0&&n<o&&i[n]}}function Tg(t,e){var i=t[1]-t[0];return e=[(e[0]-t[0])/i,(e[1]-t[0])/i],function(t){return t>=e[0]&&t<=e[1]}}function Ag(t){var e=t.dimensions;return"lng"===e[0]&&"lat"===e[1]}function Dg(t,e,i,n){var o=t.getItemLayout(e),a=i.get("symbolRepeat"),r=i.get("symbolClip"),s=i.get("symbolPosition")||"start",l=(i.get("symbolRotate")||0)*Math.PI/180||0,u=i.get("symbolPatternSize")||2,h=i.isAnimationEnabled(),c={dataIndex:e,layout:o,itemModel:i,symbolType:t.getItemVisual(e,"symbol")||"circle",color:t.getItemVisual(e,"color"),symbolClip:r,symbolRepeat:a,symbolRepeatDirection:i.get("symbolRepeatDirection"),symbolPatternSize:u,rotation:l,animationModel:h?i:null,hoverAnimation:h&&i.get("hoverAnimation"),z2:i.getShallow("z",!0)||0};Cg(i,a,o,n,c),kg(t,e,o,a,r,c.boundingLength,c.pxSign,u,n,c),Pg(i,c.symbolScale,l,n,c);var d=c.symbolSize,f=i.get("symbolOffset");return y(f)&&(f=[Bo(f[0],d[0]),Bo(f[1],d[1])]),Ng(i,d,o,a,r,f,s,c.valueLineWidth,c.boundingLength,c.repeatCutLength,n,c),c}function Cg(t,e,i,n,o){var a,r=n.valueDim,s=t.get("symbolBoundingData"),l=n.coordSys.getOtherAxis(n.coordSys.getBaseAxis()),u=l.toGlobalCoord(l.dataToCoord(0)),h=1-+(i[r.wh]<=0);if(y(s)){var c=[Lg(l,s[0])-u,Lg(l,s[1])-u];c[1]<c[0]&&c.reverse(),a=c[h]}else a=null!=s?Lg(l,s)-u:e?n.coordSysExtent[r.index][h]-u:i[r.wh];o.boundingLength=a,e&&(o.repeatCutLength=i[r.wh]),o.pxSign=a>0?1:a<0?-1:0}function Lg(t,e){return t.toGlobalCoord(t.dataToCoord(t.scale.parse(e)))}function kg(t,e,i,n,o,a,r,s,l,u){var h=l.valueDim,c=l.categoryDim,d=Math.abs(i[c.wh]),f=t.getItemVisual(e,"symbolSize");y(f)?f=f.slice():(null==f&&(f="100%"),f=[f,f]),f[c.index]=Bo(f[c.index],d),f[h.index]=Bo(f[h.index],n?d:Math.abs(a)),u.symbolSize=f,(u.symbolScale=[f[0]/s,f[1]/s])[h.index]*=(l.isHorizontal?-1:1)*r}function Pg(t,e,i,n,o){var a=t.get(rP)||0;a&&(lP.attr({scale:e.slice(),rotation:i}),lP.updateTransform(),a/=lP.getLineScale(),a*=e[n.valueDim.index]),o.valueLineWidth=a}function Ng(t,e,i,n,o,r,s,l,u,h,c,d){var f=c.categoryDim,p=c.valueDim,g=d.pxSign,m=Math.max(e[p.index]+l,0),v=m;if(n){var y=Math.abs(u),x=T(t.get("symbolMargin"),"15%")+"",_=!1;x.lastIndexOf("!")===x.length-1&&(_=!0,x=x.slice(0,x.length-1)),x=Bo(x,e[p.index]);var w=Math.max(m+2*x,0),b=_?0:2*x,S=Jo(n),M=S?n:Kg((y+b)/w);w=m+2*(x=(y-M*m)/2/(_?M:M-1)),b=_?0:2*x,S||"fixed"===n||(M=h?Kg((Math.abs(h)+b)/w):0),v=M*w-b,d.repeatTimes=M,d.symbolMargin=x}var I=g*(v/2),A=d.pathPosition=[];A[f.index]=i[f.wh]/2,A[p.index]="start"===s?I:"end"===s?u-I:u/2,r&&(A[0]+=r[0],A[1]+=r[1]);var D=d.bundlePosition=[];D[f.index]=i[f.xy],D[p.index]=i[p.xy];var C=d.barRectShape=a({},i);C[p.wh]=g*Math.max(Math.abs(i[p.wh]),Math.abs(A[p.index]+I)),C[f.wh]=i[f.wh];var L=d.clipShape={};L[f.xy]=-i[f.xy],L[f.wh]=c.ecSize[f.wh],L[p.xy]=0,L[p.wh]=i[p.wh]}function Og(t){var e=t.symbolPatternSize,i=$l(t.symbolType,-e/2,-e/2,e,e,t.color);return i.attr({culling:!0}),"image"!==i.type&&i.setStyle({strokeNoScale:!0}),i}function Eg(t,e,i,n){function o(t){var e=l.slice(),n=i.pxSign,o=t;return("start"===i.symbolRepeatDirection?n>0:n<0)&&(o=h-1-t),e[u.index]=d*(o-h/2+.5)+l[u.index],{position:e,scale:i.symbolScale.slice(),rotation:i.rotation}}var a=t.__pictorialBundle,r=i.symbolSize,s=i.valueLineWidth,l=i.pathPosition,u=e.valueDim,h=i.repeatTimes||0,c=0,d=r[e.valueDim.index]+s+2*i.symbolMargin;for(jg(t,function(t){t.__pictorialAnimationIndex=c,t.__pictorialRepeatTimes=h,c<h?Yg(t,null,o(c),i,n):Yg(t,null,{scale:[0,0]},i,n,function(){a.remove(t)}),Wg(t,i),c++});c<h;c++){var f=Og(i);f.__pictorialAnimationIndex=c,f.__pictorialRepeatTimes=h,a.add(f);var p=o(c);Yg(f,{position:p.position,scale:[0,0]},{scale:p.scale,rotation:p.rotation},i,n),f.on("mouseover",function(){jg(t,function(t){t.trigger("emphasis")})}).on("mouseout",function(){jg(t,function(t){t.trigger("normal")})}),Wg(f,i)}}function Rg(t,e,i,n){var o=t.__pictorialBundle,a=t.__pictorialMainPath;a?Yg(a,null,{position:i.pathPosition.slice(),scale:i.symbolScale.slice(),rotation:i.rotation},i,n):(a=t.__pictorialMainPath=Og(i),o.add(a),Yg(a,{position:i.pathPosition.slice(),scale:[0,0],rotation:i.rotation},{scale:i.symbolScale.slice()},i,n),a.on("mouseover",function(){this.trigger("emphasis")}).on("mouseout",function(){this.trigger("normal")})),Wg(a,i)}function zg(t,e,i){var n=a({},e.barRectShape),o=t.__pictorialBarRect;o?Yg(o,null,{shape:n},e,i):(o=t.__pictorialBarRect=new vM({z2:2,shape:n,silent:!0,style:{stroke:"transparent",fill:"transparent",lineWidth:0}}),t.add(o))}function Bg(t,e,i,n){if(i.symbolClip){var o=t.__pictorialClipPath,r=a({},i.clipShape),s=e.valueDim,l=i.animationModel,u=i.dataIndex;if(o)Mo(o,{shape:r},l,u);else{r[s.wh]=0,o=new vM({shape:r}),t.__pictorialBundle.setClipPath(o),t.__pictorialClipPath=o;var h={};h[s.wh]=i.clipShape[s.wh],RM[n?"updateProps":"initProps"](o,{shape:h},l,u)}}}function Vg(t,e){var i=t.getItemModel(e);return i.getAnimationDelayParams=Gg,i.isAnimationEnabled=Fg,i}function Gg(t){return{index:t.__pictorialAnimationIndex,count:t.__pictorialRepeatTimes}}function Fg(){return this.parentModel.isAnimationEnabled()&&!!this.getShallow("animation")}function Wg(t,e){t.off("emphasis").off("normal");var i=e.symbolScale.slice();e.hoverAnimation&&t.on("emphasis",function(){this.animateTo({scale:[1.1*i[0],1.1*i[1]]},400,"elasticOut")}).on("normal",function(){this.animateTo({scale:i.slice()},400,"elasticOut")})}function Hg(t,e,i,n){var o=new tb,a=new tb;return o.add(a),o.__pictorialBundle=a,a.attr("position",i.bundlePosition.slice()),i.symbolRepeat?Eg(o,e,i):Rg(o,e,i),zg(o,i,n),Bg(o,e,i,n),o.__pictorialShapeStr=Xg(t,i),o.__pictorialSymbolMeta=i,o}function Zg(t,e,i){var n=i.animationModel,o=i.dataIndex;Mo(t.__pictorialBundle,{position:i.bundlePosition.slice()},n,o),i.symbolRepeat?Eg(t,e,i,!0):Rg(t,e,i,!0),zg(t,i,!0),Bg(t,e,i,!0)}function Ug(t,e,i,n){var o=n.__pictorialBarRect;o&&(o.style.text=null);var a=[];jg(n,function(t){a.push(t)}),n.__pictorialMainPath&&a.push(n.__pictorialMainPath),n.__pictorialClipPath&&(i=null),d(a,function(t){Mo(t,{scale:[0,0]},i,e,function(){n.parent&&n.parent.remove(n)})}),t.setItemGraphicEl(e,null)}function Xg(t,e){return[t.getItemVisual(e.dataIndex,"symbol")||"none",!!e.symbolRepeat,!!e.symbolClip].join(":")}function jg(t,e,i){d(t.__pictorialBundle.children(),function(n){n!==t.__pictorialBarRect&&e.call(i,n)})}function Yg(t,e,i,n,o,a){e&&t.attr(e),n.symbolClip&&!o?i&&t.attr(i):i&&RM[o?"updateProps":"initProps"](t,i,n.animationModel,n.dataIndex,a)}function qg(t,e,i){var n=i.color,o=i.dataIndex,a=i.itemModel,s=a.getModel("itemStyle").getItemStyle(["color"]),l=a.getModel("emphasis.itemStyle").getItemStyle(),u=a.getShallow("cursor");jg(t,function(t){t.setColor(n),t.setStyle(r({fill:n,opacity:i.opacity},s)),co(t,l),u&&(t.cursor=u),t.z2=i.z2});var h={},c=e.valueDim.posDesc[+(i.boundingLength>0)],d=t.__pictorialBarRect;Lh(d.style,h,a,n,e.seriesModel,o,c),co(d,h)}function Kg(t){var e=Math.round(t);return Math.abs(t-e)<1e-4?e:Math.ceil(t)}function $g(t,e,i){this.dimension="single",this.dimensions=["single"],this._axis=null,this._rect,this._init(t,e,i),this.model=t}function Jg(t,e){e=e||{};var i=t.coordinateSystem,n=t.axis,o={},a=n.position,r=n.orient,s=i.getRect(),l=[s.x,s.x+s.width,s.y,s.y+s.height],u={horizontal:{top:l[2],bottom:l[3]},vertical:{left:l[0],right:l[1]}};o.position=["vertical"===r?u.vertical[a]:l[0],"horizontal"===r?u.horizontal[a]:l[3]];o.rotation=Math.PI/2*{horizontal:0,vertical:1}[r];o.labelDirection=o.tickDirection=o.nameDirection={top:-1,bottom:1,right:1,left:-1}[a],t.get("axisTick.inside")&&(o.tickDirection=-o.tickDirection),T(e.labelInside,t.get("axisLabel.inside"))&&(o.labelDirection=-o.labelDirection);var h=e.rotate;return null==h&&(h=t.get("axisLabel.rotate")),o.labelRotation="top"===a?-h:h,o.z2=1,o}function Qg(t,e,i,n,o){var r=t.axis;if(!r.scale.isBlank()&&r.containData(e))if(t.involveSeries){var s=tm(e,t),l=s.payloadBatch,u=s.snapToValue;l[0]&&null==o.seriesIndex&&a(o,l[0]),!n&&t.snap&&r.containData(u)&&null!=u&&(e=u),i.showPointer(t,e,l,o),i.showTooltip(t,s,u)}else i.showPointer(t,e)}function tm(t,e){var i=e.axis,n=i.dim,o=t,a=[],r=Number.MAX_VALUE,s=-1;return pP(e.seriesModels,function(e,l){var u,h,c=e.getData().mapDimension(n,!0);if(e.getAxisTooltipData){var d=e.getAxisTooltipData(c,t,i);h=d.dataIndices,u=d.nestestValue}else{if(!(h=e.getData().indicesOfNearest(c[0],t,"category"===i.type?.5:null)).length)return;u=e.getData().get(c[0],h[0])}if(null!=u&&isFinite(u)){var f=t-u,p=Math.abs(f);p<=r&&((p<r||f>=0&&s<0)&&(r=p,s=f,o=u,a.length=0),pP(h,function(t){a.push({seriesIndex:e.seriesIndex,dataIndexInside:t,dataIndex:e.getData().getRawIndex(t)})}))}}),{payloadBatch:a,snapToValue:o}}function em(t,e,i,n){t[e.key]={value:i,payloadBatch:n}}function im(t,e,i,n){var o=i.payloadBatch,a=e.axis,r=a.model,s=e.axisPointerModel;if(e.triggerTooltip&&o.length){var l=e.coordSys.model,u=Th(l),h=t.map[u];h||(h=t.map[u]={coordSysId:l.id,coordSysIndex:l.componentIndex,coordSysType:l.type,coordSysMainType:l.mainType,dataByAxis:[]},t.list.push(h)),h.dataByAxis.push({axisDim:a.dim,axisIndex:r.componentIndex,axisType:r.type,axisId:r.id,value:n,valueLabelOpt:{precision:s.get("label.precision"),formatter:s.get("label.formatter")},seriesDataIndices:o.slice()})}}function nm(t,e,i){var n=i.axesInfo=[];pP(e,function(e,i){var o=e.axisPointerModel.option,a=t[i];a?(!e.useHandle&&(o.status="show"),o.value=a.value,o.seriesDataIndices=(a.payloadBatch||[]).slice()):!e.useHandle&&(o.status="hide"),"show"===o.status&&n.push({axisDim:e.axis.dim,axisIndex:e.axis.model.componentIndex,value:o.value})})}function om(t,e,i,n){if(!lm(e)&&t.list.length){var o=((t.list[0].dataByAxis[0]||{}).seriesDataIndices||[])[0]||{};n({type:"showTip",escapeConnect:!0,x:e[0],y:e[1],tooltipOption:i.tooltipOption,position:i.position,dataIndexInside:o.dataIndexInside,dataIndex:o.dataIndex,seriesIndex:o.seriesIndex,dataByCoordSys:t.list})}else n({type:"hideTip"})}function am(t,e,i){var n=i.getZr(),o=mP(n).axisPointerLastHighlights||{},a=mP(n).axisPointerLastHighlights={};pP(t,function(t,e){var i=t.axisPointerModel.option;"show"===i.status&&pP(i.seriesDataIndices,function(t){var e=t.seriesIndex+" | "+t.dataIndex;a[e]=t})});var r=[],s=[];d(o,function(t,e){!a[e]&&s.push(t)}),d(a,function(t,e){!o[e]&&r.push(t)}),s.length&&i.dispatchAction({type:"downplay",escapeConnect:!0,batch:s}),r.length&&i.dispatchAction({type:"highlight",escapeConnect:!0,batch:r})}function rm(t,e){for(var i=0;i<(t||[]).length;i++){var n=t[i];if(e.axis.dim===n.axisDim&&e.axis.model.componentIndex===n.axisIndex)return n}}function sm(t){var e=t.axis.model,i={},n=i.axisDim=t.axis.dim;return i.axisIndex=i[n+"AxisIndex"]=e.componentIndex,i.axisName=i[n+"AxisName"]=e.name,i.axisId=i[n+"AxisId"]=e.id,i}function lm(t){return!t||null==t[0]||isNaN(t[0])||null==t[1]||isNaN(t[1])}function um(t,e,i){if(!U_.node){var n=e.getZr();vP(n).records||(vP(n).records={}),hm(n,e),(vP(n).records[t]||(vP(n).records[t]={})).handler=i}}function hm(t,e){function i(i,n){t.on(i,function(i){var o=pm(e);yP(vP(t).records,function(t){t&&n(t,i,o.dispatchAction)}),cm(o.pendings,e)})}vP(t).initialized||(vP(t).initialized=!0,i("click",v(fm,"click")),i("mousemove",v(fm,"mousemove")),i("globalout",dm))}function cm(t,e){var i,n=t.showTip.length,o=t.hideTip.length;n?i=t.showTip[n-1]:o&&(i=t.hideTip[o-1]),i&&(i.dispatchAction=null,e.dispatchAction(i))}function dm(t,e,i){t.handler("leave",null,i)}function fm(t,e,i,n){e.handler(t,i,n)}function pm(t){var e={showTip:[],hideTip:[]},i=function(n){var o=e[n.type];o?o.push(n):(n.dispatchAction=i,t.dispatchAction(n))};return{dispatchAction:i,pendings:e}}function gm(t,e){if(!U_.node){var i=e.getZr();(vP(i).records||{})[t]&&(vP(i).records[t]=null)}}function mm(){}function vm(t,e,i,n){ym(_P(i).lastProp,n)||(_P(i).lastProp=n,e?Mo(i,n,t):(i.stopAnimation(),i.attr(n)))}function ym(t,e){if(w(t)&&w(e)){var i=!0;return d(e,function(e,n){i=i&&ym(t[n],e)}),!!i}return t===e}function xm(t,e){t[e.get("label.show")?"show":"hide"]()}function _m(t){return{position:t.position.slice(),rotation:t.rotation||0}}function wm(t,e,i){var n=e.get("z"),o=e.get("zlevel");t&&t.traverse(function(t){"group"!==t.type&&(null!=n&&(t.z=n),null!=o&&(t.zlevel=o),t.silent=i)})}function bm(t){var e,i=t.get("type"),n=t.getModel(i+"Style");return"line"===i?(e=n.getLineStyle()).fill=null:"shadow"===i&&((e=n.getAreaStyle()).stroke=null),e}function Sm(t,e,i,n,o){var a=Im(i.get("value"),e.axis,e.ecModel,i.get("seriesDataIndices"),{precision:i.get("label.precision"),formatter:i.get("label.formatter")}),r=i.getModel("label"),s=YM(r.get("padding")||0),l=r.getFont(),u=ke(a,l),h=o.position,c=u.width+s[1]+s[3],d=u.height+s[0]+s[2],f=o.align;"right"===f&&(h[0]-=c),"center"===f&&(h[0]-=c/2);var p=o.verticalAlign;"bottom"===p&&(h[1]-=d),"middle"===p&&(h[1]-=d/2),Mm(h,c,d,n);var g=r.get("backgroundColor");g&&"auto"!==g||(g=e.get("axisLine.lineStyle.color")),t.label={shape:{x:0,y:0,width:c,height:d,r:r.get("borderRadius")},position:h.slice(),style:{text:a,textFont:l,textFill:r.getTextColor(),textPosition:"inside",fill:g,stroke:r.get("borderColor")||"transparent",lineWidth:r.get("borderWidth")||0,shadowBlur:r.get("shadowBlur"),shadowColor:r.get("shadowColor"),shadowOffsetX:r.get("shadowOffsetX"),shadowOffsetY:r.get("shadowOffsetY")},z2:10}}function Mm(t,e,i,n){var o=n.getWidth(),a=n.getHeight();t[0]=Math.min(t[0]+e,o)-e,t[1]=Math.min(t[1]+i,a)-i,t[0]=Math.max(t[0],0),t[1]=Math.max(t[1],0)}function Im(t,e,i,n,o){t=e.scale.parse(t);var a=e.scale.getLabel(t,{precision:o.precision}),r=o.formatter;if(r){var s={value:Ul(e,t),seriesData:[]};d(n,function(t){var e=i.getSeriesByIndex(t.seriesIndex),n=t.dataIndexInside,o=e&&e.getDataParams(n);o&&s.seriesData.push(o)}),_(r)?a=r.replace("{value}",a):x(r)&&(a=r(s))}return a}function Tm(t,e,i){var n=xt();return Mt(n,n,i.rotation),St(n,n,i.position),Ao([t.dataToCoord(e),(i.labelOffset||0)+(i.labelDirection||1)*(i.labelMargin||0)],n)}function Am(t,e,i,n,o,a){var r=BD.innerTextLayout(i.rotation,0,i.labelDirection);i.labelMargin=o.get("label.margin"),Sm(e,n,o,a,{position:Tm(n.axis,t,i),align:r.textAlign,verticalAlign:r.textVerticalAlign})}function Dm(t,e,i){return i=i||0,{x1:t[i],y1:t[1-i],x2:e[i],y2:e[1-i]}}function Cm(t,e,i){return i=i||0,{x:t[i],y:t[1-i],width:e[i],height:e[1-i]}}function Lm(t,e,i,n,o,a){return{cx:t,cy:e,r0:i,r:n,startAngle:o,endAngle:a,clockwise:!0}}function km(t,e){var i={};return i[e.dim+"AxisIndex"]=e.index,t.getCartesian(i)}function Pm(t){return"x"===t.dim?0:1}function Nm(t){return t.isHorizontal()?0:1}function Om(t,e){var i=t.getRect();return[i[IP[e]],i[IP[e]]+i[TP[e]]]}function Em(t,e,i){var n=new vM({shape:{x:t.x-10,y:t.y-10,width:0,height:t.height+20}});return Io(n,{shape:{width:t.width+20,height:t.height+20}},e,i),n}function Rm(t,e,i){if(t.count())for(var n,o=e.coordinateSystem,a=e.getLayerSeries(),r=t.mapDimension("single"),s=t.mapDimension("value"),l=f(a,function(e){return f(e.indices,function(e){var i=o.dataToPoint(t.get(r,e));return i[1]=t.get(s,e),i})}),u=zm(l),h=u.y0,c=i/u.max,d=a.length,p=a[0].indices.length,g=0;g<p;++g){n=h[g]*c,t.setItemLayout(a[0].indices[g],{layerIndex:0,x:l[0][g][0],y0:n,y:l[0][g][1]*c});for(var m=1;m<d;++m)n+=l[m-1][g][1]*c,t.setItemLayout(a[m].indices[g],{layerIndex:m,x:l[m][g][0],y0:n,y:l[m][g][1]*c})}}function zm(t){for(var e=t.length,i=t[0].length,n=[],o=[],a=0,r={},s=0;s<i;++s){for(var l=0,u=0;l<e;++l)u+=t[l][s][1];u>a&&(a=u),n.push(u)}for(var h=0;h<i;++h)o[h]=(a-n[h])/2;a=0;for(var c=0;c<i;++c){var d=n[c]+o[c];d>a&&(a=d)}return r.y0=o,r.max=a,r}function Bm(t){var e=0;d(t.children,function(t){Bm(t);var i=t.value;y(i)&&(i=i[0]),e+=i});var i=t.value;y(i)&&(i=i[0]),(null==i||isNaN(i))&&(i=e),i<0&&(i=0),y(t.value)?t.value[0]=i:t.value=i}function Vm(t,e,i){function n(){r.ignore=r.hoverIgnore}function o(){r.ignore=r.normalIgnore}tb.call(this);var a=new uM({z2:kP});a.seriesIndex=e.seriesIndex;var r=new aM({z2:PP,silent:t.getModel("label").get("silent")});this.add(a),this.add(r),this.updateData(!0,t,"normal",e,i),this.on("emphasis",n).on("normal",o).on("mouseover",n).on("mouseout",o)}function Gm(t,e,i){var n=t.getVisual("color"),o=t.getVisual("visualMeta");o&&0!==o.length||(n=null);var a=t.getModel("itemStyle").get("color");if(a)return a;if(n)return n;if(0===t.depth)return i.option.color[0];var r=i.option.color.length;return a=i.option.color[Fm(t)%r]}function Fm(t){for(var e=t;e.depth>1;)e=e.parentNode;return l(t.getAncestors()[0].children,e)}function Wm(t,e,i){return i!==LP.NONE&&(i===LP.SELF?t===e:i===LP.ANCESTOR?t===e||t.isAncestorOf(e):t===e||t.isDescendantOf(e))}function Hm(t,e,i){e.getData().setItemVisual(t.dataIndex,"color",i)}function Zm(t,e){var i=t.children||[];t.children=Um(i,e),i.length&&d(t.children,function(t){Zm(t,e)})}function Um(t,e){if("function"==typeof e)return t.sort(e);var i="asc"===e;return t.sort(function(t,e){var n=(t.getValue()-e.getValue())*(i?1:-1);return 0===n?(t.dataIndex-e.dataIndex)*(i?-1:1):n})}function Xm(t,e){return e=e||[0,0],f(["x","y"],function(i,n){var o=this.getAxis(i),a=e[n],r=t[n]/2;return"category"===o.type?o.getBandWidth():Math.abs(o.dataToCoord(a-r)-o.dataToCoord(a+r))},this)}function jm(t,e){return e=e||[0,0],f([0,1],function(i){var n=e[i],o=t[i]/2,a=[],r=[];return a[i]=n-o,r[i]=n+o,a[1-i]=r[1-i]=e[1-i],Math.abs(this.dataToPoint(a)[i]-this.dataToPoint(r)[i])},this)}function Ym(t,e){var i=this.getAxis(),n=e instanceof Array?e[0]:e,o=(t instanceof Array?t[0]:t)/2;return"category"===i.type?i.getBandWidth():Math.abs(i.dataToCoord(n-o)-i.dataToCoord(n+o))}function qm(t,e){return f(["Radius","Angle"],function(i,n){var o=this["get"+i+"Axis"](),a=e[n],r=t[n]/2,s="dataTo"+i,l="category"===o.type?o.getBandWidth():Math.abs(o[s](a-r)-o[s](a+r));return"Angle"===i&&(l=l*Math.PI/180),l},this)}function Km(t){var e,i=t.type;if("path"===i){var n=t.shape,o=null!=n.width&&null!=n.height?{x:n.x||0,y:n.y||0,width:n.width,height:n.height}:null,a=lv(n);(e=Un(a,null,o,n.layout||"center")).__customPathData=a}else"image"===i?(e=new fi({})).__customImagePath=t.style.image:"text"===i?(e=new aM({})).__customText=t.style.text:e=new(0,RM[i.charAt(0).toUpperCase()+i.slice(1)]);return e.__customGraphicType=i,e.name=t.name,e}function $m(t,e,n,o,a,r,s){var l={},u=n.style||{};if(n.shape&&(l.shape=i(n.shape)),n.position&&(l.position=n.position.slice()),n.scale&&(l.scale=n.scale.slice()),n.origin&&(l.origin=n.origin.slice()),n.rotation&&(l.rotation=n.rotation),"image"===t.type&&n.style){h=l.style={};d(["x","y","width","height"],function(e){Jm(e,h,u,t.style,r)})}if("text"===t.type&&n.style){var h=l.style={};d(["x","y"],function(e){Jm(e,h,u,t.style,r)}),!u.hasOwnProperty("textFill")&&u.fill&&(u.textFill=u.fill),!u.hasOwnProperty("textStroke")&&u.stroke&&(u.textStroke=u.stroke)}if("group"!==t.type&&(t.useStyle(u),r)){t.style.opacity=0;var c=u.opacity;null==c&&(c=1),Io(t,{style:{opacity:c}},o,e)}r?t.attr(l):Mo(t,l,o,e),n.hasOwnProperty("z2")&&t.attr("z2",n.z2||0),n.hasOwnProperty("silent")&&t.attr("silent",n.silent),n.hasOwnProperty("invisible")&&t.attr("invisible",n.invisible),n.hasOwnProperty("ignore")&&t.attr("ignore",n.ignore),n.hasOwnProperty("info")&&t.attr("info",n.info);var f=n.styleEmphasis,p=!1===f;t.__cusHasEmphStl&&null==f||!t.__cusHasEmphStl&&p||(ao(t,f),t.__cusHasEmphStl=!p),s&&fo(t,!p)}function Jm(t,e,i,n,o){null==i[t]||o||(e[t]=i[t],i[t]=n[t])}function Qm(t,e,i,n){function o(t){null==t&&(t=h),v&&(c=e.getItemModel(t),d=c.getModel(VP),f=c.getModel(GP),p=e.getItemVisual(t,"color"),v=!1)}var s=t.get("renderItem"),l=t.coordinateSystem,u={};l&&(u=l.prepareCustoms?l.prepareCustoms():WP[l.type](l));var h,c,d,f,p,g=r({getWidth:n.getWidth,getHeight:n.getHeight,getZr:n.getZr,getDevicePixelRatio:n.getDevicePixelRatio,value:function(t,i){return null==i&&(i=h),e.get(e.getDimension(t||0),i)},style:function(i,n){null==n&&(n=h),o(n);var r=c.getModel(zP).getItemStyle();null!=p&&(r.fill=p);var s=e.getItemVisual(n,"opacity");return null!=s&&(r.opacity=s),go(r,d,null,{autoColor:p,isRectText:!0}),r.text=d.getShallow("show")?A(t.getFormattedLabel(n,"normal"),xu(e,n)):null,i&&a(r,i),r},styleEmphasis:function(i,n){null==n&&(n=h),o(n);var r=c.getModel(BP).getItemStyle();return go(r,f,null,{isRectText:!0},!0),r.text=f.getShallow("show")?D(t.getFormattedLabel(n,"emphasis"),t.getFormattedLabel(n,"normal"),xu(e,n)):null,i&&a(r,i),r},visual:function(t,i){return null==i&&(i=h),e.getItemVisual(i,t)},barLayout:function(t){if(l.getBaseAxis)return Cl(r({axis:l.getBaseAxis()},t),n)},currentSeriesIndices:function(){return i.getCurrentSeriesIndices()},font:function(t){return bo(t,i)}},u.api||{}),m={context:{},seriesId:t.id,seriesName:t.name,seriesIndex:t.seriesIndex,coordSys:u.coordSys,dataInsideLength:e.count(),encode:tv(t.getData())},v=!0;return function(t,i){return h=t,v=!0,s&&s(r({dataIndexInside:t,dataIndex:e.getRawIndex(t),actionType:i?i.type:null},m),g)}}function tv(t){var e={};return d(t.dimensions,function(i,n){var o=t.getDimensionInfo(i);if(!o.isExtraCoord){var a=o.coordDim;(e[a]=e[a]||[])[o.coordDimIndex]=n}}),e}function ev(t,e,i,n,o,a){return(t=iv(t,e,i,n,o,a,!0))&&a.setItemGraphicEl(e,t),t}function iv(t,e,i,n,o,a,r){var s=!i,l=(i=i||{}).type,u=i.shape,h=i.style;if(t&&(s||null!=l&&l!==t.__customGraphicType||"path"===l&&uv(u)&&lv(u)!==t.__customPathData||"image"===l&&hv(h,"image")&&h.image!==t.__customImagePath||"text"===l&&hv(u,"text")&&h.text!==t.__customText)&&(o.remove(t),t=null),!s){var c=!t;return!t&&(t=Km(i)),$m(t,e,i,n,a,c,r),"group"===l&&nv(t,e,i,n,a),o.add(t),t}}function nv(t,e,i,n,o){var a=i.children,r=a?a.length:0,s=i.$mergeChildren,l="byName"===s||i.diffChildrenByName,u=!1===s;if(r||l||u)if(l)ov({oldChildren:t.children()||[],newChildren:a||[],dataIndex:e,animatableModel:n,group:t,data:o});else{u&&t.removeAll();for(var h=0;h<r;h++)a[h]&&iv(t.childAt(h),e,a[h],n,t,o)}}function ov(t){new Us(t.oldChildren,t.newChildren,av,av,t).add(rv).update(rv).remove(sv).execute()}function av(t,e){var i=t&&t.name;return null!=i?i:FP+e}function rv(t,e){var i=this.context,n=null!=t?i.newChildren[t]:null;iv(null!=e?i.oldChildren[e]:null,i.dataIndex,n,i.animatableModel,i.group,i.data)}function sv(t){var e=this.context,i=e.oldChildren[t];i&&e.group.remove(i)}function lv(t){return t&&(t.pathData||t.d)}function uv(t){return t&&(t.hasOwnProperty("pathData")||t.hasOwnProperty("d"))}function hv(t,e){return t&&t.hasOwnProperty(e)}function cv(t,e,i,n){var o=i.type,a=new(0,RM[o.charAt(0).toUpperCase()+o.slice(1)])(i);e.add(a),n.set(t,a),a.__ecGraphicId=t}function dv(t,e){var i=t&&t.parent;i&&("group"===t.type&&t.traverse(function(t){dv(t,e)}),e.removeKey(t.__ecGraphicId),i.remove(t))}function fv(t){return t=a({},t),d(["id","parentId","$action","hv","bounding"].concat(nI),function(e){delete t[e]}),t}function pv(t,e){var i;return d(e,function(e){null!=t[e]&&"auto"!==t[e]&&(i=!0)}),i}function gv(t,e){var i=t.exist;if(e.id=t.keyInfo.id,!e.type&&i&&(e.type=i.type),null==e.parentId){var n=e.parentOption;n?e.parentId=n.id:i&&(e.parentId=i.parentId)}e.parentOption=null}function mv(t,e,i){var o=a({},i),r=t[e],s=i.$action||"merge";"merge"===s?r?(n(r,o,!0),fa(r,o,{ignoreSize:!0}),ga(i,r)):t[e]=o:"replace"===s?t[e]=o:"remove"===s&&r&&(t[e]=null)}function vv(t,e){t&&(t.hv=e.hv=[pv(e,["left","right"]),pv(e,["top","bottom"])],"group"===t.type&&(null==t.width&&(t.width=e.width=0),null==t.height&&(t.height=e.height=0)))}function yv(t,e,i){var n=t.eventData;t.silent||t.ignore||n||(n=t.eventData={componentType:"graphic",componentIndex:e.componentIndex,name:t.name}),n&&(n.info=t.info)}function xv(t,e,i){var n,o={},a="toggleSelected"===t;return i.eachComponent("legend",function(i){a&&null!=n?i[n?"select":"unSelect"](e.name):(i[t](e.name),n=i.isSelected(e.name)),d(i.getData(),function(t){var e=t.get("name");if("\n"!==e&&""!==e){var n=i.isSelected(e);o.hasOwnProperty(e)?o[e]=o[e]&&n:o[e]=n}})}),{name:e.name,selected:o}}function _v(t,e,i){var n=e.getBoxLayoutParams(),o=e.get("padding"),a={width:i.getWidth(),height:i.getHeight()},r=ha(n,a,o);aI(e.get("orient"),t,e.get("itemGap"),r.width,r.height),ca(t,n,a,o)}function wv(t,e){var i=YM(e.get("padding")),n=e.getItemStyle(["color","opacity"]);return n.fill=e.get("backgroundColor"),t=new vM({shape:{x:t.x-i[3],y:t.y-i[0],width:t.width+i[1]+i[3],height:t.height+i[0]+i[2],r:e.get("borderRadius")},style:n,silent:!0,z2:-1})}function bv(t,e){e.dispatchAction({type:"legendToggleSelect",name:t})}function Sv(t,e,i,n){var o=i.getZr().storage.getDisplayList()[0];o&&o.useHoverLayer||i.dispatchAction({type:"highlight",seriesName:t,name:e,excludeSeriesId:n})}function Mv(t,e,i,n){var o=i.getZr().storage.getDisplayList()[0];o&&o.useHoverLayer||i.dispatchAction({type:"downplay",seriesName:t,name:e,excludeSeriesId:n})}function Iv(t,e,i){var n=[1,1];n[t.getOrient().index]=0,fa(e,i,{type:"box",ignoreSize:n})}function Tv(t){var e="left "+t+"s cubic-bezier(0.23, 1, 0.32, 1),top "+t+"s cubic-bezier(0.23, 1, 0.32, 1)";return f(iN,function(t){return t+"transition:"+e}).join(";")}function Av(t){var e=[],i=t.get("fontSize"),n=t.getTextColor();return n&&e.push("color:"+n),e.push("font:"+t.getFont()),i&&e.push("line-height:"+Math.round(3*i/2)+"px"),tN(["decoration","align"],function(i){var n=t.get(i);n&&e.push("text-"+i+":"+n)}),e.join(";")}function Dv(t){var e=[],i=t.get("transitionDuration"),n=t.get("backgroundColor"),o=t.getModel("textStyle"),a=t.get("padding");return i&&e.push(Tv(i)),n&&(U_.canvasSupported?e.push("background-Color:"+n):(e.push("background-Color:#"+Zt(n)),e.push("filter:alpha(opacity=70)"))),tN(["width","color","radius"],function(i){var n="border-"+i,o=eN(n),a=t.get(o);null!=a&&e.push(n+":"+a+("color"===i?"":"px"))}),e.push(Av(o)),null!=a&&e.push("padding:"+YM(a).join("px ")+"px"),e.join(";")+";"}function Cv(t,e){if(U_.wxa)return null;var i=document.createElement("div"),n=this._zr=e.getZr();this.el=i,this._x=e.getWidth()/2,this._y=e.getHeight()/2,t.appendChild(i),this._container=t,this._show=!1,this._hideTimeout;var o=this;i.onmouseenter=function(){o._enterable&&(clearTimeout(o._hideTimeout),o._show=!0),o._inContent=!0},i.onmousemove=function(e){if(e=e||window.event,!o._enterable){var i=n.handler;ut(t,e,!0),i.dispatch("mousemove",e)}},i.onmouseleave=function(){o._enterable&&o._show&&o.hideLater(o._hideDelay),o._inContent=!1}}function Lv(t){this._zr=t.getZr(),this._show=!1,this._hideTimeout}function kv(t){for(var e=t.pop();t.length;){var i=t.pop();i&&(Po.isInstance(i)&&(i=i.get("tooltip",!0)),"string"==typeof i&&(i={formatter:i}),e=new Po(i,e,e.ecModel))}return e}function Pv(t,e){return t.dispatchAction||m(e.dispatchAction,e)}function Nv(t,e,i,n,o,a,r){var s=i.getOuterSize(),l=s.width,u=s.height;return null!=a&&(t+l+a>n?t-=l+a:t+=a),null!=r&&(e+u+r>o?e-=u+r:e+=r),[t,e]}function Ov(t,e,i,n,o){var a=i.getOuterSize(),r=a.width,s=a.height;return t=Math.min(t+r,n)-r,e=Math.min(e+s,o)-s,t=Math.max(t,0),e=Math.max(e,0),[t,e]}function Ev(t,e,i){var n=i[0],o=i[1],a=0,r=0,s=e.width,l=e.height;switch(t){case"inside":a=e.x+s/2-n/2,r=e.y+l/2-o/2;break;case"top":a=e.x+s/2-n/2,r=e.y-o-5;break;case"bottom":a=e.x+s/2-n/2,r=e.y+l+5;break;case"left":a=e.x-n-5,r=e.y+l/2-o/2;break;case"right":a=e.x+s+5,r=e.y+l/2-o/2}return[a,r]}function Rv(t){return"center"===t||"middle"===t}function zv(t){return t.get("stack")||"__ec_stack_"+t.seriesIndex}function Bv(t){return t.dim}function Vv(t,e){var i={};d(t,function(t,e){var n=t.getData(),o=t.coordinateSystem.getBaseAxis(),a=o.getExtent(),r="category"===o.type?o.getBandWidth():Math.abs(a[1]-a[0])/n.count(),s=i[Bv(o)]||{bandWidth:r,remainedWidth:r,autoWidthCount:0,categoryGap:"20%",gap:"30%",stacks:{}},l=s.stacks;i[Bv(o)]=s;var u=zv(t);l[u]||s.autoWidthCount++,l[u]=l[u]||{width:0,maxWidth:0};var h=Bo(t.get("barWidth"),r),c=Bo(t.get("barMaxWidth"),r),d=t.get("barGap"),f=t.get("barCategoryGap");h&&!l[u].width&&(h=Math.min(s.remainedWidth,h),l[u].width=h,s.remainedWidth-=h),c&&(l[u].maxWidth=c),null!=d&&(s.gap=d),null!=f&&(s.categoryGap=f)});var n={};return d(i,function(t,e){n[e]={};var i=t.stacks,o=t.bandWidth,a=Bo(t.categoryGap,o),r=Bo(t.gap,1),s=t.remainedWidth,l=t.autoWidthCount,u=(s-a)/(l+(l-1)*r);u=Math.max(u,0),d(i,function(t,e){var i=t.maxWidth;i&&i<u&&(i=Math.min(i,s),t.width&&(i=Math.min(i,t.width)),s-=i,t.width=i,l--)}),u=(s-a)/(l+(l-1)*r),u=Math.max(u,0);var h,c=0;d(i,function(t,e){t.width||(t.width=u),h=t,c+=t.width*(1+r)}),h&&(c-=h.width*r);var f=-c/2;d(i,function(t,i){n[e][i]=n[e][i]||{offset:f,width:t.width},f+=t.width*(1+r)})}),n}function Gv(t,e){iD.call(this,"radius",t,e),this.type="category"}function Fv(t,e){e=e||[0,360],iD.call(this,"angle",t,e),this.type="category"}function Wv(t,e){return e.type||(e.data?"category":"value")}function Hv(t,e,i){var n=e.get("center"),o=i.getWidth(),a=i.getHeight();t.cx=Bo(n[0],o),t.cy=Bo(n[1],a);var r=t.getRadiusAxis(),s=Math.min(o,a)/2,l=Bo(e.get("radius"),s);r.inverse?r.setExtent(l,0):r.setExtent(0,l)}function Zv(t,e){var i=this,n=i.getAngleAxis(),o=i.getRadiusAxis();if(n.scale.setExtent(1/0,-1/0),o.scale.setExtent(1/0,-1/0),t.eachSeries(function(t){if(t.coordinateSystem===i){var e=t.getData();d(e.mapDimension("radius",!0),function(t){o.scale.unionExtentFromData(e,pl(e,t))}),d(e.mapDimension("angle",!0),function(t){n.scale.unionExtentFromData(e,pl(e,t))})}}),Fl(n.scale,n.model),Fl(o.scale,o.model),"category"===n.type&&!n.onBand){var a=n.getExtent(),r=360/n.scale.count();n.inverse?a[1]+=r:a[1]-=r,n.setExtent(a[0],a[1])}}function Uv(t,e){if(t.type=e.get("type"),t.scale=Wl(e),t.onBand=e.get("boundaryGap")&&"category"===t.type,t.inverse=e.get("inverse"),"angleAxis"===e.mainType){t.inverse^=e.get("clockwise");var i=e.get("startAngle");t.setExtent(i,i+(t.inverse?-360:360))}e.axis=t,t.model=e}function Xv(t,e,i){e[1]>e[0]&&(e=e.slice().reverse());var n=t.coordToPoint([e[0],i]),o=t.coordToPoint([e[1],i]);return{x1:n[0],y1:n[1],x2:o[0],y2:o[1]}}function jv(t){return t.getRadiusAxis().inverse?0:1}function Yv(t){var e=t[0],i=t[t.length-1];e&&i&&Math.abs(Math.abs(e.coord-i.coord)-360)<1e-4&&t.pop()}function qv(t,e,i){return{position:[t.cx,t.cy],rotation:i/180*Math.PI,labelDirection:-1,tickDirection:-1,nameDirection:1,labelRotate:e.getModel("axisLabel").get("rotate"),z2:1}}function Kv(t,e,i,n,o){var a=e.axis,r=a.dataToCoord(t),s=n.getAngleAxis().getExtent()[0];s=s/180*Math.PI;var l,u,h,c=n.getRadiusAxis().getExtent();if("radius"===a.dim){var d=xt();Mt(d,d,s),St(d,d,[n.cx,n.cy]),l=Ao([r,-o],d);var f=e.getModel("axisLabel").get("rotate")||0,p=BD.innerTextLayout(s,f*Math.PI/180,-1);u=p.textAlign,h=p.textVerticalAlign}else{var g=c[1];l=n.coordToPoint([g+o,r]);var m=n.cx,v=n.cy;u=Math.abs(l[0]-m)/g<.3?"center":l[0]>m?"left":"right",h=Math.abs(l[1]-v)/g<.3?"middle":l[1]>v?"top":"bottom"}return{position:l,align:u,verticalAlign:h}}function $v(t,e){e.update="updateView",Os(e,function(e,i){var n={};return i.eachComponent({mainType:"geo",query:e},function(i){i[t](e.name),d(i.coordinateSystem.regions,function(t){n[t.name]=i.isSelected(t.name)||!1})}),{selected:n,name:e.name}})}function Jv(t){var e={};d(t,function(t){e[t]=1}),t.length=0,d(e,function(e,i){t.push(i)})}function Qv(t){if(t)for(var e in t)if(t.hasOwnProperty(e))return!0}function ty(t,e,n){function o(){var t=function(){};return t.prototype.__hidden=t.prototype,new t}var a={};return yN(e,function(e){var r=a[e]=o();yN(t[e],function(t,o){if(sL.isValidType(o)){var a={type:o,visual:t};n&&n(a,e),r[o]=new sL(a),"opacity"===o&&((a=i(a)).type="colorAlpha",r.__hidden.__alphaForOpacity=new sL(a))}})}),a}function ey(t,e,n){var o;d(n,function(t){e.hasOwnProperty(t)&&Qv(e[t])&&(o=!0)}),o&&d(n,function(n){e.hasOwnProperty(n)&&Qv(e[n])?t[n]=i(e[n]):delete t[n]})}function iy(t,e,i,n,o,a){function r(t){return i.getItemVisual(h,t)}function s(t,e){i.setItemVisual(h,t,e)}function l(t,l){h=null==a?t:l;var c=i.getRawDataItem(h);if(!c||!1!==c.visualMap)for(var d=n.call(o,t),f=e[d],p=u[d],g=0,m=p.length;g<m;g++){var v=p[g];f[v]&&f[v].applyVisual(t,r,s)}}var u={};d(t,function(t){var i=sL.prepareVisualTypes(e[t]);u[t]=i});var h;null==a?i.each(l):i.each([a],l)}function ny(t,e,i,n){var o={};return d(t,function(t){var i=sL.prepareVisualTypes(e[t]);o[t]=i}),{progress:function(t,a){null!=n&&(n=a.getDimension(n));for(var r;null!=(r=t.next());){var s=a.getRawDataItem(r);if(!s||!1!==s.visualMap)for(var l=null!=n?a.get(n,r,!0):r,u=i(l),h=e[u],c=o[u],d=0,f=c.length;d<f;d++){var p=c[d];h[p]&&h[p].applyVisual(l,function(t){return a.getItemVisual(r,t)},function(t,e){a.setItemVisual(r,t,e)})}}}}}function oy(t){var e=["x","y"],i=["width","height"];return{point:function(e,i,n){if(e){var o=n.range;return ay(e[t],o)}},rect:function(n,o,a){if(n){var r=a.range,s=[n[e[t]],n[e[t]]+n[i[t]]];return s[1]<s[0]&&s.reverse(),ay(s[0],r)||ay(s[1],r)||ay(r[0],s)||ay(r[1],s)}}}}function ay(t,e){return e[0]<=t&&t<=e[1]}function ry(t,e,i,n,o){for(var a=0,r=o[o.length-1];a<o.length;a++){var s=o[a];if(sy(t,e,i,n,s[0],s[1],r[0],r[1]))return!0;r=s}}function sy(t,e,i,n,o,a,r,s){var l=uy(i-t,o-r,n-e,a-s);if(ly(l))return!1;var u=uy(o-t,o-r,a-e,a-s)/l;if(u<0||u>1)return!1;var h=uy(i-t,o-t,n-e,a-e)/l;return!(h<0||h>1)}function ly(t){return t<=1e-6&&t>=-1e-6}function uy(t,e,i,n){return t*n-e*i}function hy(t,e,i){var n=this._targetInfoList=[],o={},a=dy(e,t);_N(TN,function(t,e){(!i||!i.include||wN(i.include,e)>=0)&&t(a,n,o)})}function cy(t){return t[0]>t[1]&&t.reverse(),t}function dy(t,e){return Vi(t,e,{includeMainTypes:MN})}function fy(t,e,i,n){var o=i.getAxis(["x","y"][t]),a=cy(f([0,1],function(t){return e?o.coordToData(o.toLocalCoord(n[t])):o.toGlobalCoord(o.dataToCoord(n[t]))})),r=[];return r[t]=a,r[1-t]=[NaN,NaN],{values:a,xyMinMax:r}}function py(t,e,i,n){return[e[0]-n[t]*i[0],e[1]-n[t]*i[1]]}function gy(t,e){var i=my(t),n=my(e),o=[i[0]/n[0],i[1]/n[1]];return isNaN(o[0])&&(o[0]=1),isNaN(o[1])&&(o[1]=1),o}function my(t){return t?[t[0][1]-t[0][0],t[1][1]-t[1][0]]:[NaN,NaN]}function vy(t,e,i,n,o){if(o){var a=t.getZr();a[NN]||(a[PN]||(a[PN]=yy),Pr(a,PN,i,e)(t,n))}}function yy(t,e){if(!t.isDisposed()){var i=t.getZr();i[NN]=!0,t.dispatchAction({type:"brushSelect",batch:e}),i[NN]=!1}}function xy(t,e,i,n){for(var o=0,a=e.length;o<a;o++){var r=e[o];if(t[r.brushType](n,i,r.selectors,r))return!0}}function _y(t){var e=t.brushSelector;if(_(e)){var i=[];return d(xN,function(t,n){i[n]=function(i,n,o,a){var r=n.getItemLayout(i);return t[e](r,o,a)}}),i}if(x(e)){var n={};return d(xN,function(t,i){n[i]=e}),n}return e}function wy(t,e){var i=t.option.seriesIndex;return null!=i&&"all"!==i&&(y(i)?l(i,e)<0:e!==i)}function by(t){var e=t.selectors={};return d(xN[t.brushType],function(i,n){e[n]=function(n){return i(n,e,t)}}),t}function Sy(t){return new de(t[0][0],t[1][0],t[0][1]-t[0][0],t[1][1]-t[1][0])}function My(t,e){return n({brushType:t.brushType,brushMode:t.brushMode,transformable:t.transformable,brushStyle:new Po(t.brushStyle).getItemStyle(),removeOnClick:t.removeOnClick,z:t.z},e,!0)}function Iy(t,e,i,n){(!n||n.$from!==t.id)&&this._brushController.setPanels(t.brushTargetManager.makePanelOpts(i)).enableBrush(t.brushOption).updateCovers(t.areas.slice())}function Ty(t,e){zN[t]=e}function Ay(t){return zN[t]}function Dy(t,e,i){this.model=t,this.ecModel=e,this.api=i,this._brushType,this._brushMode}function Cy(t,e,i){this._model=t}function Ly(t,e,i,n){var o=i.calendarModel,a=i.seriesModel,r=o?o.coordinateSystem:a?a.coordinateSystem:null;return r===this?r[t](n):null}function ky(t,e){var i=t.cellSize;y(i)?1===i.length&&(i[1]=i[0]):i=t.cellSize=[i,i];var n=f([0,1],function(t){return da(e,t)&&(i[t]="auto"),null!=i[t]&&"auto"!==i[t]});fa(t,e,{type:"box",ignoreSize:n})}function Py(t){return l(HN,t)>=0}function Ny(t,e,i){function n(t,e){return l(e.nodes,t)>=0}function o(t,n){var o=!1;return e(function(e){d(i(t,e)||[],function(t){n.records[e.name][t]&&(o=!0)})}),o}function a(t,n){n.nodes.push(t),e(function(e){d(i(t,e)||[],function(t){n.records[e.name][t]=!0})})}return function(i){var r={nodes:[],records:{}};if(e(function(t){r.records[t.name]={}}),!i)return r;a(i,r);var s;do{s=!1,t(function(t){!n(t,r)&&o(t,r)&&(a(t,r),s=!0)})}while(s);return r}}function Oy(t,e,i){var n=[1/0,-1/0];return UN(i,function(t){var i=t.getData();i&&UN(i.mapDimension(e,!0),function(t){var e=i.getApproximateExtent(t);e[0]<n[0]&&(n[0]=e[0]),e[1]>n[1]&&(n[1]=e[1])})}),n[1]<n[0]&&(n=[NaN,NaN]),Ey(t,n),n}function Ey(t,e){var i=t.getAxisModel(),n=i.getMin(!0),o="category"===i.get("type"),a=o&&i.getCategories().length;null!=n&&"dataMin"!==n&&"function"!=typeof n?e[0]=n:o&&(e[0]=a>0?0:NaN);var r=i.getMax(!0);return null!=r&&"dataMax"!==r&&"function"!=typeof r?e[1]=r:o&&(e[1]=a>0?a-1:NaN),i.get("scale",!0)||(e[0]>0&&(e[0]=0),e[1]<0&&(e[1]=0)),e}function Ry(t,e){var i=t.getAxisModel(),n=t._percentWindow,o=t._valueWindow;if(n){var a=Ho(o,[0,500]);a=Math.min(a,20);var r=e||0===n[0]&&100===n[1];i.setRange(r?null:+o[0].toFixed(a),r?null:+o[1].toFixed(a))}}function zy(t){var e=t._minMaxSpan={},i=t._dataZoomModel;UN(["min","max"],function(n){e[n+"Span"]=i.get(n+"Span");var o=i.get(n+"ValueSpan");if(null!=o&&(e[n+"ValueSpan"]=o,null!=(o=t.getAxisModel().axis.scale.parse(o)))){var a=t._dataExtent;e[n+"Span"]=zo(a[0]+o,a,[0,100],!0)}})}function By(t){var e={};return YN(["start","end","startValue","endValue","throttle"],function(i){t.hasOwnProperty(i)&&(e[i]=t[i])}),e}function Vy(t,e){var i=t._rangePropMode,n=t.get("rangeMode");YN([["start","startValue"],["end","endValue"]],function(t,o){var a=null!=e[t[0]],r=null!=e[t[1]];a&&!r?i[o]="percent":!a&&r?i[o]="value":n?i[o]=n[o]:a&&(i[o]="percent")})}function Gy(t){return{x:"y",y:"x",radius:"angle",angle:"radius"}[t]}function Fy(t){return"vertical"===t?"ns-resize":"ew-resize"}function Wy(t,e){var i=Uy(t),n=e.dataZoomId,o=e.coordId;d(i,function(t,i){var a=t.dataZoomInfos;a[n]&&l(e.allCoordIds,o)<0&&(delete a[n],t.count--)}),jy(i);var a=i[o];a||((a=i[o]={coordId:o,dataZoomInfos:{},count:0}).controller=Xy(t,a),a.dispatchAction=v(Yy,t)),!a.dataZoomInfos[n]&&a.count++,a.dataZoomInfos[n]=e;var r=qy(a.dataZoomInfos);a.controller.enable(r.controlType,r.opt),a.controller.setPointerChecker(e.containsPoint),Pr(a,"dispatchAction",e.dataZoomModel.get("throttle",!0),"fixRate")}function Hy(t,e){var i=Uy(t);d(i,function(t){t.controller.dispose();var i=t.dataZoomInfos;i[e]&&(delete i[e],t.count--)}),jy(i)}function Zy(t){return t.type+"\0_"+t.id}function Uy(t){var e=t.getZr();return e[sO]||(e[sO]={})}function Xy(t,e){var i=new nc(t.getZr());return d(["pan","zoom","scrollMove"],function(t){i.on(t,function(i){var n=[];d(e.dataZoomInfos,function(o){if(i.isAvailableBehavior(o.dataZoomModel.option)){var a=(o.getRange||{})[t],r=a&&a(e.controller,i);!o.dataZoomModel.get("disabled",!0)&&r&&n.push({dataZoomId:o.dataZoomId,start:r[0],end:r[1]})}}),n.length&&e.dispatchAction(n)})}),i}function jy(t){d(t,function(e,i){e.count||(e.controller.dispose(),delete t[i])})}function Yy(t,e){t.dispatchAction({type:"dataZoom",batch:e})}function qy(t){var e,i={type_true:2,type_move:1,type_false:0,type_undefined:-1},n=!0;return d(t,function(t){var o=t.dataZoomModel,a=!o.get("disabled",!0)&&(!o.get("zoomLock",!0)||"move");i["type_"+a]>i["type_"+e]&&(e=a),n&=o.get("preventDefaultMouseMove",!0)}),{controlType:e,opt:{zoomOnMouseWheel:!0,moveOnMouseMove:!0,moveOnMouseWheel:!0,preventDefaultMouseMove:!!n}}}function Ky(t){return function(e,i,n,o){var a=this._range,r=a.slice(),s=e.axisModels[0];if(s){var l=t(r,s,e,i,n,o);return qL(l,r,[0,100],"all"),this._range=r,a[0]!==r[0]||a[1]!==r[1]?r:void 0}}}function $y(t,e){return t&&t.hasOwnProperty&&t.hasOwnProperty(e)}function Jy(t,e,i,n){for(var o=e.targetVisuals[n],a=sL.prepareVisualTypes(o),r={color:t.getData().getVisual("color")},s=0,l=a.length;s<l;s++){var u=a[s],h=o["opacity"===u?"__alphaForOpacity":u];h&&h.applyVisual(i,function(t){return r[t]},function(t,e){r[t]=e})}return r.color}function Qy(t,e,i){if(i[0]===i[1])return i.slice();for(var n=(i[1]-i[0])/200,o=i[0],a=[],r=0;r<=200&&o<i[1];r++)a.push(o),o+=n;return a.push(i[1]),a}function tx(t,e,i){var n=t.option,o=n.align;if(null!=o&&"auto"!==o)return o;for(var a={width:e.getWidth(),height:e.getHeight()},r="horizontal"===n.orient?1:0,s=[["left","right","width"],["top","bottom","height"]],l=s[r],u=[0,null,10],h={},c=0;c<3;c++)h[s[1-r][c]]=u[c],h[l[c]]=2===c?i[0]:n[l[c]];var d=[["x","width",3],["y","height",0]][r],f=ha(h,a,n.padding);return l[(f.margin[d[2]]||0)+f[d[0]]+.5*f[d[1]]<.5*a[d[1]]?0:1]}function ex(t){return d(t||[],function(e){null!=t.dataIndex&&(t.dataIndexInside=t.dataIndex,t.dataIndex=null)}),t}function ix(t,e,i,n){return new fM({shape:{points:t},draggable:!!i,cursor:e,drift:i,onmousemove:function(t){mw(t.event)},ondragend:n})}function nx(t,e){return 0===t?[[0,0],[e,0],[e,-e]]:[[0,0],[e,0],[e,e]]}function ox(t,e,i,n){return t?[[0,-LO(e,kO(i,0))],[NO,0],[0,LO(e,kO(n-i,0))]]:[[0,0],[5,-5],[5,5]]}function ax(t,e,i){var n=PO/2,o=t.get("hoverLinkDataSize");return o&&(n=DO(o,e,i,!0)/2),n}function rx(t){var e=t.get("hoverLinkOnHandle");return!!(null==e?t.get("realtime"):e)}function sx(t){return"vertical"===t?"ns-resize":"ew-resize"}function lx(t,e){var i=t.inverse;("vertical"===t.orient?!i:i)&&e.reverse()}function ux(t){Ci(t,"label",["show"])}function hx(t){return!(isNaN(parseFloat(t.x))&&isNaN(parseFloat(t.y)))}function cx(t){return!isNaN(parseFloat(t.x))&&!isNaN(parseFloat(t.y))}function dx(t,e,i,n,o,a){var r=[],s=fl(e,n)?e.getCalculationInfo("stackResultDimension"):n,l=yx(e,s,t),u=e.indicesOfNearest(s,l)[0];r[o]=e.get(i,u),r[a]=e.get(n,u);var h=Fo(e.get(n,u));return(h=Math.min(h,20))>=0&&(r[a]=+r[a].toFixed(h)),r}function fx(t,e){var n=t.getData(),o=t.coordinateSystem;if(e&&!cx(e)&&!y(e.coord)&&o){var a=o.dimensions,r=px(e,n,o,t);if((e=i(e)).type&&WO[e.type]&&r.baseAxis&&r.valueAxis){var s=GO(a,r.baseAxis.dim),l=GO(a,r.valueAxis.dim);e.coord=WO[e.type](n,r.baseDataDim,r.valueDataDim,s,l),e.value=e.coord[l]}else{for(var u=[null!=e.xAxis?e.xAxis:e.radiusAxis,null!=e.yAxis?e.yAxis:e.angleAxis],h=0;h<2;h++)WO[u[h]]&&(u[h]=yx(n,n.mapDimension(a[h]),u[h]));e.coord=u}}return e}function px(t,e,i,n){var o={};return null!=t.valueIndex||null!=t.valueDim?(o.valueDataDim=null!=t.valueIndex?e.getDimension(t.valueIndex):t.valueDim,o.valueAxis=i.getAxis(gx(n,o.valueDataDim)),o.baseAxis=i.getOtherAxis(o.valueAxis),o.baseDataDim=e.mapDimension(o.baseAxis.dim)):(o.baseAxis=n.getBaseAxis(),o.valueAxis=i.getOtherAxis(o.baseAxis),o.baseDataDim=e.mapDimension(o.baseAxis.dim),o.valueDataDim=e.mapDimension(o.valueAxis.dim)),o}function gx(t,e){var i=t.getData(),n=i.dimensions;e=i.getDimension(e);for(var o=0;o<n.length;o++){var a=i.getDimensionInfo(n[o]);if(a.name===e)return a.coordDim}}function mx(t,e){return!(t&&t.containData&&e.coord&&!hx(e))||t.containData(e.coord)}function vx(t,e,i,n){return n<2?t.coord&&t.coord[n]:t.value}function yx(t,e,i){if("average"===i){var n=0,o=0;return t.each(e,function(t,e){isNaN(t)||(n+=t,o++)}),n/o}return"median"===i?t.getMedian(e):t.getDataExtent(e,!0)["max"===i?1:0]}function xx(t,e,i){var n=e.coordinateSystem;t.each(function(o){var a,r=t.getItemModel(o),s=Bo(r.get("x"),i.getWidth()),l=Bo(r.get("y"),i.getHeight());if(isNaN(s)||isNaN(l)){if(e.getMarkerPosition)a=e.getMarkerPosition(t.getValues(t.dimensions,o));else if(n){var u=t.get(n.dimensions[0],o),h=t.get(n.dimensions[1],o);a=n.dataToPoint([u,h])}}else a=[s,l];isNaN(s)||(a[0]=s),isNaN(l)||(a[1]=l),t.setItemLayout(o,a)})}function _x(t,e,i){var n;n=t?f(t&&t.dimensions,function(t){return r({name:t},e.getData().getDimensionInfo(e.getData().mapDimension(t))||{})}):[{name:"value",type:"float"}];var o=new pA(n,i),a=f(i.get("data"),v(fx,e));return t&&(a=g(a,v(mx,t))),o.initData(a,null,t?vx:function(t){return t.value}),o}function bx(t){return!isNaN(t)&&!isFinite(t)}function Sx(t,e,i,n){var o=1-t,a=n.dimensions[t];return bx(e[o])&&bx(i[o])&&e[t]===i[t]&&n.getAxis(a).containData(e[t])}function Mx(t,e){if("cartesian2d"===t.type){var i=e[0].coord,n=e[1].coord;if(i&&n&&(Sx(1,i,n,t)||Sx(0,i,n,t)))return!0}return mx(t,e[0])&&mx(t,e[1])}function Ix(t,e,i,n,o){var a,r=n.coordinateSystem,s=t.getItemModel(e),l=Bo(s.get("x"),o.getWidth()),u=Bo(s.get("y"),o.getHeight());if(isNaN(l)||isNaN(u)){if(n.getMarkerPosition)a=n.getMarkerPosition(t.getValues(t.dimensions,e));else{var h=r.dimensions,c=t.get(h[0],e),d=t.get(h[1],e);a=r.dataToPoint([c,d])}if("cartesian2d"===r.type){var f=r.getAxis("x"),p=r.getAxis("y"),h=r.dimensions;bx(t.get(h[0],e))?a[0]=f.toGlobalCoord(f.getExtent()[i?0:1]):bx(t.get(h[1],e))&&(a[1]=p.toGlobalCoord(p.getExtent()[i?0:1]))}isNaN(l)||(a[0]=l),isNaN(u)||(a[1]=u)}else a=[l,u];t.setItemLayout(e,a)}function Tx(t,e,i){var n;n=t?f(t&&t.dimensions,function(t){return r({name:t},e.getData().getDimensionInfo(e.getData().mapDimension(t))||{})}):[{name:"value",type:"float"}];var o=new pA(n,i),a=new pA(n,i),s=new pA([],i),l=f(i.get("data"),v(ZO,e,t,i));t&&(l=g(l,v(Mx,t)));var u=t?vx:function(t){return t.value};return o.initData(f(l,function(t){return t[0]}),null,u),a.initData(f(l,function(t){return t[1]}),null,u),s.initData(f(l,function(t){return t[2]})),s.hasItemOption=!0,{from:o,to:a,line:s}}function Ax(t){return!isNaN(t)&&!isFinite(t)}function Dx(t,e,i,n){var o=1-t;return Ax(e[o])&&Ax(i[o])}function Cx(t,e){var i=e.coord[0],n=e.coord[1];return!("cartesian2d"!==t.type||!i||!n||!Dx(1,i,n,t)&&!Dx(0,i,n,t))||(mx(t,{coord:i,x:e.x0,y:e.y0})||mx(t,{coord:n,x:e.x1,y:e.y1}))}function Lx(t,e,i,n,o){var a,r=n.coordinateSystem,s=t.getItemModel(e),l=Bo(s.get(i[0]),o.getWidth()),u=Bo(s.get(i[1]),o.getHeight());if(isNaN(l)||isNaN(u)){if(n.getMarkerPosition)a=n.getMarkerPosition(t.getValues(i,e));else{var h=[f=t.get(i[0],e),p=t.get(i[1],e)];r.clampData&&r.clampData(h,h),a=r.dataToPoint(h,!0)}if("cartesian2d"===r.type){var c=r.getAxis("x"),d=r.getAxis("y"),f=t.get(i[0],e),p=t.get(i[1],e);Ax(f)?a[0]=c.toGlobalCoord(c.getExtent()["x0"===i[0]?0:1]):Ax(p)&&(a[1]=d.toGlobalCoord(d.getExtent()["y0"===i[1]?0:1]))}isNaN(l)||(a[0]=l),isNaN(u)||(a[1]=u)}else a=[l,u];return a}function kx(t,e,i){var n,o;t?(n=f(t&&t.dimensions,function(t){var i=e.getData();return r({name:t},i.getDimensionInfo(i.mapDimension(t))||{})}),o=new pA(f(["x0","y0","x1","y1"],function(t,e){return{name:t,type:n[e%2].type}}),i)):o=new pA(n=[{name:"value",type:"float"}],i);var a=f(i.get("data"),v(UO,e,t,i));t&&(a=g(a,v(Cx,t)));var s=t?function(t,e,i,n){return t.coord[Math.floor(n/2)][n%2]}:function(t){return t.value};return o.initData(a,null,s),o.hasItemOption=!0,o}function Px(t){var e=t.type,i={number:"value",time:"time"};if(i[e]&&(t.axisType=i[e],delete t.type),Nx(t),Ox(t,"controlPosition")){var n=t.controlStyle||(t.controlStyle={});Ox(n,"position")||(n.position=t.controlPosition),"none"!==n.position||Ox(n,"show")||(n.show=!1,delete n.position),delete t.controlPosition}d(t.data||[],function(t){w(t)&&!y(t)&&(!Ox(t,"value")&&Ox(t,"name")&&(t.value=t.name),Nx(t))})}function Nx(t){var e=t.itemStyle||(t.itemStyle={}),i=e.emphasis||(e.emphasis={}),n=t.label||t.label||{},o=n.normal||(n.normal={}),a={normal:1,emphasis:1};d(n,function(t,e){a[e]||Ox(o,e)||(o[e]=t)}),i.label&&!Ox(n,"emphasis")&&(n.emphasis=i.label,delete i.label)}function Ox(t,e){return t.hasOwnProperty(e)}function Ex(t,e){return ha(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()},t.get("padding"))}function Rx(t,e,n,o){return Un(t.get(e).replace(/^path:\/\//,""),i(o||{}),new de(n[0],n[1],n[2],n[3]),"center")}function zx(t,e,i,o,a,r){var s=e.get("color");a?(a.setColor(s),i.add(a),r&&r.onUpdate(a)):((a=$l(t.get("symbol"),-1,-1,2,2,s)).setStyle("strokeNoScale",!0),i.add(a),r&&r.onCreate(a));var l=e.getItemStyle(["color","symbol","symbolSize"]);a.setStyle(l),o=n({rectHover:!0,z2:100},o,!0);var u=t.get("symbolSize");(u=u instanceof Array?u.slice():[+u,+u])[0]/=2,u[1]/=2,o.scale=u;var h=t.get("symbolOffset");if(h){var c=o.position=o.position||[0,0];c[0]+=Bo(h[0],u[0]),c[1]+=Bo(h[1],u[1])}var d=t.get("symbolRotate");return o.rotation=(d||0)*Math.PI/180||0,a.attr(o),a.updateTransform(),a}function Bx(t,e,i,n,o){if(!t.dragging){var a=n.getModel("checkpointStyle"),r=i.dataToCoord(n.getData().get(["value"],e));o||!a.get("animation",!0)?t.attr({position:[r,0]}):(t.stopAnimation(!0),t.animateTo({position:[r,0]},a.get("animationDuration",!0),a.get("animationEasing",!0)))}}function Vx(t){return 0===t.indexOf("my")}function Gx(t){this.model=t}function Fx(t){this.model=t}function Wx(t){var e={},i=[],n=[];return t.eachRawSeries(function(t){var o=t.coordinateSystem;if(!o||"cartesian2d"!==o.type&&"polar"!==o.type)i.push(t);else{var a=o.getBaseAxis();if("category"===a.type){var r=a.dim+"_"+a.index;e[r]||(e[r]={categoryAxis:a,valueAxis:o.getOtherAxis(a),series:[]},n.push({axisDim:a.dim,axisIndex:a.index})),e[r].series.push(t)}else i.push(t)}}),{seriesGroupByCategoryAxis:e,other:i,meta:n}}function Hx(t){var e=[];return d(t,function(t,i){var n=t.categoryAxis,o=t.valueAxis.dim,a=[" "].concat(f(t.series,function(t){return t.name})),r=[n.model.getCategories()];d(t.series,function(t){r.push(t.getRawData().mapArray(o,function(t){return t}))});for(var s=[a.join(sE)],l=0;l<r[0].length;l++){for(var u=[],h=0;h<r.length;h++)u.push(r[h][l]);s.push(u.join(sE))}e.push(s.join("\n"))}),e.join("\n\n"+rE+"\n\n")}function Zx(t){return f(t,function(t){var e=t.getRawData(),i=[t.name],n=[];return e.each(e.dimensions,function(){for(var t=arguments.length,o=arguments[t-1],a=e.getName(o),r=0;r<t-1;r++)n[r]=arguments[r];i.push((a?a+sE:"")+n.join(sE))}),i.join("\n")}).join("\n\n"+rE+"\n\n")}function Ux(t){var e=Wx(t);return{value:g([Hx(e.seriesGroupByCategoryAxis),Zx(e.other)],function(t){return t.replace(/[\n\t\s]/g,"")}).join("\n\n"+rE+"\n\n"),meta:e.meta}}function Xx(t){return t.replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function jx(t){if(t.slice(0,t.indexOf("\n")).indexOf(sE)>=0)return!0}function Yx(t){for(var e=t.split(/\n+/g),i=[],n=f(Xx(e.shift()).split(lE),function(t){return{name:t,data:[]}}),o=0;o<e.length;o++){var a=Xx(e[o]).split(lE);i.push(a.shift());for(var r=0;r<a.length;r++)n[r]&&(n[r].data[o]=a[r])}return{series:n,categories:i}}function qx(t){for(var e=t.split(/\n+/g),i=Xx(e.shift()),n=[],o=0;o<e.length;o++){var a,r=Xx(e[o]).split(lE),s="",l=!1;isNaN(r[0])?(l=!0,s=r[0],r=r.slice(1),n[o]={name:s,value:[]},a=n[o].value):a=n[o]=[];for(var u=0;u<r.length;u++)a.push(+r[u]);1===a.length&&(l?n[o].value=a[0]:n[o]=a[0])}return{name:i,data:n}}function Kx(t,e){var i={series:[]};return d(t.split(new RegExp("\n*"+rE+"\n*","g")),function(t,n){if(jx(t)){var o=Yx(t),a=e[n],r=a.axisDim+"Axis";a&&(i[r]=i[r]||[],i[r][a.axisIndex]={data:o.categories},i.series=i.series.concat(o.series))}else{o=qx(t);i.series.push(o)}}),i}function $x(t){this._dom=null,this.model=t}function Jx(t,e){return f(t,function(t,i){var n=e&&e[i];return w(n)&&!y(n)?(w(t)&&!y(t)&&(t=t.value),r({value:t},n)):t})}function Qx(t,e){var i=n_(t);uE(e,function(e,n){for(var o=i.length-1;o>=0&&!i[o][n];o--);if(o<0){var a=t.queryComponents({mainType:"dataZoom",subType:"select",id:n})[0];if(a){var r=a.getPercentRange();i[0][n]={dataZoomId:n,start:r[0],end:r[1]}}}}),i.push(e)}function t_(t){var e=n_(t),i=e[e.length-1];e.length>1&&e.pop();var n={};return uE(i,function(t,i){for(var o=e.length-1;o>=0;o--)if(t=e[o][i]){n[i]=t;break}}),n}function e_(t){t[hE]=null}function i_(t){return n_(t).length}function n_(t){var e=t[hE];return e||(e=t[hE]=[{}]),e}function o_(t,e,i){(this._brushController=new Rf(i.getZr())).on("brush",m(this._onBrush,this)).mount(),this._isZoomActive}function a_(t){var e={};return d(["xAxisIndex","yAxisIndex"],function(i){e[i]=t[i],null==e[i]&&(e[i]="all"),(!1===e[i]||"none"===e[i])&&(e[i]=[])}),e}function r_(t,e){t.setIconStatus("back",i_(e)>1?"emphasis":"normal")}function s_(t,e,i,n,o){var a=i._isZoomActive;n&&"takeGlobalCursor"===n.type&&(a="dataZoomSelect"===n.key&&n.dataZoomSelectActive),i._isZoomActive=a,t.setIconStatus("zoom",a?"emphasis":"normal");var r=new hy(a_(t.option),e,{include:["grid"]});i._brushController.setPanels(r.makePanelOpts(o,function(t){return t.xAxisDeclared&&!t.yAxisDeclared?"lineX":!t.xAxisDeclared&&t.yAxisDeclared?"lineY":"rect"})).enableBrush(!!a&&{brushType:"auto",brushStyle:{lineWidth:0,fill:"rgba(0,0,0,0.2)"}})}function l_(t){this.model=t}function u_(t){return vE(t)}function h_(){if(!_E&&wE){_E=!0;var t=wE.styleSheets;t.length<31?wE.createStyleSheet().addRule(".zrvml","behavior:url(#default#VML)"):t[0].addRule(".zrvml","behavior:url(#default#VML)")}}function c_(t){return parseInt(t,10)}function d_(t,e){h_(),this.root=t,this.storage=e;var i=document.createElement("div"),n=document.createElement("div");i.style.cssText="display:inline-block;overflow:hidden;position:relative;width:300px;height:150px;",n.style.cssText="position:absolute;left:0;top:0;",t.appendChild(i),this._vmlRoot=n,this._vmlViewport=i,this.resize();var o=e.delFromStorage,a=e.addToStorage;e.delFromStorage=function(t){o.call(e,t),t&&t.onRemove&&t.onRemove(n)},e.addToStorage=function(t){t.onAdd&&t.onAdd(n),a.call(e,t)},this._firstPaint=!0}function f_(t){return function(){Yw('In IE8.0 VML mode painter not support method "'+t+'"')}}function p_(t){return document.createElementNS(eR,t)}function g_(t){return aR(1e4*t)/1e4}function m_(t){return t<cR&&t>-cR}function v_(t,e){var i=e?t.textFill:t.fill;return null!=i&&i!==oR}function y_(t,e){var i=e?t.textStroke:t.stroke;return null!=i&&i!==oR}function x_(t,e){e&&__(t,"transform","matrix("+nR.call(e,",")+")")}function __(t,e,i){(!i||"linear"!==i.type&&"radial"!==i.type)&&t.setAttribute(e,i)}function w_(t,e,i){t.setAttributeNS("http://www.w3.org/1999/xlink",e,i)}function b_(t,e,i,n){if(v_(e,i)){var o=i?e.textFill:e.fill;o="transparent"===o?oR:o,"none"!==t.getAttribute("clip-path")&&o===oR&&(o="rgba(0, 0, 0, 0.002)"),__(t,"fill",o),__(t,"fill-opacity",null!=e.fillOpacity?e.fillOpacity*e.opacity:e.opacity)}else __(t,"fill",oR);if(y_(e,i)){var a=i?e.textStroke:e.stroke;__(t,"stroke",a="transparent"===a?oR:a),__(t,"stroke-width",(i?e.textStrokeWidth:e.lineWidth)/(!i&&e.strokeNoScale?n.getLineScale():1)),__(t,"paint-order",i?"stroke":"fill"),__(t,"stroke-opacity",null!=e.strokeOpacity?e.strokeOpacity:e.opacity),e.lineDash?(__(t,"stroke-dasharray",e.lineDash.join(",")),__(t,"stroke-dashoffset",aR(e.lineDashOffset||0))):__(t,"stroke-dasharray",""),e.lineCap&&__(t,"stroke-linecap",e.lineCap),e.lineJoin&&__(t,"stroke-linejoin",e.lineJoin),e.miterLimit&&__(t,"stroke-miterlimit",e.miterLimit)}else __(t,"stroke",oR)}function S_(t){for(var e=[],i=t.data,n=t.len(),o=0;o<n;){var a="",r=0;switch(i[o++]){case iR.M:a="M",r=2;break;case iR.L:a="L",r=2;break;case iR.Q:a="Q",r=4;break;case iR.C:a="C",r=6;break;case iR.A:var s=i[o++],l=i[o++],u=i[o++],h=i[o++],c=i[o++],d=i[o++],f=i[o++],p=i[o++],g=Math.abs(d),m=m_(g-uR)&&!m_(g),v=!1;v=g>=uR||!m_(g)&&(d>-lR&&d<0||d>lR)==!!p;var y=g_(s+u*sR(c)),x=g_(l+h*rR(c));m&&(d=p?uR-1e-4:1e-4-uR,v=!0,9===o&&e.push("M",y,x));var _=g_(s+u*sR(c+d)),w=g_(l+h*rR(c+d));e.push("A",g_(u),g_(h),aR(f*hR),+v,+p,_,w);break;case iR.Z:a="Z";break;case iR.R:var _=g_(i[o++]),w=g_(i[o++]),b=g_(i[o++]),S=g_(i[o++]);e.push("M",_,w,"L",_+b,w,"L",_+b,w+S,"L",_,w+S,"L",_,w)}a&&e.push(a);for(var M=0;M<r;M++)e.push(g_(i[o++]))}return e.join(" ")}function M_(t){return"middle"===t?"middle":"bottom"===t?"after-edge":"hanging"}function I_(){}function T_(t,e,i,n){for(var o=0,a=e.length,r=0,s=0;o<a;o++){var l=e[o];if(l.removed){for(var u=[],h=s;h<s+l.count;h++)u.push(h);l.indices=u,s+=l.count}else{for(var u=[],h=r;h<r+l.count;h++)u.push(h);l.indices=u,r+=l.count,l.added||(s+=l.count)}}return e}function A_(t){return{newPos:t.newPos,components:t.components.slice(0)}}function D_(t,e,i,n,o){this._zrId=t,this._svgRoot=e,this._tagNames="string"==typeof i?[i]:i,this._markLabel=n,this._domName=o||"_dom",this.nextId=0}function C_(t,e){D_.call(this,t,e,["linearGradient","radialGradient"],"__gradient_in_use__")}function L_(t,e){D_.call(this,t,e,"clipPath","__clippath_in_use__")}function k_(t,e){D_.call(this,t,e,["filter"],"__filter_in_use__","_shadowDom")}function P_(t){return t&&(t.shadowBlur||t.shadowOffsetX||t.shadowOffsetY||t.textShadowBlur||t.textShadowOffsetX||t.textShadowOffsetY)}function N_(t){return parseInt(t,10)}function O_(t){return t instanceof kn?dR:t instanceof fi?fR:t instanceof aM?pR:dR}function E_(t,e){return e&&t&&e.parentNode!==t}function R_(t,e,i){if(E_(t,e)&&i){var n=i.nextSibling;n?t.insertBefore(e,n):t.appendChild(e)}}function z_(t,e){if(E_(t,e)){var i=t.firstChild;i?t.insertBefore(e,i):t.appendChild(e)}}function B_(t,e){e&&t&&e.parentNode===t&&t.removeChild(e)}function V_(t){return t.__textSvgEl}function G_(t){return t.__svgEl}function F_(t){return function(){Yw('In SVG mode painter not support method "'+t+'"')}}var W_=2311,H_=function(){return W_++},Z_={},U_=Z_="object"==typeof wx&&"function"==typeof wx.getSystemInfoSync?{browser:{},os:{},node:!1,wxa:!0,canvasSupported:!0,svgSupported:!1,touchEventsSupported:!0,domSupported:!1}:"undefined"==typeof document&&"undefined"!=typeof self?{browser:{},os:{},node:!1,worker:!0,canvasSupported:!0,domSupported:!1}:"undefined"==typeof navigator?{browser:{},os:{},node:!0,worker:!1,canvasSupported:!0,svgSupported:!0,domSupported:!1}:function(t){var e={},i=t.match(/Firefox\/([\d.]+)/),n=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/.+?rv:(([\d.]+))/),o=t.match(/Edge\/([\d.]+)/),a=/micromessenger/i.test(t);return i&&(e.firefox=!0,e.version=i[1]),n&&(e.ie=!0,e.version=n[1]),o&&(e.edge=!0,e.version=o[1]),a&&(e.weChat=!0),{browser:e,os:{},node:!1,canvasSupported:!!document.createElement("canvas").getContext,svgSupported:"undefined"!=typeof SVGRect,touchEventsSupported:"ontouchstart"in window&&!e.ie&&!e.edge,pointerEventsSupported:"onpointerdown"in window&&(e.edge||e.ie&&e.version>=11),domSupported:"undefined"!=typeof document}}(navigator.userAgent),X_={"[object Function]":1,"[object RegExp]":1,"[object Date]":1,"[object Error]":1,"[object CanvasGradient]":1,"[object CanvasPattern]":1,"[object Image]":1,"[object Canvas]":1},j_={"[object Int8Array]":1,"[object Uint8Array]":1,"[object Uint8ClampedArray]":1,"[object Int16Array]":1,"[object Uint16Array]":1,"[object Int32Array]":1,"[object Uint32Array]":1,"[object Float32Array]":1,"[object Float64Array]":1},Y_=Object.prototype.toString,q_=Array.prototype,K_=q_.forEach,$_=q_.filter,J_=q_.slice,Q_=q_.map,tw=q_.reduce,ew={},iw=function(){return ew.createCanvas()};ew.createCanvas=function(){return document.createElement("canvas")};var nw,ow="__ec_primitive__";E.prototype={constructor:E,get:function(t){return this.data.hasOwnProperty(t)?this.data[t]:null},set:function(t,e){return this.data[t]=e},each:function(t,e){void 0!==e&&(t=m(t,e));for(var i in this.data)this.data.hasOwnProperty(i)&&t(this.data[i],i)},removeKey:function(t){delete this.data[t]}};var aw=(Object.freeze||Object)({$override:e,clone:i,merge:n,mergeAll:o,extend:a,defaults:r,createCanvas:iw,getContext:s,indexOf:l,inherits:u,mixin:h,isArrayLike:c,each:d,map:f,reduce:p,filter:g,find:function(t,e,i){if(t&&e)for(var n=0,o=t.length;n<o;n++)if(e.call(i,t[n],n,t))return t[n]},bind:m,curry:v,isArray:y,isFunction:x,isString:_,isObject:w,isBuiltInObject:b,isTypedArray:S,isDom:M,eqNaN:I,retrieve:T,retrieve2:A,retrieve3:D,slice:C,normalizeCssArray:L,assert:k,trim:P,setAsPrimitive:N,isPrimitive:O,createHashMap:R,concatArray:z,noop:B}),rw="undefined"==typeof Float32Array?Array:Float32Array,sw=X,lw=j,uw=K,hw=$,cw=(Object.freeze||Object)({create:V,copy:G,clone:F,set:W,add:H,scaleAndAdd:Z,sub:U,len:X,length:sw,lenSquare:j,lengthSquare:lw,mul:function(t,e,i){return t[0]=e[0]*i[0],t[1]=e[1]*i[1],t},div:function(t,e,i){return t[0]=e[0]/i[0],t[1]=e[1]/i[1],t},dot:function(t,e){return t[0]*e[0]+t[1]*e[1]},scale:Y,normalize:q,distance:K,dist:uw,distanceSquare:$,distSquare:hw,negate:function(t,e){return t[0]=-e[0],t[1]=-e[1],t},lerp:J,applyTransform:Q,min:tt,max:et});it.prototype={constructor:it,_dragStart:function(t){var e=t.target;e&&e.draggable&&(this._draggingTarget=e,e.dragging=!0,this._x=t.offsetX,this._y=t.offsetY,this.dispatchToElement(nt(e,t),"dragstart",t.event))},_drag:function(t){var e=this._draggingTarget;if(e){var i=t.offsetX,n=t.offsetY,o=i-this._x,a=n-this._y;this._x=i,this._y=n,e.drift(o,a,t),this.dispatchToElement(nt(e,t),"drag",t.event);var r=this.findHover(i,n,e).target,s=this._dropTarget;this._dropTarget=r,e!==r&&(s&&r!==s&&this.dispatchToElement(nt(s,t),"dragleave",t.event),r&&r!==s&&this.dispatchToElement(nt(r,t),"dragenter",t.event))}},_dragEnd:function(t){var e=this._draggingTarget;e&&(e.dragging=!1),this.dispatchToElement(nt(e,t),"dragend",t.event),this._dropTarget&&this.dispatchToElement(nt(this._dropTarget,t),"drop",t.event),this._draggingTarget=null,this._dropTarget=null}};var dw=Array.prototype.slice,fw=function(t){this._$handlers={},this._$eventProcessor=t};fw.prototype={constructor:fw,one:function(t,e,i,n){return at(this,t,e,i,n,!0)},on:function(t,e,i,n){return at(this,t,e,i,n,!1)},isSilent:function(t){var e=this._$handlers;return!e[t]||!e[t].length},off:function(t,e){var i=this._$handlers;if(!t)return this._$handlers={},this;if(e){if(i[t]){for(var n=[],o=0,a=i[t].length;o<a;o++)i[t][o].h!==e&&n.push(i[t][o]);i[t]=n}i[t]&&0===i[t].length&&delete i[t]}else delete i[t];return this},trigger:function(t){var e=this._$handlers[t],i=this._$eventProcessor;if(e){var n=arguments,o=n.length;o>3&&(n=dw.call(n,1));for(var a=e.length,r=0;r<a;){var s=e[r];if(i&&i.filter&&null!=s.query&&!i.filter(t,s.query))r++;else{switch(o){case 1:s.h.call(s.ctx);break;case 2:s.h.call(s.ctx,n[1]);break;case 3:s.h.call(s.ctx,n[1],n[2]);break;default:s.h.apply(s.ctx,n)}s.one?(e.splice(r,1),a--):r++}}}return i&&i.afterTrigger&&i.afterTrigger(t),this},triggerWithContext:function(t){var e=this._$handlers[t],i=this._$eventProcessor;if(e){var n=arguments,o=n.length;o>4&&(n=dw.call(n,1,n.length-1));for(var a=n[n.length-1],r=e.length,s=0;s<r;){var l=e[s];if(i&&i.filter&&null!=l.query&&!i.filter(t,l.query))s++;else{switch(o){case 1:l.h.call(a);break;case 2:l.h.call(a,n[1]);break;case 3:l.h.call(a,n[1],n[2]);break;default:l.h.apply(a,n)}l.one?(e.splice(s,1),r--):s++}}}return i&&i.afterTrigger&&i.afterTrigger(t),this}};var pw="undefined"!=typeof window&&!!window.addEventListener,gw=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,mw=pw?function(t){t.preventDefault(),t.stopPropagation(),t.cancelBubble=!0}:function(t){t.returnValue=!1,t.cancelBubble=!0},vw=function(){this._track=[]};vw.prototype={constructor:vw,recognize:function(t,e,i){return this._doTrack(t,e,i),this._recognize(t)},clear:function(){return this._track.length=0,this},_doTrack:function(t,e,i){var n=t.touches;if(n){for(var o={points:[],touches:[],target:e,event:t},a=0,r=n.length;a<r;a++){var s=n[a],l=st(i,s,{});o.points.push([l.zrX,l.zrY]),o.touches.push(s)}this._track.push(o)}},_recognize:function(t){for(var e in yw)if(yw.hasOwnProperty(e)){var i=yw[e](this._track,t);if(i)return i}}};var yw={pinch:function(t,e){var i=t.length;if(i){var n=(t[i-1]||{}).points,o=(t[i-2]||{}).points||n;if(o&&o.length>1&&n&&n.length>1){var a=ft(n)/ft(o);!isFinite(a)&&(a=1),e.pinchScale=a;var r=pt(n);return e.pinchX=r[0],e.pinchY=r[1],{type:"pinch",target:t[0].target,event:e}}}}},xw="silent";vt.prototype.dispose=function(){};var _w=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],ww=function(t,e,i,n){fw.call(this),this.storage=t,this.painter=e,this.painterRoot=n,i=i||new vt,this.proxy=null,this._hovered={},this._lastTouchMoment,this._lastX,this._lastY,this._gestureMgr,it.call(this),this.setHandlerProxy(i)};ww.prototype={constructor:ww,setHandlerProxy:function(t){this.proxy&&this.proxy.dispose(),t&&(d(_w,function(e){t.on&&t.on(e,this[e],this)},this),t.handler=this),this.proxy=t},mousemove:function(t){var e=t.zrX,i=t.zrY,n=this._hovered,o=n.target;o&&!o.__zr&&(o=(n=this.findHover(n.x,n.y)).target);var a=this._hovered=this.findHover(e,i),r=a.target,s=this.proxy;s.setCursor&&s.setCursor(r?r.cursor:"default"),o&&r!==o&&this.dispatchToElement(n,"mouseout",t),this.dispatchToElement(a,"mousemove",t),r&&r!==o&&this.dispatchToElement(a,"mouseover",t)},mouseout:function(t){this.dispatchToElement(this._hovered,"mouseout",t);var e,i=t.toElement||t.relatedTarget;do{i=i&&i.parentNode}while(i&&9!==i.nodeType&&!(e=i===this.painterRoot));!e&&this.trigger("globalout",{event:t})},resize:function(t){this._hovered={}},dispatch:function(t,e){var i=this[t];i&&i.call(this,e)},dispose:function(){this.proxy.dispose(),this.storage=this.proxy=this.painter=null},setCursorStyle:function(t){var e=this.proxy;e.setCursor&&e.setCursor(t)},dispatchToElement:function(t,e,i){var n=(t=t||{}).target;if(!n||!n.silent){for(var o="on"+e,a=gt(e,t,i);n&&(n[o]&&(a.cancelBubble=n[o].call(n,a)),n.trigger(e,a),n=n.parent,!a.cancelBubble););a.cancelBubble||(this.trigger(e,a),this.painter&&this.painter.eachOtherLayer(function(t){"function"==typeof t[o]&&t[o].call(t,a),t.trigger&&t.trigger(e,a)}))}},findHover:function(t,e,i){for(var n=this.storage.getDisplayList(),o={x:t,y:e},a=n.length-1;a>=0;a--){var r;if(n[a]!==i&&!n[a].ignore&&(r=yt(n[a],t,e))&&(!o.topTarget&&(o.topTarget=n[a]),r!==xw)){o.target=n[a];break}}return o},processGesture:function(t,e){this._gestureMgr||(this._gestureMgr=new vw);var i=this._gestureMgr;"start"===e&&i.clear();var n=i.recognize(t,this.findHover(t.zrX,t.zrY,null).target,this.proxy.dom);if("end"===e&&i.clear(),n){var o=n.type;t.gestureEvent=o,this.dispatchToElement({target:n.target},o,n.event)}}},d(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){ww.prototype[t]=function(e){var i=this.findHover(e.zrX,e.zrY),n=i.target;if("mousedown"===t)this._downEl=n,this._downPoint=[e.zrX,e.zrY],this._upEl=n;else if("mouseup"===t)this._upEl=n;else if("click"===t){if(this._downEl!==this._upEl||!this._downPoint||uw(this._downPoint,[e.zrX,e.zrY])>4)return;this._downPoint=null}this.dispatchToElement(i,t,e)}}),h(ww,fw),h(ww,it);var bw="undefined"==typeof Float32Array?Array:Float32Array,Sw=(Object.freeze||Object)({create:xt,identity:_t,copy:wt,mul:bt,translate:St,rotate:Mt,scale:It,invert:Tt,clone:At}),Mw=_t,Iw=5e-5,Tw=function(t){(t=t||{}).position||(this.position=[0,0]),null==t.rotation&&(this.rotation=0),t.scale||(this.scale=[1,1]),this.origin=this.origin||null},Aw=Tw.prototype;Aw.transform=null,Aw.needLocalTransform=function(){return Dt(this.rotation)||Dt(this.position[0])||Dt(this.position[1])||Dt(this.scale[0]-1)||Dt(this.scale[1]-1)};var Dw=[];Aw.updateTransform=function(){var t=this.parent,e=t&&t.transform,i=this.needLocalTransform(),n=this.transform;if(i||e){n=n||xt(),i?this.getLocalTransform(n):Mw(n),e&&(i?bt(n,t.transform,n):wt(n,t.transform)),this.transform=n;var o=this.globalScaleRatio;if(null!=o&&1!==o){this.getGlobalScale(Dw);var a=Dw[0]<0?-1:1,r=Dw[1]<0?-1:1,s=((Dw[0]-a)*o+a)/Dw[0]||0,l=((Dw[1]-r)*o+r)/Dw[1]||0;n[0]*=s,n[1]*=s,n[2]*=l,n[3]*=l}this.invTransform=this.invTransform||xt(),Tt(this.invTransform,n)}else n&&Mw(n)},Aw.getLocalTransform=function(t){return Tw.getLocalTransform(this,t)},Aw.setTransform=function(t){var e=this.transform,i=t.dpr||1;e?t.setTransform(i*e[0],i*e[1],i*e[2],i*e[3],i*e[4],i*e[5]):t.setTransform(i,0,0,i,0,0)},Aw.restoreTransform=function(t){var e=t.dpr||1;t.setTransform(e,0,0,e,0,0)};var Cw=[],Lw=xt();Aw.setLocalTransform=function(t){if(t){var e=t[0]*t[0]+t[1]*t[1],i=t[2]*t[2]+t[3]*t[3],n=this.position,o=this.scale;Dt(e-1)&&(e=Math.sqrt(e)),Dt(i-1)&&(i=Math.sqrt(i)),t[0]<0&&(e=-e),t[3]<0&&(i=-i),n[0]=t[4],n[1]=t[5],o[0]=e,o[1]=i,this.rotation=Math.atan2(-t[1]/i,t[0]/e)}},Aw.decomposeTransform=function(){if(this.transform){var t=this.parent,e=this.transform;t&&t.transform&&(bt(Cw,t.invTransform,e),e=Cw);var i=this.origin;i&&(i[0]||i[1])&&(Lw[4]=i[0],Lw[5]=i[1],bt(Cw,e,Lw),Cw[4]-=i[0],Cw[5]-=i[1],e=Cw),this.setLocalTransform(e)}},Aw.getGlobalScale=function(t){var e=this.transform;return t=t||[],e?(t[0]=Math.sqrt(e[0]*e[0]+e[1]*e[1]),t[1]=Math.sqrt(e[2]*e[2]+e[3]*e[3]),e[0]<0&&(t[0]=-t[0]),e[3]<0&&(t[1]=-t[1]),t):(t[0]=1,t[1]=1,t)},Aw.transformCoordToLocal=function(t,e){var i=[t,e],n=this.invTransform;return n&&Q(i,i,n),i},Aw.transformCoordToGlobal=function(t,e){var i=[t,e],n=this.transform;return n&&Q(i,i,n),i},Tw.getLocalTransform=function(t,e){Mw(e=e||[]);var i=t.origin,n=t.scale||[1,1],o=t.rotation||0,a=t.position||[0,0];return i&&(e[4]-=i[0],e[5]-=i[1]),It(e,e,n),o&&Mt(e,e,o),i&&(e[4]+=i[0],e[5]+=i[1]),e[4]+=a[0],e[5]+=a[1],e};var kw={linear:function(t){return t},quadraticIn:function(t){return t*t},quadraticOut:function(t){return t*(2-t)},quadraticInOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},cubicIn:function(t){return t*t*t},cubicOut:function(t){return--t*t*t+1},cubicInOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},quarticIn:function(t){return t*t*t*t},quarticOut:function(t){return 1- --t*t*t*t},quarticInOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},quinticIn:function(t){return t*t*t*t*t},quinticOut:function(t){return--t*t*t*t*t+1},quinticInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},sinusoidalIn:function(t){return 1-Math.cos(t*Math.PI/2)},sinusoidalOut:function(t){return Math.sin(t*Math.PI/2)},sinusoidalInOut:function(t){return.5*(1-Math.cos(Math.PI*t))},exponentialIn:function(t){return 0===t?0:Math.pow(1024,t-1)},exponentialOut:function(t){return 1===t?1:1-Math.pow(2,-10*t)},exponentialInOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},circularIn:function(t){return 1-Math.sqrt(1-t*t)},circularOut:function(t){return Math.sqrt(1- --t*t)},circularInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},elasticIn:function(t){var e,i=.1;return 0===t?0:1===t?1:(!i||i<1?(i=1,e=.1):e=.4*Math.asin(1/i)/(2*Math.PI),-i*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4))},elasticOut:function(t){var e,i=.1;return 0===t?0:1===t?1:(!i||i<1?(i=1,e=.1):e=.4*Math.asin(1/i)/(2*Math.PI),i*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/.4)+1)},elasticInOut:function(t){var e,i=.1;return 0===t?0:1===t?1:(!i||i<1?(i=1,e=.1):e=.4*Math.asin(1/i)/(2*Math.PI),(t*=2)<1?i*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*-.5:i*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*.5+1)},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},backInOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},bounceIn:function(t){return 1-kw.bounceOut(1-t)},bounceOut:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bounceInOut:function(t){return t<.5?.5*kw.bounceIn(2*t):.5*kw.bounceOut(2*t-1)+.5}};Ct.prototype={constructor:Ct,step:function(t,e){if(this._initialized||(this._startTime=t+this._delay,this._initialized=!0),this._paused)this._pausedTime+=e;else{var i=(t-this._startTime-this._pausedTime)/this._life;if(!(i<0)){i=Math.min(i,1);var n=this.easing,o="string"==typeof n?kw[n]:n,a="function"==typeof o?o(i):i;return this.fire("frame",a),1===i?this.loop?(this.restart(t),"restart"):(this._needsRemove=!0,"destroy"):null}}},restart:function(t){var e=(t-this._startTime-this._pausedTime)%this._life;this._startTime=t-e+this.gap,this._pausedTime=0,this._needsRemove=!1},fire:function(t,e){this[t="on"+t]&&this[t](this._target,e)},pause:function(){this._paused=!0},resume:function(){this._paused=!1}};var Pw=function(){this.head=null,this.tail=null,this._len=0},Nw=Pw.prototype;Nw.insert=function(t){var e=new Ow(t);return this.insertEntry(e),e},Nw.insertEntry=function(t){this.head?(this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t):this.head=this.tail=t,this._len++},Nw.remove=function(t){var e=t.prev,i=t.next;e?e.next=i:this.head=i,i?i.prev=e:this.tail=e,t.next=t.prev=null,this._len--},Nw.len=function(){return this._len},Nw.clear=function(){this.head=this.tail=null,this._len=0};var Ow=function(t){this.value=t,this.next,this.prev},Ew=function(t){this._list=new Pw,this._map={},this._maxSize=t||10,this._lastRemovedEntry=null},Rw=Ew.prototype;Rw.put=function(t,e){var i=this._list,n=this._map,o=null;if(null==n[t]){var a=i.len(),r=this._lastRemovedEntry;if(a>=this._maxSize&&a>0){var s=i.head;i.remove(s),delete n[s.key],o=s.value,this._lastRemovedEntry=s}r?r.value=e:r=new Ow(e),r.key=t,i.insertEntry(r),n[t]=r}return o},Rw.get=function(t){var e=this._map[t],i=this._list;if(null!=e)return e!==i.tail&&(i.remove(e),i.insertEntry(e)),e.value},Rw.clear=function(){this._list.clear(),this._map={}};var zw={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]},Bw=new Ew(20),Vw=null,Gw=Ut,Fw=Xt,Ww=(Object.freeze||Object)({parse:Gt,lift:Ht,toHex:Zt,fastLerp:Ut,fastMapToColor:Gw,lerp:Xt,mapToColor:Fw,modifyHSL:jt,modifyAlpha:Yt,stringify:qt}),Hw=Array.prototype.slice,Zw=function(t,e,i,n){this._tracks={},this._target=t,this._loop=e||!1,this._getter=i||Kt,this._setter=n||$t,this._clipCount=0,this._delay=0,this._doneList=[],this._onframeList=[],this._clipList=[]};Zw.prototype={when:function(t,e){var i=this._tracks;for(var n in e)if(e.hasOwnProperty(n)){if(!i[n]){i[n]=[];var o=this._getter(this._target,n);if(null==o)continue;0!==t&&i[n].push({time:0,value:ae(o)})}i[n].push({time:t,value:e[n]})}return this},during:function(t){return this._onframeList.push(t),this},pause:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].pause();this._paused=!0},resume:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].resume();this._paused=!1},isPaused:function(){return!!this._paused},_doneCallback:function(){this._tracks={},this._clipList.length=0;for(var t=this._doneList,e=t.length,i=0;i<e;i++)t[i].call(this)},start:function(t,e){var i,n=this,o=0;for(var a in this._tracks)if(this._tracks.hasOwnProperty(a)){var r=le(this,t,function(){--o||n._doneCallback()},this._tracks[a],a,e);r&&(this._clipList.push(r),o++,this.animation&&this.animation.addClip(r),i=r)}if(i){var s=i.onframe;i.onframe=function(t,e){s(t,e);for(var i=0;i<n._onframeList.length;i++)n._onframeList[i](t,e)}}return o||this._doneCallback(),this},stop:function(t){for(var e=this._clipList,i=this.animation,n=0;n<e.length;n++){var o=e[n];t&&o.onframe(this._target,1),i&&i.removeClip(o)}e.length=0},delay:function(t){return this._delay=t,this},done:function(t){return t&&this._doneList.push(t),this},getClips:function(){return this._clipList}};var Uw=1;"undefined"!=typeof window&&(Uw=Math.max(window.devicePixelRatio||1,1));var Xw=Uw,jw=function(){},Yw=jw,qw=function(){this.animators=[]};qw.prototype={constructor:qw,animate:function(t,e){var i,n=!1,o=this,a=this.__zr;if(t){var r=t.split("."),s=o;n="shape"===r[0];for(var u=0,h=r.length;u<h;u++)s&&(s=s[r[u]]);s&&(i=s)}else i=o;if(i){var c=o.animators,d=new Zw(i,e);return d.during(function(t){o.dirty(n)}).done(function(){c.splice(l(c,d),1)}),c.push(d),a&&a.animation.addAnimator(d),d}Yw('Property "'+t+'" is not existed in element '+o.id)},stopAnimation:function(t){for(var e=this.animators,i=e.length,n=0;n<i;n++)e[n].stop(t);return e.length=0,this},animateTo:function(t,e,i,n,o,a){ue(this,t,e,i,n,o,a)},animateFrom:function(t,e,i,n,o,a){ue(this,t,e,i,n,o,a,!0)}};var Kw=function(t){Tw.call(this,t),fw.call(this,t),qw.call(this,t),this.id=t.id||H_()};Kw.prototype={type:"element",name:"",__zr:null,ignore:!1,clipPath:null,isGroup:!1,drift:function(t,e){switch(this.draggable){case"horizontal":e=0;break;case"vertical":t=0}var i=this.transform;i||(i=this.transform=[1,0,0,1,0,0]),i[4]+=t,i[5]+=e,this.decomposeTransform(),this.dirty(!1)},beforeUpdate:function(){},afterUpdate:function(){},update:function(){this.updateTransform()},traverse:function(t,e){},attrKV:function(t,e){if("position"===t||"scale"===t||"origin"===t){if(e){var i=this[t];i||(i=this[t]=[]),i[0]=e[0],i[1]=e[1]}}else this[t]=e},hide:function(){this.ignore=!0,this.__zr&&this.__zr.refresh()},show:function(){this.ignore=!1,this.__zr&&this.__zr.refresh()},attr:function(t,e){if("string"==typeof t)this.attrKV(t,e);else if(w(t))for(var i in t)t.hasOwnProperty(i)&&this.attrKV(i,t[i]);return this.dirty(!1),this},setClipPath:function(t){var e=this.__zr;e&&t.addSelfToZr(e),this.clipPath&&this.clipPath!==t&&this.removeClipPath(),this.clipPath=t,t.__zr=e,t.__clipTarget=this,this.dirty(!1)},removeClipPath:function(){var t=this.clipPath;t&&(t.__zr&&t.removeSelfFromZr(t.__zr),t.__zr=null,t.__clipTarget=null,this.clipPath=null,this.dirty(!1))},addSelfToZr:function(t){this.__zr=t;var e=this.animators;if(e)for(var i=0;i<e.length;i++)t.animation.addAnimator(e[i]);this.clipPath&&this.clipPath.addSelfToZr(t)},removeSelfFromZr:function(t){this.__zr=null;var e=this.animators;if(e)for(var i=0;i<e.length;i++)t.animation.removeAnimator(e[i]);this.clipPath&&this.clipPath.removeSelfFromZr(t)}},h(Kw,qw),h(Kw,Tw),h(Kw,fw);var $w=Q,Jw=Math.min,Qw=Math.max;de.prototype={constructor:de,union:function(t){var e=Jw(t.x,this.x),i=Jw(t.y,this.y);this.width=Qw(t.x+t.width,this.x+this.width)-e,this.height=Qw(t.y+t.height,this.y+this.height)-i,this.x=e,this.y=i},applyTransform:function(){var t=[],e=[],i=[],n=[];return function(o){if(o){t[0]=i[0]=this.x,t[1]=n[1]=this.y,e[0]=n[0]=this.x+this.width,e[1]=i[1]=this.y+this.height,$w(t,t,o),$w(e,e,o),$w(i,i,o),$w(n,n,o),this.x=Jw(t[0],e[0],i[0],n[0]),this.y=Jw(t[1],e[1],i[1],n[1]);var a=Qw(t[0],e[0],i[0],n[0]),r=Qw(t[1],e[1],i[1],n[1]);this.width=a-this.x,this.height=r-this.y}}}(),calculateTransform:function(t){var e=this,i=t.width/e.width,n=t.height/e.height,o=xt();return St(o,o,[-e.x,-e.y]),It(o,o,[i,n]),St(o,o,[t.x,t.y]),o},intersect:function(t){if(!t)return!1;t instanceof de||(t=de.create(t));var e=this,i=e.x,n=e.x+e.width,o=e.y,a=e.y+e.height,r=t.x,s=t.x+t.width,l=t.y,u=t.y+t.height;return!(n<r||s<i||a<l||u<o)},contain:function(t,e){var i=this;return t>=i.x&&t<=i.x+i.width&&e>=i.y&&e<=i.y+i.height},clone:function(){return new de(this.x,this.y,this.width,this.height)},copy:function(t){this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height},plain:function(){return{x:this.x,y:this.y,width:this.width,height:this.height}}},de.create=function(t){return new de(t.x,t.y,t.width,t.height)};var tb=function(t){t=t||{},Kw.call(this,t);for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);this._children=[],this.__storage=null,this.__dirty=!0};tb.prototype={constructor:tb,isGroup:!0,type:"group",silent:!1,children:function(){return this._children.slice()},childAt:function(t){return this._children[t]},childOfName:function(t){for(var e=this._children,i=0;i<e.length;i++)if(e[i].name===t)return e[i]},childCount:function(){return this._children.length},add:function(t){return t&&t!==this&&t.parent!==this&&(this._children.push(t),this._doAdd(t)),this},addBefore:function(t,e){if(t&&t!==this&&t.parent!==this&&e&&e.parent===this){var i=this._children,n=i.indexOf(e);n>=0&&(i.splice(n,0,t),this._doAdd(t))}return this},_doAdd:function(t){t.parent&&t.parent.remove(t),t.parent=this;var e=this.__storage,i=this.__zr;e&&e!==t.__storage&&(e.addToStorage(t),t instanceof tb&&t.addChildrenToStorage(e)),i&&i.refresh()},remove:function(t){var e=this.__zr,i=this.__storage,n=this._children,o=l(n,t);return o<0?this:(n.splice(o,1),t.parent=null,i&&(i.delFromStorage(t),t instanceof tb&&t.delChildrenFromStorage(i)),e&&e.refresh(),this)},removeAll:function(){var t,e,i=this._children,n=this.__storage;for(e=0;e<i.length;e++)t=i[e],n&&(n.delFromStorage(t),t instanceof tb&&t.delChildrenFromStorage(n)),t.parent=null;return i.length=0,this},eachChild:function(t,e){for(var i=this._children,n=0;n<i.length;n++){var o=i[n];t.call(e,o,n)}return this},traverse:function(t,e){for(var i=0;i<this._children.length;i++){var n=this._children[i];t.call(e,n),"group"===n.type&&n.traverse(t,e)}return this},addChildrenToStorage:function(t){for(var e=0;e<this._children.length;e++){var i=this._children[e];t.addToStorage(i),i instanceof tb&&i.addChildrenToStorage(t)}},delChildrenFromStorage:function(t){for(var e=0;e<this._children.length;e++){var i=this._children[e];t.delFromStorage(i),i instanceof tb&&i.delChildrenFromStorage(t)}},dirty:function(){return this.__dirty=!0,this.__zr&&this.__zr.refresh(),this},getBoundingRect:function(t){for(var e=null,i=new de(0,0,0,0),n=t||this._children,o=[],a=0;a<n.length;a++){var r=n[a];if(!r.ignore&&!r.invisible){var s=r.getBoundingRect(),l=r.getLocalTransform(o);l?(i.copy(s),i.applyTransform(l),(e=e||i.clone()).union(i)):(e=e||s.clone()).union(s)}}return e||i}},u(tb,Kw);var eb=32,ib=7,nb=function(){this._roots=[],this._displayList=[],this._displayListLen=0};nb.prototype={constructor:nb,traverse:function(t,e){for(var i=0;i<this._roots.length;i++)this._roots[i].traverse(t,e)},getDisplayList:function(t,e){return e=e||!1,t&&this.updateDisplayList(e),this._displayList},updateDisplayList:function(t){this._displayListLen=0;for(var e=this._roots,i=this._displayList,n=0,o=e.length;n<o;n++)this._updateAndAddDisplayable(e[n],null,t);i.length=this._displayListLen,U_.canvasSupported&&_e(i,we)},_updateAndAddDisplayable:function(t,e,i){if(!t.ignore||i){t.beforeUpdate(),t.__dirty&&t.update(),t.afterUpdate();var n=t.clipPath;if(n){e=e?e.slice():[];for(var o=n,a=t;o;)o.parent=a,o.updateTransform(),e.push(o),a=o,o=o.clipPath}if(t.isGroup){for(var r=t._children,s=0;s<r.length;s++){var l=r[s];t.__dirty&&(l.__dirty=!0),this._updateAndAddDisplayable(l,e,i)}t.__dirty=!1}else t.__clipPaths=e,this._displayList[this._displayListLen++]=t}},addRoot:function(t){t.__storage!==this&&(t instanceof tb&&t.addChildrenToStorage(this),this.addToStorage(t),this._roots.push(t))},delRoot:function(t){if(null==t){for(i=0;i<this._roots.length;i++){var e=this._roots[i];e instanceof tb&&e.delChildrenFromStorage(this)}return this._roots=[],this._displayList=[],void(this._displayListLen=0)}if(t instanceof Array)for(var i=0,n=t.length;i<n;i++)this.delRoot(t[i]);else{var o=l(this._roots,t);o>=0&&(this.delFromStorage(t),this._roots.splice(o,1),t instanceof tb&&t.delChildrenFromStorage(this))}},addToStorage:function(t){return t&&(t.__storage=this,t.dirty(!1)),this},delFromStorage:function(t){return t&&(t.__storage=null),this},dispose:function(){this._renderList=this._roots=null},displayableSortFunc:we};var ob={shadowBlur:1,shadowOffsetX:1,shadowOffsetY:1,textShadowBlur:1,textShadowOffsetX:1,textShadowOffsetY:1,textBoxShadowBlur:1,textBoxShadowOffsetX:1,textBoxShadowOffsetY:1},ab=function(t,e,i){return ob.hasOwnProperty(e)?i*=t.dpr:i},rb={NONE:0,STYLE_BIND:1,PLAIN_TEXT:2},sb=9,lb=[["shadowBlur",0],["shadowOffsetX",0],["shadowOffsetY",0],["shadowColor","#000"],["lineCap","butt"],["lineJoin","miter"],["miterLimit",10]],ub=function(t){this.extendFrom(t,!1)};ub.prototype={constructor:ub,fill:"#000",stroke:null,opacity:1,fillOpacity:null,strokeOpacity:null,lineDash:null,lineDashOffset:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,lineWidth:1,strokeNoScale:!1,text:null,font:null,textFont:null,fontStyle:null,fontWeight:null,fontSize:null,fontFamily:null,textTag:null,textFill:"#000",textStroke:null,textWidth:null,textHeight:null,textStrokeWidth:0,textLineHeight:null,textPosition:"inside",textRect:null,textOffset:null,textAlign:null,textVerticalAlign:null,textDistance:5,textShadowColor:"transparent",textShadowBlur:0,textShadowOffsetX:0,textShadowOffsetY:0,textBoxShadowColor:"transparent",textBoxShadowBlur:0,textBoxShadowOffsetX:0,textBoxShadowOffsetY:0,transformText:!1,textRotation:0,textOrigin:null,textBackgroundColor:null,textBorderColor:null,textBorderWidth:0,textBorderRadius:0,textPadding:null,rich:null,truncate:null,blend:null,bind:function(t,e,i){var n=this,o=i&&i.style,a=!o||t.__attrCachedBy!==rb.STYLE_BIND;t.__attrCachedBy=rb.STYLE_BIND;for(var r=0;r<lb.length;r++){var s=lb[r],l=s[0];(a||n[l]!==o[l])&&(t[l]=ab(t,l,n[l]||s[1]))}if((a||n.fill!==o.fill)&&(t.fillStyle=n.fill),(a||n.stroke!==o.stroke)&&(t.strokeStyle=n.stroke),(a||n.opacity!==o.opacity)&&(t.globalAlpha=null==n.opacity?1:n.opacity),(a||n.blend!==o.blend)&&(t.globalCompositeOperation=n.blend||"source-over"),this.hasStroke()){var u=n.lineWidth;t.lineWidth=u/(this.strokeNoScale&&e&&e.getLineScale?e.getLineScale():1)}},hasFill:function(){var t=this.fill;return null!=t&&"none"!==t},hasStroke:function(){var t=this.stroke;return null!=t&&"none"!==t&&this.lineWidth>0},extendFrom:function(t,e){if(t)for(var i in t)!t.hasOwnProperty(i)||!0!==e&&(!1===e?this.hasOwnProperty(i):null==t[i])||(this[i]=t[i])},set:function(t,e){"string"==typeof t?this[t]=e:this.extendFrom(t,!0)},clone:function(){var t=new this.constructor;return t.extendFrom(this,!0),t},getGradient:function(t,e,i){for(var n=("radial"===e.type?Se:be)(t,e,i),o=e.colorStops,a=0;a<o.length;a++)n.addColorStop(o[a].offset,o[a].color);return n}};for(var hb=ub.prototype,cb=0;cb<lb.length;cb++){var db=lb[cb];db[0]in hb||(hb[db[0]]=db[1])}ub.getGradient=hb.getGradient;var fb=function(t,e){this.image=t,this.repeat=e,this.type="pattern"};fb.prototype.getCanvasPattern=function(t){return t.createPattern(this.image,this.repeat||"repeat")};var pb=function(t,e,i){var n;i=i||Xw,"string"==typeof t?n=Ie(t,e,i):w(t)&&(t=(n=t).id),this.id=t,this.dom=n;var o=n.style;o&&(n.onselectstart=Me,o["-webkit-user-select"]="none",o["user-select"]="none",o["-webkit-touch-callout"]="none",o["-webkit-tap-highlight-color"]="rgba(0,0,0,0)",o.padding=0,o.margin=0,o["border-width"]=0),this.domBack=null,this.ctxBack=null,this.painter=e,this.config=null,this.clearColor=0,this.motionBlur=!1,this.lastFrameAlpha=.7,this.dpr=i};pb.prototype={constructor:pb,__dirty:!0,__used:!1,__drawIndex:0,__startIndex:0,__endIndex:0,incremental:!1,getElementCount:function(){return this.__endIndex-this.__startIndex},initContext:function(){this.ctx=this.dom.getContext("2d"),this.ctx.dpr=this.dpr},createBackBuffer:function(){var t=this.dpr;this.domBack=Ie("back-"+this.id,this.painter,t),this.ctxBack=this.domBack.getContext("2d"),1!==t&&this.ctxBack.scale(t,t)},resize:function(t,e){var i=this.dpr,n=this.dom,o=n.style,a=this.domBack;o&&(o.width=t+"px",o.height=e+"px"),n.width=t*i,n.height=e*i,a&&(a.width=t*i,a.height=e*i,1!==i&&this.ctxBack.scale(i,i))},clear:function(t,e){var i=this.dom,n=this.ctx,o=i.width,a=i.height,e=e||this.clearColor,r=this.motionBlur&&!t,s=this.lastFrameAlpha,l=this.dpr;if(r&&(this.domBack||this.createBackBuffer(),this.ctxBack.globalCompositeOperation="copy",this.ctxBack.drawImage(i,0,0,o/l,a/l)),n.clearRect(0,0,o,a),e&&"transparent"!==e){var u;e.colorStops?(u=e.__canvasGradient||ub.getGradient(n,e,{x:0,y:0,width:o,height:a}),e.__canvasGradient=u):e.image&&(u=fb.prototype.getCanvasPattern.call(e,n)),n.save(),n.fillStyle=u||e,n.fillRect(0,0,o,a),n.restore()}if(r){var h=this.domBack;n.save(),n.globalAlpha=s,n.drawImage(h,0,0,o,a),n.restore()}}};var gb="undefined"!=typeof window&&(window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.msRequestAnimationFrame&&window.msRequestAnimationFrame.bind(window)||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame)||function(t){setTimeout(t,16)},mb=new Ew(50),vb={},yb=0,xb=5e3,_b=/\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,wb="12px sans-serif",bb={};bb.measureText=function(t,e){var i=s();return i.font=e||wb,i.measureText(t)};var Sb={left:1,right:1,center:1},Mb={top:1,bottom:1,middle:1},Ib=[["textShadowBlur","shadowBlur",0],["textShadowOffsetX","shadowOffsetX",0],["textShadowOffsetY","shadowOffsetY",0],["textShadowColor","shadowColor","transparent"]],Tb=new de,Ab=function(){};Ab.prototype={constructor:Ab,drawRectText:function(t,e){var i=this.style;e=i.textRect||e,this.__dirty&&Ye(i);var n=i.text;if(null!=n&&(n+=""),ci(n,i)){t.save();var o=this.transform;i.transformText?this.setTransform(t):o&&(Tb.copy(e),Tb.applyTransform(o),e=Tb),Ke(this,t,n,i,e,sb),t.restore()}}},di.prototype={constructor:di,type:"displayable",__dirty:!0,invisible:!1,z:0,z2:0,zlevel:0,draggable:!1,dragging:!1,silent:!1,culling:!1,cursor:"pointer",rectHover:!1,progressive:!1,incremental:!1,globalScaleRatio:1,beforeBrush:function(t){},afterBrush:function(t){},brush:function(t,e){},getBoundingRect:function(){},contain:function(t,e){return this.rectContain(t,e)},traverse:function(t,e){t.call(e,this)},rectContain:function(t,e){var i=this.transformCoordToLocal(t,e);return this.getBoundingRect().contain(i[0],i[1])},dirty:function(){this.__dirty=this.__dirtyText=!0,this._rect=null,this.__zr&&this.__zr.refresh()},animateStyle:function(t){return this.animate("style",t)},attrKV:function(t,e){"style"!==t?Kw.prototype.attrKV.call(this,t,e):this.style.set(e)},setStyle:function(t,e){return this.style.set(t,e),this.dirty(!1),this},useStyle:function(t){return this.style=new ub(t,this),this.dirty(!1),this}},u(di,Kw),h(di,Ab),fi.prototype={constructor:fi,type:"image",brush:function(t,e){var i=this.style,n=i.image;i.bind(t,this,e);var o=this._image=Ae(n,this._image,this,this.onload);if(o&&Ce(o)){var a=i.x||0,r=i.y||0,s=i.width,l=i.height,u=o.width/o.height;if(null==s&&null!=l?s=l*u:null==l&&null!=s?l=s/u:null==s&&null==l&&(s=o.width,l=o.height),this.setTransform(t),i.sWidth&&i.sHeight){var h=i.sx||0,c=i.sy||0;t.drawImage(o,h,c,i.sWidth,i.sHeight,a,r,s,l)}else if(i.sx&&i.sy){var d=s-(h=i.sx),f=l-(c=i.sy);t.drawImage(o,h,c,d,f,a,r,s,l)}else t.drawImage(o,a,r,s,l);null!=i.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()))}},getBoundingRect:function(){var t=this.style;return this._rect||(this._rect=new de(t.x||0,t.y||0,t.width||0,t.height||0)),this._rect}},u(fi,di);var Db=new de(0,0,0,0),Cb=new de(0,0,0,0),Lb=function(t,e,i){this.type="canvas";var n=!t.nodeName||"CANVAS"===t.nodeName.toUpperCase();this._opts=i=a({},i||{}),this.dpr=i.devicePixelRatio||Xw,this._singleCanvas=n,this.root=t;var o=t.style;o&&(o["-webkit-tap-highlight-color"]="transparent",o["-webkit-user-select"]=o["user-select"]=o["-webkit-touch-callout"]="none",t.innerHTML=""),this.storage=e;var r=this._zlevelList=[],s=this._layers={};if(this._layerConfig={},this._needsManuallyCompositing=!1,n){var l=t.width,u=t.height;null!=i.width&&(l=i.width),null!=i.height&&(u=i.height),this.dpr=i.devicePixelRatio||1,t.width=l*this.dpr,t.height=u*this.dpr,this._width=l,this._height=u;var h=new pb(t,this,this.dpr);h.__builtin__=!0,h.initContext(),s[314159]=h,h.zlevel=314159,r.push(314159),this._domRoot=t}else{this._width=this._getSize(0),this._height=this._getSize(1);var c=this._domRoot=xi(this._width,this._height);t.appendChild(c)}this._hoverlayer=null,this._hoverElements=[]};Lb.prototype={constructor:Lb,getType:function(){return"canvas"},isSingleCanvas:function(){return this._singleCanvas},getViewportRoot:function(){return this._domRoot},getViewportRootOffset:function(){var t=this.getViewportRoot();if(t)return{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0}},refresh:function(t){var e=this.storage.getDisplayList(!0),i=this._zlevelList;this._redrawId=Math.random(),this._paintList(e,t,this._redrawId);for(var n=0;n<i.length;n++){var o=i[n],a=this._layers[o];if(!a.__builtin__&&a.refresh){var r=0===n?this._backgroundColor:null;a.refresh(r)}}return this.refreshHover(),this},addHover:function(t,e){if(!t.__hoverMir){var i=new t.constructor({style:t.style,shape:t.shape,z:t.z,z2:t.z2,silent:t.silent});return i.__from=t,t.__hoverMir=i,e&&i.setStyle(e),this._hoverElements.push(i),i}},removeHover:function(t){var e=t.__hoverMir,i=this._hoverElements,n=l(i,e);n>=0&&i.splice(n,1),t.__hoverMir=null},clearHover:function(t){for(var e=this._hoverElements,i=0;i<e.length;i++){var n=e[i].__from;n&&(n.__hoverMir=null)}e.length=0},refreshHover:function(){var t=this._hoverElements,e=t.length,i=this._hoverlayer;if(i&&i.clear(),e){_e(t,this.storage.displayableSortFunc),i||(i=this._hoverlayer=this.getLayer(1e5));var n={};i.ctx.save();for(var o=0;o<e;){var a=t[o],r=a.__from;r&&r.__zr?(o++,r.invisible||(a.transform=r.transform,a.invTransform=r.invTransform,a.__clipPaths=r.__clipPaths,this._doPaintEl(a,i,!0,n))):(t.splice(o,1),r.__hoverMir=null,e--)}i.ctx.restore()}},getHoverLayer:function(){return this.getLayer(1e5)},_paintList:function(t,e,i){if(this._redrawId===i){e=e||!1,this._updateLayerStatus(t);var n=this._doPaintList(t,e);if(this._needsManuallyCompositing&&this._compositeManually(),!n){var o=this;gb(function(){o._paintList(t,e,i)})}}},_compositeManually:function(){var t=this.getLayer(314159).ctx,e=this._domRoot.width,i=this._domRoot.height;t.clearRect(0,0,e,i),this.eachBuiltinLayer(function(n){n.virtual&&t.drawImage(n.dom,0,0,e,i)})},_doPaintList:function(t,e){for(var i=[],n=0;n<this._zlevelList.length;n++){var o=this._zlevelList[n];(s=this._layers[o]).__builtin__&&s!==this._hoverlayer&&(s.__dirty||e)&&i.push(s)}for(var a=!0,r=0;r<i.length;r++){var s=i[r],l=s.ctx,u={};l.save();var h=e?s.__startIndex:s.__drawIndex,c=!e&&s.incremental&&Date.now,f=c&&Date.now(),p=s.zlevel===this._zlevelList[0]?this._backgroundColor:null;if(s.__startIndex===s.__endIndex)s.clear(!1,p);else if(h===s.__startIndex){var g=t[h];g.incremental&&g.notClear&&!e||s.clear(!1,p)}-1===h&&(console.error("For some unknown reason. drawIndex is -1"),h=s.__startIndex);for(var m=h;m<s.__endIndex;m++){var v=t[m];if(this._doPaintEl(v,s,e,u),v.__dirty=v.__dirtyText=!1,c&&Date.now()-f>15)break}s.__drawIndex=m,s.__drawIndex<s.__endIndex&&(a=!1),u.prevElClipPaths&&l.restore(),l.restore()}return U_.wxa&&d(this._layers,function(t){t&&t.ctx&&t.ctx.draw&&t.ctx.draw()}),a},_doPaintEl:function(t,e,i,n){var o=e.ctx,a=t.transform;if((e.__dirty||i)&&!t.invisible&&0!==t.style.opacity&&(!a||a[0]||a[3])&&(!t.culling||!mi(t,this._width,this._height))){var r=t.__clipPaths;n.prevElClipPaths&&!vi(r,n.prevElClipPaths)||(n.prevElClipPaths&&(e.ctx.restore(),n.prevElClipPaths=null,n.prevEl=null),r&&(o.save(),yi(r,o),n.prevElClipPaths=r)),t.beforeBrush&&t.beforeBrush(o),t.brush(o,n.prevEl||null),n.prevEl=t,t.afterBrush&&t.afterBrush(o)}},getLayer:function(t,e){this._singleCanvas&&!this._needsManuallyCompositing&&(t=314159);var i=this._layers[t];return i||((i=new pb("zr_"+t,this,this.dpr)).zlevel=t,i.__builtin__=!0,this._layerConfig[t]&&n(i,this._layerConfig[t],!0),e&&(i.virtual=e),this.insertLayer(t,i),i.initContext()),i},insertLayer:function(t,e){var i=this._layers,n=this._zlevelList,o=n.length,a=null,r=-1,s=this._domRoot;if(i[t])Yw("ZLevel "+t+" has been used already");else if(gi(e)){if(o>0&&t>n[0]){for(r=0;r<o-1&&!(n[r]<t&&n[r+1]>t);r++);a=i[n[r]]}if(n.splice(r+1,0,t),i[t]=e,!e.virtual)if(a){var l=a.dom;l.nextSibling?s.insertBefore(e.dom,l.nextSibling):s.appendChild(e.dom)}else s.firstChild?s.insertBefore(e.dom,s.firstChild):s.appendChild(e.dom)}else Yw("Layer of zlevel "+t+" is not valid")},eachLayer:function(t,e){var i,n,o=this._zlevelList;for(n=0;n<o.length;n++)i=o[n],t.call(e,this._layers[i],i)},eachBuiltinLayer:function(t,e){var i,n,o,a=this._zlevelList;for(o=0;o<a.length;o++)n=a[o],(i=this._layers[n]).__builtin__&&t.call(e,i,n)},eachOtherLayer:function(t,e){var i,n,o,a=this._zlevelList;for(o=0;o<a.length;o++)n=a[o],(i=this._layers[n]).__builtin__||t.call(e,i,n)},getLayers:function(){return this._layers},_updateLayerStatus:function(t){function e(t){i&&(i.__endIndex!==t&&(i.__dirty=!0),i.__endIndex=t)}if(this.eachBuiltinLayer(function(t,e){t.__dirty=t.__used=!1}),this._singleCanvas)for(o=1;o<t.length;o++)if((r=t[o]).zlevel!==t[o-1].zlevel||r.incremental){this._needsManuallyCompositing=!0;break}for(var i=null,n=0,o=0;o<t.length;o++){var a,r=t[o],s=r.zlevel;r.incremental?((a=this.getLayer(s+.001,this._needsManuallyCompositing)).incremental=!0,n=1):a=this.getLayer(s+(n>0?.01:0),this._needsManuallyCompositing),a.__builtin__||Yw("ZLevel "+s+" has been used by unkown layer "+a.id),a!==i&&(a.__used=!0,a.__startIndex!==o&&(a.__dirty=!0),a.__startIndex=o,a.incremental?a.__drawIndex=-1:a.__drawIndex=o,e(o),i=a),r.__dirty&&(a.__dirty=!0,a.incremental&&a.__drawIndex<0&&(a.__drawIndex=o))}e(o),this.eachBuiltinLayer(function(t,e){!t.__used&&t.getElementCount()>0&&(t.__dirty=!0,t.__startIndex=t.__endIndex=t.__drawIndex=0),t.__dirty&&t.__drawIndex<0&&(t.__drawIndex=t.__startIndex)})},clear:function(){return this.eachBuiltinLayer(this._clearLayer),this},_clearLayer:function(t){t.clear()},setBackgroundColor:function(t){this._backgroundColor=t},configLayer:function(t,e){if(e){var i=this._layerConfig;i[t]?n(i[t],e,!0):i[t]=e;for(var o=0;o<this._zlevelList.length;o++){var a=this._zlevelList[o];a!==t&&a!==t+.01||n(this._layers[a],i[t],!0)}}},delLayer:function(t){var e=this._layers,i=this._zlevelList,n=e[t];n&&(n.dom.parentNode.removeChild(n.dom),delete e[t],i.splice(l(i,t),1))},resize:function(t,e){if(this._domRoot.style){var i=this._domRoot;i.style.display="none";var n=this._opts;if(null!=t&&(n.width=t),null!=e&&(n.height=e),t=this._getSize(0),e=this._getSize(1),i.style.display="",this._width!==t||e!==this._height){i.style.width=t+"px",i.style.height=e+"px";for(var o in this._layers)this._layers.hasOwnProperty(o)&&this._layers[o].resize(t,e);d(this._progressiveLayers,function(i){i.resize(t,e)}),this.refresh(!0)}this._width=t,this._height=e}else{if(null==t||null==e)return;this._width=t,this._height=e,this.getLayer(314159).resize(t,e)}return this},clearLayer:function(t){var e=this._layers[t];e&&e.clear()},dispose:function(){this.root.innerHTML="",this.root=this.storage=this._domRoot=this._layers=null},getRenderedCanvas:function(t){if(t=t||{},this._singleCanvas&&!this._compositeManually)return this._layers[314159].dom;var e=new pb("image",this,t.pixelRatio||this.dpr);if(e.initContext(),e.clear(!1,t.backgroundColor||this._backgroundColor),t.pixelRatio<=this.dpr){this.refresh();var i=e.dom.width,n=e.dom.height,o=e.ctx;this.eachLayer(function(t){t.__builtin__?o.drawImage(t.dom,0,0,i,n):t.renderToCanvas&&(e.ctx.save(),t.renderToCanvas(e.ctx),e.ctx.restore())})}else for(var a={},r=this.storage.getDisplayList(!0),s=0;s<r.length;s++){var l=r[s];this._doPaintEl(l,e,!0,a)}return e.dom},getWidth:function(){return this._width},getHeight:function(){return this._height},_getSize:function(t){var e=this._opts,i=["width","height"][t],n=["clientWidth","clientHeight"][t],o=["paddingLeft","paddingTop"][t],a=["paddingRight","paddingBottom"][t];if(null!=e[i]&&"auto"!==e[i])return parseFloat(e[i]);var r=this.root,s=document.defaultView.getComputedStyle(r);return(r[n]||pi(s[i])||pi(r.style[i]))-(pi(s[o])||0)-(pi(s[a])||0)|0},pathToImage:function(t,e){e=e||this.dpr;var i=document.createElement("canvas"),n=i.getContext("2d"),o=t.getBoundingRect(),a=t.style,r=a.shadowBlur*e,s=a.shadowOffsetX*e,l=a.shadowOffsetY*e,u=a.hasStroke()?a.lineWidth:0,h=Math.max(u/2,-s+r),c=Math.max(u/2,s+r),d=Math.max(u/2,-l+r),f=Math.max(u/2,l+r),p=o.width+h+c,g=o.height+d+f;i.width=p*e,i.height=g*e,n.scale(e,e),n.clearRect(0,0,p,g),n.dpr=e;var m={position:t.position,rotation:t.rotation,scale:t.scale};t.position=[h-o.x,d-o.y],t.rotation=0,t.scale=[1,1],t.updateTransform(),t&&t.brush(n);var v=new fi({style:{x:0,y:0,image:i}});return null!=m.position&&(v.position=t.position=m.position),null!=m.rotation&&(v.rotation=t.rotation=m.rotation),null!=m.scale&&(v.scale=t.scale=m.scale),v}};var kb=function(t){t=t||{},this.stage=t.stage||{},this.onframe=t.onframe||function(){},this._clips=[],this._running=!1,this._time,this._pausedTime,this._pauseStart,this._paused=!1,fw.call(this)};kb.prototype={constructor:kb,addClip:function(t){this._clips.push(t)},addAnimator:function(t){t.animation=this;for(var e=t.getClips(),i=0;i<e.length;i++)this.addClip(e[i])},removeClip:function(t){var e=l(this._clips,t);e>=0&&this._clips.splice(e,1)},removeAnimator:function(t){for(var e=t.getClips(),i=0;i<e.length;i++)this.removeClip(e[i]);t.animation=null},_update:function(){for(var t=(new Date).getTime()-this._pausedTime,e=t-this._time,i=this._clips,n=i.length,o=[],a=[],r=0;r<n;r++){var s=i[r],l=s.step(t,e);l&&(o.push(l),a.push(s))}for(r=0;r<n;)i[r]._needsRemove?(i[r]=i[n-1],i.pop(),n--):r++;n=o.length;for(r=0;r<n;r++)a[r].fire(o[r]);this._time=t,this.onframe(e),this.trigger("frame",e),this.stage.update&&this.stage.update()},_startLoop:function(){function t(){e._running&&(gb(t),!e._paused&&e._update())}var e=this;this._running=!0,gb(t)},start:function(){this._time=(new Date).getTime(),this._pausedTime=0,this._startLoop()},stop:function(){this._running=!1},pause:function(){this._paused||(this._pauseStart=(new Date).getTime(),this._paused=!0)},resume:function(){this._paused&&(this._pausedTime+=(new Date).getTime()-this._pauseStart,this._paused=!1)},clear:function(){this._clips=[]},isFinished:function(){return!this._clips.length},animate:function(t,e){var i=new Zw(t,(e=e||{}).loop,e.getter,e.setter);return this.addAnimator(i),i}},h(kb,fw);var Pb=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],Nb=["touchstart","touchend","touchmove"],Ob={pointerdown:1,pointerup:1,pointermove:1,pointerout:1},Eb=f(Pb,function(t){var e=t.replace("mouse","pointer");return Ob[e]?e:t}),Rb={mousemove:function(t){t=ut(this.dom,t),this.trigger("mousemove",t)},mouseout:function(t){var e=(t=ut(this.dom,t)).toElement||t.relatedTarget;if(e!==this.dom)for(;e&&9!==e.nodeType;){if(e===this.dom)return;e=e.parentNode}this.trigger("mouseout",t)},touchstart:function(t){(t=ut(this.dom,t)).zrByTouch=!0,this._lastTouchMoment=new Date,this.handler.processGesture(this,t,"start"),Rb.mousemove.call(this,t),Rb.mousedown.call(this,t),wi(this)},touchmove:function(t){(t=ut(this.dom,t)).zrByTouch=!0,this.handler.processGesture(this,t,"change"),Rb.mousemove.call(this,t),wi(this)},touchend:function(t){(t=ut(this.dom,t)).zrByTouch=!0,this.handler.processGesture(this,t,"end"),Rb.mouseup.call(this,t),+new Date-this._lastTouchMoment<300&&Rb.click.call(this,t),wi(this)},pointerdown:function(t){Rb.mousedown.call(this,t)},pointermove:function(t){bi(t)||Rb.mousemove.call(this,t)},pointerup:function(t){Rb.mouseup.call(this,t)},pointerout:function(t){bi(t)||Rb.mouseout.call(this,t)}};d(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){Rb[t]=function(e){e=ut(this.dom,e),this.trigger(t,e)}});var zb=Mi.prototype;zb.dispose=function(){for(var t=Pb.concat(Nb),e=0;e<t.length;e++){var i=t[e];ct(this.dom,_i(i),this._handlers[i])}},zb.setCursor=function(t){this.dom.style&&(this.dom.style.cursor=t||"default")},h(Mi,fw);var Bb=!U_.canvasSupported,Vb={canvas:Lb},Gb={},Fb=function(t,e,i){i=i||{},this.dom=e,this.id=t;var n=this,o=new nb,a=i.renderer;if(Bb){if(!Vb.vml)throw new Error("You need to require 'zrender/vml/vml' to support IE8");a="vml"}else a&&Vb[a]||(a="canvas");var r=new Vb[a](e,o,i,t);this.storage=o,this.painter=r;var s=U_.node||U_.worker?null:new Mi(r.getViewportRoot());this.handler=new ww(o,r,s,r.root),this.animation=new kb({stage:{update:m(this.flush,this)}}),this.animation.start(),this._needsRefresh;var l=o.delFromStorage,u=o.addToStorage;o.delFromStorage=function(t){l.call(o,t),t&&t.removeSelfFromZr(n)},o.addToStorage=function(t){u.call(o,t),t.addSelfToZr(n)}};Fb.prototype={constructor:Fb,getId:function(){return this.id},add:function(t){this.storage.addRoot(t),this._needsRefresh=!0},remove:function(t){this.storage.delRoot(t),this._needsRefresh=!0},configLayer:function(t,e){this.painter.configLayer&&this.painter.configLayer(t,e),this._needsRefresh=!0},setBackgroundColor:function(t){this.painter.setBackgroundColor&&this.painter.setBackgroundColor(t),this._needsRefresh=!0},refreshImmediately:function(){this._needsRefresh=!1,this.painter.refresh(),this._needsRefresh=!1},refresh:function(){this._needsRefresh=!0},flush:function(){var t;this._needsRefresh&&(t=!0,this.refreshImmediately()),this._needsRefreshHover&&(t=!0,this.refreshHoverImmediately()),t&&this.trigger("rendered")},addHover:function(t,e){if(this.painter.addHover){var i=this.painter.addHover(t,e);return this.refreshHover(),i}},removeHover:function(t){this.painter.removeHover&&(this.painter.removeHover(t),this.refreshHover())},clearHover:function(){this.painter.clearHover&&(this.painter.clearHover(),this.refreshHover())},refreshHover:function(){this._needsRefreshHover=!0},refreshHoverImmediately:function(){this._needsRefreshHover=!1,this.painter.refreshHover&&this.painter.refreshHover()},resize:function(t){t=t||{},this.painter.resize(t.width,t.height),this.handler.resize()},clearAnimation:function(){this.animation.clear()},getWidth:function(){return this.painter.getWidth()},getHeight:function(){return this.painter.getHeight()},pathToImage:function(t,e){return this.painter.pathToImage(t,e)},setCursorStyle:function(t){this.handler.setCursorStyle(t)},findHover:function(t,e){return this.handler.findHover(t,e)},on:function(t,e,i){this.handler.on(t,e,i)},off:function(t,e){this.handler.off(t,e)},trigger:function(t,e){this.handler.trigger(t,e)},clear:function(){this.storage.delRoot(),this.painter.clear()},dispose:function(){this.animation.stop(),this.clear(),this.storage.dispose(),this.painter.dispose(),this.handler.dispose(),this.animation=this.storage=this.painter=this.handler=null,Ai(this.id)}};var Wb=(Object.freeze||Object)({version:"4.0.6",init:Ii,dispose:function(t){if(t)t.dispose();else{for(var e in Gb)Gb.hasOwnProperty(e)&&Gb[e].dispose();Gb={}}return this},getInstance:function(t){return Gb[t]},registerPainter:Ti}),Hb=d,Zb=w,Ub=y,Xb="series\0",jb=["fontStyle","fontWeight","fontSize","fontFamily","rich","tag","color","textBorderColor","textBorderWidth","width","height","lineHeight","align","verticalAlign","baseline","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY","textShadowColor","textShadowBlur","textShadowOffsetX","textShadowOffsetY","backgroundColor","borderColor","borderWidth","borderRadius","padding"],Yb=0,qb=".",Kb="___EC__COMPONENT__CONTAINER___",$b=0,Jb=function(t){for(var e=0;e<t.length;e++)t[e][1]||(t[e][1]=t[e][0]);return function(e,i,n){for(var o={},a=0;a<t.length;a++){var r=t[a][1];if(!(i&&l(i,r)>=0||n&&l(n,r)<0)){var s=e.getShallow(r);null!=s&&(o[t[a][0]]=s)}}return o}},Qb=Jb([["lineWidth","width"],["stroke","color"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),tS={getLineStyle:function(t){var e=Qb(this,t),i=this.getLineDash(e.lineWidth);return i&&(e.lineDash=i),e},getLineDash:function(t){null==t&&(t=1);var e=this.get("type"),i=Math.max(t,2),n=4*t;return"solid"===e||null==e?null:"dashed"===e?[n,n]:[i,i]}},eS=Jb([["fill","color"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["opacity"],["shadowColor"]]),iS={getAreaStyle:function(t,e){return eS(this,t,e)}},nS=Math.pow,oS=Math.sqrt,aS=1e-8,rS=1e-4,sS=oS(3),lS=1/3,uS=V(),hS=V(),cS=V(),dS=Math.min,fS=Math.max,pS=Math.sin,gS=Math.cos,mS=2*Math.PI,vS=V(),yS=V(),xS=V(),_S=[],wS=[],bS={M:1,L:2,C:3,Q:4,A:5,Z:6,R:7},SS=[],MS=[],IS=[],TS=[],AS=Math.min,DS=Math.max,CS=Math.cos,LS=Math.sin,kS=Math.sqrt,PS=Math.abs,NS="undefined"!=typeof Float32Array,OS=function(t){this._saveData=!t,this._saveData&&(this.data=[]),this._ctx=null};OS.prototype={constructor:OS,_xi:0,_yi:0,_x0:0,_y0:0,_ux:0,_uy:0,_len:0,_lineDash:null,_dashOffset:0,_dashIdx:0,_dashSum:0,setScale:function(t,e){this._ux=PS(1/Xw/t)||0,this._uy=PS(1/Xw/e)||0},getContext:function(){return this._ctx},beginPath:function(t){return this._ctx=t,t&&t.beginPath(),t&&(this.dpr=t.dpr),this._saveData&&(this._len=0),this._lineDash&&(this._lineDash=null,this._dashOffset=0),this},moveTo:function(t,e){return this.addData(bS.M,t,e),this._ctx&&this._ctx.moveTo(t,e),this._x0=t,this._y0=e,this._xi=t,this._yi=e,this},lineTo:function(t,e){var i=PS(t-this._xi)>this._ux||PS(e-this._yi)>this._uy||this._len<5;return this.addData(bS.L,t,e),this._ctx&&i&&(this._needsDash()?this._dashedLineTo(t,e):this._ctx.lineTo(t,e)),i&&(this._xi=t,this._yi=e),this},bezierCurveTo:function(t,e,i,n,o,a){return this.addData(bS.C,t,e,i,n,o,a),this._ctx&&(this._needsDash()?this._dashedBezierTo(t,e,i,n,o,a):this._ctx.bezierCurveTo(t,e,i,n,o,a)),this._xi=o,this._yi=a,this},quadraticCurveTo:function(t,e,i,n){return this.addData(bS.Q,t,e,i,n),this._ctx&&(this._needsDash()?this._dashedQuadraticTo(t,e,i,n):this._ctx.quadraticCurveTo(t,e,i,n)),this._xi=i,this._yi=n,this},arc:function(t,e,i,n,o,a){return this.addData(bS.A,t,e,i,i,n,o-n,0,a?0:1),this._ctx&&this._ctx.arc(t,e,i,n,o,a),this._xi=CS(o)*i+t,this._yi=LS(o)*i+e,this},arcTo:function(t,e,i,n,o){return this._ctx&&this._ctx.arcTo(t,e,i,n,o),this},rect:function(t,e,i,n){return this._ctx&&this._ctx.rect(t,e,i,n),this.addData(bS.R,t,e,i,n),this},closePath:function(){this.addData(bS.Z);var t=this._ctx,e=this._x0,i=this._y0;return t&&(this._needsDash()&&this._dashedLineTo(e,i),t.closePath()),this._xi=e,this._yi=i,this},fill:function(t){t&&t.fill(),this.toStatic()},stroke:function(t){t&&t.stroke(),this.toStatic()},setLineDash:function(t){if(t instanceof Array){this._lineDash=t,this._dashIdx=0;for(var e=0,i=0;i<t.length;i++)e+=t[i];this._dashSum=e}return this},setLineDashOffset:function(t){return this._dashOffset=t,this},len:function(){return this._len},setData:function(t){var e=t.length;this.data&&this.data.length===e||!NS||(this.data=new Float32Array(e));for(var i=0;i<e;i++)this.data[i]=t[i];this._len=e},appendPath:function(t){t instanceof Array||(t=[t]);for(var e=t.length,i=0,n=this._len,o=0;o<e;o++)i+=t[o].len();NS&&this.data instanceof Float32Array&&(this.data=new Float32Array(n+i));for(o=0;o<e;o++)for(var a=t[o].data,r=0;r<a.length;r++)this.data[n++]=a[r];this._len=n},addData:function(t){if(this._saveData){var e=this.data;this._len+arguments.length>e.length&&(this._expandData(),e=this.data);for(var i=0;i<arguments.length;i++)e[this._len++]=arguments[i];this._prevCmd=t}},_expandData:function(){if(!(this.data instanceof Array)){for(var t=[],e=0;e<this._len;e++)t[e]=this.data[e];this.data=t}},_needsDash:function(){return this._lineDash},_dashedLineTo:function(t,e){var i,n,o=this._dashSum,a=this._dashOffset,r=this._lineDash,s=this._ctx,l=this._xi,u=this._yi,h=t-l,c=e-u,d=kS(h*h+c*c),f=l,p=u,g=r.length;for(h/=d,c/=d,a<0&&(a=o+a),f-=(a%=o)*h,p-=a*c;h>0&&f<=t||h<0&&f>=t||0===h&&(c>0&&p<=e||c<0&&p>=e);)f+=h*(i=r[n=this._dashIdx]),p+=c*i,this._dashIdx=(n+1)%g,h>0&&f<l||h<0&&f>l||c>0&&p<u||c<0&&p>u||s[n%2?"moveTo":"lineTo"](h>=0?AS(f,t):DS(f,t),c>=0?AS(p,e):DS(p,e));h=f-t,c=p-e,this._dashOffset=-kS(h*h+c*c)},_dashedBezierTo:function(t,e,i,n,o,a){var r,s,l,u,h,c=this._dashSum,d=this._dashOffset,f=this._lineDash,p=this._ctx,g=this._xi,m=this._yi,v=Qi,y=0,x=this._dashIdx,_=f.length,w=0;for(d<0&&(d=c+d),d%=c,r=0;r<1;r+=.1)s=v(g,t,i,o,r+.1)-v(g,t,i,o,r),l=v(m,e,n,a,r+.1)-v(m,e,n,a,r),y+=kS(s*s+l*l);for(;x<_&&!((w+=f[x])>d);x++);for(r=(w-d)/y;r<=1;)u=v(g,t,i,o,r),h=v(m,e,n,a,r),x%2?p.moveTo(u,h):p.lineTo(u,h),r+=f[x]/y,x=(x+1)%_;x%2!=0&&p.lineTo(o,a),s=o-u,l=a-h,this._dashOffset=-kS(s*s+l*l)},_dashedQuadraticTo:function(t,e,i,n){var o=i,a=n;i=(i+2*t)/3,n=(n+2*e)/3,t=(this._xi+2*t)/3,e=(this._yi+2*e)/3,this._dashedBezierTo(t,e,i,n,o,a)},toStatic:function(){var t=this.data;t instanceof Array&&(t.length=this._len,NS&&(this.data=new Float32Array(t)))},getBoundingRect:function(){SS[0]=SS[1]=IS[0]=IS[1]=Number.MAX_VALUE,MS[0]=MS[1]=TS[0]=TS[1]=-Number.MAX_VALUE;for(var t=this.data,e=0,i=0,n=0,o=0,a=0;a<t.length;){var r=t[a++];switch(1===a&&(n=e=t[a],o=i=t[a+1]),r){case bS.M:e=n=t[a++],i=o=t[a++],IS[0]=n,IS[1]=o,TS[0]=n,TS[1]=o;break;case bS.L:fn(e,i,t[a],t[a+1],IS,TS),e=t[a++],i=t[a++];break;case bS.C:pn(e,i,t[a++],t[a++],t[a++],t[a++],t[a],t[a+1],IS,TS),e=t[a++],i=t[a++];break;case bS.Q:gn(e,i,t[a++],t[a++],t[a],t[a+1],IS,TS),e=t[a++],i=t[a++];break;case bS.A:var s=t[a++],l=t[a++],u=t[a++],h=t[a++],c=t[a++],d=t[a++]+c;a+=1;var f=1-t[a++];1===a&&(n=CS(c)*u+s,o=LS(c)*h+l),mn(s,l,u,h,c,d,f,IS,TS),e=CS(d)*u+s,i=LS(d)*h+l;break;case bS.R:fn(n=e=t[a++],o=i=t[a++],n+t[a++],o+t[a++],IS,TS);break;case bS.Z:e=n,i=o}tt(SS,SS,IS),et(MS,MS,TS)}return 0===a&&(SS[0]=SS[1]=MS[0]=MS[1]=0),new de(SS[0],SS[1],MS[0]-SS[0],MS[1]-SS[1])},rebuildPath:function(t){for(var e,i,n,o,a,r,s=this.data,l=this._ux,u=this._uy,h=this._len,c=0;c<h;){var d=s[c++];switch(1===c&&(e=n=s[c],i=o=s[c+1]),d){case bS.M:e=n=s[c++],i=o=s[c++],t.moveTo(n,o);break;case bS.L:a=s[c++],r=s[c++],(PS(a-n)>l||PS(r-o)>u||c===h-1)&&(t.lineTo(a,r),n=a,o=r);break;case bS.C:t.bezierCurveTo(s[c++],s[c++],s[c++],s[c++],s[c++],s[c++]),n=s[c-2],o=s[c-1];break;case bS.Q:t.quadraticCurveTo(s[c++],s[c++],s[c++],s[c++]),n=s[c-2],o=s[c-1];break;case bS.A:var f=s[c++],p=s[c++],g=s[c++],m=s[c++],v=s[c++],y=s[c++],x=s[c++],_=s[c++],w=g>m?g:m,b=g>m?1:g/m,S=g>m?m/g:1,M=v+y;Math.abs(g-m)>.001?(t.translate(f,p),t.rotate(x),t.scale(b,S),t.arc(0,0,w,v,M,1-_),t.scale(1/b,1/S),t.rotate(-x),t.translate(-f,-p)):t.arc(f,p,w,v,M,1-_),1===c&&(e=CS(v)*g+f,i=LS(v)*m+p),n=CS(M)*g+f,o=LS(M)*m+p;break;case bS.R:e=n=s[c],i=o=s[c+1],t.rect(s[c++],s[c++],s[c++],s[c++]);break;case bS.Z:t.closePath(),n=e,o=i}}}},OS.CMD=bS;var ES=2*Math.PI,RS=2*Math.PI,zS=OS.CMD,BS=2*Math.PI,VS=1e-4,GS=[-1,-1,-1],FS=[-1,-1],WS=fb.prototype.getCanvasPattern,HS=Math.abs,ZS=new OS(!0);kn.prototype={constructor:kn,type:"path",__dirtyPath:!0,strokeContainThreshold:5,subPixelOptimize:!1,brush:function(t,e){var i=this.style,n=this.path||ZS,o=i.hasStroke(),a=i.hasFill(),r=i.fill,s=i.stroke,l=a&&!!r.colorStops,u=o&&!!s.colorStops,h=a&&!!r.image,c=o&&!!s.image;if(i.bind(t,this,e),this.setTransform(t),this.__dirty){var d;l&&(d=d||this.getBoundingRect(),this._fillGradient=i.getGradient(t,r,d)),u&&(d=d||this.getBoundingRect(),this._strokeGradient=i.getGradient(t,s,d))}l?t.fillStyle=this._fillGradient:h&&(t.fillStyle=WS.call(r,t)),u?t.strokeStyle=this._strokeGradient:c&&(t.strokeStyle=WS.call(s,t));var f=i.lineDash,p=i.lineDashOffset,g=!!t.setLineDash,m=this.getGlobalScale();if(n.setScale(m[0],m[1]),this.__dirtyPath||f&&!g&&o?(n.beginPath(t),f&&!g&&(n.setLineDash(f),n.setLineDashOffset(p)),this.buildPath(n,this.shape,!1),this.path&&(this.__dirtyPath=!1)):(t.beginPath(),this.path.rebuildPath(t)),a)if(null!=i.fillOpacity){v=t.globalAlpha;t.globalAlpha=i.fillOpacity*i.opacity,n.fill(t),t.globalAlpha=v}else n.fill(t);if(f&&g&&(t.setLineDash(f),t.lineDashOffset=p),o)if(null!=i.strokeOpacity){var v=t.globalAlpha;t.globalAlpha=i.strokeOpacity*i.opacity,n.stroke(t),t.globalAlpha=v}else n.stroke(t);f&&g&&t.setLineDash([]),null!=i.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()))},buildPath:function(t,e,i){},createPathProxy:function(){this.path=new OS},getBoundingRect:function(){var t=this._rect,e=this.style,i=!t;if(i){var n=this.path;n||(n=this.path=new OS),this.__dirtyPath&&(n.beginPath(),this.buildPath(n,this.shape,!1)),t=n.getBoundingRect()}if(this._rect=t,e.hasStroke()){var o=this._rectWithStroke||(this._rectWithStroke=t.clone());if(this.__dirty||i){o.copy(t);var a=e.lineWidth,r=e.strokeNoScale?this.getLineScale():1;e.hasFill()||(a=Math.max(a,this.strokeContainThreshold||4)),r>1e-10&&(o.width+=a/r,o.height+=a/r,o.x-=a/r/2,o.y-=a/r/2)}return o}return t},contain:function(t,e){var i=this.transformCoordToLocal(t,e),n=this.getBoundingRect(),o=this.style;if(t=i[0],e=i[1],n.contain(t,e)){var a=this.path.data;if(o.hasStroke()){var r=o.lineWidth,s=o.strokeNoScale?this.getLineScale():1;if(s>1e-10&&(o.hasFill()||(r=Math.max(r,this.strokeContainThreshold)),Ln(a,r/s,t,e)))return!0}if(o.hasFill())return Cn(a,t,e)}return!1},dirty:function(t){null==t&&(t=!0),t&&(this.__dirtyPath=t,this._rect=null),this.__dirty=this.__dirtyText=!0,this.__zr&&this.__zr.refresh(),this.__clipTarget&&this.__clipTarget.dirty()},animateShape:function(t){return this.animate("shape",t)},attrKV:function(t,e){"shape"===t?(this.setShape(e),this.__dirtyPath=!0,this._rect=null):di.prototype.attrKV.call(this,t,e)},setShape:function(t,e){var i=this.shape;if(i){if(w(t))for(var n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);else i[t]=e;this.dirty(!0)}return this},getLineScale:function(){var t=this.transform;return t&&HS(t[0]-1)>1e-10&&HS(t[3]-1)>1e-10?Math.sqrt(HS(t[0]*t[3]-t[2]*t[1])):1}},kn.extend=function(t){var e=function(e){kn.call(this,e),t.style&&this.style.extendFrom(t.style,!1);var i=t.shape;if(i){this.shape=this.shape||{};var n=this.shape;for(var o in i)!n.hasOwnProperty(o)&&i.hasOwnProperty(o)&&(n[o]=i[o])}t.init&&t.init.call(this,e)};u(e,kn);for(var i in t)"style"!==i&&"shape"!==i&&(e.prototype[i]=t[i]);return e},u(kn,di);var US=OS.CMD,XS=[[],[],[]],jS=Math.sqrt,YS=Math.atan2,qS=function(t,e){var i,n,o,a,r,s,l=t.data,u=US.M,h=US.C,c=US.L,d=US.R,f=US.A,p=US.Q;for(o=0,a=0;o<l.length;){switch(i=l[o++],a=o,n=0,i){case u:case c:n=1;break;case h:n=3;break;case p:n=2;break;case f:var g=e[4],m=e[5],v=jS(e[0]*e[0]+e[1]*e[1]),y=jS(e[2]*e[2]+e[3]*e[3]),x=YS(-e[1]/y,e[0]/v);l[o]*=v,l[o++]+=g,l[o]*=y,l[o++]+=m,l[o++]*=v,l[o++]*=y,l[o++]+=x,l[o++]+=x,a=o+=2;break;case d:s[0]=l[o++],s[1]=l[o++],Q(s,s,e),l[a++]=s[0],l[a++]=s[1],s[0]+=l[o++],s[1]+=l[o++],Q(s,s,e),l[a++]=s[0],l[a++]=s[1]}for(r=0;r<n;r++)(s=XS[r])[0]=l[o++],s[1]=l[o++],Q(s,s,e),l[a++]=s[0],l[a++]=s[1]}},KS=Math.sqrt,$S=Math.sin,JS=Math.cos,QS=Math.PI,tM=function(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])},eM=function(t,e){return(t[0]*e[0]+t[1]*e[1])/(tM(t)*tM(e))},iM=function(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(eM(t,e))},nM=/([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,oM=/-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g,aM=function(t){di.call(this,t)};aM.prototype={constructor:aM,type:"text",brush:function(t,e){var i=this.style;this.__dirty&&Ye(i),i.fill=i.stroke=i.shadowBlur=i.shadowColor=i.shadowOffsetX=i.shadowOffsetY=null;var n=i.text;null!=n&&(n+=""),ci(n,i)?(this.setTransform(t),Ke(this,t,n,i,null,e),this.restoreTransform(t)):t.__attrCachedBy=rb.NONE},getBoundingRect:function(){var t=this.style;if(this.__dirty&&Ye(t),!this._rect){var e=t.text;null!=e?e+="":e="";var i=ke(t.text+"",t.font,t.textAlign,t.textVerticalAlign,t.textPadding,t.rich);if(i.x+=t.x||0,i.y+=t.y||0,si(t.textStroke,t.textStrokeWidth)){var n=t.textStrokeWidth;i.x-=n/2,i.y-=n/2,i.width+=n,i.height+=n}this._rect=i}return this._rect}},u(aM,di);var rM=kn.extend({type:"circle",shape:{cx:0,cy:0,r:0},buildPath:function(t,e,i){i&&t.moveTo(e.cx+e.r,e.cy),t.arc(e.cx,e.cy,e.r,0,2*Math.PI,!0)}}),sM=[["shadowBlur",0],["shadowColor","#000"],["shadowOffsetX",0],["shadowOffsetY",0]],lM=function(t){return U_.browser.ie&&U_.browser.version>=11?function(){var e,i=this.__clipPaths,n=this.style;if(i)for(var o=0;o<i.length;o++){var a=i[o],r=a&&a.shape,s=a&&a.type;if(r&&("sector"===s&&r.startAngle===r.endAngle||"rect"===s&&(!r.width||!r.height))){for(l=0;l<sM.length;l++)sM[l][2]=n[sM[l][0]],n[sM[l][0]]=sM[l][1];e=!0;break}}if(t.apply(this,arguments),e)for(var l=0;l<sM.length;l++)n[sM[l][0]]=sM[l][2]}:t},uM=kn.extend({type:"sector",shape:{cx:0,cy:0,r0:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},brush:lM(kn.prototype.brush),buildPath:function(t,e){var i=e.cx,n=e.cy,o=Math.max(e.r0||0,0),a=Math.max(e.r,0),r=e.startAngle,s=e.endAngle,l=e.clockwise,u=Math.cos(r),h=Math.sin(r);t.moveTo(u*o+i,h*o+n),t.lineTo(u*a+i,h*a+n),t.arc(i,n,a,r,s,!l),t.lineTo(Math.cos(s)*o+i,Math.sin(s)*o+n),0!==o&&t.arc(i,n,o,s,r,l),t.closePath()}}),hM=kn.extend({type:"ring",shape:{cx:0,cy:0,r:0,r0:0},buildPath:function(t,e){var i=e.cx,n=e.cy,o=2*Math.PI;t.moveTo(i+e.r,n),t.arc(i,n,e.r,0,o,!1),t.moveTo(i+e.r0,n),t.arc(i,n,e.r0,0,o,!0)}}),cM=function(t,e){for(var i=t.length,n=[],o=0,a=1;a<i;a++)o+=K(t[a-1],t[a]);var r=o/2;r=r<i?i:r;for(a=0;a<r;a++){var s,l,u,h=a/(r-1)*(e?i:i-1),c=Math.floor(h),d=h-c,f=t[c%i];e?(s=t[(c-1+i)%i],l=t[(c+1)%i],u=t[(c+2)%i]):(s=t[0===c?c:c-1],l=t[c>i-2?i-1:c+1],u=t[c>i-3?i-1:c+2]);var p=d*d,g=d*p;n.push([zn(s[0],f[0],l[0],u[0],d,p,g),zn(s[1],f[1],l[1],u[1],d,p,g)])}return n},dM=function(t,e,i,n){var o,a,r,s,l=[],u=[],h=[],c=[];if(n){r=[1/0,1/0],s=[-1/0,-1/0];for(var d=0,f=t.length;d<f;d++)tt(r,r,t[d]),et(s,s,t[d]);tt(r,r,n[0]),et(s,s,n[1])}for(var d=0,f=t.length;d<f;d++){var p=t[d];if(i)o=t[d?d-1:f-1],a=t[(d+1)%f];else{if(0===d||d===f-1){l.push(F(t[d]));continue}o=t[d-1],a=t[d+1]}U(u,a,o),Y(u,u,e);var g=K(p,o),m=K(p,a),v=g+m;0!==v&&(g/=v,m/=v),Y(h,u,-g),Y(c,u,m);var y=H([],p,h),x=H([],p,c);n&&(et(y,y,r),tt(y,y,s),et(x,x,r),tt(x,x,s)),l.push(y),l.push(x)}return i&&l.push(l.shift()),l},fM=kn.extend({type:"polygon",shape:{points:null,smooth:!1,smoothConstraint:null},buildPath:function(t,e){Bn(t,e,!0)}}),pM=kn.extend({type:"polyline",shape:{points:null,smooth:!1,smoothConstraint:null},style:{stroke:"#000",fill:null},buildPath:function(t,e){Bn(t,e,!1)}}),gM=Math.round,mM={},vM=kn.extend({type:"rect",shape:{r:0,x:0,y:0,width:0,height:0},buildPath:function(t,e){var i,n,o,a;this.subPixelOptimize?(Gn(mM,e,this.style),i=mM.x,n=mM.y,o=mM.width,a=mM.height,mM.r=e.r,e=mM):(i=e.x,n=e.y,o=e.width,a=e.height),e.r?je(t,e):t.rect(i,n,o,a),t.closePath()}}),yM={},xM=kn.extend({type:"line",shape:{x1:0,y1:0,x2:0,y2:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var i,n,o,a;this.subPixelOptimize?(Vn(yM,e,this.style),i=yM.x1,n=yM.y1,o=yM.x2,a=yM.y2):(i=e.x1,n=e.y1,o=e.x2,a=e.y2);var r=e.percent;0!==r&&(t.moveTo(i,n),r<1&&(o=i*(1-r)+o*r,a=n*(1-r)+a*r),t.lineTo(o,a))},pointAt:function(t){var e=this.shape;return[e.x1*(1-t)+e.x2*t,e.y1*(1-t)+e.y2*t]}}),_M=[],wM=kn.extend({type:"bezier-curve",shape:{x1:0,y1:0,x2:0,y2:0,cpx1:0,cpy1:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var i=e.x1,n=e.y1,o=e.x2,a=e.y2,r=e.cpx1,s=e.cpy1,l=e.cpx2,u=e.cpy2,h=e.percent;0!==h&&(t.moveTo(i,n),null==l||null==u?(h<1&&(hn(i,r,o,h,_M),r=_M[1],o=_M[2],hn(n,s,a,h,_M),s=_M[1],a=_M[2]),t.quadraticCurveTo(r,s,o,a)):(h<1&&(on(i,r,l,o,h,_M),r=_M[1],l=_M[2],o=_M[3],on(n,s,u,a,h,_M),s=_M[1],u=_M[2],a=_M[3]),t.bezierCurveTo(r,s,l,u,o,a)))},pointAt:function(t){return Wn(this.shape,t,!1)},tangentAt:function(t){var e=Wn(this.shape,t,!0);return q(e,e)}}),bM=kn.extend({type:"arc",shape:{cx:0,cy:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},style:{stroke:"#000",fill:null},buildPath:function(t,e){var i=e.cx,n=e.cy,o=Math.max(e.r,0),a=e.startAngle,r=e.endAngle,s=e.clockwise,l=Math.cos(a),u=Math.sin(a);t.moveTo(l*o+i,u*o+n),t.arc(i,n,o,a,r,!s)}}),SM=kn.extend({type:"compound",shape:{paths:null},_updatePathDirty:function(){for(var t=this.__dirtyPath,e=this.shape.paths,i=0;i<e.length;i++)t=t||e[i].__dirtyPath;this.__dirtyPath=t,this.__dirty=this.__dirty||t},beforeBrush:function(){this._updatePathDirty();for(var t=this.shape.paths||[],e=this.getGlobalScale(),i=0;i<t.length;i++)t[i].path||t[i].createPathProxy(),t[i].path.setScale(e[0],e[1])},buildPath:function(t,e){for(var i=e.paths||[],n=0;n<i.length;n++)i[n].buildPath(t,i[n].shape,!0)},afterBrush:function(){for(var t=this.shape.paths||[],e=0;e<t.length;e++)t[e].__dirtyPath=!1},getBoundingRect:function(){return this._updatePathDirty(),kn.prototype.getBoundingRect.call(this)}}),MM=function(t){this.colorStops=t||[]};MM.prototype={constructor:MM,addColorStop:function(t,e){this.colorStops.push({offset:t,color:e})}};var IM=function(t,e,i,n,o,a){this.x=null==t?0:t,this.y=null==e?0:e,this.x2=null==i?1:i,this.y2=null==n?0:n,this.type="linear",this.global=a||!1,MM.call(this,o)};IM.prototype={constructor:IM},u(IM,MM);var TM=function(t,e,i,n,o){this.x=null==t?.5:t,this.y=null==e?.5:e,this.r=null==i?.5:i,this.type="radial",this.global=o||!1,MM.call(this,n)};TM.prototype={constructor:TM},u(TM,MM),Hn.prototype.incremental=!0,Hn.prototype.clearDisplaybles=function(){this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.dirty(),this.notClear=!1},Hn.prototype.addDisplayable=function(t,e){e?this._temporaryDisplayables.push(t):this._displayables.push(t),this.dirty()},Hn.prototype.addDisplayables=function(t,e){e=e||!1;for(var i=0;i<t.length;i++)this.addDisplayable(t[i],e)},Hn.prototype.eachPendingDisplayable=function(t){for(e=this._cursor;e<this._displayables.length;e++)t&&t(this._displayables[e]);for(var e=0;e<this._temporaryDisplayables.length;e++)t&&t(this._temporaryDisplayables[e])},Hn.prototype.update=function(){this.updateTransform();for(t=this._cursor;t<this._displayables.length;t++)(e=this._displayables[t]).parent=this,e.update(),e.parent=null;for(var t=0;t<this._temporaryDisplayables.length;t++){var e=this._temporaryDisplayables[t];e.parent=this,e.update(),e.parent=null}},Hn.prototype.brush=function(t,e){for(i=this._cursor;i<this._displayables.length;i++)(n=this._displayables[i]).beforeBrush&&n.beforeBrush(t),n.brush(t,i===this._cursor?null:this._displayables[i-1]),n.afterBrush&&n.afterBrush(t);this._cursor=i;for(var i=0;i<this._temporaryDisplayables.length;i++){var n=this._temporaryDisplayables[i];n.beforeBrush&&n.beforeBrush(t),n.brush(t,0===i?null:this._temporaryDisplayables[i-1]),n.afterBrush&&n.afterBrush(t)}this._temporaryDisplayables=[],this.notClear=!0};var AM=[];Hn.prototype.getBoundingRect=function(){if(!this._rect){for(var t=new de(1/0,1/0,-1/0,-1/0),e=0;e<this._displayables.length;e++){var i=this._displayables[e],n=i.getBoundingRect().clone();i.needLocalTransform()&&n.applyTransform(i.getLocalTransform(AM)),t.union(n)}this._rect=t}return this._rect},Hn.prototype.contain=function(t,e){var i=this.transformCoordToLocal(t,e);if(this.getBoundingRect().contain(i[0],i[1]))for(var n=0;n<this._displayables.length;n++)if(this._displayables[n].contain(t,e))return!0;return!1},u(Hn,di);var DM=Math.round,CM=Math.max,LM=Math.min,kM={},PM=1,NM=function(t,e){for(var i=[],n=t.length,o=0;o<n;o++){var a=t[o];a.path||a.createPathProxy(),a.__dirtyPath&&a.buildPath(a.path,a.shape,!0),i.push(a.path)}var r=new kn(e);return r.createPathProxy(),r.buildPath=function(t){t.appendPath(i);var e=t.getContext();e&&t.rebuildPath(e)},r},OM=R(),EM=0,RM=(Object.freeze||Object)({Z2_EMPHASIS_LIFT:PM,extendShape:Zn,extendPath:function(t,e){return Rn(t,e)},makePath:Un,makeImage:Xn,mergePath:NM,resizePath:Yn,subPixelOptimizeLine:qn,subPixelOptimizeRect:Kn,subPixelOptimize:$n,setElementHoverStyle:ao,isInEmphasis:ro,setHoverStyle:co,setAsHoverStyleTrigger:fo,setLabelStyle:po,setTextStyle:go,setText:function(t,e,i){var n,o={isRectText:!0};!1===i?n=!0:o.autoColor=i,mo(t,e,o,n)},getFont:bo,updateProps:Mo,initProps:Io,getTransform:To,applyTransform:Ao,transformDirection:Do,groupTransition:Co,clipPointsByRect:Lo,clipRectByRect:function(t,e){var i=CM(t.x,e.x),n=LM(t.x+t.width,e.x+e.width),o=CM(t.y,e.y),a=LM(t.y+t.height,e.y+e.height);if(n>=i&&a>=o)return{x:i,y:o,width:n-i,height:a-o}},createIcon:ko,Group:tb,Image:fi,Text:aM,Circle:rM,Sector:uM,Ring:hM,Polygon:fM,Polyline:pM,Rect:vM,Line:xM,BezierCurve:wM,Arc:bM,IncrementalDisplayable:Hn,CompoundPath:SM,LinearGradient:IM,RadialGradient:TM,BoundingRect:de}),zM=["textStyle","color"],BM={getTextColor:function(t){var e=this.ecModel;return this.getShallow("color")||(!t&&e?e.get(zM):null)},getFont:function(){return bo({fontStyle:this.getShallow("fontStyle"),fontWeight:this.getShallow("fontWeight"),fontSize:this.getShallow("fontSize"),fontFamily:this.getShallow("fontFamily")},this.ecModel)},getTextRect:function(t){return ke(t,this.getFont(),this.getShallow("align"),this.getShallow("verticalAlign")||this.getShallow("baseline"),this.getShallow("padding"),this.getShallow("rich"),this.getShallow("truncateText"))}},VM=Jb([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"],["textPosition"],["textAlign"]]),GM={getItemStyle:function(t,e){var i=VM(this,t,e),n=this.getBorderLineDash();return n&&(i.lineDash=n),i},getBorderLineDash:function(){var t=this.get("borderType");return"solid"===t||null==t?null:"dashed"===t?[5,5]:[1,1]}},FM=h,WM=Bi();Po.prototype={constructor:Po,init:null,mergeOption:function(t){n(this.option,t,!0)},get:function(t,e){return null==t?this.option:No(this.option,this.parsePath(t),!e&&Oo(this,t))},getShallow:function(t,e){var i=this.option,n=null==i?i:i[t],o=!e&&Oo(this,t);return null==n&&o&&(n=o.getShallow(t)),n},getModel:function(t,e){var i,n=null==t?this.option:No(this.option,t=this.parsePath(t));return e=e||(i=Oo(this,t))&&i.getModel(t),new Po(n,e,this.ecModel)},isEmpty:function(){return null==this.option},restoreData:function(){},clone:function(){return new(0,this.constructor)(i(this.option))},setReadOnly:function(t){},parsePath:function(t){return"string"==typeof t&&(t=t.split(".")),t},customizeGetParent:function(t){WM(this).getParent=t},isAnimationEnabled:function(){if(!U_.node){if(null!=this.option.animation)return!!this.option.animation;if(this.parentModel)return this.parentModel.isAnimationEnabled()}}},Xi(Po),ji(Po),FM(Po,tS),FM(Po,iS),FM(Po,BM),FM(Po,GM);var HM=0,ZM=1e-4,UM=9007199254740991,XM=/^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,jM=(Object.freeze||Object)({linearMap:zo,parsePercent:Bo,round:Vo,asc:Go,getPrecision:Fo,getPrecisionSafe:Wo,getPixelPrecision:Ho,getPercentWithPrecision:Zo,MAX_SAFE_INTEGER:UM,remRadian:Uo,isRadianAroundZero:Xo,parseDate:jo,quantity:Yo,nice:Ko,quantile:function(t,e){var i=(t.length-1)*e+1,n=Math.floor(i),o=+t[n-1],a=i-n;return a?o+a*(t[n]-o):o},reformIntervals:$o,isNumeric:Jo}),YM=L,qM=/([&<>"'])/g,KM={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},$M=["a","b","c","d","e","f","g"],JM=function(t,e){return"{"+t+(null==e?"":e)+"}"},QM=ze,tI=ke,eI=(Object.freeze||Object)({addCommas:Qo,toCamelCase:ta,normalizeCssArray:YM,encodeHTML:ea,formatTpl:ia,formatTplSimple:na,getTooltipMarker:oa,formatTime:ra,capitalFirst:sa,truncateText:QM,getTextRect:tI}),iI=d,nI=["left","right","top","bottom","width","height"],oI=[["width","left","right"],["height","top","bottom"]],aI=la,rI=(v(la,"vertical"),v(la,"horizontal"),Bi()),sI=Po.extend({type:"component",id:"",name:"",mainType:"",subType:"",componentIndex:0,defaultOption:null,ecModel:null,dependentModels:[],uid:null,layoutMode:null,$constructor:function(t,e,i,n){Po.call(this,t,e,i,n),this.uid=Eo("ec_cpt_model")},init:function(t,e,i,n){this.mergeDefaultAndTheme(t,i)},mergeDefaultAndTheme:function(t,e){var i=this.layoutMode,o=i?pa(t):{};n(t,e.getTheme().get(this.mainType)),n(t,this.getDefaultOption()),i&&fa(t,o,i)},mergeOption:function(t,e){n(this.option,t,!0);var i=this.layoutMode;i&&fa(this.option,t,i)},optionUpdated:function(t,e){},getDefaultOption:function(){var t=rI(this);if(!t.defaultOption){for(var e=[],i=this.constructor;i;){var o=i.prototype.defaultOption;o&&e.push(o),i=i.superClass}for(var a={},r=e.length-1;r>=0;r--)a=n(a,e[r],!0);t.defaultOption=a}return t.defaultOption},getReferringComponents:function(t){return this.ecModel.queryComponents({mainType:t,index:this.get(t+"Index",!0),id:this.get(t+"Id",!0)})}});Ki(sI,{registerWhenExtend:!0}),function(t){var e={};t.registerSubTypeDefaulter=function(t,i){t=Zi(t),e[t.main]=i},t.determineSubType=function(i,n){var o=n.type;if(!o){var a=Zi(i).main;t.hasSubTypes(i)&&e[a]&&(o=e[a](n))}return o}}(sI),function(t,e){function i(t){var i={},a=[];return d(t,function(r){var s=n(i,r),u=o(s.originalDeps=e(r),t);s.entryCount=u.length,0===s.entryCount&&a.push(r),d(u,function(t){l(s.predecessor,t)<0&&s.predecessor.push(t);var e=n(i,t);l(e.successor,t)<0&&e.successor.push(r)})}),{graph:i,noEntryList:a}}function n(t,e){return t[e]||(t[e]={predecessor:[],successor:[]}),t[e]}function o(t,e){var i=[];return d(t,function(t){l(e,t)>=0&&i.push(t)}),i}t.topologicalTravel=function(t,e,n,o){function a(t){s[t].entryCount--,0===s[t].entryCount&&l.push(t)}if(t.length){var r=i(e),s=r.graph,l=r.noEntryList,u={};for(d(t,function(t){u[t]=!0});l.length;){var h=l.pop(),c=s[h],f=!!u[h];f&&(n.call(o,h,c.originalDeps.slice()),delete u[h]),d(c.successor,f?function(t){u[t]=!0,a(t)}:a)}d(u,function(){throw new Error("Circle dependency may exists")})}}}(sI,function(t){var e=[];return d(sI.getClassesByMainType(t),function(t){e=e.concat(t.prototype.dependencies||[])}),e=f(e,function(t){return Zi(t).main}),"dataset"!==t&&l(e,"dataset")<=0&&e.unshift("dataset"),e}),h(sI,{getBoxLayoutParams:function(){return{left:this.get("left"),top:this.get("top"),right:this.get("right"),bottom:this.get("bottom"),width:this.get("width"),height:this.get("height")}}});var lI="";"undefined"!=typeof navigator&&(lI=navigator.platform||"");var uI={color:["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"],gradientColor:["#f6efa6","#d88273","#bf444c"],textStyle:{fontFamily:lI.match(/^Win/)?"Microsoft YaHei":"sans-serif",fontSize:12,fontStyle:"normal",fontWeight:"normal"},blendMode:null,animation:"auto",animationDuration:1e3,animationDurationUpdate:300,animationEasing:"exponentialOut",animationEasingUpdate:"cubicOut",animationThreshold:2e3,progressiveThreshold:3e3,progressive:400,hoverLayerThreshold:3e3,useUTC:!1},hI=Bi(),cI={clearColorPalette:function(){hI(this).colorIdx=0,hI(this).colorNameMap={}},getColorFromPalette:function(t,e,i){var n=hI(e=e||this),o=n.colorIdx||0,a=n.colorNameMap=n.colorNameMap||{};if(a.hasOwnProperty(t))return a[t];var r=Di(this.get("color",!0)),s=this.get("colorLayer",!0),l=null!=i&&s?ma(s,i):r;if((l=l||r)&&l.length){var u=l[o];return t&&(a[t]=u),n.colorIdx=(o+1)%l.length,u}}},dI={cartesian2d:function(t,e,i,n){var o=t.getReferringComponents("xAxis")[0],a=t.getReferringComponents("yAxis")[0];e.coordSysDims=["x","y"],i.set("x",o),i.set("y",a),ya(o)&&(n.set("x",o),e.firstCategoryDimIndex=0),ya(a)&&(n.set("y",a),e.firstCategoryDimIndex=1)},singleAxis:function(t,e,i,n){var o=t.getReferringComponents("singleAxis")[0];e.coordSysDims=["single"],i.set("single",o),ya(o)&&(n.set("single",o),e.firstCategoryDimIndex=0)},polar:function(t,e,i,n){var o=t.getReferringComponents("polar")[0],a=o.findAxisModel("radiusAxis"),r=o.findAxisModel("angleAxis");e.coordSysDims=["radius","angle"],i.set("radius",a),i.set("angle",r),ya(a)&&(n.set("radius",a),e.firstCategoryDimIndex=0),ya(r)&&(n.set("angle",r),e.firstCategoryDimIndex=1)},geo:function(t,e,i,n){e.coordSysDims=["lng","lat"]},parallel:function(t,e,i,n){var o=t.ecModel,a=o.getComponent("parallel",t.get("parallelIndex")),r=e.coordSysDims=a.dimensions.slice();d(a.parallelAxisIndex,function(t,a){var s=o.getComponent("parallelAxis",t),l=r[a];i.set(l,s),ya(s)&&null==e.firstCategoryDimIndex&&(n.set(l,s),e.firstCategoryDimIndex=a)})}},fI="original",pI="arrayRows",gI="objectRows",mI="keyedColumns",vI="unknown",yI="typedArray",xI="column",_I="row";xa.seriesDataToSource=function(t){return new xa({data:t,sourceFormat:S(t)?yI:fI,fromDataset:!1})},ji(xa);var wI=Bi(),bI="\0_ec_inner",SI=Po.extend({init:function(t,e,i,n){i=i||{},this.option=null,this._theme=new Po(i),this._optionManager=n},setOption:function(t,e){k(!(bI in t),"please use chart.getOption()"),this._optionManager.setOption(t,e),this.resetOption(null)},resetOption:function(t){var e=!1,i=this._optionManager;if(!t||"recreate"===t){var n=i.mountOption("recreate"===t);this.option&&"recreate"!==t?(this.restoreData(),this.mergeOption(n)):Oa.call(this,n),e=!0}if("timeline"!==t&&"media"!==t||this.restoreData(),!t||"recreate"===t||"timeline"===t){var o=i.getTimelineOption(this);o&&(this.mergeOption(o),e=!0)}if(!t||"recreate"===t||"media"===t){var a=i.getMediaOption(this,this._api);a.length&&d(a,function(t){this.mergeOption(t,e=!0)},this)}return e},mergeOption:function(t){var e=this.option,o=this._componentsMap,r=[];ba(this),d(t,function(t,o){null!=t&&(sI.hasClass(o)?o&&r.push(o):e[o]=null==e[o]?i(t):n(e[o],t,!0))}),sI.topologicalTravel(r,sI.getAllClassMainTypes(),function(i,n){var r=Di(t[i]),s=Pi(o.get(i),r);Ni(s),d(s,function(t,e){var n=t.option;w(n)&&(t.keyInfo.mainType=i,t.keyInfo.subType=Ra(i,n,t.exist))});var l=Ea(o,n);e[i]=[],o.set(i,[]),d(s,function(t,n){var r=t.exist,s=t.option;if(k(w(s)||r,"Empty component definition"),s){var u=sI.getClass(i,t.keyInfo.subType,!0);if(r&&r instanceof u)r.name=t.keyInfo.name,r.mergeOption(s,this),r.optionUpdated(s,!1);else{var h=a({dependentModels:l,componentIndex:n},t.keyInfo);a(r=new u(s,this,this,h),h),r.init(s,this,this,h),r.optionUpdated(null,!0)}}else r.mergeOption({},this),r.optionUpdated({},!1);o.get(i)[n]=r,e[i][n]=r.option},this),"series"===i&&za(this,o.get("series"))},this),this._seriesIndicesMap=R(this._seriesIndices=this._seriesIndices||[])},getOption:function(){var t=i(this.option);return d(t,function(e,i){if(sI.hasClass(i)){for(var n=(e=Di(e)).length-1;n>=0;n--)Ei(e[n])&&e.splice(n,1);t[i]=e}}),delete t[bI],t},getTheme:function(){return this._theme},getComponent:function(t,e){var i=this._componentsMap.get(t);if(i)return i[e||0]},queryComponents:function(t){var e=t.mainType;if(!e)return[];var i=t.index,n=t.id,o=t.name,a=this._componentsMap.get(e);if(!a||!a.length)return[];var r;if(null!=i)y(i)||(i=[i]),r=g(f(i,function(t){return a[t]}),function(t){return!!t});else if(null!=n){var s=y(n);r=g(a,function(t){return s&&l(n,t.id)>=0||!s&&t.id===n})}else if(null!=o){var u=y(o);r=g(a,function(t){return u&&l(o,t.name)>=0||!u&&t.name===o})}else r=a.slice();return Ba(r,t)},findComponents:function(t){var e=t.query,i=t.mainType,n=function(t){var e=i+"Index",n=i+"Id",o=i+"Name";return!t||null==t[e]&&null==t[n]&&null==t[o]?null:{mainType:i,index:t[e],id:t[n],name:t[o]}}(e);return function(e){return t.filter?g(e,t.filter):e}(Ba(n?this.queryComponents(n):this._componentsMap.get(i),t))},eachComponent:function(t,e,i){var n=this._componentsMap;"function"==typeof t?(i=e,e=t,n.each(function(t,n){d(t,function(t,o){e.call(i,n,t,o)})})):_(t)?d(n.get(t),e,i):w(t)&&d(this.findComponents(t),e,i)},getSeriesByName:function(t){return g(this._componentsMap.get("series"),function(e){return e.name===t})},getSeriesByIndex:function(t){return this._componentsMap.get("series")[t]},getSeriesByType:function(t){return g(this._componentsMap.get("series"),function(e){return e.subType===t})},getSeries:function(){return this._componentsMap.get("series").slice()},getSeriesCount:function(){return this._componentsMap.get("series").length},eachSeries:function(t,e){d(this._seriesIndices,function(i){var n=this._componentsMap.get("series")[i];t.call(e,n,i)},this)},eachRawSeries:function(t,e){d(this._componentsMap.get("series"),t,e)},eachSeriesByType:function(t,e,i){d(this._seriesIndices,function(n){var o=this._componentsMap.get("series")[n];o.subType===t&&e.call(i,o,n)},this)},eachRawSeriesByType:function(t,e,i){return d(this.getSeriesByType(t),e,i)},isSeriesFiltered:function(t){return null==this._seriesIndicesMap.get(t.componentIndex)},getCurrentSeriesIndices:function(){return(this._seriesIndices||[]).slice()},filterSeries:function(t,e){za(this,g(this._componentsMap.get("series"),t,e))},restoreData:function(t){var e=this._componentsMap;za(this,e.get("series"));var i=[];e.each(function(t,e){i.push(e)}),sI.topologicalTravel(i,sI.getAllClassMainTypes(),function(i,n){d(e.get(i),function(e){("series"!==i||!Pa(e,t))&&e.restoreData()})})}});h(SI,cI);var MI=["getDom","getZr","getWidth","getHeight","getDevicePixelRatio","dispatchAction","isDisposed","on","off","getDataURL","getConnectedDataURL","getModel","getOption","getViewOfComponentModel","getViewOfSeriesModel"],II={};Ga.prototype={constructor:Ga,create:function(t,e){var i=[];d(II,function(n,o){var a=n.create(t,e);i=i.concat(a||[])}),this._coordinateSystems=i},update:function(t,e){d(this._coordinateSystems,function(i){i.update&&i.update(t,e)})},getCoordinateSystems:function(){return this._coordinateSystems.slice()}},Ga.register=function(t,e){II[t]=e},Ga.get=function(t){return II[t]};var TI=d,AI=i,DI=f,CI=n,LI=/^(min|max)?(.+)$/;Fa.prototype={constructor:Fa,setOption:function(t,e){t&&d(Di(t.series),function(t){t&&t.data&&S(t.data)&&N(t.data)}),t=AI(t,!0);var i=this._optionBackup,n=Wa.call(this,t,e,!i);this._newBaseOption=n.baseOption,i?(Xa(i.baseOption,n.baseOption),n.timelineOptions.length&&(i.timelineOptions=n.timelineOptions),n.mediaList.length&&(i.mediaList=n.mediaList),n.mediaDefault&&(i.mediaDefault=n.mediaDefault)):this._optionBackup=n},mountOption:function(t){var e=this._optionBackup;return this._timelineOptions=DI(e.timelineOptions,AI),this._mediaList=DI(e.mediaList,AI),this._mediaDefault=AI(e.mediaDefault),this._currentMediaIndices=[],AI(t?e.baseOption:this._newBaseOption)},getTimelineOption:function(t){var e,i=this._timelineOptions;if(i.length){var n=t.getComponent("timeline");n&&(e=AI(i[n.getCurrentIndex()],!0))}return e},getMediaOption:function(t){var e=this._api.getWidth(),i=this._api.getHeight(),n=this._mediaList,o=this._mediaDefault,a=[],r=[];if(!n.length&&!o)return r;for(var s=0,l=n.length;s<l;s++)Ha(n[s].query,e,i)&&a.push(s);return!a.length&&o&&(a=[-1]),a.length&&!Ua(a,this._currentMediaIndices)&&(r=DI(a,function(t){return AI(-1===t?o.option:n[t].option)})),this._currentMediaIndices=a,r}};var kI=d,PI=w,NI=["areaStyle","lineStyle","nodeStyle","linkStyle","chordStyle","label","labelLine"],OI=function(t,e){kI(Qa(t.series),function(t){PI(t)&&Ja(t)});var i=["xAxis","yAxis","radiusAxis","angleAxis","singleAxis","parallelAxis","radar"];e&&i.push("valueAxis","categoryAxis","logAxis","timeAxis"),kI(i,function(e){kI(Qa(t[e]),function(t){t&&(Ka(t,"axisLabel"),Ka(t.axisPointer,"label"))})}),kI(Qa(t.parallel),function(t){var e=t&&t.parallelAxisDefault;Ka(e,"axisLabel"),Ka(e&&e.axisPointer,"label")}),kI(Qa(t.calendar),function(t){Ya(t,"itemStyle"),Ka(t,"dayLabel"),Ka(t,"monthLabel"),Ka(t,"yearLabel")}),kI(Qa(t.radar),function(t){Ka(t,"name")}),kI(Qa(t.geo),function(t){PI(t)&&($a(t),kI(Qa(t.regions),function(t){$a(t)}))}),kI(Qa(t.timeline),function(t){$a(t),Ya(t,"label"),Ya(t,"itemStyle"),Ya(t,"controlStyle",!0);var e=t.data;y(e)&&d(e,function(t){w(t)&&(Ya(t,"label"),Ya(t,"itemStyle"))})}),kI(Qa(t.toolbox),function(t){Ya(t,"iconStyle"),kI(t.feature,function(t){Ya(t,"iconStyle")})}),Ka(tr(t.axisPointer),"label"),Ka(tr(t.tooltip).axisPointer,"label")},EI=[["x","left"],["y","top"],["x2","right"],["y2","bottom"]],RI=["grid","geo","parallel","legend","toolbox","title","visualMap","dataZoom","timeline"],zI=function(t,e){OI(t,e),t.series=Di(t.series),d(t.series,function(t){if(w(t)){var e=t.type;if("pie"!==e&&"gauge"!==e||null!=t.clockWise&&(t.clockwise=t.clockWise),"gauge"===e){var i=er(t,"pointer.color");null!=i&&ir(t,"itemStyle.normal.color",i)}nr(t)}}),t.dataRange&&(t.visualMap=t.dataRange),d(RI,function(e){var i=t[e];i&&(y(i)||(i=[i]),d(i,function(t){nr(t)}))})},BI=ar.prototype;BI.pure=!1,BI.persistent=!0,BI.getSource=function(){return this._source};var VI={arrayRows_column:{pure:!0,count:function(){return Math.max(0,this._data.length-this._source.startIndex)},getItem:function(t){return this._data[t+this._source.startIndex]},appendData:lr},arrayRows_row:{pure:!0,count:function(){var t=this._data[0];return t?Math.max(0,t.length-this._source.startIndex):0},getItem:function(t){t+=this._source.startIndex;for(var e=[],i=this._data,n=0;n<i.length;n++){var o=i[n];e.push(o?o[t]:null)}return e},appendData:function(){throw new Error('Do not support appendData when set seriesLayoutBy: "row".')}},objectRows:{pure:!0,count:rr,getItem:sr,appendData:lr},keyedColumns:{pure:!0,count:function(){var t=this._source.dimensionsDefine[0].name,e=this._data[t];return e?e.length:0},getItem:function(t){for(var e=[],i=this._source.dimensionsDefine,n=0;n<i.length;n++){var o=this._data[i[n].name];e.push(o?o[t]:null)}return e},appendData:function(t){var e=this._data;d(t,function(t,i){for(var n=e[i]||(e[i]=[]),o=0;o<(t||[]).length;o++)n.push(t[o])})}},original:{count:rr,getItem:sr,appendData:lr},typedArray:{persistent:!1,pure:!0,count:function(){return this._data?this._data.length/this._dimSize:0},getItem:function(t,e){t-=this._offset,e=e||[];for(var i=this._dimSize*t,n=0;n<this._dimSize;n++)e[n]=this._data[i+n];return e},appendData:function(t){this._data=t},clean:function(){this._offset+=this.count(),this._data=null}}},GI={arrayRows:ur,objectRows:function(t,e,i,n){return null!=i?t[n]:t},keyedColumns:ur,original:function(t,e,i,n){var o=Li(t);return null!=i&&o instanceof Array?o[i]:o},typedArray:ur},FI={arrayRows:hr,objectRows:function(t,e,i,n){return cr(t[e],this._dimensionInfos[e])},keyedColumns:hr,original:function(t,e,i,n){var o=t&&(null==t.value?t:t.value);return!this._rawData.pure&&ki(t)&&(this.hasItemOption=!0),cr(o instanceof Array?o[n]:o,this._dimensionInfos[e])},typedArray:function(t,e,i,n){return t[n]}},WI=/\{@(.+?)\}/g,HI={getDataParams:function(t,e){var i=this.getData(e),n=this.getRawValue(t,e),o=i.getRawIndex(t),a=i.getName(t),r=i.getRawDataItem(t),s=i.getItemVisual(t,"color"),l=this.ecModel.getComponent("tooltip"),u=Hi(l&&l.get("renderMode")),h=this.mainType,c="series"===h;return{componentType:h,componentSubType:this.subType,componentIndex:this.componentIndex,seriesType:c?this.subType:null,seriesIndex:this.seriesIndex,seriesId:c?this.id:null,seriesName:c?this.name:null,name:a,dataIndex:o,data:r,dataType:e,value:n,color:s,marker:oa({color:s,renderMode:u}),$vars:["seriesName","name","value"]}},getFormattedLabel:function(t,e,i,n,o){e=e||"normal";var a=this.getData(i),r=a.getItemModel(t),s=this.getDataParams(t,i);null!=n&&s.value instanceof Array&&(s.value=s.value[n]);var l=r.get("normal"===e?[o||"label","formatter"]:[e,o||"label","formatter"]);return"function"==typeof l?(s.status=e,l(s)):"string"==typeof l?ia(l,s).replace(WI,function(e,i){var n=i.length;return"["===i.charAt(0)&&"]"===i.charAt(n-1)&&(i=+i.slice(1,n-1)),dr(a,t,i)}):void 0},getRawValue:function(t,e){return dr(this.getData(e),t)},formatTooltip:function(){}},ZI=gr.prototype;ZI.perform=function(t){function e(t){return!(t>=1)&&(t=1),t}var i=this._upstream,n=t&&t.skip;if(this._dirty&&i){var o=this.context;o.data=o.outputData=i.context.outputData}this.__pipeline&&(this.__pipeline.currentTask=this);var a;this._plan&&!n&&(a=this._plan(this.context));var r=e(this._modBy),s=this._modDataCount||0,l=e(t&&t.modBy),u=t&&t.modDataCount||0;r===l&&s===u||(a="reset");var h;(this._dirty||"reset"===a)&&(this._dirty=!1,h=vr(this,n)),this._modBy=l,this._modDataCount=u;var c=t&&t.step;if(this._dueEnd=i?i._outputDueEnd:this._count?this._count(this.context):1/0,this._progress){var d=this._dueIndex,f=Math.min(null!=c?this._dueIndex+c:1/0,this._dueEnd);if(!n&&(h||d<f)){var p=this._progress;if(y(p))for(var g=0;g<p.length;g++)mr(this,p[g],d,f,l,u);else mr(this,p,d,f,l,u)}this._dueIndex=f;var m=null!=this._settedOutputEnd?this._settedOutputEnd:f;this._outputDueEnd=m}else this._dueIndex=this._outputDueEnd=null!=this._settedOutputEnd?this._settedOutputEnd:this._dueEnd;return this.unfinished()};var UI=function(){function t(){return n<i?n++:null}function e(){var t=n%r*o+Math.ceil(n/r),e=n>=i?null:t<a?t:n;return n++,e}var i,n,o,a,r,s={reset:function(l,u,h,c){n=l,i=u,o=h,a=c,r=Math.ceil(a/o),s.next=o>1&&a>0?e:t}};return s}();ZI.dirty=function(){this._dirty=!0,this._onDirty&&this._onDirty(this.context)},ZI.unfinished=function(){return this._progress&&this._dueIndex<this._dueEnd},ZI.pipe=function(t){(this._downstream!==t||this._dirty)&&(this._downstream=t,t._upstream=this,t.dirty())},ZI.dispose=function(){this._disposed||(this._upstream&&(this._upstream._downstream=null),this._downstream&&(this._downstream._upstream=null),this._dirty=!1,this._disposed=!0)},ZI.getUpstream=function(){return this._upstream},ZI.getDownstream=function(){return this._downstream},ZI.setOutputEnd=function(t){this._outputDueEnd=this._settedOutputEnd=t};var XI=Bi(),jI=sI.extend({type:"series.__base__",seriesIndex:0,coordinateSystem:null,defaultOption:null,legendDataProvider:null,visualColorAccessPath:"itemStyle.color",layoutMode:null,init:function(t,e,i,n){this.seriesIndex=this.componentIndex,this.dataTask=pr({count:_r,reset:wr}),this.dataTask.context={model:this},this.mergeDefaultAndTheme(t,i),Sa(this);var o=this.getInitialData(t,i);Sr(o,this),this.dataTask.context.data=o,XI(this).dataBeforeProcessed=o,yr(this)},mergeDefaultAndTheme:function(t,e){var i=this.layoutMode,o=i?pa(t):{},a=this.subType;sI.hasClass(a)&&(a+="Series"),n(t,e.getTheme().get(this.subType)),n(t,this.getDefaultOption()),Ci(t,"label",["show"]),this.fillDataTextStyle(t.data),i&&fa(t,o,i)},mergeOption:function(t,e){t=n(this.option,t,!0),this.fillDataTextStyle(t.data);var i=this.layoutMode;i&&fa(this.option,t,i),Sa(this);var o=this.getInitialData(t,e);Sr(o,this),this.dataTask.dirty(),this.dataTask.context.data=o,XI(this).dataBeforeProcessed=o,yr(this)},fillDataTextStyle:function(t){if(t&&!S(t))for(var e=["show"],i=0;i<t.length;i++)t[i]&&t[i].label&&Ci(t[i],"label",e)},getInitialData:function(){},appendData:function(t){this.getRawData().appendData(t.data)},getData:function(t){var e=Ir(this);if(e){var i=e.context.data;return null==t?i:i.getLinkedData(t)}return XI(this).data},setData:function(t){var e=Ir(this);if(e){var i=e.context;i.data!==t&&e.modifyOutputEnd&&e.setOutputEnd(t.count()),i.outputData=t,e!==this.dataTask&&(i.data=t)}XI(this).data=t},getSource:function(){return wa(this)},getRawData:function(){return XI(this).dataBeforeProcessed},getBaseAxis:function(){var t=this.coordinateSystem;return t&&t.getBaseAxis&&t.getBaseAxis()},formatTooltip:function(t,e,i,n){function o(t){return{renderMode:n,content:ea(Qo(t)),style:l}}var a=this,r="html"===(n=n||"html")?"<br/>":"\n",s="richText"===n,l={},u=0,h=this.getData(),c=h.mapDimension("defaultedTooltip",!0),f=c.length,g=this.getRawValue(t),m=y(g),v=h.getItemVisual(t,"color");w(v)&&v.colorStops&&(v=(v.colorStops[0]||{}).color),v=v||"transparent";var x=(f>1||m&&!f?function(i){function o(t,i){var o=h.getDimensionInfo(i);if(o&&!1!==o.otherDims.tooltip){var c=o.type,d="sub"+a.seriesIndex+"at"+u,p=oa({color:v,type:"subItem",renderMode:n,markerId:d}),g="string"==typeof p?p:p.content,m=(r?g+ea(o.displayName||"-")+": ":"")+ea("ordinal"===c?t+"":"time"===c?e?"":ra("yyyy/MM/dd hh:mm:ss",t):Qo(t));m&&f.push(m),s&&(l[d]=v,++u)}}var r=p(i,function(t,e,i){var n=h.getDimensionInfo(i);return t|=n&&!1!==n.tooltip&&null!=n.displayName},0),f=[];c.length?d(c,function(e){o(dr(h,t,e),e)}):d(i,o);var g=r?s?"\n":"<br/>":"",m=g+f.join(g||", ");return{renderMode:n,content:m,style:l}}(g):o(f?dr(h,t,c[0]):m?g[0]:g)).content,_=a.seriesIndex+"at"+u,b=oa({color:v,type:"item",renderMode:n,markerId:_});l[_]=v,++u;var S=h.getName(t),M=this.name;Oi(this)||(M=""),M=M?ea(M)+(e?": ":r):"";var I="string"==typeof b?b:b.content;return{html:e?I+M+x:M+I+(S?ea(S)+": "+x:x),markers:l}},isAnimationEnabled:function(){if(U_.node)return!1;var t=this.getShallow("animation");return t&&this.getData().count()>this.getShallow("animationThreshold")&&(t=!1),t},restoreData:function(){this.dataTask.dirty()},getColorFromPalette:function(t,e,i){var n=this.ecModel,o=cI.getColorFromPalette.call(this,t,e,i);return o||(o=n.getColorFromPalette(t,e,i)),o},coordDimToDataDim:function(t){return this.getRawData().mapDimension(t,!0)},getProgressive:function(){return this.get("progressive")},getProgressiveThreshold:function(){return this.get("progressiveThreshold")},getAxisTooltipData:null,getTooltipPosition:null,pipeTask:null,preventIncremental:null,pipelineContext:null});h(jI,HI),h(jI,cI);var YI=function(){this.group=new tb,this.uid=Eo("viewComponent")};YI.prototype={constructor:YI,init:function(t,e){},render:function(t,e,i,n){},dispose:function(){},filterForExposedEvent:null};var qI=YI.prototype;qI.updateView=qI.updateLayout=qI.updateVisual=function(t,e,i,n){},Xi(YI),Ki(YI,{registerWhenExtend:!0});var KI=function(){var t=Bi();return function(e){var i=t(e),n=e.pipelineContext,o=i.large,a=i.progressiveRender,r=i.large=n.large,s=i.progressiveRender=n.progressiveRender;return!!(o^r||a^s)&&"reset"}},$I=Bi(),JI=KI();Tr.prototype={type:"chart",init:function(t,e){},render:function(t,e,i,n){},highlight:function(t,e,i,n){Dr(t.getData(),n,"emphasis")},downplay:function(t,e,i,n){Dr(t.getData(),n,"normal")},remove:function(t,e){this.group.removeAll()},dispose:function(){},incrementalPrepareRender:null,incrementalRender:null,updateTransform:null,filterForExposedEvent:null};var QI=Tr.prototype;QI.updateView=QI.updateLayout=QI.updateVisual=function(t,e,i,n){this.render(t,e,i,n)},Xi(Tr),Ki(Tr,{registerWhenExtend:!0}),Tr.markUpdateMethod=function(t,e){$I(t).updateMethod=e};var tT={incrementalPrepareRender:{progress:function(t,e){e.view.incrementalRender(t,e.model,e.ecModel,e.api,e.payload)}},render:{forceFirstProgress:!0,progress:function(t,e){e.view.render(e.model,e.ecModel,e.api,e.payload)}}},eT="\0__throttleOriginMethod",iT="\0__throttleRate",nT="\0__throttleType",oT={createOnAllSeries:!0,performRawSeries:!0,reset:function(t,e){var i=t.getData(),n=(t.visualColorAccessPath||"itemStyle.color").split("."),o=t.get(n)||t.getColorFromPalette(t.name,null,e.getSeriesCount());if(i.setVisual("color",o),!e.isSeriesFiltered(t)){"function"!=typeof o||o instanceof MM||i.each(function(e){i.setItemVisual(e,"color",o(t.getDataParams(e)))});return{dataEach:i.hasItemOption?function(t,e){var i=t.getItemModel(e).get(n,!0);null!=i&&t.setItemVisual(e,"color",i)}:null}}}},aT={toolbox:{brush:{title:{rect:"矩形选择",polygon:"圈选",lineX:"横向选择",lineY:"纵向选择",keep:"保持选择",clear:"清除选择"}},dataView:{title:"数据视图",lang:["数据视图","关闭","刷新"]},dataZoom:{title:{zoom:"区域缩放",back:"区域缩放还原"}},magicType:{title:{line:"切换为折线图",bar:"切换为柱状图",stack:"切换为堆叠",tiled:"切换为平铺"}},restore:{title:"还原"},saveAsImage:{title:"保存为图片",lang:["右键另存为图片"]}},series:{typeNames:{pie:"饼图",bar:"柱状图",line:"折线图",scatter:"散点图",effectScatter:"涟漪散点图",radar:"雷达图",tree:"树图",treemap:"矩形树图",boxplot:"箱型图",candlestick:"K线图",k:"K线图",heatmap:"热力图",map:"地图",parallel:"平行坐标图",lines:"线图",graph:"关系图",sankey:"桑基图",funnel:"漏斗图",gauge:"仪表盘图",pictorialBar:"象形柱图",themeRiver:"主题河流图",sunburst:"旭日图"}},aria:{general:{withTitle:"这是一个关于“{title}”的图表。",withoutTitle:"这是一个图表，"},series:{single:{prefix:"",withName:"图表类型是{seriesType}，表示{seriesName}。",withoutName:"图表类型是{seriesType}。"},multiple:{prefix:"它由{seriesCount}个图表系列组成。",withName:"第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",withoutName:"第{seriesId}个系列是一个{seriesType}，",separator:{middle:"；",end:"。"}}},data:{allData:"其数据是——",partialData:"其中，前{displayCnt}项是——",withName:"{name}的数据是{value}",withoutName:"{value}",separator:{middle:"，",end:""}}}},rT=function(t,e){function i(t,e){if("string"!=typeof t)return t;var i=t;return d(e,function(t,e){i=i.replace(new RegExp("\\{\\s*"+e+"\\s*\\}","g"),t)}),i}function n(t){var e=a.get(t);if(null==e){for(var i=t.split("."),n=aT.aria,o=0;o<i.length;++o)n=n[i[o]];return n}return e}function o(t){return aT.series.typeNames[t]||"自定义图"}var a=e.getModel("aria");if(a.get("show"))if(a.get("description"))t.setAttribute("aria-label",a.get("description"));else{var r=0;e.eachSeries(function(t,e){++r},this);var s,l=a.get("data.maxCount")||10,u=a.get("series.maxCount")||10,h=Math.min(r,u);if(!(r<1)){var c=function(){var t=e.getModel("title").option;return t&&t.length&&(t=t[0]),t&&t.text}();s=c?i(n("general.withTitle"),{title:c}):n("general.withoutTitle");var f=[];s+=i(n(r>1?"series.multiple.prefix":"series.single.prefix"),{seriesCount:r}),e.eachSeries(function(t,e){if(e<h){var a,s=t.get("name"),u="series."+(r>1?"multiple":"single")+".";a=i(a=n(s?u+"withName":u+"withoutName"),{seriesId:t.seriesIndex,seriesName:t.get("name"),seriesType:o(t.subType)});var c=t.getData();window.data=c,c.count()>l?a+=i(n("data.partialData"),{displayCnt:l}):a+=n("data.allData");for(var d=[],p=0;p<c.count();p++)if(p<l){var g=c.getName(p),m=dr(c,p);d.push(i(n(g?"data.withName":"data.withoutName"),{name:g,value:m}))}a+=d.join(n("data.separator.middle"))+n("data.separator.end"),f.push(a)}}),s+=f.join(n("series.multiple.separator.middle"))+n("series.multiple.separator.end"),t.setAttribute("aria-label",s)}}},sT=Math.PI,lT=Or.prototype;lT.restoreData=function(t,e){t.restoreData(e),this._stageTaskMap.each(function(t){var e=t.overallTask;e&&e.dirty()})},lT.getPerformArgs=function(t,e){if(t.__pipeline){var i=this._pipelineMap.get(t.__pipeline.id),n=i.context,o=!e&&i.progressiveEnabled&&(!n||n.progressiveRender)&&t.__idxInPipeline>i.blockIndex?i.step:null,a=n&&n.modDataCount;return{step:o,modBy:null!=a?Math.ceil(a/o):null,modDataCount:a}}},lT.getPipeline=function(t){return this._pipelineMap.get(t)},lT.updateStreamModes=function(t,e){var i=this._pipelineMap.get(t.uid),n=t.getData().count(),o=i.progressiveEnabled&&e.incrementalPrepareRender&&n>=i.threshold,a=t.get("large")&&n>=t.get("largeThreshold"),r="mod"===t.get("progressiveChunkMode")?n:null;t.pipelineContext=i.context={progressiveRender:o,modDataCount:r,large:a}},lT.restorePipelines=function(t){var e=this,i=e._pipelineMap=R();t.eachSeries(function(t){var n=t.getProgressive(),o=t.uid;i.set(o,{id:o,head:null,tail:null,threshold:t.getProgressiveThreshold(),progressiveEnabled:n&&!(t.preventIncremental&&t.preventIncremental()),blockIndex:-1,step:Math.round(n||700),count:0}),Xr(e,t,t.dataTask)})},lT.prepareStageTasks=function(){var t=this._stageTaskMap,e=this.ecInstance.getModel(),i=this.api;d(this._allHandlers,function(n){var o=t.get(n.uid)||t.set(n.uid,[]);n.reset&&Rr(this,n,o,e,i),n.overallReset&&zr(this,n,o,e,i)},this)},lT.prepareView=function(t,e,i,n){var o=t.renderTask,a=o.context;a.model=e,a.ecModel=i,a.api=n,o.__block=!t.incrementalPrepareRender,Xr(this,e,o)},lT.performDataProcessorTasks=function(t,e){Er(this,this._dataProcessorHandlers,t,e,{block:!0})},lT.performVisualTasks=function(t,e,i){Er(this,this._visualHandlers,t,e,i)},lT.performSeriesTasks=function(t){var e;t.eachSeries(function(t){e|=t.dataTask.perform()}),this.unfinished|=e},lT.plan=function(){this._pipelineMap.each(function(t){var e=t.tail;do{if(e.__block){t.blockIndex=e.__idxInPipeline;break}e=e.getUpstream()}while(e)})};var uT=lT.updatePayload=function(t,e){"remain"!==e&&(t.context.payload=e)},hT=Zr(0);Or.wrapStageHandler=function(t,e){return x(t)&&(t={overallReset:t,seriesType:jr(t)}),t.uid=Eo("stageHandler"),e&&(t.visualType=e),t};var cT,dT={},fT={};Yr(dT,SI),Yr(fT,Va),dT.eachSeriesByType=dT.eachRawSeriesByType=function(t){cT=t},dT.eachComponent=function(t){"series"===t.mainType&&t.subType&&(cT=t.subType)};var pT=["#37A2DA","#32C5E9","#67E0E3","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#E062AE","#E690D1","#e7bcf3","#9d96f5","#8378EA","#96BFFF"],gT={color:pT,colorLayer:[["#37A2DA","#ffd85c","#fd7b5f"],["#37A2DA","#67E0E3","#FFDB5C","#ff9f7f","#E062AE","#9d96f5"],["#37A2DA","#32C5E9","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#e7bcf3","#8378EA","#96BFFF"],pT]},mT=["#dd6b66","#759aa0","#e69d87","#8dc1a9","#ea7e53","#eedd78","#73a373","#73b9bc","#7289ab","#91ca8c","#f49f42"],vT={color:mT,backgroundColor:"#333",tooltip:{axisPointer:{lineStyle:{color:"#eee"},crossStyle:{color:"#eee"}}},legend:{textStyle:{color:"#eee"}},textStyle:{color:"#eee"},title:{textStyle:{color:"#eee"}},toolbox:{iconStyle:{normal:{borderColor:"#eee"}}},dataZoom:{textStyle:{color:"#eee"}},visualMap:{textStyle:{color:"#eee"}},timeline:{lineStyle:{color:"#eee"},itemStyle:{normal:{color:mT[1]}},label:{normal:{textStyle:{color:"#eee"}}},controlStyle:{normal:{color:"#eee",borderColor:"#eee"}}},timeAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},logAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},valueAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},categoryAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},line:{symbol:"circle"},graph:{color:mT},gauge:{title:{textStyle:{color:"#eee"}}},candlestick:{itemStyle:{normal:{color:"#FD1050",color0:"#0CF49B",borderColor:"#FD1050",borderColor0:"#0CF49B"}}}};vT.categoryAxis.splitLine.show=!1,sI.extend({type:"dataset",defaultOption:{seriesLayoutBy:xI,sourceHeader:null,dimensions:null,source:null},optionUpdated:function(){_a(this)}}),YI.extend({type:"dataset"});var yT=kn.extend({type:"ellipse",shape:{cx:0,cy:0,rx:0,ry:0},buildPath:function(t,e){var i=.5522848,n=e.cx,o=e.cy,a=e.rx,r=e.ry,s=a*i,l=r*i;t.moveTo(n-a,o),t.bezierCurveTo(n-a,o-l,n-s,o-r,n,o-r),t.bezierCurveTo(n+s,o-r,n+a,o-l,n+a,o),t.bezierCurveTo(n+a,o+l,n+s,o+r,n,o+r),t.bezierCurveTo(n-s,o+r,n-a,o+l,n-a,o),t.closePath()}}),xT=/[\s,]+/;Kr.prototype.parse=function(t,e){e=e||{};var i=qr(t);if(!i)throw new Error("Illegal svg");var n=new tb;this._root=n;var o=i.getAttribute("viewBox")||"",a=parseFloat(i.getAttribute("width")||e.width),r=parseFloat(i.getAttribute("height")||e.height);isNaN(a)&&(a=null),isNaN(r)&&(r=null),ts(i,n,null,!0);for(var s=i.firstChild;s;)this._parseNode(s,n),s=s.nextSibling;var l,u;if(o){var h=P(o).split(xT);h.length>=4&&(l={x:parseFloat(h[0]||0),y:parseFloat(h[1]||0),width:parseFloat(h[2]),height:parseFloat(h[3])})}if(l&&null!=a&&null!=r&&(u=os(l,a,r),!e.ignoreViewBox)){var c=n;(n=new tb).add(c),c.scale=u.scale.slice(),c.position=u.position.slice()}return e.ignoreRootClip||null==a||null==r||n.setClipPath(new vM({shape:{x:0,y:0,width:a,height:r}})),{root:n,width:a,height:r,viewBoxRect:l,viewBoxTransform:u}},Kr.prototype._parseNode=function(t,e){var i=t.nodeName.toLowerCase();"defs"===i?this._isDefine=!0:"text"===i&&(this._isText=!0);var n;if(this._isDefine){if(r=wT[i]){var o=r.call(this,t),a=t.getAttribute("id");a&&(this._defs[a]=o)}}else{var r=_T[i];r&&(n=r.call(this,t,e),e.add(n))}for(var s=t.firstChild;s;)1===s.nodeType&&this._parseNode(s,n),3===s.nodeType&&this._isText&&this._parseText(s,n),s=s.nextSibling;"defs"===i?this._isDefine=!1:"text"===i&&(this._isText=!1)},Kr.prototype._parseText=function(t,e){if(1===t.nodeType){var i=t.getAttribute("dx")||0,n=t.getAttribute("dy")||0;this._textX+=parseFloat(i),this._textY+=parseFloat(n)}var o=new aM({style:{text:t.textContent,transformText:!0},position:[this._textX||0,this._textY||0]});Jr(e,o),ts(t,o,this._defs);var a=o.style.fontSize;a&&a<9&&(o.style.fontSize=9,o.scale=o.scale||[1,1],o.scale[0]*=a/9,o.scale[1]*=a/9);var r=o.getBoundingRect();return this._textX+=r.width,e.add(o),o};var _T={g:function(t,e){var i=new tb;return Jr(e,i),ts(t,i,this._defs),i},rect:function(t,e){var i=new vM;return Jr(e,i),ts(t,i,this._defs),i.setShape({x:parseFloat(t.getAttribute("x")||0),y:parseFloat(t.getAttribute("y")||0),width:parseFloat(t.getAttribute("width")||0),height:parseFloat(t.getAttribute("height")||0)}),i},circle:function(t,e){var i=new rM;return Jr(e,i),ts(t,i,this._defs),i.setShape({cx:parseFloat(t.getAttribute("cx")||0),cy:parseFloat(t.getAttribute("cy")||0),r:parseFloat(t.getAttribute("r")||0)}),i},line:function(t,e){var i=new xM;return Jr(e,i),ts(t,i,this._defs),i.setShape({x1:parseFloat(t.getAttribute("x1")||0),y1:parseFloat(t.getAttribute("y1")||0),x2:parseFloat(t.getAttribute("x2")||0),y2:parseFloat(t.getAttribute("y2")||0)}),i},ellipse:function(t,e){var i=new yT;return Jr(e,i),ts(t,i,this._defs),i.setShape({cx:parseFloat(t.getAttribute("cx")||0),cy:parseFloat(t.getAttribute("cy")||0),rx:parseFloat(t.getAttribute("rx")||0),ry:parseFloat(t.getAttribute("ry")||0)}),i},polygon:function(t,e){var i=t.getAttribute("points");i&&(i=Qr(i));var n=new fM({shape:{points:i||[]}});return Jr(e,n),ts(t,n,this._defs),n},polyline:function(t,e){var i=new kn;Jr(e,i),ts(t,i,this._defs);var n=t.getAttribute("points");return n&&(n=Qr(n)),new pM({shape:{points:n||[]}})},image:function(t,e){var i=new fi;return Jr(e,i),ts(t,i,this._defs),i.setStyle({image:t.getAttribute("xlink:href"),x:t.getAttribute("x"),y:t.getAttribute("y"),width:t.getAttribute("width"),height:t.getAttribute("height")}),i},text:function(t,e){var i=t.getAttribute("x")||0,n=t.getAttribute("y")||0,o=t.getAttribute("dx")||0,a=t.getAttribute("dy")||0;this._textX=parseFloat(i)+parseFloat(o),this._textY=parseFloat(n)+parseFloat(a);var r=new tb;return Jr(e,r),ts(t,r,this._defs),r},tspan:function(t,e){var i=t.getAttribute("x"),n=t.getAttribute("y");null!=i&&(this._textX=parseFloat(i)),null!=n&&(this._textY=parseFloat(n));var o=t.getAttribute("dx")||0,a=t.getAttribute("dy")||0,r=new tb;return Jr(e,r),ts(t,r,this._defs),this._textX+=o,this._textY+=a,r},path:function(t,e){var i=En(t.getAttribute("d")||"");return Jr(e,i),ts(t,i,this._defs),i}},wT={lineargradient:function(t){var e=parseInt(t.getAttribute("x1")||0,10),i=parseInt(t.getAttribute("y1")||0,10),n=parseInt(t.getAttribute("x2")||10,10),o=parseInt(t.getAttribute("y2")||0,10),a=new IM(e,i,n,o);return $r(t,a),a},radialgradient:function(t){}},bT={fill:"fill",stroke:"stroke","stroke-width":"lineWidth",opacity:"opacity","fill-opacity":"fillOpacity","stroke-opacity":"strokeOpacity","stroke-dasharray":"lineDash","stroke-dashoffset":"lineDashOffset","stroke-linecap":"lineCap","stroke-linejoin":"lineJoin","stroke-miterlimit":"miterLimit","font-family":"fontFamily","font-size":"fontSize","font-style":"fontStyle","font-weight":"fontWeight","text-align":"textAlign","alignment-baseline":"textBaseline"},ST=/url\(\s*#(.*?)\)/,MT=/(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.e,]*)\)/g,IT=/([^\s:;]+)\s*:\s*([^:;]+)/g,TT=R(),AT={registerMap:function(t,e,i){var n;return y(e)?n=e:e.svg?n=[{type:"svg",source:e.svg,specialAreas:e.specialAreas}]:(e.geoJson&&!e.features&&(i=e.specialAreas,e=e.geoJson),n=[{type:"geoJSON",source:e,specialAreas:i}]),d(n,function(t){var e=t.type;"geoJson"===e&&(e=t.type="geoJSON"),(0,DT[e])(t)}),TT.set(t,n)},retrieveMap:function(t){return TT.get(t)}},DT={geoJSON:function(t){var e=t.source;t.geoJSON=_(e)?"undefined"!=typeof JSON&&JSON.parse?JSON.parse(e):new Function("return ("+e+");")():e},svg:function(t){t.svgXML=qr(t.source)}},CT=k,LT=d,kT=x,PT=w,NT=sI.parseClassType,OT=1e3,ET=1e3,RT=3e3,zT={PROCESSOR:{FILTER:OT,STATISTIC:5e3},VISUAL:{LAYOUT:ET,GLOBAL:2e3,CHART:RT,COMPONENT:4e3,BRUSH:5e3}},BT="__flagInMainProcess",VT="__optionUpdated",GT=/^[a-zA-Z0-9_]+$/;ss.prototype.on=rs("on"),ss.prototype.off=rs("off"),ss.prototype.one=rs("one"),h(ss,fw);var FT=ls.prototype;FT._onframe=function(){if(!this._disposed){var t=this._scheduler;if(this[VT]){var e=this[VT].silent;this[BT]=!0,hs(this),WT.update.call(this),this[BT]=!1,this[VT]=!1,ps.call(this,e),gs.call(this,e)}else if(t.unfinished){var i=1,n=this._model;this._api;t.unfinished=!1;do{var o=+new Date;t.performSeriesTasks(n),t.performDataProcessorTasks(n),ds(this,n),t.performVisualTasks(n),ws(this,this._model,0,"remain"),i-=+new Date-o}while(i>0&&t.unfinished);t.unfinished||this._zr.flush()}}},FT.getDom=function(){return this._dom},FT.getZr=function(){return this._zr},FT.setOption=function(t,e,i){var n;if(PT(e)&&(i=e.lazyUpdate,n=e.silent,e=e.notMerge),this[BT]=!0,!this._model||e){var o=new Fa(this._api),a=this._theme,r=this._model=new SI(null,null,a,o);r.scheduler=this._scheduler,r.init(null,null,a,o)}this._model.setOption(t,jT),i?(this[VT]={silent:n},this[BT]=!1):(hs(this),WT.update.call(this),this._zr.flush(),this[VT]=!1,this[BT]=!1,ps.call(this,n),gs.call(this,n))},FT.setTheme=function(){console.error("ECharts#setTheme() is DEPRECATED in ECharts 3.0")},FT.getModel=function(){return this._model},FT.getOption=function(){return this._model&&this._model.getOption()},FT.getWidth=function(){return this._zr.getWidth()},FT.getHeight=function(){return this._zr.getHeight()},FT.getDevicePixelRatio=function(){return this._zr.painter.dpr||window.devicePixelRatio||1},FT.getRenderedCanvas=function(t){if(U_.canvasSupported)return(t=t||{}).pixelRatio=t.pixelRatio||1,t.backgroundColor=t.backgroundColor||this._model.get("backgroundColor"),this._zr.painter.getRenderedCanvas(t)},FT.getSvgDataUrl=function(){if(U_.svgSupported){var t=this._zr;return d(t.storage.getDisplayList(),function(t){t.stopAnimation(!0)}),t.painter.pathToDataUrl()}},FT.getDataURL=function(t){var e=(t=t||{}).excludeComponents,i=this._model,n=[],o=this;LT(e,function(t){i.eachComponent({mainType:t},function(t){var e=o._componentsMap[t.__viewId];e.group.ignore||(n.push(e),e.group.ignore=!0)})});var a="svg"===this._zr.painter.getType()?this.getSvgDataUrl():this.getRenderedCanvas(t).toDataURL("image/"+(t&&t.type||"png"));return LT(n,function(t){t.group.ignore=!1}),a},FT.getConnectedDataURL=function(t){if(U_.canvasSupported){var e=this.group,n=Math.min,o=Math.max;if(QT[e]){var a=1/0,r=1/0,s=-1/0,l=-1/0,u=[],h=t&&t.pixelRatio||1;d(JT,function(h,c){if(h.group===e){var d=h.getRenderedCanvas(i(t)),f=h.getDom().getBoundingClientRect();a=n(f.left,a),r=n(f.top,r),s=o(f.right,s),l=o(f.bottom,l),u.push({dom:d,left:f.left,top:f.top})}});var c=(s*=h)-(a*=h),f=(l*=h)-(r*=h),p=iw();p.width=c,p.height=f;var g=Ii(p);return LT(u,function(t){var e=new fi({style:{x:t.left*h-a,y:t.top*h-r,image:t.dom}});g.add(e)}),g.refreshImmediately(),p.toDataURL("image/"+(t&&t.type||"png"))}return this.getDataURL(t)}},FT.convertToPixel=v(us,"convertToPixel"),FT.convertFromPixel=v(us,"convertFromPixel"),FT.containPixel=function(t,e){var i;return t=Vi(this._model,t),d(t,function(t,n){n.indexOf("Models")>=0&&d(t,function(t){var o=t.coordinateSystem;if(o&&o.containPoint)i|=!!o.containPoint(e);else if("seriesModels"===n){var a=this._chartsMap[t.__viewId];a&&a.containPoint&&(i|=a.containPoint(e,t))}},this)},this),!!i},FT.getVisual=function(t,e){var i=(t=Vi(this._model,t,{defaultMainType:"series"})).seriesModel.getData(),n=t.hasOwnProperty("dataIndexInside")?t.dataIndexInside:t.hasOwnProperty("dataIndex")?i.indexOfRawIndex(t.dataIndex):null;return null!=n?i.getItemVisual(n,e):i.getVisual(e)},FT.getViewOfComponentModel=function(t){return this._componentsMap[t.__viewId]},FT.getViewOfSeriesModel=function(t){return this._chartsMap[t.__viewId]};var WT={prepareAndUpdate:function(t){hs(this),WT.update.call(this,t)},update:function(t){var e=this._model,i=this._api,n=this._zr,o=this._coordSysMgr,a=this._scheduler;if(e){a.restoreData(e,t),a.performSeriesTasks(e),o.create(e,i),a.performDataProcessorTasks(e,t),ds(this,e),o.update(e,i),ys(e),a.performVisualTasks(e,t),xs(this,e,i,t);var r=e.get("backgroundColor")||"transparent";if(U_.canvasSupported)n.setBackgroundColor(r);else{var s=Gt(r);r=qt(s,"rgb"),0===s[3]&&(r="transparent")}bs(e,i)}},updateTransform:function(t){var e=this._model,i=this,n=this._api;if(e){var o=[];e.eachComponent(function(a,r){var s=i.getViewOfComponentModel(r);if(s&&s.__alive)if(s.updateTransform){var l=s.updateTransform(r,e,n,t);l&&l.update&&o.push(s)}else o.push(s)});var a=R();e.eachSeries(function(o){var r=i._chartsMap[o.__viewId];if(r.updateTransform){var s=r.updateTransform(o,e,n,t);s&&s.update&&a.set(o.uid,1)}else a.set(o.uid,1)}),ys(e),this._scheduler.performVisualTasks(e,t,{setDirty:!0,dirtyMap:a}),ws(i,e,0,t,a),bs(e,this._api)}},updateView:function(t){var e=this._model;e&&(Tr.markUpdateMethod(t,"updateView"),ys(e),this._scheduler.performVisualTasks(e,t,{setDirty:!0}),xs(this,this._model,this._api,t),bs(e,this._api))},updateVisual:function(t){WT.update.call(this,t)},updateLayout:function(t){WT.update.call(this,t)}};FT.resize=function(t){this._zr.resize(t);var e=this._model;if(this._loadingFX&&this._loadingFX.resize(),e){var i=e.resetOption("media"),n=t&&t.silent;this[BT]=!0,i&&hs(this),WT.update.call(this),this[BT]=!1,ps.call(this,n),gs.call(this,n)}},FT.showLoading=function(t,e){if(PT(t)&&(e=t,t=""),t=t||"default",this.hideLoading(),$T[t]){var i=$T[t](this._api,e),n=this._zr;this._loadingFX=i,n.add(i)}},FT.hideLoading=function(){this._loadingFX&&this._zr.remove(this._loadingFX),this._loadingFX=null},FT.makeActionFromEvent=function(t){var e=a({},t);return e.type=UT[t.type],e},FT.dispatchAction=function(t,e){PT(e)||(e={silent:!!e}),ZT[t.type]&&this._model&&(this[BT]?this._pendingActions.push(t):(fs.call(this,t,e.silent),e.flush?this._zr.flush(!0):!1!==e.flush&&U_.browser.weChat&&this._throttledZrFlush(),ps.call(this,e.silent),gs.call(this,e.silent)))},FT.appendData=function(t){var e=t.seriesIndex;this.getModel().getSeriesByIndex(e).appendData(t),this._scheduler.unfinished=!0},FT.on=rs("on"),FT.off=rs("off"),FT.one=rs("one");var HT=["click","dblclick","mouseover","mouseout","mousemove","mousedown","mouseup","globalout","contextmenu"];FT._initEvents=function(){LT(HT,function(t){var e=function(e){var i,n=this.getModel(),o=e.target;if("globalout"===t)i={};else if(o&&null!=o.dataIndex){var r=o.dataModel||n.getSeriesByIndex(o.seriesIndex);i=r&&r.getDataParams(o.dataIndex,o.dataType,o)||{}}else o&&o.eventData&&(i=a({},o.eventData));if(i){var s=i.componentType,l=i.componentIndex;"markLine"!==s&&"markPoint"!==s&&"markArea"!==s||(s="series",l=i.seriesIndex);var u=s&&null!=l&&n.getComponent(s,l),h=u&&this["series"===u.mainType?"_chartsMap":"_componentsMap"][u.__viewId];i.event=e,i.type=t,this._ecEventProcessor.eventInfo={targetEl:o,packedEvent:i,model:u,view:h},this.trigger(t,i)}};e.zrEventfulCallAtLast=!0,this._zr.on(t,e,this)},this),LT(UT,function(t,e){this._messageCenter.on(e,function(t){this.trigger(e,t)},this)},this)},FT.isDisposed=function(){return this._disposed},FT.clear=function(){this.setOption({series:[]},!0)},FT.dispose=function(){if(!this._disposed){this._disposed=!0,Fi(this.getDom(),iA,"");var t=this._api,e=this._model;LT(this._componentsViews,function(i){i.dispose(e,t)}),LT(this._chartsViews,function(i){i.dispose(e,t)}),this._zr.dispose(),delete JT[this.id]}},h(ls,fw),As.prototype={constructor:As,normalizeQuery:function(t){var e={},i={},n={};if(_(t)){var o=NT(t);e.mainType=o.main||null,e.subType=o.sub||null}else{var a=["Index","Name","Id"],r={name:1,dataIndex:1,dataType:1};d(t,function(t,o){for(var s=!1,l=0;l<a.length;l++){var u=a[l],h=o.lastIndexOf(u);if(h>0&&h===o.length-u.length){var c=o.slice(0,h);"data"!==c&&(e.mainType=c,e[u.toLowerCase()]=t,s=!0)}}r.hasOwnProperty(o)&&(i[o]=t,s=!0),s||(n[o]=t)})}return{cptQuery:e,dataQuery:i,otherQuery:n}},filter:function(t,e,i){function n(t,e,i,n){return null==t[i]||e[n||i]===t[i]}var o=this.eventInfo;if(!o)return!0;var a=o.targetEl,r=o.packedEvent,s=o.model,l=o.view;if(!s||!l)return!0;var u=e.cptQuery,h=e.dataQuery;return n(u,s,"mainType")&&n(u,s,"subType")&&n(u,s,"index","componentIndex")&&n(u,s,"name")&&n(u,s,"id")&&n(h,r,"name")&&n(h,r,"dataIndex")&&n(h,r,"dataType")&&(!l.filterForExposedEvent||l.filterForExposedEvent(t,e.otherQuery,a,r))},afterTrigger:function(){this.eventInfo=null}};var ZT={},UT={},XT=[],jT=[],YT=[],qT=[],KT={},$T={},JT={},QT={},tA=new Date-0,eA=new Date-0,iA="_echarts_instance_",nA=Cs;zs(2e3,oT),Ps(zI),Ns(5e3,function(t){var e=R();t.eachSeries(function(t){var i=t.get("stack");if(i){var n=e.get(i)||e.set(i,[]),o=t.getData(),a={stackResultDimension:o.getCalculationInfo("stackResultDimension"),stackedOverDimension:o.getCalculationInfo("stackedOverDimension"),stackedDimension:o.getCalculationInfo("stackedDimension"),stackedByDimension:o.getCalculationInfo("stackedByDimension"),isStackedByIndex:o.getCalculationInfo("isStackedByIndex"),data:o,seriesModel:t};if(!a.stackedDimension||!a.isStackedByIndex&&!a.stackedByDimension)return;n.length&&o.setCalculationInfo("stackedOnSeries",n[n.length-1].seriesModel),n.push(a)}}),e.each(or)}),Vs("default",function(t,e){r(e=e||{},{text:"loading",color:"#c23531",textColor:"#000",maskColor:"rgba(255, 255, 255, 0.8)",zlevel:0});var i=new vM({style:{fill:e.maskColor},zlevel:e.zlevel,z:1e4}),n=new bM({shape:{startAngle:-sT/2,endAngle:-sT/2+.1,r:10},style:{stroke:e.color,lineCap:"round",lineWidth:5},zlevel:e.zlevel,z:10001}),o=new vM({style:{fill:"none",text:e.text,textPosition:"right",textDistance:10,textFill:e.textColor},zlevel:e.zlevel,z:10001});n.animateShape(!0).when(1e3,{endAngle:3*sT/2}).start("circularInOut"),n.animateShape(!0).when(1e3,{startAngle:3*sT/2}).delay(300).start("circularInOut");var a=new tb;return a.add(n),a.add(o),a.add(i),a.resize=function(){var e=t.getWidth()/2,a=t.getHeight()/2;n.setShape({cx:e,cy:a});var r=n.shape.r;o.setShape({x:e-r,y:a-r,width:2*r,height:2*r}),i.setShape({x:0,y:0,width:t.getWidth(),height:t.getHeight()})},a.resize(),a}),Os({type:"highlight",event:"highlight",update:"highlight"},B),Os({type:"downplay",event:"downplay",update:"downplay"},B),ks("light",gT),ks("dark",vT);Us.prototype={constructor:Us,add:function(t){return this._add=t,this},update:function(t){return this._update=t,this},remove:function(t){return this._remove=t,this},execute:function(){var t=this._old,e=this._new,i={},n=[],o=[];for(Xs(t,{},n,"_oldKeyGetter",this),Xs(e,i,o,"_newKeyGetter",this),a=0;a<t.length;a++)null!=(s=i[r=n[a]])?((u=s.length)?(1===u&&(i[r]=null),s=s.unshift()):i[r]=null,this._update&&this._update(s,a)):this._remove&&this._remove(a);for(var a=0;a<o.length;a++){var r=o[a];if(i.hasOwnProperty(r)){var s=i[r];if(null==s)continue;if(s.length)for(var l=0,u=s.length;l<u;l++)this._add&&this._add(s[l]);else this._add&&this._add(s)}}}};var oA=R(["tooltip","label","itemName","itemId","seriesName"]),aA=w,rA=-1,sA="e\0\0",lA={float:"undefined"==typeof Float64Array?Array:Float64Array,int:"undefined"==typeof Int32Array?Array:Int32Array,ordinal:Array,number:Array,time:Array},uA="undefined"==typeof Uint32Array?Array:Uint32Array,hA="undefined"==typeof Int32Array?Array:Int32Array,cA="undefined"==typeof Uint16Array?Array:Uint16Array,dA=["hasItemOption","_nameList","_idList","_invertedIndicesMap","_rawData","_chunkSize","_chunkCount","_dimValueGetter","_count","_rawCount","_nameDimIdx","_idDimIdx"],fA=["_extent","_approximateExtent","_rawExtent"],pA=function(t,e){t=t||["x","y"];for(var i={},n=[],o={},a=0;a<t.length;a++){var r=t[a];_(r)&&(r={name:r});var s=r.name;r.type=r.type||"float",r.coordDim||(r.coordDim=s,r.coordDimIndex=0),r.otherDims=r.otherDims||{},n.push(s),i[s]=r,r.index=a,r.createInvertedIndices&&(o[s]=[])}this.dimensions=n,this._dimensionInfos=i,this.hostModel=e,this.dataType,this._indices=null,this._count=0,this._rawCount=0,this._storage={},this._nameList=[],this._idList=[],this._optionModels=[],this._visual={},this._layout={},this._itemVisuals=[],this.hasItemVisual={},this._itemLayouts=[],this._graphicEls=[],this._chunkSize=1e5,this._chunkCount=0,this._rawData,this._rawExtent={},this._extent={},this._approximateExtent={},this._dimensionsSummary=js(this),this._invertedIndicesMap=o,this._calculationInfo={}},gA=pA.prototype;gA.type="list",gA.hasItemOption=!0,gA.getDimension=function(t){return isNaN(t)||(t=this.dimensions[t]||t),t},gA.getDimensionInfo=function(t){return this._dimensionInfos[this.getDimension(t)]},gA.getDimensionsOnCoord=function(){return this._dimensionsSummary.dataDimsOnCoord.slice()},gA.mapDimension=function(t,e){var i=this._dimensionsSummary;if(null==e)return i.encodeFirstDimNotExtra[t];var n=i.encode[t];return!0===e?(n||[]).slice():n&&n[e]},gA.initData=function(t,e,i){(xa.isInstance(t)||c(t))&&(t=new ar(t,this.dimensions.length)),this._rawData=t,this._storage={},this._indices=null,this._nameList=e||[],this._idList=[],this._nameRepeatCount={},i||(this.hasItemOption=!1),this.defaultDimValueGetter=FI[this._rawData.getSource().sourceFormat],this._dimValueGetter=i=i||this.defaultDimValueGetter,this._dimValueGetterArrayRows=FI.arrayRows,this._rawExtent={},this._initDataFromProvider(0,t.count()),t.pure&&(this.hasItemOption=!1)},gA.getProvider=function(){return this._rawData},gA.appendData=function(t){var e=this._rawData,i=this.count();e.appendData(t);var n=e.count();e.persistent||(n+=i),this._initDataFromProvider(i,n)},gA.appendValues=function(t,e){for(var i=this._chunkSize,n=this._storage,o=this.dimensions,a=o.length,r=this._rawExtent,s=this.count(),l=s+Math.max(t.length,e?e.length:0),u=this._chunkCount,h=0;h<a;h++){v=o[h];Qs(n,this._dimensionInfos[v],i,u,l),this._chunkCount=n[v].length}for(var c=new Array(a),d=s;d<l;d++){for(var f=d-s,p=Math.floor(d/i),g=d%i,m=0;m<a;m++){var v=o[m],y=this._dimValueGetterArrayRows(t[f]||c,v,f,m);n[v][p][g]=y;var x=r[v];y<x[0]&&(x[0]=y),y>x[1]&&(x[1]=y)}e&&(this._nameList[d]=e[f])}this._rawCount=this._count=l,this._extent={},tl(this)},gA._initDataFromProvider=function(t,e){if(!(t>=e)){for(var i,n=this._chunkSize,o=this._rawData,a=this._storage,r=this.dimensions,s=r.length,l=this._dimensionInfos,u=this._nameList,h=this._idList,c=this._rawExtent,d=this._nameRepeatCount={},f=this._chunkCount,p=0;p<s;p++){c[w=r[p]]||(c[w]=[1/0,-1/0]);var g=l[w];0===g.otherDims.itemName&&(i=this._nameDimIdx=p),0===g.otherDims.itemId&&(this._idDimIdx=p),a[w]||(a[w]=[]),Qs(a,g,n,f,e),this._chunkCount=a[w].length}for(var m=new Array(s),v=t;v<e;v++){m=o.getItem(v,m);for(var y=Math.floor(v/n),x=v%n,_=0;_<s;_++){var w=r[_],b=a[w][y],S=this._dimValueGetter(m,w,v,_);b[x]=S;var M=c[w];S<M[0]&&(M[0]=S),S>M[1]&&(M[1]=S)}if(!o.pure){var I=u[v];if(m&&null==I)if(null!=m.name)u[v]=I=m.name;else if(null!=i){var T=r[i],A=a[T][y];if(A){I=A[x];var D=l[T].ordinalMeta;D&&D.categories.length&&(I=D.categories[I])}}var C=null==m?null:m.id;null==C&&null!=I&&(d[I]=d[I]||0,C=I,d[I]>0&&(C+="__ec__"+d[I]),d[I]++),null!=C&&(h[v]=C)}}!o.persistent&&o.clean&&o.clean(),this._rawCount=this._count=e,this._extent={},tl(this)}},gA.count=function(){return this._count},gA.getIndices=function(){var t=this._indices;if(t){var e=t.constructor,i=this._count;if(e===Array){n=new e(i);for(o=0;o<i;o++)n[o]=t[o]}else n=new e(t.buffer,0,i)}else for(var n=new(e=Ks(this))(this.count()),o=0;o<n.length;o++)n[o]=o;return n},gA.get=function(t,e){if(!(e>=0&&e<this._count))return NaN;var i=this._storage;if(!i[t])return NaN;e=this.getRawIndex(e);var n=Math.floor(e/this._chunkSize),o=e%this._chunkSize;return i[t][n][o]},gA.getByRawIndex=function(t,e){if(!(e>=0&&e<this._rawCount))return NaN;var i=this._storage[t];if(!i)return NaN;var n=Math.floor(e/this._chunkSize),o=e%this._chunkSize;return i[n][o]},gA._getFast=function(t,e){var i=Math.floor(e/this._chunkSize),n=e%this._chunkSize;return this._storage[t][i][n]},gA.getValues=function(t,e){var i=[];y(t)||(e=t,t=this.dimensions);for(var n=0,o=t.length;n<o;n++)i.push(this.get(t[n],e));return i},gA.hasValue=function(t){for(var e=this._dimensionsSummary.dataDimsOnCoord,i=this._dimensionInfos,n=0,o=e.length;n<o;n++)if("ordinal"!==i[e[n]].type&&isNaN(this.get(e[n],t)))return!1;return!0},gA.getDataExtent=function(t){t=this.getDimension(t);var e=[1/0,-1/0];if(!this._storage[t])return e;var i,n=this.count();if(!this._indices)return this._rawExtent[t].slice();if(i=this._extent[t])return i.slice();for(var o=(i=e)[0],a=i[1],r=0;r<n;r++){var s=this._getFast(t,this.getRawIndex(r));s<o&&(o=s),s>a&&(a=s)}return i=[o,a],this._extent[t]=i,i},gA.getApproximateExtent=function(t){return t=this.getDimension(t),this._approximateExtent[t]||this.getDataExtent(t)},gA.setApproximateExtent=function(t,e){e=this.getDimension(e),this._approximateExtent[e]=t.slice()},gA.getCalculationInfo=function(t){return this._calculationInfo[t]},gA.setCalculationInfo=function(t,e){aA(t)?a(this._calculationInfo,t):this._calculationInfo[t]=e},gA.getSum=function(t){var e=0;if(this._storage[t])for(var i=0,n=this.count();i<n;i++){var o=this.get(t,i);isNaN(o)||(e+=o)}return e},gA.getMedian=function(t){var e=[];this.each(t,function(t,i){isNaN(t)||e.push(t)});var i=[].concat(e).sort(function(t,e){return t-e}),n=this.count();return 0===n?0:n%2==1?i[(n-1)/2]:(i[n/2]+i[n/2-1])/2},gA.rawIndexOf=function(t,e){var i=(t&&this._invertedIndicesMap[t])[e];return null==i||isNaN(i)?rA:i},gA.indexOfName=function(t){for(var e=0,i=this.count();e<i;e++)if(this.getName(e)===t)return e;return-1},gA.indexOfRawIndex=function(t){if(!this._indices)return t;if(t>=this._rawCount||t<0)return-1;var e=this._indices,i=e[t];if(null!=i&&i<this._count&&i===t)return t;for(var n=0,o=this._count-1;n<=o;){var a=(n+o)/2|0;if(e[a]<t)n=a+1;else{if(!(e[a]>t))return a;o=a-1}}return-1},gA.indicesOfNearest=function(t,e,i){var n=[];if(!this._storage[t])return n;null==i&&(i=1/0);for(var o=Number.MAX_VALUE,a=-1,r=0,s=this.count();r<s;r++){var l=e-this.get(t,r),u=Math.abs(l);l<=i&&u<=o&&((u<o||l>=0&&a<0)&&(o=u,a=l,n.length=0),n.push(r))}return n},gA.getRawIndex=il,gA.getRawDataItem=function(t){if(this._rawData.persistent)return this._rawData.getItem(this.getRawIndex(t));for(var e=[],i=0;i<this.dimensions.length;i++){var n=this.dimensions[i];e.push(this.get(n,t))}return e},gA.getName=function(t){var e=this.getRawIndex(t);return this._nameList[e]||el(this,this._nameDimIdx,e)||""},gA.getId=function(t){return ol(this,this.getRawIndex(t))},gA.each=function(t,e,i,n){if(this._count){"function"==typeof t&&(n=i,i=e,e=t,t=[]),i=i||n||this;for(var o=(t=f(al(t),this.getDimension,this)).length,a=0;a<this.count();a++)switch(o){case 0:e.call(i,a);break;case 1:e.call(i,this.get(t[0],a),a);break;case 2:e.call(i,this.get(t[0],a),this.get(t[1],a),a);break;default:for(var r=0,s=[];r<o;r++)s[r]=this.get(t[r],a);s[r]=a,e.apply(i,s)}}},gA.filterSelf=function(t,e,i,n){if(this._count){"function"==typeof t&&(n=i,i=e,e=t,t=[]),i=i||n||this,t=f(al(t),this.getDimension,this);for(var o=this.count(),a=new(Ks(this))(o),r=[],s=t.length,l=0,u=t[0],h=0;h<o;h++){var c,d=this.getRawIndex(h);if(0===s)c=e.call(i,h);else if(1===s){var p=this._getFast(u,d);c=e.call(i,p,h)}else{for(var g=0;g<s;g++)r[g]=this._getFast(u,d);r[g]=h,c=e.apply(i,r)}c&&(a[l++]=d)}return l<o&&(this._indices=a),this._count=l,this._extent={},this.getRawIndex=this._indices?nl:il,this}},gA.selectRange=function(t){if(this._count){var e=[];for(var i in t)t.hasOwnProperty(i)&&e.push(i);var n=e.length;if(n){var o=this.count(),a=new(Ks(this))(o),r=0,s=e[0],l=t[s][0],u=t[s][1],h=!1;if(!this._indices){var c=0;if(1===n){for(var d=this._storage[e[0]],f=0;f<this._chunkCount;f++)for(var p=d[f],g=Math.min(this._count-f*this._chunkSize,this._chunkSize),m=0;m<g;m++)((w=p[m])>=l&&w<=u||isNaN(w))&&(a[r++]=c),c++;h=!0}else if(2===n){for(var d=this._storage[s],v=this._storage[e[1]],y=t[e[1]][0],x=t[e[1]][1],f=0;f<this._chunkCount;f++)for(var p=d[f],_=v[f],g=Math.min(this._count-f*this._chunkSize,this._chunkSize),m=0;m<g;m++){var w=p[m],b=_[m];(w>=l&&w<=u||isNaN(w))&&(b>=y&&b<=x||isNaN(b))&&(a[r++]=c),c++}h=!0}}if(!h)if(1===n)for(m=0;m<o;m++){M=this.getRawIndex(m);((w=this._getFast(s,M))>=l&&w<=u||isNaN(w))&&(a[r++]=M)}else for(m=0;m<o;m++){for(var S=!0,M=this.getRawIndex(m),f=0;f<n;f++){var I=e[f];((w=this._getFast(i,M))<t[I][0]||w>t[I][1])&&(S=!1)}S&&(a[r++]=this.getRawIndex(m))}return r<o&&(this._indices=a),this._count=r,this._extent={},this.getRawIndex=this._indices?nl:il,this}}},gA.mapArray=function(t,e,i,n){"function"==typeof t&&(n=i,i=e,e=t,t=[]),i=i||n||this;var o=[];return this.each(t,function(){o.push(e&&e.apply(this,arguments))},i),o},gA.map=function(t,e,i,n){i=i||n||this;var o=rl(this,t=f(al(t),this.getDimension,this));o._indices=this._indices,o.getRawIndex=o._indices?nl:il;for(var a=o._storage,r=[],s=this._chunkSize,l=t.length,u=this.count(),h=[],c=o._rawExtent,d=0;d<u;d++){for(var p=0;p<l;p++)h[p]=this.get(t[p],d);h[l]=d;var g=e&&e.apply(i,h);if(null!=g){"object"!=typeof g&&(r[0]=g,g=r);for(var m=this.getRawIndex(d),v=Math.floor(m/s),y=m%s,x=0;x<g.length;x++){var _=t[x],w=g[x],b=c[_],S=a[_];S&&(S[v][y]=w),w<b[0]&&(b[0]=w),w>b[1]&&(b[1]=w)}}}return o},gA.downSample=function(t,e,i,n){for(var o=rl(this,[t]),a=o._storage,r=[],s=Math.floor(1/e),l=a[t],u=this.count(),h=this._chunkSize,c=o._rawExtent[t],d=new(Ks(this))(u),f=0,p=0;p<u;p+=s){s>u-p&&(s=u-p,r.length=s);for(var g=0;g<s;g++){var m=this.getRawIndex(p+g),v=Math.floor(m/h),y=m%h;r[g]=l[v][y]}var x=i(r),_=this.getRawIndex(Math.min(p+n(r,x)||0,u-1)),w=_%h;l[Math.floor(_/h)][w]=x,x<c[0]&&(c[0]=x),x>c[1]&&(c[1]=x),d[f++]=_}return o._count=f,o._indices=d,o.getRawIndex=nl,o},gA.getItemModel=function(t){var e=this.hostModel;return new Po(this.getRawDataItem(t),e,e&&e.ecModel)},gA.diff=function(t){var e=this;return new Us(t?t.getIndices():[],this.getIndices(),function(e){return ol(t,e)},function(t){return ol(e,t)})},gA.getVisual=function(t){var e=this._visual;return e&&e[t]},gA.setVisual=function(t,e){if(aA(t))for(var i in t)t.hasOwnProperty(i)&&this.setVisual(i,t[i]);else this._visual=this._visual||{},this._visual[t]=e},gA.setLayout=function(t,e){if(aA(t))for(var i in t)t.hasOwnProperty(i)&&this.setLayout(i,t[i]);else this._layout[t]=e},gA.getLayout=function(t){return this._layout[t]},gA.getItemLayout=function(t){return this._itemLayouts[t]},gA.setItemLayout=function(t,e,i){this._itemLayouts[t]=i?a(this._itemLayouts[t]||{},e):e},gA.clearItemLayouts=function(){this._itemLayouts.length=0},gA.getItemVisual=function(t,e,i){var n=this._itemVisuals[t],o=n&&n[e];return null!=o||i?o:this.getVisual(e)},gA.setItemVisual=function(t,e,i){var n=this._itemVisuals[t]||{},o=this.hasItemVisual;if(this._itemVisuals[t]=n,aA(e))for(var a in e)e.hasOwnProperty(a)&&(n[a]=e[a],o[a]=!0);else n[e]=i,o[e]=!0},gA.clearAllVisual=function(){this._visual={},this._itemVisuals=[],this.hasItemVisual={}};var mA=function(t){t.seriesIndex=this.seriesIndex,t.dataIndex=this.dataIndex,t.dataType=this.dataType};gA.setItemGraphicEl=function(t,e){var i=this.hostModel;e&&(e.dataIndex=t,e.dataType=this.dataType,e.seriesIndex=i&&i.seriesIndex,"group"===e.type&&e.traverse(mA,e)),this._graphicEls[t]=e},gA.getItemGraphicEl=function(t){return this._graphicEls[t]},gA.eachItemGraphicEl=function(t,e){d(this._graphicEls,function(i,n){i&&t&&t.call(e,i,n)})},gA.cloneShallow=function(t){if(!t){var e=f(this.dimensions,this.getDimensionInfo,this);t=new pA(e,this.hostModel)}if(t._storage=this._storage,Js(t,this),this._indices){var i=this._indices.constructor;t._indices=new i(this._indices)}else t._indices=null;return t.getRawIndex=t._indices?nl:il,t},gA.wrapMethod=function(t,e){var i=this[t];"function"==typeof i&&(this.__wrappedMethods=this.__wrappedMethods||[],this.__wrappedMethods.push(t),this[t]=function(){var t=i.apply(this,arguments);return e.apply(this,[t].concat(C(arguments)))})},gA.TRANSFERABLE_METHODS=["cloneShallow","downSample","map"],gA.CHANGABLE_METHODS=["filterSelf","selectRange"];var vA=function(t,e){return e=e||{},ul(e.coordDimensions||[],t,{dimsDef:e.dimensionsDefine||t.dimensionsDefine,encodeDef:e.encodeDefine||t.encodeDefine,dimCount:e.dimensionsCount,generateCoord:e.generateCoord,generateCoordCount:e.generateCoordCount})};yl.prototype.parse=function(t){return t},yl.prototype.getSetting=function(t){return this._setting[t]},yl.prototype.contain=function(t){var e=this._extent;return t>=e[0]&&t<=e[1]},yl.prototype.normalize=function(t){var e=this._extent;return e[1]===e[0]?.5:(t-e[0])/(e[1]-e[0])},yl.prototype.scale=function(t){var e=this._extent;return t*(e[1]-e[0])+e[0]},yl.prototype.unionExtent=function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1])},yl.prototype.unionExtentFromData=function(t,e){this.unionExtent(t.getApproximateExtent(e))},yl.prototype.getExtent=function(){return this._extent.slice()},yl.prototype.setExtent=function(t,e){var i=this._extent;isNaN(t)||(i[0]=t),isNaN(e)||(i[1]=e)},yl.prototype.isBlank=function(){return this._isBlank},yl.prototype.setBlank=function(t){this._isBlank=t},yl.prototype.getLabel=null,Xi(yl),Ki(yl,{registerWhenExtend:!0}),xl.createByAxisModel=function(t){var e=t.option,i=e.data,n=i&&f(i,wl);return new xl({categories:n,needCollect:!n,deduplication:!1!==e.dedplication})};var yA=xl.prototype;yA.getOrdinal=function(t){return _l(this).get(t)},yA.parseAndCollect=function(t){var e,i=this._needCollect;if("string"!=typeof t&&!i)return t;if(i&&!this._deduplication)return e=this.categories.length,this.categories[e]=t,e;var n=_l(this);return null==(e=n.get(t))&&(i?(e=this.categories.length,this.categories[e]=t,n.set(t,e)):e=NaN),e};var xA=yl.prototype,_A=yl.extend({type:"ordinal",init:function(t,e){t&&!y(t)||(t=new xl({categories:t})),this._ordinalMeta=t,this._extent=e||[0,t.categories.length-1]},parse:function(t){return"string"==typeof t?this._ordinalMeta.getOrdinal(t):Math.round(t)},contain:function(t){return t=this.parse(t),xA.contain.call(this,t)&&null!=this._ordinalMeta.categories[t]},normalize:function(t){return xA.normalize.call(this,this.parse(t))},scale:function(t){return Math.round(xA.scale.call(this,t))},getTicks:function(){for(var t=[],e=this._extent,i=e[0];i<=e[1];)t.push(i),i++;return t},getLabel:function(t){if(!this.isBlank())return this._ordinalMeta.categories[t]},count:function(){return this._extent[1]-this._extent[0]+1},unionExtentFromData:function(t,e){this.unionExtent(t.getApproximateExtent(e))},getOrdinalMeta:function(){return this._ordinalMeta},niceTicks:B,niceExtent:B});_A.create=function(){return new _A};var wA=Vo,bA=Vo,SA=yl.extend({type:"interval",_interval:0,_intervalPrecision:2,setExtent:function(t,e){var i=this._extent;isNaN(t)||(i[0]=parseFloat(t)),isNaN(e)||(i[1]=parseFloat(e))},unionExtent:function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1]),SA.prototype.setExtent.call(this,e[0],e[1])},getInterval:function(){return this._interval},setInterval:function(t){this._interval=t,this._niceExtent=this._extent.slice(),this._intervalPrecision=Sl(t)},getTicks:function(){return Tl(this._interval,this._extent,this._niceExtent,this._intervalPrecision)},getLabel:function(t,e){if(null==t)return"";var i=e&&e.precision;return null==i?i=Wo(t)||0:"auto"===i&&(i=this._intervalPrecision),t=bA(t,i,!0),Qo(t)},niceTicks:function(t,e,i){t=t||5;var n=this._extent,o=n[1]-n[0];if(isFinite(o)){o<0&&(o=-o,n.reverse());var a=bl(n,t,e,i);this._intervalPrecision=a.intervalPrecision,this._interval=a.interval,this._niceExtent=a.niceTickExtent}},niceExtent:function(t){var e=this._extent;if(e[0]===e[1])if(0!==e[0]){var i=e[0];t.fixMax?e[0]-=i/2:(e[1]+=i/2,e[0]-=i/2)}else e[1]=1;var n=e[1]-e[0];isFinite(n)||(e[0]=0,e[1]=1),this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval);var o=this._interval;t.fixMin||(e[0]=bA(Math.floor(e[0]/o)*o)),t.fixMax||(e[1]=bA(Math.ceil(e[1]/o)*o))}});SA.create=function(){return new SA};var MA="__ec_stack_",IA="undefined"!=typeof Float32Array?Float32Array:Array,TA={seriesType:"bar",plan:KI(),reset:function(t){if(El(t)&&Rl(t)){var e=t.getData(),i=t.coordinateSystem,n=i.getBaseAxis(),o=i.getOtherAxis(n),a=e.mapDimension(o.dim),r=e.mapDimension(n.dim),s=o.isHorizontal(),l=s?0:1,u=Nl(kl([t]),n,t).width;return u>.5||(u=.5),{progress:function(t,e){for(var n,h=new IA(2*t.count),c=[],d=[],f=0;null!=(n=t.next());)d[l]=e.get(a,n),d[1-l]=e.get(r,n),c=i.dataToPoint(d,null,c),h[f++]=c[0],h[f++]=c[1];e.setLayout({largePoints:h,barWidth:u,valueAxisStart:zl(0,o),valueAxisHorizontal:s})}}}}},AA=SA.prototype,DA=Math.ceil,CA=Math.floor,LA=function(t,e,i,n){for(;i<n;){var o=i+n>>>1;t[o][1]<e?i=o+1:n=o}return i},kA=SA.extend({type:"time",getLabel:function(t){var e=this._stepLvl,i=new Date(t);return ra(e[0],i,this.getSetting("useUTC"))},niceExtent:function(t){var e=this._extent;if(e[0]===e[1]&&(e[0]-=864e5,e[1]+=864e5),e[1]===-1/0&&e[0]===1/0){var i=new Date;e[1]=+new Date(i.getFullYear(),i.getMonth(),i.getDate()),e[0]=e[1]-864e5}this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval);var n=this._interval;t.fixMin||(e[0]=Vo(CA(e[0]/n)*n)),t.fixMax||(e[1]=Vo(DA(e[1]/n)*n))},niceTicks:function(t,e,i){t=t||10;var n=this._extent,o=n[1]-n[0],a=o/t;null!=e&&a<e&&(a=e),null!=i&&a>i&&(a=i);var r=PA.length,s=LA(PA,a,0,r),l=PA[Math.min(s,r-1)],u=l[1];"year"===l[0]&&(u*=Ko(o/u/t,!0));var h=this.getSetting("useUTC")?0:60*new Date(+n[0]||+n[1]).getTimezoneOffset()*1e3,c=[Math.round(DA((n[0]-h)/u)*u+h),Math.round(CA((n[1]-h)/u)*u+h)];Il(c,n),this._stepLvl=l,this._interval=u,this._niceExtent=c},parse:function(t){return+jo(t)}});d(["contain","normalize"],function(t){kA.prototype[t]=function(e){return AA[t].call(this,this.parse(e))}});var PA=[["hh:mm:ss",1e3],["hh:mm:ss",5e3],["hh:mm:ss",1e4],["hh:mm:ss",15e3],["hh:mm:ss",3e4],["hh:mm\nMM-dd",6e4],["hh:mm\nMM-dd",3e5],["hh:mm\nMM-dd",6e5],["hh:mm\nMM-dd",9e5],["hh:mm\nMM-dd",18e5],["hh:mm\nMM-dd",36e5],["hh:mm\nMM-dd",72e5],["hh:mm\nMM-dd",216e5],["hh:mm\nMM-dd",432e5],["MM-dd\nyyyy",864e5],["MM-dd\nyyyy",1728e5],["MM-dd\nyyyy",2592e5],["MM-dd\nyyyy",3456e5],["MM-dd\nyyyy",432e6],["MM-dd\nyyyy",5184e5],["week",6048e5],["MM-dd\nyyyy",864e6],["week",12096e5],["week",18144e5],["month",26784e5],["week",36288e5],["month",53568e5],["week",6048e6],["quarter",8208e6],["month",107136e5],["month",13392e6],["half-year",16416e6],["month",214272e5],["month",26784e6],["year",32832e6]];kA.create=function(t){return new kA({useUTC:t.ecModel.get("useUTC")})};var NA=yl.prototype,OA=SA.prototype,EA=Wo,RA=Vo,zA=Math.floor,BA=Math.ceil,VA=Math.pow,GA=Math.log,FA=yl.extend({type:"log",base:10,$constructor:function(){yl.apply(this,arguments),this._originalScale=new SA},getTicks:function(){var t=this._originalScale,e=this._extent,i=t.getExtent();return f(OA.getTicks.call(this),function(n){var o=Vo(VA(this.base,n));return o=n===e[0]&&t.__fixMin?Bl(o,i[0]):o,o=n===e[1]&&t.__fixMax?Bl(o,i[1]):o},this)},getLabel:OA.getLabel,scale:function(t){return t=NA.scale.call(this,t),VA(this.base,t)},setExtent:function(t,e){var i=this.base;t=GA(t)/GA(i),e=GA(e)/GA(i),OA.setExtent.call(this,t,e)},getExtent:function(){var t=this.base,e=NA.getExtent.call(this);e[0]=VA(t,e[0]),e[1]=VA(t,e[1]);var i=this._originalScale,n=i.getExtent();return i.__fixMin&&(e[0]=Bl(e[0],n[0])),i.__fixMax&&(e[1]=Bl(e[1],n[1])),e},unionExtent:function(t){this._originalScale.unionExtent(t);var e=this.base;t[0]=GA(t[0])/GA(e),t[1]=GA(t[1])/GA(e),NA.unionExtent.call(this,t)},unionExtentFromData:function(t,e){this.unionExtent(t.getApproximateExtent(e))},niceTicks:function(t){t=t||10;var e=this._extent,i=e[1]-e[0];if(!(i===1/0||i<=0)){var n=Yo(i);for(t/i*n<=.5&&(n*=10);!isNaN(n)&&Math.abs(n)<1&&Math.abs(n)>0;)n*=10;var o=[Vo(BA(e[0]/n)*n),Vo(zA(e[1]/n)*n)];this._interval=n,this._niceExtent=o}},niceExtent:function(t){OA.niceExtent.call(this,t);var e=this._originalScale;e.__fixMin=t.fixMin,e.__fixMax=t.fixMax}});d(["contain","normalize"],function(t){FA.prototype[t]=function(e){return e=GA(e)/GA(this.base),NA[t].call(this,e)}}),FA.create=function(){return new FA};var WA={getMin:function(t){var e=this.option,i=t||null==e.rangeStart?e.min:e.rangeStart;return this.axis&&null!=i&&"dataMin"!==i&&"function"!=typeof i&&!I(i)&&(i=this.axis.scale.parse(i)),i},getMax:function(t){var e=this.option,i=t||null==e.rangeEnd?e.max:e.rangeEnd;return this.axis&&null!=i&&"dataMax"!==i&&"function"!=typeof i&&!I(i)&&(i=this.axis.scale.parse(i)),i},getNeedCrossZero:function(){var t=this.option;return null==t.rangeStart&&null==t.rangeEnd&&!t.scale},getCoordSysModel:B,setRange:function(t,e){this.option.rangeStart=t,this.option.rangeEnd=e},resetRange:function(){this.option.rangeStart=this.option.rangeEnd=null}},HA=Zn({type:"triangle",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var i=e.cx,n=e.cy,o=e.width/2,a=e.height/2;t.moveTo(i,n-a),t.lineTo(i+o,n+a),t.lineTo(i-o,n+a),t.closePath()}}),ZA=Zn({type:"diamond",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var i=e.cx,n=e.cy,o=e.width/2,a=e.height/2;t.moveTo(i,n-a),t.lineTo(i+o,n),t.lineTo(i,n+a),t.lineTo(i-o,n),t.closePath()}}),UA=Zn({type:"pin",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var i=e.x,n=e.y,o=e.width/5*3,a=Math.max(o,e.height),r=o/2,s=r*r/(a-r),l=n-a+r+s,u=Math.asin(s/r),h=Math.cos(u)*r,c=Math.sin(u),d=Math.cos(u),f=.6*r,p=.7*r;t.moveTo(i-h,l+s),t.arc(i,l,r,Math.PI-u,2*Math.PI+u),t.bezierCurveTo(i+h-c*f,l+s+d*f,i,n-p,i,n),t.bezierCurveTo(i,n-p,i-h+c*f,l+s+d*f,i-h,l+s),t.closePath()}}),XA=Zn({type:"arrow",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var i=e.height,n=e.width,o=e.x,a=e.y,r=n/3*2;t.moveTo(o,a),t.lineTo(o+r,a+i),t.lineTo(o,a+i/4*3),t.lineTo(o-r,a+i),t.lineTo(o,a),t.closePath()}}),jA={line:function(t,e,i,n,o){o.x1=t,o.y1=e+n/2,o.x2=t+i,o.y2=e+n/2},rect:function(t,e,i,n,o){o.x=t,o.y=e,o.width=i,o.height=n},roundRect:function(t,e,i,n,o){o.x=t,o.y=e,o.width=i,o.height=n,o.r=Math.min(i,n)/4},square:function(t,e,i,n,o){var a=Math.min(i,n);o.x=t,o.y=e,o.width=a,o.height=a},circle:function(t,e,i,n,o){o.cx=t+i/2,o.cy=e+n/2,o.r=Math.min(i,n)/2},diamond:function(t,e,i,n,o){o.cx=t+i/2,o.cy=e+n/2,o.width=i,o.height=n},pin:function(t,e,i,n,o){o.x=t+i/2,o.y=e+n/2,o.width=i,o.height=n},arrow:function(t,e,i,n,o){o.x=t+i/2,o.y=e+n/2,o.width=i,o.height=n},triangle:function(t,e,i,n,o){o.cx=t+i/2,o.cy=e+n/2,o.width=i,o.height=n}},YA={};d({line:xM,rect:vM,roundRect:vM,square:vM,circle:rM,diamond:ZA,pin:UA,arrow:XA,triangle:HA},function(t,e){YA[e]=new t});var qA=Zn({type:"symbol",shape:{symbolType:"",x:0,y:0,width:0,height:0},beforeBrush:function(){var t=this.style;"pin"===this.shape.symbolType&&"inside"===t.textPosition&&(t.textPosition=["50%","40%"],t.textAlign="center",t.textVerticalAlign="middle")},buildPath:function(t,e,i){var n=e.symbolType,o=YA[n];"none"!==e.symbolType&&(o||(o=YA[n="rect"]),jA[n](e.x,e.y,e.width,e.height,o.shape),o.buildPath(t,o.shape,i))}}),KA={isDimensionStacked:fl,enableDataStack:dl,getStackedDimension:pl},$A=(Object.freeze||Object)({createList:function(t){return gl(t.getSource(),t)},getLayoutRect:ha,dataStack:KA,createScale:function(t,e){var i=e;Po.isInstance(e)||h(i=new Po(e),WA);var n=Wl(i);return n.setExtent(t[0],t[1]),Fl(n,i),n},mixinAxisModelCommonMethods:function(t){h(t,WA)},completeDimensions:ul,createDimensions:vA,createSymbol:$l}),JA=1e-8;tu.prototype={constructor:tu,properties:null,getBoundingRect:function(){var t=this._rect;if(t)return t;for(var e=Number.MAX_VALUE,i=[e,e],n=[-e,-e],o=[],a=[],r=this.geometries,s=0;s<r.length;s++)"polygon"===r[s].type&&(dn(r[s].exterior,o,a),tt(i,i,o),et(n,n,a));return 0===s&&(i[0]=i[1]=n[0]=n[1]=0),this._rect=new de(i[0],i[1],n[0]-i[0],n[1]-i[1])},contain:function(t){var e=this.getBoundingRect(),i=this.geometries;if(!e.contain(t[0],t[1]))return!1;t:for(var n=0,o=i.length;n<o;n++)if("polygon"===i[n].type){var a=i[n].exterior,r=i[n].interiors;if(Ql(a,t[0],t[1])){for(var s=0;s<(r?r.length:0);s++)if(Ql(r[s]))continue t;return!0}}return!1},transformTo:function(t,e,i,n){var o=this.getBoundingRect(),a=o.width/o.height;i?n||(n=i/a):i=a*n;for(var r=new de(t,e,i,n),s=o.calculateTransform(r),l=this.geometries,u=0;u<l.length;u++)if("polygon"===l[u].type){for(var h=l[u].exterior,c=l[u].interiors,d=0;d<h.length;d++)Q(h[d],h[d],s);for(var f=0;f<(c?c.length:0);f++)for(d=0;d<c[f].length;d++)Q(c[f][d],c[f][d],s)}(o=this._rect).copy(r),this.center=[o.x+o.width/2,o.y+o.height/2]},cloneShallow:function(t){null==t&&(t=this.name);var e=new tu(t,this.geometries,this.center);return e._rect=this._rect,e.transformTo=null,e}};var QA=function(t){return eu(t),f(g(t.features,function(t){return t.geometry&&t.properties&&t.geometry.coordinates.length>0}),function(t){var e=t.properties,i=t.geometry,n=i.coordinates,o=[];"Polygon"===i.type&&o.push({type:"polygon",exterior:n[0],interiors:n.slice(1)}),"MultiPolygon"===i.type&&d(n,function(t){t[0]&&o.push({type:"polygon",exterior:t[0],interiors:t.slice(1)})});var a=new tu(e.name,o,e.cp);return a.properties=e,a})},tD=Bi(),eD=[0,1],iD=function(t,e,i){this.dim=t,this.scale=e,this._extent=i||[0,0],this.inverse=!1,this.onBand=!1};iD.prototype={constructor:iD,contain:function(t){var e=this._extent,i=Math.min(e[0],e[1]),n=Math.max(e[0],e[1]);return t>=i&&t<=n},containData:function(t){return this.contain(this.dataToCoord(t))},getExtent:function(){return this._extent.slice()},getPixelPrecision:function(t){return Ho(t||this.scale.getExtent(),this._extent)},setExtent:function(t,e){var i=this._extent;i[0]=t,i[1]=e},dataToCoord:function(t,e){var i=this._extent,n=this.scale;return t=n.normalize(t),this.onBand&&"ordinal"===n.type&&vu(i=i.slice(),n.count()),zo(t,eD,i,e)},coordToData:function(t,e){var i=this._extent,n=this.scale;this.onBand&&"ordinal"===n.type&&vu(i=i.slice(),n.count());var o=zo(t,i,eD,e);return this.scale.scale(o)},pointToData:function(t,e){},getTicksCoords:function(t){var e=(t=t||{}).tickModel||this.getTickModel(),i=ou(this,e),n=f(i.ticks,function(t){return{coord:this.dataToCoord(t),tickValue:t}},this),o=e.get("alignWithLabel");return yu(this,n,i.tickCategoryInterval,o,t.clamp),n},getViewLabels:function(){return nu(this).labels},getLabelModel:function(){return this.model.getModel("axisLabel")},getTickModel:function(){return this.model.getModel("axisTick")},getBandWidth:function(){var t=this._extent,e=this.scale.getExtent(),i=e[1]-e[0]+(this.onBand?1:0);0===i&&(i=1);var n=Math.abs(t[1]-t[0]);return Math.abs(n)/i},isHorizontal:null,getRotate:null,calculateCategoryInterval:function(){return fu(this)}};var nD=QA,oD={};d(["map","each","filter","indexOf","inherits","reduce","filter","bind","curry","isArray","isString","isObject","isFunction","extend","defaults","clone","merge"],function(t){oD[t]=aw[t]});var aD={};d(["extendShape","extendPath","makePath","makeImage","mergePath","resizePath","createIcon","setHoverStyle","setLabelStyle","setTextStyle","setText","getFont","updateProps","initProps","getTransform","clipPointsByRect","clipRectByRect","Group","Image","Text","Circle","Sector","Ring","Polygon","Polyline","Rect","Line","BezierCurve","Arc","IncrementalDisplayable","CompoundPath","LinearGradient","RadialGradient","BoundingRect"],function(t){aD[t]=RM[t]}),jI.extend({type:"series.line",dependencies:["grid","polar"],getInitialData:function(t,e){return gl(this.getSource(),this)},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,hoverAnimation:!0,clipOverflow:!0,label:{position:"top"},lineStyle:{width:2,type:"solid"},step:!1,smooth:!1,smoothMonotone:null,symbol:"emptyCircle",symbolSize:4,symbolRotate:null,showSymbol:!0,showAllSymbol:"auto",connectNulls:!1,sampling:"none",animationEasing:"linear",progressive:0,hoverLayerThreshold:1/0}});var rD=_u.prototype,sD=_u.getSymbolSize=function(t,e){var i=t.getItemVisual(e,"symbolSize");return i instanceof Array?i.slice():[+i,+i]};rD._createSymbol=function(t,e,i,n,o){this.removeAll();var a=$l(t,-1,-1,2,2,e.getItemVisual(i,"color"),o);a.attr({z2:100,culling:!0,scale:wu(n)}),a.drift=bu,this._symbolType=t,this.add(a)},rD.stopSymbolAnimation=function(t){this.childAt(0).stopAnimation(t)},rD.getSymbolPath=function(){return this.childAt(0)},rD.getScale=function(){return this.childAt(0).scale},rD.highlight=function(){this.childAt(0).trigger("emphasis")},rD.downplay=function(){this.childAt(0).trigger("normal")},rD.setZ=function(t,e){var i=this.childAt(0);i.zlevel=t,i.z=e},rD.setDraggable=function(t){var e=this.childAt(0);e.draggable=t,e.cursor=t?"move":"pointer"},rD.updateData=function(t,e,i){this.silent=!1;var n=t.getItemVisual(e,"symbol")||"circle",o=t.hostModel,a=sD(t,e),r=n!==this._symbolType;if(r){var s=t.getItemVisual(e,"symbolKeepAspect");this._createSymbol(n,t,e,a,s)}else(l=this.childAt(0)).silent=!1,Mo(l,{scale:wu(a)},o,e);if(this._updateCommon(t,e,a,i),r){var l=this.childAt(0),u=i&&i.fadeIn,h={scale:l.scale.slice()};u&&(h.style={opacity:l.style.opacity}),l.scale=[0,0],u&&(l.style.opacity=0),Io(l,h,o,e)}this._seriesModel=o};var lD=["itemStyle"],uD=["emphasis","itemStyle"],hD=["label"],cD=["emphasis","label"];rD._updateCommon=function(t,e,i,n){var o=this.childAt(0),r=t.hostModel,s=t.getItemVisual(e,"color");"image"!==o.type&&o.useStyle({strokeNoScale:!0});var l=n&&n.itemStyle,u=n&&n.hoverItemStyle,h=n&&n.symbolRotate,c=n&&n.symbolOffset,d=n&&n.labelModel,f=n&&n.hoverLabelModel,p=n&&n.hoverAnimation,g=n&&n.cursorStyle;if(!n||t.hasItemOption){var m=n&&n.itemModel?n.itemModel:t.getItemModel(e);l=m.getModel(lD).getItemStyle(["color"]),u=m.getModel(uD).getItemStyle(),h=m.getShallow("symbolRotate"),c=m.getShallow("symbolOffset"),d=m.getModel(hD),f=m.getModel(cD),p=m.getShallow("hoverAnimation"),g=m.getShallow("cursor")}else u=a({},u);var v=o.style;o.attr("rotation",(h||0)*Math.PI/180||0),c&&o.attr("position",[Bo(c[0],i[0]),Bo(c[1],i[1])]),g&&o.attr("cursor",g),o.setColor(s,n&&n.symbolInnerColor),o.setStyle(l);var y=t.getItemVisual(e,"opacity");null!=y&&(v.opacity=y);var x=t.getItemVisual(e,"liftZ"),_=o.__z2Origin;null!=x?null==_&&(o.__z2Origin=o.z2,o.z2+=x):null!=_&&(o.z2=_,o.__z2Origin=null);var w=n&&n.useNameLabel;po(v,u,d,f,{labelFetcher:r,labelDataIndex:e,defaultText:function(e,i){return w?t.getName(e):xu(t,e)},isRectText:!0,autoColor:s}),o.off("mouseover").off("mouseout").off("emphasis").off("normal"),o.hoverStyle=u,co(o),o.__symbolOriginalScale=wu(i),p&&r.isAnimationEnabled()&&o.on("mouseover",Su).on("mouseout",Mu).on("emphasis",Iu).on("normal",Tu)},rD.fadeOut=function(t,e){var i=this.childAt(0);this.silent=i.silent=!0,!(e&&e.keepLabel)&&(i.style.text=null),Mo(i,{style:{opacity:0},scale:[0,0]},this._seriesModel,this.dataIndex,t)},u(_u,tb);var dD=Au.prototype;dD.updateData=function(t,e){e=Cu(e);var i=this.group,n=t.hostModel,o=this._data,a=this._symbolCtor,r=Lu(t);o||i.removeAll(),t.diff(o).add(function(n){var o=t.getItemLayout(n);if(Du(t,o,n,e)){var s=new a(t,n,r);s.attr("position",o),t.setItemGraphicEl(n,s),i.add(s)}}).update(function(s,l){var u=o.getItemGraphicEl(l),h=t.getItemLayout(s);Du(t,h,s,e)?(u?(u.updateData(t,s,r),Mo(u,{position:h},n)):(u=new a(t,s)).attr("position",h),i.add(u),t.setItemGraphicEl(s,u)):i.remove(u)}).remove(function(t){var e=o.getItemGraphicEl(t);e&&e.fadeOut(function(){i.remove(e)})}).execute(),this._data=t},dD.isPersistent=function(){return!0},dD.updateLayout=function(){var t=this._data;t&&t.eachItemGraphicEl(function(e,i){var n=t.getItemLayout(i);e.attr("position",n)})},dD.incrementalPrepareUpdate=function(t){this._seriesScope=Lu(t),this._data=null,this.group.removeAll()},dD.incrementalUpdate=function(t,e,i){i=Cu(i);for(var n=t.start;n<t.end;n++){var o=e.getItemLayout(n);if(Du(e,o,n,i)){var a=new this._symbolCtor(e,n,this._seriesScope);a.traverse(function(t){t.isGroup||(t.incremental=t.useHoverLayer=!0)}),a.attr("position",o),this.group.add(a),e.setItemGraphicEl(n,a)}}},dD.remove=function(t){var e=this.group,i=this._data;i&&t?i.eachItemGraphicEl(function(t){t.fadeOut(function(){e.remove(t)})}):e.removeAll()};var fD=function(t,e,i,n,o,a,r,s){for(var l=Ou(t,e),u=[],h=[],c=[],d=[],f=[],p=[],g=[],m=ku(o,e,r),v=ku(a,t,s),y=0;y<l.length;y++){var x=l[y],_=!0;switch(x.cmd){case"=":var w=t.getItemLayout(x.idx),b=e.getItemLayout(x.idx1);(isNaN(w[0])||isNaN(w[1]))&&(w=b.slice()),u.push(w),h.push(b),c.push(i[x.idx]),d.push(n[x.idx1]),g.push(e.getRawIndex(x.idx1));break;case"+":S=x.idx;u.push(o.dataToPoint([e.get(m.dataDimsForPoint[0],S),e.get(m.dataDimsForPoint[1],S)])),h.push(e.getItemLayout(S).slice()),c.push(Nu(m,o,e,S)),d.push(n[S]),g.push(e.getRawIndex(S));break;case"-":var S=x.idx,M=t.getRawIndex(S);M!==S?(u.push(t.getItemLayout(S)),h.push(a.dataToPoint([t.get(v.dataDimsForPoint[0],S),t.get(v.dataDimsForPoint[1],S)])),c.push(i[S]),d.push(Nu(v,a,t,S)),g.push(M)):_=!1}_&&(f.push(x),p.push(p.length))}p.sort(function(t,e){return g[t]-g[e]});for(var I=[],T=[],A=[],D=[],C=[],y=0;y<p.length;y++){S=p[y];I[y]=u[S],T[y]=h[S],A[y]=c[S],D[y]=d[S],C[y]=f[S]}return{current:I,next:T,stackedOnCurrent:A,stackedOnNext:D,status:C}},pD=tt,gD=et,mD=Z,vD=G,yD=[],xD=[],_D=[],wD=kn.extend({type:"ec-polyline",shape:{points:[],smooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},style:{fill:null,stroke:"#000"},brush:lM(kn.prototype.brush),buildPath:function(t,e){var i=e.points,n=0,o=i.length,a=Vu(i,e.smoothConstraint);if(e.connectNulls){for(;o>0&&Eu(i[o-1]);o--);for(;n<o&&Eu(i[n]);n++);}for(;n<o;)n+=Ru(t,i,n,o,o,1,a.min,a.max,e.smooth,e.smoothMonotone,e.connectNulls)+1}}),bD=kn.extend({type:"ec-polygon",shape:{points:[],stackedOnPoints:[],smooth:0,stackedOnSmooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},brush:lM(kn.prototype.brush),buildPath:function(t,e){var i=e.points,n=e.stackedOnPoints,o=0,a=i.length,r=e.smoothMonotone,s=Vu(i,e.smoothConstraint),l=Vu(n,e.smoothConstraint);if(e.connectNulls){for(;a>0&&Eu(i[a-1]);a--);for(;o<a&&Eu(i[o]);o++);}for(;o<a;){var u=Ru(t,i,o,a,a,1,s.min,s.max,e.smooth,r,e.connectNulls);Ru(t,n,o+u-1,u,a,-1,l.min,l.max,e.stackedOnSmooth,r,e.connectNulls),o+=u+1,t.closePath()}}});Tr.extend({type:"line",init:function(){var t=new tb,e=new Au;this.group.add(e.group),this._symbolDraw=e,this._lineGroup=t},render:function(t,e,i){var n=t.coordinateSystem,o=this.group,a=t.getData(),s=t.getModel("lineStyle"),l=t.getModel("areaStyle"),u=a.mapArray(a.getItemLayout),h="polar"===n.type,c=this._coordSys,d=this._symbolDraw,f=this._polyline,p=this._polygon,g=this._lineGroup,m=t.get("animation"),v=!l.isEmpty(),y=l.get("origin"),x=Hu(n,a,ku(n,a,y)),_=t.get("showSymbol"),w=_&&!h&&qu(t,a,n),b=this._data;b&&b.eachItemGraphicEl(function(t,e){t.__temp&&(o.remove(t),b.setItemGraphicEl(e,null))}),_||d.remove(),o.add(g);var S=!h&&t.get("step");f&&c.type===n.type&&S===this._step?(v&&!p?p=this._newPolygon(u,x,n,m):p&&!v&&(g.remove(p),p=this._polygon=null),g.setClipPath(Xu(n,!1,!1,t)),_&&d.updateData(a,{isIgnore:w,clipShape:Xu(n,!1,!0,t)}),a.eachItemGraphicEl(function(t){t.stopAnimation(!0)}),Gu(this._stackedOnPoints,x)&&Gu(this._points,u)||(m?this._updateAnimation(a,x,n,i,S,y):(S&&(u=ju(u,n,S),x=ju(x,n,S)),f.setShape({points:u}),p&&p.setShape({points:u,stackedOnPoints:x})))):(_&&d.updateData(a,{isIgnore:w,clipShape:Xu(n,!1,!0,t)}),S&&(u=ju(u,n,S),x=ju(x,n,S)),f=this._newPolyline(u,n,m),v&&(p=this._newPolygon(u,x,n,m)),g.setClipPath(Xu(n,!0,!1,t)));var M=Yu(a,n)||a.getVisual("color");f.useStyle(r(s.getLineStyle(),{fill:"none",stroke:M,lineJoin:"bevel"}));var I=t.get("smooth");if(I=Fu(t.get("smooth")),f.setShape({smooth:I,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")}),p){var T=a.getCalculationInfo("stackedOnSeries"),A=0;p.useStyle(r(l.getAreaStyle(),{fill:M,opacity:.7,lineJoin:"bevel"})),T&&(A=Fu(T.get("smooth"))),p.setShape({smooth:I,stackedOnSmooth:A,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")})}this._data=a,this._coordSys=n,this._stackedOnPoints=x,this._points=u,this._step=S,this._valueOrigin=y},dispose:function(){},highlight:function(t,e,i,n){var o=t.getData(),a=zi(o,n);if(!(a instanceof Array)&&null!=a&&a>=0){var r=o.getItemGraphicEl(a);if(!r){var s=o.getItemLayout(a);if(!s)return;(r=new _u(o,a)).position=s,r.setZ(t.get("zlevel"),t.get("z")),r.ignore=isNaN(s[0])||isNaN(s[1]),r.__temp=!0,o.setItemGraphicEl(a,r),r.stopSymbolAnimation(!0),this.group.add(r)}r.highlight()}else Tr.prototype.highlight.call(this,t,e,i,n)},downplay:function(t,e,i,n){var o=t.getData(),a=zi(o,n);if(null!=a&&a>=0){var r=o.getItemGraphicEl(a);r&&(r.__temp?(o.setItemGraphicEl(a,null),this.group.remove(r)):r.downplay())}else Tr.prototype.downplay.call(this,t,e,i,n)},_newPolyline:function(t){var e=this._polyline;return e&&this._lineGroup.remove(e),e=new wD({shape:{points:t},silent:!0,z2:10}),this._lineGroup.add(e),this._polyline=e,e},_newPolygon:function(t,e){var i=this._polygon;return i&&this._lineGroup.remove(i),i=new bD({shape:{points:t,stackedOnPoints:e},silent:!0}),this._lineGroup.add(i),this._polygon=i,i},_updateAnimation:function(t,e,i,n,o,a){var r=this._polyline,s=this._polygon,l=t.hostModel,u=fD(this._data,t,this._stackedOnPoints,e,this._coordSys,i,this._valueOrigin,a),h=u.current,c=u.stackedOnCurrent,d=u.next,f=u.stackedOnNext;o&&(h=ju(u.current,i,o),c=ju(u.stackedOnCurrent,i,o),d=ju(u.next,i,o),f=ju(u.stackedOnNext,i,o)),r.shape.__points=u.current,r.shape.points=h,Mo(r,{shape:{points:d}},l),s&&(s.setShape({points:h,stackedOnPoints:c}),Mo(s,{shape:{points:d,stackedOnPoints:f}},l));for(var p=[],g=u.status,m=0;m<g.length;m++)if("="===g[m].cmd){var v=t.getItemGraphicEl(g[m].idx1);v&&p.push({el:v,ptIdx:m})}r.animators&&r.animators.length&&r.animators[0].during(function(){for(var t=0;t<p.length;t++)p[t].el.attr("position",r.shape.__points[p[t].ptIdx])})},remove:function(t){var e=this.group,i=this._data;this._lineGroup.removeAll(),this._symbolDraw.remove(!0),i&&i.eachItemGraphicEl(function(t,n){t.__temp&&(e.remove(t),i.setItemGraphicEl(n,null))}),this._polyline=this._polygon=this._coordSys=this._points=this._stackedOnPoints=this._data=null}});var SD=function(t,e,i){return{seriesType:t,performRawSeries:!0,reset:function(t,n,o){var a=t.getData(),r=t.get("symbol")||e,s=t.get("symbolSize"),l=t.get("symbolKeepAspect");if(a.setVisual({legendSymbol:i||r,symbol:r,symbolSize:s,symbolKeepAspect:l}),!n.isSeriesFiltered(t)){var u="function"==typeof s;return{dataEach:a.hasItemOption||u?function(e,i){if("function"==typeof s){var n=t.getRawValue(i),o=t.getDataParams(i);e.setItemVisual(i,"symbolSize",s(n,o))}if(e.hasItemOption){var a=e.getItemModel(i),r=a.getShallow("symbol",!0),l=a.getShallow("symbolSize",!0),u=a.getShallow("symbolKeepAspect",!0);null!=r&&e.setItemVisual(i,"symbol",r),null!=l&&e.setItemVisual(i,"symbolSize",l),null!=u&&e.setItemVisual(i,"symbolKeepAspect",u)}}:null}}}}},MD=function(t){return{seriesType:t,plan:KI(),reset:function(t){var e=t.getData(),i=t.coordinateSystem,n=t.pipelineContext.large;if(i){var o=f(i.dimensions,function(t){return e.mapDimension(t)}).slice(0,2),a=o.length,r=e.getCalculationInfo("stackResultDimension");return fl(e,o[0])&&(o[0]=r),fl(e,o[1])&&(o[1]=r),a&&{progress:function(t,e){for(var r=t.end-t.start,s=n&&new Float32Array(r*a),l=t.start,u=0,h=[],c=[];l<t.end;l++){var d;if(1===a)f=e.get(o[0],l),d=!isNaN(f)&&i.dataToPoint(f,null,c);else{var f=h[0]=e.get(o[0],l),p=h[1]=e.get(o[1],l);d=!isNaN(f)&&!isNaN(p)&&i.dataToPoint(h,null,c)}n?(s[u++]=d?d[0]:NaN,s[u++]=d?d[1]:NaN):e.setItemLayout(l,d&&d.slice()||[NaN,NaN])}n&&e.setLayout("symbolPoints",s)}}}}}},ID={average:function(t){for(var e=0,i=0,n=0;n<t.length;n++)isNaN(t[n])||(e+=t[n],i++);return 0===i?NaN:e/i},sum:function(t){for(var e=0,i=0;i<t.length;i++)e+=t[i]||0;return e},max:function(t){for(var e=-1/0,i=0;i<t.length;i++)t[i]>e&&(e=t[i]);return isFinite(e)?e:NaN},min:function(t){for(var e=1/0,i=0;i<t.length;i++)t[i]<e&&(e=t[i]);return isFinite(e)?e:NaN},nearest:function(t){return t[0]}},TD=function(t,e){return Math.round(t.length/2)},AD=function(t){this._axes={},this._dimList=[],this.name=t||""};AD.prototype={constructor:AD,type:"cartesian",getAxis:function(t){return this._axes[t]},getAxes:function(){return f(this._dimList,$u,this)},getAxesByScale:function(t){return t=t.toLowerCase(),g(this.getAxes(),function(e){return e.scale.type===t})},addAxis:function(t){var e=t.dim;this._axes[e]=t,this._dimList.push(e)},dataToCoord:function(t){return this._dataCoordConvert(t,"dataToCoord")},coordToData:function(t){return this._dataCoordConvert(t,"coordToData")},_dataCoordConvert:function(t,e){for(var i=this._dimList,n=t instanceof Array?[]:{},o=0;o<i.length;o++){var a=i[o],r=this._axes[a];n[a]=r[e](t[a])}return n}},Ju.prototype={constructor:Ju,type:"cartesian2d",dimensions:["x","y"],getBaseAxis:function(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAxis("x")},containPoint:function(t){var e=this.getAxis("x"),i=this.getAxis("y");return e.contain(e.toLocalCoord(t[0]))&&i.contain(i.toLocalCoord(t[1]))},containData:function(t){return this.getAxis("x").containData(t[0])&&this.getAxis("y").containData(t[1])},dataToPoint:function(t,e,i){var n=this.getAxis("x"),o=this.getAxis("y");return i=i||[],i[0]=n.toGlobalCoord(n.dataToCoord(t[0])),i[1]=o.toGlobalCoord(o.dataToCoord(t[1])),i},clampData:function(t,e){var i=this.getAxis("x").scale,n=this.getAxis("y").scale,o=i.getExtent(),a=n.getExtent(),r=i.parse(t[0]),s=n.parse(t[1]);return e=e||[],e[0]=Math.min(Math.max(Math.min(o[0],o[1]),r),Math.max(o[0],o[1])),e[1]=Math.min(Math.max(Math.min(a[0],a[1]),s),Math.max(a[0],a[1])),e},pointToData:function(t,e){var i=this.getAxis("x"),n=this.getAxis("y");return e=e||[],e[0]=i.coordToData(i.toLocalCoord(t[0])),e[1]=n.coordToData(n.toLocalCoord(t[1])),e},getOtherAxis:function(t){return this.getAxis("x"===t.dim?"y":"x")}},u(Ju,AD);var DD=function(t,e,i,n,o){iD.call(this,t,e,i),this.type=n||"value",this.position=o||"bottom"};DD.prototype={constructor:DD,index:0,getAxesOnZeroOf:null,model:null,isHorizontal:function(){var t=this.position;return"top"===t||"bottom"===t},getGlobalExtent:function(t){var e=this.getExtent();return e[0]=this.toGlobalCoord(e[0]),e[1]=this.toGlobalCoord(e[1]),t&&e[0]>e[1]&&e.reverse(),e},getOtherAxis:function(){this.grid.getOtherAxis()},pointToData:function(t,e){return this.coordToData(this.toLocalCoord(t["x"===this.dim?0:1]),e)},toLocalCoord:null,toGlobalCoord:null},u(DD,iD);var CD={show:!0,zlevel:0,z:0,inverse:!1,name:"",nameLocation:"end",nameRotate:null,nameTruncate:{maxWidth:null,ellipsis:"...",placeholder:"."},nameTextStyle:{},nameGap:15,silent:!1,triggerEvent:!1,tooltip:{show:!1},axisPointer:{},axisLine:{show:!0,onZero:!0,onZeroAxisIndex:null,lineStyle:{color:"#333",width:1,type:"solid"},symbol:["none","none"],symbolSize:[10,15]},axisTick:{show:!0,inside:!1,length:5,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,showMinLabel:null,showMaxLabel:null,margin:8,fontSize:12},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},LD={};LD.categoryAxis=n({boundaryGap:!0,deduplication:null,splitLine:{show:!1},axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"}},CD),LD.valueAxis=n({boundaryGap:[0,0],splitNumber:5},CD),LD.timeAxis=r({scale:!0,min:"dataMin",max:"dataMax"},LD.valueAxis),LD.logAxis=r({scale:!0,logBase:10},LD.valueAxis);var kD=["value","category","time","log"],PD=function(t,e,i,a){d(kD,function(r){e.extend({type:t+"Axis."+r,mergeDefaultAndTheme:function(e,o){var a=this.layoutMode,s=a?pa(e):{};n(e,o.getTheme().get(r+"Axis")),n(e,this.getDefaultOption()),e.type=i(t,e),a&&fa(e,s,a)},optionUpdated:function(){"category"===this.option.type&&(this.__ordinalMeta=xl.createByAxisModel(this))},getCategories:function(t){var e=this.option;if("category"===e.type)return t?e.data:this.__ordinalMeta.categories},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:o([{},LD[r+"Axis"],a],!0)})}),sI.registerSubTypeDefaulter(t+"Axis",v(i,t))},ND=sI.extend({type:"cartesian2dAxis",axis:null,init:function(){ND.superApply(this,"init",arguments),this.resetRange()},mergeOption:function(){ND.superApply(this,"mergeOption",arguments),this.resetRange()},restoreData:function(){ND.superApply(this,"restoreData",arguments),this.resetRange()},getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid",index:this.option.gridIndex,id:this.option.gridId})[0]}});n(ND.prototype,WA);var OD={offset:0};PD("x",ND,Qu,OD),PD("y",ND,Qu,OD),sI.extend({type:"grid",dependencies:["xAxis","yAxis"],layoutMode:"box",coordinateSystem:null,defaultOption:{show:!1,zlevel:0,z:0,left:"10%",top:60,right:"10%",bottom:60,containLabel:!1,backgroundColor:"rgba(0,0,0,0)",borderWidth:1,borderColor:"#ccc"}});var ED=eh.prototype;ED.type="grid",ED.axisPointerEnabled=!0,ED.getRect=function(){return this._rect},ED.update=function(t,e){var i=this._axesMap;this._updateScale(t,this.model),d(i.x,function(t){Fl(t.scale,t.model)}),d(i.y,function(t){Fl(t.scale,t.model)});var n={};d(i.x,function(t){ih(i,"y",t,n)}),d(i.y,function(t){ih(i,"x",t,n)}),this.resize(this.model,e)},ED.resize=function(t,e,i){function n(){d(a,function(t){var e=t.isHorizontal(),i=e?[0,o.width]:[0,o.height],n=t.inverse?1:0;t.setExtent(i[n],i[1-n]),oh(t,e?o.x:o.y)})}var o=ha(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()});this._rect=o;var a=this._axesList;n(),!i&&t.get("containLabel")&&(d(a,function(t){if(!t.model.get("axisLabel.inside")){var e=Xl(t);if(e){var i=t.isHorizontal()?"height":"width",n=t.model.get("axisLabel.margin");o[i]-=e[i]+n,"top"===t.position?o.y+=e.height+n:"left"===t.position&&(o.x+=e.width+n)}}}),n())},ED.getAxis=function(t,e){var i=this._axesMap[t];if(null!=i){if(null==e)for(var n in i)if(i.hasOwnProperty(n))return i[n];return i[e]}},ED.getAxes=function(){return this._axesList.slice()},ED.getCartesian=function(t,e){if(null!=t&&null!=e){var i="x"+t+"y"+e;return this._coordsMap[i]}w(t)&&(e=t.yAxisIndex,t=t.xAxisIndex);for(var n=0,o=this._coordsList;n<o.length;n++)if(o[n].getAxis("x").index===t||o[n].getAxis("y").index===e)return o[n]},ED.getCartesians=function(){return this._coordsList.slice()},ED.convertToPixel=function(t,e,i){var n=this._findConvertTarget(t,e);return n.cartesian?n.cartesian.dataToPoint(i):n.axis?n.axis.toGlobalCoord(n.axis.dataToCoord(i)):null},ED.convertFromPixel=function(t,e,i){var n=this._findConvertTarget(t,e);return n.cartesian?n.cartesian.pointToData(i):n.axis?n.axis.coordToData(n.axis.toLocalCoord(i)):null},ED._findConvertTarget=function(t,e){var i,n,o=e.seriesModel,a=e.xAxisModel||o&&o.getReferringComponents("xAxis")[0],r=e.yAxisModel||o&&o.getReferringComponents("yAxis")[0],s=e.gridModel,u=this._coordsList;return o?l(u,i=o.coordinateSystem)<0&&(i=null):a&&r?i=this.getCartesian(a.componentIndex,r.componentIndex):a?n=this.getAxis("x",a.componentIndex):r?n=this.getAxis("y",r.componentIndex):s&&s.coordinateSystem===this&&(i=this._coordsList[0]),{cartesian:i,axis:n}},ED.containPoint=function(t){var e=this._coordsList[0];if(e)return e.containPoint(t)},ED._initCartesian=function(t,e,i){function n(i){return function(n,s){if(th(n,t,e)){var l=n.get("position");"x"===i?"top"!==l&&"bottom"!==l&&o[l="bottom"]&&(l="top"===l?"bottom":"top"):"left"!==l&&"right"!==l&&o[l="left"]&&(l="left"===l?"right":"left"),o[l]=!0;var u=new DD(i,Wl(n),[0,0],n.get("type"),l),h="category"===u.type;u.onBand=h&&n.get("boundaryGap"),u.inverse=n.get("inverse"),n.axis=u,u.model=n,u.grid=this,u.index=s,this._axesList.push(u),a[i][s]=u,r[i]++}}}var o={left:!1,right:!1,top:!1,bottom:!1},a={x:{},y:{}},r={x:0,y:0};if(e.eachComponent("xAxis",n("x"),this),e.eachComponent("yAxis",n("y"),this),!r.x||!r.y)return this._axesMap={},void(this._axesList=[]);this._axesMap=a,d(a.x,function(e,i){d(a.y,function(n,o){var a="x"+i+"y"+o,r=new Ju(a);r.grid=this,r.model=t,this._coordsMap[a]=r,this._coordsList.push(r),r.addAxis(e),r.addAxis(n)},this)},this)},ED._updateScale=function(t,e){function i(t,e,i){d(t.mapDimension(e.dim,!0),function(i){e.scale.unionExtentFromData(t,pl(t,i))})}d(this._axesList,function(t){t.scale.setExtent(1/0,-1/0)}),t.eachSeries(function(n){if(rh(n)){var o=ah(n),a=o[0],r=o[1];if(!th(a,e,t)||!th(r,e,t))return;var s=this.getCartesian(a.componentIndex,r.componentIndex),l=n.getData(),u=s.getAxis("x"),h=s.getAxis("y");"list"===l.type&&(i(l,u),i(l,h))}},this)},ED.getTooltipAxes=function(t){var e=[],i=[];return d(this.getCartesians(),function(n){var o=null!=t&&"auto"!==t?n.getAxis(t):n.getBaseAxis(),a=n.getOtherAxis(o);l(e,o)<0&&e.push(o),l(i,a)<0&&i.push(a)}),{baseAxes:e,otherAxes:i}};var RD=["xAxis","yAxis"];eh.create=function(t,e){var i=[];return t.eachComponent("grid",function(n,o){var a=new eh(n,t,e);a.name="grid_"+o,a.resize(n,e,!0),n.coordinateSystem=a,i.push(a)}),t.eachSeries(function(t){if(rh(t)){var e=ah(t),i=e[0],n=e[1],o=i.getCoordSysModel().coordinateSystem;t.coordinateSystem=o.getCartesian(i.componentIndex,n.componentIndex)}}),i},eh.dimensions=eh.prototype.dimensions=Ju.prototype.dimensions,Ga.register("cartesian2d",eh);var zD=Math.PI,BD=function(t,e){this.opt=e,this.axisModel=t,r(e,{labelOffset:0,nameDirection:1,tickDirection:1,labelDirection:1,silent:!0}),this.group=new tb;var i=new tb({position:e.position.slice(),rotation:e.rotation});i.updateTransform(),this._transform=i.transform,this._dumbGroup=i};BD.prototype={constructor:BD,hasBuilder:function(t){return!!VD[t]},add:function(t){VD[t].call(this)},getGroup:function(){return this.group}};var VD={axisLine:function(){var t=this.opt,e=this.axisModel;if(e.get("axisLine.show")){var i=this.axisModel.axis.getExtent(),n=this._transform,o=[i[0],0],r=[i[1],0];n&&(Q(o,o,n),Q(r,r,n));var s=a({lineCap:"round"},e.getModel("axisLine.lineStyle").getLineStyle());this.group.add(new xM(qn({anid:"line",shape:{x1:o[0],y1:o[1],x2:r[0],y2:r[1]},style:s,strokeContainThreshold:t.strokeContainThreshold||5,silent:!0,z2:1})));var l=e.get("axisLine.symbol"),u=e.get("axisLine.symbolSize"),h=e.get("axisLine.symbolOffset")||0;if("number"==typeof h&&(h=[h,h]),null!=l){"string"==typeof l&&(l=[l,l]),"string"!=typeof u&&"number"!=typeof u||(u=[u,u]);var c=u[0],f=u[1];d([{rotate:t.rotation+Math.PI/2,offset:h[0],r:0},{rotate:t.rotation-Math.PI/2,offset:h[1],r:Math.sqrt((o[0]-r[0])*(o[0]-r[0])+(o[1]-r[1])*(o[1]-r[1]))}],function(e,i){if("none"!==l[i]&&null!=l[i]){var n=$l(l[i],-c/2,-f/2,c,f,s.stroke,!0),a=e.r+e.offset,r=[o[0]+a*Math.cos(t.rotation),o[1]-a*Math.sin(t.rotation)];n.attr({rotation:e.rotate,position:r,silent:!0}),this.group.add(n)}},this)}}},axisTickLabel:function(){var t=this.axisModel,e=this.opt,i=ph(this,t,e);hh(t,gh(this,t,e),i)},axisName:function(){var t=this.opt,e=this.axisModel,i=T(t.axisName,e.get("name"));if(i){var n,o=e.get("nameLocation"),r=t.nameDirection,s=e.getModel("nameTextStyle"),l=e.get("nameGap")||0,u=this.axisModel.axis.getExtent(),h=u[0]>u[1]?-1:1,c=["start"===o?u[0]-h*l:"end"===o?u[1]+h*l:(u[0]+u[1])/2,fh(o)?t.labelOffset+r*l:0],d=e.get("nameRotate");null!=d&&(d=d*zD/180);var f;fh(o)?n=GD(t.rotation,null!=d?d:t.rotation,r):(n=lh(t,o,d||0,u),null!=(f=t.axisNameAvailableWidth)&&(f=Math.abs(f/Math.sin(n.rotation)),!isFinite(f)&&(f=null)));var p=s.getFont(),g=e.get("nameTruncate",!0)||{},m=g.ellipsis,v=T(t.nameTruncateMaxWidth,g.maxWidth,f),y=null!=m&&null!=v?QM(i,v,p,m,{minChar:2,placeholder:g.placeholder}):i,x=e.get("tooltip",!0),_=e.mainType,w={componentType:_,name:i,$vars:["name"]};w[_+"Index"]=e.componentIndex;var b=new aM({anid:"name",__fullText:i,__truncatedText:y,position:c,rotation:n.rotation,silent:uh(e),z2:1,tooltip:x&&x.show?a({content:i,formatter:function(){return i},formatterParams:w},x):null});go(b.style,s,{text:y,textFont:p,textFill:s.getTextColor()||e.get("axisLine.lineStyle.color"),textAlign:n.textAlign,textVerticalAlign:n.textVerticalAlign}),e.get("triggerEvent")&&(b.eventData=sh(e),b.eventData.targetType="axisName",b.eventData.name=i),this._dumbGroup.add(b),b.updateTransform(),this.group.add(b),b.decomposeTransform()}}},GD=BD.innerTextLayout=function(t,e,i){var n,o,a=Uo(e-t);return Xo(a)?(o=i>0?"top":"bottom",n="center"):Xo(a-zD)?(o=i>0?"bottom":"top",n="center"):(o="middle",n=a>0&&a<zD?i>0?"right":"left":i>0?"left":"right"),{rotation:a,textAlign:n,textVerticalAlign:o}},FD=d,WD=v,HD=Fs({type:"axis",_axisPointer:null,axisPointerClass:null,render:function(t,e,i,n){this.axisPointerClass&&bh(t),HD.superApply(this,"render",arguments),Ah(this,t,0,i,0,!0)},updateAxisPointer:function(t,e,i,n,o){Ah(this,t,0,i,0,!1)},remove:function(t,e){var i=this._axisPointer;i&&i.remove(e),HD.superApply(this,"remove",arguments)},dispose:function(t,e){Dh(this,e),HD.superApply(this,"dispose",arguments)}}),ZD=[];HD.registerAxisPointerClass=function(t,e){ZD[t]=e},HD.getAxisPointerClass=function(t){return t&&ZD[t]};var UD=["axisLine","axisTickLabel","axisName"],XD=["splitArea","splitLine"],jD=HD.extend({type:"cartesianAxis",axisPointerClass:"CartesianAxisPointer",render:function(t,e,i,n){this.group.removeAll();var o=this._axisGroup;if(this._axisGroup=new tb,this.group.add(this._axisGroup),t.get("show")){var a=t.getCoordSysModel(),r=Ch(a,t),s=new BD(t,r);d(UD,s.add,s),this._axisGroup.add(s.getGroup()),d(XD,function(e){t.get(e+".show")&&this["_"+e](t,a)},this),Co(o,this._axisGroup,t),jD.superCall(this,"render",t,e,i,n)}},remove:function(){this._splitAreaColors=null},_splitLine:function(t,e){var i=t.axis;if(!i.scale.isBlank()){var n=t.getModel("splitLine"),o=n.getModel("lineStyle"),a=o.get("color");a=y(a)?a:[a];for(var s=e.coordinateSystem.getRect(),l=i.isHorizontal(),u=0,h=i.getTicksCoords({tickModel:n}),c=[],d=[],f=o.getLineStyle(),p=0;p<h.length;p++){var g=i.toGlobalCoord(h[p].coord);l?(c[0]=g,c[1]=s.y,d[0]=g,d[1]=s.y+s.height):(c[0]=s.x,c[1]=g,d[0]=s.x+s.width,d[1]=g);var m=u++%a.length,v=h[p].tickValue;this._axisGroup.add(new xM(qn({anid:null!=v?"line_"+h[p].tickValue:null,shape:{x1:c[0],y1:c[1],x2:d[0],y2:d[1]},style:r({stroke:a[m]},f),silent:!0})))}}},_splitArea:function(t,e){var i=t.axis;if(!i.scale.isBlank()){var n=t.getModel("splitArea"),o=n.getModel("areaStyle"),a=o.get("color"),s=e.coordinateSystem.getRect(),l=i.getTicksCoords({tickModel:n,clamp:!0});if(l.length){var u=a.length,h=this._splitAreaColors,c=R(),d=0;if(h)for(m=0;m<l.length;m++){var f=h.get(l[m].tickValue);if(null!=f){d=(f+(u-1)*m)%u;break}}var p=i.toGlobalCoord(l[0].coord),g=o.getAreaStyle();a=y(a)?a:[a];for(var m=1;m<l.length;m++){var v,x,_,w,b=i.toGlobalCoord(l[m].coord);i.isHorizontal()?(v=p,x=s.y,_=b-v,w=s.height,p=v+_):(v=s.x,x=p,_=s.width,p=x+(w=b-x));var S=l[m-1].tickValue;null!=S&&c.set(S,d),this._axisGroup.add(new vM({anid:null!=S?"area_"+S:null,shape:{x:v,y:x,width:_,height:w},style:r({fill:a[d]},g),silent:!0})),d=(d+1)%u}this._splitAreaColors=c}}}});jD.extend({type:"xAxis"}),jD.extend({type:"yAxis"}),Fs({type:"grid",render:function(t,e){this.group.removeAll(),t.get("show")&&this.group.add(new vM({shape:t.coordinateSystem.getRect(),style:r({fill:t.get("backgroundColor")},t.getItemStyle()),silent:!0,z2:-1}))}}),Ps(function(t){t.xAxis&&t.yAxis&&!t.grid&&(t.grid={})}),zs(SD("line","circle","line")),Rs(MD("line")),Ns(zT.PROCESSOR.STATISTIC,function(t){return{seriesType:t,modifyOutputEnd:!0,reset:function(t,e,i){var n=t.getData(),o=t.get("sampling"),a=t.coordinateSystem;if("cartesian2d"===a.type&&o){var r=a.getBaseAxis(),s=a.getOtherAxis(r),l=r.getExtent(),u=l[1]-l[0],h=Math.round(n.count()/u);if(h>1){var c;"string"==typeof o?c=ID[o]:"function"==typeof o&&(c=o),c&&t.setData(n.downSample(n.mapDimension(s.dim),1/h,c,TD))}}}}}("line"));var YD=jI.extend({type:"series.__base_bar__",getInitialData:function(t,e){return gl(this.getSource(),this)},getMarkerPosition:function(t){var e=this.coordinateSystem;if(e){var i=e.dataToPoint(e.clampData(t)),n=this.getData(),o=n.getLayout("offset"),a=n.getLayout("size");return i[e.getBaseAxis().isHorizontal()?0:1]+=o+a/2,i}return[NaN,NaN]},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,barMinHeight:0,barMinAngle:0,large:!1,largeThreshold:400,progressive:3e3,progressiveChunkMode:"mod",itemStyle:{},emphasis:{}}});YD.extend({type:"series.bar",dependencies:["grid","polar"],brushSelector:"rect",getProgressive:function(){return!!this.get("large")&&this.get("progressive")},getProgressiveThreshold:function(){var t=this.get("progressiveThreshold"),e=this.get("largeThreshold");return e>t&&(t=e),t}});var qD=Jb([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["stroke","barBorderColor"],["lineWidth","barBorderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),KD={getBarItemStyle:function(t){var e=qD(this,t);if(this.getBorderLineDash){var i=this.getBorderLineDash();i&&(e.lineDash=i)}return e}},$D=["itemStyle","barBorderWidth"];a(Po.prototype,KD),Hs({type:"bar",render:function(t,e,i){this._updateDrawMode(t);var n=t.get("coordinateSystem");return"cartesian2d"!==n&&"polar"!==n||(this._isLargeDraw?this._renderLarge(t,e,i):this._renderNormal(t,e,i)),this.group},incrementalPrepareRender:function(t,e,i){this._clear(),this._updateDrawMode(t)},incrementalRender:function(t,e,i,n){this._incrementalRenderLarge(t,e)},_updateDrawMode:function(t){var e=t.pipelineContext.large;(null==this._isLargeDraw||e^this._isLargeDraw)&&(this._isLargeDraw=e,this._clear())},_renderNormal:function(t,e,i){var n,o=this.group,a=t.getData(),r=this._data,s=t.coordinateSystem,l=s.getBaseAxis();"cartesian2d"===s.type?n=l.isHorizontal():"polar"===s.type&&(n="angle"===l.dim);var u=t.isAnimationEnabled()?t:null;a.diff(r).add(function(e){if(a.hasValue(e)){var i=a.getItemModel(e),r=QD[s.type](a,e,i),l=JD[s.type](a,e,i,r,n,u);a.setItemGraphicEl(e,l),o.add(l),Oh(l,a,e,i,r,t,n,"polar"===s.type)}}).update(function(e,i){var l=r.getItemGraphicEl(i);if(a.hasValue(e)){var h=a.getItemModel(e),c=QD[s.type](a,e,h);l?Mo(l,{shape:c},u,e):l=JD[s.type](a,e,h,c,n,u,!0),a.setItemGraphicEl(e,l),o.add(l),Oh(l,a,e,h,c,t,n,"polar"===s.type)}else o.remove(l)}).remove(function(t){var e=r.getItemGraphicEl(t);"cartesian2d"===s.type?e&&Ph(t,u,e):e&&Nh(t,u,e)}).execute(),this._data=a},_renderLarge:function(t,e,i){this._clear(),Rh(t,this.group)},_incrementalRenderLarge:function(t,e){Rh(e,this.group,!0)},dispose:B,remove:function(t){this._clear(t)},_clear:function(t){var e=this.group,i=this._data;t&&t.get("animation")&&i&&!this._isLargeDraw?i.eachItemGraphicEl(function(e){"sector"===e.type?Nh(e.dataIndex,t,e):Ph(e.dataIndex,t,e)}):e.removeAll(),this._data=null}});var JD={cartesian2d:function(t,e,i,n,o,r,s){var l=new vM({shape:a({},n)});if(r){var u=l.shape,h=o?"height":"width",c={};u[h]=0,c[h]=n[h],RM[s?"updateProps":"initProps"](l,{shape:c},r,e)}return l},polar:function(t,e,i,n,o,a,s){var l=n.startAngle<n.endAngle,u=new uM({shape:r({clockwise:l},n)});if(a){var h=u.shape,c=o?"r":"endAngle",d={};h[c]=o?0:n.startAngle,d[c]=n[c],RM[s?"updateProps":"initProps"](u,{shape:d},a,e)}return u}},QD={cartesian2d:function(t,e,i){var n=t.getItemLayout(e),o=Eh(i,n),a=n.width>0?1:-1,r=n.height>0?1:-1;return{x:n.x+a*o/2,y:n.y+r*o/2,width:n.width-a*o,height:n.height-r*o}},polar:function(t,e,i){var n=t.getItemLayout(e);return{cx:n.cx,cy:n.cy,r0:n.r0,r:n.r,startAngle:n.startAngle,endAngle:n.endAngle}}},tC=kn.extend({type:"largeBar",shape:{points:[]},buildPath:function(t,e){for(var i=e.points,n=this.__startPoint,o=this.__valueIdx,a=0;a<i.length;a+=2)n[this.__valueIdx]=i[a+o],t.moveTo(n[0],n[1]),t.lineTo(i[a],i[a+1])}});Rs(v(Ol,"bar")),Rs(TA),zs({seriesType:"bar",reset:function(t){t.getData().setVisual("legendSymbol","roundRect")}});var eC=function(t,e,i){e=y(e)&&{coordDimensions:e}||a({},e);var n=t.getSource(),o=vA(n,e),r=new pA(o,t);return r.initData(n,i),r},iC={updateSelectedMap:function(t){this._targetList=y(t)?t.slice():[],this._selectTargetMap=p(t||[],function(t,e){return t.set(e.name,e),t},R())},select:function(t,e){var i=null!=e?this._targetList[e]:this._selectTargetMap.get(t);"single"===this.get("selectedMode")&&this._selectTargetMap.each(function(t){t.selected=!1}),i&&(i.selected=!0)},unSelect:function(t,e){var i=null!=e?this._targetList[e]:this._selectTargetMap.get(t);i&&(i.selected=!1)},toggleSelected:function(t,e){var i=null!=e?this._targetList[e]:this._selectTargetMap.get(t);if(null!=i)return this[i.selected?"unSelect":"select"](t,e),i.selected},isSelected:function(t,e){var i=null!=e?this._targetList[e]:this._selectTargetMap.get(t);return i&&i.selected}},nC=Ws({type:"series.pie",init:function(t){nC.superApply(this,"init",arguments),this.legendDataProvider=function(){return this.getRawData()},this.updateSelectedMap(this._createSelectableList()),this._defaultLabelLine(t)},mergeOption:function(t){nC.superCall(this,"mergeOption",t),this.updateSelectedMap(this._createSelectableList())},getInitialData:function(t,e){return eC(this,["value"])},_createSelectableList:function(){for(var t=this.getRawData(),e=t.mapDimension("value"),i=[],n=0,o=t.count();n<o;n++)i.push({name:t.getName(n),value:t.get(e,n),selected:fr(t,n,"selected")});return i},getDataParams:function(t){var e=this.getData(),i=nC.superCall(this,"getDataParams",t),n=[];return e.each(e.mapDimension("value"),function(t){n.push(t)}),i.percent=Zo(n,t,e.hostModel.get("percentPrecision")),i.$vars.push("percent"),i},_defaultLabelLine:function(t){Ci(t,"labelLine",["show"]);var e=t.labelLine,i=t.emphasis.labelLine;e.show=e.show&&t.label.show,i.show=i.show&&t.emphasis.label.show},defaultOption:{zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,center:["50%","50%"],radius:[0,"75%"],clockwise:!0,startAngle:90,minAngle:0,selectedOffset:10,hoverOffset:10,avoidLabelOverlap:!0,percentPrecision:2,stillShowZeroSum:!0,label:{rotate:!1,show:!0,position:"outer"},labelLine:{show:!0,length:15,length2:15,smooth:!1,lineStyle:{width:1,type:"solid"}},itemStyle:{borderWidth:1},animationType:"expansion",animationEasing:"cubicOut"}});h(nC,iC);var oC=Gh.prototype;oC.updateData=function(t,e,i){function n(){s.stopAnimation(!0),s.animateTo({shape:{r:h.r+l.get("hoverOffset")}},300,"elasticOut")}function o(){s.stopAnimation(!0),s.animateTo({shape:{r:h.r}},300,"elasticOut")}var s=this.childAt(0),l=t.hostModel,u=t.getItemModel(e),h=t.getItemLayout(e),c=a({},h);c.label=null,i?(s.setShape(c),"scale"===l.getShallow("animationType")?(s.shape.r=h.r0,Io(s,{shape:{r:h.r}},l,e)):(s.shape.endAngle=h.startAngle,Mo(s,{shape:{endAngle:h.endAngle}},l,e))):Mo(s,{shape:c},l,e);var d=t.getItemVisual(e,"color");s.useStyle(r({lineJoin:"bevel",fill:d},u.getModel("itemStyle").getItemStyle())),s.hoverStyle=u.getModel("emphasis.itemStyle").getItemStyle();var f=u.getShallow("cursor");f&&s.attr("cursor",f),Vh(this,t.getItemLayout(e),l.isSelected(null,e),l.get("selectedOffset"),l.get("animation")),s.off("mouseover").off("mouseout").off("emphasis").off("normal"),u.get("hoverAnimation")&&l.isAnimationEnabled()&&s.on("mouseover",n).on("mouseout",o).on("emphasis",n).on("normal",o),this._updateLabel(t,e),co(this)},oC._updateLabel=function(t,e){var i=this.childAt(1),n=this.childAt(2),o=t.hostModel,a=t.getItemModel(e),r=t.getItemLayout(e).label,s=t.getItemVisual(e,"color");Mo(i,{shape:{points:r.linePoints||[[r.x,r.y],[r.x,r.y],[r.x,r.y]]}},o,e),Mo(n,{style:{x:r.x,y:r.y}},o,e),n.attr({rotation:r.rotation,origin:[r.x,r.y],z2:10});var l=a.getModel("label"),u=a.getModel("emphasis.label"),h=a.getModel("labelLine"),c=a.getModel("emphasis.labelLine"),s=t.getItemVisual(e,"color");po(n.style,n.hoverStyle={},l,u,{labelFetcher:t.hostModel,labelDataIndex:e,defaultText:t.getName(e),autoColor:s,useInsideStyle:!!r.inside},{textAlign:r.textAlign,textVerticalAlign:r.verticalAlign,opacity:t.getItemVisual(e,"opacity")}),n.ignore=n.normalIgnore=!l.get("show"),n.hoverIgnore=!u.get("show"),i.ignore=i.normalIgnore=!h.get("show"),i.hoverIgnore=!c.get("show"),i.setStyle({stroke:s,opacity:t.getItemVisual(e,"opacity")}),i.setStyle(h.getModel("lineStyle").getLineStyle()),i.hoverStyle=c.getModel("lineStyle").getLineStyle();var d=h.get("smooth");d&&!0===d&&(d=.4),i.setShape({smooth:d})},u(Gh,tb);Tr.extend({type:"pie",init:function(){var t=new tb;this._sectorGroup=t},render:function(t,e,i,n){if(!n||n.from!==this.uid){var o=t.getData(),a=this._data,r=this.group,s=e.get("animation"),l=!a,u=t.get("animationType"),h=v(Bh,this.uid,t,s,i),c=t.get("selectedMode");if(o.diff(a).add(function(t){var e=new Gh(o,t);l&&"scale"!==u&&e.eachChild(function(t){t.stopAnimation(!0)}),c&&e.on("click",h),o.setItemGraphicEl(t,e),r.add(e)}).update(function(t,e){var i=a.getItemGraphicEl(e);i.updateData(o,t),i.off("click"),c&&i.on("click",h),r.add(i),o.setItemGraphicEl(t,i)}).remove(function(t){var e=a.getItemGraphicEl(t);r.remove(e)}).execute(),s&&l&&o.count()>0&&"scale"!==u){var d=o.getItemLayout(0),f=Math.max(i.getWidth(),i.getHeight())/2,p=m(r.removeClipPath,r);r.setClipPath(this._createClipPath(d.cx,d.cy,f,d.startAngle,d.clockwise,p,t))}else r.removeClipPath();this._data=o}},dispose:function(){},_createClipPath:function(t,e,i,n,o,a,r){var s=new uM({shape:{cx:t,cy:e,r0:0,r:i,startAngle:n,endAngle:n,clockwise:o}});return Io(s,{shape:{endAngle:n+(o?1:-1)*Math.PI*2}},r,a),s},containPoint:function(t,e){var i=e.getData().getItemLayout(0);if(i){var n=t[0]-i.cx,o=t[1]-i.cy,a=Math.sqrt(n*n+o*o);return a<=i.r&&a>=i.r0}}});var aC=function(t,e){d(e,function(e){e.update="updateView",Os(e,function(i,n){var o={};return n.eachComponent({mainType:"series",subType:t,query:i},function(t){t[e.method]&&t[e.method](i.name,i.dataIndex);var n=t.getData();n.each(function(e){var i=n.getName(e);o[i]=t.isSelected(i)||!1})}),{name:i.name,selected:o}})})},rC=function(t){return{getTargetSeries:function(e){var i={},n=R();return e.eachSeriesByType(t,function(t){t.__paletteScope=i,n.set(t.uid,t)}),n},reset:function(t,e){var i=t.getRawData(),n={},o=t.getData();o.each(function(t){var e=o.getRawIndex(t);n[e]=t}),i.each(function(e){var a=n[e],r=null!=a&&o.getItemVisual(a,"color",!0);if(r)i.setItemVisual(e,"color",r);else{var s=i.getItemModel(e).get("itemStyle.color")||t.getColorFromPalette(i.getName(e)||e+"",t.__paletteScope,i.count());i.setItemVisual(e,"color",s),null!=a&&o.setItemVisual(a,"color",s)}})}}},sC=function(t,e,i,n){var o,a,r=t.getData(),s=[],l=!1;r.each(function(i){var n,u,h,c,d=r.getItemLayout(i),f=r.getItemModel(i),p=f.getModel("label"),g=p.get("position")||f.get("emphasis.label.position"),m=f.getModel("labelLine"),v=m.get("length"),y=m.get("length2"),x=(d.startAngle+d.endAngle)/2,_=Math.cos(x),w=Math.sin(x);o=d.cx,a=d.cy;var b="inside"===g||"inner"===g;if("center"===g)n=d.cx,u=d.cy,c="center";else{var S=(b?(d.r+d.r0)/2*_:d.r*_)+o,M=(b?(d.r+d.r0)/2*w:d.r*w)+a;if(n=S+3*_,u=M+3*w,!b){var I=S+_*(v+e-d.r),T=M+w*(v+e-d.r),A=I+(_<0?-1:1)*y,D=T;n=A+(_<0?-5:5),u=D,h=[[S,M],[I,T],[A,D]]}c=b?"center":_>0?"left":"right"}var C=p.getFont(),L=p.get("rotate")?_<0?-x+Math.PI:-x:0,k=ke(t.getFormattedLabel(i,"normal")||r.getName(i),C,c,"top");l=!!L,d.label={x:n,y:u,position:g,height:k.height,len:v,len2:y,linePoints:h,textAlign:c,verticalAlign:"middle",rotation:L,inside:b},b||s.push(d.label)}),!l&&t.get("avoidLabelOverlap")&&Wh(s,o,a,e,i,n)},lC=2*Math.PI,uC=Math.PI/180,hC=function(t){return{seriesType:t,reset:function(t,e){var i=e.findComponents({mainType:"legend"});if(i&&i.length){var n=t.getData();n.filterSelf(function(t){for(var e=n.getName(t),o=0;o<i.length;o++)if(!i[o].isSelected(e))return!1;return!0})}}}};aC("pie",[{type:"pieToggleSelect",event:"pieselectchanged",method:"toggleSelected"},{type:"pieSelect",event:"pieselected",method:"select"},{type:"pieUnSelect",event:"pieunselected",method:"unSelect"}]),zs(rC("pie")),Rs(v(function(t,e,i,n){e.eachSeriesByType(t,function(t){var e=t.getData(),n=e.mapDimension("value"),o=t.get("center"),a=t.get("radius");y(a)||(a=[0,a]),y(o)||(o=[o,o]);var r=i.getWidth(),s=i.getHeight(),l=Math.min(r,s),u=Bo(o[0],r),h=Bo(o[1],s),c=Bo(a[0],l/2),d=Bo(a[1],l/2),f=-t.get("startAngle")*uC,p=t.get("minAngle")*uC,g=0;e.each(n,function(t){!isNaN(t)&&g++});var m=e.getSum(n),v=Math.PI/(m||g)*2,x=t.get("clockwise"),_=t.get("roseType"),w=t.get("stillShowZeroSum"),b=e.getDataExtent(n);b[0]=0;var S=lC,M=0,I=f,T=x?1:-1;if(e.each(n,function(t,i){var n;if(isNaN(t))e.setItemLayout(i,{angle:NaN,startAngle:NaN,endAngle:NaN,clockwise:x,cx:u,cy:h,r0:c,r:_?NaN:d});else{(n="area"!==_?0===m&&w?v:t*v:lC/g)<p?(n=p,S-=p):M+=t;var o=I+T*n;e.setItemLayout(i,{angle:n,startAngle:I,endAngle:o,clockwise:x,cx:u,cy:h,r0:c,r:_?zo(t,b,[c,d]):d}),I=o}}),S<lC&&g)if(S<=.001){var A=lC/g;e.each(n,function(t,i){if(!isNaN(t)){var n=e.getItemLayout(i);n.angle=A,n.startAngle=f+T*i*A,n.endAngle=f+T*(i+1)*A}})}else v=S/M,I=f,e.each(n,function(t,i){if(!isNaN(t)){var n=e.getItemLayout(i),o=n.angle===p?p:t*v;n.startAngle=I,n.endAngle=I+T*o,I+=T*o}});sC(t,d,r,s)})},"pie")),Ns(hC("pie")),jI.extend({type:"series.scatter",dependencies:["grid","polar","geo","singleAxis","calendar"],getInitialData:function(t,e){return gl(this.getSource(),this)},brushSelector:"point",getProgressive:function(){var t=this.option.progressive;return null==t?this.option.large?5e3:this.get("progressive"):t},getProgressiveThreshold:function(){var t=this.option.progressiveThreshold;return null==t?this.option.large?1e4:this.get("progressiveThreshold"):t},defaultOption:{coordinateSystem:"cartesian2d",zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,symbolSize:10,large:!1,largeThreshold:2e3,itemStyle:{opacity:.8}}});var cC=Zn({shape:{points:null},symbolProxy:null,buildPath:function(t,e){var i=e.points,n=e.size,o=this.symbolProxy,a=o.shape;if(!((t.getContext?t.getContext():t)&&n[0]<4))for(var r=0;r<i.length;){var s=i[r++],l=i[r++];isNaN(s)||isNaN(l)||(a.x=s-n[0]/2,a.y=l-n[1]/2,a.width=n[0],a.height=n[1],o.buildPath(t,a,!0))}},afterBrush:function(t){var e=this.shape,i=e.points,n=e.size;if(n[0]<4){this.setTransform(t);for(var o=0;o<i.length;){var a=i[o++],r=i[o++];isNaN(a)||isNaN(r)||t.fillRect(a-n[0]/2,r-n[1]/2,n[0],n[1])}this.restoreTransform(t)}},findDataIndex:function(t,e){for(var i=this.shape,n=i.points,o=i.size,a=Math.max(o[0],4),r=Math.max(o[1],4),s=n.length/2-1;s>=0;s--){var l=2*s,u=n[l]-a/2,h=n[l+1]-r/2;if(t>=u&&e>=h&&t<=u+a&&e<=h+r)return s}return-1}}),dC=Zh.prototype;dC.isPersistent=function(){return!this._incremental},dC.updateData=function(t){this.group.removeAll();var e=new cC({rectHover:!0,cursor:"default"});e.setShape({points:t.getLayout("symbolPoints")}),this._setCommon(e,t),this.group.add(e),this._incremental=null},dC.updateLayout=function(t){if(!this._incremental){var e=t.getLayout("symbolPoints");this.group.eachChild(function(t){if(null!=t.startIndex){var i=2*(t.endIndex-t.startIndex),n=4*t.startIndex*2;e=new Float32Array(e.buffer,n,i)}t.setShape("points",e)})}},dC.incrementalPrepareUpdate=function(t){this.group.removeAll(),this._clearIncremental(),t.count()>2e6?(this._incremental||(this._incremental=new Hn({silent:!0})),this.group.add(this._incremental)):this._incremental=null},dC.incrementalUpdate=function(t,e){var i;this._incremental?(i=new cC,this._incremental.addDisplayable(i,!0)):((i=new cC({rectHover:!0,cursor:"default",startIndex:t.start,endIndex:t.end})).incremental=!0,this.group.add(i)),i.setShape({points:e.getLayout("symbolPoints")}),this._setCommon(i,e,!!this._incremental)},dC._setCommon=function(t,e,i){var n=e.hostModel,o=e.getVisual("symbolSize");t.setShape("size",o instanceof Array?o:[o,o]),t.symbolProxy=$l(e.getVisual("symbol"),0,0,0,0),t.setColor=t.symbolProxy.setColor;var a=t.shape.size[0]<4;t.useStyle(n.getModel("itemStyle").getItemStyle(a?["color","shadowBlur","shadowColor"]:["color"]));var r=e.getVisual("color");r&&t.setColor(r),i||(t.seriesIndex=n.seriesIndex,t.on("mousemove",function(e){t.dataIndex=null;var i=t.findDataIndex(e.offsetX,e.offsetY);i>=0&&(t.dataIndex=i+(t.startIndex||0))}))},dC.remove=function(){this._clearIncremental(),this._incremental=null,this.group.removeAll()},dC._clearIncremental=function(){var t=this._incremental;t&&t.clearDisplaybles()},Hs({type:"scatter",render:function(t,e,i){var n=t.getData();this._updateSymbolDraw(n,t).updateData(n),this._finished=!0},incrementalPrepareRender:function(t,e,i){var n=t.getData();this._updateSymbolDraw(n,t).incrementalPrepareUpdate(n),this._finished=!1},incrementalRender:function(t,e,i){this._symbolDraw.incrementalUpdate(t,e.getData()),this._finished=t.end===e.getData().count()},updateTransform:function(t,e,i){var n=t.getData();if(this.group.dirty(),!this._finished||n.count()>1e4||!this._symbolDraw.isPersistent())return{update:!0};var o=MD().reset(t);o.progress&&o.progress({start:0,end:n.count()},n),this._symbolDraw.updateLayout(n)},_updateSymbolDraw:function(t,e){var i=this._symbolDraw,n=e.pipelineContext.large;return i&&n===this._isLargeDraw||(i&&i.remove(),i=this._symbolDraw=n?new Zh:new Au,this._isLargeDraw=n,this.group.removeAll()),this.group.add(i.group),i},remove:function(t,e){this._symbolDraw&&this._symbolDraw.remove(!0),this._symbolDraw=null},dispose:function(){}}),zs(SD("scatter","circle")),Rs(MD("scatter")),u(Uh,iD),Xh.prototype.getIndicatorAxes=function(){return this._indicatorAxes},Xh.prototype.dataToPoint=function(t,e){var i=this._indicatorAxes[e];return this.coordToPoint(i.dataToCoord(t),e)},Xh.prototype.coordToPoint=function(t,e){var i=this._indicatorAxes[e].angle;return[this.cx+t*Math.cos(i),this.cy-t*Math.sin(i)]},Xh.prototype.pointToData=function(t){var e=t[0]-this.cx,i=t[1]-this.cy,n=Math.sqrt(e*e+i*i);e/=n,i/=n;for(var o,a=Math.atan2(-i,e),r=1/0,s=-1,l=0;l<this._indicatorAxes.length;l++){var u=this._indicatorAxes[l],h=Math.abs(a-u.angle);h<r&&(o=u,s=l,r=h)}return[s,+(o&&o.coodToData(n))]},Xh.prototype.resize=function(t,e){var i=t.get("center"),n=e.getWidth(),o=e.getHeight(),a=Math.min(n,o)/2;this.cx=Bo(i[0],n),this.cy=Bo(i[1],o),this.startAngle=t.get("startAngle")*Math.PI/180;var r=t.get("radius");"string"!=typeof r&&"number"!=typeof r||(r=[0,r]),this.r0=Bo(r[0],a),this.r=Bo(r[1],a),d(this._indicatorAxes,function(t,e){t.setExtent(this.r0,this.r);var i=this.startAngle+e*Math.PI*2/this._indicatorAxes.length;i=Math.atan2(Math.sin(i),Math.cos(i)),t.angle=i},this)},Xh.prototype.update=function(t,e){function i(t){var e=Math.pow(10,Math.floor(Math.log(t)/Math.LN10)),i=t/e;return 2===i?i=5:i*=2,i*e}var n=this._indicatorAxes,o=this._model;d(n,function(t){t.scale.setExtent(1/0,-1/0)}),t.eachSeriesByType("radar",function(e,i){if("radar"===e.get("coordinateSystem")&&t.getComponent("radar",e.get("radarIndex"))===o){var a=e.getData();d(n,function(t){t.scale.unionExtentFromData(a,a.mapDimension(t.dim))})}},this);var a=o.get("splitNumber");d(n,function(t,e){var n=Vl(t.scale,t.model);Fl(t.scale,t.model);var o=t.model,r=t.scale,s=o.getMin(),l=o.getMax(),u=r.getInterval();if(null!=s&&null!=l)r.setExtent(+s,+l),r.setInterval((l-s)/a);else if(null!=s){var h;do{h=s+u*a,r.setExtent(+s,h),r.setInterval(u),u=i(u)}while(h<n[1]&&isFinite(h)&&isFinite(n[1]))}else if(null!=l){var c;do{c=l-u*a,r.setExtent(c,+l),r.setInterval(u),u=i(u)}while(c>n[0]&&isFinite(c)&&isFinite(n[0]))}else{r.getTicks().length-1>a&&(u=i(u));var d=Math.round((n[0]+n[1])/2/u)*u,f=Math.round(a/2);r.setExtent(Vo(d-f*u),Vo(d+(a-f)*u)),r.setInterval(u)}})},Xh.dimensions=[],Xh.create=function(t,e){var i=[];return t.eachComponent("radar",function(n){var o=new Xh(n,t,e);i.push(o),n.coordinateSystem=o}),t.eachSeriesByType("radar",function(t){"radar"===t.get("coordinateSystem")&&(t.coordinateSystem=i[t.get("radarIndex")||0])}),i},Ga.register("radar",Xh);var fC=LD.valueAxis,pC=(Gs({type:"radar",optionUpdated:function(){var t=this.get("boundaryGap"),e=this.get("splitNumber"),o=this.get("scale"),s=this.get("axisLine"),l=this.get("axisTick"),u=this.get("axisLabel"),h=this.get("name"),c=this.get("name.show"),d=this.get("name.formatter"),p=this.get("nameGap"),g=this.get("triggerEvent"),m=f(this.get("indicator")||[],function(f){null!=f.max&&f.max>0&&!f.min?f.min=0:null!=f.min&&f.min<0&&!f.max&&(f.max=0);var m=h;if(null!=f.color&&(m=r({color:f.color},h)),f=n(i(f),{boundaryGap:t,splitNumber:e,scale:o,axisLine:s,axisTick:l,axisLabel:u,name:f.text,nameLocation:"end",nameGap:p,nameTextStyle:m,triggerEvent:g},!1),c||(f.name=""),"string"==typeof d){var v=f.name;f.name=d.replace("{value}",null!=v?v:"")}else"function"==typeof d&&(f.name=d(f.name,f));var y=a(new Po(f,null,this.ecModel),WA);return y.mainType="radar",y.componentIndex=this.componentIndex,y},this);this.getIndicatorModels=function(){return m}},defaultOption:{zlevel:0,z:0,center:["50%","50%"],radius:"75%",startAngle:90,name:{show:!0},boundaryGap:[0,0],splitNumber:5,nameGap:15,scale:!1,shape:"polygon",axisLine:n({lineStyle:{color:"#bbb"}},fC.axisLine),axisLabel:jh(fC.axisLabel,!1),axisTick:jh(fC.axisTick,!1),splitLine:jh(fC.splitLine,!0),splitArea:jh(fC.splitArea,!0),indicator:[]}}),["axisLine","axisTickLabel","axisName"]);Fs({type:"radar",render:function(t,e,i){this.group.removeAll(),this._buildAxes(t),this._buildSplitLineAndArea(t)},_buildAxes:function(t){var e=t.coordinateSystem;d(f(e.getIndicatorAxes(),function(t){return new BD(t.model,{position:[e.cx,e.cy],rotation:t.angle,labelDirection:-1,tickDirection:-1,nameDirection:1})}),function(t){d(pC,t.add,t),this.group.add(t.getGroup())},this)},_buildSplitLineAndArea:function(t){function e(t,e,i){var n=i%e.length;return t[n]=t[n]||[],n}var i=t.coordinateSystem,n=i.getIndicatorAxes();if(n.length){var o=t.get("shape"),a=t.getModel("splitLine"),s=t.getModel("splitArea"),l=a.getModel("lineStyle"),u=s.getModel("areaStyle"),h=a.get("show"),c=s.get("show"),p=l.get("color"),g=u.get("color");p=y(p)?p:[p],g=y(g)?g:[g];var m=[],v=[];if("circle"===o)for(var x=n[0].getTicksCoords(),_=i.cx,w=i.cy,b=0;b<x.length;b++)h&&m[D=e(m,p,b)].push(new rM({shape:{cx:_,cy:w,r:x[b].coord}})),c&&b<x.length-1&&v[D=e(v,g,b)].push(new hM({shape:{cx:_,cy:w,r0:x[b].coord,r:x[b+1].coord}}));else for(var S,M=f(n,function(t,e){var n=t.getTicksCoords();return S=null==S?n.length-1:Math.min(n.length-1,S),f(n,function(t){return i.coordToPoint(t.coord,e)})}),I=[],b=0;b<=S;b++){for(var T=[],A=0;A<n.length;A++)T.push(M[A][b]);if(T[0]&&T.push(T[0].slice()),h&&m[D=e(m,p,b)].push(new pM({shape:{points:T}})),c&&I){var D=e(v,g,b-1);v[D].push(new fM({shape:{points:T.concat(I)}}))}I=T.slice().reverse()}var C=l.getLineStyle(),L=u.getAreaStyle();d(v,function(t,e){this.group.add(NM(t,{style:r({stroke:"none",fill:g[e%g.length]},L),silent:!0}))},this),d(m,function(t,e){this.group.add(NM(t,{style:r({fill:"none",stroke:p[e%p.length]},C),silent:!0}))},this)}}});var gC=jI.extend({type:"series.radar",dependencies:["radar"],init:function(t){gC.superApply(this,"init",arguments),this.legendDataProvider=function(){return this.getRawData()}},getInitialData:function(t,e){return eC(this,{generateCoord:"indicator_",generateCoordCount:1/0})},formatTooltip:function(t){var e=this.getData(),i=this.coordinateSystem.getIndicatorAxes(),n=this.getData().getName(t);return ea(""===n?this.name:n)+"<br/>"+f(i,function(i,n){var o=e.get(e.mapDimension(i.dim),t);return ea(i.name+" : "+o)}).join("<br />")},defaultOption:{zlevel:0,z:2,coordinateSystem:"radar",legendHoverLink:!0,radarIndex:0,lineStyle:{width:2,type:"solid"},label:{position:"top"},symbol:"emptyCircle",symbolSize:4}});Hs({type:"radar",render:function(t,e,n){function o(t,e){var i=t.getItemVisual(e,"symbol")||"circle",n=t.getItemVisual(e,"color");if("none"!==i){var o=Yh(t.getItemVisual(e,"symbolSize")),a=$l(i,-1,-1,2,2,n);return a.attr({style:{strokeNoScale:!0},z2:100,scale:[o[0]/2,o[1]/2]}),a}}function a(e,i,n,a,r,s){n.removeAll();for(var l=0;l<i.length-1;l++){var u=o(a,r);u&&(u.__dimIdx=l,e[l]?(u.attr("position",e[l]),RM[s?"initProps":"updateProps"](u,{position:i[l]},t,r)):u.attr("position",i[l]),n.add(u))}}function s(t){return f(t,function(t){return[l.cx,l.cy]})}var l=t.coordinateSystem,u=this.group,h=t.getData(),c=this._data;h.diff(c).add(function(e){var i=h.getItemLayout(e);if(i){var n=new fM,o=new pM,r={shape:{points:i}};n.shape.points=s(i),o.shape.points=s(i),Io(n,r,t,e),Io(o,r,t,e);var l=new tb,u=new tb;l.add(o),l.add(n),l.add(u),a(o.shape.points,i,u,h,e,!0),h.setItemGraphicEl(e,l)}}).update(function(e,i){var n=c.getItemGraphicEl(i),o=n.childAt(0),r=n.childAt(1),s=n.childAt(2),l={shape:{points:h.getItemLayout(e)}};l.shape.points&&(a(o.shape.points,l.shape.points,s,h,e,!1),Mo(o,l,t),Mo(r,l,t),h.setItemGraphicEl(e,n))}).remove(function(t){u.remove(c.getItemGraphicEl(t))}).execute(),h.eachItemGraphicEl(function(t,e){function n(){l.attr("ignore",m)}function o(){l.attr("ignore",g)}var a=h.getItemModel(e),s=t.childAt(0),l=t.childAt(1),c=t.childAt(2),d=h.getItemVisual(e,"color");u.add(t),s.useStyle(r(a.getModel("lineStyle").getLineStyle(),{fill:"none",stroke:d})),s.hoverStyle=a.getModel("emphasis.lineStyle").getLineStyle();var f=a.getModel("areaStyle"),p=a.getModel("emphasis.areaStyle"),g=f.isEmpty()&&f.parentModel.isEmpty(),m=p.isEmpty()&&p.parentModel.isEmpty();m=m&&g,l.ignore=g,l.useStyle(r(f.getAreaStyle(),{fill:d,opacity:.7})),l.hoverStyle=p.getAreaStyle();var v=a.getModel("itemStyle").getItemStyle(["color"]),y=a.getModel("emphasis.itemStyle").getItemStyle(),x=a.getModel("label"),_=a.getModel("emphasis.label");c.eachChild(function(t){t.setStyle(v),t.hoverStyle=i(y),po(t.style,t.hoverStyle,x,_,{labelFetcher:h.hostModel,labelDataIndex:e,labelDimIndex:t.__dimIdx,defaultText:h.get(h.dimensions[t.__dimIdx],e),autoColor:d,isRectText:!0})}),t.off("mouseover").off("mouseout").off("normal").off("emphasis"),t.on("emphasis",n).on("mouseover",n).on("normal",o).on("mouseout",o),co(t)}),this._data=h},remove:function(){this.group.removeAll(),this._data=null},dispose:function(){}});zs(rC("radar")),zs(SD("radar","circle")),Rs(function(t){t.eachSeriesByType("radar",function(t){var e=t.getData(),i=[],n=t.coordinateSystem;if(n){for(var o=n.getIndicatorAxes(),a=0;a<o.length;a++)e.each(e.mapDimension(o[a].dim),function(t,e){i[e]=i[e]||[],i[e][a]=n.dataToPoint(t,a)});e.each(function(t){i[t][0]&&i[t].push(i[t][0].slice()),e.setItemLayout(t,i[t])})}})}),Ns(hC("radar")),Ps(function(t){var e=t.polar;if(e){y(e)||(e=[e]);var i=[];d(e,function(e,n){e.indicator?(e.type&&!e.shape&&(e.shape=e.type),t.radar=t.radar||[],y(t.radar)||(t.radar=[t.radar]),t.radar.push(e)):i.push(e)}),t.polar=i}d(t.series,function(t){t&&"radar"===t.type&&t.polarIndex&&(t.radarIndex=t.polarIndex)})});for(var mC=[126,25],vC=[[[0,3.5],[7,11.2],[15,11.9],[30,7],[42,.7],[52,.7],[56,7.7],[59,.7],[64,.7],[64,0],[5,0],[0,3.5]],[[13,16.1],[19,14.7],[16,21.7],[11,23.1],[13,16.1]],[[12,32.2],[14,38.5],[15,38.5],[13,32.2],[12,32.2]],[[16,47.6],[12,53.2],[13,53.2],[18,47.6],[16,47.6]],[[6,64.4],[8,70],[9,70],[8,64.4],[6,64.4]],[[23,82.6],[29,79.8],[30,79.8],[25,82.6],[23,82.6]],[[37,70.7],[43,62.3],[44,62.3],[39,70.7],[37,70.7]],[[48,51.1],[51,45.5],[53,45.5],[50,51.1],[48,51.1]],[[51,35],[51,28.7],[53,28.7],[53,35],[51,35]],[[52,22.4],[55,17.5],[56,17.5],[53,22.4],[52,22.4]],[[58,12.6],[62,7],[63,7],[60,12.6],[58,12.6]],[[0,3.5],[0,93.1],[64,93.1],[64,0],[63,0],[63,92.4],[1,92.4],[1,3.5],[0,3.5]]],yC=0;yC<vC.length;yC++)for(var xC=0;xC<vC[yC].length;xC++)vC[yC][xC][0]/=10.5,vC[yC][xC][1]/=-14,vC[yC][xC][0]+=mC[0],vC[yC][xC][1]+=mC[1];var _C=function(t,e){"china"===t&&e.push(new tu("南海诸岛",f(vC,function(t){return{type:"polygon",exterior:t}}),mC))},wC={"南海诸岛":[32,80],"广东":[0,-10],"香港":[10,5],"澳门":[-10,10],"天津":[5,5]},bC=function(t,e){if("china"===t){var i=wC[e.name];if(i){var n=e.center;n[0]+=i[0]/10.5,n[1]+=-i[1]/14}}},SC={Russia:[100,60],"United States":[-99,38],"United States of America":[-99,38]},MC=function(t,e){if("world"===t){var i=SC[e.name];if(i){var n=e.center;n[0]=i[0],n[1]=i[1]}}},IC=[[[123.45165252685547,25.73527164402261],[123.49731445312499,25.73527164402261],[123.49731445312499,25.750734064600884],[123.45165252685547,25.750734064600884],[123.45165252685547,25.73527164402261]]],TC=function(t,e){"china"===t&&"台湾"===e.name&&e.geometries.push({type:"polygon",exterior:IC[0]})},AC=Bi(),DC={load:function(t,e){var i=AC(e).parsed;if(i)return i;var n,o=e.specialAreas||{},a=e.geoJSON;try{n=a?QA(a):[]}catch(t){throw new Error("Invalid geoJson format\n"+t.message)}return d(n,function(e){var i=e.name;bC(t,e),MC(t,e),TC(t,e);var n=o[i];n&&e.transformTo(n.left,n.top,n.width,n.height)}),_C(t,n),AC(e).parsed={regions:n,boundingRect:qh(n)}}},CC=Bi(),LC={geoJSON:DC,svg:{load:function(t,e){var i=CC(e).originRoot;if(i)return{root:i,boundingRect:CC(e).boundingRect};var n=Kh(e);return CC(e).originRoot=n.root,CC(e).boundingRect=n.boundingRect,n},makeGraphic:function(t,e,i){var n=CC(e),o=n.rootMap||(n.rootMap=R()),a=o.get(i);if(a)return a;var r=n.originRoot,s=n.boundingRect;return n.originRootHostKey?a=Kh(e,s).root:(n.originRootHostKey=i,a=r),o.set(i,a)},removeGraphic:function(t,e,i){var n=CC(e),o=n.rootMap;o&&o.removeKey(i),i===n.originRootHostKey&&(n.originRootHostKey=null)}}},kC={load:function(t,e){var i,n=[],o=R(),a=R();return d(Jh(t),function(r){var s=LC[r.type].load(t,r);d(s.regions,function(t){var i=t.name;e&&e.hasOwnProperty(i)&&(t=t.cloneShallow(i=e[i])),n.push(t),o.set(i,t),a.set(i,t.center)});var l=s.boundingRect;l&&(i?i.union(l):i=l.clone())}),{regions:n,regionsMap:o,nameCoordMap:a,boundingRect:i||new de(0,0,0,0)}},makeGraphic:$h("makeGraphic"),removeGraphic:$h("removeGraphic")};h(jI.extend({type:"series.map",dependencies:["geo"],layoutMode:"box",needsDrawMap:!1,seriesGroup:[],getInitialData:function(t){for(var e=eC(this,["value"]),i=e.mapDimension("value"),n=R(),o=[],a=[],r=0,s=e.count();r<s;r++){var l=e.getName(r);n.set(l,!0),o.push({name:l,value:e.get(i,r),selected:fr(e,r,"selected")})}return d(kC.load(this.getMapType(),this.option.nameMap).regions,function(t){var e=t.name;n.get(e)||(o.push({name:e}),a.push(e))}),this.updateSelectedMap(o),e.appendValues([],a),e},getHostGeoModel:function(){var t=this.option.geoIndex;return null!=t?this.dependentModels.geo[t]:null},getMapType:function(){return(this.getHostGeoModel()||this).option.map},getRawValue:function(t){var e=this.getData();return e.get(e.mapDimension("value"),t)},getRegionModel:function(t){var e=this.getData();return e.getItemModel(e.indexOfName(t))},formatTooltip:function(t){for(var e=this.getData(),i=Qo(this.getRawValue(t)),n=e.getName(t),o=this.seriesGroup,a=[],r=0;r<o.length;r++){var s=o[r].originalData.indexOfName(n),l=e.mapDimension("value");isNaN(o[r].originalData.get(l,s))||a.push(ea(o[r].name))}return a.join(", ")+"<br />"+ea(n+" : "+i)},getTooltipPosition:function(t){if(null!=t){var e=this.getData().getName(t),i=this.coordinateSystem,n=i.getRegion(e);return n&&i.dataToPoint(n.center)}},setZoom:function(t){this.option.zoom=t},setCenter:function(t){this.option.center=t},defaultOption:{zlevel:0,z:2,coordinateSystem:"geo",map:"",left:"center",top:"center",aspectScale:.75,showLegendSymbol:!0,dataRangeHoverLink:!0,boundingCoords:null,center:null,zoom:1,scaleLimit:null,label:{show:!1,color:"#000"},itemStyle:{borderWidth:.5,borderColor:"#444",areaColor:"#eee"},emphasis:{label:{show:!0,color:"rgb(100,0,0)"},itemStyle:{areaColor:"rgba(255,215,0,0.8)"}}}}),iC);var PC="\0_ec_interaction_mutex";Os({type:"takeGlobalCursor",event:"globalCursorTaken",update:"update"},function(){}),h(nc,fw);var NC={axisPointer:1,tooltip:1,brush:1};yc.prototype={constructor:yc,draw:function(t,e,i,n,o){var a="geo"===t.mainType,r=t.getData&&t.getData();a&&e.eachComponent({mainType:"series",subType:"map"},function(e){r||e.getHostGeoModel()!==t||(r=e.getData())});var s=t.coordinateSystem;this._updateBackground(s);var l=this._regionsGroup,u=this.group,h=s.scale,c={position:s.position,scale:h};!l.childAt(0)||o?u.attr(c):Mo(u,c,t),l.removeAll();var f=["itemStyle"],p=["emphasis","itemStyle"],g=["label"],m=["emphasis","label"],v=R();d(s.regions,function(e){var i=v.get(e.name)||v.set(e.name,new tb),n=new SM({shape:{paths:[]}});i.add(n);var o,s=(C=t.getRegionModel(e.name)||t).getModel(f),u=C.getModel(p),c=gc(s),y=gc(u),x=C.getModel(g),_=C.getModel(m);if(r){o=r.indexOfName(e.name);var w=r.getItemVisual(o,"color",!0);w&&(c.fill=w)}d(e.geometries,function(t){if("polygon"===t.type){n.shape.paths.push(new fM({shape:{points:t.exterior}}));for(var e=0;e<(t.interiors?t.interiors.length:0);e++)n.shape.paths.push(new fM({shape:{points:t.interiors[e]}}))}}),n.setStyle(c),n.style.strokeNoScale=!0,n.culling=!0;var b=x.get("show"),S=_.get("show"),M=r&&isNaN(r.get(r.mapDimension("value"),o)),I=r&&r.getItemLayout(o);if(a||M&&(b||S)||I&&I.showLabel){var T,A=a?e.name:o;(!r||o>=0)&&(T=t);var D=new aM({position:e.center.slice(),scale:[1/h[0],1/h[1]],z2:10,silent:!0});po(D.style,D.hoverStyle={},x,_,{labelFetcher:T,labelDataIndex:A,defaultText:e.name,useInsideStyle:!1},{textAlign:"center",textVerticalAlign:"middle"}),i.add(D)}if(r)r.setItemGraphicEl(o,i);else{var C=t.getRegionModel(e.name);n.eventData={componentType:"geo",componentIndex:t.componentIndex,geoIndex:t.componentIndex,name:e.name,region:C&&C.option||{}}}(i.__regions||(i.__regions=[])).push(e),co(i,y,{hoverSilentOnTouch:!!t.get("selectedMode")}),l.add(i)}),this._updateController(t,e,i),mc(this,t,l,i,n),vc(t,l)},remove:function(){this._regionsGroup.removeAll(),this._backgroundGroup.removeAll(),this._controller.dispose(),this._mapName&&kC.removeGraphic(this._mapName,this.uid),this._mapName=null,this._controllerHost={}},_updateBackground:function(t){var e=t.map;this._mapName!==e&&d(kC.makeGraphic(e,this.uid),function(t){this._backgroundGroup.add(t)},this),this._mapName=e},_updateController:function(t,e,i){function n(){var e={type:"geoRoam",componentType:l};return e[l+"Id"]=t.id,e}var o=t.coordinateSystem,r=this._controller,s=this._controllerHost;s.zoomLimit=t.get("scaleLimit"),s.zoom=o.getZoom(),r.enable(t.get("roam")||!1);var l=t.mainType;r.off("pan").on("pan",function(t){this._mouseDownFlag=!1,dc(s,t.dx,t.dy),i.dispatchAction(a(n(),{dx:t.dx,dy:t.dy}))},this),r.off("zoom").on("zoom",function(t){if(this._mouseDownFlag=!1,fc(s,t.scale,t.originX,t.originY),i.dispatchAction(a(n(),{zoom:t.scale,originX:t.originX,originY:t.originY})),this._updateGroup){var e=this.group.scale;this._regionsGroup.traverse(function(t){"text"===t.type&&t.attr("scale",[1/e[0],1/e[1]])})}},this),r.setPointerChecker(function(e,n,a){return o.getViewRectAfterRoam().contain(n,a)&&!pc(e,i,t)})}};var OC="__seriesMapHighDown",EC="__seriesMapCallKey";Hs({type:"map",render:function(t,e,i,n){if(!n||"mapToggleSelect"!==n.type||n.from!==this.uid){var o=this.group;if(o.removeAll(),!t.getHostGeoModel()){if(n&&"geoRoam"===n.type&&"series"===n.componentType&&n.seriesId===t.id)(a=this._mapDraw)&&o.add(a.group);else if(t.needsDrawMap){var a=this._mapDraw||new yc(i,!0);o.add(a.group),a.draw(t,e,i,this,n),this._mapDraw=a}else this._mapDraw&&this._mapDraw.remove(),this._mapDraw=null;t.get("showLegendSymbol")&&e.getComponent("legend")&&this._renderSymbols(t,e,i)}}},remove:function(){this._mapDraw&&this._mapDraw.remove(),this._mapDraw=null,this.group.removeAll()},dispose:function(){this._mapDraw&&this._mapDraw.remove(),this._mapDraw=null},_renderSymbols:function(t,e,i){var n=t.originalData,o=this.group;n.each(n.mapDimension("value"),function(e,i){if(!isNaN(e)){var r=n.getItemLayout(i);if(r&&r.point){var s=r.point,l=r.offset,u=new rM({style:{fill:t.getData().getVisual("color")},shape:{cx:s[0]+9*l,cy:s[1],r:3},silent:!0,z2:8+(l?0:PM+1)});if(!l){var h=t.mainSeries.getData(),c=n.getName(i),d=h.indexOfName(c),f=n.getItemModel(i),p=f.getModel("label"),g=f.getModel("emphasis.label"),m=h.getItemGraphicEl(d),y=A(t.getFormattedLabel(d,"normal"),c),x=A(t.getFormattedLabel(d,"emphasis"),y),_=m[OC],w=Math.random();if(!_){_=m[OC]={};var b=v(xc,!0),S=v(xc,!1);m.on("mouseover",b).on("mouseout",S).on("emphasis",b).on("normal",S)}m[EC]=w,a(_,{recordVersion:w,circle:u,labelModel:p,hoverLabelModel:g,emphasisText:x,normalText:y}),_c(_,!1)}o.add(u)}}})}}),Os({type:"geoRoam",event:"geoRoam",update:"updateTransform"},function(t,e){var i=t.componentType||"series";e.eachComponent({mainType:i,query:t},function(e){var n=e.coordinateSystem;if("geo"===n.type){var o=wc(n,t,e.get("scaleLimit"));e.setCenter&&e.setCenter(o.center),e.setZoom&&e.setZoom(o.zoom),"series"===i&&d(e.seriesGroup,function(t){t.setCenter(o.center),t.setZoom(o.zoom)})}})});var RC=Q;h(bc,Tw),Sc.prototype={constructor:Sc,type:"view",dimensions:["x","y"],setBoundingRect:function(t,e,i,n){return this._rect=new de(t,e,i,n),this._rect},getBoundingRect:function(){return this._rect},setViewRect:function(t,e,i,n){this.transformTo(t,e,i,n),this._viewRect=new de(t,e,i,n)},transformTo:function(t,e,i,n){var o=this.getBoundingRect(),a=this._rawTransformable;a.transform=o.calculateTransform(new de(t,e,i,n)),a.decomposeTransform(),this._updateTransform()},setCenter:function(t){t&&(this._center=t,this._updateCenterAndZoom())},setZoom:function(t){t=t||1;var e=this.zoomLimit;e&&(null!=e.max&&(t=Math.min(e.max,t)),null!=e.min&&(t=Math.max(e.min,t))),this._zoom=t,this._updateCenterAndZoom()},getDefaultCenter:function(){var t=this.getBoundingRect();return[t.x+t.width/2,t.y+t.height/2]},getCenter:function(){return this._center||this.getDefaultCenter()},getZoom:function(){return this._zoom||1},getRoamTransform:function(){return this._roamTransformable.getLocalTransform()},_updateCenterAndZoom:function(){var t=this._rawTransformable.getLocalTransform(),e=this._roamTransformable,i=this.getDefaultCenter(),n=this.getCenter(),o=this.getZoom();n=Q([],n,t),i=Q([],i,t),e.origin=n,e.position=[i[0]-n[0],i[1]-n[1]],e.scale=[o,o],this._updateTransform()},_updateTransform:function(){var t=this._roamTransformable,e=this._rawTransformable;e.parent=t,t.updateTransform(),e.updateTransform(),wt(this.transform||(this.transform=[]),e.transform||xt()),this._rawTransform=e.getLocalTransform(),this.invTransform=this.invTransform||[],Tt(this.invTransform,this.transform),this.decomposeTransform()},getViewRect:function(){return this._viewRect},getViewRectAfterRoam:function(){var t=this.getBoundingRect().clone();return t.applyTransform(this.transform),t},dataToPoint:function(t,e,i){var n=e?this._rawTransform:this.transform;return i=i||[],n?RC(i,t,n):G(i,t)},pointToData:function(t){var e=this.invTransform;return e?RC([],t,e):[t[0],t[1]]},convertToPixel:v(Mc,"dataToPoint"),convertFromPixel:v(Mc,"pointToData"),containPoint:function(t){return this.getViewRectAfterRoam().contain(t[0],t[1])}},h(Sc,Tw),Ic.prototype={constructor:Ic,type:"geo",dimensions:["lng","lat"],containCoord:function(t){for(var e=this.regions,i=0;i<e.length;i++)if(e[i].contain(t))return!0;return!1},transformTo:function(t,e,i,n){var o=this.getBoundingRect(),a=this._invertLongitute;o=o.clone(),a&&(o.y=-o.y-o.height);var r=this._rawTransformable;if(r.transform=o.calculateTransform(new de(t,e,i,n)),r.decomposeTransform(),a){var s=r.scale;s[1]=-s[1]}r.updateTransform(),this._updateTransform()},getRegion:function(t){return this._regionsMap.get(t)},getRegionByCoord:function(t){for(var e=this.regions,i=0;i<e.length;i++)if(e[i].contain(t))return e[i]},addGeoCoord:function(t,e){this._nameCoordMap.set(t,e)},getGeoCoord:function(t){return this._nameCoordMap.get(t)},getBoundingRect:function(){return this._rect},dataToPoint:function(t,e,i){if("string"==typeof t&&(t=this.getGeoCoord(t)),t)return Sc.prototype.dataToPoint.call(this,t,e,i)},convertToPixel:v(Tc,"dataToPoint"),convertFromPixel:v(Tc,"pointToData")},h(Ic,Sc);var zC={dimensions:Ic.prototype.dimensions,create:function(t,e){var i=[];t.eachComponent("geo",function(t,n){var o=t.get("map"),a=t.get("aspectScale"),r=!0,s=AT.retrieveMap(o);s&&s[0]&&"svg"===s[0].type?(null==a&&(a=1),r=!1):null==a&&(a=.75);var l=new Ic(o+n,o,t.get("nameMap"),r);l.aspectScale=a,l.zoomLimit=t.get("scaleLimit"),i.push(l),Dc(l,t),t.coordinateSystem=l,l.model=t,l.resize=Ac,l.resize(t,e)}),t.eachSeries(function(t){if("geo"===t.get("coordinateSystem")){var e=t.get("geoIndex")||0;t.coordinateSystem=i[e]}});var n={};return t.eachSeriesByType("map",function(t){if(!t.getHostGeoModel()){var e=t.getMapType();n[e]=n[e]||[],n[e].push(t)}}),d(n,function(t,n){var a=new Ic(n,n,o(f(t,function(t){return t.get("nameMap")})));a.zoomLimit=T.apply(null,f(t,function(t){return t.get("scaleLimit")})),i.push(a),a.resize=Ac,a.aspectScale=t[0].get("aspectScale"),a.resize(t[0],e),d(t,function(t){t.coordinateSystem=a,Dc(a,t)})}),i},getFilledRegions:function(t,e,i){for(var n=(t||[]).slice(),o=R(),a=0;a<n.length;a++)o.set(n[a].name,n[a]);return d(kC.load(e,i).regions,function(t){var e=t.name;!o.get(e)&&n.push({name:e})}),n}};Es("geo",zC);Rs(function(t){var e={};t.eachSeriesByType("map",function(i){var n=i.getMapType();if(!i.getHostGeoModel()&&!e[n]){var o={};d(i.seriesGroup,function(e){var i=e.coordinateSystem,n=e.originalData;e.get("showLegendSymbol")&&t.getComponent("legend")&&n.each(n.mapDimension("value"),function(t,e){var a=n.getName(e),r=i.getRegion(a);if(r&&!isNaN(t)){var s=o[a]||0,l=i.dataToPoint(r.center);o[a]=s+1,n.setItemLayout(e,{point:l,offset:s})}})});var a=i.getData();a.each(function(t){var e=a.getName(t),i=a.getItemLayout(t)||{};i.showLabel=!o[e],a.setItemLayout(t,i)}),e[n]=!0}})}),zs(function(t){t.eachSeriesByType("map",function(t){var e=t.get("color"),i=t.getModel("itemStyle"),n=i.get("areaColor"),o=i.get("color")||e[t.seriesIndex%e.length];t.getData().setVisual({areaColor:n,color:o})})}),Ns(zT.PROCESSOR.STATISTIC,function(t){var e={};t.eachSeriesByType("map",function(t){var i=t.getHostGeoModel(),n=i?"o"+i.id:"i"+t.getMapType();(e[n]=e[n]||[]).push(t)}),d(e,function(t,e){for(var i=Cc(f(t,function(t){return t.getData()}),t[0].get("mapValueCalculation")),n=0;n<t.length;n++)t[n].originalData=t[n].getData();for(n=0;n<t.length;n++)t[n].seriesGroup=t,t[n].needsDrawMap=0===n&&!t[n].getHostGeoModel(),t[n].setData(i.cloneShallow()),t[n].mainSeries=t[0]})}),Ps(function(t){var e=[];d(t.series,function(t){t&&"map"===t.type&&(e.push(t),t.map=t.map||t.mapType,r(t,t.mapLocation))})}),aC("map",[{type:"mapToggleSelect",event:"mapselectchanged",method:"toggleSelected"},{type:"mapSelect",event:"mapselected",method:"select"},{type:"mapUnSelect",event:"mapunselected",method:"unSelect"}]);var BC=d,VC="\0__link_datas",GC="\0__link_mainData",FC=function(t,e){this.name=t||"",this.depth=0,this.height=0,this.parentNode=null,this.dataIndex=-1,this.children=[],this.viewChildren=[],this.hostTree=e};FC.prototype={constructor:FC,isRemoved:function(){return this.dataIndex<0},eachNode:function(t,e,i){"function"==typeof t&&(i=e,e=t,t=null),_(t=t||{})&&(t={order:t});var n,o=t.order||"preorder",a=this[t.attr||"children"];"preorder"===o&&(n=e.call(i,this));for(var r=0;!n&&r<a.length;r++)a[r].eachNode(t,e,i);"postorder"===o&&e.call(i,this)},updateDepthAndHeight:function(t){var e=0;this.depth=t;for(var i=0;i<this.children.length;i++){var n=this.children[i];n.updateDepthAndHeight(t+1),n.height>e&&(e=n.height)}this.height=e+1},getNodeById:function(t){if(this.getId()===t)return this;for(var e=0,i=this.children,n=i.length;e<n;e++){var o=i[e].getNodeById(t);if(o)return o}},contains:function(t){if(t===this)return!0;for(var e=0,i=this.children,n=i.length;e<n;e++){var o=i[e].contains(t);if(o)return o}},getAncestors:function(t){for(var e=[],i=t?this:this.parentNode;i;)e.push(i),i=i.parentNode;return e.reverse(),e},getValue:function(t){var e=this.hostTree.data;return e.get(e.getDimension(t||"value"),this.dataIndex)},setLayout:function(t,e){this.dataIndex>=0&&this.hostTree.data.setItemLayout(this.dataIndex,t,e)},getLayout:function(){return this.hostTree.data.getItemLayout(this.dataIndex)},getModel:function(t){if(!(this.dataIndex<0)){var e,i=this.hostTree,n=i.data.getItemModel(this.dataIndex),o=this.getLevelModel();return o||0!==this.children.length&&(0===this.children.length||!1!==this.isExpand)||(e=this.getLeavesModel()),n.getModel(t,(o||e||i.hostModel).getModel(t))}},getLevelModel:function(){return(this.hostTree.levelModels||[])[this.depth]},getLeavesModel:function(){return this.hostTree.leavesModel},setVisual:function(t,e){this.dataIndex>=0&&this.hostTree.data.setItemVisual(this.dataIndex,t,e)},getVisual:function(t,e){return this.hostTree.data.getItemVisual(this.dataIndex,t,e)},getRawIndex:function(){return this.hostTree.data.getRawIndex(this.dataIndex)},getId:function(){return this.hostTree.data.getId(this.dataIndex)},isAncestorOf:function(t){for(var e=t.parentNode;e;){if(e===this)return!0;e=e.parentNode}return!1},isDescendantOf:function(t){return t!==this&&t.isAncestorOf(this)}},Bc.prototype={constructor:Bc,type:"tree",eachNode:function(t,e,i){this.root.eachNode(t,e,i)},getNodeByDataIndex:function(t){var e=this.data.getRawIndex(t);return this._nodes[e]},getNodeByName:function(t){return this.root.getNodeByName(t)},update:function(){for(var t=this.data,e=this._nodes,i=0,n=e.length;i<n;i++)e[i].dataIndex=-1;for(var i=0,n=t.count();i<n;i++)e[t.getRawIndex(i)].dataIndex=i},clearLayouts:function(){this.data.clearItemLayouts()}},Bc.createTree=function(t,e,i){function n(t,e){var i=t.value;r=Math.max(r,y(i)?i.length:1),a.push(t);var s=new FC(t.name,o);e?Vc(s,e):o.root=s,o._nodes.push(s);var l=t.children;if(l)for(var u=0;u<l.length;u++)n(l[u],s)}var o=new Bc(e,i.levels,i.leaves),a=[],r=1;n(t),o.root.updateDepthAndHeight(0);var s=vA(a,{coordDimensions:["value"],dimensionsCount:r}),l=new pA(s,e);return l.initData(a),Lc({mainData:l,struct:o,structAttr:"tree"}),o.update(),o},jI.extend({type:"series.tree",layoutInfo:null,layoutMode:"box",getInitialData:function(t){var e={name:t.name,children:t.data},i=t.leaves||{},n={};n.leaves=i;var o=Bc.createTree(e,this,n),a=0;o.eachNode("preorder",function(t){t.depth>a&&(a=t.depth)});var r=t.expandAndCollapse&&t.initialTreeDepth>=0?t.initialTreeDepth:a;return o.root.eachNode("preorder",function(t){var e=t.hostTree.data.getRawDataItem(t.dataIndex);t.isExpand=e&&null!=e.collapsed?!e.collapsed:t.depth<=r}),o.data},getOrient:function(){var t=this.get("orient");return"horizontal"===t?t="LR":"vertical"===t&&(t="TB"),t},setZoom:function(t){this.option.zoom=t},setCenter:function(t){this.option.center=t},formatTooltip:function(t){for(var e=this.getData().tree,i=e.root.children[0],n=e.getNodeByDataIndex(t),o=n.getValue(),a=n.name;n&&n!==i;)a=n.parentNode.name+"."+a,n=n.parentNode;return ea(a+(isNaN(o)||null==o?"":" : "+o))},defaultOption:{zlevel:0,z:2,coordinateSystem:"view",left:"12%",top:"12%",right:"12%",bottom:"12%",layout:"orthogonal",roam:!1,nodeScaleRatio:.4,center:null,zoom:1,orient:"LR",symbol:"emptyCircle",symbolSize:7,expandAndCollapse:!0,initialTreeDepth:2,lineStyle:{color:"#ccc",width:1.5,curveness:.5},itemStyle:{color:"lightsteelblue",borderColor:"#c23531",borderWidth:1.5},label:{show:!0,color:"#555"},leaves:{label:{show:!0}},animationEasing:"linear",animationDuration:700,animationDurationUpdate:1e3}}),Hs({type:"tree",init:function(t,e){this._oldTree,this._mainGroup=new tb,this._controller=new nc(e.getZr()),this._controllerHost={target:this.group},this.group.add(this._mainGroup)},render:function(t,e,i,n){var o=t.getData(),a=t.layoutInfo,r=this._mainGroup,s=t.get("layout");"radial"===s?r.attr("position",[a.x+a.width/2,a.y+a.height/2]):r.attr("position",[a.x,a.y]),this._updateViewCoordSys(t),this._updateController(t,e,i);var l=this._data,u={expandAndCollapse:t.get("expandAndCollapse"),layout:s,orient:t.getOrient(),curvature:t.get("lineStyle.curveness"),symbolRotate:t.get("symbolRotate"),symbolOffset:t.get("symbolOffset"),hoverAnimation:t.get("hoverAnimation"),useNameLabel:!0,fadeIn:!0};o.diff(l).add(function(e){Qc(o,e)&&ed(o,e,null,r,t,u)}).update(function(e,i){var n=l.getItemGraphicEl(i);Qc(o,e)?ed(o,e,n,r,t,u):n&&id(l,i,n,r,t,u)}).remove(function(e){var i=l.getItemGraphicEl(e);i&&id(l,e,i,r,t,u)}).execute(),this._nodeScaleRatio=t.get("nodeScaleRatio"),this._updateNodeAndLinkScale(t),!0===u.expandAndCollapse&&o.eachItemGraphicEl(function(e,n){e.off("click").on("click",function(){i.dispatchAction({type:"treeExpandAndCollapse",seriesId:t.id,dataIndex:n})})}),this._data=o},_updateViewCoordSys:function(t){var e=t.getData(),i=[];e.each(function(t){var n=e.getItemLayout(t);!n||isNaN(n.x)||isNaN(n.y)||i.push([+n.x,+n.y])});var n=[],o=[];dn(i,n,o),o[0]-n[0]==0&&(o[0]+=1,n[0]-=1),o[1]-n[1]==0&&(o[1]+=1,n[1]-=1);var a=t.coordinateSystem=new Sc;a.zoomLimit=t.get("scaleLimit"),a.setBoundingRect(n[0],n[1],o[0]-n[0],o[1]-n[1]),a.setCenter(t.get("center")),a.setZoom(t.get("zoom")),this.group.attr({position:a.position,scale:a.scale}),this._viewCoordSys=a},_updateController:function(t,e,i){var n=this._controller,o=this._controllerHost,a=this.group;n.setPointerChecker(function(e,n,o){var r=a.getBoundingRect();return r.applyTransform(a.transform),r.contain(n,o)&&!pc(e,i,t)}),n.enable(t.get("roam")),o.zoomLimit=t.get("scaleLimit"),o.zoom=t.coordinateSystem.getZoom(),n.off("pan").off("zoom").on("pan",function(e){dc(o,e.dx,e.dy),i.dispatchAction({seriesId:t.id,type:"treeRoam",dx:e.dx,dy:e.dy})},this).on("zoom",function(e){fc(o,e.scale,e.originX,e.originY),i.dispatchAction({seriesId:t.id,type:"treeRoam",zoom:e.scale,originX:e.originX,originY:e.originY}),this._updateNodeAndLinkScale(t)},this)},_updateNodeAndLinkScale:function(t){var e=t.getData(),i=this._getNodeGlobalScale(t),n=[i,i];e.eachItemGraphicEl(function(t,e){t.attr("scale",n)})},_getNodeGlobalScale:function(t){var e=t.coordinateSystem;if("view"!==e.type)return 1;var i=this._nodeScaleRatio,n=e.scale,o=n&&n[0]||1;return((e.getZoom()-1)*i+1)/o},dispose:function(){this._controller&&this._controller.dispose(),this._controllerHost={}},remove:function(){this._mainGroup.removeAll(),this._data=null}}),Os({type:"treeExpandAndCollapse",event:"treeExpandAndCollapse",update:"update"},function(t,e){e.eachComponent({mainType:"series",subType:"tree",query:t},function(e){var i=t.dataIndex,n=e.getData().tree.getNodeByDataIndex(i);n.isExpand=!n.isExpand})}),Os({type:"treeRoam",event:"treeRoam",update:"none"},function(t,e){e.eachComponent({mainType:"series",subType:"tree",query:t},function(e){var i=wc(e.coordinateSystem,t);e.setCenter&&e.setCenter(i.center),e.setZoom&&e.setZoom(i.zoom)})});zs(SD("tree","circle")),Rs(function(t,e){t.eachSeriesByType("tree",function(t){rd(t,e)})}),jI.extend({type:"series.treemap",layoutMode:"box",dependencies:["grid","polar"],_viewRoot:null,defaultOption:{progressive:0,hoverLayerThreshold:1/0,left:"center",top:"middle",right:null,bottom:null,width:"80%",height:"80%",sort:!0,clipWindow:"origin",squareRatio:.5*(1+Math.sqrt(5)),leafDepth:null,drillDownIcon:"▶",zoomToNodeRatio:.1024,roam:!0,nodeClick:"zoomToNode",animation:!0,animationDurationUpdate:900,animationEasing:"quinticInOut",breadcrumb:{show:!0,height:22,left:"center",top:"bottom",emptyItemWidth:25,itemStyle:{color:"rgba(0,0,0,0.7)",borderColor:"rgba(255,255,255,0.7)",borderWidth:1,shadowColor:"rgba(150,150,150,1)",shadowBlur:3,shadowOffsetX:0,shadowOffsetY:0,textStyle:{color:"#fff"}},emphasis:{textStyle:{}}},label:{show:!0,distance:0,padding:5,position:"inside",color:"#fff",ellipsis:!0},upperLabel:{show:!1,position:[0,"50%"],height:20,color:"#fff",ellipsis:!0,verticalAlign:"middle"},itemStyle:{color:null,colorAlpha:null,colorSaturation:null,borderWidth:0,gapWidth:0,borderColor:"#fff",borderColorSaturation:null},emphasis:{upperLabel:{show:!0,position:[0,"50%"],color:"#fff",ellipsis:!0,verticalAlign:"middle"}},visualDimension:0,visualMin:null,visualMax:null,color:[],colorAlpha:null,colorSaturation:null,colorMappingBy:"index",visibleMin:10,childrenVisibleMin:null,levels:[]},getInitialData:function(t,e){var i={name:t.name,children:t.data};cd(i);var n=t.levels||[];n=t.levels=dd(n,e);var o={};return o.levels=n,Bc.createTree(i,this,o).data},optionUpdated:function(){this.resetViewRoot()},formatTooltip:function(t){var e=this.getData(),i=this.getRawValue(t),n=Qo(y(i)?i[0]:i);return ea(e.getName(t)+": "+n)},getDataParams:function(t){var e=jI.prototype.getDataParams.apply(this,arguments),i=this.getData().tree.getNodeByDataIndex(t);return e.treePathInfo=hd(i,this),e},setLayoutInfo:function(t){this.layoutInfo=this.layoutInfo||{},a(this.layoutInfo,t)},mapIdToIndex:function(t){var e=this._idIndexMap;e||(e=this._idIndexMap=R(),this._idIndexMapCount=0);var i=e.get(t);return null==i&&e.set(t,i=this._idIndexMapCount++),i},getViewRoot:function(){return this._viewRoot},resetViewRoot:function(t){t?this._viewRoot=t:t=this._viewRoot;var e=this.getRawData().tree.root;t&&(t===e||e.contains(t))||(this._viewRoot=e)}});var WC=5;fd.prototype={constructor:fd,render:function(t,e,i,n){var o=t.getModel("breadcrumb"),a=this.group;if(a.removeAll(),o.get("show")&&i){var r=o.getModel("itemStyle"),s=r.getModel("textStyle"),l={pos:{left:o.get("left"),right:o.get("right"),top:o.get("top"),bottom:o.get("bottom")},box:{width:e.getWidth(),height:e.getHeight()},emptyItemWidth:o.get("emptyItemWidth"),totalWidth:0,renderList:[]};this._prepare(i,l,s),this._renderContent(t,l,r,s,n),ca(a,l.pos,l.box)}},_prepare:function(t,e,i){for(var n=t;n;n=n.parentNode){var o=n.getModel().get("name"),a=i.getTextRect(o),r=Math.max(a.width+16,e.emptyItemWidth);e.totalWidth+=r+8,e.renderList.push({node:n,text:o,width:r})}},_renderContent:function(t,e,i,n,o){for(var a=0,s=e.emptyItemWidth,l=t.get("breadcrumb.height"),u=ua(e.pos,e.box),h=e.totalWidth,c=e.renderList,d=c.length-1;d>=0;d--){var f=c[d],p=f.node,g=f.width,m=f.text;h>u.width&&(h-=g-s,g=s,m=null);var y=new fM({shape:{points:pd(a,0,g,l,d===c.length-1,0===d)},style:r(i.getItemStyle(),{lineJoin:"bevel",text:m,textFill:n.getTextColor(),textFont:n.getFont()}),z:10,onclick:v(o,p)});this.group.add(y),gd(y,t,p),a+=g+8}},remove:function(){this.group.removeAll()}};var HC=m,ZC=tb,UC=vM,XC=d,jC=["label"],YC=["emphasis","label"],qC=["upperLabel"],KC=["emphasis","upperLabel"],$C=10,JC=1,QC=2,tL=Jb([["fill","color"],["stroke","strokeColor"],["lineWidth","strokeWidth"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),eL=function(t){var e=tL(t);return e.stroke=e.fill=e.lineWidth=null,e};Hs({type:"treemap",init:function(t,e){this._containerGroup,this._storage={nodeGroup:[],background:[],content:[]},this._oldTree,this._breadcrumb,this._controller,this._state="ready"},render:function(t,e,i,n){if(!(l(e.findComponents({mainType:"series",subType:"treemap",query:n}),t)<0)){this.seriesModel=t,this.api=i,this.ecModel=e;var o=sd(n,["treemapZoomToNode","treemapRootToNode"],t),a=n&&n.type,r=t.layoutInfo,s=!this._oldTree,u=this._storage,h="treemapRootToNode"===a&&o&&u?{rootNodeGroup:u.nodeGroup[o.node.getRawIndex()],direction:n.direction}:null,c=this._giveContainerGroup(r),d=this._doRender(c,t,h);s||a&&"treemapZoomToNode"!==a&&"treemapRootToNode"!==a?d.renderFinally():this._doAnimation(c,d,t,h),this._resetController(i),this._renderBreadcrumb(t,i,o)}},_giveContainerGroup:function(t){var e=this._containerGroup;return e||(e=this._containerGroup=new ZC,this._initEvents(e),this.group.add(e)),e.attr("position",[t.x,t.y]),e},_doRender:function(t,e,i){function n(t,e,i,o,a){function r(t){return t.getId()}function s(r,s){var l=null!=r?t[r]:null,u=null!=s?e[s]:null,c=h(l,u,i,a);c&&n(l&&l.viewChildren||[],u&&u.viewChildren||[],c,o,a+1)}o?(e=t,XC(t,function(t,e){!t.isRemoved()&&s(e,e)})):new Us(e,t,r,r).add(s).update(s).remove(v(s,null)).execute()}var o=e.getData().tree,a=this._oldTree,r={nodeGroup:[],background:[],content:[]},s={nodeGroup:[],background:[],content:[]},l=this._storage,u=[],h=v(vd,e,s,l,i,r,u);n(o.root?[o.root]:[],a&&a.root?[a.root]:[],t,o===a||!a,0);var c=function(t){var e={nodeGroup:[],background:[],content:[]};return t&&XC(t,function(t,i){var n=e[i];XC(t,function(t){t&&(n.push(t),t.__tmWillDelete=1)})}),e}(l);return this._oldTree=o,this._storage=s,{lastsForAnimation:r,willDeleteEls:c,renderFinally:function(){XC(c,function(t){XC(t,function(t){t.parent&&t.parent.remove(t)})}),XC(u,function(t){t.invisible=!0,t.dirty()})}}},_doAnimation:function(t,e,i,n){if(i.get("animation")){var o=i.get("animationDurationUpdate"),r=i.get("animationEasing"),s=md();XC(e.willDeleteEls,function(t,e){XC(t,function(t,i){if(!t.invisible){var a,l=t.parent;if(n&&"drillDown"===n.direction)a=l===n.rootNodeGroup?{shape:{x:0,y:0,width:l.__tmNodeWidth,height:l.__tmNodeHeight},style:{opacity:0}}:{style:{opacity:0}};else{var u=0,h=0;l.__tmWillDelete||(u=l.__tmNodeWidth/2,h=l.__tmNodeHeight/2),a="nodeGroup"===e?{position:[u,h],style:{opacity:0}}:{shape:{x:u,y:h,width:0,height:0},style:{opacity:0}}}a&&s.add(t,a,o,r)}})}),XC(this._storage,function(t,i){XC(t,function(t,n){var l=e.lastsForAnimation[i][n],u={};l&&("nodeGroup"===i?l.old&&(u.position=t.position.slice(),t.attr("position",l.old)):(l.old&&(u.shape=a({},t.shape),t.setShape(l.old)),l.fadein?(t.setStyle("opacity",0),u.style={opacity:1}):1!==t.style.opacity&&(u.style={opacity:1})),s.add(t,u,o,r))})},this),this._state="animating",s.done(HC(function(){this._state="ready",e.renderFinally()},this)).start()}},_resetController:function(t){var e=this._controller;e||((e=this._controller=new nc(t.getZr())).enable(this.seriesModel.get("roam")),e.on("pan",HC(this._onPan,this)),e.on("zoom",HC(this._onZoom,this)));var i=new de(0,0,t.getWidth(),t.getHeight());e.setPointerChecker(function(t,e,n){return i.contain(e,n)})},_clearController:function(){var t=this._controller;t&&(t.dispose(),t=null)},_onPan:function(t){if("animating"!==this._state&&(Math.abs(t.dx)>3||Math.abs(t.dy)>3)){var e=this.seriesModel.getData().tree.root;if(!e)return;var i=e.getLayout();if(!i)return;this.api.dispatchAction({type:"treemapMove",from:this.uid,seriesId:this.seriesModel.id,rootRect:{x:i.x+t.dx,y:i.y+t.dy,width:i.width,height:i.height}})}},_onZoom:function(t){var e=t.originX,i=t.originY;if("animating"!==this._state){var n=this.seriesModel.getData().tree.root;if(!n)return;var o=n.getLayout();if(!o)return;var a=new de(o.x,o.y,o.width,o.height),r=this.seriesModel.layoutInfo;e-=r.x,i-=r.y;var s=xt();St(s,s,[-e,-i]),It(s,s,[t.scale,t.scale]),St(s,s,[e,i]),a.applyTransform(s),this.api.dispatchAction({type:"treemapRender",from:this.uid,seriesId:this.seriesModel.id,rootRect:{x:a.x,y:a.y,width:a.width,height:a.height}})}},_initEvents:function(t){t.on("click",function(t){if("ready"===this._state){var e=this.seriesModel.get("nodeClick",!0);if(e){var i=this.findTarget(t.offsetX,t.offsetY);if(i){var n=i.node;if(n.getLayout().isLeafRoot)this._rootToNode(i);else if("zoomToNode"===e)this._zoomToNode(i);else if("link"===e){var o=n.hostTree.data.getItemModel(n.dataIndex),a=o.get("link",!0),r=o.get("target",!0)||"blank";a&&window.open(a,r)}}}}},this)},_renderBreadcrumb:function(t,e,i){i||(i=null!=t.get("leafDepth",!0)?{node:t.getViewRoot()}:this.findTarget(e.getWidth()/2,e.getHeight()/2))||(i={node:t.getData().tree.root}),(this._breadcrumb||(this._breadcrumb=new fd(this.group))).render(t,e,i.node,HC(function(e){"animating"!==this._state&&(ud(t.getViewRoot(),e)?this._rootToNode({node:e}):this._zoomToNode({node:e}))},this))},remove:function(){this._clearController(),this._containerGroup&&this._containerGroup.removeAll(),this._storage={nodeGroup:[],background:[],content:[]},this._state="ready",this._breadcrumb&&this._breadcrumb.remove()},dispose:function(){this._clearController()},_zoomToNode:function(t){this.api.dispatchAction({type:"treemapZoomToNode",from:this.uid,seriesId:this.seriesModel.id,targetNode:t.node})},_rootToNode:function(t){this.api.dispatchAction({type:"treemapRootToNode",from:this.uid,seriesId:this.seriesModel.id,targetNode:t.node})},findTarget:function(t,e){var i;return this.seriesModel.getViewRoot().eachNode({attr:"viewChildren",order:"preorder"},function(n){var o=this._storage.background[n.getRawIndex()];if(o){var a=o.transformCoordToLocal(t,e),r=o.shape;if(!(r.x<=a[0]&&a[0]<=r.x+r.width&&r.y<=a[1]&&a[1]<=r.y+r.height))return!1;i={node:n,offsetX:a[0],offsetY:a[1]}}},this),i}});for(var iL=["treemapZoomToNode","treemapRender","treemapMove"],nL=0;nL<iL.length;nL++)Os({type:iL[nL],update:"updateView"},function(){});Os({type:"treemapRootToNode",update:"updateView"},function(t,e){e.eachComponent({mainType:"series",subType:"treemap",query:t},function(e,i){var n=sd(t,["treemapZoomToNode","treemapRootToNode"],e);if(n){var o=e.getViewRoot();o&&(t.direction=ud(o,n.node)?"rollUp":"drillDown"),e.resetViewRoot(n.node)}})});var oL=d,aL=w,rL=-1,sL=function(t){var e=t.mappingMethod,n=t.type,o=this.option=i(t);this.type=n,this.mappingMethod=e,this._normalizeData=uL[e];var a=lL[n];this.applyVisual=a.applyVisual,this.getColorMapper=a.getColorMapper,this._doMap=a._doMap[e],"piecewise"===e?(wd(o),xd(o)):"category"===e?o.categories?_d(o):wd(o,!0):(k("linear"!==e||o.dataExtent),wd(o))};sL.prototype={constructor:sL,mapValueToVisual:function(t){var e=this._normalizeData(t);return this._doMap(e,t)},getNormalizer:function(){return m(this._normalizeData,this)}};var lL=sL.visualHandlers={color:{applyVisual:Md("color"),getColorMapper:function(){var t=this.option;return m("category"===t.mappingMethod?function(t,e){return!e&&(t=this._normalizeData(t)),Id.call(this,t)}:function(e,i,n){var o=!!n;return!i&&(e=this._normalizeData(e)),n=Ut(e,t.parsedVisual,n),o?n:qt(n,"rgba")},this)},_doMap:{linear:function(t){return qt(Ut(t,this.option.parsedVisual),"rgba")},category:Id,piecewise:function(t,e){var i=Dd.call(this,e);return null==i&&(i=qt(Ut(t,this.option.parsedVisual),"rgba")),i},fixed:Td}},colorHue:bd(function(t,e){return jt(t,e)}),colorSaturation:bd(function(t,e){return jt(t,null,e)}),colorLightness:bd(function(t,e){return jt(t,null,null,e)}),colorAlpha:bd(function(t,e){return Yt(t,e)}),opacity:{applyVisual:Md("opacity"),_doMap:Ad([0,1])},liftZ:{applyVisual:Md("liftZ"),_doMap:{linear:Td,category:Td,piecewise:Td,fixed:Td}},symbol:{applyVisual:function(t,e,i){var n=this.mapValueToVisual(t);if(_(n))i("symbol",n);else if(aL(n))for(var o in n)n.hasOwnProperty(o)&&i(o,n[o])},_doMap:{linear:Sd,category:Id,piecewise:function(t,e){var i=Dd.call(this,e);return null==i&&(i=Sd.call(this,t)),i},fixed:Td}},symbolSize:{applyVisual:Md("symbolSize"),_doMap:Ad([0,1])}},uL={linear:function(t){return zo(t,this.option.dataExtent,[0,1],!0)},piecewise:function(t){var e=this.option.pieceList,i=sL.findPieceIndex(t,e,!0);if(null!=i)return zo(i,[0,e.length-1],[0,1],!0)},category:function(t){var e=this.option.categories?this.option.categoryMap[t]:t;return null==e?rL:e},fixed:B};sL.listVisualTypes=function(){var t=[];return d(lL,function(e,i){t.push(i)}),t},sL.addVisualHandler=function(t,e){lL[t]=e},sL.isValidType=function(t){return lL.hasOwnProperty(t)},sL.eachVisual=function(t,e,i){w(t)?d(t,e,i):e.call(i,t)},sL.mapVisual=function(t,e,i){var n,o=y(t)?[]:w(t)?{}:(n=!0,null);return sL.eachVisual(t,function(t,a){var r=e.call(i,t,a);n?o=r:o[a]=r}),o},sL.retrieveVisuals=function(t){var e,i={};return t&&oL(lL,function(n,o){t.hasOwnProperty(o)&&(i[o]=t[o],e=!0)}),e?i:null},sL.prepareVisualTypes=function(t){if(aL(t)){var e=[];oL(t,function(t,i){e.push(i)}),t=e}else{if(!y(t))return[];t=t.slice()}return t.sort(function(t,e){return"color"===e&&"color"!==t&&0===t.indexOf("color")?1:-1}),t},sL.dependsOn=function(t,e){return"color"===e?!(!t||0!==t.indexOf(e)):t===e},sL.findPieceIndex=function(t,e,i){function n(e,i){var n=Math.abs(e-t);n<a&&(a=n,o=i)}for(var o,a=1/0,r=0,s=e.length;r<s;r++){var l=e[r].value;if(null!=l){if(l===t||"string"==typeof l&&l===t+"")return r;i&&n(l,r)}}for(var r=0,s=e.length;r<s;r++){var u=e[r],h=u.interval,c=u.close;if(h){if(h[0]===-1/0){if(Ld(c[1],t,h[1]))return r}else if(h[1]===1/0){if(Ld(c[0],h[0],t))return r}else if(Ld(c[0],h[0],t)&&Ld(c[1],t,h[1]))return r;i&&n(h[0],r),i&&n(h[1],r)}}if(i)return t===1/0?e.length-1:t===-1/0?0:o};var hL=y,cL="itemStyle",dL={seriesType:"treemap",reset:function(t,e,i,n){var o=t.getData().tree,a=o.root,r=t.getModel(cL);a.isRemoved()||kd(a,{},f(o.levelModels,function(t){return t?t.get(cL):null}),r,t.getViewRoot().getAncestors(),t)}},fL=Math.max,pL=Math.min,gL=T,mL=d,vL=["itemStyle","borderWidth"],yL=["itemStyle","gapWidth"],xL=["upperLabel","show"],_L=["upperLabel","height"],wL={seriesType:"treemap",reset:function(t,e,i,n){var o=i.getWidth(),r=i.getHeight(),s=t.option,l=ha(t.getBoxLayoutParams(),{width:i.getWidth(),height:i.getHeight()}),u=s.size||[],h=Bo(gL(l.width,u[0]),o),c=Bo(gL(l.height,u[1]),r),d=n&&n.type,f=sd(n,["treemapZoomToNode","treemapRootToNode"],t),p="treemapRender"===d||"treemapMove"===d?n.rootRect:null,g=t.getViewRoot(),m=ld(g);if("treemapMove"!==d){var v="treemapZoomToNode"===d?Xd(t,f,g,h,c):p?[p.width,p.height]:[h,c],y=s.sort;y&&"asc"!==y&&"desc"!==y&&(y="desc");var x={squareRatio:s.squareRatio,sort:y,leafDepth:s.leafDepth};g.hostTree.clearLayouts();_={x:0,y:0,width:v[0],height:v[1],area:v[0]*v[1]};g.setLayout(_),Vd(g,x,!1,0);var _=g.getLayout();mL(m,function(t,e){var i=(m[e+1]||g).getValue();t.setLayout(a({dataExtent:[i,i],borderWidth:0,upperHeight:0},_))})}var w=t.getData().tree.root;w.setLayout(jd(l,p,f),!0),t.setLayoutInfo(l),Yd(w,new de(-l.x,-l.y,o,r),m,g,0)}};zs(dL),Rs(wL);var bL=function(t){this._directed=t||!1,this.nodes=[],this.edges=[],this._nodesMap={},this._edgesMap={},this.data,this.edgeData},SL=bL.prototype;SL.type="graph",SL.isDirected=function(){return this._directed},SL.addNode=function(t,e){t=t||""+e;var i=this._nodesMap;if(!i[Kd(t)]){var n=new $d(t,e);return n.hostGraph=this,this.nodes.push(n),i[Kd(t)]=n,n}},SL.getNodeByIndex=function(t){var e=this.data.getRawIndex(t);return this.nodes[e]},SL.getNodeById=function(t){return this._nodesMap[Kd(t)]},SL.addEdge=function(t,e,i){var n=this._nodesMap,o=this._edgesMap;if("number"==typeof t&&(t=this.nodes[t]),"number"==typeof e&&(e=this.nodes[e]),$d.isInstance(t)||(t=n[Kd(t)]),$d.isInstance(e)||(e=n[Kd(e)]),t&&e){var a=t.id+"-"+e.id;if(!o[a]){var r=new Jd(t,e,i);return r.hostGraph=this,this._directed&&(t.outEdges.push(r),e.inEdges.push(r)),t.edges.push(r),t!==e&&e.edges.push(r),this.edges.push(r),o[a]=r,r}}},SL.getEdgeByIndex=function(t){var e=this.edgeData.getRawIndex(t);return this.edges[e]},SL.getEdge=function(t,e){$d.isInstance(t)&&(t=t.id),$d.isInstance(e)&&(e=e.id);var i=this._edgesMap;return this._directed?i[t+"-"+e]:i[t+"-"+e]||i[e+"-"+t]},SL.eachNode=function(t,e){for(var i=this.nodes,n=i.length,o=0;o<n;o++)i[o].dataIndex>=0&&t.call(e,i[o],o)},SL.eachEdge=function(t,e){for(var i=this.edges,n=i.length,o=0;o<n;o++)i[o].dataIndex>=0&&i[o].node1.dataIndex>=0&&i[o].node2.dataIndex>=0&&t.call(e,i[o],o)},SL.breadthFirstTraverse=function(t,e,i,n){if($d.isInstance(e)||(e=this._nodesMap[Kd(e)]),e){for(var o="out"===i?"outEdges":"in"===i?"inEdges":"edges",a=0;a<this.nodes.length;a++)this.nodes[a].__visited=!1;if(!t.call(n,e,null))for(var r=[e];r.length;)for(var s=r.shift(),l=s[o],a=0;a<l.length;a++){var u=l[a],h=u.node1===s?u.node2:u.node1;if(!h.__visited){if(t.call(n,h,s))return;r.push(h),h.__visited=!0}}}},SL.update=function(){for(var t=this.data,e=this.edgeData,i=this.nodes,n=this.edges,o=0,a=i.length;o<a;o++)i[o].dataIndex=-1;for(var o=0,a=t.count();o<a;o++)i[t.getRawIndex(o)].dataIndex=o;e.filterSelf(function(t){var i=n[e.getRawIndex(t)];return i.node1.dataIndex>=0&&i.node2.dataIndex>=0});for(var o=0,a=n.length;o<a;o++)n[o].dataIndex=-1;for(var o=0,a=e.count();o<a;o++)n[e.getRawIndex(o)].dataIndex=o},SL.clone=function(){for(var t=new bL(this._directed),e=this.nodes,i=this.edges,n=0;n<e.length;n++)t.addNode(e[n].id,e[n].dataIndex);for(n=0;n<i.length;n++){var o=i[n];t.addEdge(o.node1.id,o.node2.id,o.dataIndex)}return t},$d.prototype={constructor:$d,degree:function(){return this.edges.length},inDegree:function(){return this.inEdges.length},outDegree:function(){return this.outEdges.length},getModel:function(t){if(!(this.dataIndex<0))return this.hostGraph.data.getItemModel(this.dataIndex).getModel(t)}},Jd.prototype.getModel=function(t){if(!(this.dataIndex<0))return this.hostGraph.edgeData.getItemModel(this.dataIndex).getModel(t)};var ML=function(t,e){return{getValue:function(i){var n=this[t][e];return n.get(n.getDimension(i||"value"),this.dataIndex)},setVisual:function(i,n){this.dataIndex>=0&&this[t][e].setItemVisual(this.dataIndex,i,n)},getVisual:function(i,n){return this[t][e].getItemVisual(this.dataIndex,i,n)},setLayout:function(i,n){this.dataIndex>=0&&this[t][e].setItemLayout(this.dataIndex,i,n)},getLayout:function(){return this[t][e].getItemLayout(this.dataIndex)},getGraphicEl:function(){return this[t][e].getItemGraphicEl(this.dataIndex)},getRawIndex:function(){return this[t][e].getRawIndex(this.dataIndex)}}};h($d,ML("hostGraph","data")),h(Jd,ML("hostGraph","edgeData")),bL.Node=$d,bL.Edge=Jd,ji($d),ji(Jd);var IL=function(t,e,i,n,o){for(var a=new bL(n),r=0;r<t.length;r++)a.addNode(T(t[r].id,t[r].name,r),r);for(var s=[],u=[],h=0,r=0;r<e.length;r++){var c=e[r],d=c.source,f=c.target;a.addEdge(d,f,h)&&(u.push(c),s.push(T(c.id,d+" > "+f)),h++)}var p,g=i.get("coordinateSystem");if("cartesian2d"===g||"polar"===g)p=gl(t,i);else{var m=Ga.get(g),v=m&&"view"!==m.type?m.dimensions||[]:[];l(v,"value")<0&&v.concat(["value"]);var y=vA(t,{coordDimensions:v});(p=new pA(y,i)).initData(t)}var x=new pA(["value"],i);return x.initData(u,s),o&&o(p,x),Lc({mainData:p,struct:a,structAttr:"graph",datas:{node:p,edge:x},datasAttr:{node:"data",edge:"edgeData"}}),a.update(),a},TL=Ws({type:"series.graph",init:function(t){TL.superApply(this,"init",arguments),this.legendDataProvider=function(){return this._categoriesData},this.fillDataTextStyle(t.edges||t.links),this._updateCategoriesData()},mergeOption:function(t){TL.superApply(this,"mergeOption",arguments),this.fillDataTextStyle(t.edges||t.links),this._updateCategoriesData()},mergeDefaultAndTheme:function(t){TL.superApply(this,"mergeDefaultAndTheme",arguments),Ci(t,["edgeLabel"],["show"])},getInitialData:function(t,e){var i=t.edges||t.links||[],n=t.data||t.nodes||[],o=this;if(n&&i)return IL(n,i,this,!0,function(t,i){function n(t){return(t=this.parsePath(t))&&"label"===t[0]?r:t&&"emphasis"===t[0]&&"label"===t[1]?l:this.parentModel}t.wrapMethod("getItemModel",function(t){var e=o._categoriesModels[t.getShallow("category")];return e&&(e.parentModel=t.parentModel,t.parentModel=e),t});var a=o.getModel("edgeLabel"),r=new Po({label:a.option},a.parentModel,e),s=o.getModel("emphasis.edgeLabel"),l=new Po({emphasis:{label:s.option}},s.parentModel,e);i.wrapMethod("getItemModel",function(t){return t.customizeGetParent(n),t})}).data},getGraph:function(){return this.getData().graph},getEdgeData:function(){return this.getGraph().edgeData},getCategoriesData:function(){return this._categoriesData},formatTooltip:function(t,e,i){if("edge"===i){var n=this.getData(),o=this.getDataParams(t,i),a=n.graph.getEdgeByIndex(t),r=n.getName(a.node1.dataIndex),s=n.getName(a.node2.dataIndex),l=[];return null!=r&&l.push(r),null!=s&&l.push(s),l=ea(l.join(" > ")),o.value&&(l+=" : "+ea(o.value)),l}return TL.superApply(this,"formatTooltip",arguments)},_updateCategoriesData:function(){var t=f(this.option.categories||[],function(t){return null!=t.value?t:a({value:0},t)}),e=new pA(["value"],this);e.initData(t),this._categoriesData=e,this._categoriesModels=e.mapArray(function(t){return e.getItemModel(t,!0)})},setZoom:function(t){this.option.zoom=t},setCenter:function(t){this.option.center=t},isAnimationEnabled:function(){return TL.superCall(this,"isAnimationEnabled")&&!("force"===this.get("layout")&&this.get("force.layoutAnimation"))},defaultOption:{zlevel:0,z:2,coordinateSystem:"view",legendHoverLink:!0,hoverAnimation:!0,layout:null,focusNodeAdjacency:!1,circular:{rotateLabel:!1},force:{initLayout:null,repulsion:[0,50],gravity:.1,edgeLength:30,layoutAnimation:!0},left:"center",top:"center",symbol:"circle",symbolSize:10,edgeSymbol:["none","none"],edgeSymbolSize:10,edgeLabel:{position:"middle"},draggable:!1,roam:!1,center:null,zoom:1,nodeScaleRatio:.6,label:{show:!1,formatter:"{b}"},itemStyle:{},lineStyle:{color:"#aaa",width:1,curveness:0,opacity:.5},emphasis:{label:{show:!0}}}}),AL=xM.prototype,DL=wM.prototype,CL=Zn({type:"ec-line",style:{stroke:"#000",fill:null},shape:{x1:0,y1:0,x2:0,y2:0,percent:1,cpx1:null,cpy1:null},buildPath:function(t,e){(Qd(e)?AL:DL).buildPath(t,e)},pointAt:function(t){return Qd(this.shape)?AL.pointAt.call(this,t):DL.pointAt.call(this,t)},tangentAt:function(t){var e=this.shape,i=Qd(e)?[e.x2-e.x1,e.y2-e.y1]:DL.tangentAt.call(this,t);return q(i,i)}}),LL=["fromSymbol","toSymbol"],kL=af.prototype;kL.beforeUpdate=function(){var t=this,e=t.childOfName("fromSymbol"),i=t.childOfName("toSymbol"),n=t.childOfName("label");if(e||i||!n.ignore){for(var o=1,a=this.parent;a;)a.scale&&(o/=a.scale[0]),a=a.parent;var r=t.childOfName("line");if(this.__dirty||r.__dirty){var s=r.shape.percent,l=r.pointAt(0),u=r.pointAt(s),h=U([],u,l);if(q(h,h),e&&(e.attr("position",l),c=r.tangentAt(0),e.attr("rotation",Math.PI/2-Math.atan2(c[1],c[0])),e.attr("scale",[o*s,o*s])),i){i.attr("position",u);var c=r.tangentAt(1);i.attr("rotation",-Math.PI/2-Math.atan2(c[1],c[0])),i.attr("scale",[o*s,o*s])}if(!n.ignore){n.attr("position",u);var d,f,p,g=5*o;if("end"===n.__position)d=[h[0]*g+u[0],h[1]*g+u[1]],f=h[0]>.8?"left":h[0]<-.8?"right":"center",p=h[1]>.8?"top":h[1]<-.8?"bottom":"middle";else if("middle"===n.__position){var m=s/2,v=[(c=r.tangentAt(m))[1],-c[0]],y=r.pointAt(m);v[1]>0&&(v[0]=-v[0],v[1]=-v[1]),d=[y[0]+v[0]*g,y[1]+v[1]*g],f="center",p="bottom";var x=-Math.atan2(c[1],c[0]);u[0]<l[0]&&(x=Math.PI+x),n.attr("rotation",x)}else d=[-h[0]*g+l[0],-h[1]*g+l[1]],f=h[0]>.8?"right":h[0]<-.8?"left":"center",p=h[1]>.8?"bottom":h[1]<-.8?"top":"middle";n.attr({style:{textVerticalAlign:n.__verticalAlign||p,textAlign:n.__textAlign||f},position:d,scale:[o,o]})}}}},kL._createLine=function(t,e,i){var n=t.hostModel,o=nf(t.getItemLayout(e));o.shape.percent=0,Io(o,{shape:{percent:1}},n,e),this.add(o);var a=new aM({name:"label"});this.add(a),d(LL,function(i){var n=ef(i,t,e);this.add(n),this[tf(i)]=t.getItemVisual(e,i)},this),this._updateCommonStl(t,e,i)},kL.updateData=function(t,e,i){var n=t.hostModel,o=this.childOfName("line"),a=t.getItemLayout(e),r={shape:{}};of(r.shape,a),Mo(o,r,n,e),d(LL,function(i){var n=t.getItemVisual(e,i),o=tf(i);if(this[o]!==n){this.remove(this.childOfName(i));var a=ef(i,t,e);this.add(a)}this[o]=n},this),this._updateCommonStl(t,e,i)},kL._updateCommonStl=function(t,e,i){var n=t.hostModel,o=this.childOfName("line"),a=i&&i.lineStyle,s=i&&i.hoverLineStyle,l=i&&i.labelModel,u=i&&i.hoverLabelModel;if(!i||t.hasItemOption){var h=t.getItemModel(e);a=h.getModel("lineStyle").getLineStyle(),s=h.getModel("emphasis.lineStyle").getLineStyle(),l=h.getModel("label"),u=h.getModel("emphasis.label")}var c=t.getItemVisual(e,"color"),f=D(t.getItemVisual(e,"opacity"),a.opacity,1);o.useStyle(r({strokeNoScale:!0,fill:"none",stroke:c,opacity:f},a)),o.hoverStyle=s,d(LL,function(t){var e=this.childOfName(t);e&&(e.setColor(c),e.setStyle({opacity:f}))},this);var p,g,m=l.getShallow("show"),v=u.getShallow("show"),y=this.childOfName("label");if((m||v)&&(p=c||"#000",null==(g=n.getFormattedLabel(e,"normal",t.dataType)))){var x=n.getRawValue(e);g=null==x?t.getName(e):isFinite(x)?Vo(x):x}var _=m?g:null,w=v?A(n.getFormattedLabel(e,"emphasis",t.dataType),g):null,b=y.style;null==_&&null==w||(go(y.style,l,{text:_},{autoColor:p}),y.__textAlign=b.textAlign,y.__verticalAlign=b.textVerticalAlign,y.__position=l.get("position")||"middle"),y.hoverStyle=null!=w?{text:w,textFill:u.getTextColor(!0),fontStyle:u.getShallow("fontStyle"),fontWeight:u.getShallow("fontWeight"),fontSize:u.getShallow("fontSize"),fontFamily:u.getShallow("fontFamily")}:{text:null},y.ignore=!m&&!v,co(this)},kL.highlight=function(){this.trigger("emphasis")},kL.downplay=function(){this.trigger("normal")},kL.updateLayout=function(t,e){this.setLinePoints(t.getItemLayout(e))},kL.setLinePoints=function(t){var e=this.childOfName("line");of(e.shape,t),e.dirty()},u(af,tb);var PL=rf.prototype;PL.isPersistent=function(){return!0},PL.updateData=function(t){var e=this,i=e.group,n=e._lineData;e._lineData=t,n||i.removeAll();var o=uf(t);t.diff(n).add(function(i){sf(e,t,i,o)}).update(function(i,a){lf(e,n,t,a,i,o)}).remove(function(t){i.remove(n.getItemGraphicEl(t))}).execute()},PL.updateLayout=function(){var t=this._lineData;t&&t.eachItemGraphicEl(function(e,i){e.updateLayout(t,i)},this)},PL.incrementalPrepareUpdate=function(t){this._seriesScope=uf(t),this._lineData=null,this.group.removeAll()},PL.incrementalUpdate=function(t,e){for(var i=t.start;i<t.end;i++)if(cf(e.getItemLayout(i))){var n=new this._ctor(e,i,this._seriesScope);n.traverse(function(t){t.isGroup||(t.incremental=t.useHoverLayer=!0)}),this.group.add(n),e.setItemGraphicEl(i,n)}},PL.remove=function(){this._clearIncremental(),this._incremental=null,this.group.removeAll()},PL._clearIncremental=function(){var t=this._incremental;t&&t.clearDisplaybles()};var NL=[],OL=[],EL=[],RL=rn,zL=hw,BL=Math.abs,VL=function(t,e){function i(t){var e=t.getVisual("symbolSize");return e instanceof Array&&(e=(e[0]+e[1])/2),e}var n=[],o=hn,a=[[],[],[]],r=[[],[]],s=[];e/=2,t.eachEdge(function(t,l){var u=t.getLayout(),h=t.getVisual("fromSymbol"),c=t.getVisual("toSymbol");u.__original||(u.__original=[F(u[0]),F(u[1])],u[2]&&u.__original.push(F(u[2])));var d=u.__original;if(null!=u[2]){if(G(a[0],d[0]),G(a[1],d[2]),G(a[2],d[1]),h&&"none"!==h){var f=i(t.node1),p=df(a,d[0],f*e);o(a[0][0],a[1][0],a[2][0],p,n),a[0][0]=n[3],a[1][0]=n[4],o(a[0][1],a[1][1],a[2][1],p,n),a[0][1]=n[3],a[1][1]=n[4]}if(c&&"none"!==c){var f=i(t.node2),p=df(a,d[1],f*e);o(a[0][0],a[1][0],a[2][0],p,n),a[1][0]=n[1],a[2][0]=n[2],o(a[0][1],a[1][1],a[2][1],p,n),a[1][1]=n[1],a[2][1]=n[2]}G(u[0],a[0]),G(u[1],a[2]),G(u[2],a[1])}else{if(G(r[0],d[0]),G(r[1],d[1]),U(s,r[1],r[0]),q(s,s),h&&"none"!==h){f=i(t.node1);Z(r[0],r[0],s,f*e)}if(c&&"none"!==c){f=i(t.node2);Z(r[1],r[1],s,-f*e)}G(u[0],r[0]),G(u[1],r[1])}})},GL=["itemStyle","opacity"],FL=["lineStyle","opacity"];Hs({type:"graph",init:function(t,e){var i=new Au,n=new rf,o=this.group;this._controller=new nc(e.getZr()),this._controllerHost={target:o},o.add(i.group),o.add(n.group),this._symbolDraw=i,this._lineDraw=n,this._firstRender=!0},render:function(t,e,i){var n=t.coordinateSystem;this._model=t,this._nodeScaleRatio=t.get("nodeScaleRatio");var o=this._symbolDraw,a=this._lineDraw,r=this.group;if("view"===n.type){var s={position:n.position,scale:n.scale};this._firstRender?r.attr(s):Mo(r,s,t)}VL(t.getGraph(),this._getNodeGlobalScale(t));var l=t.getData();o.updateData(l);var u=t.getEdgeData();a.updateData(u),this._updateNodeAndLinkScale(),this._updateController(t,e,i),clearTimeout(this._layoutTimeout);var h=t.forceLayout,c=t.get("force.layoutAnimation");h&&this._startForceLayoutIteration(h,c),l.eachItemGraphicEl(function(e,n){var o=l.getItemModel(n);e.off("drag").off("dragend");var a=o.get("draggable");a&&e.on("drag",function(){h&&(h.warmUp(),!this._layouting&&this._startForceLayoutIteration(h,c),h.setFixed(n),l.setItemLayout(n,e.position))},this).on("dragend",function(){h&&h.setUnfixed(n)},this),e.setDraggable(a&&h),e.off("mouseover",e.__focusNodeAdjacency),e.off("mouseout",e.__unfocusNodeAdjacency),o.get("focusNodeAdjacency")&&(e.on("mouseover",e.__focusNodeAdjacency=function(){i.dispatchAction({type:"focusNodeAdjacency",seriesId:t.id,dataIndex:e.dataIndex})}),e.on("mouseout",e.__unfocusNodeAdjacency=function(){i.dispatchAction({type:"unfocusNodeAdjacency",seriesId:t.id})}))},this),l.graph.eachEdge(function(e){var n=e.getGraphicEl();n.off("mouseover",n.__focusNodeAdjacency),n.off("mouseout",n.__unfocusNodeAdjacency),e.getModel().get("focusNodeAdjacency")&&(n.on("mouseover",n.__focusNodeAdjacency=function(){i.dispatchAction({type:"focusNodeAdjacency",seriesId:t.id,edgeDataIndex:e.dataIndex})}),n.on("mouseout",n.__unfocusNodeAdjacency=function(){i.dispatchAction({type:"unfocusNodeAdjacency",seriesId:t.id})}))});var d="circular"===t.get("layout")&&t.get("circular.rotateLabel"),f=l.getLayout("cx"),p=l.getLayout("cy");l.eachItemGraphicEl(function(t,e){var i=t.getSymbolPath();if(d){var n=l.getItemLayout(e),o=Math.atan2(n[1]-p,n[0]-f);o<0&&(o=2*Math.PI+o);var a=n[0]<f;a&&(o-=Math.PI);var r=a?"left":"right";i.setStyle({textRotation:-o,textPosition:r,textOrigin:"center"}),i.hoverStyle&&(i.hoverStyle.textPosition=r)}else i.setStyle({textRotation:0})}),this._firstRender=!1},dispose:function(){this._controller&&this._controller.dispose(),this._controllerHost={}},focusNodeAdjacency:function(t,e,i,n){var o=this._model.getData().graph,a=n.dataIndex,r=n.edgeDataIndex,s=o.getNodeByIndex(a),l=o.getEdgeByIndex(r);(s||l)&&(o.eachNode(function(t){pf(t,GL,.1)}),o.eachEdge(function(t){pf(t,FL,.1)}),s&&(gf(s,GL),d(s.edges,function(t){t.dataIndex<0||(gf(t,FL),gf(t.node1,GL),gf(t.node2,GL))})),l&&(gf(l,FL),gf(l.node1,GL),gf(l.node2,GL)))},unfocusNodeAdjacency:function(t,e,i,n){var o=this._model.getData().graph;o.eachNode(function(t){pf(t,GL)}),o.eachEdge(function(t){pf(t,FL)})},_startForceLayoutIteration:function(t,e){var i=this;!function n(){t.step(function(t){i.updateLayout(i._model),(i._layouting=!t)&&(e?i._layoutTimeout=setTimeout(n,16):n())})}()},_updateController:function(t,e,i){var n=this._controller,o=this._controllerHost,a=this.group;n.setPointerChecker(function(e,n,o){var r=a.getBoundingRect();return r.applyTransform(a.transform),r.contain(n,o)&&!pc(e,i,t)}),"view"===t.coordinateSystem.type?(n.enable(t.get("roam")),o.zoomLimit=t.get("scaleLimit"),o.zoom=t.coordinateSystem.getZoom(),n.off("pan").off("zoom").on("pan",function(e){dc(o,e.dx,e.dy),i.dispatchAction({seriesId:t.id,type:"graphRoam",dx:e.dx,dy:e.dy})}).on("zoom",function(e){fc(o,e.scale,e.originX,e.originY),i.dispatchAction({seriesId:t.id,type:"graphRoam",zoom:e.scale,originX:e.originX,originY:e.originY}),this._updateNodeAndLinkScale(),VL(t.getGraph(),this._getNodeGlobalScale(t)),this._lineDraw.updateLayout()},this)):n.disable()},_updateNodeAndLinkScale:function(){var t=this._model,e=t.getData(),i=this._getNodeGlobalScale(t),n=[i,i];e.eachItemGraphicEl(function(t,e){t.attr("scale",n)})},_getNodeGlobalScale:function(t){var e=t.coordinateSystem;if("view"!==e.type)return 1;var i=this._nodeScaleRatio,n=e.scale,o=n&&n[0]||1;return((e.getZoom()-1)*i+1)/o},updateLayout:function(t){VL(t.getGraph(),this._getNodeGlobalScale(t)),this._symbolDraw.updateLayout(),this._lineDraw.updateLayout()},remove:function(t,e){this._symbolDraw&&this._symbolDraw.remove(),this._lineDraw&&this._lineDraw.remove()}}),Os({type:"focusNodeAdjacency",event:"focusNodeAdjacency",update:"series:focusNodeAdjacency"},function(){}),Os({type:"unfocusNodeAdjacency",event:"unfocusNodeAdjacency",update:"series:unfocusNodeAdjacency"},function(){});Os({type:"graphRoam",event:"graphRoam",update:"none"},function(t,e){e.eachComponent({mainType:"series",query:t},function(e){var i=wc(e.coordinateSystem,t);e.setCenter&&e.setCenter(i.center),e.setZoom&&e.setZoom(i.zoom)})});var WL=Z;Ns(function(t){var e=t.findComponents({mainType:"legend"});e&&e.length&&t.eachSeriesByType("graph",function(t){var i=t.getCategoriesData(),n=t.getGraph().data,o=i.mapArray(i.getName);n.filterSelf(function(t){var i=n.getItemModel(t).getShallow("category");if(null!=i){"number"==typeof i&&(i=o[i]);for(var a=0;a<e.length;a++)if(!e[a].isSelected(i))return!1}return!0})},this)}),zs(SD("graph","circle",null)),zs(function(t){var e={};t.eachSeriesByType("graph",function(t){var i=t.getCategoriesData(),n=t.getData(),o={};i.each(function(n){var a=i.getName(n);o["ec-"+a]=n;var r=i.getItemModel(n).get("itemStyle.color")||t.getColorFromPalette(a,e);i.setItemVisual(n,"color",r)}),i.count()&&n.each(function(t){var e=n.getItemModel(t).getShallow("category");null!=e&&("string"==typeof e&&(e=o["ec-"+e]),n.getItemVisual(t,"color",!0)||n.setItemVisual(t,"color",i.getItemVisual(e,"color")))})})}),zs(function(t){t.eachSeriesByType("graph",function(t){var e=t.getGraph(),i=t.getEdgeData(),n=mf(t.get("edgeSymbol")),o=mf(t.get("edgeSymbolSize")),a="lineStyle.color".split("."),r="lineStyle.opacity".split(".");i.setVisual("fromSymbol",n&&n[0]),i.setVisual("toSymbol",n&&n[1]),i.setVisual("fromSymbolSize",o&&o[0]),i.setVisual("toSymbolSize",o&&o[1]),i.setVisual("color",t.get(a)),i.setVisual("opacity",t.get(r)),i.each(function(t){var n=i.getItemModel(t),o=e.getEdgeByIndex(t),s=mf(n.getShallow("symbol",!0)),l=mf(n.getShallow("symbolSize",!0)),u=n.get(a),h=n.get(r);switch(u){case"source":u=o.node1.getVisual("color");break;case"target":u=o.node2.getVisual("color")}s[0]&&o.setVisual("fromSymbol",s[0]),s[1]&&o.setVisual("toSymbol",s[1]),l[0]&&o.setVisual("fromSymbolSize",l[0]),l[1]&&o.setVisual("toSymbolSize",l[1]),o.setVisual("color",u),o.setVisual("opacity",h)})})}),Rs(function(t,e){t.eachSeriesByType("graph",function(t){var e=t.get("layout"),i=t.coordinateSystem;if(i&&"view"!==i.type){var n=t.getData(),o=[];d(i.dimensions,function(t){o=o.concat(n.mapDimension(t,!0))});for(var a=0;a<n.count();a++){for(var r=[],s=!1,l=0;l<o.length;l++){var u=n.get(o[l],a);isNaN(u)||(s=!0),r.push(u)}s?n.setItemLayout(a,i.dataToPoint(r)):n.setItemLayout(a,[NaN,NaN])}yf(n.graph)}else e&&"none"!==e||vf(t)})}),Rs(function(t){t.eachSeriesByType("graph",function(t){"circular"===t.get("layout")&&xf(t)})}),Rs(function(t){t.eachSeriesByType("graph",function(t){var e=t.coordinateSystem;if(!e||"view"===e.type)if("force"===t.get("layout")){var i=t.preservedPoints||{},n=t.getGraph(),o=n.data,a=n.edgeData,r=t.getModel("force"),s=r.get("initLayout");t.preservedPoints?o.each(function(t){var e=o.getId(t);o.setItemLayout(t,i[e]||[NaN,NaN])}):s&&"none"!==s?"circular"===s&&xf(t):vf(t);var l=o.getDataExtent("value"),u=a.getDataExtent("value"),h=r.get("repulsion"),c=r.get("edgeLength");y(h)||(h=[h,h]),y(c)||(c=[c,c]),c=[c[1],c[0]];var d=o.mapArray("value",function(t,e){var i=o.getItemLayout(e),n=zo(t,l,h);return isNaN(n)&&(n=(h[0]+h[1])/2),{w:n,rep:n,fixed:o.getItemModel(e).get("fixed"),p:!i||isNaN(i[0])||isNaN(i[1])?null:i}}),f=a.mapArray("value",function(t,e){var i=n.getEdgeByIndex(e),o=zo(t,u,c);return isNaN(o)&&(o=(c[0]+c[1])/2),{n1:d[i.node1.dataIndex],n2:d[i.node2.dataIndex],d:o,curveness:i.getModel().get("lineStyle.curveness")||0}}),p=(e=t.coordinateSystem).getBoundingRect(),g=_f(d,f,{rect:p,gravity:r.get("gravity")}),m=g.step;g.step=function(t){for(var e=0,a=d.length;e<a;e++)d[e].fixed&&G(d[e].p,n.getNodeByIndex(e).getLayout());m(function(e,a,r){for(var s=0,l=e.length;s<l;s++)e[s].fixed||n.getNodeByIndex(s).setLayout(e[s].p),i[o.getId(s)]=e[s].p;for(var s=0,l=a.length;s<l;s++){var u=a[s],h=n.getEdgeByIndex(s),c=u.n1.p,d=u.n2.p,f=h.getLayout();(f=f?f.slice():[])[0]=f[0]||[],f[1]=f[1]||[],G(f[0],c),G(f[1],d),+u.curveness&&(f[2]=[(c[0]+d[0])/2-(c[1]-d[1])*u.curveness,(c[1]+d[1])/2-(d[0]-c[0])*u.curveness]),h.setLayout(f)}t&&t(r)})},t.forceLayout=g,t.preservedPoints=i,g.step()}else t.forceLayout=null})}),Es("graphView",{create:function(t,e){var i=[];return t.eachSeriesByType("graph",function(t){var n=t.get("coordinateSystem");if(!n||"view"===n){var o=t.getData(),a=[],r=[];dn(o.mapArray(function(t){var e=o.getItemModel(t);return[+e.get("x"),+e.get("y")]}),a,r),r[0]-a[0]==0&&(r[0]+=1,a[0]-=1),r[1]-a[1]==0&&(r[1]+=1,a[1]-=1);var s=(r[0]-a[0])/(r[1]-a[1]),l=wf(t,e,s);isNaN(s)&&(a=[l.x,l.y],r=[l.x+l.width,l.y+l.height]);var u=r[0]-a[0],h=r[1]-a[1],c=l.width,d=l.height,f=t.coordinateSystem=new Sc;f.zoomLimit=t.get("scaleLimit"),f.setBoundingRect(a[0],a[1],u,h),f.setViewRect(l.x,l.y,c,d),f.setCenter(t.get("center")),f.setZoom(t.get("zoom")),i.push(f)}}),i}});jI.extend({type:"series.gauge",getInitialData:function(t,e){var i=t.data||[];return y(i)||(i=[i]),t.data=i,eC(this,["value"])},defaultOption:{zlevel:0,z:2,center:["50%","50%"],legendHoverLink:!0,radius:"75%",startAngle:225,endAngle:-45,clockwise:!0,min:0,max:100,splitNumber:10,axisLine:{show:!0,lineStyle:{color:[[.2,"#91c7ae"],[.8,"#63869e"],[1,"#c23531"]],width:30}},splitLine:{show:!0,length:30,lineStyle:{color:"#eee",width:2,type:"solid"}},axisTick:{show:!0,splitNumber:5,length:8,lineStyle:{color:"#eee",width:1,type:"solid"}},axisLabel:{show:!0,distance:5,color:"auto"},pointer:{show:!0,length:"80%",width:8},itemStyle:{color:"auto"},title:{show:!0,offsetCenter:[0,"-40%"],color:"#333",fontSize:15},detail:{show:!0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0,borderColor:"#ccc",width:100,height:null,padding:[5,10],offsetCenter:[0,"40%"],color:"auto",fontSize:30}}});var HL=kn.extend({type:"echartsGaugePointer",shape:{angle:0,width:10,r:10,x:0,y:0},buildPath:function(t,e){var i=Math.cos,n=Math.sin,o=e.r,a=e.width,r=e.angle,s=e.x-i(r)*a*(a>=o/3?1:2),l=e.y-n(r)*a*(a>=o/3?1:2);r=e.angle-Math.PI/2,t.moveTo(s,l),t.lineTo(e.x+i(r)*a,e.y+n(r)*a),t.lineTo(e.x+i(e.angle)*o,e.y+n(e.angle)*o),t.lineTo(e.x-i(r)*a,e.y-n(r)*a),t.lineTo(s,l)}}),ZL=2*Math.PI,UL=(Tr.extend({type:"gauge",render:function(t,e,i){this.group.removeAll();var n=t.get("axisLine.lineStyle.color"),o=bf(t,i);this._renderMain(t,e,i,n,o)},dispose:function(){},_renderMain:function(t,e,i,n,o){for(var a=this.group,r=t.getModel("axisLine").getModel("lineStyle"),s=t.get("clockwise"),l=-t.get("startAngle")/180*Math.PI,u=-t.get("endAngle")/180*Math.PI,h=(u-l)%ZL,c=l,d=r.get("width"),f=0;f<n.length;f++){var p=Math.min(Math.max(n[f][0],0),1),g=new uM({shape:{startAngle:c,endAngle:u=l+h*p,cx:o.cx,cy:o.cy,clockwise:s,r0:o.r-d,r:o.r},silent:!0});g.setStyle({fill:n[f][1]}),g.setStyle(r.getLineStyle(["color","borderWidth","borderColor"])),a.add(g),c=u}var m=function(t){if(t<=0)return n[0][1];for(var e=0;e<n.length;e++)if(n[e][0]>=t&&(0===e?0:n[e-1][0])<t)return n[e][1];return n[e-1][1]};if(!s){var v=l;l=u,u=v}this._renderTicks(t,e,i,m,o,l,u,s),this._renderPointer(t,e,i,m,o,l,u,s),this._renderTitle(t,e,i,m,o),this._renderDetail(t,e,i,m,o)},_renderTicks:function(t,e,i,n,o,a,r,s){for(var l=this.group,u=o.cx,h=o.cy,c=o.r,d=+t.get("min"),f=+t.get("max"),p=t.getModel("splitLine"),g=t.getModel("axisTick"),m=t.getModel("axisLabel"),v=t.get("splitNumber"),y=g.get("splitNumber"),x=Bo(p.get("length"),c),_=Bo(g.get("length"),c),w=a,b=(r-a)/v,S=b/y,M=p.getModel("lineStyle").getLineStyle(),I=g.getModel("lineStyle").getLineStyle(),T=0;T<=v;T++){var A=Math.cos(w),D=Math.sin(w);if(p.get("show")){var C=new xM({shape:{x1:A*c+u,y1:D*c+h,x2:A*(c-x)+u,y2:D*(c-x)+h},style:M,silent:!0});"auto"===M.stroke&&C.setStyle({stroke:n(T/v)}),l.add(C)}if(m.get("show")){var L=Sf(Vo(T/v*(f-d)+d),m.get("formatter")),k=m.get("distance"),P=n(T/v);l.add(new aM({style:go({},m,{text:L,x:A*(c-x-k)+u,y:D*(c-x-k)+h,textVerticalAlign:D<-.4?"top":D>.4?"bottom":"middle",textAlign:A<-.4?"left":A>.4?"right":"center"},{autoColor:P}),silent:!0}))}if(g.get("show")&&T!==v){for(var N=0;N<=y;N++){var A=Math.cos(w),D=Math.sin(w),O=new xM({shape:{x1:A*c+u,y1:D*c+h,x2:A*(c-_)+u,y2:D*(c-_)+h},silent:!0,style:I});"auto"===I.stroke&&O.setStyle({stroke:n((T+N/y)/v)}),l.add(O),w+=S}w-=S}else w+=b}},_renderPointer:function(t,e,i,n,o,a,r,s){var l=this.group,u=this._data;if(t.get("pointer.show")){var h=[+t.get("min"),+t.get("max")],c=[a,r],d=t.getData(),f=d.mapDimension("value");d.diff(u).add(function(e){var i=new HL({shape:{angle:a}});Io(i,{shape:{angle:zo(d.get(f,e),h,c,!0)}},t),l.add(i),d.setItemGraphicEl(e,i)}).update(function(e,i){var n=u.getItemGraphicEl(i);Mo(n,{shape:{angle:zo(d.get(f,e),h,c,!0)}},t),l.add(n),d.setItemGraphicEl(e,n)}).remove(function(t){var e=u.getItemGraphicEl(t);l.remove(e)}).execute(),d.eachItemGraphicEl(function(t,e){var i=d.getItemModel(e),a=i.getModel("pointer");t.setShape({x:o.cx,y:o.cy,width:Bo(a.get("width"),o.r),r:Bo(a.get("length"),o.r)}),t.useStyle(i.getModel("itemStyle").getItemStyle()),"auto"===t.style.fill&&t.setStyle("fill",n(zo(d.get(f,e),h,[0,1],!0))),co(t,i.getModel("emphasis.itemStyle").getItemStyle())}),this._data=d}else u&&u.eachItemGraphicEl(function(t){l.remove(t)})},_renderTitle:function(t,e,i,n,o){var a=t.getData(),r=a.mapDimension("value"),s=t.getModel("title");if(s.get("show")){var l=s.get("offsetCenter"),u=o.cx+Bo(l[0],o.r),h=o.cy+Bo(l[1],o.r),c=+t.get("min"),d=+t.get("max"),f=n(zo(t.getData().get(r,0),[c,d],[0,1],!0));this.group.add(new aM({silent:!0,style:go({},s,{x:u,y:h,text:a.getName(0),textAlign:"center",textVerticalAlign:"middle"},{autoColor:f,forceRich:!0})}))}},_renderDetail:function(t,e,i,n,o){var a=t.getModel("detail"),r=+t.get("min"),s=+t.get("max");if(a.get("show")){var l=a.get("offsetCenter"),u=o.cx+Bo(l[0],o.r),h=o.cy+Bo(l[1],o.r),c=Bo(a.get("width"),o.r),d=Bo(a.get("height"),o.r),f=t.getData(),p=f.get(f.mapDimension("value"),0),g=n(zo(p,[r,s],[0,1],!0));this.group.add(new aM({silent:!0,style:go({},a,{x:u,y:h,text:Sf(p,a.get("formatter")),textWidth:isNaN(c)?null:c,textHeight:isNaN(d)?null:d,textAlign:"center",textVerticalAlign:"middle"},{autoColor:g,forceRich:!0})}))}}}),Ws({type:"series.funnel",init:function(t){UL.superApply(this,"init",arguments),this.legendDataProvider=function(){return this.getRawData()},this._defaultLabelLine(t)},getInitialData:function(t,e){return eC(this,["value"])},_defaultLabelLine:function(t){Ci(t,"labelLine",["show"]);var e=t.labelLine,i=t.emphasis.labelLine;e.show=e.show&&t.label.show,i.show=i.show&&t.emphasis.label.show},getDataParams:function(t){var e=this.getData(),i=UL.superCall(this,"getDataParams",t),n=e.mapDimension("value"),o=e.getSum(n);return i.percent=o?+(e.get(n,t)/o*100).toFixed(2):0,i.$vars.push("percent"),i},defaultOption:{zlevel:0,z:2,legendHoverLink:!0,left:80,top:60,right:80,bottom:60,minSize:"0%",maxSize:"100%",sort:"descending",gap:0,funnelAlign:"center",label:{show:!0,position:"outer"},labelLine:{show:!0,length:20,lineStyle:{width:1,type:"solid"}},itemStyle:{borderColor:"#fff",borderWidth:1},emphasis:{label:{show:!0}}}})),XL=Mf.prototype,jL=["itemStyle","opacity"];XL.updateData=function(t,e,i){var n=this.childAt(0),o=t.hostModel,a=t.getItemModel(e),s=t.getItemLayout(e),l=t.getItemModel(e).get(jL);l=null==l?1:l,n.useStyle({}),i?(n.setShape({points:s.points}),n.setStyle({opacity:0}),Io(n,{style:{opacity:l}},o,e)):Mo(n,{style:{opacity:l},shape:{points:s.points}},o,e);var u=a.getModel("itemStyle"),h=t.getItemVisual(e,"color");n.setStyle(r({lineJoin:"round",fill:h},u.getItemStyle(["opacity"]))),n.hoverStyle=u.getModel("emphasis").getItemStyle(),this._updateLabel(t,e),co(this)},XL._updateLabel=function(t,e){var i=this.childAt(1),n=this.childAt(2),o=t.hostModel,a=t.getItemModel(e),r=t.getItemLayout(e).label,s=t.getItemVisual(e,"color");Mo(i,{shape:{points:r.linePoints||r.linePoints}},o,e),Mo(n,{style:{x:r.x,y:r.y}},o,e),n.attr({rotation:r.rotation,origin:[r.x,r.y],z2:10});var l=a.getModel("label"),u=a.getModel("emphasis.label"),h=a.getModel("labelLine"),c=a.getModel("emphasis.labelLine"),s=t.getItemVisual(e,"color");po(n.style,n.hoverStyle={},l,u,{labelFetcher:t.hostModel,labelDataIndex:e,defaultText:t.getName(e),autoColor:s,useInsideStyle:!!r.inside},{textAlign:r.textAlign,textVerticalAlign:r.verticalAlign}),n.ignore=n.normalIgnore=!l.get("show"),n.hoverIgnore=!u.get("show"),i.ignore=i.normalIgnore=!h.get("show"),i.hoverIgnore=!c.get("show"),i.setStyle({stroke:s}),i.setStyle(h.getModel("lineStyle").getLineStyle()),i.hoverStyle=c.getModel("lineStyle").getLineStyle()},u(Mf,tb);Tr.extend({type:"funnel",render:function(t,e,i){var n=t.getData(),o=this._data,a=this.group;n.diff(o).add(function(t){var e=new Mf(n,t);n.setItemGraphicEl(t,e),a.add(e)}).update(function(t,e){var i=o.getItemGraphicEl(e);i.updateData(n,t),a.add(i),n.setItemGraphicEl(t,i)}).remove(function(t){var e=o.getItemGraphicEl(t);a.remove(e)}).execute(),this._data=n},remove:function(){this.group.removeAll(),this._data=null},dispose:function(){}});zs(rC("funnel")),Rs(function(t,e,i){t.eachSeriesByType("funnel",function(t){var i=t.getData(),n=i.mapDimension("value"),o=t.get("sort"),a=If(t,e),r=Tf(i,o),s=[Bo(t.get("minSize"),a.width),Bo(t.get("maxSize"),a.width)],l=i.getDataExtent(n),u=t.get("min"),h=t.get("max");null==u&&(u=Math.min(l[0],0)),null==h&&(h=l[1]);var c=t.get("funnelAlign"),d=t.get("gap"),f=(a.height-d*(i.count()-1))/i.count(),p=a.y,g=function(t,e){var o,r=zo(i.get(n,t)||0,[u,h],s,!0);switch(c){case"left":o=a.x;break;case"center":o=a.x+(a.width-r)/2;break;case"right":o=a.x+a.width-r}return[[o,e],[o+r,e]]};"ascending"===o&&(f=-f,d=-d,p+=a.height,r=r.reverse());for(var m=0;m<r.length;m++){var v=r[m],y=r[m+1],x=i.getItemModel(v).get("itemStyle.height");null==x?x=f:(x=Bo(x,a.height),"ascending"===o&&(x=-x));var _=g(v,p),w=g(y,p+x);p+=x+d,i.setItemLayout(v,{points:_.concat(w.slice().reverse())})}Af(i)})}),Ns(hC("funnel"));var YL=function(t,e,i,n,o){iD.call(this,t,e,i),this.type=n||"value",this.axisIndex=o};YL.prototype={constructor:YL,model:null,isHorizontal:function(){return"horizontal"!==this.coordinateSystem.getModel().get("layout")}},u(YL,iD);var qL=function(t,e,i,n,o,a){e[0]=kf(e[0],i),e[1]=kf(e[1],i),t=t||0;var r=i[1]-i[0];null!=o&&(o=kf(o,[0,r])),null!=a&&(a=Math.max(a,null!=o?o:0)),"all"===n&&(o=a=Math.abs(e[1]-e[0]),n=0);var s=Lf(e,n);e[n]+=t;var l=o||0,u=i.slice();s.sign<0?u[0]+=l:u[1]-=l,e[n]=kf(e[n],u);h=Lf(e,n);null!=o&&(h.sign!==s.sign||h.span<o)&&(e[1-n]=e[n]+s.sign*o);var h=Lf(e,n);return null!=a&&h.span>a&&(e[1-n]=e[n]+h.sign*a),e},KL=d,$L=Math.min,JL=Math.max,QL=Math.floor,tk=Math.ceil,ek=Vo,ik=Math.PI;Pf.prototype={type:"parallel",constructor:Pf,_init:function(t,e,i){var n=t.dimensions,o=t.parallelAxisIndex;KL(n,function(t,i){var n=o[i],a=e.getComponent("parallelAxis",n),r=this._axesMap.set(t,new YL(t,Wl(a),[0,0],a.get("type"),n)),s="category"===r.type;r.onBand=s&&a.get("boundaryGap"),r.inverse=a.get("inverse"),a.axis=r,r.model=a,r.coordinateSystem=a.coordinateSystem=this},this)},update:function(t,e){this._updateAxesFromSeries(this._model,t)},containPoint:function(t){var e=this._makeLayoutInfo(),i=e.axisBase,n=e.layoutBase,o=e.pixelDimIndex,a=t[1-o],r=t[o];return a>=i&&a<=i+e.axisLength&&r>=n&&r<=n+e.layoutLength},getModel:function(){return this._model},_updateAxesFromSeries:function(t,e){e.eachSeries(function(i){if(t.contains(i,e)){var n=i.getData();KL(this.dimensions,function(t){var e=this._axesMap.get(t);e.scale.unionExtentFromData(n,n.mapDimension(t)),Fl(e.scale,e.model)},this)}},this)},resize:function(t,e){this._rect=ha(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()}),this._layoutAxes()},getRect:function(){return this._rect},_makeLayoutInfo:function(){var t,e=this._model,i=this._rect,n=["x","y"],o=["width","height"],a=e.get("layout"),r="horizontal"===a?0:1,s=i[o[r]],l=[0,s],u=this.dimensions.length,h=Nf(e.get("axisExpandWidth"),l),c=Nf(e.get("axisExpandCount")||0,[0,u]),d=e.get("axisExpandable")&&u>3&&u>c&&c>1&&h>0&&s>0,f=e.get("axisExpandWindow");f?(t=Nf(f[1]-f[0],l),f[1]=f[0]+t):(t=Nf(h*(c-1),l),(f=[h*(e.get("axisExpandCenter")||QL(u/2))-t/2])[1]=f[0]+t);var p=(s-t)/(u-c);p<3&&(p=0);var g=[QL(ek(f[0]/h,1))+1,tk(ek(f[1]/h,1))-1],m=p/h*f[0];return{layout:a,pixelDimIndex:r,layoutBase:i[n[r]],layoutLength:s,axisBase:i[n[1-r]],axisLength:i[o[1-r]],axisExpandable:d,axisExpandWidth:h,axisCollapseWidth:p,axisExpandWindow:f,axisCount:u,winInnerIndices:g,axisExpandWindow0Pos:m}},_layoutAxes:function(){var t=this._rect,e=this._axesMap,i=this.dimensions,n=this._makeLayoutInfo(),o=n.layout;e.each(function(t){var e=[0,n.axisLength],i=t.inverse?1:0;t.setExtent(e[i],e[1-i])}),KL(i,function(e,i){var a=(n.axisExpandable?Ef:Of)(i,n),r={horizontal:{x:a.position,y:n.axisLength},vertical:{x:0,y:a.position}},s={horizontal:ik/2,vertical:0},l=[r[o].x+t.x,r[o].y+t.y],u=s[o],h=xt();Mt(h,h,u),St(h,h,l),this._axesLayout[e]={position:l,rotation:u,transform:h,axisNameAvailableWidth:a.axisNameAvailableWidth,axisLabelShow:a.axisLabelShow,nameTruncateMaxWidth:a.nameTruncateMaxWidth,tickDirection:1,labelDirection:1}},this)},getAxis:function(t){return this._axesMap.get(t)},dataToPoint:function(t,e){return this.axisCoordToPoint(this._axesMap.get(e).dataToCoord(t),e)},eachActiveState:function(t,e,i,n){null==i&&(i=0),null==n&&(n=t.count());var o=this._axesMap,a=this.dimensions,r=[],s=[];d(a,function(e){r.push(t.mapDimension(e)),s.push(o.get(e).model)});for(var l=this.hasAxisBrushed(),u=i;u<n;u++){var h;if(l){h="active";for(var c=t.getValues(r,u),f=0,p=a.length;f<p;f++)if("inactive"===s[f].getActiveState(c[f])){h="inactive";break}}else h="normal";e(h,u)}},hasAxisBrushed:function(){for(var t=this.dimensions,e=this._axesMap,i=!1,n=0,o=t.length;n<o;n++)"normal"!==e.get(t[n]).model.getActiveState()&&(i=!0);return i},axisCoordToPoint:function(t,e){return Ao([t,0],this._axesLayout[e].transform)},getAxisLayout:function(t){return i(this._axesLayout[t])},getSlidedAxisExpandWindow:function(t){var e=this._makeLayoutInfo(),i=e.pixelDimIndex,n=e.axisExpandWindow.slice(),o=n[1]-n[0],a=[0,e.axisExpandWidth*(e.axisCount-1)];if(!this.containPoint(t))return{behavior:"none",axisExpandWindow:n};var r,s=t[i]-e.layoutBase-e.axisExpandWindow0Pos,l="slide",u=e.axisCollapseWidth,h=this._model.get("axisExpandSlideTriggerArea"),c=null!=h[0];if(u)c&&u&&s<o*h[0]?(l="jump",r=s-o*h[2]):c&&u&&s>o*(1-h[0])?(l="jump",r=s-o*(1-h[2])):(r=s-o*h[1])>=0&&(r=s-o*(1-h[1]))<=0&&(r=0),(r*=e.axisExpandWidth/u)?qL(r,n,a,"all"):l="none";else{o=n[1]-n[0];(n=[JL(0,a[1]*s/o-o/2)])[1]=$L(a[1],n[0]+o),n[0]=n[1]-o}return{axisExpandWindow:n,behavior:l}}},Ga.register("parallel",{create:function(t,e){var i=[];return t.eachComponent("parallel",function(n,o){var a=new Pf(n,t,e);a.name="parallel_"+o,a.resize(n,e),n.coordinateSystem=a,a.model=n,i.push(a)}),t.eachSeries(function(e){if("parallel"===e.get("coordinateSystem")){var i=t.queryComponents({mainType:"parallel",index:e.get("parallelIndex"),id:e.get("parallelId")})[0];e.coordinateSystem=i.coordinateSystem}}),i}});var nk=sI.extend({type:"baseParallelAxis",axis:null,activeIntervals:[],getAreaSelectStyle:function(){return Jb([["fill","color"],["lineWidth","borderWidth"],["stroke","borderColor"],["width","width"],["opacity","opacity"]])(this.getModel("areaSelectStyle"))},setActiveIntervals:function(t){var e=this.activeIntervals=i(t);if(e)for(var n=e.length-1;n>=0;n--)Go(e[n])},getActiveState:function(t){var e=this.activeIntervals;if(!e.length)return"normal";if(null==t||isNaN(t))return"inactive";if(1===e.length){var i=e[0];if(i[0]<=t&&t<=i[1])return"active"}else for(var n=0,o=e.length;n<o;n++)if(e[n][0]<=t&&t<=e[n][1])return"active";return"inactive"}});n(nk.prototype,WA),PD("parallel",nk,function(t,e){return e.type||(e.data?"category":"value")},{type:"value",dim:null,areaSelectStyle:{width:20,borderWidth:1,borderColor:"rgba(160,197,232)",color:"rgba(160,197,232)",opacity:.3},realtime:!0,z:10}),sI.extend({type:"parallel",dependencies:["parallelAxis"],coordinateSystem:null,dimensions:null,parallelAxisIndex:null,layoutMode:"box",defaultOption:{zlevel:0,z:0,left:80,top:60,right:80,bottom:60,layout:"horizontal",axisExpandable:!1,axisExpandCenter:null,axisExpandCount:0,axisExpandWidth:50,axisExpandRate:17,axisExpandDebounce:50,axisExpandSlideTriggerArea:[-.15,.05,.4],axisExpandTriggerOn:"click",parallelAxisDefault:null},init:function(){sI.prototype.init.apply(this,arguments),this.mergeOption({})},mergeOption:function(t){var e=this.option;t&&n(e,t,!0),this._initDimensions()},contains:function(t,e){var i=t.get("parallelIndex");return null!=i&&e.getComponent("parallel",i)===this},setAxisExpand:function(t){d(["axisExpandable","axisExpandCenter","axisExpandCount","axisExpandWidth","axisExpandWindow"],function(e){t.hasOwnProperty(e)&&(this.option[e]=t[e])},this)},_initDimensions:function(){var t=this.dimensions=[],e=this.parallelAxisIndex=[];d(g(this.dependentModels.parallelAxis,function(t){return(t.get("parallelIndex")||0)===this.componentIndex},this),function(i){t.push("dim"+i.get("dim")),e.push(i.componentIndex)})}});Os({type:"axisAreaSelect",event:"axisAreaSelected"},function(t,e){e.eachComponent({mainType:"parallelAxis",query:t},function(e){e.axis.model.setActiveIntervals(t.intervals)})}),Os("parallelAxisExpand",function(t,e){e.eachComponent({mainType:"parallel",query:t},function(e){e.setAxisExpand(t)})});var ok=v,ak=d,rk=f,sk=Math.min,lk=Math.max,uk=Math.pow,hk=1e4,ck=6,dk=6,fk="globalPan",pk={w:[0,0],e:[0,1],n:[1,0],s:[1,1]},gk={w:"ew",e:"ew",n:"ns",s:"ns",ne:"nesw",sw:"nesw",nw:"nwse",se:"nwse"},mk={brushStyle:{lineWidth:2,stroke:"rgba(0,0,0,0.3)",fill:"rgba(0,0,0,0.1)"},transformable:!0,brushMode:"single",removeOnClick:!1},vk=0;Rf.prototype={constructor:Rf,enableBrush:function(t){return this._brushType&&Bf(this),t.brushType&&zf(this,t),this},setPanels:function(t){if(t&&t.length){var e=this._panels={};d(t,function(t){e[t.panelId]=i(t)})}else this._panels=null;return this},mount:function(t){t=t||{},this._enableGlobalPan=t.enableGlobalPan;var e=this.group;return this._zr.add(e),e.attr({position:t.position||[0,0],rotation:t.rotation||0,scale:t.scale||[1,1]}),this._transform=e.getLocalTransform(),this},eachCover:function(t,e){ak(this._covers,t,e)},updateCovers:function(t){function e(t,e){return(null!=t.id?t.id:a+e)+"-"+t.brushType}function o(e,i){var n=t[e];if(null!=i&&r[i]===u)s[e]=r[i];else{var o=s[e]=null!=i?(r[i].__brushOption=n,r[i]):Gf(l,Vf(l,n));Hf(l,o)}}t=f(t,function(t){return n(i(mk),t,!0)});var a="\0-brush-index-",r=this._covers,s=this._covers=[],l=this,u=this._creatingCover;return new Us(r,t,function(t,i){return e(t.__brushOption,i)},e).add(o).update(o).remove(function(t){r[t]!==u&&l.group.remove(r[t])}).execute(),this},unmount:function(){return this.enableBrush(!1),jf(this),this._zr.remove(this.group),this},dispose:function(){this.unmount(),this.off()}},h(Rf,fw);var yk={mousedown:function(t){if(this._dragging)gp.call(this,t);else if(!t.target||!t.target.draggable){cp(t);var e=this.group.transformCoordToLocal(t.offsetX,t.offsetY);this._creatingCover=null,(this._creatingPanel=Uf(this,t,e))&&(this._dragging=!0,this._track=[e.slice()])}},mousemove:function(t){var e=this.group.transformCoordToLocal(t.offsetX,t.offsetY);if(hp(this,t,e),this._dragging){cp(t);var i=fp(this,t,e,!1);i&&Yf(this,i)}},mouseup:gp},xk={lineX:mp(0),lineY:mp(1),rect:{createCover:function(t,e){return $f(ok(ap,function(t){return t},function(t){return t}),t,e,["w","e","n","s","se","sw","ne","nw"])},getCreatingRange:function(t){var e=Kf(t);return ip(e[1][0],e[1][1],e[0][0],e[0][1])},updateCoverShape:function(t,e,i,n){Jf(t,e,i,n)},updateCommon:Qf,contain:dp},polygon:{createCover:function(t,e){var i=new tb;return i.add(new pM({name:"main",style:ep(e),silent:!0})),i},getCreatingRange:function(t){return t},endCreating:function(t,e){e.remove(e.childAt(0)),e.add(new fM({name:"main",draggable:!0,drift:ok(rp,t,e),ondragend:ok(Yf,t,{isEnd:!0})}))},updateCoverShape:function(t,e,i,n){e.childAt(0).setShape({points:lp(t,e,i)})},updateCommon:Qf,contain:dp}},_k=["axisLine","axisTickLabel","axisName"],wk=Fs({type:"parallelAxis",init:function(t,e){wk.superApply(this,"init",arguments),(this._brushController=new Rf(e.getZr())).on("brush",m(this._onBrush,this))},render:function(t,e,i,n){if(!wp(t,e,n)){this.axisModel=t,this.api=i,this.group.removeAll();var o=this._axisGroup;if(this._axisGroup=new tb,this.group.add(this._axisGroup),t.get("show")){var r=Sp(t,e),s=r.coordinateSystem,l=t.getAreaSelectStyle(),u=l.width,h=t.axis.dim,c=a({strokeContainThreshold:u},s.getAxisLayout(h)),f=new BD(t,c);d(_k,f.add,f),this._axisGroup.add(f.getGroup()),this._refreshBrushController(c,l,t,r,u,i);var p=n&&!1===n.animation?null:t;Co(o,this._axisGroup,p)}}},_refreshBrushController:function(t,e,i,n,o,a){var r=i.axis.getExtent(),s=r[1]-r[0],l=Math.min(30,.1*Math.abs(s)),u=de.create({x:r[0],y:-o/2,width:s,height:o});u.x-=l,u.width+=2*l,this._brushController.mount({enableGlobalPan:!0,rotation:t.rotation,position:t.position}).setPanels([{panelId:"pl",clipPath:vp(u),isTargetByCursor:xp(u,a,n),getLinearBrushOtherExtent:yp(u,0)}]).enableBrush({brushType:"lineX",brushStyle:e,removeOnClick:!0}).updateCovers(bp(i))},_onBrush:function(t,e){var i=this.axisModel,n=i.axis,o=f(t,function(t){return[n.coordToData(t.range[0],!0),n.coordToData(t.range[1],!0)]});(!i.option.realtime===e.isEnd||e.removeOnClick)&&this.api.dispatchAction({type:"axisAreaSelect",parallelAxisId:i.id,intervals:o})},dispose:function(){this._brushController.dispose()}});Fs({type:"parallel",render:function(t,e,i){this._model=t,this._api=i,this._handlers||(this._handlers={},d(bk,function(t,e){i.getZr().on(e,this._handlers[e]=m(t,this))},this)),Pr(this,"_throttledDispatchExpand",t.get("axisExpandRate"),"fixRate")},dispose:function(t,e){d(this._handlers,function(t,i){e.getZr().off(i,t)}),this._handlers=null},_throttledDispatchExpand:function(t){this._dispatchExpand(t)},_dispatchExpand:function(t){t&&this._api.dispatchAction(a({type:"parallelAxisExpand"},t))}});var bk={mousedown:function(t){Mp(this,"click")&&(this._mouseDownPoint=[t.offsetX,t.offsetY])},mouseup:function(t){var e=this._mouseDownPoint;if(Mp(this,"click")&&e){var i=[t.offsetX,t.offsetY];if(Math.pow(e[0]-i[0],2)+Math.pow(e[1]-i[1],2)>5)return;var n=this._model.coordinateSystem.getSlidedAxisExpandWindow([t.offsetX,t.offsetY]);"none"!==n.behavior&&this._dispatchExpand({axisExpandWindow:n.axisExpandWindow})}this._mouseDownPoint=null},mousemove:function(t){if(!this._mouseDownPoint&&Mp(this,"mousemove")){var e=this._model,i=e.coordinateSystem.getSlidedAxisExpandWindow([t.offsetX,t.offsetY]),n=i.behavior;"jump"===n&&this._throttledDispatchExpand.debounceNextCall(e.get("axisExpandDebounce")),this._throttledDispatchExpand("none"===n?null:{axisExpandWindow:i.axisExpandWindow,animation:"jump"===n&&null})}}};Ps(function(t){Df(t),Cf(t)}),jI.extend({type:"series.parallel",dependencies:["parallel"],visualColorAccessPath:"lineStyle.color",getInitialData:function(t,e){var i=this.getSource();return Ip(i,this),gl(i,this)},getRawIndicesByActiveState:function(t){var e=this.coordinateSystem,i=this.getData(),n=[];return e.eachActiveState(i,function(e,o){t===e&&n.push(i.getRawIndex(o))}),n},defaultOption:{zlevel:0,z:2,coordinateSystem:"parallel",parallelIndex:0,label:{show:!1},inactiveOpacity:.05,activeOpacity:1,lineStyle:{width:1,opacity:.45,type:"solid"},emphasis:{label:{show:!1}},progressive:500,smooth:!1,animationEasing:"linear"}});var Sk=.3,Mk=(Tr.extend({type:"parallel",init:function(){this._dataGroup=new tb,this.group.add(this._dataGroup),this._data,this._initialized},render:function(t,e,i,n){var o=this._dataGroup,a=t.getData(),r=this._data,s=t.coordinateSystem,l=s.dimensions,u=Lp(t);if(a.diff(r).add(function(t){kp(Cp(a,o,t,l,s),a,t,u)}).update(function(e,i){var o=r.getItemGraphicEl(i),h=Dp(a,e,l,s);a.setItemGraphicEl(e,o),Mo(o,{shape:{points:h}},n&&!1===n.animation?null:t,e),kp(o,a,e,u)}).remove(function(t){var e=r.getItemGraphicEl(t);o.remove(e)}).execute(),!this._initialized){this._initialized=!0;var h=Ap(s,t,function(){setTimeout(function(){o.removeClipPath()})});o.setClipPath(h)}this._data=a},incrementalPrepareRender:function(t,e,i){this._initialized=!0,this._data=null,this._dataGroup.removeAll()},incrementalRender:function(t,e,i){for(var n=e.getData(),o=e.coordinateSystem,a=o.dimensions,r=Lp(e),s=t.start;s<t.end;s++){var l=Cp(n,this._dataGroup,s,a,o);l.incremental=!0,kp(l,n,s,r)}},dispose:function(){},remove:function(){this._dataGroup&&this._dataGroup.removeAll(),this._data=null}}),["lineStyle","normal","opacity"]);zs({seriesType:"parallel",reset:function(t,e,i){var n=t.getModel("itemStyle"),o=t.getModel("lineStyle"),a=e.get("color"),r=o.get("color")||n.get("color")||a[t.seriesIndex%a.length],s=t.get("inactiveOpacity"),l=t.get("activeOpacity"),u=t.getModel("lineStyle").getLineStyle(),h=t.coordinateSystem,c=t.getData(),d={normal:u.opacity,active:l,inactive:s};return c.setVisual("color",r),{progress:function(t,e){h.eachActiveState(e,function(t,i){var n=d[t];if("normal"===t&&e.hasItemOption){var o=e.getItemModel(i).get(Mk,!0);null!=o&&(n=o)}e.setItemVisual(i,"opacity",n)},t.start,t.end)}}}});var Ik=jI.extend({type:"series.sankey",layoutInfo:null,getInitialData:function(t){var e=t.edges||t.links,i=t.data||t.nodes;if(i&&e)return IL(i,e,this,!0).data},setNodePosition:function(t,e){var i=this.option.data[t];i.localX=e[0],i.localY=e[1]},getGraph:function(){return this.getData().graph},getEdgeData:function(){return this.getGraph().edgeData},formatTooltip:function(t,e,i){if("edge"===i){var n=this.getDataParams(t,i),o=n.data,a=o.source+" -- "+o.target;return n.value&&(a+=" : "+n.value),ea(a)}return Ik.superCall(this,"formatTooltip",t,e)},optionUpdated:function(){var t=this.option;!0===t.focusNodeAdjacency&&(t.focusNodeAdjacency="allEdges")},defaultOption:{zlevel:0,z:2,coordinateSystem:"view",layout:null,left:"5%",top:"5%",right:"20%",bottom:"5%",orient:"horizontal",nodeWidth:20,nodeGap:8,draggable:!0,focusNodeAdjacency:!1,layoutIterations:32,label:{show:!0,position:"right",color:"#000",fontSize:12},itemStyle:{borderWidth:1,borderColor:"#333"},lineStyle:{color:"#314656",opacity:.2,curveness:.5},emphasis:{label:{show:!0},lineStyle:{opacity:.6}},animationEasing:"linear",animationDuration:1e3}}),Tk=["itemStyle","opacity"],Ak=["lineStyle","opacity"],Dk=Zn({shape:{x1:0,y1:0,x2:0,y2:0,cpx1:0,cpy1:0,cpx2:0,cpy2:0,extent:0,orient:""},buildPath:function(t,e){var i=e.extent;"vertical"===e.orient?(t.moveTo(e.x1,e.y1),t.bezierCurveTo(e.cpx1,e.cpy1,e.cpx2,e.cpy2,e.x2,e.y2),t.lineTo(e.x2+i,e.y2),t.bezierCurveTo(e.cpx2+i,e.cpy2,e.cpx1+i,e.cpy1,e.x1+i,e.y1)):(t.moveTo(e.x1,e.y1),t.bezierCurveTo(e.cpx1,e.cpy1,e.cpx2,e.cpy2,e.x2,e.y2),t.lineTo(e.x2,e.y2+i),t.bezierCurveTo(e.cpx2,e.cpy2+i,e.cpx1,e.cpy1+i,e.x1,e.y1+i)),t.closePath()}});Hs({type:"sankey",_model:null,_focusAdjacencyDisabled:!1,render:function(t,e,i){var n=this,o=t.getGraph(),a=this.group,r=t.layoutInfo,s=r.width,l=r.height,u=t.getData(),h=t.getData("edge"),c=t.get("orient");this._model=t,a.removeAll(),a.attr("position",[r.x,r.y]),o.eachEdge(function(e){var i=new Dk;i.dataIndex=e.dataIndex,i.seriesIndex=t.seriesIndex,i.dataType="edge";var n,o,r,u,d,f,p,g,m=e.getModel("lineStyle"),v=m.get("curveness"),y=e.node1.getLayout(),x=e.node1.getModel(),_=x.get("localX"),w=x.get("localY"),b=e.node2.getLayout(),S=e.node2.getModel(),M=S.get("localX"),I=S.get("localY"),T=e.getLayout();switch(i.shape.extent=Math.max(1,T.dy),i.shape.orient=c,"vertical"===c?(n=(null!=_?_*s:y.x)+T.sy,o=(null!=w?w*l:y.y)+y.dy,r=(null!=M?M*s:b.x)+T.ty,d=n,f=o*(1-v)+(u=null!=I?I*l:b.y)*v,p=r,g=o*v+u*(1-v)):(n=(null!=_?_*s:y.x)+y.dx,o=(null!=w?w*l:y.y)+T.sy,d=n*(1-v)+(r=null!=M?M*s:b.x)*v,f=o,p=n*v+r*(1-v),g=u=(null!=I?I*l:b.y)+T.ty),i.setShape({x1:n,y1:o,x2:r,y2:u,cpx1:d,cpy1:f,cpx2:p,cpy2:g}),i.setStyle(m.getItemStyle()),i.style.fill){case"source":i.style.fill=e.node1.getVisual("color");break;case"target":i.style.fill=e.node2.getVisual("color")}co(i,e.getModel("emphasis.lineStyle").getItemStyle()),a.add(i),h.setItemGraphicEl(e.dataIndex,i)}),o.eachNode(function(e){var i=e.getLayout(),n=e.getModel(),o=n.get("localX"),r=n.get("localY"),h=n.getModel("label"),c=n.getModel("emphasis.label"),d=new vM({shape:{x:null!=o?o*s:i.x,y:null!=r?r*l:i.y,width:i.dx,height:i.dy},style:n.getModel("itemStyle").getItemStyle()}),f=e.getModel("emphasis.itemStyle").getItemStyle();po(d.style,f,h,c,{labelFetcher:t,labelDataIndex:e.dataIndex,defaultText:e.id,isRectText:!0}),d.setStyle("fill",e.getVisual("color")),co(d,f),a.add(d),u.setItemGraphicEl(e.dataIndex,d),d.dataType="node"}),u.eachItemGraphicEl(function(e,o){var a=u.getItemModel(o);a.get("draggable")&&(e.drift=function(e,a){n._focusAdjacencyDisabled=!0,this.shape.x+=e,this.shape.y+=a,this.dirty(),i.dispatchAction({type:"dragNode",seriesId:t.id,dataIndex:u.getRawIndex(o),localX:this.shape.x/s,localY:this.shape.y/l})},e.ondragend=function(){n._focusAdjacencyDisabled=!1},e.draggable=!0,e.cursor="move"),a.get("focusNodeAdjacency")&&(e.off("mouseover").on("mouseover",function(){n._focusAdjacencyDisabled||i.dispatchAction({type:"focusNodeAdjacency",seriesId:t.id,dataIndex:e.dataIndex})}),e.off("mouseout").on("mouseout",function(){n._focusAdjacencyDisabled||i.dispatchAction({type:"unfocusNodeAdjacency",seriesId:t.id})}))}),h.eachItemGraphicEl(function(e,o){h.getItemModel(o).get("focusNodeAdjacency")&&(e.off("mouseover").on("mouseover",function(){n._focusAdjacencyDisabled||i.dispatchAction({type:"focusNodeAdjacency",seriesId:t.id,edgeDataIndex:e.dataIndex})}),e.off("mouseout").on("mouseout",function(){n._focusAdjacencyDisabled||i.dispatchAction({type:"unfocusNodeAdjacency",seriesId:t.id})}))}),!this._data&&t.get("animation")&&a.setClipPath(Rp(a.getBoundingRect(),t,function(){a.removeClipPath()})),this._data=t.getData()},dispose:function(){},focusNodeAdjacency:function(t,e,i,n){var o=this._model.getData(),a=o.graph,r=n.dataIndex,s=o.getItemModel(r),l=n.edgeDataIndex;if(null!=r||null!=l){var u=a.getNodeByIndex(r),h=a.getEdgeByIndex(l);if(a.eachNode(function(t){Op(t,Tk,.1)}),a.eachEdge(function(t){Op(t,Ak,.1)}),u){Ep(u,Tk);var c=s.get("focusNodeAdjacency");"outEdges"===c?d(u.outEdges,function(t){t.dataIndex<0||(Ep(t,Ak),Ep(t.node2,Tk))}):"inEdges"===c?d(u.inEdges,function(t){t.dataIndex<0||(Ep(t,Ak),Ep(t.node1,Tk))}):"allEdges"===c&&d(u.edges,function(t){t.dataIndex<0||(Ep(t,Ak),Ep(t.node1,Tk),Ep(t.node2,Tk))})}h&&(Ep(h,Ak),Ep(h.node1,Tk),Ep(h.node2,Tk))}},unfocusNodeAdjacency:function(t,e,i,n){var o=this._model.getGraph();o.eachNode(function(t){Op(t,Tk)}),o.eachEdge(function(t){Op(t,Ak)})}}),Os({type:"dragNode",event:"dragNode",update:"update"},function(t,e){e.eachComponent({mainType:"series",subType:"sankey",query:t},function(e){e.setNodePosition(t.dataIndex,[t.localX,t.localY])})});Rs(function(t,e,i){t.eachSeriesByType("sankey",function(t){var i=t.get("nodeWidth"),n=t.get("nodeGap"),o=Bp(t,e);t.layoutInfo=o;var a=o.width,r=o.height,s=t.getGraph(),l=s.nodes,u=s.edges;Gp(l),Vp(l,u,i,n,a,r,0!==g(l,function(t){return 0===t.getLayout().value}).length?0:t.get("layoutIterations"),t.get("orient"))})}),zs(function(t,e){t.eachSeriesByType("sankey",function(t){var e=t.getGraph().nodes;if(e.length){var i=1/0,n=-1/0;d(e,function(t){var e=t.getLayout().value;e<i&&(i=e),e>n&&(n=e)}),d(e,function(e){var o=new sL({type:"color",mappingMethod:"linear",dataExtent:[i,n],visual:t.get("color")}).mapValueToVisual(e.getLayout().value);e.setVisual("color",o);var a=e.getModel().get("itemStyle.color");null!=a&&e.setVisual("color",a)})}})});var Ck={_baseAxisDim:null,getInitialData:function(t,e){var i,n,o=e.getComponent("xAxis",this.get("xAxisIndex")),a=e.getComponent("yAxis",this.get("yAxisIndex")),r=o.get("type"),s=a.get("type");"category"===r?(t.layout="horizontal",i=o.getOrdinalMeta(),n=!0):"category"===s?(t.layout="vertical",i=a.getOrdinalMeta(),n=!0):t.layout=t.layout||"horizontal";var l=["x","y"],u="horizontal"===t.layout?0:1,h=this._baseAxisDim=l[u],c=l[1-u],f=[o,a],p=f[u].get("type"),g=f[1-u].get("type"),m=t.data;if(m&&n){var v=[];d(m,function(t,e){var i;t.value&&y(t.value)?(i=t.value.slice(),t.value.unshift(e)):y(t)?(i=t.slice(),t.unshift(e)):i=t,v.push(i)}),t.data=v}var x=this.defaultValueDimensions;return eC(this,{coordDimensions:[{name:h,type:Ys(p),ordinalMeta:i,otherDims:{tooltip:!1,itemName:0},dimsDef:["base"]},{name:c,type:Ys(g),dimsDef:x.slice()}],dimensionsCount:x.length+1})},getBaseAxis:function(){var t=this._baseAxisDim;return this.ecModel.getComponent(t+"Axis",this.get(t+"AxisIndex")).axis}};h(jI.extend({type:"series.boxplot",dependencies:["xAxis","yAxis","grid"],defaultValueDimensions:[{name:"min",defaultTooltip:!0},{name:"Q1",defaultTooltip:!0},{name:"median",defaultTooltip:!0},{name:"Q3",defaultTooltip:!0},{name:"max",defaultTooltip:!0}],dimensions:null,defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,hoverAnimation:!0,layout:null,boxWidth:[7,50],itemStyle:{color:"#fff",borderWidth:1},emphasis:{itemStyle:{borderWidth:2,shadowBlur:5,shadowOffsetX:2,shadowOffsetY:2,shadowColor:"rgba(0,0,0,0.4)"}},animationEasing:"elasticOut",animationDuration:800}}),Ck,!0);var Lk=["itemStyle"],kk=["emphasis","itemStyle"],Pk=(Tr.extend({type:"boxplot",render:function(t,e,i){var n=t.getData(),o=this.group,a=this._data;this._data||o.removeAll();var r="horizontal"===t.get("layout")?1:0;n.diff(a).add(function(t){if(n.hasValue(t)){var e=ig(n.getItemLayout(t),n,t,r,!0);n.setItemGraphicEl(t,e),o.add(e)}}).update(function(t,e){var i=a.getItemGraphicEl(e);if(n.hasValue(t)){var s=n.getItemLayout(t);i?ng(s,i,n,t):i=ig(s,n,t,r),o.add(i),n.setItemGraphicEl(t,i)}else o.remove(i)}).remove(function(t){var e=a.getItemGraphicEl(t);e&&o.remove(e)}).execute(),this._data=n},remove:function(t){var e=this.group,i=this._data;this._data=null,i&&i.eachItemGraphicEl(function(t){t&&e.remove(t)})},dispose:B}),kn.extend({type:"boxplotBoxPath",shape:{},buildPath:function(t,e){var i=e.points,n=0;for(t.moveTo(i[n][0],i[n][1]),n++;n<4;n++)t.lineTo(i[n][0],i[n][1]);for(t.closePath();n<i.length;n++)t.moveTo(i[n][0],i[n][1]),n++,t.lineTo(i[n][0],i[n][1])}})),Nk=["itemStyle","borderColor"],Ok=d;zs(function(t,e){var i=t.get("color");t.eachRawSeriesByType("boxplot",function(e){var n=i[e.seriesIndex%i.length],o=e.getData();o.setVisual({legendSymbol:"roundRect",color:e.get(Nk)||n}),t.isSeriesFiltered(e)||o.each(function(t){var e=o.getItemModel(t);o.setItemVisual(t,{color:e.get(Nk,!0)})})})}),Rs(function(t){var e=ag(t);Ok(e,function(t){var e=t.seriesModels;e.length&&(rg(t),Ok(e,function(e,i){sg(e,t.boxOffsetList[i],t.boxWidthList[i])}))})}),h(jI.extend({type:"series.candlestick",dependencies:["xAxis","yAxis","grid"],defaultValueDimensions:[{name:"open",defaultTooltip:!0},{name:"close",defaultTooltip:!0},{name:"lowest",defaultTooltip:!0},{name:"highest",defaultTooltip:!0}],dimensions:null,defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,hoverAnimation:!0,layout:null,itemStyle:{color:"#c23531",color0:"#314656",borderWidth:1,borderColor:"#c23531",borderColor0:"#314656"},emphasis:{itemStyle:{borderWidth:2}},barMaxWidth:null,barMinWidth:null,barWidth:null,large:!0,largeThreshold:600,progressive:3e3,progressiveThreshold:1e4,progressiveChunkMode:"mod",animationUpdate:!1,animationEasing:"linear",animationDuration:300},getShadowDim:function(){return"open"},brushSelector:function(t,e,i){var n=e.getItemLayout(t);return n&&i.rect(n.brushRect)}}),Ck,!0);var Ek=["itemStyle"],Rk=["emphasis","itemStyle"],zk=["color","color0","borderColor","borderColor0"],Bk=(Tr.extend({type:"candlestick",render:function(t,e,i){this._updateDrawMode(t),this._isLargeDraw?this._renderLarge(t):this._renderNormal(t)},incrementalPrepareRender:function(t,e,i){this._clear(),this._updateDrawMode(t)},incrementalRender:function(t,e,i,n){this._isLargeDraw?this._incrementalRenderLarge(t,e):this._incrementalRenderNormal(t,e)},_updateDrawMode:function(t){var e=t.pipelineContext.large;(null==this._isLargeDraw||e^this._isLargeDraw)&&(this._isLargeDraw=e,this._clear())},_renderNormal:function(t){var e=t.getData(),i=this._data,n=this.group,o=e.getLayout("isSimpleBox");this._data||n.removeAll(),e.diff(i).add(function(i){if(e.hasValue(i)){var a,r=e.getItemLayout(i);Io(a=lg(r,0,!0),{shape:{points:r.ends}},t,i),ug(a,e,i,o),n.add(a),e.setItemGraphicEl(i,a)}}).update(function(a,r){var s=i.getItemGraphicEl(r);if(e.hasValue(a)){var l=e.getItemLayout(a);s?Mo(s,{shape:{points:l.ends}},t,a):s=lg(l),ug(s,e,a,o),n.add(s),e.setItemGraphicEl(a,s)}else n.remove(s)}).remove(function(t){var e=i.getItemGraphicEl(t);e&&n.remove(e)}).execute(),this._data=e},_renderLarge:function(t){this._clear(),cg(t,this.group)},_incrementalRenderNormal:function(t,e){for(var i,n=e.getData(),o=n.getLayout("isSimpleBox");null!=(i=t.next());){var a;ug(a=lg(n.getItemLayout(i)),n,i,o),a.incremental=!0,this.group.add(a)}},_incrementalRenderLarge:function(t,e){cg(e,this.group,!0)},remove:function(t){this._clear()},_clear:function(){this.group.removeAll(),this._data=null},dispose:B}),kn.extend({type:"normalCandlestickBox",shape:{},buildPath:function(t,e){var i=e.points;this.__simpleBox?(t.moveTo(i[4][0],i[4][1]),t.lineTo(i[6][0],i[6][1])):(t.moveTo(i[0][0],i[0][1]),t.lineTo(i[1][0],i[1][1]),t.lineTo(i[2][0],i[2][1]),t.lineTo(i[3][0],i[3][1]),t.closePath(),t.moveTo(i[4][0],i[4][1]),t.lineTo(i[5][0],i[5][1]),t.moveTo(i[6][0],i[6][1]),t.lineTo(i[7][0],i[7][1]))}})),Vk=kn.extend({type:"largeCandlestickBox",shape:{},buildPath:function(t,e){for(var i=e.points,n=0;n<i.length;)if(this.__sign===i[n++]){var o=i[n++];t.moveTo(o,i[n++]),t.lineTo(o,i[n++])}else n+=3}}),Gk=["itemStyle","borderColor"],Fk=["itemStyle","borderColor0"],Wk=["itemStyle","color"],Hk=["itemStyle","color0"],Zk={seriesType:"candlestick",plan:KI(),performRawSeries:!0,reset:function(t,e){function i(t,e){return e.get(t>0?Wk:Hk)}function n(t,e){return e.get(t>0?Gk:Fk)}var o=t.getData(),a=t.pipelineContext.large;if(o.setVisual({legendSymbol:"roundRect",colorP:i(1,t),colorN:i(-1,t),borderColorP:n(1,t),borderColorN:n(-1,t)}),!e.isSeriesFiltered(t))return!a&&{progress:function(t,e){for(var o;null!=(o=t.next());){var a=e.getItemModel(o),r=e.getItemLayout(o).sign;e.setItemVisual(o,{color:i(r,a),borderColor:n(r,a)})}}}}},Uk="undefined"!=typeof Float32Array?Float32Array:Array,Xk={seriesType:"candlestick",plan:KI(),reset:function(t){var e=t.coordinateSystem,i=t.getData(),n=pg(t,i),o=0,a=1,r=["x","y"],s=i.mapDimension(r[o]),l=i.mapDimension(r[a],!0),u=l[0],h=l[1],c=l[2],d=l[3];if(i.setLayout({candleWidth:n,isSimpleBox:n<=1.3}),!(null==s||l.length<4))return{progress:t.pipelineContext.large?function(t,i){for(var n,r,l=new Uk(5*t.count),f=0,p=[],g=[];null!=(r=t.next());){var m=i.get(s,r),v=i.get(u,r),y=i.get(h,r),x=i.get(c,r),_=i.get(d,r);isNaN(m)||isNaN(x)||isNaN(_)?(l[f++]=NaN,f+=4):(l[f++]=fg(i,r,v,y,h),p[o]=m,p[a]=x,n=e.dataToPoint(p,null,g),l[f++]=n?n[0]:NaN,l[f++]=n?n[1]:NaN,p[a]=_,n=e.dataToPoint(p,null,g),l[f++]=n?n[1]:NaN)}i.setLayout("largePoints",l)}:function(t,i){function r(t,i){var n=[];return n[o]=i,n[a]=t,isNaN(i)||isNaN(t)?[NaN,NaN]:e.dataToPoint(n)}function l(t,e,i){var a=e.slice(),r=e.slice();a[o]=$n(a[o]+n/2,1,!1),r[o]=$n(r[o]-n/2,1,!0),i?t.push(a,r):t.push(r,a)}function f(t){return t[o]=$n(t[o],1),t}for(var p;null!=(p=t.next());){var g=i.get(s,p),m=i.get(u,p),v=i.get(h,p),y=i.get(c,p),x=i.get(d,p),_=Math.min(m,v),w=Math.max(m,v),b=r(_,g),S=r(w,g),M=r(y,g),I=r(x,g),T=[];l(T,S,0),l(T,b,1),T.push(f(I),f(S),f(M),f(b)),i.setItemLayout(p,{sign:fg(i,p,m,v,h),initBaseline:m>v?S[a]:b[a],ends:T,brushRect:function(t,e,i){var s=r(t,i),l=r(e,i);return s[o]-=n/2,l[o]-=n/2,{x:s[0],y:s[1],width:a?n:l[0]-s[0],height:a?l[1]-s[1]:n}}(y,x,g)})}}}}};Ps(function(t){t&&y(t.series)&&d(t.series,function(t){w(t)&&"k"===t.type&&(t.type="candlestick")})}),zs(Zk),Rs(Xk),jI.extend({type:"series.effectScatter",dependencies:["grid","polar"],getInitialData:function(t,e){return gl(this.getSource(),this)},brushSelector:"point",defaultOption:{coordinateSystem:"cartesian2d",zlevel:0,z:2,legendHoverLink:!0,effectType:"ripple",progressive:0,showEffectOn:"render",rippleEffect:{period:4,scale:2.5,brushType:"fill"},symbolSize:10}});var jk=vg.prototype;jk.stopEffectAnimation=function(){this.childAt(1).removeAll()},jk.startEffectAnimation=function(t){for(var e=t.symbolType,i=t.color,n=this.childAt(1),o=0;o<3;o++){var a=$l(e,-1,-1,2,2,i);a.attr({style:{strokeNoScale:!0},z2:99,silent:!0,scale:[.5,.5]});var r=-o/3*t.period+t.effectOffset;a.animate("",!0).when(t.period,{scale:[t.rippleScale/2,t.rippleScale/2]}).delay(r).start(),a.animateStyle(!0).when(t.period,{opacity:0}).delay(r).start(),n.add(a)}mg(n,t)},jk.updateEffectAnimation=function(t){for(var e=this._effectCfg,i=this.childAt(1),n=["symbolType","period","rippleScale"],o=0;o<n.length;o++){var a=n[o];if(e[a]!==t[a])return this.stopEffectAnimation(),void this.startEffectAnimation(t)}mg(i,t)},jk.highlight=function(){this.trigger("emphasis")},jk.downplay=function(){this.trigger("normal")},jk.updateData=function(t,e){var i=t.hostModel;this.childAt(0).updateData(t,e);var n=this.childAt(1),o=t.getItemModel(e),a=t.getItemVisual(e,"symbol"),r=gg(t.getItemVisual(e,"symbolSize")),s=t.getItemVisual(e,"color");n.attr("scale",r),n.traverse(function(t){t.attr({fill:s})});var l=o.getShallow("symbolOffset");if(l){var u=n.position;u[0]=Bo(l[0],r[0]),u[1]=Bo(l[1],r[1])}n.rotation=(o.getShallow("symbolRotate")||0)*Math.PI/180||0;var h={};if(h.showEffectOn=i.get("showEffectOn"),h.rippleScale=o.get("rippleEffect.scale"),h.brushType=o.get("rippleEffect.brushType"),h.period=1e3*o.get("rippleEffect.period"),h.effectOffset=e/t.count(),h.z=o.getShallow("z")||0,h.zlevel=o.getShallow("zlevel")||0,h.symbolType=a,h.color=s,this.off("mouseover").off("mouseout").off("emphasis").off("normal"),"render"===h.showEffectOn)this._effectCfg?this.updateEffectAnimation(h):this.startEffectAnimation(h),this._effectCfg=h;else{this._effectCfg=null,this.stopEffectAnimation();var c=this.childAt(0),d=function(){c.highlight(),"render"!==h.showEffectOn&&this.startEffectAnimation(h)},f=function(){c.downplay(),"render"!==h.showEffectOn&&this.stopEffectAnimation()};this.on("mouseover",d,this).on("mouseout",f,this).on("emphasis",d,this).on("normal",f,this)}this._effectCfg=h},jk.fadeOut=function(t){this.off("mouseover").off("mouseout").off("emphasis").off("normal"),t&&t()},u(vg,tb),Hs({type:"effectScatter",init:function(){this._symbolDraw=new Au(vg)},render:function(t,e,i){var n=t.getData(),o=this._symbolDraw;o.updateData(n),this.group.add(o.group)},updateTransform:function(t,e,i){var n=t.getData();this.group.dirty();var o=MD().reset(t);o.progress&&o.progress({start:0,end:n.count()},n),this._symbolDraw.updateLayout(n)},_updateGroupTransform:function(t){var e=t.coordinateSystem;e&&e.getRoamTransform&&(this.group.transform=At(e.getRoamTransform()),this.group.decomposeTransform())},remove:function(t,e){this._symbolDraw&&this._symbolDraw.remove(e)},dispose:function(){}}),zs(SD("effectScatter","circle")),Rs(MD("effectScatter"));var Yk="undefined"==typeof Uint32Array?Array:Uint32Array,qk="undefined"==typeof Float64Array?Array:Float64Array,Kk=jI.extend({type:"series.lines",dependencies:["grid","polar"],visualColorAccessPath:"lineStyle.color",init:function(t){t.data=t.data||[],yg(t);var e=this._processFlatCoordsArray(t.data);this._flatCoords=e.flatCoords,this._flatCoordsOffset=e.flatCoordsOffset,e.flatCoords&&(t.data=new Float32Array(e.count)),Kk.superApply(this,"init",arguments)},mergeOption:function(t){if(t.data=t.data||[],yg(t),t.data){var e=this._processFlatCoordsArray(t.data);this._flatCoords=e.flatCoords,this._flatCoordsOffset=e.flatCoordsOffset,e.flatCoords&&(t.data=new Float32Array(e.count))}Kk.superApply(this,"mergeOption",arguments)},appendData:function(t){var e=this._processFlatCoordsArray(t.data);e.flatCoords&&(this._flatCoords?(this._flatCoords=z(this._flatCoords,e.flatCoords),this._flatCoordsOffset=z(this._flatCoordsOffset,e.flatCoordsOffset)):(this._flatCoords=e.flatCoords,this._flatCoordsOffset=e.flatCoordsOffset),t.data=new Float32Array(e.count)),this.getRawData().appendData(t.data)},_getCoordsFromItemModel:function(t){var e=this.getData().getItemModel(t);return e.option instanceof Array?e.option:e.getShallow("coords")},getLineCoordsCount:function(t){return this._flatCoordsOffset?this._flatCoordsOffset[2*t+1]:this._getCoordsFromItemModel(t).length},getLineCoords:function(t,e){if(this._flatCoordsOffset){for(var i=this._flatCoordsOffset[2*t],n=this._flatCoordsOffset[2*t+1],o=0;o<n;o++)e[o]=e[o]||[],e[o][0]=this._flatCoords[i+2*o],e[o][1]=this._flatCoords[i+2*o+1];return n}for(var a=this._getCoordsFromItemModel(t),o=0;o<a.length;o++)e[o]=e[o]||[],e[o][0]=a[o][0],e[o][1]=a[o][1];return a.length},_processFlatCoordsArray:function(t){var e=0;if(this._flatCoords&&(e=this._flatCoords.length),"number"==typeof t[0]){for(var i=t.length,n=new Yk(i),o=new qk(i),a=0,r=0,s=0,l=0;l<i;){s++;var u=t[l++];n[r++]=a+e,n[r++]=u;for(var h=0;h<u;h++){var c=t[l++],d=t[l++];o[a++]=c,o[a++]=d}}return{flatCoordsOffset:new Uint32Array(n.buffer,0,r),flatCoords:o,count:s}}return{flatCoordsOffset:null,flatCoords:null,count:t.length}},getInitialData:function(t,e){var i=new pA(["value"],this);return i.hasItemOption=!1,i.initData(t.data,[],function(t,e,n,o){if(t instanceof Array)return NaN;i.hasItemOption=!0;var a=t.value;return null!=a?a instanceof Array?a[o]:a:void 0}),i},formatTooltip:function(t){var e=this.getData().getItemModel(t),i=e.get("name");if(i)return i;var n=e.get("fromName"),o=e.get("toName"),a=[];return null!=n&&a.push(n),null!=o&&a.push(o),ea(a.join(" > "))},preventIncremental:function(){return!!this.get("effect.show")},getProgressive:function(){var t=this.option.progressive;return null==t?this.option.large?1e4:this.get("progressive"):t},getProgressiveThreshold:function(){var t=this.option.progressiveThreshold;return null==t?this.option.large?2e4:this.get("progressiveThreshold"):t},defaultOption:{coordinateSystem:"geo",zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,xAxisIndex:0,yAxisIndex:0,symbol:["none","none"],symbolSize:[10,10],geoIndex:0,effect:{show:!1,period:4,constantSpeed:0,symbol:"circle",symbolSize:3,loop:!0,trailLength:.2},large:!1,largeThreshold:2e3,polyline:!1,label:{show:!1,position:"end"},lineStyle:{opacity:.5}}}),$k=xg.prototype;$k.createLine=function(t,e,i){return new af(t,e,i)},$k._updateEffectSymbol=function(t,e){var i=t.getItemModel(e).getModel("effect"),n=i.get("symbolSize"),o=i.get("symbol");y(n)||(n=[n,n]);var a=i.get("color")||t.getItemVisual(e,"color"),r=this.childAt(1);this._symbolType!==o&&(this.remove(r),(r=$l(o,-.5,-.5,1,1,a)).z2=100,r.culling=!0,this.add(r)),r&&(r.setStyle("shadowColor",a),r.setStyle(i.getItemStyle(["color"])),r.attr("scale",n),r.setColor(a),r.attr("scale",n),this._symbolType=o,this._updateEffectAnimation(t,i,e))},$k._updateEffectAnimation=function(t,e,i){var n=this.childAt(1);if(n){var o=this,a=t.getItemLayout(i),r=1e3*e.get("period"),s=e.get("loop"),l=e.get("constantSpeed"),u=T(e.get("delay"),function(e){return e/t.count()*r/3}),h="function"==typeof u;if(n.ignore=!0,this.updateAnimationPoints(n,a),l>0&&(r=this.getLineLength(n)/l*1e3),r!==this._period||s!==this._loop){n.stopAnimation();var c=u;h&&(c=u(i)),n.__t>0&&(c=-r*n.__t),n.__t=0;var d=n.animate("",s).when(r,{__t:1}).delay(c).during(function(){o.updateSymbolPosition(n)});s||d.done(function(){o.remove(n)}),d.start()}this._period=r,this._loop=s}},$k.getLineLength=function(t){return uw(t.__p1,t.__cp1)+uw(t.__cp1,t.__p2)},$k.updateAnimationPoints=function(t,e){t.__p1=e[0],t.__p2=e[1],t.__cp1=e[2]||[(e[0][0]+e[1][0])/2,(e[0][1]+e[1][1])/2]},$k.updateData=function(t,e,i){this.childAt(0).updateData(t,e,i),this._updateEffectSymbol(t,e)},$k.updateSymbolPosition=function(t){var e=t.__p1,i=t.__p2,n=t.__cp1,o=t.__t,a=t.position,r=rn,s=sn;a[0]=r(e[0],n[0],i[0],o),a[1]=r(e[1],n[1],i[1],o);var l=s(e[0],n[0],i[0],o),u=s(e[1],n[1],i[1],o);t.rotation=-Math.atan2(u,l)-Math.PI/2,t.ignore=!1},$k.updateLayout=function(t,e){this.childAt(0).updateLayout(t,e);var i=t.getItemModel(e).getModel("effect");this._updateEffectAnimation(t,i,e)},u(xg,tb);var Jk=_g.prototype;Jk._createPolyline=function(t,e,i){var n=t.getItemLayout(e),o=new pM({shape:{points:n}});this.add(o),this._updateCommonStl(t,e,i)},Jk.updateData=function(t,e,i){var n=t.hostModel;Mo(this.childAt(0),{shape:{points:t.getItemLayout(e)}},n,e),this._updateCommonStl(t,e,i)},Jk._updateCommonStl=function(t,e,i){var n=this.childAt(0),o=t.getItemModel(e),a=t.getItemVisual(e,"color"),s=i&&i.lineStyle,l=i&&i.hoverLineStyle;i&&!t.hasItemOption||(s=o.getModel("lineStyle").getLineStyle(),l=o.getModel("emphasis.lineStyle").getLineStyle()),n.useStyle(r({strokeNoScale:!0,fill:"none",stroke:a},s)),n.hoverStyle=l,co(this)},Jk.updateLayout=function(t,e){this.childAt(0).setShape("points",t.getItemLayout(e))},u(_g,tb);var Qk=wg.prototype;Qk.createLine=function(t,e,i){return new _g(t,e,i)},Qk.updateAnimationPoints=function(t,e){this._points=e;for(var i=[0],n=0,o=1;o<e.length;o++){var a=e[o-1],r=e[o];n+=uw(a,r),i.push(n)}if(0!==n){for(o=0;o<i.length;o++)i[o]/=n;this._offsets=i,this._length=n}},Qk.getLineLength=function(t){return this._length},Qk.updateSymbolPosition=function(t){var e=t.__t,i=this._points,n=this._offsets,o=i.length;if(n){var a=this._lastFrame;if(e<this._lastFramePercent){for(r=Math.min(a+1,o-1);r>=0&&!(n[r]<=e);r--);r=Math.min(r,o-2)}else{for(var r=a;r<o&&!(n[r]>e);r++);r=Math.min(r-1,o-2)}J(t.position,i[r],i[r+1],(e-n[r])/(n[r+1]-n[r]));var s=i[r+1][0]-i[r][0],l=i[r+1][1]-i[r][1];t.rotation=-Math.atan2(l,s)-Math.PI/2,this._lastFrame=r,this._lastFramePercent=e,t.ignore=!1}},u(wg,xg);var tP=Zn({shape:{polyline:!1,curveness:0,segs:[]},buildPath:function(t,e){var i=e.segs,n=e.curveness;if(e.polyline)for(r=0;r<i.length;){var o=i[r++];if(o>0){t.moveTo(i[r++],i[r++]);for(var a=1;a<o;a++)t.lineTo(i[r++],i[r++])}}else for(var r=0;r<i.length;){var s=i[r++],l=i[r++],u=i[r++],h=i[r++];if(t.moveTo(s,l),n>0){var c=(s+u)/2-(l-h)*n,d=(l+h)/2-(u-s)*n;t.quadraticCurveTo(c,d,u,h)}else t.lineTo(u,h)}},findDataIndex:function(t,e){var i=this.shape,n=i.segs,o=i.curveness;if(i.polyline)for(var a=0,r=0;r<n.length;){var s=n[r++];if(s>0)for(var l=n[r++],u=n[r++],h=1;h<s;h++)if(vn(l,u,c=n[r++],d=n[r++]))return a;a++}else for(var a=0,r=0;r<n.length;){var l=n[r++],u=n[r++],c=n[r++],d=n[r++];if(o>0){if(xn(l,u,(l+c)/2-(u-d)*o,(u+d)/2-(c-l)*o,c,d))return a}else if(vn(l,u,c,d))return a;a++}return-1}}),eP=bg.prototype;eP.isPersistent=function(){return!this._incremental},eP.updateData=function(t){this.group.removeAll();var e=new tP({rectHover:!0,cursor:"default"});e.setShape({segs:t.getLayout("linesPoints")}),this._setCommon(e,t),this.group.add(e),this._incremental=null},eP.incrementalPrepareUpdate=function(t){this.group.removeAll(),this._clearIncremental(),t.count()>5e5?(this._incremental||(this._incremental=new Hn({silent:!0})),this.group.add(this._incremental)):this._incremental=null},eP.incrementalUpdate=function(t,e){var i=new tP;i.setShape({segs:e.getLayout("linesPoints")}),this._setCommon(i,e,!!this._incremental),this._incremental?this._incremental.addDisplayable(i,!0):(i.rectHover=!0,i.cursor="default",i.__startIndex=t.start,this.group.add(i))},eP.remove=function(){this._clearIncremental(),this._incremental=null,this.group.removeAll()},eP._setCommon=function(t,e,i){var n=e.hostModel;t.setShape({polyline:n.get("polyline"),curveness:n.get("lineStyle.curveness")}),t.useStyle(n.getModel("lineStyle").getLineStyle()),t.style.strokeNoScale=!0;var o=e.getVisual("color");o&&t.setStyle("stroke",o),t.setStyle("fill"),i||(t.seriesIndex=n.seriesIndex,t.on("mousemove",function(e){t.dataIndex=null;var i=t.findDataIndex(e.offsetX,e.offsetY);i>0&&(t.dataIndex=i+t.__startIndex)}))},eP._clearIncremental=function(){var t=this._incremental;t&&t.clearDisplaybles()};var iP={seriesType:"lines",plan:KI(),reset:function(t){var e=t.coordinateSystem,i=t.get("polyline"),n=t.pipelineContext.large;return{progress:function(o,a){var r=[];if(n){var s,l=o.end-o.start;if(i){for(var u=0,h=o.start;h<o.end;h++)u+=t.getLineCoordsCount(h);s=new Float32Array(l+2*u)}else s=new Float32Array(4*l);for(var c=0,d=[],h=o.start;h<o.end;h++){g=t.getLineCoords(h,r),i&&(s[c++]=g);for(var f=0;f<g;f++)d=e.dataToPoint(r[f],!1,d),s[c++]=d[0],s[c++]=d[1]}a.setLayout("linesPoints",s)}else for(h=o.start;h<o.end;h++){var p=a.getItemModel(h),g=t.getLineCoords(h,r),m=[];if(i)for(var v=0;v<g;v++)m.push(e.dataToPoint(r[v]));else{m[0]=e.dataToPoint(r[0]),m[1]=e.dataToPoint(r[1]);var y=p.get("lineStyle.curveness");+y&&(m[2]=[(m[0][0]+m[1][0])/2-(m[0][1]-m[1][1])*y,(m[0][1]+m[1][1])/2-(m[1][0]-m[0][0])*y])}a.setItemLayout(h,m)}}}}};Hs({type:"lines",init:function(){},render:function(t,e,i){var n=t.getData(),o=this._updateLineDraw(n,t),a=t.get("zlevel"),r=t.get("effect.trailLength"),s=i.getZr(),l="svg"===s.painter.getType();l||s.painter.getLayer(a).clear(!0),null==this._lastZlevel||l||s.configLayer(this._lastZlevel,{motionBlur:!1}),this._showEffect(t)&&r&&(l||s.configLayer(a,{motionBlur:!0,lastFrameAlpha:Math.max(Math.min(r/10+.9,1),0)})),o.updateData(n),this._lastZlevel=a,this._finished=!0},incrementalPrepareRender:function(t,e,i){var n=t.getData();this._updateLineDraw(n,t).incrementalPrepareUpdate(n),this._clearLayer(i),this._finished=!1},incrementalRender:function(t,e,i){this._lineDraw.incrementalUpdate(t,e.getData()),this._finished=t.end===e.getData().count()},updateTransform:function(t,e,i){var n=t.getData(),o=t.pipelineContext;if(!this._finished||o.large||o.progressiveRender)return{update:!0};var a=iP.reset(t);a.progress&&a.progress({start:0,end:n.count()},n),this._lineDraw.updateLayout(),this._clearLayer(i)},_updateLineDraw:function(t,e){var i=this._lineDraw,n=this._showEffect(e),o=!!e.get("polyline"),a=e.pipelineContext.large;return i&&n===this._hasEffet&&o===this._isPolyline&&a===this._isLargeDraw||(i&&i.remove(),i=this._lineDraw=a?new bg:new rf(o?n?wg:_g:n?xg:af),this._hasEffet=n,this._isPolyline=o,this._isLargeDraw=a,this.group.removeAll()),this.group.add(i.group),i},_showEffect:function(t){return!!t.get("effect.show")},_clearLayer:function(t){var e=t.getZr();"svg"===e.painter.getType()||null==this._lastZlevel||e.painter.getLayer(this._lastZlevel).clear(!0)},remove:function(t,e){this._lineDraw&&this._lineDraw.remove(),this._lineDraw=null,this._clearLayer(e)},dispose:function(){}});var nP="lineStyle.opacity".split("."),oP={seriesType:"lines",reset:function(t,e,i){var n=Sg(t.get("symbol")),o=Sg(t.get("symbolSize")),a=t.getData();return a.setVisual("fromSymbol",n&&n[0]),a.setVisual("toSymbol",n&&n[1]),a.setVisual("fromSymbolSize",o&&o[0]),a.setVisual("toSymbolSize",o&&o[1]),a.setVisual("opacity",t.get(nP)),{dataEach:a.hasItemOption?function(t,e){var i=t.getItemModel(e),n=Sg(i.getShallow("symbol",!0)),o=Sg(i.getShallow("symbolSize",!0)),a=i.get(nP);n[0]&&t.setItemVisual(e,"fromSymbol",n[0]),n[1]&&t.setItemVisual(e,"toSymbol",n[1]),o[0]&&t.setItemVisual(e,"fromSymbolSize",o[0]),o[1]&&t.setItemVisual(e,"toSymbolSize",o[1]),t.setItemVisual(e,"opacity",a)}:null}}};Rs(iP),zs(oP),jI.extend({type:"series.heatmap",getInitialData:function(t,e){return gl(this.getSource(),this,{generateCoord:"value"})},preventIncremental:function(){var t=Ga.get(this.get("coordinateSystem"));if(t&&t.dimensions)return"lng"===t.dimensions[0]&&"lat"===t.dimensions[1]},defaultOption:{coordinateSystem:"cartesian2d",zlevel:0,z:2,geoIndex:0,blurSize:30,pointSize:20,maxOpacity:1,minOpacity:0}});Mg.prototype={update:function(t,e,i,n,o,a){var r=this._getBrush(),s=this._getGradient(t,o,"inRange"),l=this._getGradient(t,o,"outOfRange"),u=this.pointSize+this.blurSize,h=this.canvas,c=h.getContext("2d"),d=t.length;h.width=e,h.height=i;for(var f=0;f<d;++f){var p=t[f],g=p[0],m=p[1],v=n(p[2]);c.globalAlpha=v,c.drawImage(r,g-u,m-u)}if(!h.width||!h.height)return h;for(var y=c.getImageData(0,0,h.width,h.height),x=y.data,_=0,w=x.length,b=this.minOpacity,S=this.maxOpacity-b;_<w;){var v=x[_+3]/256,M=4*Math.floor(255*v);if(v>0){var I=a(v)?s:l;v>0&&(v=v*S+b),x[_++]=I[M],x[_++]=I[M+1],x[_++]=I[M+2],x[_++]=I[M+3]*v*256}else _+=4}return c.putImageData(y,0,0),h},_getBrush:function(){var t=this._brushCanvas||(this._brushCanvas=iw()),e=this.pointSize+this.blurSize,i=2*e;t.width=i,t.height=i;var n=t.getContext("2d");return n.clearRect(0,0,i,i),n.shadowOffsetX=i,n.shadowBlur=this.blurSize,n.shadowColor="#000",n.beginPath(),n.arc(-e,e,this.pointSize,0,2*Math.PI,!0),n.closePath(),n.fill(),t},_getGradient:function(t,e,i){for(var n=this._gradientPixels,o=n[i]||(n[i]=new Uint8ClampedArray(1024)),a=[0,0,0,0],r=0,s=0;s<256;s++)e[i](s/255,!0,a),o[r++]=a[0],o[r++]=a[1],o[r++]=a[2],o[r++]=a[3];return o}},Hs({type:"heatmap",render:function(t,e,i){var n;e.eachComponent("visualMap",function(e){e.eachTargetSeries(function(i){i===t&&(n=e)})}),this.group.removeAll(),this._incrementalDisplayable=null;var o=t.coordinateSystem;"cartesian2d"===o.type||"calendar"===o.type?this._renderOnCartesianAndCalendar(t,i,0,t.getData().count()):Ag(o)&&this._renderOnGeo(o,t,n,i)},incrementalPrepareRender:function(t,e,i){this.group.removeAll()},incrementalRender:function(t,e,i,n){e.coordinateSystem&&this._renderOnCartesianAndCalendar(e,n,t.start,t.end,!0)},_renderOnCartesianAndCalendar:function(t,e,i,n,o){var r,s,l=t.coordinateSystem;if("cartesian2d"===l.type){var u=l.getAxis("x"),h=l.getAxis("y");r=u.getBandWidth(),s=h.getBandWidth()}for(var c=this.group,d=t.getData(),f=t.getModel("itemStyle").getItemStyle(["color"]),p=t.getModel("emphasis.itemStyle").getItemStyle(),g=t.getModel("label"),m=t.getModel("emphasis.label"),v=l.type,y="cartesian2d"===v?[d.mapDimension("x"),d.mapDimension("y"),d.mapDimension("value")]:[d.mapDimension("time"),d.mapDimension("value")],x=i;x<n;x++){var _;if("cartesian2d"===v){if(isNaN(d.get(y[2],x)))continue;var w=l.dataToPoint([d.get(y[0],x),d.get(y[1],x)]);_=new vM({shape:{x:w[0]-r/2,y:w[1]-s/2,width:r,height:s},style:{fill:d.getItemVisual(x,"color"),opacity:d.getItemVisual(x,"opacity")}})}else{if(isNaN(d.get(y[1],x)))continue;_=new vM({z2:1,shape:l.dataToRect([d.get(y[0],x)]).contentShape,style:{fill:d.getItemVisual(x,"color"),opacity:d.getItemVisual(x,"opacity")}})}var b=d.getItemModel(x);d.hasItemOption&&(f=b.getModel("itemStyle").getItemStyle(["color"]),p=b.getModel("emphasis.itemStyle").getItemStyle(),g=b.getModel("label"),m=b.getModel("emphasis.label"));var S=t.getRawValue(x),M="-";S&&null!=S[2]&&(M=S[2]),po(f,p,g,m,{labelFetcher:t,labelDataIndex:x,defaultText:M,isRectText:!0}),_.setStyle(f),co(_,d.hasItemOption?p:a({},p)),_.incremental=o,o&&(_.useHoverLayer=!0),c.add(_),d.setItemGraphicEl(x,_)}},_renderOnGeo:function(t,e,i,n){var o=i.targetVisuals.inRange,a=i.targetVisuals.outOfRange,r=e.getData(),s=this._hmLayer||this._hmLayer||new Mg;s.blurSize=e.get("blurSize"),s.pointSize=e.get("pointSize"),s.minOpacity=e.get("minOpacity"),s.maxOpacity=e.get("maxOpacity");var l=t.getViewRect().clone(),u=t.getRoamTransform();l.applyTransform(u);var h=Math.max(l.x,0),c=Math.max(l.y,0),d=Math.min(l.width+l.x,n.getWidth()),f=Math.min(l.height+l.y,n.getHeight()),p=d-h,g=f-c,m=[r.mapDimension("lng"),r.mapDimension("lat"),r.mapDimension("value")],v=r.mapArray(m,function(e,i,n){var o=t.dataToPoint([e,i]);return o[0]-=h,o[1]-=c,o.push(n),o}),y=i.getExtent(),x="visualMap.continuous"===i.type?Tg(y,i.option.range):Ig(y,i.getPieceList(),i.option.selected);s.update(v,p,g,o.color.getNormalizer(),{inRange:o.color.getColorMapper(),outOfRange:a.color.getColorMapper()},x);var _=new fi({style:{width:p,height:g,x:h,y:c,image:s.canvas},silent:!0});this.group.add(_)},dispose:function(){}});var aP=YD.extend({type:"series.pictorialBar",dependencies:["grid"],defaultOption:{symbol:"circle",symbolSize:null,symbolRotate:null,symbolPosition:null,symbolOffset:null,symbolMargin:null,symbolRepeat:!1,symbolRepeatDirection:"end",symbolClip:!1,symbolBoundingData:null,symbolPatternSize:400,barGap:"-100%",progressive:0,hoverAnimation:!1},getInitialData:function(t){return t.stack=null,aP.superApply(this,"getInitialData",arguments)}}),rP=["itemStyle","borderWidth"],sP=[{xy:"x",wh:"width",index:0,posDesc:["left","right"]},{xy:"y",wh:"height",index:1,posDesc:["top","bottom"]}],lP=new rM;Hs({type:"pictorialBar",render:function(t,e,i){var n=this.group,o=t.getData(),a=this._data,r=t.coordinateSystem,s=!!r.getBaseAxis().isHorizontal(),l=r.grid.getRect(),u={ecSize:{width:i.getWidth(),height:i.getHeight()},seriesModel:t,coordSys:r,coordSysExtent:[[l.x,l.x+l.width],[l.y,l.y+l.height]],isHorizontal:s,valueDim:sP[+s],categoryDim:sP[1-s]};return o.diff(a).add(function(t){if(o.hasValue(t)){var e=Vg(o,t),i=Dg(o,t,e,u),a=Hg(o,u,i);o.setItemGraphicEl(t,a),n.add(a),qg(a,u,i)}}).update(function(t,e){var i=a.getItemGraphicEl(e);if(o.hasValue(t)){var r=Vg(o,t),s=Dg(o,t,r,u),l=Xg(o,s);i&&l!==i.__pictorialShapeStr&&(n.remove(i),o.setItemGraphicEl(t,null),i=null),i?Zg(i,u,s):i=Hg(o,u,s,!0),o.setItemGraphicEl(t,i),i.__pictorialSymbolMeta=s,n.add(i),qg(i,u,s)}else n.remove(i)}).remove(function(t){var e=a.getItemGraphicEl(t);e&&Ug(a,t,e.__pictorialSymbolMeta.animationModel,e)}).execute(),this._data=o,this.group},dispose:B,remove:function(t,e){var i=this.group,n=this._data;t.get("animation")?n&&n.eachItemGraphicEl(function(e){Ug(n,e.dataIndex,t,e)}):i.removeAll()}});Rs(v(Ol,"pictorialBar")),zs(SD("pictorialBar","roundRect"));var uP=function(t,e,i,n,o){iD.call(this,t,e,i),this.type=n||"value",this.position=o||"bottom",this.orient=null};uP.prototype={constructor:uP,model:null,isHorizontal:function(){var t=this.position;return"top"===t||"bottom"===t},pointToData:function(t,e){return this.coordinateSystem.pointToData(t,e)[0]},toGlobalCoord:null,toLocalCoord:null},u(uP,iD),$g.prototype={type:"singleAxis",axisPointerEnabled:!0,constructor:$g,_init:function(t,e,i){var n=this.dimension,o=new uP(n,Wl(t),[0,0],t.get("type"),t.get("position")),a="category"===o.type;o.onBand=a&&t.get("boundaryGap"),o.inverse=t.get("inverse"),o.orient=t.get("orient"),t.axis=o,o.model=t,o.coordinateSystem=this,this._axis=o},update:function(t,e){t.eachSeries(function(t){if(t.coordinateSystem===this){var e=t.getData();d(e.mapDimension(this.dimension,!0),function(t){this._axis.scale.unionExtentFromData(e,t)},this),Fl(this._axis.scale,this._axis.model)}},this)},resize:function(t,e){this._rect=ha({left:t.get("left"),top:t.get("top"),right:t.get("right"),bottom:t.get("bottom"),width:t.get("width"),height:t.get("height")},{width:e.getWidth(),height:e.getHeight()}),this._adjustAxis()},getRect:function(){return this._rect},_adjustAxis:function(){var t=this._rect,e=this._axis,i=e.isHorizontal(),n=i?[0,t.width]:[0,t.height],o=e.reverse?1:0;e.setExtent(n[o],n[1-o]),this._updateAxisTransform(e,i?t.x:t.y)},_updateAxisTransform:function(t,e){var i=t.getExtent(),n=i[0]+i[1],o=t.isHorizontal();t.toGlobalCoord=o?function(t){return t+e}:function(t){return n-t+e},t.toLocalCoord=o?function(t){return t-e}:function(t){return n-t+e}},getAxis:function(){return this._axis},getBaseAxis:function(){return this._axis},getAxes:function(){return[this._axis]},getTooltipAxes:function(){return{baseAxes:[this.getAxis()]}},containPoint:function(t){var e=this.getRect(),i=this.getAxis();return"horizontal"===i.orient?i.contain(i.toLocalCoord(t[0]))&&t[1]>=e.y&&t[1]<=e.y+e.height:i.contain(i.toLocalCoord(t[1]))&&t[0]>=e.y&&t[0]<=e.y+e.height},pointToData:function(t){var e=this.getAxis();return[e.coordToData(e.toLocalCoord(t["horizontal"===e.orient?0:1]))]},dataToPoint:function(t){var e=this.getAxis(),i=this.getRect(),n=[],o="horizontal"===e.orient?0:1;return t instanceof Array&&(t=t[0]),n[o]=e.toGlobalCoord(e.dataToCoord(+t)),n[1-o]=0===o?i.y+i.height/2:i.x+i.width/2,n}},Ga.register("single",{create:function(t,e){var i=[];return t.eachComponent("singleAxis",function(n,o){var a=new $g(n,t,e);a.name="single_"+o,a.resize(n,e),n.coordinateSystem=a,i.push(a)}),t.eachSeries(function(e){if("singleAxis"===e.get("coordinateSystem")){var i=t.queryComponents({mainType:"singleAxis",index:e.get("singleAxisIndex"),id:e.get("singleAxisId")})[0];e.coordinateSystem=i&&i.coordinateSystem}}),i},dimensions:$g.prototype.dimensions});var hP=["axisLine","axisTickLabel","axisName"],cP=HD.extend({type:"singleAxis",axisPointerClass:"SingleAxisPointer",render:function(t,e,i,n){var o=this.group;o.removeAll();var a=Jg(t),r=new BD(t,a);d(hP,r.add,r),o.add(r.getGroup()),t.get("splitLine.show")&&this._splitLine(t),cP.superCall(this,"render",t,e,i,n)},_splitLine:function(t){var e=t.axis;if(!e.scale.isBlank()){var i=t.getModel("splitLine"),n=i.getModel("lineStyle"),o=n.get("width"),a=n.get("color");a=a instanceof Array?a:[a];for(var r=t.coordinateSystem.getRect(),s=e.isHorizontal(),l=[],u=0,h=e.getTicksCoords({tickModel:i}),c=[],d=[],f=0;f<h.length;++f){var p=e.toGlobalCoord(h[f].coord);s?(c[0]=p,c[1]=r.y,d[0]=p,d[1]=r.y+r.height):(c[0]=r.x,c[1]=p,d[0]=r.x+r.width,d[1]=p);var g=u++%a.length;l[g]=l[g]||[],l[g].push(new xM(qn({shape:{x1:c[0],y1:c[1],x2:d[0],y2:d[1]},style:{lineWidth:o},silent:!0})))}for(f=0;f<l.length;++f)this.group.add(NM(l[f],{style:{stroke:a[f%a.length],lineDash:n.getLineDash(o),lineWidth:o},silent:!0}))}}}),dP=sI.extend({type:"singleAxis",layoutMode:"box",axis:null,coordinateSystem:null,getCoordSysModel:function(){return this}});n(dP.prototype,WA),PD("single",dP,function(t,e){return e.type||(e.data?"category":"value")},{left:"5%",top:"5%",right:"5%",bottom:"5%",type:"value",position:"bottom",orient:"horizontal",axisLine:{show:!0,lineStyle:{width:2,type:"solid"}},tooltip:{show:!0},axisTick:{show:!0,length:6,lineStyle:{width:2}},axisLabel:{show:!0,interval:"auto"},splitLine:{show:!0,lineStyle:{type:"dashed",opacity:.2}}});var fP=function(t,e){var i,n=[],o=t.seriesIndex;if(null==o||!(i=e.getSeriesByIndex(o)))return{point:[]};var a=i.getData(),r=zi(a,t);if(null==r||r<0||y(r))return{point:[]};var s=a.getItemGraphicEl(r),l=i.coordinateSystem;if(i.getTooltipPosition)n=i.getTooltipPosition(r)||[];else if(l&&l.dataToPoint)n=l.dataToPoint(a.getValues(f(l.dimensions,function(t){return a.mapDimension(t)}),r,!0))||[];else if(s){var u=s.getBoundingRect().clone();u.applyTransform(s.transform),n=[u.x+u.width/2,u.y+u.height/2]}return{point:n,el:s}},pP=d,gP=v,mP=Bi(),vP=(Gs({type:"axisPointer",coordSysAxesInfo:null,defaultOption:{show:"auto",triggerOn:null,zlevel:0,z:50,type:"line",snap:!1,triggerTooltip:!0,value:null,status:null,link:[],animation:null,animationDurationUpdate:200,lineStyle:{color:"#aaa",width:1,type:"solid"},shadowStyle:{color:"rgba(150,150,150,0.3)"},label:{show:!0,formatter:null,precision:"auto",margin:3,color:"#fff",padding:[5,7,5,7],backgroundColor:"auto",borderColor:null,borderWidth:0,shadowBlur:3,shadowColor:"#aaa"},handle:{show:!1,icon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",size:45,margin:50,color:"#333",shadowBlur:3,shadowColor:"#aaa",shadowOffsetX:0,shadowOffsetY:2,throttle:40}}}),Bi()),yP=d,xP=Fs({type:"axisPointer",render:function(t,e,i){var n=e.getComponent("tooltip"),o=t.get("triggerOn")||n&&n.get("triggerOn")||"mousemove|click";um("axisPointer",i,function(t,e,i){"none"!==o&&("leave"===t||o.indexOf(t)>=0)&&i({type:"updateAxisPointer",currTrigger:t,x:e&&e.offsetX,y:e&&e.offsetY})})},remove:function(t,e){gm(e.getZr(),"axisPointer"),xP.superApply(this._model,"remove",arguments)},dispose:function(t,e){gm("axisPointer",e),xP.superApply(this._model,"dispose",arguments)}}),_P=Bi(),wP=i,bP=m;(mm.prototype={_group:null,_lastGraphicKey:null,_handle:null,_dragging:!1,_lastValue:null,_lastStatus:null,_payloadInfo:null,animationThreshold:15,render:function(t,e,i,n){var o=e.get("value"),a=e.get("status");if(this._axisModel=t,this._axisPointerModel=e,this._api=i,n||this._lastValue!==o||this._lastStatus!==a){this._lastValue=o,this._lastStatus=a;var r=this._group,s=this._handle;if(!a||"hide"===a)return r&&r.hide(),void(s&&s.hide());r&&r.show(),s&&s.show();var l={};this.makeElOption(l,o,t,e,i);var u=l.graphicKey;u!==this._lastGraphicKey&&this.clear(i),this._lastGraphicKey=u;var h=this._moveAnimation=this.determineAnimation(t,e);if(r){var c=v(vm,e,h);this.updatePointerEl(r,l,c,e),this.updateLabelEl(r,l,c,e)}else r=this._group=new tb,this.createPointerEl(r,l,t,e),this.createLabelEl(r,l,t,e),i.getZr().add(r);wm(r,e,!0),this._renderHandle(o)}},remove:function(t){this.clear(t)},dispose:function(t){this.clear(t)},determineAnimation:function(t,e){var i=e.get("animation"),n=t.axis,o="category"===n.type,a=e.get("snap");if(!a&&!o)return!1;if("auto"===i||null==i){var r=this.animationThreshold;if(o&&n.getBandWidth()>r)return!0;if(a){var s=Sh(t).seriesDataCount,l=n.getExtent();return Math.abs(l[0]-l[1])/s>r}return!1}return!0===i},makeElOption:function(t,e,i,n,o){},createPointerEl:function(t,e,i,n){var o=e.pointer;if(o){var a=_P(t).pointerEl=new RM[o.type](wP(e.pointer));t.add(a)}},createLabelEl:function(t,e,i,n){if(e.label){var o=_P(t).labelEl=new vM(wP(e.label));t.add(o),xm(o,n)}},updatePointerEl:function(t,e,i){var n=_P(t).pointerEl;n&&(n.setStyle(e.pointer.style),i(n,{shape:e.pointer.shape}))},updateLabelEl:function(t,e,i,n){var o=_P(t).labelEl;o&&(o.setStyle(e.label.style),i(o,{shape:e.label.shape,position:e.label.position}),xm(o,n))},_renderHandle:function(t){if(!this._dragging&&this.updateHandleTransform){var e=this._axisPointerModel,i=this._api.getZr(),n=this._handle,o=e.getModel("handle"),a=e.get("status");if(!o.get("show")||!a||"hide"===a)return n&&i.remove(n),void(this._handle=null);var r;this._handle||(r=!0,n=this._handle=ko(o.get("icon"),{cursor:"move",draggable:!0,onmousemove:function(t){mw(t.event)},onmousedown:bP(this._onHandleDragMove,this,0,0),drift:bP(this._onHandleDragMove,this),ondragend:bP(this._onHandleDragEnd,this)}),i.add(n)),wm(n,e,!1);n.setStyle(o.getItemStyle(null,["color","borderColor","borderWidth","opacity","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY"]));var s=o.get("size");y(s)||(s=[s,s]),n.attr("scale",[s[0]/2,s[1]/2]),Pr(this,"_doDispatchAxisPointer",o.get("throttle")||0,"fixRate"),this._moveHandleToValue(t,r)}},_moveHandleToValue:function(t,e){vm(this._axisPointerModel,!e&&this._moveAnimation,this._handle,_m(this.getHandleTransform(t,this._axisModel,this._axisPointerModel)))},_onHandleDragMove:function(t,e){var i=this._handle;if(i){this._dragging=!0;var n=this.updateHandleTransform(_m(i),[t,e],this._axisModel,this._axisPointerModel);this._payloadInfo=n,i.stopAnimation(),i.attr(_m(n)),_P(i).lastProp=null,this._doDispatchAxisPointer()}},_doDispatchAxisPointer:function(){if(this._handle){var t=this._payloadInfo,e=this._axisModel;this._api.dispatchAction({type:"updateAxisPointer",x:t.cursorPoint[0],y:t.cursorPoint[1],tooltipOption:t.tooltipOption,axesInfo:[{axisDim:e.axis.dim,axisIndex:e.componentIndex}]})}},_onHandleDragEnd:function(t){if(this._dragging=!1,this._handle){var e=this._axisPointerModel.get("value");this._moveHandleToValue(e),this._api.dispatchAction({type:"hideTip"})}},getHandleTransform:null,updateHandleTransform:null,clear:function(t){this._lastValue=null,this._lastStatus=null;var e=t.getZr(),i=this._group,n=this._handle;e&&i&&(this._lastGraphicKey=null,i&&e.remove(i),n&&e.remove(n),this._group=null,this._handle=null,this._payloadInfo=null)},doClear:function(){},buildLabel:function(t,e,i){return i=i||0,{x:t[i],y:t[1-i],width:e[i],height:e[1-i]}}}).constructor=mm,Xi(mm);var SP=mm.extend({makeElOption:function(t,e,i,n,o){var a=i.axis,r=a.grid,s=n.get("type"),l=km(r,a).getOtherAxis(a).getGlobalExtent(),u=a.toGlobalCoord(a.dataToCoord(e,!0));if(s&&"none"!==s){var h=bm(n),c=MP[s](a,u,l,h);c.style=h,t.graphicKey=c.type,t.pointer=c}Am(e,t,Ch(r.model,i),i,n,o)},getHandleTransform:function(t,e,i){var n=Ch(e.axis.grid.model,e,{labelInside:!1});return n.labelMargin=i.get("handle.margin"),{position:Tm(e.axis,t,n),rotation:n.rotation+(n.labelDirection<0?Math.PI:0)}},updateHandleTransform:function(t,e,i,n){var o=i.axis,a=o.grid,r=o.getGlobalExtent(!0),s=km(a,o).getOtherAxis(o).getGlobalExtent(),l="x"===o.dim?0:1,u=t.position;u[l]+=e[l],u[l]=Math.min(r[1],u[l]),u[l]=Math.max(r[0],u[l]);var h=(s[1]+s[0])/2,c=[h,h];c[l]=u[l];return{position:u,rotation:t.rotation,cursorPoint:c,tooltipOption:[{verticalAlign:"middle"},{align:"center"}][l]}}}),MP={line:function(t,e,i,n){var o=Dm([e,i[0]],[e,i[1]],Pm(t));return qn({shape:o,style:n}),{type:"Line",shape:o}},shadow:function(t,e,i,n){var o=Math.max(1,t.getBandWidth()),a=i[1]-i[0];return{type:"Rect",shape:Cm([e-o/2,i[0]],[o,a],Pm(t))}}};HD.registerAxisPointerClass("CartesianAxisPointer",SP),Ps(function(t){if(t){(!t.axisPointer||0===t.axisPointer.length)&&(t.axisPointer={});var e=t.axisPointer.link;e&&!y(e)&&(t.axisPointer.link=[e])}}),Ns(zT.PROCESSOR.STATISTIC,function(t,e){t.getComponent("axisPointer").coordSysAxesInfo=mh(t,e)}),Os({type:"updateAxisPointer",event:"updateAxisPointer",update:":updateAxisPointer"},function(t,e,i){var n=t.currTrigger,o=[t.x,t.y],a=t,r=t.dispatchAction||m(i.dispatchAction,i),s=e.getComponent("axisPointer").coordSysAxesInfo;if(s){lm(o)&&(o=fP({seriesIndex:a.seriesIndex,dataIndex:a.dataIndex},e).point);var l=lm(o),u=a.axesInfo,h=s.axesInfo,c="leave"===n||lm(o),d={},f={},p={list:[],map:{}},g={showPointer:gP(em,f),showTooltip:gP(im,p)};pP(s.coordSysMap,function(t,e){var i=l||t.containPoint(o);pP(s.coordSysAxesInfo[e],function(t,e){var n=t.axis,a=rm(u,t);if(!c&&i&&(!u||a)){var r=a&&a.value;null!=r||l||(r=n.pointToData(o)),null!=r&&Qg(t,r,g,!1,d)}})});var v={};return pP(h,function(t,e){var i=t.linkGroup;i&&!f[e]&&pP(i.axesInfo,function(e,n){var o=f[n];if(e!==t&&o){var a=o.value;i.mapper&&(a=t.axis.scale.parse(i.mapper(a,sm(e),sm(t)))),v[t.key]=a}})}),pP(v,function(t,e){Qg(h[e],t,g,!0,d)}),nm(f,h,d),om(p,o,t,r),am(h,0,i),d}});var IP=["x","y"],TP=["width","height"],AP=mm.extend({makeElOption:function(t,e,i,n,o){var a=i.axis,r=a.coordinateSystem,s=Om(r,1-Nm(a)),l=r.dataToPoint(e)[0],u=n.get("type");if(u&&"none"!==u){var h=bm(n),c=DP[u](a,l,s,h);c.style=h,t.graphicKey=c.type,t.pointer=c}Am(e,t,Jg(i),i,n,o)},getHandleTransform:function(t,e,i){var n=Jg(e,{labelInside:!1});return n.labelMargin=i.get("handle.margin"),{position:Tm(e.axis,t,n),rotation:n.rotation+(n.labelDirection<0?Math.PI:0)}},updateHandleTransform:function(t,e,i,n){var o=i.axis,a=o.coordinateSystem,r=Nm(o),s=Om(a,r),l=t.position;l[r]+=e[r],l[r]=Math.min(s[1],l[r]),l[r]=Math.max(s[0],l[r]);var u=Om(a,1-r),h=(u[1]+u[0])/2,c=[h,h];return c[r]=l[r],{position:l,rotation:t.rotation,cursorPoint:c,tooltipOption:{verticalAlign:"middle"}}}}),DP={line:function(t,e,i,n){var o=Dm([e,i[0]],[e,i[1]],Nm(t));return qn({shape:o,style:n}),{type:"Line",shape:o}},shadow:function(t,e,i,n){var o=t.getBandWidth(),a=i[1]-i[0];return{type:"Rect",shape:Cm([e-o/2,i[0]],[o,a],Nm(t))}}};HD.registerAxisPointerClass("SingleAxisPointer",AP),Fs({type:"single"});var CP=jI.extend({type:"series.themeRiver",dependencies:["singleAxis"],nameMap:null,init:function(t){CP.superApply(this,"init",arguments),this.legendDataProvider=function(){return this.getRawData()}},fixData:function(t){for(var e=t.length,i=f(zp().key(function(t){return t[2]}).entries(t),function(t){return{name:t.key,dataList:t.values}}),n=i.length,o=-1,a=-1,r=0;r<n;++r){var s=i[r].dataList.length;s>o&&(o=s,a=r)}for(var l=0;l<n;++l)if(l!==a)for(var u=i[l].name,h=0;h<o;++h){for(var c=i[a].dataList[h][0],d=i[l].dataList.length,p=-1,g=0;g<d;++g)if(i[l].dataList[g][0]===c){p=g;break}-1===p&&(t[e]=[],t[e][0]=c,t[e][1]=0,t[e][2]=u,e++)}return t},getInitialData:function(t,e){for(var i=e.queryComponents({mainType:"singleAxis",index:this.get("singleAxisIndex"),id:this.get("singleAxisId")})[0].get("type"),n=g(t.data,function(t){return void 0!==t[2]}),o=this.fixData(n||[]),a=[],r=this.nameMap=R(),s=0,l=0;l<o.length;++l)a.push(o[l][2]),r.get(o[l][2])||(r.set(o[l][2],s),s++);var u=vA(o,{coordDimensions:["single"],dimensionsDefine:[{name:"time",type:Ys(i)},{name:"value",type:"float"},{name:"name",type:"ordinal"}],encodeDefine:{single:0,value:1,itemName:2}}),h=new pA(u,this);return h.initData(o),h},getLayerSeries:function(){for(var t=this.getData(),e=t.count(),i=[],n=0;n<e;++n)i[n]=n;for(var o=f(zp().key(function(e){return t.get("name",e)}).entries(i),function(t){return{name:t.key,indices:t.values}}),a=t.mapDimension("single"),r=0;r<o.length;++r)o[r].indices.sort(function(e,i){return t.get(a,e)-t.get(a,i)});return o},getAxisTooltipData:function(t,e,i){y(t)||(t=t?[t]:[]);for(var n,o=this.getData(),a=this.getLayerSeries(),r=[],s=a.length,l=0;l<s;++l){for(var u=Number.MAX_VALUE,h=-1,c=a[l].indices.length,d=0;d<c;++d){var f=o.get(t[0],a[l].indices[d]),p=Math.abs(f-e);p<=u&&(n=f,u=p,h=a[l].indices[d])}r.push(h)}return{dataIndices:r,nestestValue:n}},formatTooltip:function(t){var e=this.getData(),i=e.getName(t),n=e.get(e.mapDimension("value"),t);return(isNaN(n)||null==n)&&(n="-"),ea(i+" : "+n)},defaultOption:{zlevel:0,z:2,coordinateSystem:"singleAxis",boundaryGap:["10%","10%"],singleAxisIndex:0,animationEasing:"linear",label:{margin:4,show:!0,position:"left",color:"#000",fontSize:11},emphasis:{label:{show:!0}}}});Hs({type:"themeRiver",init:function(){this._layers=[]},render:function(t,e,i){function n(t){return t.name}function o(e,i,n){var o=this._layers;if("remove"!==e){for(var u,h=[],c=[],f=l[i].indices,p=0;p<f.length;p++){var g=r.getItemLayout(f[p]),m=g.x,v=g.y0,y=g.y;h.push([m,v]),c.push([m,v+y]),u=r.getItemVisual(f[p],"color")}var x,_,w=r.getItemLayout(f[0]),b=r.getItemModel(f[p-1]),S=b.getModel("label"),M=S.get("margin");if("add"===e){I=d[i]=new tb;x=new bD({shape:{points:h,stackedOnPoints:c,smooth:.4,stackedOnSmooth:.4,smoothConstraint:!1},z2:0}),_=new aM({style:{x:w.x-M,y:w.y0+w.y/2}}),I.add(x),I.add(_),s.add(I),x.setClipPath(Em(x.getBoundingRect(),t,function(){x.removeClipPath()}))}else{var I=o[n];x=I.childAt(0),_=I.childAt(1),s.add(I),d[i]=I,Mo(x,{shape:{points:h,stackedOnPoints:c}},t),Mo(_,{style:{x:w.x-M,y:w.y0+w.y/2}},t)}var T=b.getModel("emphasis.itemStyle"),A=b.getModel("itemStyle");go(_.style,S,{text:S.get("show")?t.getFormattedLabel(f[p-1],"normal")||r.getName(f[p-1]):null,textVerticalAlign:"middle"}),x.setStyle(a({fill:u},A.getItemStyle(["color"]))),co(x,T.getItemStyle())}else s.remove(o[i])}var r=t.getData(),s=this.group,l=t.getLayerSeries(),u=r.getLayout("layoutInfo"),h=u.rect,c=u.boundaryGap;s.attr("position",[0,h.y+c[0]]);var d={};new Us(this._layersSeries||[],l,n,n).add(m(o,this,"add")).update(m(o,this,"update")).remove(m(o,this,"remove")).execute(),this._layersSeries=l,this._layers=d},dispose:function(){}});Rs(function(t,e){t.eachSeriesByType("themeRiver",function(t){var e=t.getData(),i=t.coordinateSystem,n={},o=i.getRect();n.rect=o;var a=t.get("boundaryGap"),r=i.getAxis();n.boundaryGap=a,"horizontal"===r.orient?(a[0]=Bo(a[0],o.height),a[1]=Bo(a[1],o.height),Rm(e,t,o.height-a[0]-a[1])):(a[0]=Bo(a[0],o.width),a[1]=Bo(a[1],o.width),Rm(e,t,o.width-a[0]-a[1])),e.setLayout("layoutInfo",n)})}),zs(function(t){t.eachSeriesByType("themeRiver",function(t){var e=t.getData(),i=t.getRawData(),n=t.get("color"),o=R();e.each(function(t){o.set(e.getRawIndex(t),t)}),i.each(function(a){var r=i.getName(a),s=n[(t.nameMap.get(r)-1)%n.length];i.setItemVisual(a,"color",s);var l=o.get(a);null!=l&&e.setItemVisual(l,"color",s)})})}),Ns(hC("themeRiver")),jI.extend({type:"series.sunburst",_viewRoot:null,getInitialData:function(t,e){var i={name:t.name,children:t.data};Bm(i);var n=t.levels||[],o={};return o.levels=n,Bc.createTree(i,this,o).data},optionUpdated:function(){this.resetViewRoot()},getDataParams:function(t){var e=jI.prototype.getDataParams.apply(this,arguments),i=this.getData().tree.getNodeByDataIndex(t);return e.treePathInfo=hd(i,this),e},defaultOption:{zlevel:0,z:2,center:["50%","50%"],radius:[0,"75%"],clockwise:!0,startAngle:90,minAngle:0,percentPrecision:2,stillShowZeroSum:!0,highlightPolicy:"descendant",nodeClick:"rootToNode",renderLabelForZeroData:!1,label:{rotate:"radial",show:!0,opacity:1,align:"center",position:"inside",distance:5,silent:!0,emphasis:{}},itemStyle:{borderWidth:1,borderColor:"white",borderType:"solid",shadowBlur:0,shadowColor:"rgba(0, 0, 0, 0.2)",shadowOffsetX:0,shadowOffsetY:0,opacity:1,emphasis:{},highlight:{opacity:1},downplay:{opacity:.9}},animationType:"expansion",animationDuration:1e3,animationDurationUpdate:500,animationEasing:"cubicOut",data:[],levels:[],sort:"desc"},getViewRoot:function(){return this._viewRoot},resetViewRoot:function(t){t?this._viewRoot=t:t=this._viewRoot;var e=this.getRawData().tree.root;t&&(t===e||e.contains(t))||(this._viewRoot=e)}});var LP={NONE:"none",DESCENDANT:"descendant",ANCESTOR:"ancestor",SELF:"self"},kP=2,PP=4,NP=Vm.prototype;NP.updateData=function(t,e,i,o,s){this.node=e,e.piece=this,o=o||this._seriesModel,s=s||this._ecModel;var l=this.childAt(0);l.dataIndex=e.dataIndex;var u=e.getModel(),h=e.getLayout(),c=a({},h);c.label=null;var d=Gm(e,0,s);Hm(e,o,d);var f,p=u.getModel("itemStyle").getItemStyle();f=r({lineJoin:"bevel",fill:(f="normal"===i?p:n(u.getModel(i+".itemStyle").getItemStyle(),p)).fill||d},f),t?(l.setShape(c),l.shape.r=h.r0,Mo(l,{shape:{r:h.r}},o,e.dataIndex),l.useStyle(f)):"object"==typeof f.fill&&f.fill.type||"object"==typeof l.style.fill&&l.style.fill.type?(Mo(l,{shape:c},o),l.useStyle(f)):Mo(l,{shape:c,style:f},o),this._updateLabel(o,d,i);var g=u.getShallow("cursor");if(g&&l.attr("cursor",g),t){var m=o.getShallow("highlightPolicy");this._initEvents(l,e,o,m)}this._seriesModel=o||this._seriesModel,this._ecModel=s||this._ecModel},NP.onEmphasis=function(t){var e=this;this.node.hostTree.root.eachNode(function(i){i.piece&&(e.node===i?i.piece.updateData(!1,i,"emphasis"):Wm(i,e.node,t)?i.piece.childAt(0).trigger("highlight"):t!==LP.NONE&&i.piece.childAt(0).trigger("downplay"))})},NP.onNormal=function(){this.node.hostTree.root.eachNode(function(t){t.piece&&t.piece.updateData(!1,t,"normal")})},NP.onHighlight=function(){this.updateData(!1,this.node,"highlight")},NP.onDownplay=function(){this.updateData(!1,this.node,"downplay")},NP._updateLabel=function(t,e,i){function n(t){var e=r.get(t);return null==e?a.get(t):e}var o=this.node.getModel(),a=o.getModel("label"),r="normal"===i||"emphasis"===i?a:o.getModel(i+".label"),s=o.getModel("emphasis.label"),l=T(t.getFormattedLabel(this.node.dataIndex,"normal",null,null,"label"),this.node.name);!1===n("show")&&(l="");var u=this.node.getLayout(),h=r.get("minAngle");null==h&&(h=a.get("minAngle")),h=h/180*Math.PI;var c=u.endAngle-u.startAngle;null!=h&&Math.abs(c)<h&&(l="");var d=this.childAt(1);po(d.style,d.hoverStyle||{},a,s,{defaultText:r.getShallow("show")?l:null,autoColor:e,useInsideStyle:!0});var f,p=(u.startAngle+u.endAngle)/2,g=Math.cos(p),m=Math.sin(p),v=n("position"),y=n("distance")||0,x=n("align");"outside"===v?(f=u.r+y,x=p>Math.PI/2?"right":"left"):x&&"center"!==x?"left"===x?(f=u.r0+y,p>Math.PI/2&&(x="right")):"right"===x&&(f=u.r-y,p>Math.PI/2&&(x="left")):(f=(u.r+u.r0)/2,x="center"),d.attr("style",{text:l,textAlign:x,textVerticalAlign:n("verticalAlign")||"middle",opacity:n("opacity")});var _=f*g+u.cx,w=f*m+u.cy;d.attr("position",[_,w]);var b=n("rotate"),S=0;"radial"===b?(S=-p)<-Math.PI/2&&(S+=Math.PI):"tangential"===b?(S=Math.PI/2-p)>Math.PI/2?S-=Math.PI:S<-Math.PI/2&&(S+=Math.PI):"number"==typeof b&&(S=b*Math.PI/180),d.attr("rotation",S)},NP._initEvents=function(t,e,i,n){t.off("mouseover").off("mouseout").off("emphasis").off("normal");var o=this,a=function(){o.onEmphasis(n)},r=function(){o.onNormal()};i.isAnimationEnabled()&&t.on("mouseover",a).on("mouseout",r).on("emphasis",a).on("normal",r).on("downplay",function(){o.onDownplay()}).on("highlight",function(){o.onHighlight()})},u(Vm,tb);Tr.extend({type:"sunburst",init:function(){},render:function(t,e,i,n){function o(i,n){if(c||!i||i.getValue()||(i=null),i!==l&&n!==l)if(n&&n.piece)i?(n.piece.updateData(!1,i,"normal",t,e),s.setItemGraphicEl(i.dataIndex,n.piece)):a(n);else if(i){var o=new Vm(i,t,e);h.add(o),s.setItemGraphicEl(i.dataIndex,o)}}function a(t){t&&t.piece&&(h.remove(t.piece),t.piece=null)}var r=this;this.seriesModel=t,this.api=i,this.ecModel=e;var s=t.getData(),l=s.tree.root,u=t.getViewRoot(),h=this.group,c=t.get("renderLabelForZeroData"),d=[];u.eachNode(function(t){d.push(t)});var f=this._oldChildren||[];if(function(t,e){function i(t){return t.getId()}function n(i,n){o(null==i?null:t[i],null==n?null:e[n])}0===t.length&&0===e.length||new Us(e,t,i,i).add(n).update(n).remove(v(n,null)).execute()}(d,f),function(i,n){if(n.depth>0){r.virtualPiece?r.virtualPiece.updateData(!1,i,"normal",t,e):(r.virtualPiece=new Vm(i,t,e),h.add(r.virtualPiece)),n.piece._onclickEvent&&n.piece.off("click",n.piece._onclickEvent);var o=function(t){r._rootToNode(n.parentNode)};n.piece._onclickEvent=o,r.virtualPiece.on("click",o)}else r.virtualPiece&&(h.remove(r.virtualPiece),r.virtualPiece=null)}(l,u),n&&n.highlight&&n.highlight.piece){var p=t.getShallow("highlightPolicy");n.highlight.piece.onEmphasis(p)}else if(n&&n.unhighlight){var g=this.virtualPiece;!g&&l.children.length&&(g=l.children[0].piece),g&&g.onNormal()}this._initEvents(),this._oldChildren=d},dispose:function(){},_initEvents:function(){var t=this,e=function(e){var i=!1;t.seriesModel.getViewRoot().eachNode(function(n){if(!i&&n.piece&&n.piece.childAt(0)===e.target){var o=n.getModel().get("nodeClick");if("rootToNode"===o)t._rootToNode(n);else if("link"===o){var a=n.getModel(),r=a.get("link");if(r){var s=a.get("target",!0)||"_blank";window.open(r,s)}}i=!0}})};this.group._onclickEvent&&this.group.off("click",this.group._onclickEvent),this.group.on("click",e),this.group._onclickEvent=e},_rootToNode:function(t){t!==this.seriesModel.getViewRoot()&&this.api.dispatchAction({type:"sunburstRootToNode",from:this.uid,seriesId:this.seriesModel.id,targetNode:t})},containPoint:function(t,e){var i=e.getData().getItemLayout(0);if(i){var n=t[0]-i.cx,o=t[1]-i.cy,a=Math.sqrt(n*n+o*o);return a<=i.r&&a>=i.r0}}});var OP="sunburstRootToNode";Os({type:OP,update:"updateView"},function(t,e){e.eachComponent({mainType:"series",subType:"sunburst",query:t},function(e,i){var n=sd(t,[OP],e);if(n){var o=e.getViewRoot();o&&(t.direction=ud(o,n.node)?"rollUp":"drillDown"),e.resetViewRoot(n.node)}})});var EP="sunburstHighlight";Os({type:EP,update:"updateView"},function(t,e){e.eachComponent({mainType:"series",subType:"sunburst",query:t},function(e,i){var n=sd(t,[EP],e);n&&(t.highlight=n.node)})});Os({type:"sunburstUnhighlight",update:"updateView"},function(t,e){e.eachComponent({mainType:"series",subType:"sunburst",query:t},function(e,i){t.unhighlight=!0})});var RP=Math.PI/180;zs(v(rC,"sunburst")),Rs(v(function(t,e,i,n){e.eachSeriesByType(t,function(t){var e=t.get("center"),n=t.get("radius");y(n)||(n=[0,n]),y(e)||(e=[e,e]);var o=i.getWidth(),a=i.getHeight(),r=Math.min(o,a),s=Bo(e[0],o),l=Bo(e[1],a),u=Bo(n[0],r/2),h=Bo(n[1],r/2),c=-t.get("startAngle")*RP,f=t.get("minAngle")*RP,p=t.getData().tree.root,g=t.getViewRoot(),m=g.depth,v=t.get("sort");null!=v&&Zm(g,v);var x=0;d(g.children,function(t){!isNaN(t.getValue())&&x++});var _=g.getValue(),w=Math.PI/(_||x)*2,b=g.depth>0,S=g.height-(b?-1:1),M=(h-u)/(S||1),I=t.get("clockwise"),T=t.get("stillShowZeroSum"),A=I?1:-1,D=function(t,e){if(t){var i=e;if(t!==p){var n=t.getValue(),o=0===_&&T?w:n*w;o<f&&(o=f),i=e+A*o;var a=t.depth-m-(b?-1:1),h=u+M*a,c=u+M*(a+1),g=t.getModel();null!=g.get("r0")&&(h=Bo(g.get("r0"),r/2)),null!=g.get("r")&&(c=Bo(g.get("r"),r/2)),t.setLayout({angle:o,startAngle:e,endAngle:i,clockwise:I,cx:s,cy:l,r0:h,r:c})}if(t.children&&t.children.length){var v=0;d(t.children,function(t){v+=D(t,e+v)})}return i-e}};if(b){var C=u,L=u+M,k=2*Math.PI;p.setLayout({angle:k,startAngle:c,endAngle:c+k,clockwise:I,cx:s,cy:l,r0:C,r:L})}D(g,c)})},"sunburst")),Ns(v(hC,"sunburst"));var zP=["itemStyle"],BP=["emphasis","itemStyle"],VP=["label"],GP=["emphasis","label"],FP="e\0\0",WP={cartesian2d:function(t){var e=t.grid.getRect();return{coordSys:{type:"cartesian2d",x:e.x,y:e.y,width:e.width,height:e.height},api:{coord:function(e){return t.dataToPoint(e)},size:m(Xm,t)}}},geo:function(t){var e=t.getBoundingRect();return{coordSys:{type:"geo",x:e.x,y:e.y,width:e.width,height:e.height,zoom:t.getZoom()},api:{coord:function(e){return t.dataToPoint(e)},size:m(jm,t)}}},singleAxis:function(t){var e=t.getRect();return{coordSys:{type:"singleAxis",x:e.x,y:e.y,width:e.width,height:e.height},api:{coord:function(e){return t.dataToPoint(e)},size:m(Ym,t)}}},polar:function(t){var e=t.getRadiusAxis(),i=t.getAngleAxis(),n=e.getExtent();return n[0]>n[1]&&n.reverse(),{coordSys:{type:"polar",cx:t.cx,cy:t.cy,r:n[1],r0:n[0]},api:{coord:m(function(n){var o=e.dataToRadius(n[0]),a=i.dataToAngle(n[1]),r=t.coordToPoint([o,a]);return r.push(o,a*Math.PI/180),r}),size:m(qm,t)}}},calendar:function(t){var e=t.getRect(),i=t.getRangeInfo();return{coordSys:{type:"calendar",x:e.x,y:e.y,width:e.width,height:e.height,cellWidth:t.getCellWidth(),cellHeight:t.getCellHeight(),rangeInfo:{start:i.start,end:i.end,weeks:i.weeks,dayCount:i.allDay}},api:{coord:function(e,i){return t.dataToPoint(e,i)}}}}};jI.extend({type:"series.custom",dependencies:["grid","polar","geo","singleAxis","calendar"],defaultOption:{coordinateSystem:"cartesian2d",zlevel:0,z:2,legendHoverLink:!0,useTransform:!0},getInitialData:function(t,e){return gl(this.getSource(),this)},getDataParams:function(t,e,i){var n=jI.prototype.getDataParams.apply(this,arguments);return i&&(n.info=i.info),n}}),Tr.extend({type:"custom",_data:null,render:function(t,e,i,n){var o=this._data,a=t.getData(),r=this.group,s=Qm(t,a,e,i);a.diff(o).add(function(e){ev(null,e,s(e,n),t,r,a)}).update(function(e,i){ev(o.getItemGraphicEl(i),e,s(e,n),t,r,a)}).remove(function(t){var e=o.getItemGraphicEl(t);e&&r.remove(e)}).execute(),this._data=a},incrementalPrepareRender:function(t,e,i){this.group.removeAll(),this._data=null},incrementalRender:function(t,e,i,n,o){for(var a=e.getData(),r=Qm(e,a,i,n),s=t.start;s<t.end;s++)ev(null,s,r(s,o),e,this.group,a).traverse(function(t){t.isGroup||(t.incremental=!0,t.useHoverLayer=!0)})},dispose:B,filterForExposedEvent:function(t,e,i,n){var o=e.element;if(null==o||i.name===o)return!0;for(;(i=i.parent)&&i!==this.group;)if(i.name===o)return!0;return!1}}),Ps(function(t){var e=t.graphic;y(e)?e[0]&&e[0].elements?t.graphic=[t.graphic[0]]:t.graphic=[{elements:e}]:e&&!e.elements&&(t.graphic=[{elements:[e]}])});var HP=Gs({type:"graphic",defaultOption:{elements:[],parentId:null},_elOptionsToUpdate:null,mergeOption:function(t){var e=this.option.elements;this.option.elements=null,HP.superApply(this,"mergeOption",arguments),this.option.elements=e},optionUpdated:function(t,e){var i=this.option,n=(e?i:t).elements,o=i.elements=e?[]:i.elements,a=[];this._flatten(n,a);var r=Pi(o,a);Ni(r);var s=this._elOptionsToUpdate=[];d(r,function(t,e){var i=t.option;i&&(s.push(i),gv(t,i),mv(o,e,i),vv(o[e],i))},this);for(var l=o.length-1;l>=0;l--)null==o[l]?o.splice(l,1):delete o[l].$action},_flatten:function(t,e,i){d(t,function(t){if(t){i&&(t.parentOption=i),e.push(t);var n=t.children;"group"===t.type&&n&&this._flatten(n,e,t),delete t.children}},this)},useElOptionsToUpdate:function(){var t=this._elOptionsToUpdate;return this._elOptionsToUpdate=null,t}});Fs({type:"graphic",init:function(t,e){this._elMap=R(),this._lastGraphicModel},render:function(t,e,i){t!==this._lastGraphicModel&&this._clear(),this._lastGraphicModel=t,this._updateElements(t),this._relocate(t,i)},_updateElements:function(t){var e=t.useElOptionsToUpdate();if(e){var i=this._elMap,n=this.group;d(e,function(e){var o=e.$action,a=e.id,r=i.get(a),s=e.parentId,l=null!=s?i.get(s):n,u=e.style;"text"===e.type&&u&&(e.hv&&e.hv[1]&&(u.textVerticalAlign=u.textBaseline=null),!u.hasOwnProperty("textFill")&&u.fill&&(u.textFill=u.fill),!u.hasOwnProperty("textStroke")&&u.stroke&&(u.textStroke=u.stroke));var h=fv(e);o&&"merge"!==o?"replace"===o?(dv(r,i),cv(a,l,h,i)):"remove"===o&&dv(r,i):r?r.attr(h):cv(a,l,h,i);var c=i.get(a);c&&(c.__ecGraphicWidth=e.width,c.__ecGraphicHeight=e.height,yv(c,t))})}},_relocate:function(t,e){for(var i=t.option.elements,n=this.group,o=this._elMap,a=i.length-1;a>=0;a--){var r=i[a],s=o.get(r.id);if(s){var l=s.parent;ca(s,r,l===n?{width:e.getWidth(),height:e.getHeight()}:{width:l.__ecGraphicWidth||0,height:l.__ecGraphicHeight||0},null,{hv:r.hv,boundingMode:r.bounding})}}},_clear:function(){var t=this._elMap;t.each(function(e){dv(e,t)}),this._elMap=R()},dispose:function(){this._clear()}});var ZP=Gs({type:"legend.plain",dependencies:["series"],layoutMode:{type:"box",ignoreSize:!0},init:function(t,e,i){this.mergeDefaultAndTheme(t,i),t.selected=t.selected||{}},mergeOption:function(t){ZP.superCall(this,"mergeOption",t)},optionUpdated:function(){this._updateData(this.ecModel);var t=this._data;if(t[0]&&"single"===this.get("selectedMode")){for(var e=!1,i=0;i<t.length;i++){var n=t[i].get("name");if(this.isSelected(n)){this.select(n),e=!0;break}}!e&&this.select(t[0].get("name"))}},_updateData:function(t){var e=[],i=[];t.eachRawSeries(function(n){var o=n.name;i.push(o);var a;if(n.legendDataProvider){var r=n.legendDataProvider(),s=r.mapArray(r.getName);t.isSeriesFiltered(n)||(i=i.concat(s)),s.length?e=e.concat(s):a=!0}else a=!0;a&&Oi(n)&&e.push(n.name)}),this._availableNames=i;var n=f(this.get("data")||e,function(t){return"string"!=typeof t&&"number"!=typeof t||(t={name:t}),new Po(t,this,this.ecModel)},this);this._data=n},getData:function(){return this._data},select:function(t){var e=this.option.selected;"single"===this.get("selectedMode")&&d(this._data,function(t){e[t.get("name")]=!1}),e[t]=!0},unSelect:function(t){"single"!==this.get("selectedMode")&&(this.option.selected[t]=!1)},toggleSelected:function(t){var e=this.option.selected;e.hasOwnProperty(t)||(e[t]=!0),this[e[t]?"unSelect":"select"](t)},isSelected:function(t){var e=this.option.selected;return!(e.hasOwnProperty(t)&&!e[t])&&l(this._availableNames,t)>=0},defaultOption:{zlevel:0,z:4,show:!0,orient:"horizontal",left:"center",top:0,align:"auto",backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderRadius:0,borderWidth:0,padding:5,itemGap:10,itemWidth:25,itemHeight:14,inactiveColor:"#ccc",textStyle:{color:"#333"},selectedMode:!0,tooltip:{show:!1}}});Os("legendToggleSelect","legendselectchanged",v(xv,"toggleSelected")),Os("legendSelect","legendselected",v(xv,"select")),Os("legendUnSelect","legendunselected",v(xv,"unSelect"));var UP=v,XP=d,jP=tb,YP=Fs({type:"legend.plain",newlineDisabled:!1,init:function(){this.group.add(this._contentGroup=new jP),this._backgroundEl,this._isFirstRender=!0},getContentGroup:function(){return this._contentGroup},render:function(t,e,i){var n=this._isFirstRender;if(this._isFirstRender=!1,this.resetInner(),t.get("show",!0)){var o=t.get("align");o&&"auto"!==o||(o="right"===t.get("left")&&"vertical"===t.get("orient")?"right":"left"),this.renderInner(o,t,e,i);var a=t.getBoxLayoutParams(),s={width:i.getWidth(),height:i.getHeight()},l=t.get("padding"),u=ha(a,s,l),h=this.layoutInner(t,o,u,n),c=ha(r({width:h.width,height:h.height},a),s,l);this.group.attr("position",[c.x-h.x,c.y-h.y]),this.group.add(this._backgroundEl=wv(h,t))}},resetInner:function(){this.getContentGroup().removeAll(),this._backgroundEl&&this.group.remove(this._backgroundEl)},renderInner:function(t,e,i,n){var o=this.getContentGroup(),a=R(),r=e.get("selectedMode"),s=[];i.eachRawSeries(function(t){!t.get("legendHoverLink")&&s.push(t.id)}),XP(e.getData(),function(l,u){var h=l.get("name");if(this.newlineDisabled||""!==h&&"\n"!==h){var c=i.getSeriesByName(h)[0];if(!a.get(h))if(c){var d=c.getData(),f=d.getVisual("color");"function"==typeof f&&(f=f(c.getDataParams(0)));var p=d.getVisual("legendSymbol")||"roundRect",g=d.getVisual("symbol");this._createItem(h,u,l,e,p,g,t,f,r).on("click",UP(bv,h,n)).on("mouseover",UP(Sv,c.name,null,n,s)).on("mouseout",UP(Mv,c.name,null,n,s)),a.set(h,!0)}else i.eachRawSeries(function(i){if(!a.get(h)&&i.legendDataProvider){var o=i.legendDataProvider(),c=o.indexOfName(h);if(c<0)return;var d=o.getItemVisual(c,"color");this._createItem(h,u,l,e,"roundRect",null,t,d,r).on("click",UP(bv,h,n)).on("mouseover",UP(Sv,null,h,n,s)).on("mouseout",UP(Mv,null,h,n,s)),a.set(h,!0)}},this)}else o.add(new jP({newline:!0}))},this)},_createItem:function(t,e,i,n,o,r,s,l,u){var h=n.get("itemWidth"),c=n.get("itemHeight"),d=n.get("inactiveColor"),f=n.get("symbolKeepAspect"),p=n.isSelected(t),g=new jP,m=i.getModel("textStyle"),v=i.get("icon"),y=i.getModel("tooltip"),x=y.parentModel;if(o=v||o,g.add($l(o,0,0,h,c,p?l:d,null==f||f)),!v&&r&&(r!==o||"none"===r)){var _=.8*c;"none"===r&&(r="circle"),g.add($l(r,(h-_)/2,(c-_)/2,_,_,p?l:d,null==f||f))}var w="left"===s?h+5:-5,b=s,S=n.get("formatter"),M=t;"string"==typeof S&&S?M=S.replace("{name}",null!=t?t:""):"function"==typeof S&&(M=S(t)),g.add(new aM({style:go({},m,{text:M,x:w,y:c/2,textFill:p?m.getTextColor():d,textAlign:b,textVerticalAlign:"middle"})}));var I=new vM({shape:g.getBoundingRect(),invisible:!0,tooltip:y.get("show")?a({content:t,formatter:x.get("formatter",!0)||function(){return t},formatterParams:{componentType:"legend",legendIndex:n.componentIndex,name:t,$vars:["name"]}},y.option):null});return g.add(I),g.eachChild(function(t){t.silent=!0}),I.silent=!u,this.getContentGroup().add(g),co(g),g.__legendDataIndex=e,g},layoutInner:function(t,e,i){var n=this.getContentGroup();aI(t.get("orient"),n,t.get("itemGap"),i.width,i.height);var o=n.getBoundingRect();return n.attr("position",[-o.x,-o.y]),this.group.getBoundingRect()},remove:function(){this.getContentGroup().removeAll(),this._isFirstRender=!0}});Ns(function(t){var e=t.findComponents({mainType:"legend"});e&&e.length&&t.filterSeries(function(t){for(var i=0;i<e.length;i++)if(!e[i].isSelected(t.name))return!1;return!0})}),sI.registerSubTypeDefaulter("legend",function(){return"plain"});var qP=ZP.extend({type:"legend.scroll",setScrollDataIndex:function(t){this.option.scrollDataIndex=t},defaultOption:{scrollDataIndex:0,pageButtonItemGap:5,pageButtonGap:null,pageButtonPosition:"end",pageFormatter:"{current}/{total}",pageIcons:{horizontal:["M0,0L12,-10L12,10z","M0,0L-12,-10L-12,10z"],vertical:["M0,0L20,0L10,-20z","M0,0L20,0L10,20z"]},pageIconColor:"#2f4554",pageIconInactiveColor:"#aaa",pageIconSize:15,pageTextStyle:{color:"#333"},animationDurationUpdate:800},init:function(t,e,i,n){var o=pa(t);qP.superCall(this,"init",t,e,i,n),Iv(this,t,o)},mergeOption:function(t,e){qP.superCall(this,"mergeOption",t,e),Iv(this,this.option,t)},getOrient:function(){return"vertical"===this.get("orient")?{index:1,name:"vertical"}:{index:0,name:"horizontal"}}}),KP=tb,$P=["width","height"],JP=["x","y"],QP=YP.extend({type:"legend.scroll",newlineDisabled:!0,init:function(){QP.superCall(this,"init"),this._currentIndex=0,this.group.add(this._containerGroup=new KP),this._containerGroup.add(this.getContentGroup()),this.group.add(this._controllerGroup=new KP),this._showController},resetInner:function(){QP.superCall(this,"resetInner"),this._controllerGroup.removeAll(),this._containerGroup.removeClipPath(),this._containerGroup.__rectSize=null},renderInner:function(t,e,i,n){function o(t,i){var o=t+"DataIndex",l=ko(e.get("pageIcons",!0)[e.getOrient().name][i],{onclick:m(a._pageGo,a,o,e,n)},{x:-s[0]/2,y:-s[1]/2,width:s[0],height:s[1]});l.name=t,r.add(l)}var a=this;QP.superCall(this,"renderInner",t,e,i,n);var r=this._controllerGroup,s=e.get("pageIconSize",!0);y(s)||(s=[s,s]),o("pagePrev",0);var l=e.getModel("pageTextStyle");r.add(new aM({name:"pageText",style:{textFill:l.getTextColor(),font:l.getFont(),textVerticalAlign:"middle",textAlign:"center"},silent:!0})),o("pageNext",1)},layoutInner:function(t,e,i,n){var o=this.getContentGroup(),a=this._containerGroup,r=this._controllerGroup,s=t.getOrient().index,l=$P[s],u=$P[1-s],h=JP[1-s];aI(t.get("orient"),o,t.get("itemGap"),s?i.width:null,s?null:i.height),aI("horizontal",r,t.get("pageButtonItemGap",!0));var c=o.getBoundingRect(),d=r.getBoundingRect(),f=this._showController=c[l]>i[l],p=[-c.x,-c.y];n||(p[s]=o.position[s]);var g=[0,0],m=[-d.x,-d.y],v=A(t.get("pageButtonGap",!0),t.get("itemGap",!0));f&&("end"===t.get("pageButtonPosition",!0)?m[s]+=i[l]-d[l]:g[s]+=d[l]+v),m[1-s]+=c[u]/2-d[u]/2,o.attr("position",p),a.attr("position",g),r.attr("position",m);var y=this.group.getBoundingRect();if((y={x:0,y:0})[l]=f?i[l]:c[l],y[u]=Math.max(c[u],d[u]),y[h]=Math.min(0,d[h]+m[1-s]),a.__rectSize=i[l],f){var x={x:0,y:0};x[l]=Math.max(i[l]-d[l]-v,0),x[u]=y[u],a.setClipPath(new vM({shape:x})),a.__rectSize=x[l]}else r.eachChild(function(t){t.attr({invisible:!0,silent:!0})});var _=this._getPageInfo(t);return null!=_.pageIndex&&Mo(o,{position:_.contentPosition},!!f&&t),this._updatePageInfoView(t,_),y},_pageGo:function(t,e,i){var n=this._getPageInfo(e)[t];null!=n&&i.dispatchAction({type:"legendScroll",scrollDataIndex:n,legendId:e.id})},_updatePageInfoView:function(t,e){var i=this._controllerGroup;d(["pagePrev","pageNext"],function(n){var o=null!=e[n+"DataIndex"],a=i.childOfName(n);a&&(a.setStyle("fill",o?t.get("pageIconColor",!0):t.get("pageIconInactiveColor",!0)),a.cursor=o?"pointer":"default")});var n=i.childOfName("pageText"),o=t.get("pageFormatter"),a=e.pageIndex,r=null!=a?a+1:0,s=e.pageCount;n&&o&&n.setStyle("text",_(o)?o.replace("{current}",r).replace("{total}",s):o({current:r,total:s}))},_getPageInfo:function(t){function e(t){if(t){var e=t.getBoundingRect(),i=e[l]+t.position[r];return{s:i,e:i+e[s],i:t.__legendDataIndex}}}function i(t,e){return t.e>=e&&t.s<=e+a}var n=t.get("scrollDataIndex",!0),o=this.getContentGroup(),a=this._containerGroup.__rectSize,r=t.getOrient().index,s=$P[r],l=JP[r],u=this._findTargetItemIndex(n),h=o.children(),c=h[u],d=h.length,f=d?1:0,p={contentPosition:o.position.slice(),pageCount:f,pageIndex:f-1,pagePrevDataIndex:null,pageNextDataIndex:null};if(!c)return p;var g=e(c);p.contentPosition[r]=-g.s;for(var m=u+1,v=g,y=g,x=null;m<=d;++m)(!(x=e(h[m]))&&y.e>v.s+a||x&&!i(x,v.s))&&(v=y.i>v.i?y:x)&&(null==p.pageNextDataIndex&&(p.pageNextDataIndex=v.i),++p.pageCount),y=x;for(var m=u-1,v=g,y=g,x=null;m>=-1;--m)(x=e(h[m]))&&i(y,x.s)||!(v.i<y.i)||(y=v,null==p.pagePrevDataIndex&&(p.pagePrevDataIndex=v.i),++p.pageCount,++p.pageIndex),v=x;return p},_findTargetItemIndex:function(t){var e,i=this.getContentGroup();return this._showController?i.eachChild(function(i,n){i.__legendDataIndex===t&&(e=n)}):e=0,e}});Os("legendScroll","legendscroll",function(t,e){var i=t.scrollDataIndex;null!=i&&e.eachComponent({mainType:"legend",subType:"scroll",query:t},function(t){t.setScrollDataIndex(i)})}),Gs({type:"tooltip",dependencies:["axisPointer"],defaultOption:{zlevel:0,z:60,show:!0,showContent:!0,trigger:"item",triggerOn:"mousemove|click",alwaysShowContent:!1,displayMode:"single",renderMode:"auto",confine:!1,showDelay:0,hideDelay:100,transitionDuration:.4,enterable:!1,backgroundColor:"rgba(50,50,50,0.7)",borderColor:"#333",borderRadius:4,borderWidth:0,padding:5,extraCssText:"",axisPointer:{type:"line",axis:"auto",animation:"auto",animationDurationUpdate:200,animationEasingUpdate:"exponentialOut",crossStyle:{color:"#999",width:1,type:"dashed",textStyle:{}}},textStyle:{color:"#fff",fontSize:14}}});var tN=d,eN=ta,iN=["","-webkit-","-moz-","-o-"];Cv.prototype={constructor:Cv,_enterable:!0,update:function(){var t=this._container,e=t.currentStyle||document.defaultView.getComputedStyle(t),i=t.style;"absolute"!==i.position&&"absolute"!==e.position&&(i.position="relative")},show:function(t){clearTimeout(this._hideTimeout);var e=this.el;e.style.cssText="position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;"+Dv(t)+";left:"+this._x+"px;top:"+this._y+"px;"+(t.get("extraCssText")||""),e.style.display=e.innerHTML?"block":"none",e.style.pointerEvents=this._enterable?"auto":"none",this._show=!0},setContent:function(t){this.el.innerHTML=null==t?"":t},setEnterable:function(t){this._enterable=t},getSize:function(){var t=this.el;return[t.clientWidth,t.clientHeight]},moveTo:function(t,e){var i,n=this._zr;n&&n.painter&&(i=n.painter.getViewportRootOffset())&&(t+=i.offsetLeft,e+=i.offsetTop);var o=this.el.style;o.left=t+"px",o.top=e+"px",this._x=t,this._y=e},hide:function(){this.el.style.display="none",this._show=!1},hideLater:function(t){!this._show||this._inContent&&this._enterable||(t?(this._hideDelay=t,this._show=!1,this._hideTimeout=setTimeout(m(this.hide,this),t)):this.hide())},isShow:function(){return this._show},getOuterSize:function(){var t=this.el.clientWidth,e=this.el.clientHeight;if(document.defaultView&&document.defaultView.getComputedStyle){var i=document.defaultView.getComputedStyle(this.el);i&&(t+=parseInt(i.paddingLeft,10)+parseInt(i.paddingRight,10)+parseInt(i.borderLeftWidth,10)+parseInt(i.borderRightWidth,10),e+=parseInt(i.paddingTop,10)+parseInt(i.paddingBottom,10)+parseInt(i.borderTopWidth,10)+parseInt(i.borderBottomWidth,10))}return{width:t,height:e}}},Lv.prototype={constructor:Lv,_enterable:!0,update:function(){},show:function(t){this._hideTimeout&&clearTimeout(this._hideTimeout),this.el.attr("show",!0),this._show=!0},setContent:function(t,e,i){this.el&&this._zr.remove(this.el);for(var n={},o=t,a=o.indexOf("{marker");a>=0;){var r=o.indexOf("|}"),s=o.substr(a+"{marker".length,r-a-"{marker".length);s.indexOf("sub")>-1?n["marker"+s]={textWidth:4,textHeight:4,textBorderRadius:2,textBackgroundColor:e[s],textOffset:[3,0]}:n["marker"+s]={textWidth:10,textHeight:10,textBorderRadius:5,textBackgroundColor:e[s]},a=(o=o.substr(r+1)).indexOf("{marker")}this.el=new aM({style:{rich:n,text:t,textLineHeight:20,textBackgroundColor:i.get("backgroundColor"),textBorderRadius:i.get("borderRadius"),textFill:i.get("textStyle.color"),textPadding:i.get("padding")},z:i.get("z")}),this._zr.add(this.el);var l=this;this.el.on("mouseover",function(){l._enterable&&(clearTimeout(l._hideTimeout),l._show=!0),l._inContent=!0}),this.el.on("mouseout",function(){l._enterable&&l._show&&l.hideLater(l._hideDelay),l._inContent=!1})},setEnterable:function(t){this._enterable=t},getSize:function(){var t=this.el.getBoundingRect();return[t.width,t.height]},moveTo:function(t,e){this.el&&this.el.attr("position",[t,e])},hide:function(){this.el.hide(),this._show=!1},hideLater:function(t){!this._show||this._inContent&&this._enterable||(t?(this._hideDelay=t,this._show=!1,this._hideTimeout=setTimeout(m(this.hide,this),t)):this.hide())},isShow:function(){return this._show},getOuterSize:function(){return this.getSize()}};var nN=m,oN=d,aN=Bo,rN=new vM({shape:{x:-1,y:-1,width:2,height:2}});Fs({type:"tooltip",init:function(t,e){if(!U_.node){var i=t.getComponent("tooltip").get("renderMode");this._renderMode=Hi(i);var n;"html"===this._renderMode?(n=new Cv(e.getDom(),e),this._newLine="<br/>"):(n=new Lv(e),this._newLine="\n"),this._tooltipContent=n}},render:function(t,e,i){if(!U_.node){this.group.removeAll(),this._tooltipModel=t,this._ecModel=e,this._api=i,this._lastDataByCoordSys=null,this._alwaysShowContent=t.get("alwaysShowContent");var n=this._tooltipContent;n.update(),n.setEnterable(t.get("enterable")),this._initGlobalListener(),this._keepShow()}},_initGlobalListener:function(){var t=this._tooltipModel.get("triggerOn");um("itemTooltip",this._api,nN(function(e,i,n){"none"!==t&&(t.indexOf(e)>=0?this._tryShow(i,n):"leave"===e&&this._hide(n))},this))},_keepShow:function(){var t=this._tooltipModel,e=this._ecModel,i=this._api;if(null!=this._lastX&&null!=this._lastY&&"none"!==t.get("triggerOn")){var n=this;clearTimeout(this._refreshUpdateTimeout),this._refreshUpdateTimeout=setTimeout(function(){n.manuallyShowTip(t,e,i,{x:n._lastX,y:n._lastY})})}},manuallyShowTip:function(t,e,i,n){if(n.from!==this.uid&&!U_.node){var o=Pv(n,i);this._ticket="";var a=n.dataByCoordSys;if(n.tooltip&&null!=n.x&&null!=n.y){var r=rN;r.position=[n.x,n.y],r.update(),r.tooltip=n.tooltip,this._tryShow({offsetX:n.x,offsetY:n.y,target:r},o)}else if(a)this._tryShow({offsetX:n.x,offsetY:n.y,position:n.position,event:{},dataByCoordSys:n.dataByCoordSys,tooltipOption:n.tooltipOption},o);else if(null!=n.seriesIndex){if(this._manuallyAxisShowTip(t,e,i,n))return;var s=fP(n,e),l=s.point[0],u=s.point[1];null!=l&&null!=u&&this._tryShow({offsetX:l,offsetY:u,position:n.position,target:s.el,event:{}},o)}else null!=n.x&&null!=n.y&&(i.dispatchAction({type:"updateAxisPointer",x:n.x,y:n.y}),this._tryShow({offsetX:n.x,offsetY:n.y,position:n.position,target:i.getZr().findHover(n.x,n.y).target,event:{}},o))}},manuallyHideTip:function(t,e,i,n){var o=this._tooltipContent;!this._alwaysShowContent&&this._tooltipModel&&o.hideLater(this._tooltipModel.get("hideDelay")),this._lastX=this._lastY=null,n.from!==this.uid&&this._hide(Pv(n,i))},_manuallyAxisShowTip:function(t,e,i,n){var o=n.seriesIndex,a=n.dataIndex,r=e.getComponent("axisPointer").coordSysAxesInfo;if(null!=o&&null!=a&&null!=r){var s=e.getSeriesByIndex(o);if(s&&"axis"===(t=kv([s.getData().getItemModel(a),s,(s.coordinateSystem||{}).model,t])).get("trigger"))return i.dispatchAction({type:"updateAxisPointer",seriesIndex:o,dataIndex:a,position:n.position}),!0}},_tryShow:function(t,e){var i=t.target;if(this._tooltipModel){this._lastX=t.offsetX,this._lastY=t.offsetY;var n=t.dataByCoordSys;n&&n.length?this._showAxisTooltip(n,t):i&&null!=i.dataIndex?(this._lastDataByCoordSys=null,this._showSeriesItemTooltip(t,i,e)):i&&i.tooltip?(this._lastDataByCoordSys=null,this._showComponentItemTooltip(t,i,e)):(this._lastDataByCoordSys=null,this._hide(e))}},_showOrMove:function(t,e){var i=t.get("showDelay");e=m(e,this),clearTimeout(this._showTimout),i>0?this._showTimout=setTimeout(e,i):e()},_showAxisTooltip:function(t,e){var i=this._ecModel,o=this._tooltipModel,a=[e.offsetX,e.offsetY],r=[],s=[],l=kv([e.tooltipOption,o]),u=this._renderMode,h=this._newLine,c={};oN(t,function(t){oN(t.dataByAxis,function(t){var e=i.getComponent(t.axisDim+"Axis",t.axisIndex),o=t.value,a=[];if(e&&null!=o){var l=Im(o,e.axis,i,t.seriesDataIndices,t.valueLabelOpt);d(t.seriesDataIndices,function(r){var h=i.getSeriesByIndex(r.seriesIndex),d=r.dataIndexInside,f=h&&h.getDataParams(d);if(f.axisDim=t.axisDim,f.axisIndex=t.axisIndex,f.axisType=t.axisType,f.axisId=t.axisId,f.axisValue=Ul(e.axis,o),f.axisValueLabel=l,f){s.push(f);var p,g=h.formatTooltip(d,!0,null,u);if(w(g)){p=g.html;var m=g.markers;n(c,m)}else p=g;a.push(p)}});var f=l;"html"!==u?r.push(a.join(h)):r.push((f?ea(f)+h:"")+a.join(h))}})},this),r.reverse(),r=r.join(this._newLine+this._newLine);var f=e.position;this._showOrMove(l,function(){this._updateContentNotChangedOnAxis(t)?this._updatePosition(l,f,a[0],a[1],this._tooltipContent,s):this._showTooltipContent(l,r,s,Math.random(),a[0],a[1],f,void 0,c)})},_showSeriesItemTooltip:function(t,e,i){var n=this._ecModel,o=e.seriesIndex,a=n.getSeriesByIndex(o),r=e.dataModel||a,s=e.dataIndex,l=e.dataType,u=r.getData(),h=kv([u.getItemModel(s),r,a&&(a.coordinateSystem||{}).model,this._tooltipModel]),c=h.get("trigger");if(null==c||"item"===c){var d,f,p=r.getDataParams(s,l),g=r.formatTooltip(s,!1,l,this._renderMode);w(g)?(d=g.html,f=g.markers):(d=g,f=null);var m="item_"+r.name+"_"+s;this._showOrMove(h,function(){this._showTooltipContent(h,d,p,m,t.offsetX,t.offsetY,t.position,t.target,f)}),i({type:"showTip",dataIndexInside:s,dataIndex:u.getRawIndex(s),seriesIndex:o,from:this.uid})}},_showComponentItemTooltip:function(t,e,i){var n=e.tooltip;if("string"==typeof n){var o=n;n={content:o,formatter:o}}var a=new Po(n,this._tooltipModel,this._ecModel),r=a.get("content"),s=Math.random();this._showOrMove(a,function(){this._showTooltipContent(a,r,a.get("formatterParams")||{},s,t.offsetX,t.offsetY,t.position,e)}),i({type:"showTip",from:this.uid})},_showTooltipContent:function(t,e,i,n,o,a,r,s,l){if(this._ticket="",t.get("showContent")&&t.get("show")){var u=this._tooltipContent,h=t.get("formatter");r=r||t.get("position");var c=e;if(h&&"string"==typeof h)c=ia(h,i,!0);else if("function"==typeof h){var d=nN(function(e,n){e===this._ticket&&(u.setContent(n,l,t),this._updatePosition(t,r,o,a,u,i,s))},this);this._ticket=n,c=h(i,n,d)}u.setContent(c,l,t),u.show(t),this._updatePosition(t,r,o,a,u,i,s)}},_updatePosition:function(t,e,i,n,o,a,r){var s=this._api.getWidth(),l=this._api.getHeight();e=e||t.get("position");var u=o.getSize(),h=t.get("align"),c=t.get("verticalAlign"),d=r&&r.getBoundingRect().clone();if(r&&d.applyTransform(r.transform),"function"==typeof e&&(e=e([i,n],a,o.el,d,{viewSize:[s,l],contentSize:u.slice()})),y(e))i=aN(e[0],s),n=aN(e[1],l);else if(w(e)){e.width=u[0],e.height=u[1];var f=ha(e,{width:s,height:l});i=f.x,n=f.y,h=null,c=null}else"string"==typeof e&&r?(i=(p=Ev(e,d,u))[0],n=p[1]):(i=(p=Nv(i,n,o,s,l,h?null:20,c?null:20))[0],n=p[1]);if(h&&(i-=Rv(h)?u[0]/2:"right"===h?u[0]:0),c&&(n-=Rv(c)?u[1]/2:"bottom"===c?u[1]:0),t.get("confine")){var p=Ov(i,n,o,s,l);i=p[0],n=p[1]}o.moveTo(i,n)},_updateContentNotChangedOnAxis:function(t){var e=this._lastDataByCoordSys,i=!!e&&e.length===t.length;return i&&oN(e,function(e,n){var o=e.dataByAxis||{},a=(t[n]||{}).dataByAxis||[];(i&=o.length===a.length)&&oN(o,function(t,e){var n=a[e]||{},o=t.seriesDataIndices||[],r=n.seriesDataIndices||[];(i&=t.value===n.value&&t.axisType===n.axisType&&t.axisId===n.axisId&&o.length===r.length)&&oN(o,function(t,e){var n=r[e];i&=t.seriesIndex===n.seriesIndex&&t.dataIndex===n.dataIndex})})}),this._lastDataByCoordSys=t,!!i},_hide:function(t){this._lastDataByCoordSys=null,t({type:"hideTip",from:this.uid})},dispose:function(t,e){U_.node||(this._tooltipContent.hide(),gm("itemTooltip",e))}}),Os({type:"showTip",event:"showTip",update:"tooltip:manuallyShowTip"},function(){}),Os({type:"hideTip",event:"hideTip",update:"tooltip:manuallyHideTip"},function(){}),Gv.prototype={constructor:Gv,pointToData:function(t,e){return this.polar.pointToData(t,e)["radius"===this.dim?0:1]},dataToRadius:iD.prototype.dataToCoord,radiusToData:iD.prototype.coordToData},u(Gv,iD);var sN=Bi();Fv.prototype={constructor:Fv,pointToData:function(t,e){return this.polar.pointToData(t,e)["radius"===this.dim?0:1]},dataToAngle:iD.prototype.dataToCoord,angleToData:iD.prototype.coordToData,calculateCategoryInterval:function(){var t=this,e=t.getLabelModel(),i=t.scale,n=i.getExtent(),o=i.count();if(n[1]-n[0]<1)return 0;var a=n[0],r=t.dataToCoord(a+1)-t.dataToCoord(a),s=Math.abs(r),l=ke(a,e.getFont(),"center","top"),u=Math.max(l.height,7)/s;isNaN(u)&&(u=1/0);var h=Math.max(0,Math.floor(u)),c=sN(t.model),d=c.lastAutoInterval,f=c.lastTickCount;return null!=d&&null!=f&&Math.abs(d-h)<=1&&Math.abs(f-o)<=1&&d>h?h=d:(c.lastTickCount=o,c.lastAutoInterval=h),h}},u(Fv,iD);var lN=function(t){this.name=t||"",this.cx=0,this.cy=0,this._radiusAxis=new Gv,this._angleAxis=new Fv,this._radiusAxis.polar=this._angleAxis.polar=this};lN.prototype={type:"polar",axisPointerEnabled:!0,constructor:lN,dimensions:["radius","angle"],model:null,containPoint:function(t){var e=this.pointToCoord(t);return this._radiusAxis.contain(e[0])&&this._angleAxis.contain(e[1])},containData:function(t){return this._radiusAxis.containData(t[0])&&this._angleAxis.containData(t[1])},getAxis:function(t){return this["_"+t+"Axis"]},getAxes:function(){return[this._radiusAxis,this._angleAxis]},getAxesByScale:function(t){var e=[],i=this._angleAxis,n=this._radiusAxis;return i.scale.type===t&&e.push(i),n.scale.type===t&&e.push(n),e},getAngleAxis:function(){return this._angleAxis},getRadiusAxis:function(){return this._radiusAxis},getOtherAxis:function(t){var e=this._angleAxis;return t===e?this._radiusAxis:e},getBaseAxis:function(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAngleAxis()},getTooltipAxes:function(t){var e=null!=t&&"auto"!==t?this.getAxis(t):this.getBaseAxis();return{baseAxes:[e],otherAxes:[this.getOtherAxis(e)]}},dataToPoint:function(t,e){return this.coordToPoint([this._radiusAxis.dataToRadius(t[0],e),this._angleAxis.dataToAngle(t[1],e)])},pointToData:function(t,e){var i=this.pointToCoord(t);return[this._radiusAxis.radiusToData(i[0],e),this._angleAxis.angleToData(i[1],e)]},pointToCoord:function(t){var e=t[0]-this.cx,i=t[1]-this.cy,n=this.getAngleAxis(),o=n.getExtent(),a=Math.min(o[0],o[1]),r=Math.max(o[0],o[1]);n.inverse?a=r-360:r=a+360;var s=Math.sqrt(e*e+i*i);e/=s,i/=s;for(var l=Math.atan2(-i,e)/Math.PI*180,u=l<a?1:-1;l<a||l>r;)l+=360*u;return[s,l]},coordToPoint:function(t){var e=t[0],i=t[1]/180*Math.PI;return[Math.cos(i)*e+this.cx,-Math.sin(i)*e+this.cy]}};var uN=sI.extend({type:"polarAxis",axis:null,getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"polar",index:this.option.polarIndex,id:this.option.polarId})[0]}});n(uN.prototype,WA);var hN={angle:{startAngle:90,clockwise:!0,splitNumber:12,axisLabel:{rotate:!1}},radius:{splitNumber:5}};PD("angle",uN,Wv,hN.angle),PD("radius",uN,Wv,hN.radius),Gs({type:"polar",dependencies:["polarAxis","angleAxis"],coordinateSystem:null,findAxisModel:function(t){var e;return this.ecModel.eachComponent(t,function(t){t.getCoordSysModel()===this&&(e=t)},this),e},defaultOption:{zlevel:0,z:0,center:["50%","50%"],radius:"80%"}});var cN={dimensions:lN.prototype.dimensions,create:function(t,e){var i=[];return t.eachComponent("polar",function(t,n){var o=new lN(n);o.update=Zv;var a=o.getRadiusAxis(),r=o.getAngleAxis(),s=t.findAxisModel("radiusAxis"),l=t.findAxisModel("angleAxis");Uv(a,s),Uv(r,l),Hv(o,t,e),i.push(o),t.coordinateSystem=o,o.model=t}),t.eachSeries(function(e){if("polar"===e.get("coordinateSystem")){var i=t.queryComponents({mainType:"polar",index:e.get("polarIndex"),id:e.get("polarId")})[0];e.coordinateSystem=i.coordinateSystem}}),i}};Ga.register("polar",cN);var dN=["axisLine","axisLabel","axisTick","splitLine","splitArea"];HD.extend({type:"angleAxis",axisPointerClass:"PolarAxisPointer",render:function(t,e){if(this.group.removeAll(),t.get("show")){var n=t.axis,o=n.polar,a=o.getRadiusAxis().getExtent(),r=n.getTicksCoords(),s=f(n.getViewLabels(),function(t){return(t=i(t)).coord=n.dataToCoord(t.tickValue),t});Yv(s),Yv(r),d(dN,function(e){!t.get(e+".show")||n.scale.isBlank()&&"axisLine"!==e||this["_"+e](t,o,r,a,s)},this)}},_axisLine:function(t,e,i,n){var o=t.getModel("axisLine.lineStyle"),a=new rM({shape:{cx:e.cx,cy:e.cy,r:n[jv(e)]},style:o.getLineStyle(),z2:1,silent:!0});a.style.fill=null,this.group.add(a)},_axisTick:function(t,e,i,n){var o=t.getModel("axisTick"),a=(o.get("inside")?-1:1)*o.get("length"),s=n[jv(e)],l=f(i,function(t){return new xM({shape:Xv(e,[s,s+a],t.coord)})});this.group.add(NM(l,{style:r(o.getModel("lineStyle").getLineStyle(),{stroke:t.get("axisLine.lineStyle.color")})}))},_axisLabel:function(t,e,i,n,o){var a=t.getCategories(!0),r=t.getModel("axisLabel"),s=r.get("margin");d(o,function(i,o){var l=r,u=i.tickValue,h=n[jv(e)],c=e.coordToPoint([h+s,i.coord]),d=e.cx,f=e.cy,p=Math.abs(c[0]-d)/h<.3?"center":c[0]>d?"left":"right",g=Math.abs(c[1]-f)/h<.3?"middle":c[1]>f?"top":"bottom";a&&a[u]&&a[u].textStyle&&(l=new Po(a[u].textStyle,r,r.ecModel));var m=new aM({silent:!0});this.group.add(m),go(m.style,l,{x:c[0],y:c[1],textFill:l.getTextColor()||t.get("axisLine.lineStyle.color"),text:i.formattedLabel,textAlign:p,textVerticalAlign:g})},this)},_splitLine:function(t,e,i,n){var o=t.getModel("splitLine").getModel("lineStyle"),a=o.get("color"),s=0;a=a instanceof Array?a:[a];for(var l=[],u=0;u<i.length;u++){var h=s++%a.length;l[h]=l[h]||[],l[h].push(new xM({shape:Xv(e,n,i[u].coord)}))}for(u=0;u<l.length;u++)this.group.add(NM(l[u],{style:r({stroke:a[u%a.length]},o.getLineStyle()),silent:!0,z:t.get("z")}))},_splitArea:function(t,e,i,n){if(i.length){var o=t.getModel("splitArea").getModel("areaStyle"),a=o.get("color"),s=0;a=a instanceof Array?a:[a];for(var l=[],u=Math.PI/180,h=-i[0].coord*u,c=Math.min(n[0],n[1]),d=Math.max(n[0],n[1]),f=t.get("clockwise"),p=1;p<i.length;p++){var g=s++%a.length;l[g]=l[g]||[],l[g].push(new uM({shape:{cx:e.cx,cy:e.cy,r0:c,r:d,startAngle:h,endAngle:-i[p].coord*u,clockwise:f},silent:!0})),h=-i[p].coord*u}for(p=0;p<l.length;p++)this.group.add(NM(l[p],{style:r({fill:a[p%a.length]},o.getAreaStyle()),silent:!0}))}}});var fN=["axisLine","axisTickLabel","axisName"],pN=["splitLine","splitArea"];HD.extend({type:"radiusAxis",axisPointerClass:"PolarAxisPointer",render:function(t,e){if(this.group.removeAll(),t.get("show")){var i=t.axis,n=i.polar,o=n.getAngleAxis(),a=i.getTicksCoords(),r=o.getExtent()[0],s=i.getExtent(),l=qv(n,t,r),u=new BD(t,l);d(fN,u.add,u),this.group.add(u.getGroup()),d(pN,function(e){t.get(e+".show")&&!i.scale.isBlank()&&this["_"+e](t,n,r,s,a)},this)}},_splitLine:function(t,e,i,n,o){var a=t.getModel("splitLine").getModel("lineStyle"),s=a.get("color"),l=0;s=s instanceof Array?s:[s];for(var u=[],h=0;h<o.length;h++){var c=l++%s.length;u[c]=u[c]||[],u[c].push(new rM({shape:{cx:e.cx,cy:e.cy,r:o[h].coord},silent:!0}))}for(h=0;h<u.length;h++)this.group.add(NM(u[h],{style:r({stroke:s[h%s.length],fill:null},a.getLineStyle()),silent:!0}))},_splitArea:function(t,e,i,n,o){if(o.length){var a=t.getModel("splitArea").getModel("areaStyle"),s=a.get("color"),l=0;s=s instanceof Array?s:[s];for(var u=[],h=o[0].coord,c=1;c<o.length;c++){var d=l++%s.length;u[d]=u[d]||[],u[d].push(new uM({shape:{cx:e.cx,cy:e.cy,r0:h,r:o[c].coord,startAngle:0,endAngle:2*Math.PI},silent:!0})),h=o[c].coord}for(c=0;c<u.length;c++)this.group.add(NM(u[c],{style:r({fill:s[c%s.length]},a.getAreaStyle()),silent:!0}))}}});var gN=mm.extend({makeElOption:function(t,e,i,n,o){var a=i.axis;"angle"===a.dim&&(this.animationThreshold=Math.PI/18);var r,s=a.polar,l=s.getOtherAxis(a).getExtent();r=a["dataTo"+sa(a.dim)](e);var u=n.get("type");if(u&&"none"!==u){var h=bm(n),c=mN[u](a,s,r,l,h);c.style=h,t.graphicKey=c.type,t.pointer=c}Sm(t,i,n,o,Kv(e,i,0,s,n.get("label.margin")))}}),mN={line:function(t,e,i,n,o){return"angle"===t.dim?{type:"Line",shape:Dm(e.coordToPoint([n[0],i]),e.coordToPoint([n[1],i]))}:{type:"Circle",shape:{cx:e.cx,cy:e.cy,r:i}}},shadow:function(t,e,i,n,o){var a=Math.max(1,t.getBandWidth()),r=Math.PI/180;return"angle"===t.dim?{type:"Sector",shape:Lm(e.cx,e.cy,n[0],n[1],(-i-a/2)*r,(a/2-i)*r)}:{type:"Sector",shape:Lm(e.cx,e.cy,i-a/2,i+a/2,0,2*Math.PI)}}};HD.registerAxisPointerClass("PolarAxisPointer",gN),Rs(v(function(t,e,i){i.getWidth(),i.getHeight();var n={},o=Vv(g(e.getSeriesByType(t),function(t){return!e.isSeriesFiltered(t)&&t.coordinateSystem&&"polar"===t.coordinateSystem.type}));e.eachSeriesByType(t,function(t){if("polar"===t.coordinateSystem.type){var e=t.getData(),i=t.coordinateSystem,a=i.getBaseAxis(),r=zv(t),s=o[Bv(a)][r],l=s.offset,u=s.width,h=i.getOtherAxis(a),c=t.coordinateSystem.cx,d=t.coordinateSystem.cy,f=t.get("barMinHeight")||0,p=t.get("barMinAngle")||0;n[r]=n[r]||[];for(var g=e.mapDimension(h.dim),m=e.mapDimension(a.dim),v=fl(e,g),y=h.getExtent()[0],x=0,_=e.count();x<_;x++){var w=e.get(g,x),b=e.get(m,x);if(!isNaN(w)){var S=w>=0?"p":"n",M=y;v&&(n[r][b]||(n[r][b]={p:y,n:y}),M=n[r][b][S]);var I,T,A,D;if("radius"===h.dim){var C=h.dataToRadius(w)-y,L=a.dataToAngle(b);Math.abs(C)<f&&(C=(C<0?-1:1)*f),I=M,T=M+C,D=(A=L-l)-u,v&&(n[r][b][S]=T)}else{var k=h.dataToAngle(w,!0)-y,P=a.dataToRadius(b);Math.abs(k)<p&&(k=(k<0?-1:1)*p),T=(I=P+l)+u,A=M,D=M+k,v&&(n[r][b][S]=D)}e.setItemLayout(x,{cx:c,cy:d,r0:I,r:T,startAngle:-A*Math.PI/180,endAngle:-D*Math.PI/180})}}}},this)},"bar")),Fs({type:"polar"}),h(sI.extend({type:"geo",coordinateSystem:null,layoutMode:"box",init:function(t){sI.prototype.init.apply(this,arguments),Ci(t,"label",["show"])},optionUpdated:function(){var t=this.option,e=this;t.regions=zC.getFilledRegions(t.regions,t.map,t.nameMap),this._optionModelMap=p(t.regions||[],function(t,i){return i.name&&t.set(i.name,new Po(i,e)),t},R()),this.updateSelectedMap(t.regions)},defaultOption:{zlevel:0,z:0,show:!0,left:"center",top:"center",aspectScale:null,silent:!1,map:"",boundingCoords:null,center:null,zoom:1,scaleLimit:null,label:{show:!1,color:"#000"},itemStyle:{borderWidth:.5,borderColor:"#444",color:"#eee"},emphasis:{label:{show:!0,color:"rgb(100,0,0)"},itemStyle:{color:"rgba(255,215,0,0.8)"}},regions:[]},getRegionModel:function(t){return this._optionModelMap.get(t)||new Po(null,this,this.ecModel)},getFormattedLabel:function(t,e){var i=this.getRegionModel(t).get("label."+e+".formatter"),n={name:t};return"function"==typeof i?(n.status=e,i(n)):"string"==typeof i?i.replace("{a}",null!=t?t:""):void 0},setZoom:function(t){this.option.zoom=t},setCenter:function(t){this.option.center=t}}),iC),Fs({type:"geo",init:function(t,e){var i=new yc(e,!0);this._mapDraw=i,this.group.add(i.group)},render:function(t,e,i,n){if(!n||"geoToggleSelect"!==n.type||n.from!==this.uid){var o=this._mapDraw;t.get("show")?o.draw(t,e,i,this,n):this._mapDraw.group.removeAll(),this.group.silent=t.get("silent")}},dispose:function(){this._mapDraw&&this._mapDraw.remove()}}),$v("toggleSelected",{type:"geoToggleSelect",event:"geoselectchanged"}),$v("select",{type:"geoSelect",event:"geoselected"}),$v("unSelect",{type:"geoUnSelect",event:"geounselected"});var vN=["rect","polygon","keep","clear"],yN=d,xN={lineX:oy(0),lineY:oy(1),rect:{point:function(t,e,i){return t&&i.boundingRect.contain(t[0],t[1])},rect:function(t,e,i){return t&&i.boundingRect.intersect(t)}},polygon:{point:function(t,e,i){return t&&i.boundingRect.contain(t[0],t[1])&&Ql(i.range,t[0],t[1])},rect:function(t,e,i){var n=i.range;if(!t||n.length<=1)return!1;var o=t.x,a=t.y,r=t.width,s=t.height,l=n[0];return!!(Ql(n,o,a)||Ql(n,o+r,a)||Ql(n,o,a+s)||Ql(n,o+r,a+s)||de.create(t).contain(l[0],l[1])||ry(o,a,o+r,a,n)||ry(o,a,o,a+s,n)||ry(o+r,a,o+r,a+s,n)||ry(o,a+s,o+r,a+s,n))||void 0}}},_N=d,wN=l,bN=v,SN=["dataToPoint","pointToData"],MN=["grid","xAxis","yAxis","geo","graph","polar","radiusAxis","angleAxis","bmap"],IN=hy.prototype;IN.setOutputRanges=function(t,e){this.matchOutputRanges(t,e,function(t,e,i){if((t.coordRanges||(t.coordRanges=[])).push(e),!t.coordRange){t.coordRange=e;var n=CN[t.brushType](0,i,e);t.__rangeOffset={offset:LN[t.brushType](n.values,t.range,[1,1]),xyMinMax:n.xyMinMax}}})},IN.matchOutputRanges=function(t,e,i){_N(t,function(t){var n=this.findTargetInfo(t,e);n&&!0!==n&&d(n.coordSyses,function(n){var o=CN[t.brushType](1,n,t.range);i(t,o.values,n,e)})},this)},IN.setInputRanges=function(t,e){_N(t,function(t){var i=this.findTargetInfo(t,e);if(t.range=t.range||[],i&&!0!==i){t.panelId=i.panelId;var n=CN[t.brushType](0,i.coordSys,t.coordRange),o=t.__rangeOffset;t.range=o?LN[t.brushType](n.values,o.offset,gy(n.xyMinMax,o.xyMinMax)):n.values}},this)},IN.makePanelOpts=function(t,e){return f(this._targetInfoList,function(i){var n=i.getPanelRect();return{panelId:i.panelId,defaultBrushType:e&&e(i),clipPath:vp(n),isTargetByCursor:xp(n,t,i.coordSysModel),getLinearBrushOtherExtent:yp(n)}})},IN.controlSeries=function(t,e,i){var n=this.findTargetInfo(t,i);return!0===n||n&&wN(n.coordSyses,e.coordinateSystem)>=0},IN.findTargetInfo=function(t,e){for(var i=this._targetInfoList,n=dy(e,t),o=0;o<i.length;o++){var a=i[o],r=t.panelId;if(r){if(a.panelId===r)return a}else for(o=0;o<AN.length;o++)if(AN[o](n,a))return a}return!0};var TN={grid:function(t,e){var i=t.xAxisModels,n=t.yAxisModels,o=t.gridModels,a=R(),r={},s={};(i||n||o)&&(_N(i,function(t){var e=t.axis.grid.model;a.set(e.id,e),r[e.id]=!0}),_N(n,function(t){var e=t.axis.grid.model;a.set(e.id,e),s[e.id]=!0}),_N(o,function(t){a.set(t.id,t),r[t.id]=!0,s[t.id]=!0}),a.each(function(t){var o=t.coordinateSystem,a=[];_N(o.getCartesians(),function(t,e){(wN(i,t.getAxis("x").model)>=0||wN(n,t.getAxis("y").model)>=0)&&a.push(t)}),e.push({panelId:"grid--"+t.id,gridModel:t,coordSysModel:t,coordSys:a[0],coordSyses:a,getPanelRect:DN.grid,xAxisDeclared:r[t.id],yAxisDeclared:s[t.id]})}))},geo:function(t,e){_N(t.geoModels,function(t){var i=t.coordinateSystem;e.push({panelId:"geo--"+t.id,geoModel:t,coordSysModel:t,coordSys:i,coordSyses:[i],getPanelRect:DN.geo})})}},AN=[function(t,e){var i=t.xAxisModel,n=t.yAxisModel,o=t.gridModel;return!o&&i&&(o=i.axis.grid.model),!o&&n&&(o=n.axis.grid.model),o&&o===e.gridModel},function(t,e){var i=t.geoModel;return i&&i===e.geoModel}],DN={grid:function(){return this.coordSys.grid.getRect().clone()},geo:function(){var t=this.coordSys,e=t.getBoundingRect().clone();return e.applyTransform(To(t)),e}},CN={lineX:bN(fy,0),lineY:bN(fy,1),rect:function(t,e,i){var n=e[SN[t]]([i[0][0],i[1][0]]),o=e[SN[t]]([i[0][1],i[1][1]]),a=[cy([n[0],o[0]]),cy([n[1],o[1]])];return{values:a,xyMinMax:a}},polygon:function(t,e,i){var n=[[1/0,-1/0],[1/0,-1/0]];return{values:f(i,function(i){var o=e[SN[t]](i);return n[0][0]=Math.min(n[0][0],o[0]),n[1][0]=Math.min(n[1][0],o[1]),n[0][1]=Math.max(n[0][1],o[0]),n[1][1]=Math.max(n[1][1],o[1]),o}),xyMinMax:n}}},LN={lineX:bN(py,0),lineY:bN(py,1),rect:function(t,e,i){return[[t[0][0]-i[0]*e[0][0],t[0][1]-i[0]*e[0][1]],[t[1][0]-i[1]*e[1][0],t[1][1]-i[1]*e[1][1]]]},polygon:function(t,e,i){return f(t,function(t,n){return[t[0]-i[0]*e[n][0],t[1]-i[1]*e[n][1]]})}},kN=["inBrush","outOfBrush"],PN="__ecBrushSelect",NN="__ecInBrushSelectEvent",ON=zT.VISUAL.BRUSH;Rs(ON,function(t,e,i){t.eachComponent({mainType:"brush"},function(e){i&&"takeGlobalCursor"===i.type&&e.setBrushOption("brush"===i.key?i.brushOption:{brushType:!1}),(e.brushTargetManager=new hy(e.option,t)).setInputRanges(e.areas,t)})}),zs(ON,function(t,e,n){var o,a,s=[];t.eachComponent({mainType:"brush"},function(e,n){function l(t){return"all"===m||v[t]}function u(t){return!!t.length}function h(t,e){var i=t.coordinateSystem;w|=i.hasAxisBrushed(),l(e)&&i.eachActiveState(t.getData(),function(t,e){"active"===t&&(x[e]=1)})}function c(i,n,o){var a=_y(i);if(a&&!wy(e,n)&&(d(b,function(n){a[n.brushType]&&e.brushTargetManager.controlSeries(n,i,t)&&o.push(n),w|=u(o)}),l(n)&&u(o))){var r=i.getData();r.each(function(t){xy(a,o,r,t)&&(x[t]=1)})}}var p={brushId:e.id,brushIndex:n,brushName:e.name,areas:i(e.areas),selected:[]};s.push(p);var g=e.option,m=g.brushLink,v=[],x=[],_=[],w=0;n||(o=g.throttleType,a=g.throttleDelay);var b=f(e.areas,function(t){return by(r({boundingRect:EN[t.brushType](t)},t))}),S=ty(e.option,kN,function(t){t.mappingMethod="fixed"});y(m)&&d(m,function(t){v[t]=1}),t.eachSeries(function(t,e){var i=_[e]=[];"parallel"===t.subType?h(t,e):c(t,e,i)}),t.eachSeries(function(t,e){var i={seriesId:t.id,seriesIndex:e,seriesName:t.name,dataIndex:[]};p.selected.push(i);var n=_y(t),o=_[e],a=t.getData(),r=l(e)?function(t){return x[t]?(i.dataIndex.push(a.getRawIndex(t)),"inBrush"):"outOfBrush"}:function(t){return xy(n,o,a,t)?(i.dataIndex.push(a.getRawIndex(t)),"inBrush"):"outOfBrush"};(l(e)?w:u(o))&&iy(kN,S,a,r)})}),vy(e,o,a,s,n)});var EN={lineX:B,lineY:B,rect:function(t){return Sy(t.range)},polygon:function(t){for(var e,i=t.range,n=0,o=i.length;n<o;n++){e=e||[[1/0,-1/0],[1/0,-1/0]];var a=i[n];a[0]<e[0][0]&&(e[0][0]=a[0]),a[0]>e[0][1]&&(e[0][1]=a[0]),a[1]<e[1][0]&&(e[1][0]=a[1]),a[1]>e[1][1]&&(e[1][1]=a[1])}return e&&Sy(e)}},RN=["#ddd"];Gs({type:"brush",dependencies:["geo","grid","xAxis","yAxis","parallel","series"],defaultOption:{toolbox:null,brushLink:null,seriesIndex:"all",geoIndex:null,xAxisIndex:null,yAxisIndex:null,brushType:"rect",brushMode:"single",transformable:!0,brushStyle:{borderWidth:1,color:"rgba(120,140,180,0.3)",borderColor:"rgba(120,140,180,0.8)"},throttleType:"fixRate",throttleDelay:0,removeOnClick:!0,z:1e4},areas:[],brushType:null,brushOption:{},coordInfoList:[],optionUpdated:function(t,e){var i=this.option;!e&&ey(i,t,["inBrush","outOfBrush"]);var n=i.inBrush=i.inBrush||{};i.outOfBrush=i.outOfBrush||{color:RN},n.hasOwnProperty("liftZ")||(n.liftZ=5)},setAreas:function(t){t&&(this.areas=f(t,function(t){return My(this.option,t)},this))},setBrushOption:function(t){this.brushOption=My(this.option,t),this.brushType=this.brushOption.brushType}});Fs({type:"brush",init:function(t,e){this.ecModel=t,this.api=e,this.model,(this._brushController=new Rf(e.getZr())).on("brush",m(this._onBrush,this)).mount()},render:function(t){return this.model=t,Iy.apply(this,arguments)},updateTransform:Iy,updateView:Iy,dispose:function(){this._brushController.dispose()},_onBrush:function(t,e){var n=this.model.id;this.model.brushTargetManager.setOutputRanges(t,this.ecModel),(!e.isEnd||e.removeOnClick)&&this.api.dispatchAction({type:"brush",brushId:n,areas:i(t),$from:n})}}),Os({type:"brush",event:"brush"},function(t,e){e.eachComponent({mainType:"brush",query:t},function(e){e.setAreas(t.areas)})}),Os({type:"brushSelect",event:"brushSelected",update:"none"},function(){});var zN={},BN=aT.toolbox.brush;Dy.defaultOption={show:!0,type:["rect","polygon","lineX","lineY","keep","clear"],icon:{rect:"M7.3,34.7 M0.4,10V-0.2h9.8 M89.6,10V-0.2h-9.8 M0.4,60v10.2h9.8 M89.6,60v10.2h-9.8 M12.3,22.4V10.5h13.1 M33.6,10.5h7.8 M49.1,10.5h7.8 M77.5,22.4V10.5h-13 M12.3,31.1v8.2 M77.7,31.1v8.2 M12.3,47.6v11.9h13.1 M33.6,59.5h7.6 M49.1,59.5 h7.7 M77.5,47.6v11.9h-13",polygon:"M55.2,34.9c1.7,0,3.1,1.4,3.1,3.1s-1.4,3.1-3.1,3.1 s-3.1-1.4-3.1-3.1S53.5,34.9,55.2,34.9z M50.4,51c1.7,0,3.1,1.4,3.1,3.1c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1 C47.3,52.4,48.7,51,50.4,51z M55.6,37.1l1.5-7.8 M60.1,13.5l1.6-8.7l-7.8,4 M59,19l-1,5.3 M24,16.1l6.4,4.9l6.4-3.3 M48.5,11.6 l-5.9,3.1 M19.1,12.8L9.7,5.1l1.1,7.7 M13.4,29.8l1,7.3l6.6,1.6 M11.6,18.4l1,6.1 M32.8,41.9 M26.6,40.4 M27.3,40.2l6.1,1.6 M49.9,52.1l-5.6-7.6l-4.9-1.2",lineX:"M15.2,30 M19.7,15.6V1.9H29 M34.8,1.9H40.4 M55.3,15.6V1.9H45.9 M19.7,44.4V58.1H29 M34.8,58.1H40.4 M55.3,44.4 V58.1H45.9 M12.5,20.3l-9.4,9.6l9.6,9.8 M3.1,29.9h16.5 M62.5,20.3l9.4,9.6L62.3,39.7 M71.9,29.9H55.4",lineY:"M38.8,7.7 M52.7,12h13.2v9 M65.9,26.6V32 M52.7,46.3h13.2v-9 M24.9,12H11.8v9 M11.8,26.6V32 M24.9,46.3H11.8v-9 M48.2,5.1l-9.3-9l-9.4,9.2 M38.9-3.9V12 M48.2,53.3l-9.3,9l-9.4-9.2 M38.9,62.3V46.4",keep:"M4,10.5V1h10.3 M20.7,1h6.1 M33,1h6.1 M55.4,10.5V1H45.2 M4,17.3v6.6 M55.6,17.3v6.6 M4,30.5V40h10.3 M20.7,40 h6.1 M33,40h6.1 M55.4,30.5V40H45.2 M21,18.9h62.9v48.6H21V18.9z",clear:"M22,14.7l30.9,31 M52.9,14.7L22,45.7 M4.7,16.8V4.2h13.1 M26,4.2h7.8 M41.6,4.2h7.8 M70.3,16.8V4.2H57.2 M4.7,25.9v8.6 M70.3,25.9v8.6 M4.7,43.2v12.6h13.1 M26,55.8h7.8 M41.6,55.8h7.8 M70.3,43.2v12.6H57.2"},title:i(BN.title)};var VN=Dy.prototype;VN.render=VN.updateView=function(t,e,i){var n,o,a;e.eachComponent({mainType:"brush"},function(t){n=t.brushType,o=t.brushOption.brushMode||"single",a|=t.areas.length}),this._brushType=n,this._brushMode=o,d(t.get("type",!0),function(e){t.setIconStatus(e,("keep"===e?"multiple"===o:"clear"===e?a:e===n)?"emphasis":"normal")})},VN.getIcons=function(){var t=this.model,e=t.get("icon",!0),i={};return d(t.get("type",!0),function(t){e[t]&&(i[t]=e[t])}),i},VN.onclick=function(t,e,i){var n=this._brushType,o=this._brushMode;"clear"===i?(e.dispatchAction({type:"axisAreaSelect",intervals:[]}),e.dispatchAction({type:"brush",command:"clear",areas:[]})):e.dispatchAction({type:"takeGlobalCursor",key:"brush",brushOption:{brushType:"keep"===i?n:n!==i&&i,brushMode:"keep"===i?"multiple"===o?"single":"multiple":o}})},Ty("brush",Dy),Ps(function(t,e){var i=t&&t.brush;if(y(i)||(i=i?[i]:[]),i.length){var n=[];d(i,function(t){var e=t.hasOwnProperty("toolbox")?t.toolbox:[];e instanceof Array&&(n=n.concat(e))});var o=t&&t.toolbox;y(o)&&(o=o[0]),o||(o={feature:{}},t.toolbox=[o]);var a=o.feature||(o.feature={}),r=a.brush||(a.brush={}),s=r.type||(r.type=[]);s.push.apply(s,n),Jv(s),e&&!s.length&&s.push.apply(s,vN)}});Cy.prototype={constructor:Cy,type:"calendar",dimensions:["time","value"],getDimensionsInfo:function(){return[{name:"time",type:"time"},"value"]},getRangeInfo:function(){return this._rangeInfo},getModel:function(){return this._model},getRect:function(){return this._rect},getCellWidth:function(){return this._sw},getCellHeight:function(){return this._sh},getOrient:function(){return this._orient},getFirstDayOfWeek:function(){return this._firstDayOfWeek},getDateInfo:function(t){var e=(t=jo(t)).getFullYear(),i=t.getMonth()+1;i=i<10?"0"+i:i;var n=t.getDate();n=n<10?"0"+n:n;var o=t.getDay();return o=Math.abs((o+7-this.getFirstDayOfWeek())%7),{y:e,m:i,d:n,day:o,time:t.getTime(),formatedDate:e+"-"+i+"-"+n,date:t}},getNextNDay:function(t,e){return 0===(e=e||0)?this.getDateInfo(t):((t=new Date(this.getDateInfo(t).time)).setDate(t.getDate()+e),this.getDateInfo(t))},update:function(t,e){function i(t,e){return null!=t[e]&&"auto"!==t[e]}this._firstDayOfWeek=+this._model.getModel("dayLabel").get("firstDay"),this._orient=this._model.get("orient"),this._lineWidth=this._model.getModel("itemStyle").getItemStyle().lineWidth||0,this._rangeInfo=this._getRangeInfo(this._initRangeOption());var n=this._rangeInfo.weeks||1,o=["width","height"],a=this._model.get("cellSize").slice(),r=this._model.getBoxLayoutParams(),s="horizontal"===this._orient?[n,7]:[7,n];d([0,1],function(t){i(a,t)&&(r[o[t]]=a[t]*s[t])});var l={width:e.getWidth(),height:e.getHeight()},u=this._rect=ha(r,l);d([0,1],function(t){i(a,t)||(a[t]=u[o[t]]/s[t])}),this._sw=a[0],this._sh=a[1]},dataToPoint:function(t,e){y(t)&&(t=t[0]),null==e&&(e=!0);var i=this.getDateInfo(t),n=this._rangeInfo,o=i.formatedDate;if(e&&!(i.time>=n.start.time&&i.time<n.end.time+864e5))return[NaN,NaN];var a=i.day,r=this._getRangeInfo([n.start.time,o]).nthWeek;return"vertical"===this._orient?[this._rect.x+a*this._sw+this._sw/2,this._rect.y+r*this._sh+this._sh/2]:[this._rect.x+r*this._sw+this._sw/2,this._rect.y+a*this._sh+this._sh/2]},pointToData:function(t){var e=this.pointToDate(t);return e&&e.time},dataToRect:function(t,e){var i=this.dataToPoint(t,e);return{contentShape:{x:i[0]-(this._sw-this._lineWidth)/2,y:i[1]-(this._sh-this._lineWidth)/2,width:this._sw-this._lineWidth,height:this._sh-this._lineWidth},center:i,tl:[i[0]-this._sw/2,i[1]-this._sh/2],tr:[i[0]+this._sw/2,i[1]-this._sh/2],br:[i[0]+this._sw/2,i[1]+this._sh/2],bl:[i[0]-this._sw/2,i[1]+this._sh/2]}},pointToDate:function(t){var e=Math.floor((t[0]-this._rect.x)/this._sw)+1,i=Math.floor((t[1]-this._rect.y)/this._sh)+1,n=this._rangeInfo.range;return"vertical"===this._orient?this._getDateByWeeksAndDay(i,e-1,n):this._getDateByWeeksAndDay(e,i-1,n)},convertToPixel:v(Ly,"dataToPoint"),convertFromPixel:v(Ly,"pointToData"),_initRangeOption:function(){var t=this._model.get("range"),e=t;if(y(e)&&1===e.length&&(e=e[0]),/^\d{4}$/.test(e)&&(t=[e+"-01-01",e+"-12-31"]),/^\d{4}[\/|-]\d{1,2}$/.test(e)){var i=this.getDateInfo(e),n=i.date;n.setMonth(n.getMonth()+1);var o=this.getNextNDay(n,-1);t=[i.formatedDate,o.formatedDate]}/^\d{4}[\/|-]\d{1,2}[\/|-]\d{1,2}$/.test(e)&&(t=[e,e]);var a=this._getRangeInfo(t);return a.start.time>a.end.time&&t.reverse(),t},_getRangeInfo:function(t){var e;(t=[this.getDateInfo(t[0]),this.getDateInfo(t[1])])[0].time>t[1].time&&(e=!0,t.reverse());var i=Math.floor(t[1].time/864e5)-Math.floor(t[0].time/864e5)+1,n=new Date(t[0].time),o=n.getDate(),a=t[1].date.getDate();if(n.setDate(o+i-1),n.getDate()!==a)for(var r=n.getTime()-t[1].time>0?1:-1;n.getDate()!==a&&(n.getTime()-t[1].time)*r>0;)i-=r,n.setDate(o+i-1);var s=Math.floor((i+t[0].day+6)/7),l=e?1-s:s-1;return e&&t.reverse(),{range:[t[0].formatedDate,t[1].formatedDate],start:t[0],end:t[1],allDay:i,weeks:s,nthWeek:l,fweek:t[0].day,lweek:t[1].day}},_getDateByWeeksAndDay:function(t,e,i){var n=this._getRangeInfo(i);if(t>n.weeks||0===t&&e<n.fweek||t===n.weeks&&e>n.lweek)return!1;var o=7*(t-1)-n.fweek+e,a=new Date(n.start.time);return a.setDate(n.start.d+o),this.getDateInfo(a)}},Cy.dimensions=Cy.prototype.dimensions,Cy.getDimensionsInfo=Cy.prototype.getDimensionsInfo,Cy.create=function(t,e){var i=[];return t.eachComponent("calendar",function(n){var o=new Cy(n,t,e);i.push(o),n.coordinateSystem=o}),t.eachSeries(function(t){"calendar"===t.get("coordinateSystem")&&(t.coordinateSystem=i[t.get("calendarIndex")||0])}),i},Ga.register("calendar",Cy);var GN=sI.extend({type:"calendar",coordinateSystem:null,defaultOption:{zlevel:0,z:2,left:80,top:60,cellSize:20,orient:"horizontal",splitLine:{show:!0,lineStyle:{color:"#000",width:1,type:"solid"}},itemStyle:{color:"#fff",borderWidth:1,borderColor:"#ccc"},dayLabel:{show:!0,firstDay:0,position:"start",margin:"50%",nameMap:"en",color:"#000"},monthLabel:{show:!0,position:"start",margin:5,align:"center",nameMap:"en",formatter:null,color:"#000"},yearLabel:{show:!0,position:null,margin:30,formatter:null,color:"#ccc",fontFamily:"sans-serif",fontWeight:"bolder",fontSize:20}},init:function(t,e,i,n){var o=pa(t);GN.superApply(this,"init",arguments),ky(t,o)},mergeOption:function(t,e){GN.superApply(this,"mergeOption",arguments),ky(this.option,t)}}),FN={EN:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],CN:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},WN={EN:["S","M","T","W","T","F","S"],CN:["日","一","二","三","四","五","六"]};Fs({type:"calendar",_tlpoints:null,_blpoints:null,_firstDayOfMonth:null,_firstDayPoints:null,render:function(t,e,i){var n=this.group;n.removeAll();var o=t.coordinateSystem,a=o.getRangeInfo(),r=o.getOrient();this._renderDayRect(t,a,n),this._renderLines(t,a,r,n),this._renderYearText(t,a,r,n),this._renderMonthText(t,r,n),this._renderWeekText(t,a,r,n)},_renderDayRect:function(t,e,i){for(var n=t.coordinateSystem,o=t.getModel("itemStyle").getItemStyle(),a=n.getCellWidth(),r=n.getCellHeight(),s=e.start.time;s<=e.end.time;s=n.getNextNDay(s,1).time){var l=n.dataToRect([s],!1).tl,u=new vM({shape:{x:l[0],y:l[1],width:a,height:r},cursor:"default",style:o});i.add(u)}},_renderLines:function(t,e,i,n){function o(e){a._firstDayOfMonth.push(r.getDateInfo(e)),a._firstDayPoints.push(r.dataToRect([e],!1).tl);var o=a._getLinePointsOfOneWeek(t,e,i);a._tlpoints.push(o[0]),a._blpoints.push(o[o.length-1]),l&&a._drawSplitline(o,s,n)}var a=this,r=t.coordinateSystem,s=t.getModel("splitLine.lineStyle").getLineStyle(),l=t.get("splitLine.show"),u=s.lineWidth;this._tlpoints=[],this._blpoints=[],this._firstDayOfMonth=[],this._firstDayPoints=[];for(var h=e.start,c=0;h.time<=e.end.time;c++){o(h.formatedDate),0===c&&(h=r.getDateInfo(e.start.y+"-"+e.start.m));var d=h.date;d.setMonth(d.getMonth()+1),h=r.getDateInfo(d)}o(r.getNextNDay(e.end.time,1).formatedDate),l&&this._drawSplitline(a._getEdgesPoints(a._tlpoints,u,i),s,n),l&&this._drawSplitline(a._getEdgesPoints(a._blpoints,u,i),s,n)},_getEdgesPoints:function(t,e,i){var n=[t[0].slice(),t[t.length-1].slice()],o="horizontal"===i?0:1;return n[0][o]=n[0][o]-e/2,n[1][o]=n[1][o]+e/2,n},_drawSplitline:function(t,e,i){var n=new pM({z2:20,shape:{points:t},style:e});i.add(n)},_getLinePointsOfOneWeek:function(t,e,i){var n=t.coordinateSystem;e=n.getDateInfo(e);for(var o=[],a=0;a<7;a++){var r=n.getNextNDay(e.time,a),s=n.dataToRect([r.time],!1);o[2*r.day]=s.tl,o[2*r.day+1]=s["horizontal"===i?"bl":"tr"]}return o},_formatterLabel:function(t,e){return"string"==typeof t&&t?na(t,e):"function"==typeof t?t(e):e.nameMap},_yearTextPositionControl:function(t,e,i,n,o){e=e.slice();var a=["center","bottom"];"bottom"===n?(e[1]+=o,a=["center","top"]):"left"===n?e[0]-=o:"right"===n?(e[0]+=o,a=["center","top"]):e[1]-=o;var r=0;return"left"!==n&&"right"!==n||(r=Math.PI/2),{rotation:r,position:e,style:{textAlign:a[0],textVerticalAlign:a[1]}}},_renderYearText:function(t,e,i,n){var o=t.getModel("yearLabel");if(o.get("show")){var a=o.get("margin"),r=o.get("position");r||(r="horizontal"!==i?"top":"left");var s=[this._tlpoints[this._tlpoints.length-1],this._blpoints[0]],l=(s[0][0]+s[1][0])/2,u=(s[0][1]+s[1][1])/2,h="horizontal"===i?0:1,c={top:[l,s[h][1]],bottom:[l,s[1-h][1]],left:[s[1-h][0],u],right:[s[h][0],u]},d=e.start.y;+e.end.y>+e.start.y&&(d=d+"-"+e.end.y);var f=o.get("formatter"),p={start:e.start.y,end:e.end.y,nameMap:d},g=this._formatterLabel(f,p),m=new aM({z2:30});go(m.style,o,{text:g}),m.attr(this._yearTextPositionControl(m,c[r],i,r,a)),n.add(m)}},_monthTextPositionControl:function(t,e,i,n,o){var a="left",r="top",s=t[0],l=t[1];return"horizontal"===i?(l+=o,e&&(a="center"),"start"===n&&(r="bottom")):(s+=o,e&&(r="middle"),"start"===n&&(a="right")),{x:s,y:l,textAlign:a,textVerticalAlign:r}},_renderMonthText:function(t,e,i){var n=t.getModel("monthLabel");if(n.get("show")){var o=n.get("nameMap"),r=n.get("margin"),s=n.get("position"),l=n.get("align"),u=[this._tlpoints,this._blpoints];_(o)&&(o=FN[o.toUpperCase()]||[]);var h="start"===s?0:1,c="horizontal"===e?0:1;r="start"===s?-r:r;for(var d="center"===l,f=0;f<u[h].length-1;f++){var p=u[h][f].slice(),g=this._firstDayOfMonth[f];if(d){var m=this._firstDayPoints[f];p[c]=(m[c]+u[0][f+1][c])/2}var v=n.get("formatter"),y=o[+g.m-1],x={yyyy:g.y,yy:(g.y+"").slice(2),MM:g.m,M:+g.m,nameMap:y},w=this._formatterLabel(v,x),b=new aM({z2:30});a(go(b.style,n,{text:w}),this._monthTextPositionControl(p,d,e,s,r)),i.add(b)}}},_weekTextPositionControl:function(t,e,i,n,o){var a="center",r="middle",s=t[0],l=t[1],u="start"===i;return"horizontal"===e?(s=s+n+(u?1:-1)*o[0]/2,a=u?"right":"left"):(l=l+n+(u?1:-1)*o[1]/2,r=u?"bottom":"top"),{x:s,y:l,textAlign:a,textVerticalAlign:r}},_renderWeekText:function(t,e,i,n){var o=t.getModel("dayLabel");if(o.get("show")){var r=t.coordinateSystem,s=o.get("position"),l=o.get("nameMap"),u=o.get("margin"),h=r.getFirstDayOfWeek();_(l)&&(l=WN[l.toUpperCase()]||[]);var c=r.getNextNDay(e.end.time,7-e.lweek).time,d=[r.getCellWidth(),r.getCellHeight()];u=Bo(u,d["horizontal"===i?0:1]),"start"===s&&(c=r.getNextNDay(e.start.time,-(7+e.fweek)).time,u=-u);for(var f=0;f<7;f++){var p=r.getNextNDay(c,f),g=r.dataToRect([p.time],!1).center,m=f;m=Math.abs((f+h)%7);var v=new aM({z2:30});a(go(v.style,o,{text:l[m]}),this._weekTextPositionControl(g,i,s,u,d)),n.add(v)}}}}),Gs({type:"title",layoutMode:{type:"box",ignoreSize:!0},defaultOption:{zlevel:0,z:6,show:!0,text:"",target:"blank",subtext:"",subtarget:"blank",left:0,top:0,backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderWidth:0,padding:5,itemGap:10,textStyle:{fontSize:18,fontWeight:"bolder",color:"#333"},subtextStyle:{color:"#aaa"}}}),Fs({type:"title",render:function(t,e,i){if(this.group.removeAll(),t.get("show")){var n=this.group,o=t.getModel("textStyle"),a=t.getModel("subtextStyle"),r=t.get("textAlign"),s=t.get("textBaseline"),l=new aM({style:go({},o,{text:t.get("text"),textFill:o.getTextColor()},{disableBox:!0}),z2:10}),u=l.getBoundingRect(),h=t.get("subtext"),c=new aM({style:go({},a,{text:h,textFill:a.getTextColor(),y:u.height+t.get("itemGap"),textVerticalAlign:"top"},{disableBox:!0}),z2:10}),d=t.get("link"),f=t.get("sublink"),p=t.get("triggerEvent",!0);l.silent=!d&&!p,c.silent=!f&&!p,d&&l.on("click",function(){window.open(d,"_"+t.get("target"))}),f&&c.on("click",function(){window.open(f,"_"+t.get("subtarget"))}),l.eventData=c.eventData=p?{componentType:"title",componentIndex:t.componentIndex}:null,n.add(l),h&&n.add(c);var g=n.getBoundingRect(),m=t.getBoxLayoutParams();m.width=g.width,m.height=g.height;var v=ha(m,{width:i.getWidth(),height:i.getHeight()},t.get("padding"));r||("middle"===(r=t.get("left")||t.get("right"))&&(r="center"),"right"===r?v.x+=v.width:"center"===r&&(v.x+=v.width/2)),s||("center"===(s=t.get("top")||t.get("bottom"))&&(s="middle"),"bottom"===s?v.y+=v.height:"middle"===s&&(v.y+=v.height/2),s=s||"top"),n.attr("position",[v.x,v.y]);var y={textAlign:r,textVerticalAlign:s};l.setStyle(y),c.setStyle(y),g=n.getBoundingRect();var x=v.margin,_=t.getItemStyle(["color","opacity"]);_.fill=t.get("backgroundColor");var w=new vM({shape:{x:g.x-x[3],y:g.y-x[0],width:g.width+x[1]+x[3],height:g.height+x[0]+x[2],r:t.get("borderRadius")},style:_,silent:!0});Kn(w),n.add(w)}}}),sI.registerSubTypeDefaulter("dataZoom",function(){return"slider"});var HN=["cartesian2d","polar","singleAxis"],ZN=function(t,e){var i=f(t=t.slice(),sa),n=f(e=(e||[]).slice(),sa);return function(o,a){d(t,function(t,r){for(var s={name:t,capital:i[r]},l=0;l<e.length;l++)s[e[l]]=t+n[l];o.call(a,s)})}}(["x","y","z","radius","angle","single"],["axisIndex","axis","index","id"]),UN=d,XN=Go,jN=function(t,e,i,n){this._dimName=t,this._axisIndex=e,this._valueWindow,this._percentWindow,this._dataExtent,this._minMaxSpan,this.ecModel=n,this._dataZoomModel=i};jN.prototype={constructor:jN,hostedBy:function(t){return this._dataZoomModel===t},getDataValueWindow:function(){return this._valueWindow.slice()},getDataPercentWindow:function(){return this._percentWindow.slice()},getTargetSeriesModels:function(){var t=[],e=this.ecModel;return e.eachSeries(function(i){if(Py(i.get("coordinateSystem"))){var n=this._dimName,o=e.queryComponents({mainType:n+"Axis",index:i.get(n+"AxisIndex"),id:i.get(n+"AxisId")})[0];this._axisIndex===(o&&o.componentIndex)&&t.push(i)}},this),t},getAxisModel:function(){return this.ecModel.getComponent(this._dimName+"Axis",this._axisIndex)},getOtherAxisModel:function(){var t,e,i=this._dimName,n=this.ecModel,o=this.getAxisModel();"x"===i||"y"===i?(e="gridIndex",t="x"===i?"y":"x"):(e="polarIndex",t="angle"===i?"radius":"angle");var a;return n.eachComponent(t+"Axis",function(t){(t.get(e)||0)===(o.get(e)||0)&&(a=t)}),a},getMinMaxSpan:function(){return i(this._minMaxSpan)},calculateDataWindow:function(t){var e=this._dataExtent,i=this.getAxisModel().axis.scale,n=this._dataZoomModel.getRangePropMode(),o=[0,100],a=[t.start,t.end],r=[];return UN(["startValue","endValue"],function(e){r.push(null!=t[e]?i.parse(t[e]):null)}),UN([0,1],function(t){var s=r[t],l=a[t];"percent"===n[t]?(null==l&&(l=o[t]),s=i.parse(zo(l,o,e,!0))):l=zo(s,e,o,!0),r[t]=s,a[t]=l}),{valueWindow:XN(r),percentWindow:XN(a)}},reset:function(t){if(t===this._dataZoomModel){var e=this.getTargetSeriesModels();this._dataExtent=Oy(this,this._dimName,e);var i=this.calculateDataWindow(t.option);this._valueWindow=i.valueWindow,this._percentWindow=i.percentWindow,zy(this),Ry(this)}},restore:function(t){t===this._dataZoomModel&&(this._valueWindow=this._percentWindow=null,Ry(this,!0))},filterData:function(t,e){function i(t){return t>=r[0]&&t<=r[1]}if(t===this._dataZoomModel){var n=this._dimName,o=this.getTargetSeriesModels(),a=t.get("filterMode"),r=this._valueWindow;"none"!==a&&UN(o,function(t){var e=t.getData(),o=e.mapDimension(n,!0);o.length&&("weakFilter"===a?e.filterSelf(function(t){for(var i,n,a,s=0;s<o.length;s++){var l=e.get(o[s],t),u=!isNaN(l),h=l<r[0],c=l>r[1];if(u&&!h&&!c)return!0;u&&(a=!0),h&&(i=!0),c&&(n=!0)}return a&&i&&n}):UN(o,function(n){if("empty"===a)t.setData(e.map(n,function(t){return i(t)?t:NaN}));else{var o={};o[n]=r,e.selectRange(o)}}),UN(o,function(t){e.setApproximateExtent(r,t)}))})}}};var YN=d,qN=ZN,KN=Gs({type:"dataZoom",dependencies:["xAxis","yAxis","zAxis","radiusAxis","angleAxis","singleAxis","series"],defaultOption:{zlevel:0,z:4,orient:null,xAxisIndex:null,yAxisIndex:null,filterMode:"filter",throttle:null,start:0,end:100,startValue:null,endValue:null,minSpan:null,maxSpan:null,minValueSpan:null,maxValueSpan:null,rangeMode:null},init:function(t,e,i){this._dataIntervalByAxis={},this._dataInfo={},this._axisProxies={},this.textStyleModel,this._autoThrottle=!0,this._rangePropMode=["percent","percent"];var n=By(t);this.mergeDefaultAndTheme(t,i),this.doInit(n)},mergeOption:function(t){var e=By(t);n(this.option,t,!0),this.doInit(e)},doInit:function(t){var e=this.option;U_.canvasSupported||(e.realtime=!1),this._setDefaultThrottle(t),Vy(this,t),YN([["start","startValue"],["end","endValue"]],function(t,i){"value"===this._rangePropMode[i]&&(e[t[0]]=null)},this),this.textStyleModel=this.getModel("textStyle"),this._resetTarget(),this._giveAxisProxies()},_giveAxisProxies:function(){var t=this._axisProxies;this.eachTargetAxis(function(e,i,n,o){var a=this.dependentModels[e.axis][i],r=a.__dzAxisProxy||(a.__dzAxisProxy=new jN(e.name,i,this,o));t[e.name+"_"+i]=r},this)},_resetTarget:function(){var t=this.option,e=this._judgeAutoMode();qN(function(e){var i=e.axisIndex;t[i]=Di(t[i])},this),"axisIndex"===e?this._autoSetAxisIndex():"orient"===e&&this._autoSetOrient()},_judgeAutoMode:function(){var t=this.option,e=!1;qN(function(i){null!=t[i.axisIndex]&&(e=!0)},this);var i=t.orient;return null==i&&e?"orient":e?void 0:(null==i&&(t.orient="horizontal"),"axisIndex")},_autoSetAxisIndex:function(){var t=!0,e=this.get("orient",!0),i=this.option,n=this.dependentModels;if(t){var o="vertical"===e?"y":"x";n[o+"Axis"].length?(i[o+"AxisIndex"]=[0],t=!1):YN(n.singleAxis,function(n){t&&n.get("orient",!0)===e&&(i.singleAxisIndex=[n.componentIndex],t=!1)})}t&&qN(function(e){if(t){var n=[],o=this.dependentModels[e.axis];if(o.length&&!n.length)for(var a=0,r=o.length;a<r;a++)"category"===o[a].get("type")&&n.push(a);i[e.axisIndex]=n,n.length&&(t=!1)}},this),t&&this.ecModel.eachSeries(function(t){this._isSeriesHasAllAxesTypeOf(t,"value")&&qN(function(e){var n=i[e.axisIndex],o=t.get(e.axisIndex),a=t.get(e.axisId);l(n,o=t.ecModel.queryComponents({mainType:e.axis,index:o,id:a})[0].componentIndex)<0&&n.push(o)})},this)},_autoSetOrient:function(){var t;this.eachTargetAxis(function(e){!t&&(t=e.name)},this),this.option.orient="y"===t?"vertical":"horizontal"},_isSeriesHasAllAxesTypeOf:function(t,e){var i=!0;return qN(function(n){var o=t.get(n.axisIndex),a=this.dependentModels[n.axis][o];a&&a.get("type")===e||(i=!1)},this),i},_setDefaultThrottle:function(t){if(t.hasOwnProperty("throttle")&&(this._autoThrottle=!1),this._autoThrottle){var e=this.ecModel.option;this.option.throttle=e.animation&&e.animationDurationUpdate>0?100:20}},getFirstTargetAxisModel:function(){var t;return qN(function(e){if(null==t){var i=this.get(e.axisIndex);i.length&&(t=this.dependentModels[e.axis][i[0]])}},this),t},eachTargetAxis:function(t,e){var i=this.ecModel;qN(function(n){YN(this.get(n.axisIndex),function(o){t.call(e,n,o,this,i)},this)},this)},getAxisProxy:function(t,e){return this._axisProxies[t+"_"+e]},getAxisModel:function(t,e){var i=this.getAxisProxy(t,e);return i&&i.getAxisModel()},setRawRange:function(t,e){var i=this.option;YN([["start","startValue"],["end","endValue"]],function(e){null==t[e[0]]&&null==t[e[1]]||(i[e[0]]=t[e[0]],i[e[1]]=t[e[1]])},this),!e&&Vy(this,t)},getPercentRange:function(){var t=this.findRepresentativeAxisProxy();if(t)return t.getDataPercentWindow()},getValueRange:function(t,e){if(null!=t||null!=e)return this.getAxisProxy(t,e).getDataValueWindow();var i=this.findRepresentativeAxisProxy();return i?i.getDataValueWindow():void 0},findRepresentativeAxisProxy:function(t){if(t)return t.__dzAxisProxy;var e=this._axisProxies;for(var i in e)if(e.hasOwnProperty(i)&&e[i].hostedBy(this))return e[i];for(var i in e)if(e.hasOwnProperty(i)&&!e[i].hostedBy(this))return e[i]},getRangePropMode:function(){return this._rangePropMode.slice()}}),$N=YI.extend({type:"dataZoom",render:function(t,e,i,n){this.dataZoomModel=t,this.ecModel=e,this.api=i},getTargetCoordInfo:function(){function t(t,e,i,n){for(var o,a=0;a<i.length;a++)if(i[a].model===t){o=i[a];break}o||i.push(o={model:t,axisModels:[],coordIndex:n}),o.axisModels.push(e)}var e=this.dataZoomModel,i=this.ecModel,n={};return e.eachTargetAxis(function(e,o){var a=i.getComponent(e.axis,o);if(a){var r=a.getCoordSysModel();r&&t(r,a,n[r.mainType]||(n[r.mainType]=[]),r.componentIndex)}},this),n}}),JN=(KN.extend({type:"dataZoom.slider",layoutMode:"box",defaultOption:{show:!0,right:"ph",top:"ph",width:"ph",height:"ph",left:null,bottom:null,backgroundColor:"rgba(47,69,84,0)",dataBackground:{lineStyle:{color:"#2f4554",width:.5,opacity:.3},areaStyle:{color:"rgba(47,69,84,0.3)",opacity:.3}},borderColor:"#ddd",fillerColor:"rgba(167,183,204,0.4)",handleIcon:"M8.2,13.6V3.9H6.3v9.7H3.1v14.9h3.3v9.7h1.8v-9.7h3.3V13.6H8.2z M9.7,24.4H4.8v-1.4h4.9V24.4z M9.7,19.1H4.8v-1.4h4.9V19.1z",handleSize:"100%",handleStyle:{color:"#a7b7cc"},labelPrecision:null,labelFormatter:null,showDetail:!0,showDataShadow:"auto",realtime:!0,zoomLock:!1,textStyle:{color:"#333"}}}),vM),QN=zo,tO=Go,eO=m,iO=d,nO="horizontal",oO=5,aO=["line","bar","candlestick","scatter"],rO=$N.extend({type:"dataZoom.slider",init:function(t,e){this._displayables={},this._orient,this._range,this._handleEnds,this._size,this._handleWidth,this._handleHeight,this._location,this._dragging,this._dataShadowInfo,this.api=e},render:function(t,e,i,n){rO.superApply(this,"render",arguments),Pr(this,"_dispatchZoomAction",this.dataZoomModel.get("throttle"),"fixRate"),this._orient=t.get("orient"),!1!==this.dataZoomModel.get("show")?(n&&"dataZoom"===n.type&&n.from===this.uid||this._buildView(),this._updateView()):this.group.removeAll()},remove:function(){rO.superApply(this,"remove",arguments),Nr(this,"_dispatchZoomAction")},dispose:function(){rO.superApply(this,"dispose",arguments),Nr(this,"_dispatchZoomAction")},_buildView:function(){var t=this.group;t.removeAll(),this._resetLocation(),this._resetInterval();var e=this._displayables.barGroup=new tb;this._renderBackground(),this._renderHandle(),this._renderDataShadow(),t.add(e),this._positionGroup()},_resetLocation:function(){var t=this.dataZoomModel,e=this.api,i=this._findCoordRect(),n={width:e.getWidth(),height:e.getHeight()},o=this._orient===nO?{right:n.width-i.x-i.width,top:n.height-30-7,width:i.width,height:30}:{right:7,top:i.y,width:30,height:i.height},a=pa(t.option);d(["right","top","width","height"],function(t){"ph"===a[t]&&(a[t]=o[t])});var r=ha(a,n,t.padding);this._location={x:r.x,y:r.y},this._size=[r.width,r.height],"vertical"===this._orient&&this._size.reverse()},_positionGroup:function(){var t=this.group,e=this._location,i=this._orient,n=this.dataZoomModel.getFirstTargetAxisModel(),o=n&&n.get("inverse"),a=this._displayables.barGroup,r=(this._dataShadowInfo||{}).otherAxisInverse;a.attr(i!==nO||o?i===nO&&o?{scale:r?[-1,1]:[-1,-1]}:"vertical"!==i||o?{scale:r?[-1,-1]:[-1,1],rotation:Math.PI/2}:{scale:r?[1,-1]:[1,1],rotation:Math.PI/2}:{scale:r?[1,1]:[1,-1]});var s=t.getBoundingRect([a]);t.attr("position",[e.x-s.x,e.y-s.y])},_getViewExtent:function(){return[0,this._size[0]]},_renderBackground:function(){var t=this.dataZoomModel,e=this._size,i=this._displayables.barGroup;i.add(new JN({silent:!0,shape:{x:0,y:0,width:e[0],height:e[1]},style:{fill:t.get("backgroundColor")},z2:-40})),i.add(new JN({shape:{x:0,y:0,width:e[0],height:e[1]},style:{fill:"transparent"},z2:0,onclick:m(this._onClickPanelClick,this)}))},_renderDataShadow:function(){var t=this._dataShadowInfo=this._prepareDataShadowInfo();if(t){var e=this._size,i=t.series,n=i.getRawData(),o=i.getShadowDim?i.getShadowDim():t.otherDim;if(null!=o){var a=n.getDataExtent(o),s=.3*(a[1]-a[0]);a=[a[0]-s,a[1]+s];var l,u=[0,e[1]],h=[0,e[0]],c=[[e[0],0],[0,0]],d=[],f=h[1]/(n.count()-1),p=0,g=Math.round(n.count()/e[0]);n.each([o],function(t,e){if(g>0&&e%g)p+=f;else{var i=null==t||isNaN(t)||""===t,n=i?0:QN(t,a,u,!0);i&&!l&&e?(c.push([c[c.length-1][0],0]),d.push([d[d.length-1][0],0])):!i&&l&&(c.push([p,0]),d.push([p,0])),c.push([p,n]),d.push([p,n]),p+=f,l=i}});var m=this.dataZoomModel;this._displayables.barGroup.add(new fM({shape:{points:c},style:r({fill:m.get("dataBackgroundColor")},m.getModel("dataBackground.areaStyle").getAreaStyle()),silent:!0,z2:-20})),this._displayables.barGroup.add(new pM({shape:{points:d},style:m.getModel("dataBackground.lineStyle").getLineStyle(),silent:!0,z2:-19}))}}},_prepareDataShadowInfo:function(){var t=this.dataZoomModel,e=t.get("showDataShadow");if(!1!==e){var i,n=this.ecModel;return t.eachTargetAxis(function(o,a){d(t.getAxisProxy(o.name,a).getTargetSeriesModels(),function(t){if(!(i||!0!==e&&l(aO,t.get("type"))<0)){var r,s=n.getComponent(o.axis,a).axis,u=Gy(o.name),h=t.coordinateSystem;null!=u&&h.getOtherAxis&&(r=h.getOtherAxis(s).inverse),u=t.getData().mapDimension(u),i={thisAxis:s,series:t,thisDim:o.name,otherDim:u,otherAxisInverse:r}}},this)},this),i}},_renderHandle:function(){var t=this._displayables,e=t.handles=[],i=t.handleLabels=[],n=this._displayables.barGroup,o=this._size,a=this.dataZoomModel;n.add(t.filler=new JN({draggable:!0,cursor:Fy(this._orient),drift:eO(this._onDragMove,this,"all"),onmousemove:function(t){mw(t.event)},ondragstart:eO(this._showDataInfo,this,!0),ondragend:eO(this._onDragEnd,this),onmouseover:eO(this._showDataInfo,this,!0),onmouseout:eO(this._showDataInfo,this,!1),style:{fill:a.get("fillerColor"),textPosition:"inside"}})),n.add(new JN(Kn({silent:!0,shape:{x:0,y:0,width:o[0],height:o[1]},style:{stroke:a.get("dataBackgroundColor")||a.get("borderColor"),lineWidth:1,fill:"rgba(0,0,0,0)"}}))),iO([0,1],function(t){var o=ko(a.get("handleIcon"),{cursor:Fy(this._orient),draggable:!0,drift:eO(this._onDragMove,this,t),onmousemove:function(t){mw(t.event)},ondragend:eO(this._onDragEnd,this),onmouseover:eO(this._showDataInfo,this,!0),onmouseout:eO(this._showDataInfo,this,!1)},{x:-1,y:0,width:2,height:2}),r=o.getBoundingRect();this._handleHeight=Bo(a.get("handleSize"),this._size[1]),this._handleWidth=r.width/r.height*this._handleHeight,o.setStyle(a.getModel("handleStyle").getItemStyle());var s=a.get("handleColor");null!=s&&(o.style.fill=s),n.add(e[t]=o);var l=a.textStyleModel;this.group.add(i[t]=new aM({silent:!0,invisible:!0,style:{x:0,y:0,text:"",textVerticalAlign:"middle",textAlign:"center",textFill:l.getTextColor(),textFont:l.getFont()},z2:10}))},this)},_resetInterval:function(){var t=this._range=this.dataZoomModel.getPercentRange(),e=this._getViewExtent();this._handleEnds=[QN(t[0],[0,100],e,!0),QN(t[1],[0,100],e,!0)]},_updateInterval:function(t,e){var i=this.dataZoomModel,n=this._handleEnds,o=this._getViewExtent(),a=i.findRepresentativeAxisProxy().getMinMaxSpan(),r=[0,100];qL(e,n,o,i.get("zoomLock")?"all":t,null!=a.minSpan?QN(a.minSpan,r,o,!0):null,null!=a.maxSpan?QN(a.maxSpan,r,o,!0):null);var s=this._range,l=this._range=tO([QN(n[0],o,r,!0),QN(n[1],o,r,!0)]);return!s||s[0]!==l[0]||s[1]!==l[1]},_updateView:function(t){var e=this._displayables,i=this._handleEnds,n=tO(i.slice()),o=this._size;iO([0,1],function(t){var n=e.handles[t],a=this._handleHeight;n.attr({scale:[a/2,a/2],position:[i[t],o[1]/2-a/2]})},this),e.filler.setShape({x:n[0],y:0,width:n[1]-n[0],height:o[1]}),this._updateDataInfo(t)},_updateDataInfo:function(t){function e(t){var e=To(n.handles[t].parent,this.group),i=Do(0===t?"right":"left",e),s=this._handleWidth/2+oO,l=Ao([c[t]+(0===t?-s:s),this._size[1]/2],e);o[t].setStyle({x:l[0],y:l[1],textVerticalAlign:a===nO?"middle":i,textAlign:a===nO?i:"center",text:r[t]})}var i=this.dataZoomModel,n=this._displayables,o=n.handleLabels,a=this._orient,r=["",""];if(i.get("showDetail")){var s=i.findRepresentativeAxisProxy();if(s){var l=s.getAxisModel().axis,u=this._range,h=t?s.calculateDataWindow({start:u[0],end:u[1]}).valueWindow:s.getDataValueWindow();r=[this._formatLabel(h[0],l),this._formatLabel(h[1],l)]}}var c=tO(this._handleEnds.slice());e.call(this,0),e.call(this,1)},_formatLabel:function(t,e){var i=this.dataZoomModel,n=i.get("labelFormatter"),o=i.get("labelPrecision");null!=o&&"auto"!==o||(o=e.getPixelPrecision());var a=null==t||isNaN(t)?"":"category"===e.type||"time"===e.type?e.scale.getLabel(Math.round(t)):t.toFixed(Math.min(o,20));return x(n)?n(t,a):_(n)?n.replace("{value}",a):a},_showDataInfo:function(t){t=this._dragging||t;var e=this._displayables.handleLabels;e[0].attr("invisible",!t),e[1].attr("invisible",!t)},_onDragMove:function(t,e,i){this._dragging=!0;var n=Ao([e,i],this._displayables.barGroup.getLocalTransform(),!0),o=this._updateInterval(t,n[0]),a=this.dataZoomModel.get("realtime");this._updateView(!a),o&&a&&this._dispatchZoomAction()},_onDragEnd:function(){this._dragging=!1,this._showDataInfo(!1),!this.dataZoomModel.get("realtime")&&this._dispatchZoomAction()},_onClickPanelClick:function(t){var e=this._size,i=this._displayables.barGroup.transformCoordToLocal(t.offsetX,t.offsetY);if(!(i[0]<0||i[0]>e[0]||i[1]<0||i[1]>e[1])){var n=this._handleEnds,o=(n[0]+n[1])/2,a=this._updateInterval("all",i[0]-o);this._updateView(),a&&this._dispatchZoomAction()}},_dispatchZoomAction:function(){var t=this._range;this.api.dispatchAction({type:"dataZoom",from:this.uid,dataZoomId:this.dataZoomModel.id,start:t[0],end:t[1]})},_findCoordRect:function(){var t;if(iO(this.getTargetCoordInfo(),function(e){if(!t&&e.length){var i=e[0].model.coordinateSystem;t=i.getRect&&i.getRect()}}),!t){var e=this.api.getWidth(),i=this.api.getHeight();t={x:.2*e,y:.2*i,width:.6*e,height:.6*i}}return t}});KN.extend({type:"dataZoom.inside",defaultOption:{disabled:!1,zoomLock:!1,zoomOnMouseWheel:!0,moveOnMouseMove:!0,moveOnMouseWheel:!1,preventDefaultMouseMove:!0}});var sO="\0_ec_dataZoom_roams",lO=m,uO=$N.extend({type:"dataZoom.inside",init:function(t,e){this._range},render:function(t,e,i,n){uO.superApply(this,"render",arguments),this._range=t.getPercentRange(),d(this.getTargetCoordInfo(),function(e,n){var o=f(e,function(t){return Zy(t.model)});d(e,function(e){var a=e.model,r={};d(["pan","zoom","scrollMove"],function(t){r[t]=lO(hO[t],this,e,n)},this),Wy(i,{coordId:Zy(a),allCoordIds:o,containsPoint:function(t,e,i){return a.coordinateSystem.containPoint([e,i])},dataZoomId:t.id,dataZoomModel:t,getRange:r})},this)},this)},dispose:function(){Hy(this.api,this.dataZoomModel.id),uO.superApply(this,"dispose",arguments),this._range=null}}),hO={zoom:function(t,e,i,n){var o=this._range,a=o.slice(),r=t.axisModels[0];if(r){var s=cO[e](null,[n.originX,n.originY],r,i,t),l=(s.signal>0?s.pixelStart+s.pixelLength-s.pixel:s.pixel-s.pixelStart)/s.pixelLength*(a[1]-a[0])+a[0],u=Math.max(1/n.scale,0);a[0]=(a[0]-l)*u+l,a[1]=(a[1]-l)*u+l;var h=this.dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();return qL(0,a,[0,100],0,h.minSpan,h.maxSpan),this._range=a,o[0]!==a[0]||o[1]!==a[1]?a:void 0}},pan:Ky(function(t,e,i,n,o,a){var r=cO[n]([a.oldX,a.oldY],[a.newX,a.newY],e,o,i);return r.signal*(t[1]-t[0])*r.pixel/r.pixelLength}),scrollMove:Ky(function(t,e,i,n,o,a){return cO[n]([0,0],[a.scrollDelta,a.scrollDelta],e,o,i).signal*(t[1]-t[0])*a.scrollDelta})},cO={grid:function(t,e,i,n,o){var a=i.axis,r={},s=o.model.coordinateSystem.getRect();return t=t||[0,0],"x"===a.dim?(r.pixel=e[0]-t[0],r.pixelLength=s.width,r.pixelStart=s.x,r.signal=a.inverse?1:-1):(r.pixel=e[1]-t[1],r.pixelLength=s.height,r.pixelStart=s.y,r.signal=a.inverse?-1:1),r},polar:function(t,e,i,n,o){var a=i.axis,r={},s=o.model.coordinateSystem,l=s.getRadiusAxis().getExtent(),u=s.getAngleAxis().getExtent();return t=t?s.pointToCoord(t):[0,0],e=s.pointToCoord(e),"radiusAxis"===i.mainType?(r.pixel=e[0]-t[0],r.pixelLength=l[1]-l[0],r.pixelStart=l[0],r.signal=a.inverse?1:-1):(r.pixel=e[1]-t[1],r.pixelLength=u[1]-u[0],r.pixelStart=u[0],r.signal=a.inverse?-1:1),r},singleAxis:function(t,e,i,n,o){var a=i.axis,r=o.model.coordinateSystem.getRect(),s={};return t=t||[0,0],"horizontal"===a.orient?(s.pixel=e[0]-t[0],s.pixelLength=r.width,s.pixelStart=r.x,s.signal=a.inverse?1:-1):(s.pixel=e[1]-t[1],s.pixelLength=r.height,s.pixelStart=r.y,s.signal=a.inverse?-1:1),s}};Ns({getTargetSeries:function(t){var e=R();return t.eachComponent("dataZoom",function(t){t.eachTargetAxis(function(t,i,n){d(n.getAxisProxy(t.name,i).getTargetSeriesModels(),function(t){e.set(t.uid,t)})})}),e},modifyOutputEnd:!0,overallReset:function(t,e){t.eachComponent("dataZoom",function(t){t.eachTargetAxis(function(t,i,n){n.getAxisProxy(t.name,i).reset(n,e)}),t.eachTargetAxis(function(t,i,n){n.getAxisProxy(t.name,i).filterData(n,e)})}),t.eachComponent("dataZoom",function(t){var e=t.findRepresentativeAxisProxy(),i=e.getDataPercentWindow(),n=e.getDataValueWindow();t.setRawRange({start:i[0],end:i[1],startValue:n[0],endValue:n[1]},!0)})}}),Os("dataZoom",function(t,e){var i=Ny(m(e.eachComponent,e,"dataZoom"),ZN,function(t,e){return t.get(e.axisIndex)}),n=[];e.eachComponent({mainType:"dataZoom",query:t},function(t,e){n.push.apply(n,i(t).nodes)}),d(n,function(e,i){e.setRawRange({start:t.start,end:t.end,startValue:t.startValue,endValue:t.endValue})})});var dO=d,fO=function(t){var e=t&&t.visualMap;y(e)||(e=e?[e]:[]),dO(e,function(t){if(t){$y(t,"splitList")&&!$y(t,"pieces")&&(t.pieces=t.splitList,delete t.splitList);var e=t.pieces;e&&y(e)&&dO(e,function(t){w(t)&&($y(t,"start")&&!$y(t,"min")&&(t.min=t.start),$y(t,"end")&&!$y(t,"max")&&(t.max=t.end))})}})};sI.registerSubTypeDefaulter("visualMap",function(t){return t.categories||(t.pieces?t.pieces.length>0:t.splitNumber>0)&&!t.calculable?"piecewise":"continuous"});var pO=zT.VISUAL.COMPONENT;zs(pO,{createOnAllSeries:!0,reset:function(t,e){var i=[];return e.eachComponent("visualMap",function(e){var n=t.pipelineContext;!e.isTargetSeries(t)||n&&n.large||i.push(ny(e.stateList,e.targetVisuals,m(e.getValueState,e),e.getDataDimension(t.getData())))}),i}}),zs(pO,{createOnAllSeries:!0,reset:function(t,e){var i=t.getData(),n=[];e.eachComponent("visualMap",function(e){if(e.isTargetSeries(t)){var o=e.getVisualMeta(m(Jy,null,t,e))||{stops:[],outerColors:[]},a=e.getDataDimension(i),r=i.getDimensionInfo(a);null!=r&&(o.dimension=r.index,n.push(o))}}),t.getData().setVisual("visualMeta",n)}});var gO={get:function(t,e,n){var o=i((mO[t]||{})[e]);return n&&y(o)?o[o.length-1]:o}},mO={color:{active:["#006edd","#e0ffff"],inactive:["rgba(0,0,0,0)"]},colorHue:{active:[0,360],inactive:[0,0]},colorSaturation:{active:[.3,1],inactive:[0,0]},colorLightness:{active:[.9,.5],inactive:[0,0]},colorAlpha:{active:[.3,1],inactive:[0,0]},opacity:{active:[.3,1],inactive:[0,0]},symbol:{active:["circle","roundRect","diamond"],inactive:["none"]},symbolSize:{active:[10,50],inactive:[0,0]}},vO=sL.mapVisual,yO=sL.eachVisual,xO=y,_O=d,wO=Go,bO=zo,SO=B,MO=Gs({type:"visualMap",dependencies:["series"],stateList:["inRange","outOfRange"],replacableOptionKeys:["inRange","outOfRange","target","controller","color"],dataBound:[-1/0,1/0],layoutMode:{type:"box",ignoreSize:!0},defaultOption:{show:!0,zlevel:0,z:4,seriesIndex:"all",min:0,max:200,dimension:null,inRange:null,outOfRange:null,left:0,right:null,top:null,bottom:0,itemWidth:null,itemHeight:null,inverse:!1,orient:"vertical",backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",contentColor:"#5793f3",inactiveColor:"#aaa",borderWidth:0,padding:5,textGap:10,precision:0,color:null,formatter:null,text:null,textStyle:{color:"#333"}},init:function(t,e,i){this._dataExtent,this.targetVisuals={},this.controllerVisuals={},this.textStyleModel,this.itemSize,this.mergeDefaultAndTheme(t,i)},optionUpdated:function(t,e){var i=this.option;U_.canvasSupported||(i.realtime=!1),!e&&ey(i,t,this.replacableOptionKeys),this.textStyleModel=this.getModel("textStyle"),this.resetItemSize(),this.completeVisualOption()},resetVisual:function(t){var e=this.stateList;t=m(t,this),this.controllerVisuals=ty(this.option.controller,e,t),this.targetVisuals=ty(this.option.target,e,t)},getTargetSeriesIndices:function(){var t=this.option.seriesIndex,e=[];return null==t||"all"===t?this.ecModel.eachSeries(function(t,i){e.push(i)}):e=Di(t),e},eachTargetSeries:function(t,e){d(this.getTargetSeriesIndices(),function(i){t.call(e,this.ecModel.getSeriesByIndex(i))},this)},isTargetSeries:function(t){var e=!1;return this.eachTargetSeries(function(i){i===t&&(e=!0)}),e},formatValueText:function(t,e,i){function n(t){return t===l[0]?"min":t===l[1]?"max":(+t).toFixed(Math.min(s,20))}var o,a,r=this.option,s=r.precision,l=this.dataBound,u=r.formatter;return i=i||["<",">"],y(t)&&(t=t.slice(),o=!0),a=e?t:o?[n(t[0]),n(t[1])]:n(t),_(u)?u.replace("{value}",o?a[0]:a).replace("{value2}",o?a[1]:a):x(u)?o?u(t[0],t[1]):u(t):o?t[0]===l[0]?i[0]+" "+a[1]:t[1]===l[1]?i[1]+" "+a[0]:a[0]+" - "+a[1]:a},resetExtent:function(){var t=this.option,e=wO([t.min,t.max]);this._dataExtent=e},getDataDimension:function(t){var e=this.option.dimension,i=t.dimensions;if(null!=e||i.length){if(null!=e)return t.getDimension(e);for(var n=t.dimensions,o=n.length-1;o>=0;o--){var a=n[o];if(!t.getDimensionInfo(a).isCalculationCoord)return a}}},getExtent:function(){return this._dataExtent.slice()},completeVisualOption:function(){function t(t){xO(o.color)&&!t.inRange&&(t.inRange={color:o.color.slice().reverse()}),t.inRange=t.inRange||{color:e.get("gradientColor")},_O(this.stateList,function(e){var i=t[e];if(_(i)){var n=gO.get(i,"active",l);n?(t[e]={},t[e][i]=n):delete t[e]}},this)}var e=this.ecModel,o=this.option,a={inRange:o.inRange,outOfRange:o.outOfRange},r=o.target||(o.target={}),s=o.controller||(o.controller={});n(r,a),n(s,a);var l=this.isCategory();t.call(this,r),t.call(this,s),function(t,e,i){var n=t[e],o=t[i];n&&!o&&(o=t[i]={},_O(n,function(t,e){if(sL.isValidType(e)){var i=gO.get(e,"inactive",l);null!=i&&(o[e]=i,"color"!==e||o.hasOwnProperty("opacity")||o.hasOwnProperty("colorAlpha")||(o.opacity=[0,0]))}}))}.call(this,r,"inRange","outOfRange"),function(t){var e=(t.inRange||{}).symbol||(t.outOfRange||{}).symbol,n=(t.inRange||{}).symbolSize||(t.outOfRange||{}).symbolSize,o=this.get("inactiveColor");_O(this.stateList,function(a){var r=this.itemSize,s=t[a];s||(s=t[a]={color:l?o:[o]}),null==s.symbol&&(s.symbol=e&&i(e)||(l?"roundRect":["roundRect"])),null==s.symbolSize&&(s.symbolSize=n&&i(n)||(l?r[0]:[r[0],r[0]])),s.symbol=vO(s.symbol,function(t){return"none"===t||"square"===t?"roundRect":t});var u=s.symbolSize;if(null!=u){var h=-1/0;yO(u,function(t){t>h&&(h=t)}),s.symbolSize=vO(u,function(t){return bO(t,[0,h],[0,r[0]],!0)})}},this)}.call(this,s)},resetItemSize:function(){this.itemSize=[parseFloat(this.get("itemWidth")),parseFloat(this.get("itemHeight"))]},isCategory:function(){return!!this.option.categories},setSelected:SO,getValueState:SO,getVisualMeta:SO}),IO=[20,140],TO=MO.extend({type:"visualMap.continuous",defaultOption:{align:"auto",calculable:!1,range:null,realtime:!0,itemHeight:null,itemWidth:null,hoverLink:!0,hoverLinkDataSize:null,hoverLinkOnHandle:null},optionUpdated:function(t,e){TO.superApply(this,"optionUpdated",arguments),this.resetExtent(),this.resetVisual(function(t){t.mappingMethod="linear",t.dataExtent=this.getExtent()}),this._resetRange()},resetItemSize:function(){TO.superApply(this,"resetItemSize",arguments);var t=this.itemSize;"horizontal"===this._orient&&t.reverse(),(null==t[0]||isNaN(t[0]))&&(t[0]=IO[0]),(null==t[1]||isNaN(t[1]))&&(t[1]=IO[1])},_resetRange:function(){var t=this.getExtent(),e=this.option.range;!e||e.auto?(t.auto=1,this.option.range=t):y(e)&&(e[0]>e[1]&&e.reverse(),e[0]=Math.max(e[0],t[0]),e[1]=Math.min(e[1],t[1]))},completeVisualOption:function(){MO.prototype.completeVisualOption.apply(this,arguments),d(this.stateList,function(t){var e=this.option.controller[t].symbolSize;e&&e[0]!==e[1]&&(e[0]=0)},this)},setSelected:function(t){this.option.range=t.slice(),this._resetRange()},getSelected:function(){var t=this.getExtent(),e=Go((this.get("range")||[]).slice());return e[0]>t[1]&&(e[0]=t[1]),e[1]>t[1]&&(e[1]=t[1]),e[0]<t[0]&&(e[0]=t[0]),e[1]<t[0]&&(e[1]=t[0]),e},getValueState:function(t){var e=this.option.range,i=this.getExtent();return(e[0]<=i[0]||e[0]<=t)&&(e[1]>=i[1]||t<=e[1])?"inRange":"outOfRange"},findTargetDataIndices:function(t){var e=[];return this.eachTargetSeries(function(i){var n=[],o=i.getData();o.each(this.getDataDimension(o),function(e,i){t[0]<=e&&e<=t[1]&&n.push(i)},this),e.push({seriesId:i.id,dataIndex:n})},this),e},getVisualMeta:function(t){function e(e,i){o.push({value:e,color:t(e,i)})}for(var i=Qy(0,0,this.getExtent()),n=Qy(0,0,this.option.range.slice()),o=[],a=0,r=0,s=n.length,l=i.length;r<l&&(!n.length||i[r]<=n[0]);r++)i[r]<n[a]&&e(i[r],"outOfRange");for(u=1;a<s;a++,u=0)u&&o.length&&e(n[a],"outOfRange"),e(n[a],"inRange");for(var u=1;r<l;r++)(!n.length||n[n.length-1]<i[r])&&(u&&(o.length&&e(o[o.length-1].value,"outOfRange"),u=0),e(i[r],"outOfRange"));var h=o.length;return{stops:o,outerColors:[h?o[0].color:"transparent",h?o[h-1].color:"transparent"]}}}),AO=Fs({type:"visualMap",autoPositionValues:{left:1,right:1,top:1,bottom:1},init:function(t,e){this.ecModel=t,this.api=e,this.visualMapModel},render:function(t,e,i,n){this.visualMapModel=t,!1!==t.get("show")?this.doRender.apply(this,arguments):this.group.removeAll()},renderBackground:function(t){var e=this.visualMapModel,i=YM(e.get("padding")||0),n=t.getBoundingRect();t.add(new vM({z2:-1,silent:!0,shape:{x:n.x-i[3],y:n.y-i[0],width:n.width+i[3]+i[1],height:n.height+i[0]+i[2]},style:{fill:e.get("backgroundColor"),stroke:e.get("borderColor"),lineWidth:e.get("borderWidth")}}))},getControllerVisual:function(t,e,i){function n(t){return s[t]}function o(t,e){s[t]=e}var a=(i=i||{}).forceState,r=this.visualMapModel,s={};if("symbol"===e&&(s.symbol=r.get("itemSymbol")),"color"===e){var l=r.get("contentColor");s.color=l}var u=r.controllerVisuals[a||r.getValueState(t)];return d(sL.prepareVisualTypes(u),function(a){var r=u[a];i.convertOpacityToAlpha&&"opacity"===a&&(a="colorAlpha",r=u.__alphaForOpacity),sL.dependsOn(a,e)&&r&&r.applyVisual(t,n,o)}),s[e]},positionGroup:function(t){var e=this.visualMapModel,i=this.api;ca(t,e.getBoxLayoutParams(),{width:i.getWidth(),height:i.getHeight()})},doRender:B}),DO=zo,CO=d,LO=Math.min,kO=Math.max,PO=12,NO=6,OO=AO.extend({type:"visualMap.continuous",init:function(){OO.superApply(this,"init",arguments),this._shapes={},this._dataInterval=[],this._handleEnds=[],this._orient,this._useHandle,this._hoverLinkDataIndices=[],this._dragging,this._hovering},doRender:function(t,e,i,n){n&&"selectDataRange"===n.type&&n.from===this.uid||this._buildView()},_buildView:function(){this.group.removeAll();var t=this.visualMapModel,e=this.group;this._orient=t.get("orient"),this._useHandle=t.get("calculable"),this._resetInterval(),this._renderBar(e);var i=t.get("text");this._renderEndsText(e,i,0),this._renderEndsText(e,i,1),this._updateView(!0),this.renderBackground(e),this._updateView(),this._enableHoverLinkToSeries(),this._enableHoverLinkFromSeries(),this.positionGroup(e)},_renderEndsText:function(t,e,i){if(e){var n=e[1-i];n=null!=n?n+"":"";var o=this.visualMapModel,a=o.get("textGap"),r=o.itemSize,s=this._shapes.barGroup,l=this._applyTransform([r[0]/2,0===i?-a:r[1]+a],s),u=this._applyTransform(0===i?"bottom":"top",s),h=this._orient,c=this.visualMapModel.textStyleModel;this.group.add(new aM({style:{x:l[0],y:l[1],textVerticalAlign:"horizontal"===h?"middle":u,textAlign:"horizontal"===h?u:"center",text:n,textFont:c.getFont(),textFill:c.getTextColor()}}))}},_renderBar:function(t){var e=this.visualMapModel,i=this._shapes,n=e.itemSize,o=this._orient,a=this._useHandle,r=tx(e,this.api,n),s=i.barGroup=this._createBarGroup(r);s.add(i.outOfRange=ix()),s.add(i.inRange=ix(null,a?sx(this._orient):null,m(this._dragHandle,this,"all",!1),m(this._dragHandle,this,"all",!0)));var l=e.textStyleModel.getTextRect("国"),u=kO(l.width,l.height);a&&(i.handleThumbs=[],i.handleLabels=[],i.handleLabelPoints=[],this._createHandle(s,0,n,u,o,r),this._createHandle(s,1,n,u,o,r)),this._createIndicator(s,n,u,o),t.add(s)},_createHandle:function(t,e,i,n,o){var a=m(this._dragHandle,this,e,!1),r=m(this._dragHandle,this,e,!0),s=ix(nx(e,n),sx(this._orient),a,r);s.position[0]=i[0],t.add(s);var l=this.visualMapModel.textStyleModel,u=new aM({draggable:!0,drift:a,onmousemove:function(t){mw(t.event)},ondragend:r,style:{x:0,y:0,text:"",textFont:l.getFont(),textFill:l.getTextColor()}});this.group.add(u);var h=["horizontal"===o?n/2:1.5*n,"horizontal"===o?0===e?-1.5*n:1.5*n:0===e?-n/2:n/2],c=this._shapes;c.handleThumbs[e]=s,c.handleLabelPoints[e]=h,c.handleLabels[e]=u},_createIndicator:function(t,e,i,n){var o=ix([[0,0]],"move");o.position[0]=e[0],o.attr({invisible:!0,silent:!0}),t.add(o);var a=this.visualMapModel.textStyleModel,r=new aM({silent:!0,invisible:!0,style:{x:0,y:0,text:"",textFont:a.getFont(),textFill:a.getTextColor()}});this.group.add(r);var s=["horizontal"===n?i/2:NO+3,0],l=this._shapes;l.indicator=o,l.indicatorLabel=r,l.indicatorLabelPoint=s},_dragHandle:function(t,e,i,n){if(this._useHandle){if(this._dragging=!e,!e){var o=this._applyTransform([i,n],this._shapes.barGroup,!0);this._updateInterval(t,o[1]),this._updateView()}e===!this.visualMapModel.get("realtime")&&this.api.dispatchAction({type:"selectDataRange",from:this.uid,visualMapId:this.visualMapModel.id,selected:this._dataInterval.slice()}),e?!this._hovering&&this._clearHoverLinkToSeries():rx(this.visualMapModel)&&this._doHoverLinkToSeries(this._handleEnds[t],!1)}},_resetInterval:function(){var t=this.visualMapModel,e=this._dataInterval=t.getSelected(),i=t.getExtent(),n=[0,t.itemSize[1]];this._handleEnds=[DO(e[0],i,n,!0),DO(e[1],i,n,!0)]},_updateInterval:function(t,e){e=e||0;var i=this.visualMapModel,n=this._handleEnds,o=[0,i.itemSize[1]];qL(e,n,o,t,0);var a=i.getExtent();this._dataInterval=[DO(n[0],o,a,!0),DO(n[1],o,a,!0)]},_updateView:function(t){var e=this.visualMapModel,i=e.getExtent(),n=this._shapes,o=[0,e.itemSize[1]],a=t?o:this._handleEnds,r=this._createBarVisual(this._dataInterval,i,a,"inRange"),s=this._createBarVisual(i,i,o,"outOfRange");n.inRange.setStyle({fill:r.barColor,opacity:r.opacity}).setShape("points",r.barPoints),n.outOfRange.setStyle({fill:s.barColor,opacity:s.opacity}).setShape("points",s.barPoints),this._updateHandle(a,r)},_createBarVisual:function(t,e,i,n){var o={forceState:n,convertOpacityToAlpha:!0},a=this._makeColorGradient(t,o),r=[this.getControllerVisual(t[0],"symbolSize",o),this.getControllerVisual(t[1],"symbolSize",o)],s=this._createBarPoints(i,r);return{barColor:new IM(0,0,0,1,a),barPoints:s,handlesColor:[a[0].color,a[a.length-1].color]}},_makeColorGradient:function(t,e){var i=[],n=(t[1]-t[0])/100;i.push({color:this.getControllerVisual(t[0],"color",e),offset:0});for(var o=1;o<100;o++){var a=t[0]+n*o;if(a>t[1])break;i.push({color:this.getControllerVisual(a,"color",e),offset:o/100})}return i.push({color:this.getControllerVisual(t[1],"color",e),offset:1}),i},_createBarPoints:function(t,e){var i=this.visualMapModel.itemSize;return[[i[0]-e[0],t[0]],[i[0],t[0]],[i[0],t[1]],[i[0]-e[1],t[1]]]},_createBarGroup:function(t){var e=this._orient,i=this.visualMapModel.get("inverse");return new tb("horizontal"!==e||i?"horizontal"===e&&i?{scale:"bottom"===t?[-1,1]:[1,1],rotation:-Math.PI/2}:"vertical"!==e||i?{scale:"left"===t?[1,1]:[-1,1]}:{scale:"left"===t?[1,-1]:[-1,-1]}:{scale:"bottom"===t?[1,1]:[-1,1],rotation:Math.PI/2})},_updateHandle:function(t,e){if(this._useHandle){var i=this._shapes,n=this.visualMapModel,o=i.handleThumbs,a=i.handleLabels;CO([0,1],function(r){var s=o[r];s.setStyle("fill",e.handlesColor[r]),s.position[1]=t[r];var l=Ao(i.handleLabelPoints[r],To(s,this.group));a[r].setStyle({x:l[0],y:l[1],text:n.formatValueText(this._dataInterval[r]),textVerticalAlign:"middle",textAlign:this._applyTransform("horizontal"===this._orient?0===r?"bottom":"top":"left",i.barGroup)})},this)}},_showIndicator:function(t,e,i,n){var o=this.visualMapModel,a=o.getExtent(),r=o.itemSize,s=[0,r[1]],l=DO(t,a,s,!0),u=this._shapes,h=u.indicator;if(h){h.position[1]=l,h.attr("invisible",!1),h.setShape("points",ox(!!i,n,l,r[1]));var c=this.getControllerVisual(t,"color",{convertOpacityToAlpha:!0});h.setStyle("fill",c);var d=Ao(u.indicatorLabelPoint,To(h,this.group)),f=u.indicatorLabel;f.attr("invisible",!1);var p=this._applyTransform("left",u.barGroup),g=this._orient;f.setStyle({text:(i||"")+o.formatValueText(e),textVerticalAlign:"horizontal"===g?p:"middle",textAlign:"horizontal"===g?"center":p,x:d[0],y:d[1]})}},_enableHoverLinkToSeries:function(){var t=this;this._shapes.barGroup.on("mousemove",function(e){if(t._hovering=!0,!t._dragging){var i=t.visualMapModel.itemSize,n=t._applyTransform([e.offsetX,e.offsetY],t._shapes.barGroup,!0,!0);n[1]=LO(kO(0,n[1]),i[1]),t._doHoverLinkToSeries(n[1],0<=n[0]&&n[0]<=i[0])}}).on("mouseout",function(){t._hovering=!1,!t._dragging&&t._clearHoverLinkToSeries()})},_enableHoverLinkFromSeries:function(){var t=this.api.getZr();this.visualMapModel.option.hoverLink?(t.on("mouseover",this._hoverLinkFromSeriesMouseOver,this),t.on("mouseout",this._hideIndicator,this)):this._clearHoverLinkFromSeries()},_doHoverLinkToSeries:function(t,e){var i=this.visualMapModel,n=i.itemSize;if(i.option.hoverLink){var o=[0,n[1]],a=i.getExtent();t=LO(kO(o[0],t),o[1]);var r=ax(i,a,o),s=[t-r,t+r],l=DO(t,o,a,!0),u=[DO(s[0],o,a,!0),DO(s[1],o,a,!0)];s[0]<o[0]&&(u[0]=-1/0),s[1]>o[1]&&(u[1]=1/0),e&&(u[0]===-1/0?this._showIndicator(l,u[1],"< ",r):u[1]===1/0?this._showIndicator(l,u[0],"> ",r):this._showIndicator(l,l,"≈ ",r));var h=this._hoverLinkDataIndices,c=[];(e||rx(i))&&(c=this._hoverLinkDataIndices=i.findTargetDataIndices(u));var d=Ri(h,c);this._dispatchHighDown("downplay",ex(d[0])),this._dispatchHighDown("highlight",ex(d[1]))}},_hoverLinkFromSeriesMouseOver:function(t){var e=t.target,i=this.visualMapModel;if(e&&null!=e.dataIndex){var n=this.ecModel.getSeriesByIndex(e.seriesIndex);if(i.isTargetSeries(n)){var o=n.getData(e.dataType),a=o.get(i.getDataDimension(o),e.dataIndex,!0);isNaN(a)||this._showIndicator(a,a)}}},_hideIndicator:function(){var t=this._shapes;t.indicator&&t.indicator.attr("invisible",!0),t.indicatorLabel&&t.indicatorLabel.attr("invisible",!0)},_clearHoverLinkToSeries:function(){this._hideIndicator();var t=this._hoverLinkDataIndices;this._dispatchHighDown("downplay",ex(t)),t.length=0},_clearHoverLinkFromSeries:function(){this._hideIndicator();var t=this.api.getZr();t.off("mouseover",this._hoverLinkFromSeriesMouseOver),t.off("mouseout",this._hideIndicator)},_applyTransform:function(t,e,i,n){var o=To(e,n?null:this.group);return RM[y(t)?"applyTransform":"transformDirection"](t,o,i)},_dispatchHighDown:function(t,e){e&&e.length&&this.api.dispatchAction({type:t,batch:e})},dispose:function(){this._clearHoverLinkFromSeries(),this._clearHoverLinkToSeries()},remove:function(){this._clearHoverLinkFromSeries(),this._clearHoverLinkToSeries()}});Os({type:"selectDataRange",event:"dataRangeSelected",update:"update"},function(t,e){e.eachComponent({mainType:"visualMap",query:t},function(e){e.setSelected(t.selected)})}),Ps(fO);var EO=MO.extend({type:"visualMap.piecewise",defaultOption:{selected:null,minOpen:!1,maxOpen:!1,align:"auto",itemWidth:20,itemHeight:14,itemSymbol:"roundRect",pieceList:null,categories:null,splitNumber:5,selectedMode:"multiple",itemGap:10,hoverLink:!0,showLabel:null},optionUpdated:function(t,e){EO.superApply(this,"optionUpdated",arguments),this._pieceList=[],this.resetExtent();var n=this._mode=this._determineMode();RO[this._mode].call(this),this._resetSelected(t,e);var o=this.option.categories;this.resetVisual(function(t,e){"categories"===n?(t.mappingMethod="category",t.categories=i(o)):(t.dataExtent=this.getExtent(),t.mappingMethod="piecewise",t.pieceList=f(this._pieceList,function(t){var t=i(t);return"inRange"!==e&&(t.visual=null),t}))})},completeVisualOption:function(){function t(t,e,i){return t&&t[e]&&(w(t[e])?t[e].hasOwnProperty(i):t[e]===i)}var e=this.option,i={},n=sL.listVisualTypes(),o=this.isCategory();d(e.pieces,function(t){d(n,function(e){t.hasOwnProperty(e)&&(i[e]=1)})}),d(i,function(i,n){var a=0;d(this.stateList,function(i){a|=t(e,i,n)||t(e.target,i,n)},this),!a&&d(this.stateList,function(t){(e[t]||(e[t]={}))[n]=gO.get(n,"inRange"===t?"active":"inactive",o)})},this),MO.prototype.completeVisualOption.apply(this,arguments)},_resetSelected:function(t,e){var i=this.option,n=this._pieceList,o=(e?i:t).selected||{};if(i.selected=o,d(n,function(t,e){var i=this.getSelectedMapKey(t);o.hasOwnProperty(i)||(o[i]=!0)},this),"single"===i.selectedMode){var a=!1;d(n,function(t,e){var i=this.getSelectedMapKey(t);o[i]&&(a?o[i]=!1:a=!0)},this)}},getSelectedMapKey:function(t){return"categories"===this._mode?t.value+"":t.index+""},getPieceList:function(){return this._pieceList},_determineMode:function(){var t=this.option;return t.pieces&&t.pieces.length>0?"pieces":this.option.categories?"categories":"splitNumber"},setSelected:function(t){this.option.selected=i(t)},getValueState:function(t){var e=sL.findPieceIndex(t,this._pieceList);return null!=e&&this.option.selected[this.getSelectedMapKey(this._pieceList[e])]?"inRange":"outOfRange"},findTargetDataIndices:function(t){var e=[];return this.eachTargetSeries(function(i){var n=[],o=i.getData();o.each(this.getDataDimension(o),function(e,i){sL.findPieceIndex(e,this._pieceList)===t&&n.push(i)},this),e.push({seriesId:i.id,dataIndex:n})},this),e},getRepresentValue:function(t){var e;if(this.isCategory())e=t.value;else if(null!=t.value)e=t.value;else{var i=t.interval||[];e=i[0]===-1/0&&i[1]===1/0?0:(i[0]+i[1])/2}return e},getVisualMeta:function(t){function e(e,a){var r=o.getRepresentValue({interval:e});a||(a=o.getValueState(r));var s=t(r,a);e[0]===-1/0?n[0]=s:e[1]===1/0?n[1]=s:i.push({value:e[0],color:s},{value:e[1],color:s})}if(!this.isCategory()){var i=[],n=[],o=this,a=this._pieceList.slice();if(a.length){var r=a[0].interval[0];r!==-1/0&&a.unshift({interval:[-1/0,r]}),(r=a[a.length-1].interval[1])!==1/0&&a.push({interval:[r,1/0]})}else a.push({interval:[-1/0,1/0]});var s=-1/0;return d(a,function(t){var i=t.interval;i&&(i[0]>s&&e([s,i[0]],"outOfRange"),e(i.slice()),s=i[1])},this),{stops:i,outerColors:n}}}}),RO={splitNumber:function(){var t=this.option,e=this._pieceList,i=Math.min(t.precision,20),n=this.getExtent(),o=t.splitNumber;o=Math.max(parseInt(o,10),1),t.splitNumber=o;for(var a=(n[1]-n[0])/o;+a.toFixed(i)!==a&&i<5;)i++;t.precision=i,a=+a.toFixed(i);var r=0;t.minOpen&&e.push({index:r++,interval:[-1/0,n[0]],close:[0,0]});for(var s=n[0],l=r+o;r<l;s+=a){var u=r===o-1?n[1]:s+a;e.push({index:r++,interval:[s,u],close:[1,1]})}t.maxOpen&&e.push({index:r++,interval:[n[1],1/0],close:[0,0]}),$o(e),d(e,function(t){t.text=this.formatValueText(t.interval)},this)},categories:function(){var t=this.option;d(t.categories,function(t){this._pieceList.push({text:this.formatValueText(t,!0),value:t})},this),lx(t,this._pieceList)},pieces:function(){var t=this.option,e=this._pieceList;d(t.pieces,function(t,i){w(t)||(t={value:t});var n={text:"",index:i};if(null!=t.label&&(n.text=t.label),t.hasOwnProperty("value")){var o=n.value=t.value;n.interval=[o,o],n.close=[1,1]}else{for(var a=n.interval=[],r=n.close=[0,0],s=[1,0,1],l=[-1/0,1/0],u=[],h=0;h<2;h++){for(var c=[["gte","gt","min"],["lte","lt","max"]][h],d=0;d<3&&null==a[h];d++)a[h]=t[c[d]],r[h]=s[d],u[h]=2===d;null==a[h]&&(a[h]=l[h])}u[0]&&a[1]===1/0&&(r[0]=0),u[1]&&a[0]===-1/0&&(r[1]=0),a[0]===a[1]&&r[0]&&r[1]&&(n.value=a[0])}n.visual=sL.retrieveVisuals(t),e.push(n)},this),lx(t,e),$o(e),d(e,function(t){var e=t.close,i=[["<","≤"][e[1]],[">","≥"][e[0]]];t.text=t.text||this.formatValueText(null!=t.value?t.value:t.interval,!1,i)},this)}};AO.extend({type:"visualMap.piecewise",doRender:function(){var t=this.group;t.removeAll();var e=this.visualMapModel,i=e.get("textGap"),n=e.textStyleModel,o=n.getFont(),a=n.getTextColor(),r=this._getItemAlign(),s=e.itemSize,l=this._getViewData(),u=l.endsText,h=T(e.get("showLabel",!0),!u);u&&this._renderEndsText(t,u[0],s,h,r),d(l.viewPieceList,function(n){var l=n.piece,u=new tb;u.onclick=m(this._onItemClick,this,l),this._enableHoverLink(u,n.indexInModelPieceList);var c=e.getRepresentValue(l);if(this._createItemSymbol(u,c,[0,0,s[0],s[1]]),h){var d=this.visualMapModel.getValueState(c);u.add(new aM({style:{x:"right"===r?-i:s[0]+i,y:s[1]/2,text:l.text,textVerticalAlign:"middle",textAlign:r,textFont:o,textFill:a,opacity:"outOfRange"===d?.5:1}}))}t.add(u)},this),u&&this._renderEndsText(t,u[1],s,h,r),aI(e.get("orient"),t,e.get("itemGap")),this.renderBackground(t),this.positionGroup(t)},_enableHoverLink:function(t,e){function i(t){var i=this.visualMapModel;i.option.hoverLink&&this.api.dispatchAction({type:t,batch:ex(i.findTargetDataIndices(e))})}t.on("mouseover",m(i,this,"highlight")).on("mouseout",m(i,this,"downplay"))},_getItemAlign:function(){var t=this.visualMapModel,e=t.option;if("vertical"===e.orient)return tx(t,this.api,t.itemSize);var i=e.align;return i&&"auto"!==i||(i="left"),i},_renderEndsText:function(t,e,i,n,o){if(e){var a=new tb,r=this.visualMapModel.textStyleModel;a.add(new aM({style:{x:n?"right"===o?i[0]:0:i[0]/2,y:i[1]/2,textVerticalAlign:"middle",textAlign:n?o:"center",text:e,textFont:r.getFont(),textFill:r.getTextColor()}})),t.add(a)}},_getViewData:function(){var t=this.visualMapModel,e=f(t.getPieceList(),function(t,e){return{piece:t,indexInModelPieceList:e}}),i=t.get("text"),n=t.get("orient"),o=t.get("inverse");return("horizontal"===n?o:!o)?e.reverse():i&&(i=i.slice().reverse()),{viewPieceList:e,endsText:i}},_createItemSymbol:function(t,e,i){t.add($l(this.getControllerVisual(e,"symbol"),i[0],i[1],i[2],i[3],this.getControllerVisual(e,"color")))},_onItemClick:function(t){var e=this.visualMapModel,n=e.option,o=i(n.selected),a=e.getSelectedMapKey(t);"single"===n.selectedMode?(o[a]=!0,d(o,function(t,e){o[e]=e===a})):o[a]=!o[a],this.api.dispatchAction({type:"selectDataRange",from:this.uid,visualMapId:this.visualMapModel.id,selected:o})}});Ps(fO);var zO=Qo,BO=ea,VO=Gs({type:"marker",dependencies:["series","grid","polar","geo"],init:function(t,e,i,n){this.mergeDefaultAndTheme(t,i),this.mergeOption(t,i,n.createdBySelf,!0)},isAnimationEnabled:function(){if(U_.node)return!1;var t=this.__hostSeries;return this.getShallow("animation")&&t&&t.isAnimationEnabled()},mergeOption:function(t,e,i,n){var o=this.constructor,r=this.mainType+"Model";i||e.eachSeries(function(t){var i=t.get(this.mainType,!0),s=t[r];i&&i.data?(s?s.mergeOption(i,e,!0):(n&&ux(i),d(i.data,function(t){t instanceof Array?(ux(t[0]),ux(t[1])):ux(t)}),a(s=new o(i,this,e),{mainType:this.mainType,seriesIndex:t.seriesIndex,name:t.name,createdBySelf:!0}),s.__hostSeries=t),t[r]=s):t[r]=null},this)},formatTooltip:function(t){var e=this.getData(),i=this.getRawValue(t),n=y(i)?f(i,zO).join(", "):zO(i),o=e.getName(t),a=BO(this.name);return(null!=i||o)&&(a+="<br />"),o&&(a+=BO(o),null!=i&&(a+=" : ")),null!=i&&(a+=BO(n)),a},getData:function(){return this._data},setData:function(t){this._data=t}});h(VO,HI),VO.extend({type:"markPoint",defaultOption:{zlevel:0,z:5,symbol:"pin",symbolSize:50,tooltip:{trigger:"item"},label:{show:!0,position:"inside"},itemStyle:{borderWidth:2},emphasis:{label:{show:!0}}}});var GO=l,FO=v,WO={min:FO(dx,"min"),max:FO(dx,"max"),average:FO(dx,"average")},HO=Fs({type:"marker",init:function(){this.markerGroupMap=R()},render:function(t,e,i){var n=this.markerGroupMap;n.each(function(t){t.__keep=!1});var o=this.type+"Model";e.eachSeries(function(t){var n=t[o];n&&this.renderSeries(t,n,e,i)},this),n.each(function(t){!t.__keep&&this.group.remove(t.group)},this)},renderSeries:function(){}});HO.extend({type:"markPoint",updateTransform:function(t,e,i){e.eachSeries(function(t){var e=t.markPointModel;e&&(xx(e.getData(),t,i),this.markerGroupMap.get(t.id).updateLayout(e))},this)},renderSeries:function(t,e,i,n){var o=t.coordinateSystem,a=t.id,r=t.getData(),s=this.markerGroupMap,l=s.get(a)||s.set(a,new Au),u=_x(o,t,e);e.setData(u),xx(e.getData(),t,n),u.each(function(t){var i=u.getItemModel(t),n=i.getShallow("symbolSize");"function"==typeof n&&(n=n(e.getRawValue(t),e.getDataParams(t))),u.setItemVisual(t,{symbolSize:n,color:i.get("itemStyle.color")||r.getVisual("color"),symbol:i.getShallow("symbol")})}),l.updateData(u),this.group.add(l.group),u.eachItemGraphicEl(function(t){t.traverse(function(t){t.dataModel=e})}),l.__keep=!0,l.group.silent=e.get("silent")||t.get("silent")}}),Ps(function(t){t.markPoint=t.markPoint||{}}),VO.extend({type:"markLine",defaultOption:{zlevel:0,z:5,symbol:["circle","arrow"],symbolSize:[8,16],precision:2,tooltip:{trigger:"item"},label:{show:!0,position:"end"},lineStyle:{type:"dashed"},emphasis:{label:{show:!0},lineStyle:{width:3}},animationEasing:"linear"}});var ZO=function(t,e,o,r){var s=t.getData(),l=r.type;if(!y(r)&&("min"===l||"max"===l||"average"===l||"median"===l||null!=r.xAxis||null!=r.yAxis)){var u,h;if(null!=r.yAxis||null!=r.xAxis)u=null!=r.yAxis?"y":"x",e.getAxis(u),h=T(r.yAxis,r.xAxis);else{var c=px(r,s,e,t);u=c.valueDataDim,c.valueAxis,h=yx(s,u,l)}var d="x"===u?0:1,f=1-d,p=i(r),g={};p.type=null,p.coord=[],g.coord=[],p.coord[f]=-1/0,g.coord[f]=1/0;var m=o.get("precision");m>=0&&"number"==typeof h&&(h=+h.toFixed(Math.min(m,20))),p.coord[d]=g.coord[d]=h,r=[p,g,{type:l,valueIndex:r.valueIndex,value:h}]}return r=[fx(t,r[0]),fx(t,r[1]),a({},r[2])],r[2].type=r[2].type||"",n(r[2],r[0]),n(r[2],r[1]),r};HO.extend({type:"markLine",updateTransform:function(t,e,i){e.eachSeries(function(t){var e=t.markLineModel;if(e){var n=e.getData(),o=e.__from,a=e.__to;o.each(function(e){Ix(o,e,!0,t,i),Ix(a,e,!1,t,i)}),n.each(function(t){n.setItemLayout(t,[o.getItemLayout(t),a.getItemLayout(t)])}),this.markerGroupMap.get(t.id).updateLayout()}},this)},renderSeries:function(t,e,i,n){function o(e,i,o){var a=e.getItemModel(i);Ix(e,i,o,t,n),e.setItemVisual(i,{symbolSize:a.get("symbolSize")||g[o?0:1],symbol:a.get("symbol",!0)||p[o?0:1],color:a.get("itemStyle.color")||s.getVisual("color")})}var a=t.coordinateSystem,r=t.id,s=t.getData(),l=this.markerGroupMap,u=l.get(r)||l.set(r,new rf);this.group.add(u.group);var h=Tx(a,t,e),c=h.from,d=h.to,f=h.line;e.__from=c,e.__to=d,e.setData(f);var p=e.get("symbol"),g=e.get("symbolSize");y(p)||(p=[p,p]),"number"==typeof g&&(g=[g,g]),h.from.each(function(t){o(c,t,!0),o(d,t,!1)}),f.each(function(t){var e=f.getItemModel(t).get("lineStyle.color");f.setItemVisual(t,{color:e||c.getItemVisual(t,"color")}),f.setItemLayout(t,[c.getItemLayout(t),d.getItemLayout(t)]),f.setItemVisual(t,{fromSymbolSize:c.getItemVisual(t,"symbolSize"),fromSymbol:c.getItemVisual(t,"symbol"),toSymbolSize:d.getItemVisual(t,"symbolSize"),toSymbol:d.getItemVisual(t,"symbol")})}),u.updateData(f),h.line.eachItemGraphicEl(function(t,i){t.traverse(function(t){t.dataModel=e})}),u.__keep=!0,u.group.silent=e.get("silent")||t.get("silent")}}),Ps(function(t){t.markLine=t.markLine||{}}),VO.extend({type:"markArea",defaultOption:{zlevel:0,z:1,tooltip:{trigger:"item"},animation:!1,label:{show:!0,position:"top"},itemStyle:{borderWidth:0},emphasis:{label:{show:!0,position:"top"}}}});var UO=function(t,e,i,n){var a=fx(t,n[0]),r=fx(t,n[1]),s=T,l=a.coord,u=r.coord;l[0]=s(l[0],-1/0),l[1]=s(l[1],-1/0),u[0]=s(u[0],1/0),u[1]=s(u[1],1/0);var h=o([{},a,r]);return h.coord=[a.coord,r.coord],h.x0=a.x,h.y0=a.y,h.x1=r.x,h.y1=r.y,h},XO=[["x0","y0"],["x1","y0"],["x1","y1"],["x0","y1"]];HO.extend({type:"markArea",updateTransform:function(t,e,i){e.eachSeries(function(t){var e=t.markAreaModel;if(e){var n=e.getData();n.each(function(e){var o=f(XO,function(o){return Lx(n,e,o,t,i)});n.setItemLayout(e,o),n.getItemGraphicEl(e).setShape("points",o)})}},this)},renderSeries:function(t,e,i,n){var o=t.coordinateSystem,a=t.id,s=t.getData(),l=this.markerGroupMap,u=l.get(a)||l.set(a,{group:new tb});this.group.add(u.group),u.__keep=!0;var h=kx(o,t,e);e.setData(h),h.each(function(e){h.setItemLayout(e,f(XO,function(i){return Lx(h,e,i,t,n)})),h.setItemVisual(e,{color:s.getVisual("color")})}),h.diff(u.__data).add(function(t){var e=new fM({shape:{points:h.getItemLayout(t)}});h.setItemGraphicEl(t,e),u.group.add(e)}).update(function(t,i){var n=u.__data.getItemGraphicEl(i);Mo(n,{shape:{points:h.getItemLayout(t)}},e,t),u.group.add(n),h.setItemGraphicEl(t,n)}).remove(function(t){var e=u.__data.getItemGraphicEl(t);u.group.remove(e)}).execute(),h.eachItemGraphicEl(function(t,i){var n=h.getItemModel(i),o=n.getModel("label"),a=n.getModel("emphasis.label"),s=h.getItemVisual(i,"color");t.useStyle(r(n.getModel("itemStyle").getItemStyle(),{fill:Yt(s,.4),stroke:s})),t.hoverStyle=n.getModel("emphasis.itemStyle").getItemStyle(),po(t.style,t.hoverStyle,o,a,{labelFetcher:e,labelDataIndex:i,defaultText:h.getName(i)||"",isRectText:!0,autoColor:s}),co(t,{}),t.dataModel=e}),u.__data=h,u.group.silent=e.get("silent")||t.get("silent")}}),Ps(function(t){t.markArea=t.markArea||{}});sI.registerSubTypeDefaulter("timeline",function(){return"slider"}),Os({type:"timelineChange",event:"timelineChanged",update:"prepareAndUpdate"},function(t,e){var i=e.getComponent("timeline");return i&&null!=t.currentIndex&&(i.setCurrentIndex(t.currentIndex),!i.get("loop",!0)&&i.isIndexMax()&&i.setPlayState(!1)),e.resetOption("timeline"),r({currentIndex:i.option.currentIndex},t)}),Os({type:"timelinePlayChange",event:"timelinePlayChanged",update:"update"},function(t,e){var i=e.getComponent("timeline");i&&null!=t.playState&&i.setPlayState(t.playState)});var jO=sI.extend({type:"timeline",layoutMode:"box",defaultOption:{zlevel:0,z:4,show:!0,axisType:"time",realtime:!0,left:"20%",top:null,right:"20%",bottom:0,width:null,height:40,padding:5,controlPosition:"left",autoPlay:!1,rewind:!1,loop:!0,playInterval:2e3,currentIndex:0,itemStyle:{},label:{color:"#000"},data:[]},init:function(t,e,i){this._data,this._names,this.mergeDefaultAndTheme(t,i),this._initData()},mergeOption:function(t){jO.superApply(this,"mergeOption",arguments),this._initData()},setCurrentIndex:function(t){null==t&&(t=this.option.currentIndex);var e=this._data.count();this.option.loop?t=(t%e+e)%e:(t>=e&&(t=e-1),t<0&&(t=0)),this.option.currentIndex=t},getCurrentIndex:function(){return this.option.currentIndex},isIndexMax:function(){return this.getCurrentIndex()>=this._data.count()-1},setPlayState:function(t){this.option.autoPlay=!!t},getPlayState:function(){return!!this.option.autoPlay},_initData:function(){var t=this.option,e=t.data||[],n=t.axisType,o=this._names=[];if("category"===n){var a=[];d(e,function(t,e){var n,r=Li(t);w(t)?(n=i(t)).value=e:n=e,a.push(n),_(r)||null!=r&&!isNaN(r)||(r=""),o.push(r+"")}),e=a}var r={category:"ordinal",time:"time"}[n]||"number";(this._data=new pA([{name:"value",type:r}],this)).initData(e,o)},getData:function(){return this._data},getCategories:function(){if("category"===this.get("axisType"))return this._names.slice()}});h(jO.extend({type:"timeline.slider",defaultOption:{backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderWidth:0,orient:"horizontal",inverse:!1,tooltip:{trigger:"item"},symbol:"emptyCircle",symbolSize:10,lineStyle:{show:!0,width:2,color:"#304654"},label:{position:"auto",show:!0,interval:"auto",rotate:0,color:"#304654"},itemStyle:{color:"#304654",borderWidth:1},checkpointStyle:{symbol:"circle",symbolSize:13,color:"#c23531",borderWidth:5,borderColor:"rgba(194,53,49, 0.5)",animation:!0,animationDuration:300,animationEasing:"quinticInOut"},controlStyle:{show:!0,showPlayBtn:!0,showPrevBtn:!0,showNextBtn:!0,itemSize:22,itemGap:12,position:"left",playIcon:"path://M31.6,53C17.5,53,6,41.5,6,27.4S17.5,1.8,31.6,1.8C45.7,1.8,57.2,13.3,57.2,27.4S45.7,53,31.6,53z M31.6,3.3 C18.4,3.3,7.5,14.1,7.5,27.4c0,13.3,10.8,24.1,24.1,24.1C44.9,51.5,55.7,40.7,55.7,27.4C55.7,14.1,44.9,3.3,31.6,3.3z M24.9,21.3 c0-2.2,1.6-3.1,3.5-2l10.5,6.1c1.899,1.1,1.899,2.9,0,4l-10.5,6.1c-1.9,1.1-3.5,0.2-3.5-2V21.3z",stopIcon:"path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z",nextIcon:"path://M18.6,50.8l22.5-22.5c0.2-0.2,0.3-0.4,0.3-0.7c0-0.3-0.1-0.5-0.3-0.7L18.7,4.4c-0.1-0.1-0.2-0.3-0.2-0.5 c0-0.4,0.3-0.8,0.8-0.8c0.2,0,0.5,0.1,0.6,0.3l23.5,23.5l0,0c0.2,0.2,0.3,0.4,0.3,0.7c0,0.3-0.1,0.5-0.3,0.7l-0.1,0.1L19.7,52 c-0.1,0.1-0.3,0.2-0.5,0.2c-0.4,0-0.8-0.3-0.8-0.8C18.4,51.2,18.5,51,18.6,50.8z",prevIcon:"path://M43,52.8L20.4,30.3c-0.2-0.2-0.3-0.4-0.3-0.7c0-0.3,0.1-0.5,0.3-0.7L42.9,6.4c0.1-0.1,0.2-0.3,0.2-0.5 c0-0.4-0.3-0.8-0.8-0.8c-0.2,0-0.5,0.1-0.6,0.3L18.3,28.8l0,0c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.3,0.1,0.5,0.3,0.7l0.1,0.1L41.9,54 c0.1,0.1,0.3,0.2,0.5,0.2c0.4,0,0.8-0.3,0.8-0.8C43.2,53.2,43.1,53,43,52.8z",color:"#304654",borderColor:"#304654",borderWidth:1},emphasis:{label:{show:!0,color:"#c23531"},itemStyle:{color:"#c23531"},controlStyle:{color:"#c23531",borderColor:"#c23531",borderWidth:2}},data:[]}}),HI);var YO=YI.extend({type:"timeline"}),qO=function(t,e,i,n){iD.call(this,t,e,i),this.type=n||"value",this.model=null};qO.prototype={constructor:qO,getLabelModel:function(){return this.model.getModel("label")},isHorizontal:function(){return"horizontal"===this.model.get("orient")}},u(qO,iD);var KO=m,$O=d,JO=Math.PI;YO.extend({type:"timeline.slider",init:function(t,e){this.api=e,this._axis,this._viewRect,this._timer,this._currentPointer,this._mainGroup,this._labelGroup},render:function(t,e,i,n){if(this.model=t,this.api=i,this.ecModel=e,this.group.removeAll(),t.get("show",!0)){var o=this._layout(t,i),a=this._createGroup("mainGroup"),r=this._createGroup("labelGroup"),s=this._axis=this._createAxis(o,t);t.formatTooltip=function(t){return ea(s.scale.getLabel(t))},$O(["AxisLine","AxisTick","Control","CurrentPointer"],function(e){this["_render"+e](o,a,s,t)},this),this._renderAxisLabel(o,r,s,t),this._position(o,t)}this._doPlayStop()},remove:function(){this._clearTimer(),this.group.removeAll()},dispose:function(){this._clearTimer()},_layout:function(t,e){var i=t.get("label.position"),n=t.get("orient"),o=Ex(t,e);null==i||"auto"===i?i="horizontal"===n?o.y+o.height/2<e.getHeight()/2?"-":"+":o.x+o.width/2<e.getWidth()/2?"+":"-":isNaN(i)&&(i={horizontal:{top:"-",bottom:"+"},vertical:{left:"-",right:"+"}}[n][i]);var a={horizontal:"center",vertical:i>=0||"+"===i?"left":"right"},r={horizontal:i>=0||"+"===i?"top":"bottom",vertical:"middle"},s={horizontal:0,vertical:JO/2},l="vertical"===n?o.height:o.width,u=t.getModel("controlStyle"),h=u.get("show",!0),c=h?u.get("itemSize"):0,d=h?u.get("itemGap"):0,f=c+d,p=t.get("label.rotate")||0;p=p*JO/180;var g,m,v,y,x=u.get("position",!0),_=h&&u.get("showPlayBtn",!0),w=h&&u.get("showPrevBtn",!0),b=h&&u.get("showNextBtn",!0),S=0,M=l;return"left"===x||"bottom"===x?(_&&(g=[0,0],S+=f),w&&(m=[S,0],S+=f),b&&(v=[M-c,0],M-=f)):(_&&(g=[M-c,0],M-=f),w&&(m=[0,0],S+=f),b&&(v=[M-c,0],M-=f)),y=[S,M],t.get("inverse")&&y.reverse(),{viewRect:o,mainLength:l,orient:n,rotation:s[n],labelRotation:p,labelPosOpt:i,labelAlign:t.get("label.align")||a[n],labelBaseline:t.get("label.verticalAlign")||t.get("label.baseline")||r[n],playPosition:g,prevBtnPosition:m,nextBtnPosition:v,axisExtent:y,controlSize:c,controlGap:d}},_position:function(t,e){function i(t){var e=t.position;t.origin=[c[0][0]-e[0],c[1][0]-e[1]]}function n(t){return[[t.x,t.x+t.width],[t.y,t.y+t.height]]}function o(t,e,i,n,o){t[n]+=i[n][o]-e[n][o]}var a=this._mainGroup,r=this._labelGroup,s=t.viewRect;if("vertical"===t.orient){var l=xt(),u=s.x,h=s.y+s.height;St(l,l,[-u,-h]),Mt(l,l,-JO/2),St(l,l,[u,h]),(s=s.clone()).applyTransform(l)}var c=n(s),d=n(a.getBoundingRect()),f=n(r.getBoundingRect()),p=a.position,g=r.position;g[0]=p[0]=c[0][0];var m=t.labelPosOpt;if(isNaN(m))o(p,d,c,1,v="+"===m?0:1),o(g,f,c,1,1-v);else{var v=m>=0?0:1;o(p,d,c,1,v),g[1]=p[1]+m}a.attr("position",p),r.attr("position",g),a.rotation=r.rotation=t.rotation,i(a),i(r)},_createAxis:function(t,e){var i=e.getData(),n=e.get("axisType"),o=Wl(e,n);o.getTicks=function(){return i.mapArray(["value"],function(t){return t})};var a=i.getDataExtent("value");o.setExtent(a[0],a[1]),o.niceTicks();var r=new qO("value",o,t.axisExtent,n);return r.model=e,r},_createGroup:function(t){var e=this["_"+t]=new tb;return this.group.add(e),e},_renderAxisLine:function(t,e,i,n){var o=i.getExtent();n.get("lineStyle.show")&&e.add(new xM({shape:{x1:o[0],y1:0,x2:o[1],y2:0},style:a({lineCap:"round"},n.getModel("lineStyle").getLineStyle()),silent:!0,z2:1}))},_renderAxisTick:function(t,e,i,n){var o=n.getData(),a=i.scale.getTicks();$O(a,function(t){var a=i.dataToCoord(t),r=o.getItemModel(t),s=r.getModel("itemStyle"),l=r.getModel("emphasis.itemStyle"),u={position:[a,0],onclick:KO(this._changeTimeline,this,t)},h=zx(r,s,e,u);co(h,l.getItemStyle()),r.get("tooltip")?(h.dataIndex=t,h.dataModel=n):h.dataIndex=h.dataModel=null},this)},_renderAxisLabel:function(t,e,i,n){if(i.getLabelModel().get("show")){var o=n.getData(),a=i.getViewLabels();$O(a,function(n){var a=n.tickValue,r=o.getItemModel(a),s=r.getModel("label"),l=r.getModel("emphasis.label"),u=i.dataToCoord(n.tickValue),h=new aM({position:[u,0],rotation:t.labelRotation-t.rotation,onclick:KO(this._changeTimeline,this,a),silent:!1});go(h.style,s,{text:n.formattedLabel,textAlign:t.labelAlign,textVerticalAlign:t.labelBaseline}),e.add(h),co(h,go({},l))},this)}},_renderControl:function(t,e,i,n){function o(t,i,o,h){if(t){var c=Rx(n,i,u,{position:t,origin:[a/2,0],rotation:h?-r:0,rectHover:!0,style:s,onclick:o});e.add(c),co(c,l)}}var a=t.controlSize,r=t.rotation,s=n.getModel("controlStyle").getItemStyle(),l=n.getModel("emphasis.controlStyle").getItemStyle(),u=[0,-a/2,a,a],h=n.getPlayState(),c=n.get("inverse",!0);o(t.nextBtnPosition,"controlStyle.nextIcon",KO(this._changeTimeline,this,c?"-":"+")),o(t.prevBtnPosition,"controlStyle.prevIcon",KO(this._changeTimeline,this,c?"+":"-")),o(t.playPosition,"controlStyle."+(h?"stopIcon":"playIcon"),KO(this._handlePlayClick,this,!h),!0)},_renderCurrentPointer:function(t,e,i,n){var o=n.getData(),a=n.getCurrentIndex(),r=o.getItemModel(a).getModel("checkpointStyle"),s=this,l={onCreate:function(t){t.draggable=!0,t.drift=KO(s._handlePointerDrag,s),t.ondragend=KO(s._handlePointerDragend,s),Bx(t,a,i,n,!0)},onUpdate:function(t){Bx(t,a,i,n)}};this._currentPointer=zx(r,r,this._mainGroup,{},this._currentPointer,l)},_handlePlayClick:function(t){this._clearTimer(),this.api.dispatchAction({type:"timelinePlayChange",playState:t,from:this.uid})},_handlePointerDrag:function(t,e,i){this._clearTimer(),this._pointerChangeTimeline([i.offsetX,i.offsetY])},_handlePointerDragend:function(t){this._pointerChangeTimeline([t.offsetX,t.offsetY],!0)},_pointerChangeTimeline:function(t,e){var i=this._toAxisCoord(t)[0],n=Go(this._axis.getExtent().slice());i>n[1]&&(i=n[1]),i<n[0]&&(i=n[0]),this._currentPointer.position[0]=i,this._currentPointer.dirty();var o=this._findNearestTick(i),a=this.model;(e||o!==a.getCurrentIndex()&&a.get("realtime"))&&this._changeTimeline(o)},_doPlayStop:function(){this._clearTimer(),this.model.getPlayState()&&(this._timer=setTimeout(KO(function(){var t=this.model;this._changeTimeline(t.getCurrentIndex()+(t.get("rewind",!0)?-1:1))},this),this.model.get("playInterval")))},_toAxisCoord:function(t){return Ao(t,this._mainGroup.getLocalTransform(),!0)},_findNearestTick:function(t){var e,i=this.model.getData(),n=1/0,o=this._axis;return i.each(["value"],function(i,a){var r=o.dataToCoord(i),s=Math.abs(r-t);s<n&&(n=s,e=a)}),e},_clearTimer:function(){this._timer&&(clearTimeout(this._timer),this._timer=null)},_changeTimeline:function(t){var e=this.model.getCurrentIndex();"+"===t?t=e+1:"-"===t&&(t=e-1),this.api.dispatchAction({type:"timelineChange",currentIndex:t,from:this.uid})}}),Ps(function(t){var e=t&&t.timeline;y(e)||(e=e?[e]:[]),d(e,function(t){t&&Px(t)})});var QO=Gs({type:"toolbox",layoutMode:{type:"box",ignoreSize:!0},optionUpdated:function(){QO.superApply(this,"optionUpdated",arguments),d(this.option.feature,function(t,e){var i=Ay(e);i&&n(t,i.defaultOption)})},defaultOption:{show:!0,z:6,zlevel:0,orient:"horizontal",left:"right",top:"top",backgroundColor:"transparent",borderColor:"#ccc",borderRadius:0,borderWidth:0,padding:5,itemSize:15,itemGap:8,showTitle:!0,iconStyle:{borderColor:"#666",color:"none"},emphasis:{iconStyle:{borderColor:"#3E98C5"}}}});Fs({type:"toolbox",render:function(t,e,i,n){function o(o,r){var s,c=h[o],d=h[r],f=new Po(l[c],t,t.ecModel);if(c&&!d){if(Vx(c))s={model:f,onclick:f.option.onclick,featureName:c};else{var p=Ay(c);if(!p)return;s=new p(f,e,i)}u[c]=s}else{if(!(s=u[d]))return;s.model=f,s.ecModel=e,s.api=i}c||!d?f.get("show")&&!s.unusable?(a(f,s,c),f.setIconStatus=function(t,e){var i=this.option,n=this.iconPaths;i.iconStatus=i.iconStatus||{},i.iconStatus[t]=e,n[t]&&n[t].trigger(e)},s.render&&s.render(f,e,i,n)):s.remove&&s.remove(e,i):s.dispose&&s.dispose(e,i)}function a(n,o,a){var l=n.getModel("iconStyle"),u=n.getModel("emphasis.iconStyle"),h=o.getIcons?o.getIcons():n.get("icon"),c=n.get("title")||{};if("string"==typeof h){var f=h,p=c;c={},(h={})[a]=f,c[a]=p}var g=n.iconPaths={};d(h,function(a,h){var d=ko(a,{},{x:-s/2,y:-s/2,width:s,height:s});d.setStyle(l.getItemStyle()),d.hoverStyle=u.getItemStyle(),co(d),t.get("showTitle")&&(d.__title=c[h],d.on("mouseover",function(){var t=u.getItemStyle();d.setStyle({text:c[h],textPosition:t.textPosition||"bottom",textFill:t.fill||t.stroke||"#000",textAlign:t.textAlign||"center"})}).on("mouseout",function(){d.setStyle({textFill:null})})),d.trigger(n.get("iconStatus."+h)||"normal"),r.add(d),d.on("click",m(o.onclick,o,e,i,h)),g[h]=d})}var r=this.group;if(r.removeAll(),t.get("show")){var s=+t.get("itemSize"),l=t.get("feature")||{},u=this._features||(this._features={}),h=[];d(l,function(t,e){h.push(e)}),new Us(this._featureNames||[],h).add(o).update(o).remove(v(o,null)).execute(),this._featureNames=h,_v(r,t,i),r.add(wv(r.getBoundingRect(),t)),r.eachChild(function(t){var e=t.__title,n=t.hoverStyle;if(n&&e){var o=ke(e,Xe(n)),a=t.position[0]+r.position[0],l=!1;t.position[1]+r.position[1]+s+o.height>i.getHeight()&&(n.textPosition="top",l=!0);var u=l?-5-o.height:s+8;a+o.width/2>i.getWidth()?(n.textPosition=["100%",u],n.textAlign="right"):a-o.width/2<0&&(n.textPosition=[0,u],n.textAlign="left")}})}},updateView:function(t,e,i,n){d(this._features,function(t){t.updateView&&t.updateView(t.model,e,i,n)})},remove:function(t,e){d(this._features,function(i){i.remove&&i.remove(t,e)}),this.group.removeAll()},dispose:function(t,e){d(this._features,function(i){i.dispose&&i.dispose(t,e)})}});var tE=aT.toolbox.saveAsImage;Gx.defaultOption={show:!0,icon:"M4.7,22.9L29.3,45.5L54.7,23.4M4.6,43.6L4.6,58L53.8,58L53.8,43.6M29.2,45.1L29.2,0",title:tE.title,type:"png",name:"",excludeComponents:["toolbox"],pixelRatio:1,lang:tE.lang.slice()},Gx.prototype.unusable=!U_.canvasSupported,Gx.prototype.onclick=function(t,e){var i=this.model,n=i.get("name")||t.get("title.0.text")||"echarts",o=document.createElement("a"),a=i.get("type",!0)||"png";o.download=n+"."+a,o.target="_blank";var r=e.getConnectedDataURL({type:a,backgroundColor:i.get("backgroundColor",!0)||t.get("backgroundColor")||"#fff",excludeComponents:i.get("excludeComponents"),pixelRatio:i.get("pixelRatio")});if(o.href=r,"function"!=typeof MouseEvent||U_.browser.ie||U_.browser.edge)if(window.navigator.msSaveOrOpenBlob){for(var s=atob(r.split(",")[1]),l=s.length,u=new Uint8Array(l);l--;)u[l]=s.charCodeAt(l);var h=new Blob([u]);window.navigator.msSaveOrOpenBlob(h,n+"."+a)}else{var c=i.get("lang"),d='<body style="margin:0;"><img src="'+r+'" style="max-width:100%;" title="'+(c&&c[0]||"")+'" /></body>';window.open().document.write(d)}else{var f=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!1});o.dispatchEvent(f)}},Ty("saveAsImage",Gx);var eE=aT.toolbox.magicType;Fx.defaultOption={show:!0,type:[],icon:{line:"M4.1,28.9h7.1l9.3-22l7.4,38l9.7-19.7l3,12.8h14.9M4.1,58h51.4",bar:"M6.7,22.9h10V48h-10V22.9zM24.9,13h10v35h-10V13zM43.2,2h10v46h-10V2zM3.1,58h53.7",stack:"M8.2,38.4l-8.4,4.1l30.6,15.3L60,42.5l-8.1-4.1l-21.5,11L8.2,38.4z M51.9,30l-8.1,4.2l-13.4,6.9l-13.9-6.9L8.2,30l-8.4,4.2l8.4,4.2l22.2,11l21.5-11l8.1-4.2L51.9,30z M51.9,21.7l-8.1,4.2L35.7,30l-5.3,2.8L24.9,30l-8.4-4.1l-8.3-4.2l-8.4,4.2L8.2,30l8.3,4.2l13.9,6.9l13.4-6.9l8.1-4.2l8.1-4.1L51.9,21.7zM30.4,2.2L-0.2,17.5l8.4,4.1l8.3,4.2l8.4,4.2l5.5,2.7l5.3-2.7l8.1-4.2l8.1-4.2l8.1-4.1L30.4,2.2z",tiled:"M2.3,2.2h22.8V25H2.3V2.2z M35,2.2h22.8V25H35V2.2zM2.3,35h22.8v22.8H2.3V35z M35,35h22.8v22.8H35V35z"},title:i(eE.title),option:{},seriesIndex:{}};var iE=Fx.prototype;iE.getIcons=function(){var t=this.model,e=t.get("icon"),i={};return d(t.get("type"),function(t){e[t]&&(i[t]=e[t])}),i};var nE={line:function(t,e,i,o){if("bar"===t)return n({id:e,type:"line",data:i.get("data"),stack:i.get("stack"),markPoint:i.get("markPoint"),markLine:i.get("markLine")},o.get("option.line")||{},!0)},bar:function(t,e,i,o){if("line"===t)return n({id:e,type:"bar",data:i.get("data"),stack:i.get("stack"),markPoint:i.get("markPoint"),markLine:i.get("markLine")},o.get("option.bar")||{},!0)},stack:function(t,e,i,o){if("line"===t||"bar"===t)return n({id:e,stack:"__ec_magicType_stack__"},o.get("option.stack")||{},!0)},tiled:function(t,e,i,o){if("line"===t||"bar"===t)return n({id:e,stack:""},o.get("option.tiled")||{},!0)}},oE=[["line","bar"],["stack","tiled"]];iE.onclick=function(t,e,i){var n=this.model,o=n.get("seriesIndex."+i);if(nE[i]){var a={series:[]};d(oE,function(t){l(t,i)>=0&&d(t,function(t){n.setIconStatus(t,"normal")})}),n.setIconStatus(i,"emphasis"),t.eachComponent({mainType:"series",query:null==o?null:{seriesIndex:o}},function(e){var o=e.subType,s=e.id,l=nE[i](o,s,e,n);l&&(r(l,e.option),a.series.push(l));var u=e.coordinateSystem;if(u&&"cartesian2d"===u.type&&("line"===i||"bar"===i)){var h=u.getAxesByScale("ordinal")[0];if(h){var c=h.dim+"Axis",d=t.queryComponents({mainType:c,index:e.get(name+"Index"),id:e.get(name+"Id")})[0].componentIndex;a[c]=a[c]||[];for(var f=0;f<=d;f++)a[c][d]=a[c][d]||{};a[c][d].boundaryGap="bar"===i}}}),e.dispatchAction({type:"changeMagicType",currentType:i,newOption:a})}},Os({type:"changeMagicType",event:"magicTypeChanged",update:"prepareAndUpdate"},function(t,e){e.mergeOption(t.newOption)}),Ty("magicType",Fx);var aE=aT.toolbox.dataView,rE=new Array(60).join("-"),sE="\t",lE=new RegExp("["+sE+"]+","g");$x.defaultOption={show:!0,readOnly:!1,optionToContent:null,contentToOption:null,icon:"M17.5,17.3H33 M17.5,17.3H33 M45.4,29.5h-28 M11.5,2v56H51V14.8L38.4,2H11.5z M38.4,2.2v12.7H51 M45.4,41.7h-28",title:i(aE.title),lang:i(aE.lang),backgroundColor:"#fff",textColor:"#000",textareaColor:"#fff",textareaBorderColor:"#333",buttonColor:"#c23531",buttonTextColor:"#fff"},$x.prototype.onclick=function(t,e){function i(){n.removeChild(a),x._dom=null}var n=e.getDom(),o=this.model;this._dom&&n.removeChild(this._dom);var a=document.createElement("div");a.style.cssText="position:absolute;left:5px;top:5px;bottom:5px;right:5px;",a.style.backgroundColor=o.get("backgroundColor")||"#fff";var r=document.createElement("h4"),s=o.get("lang")||[];r.innerHTML=s[0]||o.get("title"),r.style.cssText="margin: 10px 20px;",r.style.color=o.get("textColor");var l=document.createElement("div"),u=document.createElement("textarea");l.style.cssText="display:block;width:100%;overflow:auto;";var h=o.get("optionToContent"),c=o.get("contentToOption"),d=Ux(t);if("function"==typeof h){var f=h(e.getOption());"string"==typeof f?l.innerHTML=f:M(f)&&l.appendChild(f)}else l.appendChild(u),u.readOnly=o.get("readOnly"),u.style.cssText="width:100%;height:100%;font-family:monospace;font-size:14px;line-height:1.6rem;",u.style.color=o.get("textColor"),u.style.borderColor=o.get("textareaBorderColor"),u.style.backgroundColor=o.get("textareaColor"),u.value=d.value;var p=d.meta,g=document.createElement("div");g.style.cssText="position:absolute;bottom:0;left:0;right:0;";var m="float:right;margin-right:20px;border:none;cursor:pointer;padding:2px 5px;font-size:12px;border-radius:3px",v=document.createElement("div"),y=document.createElement("div");m+=";background-color:"+o.get("buttonColor"),m+=";color:"+o.get("buttonTextColor");var x=this;ht(v,"click",i),ht(y,"click",function(){var t;try{t="function"==typeof c?c(l,e.getOption()):Kx(u.value,p)}catch(t){throw i(),new Error("Data view format error "+t)}t&&e.dispatchAction({type:"changeDataView",newOption:t}),i()}),v.innerHTML=s[1],y.innerHTML=s[2],y.style.cssText=m,v.style.cssText=m,!o.get("readOnly")&&g.appendChild(y),g.appendChild(v),ht(u,"keydown",function(t){if(9===(t.keyCode||t.which)){var e=this.value,i=this.selectionStart,n=this.selectionEnd;this.value=e.substring(0,i)+sE+e.substring(n),this.selectionStart=this.selectionEnd=i+1,mw(t)}}),a.appendChild(r),a.appendChild(l),a.appendChild(g),l.style.height=n.clientHeight-80+"px",n.appendChild(a),this._dom=a},$x.prototype.remove=function(t,e){this._dom&&e.getDom().removeChild(this._dom)},$x.prototype.dispose=function(t,e){this.remove(t,e)},Ty("dataView",$x),Os({type:"changeDataView",event:"dataViewChanged",update:"prepareAndUpdate"},function(t,e){var i=[];d(t.newOption.series,function(t){var n=e.getSeriesByName(t.name)[0];if(n){var o=n.get("data");i.push({name:t.name,data:Jx(t.data,o)})}else i.push(a({type:"scatter"},t))}),e.mergeOption(r({series:i},t.newOption))});var uE=d,hE="\0_ec_hist_store";KN.extend({type:"dataZoom.select"}),$N.extend({type:"dataZoom.select"});var cE=aT.toolbox.dataZoom,dE=d,fE="\0_ec_\0toolbox-dataZoom_";o_.defaultOption={show:!0,icon:{zoom:"M0,13.5h26.9 M13.5,26.9V0 M32.1,13.5H58V58H13.5 V32.1",back:"M22,1.4L9.9,13.5l12.3,12.3 M10.3,13.5H54.9v44.6 H10.3v-26"},title:i(cE.title)};var pE=o_.prototype;pE.render=function(t,e,i,n){this.model=t,this.ecModel=e,this.api=i,s_(t,e,this,n,i),r_(t,e)},pE.onclick=function(t,e,i){gE[i].call(this)},pE.remove=function(t,e){this._brushController.unmount()},pE.dispose=function(t,e){this._brushController.dispose()};var gE={zoom:function(){var t=!this._isZoomActive;this.api.dispatchAction({type:"takeGlobalCursor",key:"dataZoomSelect",dataZoomSelectActive:t})},back:function(){this._dispatchZoomAction(t_(this.ecModel))}};pE._onBrush=function(t,e){function i(t,e,i){var r=e.getAxis(t),s=r.model,l=n(t,s,a),u=l.findRepresentativeAxisProxy(s).getMinMaxSpan();null==u.minValueSpan&&null==u.maxValueSpan||(i=qL(0,i.slice(),r.scale.getExtent(),0,u.minValueSpan,u.maxValueSpan)),l&&(o[l.id]={dataZoomId:l.id,startValue:i[0],endValue:i[1]})}function n(t,e,i){var n;return i.eachComponent({mainType:"dataZoom",subType:"select"},function(i){i.getAxisModel(t,e.componentIndex)&&(n=i)}),n}if(e.isEnd&&t.length){var o={},a=this.ecModel;this._brushController.updateCovers([]),new hy(a_(this.model.option),a,{include:["grid"]}).matchOutputRanges(t,a,function(t,e,n){if("cartesian2d"===n.type){var o=t.brushType;"rect"===o?(i("x",n,e[0]),i("y",n,e[1])):i({lineX:"x",lineY:"y"}[o],n,e)}}),Qx(a,o),this._dispatchZoomAction(o)}},pE._dispatchZoomAction=function(t){var e=[];dE(t,function(t,n){e.push(i(t))}),e.length&&this.api.dispatchAction({type:"dataZoom",from:this.uid,batch:e})},Ty("dataZoom",o_),Ps(function(t){function e(t,e){if(e){var o=t+"Index",a=e[o];null==a||"all"===a||y(a)||(a=!1===a||"none"===a?[]:[a]),i(t,function(e,i){if(null==a||"all"===a||-1!==l(a,i)){var r={type:"select",$fromToolbox:!0,id:fE+t+i};r[o]=i,n.push(r)}})}}function i(e,i){var n=t[e];y(n)||(n=n?[n]:[]),dE(n,i)}if(t){var n=t.dataZoom||(t.dataZoom=[]);y(n)||(t.dataZoom=n=[n]);var o=t.toolbox;if(o&&(y(o)&&(o=o[0]),o&&o.feature)){var a=o.feature.dataZoom;e("xAxis",a),e("yAxis",a)}}});var mE=aT.toolbox.restore;l_.defaultOption={show:!0,icon:"M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5",title:mE.title},l_.prototype.onclick=function(t,e,i){e_(t),e.dispatchAction({type:"restore",from:this.uid})},Ty("restore",l_),Os({type:"restore",event:"restore",update:"prepareAndUpdate"},function(t,e){e.resetOption("recreate")});var vE,yE="urn:schemas-microsoft-com:vml",xE="undefined"==typeof window?null:window,_E=!1,wE=xE&&xE.document;if(wE&&!U_.canvasSupported)try{!wE.namespaces.zrvml&&wE.namespaces.add("zrvml",yE),vE=function(t){return wE.createElement("<zrvml:"+t+' class="zrvml">')}}catch(t){vE=function(t){return wE.createElement("<"+t+' xmlns="'+yE+'" class="zrvml">')}}var bE=OS.CMD,SE=Math.round,ME=Math.sqrt,IE=Math.abs,TE=Math.cos,AE=Math.sin,DE=Math.max;if(!U_.canvasSupported){var CE=21600,LE=CE/2,kE=function(t){t.style.cssText="position:absolute;left:0;top:0;width:1px;height:1px;",t.coordsize=CE+","+CE,t.coordorigin="0,0"},PE=function(t){return String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;")},NE=function(t,e,i){return"rgb("+[t,e,i].join(",")+")"},OE=function(t,e){e&&t&&e.parentNode!==t&&t.appendChild(e)},EE=function(t,e){e&&t&&e.parentNode===t&&t.removeChild(e)},RE=function(t,e,i){return 1e5*(parseFloat(t)||0)+1e3*(parseFloat(e)||0)+i},zE=function(t,e){return"string"==typeof t?t.lastIndexOf("%")>=0?parseFloat(t)/100*e:parseFloat(t):t},BE=function(t,e,i){var n=Gt(e);i=+i,isNaN(i)&&(i=1),n&&(t.color=NE(n[0],n[1],n[2]),t.opacity=i*n[3])},VE=function(t){var e=Gt(t);return[NE(e[0],e[1],e[2]),e[3]]},GE=function(t,e,i){var n=e.fill;if(null!=n)if(n instanceof MM){var o,a=0,r=[0,0],s=0,l=1,u=i.getBoundingRect(),h=u.width,c=u.height;if("linear"===n.type){o="gradient";var d=i.transform,f=[n.x*h,n.y*c],p=[n.x2*h,n.y2*c];d&&(Q(f,f,d),Q(p,p,d));var g=p[0]-f[0],m=p[1]-f[1];(a=180*Math.atan2(g,m)/Math.PI)<0&&(a+=360),a<1e-6&&(a=0)}else{o="gradientradial";var f=[n.x*h,n.y*c],d=i.transform,v=i.scale,y=h,x=c;r=[(f[0]-u.x)/y,(f[1]-u.y)/x],d&&Q(f,f,d),y/=v[0]*CE,x/=v[1]*CE;var _=DE(y,x);s=0/_,l=2*n.r/_-s}var w=n.colorStops.slice();w.sort(function(t,e){return t.offset-e.offset});for(var b=w.length,S=[],M=[],I=0;I<b;I++){var T=w[I],A=VE(T.color);M.push(T.offset*l+s+" "+A[0]),0!==I&&I!==b-1||S.push(A)}if(b>=2){var D=S[0][0],C=S[1][0],L=S[0][1]*e.opacity,k=S[1][1]*e.opacity;t.type=o,t.method="none",t.focus="100%",t.angle=a,t.color=D,t.color2=C,t.colors=M.join(","),t.opacity=k,t.opacity2=L}"radial"===o&&(t.focusposition=r.join(","))}else BE(t,n,e.opacity)},FE=function(t,e){null!=e.lineDash&&(t.dashstyle=e.lineDash.join(" ")),null==e.stroke||e.stroke instanceof MM||BE(t,e.stroke,e.opacity)},WE=function(t,e,i,n){var o="fill"===e,a=t.getElementsByTagName(e)[0];null!=i[e]&&"none"!==i[e]&&(o||!o&&i.lineWidth)?(t[o?"filled":"stroked"]="true",i[e]instanceof MM&&EE(t,a),a||(a=u_(e)),o?GE(a,i,n):FE(a,i),OE(t,a)):(t[o?"filled":"stroked"]="false",EE(t,a))},HE=[[],[],[]],ZE=function(t,e){var i,n,o,a,r,s,l=bE.M,u=bE.C,h=bE.L,c=bE.A,d=bE.Q,f=[],p=t.data,g=t.len();for(a=0;a<g;){switch(o=p[a++],n="",i=0,o){case l:n=" m ",i=1,r=p[a++],s=p[a++],HE[0][0]=r,HE[0][1]=s;break;case h:n=" l ",i=1,r=p[a++],s=p[a++],HE[0][0]=r,HE[0][1]=s;break;case d:case u:n=" c ",i=3;var m,v,y=p[a++],x=p[a++],_=p[a++],w=p[a++];o===d?(m=_,v=w,_=(_+2*y)/3,w=(w+2*x)/3,y=(r+2*y)/3,x=(s+2*x)/3):(m=p[a++],v=p[a++]),HE[0][0]=y,HE[0][1]=x,HE[1][0]=_,HE[1][1]=w,HE[2][0]=m,HE[2][1]=v,r=m,s=v;break;case c:var b=0,S=0,M=1,I=1,T=0;e&&(b=e[4],S=e[5],M=ME(e[0]*e[0]+e[1]*e[1]),I=ME(e[2]*e[2]+e[3]*e[3]),T=Math.atan2(-e[1]/I,e[0]/M));var A=p[a++],D=p[a++],C=p[a++],L=p[a++],k=p[a++]+T,P=p[a++]+k+T;a++;var N=p[a++],O=A+TE(k)*C,E=D+AE(k)*L,y=A+TE(P)*C,x=D+AE(P)*L,R=N?" wa ":" at ";Math.abs(O-y)<1e-4&&(Math.abs(P-k)>.01?N&&(O+=.0125):Math.abs(E-D)<1e-4?N&&O<A||!N&&O>A?x-=.0125:x+=.0125:N&&E<D||!N&&E>D?y+=.0125:y-=.0125),f.push(R,SE(((A-C)*M+b)*CE-LE),",",SE(((D-L)*I+S)*CE-LE),",",SE(((A+C)*M+b)*CE-LE),",",SE(((D+L)*I+S)*CE-LE),",",SE((O*M+b)*CE-LE),",",SE((E*I+S)*CE-LE),",",SE((y*M+b)*CE-LE),",",SE((x*I+S)*CE-LE)),r=y,s=x;break;case bE.R:var z=HE[0],B=HE[1];z[0]=p[a++],z[1]=p[a++],B[0]=z[0]+p[a++],B[1]=z[1]+p[a++],e&&(Q(z,z,e),Q(B,B,e)),z[0]=SE(z[0]*CE-LE),B[0]=SE(B[0]*CE-LE),z[1]=SE(z[1]*CE-LE),B[1]=SE(B[1]*CE-LE),f.push(" m ",z[0],",",z[1]," l ",B[0],",",z[1]," l ",B[0],",",B[1]," l ",z[0],",",B[1]);break;case bE.Z:f.push(" x ")}if(i>0){f.push(n);for(var V=0;V<i;V++){var G=HE[V];e&&Q(G,G,e),f.push(SE(G[0]*CE-LE),",",SE(G[1]*CE-LE),V<i-1?",":"")}}}return f.join("")};kn.prototype.brushVML=function(t){var e=this.style,i=this._vmlEl;i||(i=u_("shape"),kE(i),this._vmlEl=i),WE(i,"fill",e,this),WE(i,"stroke",e,this);var n=this.transform,o=null!=n,a=i.getElementsByTagName("stroke")[0];if(a){var r=e.lineWidth;if(o&&!e.strokeNoScale){var s=n[0]*n[3]-n[1]*n[2];r*=ME(IE(s))}a.weight=r+"px"}var l=this.path||(this.path=new OS);this.__dirtyPath&&(l.beginPath(),l.subPixelOptimize=!1,this.buildPath(l,this.shape),l.toStatic(),this.__dirtyPath=!1),i.path=ZE(l,this.transform),i.style.zIndex=RE(this.zlevel,this.z,this.z2),OE(t,i),null!=e.text?this.drawRectText(t,this.getBoundingRect()):this.removeRectText(t)},kn.prototype.onRemove=function(t){EE(t,this._vmlEl),this.removeRectText(t)},kn.prototype.onAdd=function(t){OE(t,this._vmlEl),this.appendRectText(t)};var UE=function(t){return"object"==typeof t&&t.tagName&&"IMG"===t.tagName.toUpperCase()};fi.prototype.brushVML=function(t){var e,i,n=this.style,o=n.image;if(UE(o)){var a=o.src;if(a===this._imageSrc)e=this._imageWidth,i=this._imageHeight;else{var r=o.runtimeStyle,s=r.width,l=r.height;r.width="auto",r.height="auto",e=o.width,i=o.height,r.width=s,r.height=l,this._imageSrc=a,this._imageWidth=e,this._imageHeight=i}o=a}else o===this._imageSrc&&(e=this._imageWidth,i=this._imageHeight);if(o){var u=n.x||0,h=n.y||0,c=n.width,d=n.height,f=n.sWidth,p=n.sHeight,g=n.sx||0,m=n.sy||0,v=f&&p,y=this._vmlEl;y||(y=wE.createElement("div"),kE(y),this._vmlEl=y);var x,_=y.style,w=!1,b=1,S=1;if(this.transform&&(x=this.transform,b=ME(x[0]*x[0]+x[1]*x[1]),S=ME(x[2]*x[2]+x[3]*x[3]),w=x[1]||x[2]),w){var M=[u,h],I=[u+c,h],T=[u,h+d],A=[u+c,h+d];Q(M,M,x),Q(I,I,x),Q(T,T,x),Q(A,A,x);var D=DE(M[0],I[0],T[0],A[0]),C=DE(M[1],I[1],T[1],A[1]),L=[];L.push("M11=",x[0]/b,",","M12=",x[2]/S,",","M21=",x[1]/b,",","M22=",x[3]/S,",","Dx=",SE(u*b+x[4]),",","Dy=",SE(h*S+x[5])),_.padding="0 "+SE(D)+"px "+SE(C)+"px 0",_.filter="progid:DXImageTransform.Microsoft.Matrix("+L.join("")+", SizingMethod=clip)"}else x&&(u=u*b+x[4],h=h*S+x[5]),_.filter="",_.left=SE(u)+"px",_.top=SE(h)+"px";var k=this._imageEl,P=this._cropEl;k||(k=wE.createElement("div"),this._imageEl=k);var N=k.style;if(v){if(e&&i)N.width=SE(b*e*c/f)+"px",N.height=SE(S*i*d/p)+"px";else{var O=new Image,E=this;O.onload=function(){O.onload=null,e=O.width,i=O.height,N.width=SE(b*e*c/f)+"px",N.height=SE(S*i*d/p)+"px",E._imageWidth=e,E._imageHeight=i,E._imageSrc=o},O.src=o}P||((P=wE.createElement("div")).style.overflow="hidden",this._cropEl=P);var R=P.style;R.width=SE((c+g*c/f)*b),R.height=SE((d+m*d/p)*S),R.filter="progid:DXImageTransform.Microsoft.Matrix(Dx="+-g*c/f*b+",Dy="+-m*d/p*S+")",P.parentNode||y.appendChild(P),k.parentNode!==P&&P.appendChild(k)}else N.width=SE(b*c)+"px",N.height=SE(S*d)+"px",y.appendChild(k),P&&P.parentNode&&(y.removeChild(P),this._cropEl=null);var z="",B=n.opacity;B<1&&(z+=".Alpha(opacity="+SE(100*B)+") "),z+="progid:DXImageTransform.Microsoft.AlphaImageLoader(src="+o+", SizingMethod=scale)",N.filter=z,y.style.zIndex=RE(this.zlevel,this.z,this.z2),OE(t,y),null!=n.text&&this.drawRectText(t,this.getBoundingRect())}},fi.prototype.onRemove=function(t){EE(t,this._vmlEl),this._vmlEl=null,this._cropEl=null,this._imageEl=null,this.removeRectText(t)},fi.prototype.onAdd=function(t){OE(t,this._vmlEl),this.appendRectText(t)};var XE,jE={},YE=0,qE=document.createElement("div"),KE=function(t){var e=jE[t];if(!e){YE>100&&(YE=0,jE={});var i,n=qE.style;try{n.font=t,i=n.fontFamily.split(",")[0]}catch(t){}e={style:n.fontStyle||"normal",variant:n.fontVariant||"normal",weight:n.fontWeight||"normal",size:0|parseFloat(n.fontSize||12),family:i||"Microsoft YaHei"},jE[t]=e,YE++}return e};!function(t,e){bb[t]=e}("measureText",function(t,e){var i=wE;XE||((XE=i.createElement("div")).style.cssText="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;",wE.body.appendChild(XE));try{XE.style.font=e}catch(t){}return XE.innerHTML="",XE.appendChild(i.createTextNode(t)),{width:XE.offsetWidth}});for(var $E=new de,JE=[Ab,di,fi,kn,aM],QE=0;QE<JE.length;QE++){var tR=JE[QE].prototype;tR.drawRectText=function(t,e,i,n){var o=this.style;this.__dirty&&Ye(o);var a=o.text;if(null!=a&&(a+=""),a){if(o.rich){var r=Ze(a,o);a=[];for(var s=0;s<r.lines.length;s++){for(var l=r.lines[s].tokens,u=[],h=0;h<l.length;h++)u.push(l[h].text);a.push(u.join(""))}a=a.join("\n")}var c,d,f=o.textAlign,p=o.textVerticalAlign,g=KE(o.font),m=g.style+" "+g.variant+" "+g.weight+" "+g.size+'px "'+g.family+'"';i=i||ke(a,m,f,p,o.textPadding,o.textLineHeight);var v=this.transform;if(v&&!n&&($E.copy(e),$E.applyTransform(v),e=$E),n)c=e.x,d=e.y;else{var y=o.textPosition,x=o.textDistance;if(y instanceof Array)c=e.x+zE(y[0],e.width),d=e.y+zE(y[1],e.height),f=f||"left";else{var _=Re(y,e,x);c=_.x,d=_.y,f=f||_.textAlign,p=p||_.textVerticalAlign}}c=Oe(c,i.width,f),d=Ee(d,i.height,p),d+=i.height/2;var w,b,S,M=u_,I=this._textVmlEl;I?b=(w=(S=I.firstChild).nextSibling).nextSibling:(I=M("line"),w=M("path"),b=M("textpath"),S=M("skew"),b.style["v-text-align"]="left",kE(I),w.textpathok=!0,b.on=!0,I.from="0 0",I.to="1000 0.05",OE(I,S),OE(I,w),OE(I,b),this._textVmlEl=I);var T=[c,d],A=I.style;v&&n?(Q(T,T,v),S.on=!0,S.matrix=v[0].toFixed(3)+","+v[2].toFixed(3)+","+v[1].toFixed(3)+","+v[3].toFixed(3)+",0,0",S.offset=(SE(T[0])||0)+","+(SE(T[1])||0),S.origin="0 0",A.left="0px",A.top="0px"):(S.on=!1,A.left=SE(c)+"px",A.top=SE(d)+"px"),b.string=PE(a);try{b.style.font=m}catch(t){}WE(I,"fill",{fill:o.textFill,opacity:o.opacity},this),WE(I,"stroke",{stroke:o.textStroke,opacity:o.opacity,lineDash:o.lineDash},this),I.style.zIndex=RE(this.zlevel,this.z,this.z2),OE(t,I)}},tR.removeRectText=function(t){EE(t,this._textVmlEl),this._textVmlEl=null},tR.appendRectText=function(t){OE(t,this._textVmlEl)}}aM.prototype.brushVML=function(t){var e=this.style;null!=e.text?this.drawRectText(t,{x:e.x||0,y:e.y||0,width:0,height:0},this.getBoundingRect(),!0):this.removeRectText(t)},aM.prototype.onRemove=function(t){this.removeRectText(t)},aM.prototype.onAdd=function(t){this.appendRectText(t)}}d_.prototype={constructor:d_,getType:function(){return"vml"},getViewportRoot:function(){return this._vmlViewport},getViewportRootOffset:function(){var t=this.getViewportRoot();if(t)return{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0}},refresh:function(){var t=this.storage.getDisplayList(!0,!0);this._paintList(t)},_paintList:function(t){for(var e=this._vmlRoot,i=0;i<t.length;i++){var n=t[i];n.invisible||n.ignore?(n.__alreadyNotVisible||n.onRemove(e),n.__alreadyNotVisible=!0):(n.__alreadyNotVisible&&n.onAdd(e),n.__alreadyNotVisible=!1,n.__dirty&&(n.beforeBrush&&n.beforeBrush(),(n.brushVML||n.brush).call(n,e),n.afterBrush&&n.afterBrush())),n.__dirty=!1}this._firstPaint&&(this._vmlViewport.appendChild(e),this._firstPaint=!1)},resize:function(t,e){var t=null==t?this._getWidth():t,e=null==e?this._getHeight():e;if(this._width!==t||this._height!==e){this._width=t,this._height=e;var i=this._vmlViewport.style;i.width=t+"px",i.height=e+"px"}},dispose:function(){this.root.innerHTML="",this._vmlRoot=this._vmlViewport=this.storage=null},getWidth:function(){return this._width},getHeight:function(){return this._height},clear:function(){this._vmlViewport&&this.root.removeChild(this._vmlViewport)},_getWidth:function(){var t=this.root,e=t.currentStyle;return(t.clientWidth||c_(e.width))-c_(e.paddingLeft)-c_(e.paddingRight)|0},_getHeight:function(){var t=this.root,e=t.currentStyle;return(t.clientHeight||c_(e.height))-c_(e.paddingTop)-c_(e.paddingBottom)|0}},d(["getLayer","insertLayer","eachLayer","eachBuiltinLayer","eachOtherLayer","getLayers","modLayer","delLayer","clearLayer","toDataURL","pathToImage"],function(t){d_.prototype[t]=f_(t)}),Ti("vml",d_);var eR="http://www.w3.org/2000/svg",iR=OS.CMD,nR=Array.prototype.join,oR="none",aR=Math.round,rR=Math.sin,sR=Math.cos,lR=Math.PI,uR=2*Math.PI,hR=180/lR,cR=1e-4,dR={};dR.brush=function(t){var e=t.style,i=t.__svgEl;i||(i=p_("path"),t.__svgEl=i),t.path||t.createPathProxy();var n=t.path;if(t.__dirtyPath){n.beginPath(),n.subPixelOptimize=!1,t.buildPath(n,t.shape),t.__dirtyPath=!1;var o=S_(n);o.indexOf("NaN")<0&&__(i,"d",o)}b_(i,e,!1,t),x_(i,t.transform),null!=e.text&&mR(t,t.getBoundingRect())};var fR={};fR.brush=function(t){var e=t.style,i=e.image;if(i instanceof HTMLImageElement&&(i=i.src),i){var n=e.x||0,o=e.y||0,a=e.width,r=e.height,s=t.__svgEl;s||(s=p_("image"),t.__svgEl=s),i!==t.__imageSrc&&(w_(s,"href",i),t.__imageSrc=i),__(s,"width",a),__(s,"height",r),__(s,"x",n),__(s,"y",o),x_(s,t.transform),null!=e.text&&mR(t,t.getBoundingRect())}};var pR={},gR=new de,mR=function(t,e,i){var n=t.style;t.__dirty&&Ye(n);var o=n.text;if(null!=o){o+="";var a=t.__textSvgEl;a||(a=p_("text"),t.__textSvgEl=a);var r,s,l=n.textPosition,u=n.textDistance,h=n.textAlign||"left";"number"==typeof n.fontSize&&(n.fontSize+="px");var c=n.font||[n.fontStyle||"",n.fontWeight||"",n.fontSize||"",n.fontFamily||""].join(" ")||wb,d=M_(n.textVerticalAlign),f=(i=ke(o,c,h,d,n.textPadding,n.textLineHeight)).lineHeight;if(l instanceof Array)r=e.x+l[0],s=e.y+l[1];else{var p=Re(l,e,u);r=p.x,s=p.y,d=M_(p.textVerticalAlign),h=p.textAlign}__(a,"alignment-baseline",d),c&&(a.style.font=c);var g=n.textPadding;if(__(a,"x",r),__(a,"y",s),b_(a,n,!0,t),t instanceof aM||t.style.transformText)x_(a,t.transform);else{if(t.transform)gR.copy(e),gR.applyTransform(t.transform),e=gR;else{var m=t.transformCoordToGlobal(e.x,e.y);e.x=m[0],e.y=m[1],t.transform=_t(xt())}var v=n.textOrigin;"center"===v?(r=i.width/2+r,s=i.height/2+s):v&&(r=v[0]+r,s=v[1]+s);var y=-n.textRotation||0,x=xt();Mt(x,x,y),St(x,x,m=[t.transform[4],t.transform[5]]),x_(a,x)}var _=o.split("\n"),w=_.length,b=h;"left"===b?(b="start",g&&(r+=g[3])):"right"===b?(b="end",g&&(r-=g[1])):"center"===b&&(b="middle",g&&(r+=(g[3]-g[1])/2));var S=0;if("after-edge"===d?(S=-i.height+f,g&&(S-=g[2])):"middle"===d?(S=(-i.height+f)/2,g&&(s+=(g[0]-g[2])/2)):g&&(S+=g[0]),t.__text!==o||t.__textFont!==c){var M=t.__tspanList||[];t.__tspanList=M;for(T=0;T<w;T++)(A=M[T])?A.innerHTML="":(A=M[T]=p_("tspan"),a.appendChild(A),__(A,"alignment-baseline",d),__(A,"text-anchor",b)),__(A,"x",r),__(A,"y",s+T*f+S),A.appendChild(document.createTextNode(_[T]));for(;T<M.length;T++)a.removeChild(M[T]);M.length=w,t.__text=o,t.__textFont=c}else if(t.__tspanList.length)for(var I=t.__tspanList.length,T=0;T<I;++T){var A=t.__tspanList[T];A&&(__(A,"x",r),__(A,"y",s+T*f+S))}}};pR.drawRectText=mR,pR.brush=function(t){var e=t.style;null!=e.text&&(e.textPosition=[0,0],mR(t,{x:e.x||0,y:e.y||0,width:0,height:0},t.getBoundingRect()))},I_.prototype={diff:function(t,e,i){i||(i=function(t,e){return t===e}),this.equals=i;var n=this;t=t.slice();var o=(e=e.slice()).length,a=t.length,r=1,s=o+a,l=[{newPos:-1,components:[]}],u=this.extractCommon(l[0],e,t,0);if(l[0].newPos+1>=o&&u+1>=a){for(var h=[],c=0;c<e.length;c++)h.push(c);return[{indices:h,count:e.length}]}for(;r<=s;){var d=function(){for(var i=-1*r;i<=r;i+=2){var s,u=l[i-1],h=l[i+1],c=(h?h.newPos:0)-i;u&&(l[i-1]=void 0);var d=u&&u.newPos+1<o,f=h&&0<=c&&c<a;if(d||f){if(!d||f&&u.newPos<h.newPos?(s=A_(h),n.pushComponent(s.components,void 0,!0)):((s=u).newPos++,n.pushComponent(s.components,!0,void 0)),c=n.extractCommon(s,e,t,i),s.newPos+1>=o&&c+1>=a)return T_(0,s.components);l[i]=s}else l[i]=void 0}r++}();if(d)return d}},pushComponent:function(t,e,i){var n=t[t.length-1];n&&n.added===e&&n.removed===i?t[t.length-1]={count:n.count+1,added:e,removed:i}:t.push({count:1,added:e,removed:i})},extractCommon:function(t,e,i,n){for(var o=e.length,a=i.length,r=t.newPos,s=r-n,l=0;r+1<o&&s+1<a&&this.equals(e[r+1],i[s+1]);)r++,s++,l++;return l&&t.components.push({count:l}),t.newPos=r,s},tokenize:function(t){return t.slice()},join:function(t){return t.slice()}};var vR=new I_,yR=function(t,e,i){return vR.diff(t,e,i)};D_.prototype.createElement=p_,D_.prototype.getDefs=function(t){var e=this._svgRoot,i=this._svgRoot.getElementsByTagName("defs");return 0===i.length?t?((i=e.insertBefore(this.createElement("defs"),e.firstChild)).contains||(i.contains=function(t){var e=i.children;if(!e)return!1;for(var n=e.length-1;n>=0;--n)if(e[n]===t)return!0;return!1}),i):null:i[0]},D_.prototype.update=function(t,e){if(t){var i=this.getDefs(!1);if(t[this._domName]&&i.contains(t[this._domName]))"function"==typeof e&&e(t);else{var n=this.add(t);n&&(t[this._domName]=n)}}},D_.prototype.addDom=function(t){this.getDefs(!0).appendChild(t)},D_.prototype.removeDom=function(t){var e=this.getDefs(!1);e&&t[this._domName]&&(e.removeChild(t[this._domName]),t[this._domName]=null)},D_.prototype.getDoms=function(){var t=this.getDefs(!1);if(!t)return[];var e=[];return d(this._tagNames,function(i){var n=t.getElementsByTagName(i);e=e.concat([].slice.call(n))}),e},D_.prototype.markAllUnused=function(){var t=this;d(this.getDoms(),function(e){e[t._markLabel]="0"})},D_.prototype.markUsed=function(t){t&&(t[this._markLabel]="1")},D_.prototype.removeUnused=function(){var t=this.getDefs(!1);if(t){var e=this;d(this.getDoms(),function(i){"1"!==i[e._markLabel]&&t.removeChild(i)})}},D_.prototype.getSvgProxy=function(t){return t instanceof kn?dR:t instanceof fi?fR:t instanceof aM?pR:dR},D_.prototype.getTextSvgElement=function(t){return t.__textSvgEl},D_.prototype.getSvgElement=function(t){return t.__svgEl},u(C_,D_),C_.prototype.addWithoutUpdate=function(t,e){if(e&&e.style){var i=this;d(["fill","stroke"],function(n){if(e.style[n]&&("linear"===e.style[n].type||"radial"===e.style[n].type)){var o,a=e.style[n],r=i.getDefs(!0);a._dom?(o=a._dom,r.contains(a._dom)||i.addDom(o)):o=i.add(a),i.markUsed(e);var s=o.getAttribute("id");t.setAttribute(n,"url(#"+s+")")}})}},C_.prototype.add=function(t){var e;if("linear"===t.type)e=this.createElement("linearGradient");else{if("radial"!==t.type)return Yw("Illegal gradient type."),null;e=this.createElement("radialGradient")}return t.id=t.id||this.nextId++,e.setAttribute("id","zr"+this._zrId+"-gradient-"+t.id),this.updateDom(t,e),this.addDom(e),e},C_.prototype.update=function(t){var e=this;D_.prototype.update.call(this,t,function(){var i=t.type,n=t._dom.tagName;"linear"===i&&"linearGradient"===n||"radial"===i&&"radialGradient"===n?e.updateDom(t,t._dom):(e.removeDom(t),e.add(t))})},C_.prototype.updateDom=function(t,e){if("linear"===t.type)e.setAttribute("x1",t.x),e.setAttribute("y1",t.y),e.setAttribute("x2",t.x2),e.setAttribute("y2",t.y2);else{if("radial"!==t.type)return void Yw("Illegal gradient type.");e.setAttribute("cx",t.x),e.setAttribute("cy",t.y),e.setAttribute("r",t.r)}t.global?e.setAttribute("gradientUnits","userSpaceOnUse"):e.setAttribute("gradientUnits","objectBoundingBox"),e.innerHTML="";for(var i=t.colorStops,n=0,o=i.length;n<o;++n){var a=this.createElement("stop");a.setAttribute("offset",100*i[n].offset+"%");var r=i[n].color;if(r.indexOf(!1)){var s=Gt(r)[3],l=Zt(r);a.setAttribute("stop-color","#"+l),a.setAttribute("stop-opacity",s)}else a.setAttribute("stop-color",i[n].color);e.appendChild(a)}t._dom=e},C_.prototype.markUsed=function(t){if(t.style){var e=t.style.fill;e&&e._dom&&D_.prototype.markUsed.call(this,e._dom),(e=t.style.stroke)&&e._dom&&D_.prototype.markUsed.call(this,e._dom)}},u(L_,D_),L_.prototype.update=function(t){var e=this.getSvgElement(t);e&&this.updateDom(e,t.__clipPaths,!1);var i=this.getTextSvgElement(t);i&&this.updateDom(i,t.__clipPaths,!0),this.markUsed(t)},L_.prototype.updateDom=function(t,e,i){if(e&&e.length>0){var n,o,a=this.getDefs(!0),r=e[0],s=i?"_textDom":"_dom";r[s]?(o=r[s].getAttribute("id"),n=r[s],a.contains(n)||a.appendChild(n)):(o="zr"+this._zrId+"-clip-"+this.nextId,++this.nextId,(n=this.createElement("clipPath")).setAttribute("id",o),a.appendChild(n),r[s]=n);var l=this.getSvgProxy(r);if(r.transform&&r.parent.invTransform&&!i){var u=Array.prototype.slice.call(r.transform);bt(r.transform,r.parent.invTransform,r.transform),l.brush(r),r.transform=u}else l.brush(r);var h=this.getSvgElement(r);n.innerHTML="",n.appendChild(h.cloneNode()),t.setAttribute("clip-path","url(#"+o+")"),e.length>1&&this.updateDom(n,e.slice(1),i)}else t&&t.setAttribute("clip-path","none")},L_.prototype.markUsed=function(t){var e=this;t.__clipPaths&&t.__clipPaths.length>0&&d(t.__clipPaths,function(t){t._dom&&D_.prototype.markUsed.call(e,t._dom),t._textDom&&D_.prototype.markUsed.call(e,t._textDom)})},u(k_,D_),k_.prototype.addWithoutUpdate=function(t,e){if(e&&P_(e.style)){var i,n=e.style;n._shadowDom?(i=n._shadowDom,this.getDefs(!0).contains(n._shadowDom)||this.addDom(i)):i=this.add(e),this.markUsed(e);var o=i.getAttribute("id");t.style.filter="url(#"+o+")"}},k_.prototype.add=function(t){var e=this.createElement("filter"),i=t.style;return i._shadowDomId=i._shadowDomId||this.nextId++,e.setAttribute("id","zr"+this._zrId+"-shadow-"+i._shadowDomId),this.updateDom(t,e),this.addDom(e),e},k_.prototype.update=function(t,e){var i=e.style;if(P_(i)){var n=this;D_.prototype.update.call(this,e,function(t){n.updateDom(e,t._shadowDom)})}else this.remove(t,i)},k_.prototype.remove=function(t,e){null!=e._shadowDomId&&(this.removeDom(e),t.style.filter="")},k_.prototype.updateDom=function(t,e){var i=e.getElementsByTagName("feDropShadow");i=0===i.length?this.createElement("feDropShadow"):i[0];var n,o,a,r,s=t.style,l=t.scale?t.scale[0]||1:1,u=t.scale?t.scale[1]||1:1;if(s.shadowBlur||s.shadowOffsetX||s.shadowOffsetY)n=s.shadowOffsetX||0,o=s.shadowOffsetY||0,a=s.shadowBlur,r=s.shadowColor;else{if(!s.textShadowBlur)return void this.removeDom(e,s);n=s.textShadowOffsetX||0,o=s.textShadowOffsetY||0,a=s.textShadowBlur,r=s.textShadowColor}i.setAttribute("dx",n/l),i.setAttribute("dy",o/u),i.setAttribute("flood-color",r);var h=a/2/l+" "+a/2/u;i.setAttribute("stdDeviation",h),e.setAttribute("x","-100%"),e.setAttribute("y","-100%"),e.setAttribute("width",Math.ceil(a/2*200)+"%"),e.setAttribute("height",Math.ceil(a/2*200)+"%"),e.appendChild(i),s._shadowDom=e},k_.prototype.markUsed=function(t){var e=t.style;e&&e._shadowDom&&D_.prototype.markUsed.call(this,e._shadowDom)};var xR=function(t,e,i,n){this.root=t,this.storage=e,this._opts=i=a({},i||{});var o=p_("svg");o.setAttribute("xmlns","http://www.w3.org/2000/svg"),o.setAttribute("version","1.1"),o.setAttribute("baseProfile","full"),o.style.cssText="user-select:none;position:absolute;left:0;top:0;",this.gradientManager=new C_(n,o),this.clipPathManager=new L_(n,o),this.shadowManager=new k_(n,o);var r=document.createElement("div");r.style.cssText="overflow:hidden;position:relative",this._svgRoot=o,this._viewport=r,t.appendChild(r),r.appendChild(o),this.resize(i.width,i.height),this._visibleList=[]};xR.prototype={constructor:xR,getType:function(){return"svg"},getViewportRoot:function(){return this._viewport},getViewportRootOffset:function(){var t=this.getViewportRoot();if(t)return{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0}},refresh:function(){var t=this.storage.getDisplayList(!0);this._paintList(t)},setBackgroundColor:function(t){this._viewport.style.background=t},_paintList:function(t){this.gradientManager.markAllUnused(),this.clipPathManager.markAllUnused(),this.shadowManager.markAllUnused();var e,i=this._svgRoot,n=this._visibleList,o=t.length,a=[];for(e=0;e<o;e++){var r=O_(f=t[e]),s=G_(f)||V_(f);f.invisible||(f.__dirty&&(r&&r.brush(f),this.clipPathManager.update(f),f.style&&(this.gradientManager.update(f.style.fill),this.gradientManager.update(f.style.stroke),this.shadowManager.update(s,f)),f.__dirty=!1),a.push(f))}var l,u=yR(n,a);for(e=0;e<u.length;e++)if((c=u[e]).removed)for(d=0;d<c.count;d++){var s=G_(f=n[c.indices[d]]),h=V_(f);B_(i,s),B_(i,h)}for(e=0;e<u.length;e++){var c=u[e];if(c.added)for(d=0;d<c.count;d++){var s=G_(f=a[c.indices[d]]),h=V_(f);l?R_(i,s,l):z_(i,s),s?R_(i,h,s):l?R_(i,h,l):z_(i,h),R_(i,h,s),l=h||s||l,this.gradientManager.addWithoutUpdate(s,f),this.shadowManager.addWithoutUpdate(l,f),this.clipPathManager.markUsed(f)}else if(!c.removed)for(var d=0;d<c.count;d++){var f=a[c.indices[d]];l=s=V_(f)||G_(f)||l,this.gradientManager.markUsed(f),this.gradientManager.addWithoutUpdate(s,f),this.shadowManager.markUsed(f),this.shadowManager.addWithoutUpdate(s,f),this.clipPathManager.markUsed(f)}}this.gradientManager.removeUnused(),this.clipPathManager.removeUnused(),this.shadowManager.removeUnused(),this._visibleList=a},_getDefs:function(t){var e=this._svgRoot,i=this._svgRoot.getElementsByTagName("defs");return 0===i.length?t?((i=e.insertBefore(p_("defs"),e.firstChild)).contains||(i.contains=function(t){var e=i.children;if(!e)return!1;for(var n=e.length-1;n>=0;--n)if(e[n]===t)return!0;return!1}),i):null:i[0]},resize:function(t,e){var i=this._viewport;i.style.display="none";var n=this._opts;if(null!=t&&(n.width=t),null!=e&&(n.height=e),t=this._getSize(0),e=this._getSize(1),i.style.display="",this._width!==t||this._height!==e){this._width=t,this._height=e;var o=i.style;o.width=t+"px",o.height=e+"px";var a=this._svgRoot;a.setAttribute("width",t),a.setAttribute("height",e)}},getWidth:function(){return this._width},getHeight:function(){return this._height},_getSize:function(t){var e=this._opts,i=["width","height"][t],n=["clientWidth","clientHeight"][t],o=["paddingLeft","paddingTop"][t],a=["paddingRight","paddingBottom"][t];if(null!=e[i]&&"auto"!==e[i])return parseFloat(e[i]);var r=this.root,s=document.defaultView.getComputedStyle(r);return(r[n]||N_(s[i])||N_(r.style[i]))-(N_(s[o])||0)-(N_(s[a])||0)|0},dispose:function(){this.root.innerHTML="",this._svgRoot=this._viewport=this.storage=null},clear:function(){this._viewport&&this.root.removeChild(this._viewport)},pathToDataUrl:function(){return this.refresh(),"data:image/svg+xml;charset=UTF-8,"+this._svgRoot.outerHTML}},d(["getLayer","insertLayer","eachLayer","eachBuiltinLayer","eachOtherLayer","getLayers","modLayer","delLayer","clearLayer","toDataURL","pathToImage"],function(t){xR.prototype[t]=F_(t)}),Ti("svg",xR),t.version="4.2.0",t.dependencies={zrender:"4.0.6"},t.PRIORITY=zT,t.init=function(t,e,i){var n=Ls(t);if(n)return n;var o=new ls(t,e,i);return o.id="ec_"+tA++,JT[o.id]=o,Fi(t,iA,o.id),Ds(o),o},t.connect=function(t){if(y(t)){var e=t;t=null,LT(e,function(e){null!=e.group&&(t=e.group)}),t=t||"g_"+eA++,LT(e,function(e){e.group=t})}return QT[t]=!0,t},t.disConnect=Cs,t.disconnect=nA,t.dispose=function(t){"string"==typeof t?t=JT[t]:t instanceof ls||(t=Ls(t)),t instanceof ls&&!t.isDisposed()&&t.dispose()},t.getInstanceByDom=Ls,t.getInstanceById=function(t){return JT[t]},t.registerTheme=ks,t.registerPreprocessor=Ps,t.registerProcessor=Ns,t.registerPostUpdate=function(t){YT.push(t)},t.registerAction=Os,t.registerCoordinateSystem=Es,t.getCoordinateSystemDimensions=function(t){var e=Ga.get(t);if(e)return e.getDimensionsInfo?e.getDimensionsInfo():e.dimensions.slice()},t.registerLayout=Rs,t.registerVisual=zs,t.registerLoading=Vs,t.extendComponentModel=Gs,t.extendComponentView=Fs,t.extendSeriesModel=Ws,t.extendChartView=Hs,t.setCanvasCreator=function(t){e("createCanvas",t)},t.registerMap=function(t,e,i){AT.registerMap(t,e,i)},t.getMap=function(t){var e=AT.retrieveMap(t);return e&&e[0]&&{geoJson:e[0].geoJSON,specialAreas:e[0].specialAreas}},t.dataTool={},t.zrender=Wb,t.number=jM,t.format=eI,t.throttle=kr,t.helper=$A,t.matrix=Sw,t.vector=cw,t.color=Ww,t.parseGeoJSON=QA,t.parseGeoJson=nD,t.util=oD,t.graphic=aD,t.List=pA,t.Model=Po,t.Axis=iD,t.env=U_});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["navigator"]))

/***/ }),

/***/ "./node_modules/taro-echarts/index.js":
/*!********************************************!*\
  !*** ./node_modules/taro-echarts/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _components_Chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Chart */ "./node_modules/taro-echarts/components/Chart/index.js");

/* unused harmony default export */ var _unused_webpack_default_export = (_components_Chart__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/pages/weapp/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/weapp/index.jsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/weapp/index.jsx");


var config = {"navigationBarTitleText":"微信小程序echarts使用示例"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/weapp/index', {}, config || {}))



/***/ }),

/***/ "./src/pages/weapp/index.scss":
/*!************************************!*\
  !*** ./src/pages/weapp/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/weapp/index.jsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map