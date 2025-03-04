"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _component_uni_icons = common_vendor.resolveComponent("uni-icons");
  _component_uni_icons();
}
const _sfc_main = {
  __name: "user",
  setup(__props) {
    const user = common_vendor.ref({
      userName: "未登录",
      userImg: "../../static/tx.png",
      likes: 0,
      reviews: 0,
      essay: 0
    });
    const login = common_vendor.ref(false);
    const toInfo = (key) => {
      common_vendor.index.__f__("log", "at pages/user/user.vue:71", 111111);
      common_vendor.index.navigateTo({
        url: "/pages/user/userInfo?key=" + key
      });
    };
    const out = () => {
      common_vendor.index.removeStorageSync("userId");
      common_vendor.index.removeStorageSync("userImg");
      common_vendor.index.removeStorageSync("userName");
      common_vendor.index.reLaunch({
        url: "/pages/user/user"
      });
    };
    function toLogin() {
      if (common_vendor.index.getStorageSync("userId") == "" || common_vendor.index.getStorageSync("userId") == null) {
        common_vendor.index.reLaunch({
          url: "/pages/login/login"
        });
      } else {
        common_vendor.index.__f__("log", "at pages/user/user.vue:96", common_vendor.index.getStorageSync("userId"));
        return;
      }
    }
    common_vendor.onShow(async () => {
      const userId = common_vendor.index.getStorageSync("userId");
      common_vendor.index.__f__("log", "at pages/user/user.vue:106", "获取到的 userId:", userId);
      if (userId != null && userId != "") {
        login.value = true;
        let res = await api_apis.apiGetUser(userId);
        common_vendor.index.__f__("log", "at pages/user/user.vue:112", res.data);
        user.value = res.data;
        common_vendor.index.setStorageSync("userImg", user.value.userImg);
        common_vendor.index.setStorageSync("userName", user.value.userName);
        common_vendor.index.__f__("log", "at pages/user/user.vue:117", user.value);
      } else {
        common_vendor.index.navigateTo({
          url: "/pages/login/login"
        });
      }
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: login.value
      }, login.value ? {
        b: common_vendor.p({
          type: "forward",
          size: "25"
        }),
        c: common_vendor.o(out)
      } : {}, {
        d: user.value.userImg,
        e: common_vendor.t(user.value.userName),
        f: common_vendor.o(($event) => toLogin()),
        g: common_vendor.p({
          type: "compose",
          size: "20",
          color: "#1296db"
        }),
        h: common_vendor.t(user.value.essay),
        i: common_vendor.p({
          type: "right",
          size: "20"
        }),
        j: common_vendor.o(($event) => toInfo("essay")),
        k: common_vendor.p({
          type: "chat",
          size: "20",
          color: "#1296db"
        }),
        l: common_vendor.t(user.value.reviews),
        m: common_vendor.p({
          type: "right",
          size: "20"
        }),
        n: common_vendor.o(($event) => toInfo("comment")),
        o: common_vendor.p({
          type: "hand-up",
          size: "20",
          color: "#1296db"
        }),
        p: common_vendor.t(user.value.likes),
        q: common_vendor.p({
          type: "right",
          size: "20"
        }),
        r: common_vendor.o(($event) => toInfo("likes"))
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/user.js.map
