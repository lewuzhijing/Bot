"use strict";
const common_vendor = require("../common/vendor.js");
const SYSTEM_INFO = common_vendor.index.getSystemInfoSync();
const getStatusBarHeight = () => SYSTEM_INFO.statusBarHeight || 0;
const getTitleBarHeight = () => {
  if (common_vendor.index.getMenuButtonBoundingClientRect) {
    let { top, height } = common_vendor.index.getMenuButtonBoundingClientRect();
    return height + (top - getStatusBarHeight()) * 2;
  } else {
    return 60;
  }
};
exports.getStatusBarHeight = getStatusBarHeight;
exports.getTitleBarHeight = getTitleBarHeight;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/system.js.map
