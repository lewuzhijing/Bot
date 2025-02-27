"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_custom_nav_bar2 = common_vendor.resolveComponent("custom-nav-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_custom_refresher2 = common_vendor.resolveComponent("custom-refresher");
  const _easycom_custom_nomore2 = common_vendor.resolveComponent("custom-nomore");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_z_paging2 = common_vendor.resolveComponent("z-paging");
  (_easycom_custom_nav_bar2 + _easycom_uni_icons2 + _easycom_custom_refresher2 + _easycom_custom_nomore2 + _easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_z_paging2)();
}
const _easycom_custom_nav_bar = () => "../../components/custom-nav-bar/custom-nav-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_custom_refresher = () => "../../components/custom-refresher/custom-refresher.js";
const _easycom_custom_nomore = () => "../../components/custom-nomore/custom-nomore.js";
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_z_paging = () => "../../uni_modules/z-paging/components/z-paging/z-paging.js";
if (!Math) {
  (_easycom_custom_nav_bar + _easycom_uni_icons + _easycom_custom_refresher + _easycom_custom_nomore + _easycom_uni_list_item + _easycom_uni_list + _easycom_z_paging)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const paging = common_vendor.ref();
    const list = common_vendor.ref([]);
    const swiper = common_vendor.ref([]);
    const queryList = async (pageNo, pageSize) => {
      let res = await api_apis.apiQueryList(pageNo, "");
      swiper.value = res.list.slice(0, 3);
      paging.value.complete(res.list);
    };
    function toDetail(essayId) {
      common_vendor.index.navigateTo({
        url: "/pages/detail/detail?essayId=" + essayId
      });
    }
    common_vendor.onShow(() => {
      queryList(1);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(swiper.value, (item, k0, i0) => {
          return {
            a: item.essayImgs[0],
            b: common_vendor.o(($event) => toDetail(item.essayId))
          };
        }),
        b: common_vendor.p({
          type: "sound-filled",
          size: "20",
          color: "#1296db"
        }),
        c: common_vendor.f(3, (item, k0, i0) => {
          return {};
        }),
        d: common_vendor.p({
          type: "right",
          size: "16"
        }),
        e: common_vendor.w(({
          refresherStatus
        }, s0, i0) => {
          return {
            a: "1cf27b2a-4-" + i0 + ",1cf27b2a-0",
            b: common_vendor.p({
              status: refresherStatus
            }),
            c: i0,
            d: s0
          };
        }, {
          name: "refresher",
          path: "e",
          vueId: "1cf27b2a-0"
        }),
        f: common_vendor.f(list.value, (item, index, i0) => {
          return {
            a: item.essayAuthorImg,
            b: common_vendor.t(item.essayAuthorName),
            c: common_vendor.t(item.essayTitle),
            d: common_vendor.t(item.essayContent),
            e: common_vendor.f(item.essayImgs, (i, k1, i1) => {
              return {
                a: i
              };
            }),
            f: "1cf27b2a-8-" + i0 + "," + ("1cf27b2a-7-" + i0),
            g: common_vendor.t(item.essayReviews),
            h: "1cf27b2a-9-" + i0 + "," + ("1cf27b2a-7-" + i0),
            i: common_vendor.t(item.essayLikes),
            j: index,
            k: "1cf27b2a-7-" + i0 + ",1cf27b2a-6",
            l: common_vendor.p({
              direction: "column",
              to: "/pages/detail/detail?essayId=" + item.essayId
            })
          };
        }),
        g: common_vendor.p({
          type: "chat",
          size: "20"
        }),
        h: common_vendor.p({
          type: "hand-up",
          size: "20"
        }),
        i: common_vendor.sr(paging, "1cf27b2a-0", {
          "k": "paging"
        }),
        j: common_vendor.o(queryList),
        k: common_vendor.o(($event) => list.value = $event),
        l: common_vendor.p({
          modelValue: list.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
