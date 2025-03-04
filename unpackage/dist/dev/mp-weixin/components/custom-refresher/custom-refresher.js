"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {};
  },
  computed: {
    statusText() {
      const statusTextMap = {
        "default": "哎呀，用点力继续下拉！",
        "release-to-refresh": "拉疼我啦，松手刷新~~",
        "loading": "正在努力刷新中...",
        "complete": "刷新成功啦~"
      };
      return statusTextMap[this.status];
    }
  },
  props: {
    status: {
      type: String,
      default: function() {
        return 0;
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.t($options.statusText)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7a509e9f"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/custom-refresher/custom-refresher.js.map
