"use strict";
const common_vendor = require("../common/vendor.js");
const BASE_URL = "http://148.100.78.168:3000/";
function request(config = {}) {
  let {
    url,
    data = {},
    method = "GET",
    header = {}
  } = config;
  url = BASE_URL + url;
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url,
      data,
      method,
      header,
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
}
exports.request = request;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/request.js.map
