"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_custom_nav_bar2 = common_vendor.resolveComponent("custom-nav-bar");
  const _easycom_custom_refresher2 = common_vendor.resolveComponent("custom-refresher");
  const _easycom_custom_nomore2 = common_vendor.resolveComponent("custom-nomore");
  const _component_uni_list_item = common_vendor.resolveComponent("uni-list-item");
  const _component_uni_list = common_vendor.resolveComponent("uni-list");
  const _component_z_paging = common_vendor.resolveComponent("z-paging");
  (_easycom_custom_nav_bar2 + _easycom_custom_refresher2 + _easycom_custom_nomore2 + _component_uni_list_item + _component_uni_list + _component_z_paging)();
}
const _easycom_custom_nav_bar = () => "../../components/custom-nav-bar/custom-nav-bar.js";
const _easycom_custom_refresher = () => "../../components/custom-refresher/custom-refresher.js";
const _easycom_custom_nomore = () => "../../components/custom-nomore/custom-nomore.js";
if (!Math) {
  (_easycom_custom_nav_bar + _easycom_custom_refresher + _easycom_custom_nomore)();
}
const _sfc_main = {
  __name: "hand-up",
  setup(__props) {
    const essayList = common_vendor.ref([]);
    const paging = common_vendor.ref();
    const queryList = async (pageNo, pageSize) => {
      let res = await api_apis.apiQueryHandUpList(pageNo);
      paging.value.complete(res.list);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "热点"
        }),
        b: common_vendor.w(({
          refresherStatus
        }, s0, i0) => {
          return {
            a: "6ebc48b4-2-" + i0 + ",6ebc48b4-0",
            b: common_vendor.p({
              status: refresherStatus
            }),
            c: i0,
            d: s0
          };
        }, {
          name: "refresher",
          path: "b",
          vueId: "6ebc48b4-0"
        }),
        c: common_vendor.f(essayList.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.essayTitle),
            b: common_vendor.t(item.essayAuthorName),
            c: common_vendor.t(item.essayTime),
            d: item.essayImgs,
            e: index,
            f: "6ebc48b4-5-" + i0 + ",6ebc48b4-4",
            g: common_vendor.p({
              direction: "row",
              to: "/pages/detail/detail?essayId=" + item.essayId
            })
          };
        }),
        d: common_vendor.sr(paging, "6ebc48b4-0", {
          "k": "paging"
        }),
        e: common_vendor.o(queryList),
        f: common_vendor.o(($event) => essayList.value = $event),
        g: common_vendor.p({
          modelValue: essayList.value
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/hand-up/hand-up.js.map
