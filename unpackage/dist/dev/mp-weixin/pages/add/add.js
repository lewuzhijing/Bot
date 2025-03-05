"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_uni_icons = common_vendor.resolveComponent("uni-icons");
  const _component_uni_popup_message = common_vendor.resolveComponent("uni-popup-message");
  const _component_uni_popup = common_vendor.resolveComponent("uni-popup");
  (_component_uni_icons + _component_uni_popup_message + _component_uni_popup)();
}
const _sfc_main = {
  __name: "add",
  setup(__props) {
    const imglist = common_vendor.ref([]);
    const title = common_vendor.ref("");
    const content = common_vendor.ref("");
    const messageText = common_vendor.ref("");
    const msgType = common_vendor.ref("success");
    const isFormComplete = common_vendor.computed(() => {
      return title.value.trim() !== "" && content.value.trim() !== "" && imglist.value.length > 0;
    });
    function generateRandomId(length) {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
    const upImage = () => {
      common_vendor.index.__f__("log", "at pages/add/add.vue:92", "选择图片");
      const essayId = generateRandomId(7);
      common_vendor.index.__f__("log", "at pages/add/add.vue:94", "文章id" + essayId);
      common_vendor.index.chooseImage({
        count: 9 - imglist.value.length,
        sizeType: ["compressed"],
        sourceType: ["album", "camera"],
        success: (res) => {
          imglist.value = imglist.value.concat(res.tempFilePaths);
          common_vendor.index.__f__("log", "at pages/add/add.vue:101", "当前图片列表:", imglist.value);
        },
        fail: (err) => {
          common_vendor.index.__f__("error", "at pages/add/add.vue:104", "图片选择失败", err);
        }
      });
    };
    const toAdd = async () => {
      common_vendor.index.__f__("log", "at pages/add/add.vue:112", "开始上传图片和附加参数");
      const essayId = generateRandomId(7);
      common_vendor.index.__f__("log", "at pages/add/add.vue:114", "文章id", essayId);
      let imgulr = "";
      const uploadPromises = imglist.value.map((item, index) => {
        return new Promise((resolve, reject) => {
          common_vendor.index.uploadFile({
            url: "http://148.100.78.168:http://112.124.63.215:3000/essay/uploadImg",
            // 上传图片的接口
            filePath: item,
            // 图片路径
            name: "essayImgs",
            // 上传字段名
            success: (uploadFileRes) => {
              common_vendor.index.__f__("log", "at pages/add/add.vue:125", uploadFileRes.data, "=》》》》");
              try {
                let imgData = JSON.parse(uploadFileRes.data);
                imgulr += imgData.data + ",";
                common_vendor.index.__f__("log", "at pages/add/add.vue:129", "imgulr:", imgulr);
                resolve();
              } catch (error) {
                reject("图片上传失败");
              }
            },
            fail: (error) => {
              common_vendor.index.__f__("error", "at pages/add/add.vue:136", "图片上传失败,因为内容过大,", error);
              reject("图片上传失败");
            }
          });
        });
      });
      try {
        await Promise.all(uploadPromises);
        common_vendor.index.request({
          url: "http://148.100.78.168:http://112.124.63.215:3000/essay/add",
          // 后端添加文章接口
          method: "POST",
          data: {
            "essayAuthorId": common_vendor.index.getStorageSync("userId"),
            "essayTitle": title.value,
            "essayContent": content.value,
            "essayId": essayId,
            "essayImgs": imgulr.slice(0, -1),
            "essayAuthorName": common_vendor.index.getStorageSync("userName")
          },
          success: (res) => {
            common_vendor.index.__f__("log", "at pages/add/add.vue:160", "文章添加成功", res);
            common_vendor.index.showToast({
              title: "文章发布成功！"
            });
            imglist.value = "";
            title.value = "";
            content.value = "";
            common_vendor.index.navigateTo({
              url: "/pages/detail/detail?essayId=" + essayId
            });
          },
          fail: (err) => {
            common_vendor.index.__f__("log", "at pages/add/add.vue:173", "文章添加失败", err);
            common_vendor.index.showToast({
              title: "文章发布失败",
              icon: "error"
            });
          }
        });
      } catch (error) {
        common_vendor.index.__f__("error", "at pages/add/add.vue:181", "图片上传失败", error);
        common_vendor.index.showToast({
          title: "图片上传失败，请重试",
          icon: "none"
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(imglist.value, (item, index, i0) => {
          return {
            a: item,
            b: index
          };
        }),
        b: common_vendor.p({
          type: "plusempty",
          size: "20"
        }),
        c: common_vendor.o(upImage),
        d: title.value,
        e: common_vendor.o(($event) => title.value = $event.detail.value),
        f: content.value,
        g: common_vendor.o(($event) => content.value = $event.detail.value),
        h: common_vendor.n({
          active: isFormComplete.value
        }),
        i: !isFormComplete.value,
        j: common_vendor.o(toAdd),
        k: common_vendor.p({
          type: msgType.value,
          message: messageText.value,
          duration: 2e3
        }),
        l: common_vendor.sr("message", "e8d2fd40-1"),
        m: common_vendor.p({
          type: "message"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e8d2fd40"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/add/add.js.map
