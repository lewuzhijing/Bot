"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _component_uni_icons = common_vendor.resolveComponent("uni-icons");
  const _component_uni_popup = common_vendor.resolveComponent("uni-popup");
  (_component_uni_icons + _component_uni_popup)();
}
const _sfc_main = {
  __name: "comment-item",
  props: ["item"],
  setup(__props) {
    const commentPopup = common_vendor.ref(null);
    const content = common_vendor.ref("");
    const setFocus = common_vendor.ref(Boolean);
    const props = __props;
    const toCommentId = common_vendor.ref(0);
    const rootCommentId = common_vendor.ref(0);
    const subCommentName = common_vendor.ref("");
    const essayId = common_vendor.ref("");
    const likeComment = (commentId, likes) => {
      if (likes) {
        common_vendor.index.__f__("log", "at components/comment-item/comment-item.vue:85", `取消点赞，评论ID: ${commentId}`);
        props.item.isCommentLikes = false;
        props.item.commentLikeCount -= 1;
      } else {
        common_vendor.index.__f__("log", "at components/comment-item/comment-item.vue:90", `点赞，评论ID: ${commentId}`);
        props.item.isCommentLikes = true;
        props.item.commentLikeCount += 1;
      }
      common_vendor.index.request({
        url: "http://148.100.78.168:3000/likes/likes",
        method: "POST",
        data: {
          "userId": common_vendor.index.getStorageSync("userId"),
          "toCommentId": commentId,
          "likes": props.item.isCommentLikes
        }
      });
    };
    const add = async () => {
      if (common_vendor.index.getStorageSync("userId") == "" || common_vendor.index.getStorageSync("userId") == null) {
        common_vendor.index.showToast({
          title: "未登录",
          icon: "error"
        });
        common_vendor.index.__f__("log", "at components/comment-item/comment-item.vue:114", "未登录");
      } else {
        let data = {
          content: content.value,
          userId: common_vendor.index.getStorageSync("userId"),
          essayId: essayId.value,
          toCommentId: toCommentId.value,
          userImg: common_vendor.index.getStorageSync("userImg"),
          userName: common_vendor.index.getStorageSync("userName"),
          rootCommentId: rootCommentId.value,
          subCommentName: subCommentName.value
        };
        let res = await api_apis.apiAddComment(data);
        common_vendor.index.showToast({
          title: "发布评论成功！"
        });
        common_vendor.index.__f__("log", "at components/comment-item/comment-item.vue:131", res);
        content.value = "";
        commentPopup.value.close();
        location.reload();
      }
    };
    const toReply = (a, b, c, d) => {
      common_vendor.index.__f__("log", "at components/comment-item/comment-item.vue:140", a);
      setFocus.value = true;
      commentPopup.value.open();
      toCommentId.value = a;
      rootCommentId.value = b;
      subCommentName.value = c;
      essayId.value = d;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.item.userImg,
        b: common_vendor.t(__props.item.userName),
        c: common_vendor.t(__props.item.creatTime),
        d: common_vendor.t(__props.item.commentLikeCount),
        e: __props.item.isCommentLikes
      }, __props.item.isCommentLikes ? {
        f: common_vendor.p({
          type: "hand-up-filled",
          size: "20",
          color: "#dd524d"
        })
      } : {
        g: common_vendor.p({
          type: "hand-up",
          size: "20",
          color: "#a7a7a7"
        })
      }, {
        h: common_vendor.o(($event) => likeComment(__props.item.commentId, __props.item.isCommentLikes)),
        i: common_vendor.p({
          type: "trash",
          size: "20",
          color: "#a7a7a7"
        }),
        j: common_vendor.t(__props.item.content),
        k: common_vendor.o(($event) => toReply(__props.item.commentId, __props.item.commentId, __props.item.userName, __props.item.essayId)),
        l: __props.item.subCommentList != 0
      }, __props.item.subCommentList != 0 ? {
        m: common_vendor.f(__props.item.subCommentList, (item, index, i0) => {
          return {
            a: common_vendor.t(item.userName),
            b: common_vendor.t(item.subCommentName),
            c: common_vendor.t(item.content),
            d: index,
            e: common_vendor.o(($event) => toReply(item.commentId, item.rootCommentId, item.userName, item.essayId), index)
          };
        }),
        n: common_vendor.t(__props.item.subCommentCount),
        o: common_vendor.p({
          type: "right",
          color: "#a7a7a7",
          size: "16"
        })
      } : {}, {
        p: setFocus.value,
        q: content.value,
        r: common_vendor.o(($event) => content.value = $event.detail.value),
        s: common_vendor.p({
          type: "paperplane",
          size: "26",
          color: "#333"
        }),
        t: common_vendor.o(add),
        v: common_vendor.sr(commentPopup, "c7df51b2-4", {
          "k": "commentPopup"
        }),
        w: common_vendor.p({
          type: "bottom"
        })
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c7df51b2"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/comment-item/comment-item.js.map
