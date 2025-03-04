"use strict";
const common_vendor = require("../common/vendor.js");
const utils_request = require("../utils/request.js");
function apiQueryList(pageNo, key) {
  return utils_request.request({
    url: "essay/getEssayIndex?page=" + pageNo + "&key=" + key
  });
}
function apiQueryHandUpList(pageNo) {
  return utils_request.request({
    url: "essay/getEssayList?page=" + pageNo
  });
}
function apiGetEssay(essayId) {
  return utils_request.request({
    url: "essay/getEssay?essayId=" + essayId
  });
}
function apiGetComment(essayId, pageNo) {
  return utils_request.request({
    url: "comment/getComment?essayId=" + essayId + "&pageNo=" + pageNo + "&userId=" + common_vendor.index.getStorageSync("userId")
  });
}
function apiIsToEssayLikes(essayId) {
  return utils_request.request({
    url: "likes/isLikesToEssay?essayId=" + essayId + "&userId=" + common_vendor.index.getStorageSync("userId")
  });
}
function apiAddComment(data = {}) {
  return utils_request.request({
    url: "comment/addComment",
    data,
    method: "POST"
  });
}
function apiLikesEssay(data = {}) {
  return utils_request.request({
    url: "likes/likes",
    data,
    method: "POST"
  });
}
function apiGetUser(userId) {
  return utils_request.request({
    url: "user/getUser?userId=" + userId
  });
}
function apiGetMyInfo(data = {}) {
  return utils_request.request({
    url: "user/getMyInfo",
    data,
    method: "POST"
  });
}
exports.apiAddComment = apiAddComment;
exports.apiGetComment = apiGetComment;
exports.apiGetEssay = apiGetEssay;
exports.apiGetMyInfo = apiGetMyInfo;
exports.apiGetUser = apiGetUser;
exports.apiIsToEssayLikes = apiIsToEssayLikes;
exports.apiLikesEssay = apiLikesEssay;
exports.apiQueryHandUpList = apiQueryHandUpList;
exports.apiQueryList = apiQueryList;
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/apis.js.map
