"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
const utils_system = require("../../utils/system.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_custom_refresher2 = common_vendor.resolveComponent("custom-refresher");
  const _easycom_custom_nomore2 = common_vendor.resolveComponent("custom-nomore");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_z_paging2 = common_vendor.resolveComponent("z-paging");
  (_easycom_uni_icons2 + _easycom_custom_refresher2 + _easycom_custom_nomore2 + _easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_z_paging2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_custom_refresher = () => "../../components/custom-refresher/custom-refresher.js";
const _easycom_custom_nomore = () => "../../components/custom-nomore/custom-nomore.js";
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_z_paging = () => "../../uni_modules/z-paging/components/z-paging/z-paging.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_custom_refresher + _easycom_custom_nomore + _easycom_uni_list_item + _easycom_uni_list + _easycom_z_paging)();
}
const _sfc_main = {
  __name: "userInfo",
  setup(__props) {
    const essayList = common_vendor.ref([]);
    const paging = common_vendor.ref();
    const title = common_vendor.ref();
    const queryList = async (pageNo, pageSize) => {
      let data = {
        "pageNo": pageNo,
        "info": title.value,
        "userId": common_vendor.index.getStorageSync("userId")
      };
      let res = await api_apis.apiGetMyInfo(data);
      paging.value.complete(res.list);
    };
    common_vendor.onLoad((e) => {
      if (e.key === "essay") {
        title.value = "我的帖子";
      } else if (e.key == "comment") {
        title.value = "我的评论";
      } else {
        title.value = "我的点赞";
      }
    });
    const reback = () => {
      common_vendor.index.navigateBack({
        delta: 1
        //返回层数，2则上上页
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(reback),
        b: common_vendor.p({
          type: "left",
          size: "30"
        }),
        c: common_vendor.t(title.value),
        d: common_vendor.unref(utils_system.getStatusBarHeight)() + common_vendor.unref(utils_system.getTitleBarHeight)() + "px",
        e: common_vendor.unref(utils_system.getStatusBarHeight)() + common_vendor.unref(utils_system.getTitleBarHeight)() + "px",
        f: common_vendor.w(({
          refresherStatus
        }, s0, i0) => {
          return {
            a: "2f34225a-2-" + i0 + ",2f34225a-0",
            b: common_vendor.p({
              status: refresherStatus
            }),
            c: i0,
            d: s0
          };
        }, {
          name: "refresher",
          path: "f",
          vueId: "2f34225a-0"
        }),
        g: common_vendor.f(essayList.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.essayTitle),
            b: common_vendor.t(item.essayAuthorName),
            c: common_vendor.t(item.essayTime),
            d: item.essayImgs,
            e: index,
            f: "2f34225a-5-" + i0 + ",2f34225a-4",
            g: common_vendor.p({
              direction: "row",
              to: "/pages/detail/detail?essayId=" + item.essayId
            })
          };
        }),
        h: common_vendor.sr(paging, "2f34225a-0", {
          "k": "paging"
        }),
        i: common_vendor.o(queryList),
        j: common_vendor.o(($event) => essayList.value = $event),
        k: common_vendor.p({
          modelValue: essayList.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2f34225a"]]);
wx.createPage(MiniProgramPage);
