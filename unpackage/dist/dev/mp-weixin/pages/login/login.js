"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_uni_icons = common_vendor.resolveComponent("uni-icons");
  const _component_uni_forms_item = common_vendor.resolveComponent("uni-forms-item");
  const _component_uni_forms = common_vendor.resolveComponent("uni-forms");
  const _component_uni_popup_message = common_vendor.resolveComponent("uni-popup-message");
  const _component_uni_popup = common_vendor.resolveComponent("uni-popup");
  (_component_uni_icons + _component_uni_forms_item + _component_uni_forms + _component_uni_popup_message + _component_uni_popup)();
}
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const formData = common_vendor.ref({
      user: "",
      password: ""
    });
    const msgType = common_vendor.ref("success");
    const messageText = common_vendor.ref("登录成功");
    const message = common_vendor.ref(null);
    const isFormComplete = common_vendor.computed(() => {
      return formData.value.user.trim() !== "" && formData.value.password.trim() !== "";
    });
    const toLogin = () => {
      common_vendor.index.request({
        url: "http://112.124.63.215:3000/user/login",
        method: "POST",
        data: {
          "userId": formData.value.user,
          "userPassword": formData.value.password
        }
      }).then((res) => {
        if (res.data.code === 1) {
          common_vendor.index.setStorageSync("userId", res.data.data.userId);
          if (message.value && typeof message.value.open === "function") {
            message.value.open();
          }
          common_vendor.index.reLaunch({
            url: "/pages/user/user"
          });
        } else {
          common_vendor.index.__f__("log", "at pages/login/login.vue:96", "登录失败");
          msgType.value = "error";
          messageText.value = "账号或密码错误，请重试";
          if (message.value && typeof message.value.open === "function") {
            message.value.open();
          }
        }
      }).catch((error) => {
        common_vendor.index.__f__("log", "at pages/login/login.vue:104", "登录失败");
        msgType.value = "error";
        messageText.value = "服务器失联了，请稍后再尝试";
        if (message.value && typeof message.value.open === "function") {
          message.value.open();
        }
      });
    };
    function reback() {
      common_vendor.index.switchTab({
        url: "/pages/user/user"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(reback),
        b: common_vendor.p({
          type: "left",
          size: "28"
        }),
        c: formData.value.user,
        d: common_vendor.o(($event) => formData.value.user = $event.detail.value),
        e: common_vendor.p({
          label: "账号",
          name: "user"
        }),
        f: formData.value.password,
        g: common_vendor.o(($event) => formData.value.password = $event.detail.value),
        h: common_vendor.p({
          label: "密码",
          name: "password"
        }),
        i: common_vendor.p({
          modelValue: formData.value
        }),
        j: common_vendor.n({
          active: isFormComplete.value
        }),
        k: !isFormComplete.value,
        l: common_vendor.o(toLogin),
        m: common_vendor.p({
          type: msgType.value,
          message: messageText.value,
          duration: 2e3
        }),
        n: common_vendor.sr(message, "e4e4508d-4", {
          "k": "message"
        }),
        o: common_vendor.p({
          type: "center"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e4e4508d"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/login.js.map
