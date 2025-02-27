"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uv_empty2 = common_vendor.resolveComponent("uv-empty");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_uni_search_bar2 + _easycom_uni_icons2 + _easycom_uv_empty2 + _easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_uni_load_more2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uv_empty = () => "../../uni_modules/uv-empty/components/uv-empty/uv-empty.js";
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_uni_icons + _easycom_uv_empty + _easycom_uni_list_item + _easycom_uni_list + _easycom_uni_load_more)();
}
const _sfc_main = {
  __name: "search",
  setup(__props) {
    const queryParams = common_vendor.ref({
      pageNum: 1,
      pageSize: 10,
      keyword: ""
    });
    const onCancel = () => {
      common_vendor.index.navigateBack({
        delta: 1
      });
    };
    const historySearch = common_vendor.ref(common_vendor.index.getStorageSync("historySearch") || []);
    const recommendList = common_vendor.ref(["怪物猎人", "steam", "孩子们"]);
    const noData = common_vendor.ref(false);
    const noSearch = common_vendor.ref(false);
    const classList = common_vendor.ref([]);
    const onSearch = () => {
      common_vendor.index.showLoading();
      historySearch.value = [.../* @__PURE__ */ new Set([queryParams.value.keyword, ...historySearch.value])].slice(0, 10);
      initParams(queryParams.value.keyword);
      searchData();
      console.log(queryParams.value.keyword);
    };
    const onClear = () => {
      initParams();
    };
    const clickTab = (value) => {
      initParams(value);
      onSearch();
    };
    const removeHistory = () => {
      common_vendor.index.showModal({
        title: "是否清空历史搜索？",
        success: (res) => {
          if (res.confirm) {
            common_vendor.index.removeStorageSync("historySearch");
            historySearch.value = [];
          }
        }
      });
    };
    const searchData = async () => {
      try {
        let res = await api_apis.apiQueryList(queryParams.value.pageNum, queryParams.value.keyword);
        classList.value = [...classList.value, ...res.list];
        if (queryParams.value.pageSize > res.list.length) {
          console.log(queryParams.value.pageSize);
          noData.value = true;
          console.log(noData.value);
        }
        if (res.list.length == 0 && classList.value.length == 0)
          noSearch.value = true;
        console.log(res);
      } finally {
        common_vendor.index.hideLoading();
      }
    };
    const initParams = (value = "") => {
      classList.value = [];
      noData.value = false;
      noSearch.value = false;
      queryParams.value = {
        pageNum: 1,
        pageSize: 10,
        keyword: value || ""
      };
    };
    common_vendor.onReachBottom(() => {
      if (noData.value) {
        console.log("没有更多数据");
        return;
      }
      queryParams.value.pageNum++;
      searchData();
    });
    common_vendor.onUnload(() => {
      common_vendor.index.removeStorageSync("storgClassList", classList.value);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(onSearch),
        b: common_vendor.o(onCancel),
        c: common_vendor.o(onClear),
        d: common_vendor.o(($event) => queryParams.value.keyword = $event),
        e: common_vendor.p({
          focus: true,
          placeholder: "搜索",
          modelValue: queryParams.value.keyword
        }),
        f: !classList.value.length || noSearch.value
      }, !classList.value.length || noSearch.value ? common_vendor.e({
        g: historySearch.value.length
      }, historySearch.value.length ? {
        h: common_vendor.p({
          type: "trash",
          size: "25"
        }),
        i: common_vendor.o(removeHistory),
        j: common_vendor.f(historySearch.value, (tab, k0, i0) => {
          return {
            a: common_vendor.t(tab),
            b: tab,
            c: common_vendor.o(($event) => clickTab(tab), tab)
          };
        })
      } : {}, {
        k: common_vendor.f(recommendList.value, (tab, k0, i0) => {
          return {
            a: common_vendor.t(tab),
            b: tab,
            c: common_vendor.o(($event) => clickTab(tab), tab)
          };
        })
      }) : {}, {
        l: noSearch.value
      }, noSearch.value ? {
        m: common_vendor.p({
          mode: "search",
          icon: "http://cdn.uviewui.com/uview/empty/search.png"
        })
      } : common_vendor.e({
        n: common_vendor.f(classList.value, (item, index, i0) => {
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
            f: "c10c040c-5-" + i0 + "," + ("c10c040c-4-" + i0),
            g: common_vendor.t(item.essayReviews),
            h: "c10c040c-6-" + i0 + "," + ("c10c040c-4-" + i0),
            i: common_vendor.t(item.essayLikes),
            j: index,
            k: "c10c040c-4-" + i0 + ",c10c040c-3",
            l: common_vendor.p({
              direction: "column",
              to: "/pages/detail/detail?essayId=" + item.essayId
            })
          };
        }),
        o: common_vendor.p({
          type: "chat",
          size: "20"
        }),
        p: common_vendor.p({
          type: "hand-up",
          size: "20"
        }),
        q: noData.value || classList.value.length
      }, noData.value || classList.value.length ? {
        r: common_vendor.p({
          status: noData.value ? "noMore" : "loading"
        })
      } : {}));
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c10c040c"]]);
wx.createPage(MiniProgramPage);
