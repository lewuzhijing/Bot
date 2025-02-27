"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_custom_nav_bar2 = common_vendor.resolveComponent("custom-nav-bar");
  const _easycom_custom_refresher2 = common_vendor.resolveComponent("custom-refresher");
  const _easycom_custom_nomore2 = common_vendor.resolveComponent("custom-nomore");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_z_paging2 = common_vendor.resolveComponent("z-paging");
  (_easycom_custom_nav_bar2 + _easycom_custom_refresher2 + _easycom_custom_nomore2 + _easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_z_paging2)();
}
const _easycom_custom_nav_bar = () => "../../components/custom-nav-bar/custom-nav-bar.js";
const _easycom_custom_refresher = () => "../../components/custom-refresher/custom-refresher.js";
const _easycom_custom_nomore = () => "../../components/custom-nomore/custom-nomore.js";
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_z_paging = () => "../../uni_modules/z-paging/components/z-paging/z-paging.js";
if (!Math) {
  (_easycom_custom_nav_bar + _easycom_custom_refresher + _easycom_custom_nomore + _easycom_uni_list_item + _easycom_uni_list + _easycom_z_paging)();
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
            a: "0b57bec3-2-" + i0 + ",0b57bec3-0",
            b: common_vendor.p({
              status: refresherStatus
            }),
            c: i0,
            d: s0
          };
        }, {
          name: "refresher",
          path: "b",
          vueId: "0b57bec3-0"
        }),
        c: common_vendor.f(essayList.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.essayTitle),
            b: common_vendor.t(item.essayAuthorName),
            c: common_vendor.t(item.essayTime),
            d: item.essayImgs,
            e: index,
            f: "0b57bec3-5-" + i0 + ",0b57bec3-4",
            g: common_vendor.p({
              direction: "row",
              to: "/pages/detail/detail?essayId=" + item.essayId
            })
          };
        }),
        d: common_vendor.sr(paging, "0b57bec3-0", {
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
