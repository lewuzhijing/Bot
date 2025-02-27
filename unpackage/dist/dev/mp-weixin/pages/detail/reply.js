"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_comment_item2 = common_vendor.resolveComponent("comment-item");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_comment_item2 + _easycom_uni_icons2 + _easycom_uni_popup2)();
}
const _easycom_comment_item = () => "../../components/comment-item/comment-item.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_comment_item + _easycom_uni_icons + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "reply",
  setup(__props) {
    const commentPopup = ref(null);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(4, (item, k0, i0) => {
          return {
            a: "4009e719-1-" + i0
          };
        }),
        b: common_vendor.p({
          type: "paperplane",
          size: "26",
          color: "#333"
        }),
        c: common_vendor.sr(commentPopup, "4009e719-2", {
          "k": "commentPopup"
        }),
        d: common_vendor.p({
          type: "bottom"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4009e719"]]);
wx.createPage(MiniProgramPage);
