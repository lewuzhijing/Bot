"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_comment_item2 = common_vendor.resolveComponent("comment-item");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_comment_item2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_comment_item = () => "../../components/comment-item/comment-item.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_comment_item + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "detail",
  setup(__props) {
    const setFocus = common_vendor.ref(Boolean);
    const commentPopup = common_vendor.ref(null);
    const content = common_vendor.ref("");
    common_vendor.ref();
    const essay = common_vendor.ref({
      essayId: "",
      essayTitle: "",
      essayContent: "",
      essayTime: "",
      essayImgs: [],
      essayAuthorName: "",
      essayAuthorImg: "",
      essayLikes: 0,
      essayReviews: 0
    });
    const comments = common_vendor.ref([]);
    const likes = common_vendor.ref();
    const likeEssay = async (esssayId) => {
      if (common_vendor.index.getStorageSync("userId") != null && common_vendor.index.getStorageSync("userId") != "") {
        console.log(likes.value);
        if (likes.value) {
          console.log(`取消点赞，`);
          likes.value = false;
          essay.value.essayLikes -= 1;
        } else {
          console.log(`点赞`);
          essay.value.essayLikes = 1 + essay.value.essayLikes;
          console.log(essay.value.essayLikes);
          likes.value = true;
        }
        let data = {
          "userId": common_vendor.index.getStorageSync("userId"),
          "essayId": essay.value.essayId,
          "likes": likes.value
        };
        await api_apis.apiLikesEssay(data);
      } else {
        common_vendor.index.showToast({
          title: "未登录",
          icon: "error"
        });
      }
    };
    const handComment = () => {
      console.log("评论");
      setFocus.value = true;
      commentPopup.value.open();
    };
    const addComment = async () => {
      if (common_vendor.index.getStorageSync("userId") == "" || common_vendor.index.getStorageSync("userId") == null) {
        common_vendor.index.showToast({
          title: "未登录",
          icon: "error"
        });
        console.log("未登录");
      } else {
        let data = {
          content: content.value,
          userId: common_vendor.index.getStorageSync("userId"),
          essayId: essay.value.essayId,
          userImg: common_vendor.index.getStorageSync("userImg"),
          userName: common_vendor.index.getStorageSync("userName")
        };
        let res = await api_apis.apiAddComment(data);
        common_vendor.index.showToast({
          title: "发布评论成功！"
        });
        console.log(res);
        content.value = "";
        commentPopup.value.close();
        let commentRes = await api_apis.apiGetComment(essay.value.essayId, 1);
        comments.value = commentRes.list;
      }
    };
    const reback = () => {
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
    };
    common_vendor.onLoad(async (e) => {
      console.log("跳转文章id", e.essayId);
      essay.value.essayId = e.essayId;
      let essayRes = await api_apis.apiGetEssay(e.essayId);
      essay.value = essayRes.data;
      let commentRes = await api_apis.apiGetComment(e.essayId, 1);
      comments.value = commentRes.list;
      let likesRes = await api_apis.apiIsToEssayLikes(e.essayId);
      likes.value = likesRes.data;
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(reback),
        b: common_vendor.p({
          type: "left",
          size: "20"
        }),
        c: common_vendor.unref(utils_system.getStatusBarHeight)() + common_vendor.unref(utils_system.getTitleBarHeight)() + "px",
        d: common_vendor.f(essay.value.essayImgs, (item, index, i0) => {
          return {
            a: item,
            b: index
          };
        }),
        e: common_vendor.o((...args) => _ctx.change && _ctx.change(...args)),
        f: essay.value.essayAuthorImg,
        g: common_vendor.t(essay.value.essayAuthorName),
        h: common_vendor.t(essay.value.essayTitle),
        i: common_vendor.t(essay.value.essayContent),
        j: common_vendor.t(essay.value.essayTime),
        k: likes.value
      }, likes.value ? {
        l: common_vendor.p({
          type: "hand-up-filled",
          size: "20",
          color: "#dd524d"
        })
      } : {
        m: common_vendor.p({
          type: "hand-up",
          size: "20",
          color: "#8f9095"
        })
      }, {
        n: common_vendor.t(essay.value.essayLikes),
        o: common_vendor.o(($event) => likeEssay(essay.value.essayId)),
        p: common_vendor.f(comments.value, (item, index, i0) => {
          return {
            a: "eca06f3c-3-" + i0,
            b: common_vendor.p({
              item
            }),
            c: index
          };
        }),
        q: common_vendor.o(($event) => handComment()),
        r: common_vendor.p({
          type: "paperplane",
          size: "26",
          color: "#333"
        }),
        s: setFocus.value,
        t: content.value,
        v: common_vendor.o(($event) => content.value = $event.detail.value),
        w: common_vendor.p({
          type: "paperplane",
          size: "26",
          color: "#333"
        }),
        x: common_vendor.o(addComment),
        y: common_vendor.sr(commentPopup, "eca06f3c-5", {
          "k": "commentPopup"
        }),
        z: common_vendor.p({
          type: "bottom"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-eca06f3c"]]);
wx.createPage(MiniProgramPage);
