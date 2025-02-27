"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_popup_message2 = common_vendor.resolveComponent("uni-popup-message");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_popup_message2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_popup_message = () => "../../uni_modules/uni-popup/components/uni-popup-message/uni-popup-message.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_popup_message + _easycom_uni_popup)();
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
      console.log("选择图片");
      const essayId = generateRandomId(7);
      console.log("文章id" + essayId);
      common_vendor.index.chooseImage({
        count: 9 - imglist.value.length,
        sizeType: ["compressed"],
        sourceType: ["album", "camera"],
        success: (res) => {
          imglist.value = imglist.value.concat(res.tempFilePaths);
          console.log("当前图片列表:", imglist.value);
        },
        fail: (err) => {
          console.error("图片选择失败", err);
        }
      });
    };
    const toAdd = async () => {
      console.log("开始上传图片和附加参数");
      const essayId = generateRandomId(7);
      console.log("文章id", essayId);
      let imgulr = "";
      const uploadPromises = imglist.value.map((item, index) => {
        return new Promise((resolve, reject) => {
          common_vendor.index.uploadFile({
            url: "http://localhost:8080/essay/uploadImg",
            // 上传图片的接口
            filePath: item,
            // 图片路径
            name: "essayImgs",
            // 上传字段名
            success: (uploadFileRes) => {
              console.log(uploadFileRes.data, "=》》》》");
              try {
                let imgData = JSON.parse(uploadFileRes.data);
                imgulr += imgData.data + ",";
                console.log("imgulr:", imgulr);
                resolve();
              } catch (error) {
                reject("图片上传失败");
              }
            },
            fail: (error) => {
              console.error("图片上传失败,因为内容过大,", error);
              reject("图片上传失败");
            }
          });
        });
      });
      try {
        await Promise.all(uploadPromises);
        common_vendor.index.request({
          url: "http://localhost:8080/essay/add",
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
            console.log("文章添加成功", res);
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
            console.log("文章添加失败", err);
            common_vendor.index.showToast({
              title: "文章发布失败",
              icon: "error"
            });
          }
        });
      } catch (error) {
        console.error("图片上传失败", error);
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
