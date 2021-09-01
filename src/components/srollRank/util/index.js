function createCommonjsModule(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
}
var _typeof_1 = createCommonjsModule(function (module) {
    function _typeof(obj) {
      "@babel/helpers - typeof";
  
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        module.exports = _typeof = function _typeof(obj) {
          return typeof obj;
        };
      } else {
        module.exports = _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }
  
      return _typeof(obj);
    }
  
    module.exports = _typeof;
    });
var interopRequireDefault = createCommonjsModule(function (module) {
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }
  
    module.exports = _interopRequireDefault;
    });
    
var _typeof2 = interopRequireDefault(_typeof_1);

export function randomExtend (minNum, maxNum) {
    if (arguments.length === 1) {
      return parseInt(Math.random() * minNum + 1, 10)
    } else {
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
    }
  }
  
  export function debounce (delay, callback) {
    let lastTime
  
    return function () {
      clearTimeout(lastTime)
  
      const [that, args] = [this, arguments]
  
      lastTime = setTimeout(() => {
        callback.apply(that, args)
      }, delay)
    }
  }
  
  export function observerDomResize (dom, callback) {
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
  
    const observer = new MutationObserver(callback)
  
    observer.observe(dom, { attributes: true, attributeFilter: ['style'], attributeOldValue: true })
  
    return observer
  }
  
  export function getPointDistance (pointOne, pointTwo) {
    const minusX = Math.abs(pointOne[0] - pointTwo[0])
  
    const minusY = Math.abs(pointOne[1] - pointTwo[1])
  
    return Math.sqrt(minusX * minusX + minusY * minusY)
  }
  
  export function uuid (hasHyphen) {
    return (hasHyphen ? 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx' : 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx').replace(/[xy]/g, function (c) {
          const r = Math.random() * 16 | 0
          const v = c == 'x' ? r : (r & 0x3 | 0x8)
          return v.toString(16)
    })
  }

  export function deepMerge(target, merged) {
    function deepClone(object) {
        var recursion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        if (!object) return object;
        var parse = JSON.parse,
            stringify = JSON.stringify;
        if (!recursion) return parse(stringify(object));
        var clonedObj = object instanceof Array ? [] : {};
    
        if (object && (0, _typeof2["default"])(object) === 'object') {
          for (var key in object) {
            if (object.hasOwnProperty(key)) {
              if (object[key] && (0, _typeof2["default"])(object[key]) === 'object') {
                clonedObj[key] = deepClone(object[key], true);
              } else {
                clonedObj[key] = object[key];
              }
            }
          }
        }
    
        return clonedObj;
      }
    for (var key in merged) {
      if (target[key] && (0, _typeof2["default"])(target[key]) === 'object') {
        deepMerge(target[key], merged[key]);
        continue;
      }

      if ((0, _typeof2["default"])(merged[key]) === 'object') {
        target[key] = (0, deepClone)(merged[key], true);
        continue;
      }

      target[key] = merged[key];
    }

    return target;
  }

  export function deepClone(object) {
    var recursion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (!object) return object;
    var parse = JSON.parse,
        stringify = JSON.stringify;
    if (!recursion) return parse(stringify(object));
    var clonedObj = object instanceof Array ? [] : {};

    if (object && (0, _typeof2["default"])(object) === 'object') {
      for (var key in object) {
        if (object.hasOwnProperty(key)) {
          if (object[key] && (0, _typeof2["default"])(object[key]) === 'object') {
            clonedObj[key] = deepClone(object[key], true);
          } else {
            clonedObj[key] = object[key];
          }
        }
      }
    }

    return clonedObj;
  }