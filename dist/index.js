(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.index = {}));
}(this, (function (exports) { 'use strict';

  /**
   * 判断字符串是否是十六进制的颜色值
   * @param value
   */
  var isColor = function (value) {
      return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value);
  };

  /**
   * 字符串处理
   * @param value
   */
  var handleData = function (value) {
      if (typeof value === 'string') {
          return value.split('');
      }
      else {
          return value.toString().split('').join('_');
      }
  };

  exports.handleData = handleData;
  exports.isColor = isColor;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
