if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  var _e, _f, _g, _h;
  const fontData = [
    {
      "font_class": "arrow-down",
      "unicode": ""
    },
    {
      "font_class": "arrow-left",
      "unicode": ""
    },
    {
      "font_class": "arrow-right",
      "unicode": ""
    },
    {
      "font_class": "arrow-up",
      "unicode": ""
    },
    {
      "font_class": "auth",
      "unicode": ""
    },
    {
      "font_class": "auth-filled",
      "unicode": ""
    },
    {
      "font_class": "back",
      "unicode": ""
    },
    {
      "font_class": "bars",
      "unicode": ""
    },
    {
      "font_class": "calendar",
      "unicode": ""
    },
    {
      "font_class": "calendar-filled",
      "unicode": ""
    },
    {
      "font_class": "camera",
      "unicode": ""
    },
    {
      "font_class": "camera-filled",
      "unicode": ""
    },
    {
      "font_class": "cart",
      "unicode": ""
    },
    {
      "font_class": "cart-filled",
      "unicode": ""
    },
    {
      "font_class": "chat",
      "unicode": ""
    },
    {
      "font_class": "chat-filled",
      "unicode": ""
    },
    {
      "font_class": "chatboxes",
      "unicode": ""
    },
    {
      "font_class": "chatboxes-filled",
      "unicode": ""
    },
    {
      "font_class": "chatbubble",
      "unicode": ""
    },
    {
      "font_class": "chatbubble-filled",
      "unicode": ""
    },
    {
      "font_class": "checkbox",
      "unicode": ""
    },
    {
      "font_class": "checkbox-filled",
      "unicode": ""
    },
    {
      "font_class": "checkmarkempty",
      "unicode": ""
    },
    {
      "font_class": "circle",
      "unicode": ""
    },
    {
      "font_class": "circle-filled",
      "unicode": ""
    },
    {
      "font_class": "clear",
      "unicode": ""
    },
    {
      "font_class": "close",
      "unicode": ""
    },
    {
      "font_class": "closeempty",
      "unicode": ""
    },
    {
      "font_class": "cloud-download",
      "unicode": ""
    },
    {
      "font_class": "cloud-download-filled",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload-filled",
      "unicode": ""
    },
    {
      "font_class": "color",
      "unicode": ""
    },
    {
      "font_class": "color-filled",
      "unicode": ""
    },
    {
      "font_class": "compose",
      "unicode": ""
    },
    {
      "font_class": "contact",
      "unicode": ""
    },
    {
      "font_class": "contact-filled",
      "unicode": ""
    },
    {
      "font_class": "down",
      "unicode": ""
    },
    {
      "font_class": "bottom",
      "unicode": ""
    },
    {
      "font_class": "download",
      "unicode": ""
    },
    {
      "font_class": "download-filled",
      "unicode": ""
    },
    {
      "font_class": "email",
      "unicode": ""
    },
    {
      "font_class": "email-filled",
      "unicode": ""
    },
    {
      "font_class": "eye",
      "unicode": ""
    },
    {
      "font_class": "eye-filled",
      "unicode": ""
    },
    {
      "font_class": "eye-slash",
      "unicode": ""
    },
    {
      "font_class": "eye-slash-filled",
      "unicode": ""
    },
    {
      "font_class": "fire",
      "unicode": ""
    },
    {
      "font_class": "fire-filled",
      "unicode": ""
    },
    {
      "font_class": "flag",
      "unicode": ""
    },
    {
      "font_class": "flag-filled",
      "unicode": ""
    },
    {
      "font_class": "folder-add",
      "unicode": ""
    },
    {
      "font_class": "folder-add-filled",
      "unicode": ""
    },
    {
      "font_class": "font",
      "unicode": ""
    },
    {
      "font_class": "forward",
      "unicode": ""
    },
    {
      "font_class": "gear",
      "unicode": ""
    },
    {
      "font_class": "gear-filled",
      "unicode": ""
    },
    {
      "font_class": "gift",
      "unicode": ""
    },
    {
      "font_class": "gift-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-down",
      "unicode": ""
    },
    {
      "font_class": "hand-down-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-up",
      "unicode": ""
    },
    {
      "font_class": "hand-up-filled",
      "unicode": ""
    },
    {
      "font_class": "headphones",
      "unicode": ""
    },
    {
      "font_class": "heart",
      "unicode": ""
    },
    {
      "font_class": "heart-filled",
      "unicode": ""
    },
    {
      "font_class": "help",
      "unicode": ""
    },
    {
      "font_class": "help-filled",
      "unicode": ""
    },
    {
      "font_class": "home",
      "unicode": ""
    },
    {
      "font_class": "home-filled",
      "unicode": ""
    },
    {
      "font_class": "image",
      "unicode": ""
    },
    {
      "font_class": "image-filled",
      "unicode": ""
    },
    {
      "font_class": "images",
      "unicode": ""
    },
    {
      "font_class": "images-filled",
      "unicode": ""
    },
    {
      "font_class": "info",
      "unicode": ""
    },
    {
      "font_class": "info-filled",
      "unicode": ""
    },
    {
      "font_class": "left",
      "unicode": ""
    },
    {
      "font_class": "link",
      "unicode": ""
    },
    {
      "font_class": "list",
      "unicode": ""
    },
    {
      "font_class": "location",
      "unicode": ""
    },
    {
      "font_class": "location-filled",
      "unicode": ""
    },
    {
      "font_class": "locked",
      "unicode": ""
    },
    {
      "font_class": "locked-filled",
      "unicode": ""
    },
    {
      "font_class": "loop",
      "unicode": ""
    },
    {
      "font_class": "mail-open",
      "unicode": ""
    },
    {
      "font_class": "mail-open-filled",
      "unicode": ""
    },
    {
      "font_class": "map",
      "unicode": ""
    },
    {
      "font_class": "map-filled",
      "unicode": ""
    },
    {
      "font_class": "map-pin",
      "unicode": ""
    },
    {
      "font_class": "map-pin-ellipse",
      "unicode": ""
    },
    {
      "font_class": "medal",
      "unicode": ""
    },
    {
      "font_class": "medal-filled",
      "unicode": ""
    },
    {
      "font_class": "mic",
      "unicode": ""
    },
    {
      "font_class": "mic-filled",
      "unicode": ""
    },
    {
      "font_class": "micoff",
      "unicode": ""
    },
    {
      "font_class": "micoff-filled",
      "unicode": ""
    },
    {
      "font_class": "minus",
      "unicode": ""
    },
    {
      "font_class": "minus-filled",
      "unicode": ""
    },
    {
      "font_class": "more",
      "unicode": ""
    },
    {
      "font_class": "more-filled",
      "unicode": ""
    },
    {
      "font_class": "navigate",
      "unicode": ""
    },
    {
      "font_class": "navigate-filled",
      "unicode": ""
    },
    {
      "font_class": "notification",
      "unicode": ""
    },
    {
      "font_class": "notification-filled",
      "unicode": ""
    },
    {
      "font_class": "paperclip",
      "unicode": ""
    },
    {
      "font_class": "paperplane",
      "unicode": ""
    },
    {
      "font_class": "paperplane-filled",
      "unicode": ""
    },
    {
      "font_class": "person",
      "unicode": ""
    },
    {
      "font_class": "person-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled-copy",
      "unicode": ""
    },
    {
      "font_class": "phone",
      "unicode": ""
    },
    {
      "font_class": "phone-filled",
      "unicode": ""
    },
    {
      "font_class": "plus",
      "unicode": ""
    },
    {
      "font_class": "plus-filled",
      "unicode": ""
    },
    {
      "font_class": "plusempty",
      "unicode": ""
    },
    {
      "font_class": "pulldown",
      "unicode": ""
    },
    {
      "font_class": "pyq",
      "unicode": ""
    },
    {
      "font_class": "qq",
      "unicode": ""
    },
    {
      "font_class": "redo",
      "unicode": ""
    },
    {
      "font_class": "redo-filled",
      "unicode": ""
    },
    {
      "font_class": "refresh",
      "unicode": ""
    },
    {
      "font_class": "refresh-filled",
      "unicode": ""
    },
    {
      "font_class": "refreshempty",
      "unicode": ""
    },
    {
      "font_class": "reload",
      "unicode": ""
    },
    {
      "font_class": "right",
      "unicode": ""
    },
    {
      "font_class": "scan",
      "unicode": ""
    },
    {
      "font_class": "search",
      "unicode": ""
    },
    {
      "font_class": "settings",
      "unicode": ""
    },
    {
      "font_class": "settings-filled",
      "unicode": ""
    },
    {
      "font_class": "shop",
      "unicode": ""
    },
    {
      "font_class": "shop-filled",
      "unicode": ""
    },
    {
      "font_class": "smallcircle",
      "unicode": ""
    },
    {
      "font_class": "smallcircle-filled",
      "unicode": ""
    },
    {
      "font_class": "sound",
      "unicode": ""
    },
    {
      "font_class": "sound-filled",
      "unicode": ""
    },
    {
      "font_class": "spinner-cycle",
      "unicode": ""
    },
    {
      "font_class": "staff",
      "unicode": ""
    },
    {
      "font_class": "staff-filled",
      "unicode": ""
    },
    {
      "font_class": "star",
      "unicode": ""
    },
    {
      "font_class": "star-filled",
      "unicode": ""
    },
    {
      "font_class": "starhalf",
      "unicode": ""
    },
    {
      "font_class": "trash",
      "unicode": ""
    },
    {
      "font_class": "trash-filled",
      "unicode": ""
    },
    {
      "font_class": "tune",
      "unicode": ""
    },
    {
      "font_class": "tune-filled",
      "unicode": ""
    },
    {
      "font_class": "undo",
      "unicode": ""
    },
    {
      "font_class": "undo-filled",
      "unicode": ""
    },
    {
      "font_class": "up",
      "unicode": ""
    },
    {
      "font_class": "top",
      "unicode": ""
    },
    {
      "font_class": "upload",
      "unicode": ""
    },
    {
      "font_class": "upload-filled",
      "unicode": ""
    },
    {
      "font_class": "videocam",
      "unicode": ""
    },
    {
      "font_class": "videocam-filled",
      "unicode": ""
    },
    {
      "font_class": "vip",
      "unicode": ""
    },
    {
      "font_class": "vip-filled",
      "unicode": ""
    },
    {
      "font_class": "wallet",
      "unicode": ""
    },
    {
      "font_class": "wallet-filled",
      "unicode": ""
    },
    {
      "font_class": "weibo",
      "unicode": ""
    },
    {
      "font_class": "weixin",
      "unicode": ""
    }
  ];
  const _export_sfc = (sfc, props2) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props2) {
      target[key] = val;
    }
    return target;
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$s = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      },
      fontFamily: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: fontData
      };
    },
    computed: {
      unicode() {
        let code2 = this.icons.find((v) => v.font_class === this.type);
        if (code2) {
          return code2.unicode;
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      },
      styleObj() {
        if (this.fontFamily !== "") {
          return `color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`;
        }
        return `color: ${this.color}; font-size: ${this.iconSize};`;
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle($options.styleObj),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$6 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$g], ["__scopeId", "data-v-d31e1c47"], ["__file", "D:/uniapp/news-forum/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const ON_SHOW = "onShow";
  const ON_LOAD = "onLoad";
  const ON_UNLOAD = "onUnload";
  const ON_REACH_BOTTOM = "onReachBottom";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onShow = /* @__PURE__ */ createHook(ON_SHOW);
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  const onUnload = /* @__PURE__ */ createHook(ON_UNLOAD);
  const onReachBottom = /* @__PURE__ */ createHook(ON_REACH_BOTTOM);
  const SYSTEM_INFO = uni.getSystemInfoSync();
  const getStatusBarHeight = () => SYSTEM_INFO.statusBarHeight || 0;
  const getTitleBarHeight = () => {
    if (uni.getMenuButtonBoundingClientRect) {
      let { top, height } = uni.getMenuButtonBoundingClientRect();
      return height + (top - getStatusBarHeight()) * 2;
    } else {
      return 60;
    }
  };
  const _sfc_main$r = {
    __name: "custom-nav-bar",
    props: {
      title: {
        type: String,
        default: "首页"
      }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$6);
        return vue.openBlock(), vue.createElementBlock("view", { class: "layout" }, [
          vue.createElementVNode("view", { class: "navbar" }, [
            vue.createElementVNode(
              "view",
              {
                class: "statusBar",
                style: vue.normalizeStyle({ height: vue.unref(getStatusBarHeight)() + "px" })
              },
              null,
              4
              /* STYLE */
            ),
            vue.createElementVNode(
              "view",
              {
                class: "titleBar",
                style: vue.normalizeStyle({ height: vue.unref(getTitleBarHeight)() + "px" })
              },
              [
                vue.createElementVNode(
                  "view",
                  { class: "title" },
                  vue.toDisplayString(__props.title),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("navigator", {
                  url: "/pages/search/search",
                  class: "seacher"
                }, [
                  vue.createVNode(_component_uni_icons, {
                    class: "icon",
                    type: "search",
                    color: "#888",
                    size: "18"
                  }),
                  vue.createElementVNode("text", { class: "text" }, "搜索")
                ])
              ],
              4
              /* STYLE */
            )
          ]),
          vue.createElementVNode(
            "view",
            {
              class: "fill",
              style: vue.normalizeStyle({ height: vue.unref(getStatusBarHeight)() + vue.unref(getTitleBarHeight)() + "px" })
            },
            null,
            4
            /* STYLE */
          )
        ]);
      };
    }
  };
  const __easycom_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-412fc155"], ["__file", "D:/uniapp/news-forum/components/custom-nav-bar/custom-nav-bar.vue"]]);
  const _imports_0$1 = "/assets/refresher_loading.90f4fd81.gif";
  const _sfc_main$q = {
    data() {
      return {};
    },
    computed: {
      statusText() {
        const statusTextMap = {
          "default": "哎呀，用点力继续下拉！",
          "release-to-refresh": "拉疼我啦，松手刷新~~",
          "loading": "正在努力刷新中...",
          "complete": "刷新成功啦~"
        };
        return statusTextMap[this.status];
      }
    },
    props: {
      status: {
        type: String,
        default: function() {
          return 0;
        }
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "refresher-container" }, [
      vue.createCommentVNode(" 这里的图片请换成自己项目的图片 "),
      vue.createElementVNode("image", {
        class: "refresher-image",
        mode: "aspectFit",
        src: _imports_0$1
      }),
      vue.createElementVNode(
        "text",
        { class: "refresher-text" },
        vue.toDisplayString($options.statusText),
        1
        /* TEXT */
      )
    ]);
  }
  const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$f], ["__scopeId", "data-v-7a509e9f"], ["__file", "D:/uniapp/news-forum/components/custom-refresher/custom-refresher.vue"]]);
  const _imports_0 = "/assets/no_more.91b2b519.png";
  const _sfc_main$p = {
    data() {
      return {};
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "nomore" }, [
      vue.createCommentVNode(" 这里的图片请换成自己项目的图片 "),
      vue.createElementVNode("image", {
        class: "nomore-image",
        mode: "aspectFit",
        src: _imports_0
      }),
      vue.createElementVNode("text", { class: "nomore-text" }, "已经到达宇宙尽头啦~")
    ]);
  }
  const __easycom_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$e], ["__scopeId", "data-v-b1ff956c"], ["__file", "D:/uniapp/news-forum/components/custom-nomore/custom-nomore.vue"]]);
  const _sfc_main$o = {
    name: "UniBadge",
    props: {
      type: {
        type: String,
        default: "default"
      },
      inverted: {
        type: Boolean,
        default: false
      },
      isDot: {
        type: Boolean,
        default: false
      },
      maxNum: {
        type: Number,
        default: 99
      },
      absolute: {
        type: String,
        default: ""
      },
      offset: {
        type: Array,
        default() {
          return [0, 0];
        }
      },
      text: {
        type: [String, Number],
        default: ""
      },
      size: {
        type: String,
        default: "normal"
      },
      customStyle: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {};
    },
    computed: {
      width() {
        return String(this.text).length * 8 + 12;
      },
      classNames() {
        const {
          inverted,
          type,
          size,
          absolute
        } = this;
        return [
          inverted ? "uni-badge--" + type + "-inverted" : "",
          "uni-badge--" + type,
          "uni-badge--" + size,
          absolute ? "uni-badge--absolute" : ""
        ];
      },
      positionStyle() {
        if (!this.absolute)
          return {};
        let w = this.width / 2, h = 10;
        if (this.isDot) {
          w = 5;
          h = 5;
        }
        const x = `${-w + this.offset[0]}px`;
        const y = `${-h + this.offset[1]}px`;
        const whiteList = {
          rightTop: {
            right: x,
            top: y
          },
          rightBottom: {
            right: x,
            bottom: y
          },
          leftBottom: {
            left: x,
            bottom: y
          },
          leftTop: {
            left: x,
            top: y
          }
        };
        const match = whiteList[this.absolute];
        return match ? match : whiteList["rightTop"];
      },
      badgeWidth() {
        return {
          width: `${this.width}px`
        };
      },
      dotStyle() {
        if (!this.isDot)
          return {};
        return {
          width: "10px",
          height: "10px",
          borderRadius: "10px"
        };
      },
      displayValue() {
        const { isDot, text, maxNum } = this;
        return isDot ? "" : Number(text) > maxNum ? `${maxNum}+` : text;
      }
    },
    methods: {
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-badge--x" }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
      $props.text ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 0,
          class: vue.normalizeClass([$options.classNames, "uni-badge"]),
          style: vue.normalizeStyle([$options.badgeWidth, $options.positionStyle, $props.customStyle, $options.dotStyle]),
          onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick())
        },
        vue.toDisplayString($options.displayValue),
        7
        /* TEXT, CLASS, STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$d], ["__scopeId", "data-v-c97cb896"], ["__file", "D:/uniapp/news-forum/uni_modules/uni-badge/components/uni-badge/uni-badge.vue"]]);
  const _sfc_main$n = {
    name: "UniListItem",
    props: {
      direction: {
        type: String,
        default: "row"
      },
      title: {
        type: String,
        default: ""
      },
      note: {
        type: String,
        default: ""
      },
      ellipsis: {
        type: [Number],
        default: 0
      },
      disabled: {
        type: [Boolean, String],
        default: false
      },
      clickable: {
        type: Boolean,
        default: false
      },
      showArrow: {
        type: [Boolean, String],
        default: false
      },
      link: {
        type: [Boolean, String],
        default: false
      },
      to: {
        type: String,
        default: ""
      },
      showBadge: {
        type: [Boolean, String],
        default: false
      },
      showSwitch: {
        type: [Boolean, String],
        default: false
      },
      switchChecked: {
        type: [Boolean, String],
        default: false
      },
      badgeText: {
        type: String,
        default: ""
      },
      badgeType: {
        type: String,
        default: "success"
      },
      rightText: {
        type: String,
        default: ""
      },
      thumb: {
        type: String,
        default: ""
      },
      thumbSize: {
        type: String,
        default: "base"
      },
      showExtraIcon: {
        type: [Boolean, String],
        default: false
      },
      extraIcon: {
        type: Object,
        default() {
          return {
            type: "contact",
            color: "#000000",
            size: 20
          };
        }
      },
      border: {
        type: Boolean,
        default: true
      }
    },
    // inject: ['list'],
    data() {
      return {
        isFirstChild: false
      };
    },
    mounted() {
      this.list = this.getForm();
      if (this.list) {
        if (!this.list.firstChildAppend) {
          this.list.firstChildAppend = true;
          this.isFirstChild = true;
        }
      }
    },
    methods: {
      /**
       * 获取父元素实例
       */
      getForm(name = "uniList") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      onClick() {
        if (this.to !== "") {
          this.openPage();
          return;
        }
        if (this.clickable || this.link) {
          this.$emit("click", {
            data: {}
          });
        }
      },
      onSwitchChange(e) {
        this.$emit("switchChange", e.detail);
      },
      openPage() {
        if (["navigateTo", "redirectTo", "reLaunch", "switchTab"].indexOf(this.link) !== -1) {
          this.pageApi(this.link);
        } else {
          this.pageApi("navigateTo");
        }
      },
      pageApi(api) {
        uni[api]({
          url: this.to,
          success: (res) => {
            this.$emit("click", {
              data: res
            });
          },
          fail: (err) => {
            this.$emit("click", {
              data: err
            });
            formatAppLog("error", "at uni_modules/uni-list/components/uni-list-item/uni-list-item.vue:228", err.errMsg);
          }
        });
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$6);
    const _component_uni_badge = resolveEasycom(vue.resolveDynamicComponent("uni-badge"), __easycom_1$1);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass([{ "uni-list-item--disabled": $props.disabled }, "uni-list-item"]),
      "hover-class": !$props.clickable && !$props.link || $props.disabled || $props.showSwitch ? "" : "uni-list-item--hover",
      onClick: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.onClick && $options.onClick(...args), ["stop"]))
    }, [
      !$data.isFirstChild ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: vue.normalizeClass(["border--left", { "uni-list--border": $props.border }])
        },
        null,
        2
        /* CLASS */
      )) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["uni-list-item__container", { "container--right": $props.showArrow || $props.link, "flex--direction": $props.direction === "column" }])
        },
        [
          vue.renderSlot(_ctx.$slots, "header", {}, () => [
            vue.createElementVNode("view", { class: "uni-list-item__header" }, [
              $props.thumb ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-list-item__icon"
              }, [
                vue.createElementVNode("image", {
                  src: $props.thumb,
                  class: vue.normalizeClass(["uni-list-item__icon-img", ["uni-list--" + $props.thumbSize]])
                }, null, 10, ["src"])
              ])) : $props.showExtraIcon ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "uni-list-item__icon"
              }, [
                vue.createVNode(_component_uni_icons, {
                  color: $props.extraIcon.color,
                  size: $props.extraIcon.size,
                  type: $props.extraIcon.type
                }, null, 8, ["color", "size", "type"])
              ])) : vue.createCommentVNode("v-if", true)
            ])
          ], true),
          vue.renderSlot(_ctx.$slots, "body", {}, () => [
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["uni-list-item__content", { "uni-list-item__content--center": $props.thumb || $props.showExtraIcon || $props.showBadge || $props.showSwitch }])
              },
              [
                $props.title ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: vue.normalizeClass(["uni-list-item__content-title", [$props.ellipsis !== 0 && $props.ellipsis <= 2 ? "uni-ellipsis-" + $props.ellipsis : ""]])
                  },
                  vue.toDisplayString($props.title),
                  3
                  /* TEXT, CLASS */
                )) : vue.createCommentVNode("v-if", true),
                $props.note ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 1,
                    class: "uni-list-item__content-note"
                  },
                  vue.toDisplayString($props.note),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            )
          ], true),
          vue.renderSlot(_ctx.$slots, "footer", {}, () => [
            $props.rightText || $props.showBadge || $props.showSwitch ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 0,
                class: vue.normalizeClass(["uni-list-item__extra", { "flex--justify": $props.direction === "column" }])
              },
              [
                $props.rightText ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: "uni-list-item__extra-text"
                  },
                  vue.toDisplayString($props.rightText),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true),
                $props.showBadge ? (vue.openBlock(), vue.createBlock(_component_uni_badge, {
                  key: 1,
                  type: $props.badgeType,
                  text: $props.badgeText
                }, null, 8, ["type", "text"])) : vue.createCommentVNode("v-if", true),
                $props.showSwitch ? (vue.openBlock(), vue.createElementBlock("switch", {
                  key: 2,
                  disabled: $props.disabled,
                  checked: $props.switchChecked,
                  onChange: _cache[0] || (_cache[0] = (...args) => $options.onSwitchChange && $options.onSwitchChange(...args))
                }, null, 40, ["disabled", "checked"])) : vue.createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            )) : vue.createCommentVNode("v-if", true)
          ], true)
        ],
        2
        /* CLASS */
      ),
      $props.showArrow || $props.link ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
        key: 1,
        size: 16,
        class: "uni-icon-wrapper",
        color: "#bbb",
        type: "arrowright"
      })) : vue.createCommentVNode("v-if", true)
    ], 10, ["hover-class"]);
  }
  const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$c], ["__scopeId", "data-v-c7524739"], ["__file", "D:/uniapp/news-forum/uni_modules/uni-list/components/uni-list-item/uni-list-item.vue"]]);
  const _sfc_main$m = {
    name: "uniList",
    "mp-weixin": {
      options: {
        multipleSlots: false
      }
    },
    props: {
      enableBackToTop: {
        type: [Boolean, String],
        default: false
      },
      scrollY: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: Boolean,
        default: true
      }
    },
    // provide() {
    // 	return {
    // 		list: this
    // 	};
    // },
    created() {
      this.firstChildAppend = false;
    },
    methods: {
      loadMore(e) {
        this.$emit("scrolltolower");
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-list uni-border-top-bottom" }, [
      $props.border ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-list--border-top"
      })) : vue.createCommentVNode("v-if", true),
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
      $props.border ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "uni-list--border-bottom"
      })) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$b], ["__scopeId", "data-v-c2f1266a"], ["__file", "D:/uniapp/news-forum/uni_modules/uni-list/components/uni-list/uni-list.vue"]]);
  const zStatic = {
    base64Arrow: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcExRUVFMTExRUVFRUVE9CdWsAAAABHRSTlMAjjrY9ZnUjwAAAQFJREFUWMPt2MsNgzAMgGEEE1B1gKJmAIRYoCH7z9RCXrabh33iYktcIv35EEg5ZBh07pvxJU6MFSPOSRnjnBUjUsaciRUjMsb4xIoRCWNiYsUInzE5sWKEyxiYWDbyefqHx1zIeiYTk7mQYziTYecxHvEJjwmIT3hMQELCYSISEg4TkZj0mYTEpM8kJCU9JiMp6TEZyUmbAUhO2gxAQNJiIAKSFgMRmNQZhMCkziAEJTUGIyipMRjBSZkhCE7KDEFIUmTeGCHJxWz0zXaE0GTCG8ZFtEaS347r/1fe11YyHYVfubxayfjoHmc0YYwmmmiiiSaaaKLJ7ckyz5ve+dw3Xw2emdwm9xSbAAAAAElFTkSuQmCC",
    base64ArrowWhite: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVHcEz///////////////////+IGTx/AAAABnRSTlMA/dAkXZOhASU/AAABYElEQVRYw+2YwXLCIBCGsdAHWGbyAKZ4zxi9O017rxLf/1UaWFAgA1m8dcpedNSPf/l/Vh0Ya/Wn6hN0JcGvoCqRM4C8VBFiDwBqqNuJKV0rAnCgy3AUqZE57x0iqTL8Br4U3WBf/YWaIlTKfAcELU/h9w72CSVPa3C3OCDvhpHbRp/s2vq4fHhCeiCl2A3m4Qd71DQR257mFBlMcTlbFnFWzNtHxewYEfSiaLS4el8d8nyhmKJd1CF4eOS0keLMAuSxubLBIeIGQW8YHCFFo7EH9+YDcQt9FMZEswTheaNxTHwHT8SZorJjMrEVwo4Zo0U8HSEyZvJMOg4RjnmmRr8nDYeIz3OMkbfE/QhBo+U9RnZJxjGCRh/WKmHEMWLNkfPKsGh/CWJk1JjG0kcuJggTt34VDP8aWAFhp4nybVb5+9qQhjSkIQ1pSEMa8k+Q5U9rV3dF8MpFBK+/7miVq1/HZ2qmo9D+pAAAAABJRU5ErkJggg==",
    base64Flower: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAKlBMVEVHcEzDw8Ovr6+pqamUlJTCwsKenp61tbWxsbGysrLNzc2bm5u5ubmjo6MpovhuAAAACnRSTlMA/P79/sHDhiZS0DxZowAABBBJREFUWMPtl89rE0EUx7ctTXatB3MI1SWnDbUKPUgXqh4ED8Uf7KUVSm3ooVSpSii0Fn/gD4j4o+APiEoVmos9FO2celiqZVgwgaKHPQiCCkv+F99kM7Ozm5kxq1dfD91k9pPve9/3ZjbRNHHok/mKli4eIPNgSuRObuN9SqSEzM20iGnm0yIbqCuV7NSSSIV7uyPM6JMBYdeTOanh/QihJYZsUCSby+VkMj2AvOt0rAeQAwqE3lfKMZVlQCZk1QOCKkkVPadITCfIRNKxfoJI5+0OIFtJx14CMSg1mRSDko7VAfksRQzEbGYqxOJcVTWMCH2I1/IACNW0PWU2M8cmAVHtnH5mM1VRWtwKZjOd5JbF6s1IbaYqaotjNlPHgDAnlAizubTR6ovMYn052g/U5qcmOpi0WL8xTS/3IfSet5m8MEr5ajjF5le6dq/OJpobrdY0t3i9QgefWrxW9/1BLhk0E9m8FeUMhhXal499iD0eQRfDF+ts/tttORRerfp+oV7f4xJj82iUYm1Yzod+ZQEAlS/8mMBwKebVmCVp1f0JLS6zKd17+iwRKTARVg2SHtz3iEbBH+Q+U28zW2Jiza8Tjb1YFoYZMsJyjDqp3M9XBQdSdPLFdxEpvOB37JrHcmR/y9+LgoTlCFGZEa2sc6d4PGlweEa2JSVPoVm+IfGG3ZL037iV9oH+P+Jxc4HGVflNq1M0pivao/EopO4b/ojVCP9GjmiXOeS0DOn1o/iiccT4ORnyvBGF3yUywkQajW4Ti0SGuiy/wVSg/L8w+X/8Q+hvUx8Xd90z4oV5a1i88MbFWHz0WZZ1UrTwBGPX3Rat9AFiXRMRjoMdIdJLEOt2h7jrYOzgOamKZSWSNspOS0X8SAqRYmxRL7sg4eLzYmNehcxh3uoyud/BH2Udux4ywxFTc1xC7Mgf4vMhc5S+kSH3Y7yj+qpwIWSoPTVCOOPVthGx9FbGqrwFw6wSFxJr+17zeKcztt3u+2roAEVgUjDd+AHGuxHy2rZHaa8JMkTHEeyi85ANPO9j9BVuBRD2FY5LDMo/Sz/2hReqGIs/KiFin+CsPsYO/yvM3jL2vE8EbX7/Bf8ejtr2GLN65bioAdgLd8Bis/mD5GmP2qeqyo2ZwQEOtAjRIDH7mBKpUcMoApbZJ5UIxkEwxyMZyMxW/uKFvHCFR3SSmerHyDNQ2dF4JG6zIMpBgLfjSF9x1D6smFcYnGApjmSLICO3ecCDWrQ48geba9DI3STy2i7ax6WIB62fSyIZIiO3GFQqSURp8wCo7GhJBGwuSovJBNjb7kT6FPVnIa9qJ2Ko+l9mefGIdinaMp0yC1URYiwsdfNE45EuA5Cx9EhalfvN5s+UyItm81vaB3p4joniN+SCP7Qc1hblAAAAAElFTkSuQmCC",
    base64FlowerWhite: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEX///9HcEz///////////////84chYNAAAABnRSTlP/AGzCOYZj5g1nAAACfklEQVRYw+2YTVPDIBCGtza9Jw25a0bvcax30o73OOr//yvma2F3YWlpPTijXNpAHrK8LLALVPFium2vNIFSbwGKTGQA2GUiHcD29yDNy3sMIdUBQl7r2H8mOEVqAHgPkYZUS6Qc2zYhQqtjyDZEximCZwWZLIBeIgYShs2NzxKpSUehYpMJhURGb+O+w5BpMCAREKPnCDHbIY20SzhM5yxziAXpOiBXydrekT9i5XDEq4NIIHHgyU5mRGqviII4mREJJA4QJzMiILwlRJzpKxJKvCBm8OsBBbLux0tsPl4RKYm5aPu6jw1U4mGxEUR9g8M1PcqBEp/WJliNgYOXueBzS4jZSIcgY5lCtevgDSgyzE+rAfuOTQMq0yzvoGH18qju27Mayzs4fPyMziCx81NJa5RNfW7vPYK9KOfDiVkBxFHG8hAj9txuoBuSWORsFfkpBf7xKFLSeaOefEojh5jz22DJEqMP8fUyaKdQx+RnG+yXMpe8Aars8ueR1pVH/bW3FyyvPRw90upLDHwpgBDtg4aUBNkxRLXMAi03IhcZtr1m+FeI/O/JNyDmmL1djLOauSlNflBpW18RQ2bPqXI22MXXEk75KRHTnkPkYbESbdKP2ZFk0r5sIwffAjy1lx+vx7NLjB6/E7Jfv5ERKhzpN0w8IDE8IGFDv5dhz10s7GFiXRZcUeLCEG5P5nDq9k4PFDcoMpE3GY4OuxuCXhmuyNB6k0RsLIAvqp9NE5r8ZCSS8gxnUp7ODdYhZTqxuiJ9uyJJtPmpqJ7wVj+XVieS903iViHziqAhchLEJAyb7jWU647EpUofQ0ziUuXXXhDddtlllSwjgSQu7r4BRWhQqfDPMVwAAAAASUVORK5CYII=",
    base64Success: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVRUVFHcExTU1NRUVFRUVFRUVFOSlSUAAAABnRSTlP/AI6+VySB3ZENAAACcElEQVRYw+2YyYKCMAyGI8hdpdxdZu7gcpdZ7jL6/s8yYheSNi0aPdqbwOffpGmaFOYPD3gj4bisN7vddv17N/JVgxn5x12IWgIaWTuO/IE3PseQbwjGPo2cgRmHFLJwdm/X643zwiqOKPPJ1nj3sjEP2iiifZWj5bhopSyGaEO2HX5fbQJzwJ+W7x/jw5ZFjsEU0PMph9xE8i5EqprKALW95eJQURkgzw98uJ/JvwGecR7bIjWWsUgVrrIfFZ2HlLy3sKETD1mmRLRMRhGVssRa0xJkdn3SpJBymBkM8+pSSDXMDNyDaToVHd2fgpNt0sjwiUZO19+jGQ+gQEg9Oq+bufmAVGihomNmjQG7UG3020vrlm7lkFnKFGU3kZ0KGAdmKe821pipQ+qEKcrZeTL2g5FsUks4cStjEZWwXg0b0n4GxmEpkWwIs5VBynjgK7xZaz1/0D7OxkVuLpsY5BQNFyLS84VBjjbg0iL2r2EQHBOxBhikuUOkdxODVF1cxHoWtPPsiyXO455Iv34hssCO8EV4ZIYTjS8SR4qYSHRiTiYQ4ZFbHi0iIhhBTi6dTCgSWRcnw4h4yGTuyTAiOGBIWGoZTgSHJQl+LcOJ4OCnW6yX2bMnJ9pidCOXtkTkTrIGpYuOynAiOF14SamMiOCk5Ke+mq8BcOrrvym8d0zKIQnWT+M1WwOQNO4fFiWb18hhERxJPx2fblbPHHyC41VyiAtKBUFBIih7JMWVoIQTFIr3lKPN80WvoLSWFPC653ioTZA0I0FrQ7qU6asaK0H7JmkSJa2ooOGVtNUsc3j9FYHkIkJy3SG6VHnfXKXGP9t4N9Q4Ye98AAAAAElFTkSuQmCC",
    base64SuccessWhite: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAGFBMVEVHcEz///////////////////////////8dS1W+AAAAB3RSTlMAiVYk6KvDHLfaegAAAo1JREFUWMPtWEtzmzAQNhCTq910ytXpiyvxTNOr60zrayepx9d02gnX4sTm7xcEiJX2gdnkGJ1A4tOnfWqXyeR1vMRYzrcPD9v5h5MBl3/Ldvx4cxIg/FWC8X0xjLjalM54uhhCfCrRuJURX0pi3EmIqZV7O59vrRZmguStHL9b7S7ftfLwOtiZDw7AHMtmquAQ12b5Wwbnordm8g9zLLO49qc/m2n6aKnhwPOGZ08hAiNHhheiHae1lOUPGZpQkPKa3q0mOUjaRzSRaGUjpy/mmWSwySSpllcEteBKAT52KEnSbblA51pJEPxBQoiH1FP4E3s5+FJv07h6/ylD6ui7B+9fq/ehrFB98ghec9EoVtyjK8pqCHLmCBOwMWSCeWFNN4MbPAk55NhsvoFHSSVR0k5TCTTEzlUGcqV/nVp7n9oIVkmtaqbAEqEgfdgHJPwsEAyZ9r4VAZXFjpEwyaw3+H2v42KYxKhs1XvY/gSSGv+IHyUSuHXCeZhLAgVI3EjgSGo1Fb3xO0tGGU9S2/KAIbtjxpJASG73qox6w5LUq0cEOa+iIONIWIilQSQ0pPa2jgaRQAgQP7c0mITRWGxpMAmEQFN2NAQJNCV0mI6GIIEO47hlQ0ORQLd0nL+hoUjg1m6I1TRr8uYEAriBHLcVFQ5UEMiBe3XkTBEG04WXlGKGxPnMS305XQPA1Ocn2JiuAZwE66fxnKwBnDTuXxZTMq85lwW6kt5ndLqZPefiU1yvmktcUSooChJF2aMprhQlnKJQ5FxRKkcVRa+itNYU8Io2oVkY14w0NMWYlqft91Bj9VHq+ca3b43BxjWJmla0sfKohlfTVpPN+93L/yLQ/IjQ/O5Q/VR5HdL4D7mlxmjwVdELAAAAAElFTkSuQmCC",
    base64Empty: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAALeGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTIyVDIxOjIxOjQ1KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTAxLTEzVDE5OjA5OjQwKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wMS0xM1QxOTowOTo0MCswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZWQwMWYzNWQtOWRjOC00MDBiLWEyMmQtNjM5OGZiNzVhNGRiIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZDhlMzQ3ZmEtMDY2My1jYTRiLTgzNTctNTk4YjBkNGIzOTU2IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZDA4MDI4MDItMzUyYS04NTRhLTkxYjctNmRlNmQ1MmViM2QwIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHRpZmY6T3JpZW50YXRpb249IjEiIHRpZmY6WFJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6WVJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iMSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjMwMCIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjMwMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZDA4MDI4MDItMzUyYS04NTRhLTkxYjctNmRlNmQ1MmViM2QwIiBzdEV2dDp3aGVuPSIyMDIyLTAyLTIyVDIxOjIxOjQ1KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQwNjg2NzJkLWY5NDMtOTU0Mi1iMDBiLTVlMDExNmE1NmIzZSIgc3RFdnQ6d2hlbj0iMjAyNC0wMS0xM1QxMDoyNjoxNiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphYmJkZmUyZC0xY2Q2LTJiNDgtYjUyNS05YzlhZjdlNjA4NDMiIHN0RXZ0OndoZW49IjIwMjQtMDEtMTNUMTE6MjM6NDArMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YTQ5MjM5MDAtNDhiZC03YTQ1LWI4NGItYmVlZTVjOWUxYTM1IiBzdEV2dDp3aGVuPSIyMDI0LTAxLTEzVDExOjIzOjQwKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmVkMDFmMzVkLTlkYzgtNDAwYi1hMjJkLTYzOThmYjc1YTRkYiIgc3RFdnQ6d2hlbj0iMjAyNC0wMS0xM1QxOTowOTo0MCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmFiYmRmZTJkLTFjZDYtMmI0OC1iNTI1LTljOWFmN2U2MDg0MyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjM2ZGQ4NTQxLWQ0MWEtYmY0Yy1iZjA3LWNmNjZhNjZhMDg2MSIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmQwODAyODAyLTM1MmEtODU0YS05MWI3LTZkZTZkNTJlYjNkMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pm30U/gAAAAJcEhZcwAALiMAAC4jAXilP3YAAAA/UExURUdwTODg4O3t7e7u7unp6d7e3uTk5M/Pz8nJyePj4+jo6Pj4+MrKyszMzO7u7unp6fb29vLy8vr6+v7+/sHBweag3xAAAAAOdFJOUwAxia5pF0n+/vzX3KbULQ2DYQAACG1JREFUeNrtm4l2o7gShi20IWFrAd7/WUc7EosDWKZ976Hc7WTmdMKXv0qlqpLyeNx222233Xbbbbfddtv/mOHn8xexSNsiRH5PrbFtW4p+DetpsF4v8Gs+HA3WEwOAfwzriYxaLTVsP8X1QK0z+vqQCzewYogi60aL9SEX5oyxphYVCFTGjfSJCTmN1jBruN5KTGCUS8bhySQGHRaohmW4glwtldbOeYJYKlgvbyUuA8aFFEKc++aIM4hrRnyiMnIZKq1PrihcM3GNKboMF1Naa9X9+8T1KrxIlVbGjv3cAEHOYYMqqgUsVuJqqehV3+sjDwB+DTJp0lYtMCyZpxqjF4e+74+sRcQSFZO8UonUSEFzuUY+DKo59A2kZDatGCjzCauy/2AmhSyCq0WHEj0KTNJDmVeNhErMt1Q8W4xti4/FwMJ4jaxl05TKFiNtD3kBGrHnhiph9V0eXQc6DkyE2xX830AlKshFTErXeuCZXK/9m41wFsGSfZ4lcGeyZ98PrylJ7MWCojQZ3qSukL2QslgdngqJnTEPdTJhXvbNBoR/+7wabIxWduN/Ja5dWEivm4XSZ2uQckNzmRlHrn2lc6eiafvS4V2Hd12tesau8toZW0CtWoZYb9t+OqxdCYKYjVPF16pVbILIy/gR7MVaWMHYPCoa2VkzkX4Iry2rirXbumGyAjGC1h62YLw6ApsNKZph3fpIWHt08JovRWD62sejpXhTrhWrPpl6zZ6PW2oTG5ltlvgtF6weNYCWKeJJSfg4W6PNJlj3sVZgOXV4lc8n4RlkMTLEBDVoYc3nI09kpyzzfgWsjyzBZSNDKF2/wjh+sxYvn8Y1scxlfLF9T1RBO3wVHsnq8Fk4oGkEh/0KJPSa8T2CeWE5X9BPmgLsaRIGeNL2kshCsWoLBmdPJW5Wbz1ndAKUXjPwxXYAUpSV3fy5BJg1aa1tyVXHHMgVH31ewDVrleHr9XqC684SUF4mecR3+wW5SC2QNvxUizRv98mLDhPgYiMDb+v8g0OADxqxcnf9w01mZYJF0fUVP5LcdswbsMmy1DVs5PlE5NpNiTR8M8qAWZkOy6aN13VcoOF2/s3xn3Mes8Xza05tgR/BuNz69nlNzMR0fH45p+G4R9oxh2mKt9MF4J7K/lvWUojwF5nCgCpuRUptnZMQ3au0nSo2UsHgV3xpmeLYzGml3ZFBBzYGPCpOQRwXs1/GG1J74dlZc6JKUOtjBAz9XjVxucGWHbZVJDPJQGYDRl1Qmf1ovk2Sbghb6MQlnF7mBzM1bgOqJAPpoOQaVe+4Skcit3uqHMyG/Sh1rHNN0gAfM0nnPrmulfLVBSm20TSZSdWa0LJl2ukVyE4vTYCgP3uQkwv1TKtQWgxDzBSg80OQjCs4klKvuUzHLCfIbDKIE/S5VIGqD1iD2819pkAqTWdmeina+oZABi7X5B1MGoTJqJSchuk6JNHcgUPAcsVFk0+N0oDN68Vo7FQSmCXjx46OEtUk1lpY2ZFQGr/AcpqVato4wPUD+RhfAeyQI5sJ6l2sDwnKqNFSJvpiyJbFl3kTOjZ2ievwCR7hkUoWeV2vOLAXvB39AJoyqYa81A5cvaAidXYTFTycKDBcalVK5f3XS89kzLVl9txfL+K+p6NUnitz5KkKm7D3DrRPNq4bk7l20aFRppNilmuQI+uzTtj9wPBkTsVwM7HbJ5pwGgujyRyZDzQLNoiRFluRtQ+GzEguqRxUL+ZMFqulMzIfaP3ARj2k/txB8c+2HyjmDizCaVWtNoE5MvMlKs/4VQ7HUJZCrU6qCKcNJ2aSWUZhJZu4VI0LB4CHFdj77DRuGi28WKAxoRyZyzGVrmc0jmk1nP5QaxZo1puqq1YIAqgZb8e/rABZJWNCNxV7DSTpOO7Aail9J9nYHtua/4ouE/aS0X1qtXQzwGx+rnbi2vhF/TfZG52oc6DPo1WCi3RTDnRk7TEntoEp38gg+DjYs2opkR3JW5EpL9rU0XSK5/6LOTAVS+72x7pm60zSf5HMdldjhzJqw1FRcxXdS3ZNZp0s92FiyluUvBPoD9ynZNkBiu2NF11ofnlnQbZgKqvusj9R/f6DOzgVsahbNlXxlsxU8y7qrbTupitRyxFBKG6H3aEPUqj7YrzAymq41FXlZLlO4WLbvG2Kg4vYB+wPfWS2B5Rq8TW9ROpAZbiF6MmCTsx1NLLsx7NOoOiZup2CNbZ36xc96ErcxzuILGrmmFhimjtwKo/yTm7feTVwB61IzbnW4967Kt3cDDotGt8JKrTiUyO3Uy2PZZt9tapXEfXhWmTgcoB+JchFWsiCKvYnhmn/tKuJDbgly897FnFfkE1rQLKy810OU7xW3bEJHCD5gERtuTGuxoJqA6qI9TNMa6MbvZomsiubbPYx78YXDaaRqqsyqfSaLZdjYGHLu65rDgydXCWm1P5EvcQ828f9pcBapTILSMv1nZCAc0WzFIFsGfUi/kmAxc6cFqDSYuPSMIbs1OVrwITTQM9HVRFJ5JL56qcoFzzT1uVcd2v9jFw8BHlcWtmEI86hp5Dy/zOlK8cUp/rVseRUBqawz6kmAcPLM9l5m8h4V53Iz/2mFJaTCvF8JbsMvPjU/7crbUXart0v4WyE0LnDPcAX95Knj4VUE8HCdNdUP8BDcOXKdPl4uSWbh4LfOV0HDdfipOmu+eIRrDsNPkIT7np/8ZAzVdOd1u8wHIqeXt8VqtgiO50ePeNaGG+uO9rHiKdL71pnIun8jxEKXv2r2HYBzO/mz96vFKoMM5WLk7tQXS9U5kwCu5lk7n6++kdCFWRaTUzm0/5fClWGWTrM/AGhCrJO/ZBQhTPFLwmV7ebgcdttt91222233Xbbbf+H9h+2WEtdHVinLAAAAABJRU5ErkJggg==",
    base64Error: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAALeGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTIyVDIxOjIxOjQ1KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTAxLTEzVDE5OjEwOjEwKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wMS0xM1QxOToxMDoxMCswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTQ3NTExNjAtZDY5MC00ZTkzLWFhNGUtNGMwYTViNGU1ZGFjIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzRiNzlkYWMtZTJmYS1iNzQ0LWIxM2ItOWU1N2VjMDhhM2YwIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZDA4MDI4MDItMzUyYS04NTRhLTkxYjctNmRlNmQ1MmViM2QwIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHRpZmY6T3JpZW50YXRpb249IjEiIHRpZmY6WFJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6WVJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iMSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjMwMCIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjMwMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZDA4MDI4MDItMzUyYS04NTRhLTkxYjctNmRlNmQ1MmViM2QwIiBzdEV2dDp3aGVuPSIyMDIyLTAyLTIyVDIxOjIxOjQ1KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQwNjg2NzJkLWY5NDMtOTU0Mi1iMDBiLTVlMDExNmE1NmIzZSIgc3RFdnQ6d2hlbj0iMjAyNC0wMS0xM1QxMDoyNjoxNiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjZjk1NTE1OC04MjFiLTA4NDUtYWJmNS05YTE1NGM1ZTY4NjEiIHN0RXZ0OndoZW49IjIwMjQtMDEtMTNUMTE6MDQ6MDQrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZGM1Y2IyNWItZDZlNC0yZjQ2LTgyODQtZmUwOTNlY2M2ZTkxIiBzdEV2dDp3aGVuPSIyMDI0LTAxLTEzVDExOjA0OjA0KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjE0NzUxMTYwLWQ2OTAtNGU5My1hYTRlLTRjMGE1YjRlNWRhYyIgc3RFdnQ6d2hlbj0iMjAyNC0wMS0xM1QxOToxMDoxMCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmNmOTU1MTU4LTgyMWItMDg0NS1hYmY1LTlhMTU0YzVlNjg2MSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjM2ZGQ4NTQxLWQ0MWEtYmY0Yy1iZjA3LWNmNjZhNjZhMDg2MSIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmQwODAyODAyLTM1MmEtODU0YS05MWI3LTZkZTZkNTJlYjNkMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph2LDQsAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA5UExURUdwTNra2s7Ozq2tre3t7dPT087OzuPj4+3t7dbW1u/v79bW1vz8/MrKytDQ0Nzc3MPDw/X19bi4uMZQDnEAAAAKdFJOUwBqEPywotz+wzqApqiTAAAHW0lEQVR42u1b25akIAwcbx2UFoj//7HLTQVBRcSZfTDnbM/uTl/KSlEkwf75eeONN95444033njjjTduR9/0/yOsbqoevObL7101tYX1HFs9QFtfZalRP+rpQVgdAFx990ZnT8L6eZItUl99jeGpf1DxdV/VP9fV1f/PFlF1bYHoVFSRC60IyVjrFRnuB8IoxpExSrstsErKHpJw1eqybNLbAQvAYkKjUrjoBgKRqAaeIjG5+qaps6hKcMWmcdSwqAJWBbAgCZZaIYbsqggqqlHNbFFa5yVR4jKvrKEErOEjNCqNSwHrfE8lpLsod/u+cOPPMPBJ+Gz5dM0cXNgclre+pSxhYI1WW5Tf9ENSMIdLCiWs6q9hwQprBVYKFqyPlx4WtoSvrT9lC/wkGt8qlkQooC3hi6sgW3Bb8gtdpSV/za/mn49pC0oYhONbfyd5hzDLFivKFpTS1gKM0we0tQCEncfgQn7Rt+DC/299i1MSRJcBC0r7VviG5KZvwV5WIUobxHyrJKy8VRjXVgFYsPu5kOtbxdhycCDuihziXVLoW7xwEiUmDgd544B46luWLW+nugMLB2BimmC3cxTNxCDg8xFtuUSNqoFsDKzY8psa+XtBNWXr74N6qxwsS5T6VL5robKl10+ZRu5S9qBvUYuJwVHzjwjrE3G33qKh+WXBgmkmCvHYquTvZ8oo7rLFA4PJgYW0MdePIRQIGUPNbSMw5lubJMKtJI6+Wk6cVFMmACO+VVryeL7ZgI8MhwS2fnNPPK0geHBRd11eJSiyL4KjrL2umm1XIpRii1MKB/mU/iCZwF+pt5z3UJ7UiF3nQqadAXC3T3xEW2IyuDBe3yDTe0+A64it2WTyYSGVHymUI/EduvSWKJ80Dtv2NbYSoQxbMkVC7yzNGIWFvDF7gRD79RYrWW/BDGti4wwLtgvO7gWKUZ8Mt94qX8vLJE70+xVNwzDm9ghNM+FX7p/jlZUId2HJD+Tf79hMe3WNrAK/30E+C8/6xOCqbqxE5JNMYrNbnaLUvJAewfCg8zF0Ba/tbviWLvPYfsGFA1PVD8ZdnjlVc/DS/o7LK4NHjOjKKbfCTSCo5XmwKbaZM4jlc9NGEYd9Ijd0QS5ZGaOR2O+DPlGyRb2nXZzgnI1GdFWF+0gh3ifyTRqvzpXI2eElk58FeHziCF5hY+hSMV9Ge/mohUTGuQ4vzHYe8bW5sNdFQ58St22Vcf5zzJbtcGT4iYQ7iz8dFuxoWRYMjAM7KCnypHOTLSqdUwYIFpndOD/6B2FBzNQxYmW/zxYE4j8yLHga1s2Rbm/O5PXtGcuNDIW1dTj5hpjGsO+7z2Kk9NP1JWDlnWKAM4H6zCUNM05KyVPHBclYzUbgjE3N3tP2JWHBmbqD4GLeCs2jhMT13lMVljwcEbetwZgtHUxVQ21ho3fE7inf2s8vzMWq0EWpfOBg5hcDSGwaF2+LaysRIzNFqRgBv2sMhi/Ix0WiW8rBKNBv4ExBI7eorx9ANazsPCb5FkSNH+Reacos+AYxaFzX76KMH65c8ytzZ40YvpFAqtgC/otn1eCmMI5K8yVRQVVwq3aVtU+jJktwjyP7x+BKv8vtoH098vXYSJcrWGJcAW11r8WVRxe5vgcuFbXqwnaEZejS6mrLwYKUg1ch2RJswTFYgMOwoau+AQsSp/FuDhVZi7J402ifgGla/GJIzGLYG5H4rnKMCUydL9wcsmZSuPikR2QmjQbWqaV2ob2RdMvaLEvFlRiXpYeTwqVOtMZF+qi0dS4uEjJKMvWuYK3S0jHZwaq7BylYp/O2uu3q04lNqudLWEJQd/3paTBz12IaLIPtzE5P1AUuW9TB8NVzaG9/TIfV+eXsWeezz6HWlptEbo4SIAeWur/Y/RZC/gmZTiLzUY2j5ct6fjKsFvxqgyQxE9sbmfYtnJMIciEKo6+FL0wziJmtkzspIcUl0PgWrL7VCKP7hl61U4WLeN+7Ieli2vZhmq0VgjDOgIyhJ62sSpDkWNZa1wiB8WoLlxzy29XpGVPgn1ut5VYcGyRLK7OCiJaDYMrAneJUkZWdw0yDgNm5nDowqLc0Kp581FO7QS4pC9S/YRW9xkVdNOj0ZHCp9anEZw3VEK/fopiDrkMObkcdJtT1g6+uzQ60bIdUPztdWZWy53m+v/zFYPOGHO4AZsalmtJNkyHrCAx1RXX7mt5g1L1pDezpkXv8wJwpVRSSaf2c26Y0rrXXxyWBptu/ovdak+VhkqjGBZUdvKygqANKA/MqZ/36kcGwFn90RnWp66ksKuHgitLFY8BU+F2ZvqpxpMY9qR3YwOUJ12fc0KUHVKdswcKXuwetErCnwvMKuXxfc/3RVJ2yFc+iosQd3X+WGSVz1UiuN2J156FyVyHbsOUp3krezaPUT/VxXqdfwvknb/Zgp+idTxTbrkLqYuKreRnhy65Gf4W0NsDoYiqf6uZsvr8V9eo6XWc5+3TVf/3N1TfeeOONN95444033njjjTfeSI1/IeOYOeO4fGAAAAAASUVORK5CYII=",
    base64BackToTop: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAElBMVEVRUVH+/v5HcEyZmZlRUVFRUVGm1ByOAAAABnRSTlPMzADMTZAJBBGsAAAEnElEQVR42t2cS27jMAyGf7/2U+QCQeDsbeQCgZDujaC5/1UmkzaJn+JDFGcw3LdfflKibJkkDnxrL7dbg7sNt6+L4O8OYBM+B0ys+QrGkHZG+OEEQ8g6go8Bx1GIGMdpNOQyIG6XdMgnSPtKhLQDGEZFBgYMkhKFtGBb0EIEjDgFRowoBVaMGAWpMedEfxMiZtwpUsgZCqtlkCNUdpVAWigtCCCDFtLwIWeoreZCWiRYYEKGFEjDg+yRZCUH0iLRAgNyToXUNCRZyMqWhGnUN2IPm3wSlwJ7IUspyCBkIQUZhCykIIeQuRTkEDKXAuM9srrtYbrZN7Y98giZSoFd+t1OxmMITG0dcrSFXFchZ1tIvQZpYWxhBbK3hpQrkMEa0iwh5t4a+QvZvDXyF7J5a+Qv5PPW21/I5623v5DPW29/IaO3Xv5Clrw1y1/Ikrdm+Qs5svw83yNnSJ5BQb4F/F7EIEJSnThGBAXxkFQfLOviQUE8JAUPsosHBfGQfDAtHhREQ1JxIV00KIgmrnRI84S0yAd5BAXxxJUck0f6Qnwr9qmr6xF5xLMjcwn/iudIEAdWnyjkEXlQKZiRVzoqRyLbgeUKKR8Q4alY7cSnoxzSf2ggsqehKr6YVpcXpOd7H93f60cKhOd7Re2LteUF4eLqiVS1mr0ge4io6C2+soaFkJ7MuuuQs1yITEp9hwwKISIpzR2iESKSIoT0rLNwuVHQqoSIpAQJpGce60vIUSdEIuUqgPTsJ5QFZK8UIpBS8iG94GFrDjlrhfCl8CG96Llxmle4kEr6vKWBPIVo9kqDQSRk9/3cWoikcCFPAd33v4dIChPyEvLzBA6RlEYWke4JEUnhKXkLeUEKxRHJFfKCQHGucIW8IdZSRkLeEGMpYyEjiK2UsZARxFTKRMgYYillImQMMZQyFTKB2EmZCplAuFLIHT8TMoWwpQwiIVMIUwqpZP5bp5CCvCTiQKr5f5lCQN+tPCBn2ZvVDFJwIDUP0m1BYAfZYRNSsCB7BqTbhoARePIxtZ9tgwWkoJcwCalmv3MBAemtO4R6dah2HaKQqj8Zvp9sQDjvJ21+SPCBHPJDDk6QITekEV7gqCC19CpKAym9IMfckKv4olMBCeIrWwVEfvkshzQekO9r9P1/ALk+IG1eSPCDiCJfyG+FyU+A6ZCa/piZDinpz7LpkCv5gdkAEshP5emQhv7onw6pGeULyZCSUYiRDAmMkpJkCKs4JhFSq8p8hJBSVbAkhARV6ZUQoisik0FqXTmcDHLVFfbJIEFXoiiCNMpiSxGkVJaNiiBBWQArgTTaUl4JpNQWJUsgQVteXQg+AKkLxQWFGKW+5J2+eVp4S168X3CF1CltCKdTJ8lb84YK2bUBO+wZW0Pqv9nk4tKu49N45NJC5dMM5tLW5tOg59Jq6NM06dL+abFXwr/RkuvTXJwae1abtE/Dt0/ruksTvs84AZ/BCC4jHnyGVfiM3VBQFANEXEah+Ax18RlP4zNox2dkkM/wI58xTn8yDCXGYCDV3W5RGSajtXyGhG1jbpbjzpwGt/0MJft8jqC7iUbQ/QZaxdnKqcIftwAAAABJRU5ErkJggg=="
  };
  const _sfc_main$l = {
    name: "z-paging-empty-view",
    data() {
      return {};
    },
    props: {
      // 空数据描述文字
      emptyViewText: {
        type: String,
        default: "没有数据哦~"
      },
      // 空数据图片
      emptyViewImg: {
        type: String,
        default: ""
      },
      // 是否显示空数据图重新加载按钮
      showEmptyViewReload: {
        type: Boolean,
        default: false
      },
      // 空数据点击重新加载文字
      emptyViewReloadText: {
        type: String,
        default: "重新加载"
      },
      // 是否是加载失败
      isLoadFailed: {
        type: Boolean,
        default: false
      },
      // 空数据图样式
      emptyViewStyle: {
        type: Object,
        default: function() {
          return {};
        }
      },
      // 空数据图img样式
      emptyViewImgStyle: {
        type: Object,
        default: function() {
          return {};
        }
      },
      // 空数据图描述文字样式
      emptyViewTitleStyle: {
        type: Object,
        default: function() {
          return {};
        }
      },
      // 空数据图重新加载按钮样式
      emptyViewReloadStyle: {
        type: Object,
        default: function() {
          return {};
        }
      },
      // 空数据图z-index
      emptyViewZIndex: {
        type: Number,
        default: 9
      },
      // 空数据图片是否使用fixed布局并铺满z-paging
      emptyViewFixed: {
        type: Boolean,
        default: true
      },
      // 空数据图中布局的单位，默认为rpx
      unit: {
        type: String,
        default: "rpx"
      }
    },
    computed: {
      emptyImg() {
        return this.isLoadFailed ? zStatic.base64Error : zStatic.base64Empty;
      },
      finalEmptyViewStyle() {
        this.emptyViewStyle["z-index"] = this.emptyViewZIndex;
        return this.emptyViewStyle;
      }
    },
    methods: {
      // 点击了reload按钮
      reloadClick() {
        this.$emit("reload");
      },
      // 点击了空数据view
      emptyViewClick() {
        this.$emit("viewClick");
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass({ "zp-container": true, "zp-container-fixed": $props.emptyViewFixed }),
        style: vue.normalizeStyle([$options.finalEmptyViewStyle]),
        onClick: _cache[1] || (_cache[1] = (...args) => $options.emptyViewClick && $options.emptyViewClick(...args))
      },
      [
        vue.createElementVNode("view", { class: "zp-main" }, [
          !$props.emptyViewImg.length ? (vue.openBlock(), vue.createElementBlock("image", {
            key: 0,
            class: vue.normalizeClass({ "zp-main-image-rpx": $props.unit === "rpx", "zp-main-image-px": $props.unit === "px" }),
            style: vue.normalizeStyle([$props.emptyViewImgStyle]),
            src: $options.emptyImg
          }, null, 14, ["src"])) : (vue.openBlock(), vue.createElementBlock("image", {
            key: 1,
            class: vue.normalizeClass({ "zp-main-image-rpx": $props.unit === "rpx", "zp-main-image-px": $props.unit === "px" }),
            mode: "aspectFit",
            style: vue.normalizeStyle([$props.emptyViewImgStyle]),
            src: $props.emptyViewImg
          }, null, 14, ["src"])),
          vue.createElementVNode(
            "text",
            {
              class: vue.normalizeClass(["zp-main-title", { "zp-main-title-rpx": $props.unit === "rpx", "zp-main-title-px": $props.unit === "px" }]),
              style: vue.normalizeStyle([$props.emptyViewTitleStyle])
            },
            vue.toDisplayString($props.emptyViewText),
            7
            /* TEXT, CLASS, STYLE */
          ),
          $props.showEmptyViewReload ? (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 2,
              class: vue.normalizeClass({ "zp-main-error-btn": true, "zp-main-error-btn-rpx": $props.unit === "rpx", "zp-main-error-btn-px": $props.unit === "px" }),
              style: vue.normalizeStyle([$props.emptyViewReloadStyle]),
              onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.reloadClick && $options.reloadClick(...args), ["stop"]))
            },
            vue.toDisplayString($props.emptyViewReloadText),
            7
            /* TEXT, CLASS, STYLE */
          )) : vue.createCommentVNode("v-if", true)
        ])
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$a], ["__scopeId", "data-v-b7999e14"], ["__file", "D:/uniapp/news-forum/uni_modules/z-paging/components/z-paging-empty-view/z-paging-empty-view.vue"]]);
  const c = {
    // 当前版本号
    version: "2.8.3",
    // 延迟操作的通用时间
    delayTime: 100,
    // 请求失败时候全局emit使用的key
    errorUpdateKey: "z-paging-error-emit",
    // 全局emit complete的key
    completeUpdateKey: "z-paging-complete-emit",
    // z-paging缓存的前缀key
    cachePrefixKey: "z-paging-cache",
    // 虚拟列表中列表index的key
    listCellIndexKey: "zp_index",
    // 虚拟列表中列表的唯一key
    listCellIndexUniqueKey: "zp_unique_index"
  };
  const zLocalConfig = {};
  const storageKey = "Z-PAGING-REFRESHER-TIME-STORAGE-KEY";
  let config = null;
  let configLoaded = false;
  const timeoutMap = {};
  function gc(key, defaultValue) {
    return () => {
      _handleDefaultConfig();
      if (!config)
        return defaultValue;
      const value = config[key];
      return value === void 0 ? defaultValue : value;
    };
  }
  function getTouch(e) {
    let touch = null;
    if (e.touches && e.touches.length) {
      touch = e.touches[0];
    } else if (e.changedTouches && e.changedTouches.length) {
      touch = e.changedTouches[0];
    } else if (e.datail && e.datail != {}) {
      touch = e.datail;
    } else {
      return { touchX: 0, touchY: 0 };
    }
    return {
      touchX: touch.clientX,
      touchY: touch.clientY
    };
  }
  function getTouchFromZPaging(target) {
    if (target && target.tagName && target.tagName !== "BODY" && target.tagName !== "UNI-PAGE-BODY") {
      const classList = target.classList;
      if (classList && classList.contains("z-paging-content")) {
        return {
          isFromZp: true,
          isPageScroll: classList.contains("z-paging-content-page"),
          isReachedTop: classList.contains("z-paging-reached-top"),
          isUseChatRecordMode: classList.contains("z-paging-use-chat-record-mode")
        };
      } else {
        return getTouchFromZPaging(target.parentNode);
      }
    } else {
      return { isFromZp: false };
    }
  }
  function getParent(parent) {
    if (!parent)
      return null;
    if (parent.$refs.paging)
      return parent;
    return getParent(parent.$parent);
  }
  function consoleErr(err) {
    formatAppLog("error", "at uni_modules/z-paging/components/z-paging/js/z-paging-utils.js:76", `[z-paging]${err}`);
  }
  function delay(callback, ms = c.delayTime, key) {
    const timeout2 = setTimeout(callback, ms);
    if (!!key) {
      timeoutMap[key] && clearTimeout(timeoutMap[key]);
      timeoutMap[key] = timeout2;
    }
    return timeout2;
  }
  function setRefesrherTime(time, key) {
    const datas = getRefesrherTime() || {};
    datas[key] = time;
    uni.setStorageSync(storageKey, datas);
  }
  function getRefesrherTime() {
    return uni.getStorageSync(storageKey);
  }
  function getRefesrherTimeByKey(key) {
    const datas = getRefesrherTime();
    return datas && datas[key] ? datas[key] : null;
  }
  function getRefesrherFormatTimeByKey(key, textMap) {
    const time = getRefesrherTimeByKey(key);
    const timeText = time ? _timeFormat(time, textMap) : textMap.none;
    return `${textMap.title}${timeText}`;
  }
  function convertToPx(text) {
    const dataType = Object.prototype.toString.call(text);
    if (dataType === "[object Number]")
      return text;
    let isRpx = false;
    if (text.indexOf("rpx") !== -1 || text.indexOf("upx") !== -1) {
      text = text.replace("rpx", "").replace("upx", "");
      isRpx = true;
    } else if (text.indexOf("px") !== -1) {
      text = text.replace("px", "");
    }
    if (!isNaN(text)) {
      if (isRpx)
        return Number(rpx2px(text));
      return Number(text);
    }
    return 0;
  }
  function rpx2px(rpx) {
    return uni.upx2px(rpx);
  }
  function getTime() {
    return (/* @__PURE__ */ new Date()).getTime();
  }
  function getInstanceId() {
    const s = [];
    const hexDigits = "0123456789abcdef";
    for (let i = 0; i < 10; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 16), 1);
    }
    return s.join("") + getTime();
  }
  function wait(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  function isPromise(func2) {
    return Object.prototype.toString.call(func2) === "[object Promise]";
  }
  function addUnit$1(value, unit) {
    if (Object.prototype.toString.call(value) === "[object String]") {
      let tempValue = value;
      tempValue = tempValue.replace("rpx", "").replace("upx", "").replace("px", "");
      if (value.indexOf("rpx") === -1 && value.indexOf("upx") === -1 && value.indexOf("px") !== -1) {
        tempValue = parseFloat(tempValue) * 2;
      }
      value = tempValue;
    }
    return unit === "rpx" ? value + "rpx" : value / 2 + "px";
  }
  function deepCopy(obj) {
    if (typeof obj !== "object" || obj === null)
      return obj;
    let newObj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = deepCopy(obj[key]);
      }
    }
    return newObj;
  }
  function _handleDefaultConfig() {
    if (configLoaded)
      return;
    if (zLocalConfig && Object.keys(zLocalConfig).length) {
      config = zLocalConfig;
    }
    if (!config && uni.$zp) {
      config = uni.$zp.config;
    }
    config = config ? Object.keys(config).reduce((result, key) => {
      result[_toCamelCase(key)] = config[key];
      return result;
    }, {}) : null;
    configLoaded = true;
  }
  function _timeFormat(time, textMap) {
    const date2 = new Date(time);
    const currentDate = /* @__PURE__ */ new Date();
    const dateDay = new Date(time).setHours(0, 0, 0, 0);
    const currentDateDay = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0);
    const disTime = dateDay - currentDateDay;
    let dayStr = "";
    const timeStr = _dateTimeFormat(date2);
    if (disTime === 0) {
      dayStr = textMap.today;
    } else if (disTime === -864e5) {
      dayStr = textMap.yesterday;
    } else {
      dayStr = _dateDayFormat(date2, date2.getFullYear() !== currentDate.getFullYear());
    }
    return `${dayStr} ${timeStr}`;
  }
  function _dateDayFormat(date2, showYear = true) {
    const year = date2.getFullYear();
    const month = date2.getMonth() + 1;
    const day = date2.getDate();
    return showYear ? `${year}-${_fullZeroToTwo(month)}-${_fullZeroToTwo(day)}` : `${_fullZeroToTwo(month)}-${_fullZeroToTwo(day)}`;
  }
  function _dateTimeFormat(date2) {
    const hour = date2.getHours();
    const minute = date2.getMinutes();
    return `${_fullZeroToTwo(hour)}:${_fullZeroToTwo(minute)}`;
  }
  function _fullZeroToTwo(str) {
    str = str.toString();
    return str.length === 1 ? "0" + str : str;
  }
  function _toCamelCase(value) {
    return value.replace(/-([a-z])/g, (_, group1) => group1.toUpperCase());
  }
  const u = {
    gc,
    setRefesrherTime,
    getRefesrherFormatTimeByKey,
    getTouch,
    getTouchFromZPaging,
    getParent,
    convertToPx,
    getTime,
    getInstanceId,
    consoleErr,
    delay,
    wait,
    isPromise,
    addUnit: addUnit$1,
    deepCopy,
    rpx2px
  };
  const Enum = {
    // 当前加载类型 refresher:下拉刷新 load-more:上拉加载更多
    LoadingType: {
      Refresher: "refresher",
      LoadMore: "load-more"
    },
    // 下拉刷新状态 default:默认状态 release-to-refresh:松手立即刷新 loading:刷新中 complete:刷新结束 go-f2:松手进入二楼
    Refresher: {
      Default: "default",
      ReleaseToRefresh: "release-to-refresh",
      Loading: "loading",
      Complete: "complete",
      GoF2: "go-f2"
    },
    // 底部加载更多状态 default:默认状态 loading:加载中 no-more:没有更多数据 fail:加载失败
    More: {
      Default: "default",
      Loading: "loading",
      NoMore: "no-more",
      Fail: "fail"
    },
    // @query触发来源 user-pull-down:用户主动下拉刷新 reload:通过reload触发 refresh:通过refresh触发 load-more:通过滚动到底部加载更多或点击底部加载更多触发
    QueryFrom: {
      UserPullDown: "user-pull-down",
      Reload: "reload",
      Refresh: "refresh",
      LoadMore: "load-more"
    },
    // 虚拟列表cell高度模式
    CellHeightMode: {
      // 固定高度
      Fixed: "fixed",
      // 动态高度
      Dynamic: "dynamic"
    },
    // 列表缓存模式
    CacheMode: {
      // 默认模式，只会缓存一次
      Default: "default",
      // 总是缓存，每次列表刷新(下拉刷新、调用reload等)都会更新缓存
      Always: "always"
    }
  };
  const _sfc_main$k = {
    name: "z-paging-refresh",
    data() {
      return {
        R: Enum.Refresher,
        isIos: uni.getSystemInfoSync().platform === "ios",
        refresherTimeText: "",
        zTheme: {
          title: { white: "#efefef", black: "#555555" },
          arrow: { white: zStatic.base64ArrowWhite, black: zStatic.base64Arrow },
          flower: { white: zStatic.base64FlowerWhite, black: zStatic.base64Flower },
          success: { white: zStatic.base64SuccessWhite, black: zStatic.base64Success },
          indicator: { white: "#eeeeee", black: "#777777" }
        }
      };
    },
    props: [
      "status",
      "defaultThemeStyle",
      "defaultText",
      "pullingText",
      "refreshingText",
      "completeText",
      "goF2Text",
      "defaultImg",
      "pullingImg",
      "refreshingImg",
      "completeImg",
      "refreshingAnimated",
      "showUpdateTime",
      "updateTimeKey",
      "imgStyle",
      "titleStyle",
      "updateTimeStyle",
      "updateTimeTextMap",
      "unit"
    ],
    computed: {
      ts() {
        return this.defaultThemeStyle;
      },
      // 当前状态Map
      statusTextMap() {
        this.updateTime();
        const { R, defaultText, pullingText, refreshingText, completeText, goF2Text } = this;
        return {
          [R.Default]: defaultText,
          [R.ReleaseToRefresh]: pullingText,
          [R.Loading]: refreshingText,
          [R.Complete]: completeText,
          [R.GoF2]: goF2Text
        };
      },
      // 当前状态文字
      currentTitle() {
        return this.statusTextMap[this.status] || this.defaultText;
      },
      // 左侧图片class
      leftImageClass() {
        const preSizeClass = `zp-r-left-image-pre-size-${this.unit}`;
        if (this.status === this.R.Complete)
          return preSizeClass;
        return `zp-r-left-image ${preSizeClass} ${this.status === this.R.Default ? "zp-r-arrow-down" : "zp-r-arrow-top"}`;
      },
      // 左侧图片style
      leftImageStyle() {
        const showUpdateTime = this.showUpdateTime;
        const size = showUpdateTime ? u.addUnit(36, this.unit) : u.addUnit(34, this.unit);
        return { width: size, height: size, "margin-right": showUpdateTime ? u.addUnit(20, this.unit) : u.addUnit(9, this.unit) };
      },
      // 左侧图片src
      leftImageSrc() {
        const R = this.R;
        const status = this.status;
        if (status === R.Default) {
          if (!!this.defaultImg)
            return this.defaultImg;
          return this.zTheme.arrow[this.ts];
        } else if (status === R.ReleaseToRefresh) {
          if (!!this.pullingImg)
            return this.pullingImg;
          if (!!this.defaultImg)
            return this.defaultImg;
          return this.zTheme.arrow[this.ts];
        } else if (status === R.Loading) {
          if (!!this.refreshingImg)
            return this.refreshingImg;
          return this.zTheme.flower[this.ts];
        } else if (status === R.Complete) {
          if (!!this.completeImg)
            return this.completeImg;
          return this.zTheme.success[this.ts];
        } else if (status === R.GoF2) {
          return this.zTheme.arrow[this.ts];
        }
        return "";
      },
      // 右侧文字style
      rightTextStyle() {
        let stl = {};
        stl["color"] = this.zTheme.title[this.ts];
        stl["font-size"] = u.addUnit(30, this.unit);
        return stl;
      }
    },
    methods: {
      // 添加单位
      addUnit(value, unit) {
        return u.addUnit(value, unit);
      },
      // 更新下拉刷新时间
      updateTime() {
        if (this.showUpdateTime) {
          this.refresherTimeText = u.getRefesrherFormatTimeByKey(this.updateTimeKey, this.updateTimeTextMap);
        }
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { style: { "height": "100%" } }, [
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass($props.showUpdateTime ? "zp-r-container zp-r-container-padding" : "zp-r-container")
        },
        [
          vue.createElementVNode("view", { class: "zp-r-left" }, [
            vue.createCommentVNode(" 非加载中(继续下拉刷新、松手立即刷新状态图片) "),
            $props.status !== $data.R.Loading ? (vue.openBlock(), vue.createElementBlock("image", {
              key: 0,
              class: vue.normalizeClass($options.leftImageClass),
              style: vue.normalizeStyle([$options.leftImageStyle, $props.imgStyle]),
              src: $options.leftImageSrc
            }, null, 14, ["src"])) : (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 1 },
              [
                vue.createCommentVNode(" 加载状态图片 "),
                vue.createElementVNode("image", {
                  class: vue.normalizeClass({ "zp-line-loading-image": $props.refreshingAnimated, "zp-r-left-image": true, "zp-r-left-image-pre-size-rpx": $props.unit === "rpx", "zp-r-left-image-pre-size-px": $props.unit === "px" }),
                  style: vue.normalizeStyle([$options.leftImageStyle, $props.imgStyle]),
                  src: $options.leftImageSrc
                }, null, 14, ["src"])
              ],
              2112
              /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
            )),
            vue.createCommentVNode(" 在nvue中，加载状态loading使用系统loading ")
          ]),
          vue.createCommentVNode(" 右侧文字内容 "),
          vue.createElementVNode("view", { class: "zp-r-right" }, [
            vue.createCommentVNode(" 右侧下拉刷新状态文字 "),
            vue.createElementVNode(
              "text",
              {
                class: "zp-r-right-text",
                style: vue.normalizeStyle([$options.rightTextStyle, $props.titleStyle])
              },
              vue.toDisplayString($options.currentTitle),
              5
              /* TEXT, STYLE */
            ),
            vue.createCommentVNode(" 右侧下拉刷新时间文字 "),
            $props.showUpdateTime && $data.refresherTimeText.length ? (vue.openBlock(), vue.createElementBlock(
              "text",
              {
                key: 0,
                class: vue.normalizeClass(["zp-r-right-text", { "zp-r-right-time-text-rpx": $props.unit === "rpx", "zp-r-right-time-text-px": $props.unit === "px" }]),
                style: vue.normalizeStyle([{ color: $data.zTheme.title[$options.ts] }, $props.updateTimeStyle])
              },
              vue.toDisplayString($data.refresherTimeText),
              7
              /* TEXT, CLASS, STYLE */
            )) : vue.createCommentVNode("v-if", true)
          ])
        ],
        2
        /* CLASS */
      )
    ]);
  }
  const zPagingRefresh = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$9], ["__scopeId", "data-v-00a16504"], ["__file", "D:/uniapp/news-forum/uni_modules/z-paging/components/z-paging/components/z-paging-refresh.vue"]]);
  const _sfc_main$j = {
    name: "z-paging-load-more",
    data() {
      return {
        M: Enum.More,
        zTheme: {
          title: { white: "#efefef", black: "#a4a4a4" },
          line: { white: "#efefef", black: "#eeeeee" },
          circleBorder: { white: "#aaaaaa", black: "#c8c8c8" },
          circleBorderTop: { white: "#ffffff", black: "#444444" },
          flower: { white: zStatic.base64FlowerWhite, black: zStatic.base64Flower },
          indicator: { white: "#eeeeee", black: "#777777" }
        }
      };
    },
    props: ["zConfig"],
    computed: {
      ts() {
        return this.c.defaultThemeStyle;
      },
      // 底部加载更多配置
      c() {
        return this.zConfig || {};
      },
      // 底部加载更多文字
      ownLoadingMoreText() {
        return {
          [this.M.Default]: this.c.defaultText,
          [this.M.Loading]: this.c.loadingText,
          [this.M.NoMore]: this.c.noMoreText,
          [this.M.Fail]: this.c.failText
        }[this.finalStatus];
      },
      // 底部加载更多状态
      finalStatus() {
        if (this.c.defaultAsLoading && this.c.status === this.M.Default)
          return this.M.Loading;
        return this.c.status;
      },
      // 加载更多icon类型
      finalLoadingIconType() {
        return this.c.loadingIconType;
      }
    },
    methods: {
      // 点击了加载更多
      doClick() {
        this.$emit("doClick");
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["zp-l-container", { "zp-l-container-rpx": $options.c.unit === "rpx", "zp-l-container-px": $options.c.unit === "px" }]),
        style: vue.normalizeStyle([$options.c.customStyle]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.doClick && $options.doClick(...args))
      },
      [
        !$options.c.hideContent ? (vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          { key: 0 },
          [
            vue.createCommentVNode(" 底部加载更多没有更多数据分割线 "),
            $options.c.showNoMoreLine && $options.finalStatus === $data.M.NoMore ? (vue.openBlock(), vue.createElementBlock(
              "text",
              {
                key: 0,
                class: vue.normalizeClass({ "zp-l-line-rpx": $options.c.unit === "rpx", "zp-l-line-px": $options.c.unit === "px" }),
                style: vue.normalizeStyle([{ backgroundColor: $data.zTheme.line[$options.ts] }, $options.c.noMoreLineCustomStyle])
              },
              null,
              6
              /* CLASS, STYLE */
            )) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" 底部加载更多loading "),
            $options.finalStatus === $data.M.Loading && !!$options.c.loadingIconCustomImage ? (vue.openBlock(), vue.createElementBlock("image", {
              key: 1,
              src: $options.c.loadingIconCustomImage,
              style: vue.normalizeStyle([$options.c.iconCustomStyle]),
              class: vue.normalizeClass({ "zp-l-line-loading-custom-image": true, "zp-l-line-loading-custom-image-animated": $options.c.loadingAnimated, "zp-l-line-loading-custom-image-rpx": $options.c.unit === "rpx", "zp-l-line-loading-custom-image-px": $options.c.unit === "px" })
            }, null, 14, ["src"])) : vue.createCommentVNode("v-if", true),
            $options.finalStatus === $data.M.Loading && $options.finalLoadingIconType === "flower" && !$options.c.loadingIconCustomImage.length ? (vue.openBlock(), vue.createElementBlock("image", {
              key: 2,
              class: vue.normalizeClass({ "zp-line-loading-image": true, "zp-line-loading-image-rpx": $options.c.unit === "rpx", "zp-line-loading-image-px": $options.c.unit === "px" }),
              style: vue.normalizeStyle([$options.c.iconCustomStyle]),
              src: $data.zTheme.flower[$options.ts]
            }, null, 14, ["src"])) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" 底部加载更多文字 "),
            $options.finalStatus === $data.M.Loading && $options.finalLoadingIconType === "circle" && !$options.c.loadingIconCustomImage.length ? (vue.openBlock(), vue.createElementBlock(
              "text",
              {
                key: 3,
                class: vue.normalizeClass(["zp-l-circle-loading-view", { "zp-l-circle-loading-view-rpx": $options.c.unit === "rpx", "zp-l-circle-loading-view-px": $options.c.unit === "px" }]),
                style: vue.normalizeStyle([{ borderColor: $data.zTheme.circleBorder[$options.ts], borderTopColor: $data.zTheme.circleBorderTop[$options.ts] }, $options.c.iconCustomStyle])
              },
              null,
              6
              /* CLASS, STYLE */
            )) : vue.createCommentVNode("v-if", true),
            !$options.c.isChat || !$options.c.chatDefaultAsLoading && $options.finalStatus === $data.M.Default || $options.finalStatus === $data.M.Fail ? (vue.openBlock(), vue.createElementBlock(
              "text",
              {
                key: 4,
                class: vue.normalizeClass({ "zp-l-text-rpx": $options.c.unit === "rpx", "zp-l-text-px": $options.c.unit === "px" }),
                style: vue.normalizeStyle([{ color: $data.zTheme.title[$options.ts] }, $options.c.titleCustomStyle])
              },
              vue.toDisplayString($options.ownLoadingMoreText),
              7
              /* TEXT, CLASS, STYLE */
            )) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" 底部加载更多没有更多数据分割线 "),
            $options.c.showNoMoreLine && $options.finalStatus === $data.M.NoMore ? (vue.openBlock(), vue.createElementBlock(
              "text",
              {
                key: 5,
                class: vue.normalizeClass({ "zp-l-line-rpx": $options.c.unit === "rpx", "zp-l-line-px": $options.c.unit === "px" }),
                style: vue.normalizeStyle([{ backgroundColor: $data.zTheme.line[$options.ts] }, $options.c.noMoreLineCustomStyle])
              },
              null,
              6
              /* CLASS, STYLE */
            )) : vue.createCommentVNode("v-if", true)
          ],
          64
          /* STABLE_FRAGMENT */
        )) : vue.createCommentVNode("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const zPagingLoadMore = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$8], ["__scopeId", "data-v-8cc5c400"], ["__file", "D:/uniapp/news-forum/uni_modules/z-paging/components/z-paging/components/z-paging-load-more.vue"]]);
  const commonLayoutModule = {
    data() {
      return {
        systemInfo: null,
        cssSafeAreaInsetBottom: -1,
        isReadyDestroy: false
      };
    },
    computed: {
      // 顶部可用距离
      windowTop() {
        if (!this.systemInfo)
          return 0;
        return this.systemInfo.windowTop || 0;
      },
      // 底部安全区域高度
      safeAreaBottom() {
        if (!this.systemInfo)
          return 0;
        let safeAreaBottom = 0;
        safeAreaBottom = this.systemInfo.safeAreaInsets.bottom || 0;
        return safeAreaBottom;
      },
      // 是否是比较老的webview，在一些老的webview中，需要进行一些特殊处理
      isOldWebView() {
        try {
          const systemInfos = uni.getSystemInfoSync().system.split(" ");
          const deviceType = systemInfos[0];
          const version = parseInt(systemInfos[1]);
          if (deviceType === "iOS" && version <= 10 || deviceType === "Android" && version <= 6) {
            return true;
          }
        } catch (e) {
          return false;
        }
        return false;
      },
      // 当前组件的$slots，兼容不同平台
      zSlots() {
        return this.$slots;
      }
    },
    beforeDestroy() {
      this.isReadyDestroy = true;
    },
    unmounted() {
      this.isReadyDestroy = true;
    },
    methods: {
      // 更新fixed模式下z-paging的布局
      updateFixedLayout() {
        this.fixed && this.$nextTick(() => {
          this.systemInfo = uni.getSystemInfoSync();
        });
      },
      // 获取节点尺寸
      _getNodeClientRect(select, inDom = true, scrollOffset = false, inParent = false) {
        if (this.isReadyDestroy) {
          return Promise.resolve(false);
        }
        const inDomObj = inParent ? this.$parent : this;
        let res = inDom || inParent ? uni.createSelectorQuery().in(inDomObj) : uni.createSelectorQuery();
        scrollOffset ? res.select(select).scrollOffset() : res.select(select).boundingClientRect();
        return new Promise((resolve, reject) => {
          res.exec((data) => {
            resolve(data && data != "" && data != void 0 && data.length ? data : false);
          });
        });
      },
      // 获取slot="left"和slot="right"宽度并且更新布局
      _updateLeftAndRightWidth(targetStyle, parentNodePrefix) {
        this.$nextTick(() => {
          let delayTime = 0;
          setTimeout(() => {
            ["left", "right"].map((position) => {
              this._getNodeClientRect(`.${parentNodePrefix}-${position}`).then((res) => {
                this.$set(targetStyle, position, res ? res[0].width + "px" : "0px");
              });
            });
          }, delayTime);
        });
      },
      // 通过获取css设置的底部安全区域占位view高度设置bottom距离（直接通过systemInfo在部分平台上无法获取到底部安全区域）
      _getCssSafeAreaInsetBottom(success) {
        this._getNodeClientRect(".zp-safe-area-inset-bottom").then((res) => {
          this.cssSafeAreaInsetBottom = res ? res[0].height : -1;
          res && success && success();
        });
      }
    }
  };
  const queryKey = "Query";
  const fetchParamsKey = "FetchParams";
  const fetchResultKey = "FetchResult";
  const language2LocalKey = "Language2Local";
  function handleQuery(callback) {
    _addHandleByKey(queryKey, callback);
    return this;
  }
  function _handleQuery(pageNo, pageSize, from, lastItem) {
    const callback = _getHandleByKey(queryKey);
    return callback ? callback(pageNo, pageSize, from, lastItem) : [pageNo, pageSize, from];
  }
  function handleFetchParams(callback) {
    _addHandleByKey(fetchParamsKey, callback);
    return this;
  }
  function _handleFetchParams(parmas, extraParams) {
    const callback = _getHandleByKey(fetchParamsKey);
    return callback ? callback(parmas, extraParams || {}) : { pageNo: parmas.pageNo, pageSize: parmas.pageSize, ...extraParams || {} };
  }
  function handleFetchResult(callback) {
    _addHandleByKey(fetchResultKey, callback);
    return this;
  }
  function _handleFetchResult(result, paging, params) {
    const callback = _getHandleByKey(fetchResultKey);
    callback && callback(result, paging, params);
    return callback ? true : false;
  }
  function handleLanguage2Local(callback) {
    _addHandleByKey(language2LocalKey, callback);
    return this;
  }
  function _handleLanguage2Local(language2, local) {
    const callback = _getHandleByKey(language2LocalKey);
    return callback ? callback(language2, local) : local;
  }
  function _getApp() {
    return getApp();
  }
  function _hasGlobalData() {
    return _getApp() && _getApp().globalData;
  }
  function _addHandleByKey(key, callback) {
    try {
      setTimeout(function() {
        if (_hasGlobalData()) {
          _getApp().globalData[`zp_handle${key}Callback`] = callback;
        }
      }, 1);
    } catch (_) {
    }
  }
  function _getHandleByKey(key) {
    return _hasGlobalData() ? _getApp().globalData[`zp_handle${key}Callback`] : null;
  }
  const interceptor = {
    handleQuery,
    _handleQuery,
    handleFetchParams,
    _handleFetchParams,
    handleFetchResult,
    _handleFetchResult,
    handleLanguage2Local,
    _handleLanguage2Local
  };
  const dataHandleModule = {
    props: {
      // 自定义初始的pageNo，默认为1
      defaultPageNo: {
        type: Number,
        default: u.gc("defaultPageNo", 1),
        observer: function(newVal) {
          this.pageNo = newVal;
        }
      },
      // 自定义pageSize，默认为10
      defaultPageSize: {
        type: Number,
        default: u.gc("defaultPageSize", 10),
        validator: (value) => {
          if (value <= 0)
            u.consoleErr("default-page-size必须大于0！");
          return value > 0;
        }
      },
      // 为保证数据一致，设置当前tab切换时的标识key，并在complete中传递相同key，若二者不一致，则complete将不会生效
      dataKey: {
        type: [Number, String, Object],
        default: u.gc("dataKey", null)
      },
      // 使用缓存，若开启将自动缓存第一页的数据，默认为否。请注意，因考虑到切换tab时不同tab数据不同的情况，默认仅会缓存组件首次加载时第一次请求到的数据，后续的下拉刷新操作不会更新缓存。
      useCache: {
        type: Boolean,
        default: u.gc("useCache", false)
      },
      // 使用缓存时缓存的key，用于区分不同列表的缓存数据，useCache为true时必须设置，否则缓存无效
      cacheKey: {
        type: String,
        default: u.gc("cacheKey", null)
      },
      // 缓存模式，默认仅会缓存组件首次加载时第一次请求到的数据，可设置为always，即代表总是缓存，每次列表刷新(下拉刷新、调用reload等)都会更新缓存
      cacheMode: {
        type: String,
        default: u.gc("cacheMode", Enum.CacheMode.Default)
      },
      // 自动注入的list名，可自动修改父view(包含ref="paging")中对应name的list值
      autowireListName: {
        type: String,
        default: u.gc("autowireListName", "")
      },
      // 自动注入的query名，可自动调用父view(包含ref="paging")中的query方法
      autowireQueryName: {
        type: String,
        default: u.gc("autowireQueryName", "")
      },
      // 获取分页数据Function，功能与@query类似。若设置了fetch则@query将不再触发
      fetch: {
        type: Function,
        default: null
      },
      // fetch的附加参数，fetch配置后有效
      fetchParams: {
        type: Object,
        default: u.gc("fetchParams", null)
      },
      // z-paging mounted后自动调用reload方法(mounted后自动调用接口)，默认为是
      auto: {
        type: Boolean,
        default: u.gc("auto", true)
      },
      // 用户下拉刷新时是否触发reload方法，默认为是
      reloadWhenRefresh: {
        type: Boolean,
        default: u.gc("reloadWhenRefresh", true)
      },
      // reload时自动滚动到顶部，默认为是
      autoScrollToTopWhenReload: {
        type: Boolean,
        default: u.gc("autoScrollToTopWhenReload", true)
      },
      // reload时立即自动清空原list，默认为是，若立即自动清空，则在reload之后、请求回调之前页面是空白的
      autoCleanListWhenReload: {
        type: Boolean,
        default: u.gc("autoCleanListWhenReload", true)
      },
      // 列表刷新时自动显示下拉刷新view，默认为否
      showRefresherWhenReload: {
        type: Boolean,
        default: u.gc("showRefresherWhenReload", false)
      },
      // 列表刷新时自动显示加载更多view，且为加载中状态，默认为否
      showLoadingMoreWhenReload: {
        type: Boolean,
        default: u.gc("showLoadingMoreWhenReload", false)
      },
      // 组件created时立即触发reload(可解决一些情况下先看到页面再看到loading的问题)，auto为true时有效。为否时将在mounted+nextTick后触发reload，默认为否
      createdReload: {
        type: Boolean,
        default: u.gc("createdReload", false)
      },
      // 本地分页时上拉加载更多延迟时间，单位为毫秒，默认200毫秒
      localPagingLoadingTime: {
        type: [Number, String],
        default: u.gc("localPagingLoadingTime", 200)
      },
      // 自动拼接complete中传过来的数组(使用聊天记录模式时无效)
      concat: {
        type: Boolean,
        default: u.gc("concat", true)
      },
      // 请求失败是否触发reject，默认为是
      callNetworkReject: {
        type: Boolean,
        default: u.gc("callNetworkReject", true)
      },
      // 父组件v-model所绑定的list的值
      value: {
        type: Array,
        default: function() {
          return [];
        }
      },
      modelValue: {
        type: Array,
        default: function() {
          return [];
        }
      }
    },
    data() {
      return {
        currentData: [],
        totalData: [],
        realTotalData: [],
        totalLocalPagingList: [],
        dataPromiseResultMap: {
          reload: null,
          complete: null,
          localPaging: null
        },
        isSettingCacheList: false,
        pageNo: 1,
        currentRefreshPageSize: 0,
        isLocalPaging: false,
        isAddedData: false,
        isTotalChangeFromAddData: false,
        privateConcat: true,
        myParentQuery: -1,
        firstPageLoaded: false,
        pagingLoaded: false,
        loaded: false,
        isUserReload: true,
        fromEmptyViewReload: false,
        queryFrom: "",
        listRendering: false,
        isHandlingRefreshToPage: false,
        isFirstPageAndNoMore: false,
        totalDataChangeThrow: true
      };
    },
    computed: {
      pageSize() {
        return this.defaultPageSize;
      },
      finalConcat() {
        return this.concat && this.privateConcat;
      },
      finalUseCache() {
        if (this.useCache && !this.cacheKey) {
          u.consoleErr("use-cache为true时，必须设置cache-key，否则缓存无效！");
        }
        return this.useCache && !!this.cacheKey;
      },
      finalCacheKey() {
        return this.cacheKey ? `${c.cachePrefixKey}-${this.cacheKey}` : null;
      },
      isFirstPage() {
        return this.pageNo === this.defaultPageNo;
      }
    },
    watch: {
      totalData(newVal, oldVal) {
        this._totalDataChange(newVal, oldVal, this.totalDataChangeThrow);
        this.totalDataChangeThrow = true;
      },
      currentData(newVal, oldVal) {
        this._currentDataChange(newVal, oldVal);
      },
      useChatRecordMode(newVal, oldVal) {
        if (newVal) {
          this.nLoadingMoreFixedHeight = false;
        }
      },
      value: {
        handler(newVal) {
          if (newVal !== this.totalData) {
            this.totalDataChangeThrow = false;
            this.totalData = newVal;
          }
        },
        immediate: true
      },
      modelValue: {
        handler(newVal) {
          if (newVal !== this.totalData) {
            this.totalDataChangeThrow = false;
            this.totalData = newVal;
          }
        },
        immediate: true
      }
    },
    methods: {
      // 请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging处理，第一个参数为请求结果数组，第二个参数为是否成功(默认为是）
      complete(data, success = true) {
        this.customNoMore = -1;
        return this.addData(data, success);
      },
      //【保证数据一致】请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging处理，第一个参数为请求结果数组，第二个参数为dataKey，需与:data-key绑定的一致，第三个参数为是否成功(默认为是）
      completeByKey(data, dataKey = null, success = true) {
        if (dataKey !== null && this.dataKey !== null && dataKey !== this.dataKey) {
          this.isFirstPage && this.endRefresh();
          return new Promise((resolve) => resolve());
        }
        this.customNoMore = -1;
        return this.addData(data, success);
      },
      //【通过total判断是否有更多数据】请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging处理，第一个参数为请求结果数组，第二个参数为total(列表总数)，第三个参数为是否成功(默认为是）
      completeByTotal(data, total, success = true) {
        if (total == "undefined") {
          this.customNoMore = -1;
        } else {
          const dataTypeRes = this._checkDataType(data, success, false);
          data = dataTypeRes.data;
          success = dataTypeRes.success;
          if (total >= 0 && success) {
            return new Promise((resolve, reject) => {
              this.$nextTick(() => {
                let nomore = false;
                const realTotalDataCount = this.pageNo == this.defaultPageNo ? 0 : this.realTotalData.length;
                const dataLength = this.privateConcat ? data.length : 0;
                let exceedCount = realTotalDataCount + dataLength - total;
                if (exceedCount >= 0) {
                  nomore = true;
                  exceedCount = this.defaultPageSize - exceedCount;
                  if (this.privateConcat && exceedCount > 0 && exceedCount < data.length) {
                    data = data.splice(0, exceedCount);
                  }
                }
                this.completeByNoMore(data, nomore, success).then((res) => resolve(res)).catch(() => reject());
              });
            });
          }
        }
        return this.addData(data, success);
      },
      //【自行判断是否有更多数据】请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging处理，第一个参数为请求结果数组，第二个参数为是否没有更多数据，第三个参数为是否成功(默认是是）
      completeByNoMore(data, nomore, success = true) {
        if (nomore != "undefined") {
          this.customNoMore = nomore == true ? 1 : 0;
        }
        return this.addData(data, success);
      },
      // 请求结束且请求失败时调用，支持传入请求失败原因
      completeByError(errorMsg) {
        this.customerEmptyViewErrorText = errorMsg;
        return this.complete(false);
      },
      // 与上方complete方法功能一致，新版本中设置服务端回调数组请使用complete方法
      addData(data, success = true) {
        if (!this.fromCompleteEmit) {
          this.disabledCompleteEmit = true;
          this.fromCompleteEmit = false;
        }
        const currentTimeStamp = u.getTime();
        const disTime = currentTimeStamp - this.requestTimeStamp;
        let minDelay = this.minDelay;
        if (this.isFirstPage && this.finalShowRefresherWhenReload) {
          minDelay = Math.max(400, minDelay);
        }
        const addDataDalay = this.requestTimeStamp > 0 && disTime < minDelay ? minDelay - disTime : 0;
        this.$nextTick(() => {
          u.delay(() => {
            this._addData(data, success, false);
          }, this.delay > 0 ? this.delay : addDataDalay);
        });
        return new Promise((resolve, reject) => {
          this.dataPromiseResultMap.complete = { resolve, reject };
        });
      },
      // 从顶部添加数据，不会影响分页的pageNo和pageSize
      addDataFromTop(data, toTop = true, toTopWithAnimate = true) {
        let addFromTop = !this.isChatRecordModeAndNotInversion;
        data = Object.prototype.toString.call(data) !== "[object Array]" ? [data] : addFromTop ? data.reverse() : data;
        this.finalUseVirtualList && this._setCellIndex(data, "top");
        this.totalData = addFromTop ? [...data, ...this.totalData] : [...this.totalData, ...data];
        if (toTop) {
          u.delay(() => this.useChatRecordMode ? this.scrollToBottom(toTopWithAnimate) : this.scrollToTop(toTopWithAnimate));
        }
      },
      // 重新设置列表数据，调用此方法不会影响pageNo和pageSize，也不会触发请求。适用场景：当需要删除列表中某一项时，将删除对应项后的数组通过此方法传递给z-paging。(当出现类似的需要修改列表数组的场景时，请使用此方法，请勿直接修改page中:list.sync绑定的数组)
      resetTotalData(data) {
        this.isTotalChangeFromAddData = true;
        data = Object.prototype.toString.call(data) !== "[object Array]" ? [data] : data;
        this.totalData = data;
      },
      // 设置本地分页数据，请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging作分页处理（若调用了此方法，则上拉加载更多时内部会自动分页，不会触发@query所绑定的事件）
      setLocalPaging(data, success = true) {
        this.isLocalPaging = true;
        this.$nextTick(() => {
          this._addData(data, success, true);
        });
        return new Promise((resolve, reject) => {
          this.dataPromiseResultMap.localPaging = { resolve, reject };
        });
      },
      // 重新加载分页数据，pageNo会恢复为默认值，相当于下拉刷新的效果(animate为true时会展示下拉刷新动画，默认为false)
      reload(animate = this.showRefresherWhenReload) {
        if (animate) {
          this.privateShowRefresherWhenReload = animate;
          this.isUserPullDown = true;
        }
        if (!this.showLoadingMoreWhenReload) {
          this.listRendering = true;
        }
        this.$nextTick(() => {
          this._preReload(animate, false);
        });
        return new Promise((resolve, reject) => {
          this.dataPromiseResultMap.reload = { resolve, reject };
        });
      },
      // 刷新列表数据，pageNo和pageSize不会重置，列表数据会重新从服务端获取。必须保证@query绑定的方法中的pageNo和pageSize和传给服务端的一致
      refresh() {
        return this._handleRefreshWithDisPageNo(this.pageNo - this.defaultPageNo + 1);
      },
      // 刷新列表数据至指定页，例如pageNo=5时则代表刷新列表至第5页，此时pageNo会变为5，列表会展示前5页的数据。必须保证@query绑定的方法中的pageNo和pageSize和传给服务端的一致
      refreshToPage(pageNo) {
        this.isHandlingRefreshToPage = true;
        return this._handleRefreshWithDisPageNo(pageNo + this.defaultPageNo - 1);
      },
      // 手动更新列表缓存数据，将自动截取v-model绑定的list中的前pageSize条覆盖缓存，请确保在list数据更新到预期结果后再调用此方法
      updateCache() {
        if (this.finalUseCache && this.totalData.length) {
          this._saveLocalCache(this.totalData.slice(0, Math.min(this.totalData.length, this.pageSize)));
        }
      },
      // 清空分页数据
      clean() {
        this._reload(true);
        this._addData([], true, false);
      },
      // 清空分页数据
      clear() {
        this.clean();
      },
      // reload之前的一些处理
      _preReload(animate = this.showRefresherWhenReload, isFromMounted = true, retryCount = 0) {
        const showRefresher = this.finalRefresherEnabled && this.useCustomRefresher;
        if (this.customRefresherHeight === -1 && showRefresher) {
          u.delay(() => {
            retryCount++;
            if (retryCount % 10 === 0) {
              this._updateCustomRefresherHeight();
            }
            this._preReload(animate, isFromMounted, retryCount);
          }, c.delayTime / 2);
          return;
        }
        this.isUserReload = true;
        this.loadingType = Enum.LoadingType.Refresher;
        if (animate) {
          this.privateShowRefresherWhenReload = animate;
          if (this.useCustomRefresher) {
            this._doRefresherRefreshAnimate();
          } else {
            this.refresherTriggered = true;
          }
        } else {
          this._refresherEnd(false, false, false, false);
        }
        this._reload(false, isFromMounted);
      },
      // 重新加载分页数据
      _reload(isClean = false, isFromMounted = false, isUserPullDown = false) {
        this.isAddedData = false;
        this.insideOfPaging = -1;
        this.cacheScrollNodeHeight = -1;
        this.pageNo = this.defaultPageNo;
        this._cleanRefresherEndTimeout();
        !this.privateShowRefresherWhenReload && !isClean && this._startLoading(true);
        this.firstPageLoaded = true;
        this.isTotalChangeFromAddData = false;
        if (!this.isSettingCacheList) {
          this.totalData = [];
        }
        if (!isClean) {
          this._emitQuery(this.pageNo, this.defaultPageSize, isUserPullDown ? Enum.QueryFrom.UserPullDown : Enum.QueryFrom.Reload);
          let delay2 = 0;
          u.delay(this._callMyParentQuery, delay2);
          if (!isFromMounted && this.autoScrollToTopWhenReload) {
            this._scrollToTop(false);
          }
        }
      },
      // 处理服务端返回的数组
      _addData(data, success, isLocal) {
        this.isAddedData = true;
        this.fromEmptyViewReload = false;
        this.isTotalChangeFromAddData = true;
        this.refresherTriggered = false;
        this._endSystemLoadingAndRefresh();
        const tempIsUserPullDown = this.isUserPullDown;
        if (this.showRefresherUpdateTime && this.isFirstPage) {
          u.setRefesrherTime(u.getTime(), this.refresherUpdateTimeKey);
          this.$refs.refresh && this.$refs.refresh.updateTime();
        }
        if (!isLocal && tempIsUserPullDown && this.isFirstPage) {
          this.isUserPullDown = false;
        }
        this.listRendering = true;
        this.$nextTick(() => {
          u.delay(() => this.listRendering = false);
        });
        let dataTypeRes = this._checkDataType(data, success, isLocal);
        data = dataTypeRes.data;
        success = dataTypeRes.success;
        let delayTime = c.delayTime;
        if (this.useChatRecordMode)
          delayTime = 0;
        this.loadingForNow = false;
        u.delay(() => {
          this.pagingLoaded = true;
          this.$nextTick(() => {
            !isLocal && this._refresherEnd(delayTime > 0, true, tempIsUserPullDown);
          });
        });
        if (this.isFirstPage) {
          this.isLoadFailed = !success;
          this.$emit("isLoadFailedChange", this.isLoadFailed);
          if (this.finalUseCache && success && (this.cacheMode === Enum.CacheMode.Always ? true : this.isSettingCacheList)) {
            this._saveLocalCache(data);
          }
        }
        this.isSettingCacheList = false;
        if (success) {
          if (!(this.privateConcat === false && !this.isHandlingRefreshToPage && this.loadingStatus === Enum.More.NoMore)) {
            this.loadingStatus = Enum.More.Default;
          }
          if (isLocal) {
            this.totalLocalPagingList = data;
            const localPageNo = this.defaultPageNo;
            const localPageSize = this.queryFrom !== Enum.QueryFrom.Refresh ? this.defaultPageSize : this.currentRefreshPageSize;
            this._localPagingQueryList(localPageNo, localPageSize, 0, (res) => {
              u.delay(() => {
                this.completeByTotal(res, this.totalLocalPagingList.length);
              }, 0);
            });
          } else {
            let dataChangeDelayTime = 0;
            u.delay(() => {
              this._currentDataChange(data, this.currentData);
              this._callDataPromise(true, this.totalData);
            }, dataChangeDelayTime);
          }
          if (this.isHandlingRefreshToPage) {
            this.isHandlingRefreshToPage = false;
            this.pageNo = this.defaultPageNo + Math.ceil(data.length / this.pageSize) - 1;
            if (data.length % this.pageSize !== 0) {
              this.customNoMore = 1;
            }
          }
        } else {
          this._currentDataChange(data, this.currentData);
          this._callDataPromise(false);
          this.loadingStatus = Enum.More.Fail;
          this.isHandlingRefreshToPage = false;
          if (this.loadingType === Enum.LoadingType.LoadMore) {
            this.pageNo--;
          }
        }
      },
      // 所有数据改变时调用
      _totalDataChange(newVal, oldVal, eventThrow = true) {
        if ((!this.isUserReload || !this.autoCleanListWhenReload) && this.firstPageLoaded && !newVal.length && oldVal.length) {
          return;
        }
        this._doCheckScrollViewShouldFullHeight(newVal);
        if (!this.realTotalData.length && !newVal.length) {
          eventThrow = false;
        }
        this.realTotalData = newVal;
        if (eventThrow) {
          this.$emit("input", newVal);
          this.$emit("update:modelValue", newVal);
          this.$emit("update:list", newVal);
          this.$emit("listChange", newVal);
          this._callMyParentList(newVal);
        }
        this.firstPageLoaded = false;
        this.isTotalChangeFromAddData = false;
        this.$nextTick(() => {
          u.delay(() => {
            this._getNodeClientRect(".zp-paging-container-content").then((res) => {
              res && this.$emit("contentHeightChanged", res[0].height);
            });
          }, c.delayTime * (this.isIos ? 1 : 3));
        });
      },
      // 当前数据改变时调用
      _currentDataChange(newVal, oldVal) {
        newVal = [...newVal];
        this.finalUseVirtualList && this._setCellIndex(newVal, "bottom");
        if (this.isFirstPage && this.finalConcat) {
          this.totalData = [];
        }
        if (this.customNoMore !== -1) {
          if (this.customNoMore === 1 || this.customNoMore !== 0 && !newVal.length) {
            this.loadingStatus = Enum.More.NoMore;
          }
        } else {
          if (!newVal.length || newVal.length && newVal.length < this.defaultPageSize) {
            this.loadingStatus = Enum.More.NoMore;
          }
        }
        if (!this.totalData.length) {
          this.totalData = newVal;
        } else {
          if (this.finalConcat) {
            this.oldScrollTop;
            this.totalData = [...this.totalData, ...newVal];
          } else {
            this.totalData = newVal;
          }
        }
        this.privateConcat = true;
      },
      // 根据pageNo处理refresh操作
      _handleRefreshWithDisPageNo(pageNo) {
        if (!this.isHandlingRefreshToPage && !this.realTotalData.length)
          return this.reload();
        if (pageNo >= 1) {
          this.loading = true;
          this.privateConcat = false;
          const totalPageSize = pageNo * this.pageSize;
          this.currentRefreshPageSize = totalPageSize;
          if (this.isLocalPaging && this.isHandlingRefreshToPage) {
            this._localPagingQueryList(this.defaultPageNo, totalPageSize, 0, (res) => {
              this.complete(res);
            });
          } else {
            this._emitQuery(this.defaultPageNo, totalPageSize, Enum.QueryFrom.Refresh);
            this._callMyParentQuery(this.defaultPageNo, totalPageSize);
          }
        }
        return new Promise((resolve, reject) => {
          this.dataPromiseResultMap.reload = { resolve, reject };
        });
      },
      // 本地分页请求
      _localPagingQueryList(pageNo, pageSize, localPagingLoadingTime, callback) {
        pageNo = Math.max(1, pageNo);
        pageSize = Math.max(1, pageSize);
        const totalPagingList = [...this.totalLocalPagingList];
        const pageNoIndex = (pageNo - 1) * pageSize;
        const finalPageNoIndex = Math.min(totalPagingList.length, pageNoIndex + pageSize);
        const resultPagingList = totalPagingList.splice(pageNoIndex, finalPageNoIndex - pageNoIndex);
        u.delay(() => callback(resultPagingList), localPagingLoadingTime);
      },
      // 存储列表缓存数据
      _saveLocalCache(data) {
        uni.setStorageSync(this.finalCacheKey, data);
      },
      // 通过缓存数据填充列表数据
      _setListByLocalCache() {
        this.totalData = uni.getStorageSync(this.finalCacheKey) || [];
        this.isSettingCacheList = true;
      },
      // 修改父view的list
      _callMyParentList(newVal) {
        if (this.autowireListName.length) {
          const myParent = u.getParent(this.$parent);
          if (myParent && myParent[this.autowireListName]) {
            myParent[this.autowireListName] = newVal;
          }
        }
      },
      // 调用父view的query
      _callMyParentQuery(customPageNo = 0, customPageSize = 0) {
        if (this.autowireQueryName) {
          if (this.myParentQuery === -1) {
            const myParent = u.getParent(this.$parent);
            if (myParent && myParent[this.autowireQueryName]) {
              this.myParentQuery = myParent[this.autowireQueryName];
            }
          }
          if (this.myParentQuery !== -1) {
            customPageSize > 0 ? this.myParentQuery(customPageNo, customPageSize) : this.myParentQuery(this.pageNo, this.defaultPageSize);
          }
        }
      },
      // emit query事件
      _emitQuery(pageNo, pageSize, from) {
        this.queryFrom = from;
        this.requestTimeStamp = u.getTime();
        const [lastItem] = this.realTotalData.slice(-1);
        if (this.fetch) {
          const fetchParams = interceptor._handleFetchParams({ pageNo, pageSize, from, lastItem: lastItem || null }, this.fetchParams);
          const fetchResult = this.fetch(fetchParams);
          if (!interceptor._handleFetchResult(fetchResult, this, fetchParams)) {
            u.isPromise(fetchResult) ? fetchResult.then((res) => {
              this.complete(res);
            }).catch((err) => {
              this.complete(false);
            }) : this.complete(fetchResult);
          }
        } else {
          this.$emit("query", ...interceptor._handleQuery(pageNo, pageSize, from, lastItem || null));
        }
      },
      // 触发数据改变promise
      _callDataPromise(success, totalList) {
        for (const key in this.dataPromiseResultMap) {
          const obj = this.dataPromiseResultMap[key];
          if (!obj)
            continue;
          success ? obj.resolve({ totalList, noMore: this.loadingStatus === Enum.More.NoMore }) : this.callNetworkReject && obj.reject(`z-paging-${key}-error`);
        }
      },
      // 检查complete data的类型
      _checkDataType(data, success, isLocal) {
        const dataType = Object.prototype.toString.call(data);
        if (dataType === "[object Boolean]") {
          success = data;
          data = [];
        } else if (dataType !== "[object Array]") {
          data = [];
          if (dataType !== "[object Undefined]" && dataType !== "[object Null]") {
            u.consoleErr(`${isLocal ? "setLocalPaging" : "complete"}参数类型不正确，第一个参数类型必须为Array!`);
          }
        }
        return { data, success };
      }
    }
  };
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index2 = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index2 < tokens.length) {
      const token = tokens[index2];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index2++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages2 && Object.keys(messages2).length > 0) {
      locales = Object.keys(messages2);
    }
    const lang = startsWith(locale, locales);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater: formater2 }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater2 || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index2 = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index2, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      const options = [
        messages2,
        locale
      ];
      locale = options[0];
      messages2 = options[1];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const en$2 = {
    "zp.refresher.default": "Pull down to refresh",
    "zp.refresher.pulling": "Release to refresh",
    "zp.refresher.refreshing": "Refreshing...",
    "zp.refresher.complete": "Refresh succeeded",
    "zp.refresher.f2": "Refresh to enter 2f",
    "zp.loadingMore.default": "Click to load more",
    "zp.loadingMore.loading": "Loading...",
    "zp.loadingMore.noMore": "No more data",
    "zp.loadingMore.fail": "Load failed,click to reload",
    "zp.emptyView.title": "No data",
    "zp.emptyView.reload": "Reload",
    "zp.emptyView.error": "Sorry,load failed",
    "zp.refresherUpdateTime.title": "Last update: ",
    "zp.refresherUpdateTime.none": "None",
    "zp.refresherUpdateTime.today": "Today",
    "zp.refresherUpdateTime.yesterday": "Yesterday",
    "zp.systemLoading.title": "Loading..."
  };
  const zhHans$2 = {
    "zp.refresher.default": "继续下拉刷新",
    "zp.refresher.pulling": "松开立即刷新",
    "zp.refresher.refreshing": "正在刷新...",
    "zp.refresher.complete": "刷新成功",
    "zp.refresher.f2": "松手进入二楼",
    "zp.loadingMore.default": "点击加载更多",
    "zp.loadingMore.loading": "正在加载...",
    "zp.loadingMore.noMore": "没有更多了",
    "zp.loadingMore.fail": "加载失败，点击重新加载",
    "zp.emptyView.title": "没有数据哦~",
    "zp.emptyView.reload": "重新加载",
    "zp.emptyView.error": "很抱歉，加载失败",
    "zp.refresherUpdateTime.title": "最后更新：",
    "zp.refresherUpdateTime.none": "无",
    "zp.refresherUpdateTime.today": "今天",
    "zp.refresherUpdateTime.yesterday": "昨天",
    "zp.systemLoading.title": "加载中..."
  };
  const zhHant$2 = {
    "zp.refresher.default": "繼續下拉重繪",
    "zp.refresher.pulling": "鬆開立即重繪",
    "zp.refresher.refreshing": "正在重繪...",
    "zp.refresher.complete": "重繪成功",
    "zp.refresher.f2": "鬆手進入二樓",
    "zp.loadingMore.default": "點擊加載更多",
    "zp.loadingMore.loading": "正在加載...",
    "zp.loadingMore.noMore": "沒有更多了",
    "zp.loadingMore.fail": "加載失敗，點擊重新加載",
    "zp.emptyView.title": "沒有數據哦~",
    "zp.emptyView.reload": "重新加載",
    "zp.emptyView.error": "很抱歉，加載失敗",
    "zp.refresherUpdateTime.title": "最後更新：",
    "zp.refresherUpdateTime.none": "無",
    "zp.refresherUpdateTime.today": "今天",
    "zp.refresherUpdateTime.yesterday": "昨天",
    "zp.systemLoading.title": "加載中..."
  };
  const messages$2 = {
    en: en$2,
    "zh-Hans": zhHans$2,
    "zh-Hant": zhHant$2
  };
  const { t: t$2 } = initVueI18n(messages$2);
  const language = uni.getSystemInfoSync().language;
  const i18nModule = {
    data() {
      return {
        language
      };
    },
    computed: {
      finalLanguage() {
        try {
          const local = uni.getLocale();
          const language2 = this.language;
          return local === "auto" ? interceptor._handleLanguage2Local(language2, this._language2Local(language2)) : local;
        } catch (e) {
          return "zh-Hans";
        }
      },
      // 最终的下拉刷新默认状态的文字
      finalRefresherDefaultText() {
        return this._getI18nText("zp.refresher.default", this.refresherDefaultText);
      },
      // 最终的下拉刷新下拉中的文字
      finalRefresherPullingText() {
        return this._getI18nText("zp.refresher.pulling", this.refresherPullingText);
      },
      // 最终的下拉刷新中文字
      finalRefresherRefreshingText() {
        return this._getI18nText("zp.refresher.refreshing", this.refresherRefreshingText);
      },
      // 最终的下拉刷新完成文字
      finalRefresherCompleteText() {
        return this._getI18nText("zp.refresher.complete", this.refresherCompleteText);
      },
      // 最终的下拉刷新上次更新时间文字
      finalRefresherUpdateTimeTextMap() {
        return {
          title: t$2("zp.refresherUpdateTime.title"),
          none: t$2("zp.refresherUpdateTime.none"),
          today: t$2("zp.refresherUpdateTime.today"),
          yesterday: t$2("zp.refresherUpdateTime.yesterday")
        };
      },
      // 最终的继续下拉进入二楼文字
      finalRefresherGoF2Text() {
        return this._getI18nText("zp.refresher.f2", this.refresherGoF2Text);
      },
      // 最终的底部加载更多默认状态文字
      finalLoadingMoreDefaultText() {
        return this._getI18nText("zp.loadingMore.default", this.loadingMoreDefaultText);
      },
      // 最终的底部加载更多加载中文字
      finalLoadingMoreLoadingText() {
        return this._getI18nText("zp.loadingMore.loading", this.loadingMoreLoadingText);
      },
      // 最终的底部加载更多没有更多数据文字
      finalLoadingMoreNoMoreText() {
        return this._getI18nText("zp.loadingMore.noMore", this.loadingMoreNoMoreText);
      },
      // 最终的底部加载更多加载失败文字
      finalLoadingMoreFailText() {
        return this._getI18nText("zp.loadingMore.fail", this.loadingMoreFailText);
      },
      // 最终的空数据图title
      finalEmptyViewText() {
        return this.isLoadFailed ? this.finalEmptyViewErrorText : this._getI18nText("zp.emptyView.title", this.emptyViewText);
      },
      // 最终的空数据图reload title
      finalEmptyViewReloadText() {
        return this._getI18nText("zp.emptyView.reload", this.emptyViewReloadText);
      },
      // 最终的空数据图加载失败文字
      finalEmptyViewErrorText() {
        return this.customerEmptyViewErrorText || this._getI18nText("zp.emptyView.error", this.emptyViewErrorText);
      },
      // 最终的系统loading title
      finalSystemLoadingText() {
        return this._getI18nText("zp.systemLoading.title", this.systemLoadingText);
      }
    },
    methods: {
      // 获取当前z-paging的语言
      getLanguage() {
        return this.finalLanguage;
      },
      // 获取国际化转换后的文本
      _getI18nText(key, value) {
        const dataType = Object.prototype.toString.call(value);
        if (dataType === "[object Object]") {
          const nextValue = value[this.finalLanguage];
          if (nextValue)
            return nextValue;
        } else if (dataType === "[object String]") {
          return value;
        }
        return t$2(key);
      },
      // 系统language转i18n local
      _language2Local(language2) {
        const formatedLanguage = language2.toLowerCase().replace(new RegExp("_", ""), "-");
        if (formatedLanguage.indexOf("zh") !== -1) {
          if (formatedLanguage === "zh" || formatedLanguage === "zh-cn" || formatedLanguage.indexOf("zh-hans") !== -1) {
            return "zh-Hans";
          }
          return "zh-Hant";
        }
        if (formatedLanguage.indexOf("en") !== -1)
          return "en";
        return language2;
      }
    }
  };
  const nvueModule = {
    props: {},
    data() {
      return {
        nRefresherLoading: false,
        nListIsDragging: false,
        nShowBottom: true,
        nFixFreezing: false,
        nShowRefresherReveal: false,
        nLoadingMoreFixedHeight: false,
        nShowRefresherRevealHeight: 0,
        nOldShowRefresherRevealHeight: -1,
        nRefresherWidth: u.rpx2px(750),
        nF2Opacity: 0
      };
    },
    computed: {},
    mounted() {
    },
    methods: {}
  };
  const emptyModule = {
    props: {
      // 是否强制隐藏空数据图，默认为否
      hideEmptyView: {
        type: Boolean,
        default: u.gc("hideEmptyView", false)
      },
      // 空数据图描述文字，默认为“没有数据哦~”
      emptyViewText: {
        type: [String, Object],
        default: u.gc("emptyViewText", null)
      },
      // 是否显示空数据图重新加载按钮(无数据时)，默认为否
      showEmptyViewReload: {
        type: Boolean,
        default: u.gc("showEmptyViewReload", false)
      },
      // 加载失败时是否显示空数据图重新加载按钮，默认为是
      showEmptyViewReloadWhenError: {
        type: Boolean,
        default: u.gc("showEmptyViewReloadWhenError", true)
      },
      // 空数据图点击重新加载文字，默认为“重新加载”
      emptyViewReloadText: {
        type: [String, Object],
        default: u.gc("emptyViewReloadText", null)
      },
      // 空数据图图片，默认使用z-paging内置的图片
      emptyViewImg: {
        type: String,
        default: u.gc("emptyViewImg", "")
      },
      // 空数据图“加载失败”描述文字，默认为“很抱歉，加载失败”
      emptyViewErrorText: {
        type: [String, Object],
        default: u.gc("emptyViewErrorText", null)
      },
      // 空数据图“加载失败”图片，默认使用z-paging内置的图片
      emptyViewErrorImg: {
        type: String,
        default: u.gc("emptyViewErrorImg", "")
      },
      // 空数据图样式
      emptyViewStyle: {
        type: Object,
        default: u.gc("emptyViewStyle", {})
      },
      // 空数据图容器样式
      emptyViewSuperStyle: {
        type: Object,
        default: u.gc("emptyViewSuperStyle", {})
      },
      // 空数据图img样式
      emptyViewImgStyle: {
        type: Object,
        default: u.gc("emptyViewImgStyle", {})
      },
      // 空数据图描述文字样式
      emptyViewTitleStyle: {
        type: Object,
        default: u.gc("emptyViewTitleStyle", {})
      },
      // 空数据图重新加载按钮样式
      emptyViewReloadStyle: {
        type: Object,
        default: u.gc("emptyViewReloadStyle", {})
      },
      // 空数据图片是否铺满z-paging，默认为否，即填充满z-paging内列表(滚动区域)部分。若设置为否，则为填铺满整个z-paging
      emptyViewFixed: {
        type: Boolean,
        default: u.gc("emptyViewFixed", false)
      },
      // 空数据图片是否垂直居中，默认为是，若设置为否即为从空数据容器顶部开始显示。emptyViewFixed为false时有效
      emptyViewCenter: {
        type: Boolean,
        default: u.gc("emptyViewCenter", true)
      },
      // 加载中时是否自动隐藏空数据图，默认为是
      autoHideEmptyViewWhenLoading: {
        type: Boolean,
        default: u.gc("autoHideEmptyViewWhenLoading", true)
      },
      // 用户下拉列表触发下拉刷新加载中时是否自动隐藏空数据图，默认为是
      autoHideEmptyViewWhenPull: {
        type: Boolean,
        default: u.gc("autoHideEmptyViewWhenPull", true)
      },
      // 空数据view的z-index，默认为9
      emptyViewZIndex: {
        type: Number,
        default: u.gc("emptyViewZIndex", 9)
      }
    },
    data() {
      return {
        customerEmptyViewErrorText: ""
      };
    },
    computed: {
      finalEmptyViewImg() {
        return this.isLoadFailed ? this.emptyViewErrorImg : this.emptyViewImg;
      },
      finalShowEmptyViewReload() {
        return this.isLoadFailed ? this.showEmptyViewReloadWhenError : this.showEmptyViewReload;
      },
      // 是否展示空数据图
      showEmpty() {
        if (this.refresherOnly || this.hideEmptyView || this.realTotalData.length)
          return false;
        if (this.autoHideEmptyViewWhenLoading) {
          if (this.isAddedData && !this.firstPageLoaded && !this.loading)
            return true;
        } else {
          return true;
        }
        return !this.autoHideEmptyViewWhenPull && !this.isUserReload;
      }
    },
    methods: {
      // 点击了空数据view重新加载按钮
      _emptyViewReload() {
        let callbacked = false;
        this.$emit("emptyViewReload", (reload) => {
          if (reload === void 0 || reload === true) {
            this.fromEmptyViewReload = true;
            this.reload().catch(() => {
            });
          }
          callbacked = true;
        });
        this.$nextTick(() => {
          if (!callbacked) {
            this.fromEmptyViewReload = true;
            this.reload().catch(() => {
            });
          }
        });
      },
      // 点击了空数据view
      _emptyViewClick() {
        this.$emit("emptyViewClick");
      }
    }
  };
  const refresherModule = {
    props: {
      // 下拉刷新的主题样式，支持black，white，默认black
      refresherThemeStyle: {
        type: String,
        default: u.gc("refresherThemeStyle", "")
      },
      // 自定义下拉刷新中左侧图标的样式
      refresherImgStyle: {
        type: Object,
        default: u.gc("refresherImgStyle", {})
      },
      // 自定义下拉刷新中右侧状态描述文字的样式
      refresherTitleStyle: {
        type: Object,
        default: u.gc("refresherTitleStyle", {})
      },
      // 自定义下拉刷新中右侧最后更新时间文字的样式(show-refresher-update-time为true时有效)
      refresherUpdateTimeStyle: {
        type: Object,
        default: u.gc("refresherUpdateTimeStyle", {})
      },
      // 在微信小程序和QQ小程序中，是否实时监听下拉刷新中进度，默认为否
      watchRefresherTouchmove: {
        type: Boolean,
        default: u.gc("watchRefresherTouchmove", false)
      },
      // 底部加载更多的主题样式，支持black，white，默认black
      loadingMoreThemeStyle: {
        type: String,
        default: u.gc("loadingMoreThemeStyle", "")
      },
      // 是否只使用下拉刷新，设置为true后将关闭mounted自动请求数据、关闭滚动到底部加载更多，强制隐藏空数据图。默认为否
      refresherOnly: {
        type: Boolean,
        default: u.gc("refresherOnly", false)
      },
      // 自定义下拉刷新默认状态下回弹动画时间，单位为毫秒，默认为100毫秒，nvue无效
      refresherDefaultDuration: {
        type: [Number, String],
        default: u.gc("refresherDefaultDuration", 100)
      },
      // 自定义下拉刷新结束以后延迟回弹的时间，单位为毫秒，默认为0
      refresherCompleteDelay: {
        type: [Number, String],
        default: u.gc("refresherCompleteDelay", 0)
      },
      // 自定义下拉刷新结束回弹动画时间，单位为毫秒，默认为300毫秒(refresherEndBounceEnabled为false时，refresherCompleteDuration为设定值的1/3)，nvue无效
      refresherCompleteDuration: {
        type: [Number, String],
        default: u.gc("refresherCompleteDuration", 300)
      },
      // 自定义下拉刷新中是否允许列表滚动，默认为是
      refresherRefreshingScrollable: {
        type: Boolean,
        default: u.gc("refresherRefreshingScrollable", true)
      },
      // 自定义下拉刷新结束状态下是否允许列表滚动，默认为否
      refresherCompleteScrollable: {
        type: Boolean,
        default: u.gc("refresherCompleteScrollable", false)
      },
      // 是否使用自定义的下拉刷新，默认为是，即使用z-paging的下拉刷新。设置为false即代表使用uni scroll-view自带的下拉刷新，h5、App、微信小程序以外的平台不支持uni scroll-view自带的下拉刷新
      useCustomRefresher: {
        type: Boolean,
        default: u.gc("useCustomRefresher", true)
      },
      // 自定义下拉刷新下拉帧率，默认为40，过高可能会出现抖动问题
      refresherFps: {
        type: [Number, String],
        default: u.gc("refresherFps", 40)
      },
      // 自定义下拉刷新允许触发的最大下拉角度，默认为40度，当下拉角度小于设定值时，自定义下拉刷新动画不会被触发
      refresherMaxAngle: {
        type: [Number, String],
        default: u.gc("refresherMaxAngle", 40)
      },
      // 自定义下拉刷新的角度由未达到最大角度变到达到最大角度时，是否继续下拉刷新手势，默认为否
      refresherAngleEnableChangeContinued: {
        type: Boolean,
        default: u.gc("refresherAngleEnableChangeContinued", false)
      },
      // 自定义下拉刷新默认状态下的文字
      refresherDefaultText: {
        type: [String, Object],
        default: u.gc("refresherDefaultText", null)
      },
      // 自定义下拉刷新松手立即刷新状态下的文字
      refresherPullingText: {
        type: [String, Object],
        default: u.gc("refresherPullingText", null)
      },
      // 自定义下拉刷新刷新中状态下的文字
      refresherRefreshingText: {
        type: [String, Object],
        default: u.gc("refresherRefreshingText", null)
      },
      // 自定义下拉刷新刷新结束状态下的文字
      refresherCompleteText: {
        type: [String, Object],
        default: u.gc("refresherCompleteText", null)
      },
      // 自定义继续下拉进入二楼文字
      refresherGoF2Text: {
        type: [String, Object],
        default: u.gc("refresherGoF2Text", null)
      },
      // 自定义下拉刷新默认状态下的图片
      refresherDefaultImg: {
        type: String,
        default: u.gc("refresherDefaultImg", null)
      },
      // 自定义下拉刷新松手立即刷新状态下的图片，默认与refresherDefaultImg一致
      refresherPullingImg: {
        type: String,
        default: u.gc("refresherPullingImg", null)
      },
      // 自定义下拉刷新刷新中状态下的图片
      refresherRefreshingImg: {
        type: String,
        default: u.gc("refresherRefreshingImg", null)
      },
      // 自定义下拉刷新刷新结束状态下的图片
      refresherCompleteImg: {
        type: String,
        default: u.gc("refresherCompleteImg", null)
      },
      // 自定义下拉刷新刷新中状态下是否展示旋转动画
      refresherRefreshingAnimated: {
        type: Boolean,
        default: u.gc("refresherRefreshingAnimated", true)
      },
      // 是否开启自定义下拉刷新刷新结束回弹效果，默认为是
      refresherEndBounceEnabled: {
        type: Boolean,
        default: u.gc("refresherEndBounceEnabled", true)
      },
      // 是否开启自定义下拉刷新，默认为是
      refresherEnabled: {
        type: Boolean,
        default: u.gc("refresherEnabled", true)
      },
      // 设置自定义下拉刷新阈值，默认为80rpx
      refresherThreshold: {
        type: [Number, String],
        default: u.gc("refresherThreshold", "80rpx")
      },
      // 设置系统下拉刷新默认样式，支持设置 black，white，none，none 表示不使用默认样式，默认为black
      refresherDefaultStyle: {
        type: String,
        default: u.gc("refresherDefaultStyle", "black")
      },
      // 设置自定义下拉刷新区域背景
      refresherBackground: {
        type: String,
        default: u.gc("refresherBackground", "transparent")
      },
      // 设置固定的自定义下拉刷新区域背景
      refresherFixedBackground: {
        type: String,
        default: u.gc("refresherFixedBackground", "transparent")
      },
      // 设置固定的自定义下拉刷新区域高度，默认为0
      refresherFixedBacHeight: {
        type: [Number, String],
        default: u.gc("refresherFixedBacHeight", 0)
      },
      // 设置自定义下拉刷新下拉超出阈值后继续下拉位移衰减的比例，范围0-1，值越大代表衰减越多。默认为0.65(nvue无效)
      refresherOutRate: {
        type: Number,
        default: u.gc("refresherOutRate", 0.65)
      },
      // 是否开启下拉进入二楼功能，默认为否
      refresherF2Enabled: {
        type: Boolean,
        default: u.gc("refresherF2Enabled", false)
      },
      // 下拉进入二楼阈值，默认为200rpx
      refresherF2Threshold: {
        type: [Number, String],
        default: u.gc("refresherF2Threshold", "200rpx")
      },
      // 下拉进入二楼动画时间，单位为毫秒，默认为200毫秒
      refresherF2Duration: {
        type: [Number, String],
        default: u.gc("refresherF2Duration", 200)
      },
      // 下拉进入二楼状态松手后是否弹出二楼，默认为是
      showRefresherF2: {
        type: Boolean,
        default: u.gc("showRefresherF2", true)
      },
      // 设置自定义下拉刷新下拉时实际下拉位移与用户下拉距离的比值，默认为0.75，即代表若用户下拉10px，则实际位移为7.5px(nvue无效)
      refresherPullRate: {
        type: Number,
        default: u.gc("refresherPullRate", 0.75)
      },
      // 是否显示最后更新时间，默认为否
      showRefresherUpdateTime: {
        type: Boolean,
        default: u.gc("showRefresherUpdateTime", false)
      },
      // 如果需要区别不同页面的最后更新时间，请为不同页面的z-paging的`refresher-update-time-key`设置不同的字符串
      refresherUpdateTimeKey: {
        type: String,
        default: u.gc("refresherUpdateTimeKey", "default")
      },
      // 下拉刷新时下拉到“松手立即刷新”或“松手进入二楼”状态时是否使手机短振动，默认为否（h5无效）
      refresherVibrate: {
        type: Boolean,
        default: u.gc("refresherVibrate", false)
      },
      // 下拉刷新时是否禁止下拉刷新view跟随用户触摸竖直移动，默认为否。注意此属性只是禁止下拉刷新view移动，其他下拉刷新逻辑依然会正常触发
      refresherNoTransform: {
        type: Boolean,
        default: u.gc("refresherNoTransform", false)
      },
      // 是否开启下拉刷新状态栏占位，适用于隐藏导航栏时，下拉刷新需要避开状态栏高度的情况，默认为否
      useRefresherStatusBarPlaceholder: {
        type: Boolean,
        default: u.gc("useRefresherStatusBarPlaceholder", false)
      }
    },
    data() {
      return {
        R: Enum.Refresher,
        //下拉刷新状态
        refresherStatus: Enum.Refresher.Default,
        refresherTouchstartY: 0,
        lastRefresherTouchmove: null,
        refresherReachMaxAngle: true,
        refresherTransform: "translateY(0px)",
        refresherTransition: "",
        finalRefresherDefaultStyle: "black",
        refresherRevealStackCount: 0,
        refresherCompleteTimeout: null,
        refresherCompleteSubTimeout: null,
        refresherEndTimeout: null,
        isTouchmovingTimeout: null,
        refresherTriggered: false,
        isTouchmoving: false,
        isTouchEnded: false,
        isUserPullDown: false,
        privateRefresherEnabled: -1,
        privateShowRefresherWhenReload: false,
        customRefresherHeight: -1,
        showCustomRefresher: false,
        doRefreshAnimateAfter: false,
        isRefresherInComplete: false,
        showF2: false,
        f2Transform: "",
        pullDownTimeStamp: 0,
        moveDis: 0,
        oldMoveDis: 0,
        currentDis: 0,
        oldCurrentMoveDis: 0,
        oldRefresherTouchmoveY: 0,
        oldTouchDirection: "",
        oldEmitedTouchDirection: "",
        oldPullingDistance: -1,
        refresherThresholdUpdateTag: 0
      };
    },
    watch: {
      refresherDefaultStyle: {
        handler(newVal) {
          if (newVal.length) {
            this.finalRefresherDefaultStyle = newVal;
          }
        },
        immediate: true
      },
      refresherStatus(newVal) {
        newVal === Enum.Refresher.Loading && this._cleanRefresherEndTimeout();
        this.refresherVibrate && (newVal === Enum.Refresher.ReleaseToRefresh || newVal === Enum.Refresher.GoF2) && this._doVibrateShort();
        this.$emit("refresherStatusChange", newVal);
        this.$emit("update:refresherStatus", newVal);
      },
      // 监听当前下拉刷新启用/禁用状态
      refresherEnabled(newVal) {
        !newVal && this.endRefresh();
      }
    },
    computed: {
      pullDownDisTimeStamp() {
        return 1e3 / this.refresherFps;
      },
      refresherThresholdUnitConverted() {
        return u.addUnit(this.refresherThreshold, this.unit);
      },
      finalRefresherEnabled() {
        if (this.useChatRecordMode)
          return false;
        if (this.privateRefresherEnabled === -1)
          return this.refresherEnabled;
        return this.privateRefresherEnabled === 1;
      },
      finalRefresherThreshold() {
        let refresherThreshold = this.refresherThresholdUnitConverted;
        let idDefault = false;
        if (refresherThreshold === u.addUnit(80, this.unit)) {
          idDefault = true;
          if (this.showRefresherUpdateTime) {
            refresherThreshold = u.addUnit(120, this.unit);
          }
        }
        if (idDefault && this.customRefresherHeight > 0)
          return this.customRefresherHeight + this.finalRefresherThresholdPlaceholder;
        return u.convertToPx(refresherThreshold) + this.finalRefresherThresholdPlaceholder;
      },
      finalRefresherF2Threshold() {
        return u.convertToPx(u.addUnit(this.refresherF2Threshold, this.unit));
      },
      finalRefresherThresholdPlaceholder() {
        return this.useRefresherStatusBarPlaceholder ? this.statusBarHeight : 0;
      },
      finalRefresherFixedBacHeight() {
        return u.convertToPx(this.refresherFixedBacHeight);
      },
      finalRefresherThemeStyle() {
        return this.refresherThemeStyle.length ? this.refresherThemeStyle : this.defaultThemeStyle;
      },
      finalRefresherOutRate() {
        let rate = this.refresherOutRate;
        rate = Math.max(0, rate);
        rate = Math.min(1, rate);
        return rate;
      },
      finalRefresherPullRate() {
        let rate = this.refresherPullRate;
        rate = Math.max(0, rate);
        return rate;
      },
      finalRefresherTransform() {
        if (this.refresherNoTransform || this.refresherTransform === "translateY(0px)")
          return "none";
        return this.refresherTransform;
      },
      finalShowRefresherWhenReload() {
        return this.showRefresherWhenReload || this.privateShowRefresherWhenReload;
      },
      finalRefresherTriggered() {
        if (!(this.finalRefresherEnabled && !this.useCustomRefresher))
          return false;
        return this.refresherTriggered;
      },
      showRefresher() {
        const showRefresher = this.finalRefresherEnabled || this.useCustomRefresher && !this.useChatRecordMode;
        this.active && this.customRefresherHeight === -1 && showRefresher && this.updateCustomRefresherHeight();
        return showRefresher;
      },
      hasTouchmove() {
        return this.watchRefresherTouchmove;
      }
    },
    methods: {
      // 终止下拉刷新状态
      endRefresh() {
        this.totalData = this.realTotalData;
        this._refresherEnd();
        this._endSystemLoadingAndRefresh();
        this._handleScrollViewBounce({ bounce: true });
        this.$nextTick(() => {
          this.refresherTriggered = false;
        });
      },
      // 手动更新自定义下拉刷新view高度
      updateCustomRefresherHeight() {
        u.delay(() => this.$nextTick(this._updateCustomRefresherHeight));
      },
      // 关闭二楼
      closeF2() {
        this._handleCloseF2();
      },
      // 自定义下拉刷新被触发
      _onRefresh(fromScrollView = false, isUserPullDown = true) {
        if (fromScrollView && !(this.finalRefresherEnabled && !this.useCustomRefresher))
          return;
        this.$emit("onRefresh");
        this.$emit("Refresh");
        if (this.loading || this.isRefresherInComplete)
          return;
        this.loadingType = Enum.LoadingType.Refresher;
        if (this.nShowRefresherReveal)
          return;
        this.isUserPullDown = isUserPullDown;
        this.isUserReload = !isUserPullDown;
        this._startLoading(true);
        this.refresherTriggered = true;
        if (this.reloadWhenRefresh && isUserPullDown) {
          this.useChatRecordMode ? this._onLoadingMore("click") : this._reload(false, false, isUserPullDown);
        }
      },
      // 自定义下拉刷新被复位
      _onRestore() {
        this.refresherTriggered = "restore";
        this.$emit("onRestore");
        this.$emit("Restore");
      },
      // 进一步处理touch开始结果
      _handleRefresherTouchstart(touch) {
        if (!this.loading && this.isTouchEnded) {
          this.isTouchmoving = false;
        }
        this.loadingType = Enum.LoadingType.Refresher;
        this.isTouchmovingTimeout && clearTimeout(this.isTouchmovingTimeout);
        this.isTouchEnded = false;
        this.refresherTransition = "";
        this.refresherTouchstartY = touch.touchY;
        this.$emit("refresherTouchstart", this.refresherTouchstartY);
        this.lastRefresherTouchmove = touch;
        this._cleanRefresherCompleteTimeout();
        this._cleanRefresherEndTimeout();
      },
      // 非app-ios/android或微信小程序或QQ小程序或h5平台，使用js控制下拉刷新
      // touch中
      _refresherTouchmove(e) {
        const currentTimeStamp = u.getTime();
        let touch = null;
        let refresherTouchmoveY = 0;
        if (this.watchTouchDirectionChange) {
          touch = u.getTouch(e);
          refresherTouchmoveY = touch.touchY;
          const direction = refresherTouchmoveY > this.oldRefresherTouchmoveY ? "top" : "bottom";
          if (direction === this.oldTouchDirection && direction !== this.oldEmitedTouchDirection) {
            this._handleTouchDirectionChange({ direction });
            this.oldEmitedTouchDirection = direction;
          }
          this.oldTouchDirection = direction;
          this.oldRefresherTouchmoveY = refresherTouchmoveY;
        }
        if (this.pullDownTimeStamp && currentTimeStamp - this.pullDownTimeStamp <= this.pullDownDisTimeStamp)
          return;
        if (this._touchDisabled())
          return;
        this.pullDownTimeStamp = Number(currentTimeStamp);
        touch = u.getTouch(e);
        refresherTouchmoveY = touch.touchY;
        let moveDis = refresherTouchmoveY - this.refresherTouchstartY;
        if (moveDis < 0)
          return;
        if (this.refresherMaxAngle >= 0 && this.refresherMaxAngle <= 90 && this.lastRefresherTouchmove && this.lastRefresherTouchmove.touchY <= refresherTouchmoveY) {
          if (!moveDis && !this.refresherAngleEnableChangeContinued && this.moveDis < 1 && !this.refresherReachMaxAngle)
            return;
          const x = Math.abs(touch.touchX - this.lastRefresherTouchmove.touchX);
          const y = Math.abs(refresherTouchmoveY - this.lastRefresherTouchmove.touchY);
          const z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
          if ((x || y) && x > 1) {
            const angle = Math.asin(y / z) / Math.PI * 180;
            if (angle < this.refresherMaxAngle) {
              this.lastRefresherTouchmove = touch;
              this.refresherReachMaxAngle = false;
              return;
            }
          }
        }
        moveDis = this._getFinalRefresherMoveDis(moveDis);
        this._handleRefresherTouchmove(moveDis, touch);
        if (!this.disabledBounce) {
          this._handleScrollViewBounce({ bounce: false });
          this.disabledBounce = true;
        }
        this._emitTouchmove({ pullingDistance: moveDis, dy: this.moveDis - this.oldMoveDis });
      },
      // 进一步处理touch中结果
      _handleRefresherTouchmove(moveDis, touch) {
        this.refresherReachMaxAngle = true;
        this.isTouchmovingTimeout && clearTimeout(this.isTouchmovingTimeout);
        this.isTouchmoving = true;
        this.isTouchEnded = false;
        if (moveDis >= this.finalRefresherThreshold) {
          this.refresherStatus = this.refresherF2Enabled && moveDis >= this.finalRefresherF2Threshold ? Enum.Refresher.GoF2 : Enum.Refresher.ReleaseToRefresh;
        } else {
          this.refresherStatus = Enum.Refresher.Default;
        }
        this.moveDis = moveDis;
      },
      // 进一步处理touch结束结果
      _handleRefresherTouchend(moveDis) {
        this.isTouchmovingTimeout && clearTimeout(this.isTouchmovingTimeout);
        this.refresherReachMaxAngle = true;
        this.isTouchEnded = true;
        const refresherThreshold = this.finalRefresherThreshold;
        if (moveDis >= refresherThreshold && (this.refresherStatus === Enum.Refresher.ReleaseToRefresh || this.refresherStatus === Enum.Refresher.GoF2)) {
          if (this.refresherStatus === Enum.Refresher.GoF2) {
            this._handleGoF2();
            this._refresherEnd();
          } else {
            u.delay(() => {
              this._emitTouchmove({ pullingDistance: refresherThreshold, dy: this.moveDis - refresherThreshold });
            }, 0.1);
            this.moveDis = refresherThreshold;
            this.refresherStatus = Enum.Refresher.Loading;
            this._doRefresherLoad();
          }
        } else {
          this._refresherEnd();
          this.isTouchmovingTimeout = u.delay(() => {
            this.isTouchmoving = false;
          }, this.refresherDefaultDuration);
        }
        this.scrollEnable = true;
        this.$emit("refresherTouchend", moveDis);
      },
      // 处理列表触摸开始事件
      _handleListTouchstart() {
        if (this.useChatRecordMode && this.autoHideKeyboardWhenChat) {
          uni.hideKeyboard();
          this.$emit("hidedKeyboard");
        }
      },
      // 处理scroll-view bounce是否生效
      _handleScrollViewBounce({ bounce }) {
        if (!this.usePageScroll && !this.scrollToTopBounceEnabled) {
          if (this.wxsScrollTop <= 5) {
            this.refresherTransition = "";
            this.scrollEnable = bounce;
          } else if (bounce) {
            this.scrollEnable = bounce;
          }
        }
      },
      // wxs正在下拉状态改变处理
      _handleWxsPullingDownStatusChange(onPullingDown) {
        this.wxsOnPullingDown = onPullingDown;
        if (onPullingDown && !this.useChatRecordMode) {
          this.renderPropScrollTop = 0;
        }
      },
      // wxs正在下拉处理
      _handleWxsPullingDown({ moveDis, diffDis }) {
        this._emitTouchmove({ pullingDistance: moveDis, dy: diffDis });
      },
      // wxs触摸方向改变
      _handleTouchDirectionChange({ direction }) {
        this.$emit("touchDirectionChange", direction);
      },
      // wxs通知更新其props
      _handlePropUpdate() {
        this.wxsPropType = u.getTime().toString();
      },
      // 下拉刷新结束
      _refresherEnd(shouldEndLoadingDelay = true, fromAddData = false, isUserPullDown = false, setLoading = true) {
        if (this.loadingType === Enum.LoadingType.Refresher) {
          const refresherCompleteDelay = fromAddData && (isUserPullDown || this.showRefresherWhenReload) ? this.refresherCompleteDelay : 0;
          const refresherStatus = refresherCompleteDelay > 0 ? Enum.Refresher.Complete : Enum.Refresher.Default;
          if (this.finalShowRefresherWhenReload) {
            const stackCount = this.refresherRevealStackCount;
            this.refresherRevealStackCount--;
            if (stackCount > 1)
              return;
          }
          this._cleanRefresherEndTimeout();
          this.refresherEndTimeout = u.delay(() => {
            this.refresherStatus = refresherStatus;
            if (refresherStatus !== Enum.Refresher.Complete) {
              this.isRefresherInComplete = false;
            }
          }, this.refresherStatus !== Enum.Refresher.Default && refresherStatus === Enum.Refresher.Default ? this.refresherCompleteDuration : 0);
          if (refresherCompleteDelay > 0) {
            this.isRefresherInComplete = true;
          }
          this._cleanRefresherCompleteTimeout();
          this.refresherCompleteTimeout = u.delay(() => {
            let animateDuration = 1;
            const animateType = this.refresherEndBounceEnabled && fromAddData ? "cubic-bezier(0.19,1.64,0.42,0.72)" : "linear";
            if (fromAddData) {
              animateDuration = this.refresherEndBounceEnabled ? this.refresherCompleteDuration / 1e3 : this.refresherCompleteDuration / 3e3;
            }
            this.refresherTransition = `transform ${fromAddData ? animateDuration : this.refresherDefaultDuration / 1e3}s ${animateType}`;
            this.wxsPropType = this.refresherTransition + "end" + u.getTime();
            this.moveDis = 0;
            if (refresherStatus === Enum.Refresher.Complete) {
              if (this.refresherCompleteSubTimeout) {
                clearTimeout(this.refresherCompleteSubTimeout);
                this.refresherCompleteSubTimeout = null;
              }
              this.refresherCompleteSubTimeout = u.delay(() => {
                this.$nextTick(() => {
                  this.refresherStatus = Enum.Refresher.Default;
                  this.isRefresherInComplete = false;
                });
              }, animateDuration * 800);
            }
            this._emitTouchmove({ pullingDistance: 0, dy: this.moveDis });
          }, refresherCompleteDelay);
        }
        if (setLoading) {
          u.delay(() => this.loading = false, shouldEndLoadingDelay ? 10 : 0);
          isUserPullDown && this._onRestore();
        }
      },
      // 处理进入二楼
      _handleGoF2() {
        if (this.showF2 || !this.refresherF2Enabled)
          return;
        this.$emit("refresherF2Change", "go");
        if (!this.showRefresherF2)
          return;
        this.f2Transform = `translateY(${-this.superContentHeight}px)`;
        this.showF2 = true;
        u.delay(() => {
          this.f2Transform = "translateY(0px)";
        }, 100, "f2ShowDelay");
      },
      // 处理退出二楼
      _handleCloseF2() {
        if (!this.showF2 || !this.refresherF2Enabled)
          return;
        this.$emit("refresherF2Change", "close");
        if (!this.showRefresherF2)
          return;
        this.f2Transform = `translateY(${-this.superContentHeight}px)`;
        u.delay(() => {
          this.showF2 = false;
          this.nF2Opacity = 0;
        }, this.refresherF2Duration, "f2CloseDelay");
      },
      // 模拟用户手动触发下拉刷新
      _doRefresherRefreshAnimate() {
        this._cleanRefresherCompleteTimeout();
        const doRefreshAnimateAfter = !this.doRefreshAnimateAfter && this.finalShowRefresherWhenReload && this.customRefresherHeight === -1 && this.refresherThreshold === u.addUnit(80, this.unit);
        if (doRefreshAnimateAfter) {
          this.doRefreshAnimateAfter = true;
          return;
        }
        this.refresherRevealStackCount++;
        this.wxsPropType = "begin" + u.getTime();
        this.moveDis = this.finalRefresherThreshold;
        this.refresherStatus = Enum.Refresher.Loading;
        this.isTouchmoving = true;
        this.isTouchmovingTimeout && clearTimeout(this.isTouchmovingTimeout);
        this._doRefresherLoad(false);
      },
      // 触发下拉刷新
      _doRefresherLoad(isUserPullDown = true) {
        this._onRefresh(false, isUserPullDown);
        this.loading = true;
      },
      // 更新自定义下拉刷新view高度
      _updateCustomRefresherHeight() {
        this._getNodeClientRect(".zp-custom-refresher-slot-view").then((res) => {
          this.customRefresherHeight = res ? res[0].height : 0;
          this.showCustomRefresher = this.customRefresherHeight > 0;
          if (this.doRefreshAnimateAfter) {
            this.doRefreshAnimateAfter = false;
            this._doRefresherRefreshAnimate();
          }
        });
      },
      // emit pullingDown事件
      _emitTouchmove(e) {
        e.viewHeight = this.finalRefresherThreshold;
        e.rate = e.viewHeight > 0 ? e.pullingDistance / e.viewHeight : 0;
        this.hasTouchmove && this.oldPullingDistance !== e.pullingDistance && this.$emit("refresherTouchmove", e);
        this.oldPullingDistance = e.pullingDistance;
      },
      // 清除refresherCompleteTimeout
      _cleanRefresherCompleteTimeout() {
        this.refresherCompleteTimeout = this._cleanTimeout(this.refresherCompleteTimeout);
      },
      // 清除refresherEndTimeout
      _cleanRefresherEndTimeout() {
        this.refresherEndTimeout = this._cleanTimeout(this.refresherEndTimeout);
      }
    }
  };
  const loadMoreModule = {
    props: {
      // 自定义底部加载更多样式
      loadingMoreCustomStyle: {
        type: Object,
        default: u.gc("loadingMoreCustomStyle", {})
      },
      // 自定义底部加载更多文字样式
      loadingMoreTitleCustomStyle: {
        type: Object,
        default: u.gc("loadingMoreTitleCustomStyle", {})
      },
      // 自定义底部加载更多加载中动画样式
      loadingMoreLoadingIconCustomStyle: {
        type: Object,
        default: u.gc("loadingMoreLoadingIconCustomStyle", {})
      },
      // 自定义底部加载更多加载中动画图标类型，可选flower或circle，默认为flower
      loadingMoreLoadingIconType: {
        type: String,
        default: u.gc("loadingMoreLoadingIconType", "flower")
      },
      // 自定义底部加载更多加载中动画图标图片
      loadingMoreLoadingIconCustomImage: {
        type: String,
        default: u.gc("loadingMoreLoadingIconCustomImage", "")
      },
      // 底部加载更多加载中view是否展示旋转动画，默认为是
      loadingMoreLoadingAnimated: {
        type: Boolean,
        default: u.gc("loadingMoreLoadingAnimated", true)
      },
      // 是否启用加载更多数据(含滑动到底部加载更多数据和点击加载更多数据)，默认为是
      loadingMoreEnabled: {
        type: Boolean,
        default: u.gc("loadingMoreEnabled", true)
      },
      // 是否启用滑动到底部加载更多数据，默认为是
      toBottomLoadingMoreEnabled: {
        type: Boolean,
        default: u.gc("toBottomLoadingMoreEnabled", true)
      },
      // 滑动到底部状态为默认状态时，以加载中的状态展示，默认为否。若设置为是，可避免滚动到底部看到默认状态然后立刻变为加载中状态的问题，但分页数量未超过一屏时，不会显示【点击加载更多】
      loadingMoreDefaultAsLoading: {
        type: Boolean,
        default: u.gc("loadingMoreDefaultAsLoading", false)
      },
      // 滑动到底部"默认"文字，默认为【点击加载更多】
      loadingMoreDefaultText: {
        type: [String, Object],
        default: u.gc("loadingMoreDefaultText", null)
      },
      // 滑动到底部"加载中"文字，默认为【正在加载...】
      loadingMoreLoadingText: {
        type: [String, Object],
        default: u.gc("loadingMoreLoadingText", null)
      },
      // 滑动到底部"没有更多"文字，默认为【没有更多了】
      loadingMoreNoMoreText: {
        type: [String, Object],
        default: u.gc("loadingMoreNoMoreText", null)
      },
      // 滑动到底部"加载失败"文字，默认为【加载失败，点击重新加载】
      loadingMoreFailText: {
        type: [String, Object],
        default: u.gc("loadingMoreFailText", null)
      },
      // 当没有更多数据且分页内容未超出z-paging时是否隐藏没有更多数据的view，默认为否
      hideNoMoreInside: {
        type: Boolean,
        default: u.gc("hideNoMoreInside", false)
      },
      // 当没有更多数据且分页数组长度少于这个值时，隐藏没有更多数据的view，默认为0，代表不限制。
      hideNoMoreByLimit: {
        type: Number,
        default: u.gc("hideNoMoreByLimit", 0)
      },
      // 是否显示默认的加载更多text，默认为是
      showDefaultLoadingMoreText: {
        type: Boolean,
        default: u.gc("showDefaultLoadingMoreText", true)
      },
      // 是否显示没有更多数据的view
      showLoadingMoreNoMoreView: {
        type: Boolean,
        default: u.gc("showLoadingMoreNoMoreView", true)
      },
      // 是否显示没有更多数据的分割线，默认为是
      showLoadingMoreNoMoreLine: {
        type: Boolean,
        default: u.gc("showLoadingMoreNoMoreLine", true)
      },
      // 自定义底部没有更多数据的分割线样式
      loadingMoreNoMoreLineCustomStyle: {
        type: Object,
        default: u.gc("loadingMoreNoMoreLineCustomStyle", {})
      },
      // 当分页未满一屏时，是否自动加载更多，默认为否(nvue无效)
      insideMore: {
        type: Boolean,
        default: u.gc("insideMore", false)
      },
      // 距底部/右边多远时（单位px），触发 scrolltolower 事件，默认为100rpx
      lowerThreshold: {
        type: [Number, String],
        default: u.gc("lowerThreshold", "100rpx")
      }
    },
    data() {
      return {
        M: Enum.More,
        // 底部加载更多状态
        loadingStatus: Enum.More.Default,
        // 在渲染之后的底部加载更多状态
        loadingStatusAfterRender: Enum.More.Default,
        // 底部加载更多时间戳
        loadingMoreTimeStamp: 0,
        // 底部加载更多slot
        loadingMoreDefaultSlot: null,
        // 是否展示底部加载更多
        showLoadingMore: false,
        // 是否是开发者自定义的加载更多，-1代表交由z-paging自行判断；1代表没有更多了；0代表还有更多数据
        customNoMore: -1
      };
    },
    computed: {
      // 底部加载更多配置
      zLoadMoreConfig() {
        return {
          status: this.loadingStatusAfterRender,
          defaultAsLoading: this.loadingMoreDefaultAsLoading || this.useChatRecordMode && this.chatLoadingMoreDefaultAsLoading,
          defaultThemeStyle: this.finalLoadingMoreThemeStyle,
          customStyle: this.loadingMoreCustomStyle,
          titleCustomStyle: this.loadingMoreTitleCustomStyle,
          iconCustomStyle: this.loadingMoreLoadingIconCustomStyle,
          loadingIconType: this.loadingMoreLoadingIconType,
          loadingIconCustomImage: this.loadingMoreLoadingIconCustomImage,
          loadingAnimated: this.loadingMoreLoadingAnimated,
          showNoMoreLine: this.showLoadingMoreNoMoreLine,
          noMoreLineCustomStyle: this.loadingMoreNoMoreLineCustomStyle,
          defaultText: this.finalLoadingMoreDefaultText,
          loadingText: this.finalLoadingMoreLoadingText,
          noMoreText: this.finalLoadingMoreNoMoreText,
          failText: this.finalLoadingMoreFailText,
          hideContent: !this.loadingMoreDefaultAsLoading && this.listRendering,
          unit: this.unit,
          isChat: this.useChatRecordMode,
          chatDefaultAsLoading: this.chatLoadingMoreDefaultAsLoading
        };
      },
      // 最终的底部加载更多主题
      finalLoadingMoreThemeStyle() {
        return this.loadingMoreThemeStyle.length ? this.loadingMoreThemeStyle : this.defaultThemeStyle;
      },
      // 最终的底部加载更多触发阈值
      finalLowerThreshold() {
        return u.convertToPx(this.lowerThreshold);
      },
      // 是否显示默认状态下的底部加载更多
      showLoadingMoreDefault() {
        return this._showLoadingMore("Default");
      },
      // 是否显示加载中状态下的底部加载更多
      showLoadingMoreLoading() {
        return this._showLoadingMore("Loading");
      },
      // 是否显示没有更多了状态下的底部加载更多
      showLoadingMoreNoMore() {
        return this._showLoadingMore("NoMore");
      },
      // 是否显示加载失败状态下的底部加载更多
      showLoadingMoreFail() {
        return this._showLoadingMore("Fail");
      },
      // 是否显示自定义状态下的底部加载更多
      showLoadingMoreCustom() {
        return this._showLoadingMore("Custom");
      },
      // 底部加载更多固定高度
      loadingMoreFixedHeight() {
        return u.addUnit("80rpx", this.unit);
      }
    },
    methods: {
      // 页面滚动到底部时通知z-paging进行进一步处理
      pageReachBottom() {
        !this.useChatRecordMode && this.toBottomLoadingMoreEnabled && this._onLoadingMore("toBottom");
      },
      // 手动触发上拉加载更多(非必须，可依据具体需求使用)
      doLoadMore(type) {
        this._onLoadingMore(type);
      },
      // 通过@scroll事件检测是否滚动到了底部(顺带检测下是否滚动到了顶部)
      _checkScrolledToBottom(scrollDiff, checked = false) {
        if (this.cacheScrollNodeHeight === -1) {
          this._getNodeClientRect(".zp-scroll-view").then((res) => {
            if (res) {
              const scrollNodeHeight = res[0].height;
              this.cacheScrollNodeHeight = scrollNodeHeight;
              if (scrollDiff - scrollNodeHeight <= this.finalLowerThreshold) {
                this._onLoadingMore("toBottom");
              }
            }
          });
        } else {
          if (scrollDiff - this.cacheScrollNodeHeight <= this.finalLowerThreshold) {
            this._onLoadingMore("toBottom");
          } else if (scrollDiff - this.cacheScrollNodeHeight <= 500 && !checked) {
            u.delay(() => {
              this._getNodeClientRect(".zp-scroll-view", true, true).then((res) => {
                if (res) {
                  this.oldScrollTop = res[0].scrollTop;
                  const newScrollDiff = res[0].scrollHeight - this.oldScrollTop;
                  this._checkScrolledToBottom(newScrollDiff, true);
                }
              });
            }, 150, "checkScrolledToBottomDelay");
          }
          if (this.oldScrollTop <= 150 && this.oldScrollTop !== 0) {
            u.delay(() => {
              if (this.oldScrollTop !== 0) {
                this._getNodeClientRect(".zp-scroll-view", true, true).then((res) => {
                  if (res && res[0].scrollTop === 0 && this.oldScrollTop !== 0) {
                    this._onScrollToUpper();
                  }
                });
              }
            }, 150, "checkScrolledToTopDelay");
          }
        }
      },
      // 触发加载更多时调用,from:toBottom-滑动到底部触发；1、click-点击加载更多触发
      _onLoadingMore(from = "click") {
        if (this.isIos && from === "toBottom" && !this.scrollToBottomBounceEnabled && this.scrollEnable) {
          this.scrollEnable = false;
          this.$nextTick(() => {
            this.scrollEnable = true;
          });
        }
        this.$emit("scrolltolower", from);
        if (this.refresherOnly || !this.loadingMoreEnabled || !(this.loadingStatus === Enum.More.Default || this.loadingStatus === Enum.More.Fail) || this.loading || this.showEmpty)
          return;
        this._doLoadingMore();
      },
      // 处理开始加载更多
      _doLoadingMore() {
        if (this.pageNo >= this.defaultPageNo && this.loadingStatus !== Enum.More.NoMore) {
          this.pageNo++;
          this._startLoading(false);
          if (this.isLocalPaging) {
            this._localPagingQueryList(this.pageNo, this.defaultPageSize, this.localPagingLoadingTime, (res) => {
              this.completeByTotal(res, this.totalLocalPagingList.length);
              this.queryFrom = Enum.QueryFrom.LoadMore;
            });
          } else {
            this._emitQuery(this.pageNo, this.defaultPageSize, Enum.QueryFrom.LoadMore);
            this._callMyParentQuery();
          }
          this.loadingType = Enum.LoadingType.LoadMore;
        }
      },
      // (预处理)判断当没有更多数据且分页内容未超出z-paging时是否显示没有更多数据的view
      _preCheckShowNoMoreInside(newVal, scrollViewNode, pagingContainerNode) {
        if (this.loadingStatus === Enum.More.NoMore && this.hideNoMoreByLimit > 0 && newVal.length) {
          this.showLoadingMore = newVal.length > this.hideNoMoreByLimit;
        } else if (this.loadingStatus === Enum.More.NoMore && this.hideNoMoreInside && newVal.length || this.insideMore && this.insideOfPaging !== false && newVal.length) {
          this.$nextTick(() => {
            this._checkShowNoMoreInside(newVal, scrollViewNode, pagingContainerNode);
          });
          if (this.insideMore && this.insideOfPaging !== false && newVal.length) {
            this.showLoadingMore = newVal.length;
          }
        } else {
          this.showLoadingMore = newVal.length;
        }
      },
      // 判断当没有更多数据且分页内容未超出z-paging时是否显示没有更多数据的view
      async _checkShowNoMoreInside(totalData, oldScrollViewNode, oldPagingContainerNode) {
        try {
          const scrollViewNode = oldScrollViewNode || await this._getNodeClientRect(".zp-scroll-view");
          if (this.usePageScroll) {
            if (scrollViewNode) {
              const scrollViewTotalH = scrollViewNode[0].top + scrollViewNode[0].height;
              this.insideOfPaging = scrollViewTotalH < this.windowHeight;
              if (this.hideNoMoreInside) {
                this.showLoadingMore = !this.insideOfPaging;
              }
              this._updateInsideOfPaging();
            }
          } else {
            const pagingContainerNode = oldPagingContainerNode || await this._getNodeClientRect(".zp-paging-container-content");
            const pagingContainerH = pagingContainerNode ? pagingContainerNode[0].height : 0;
            const scrollViewH = scrollViewNode ? scrollViewNode[0].height : 0;
            this.insideOfPaging = pagingContainerH < scrollViewH;
            if (this.hideNoMoreInside) {
              this.showLoadingMore = !this.insideOfPaging;
            }
            this._updateInsideOfPaging();
          }
        } catch (e) {
          this.insideOfPaging = !totalData.length;
          if (this.hideNoMoreInside) {
            this.showLoadingMore = !this.insideOfPaging;
          }
          this._updateInsideOfPaging();
        }
      },
      // 是否要展示上拉加载更多view
      _showLoadingMore(type) {
        if (!this.showLoadingMoreWhenReload && (!(this.loadingStatus === Enum.More.Default ? this.nShowBottom : true) || !this.realTotalData.length))
          return false;
        if ((!this.showLoadingMoreWhenReload || this.isUserPullDown || this.loadingStatus !== Enum.More.Loading) && !this.showLoadingMore || !this.loadingMoreEnabled && (!this.showLoadingMoreWhenReload || this.isUserPullDown || this.loadingStatus !== Enum.More.Loading) || this.refresherOnly) {
          return false;
        }
        if (this.useChatRecordMode && type !== "Loading")
          return false;
        if (!this.zSlots)
          return false;
        if (type === "Custom") {
          return this.showDefaultLoadingMoreText && !(this.loadingStatus === Enum.More.NoMore && !this.showLoadingMoreNoMoreView);
        }
        const res = this.loadingStatus === Enum.More[type] && this.zSlots[`loadingMore${type}`] && (type === "NoMore" ? this.showLoadingMoreNoMoreView : true);
        return res;
      }
    }
  };
  const loadingModule = {
    props: {
      // 第一次加载后自动隐藏loading slot，默认为是
      autoHideLoadingAfterFirstLoaded: {
        type: Boolean,
        default: u.gc("autoHideLoadingAfterFirstLoaded", true)
      },
      // loading slot是否铺满屏幕并固定，默认为否
      loadingFullFixed: {
        type: Boolean,
        default: u.gc("loadingFullFixed", false)
      },
      // 是否自动显示系统Loading：即uni.showLoading，若开启则将在刷新列表时(调用reload、refresh时)显示，下拉刷新和滚动到底部加载更多不会显示，默认为false。
      autoShowSystemLoading: {
        type: Boolean,
        default: u.gc("autoShowSystemLoading", false)
      },
      // 显示系统Loading时是否显示透明蒙层，防止触摸穿透，默认为是(H5、App、微信小程序、百度小程序有效)
      systemLoadingMask: {
        type: Boolean,
        default: u.gc("systemLoadingMask", true)
      },
      // 显示系统Loading时显示的文字，默认为"加载中"
      systemLoadingText: {
        type: [String, Object],
        default: u.gc("systemLoadingText", null)
      }
    },
    data() {
      return {
        loading: false,
        loadingForNow: false
      };
    },
    watch: {
      // loading状态
      loadingStatus(newVal) {
        this.$emit("loadingStatusChange", newVal);
        this.$nextTick(() => {
          this.loadingStatusAfterRender = newVal;
        });
        if (this.useChatRecordMode) {
          if (this.isFirstPage && (newVal === Enum.More.NoMore || newVal === Enum.More.Fail)) {
            this.isFirstPageAndNoMore = true;
            return;
          }
        }
        this.isFirstPageAndNoMore = false;
      },
      loading(newVal) {
        if (newVal) {
          this.loadingForNow = newVal;
        }
      }
    },
    computed: {
      // 是否显示loading
      showLoading() {
        if (this.firstPageLoaded || !this.loading || !this.loadingForNow)
          return false;
        if (this.finalShowSystemLoading) {
          uni.showLoading({
            title: this.finalSystemLoadingText,
            mask: this.systemLoadingMask
          });
        }
        return this.autoHideLoadingAfterFirstLoaded ? this.fromEmptyViewReload ? true : !this.pagingLoaded : this.loadingType === Enum.LoadingType.Refresher;
      },
      // 最终的是否显示系统loading
      finalShowSystemLoading() {
        return this.autoShowSystemLoading && this.loadingType === Enum.LoadingType.Refresher;
      }
    },
    methods: {
      // 处理开始加载更多状态
      _startLoading(isReload = false) {
        if (this.showLoadingMoreWhenReload && !this.isUserPullDown || !isReload) {
          this.loadingStatus = Enum.More.Loading;
        }
        this.loading = true;
      },
      // 停止系统loading和refresh
      _endSystemLoadingAndRefresh() {
        this.finalShowSystemLoading && uni.hideLoading();
        !this.useCustomRefresher && uni.stopPullDownRefresh();
      }
    }
  };
  const chatRecordModerModule = {
    props: {
      // 使用聊天记录模式，默认为否
      useChatRecordMode: {
        type: Boolean,
        default: u.gc("useChatRecordMode", false)
      },
      // 使用聊天记录模式时滚动到顶部后，列表垂直移动偏移距离。默认0rpx。单位px（暂时无效）
      chatRecordMoreOffset: {
        type: [Number, String],
        default: u.gc("chatRecordMoreOffset", "0rpx")
      },
      // 使用聊天记录模式时是否自动隐藏键盘：在用户触摸列表时候自动隐藏键盘，默认为是
      autoHideKeyboardWhenChat: {
        type: Boolean,
        default: u.gc("autoHideKeyboardWhenChat", true)
      },
      // 使用聊天记录模式中键盘弹出时是否自动调整slot="bottom"高度，默认为是
      autoAdjustPositionWhenChat: {
        type: Boolean,
        default: u.gc("autoAdjustPositionWhenChat", true)
      },
      // 使用聊天记录模式中键盘弹出时占位高度偏移距离。默认0rpx。单位px
      chatAdjustPositionOffset: {
        type: [Number, String],
        default: u.gc("chatAdjustPositionOffset", "0rpx")
      },
      // 使用聊天记录模式中键盘弹出时是否自动滚动到底部，默认为否
      autoToBottomWhenChat: {
        type: Boolean,
        default: u.gc("autoToBottomWhenChat", false)
      },
      // 使用聊天记录模式中reload时是否显示chatLoading，默认为否
      showChatLoadingWhenReload: {
        type: Boolean,
        default: u.gc("showChatLoadingWhenReload", false)
      },
      // 在聊天记录模式中滑动到顶部状态为默认状态时，以加载中的状态展示，默认为是。若设置为否，则默认会显示【点击加载更多】，然后才会显示loading
      chatLoadingMoreDefaultAsLoading: {
        type: Boolean,
        default: u.gc("chatLoadingMoreDefaultAsLoading", true)
      }
    },
    data() {
      return {
        // 键盘高度
        keyboardHeight: 0,
        // 键盘高度是否未改变，此时占位高度变化不需要动画效果
        isKeyboardHeightChanged: false
      };
    },
    computed: {
      finalChatRecordMoreOffset() {
        return u.convertToPx(this.chatRecordMoreOffset);
      },
      finalChatAdjustPositionOffset() {
        return u.convertToPx(this.chatAdjustPositionOffset);
      },
      // 聊天记录模式旋转180度style
      chatRecordRotateStyle() {
        let cellStyle;
        cellStyle = this.useChatRecordMode ? { transform: "scaleY(-1)" } : {};
        this.$emit("update:cellStyle", cellStyle);
        this.$emit("cellStyleChange", cellStyle);
        this.$nextTick(() => {
          if (this.isFirstPage && this.isChatRecordModeAndNotInversion) {
            this.$nextTick(() => {
              this._scrollToBottom(false);
              u.delay(() => {
                this._scrollToBottom(false);
                u.delay(() => {
                  this._scrollToBottom(false);
                }, 50);
              }, 50);
            });
          }
        });
        return cellStyle;
      },
      // 是否是聊天记录列表并且有配置transform
      isChatRecordModeHasTransform() {
        return this.useChatRecordMode && this.chatRecordRotateStyle && this.chatRecordRotateStyle.transform;
      },
      // 是否是聊天记录列表并且列表未倒置
      isChatRecordModeAndNotInversion() {
        return this.isChatRecordModeHasTransform && this.chatRecordRotateStyle.transform === "scaleY(1)";
      },
      // 是否是聊天记录列表并且列表倒置
      isChatRecordModeAndInversion() {
        return this.isChatRecordModeHasTransform && this.chatRecordRotateStyle.transform === "scaleY(-1)";
      },
      // 最终的聊天记录模式中底部安全区域的高度，如果开启了底部安全区域并且键盘未弹出，则添加底部区域高度
      chatRecordModeSafeAreaBottom() {
        return this.safeAreaInsetBottom && !this.keyboardHeight ? this.safeAreaBottom : 0;
      }
    },
    mounted() {
      if (this.useChatRecordMode) {
        uni.onKeyboardHeightChange(this._handleKeyboardHeightChange);
      }
    },
    methods: {
      // 添加聊天记录
      addChatRecordData(data, toBottom = true, toBottomWithAnimate = true) {
        if (!this.useChatRecordMode)
          return;
        this.isTotalChangeFromAddData = true;
        this.addDataFromTop(data, toBottom, toBottomWithAnimate);
      },
      // 手动触发滚动到顶部加载更多，聊天记录模式时有效
      doChatRecordLoadMore() {
        this.useChatRecordMode && this._onLoadingMore("click");
      },
      // 处理键盘高度变化
      _handleKeyboardHeightChange(res) {
        this.$emit("keyboardHeightChange", res);
        if (this.autoAdjustPositionWhenChat) {
          this.isKeyboardHeightChanged = true;
          this.keyboardHeight = res.height > 0 ? res.height + this.finalChatAdjustPositionOffset : res.height;
        }
        if (this.autoToBottomWhenChat && this.keyboardHeight > 0) {
          u.delay(() => {
            this.scrollToBottom(false);
            u.delay(() => {
              this.scrollToBottom(false);
            });
          });
        }
      }
    }
  };
  const scrollerModule = {
    props: {
      // 使用页面滚动，默认为否，当设置为是时则使用页面的滚动而非此组件内部的scroll-view的滚动，使用页面滚动时z-paging无需设置确定的高度且对于长列表展示性能更高，但配置会略微繁琐
      usePageScroll: {
        type: Boolean,
        default: u.gc("usePageScroll", false)
      },
      // 是否可以滚动，使用内置scroll-view和nvue时有效，默认为是
      scrollable: {
        type: Boolean,
        default: u.gc("scrollable", true)
      },
      // 控制是否出现滚动条，默认为是
      showScrollbar: {
        type: Boolean,
        default: u.gc("showScrollbar", true)
      },
      // 是否允许横向滚动，默认为否
      scrollX: {
        type: Boolean,
        default: u.gc("scrollX", false)
      },
      // iOS设备上滚动到顶部时是否允许回弹效果，默认为否。关闭回弹效果后可使滚动到顶部与下拉刷新更连贯，但是有吸顶view时滚动到顶部时可能出现抖动。
      scrollToTopBounceEnabled: {
        type: Boolean,
        default: u.gc("scrollToTopBounceEnabled", false)
      },
      // iOS设备上滚动到底部时是否允许回弹效果，默认为是。
      scrollToBottomBounceEnabled: {
        type: Boolean,
        default: u.gc("scrollToBottomBounceEnabled", true)
      },
      // 在设置滚动条位置时使用动画过渡，默认为否
      scrollWithAnimation: {
        type: Boolean,
        default: u.gc("scrollWithAnimation", false)
      },
      // 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素
      scrollIntoView: {
        type: String,
        default: u.gc("scrollIntoView", "")
      }
    },
    data() {
      return {
        scrollTop: 0,
        oldScrollTop: 0,
        scrollViewStyle: {},
        scrollViewContainerStyle: {},
        scrollViewInStyle: {},
        pageScrollTop: -1,
        scrollEnable: true,
        privateScrollWithAnimation: -1,
        cacheScrollNodeHeight: -1,
        superContentHeight: 0
      };
    },
    watch: {
      oldScrollTop(newVal) {
        !this.usePageScroll && this._scrollTopChange(newVal, false);
      },
      pageScrollTop(newVal) {
        this.usePageScroll && this._scrollTopChange(newVal, true);
      },
      usePageScroll: {
        handler(newVal) {
          this.loaded && this.autoHeight && this._setAutoHeight(!newVal);
        },
        immediate: true
      },
      finalScrollTop(newVal) {
        this.renderPropScrollTop = newVal < 6 ? 0 : 10;
      }
    },
    computed: {
      finalScrollWithAnimation() {
        if (this.privateScrollWithAnimation !== -1) {
          return this.privateScrollWithAnimation === 1;
        }
        return this.scrollWithAnimation;
      },
      finalScrollViewStyle() {
        if (this.superContentZIndex != 1) {
          this.scrollViewStyle["z-index"] = this.superContentZIndex;
          this.scrollViewStyle["position"] = "relative";
        }
        return this.scrollViewStyle;
      },
      finalScrollTop() {
        return this.usePageScroll ? this.pageScrollTop : this.oldScrollTop;
      },
      // 当前是否是旧版webview
      finalIsOldWebView() {
        return this.isOldWebView && !this.usePageScroll;
      },
      // 当前scroll-view/list-view是否允许滚动
      finalScrollable() {
        return this.scrollable && !this.usePageScroll && this.scrollEnable && (this.refresherCompleteScrollable ? true : this.refresherStatus !== Enum.Refresher.Complete) && (this.refresherRefreshingScrollable ? true : this.refresherStatus !== Enum.Refresher.Loading);
      }
    },
    methods: {
      // 滚动到顶部，animate为是否展示滚动动画，默认为是
      scrollToTop(animate, checkReverse = true) {
        if (this.useChatRecordMode && checkReverse && !this.isChatRecordModeAndNotInversion) {
          this.scrollToBottom(animate, false);
          return;
        }
        this.$nextTick(() => {
          this._scrollToTop(animate, false);
        });
      },
      // 滚动到底部，animate为是否展示滚动动画，默认为是
      scrollToBottom(animate, checkReverse = true) {
        if (this.useChatRecordMode && checkReverse && !this.isChatRecordModeAndNotInversion) {
          this.scrollToTop(animate, false);
          return;
        }
        this.$nextTick(() => {
          this._scrollToBottom(animate);
        });
      },
      // 滚动到指定view(vue中有效)。sel为需要滚动的view的id值，不包含"#"；offset为偏移量，单位为px；animate为是否展示滚动动画，默认为否
      scrollIntoViewById(sel, offset, animate) {
        this._scrollIntoView(sel, offset, animate);
      },
      // 滚动到指定view(vue中有效)。nodeTop为需要滚动的view的top值(通过uni.createSelectorQuery()获取)；offset为偏移量，单位为px；animate为是否展示滚动动画，默认为否
      scrollIntoViewByNodeTop(nodeTop, offset, animate) {
        this.scrollTop = this.oldScrollTop;
        this.$nextTick(() => {
          this._scrollIntoViewByNodeTop(nodeTop, offset, animate);
        });
      },
      // 滚动到指定位置(vue中有效)。y为与顶部的距离，单位为px；offset为偏移量，单位为px；animate为是否展示滚动动画，默认为否
      scrollToY(y, offset, animate) {
        this.scrollTop = this.oldScrollTop;
        this.$nextTick(() => {
          this._scrollToY(y, offset, animate);
        });
      },
      // 滚动到指定view(nvue中和虚拟列表中有效)。index为需要滚动的view的index(第几个，从0开始)；offset为偏移量，单位为px；animate为是否展示滚动动画，默认为否
      scrollIntoViewByIndex(index2, offset, animate) {
        if (index2 >= this.realTotalData.length) {
          u.consoleErr("当前滚动的index超出已渲染列表长度，请先通过refreshToPage加载到对应index页并等待渲染成功后再调用此方法！");
          return;
        }
        this.$nextTick(() => {
          if (this.finalUseVirtualList) {
            const isCellFixed = this.cellHeightMode === Enum.CellHeightMode.Fixed;
            u.delay(() => {
              if (this.finalUseVirtualList) {
                const scrollTop = isCellFixed ? this.virtualCellHeight * index2 : this.virtualHeightCacheList[index2].lastTotalHeight;
                this.scrollToY(scrollTop, offset, animate);
              }
            }, isCellFixed ? 0 : 100);
          }
        });
      },
      // 滚动到指定view(nvue中有效)。view为需要滚动的view(通过`this.$refs.xxx`获取)，不包含"#"；offset为偏移量，单位为px；animate为是否展示滚动动画，默认为否
      scrollIntoViewByView(view, offset, animate) {
        this._scrollIntoView(view, offset, animate);
      },
      // 当使用页面滚动并且自定义下拉刷新时，请在页面的onPageScroll中调用此方法，告知z-paging当前的pageScrollTop，否则会导致在任意位置都可以下拉刷新
      updatePageScrollTop(value) {
        this.pageScrollTop = value;
      },
      // 当使用页面滚动并且设置了slot="top"时，默认初次加载会自动获取其高度，并使内部容器下移，当slot="top"的view高度动态改变时，在其高度需要更新时调用此方法
      updatePageScrollTopHeight() {
        this._updatePageScrollTopOrBottomHeight("top");
      },
      // 当使用页面滚动并且设置了slot="bottom"时，默认初次加载会自动获取其高度，并使内部容器下移，当slot="bottom"的view高度动态改变时，在其高度需要更新时调用此方法
      updatePageScrollBottomHeight() {
        this._updatePageScrollTopOrBottomHeight("bottom");
      },
      // 更新slot="left"和slot="right"宽度，当slot="left"或slot="right"宽度动态改变时调用
      updateLeftAndRightWidth() {
        if (!this.finalIsOldWebView)
          return;
        this.$nextTick(() => this._updateLeftAndRightWidth(this.scrollViewContainerStyle, "zp-page"));
      },
      // 更新z-paging内置scroll-view的scrollTop
      updateScrollViewScrollTop(scrollTop, animate = true) {
        this._updatePrivateScrollWithAnimation(animate);
        this.scrollTop = this.oldScrollTop;
        this.$nextTick(() => {
          this.scrollTop = scrollTop;
          this.oldScrollTop = this.scrollTop;
        });
      },
      // 当滚动到顶部时
      _onScrollToUpper() {
        this.$emit("scrolltoupper");
        this.$emit("scrollTopChange", 0);
        this.$nextTick(() => {
          this.oldScrollTop = 0;
        });
      },
      // 当滚动到底部时
      _onScrollToLower(e) {
        (!e.detail || !e.detail.direction || e.detail.direction === "bottom") && this.toBottomLoadingMoreEnabled && this._onLoadingMore(this.useChatRecordMode ? "click" : "toBottom");
      },
      // 滚动到顶部
      _scrollToTop(animate = true, isPrivate = true) {
        if (this.usePageScroll) {
          this.$nextTick(() => {
            uni.pageScrollTo({
              scrollTop: 0,
              duration: animate ? 100 : 0
            });
          });
          return;
        }
        this._updatePrivateScrollWithAnimation(animate);
        this.scrollTop = this.oldScrollTop;
        this.$nextTick(() => {
          this.scrollTop = 0;
          this.oldScrollTop = this.scrollTop;
        });
      },
      // 滚动到底部
      async _scrollToBottom(animate = true) {
        if (this.usePageScroll) {
          this.$nextTick(() => {
            uni.pageScrollTo({
              scrollTop: Number.MAX_VALUE,
              duration: animate ? 100 : 0
            });
          });
          return;
        }
        try {
          this._updatePrivateScrollWithAnimation(animate);
          const pagingContainerNode = await this._getNodeClientRect(".zp-paging-container");
          const scrollViewNode = await this._getNodeClientRect(".zp-scroll-view");
          const pagingContainerH = pagingContainerNode ? pagingContainerNode[0].height : 0;
          const scrollViewH = scrollViewNode ? scrollViewNode[0].height : 0;
          if (pagingContainerH > scrollViewH) {
            this.scrollTop = this.oldScrollTop;
            this.$nextTick(() => {
              this.scrollTop = pagingContainerH - scrollViewH + this.virtualPlaceholderTopHeight;
              this.oldScrollTop = this.scrollTop;
            });
          }
        } catch (e) {
        }
      },
      // 滚动到指定view
      _scrollIntoView(sel, offset = 0, animate = false, finishCallback) {
        try {
          this.scrollTop = this.oldScrollTop;
          this.$nextTick(() => {
            this._getNodeClientRect("#" + sel.replace("#", ""), this.$parent).then((node) => {
              if (node) {
                let nodeTop = node[0].top;
                this._scrollIntoViewByNodeTop(nodeTop, offset, animate);
                finishCallback && finishCallback();
              }
            });
          });
        } catch (e) {
        }
      },
      // 通过nodeTop滚动到指定view
      _scrollIntoViewByNodeTop(nodeTop, offset = 0, animate = false) {
        if (this.isChatRecordModeAndInversion) {
          this._getNodeClientRect(".zp-scroll-view").then((sNode) => {
            if (sNode) {
              this._scrollToY(sNode[0].height - nodeTop, offset, animate, true);
            }
          });
        } else {
          this._scrollToY(nodeTop, offset, animate, true);
        }
      },
      // 滚动到指定位置
      _scrollToY(y, offset = 0, animate = false, addScrollTop = false) {
        this._updatePrivateScrollWithAnimation(animate);
        u.delay(() => {
          if (this.usePageScroll) {
            if (addScrollTop && this.pageScrollTop !== -1) {
              y += this.pageScrollTop;
            }
            const scrollTop = y - offset;
            uni.pageScrollTo({
              scrollTop,
              duration: animate ? 100 : 0
            });
          } else {
            if (addScrollTop) {
              y += this.oldScrollTop;
            }
            this.scrollTop = y - offset;
          }
        }, 10);
      },
      // scroll-view滚动中
      _scroll(e) {
        this.$emit("scroll", e);
        const scrollTop = e.detail.scrollTop;
        this.finalUseVirtualList && this._updateVirtualScroll(scrollTop, this.oldScrollTop - scrollTop);
        this.oldScrollTop = scrollTop;
        const scrollDiff = e.detail.scrollHeight - this.oldScrollTop;
        !this.isIos && this._checkScrolledToBottom(scrollDiff);
      },
      // 更新内置的scroll-view是否启用滚动动画
      _updatePrivateScrollWithAnimation(animate) {
        this.privateScrollWithAnimation = animate ? 1 : 0;
        u.delay(() => this.$nextTick(() => {
          this.privateScrollWithAnimation = -1;
        }), 100, "updateScrollWithAnimationDelay");
      },
      // 检测scrollView是否要铺满屏幕
      _doCheckScrollViewShouldFullHeight(totalData) {
        if (this.autoFullHeight && this.usePageScroll && this.isTotalChangeFromAddData) {
          this.$nextTick(() => {
            this._checkScrollViewShouldFullHeight((scrollViewNode, pagingContainerNode) => {
              this._preCheckShowNoMoreInside(totalData, scrollViewNode, pagingContainerNode);
            });
          });
        } else {
          this._preCheckShowNoMoreInside(totalData);
        }
      },
      // 检测z-paging是否要全屏覆盖(当使用页面滚动并且不满全屏时，默认z-paging需要铺满全屏，避免数据过少时内部的empty-view无法正确展示)
      async _checkScrollViewShouldFullHeight(callback) {
        try {
          const scrollViewNode = await this._getNodeClientRect(".zp-scroll-view");
          const pagingContainerNode = await this._getNodeClientRect(".zp-paging-container-content");
          if (!scrollViewNode || !pagingContainerNode)
            return;
          const scrollViewHeight = pagingContainerNode[0].height;
          const scrollViewTop = scrollViewNode[0].top;
          if (this.isAddedData && scrollViewHeight + scrollViewTop <= this.windowHeight) {
            this._setAutoHeight(true, scrollViewNode);
            callback(scrollViewNode, pagingContainerNode);
          } else {
            this._setAutoHeight(false);
            callback(null, null);
          }
        } catch (e) {
          callback(null, null);
        }
      },
      // 更新缓存中z-paging整个内容容器高度
      async _updateCachedSuperContentHeight() {
        const superContentNode = await this._getNodeClientRect(".z-paging-content");
        if (superContentNode) {
          this.superContentHeight = superContentNode[0].height;
        }
      },
      // scrollTop改变时触发
      _scrollTopChange(newVal, isPageScrollTop) {
        this.$emit("scrollTopChange", newVal);
        this.$emit("update:scrollTop", newVal);
        this._checkShouldShowBackToTop(newVal);
        const scrollTop = newVal > 5 ? 6 : 0;
        if (isPageScrollTop && this.wxsPageScrollTop !== scrollTop) {
          this.wxsPageScrollTop = scrollTop;
        } else if (!isPageScrollTop && this.wxsScrollTop !== scrollTop) {
          this.wxsScrollTop = scrollTop;
          if (scrollTop > 6) {
            this.scrollEnable = true;
          }
        }
      },
      // 更新使用页面滚动时slot="top"或"bottom"插入view的高度
      _updatePageScrollTopOrBottomHeight(type) {
        if (!this.usePageScroll)
          return;
        this._doCheckScrollViewShouldFullHeight(this.realTotalData);
        const node = `.zp-page-${type}`;
        const marginText = `margin${type.slice(0, 1).toUpperCase() + type.slice(1)}`;
        let safeAreaInsetBottomAdd = this.safeAreaInsetBottom;
        this.$nextTick(() => {
          let delayTime = 0;
          u.delay(() => {
            this._getNodeClientRect(node).then((res) => {
              if (res) {
                let pageScrollNodeHeight = res[0].height;
                if (type === "bottom") {
                  if (safeAreaInsetBottomAdd) {
                    pageScrollNodeHeight += this.safeAreaBottom;
                  }
                } else {
                  this.cacheTopHeight = pageScrollNodeHeight;
                }
                this.$set(this.scrollViewStyle, marginText, `${pageScrollNodeHeight}px`);
              } else if (safeAreaInsetBottomAdd) {
                this.$set(this.scrollViewStyle, marginText, `${this.safeAreaBottom}px`);
              }
            });
          }, delayTime);
        });
      }
    }
  };
  const backToTopModule = {
    props: {
      // 自动显示点击返回顶部按钮，默认为否
      autoShowBackToTop: {
        type: Boolean,
        default: u.gc("autoShowBackToTop", false)
      },
      // 点击返回顶部按钮显示/隐藏的阈值(滚动距离)，单位为px，默认为400rpx
      backToTopThreshold: {
        type: [Number, String],
        default: u.gc("backToTopThreshold", "400rpx")
      },
      // 点击返回顶部按钮的自定义图片地址，默认使用z-paging内置的图片
      backToTopImg: {
        type: String,
        default: u.gc("backToTopImg", "")
      },
      // 点击返回顶部按钮返回到顶部时是否展示过渡动画，默认为是
      backToTopWithAnimate: {
        type: Boolean,
        default: u.gc("backToTopWithAnimate", true)
      },
      // 点击返回顶部按钮与底部的距离，注意添加单位px或rpx，默认为160rpx
      backToTopBottom: {
        type: [Number, String],
        default: u.gc("backToTopBottom", "160rpx")
      },
      // 点击返回顶部按钮的自定义样式
      backToTopStyle: {
        type: Object,
        default: u.gc("backToTopStyle", {})
      },
      // iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向，默认为是
      enableBackToTop: {
        type: Boolean,
        default: u.gc("enableBackToTop", true)
      }
    },
    data() {
      return {
        // 点击返回顶部的class
        backToTopClass: "zp-back-to-top zp-back-to-top-hide",
        // 上次点击返回顶部的时间
        lastBackToTopShowTime: 0,
        // 点击返回顶部显示的class是否在展示中，使得按钮展示/隐藏过度效果更自然
        showBackToTopClass: false
      };
    },
    computed: {
      backToTopThresholdUnitConverted() {
        return u.addUnit(this.backToTopThreshold, this.unit);
      },
      backToTopBottomUnitConverted() {
        return u.addUnit(this.backToTopBottom, this.unit);
      },
      finalEnableBackToTop() {
        return this.usePageScroll ? false : this.enableBackToTop;
      },
      finalBackToTopThreshold() {
        return u.convertToPx(this.backToTopThresholdUnitConverted);
      },
      finalBackToTopStyle() {
        const backToTopStyle = this.backToTopStyle;
        if (!backToTopStyle.bottom) {
          backToTopStyle.bottom = this.windowBottom + u.convertToPx(this.backToTopBottomUnitConverted) + "px";
        }
        if (!backToTopStyle.position) {
          backToTopStyle.position = this.usePageScroll ? "fixed" : "absolute";
        }
        return backToTopStyle;
      },
      finalBackToTopClass() {
        return `${this.backToTopClass} zp-back-to-top-${this.unit}`;
      }
    },
    methods: {
      // 点击了返回顶部
      _backToTopClick() {
        let callbacked = false;
        this.$emit("backToTopClick", (toTop) => {
          (toTop === void 0 || toTop === true) && this._handleToTop();
          callbacked = true;
        });
        this.$nextTick(() => {
          !callbacked && this._handleToTop();
        });
      },
      // 处理滚动到顶部（聊天记录模式中为滚动到底部）
      _handleToTop() {
        !this.backToTopWithAnimate && this._checkShouldShowBackToTop(0);
        !this.useChatRecordMode ? this.scrollToTop(this.backToTopWithAnimate) : this.scrollToBottom(this.backToTopWithAnimate);
      },
      // 判断是否要显示返回顶部按钮
      _checkShouldShowBackToTop(scrollTop) {
        if (!this.autoShowBackToTop) {
          this.showBackToTopClass = false;
          return;
        }
        if (scrollTop > this.finalBackToTopThreshold) {
          if (!this.showBackToTopClass) {
            this.showBackToTopClass = true;
            this.lastBackToTopShowTime = (/* @__PURE__ */ new Date()).getTime();
            u.delay(() => {
              this.backToTopClass = "zp-back-to-top zp-back-to-top-show";
            }, 300);
          }
        } else {
          if (this.showBackToTopClass) {
            this.backToTopClass = "zp-back-to-top zp-back-to-top-hide";
            u.delay(() => {
              this.showBackToTopClass = false;
            }, (/* @__PURE__ */ new Date()).getTime() - this.lastBackToTopShowTime < 500 ? 0 : 300);
          }
        }
      }
    }
  };
  const virtualListModule = {
    props: {
      // 是否使用虚拟列表，默认为否
      useVirtualList: {
        type: Boolean,
        default: u.gc("useVirtualList", false)
      },
      // 在使用虚拟列表时，是否使用兼容模式，默认为否
      useCompatibilityMode: {
        type: Boolean,
        default: u.gc("useCompatibilityMode", false)
      },
      // 使用兼容模式时传递的附加数据
      extraData: {
        type: Object,
        default: u.gc("extraData", {})
      },
      // 是否在z-paging内部循环渲染列表(内置列表)，默认为否。若use-virtual-list为true，则此项恒为true
      useInnerList: {
        type: Boolean,
        default: u.gc("useInnerList", false)
      },
      // 强制关闭inner-list，默认为false，如果为true将强制关闭innerList，适用于开启了虚拟列表后需要强制关闭inner-list的情况
      forceCloseInnerList: {
        type: Boolean,
        default: u.gc("forceCloseInnerList", false)
      },
      // 内置列表cell的key名称，仅nvue有效，在nvue中开启use-inner-list时必须填此项
      cellKeyName: {
        type: String,
        default: u.gc("cellKeyName", "")
      },
      // innerList样式
      innerListStyle: {
        type: Object,
        default: u.gc("innerListStyle", {})
      },
      // innerCell样式
      innerCellStyle: {
        type: Object,
        default: u.gc("innerCellStyle", {})
      },
      // 预加载的列表可视范围(列表高度)页数，默认为12，即预加载当前页及上下各12页的cell。此数值越大，则虚拟列表中加载的dom越多，内存消耗越大(会维持在一个稳定值)，但增加预加载页面数量可缓解快速滚动短暂白屏问题
      preloadPage: {
        type: [Number, String],
        default: u.gc("preloadPage", 12),
        validator: (value) => {
          if (value <= 0)
            u.consoleErr("preload-page必须大于0！");
          return value > 0;
        }
      },
      // 虚拟列表cell高度模式，默认为fixed，也就是每个cell高度完全相同，将以第一个cell高度为准进行计算。可选值【dynamic】，即代表高度是动态非固定的，【dynamic】性能低于【fixed】。
      cellHeightMode: {
        type: String,
        default: u.gc("cellHeightMode", Enum.CellHeightMode.Fixed)
      },
      // 固定的cell高度，cellHeightMode=fixed才有效，若设置了值，则不计算第一个cell高度而使用设置的cell高度
      fixedCellHeight: {
        type: [Number, String],
        default: u.gc("fixedCellHeight", 0)
      },
      // 虚拟列表列数，默认为1。常用于每行有多列的情况，例如每行有2列数据，需要将此值设置为2
      virtualListCol: {
        type: [Number, String],
        default: u.gc("virtualListCol", 1)
      },
      // 虚拟列表scroll取样帧率，默认为80，过低容易出现白屏问题，过高容易出现卡顿问题
      virtualScrollFps: {
        type: [Number, String],
        default: u.gc("virtualScrollFps", 80)
      },
      // 虚拟列表cell id的前缀，适用于一个页面有多个虚拟列表的情况，用以区分不同虚拟列表cell的id，注意：请勿传数字或以数字开头的字符串。如设置为list1，则cell的id应为：list1-zp-id-${item.zp_index}
      virtualCellIdPrefix: {
        type: String,
        default: u.gc("virtualCellIdPrefix", "")
      }
    },
    data() {
      return {
        virtualListKey: u.getInstanceId(),
        virtualPageHeight: 0,
        virtualCellHeight: 0,
        virtualScrollTimeStamp: 0,
        virtualList: [],
        virtualPlaceholderTopHeight: 0,
        virtualPlaceholderBottomHeight: 0,
        virtualTopRangeIndex: 0,
        virtualBottomRangeIndex: 0,
        lastVirtualTopRangeIndex: 0,
        lastVirtualBottomRangeIndex: 0,
        virtualItemInsertedCount: 0,
        virtualHeightCacheList: [],
        getCellHeightRetryCount: {
          fixed: 0,
          dynamic: 0
        },
        pagingOrgTop: -1,
        updateVirtualListFromDataChange: false
      };
    },
    watch: {
      // 监听总数据的改变，刷新虚拟列表布局
      realTotalData() {
        this.updateVirtualListRender();
      },
      // 监听虚拟列表渲染数组的改变并emit
      virtualList(newVal) {
        this.$emit("update:virtualList", newVal);
        this.$emit("virtualListChange", newVal);
      },
      // 监听虚拟列表顶部占位高度改变并emit
      virtualPlaceholderTopHeight(newVal) {
        this.$emit("virtualTopHeightChange", newVal);
      }
    },
    computed: {
      virtualCellIndexKey() {
        return c.listCellIndexKey;
      },
      finalUseVirtualList() {
        if (this.useVirtualList && this.usePageScroll) {
          u.consoleErr("使用页面滚动时，开启虚拟列表无效！");
        }
        return this.useVirtualList && !this.usePageScroll;
      },
      finalUseInnerList() {
        return this.useInnerList || this.finalUseVirtualList && !this.forceCloseInnerList;
      },
      finalCellKeyName() {
        return this.cellKeyName;
      },
      finalVirtualPageHeight() {
        return this.virtualPageHeight > 0 ? this.virtualPageHeight : this.windowHeight;
      },
      finalFixedCellHeight() {
        return u.convertToPx(this.fixedCellHeight);
      },
      fianlVirtualCellIdPrefix() {
        const prefix = this.virtualCellIdPrefix ? this.virtualCellIdPrefix + "-" : "";
        return prefix + "zp-id";
      },
      finalPlaceholderTopHeightStyle() {
        return {};
      },
      virtualRangePageHeight() {
        return this.finalVirtualPageHeight * this.preloadPage;
      },
      virtualScrollDisTimeStamp() {
        return 1e3 / this.virtualScrollFps;
      }
    },
    methods: {
      // 在使用动态高度虚拟列表时，若在列表数组中需要插入某个item，需要调用此方法；item:需要插入的item，index:插入的cell位置，若index为2，则插入的item在原list的index=1之后，index从0开始
      doInsertVirtualListItem(item, index2) {
        if (this.cellHeightMode !== Enum.CellHeightMode.Dynamic)
          return;
        this.realTotalData.splice(index2, 0, item);
        this.realTotalData = [...this.realTotalData];
        this.virtualItemInsertedCount++;
        if (!item || Object.prototype.toString.call(item) !== "[object Object]") {
          item = { item };
        }
        const cellIndexKey = this.virtualCellIndexKey;
        item[cellIndexKey] = `custom-${this.virtualItemInsertedCount}`;
        item[c.listCellIndexUniqueKey] = `${this.virtualListKey}-${item[cellIndexKey]}`;
        this.$nextTick(async () => {
          let retryCount = 0;
          while (retryCount <= 10) {
            await u.wait(c.delayTime);
            const cellNode = await this._getVirtualCellNodeByIndex(item[cellIndexKey]);
            if (!cellNode) {
              retryCount++;
              continue;
            }
            const currentHeight = cellNode ? cellNode[0].height : 0;
            const lastHeightCache = this.virtualHeightCacheList[index2 - 1];
            const lastTotalHeight = lastHeightCache ? lastHeightCache.totalHeight : 0;
            this.virtualHeightCacheList.splice(index2, 0, {
              height: currentHeight,
              lastTotalHeight,
              totalHeight: lastTotalHeight + currentHeight
            });
            for (let i = index2 + 1; i < this.virtualHeightCacheList.length; i++) {
              const thisNode = this.virtualHeightCacheList[i];
              thisNode.lastTotalHeight += currentHeight;
              thisNode.totalHeight += currentHeight;
            }
            this._updateVirtualScroll(this.oldScrollTop);
            break;
          }
        });
      },
      // 在使用动态高度虚拟列表时，手动更新指定cell的缓存高度(当cell高度在初始化之后再次改变后调用)；index:需要更新的cell在列表中的位置，从0开始
      didUpdateVirtualListCell(index2) {
        if (this.cellHeightMode !== Enum.CellHeightMode.Dynamic)
          return;
        const currentNode = this.virtualHeightCacheList[index2];
        this.$nextTick(() => {
          this._getVirtualCellNodeByIndex(index2).then((cellNode) => {
            const cellNodeHeight = cellNode ? cellNode[0].height : 0;
            const heightDis = cellNodeHeight - currentNode.height;
            currentNode.height = cellNodeHeight;
            currentNode.totalHeight = currentNode.lastTotalHeight + cellNodeHeight;
            for (let i = index2 + 1; i < this.virtualHeightCacheList.length; i++) {
              const thisNode = this.virtualHeightCacheList[i];
              thisNode.totalHeight += heightDis;
              thisNode.lastTotalHeight += heightDis;
            }
          });
        });
      },
      // 在使用动态高度虚拟列表时，若删除了列表数组中的某个item，需要调用此方法以更新高度缓存数组；index:删除的cell在列表中的位置，从0开始
      didDeleteVirtualListCell(index2) {
        if (this.cellHeightMode !== Enum.CellHeightMode.Dynamic)
          return;
        const currentNode = this.virtualHeightCacheList[index2];
        for (let i = index2 + 1; i < this.virtualHeightCacheList.length; i++) {
          const thisNode = this.virtualHeightCacheList[i];
          thisNode.totalHeight -= currentNode.height;
          thisNode.lastTotalHeight -= currentNode.height;
        }
        this.virtualHeightCacheList.splice(index2, 1);
      },
      // 手动触发虚拟列表渲染更新，可用于解决例如修改了虚拟列表数组中元素，但展示未更新的情况
      updateVirtualListRender() {
        if (this.finalUseVirtualList) {
          this.updateVirtualListFromDataChange = true;
          this.$nextTick(() => {
            this.getCellHeightRetryCount.fixed = 0;
            if (this.realTotalData.length) {
              this.cellHeightMode === Enum.CellHeightMode.Fixed && this.isFirstPage && this._updateFixedCellHeight();
            } else {
              this._resetDynamicListState(!this.isUserPullDown);
            }
            this._updateVirtualScroll(this.oldScrollTop);
          });
        }
      },
      // 初始化虚拟列表
      _virtualListInit() {
        this.$nextTick(() => {
          u.delay(() => {
            this._getNodeClientRect(".zp-scroll-view").then((node) => {
              if (node) {
                this.pagingOrgTop = node[0].top;
                this.virtualPageHeight = node[0].height;
              }
            });
          });
        });
      },
      // cellHeightMode为fixed时获取第一个cell高度
      _updateFixedCellHeight() {
        if (!this.finalFixedCellHeight) {
          this.$nextTick(() => {
            u.delay(() => {
              this._getVirtualCellNodeByIndex(0).then((cellNode) => {
                if (!cellNode) {
                  if (this.getCellHeightRetryCount.fixed > 10)
                    return;
                  this.getCellHeightRetryCount.fixed++;
                  this._updateFixedCellHeight();
                } else {
                  this.virtualCellHeight = cellNode[0].height;
                  this._updateVirtualScroll(this.oldScrollTop);
                }
              });
            }, c.delayTime, "updateFixedCellHeightDelay");
          });
        } else {
          this.virtualCellHeight = this.finalFixedCellHeight;
        }
      },
      // cellHeightMode为dynamic时获取每个cell高度
      _updateDynamicCellHeight(list, dataFrom = "bottom") {
        const dataFromTop = dataFrom === "top";
        const heightCacheList = this.virtualHeightCacheList;
        const currentCacheList = dataFromTop ? [] : heightCacheList;
        let listTotalHeight = 0;
        this.$nextTick(() => {
          u.delay(async () => {
            for (let i = 0; i < list.length; i++) {
              const cellNode = await this._getVirtualCellNodeByIndex(list[i][this.virtualCellIndexKey]);
              const currentHeight = cellNode ? cellNode[0].height : 0;
              if (!cellNode) {
                if (this.getCellHeightRetryCount.dynamic <= 10) {
                  heightCacheList.splice(heightCacheList.length - i, i);
                  this.getCellHeightRetryCount.dynamic++;
                  this._updateDynamicCellHeight(list, dataFrom);
                }
                return;
              }
              const lastHeightCache = currentCacheList.length ? currentCacheList.slice(-1)[0] : null;
              const lastTotalHeight = lastHeightCache ? lastHeightCache.totalHeight : 0;
              currentCacheList.push({
                height: currentHeight,
                lastTotalHeight,
                totalHeight: lastTotalHeight + currentHeight
              });
              if (dataFromTop) {
                listTotalHeight += currentHeight;
              }
            }
            if (dataFromTop && list.length) {
              for (let i = 0; i < heightCacheList.length; i++) {
                const heightCacheItem = heightCacheList[i];
                heightCacheItem.lastTotalHeight += listTotalHeight;
                heightCacheItem.totalHeight += listTotalHeight;
              }
              this.virtualHeightCacheList = currentCacheList.concat(heightCacheList);
            }
            this._updateVirtualScroll(this.oldScrollTop);
          }, c.delayTime, "updateDynamicCellHeightDelay");
        });
      },
      // 设置cellItem的index
      _setCellIndex(list, dataFrom = "bottom") {
        let currentItemIndex = 0;
        const cellIndexKey = this.virtualCellIndexKey;
        dataFrom === "bottom" && [Enum.QueryFrom.Refresh, Enum.QueryFrom.Reload].indexOf(this.queryFrom) >= 0 && this._resetDynamicListState();
        if (this.totalData.length && this.queryFrom !== Enum.QueryFrom.Refresh) {
          if (dataFrom === "bottom") {
            currentItemIndex = this.realTotalData.length;
            const lastItem = this.realTotalData.length ? this.realTotalData.slice(-1)[0] : null;
            if (lastItem && lastItem[cellIndexKey] !== void 0) {
              currentItemIndex = lastItem[cellIndexKey] + 1;
            }
          } else if (dataFrom === "top") {
            const firstItem = this.realTotalData.length ? this.realTotalData[0] : null;
            if (firstItem && firstItem[cellIndexKey] !== void 0) {
              currentItemIndex = firstItem[cellIndexKey] - list.length;
            }
          }
        } else {
          this._resetDynamicListState();
        }
        for (let i = 0; i < list.length; i++) {
          let item = list[i];
          if (!item || Object.prototype.toString.call(item) !== "[object Object]") {
            item = { item };
          }
          if (item[c.listCellIndexUniqueKey]) {
            item = u.deepCopy(item);
          }
          item[cellIndexKey] = currentItemIndex + i;
          item[c.listCellIndexUniqueKey] = `${this.virtualListKey}-${item[cellIndexKey]}`;
          list[i] = item;
        }
        this.getCellHeightRetryCount.dynamic = 0;
        this.cellHeightMode === Enum.CellHeightMode.Dynamic && this._updateDynamicCellHeight(list, dataFrom);
      },
      // 更新scroll滚动（虚拟列表滚动时触发）
      _updateVirtualScroll(scrollTop, scrollDiff = 0) {
        const currentTimeStamp = u.getTime();
        scrollTop === 0 && this._resetTopRange();
        if (scrollTop !== 0 && this.virtualScrollTimeStamp && currentTimeStamp - this.virtualScrollTimeStamp <= this.virtualScrollDisTimeStamp) {
          return;
        }
        this.virtualScrollTimeStamp = currentTimeStamp;
        let scrollIndex = 0;
        const cellHeightMode = this.cellHeightMode;
        if (cellHeightMode === Enum.CellHeightMode.Fixed) {
          scrollIndex = parseInt(scrollTop / this.virtualCellHeight) || 0;
          this._updateFixedTopRangeIndex(scrollIndex);
          this._updateFixedBottomRangeIndex(scrollIndex);
        } else if (cellHeightMode === Enum.CellHeightMode.Dynamic) {
          const scrollDirection = scrollDiff > 0 ? "top" : "bottom";
          const rangePageHeight = this.virtualRangePageHeight;
          const topRangePageOffset = scrollTop - rangePageHeight;
          const bottomRangePageOffset = scrollTop + this.finalVirtualPageHeight + rangePageHeight;
          let virtualBottomRangeIndex = 0;
          let virtualPlaceholderBottomHeight = 0;
          let reachedLimitBottom = false;
          const heightCacheList = this.virtualHeightCacheList;
          const lastHeightCache = !!heightCacheList ? heightCacheList.slice(-1)[0] : null;
          let startTopRangeIndex = this.virtualTopRangeIndex;
          if (scrollDirection === "bottom") {
            for (let i = startTopRangeIndex; i < heightCacheList.length; i++) {
              const heightCacheItem = heightCacheList[i];
              if (heightCacheItem && heightCacheItem.totalHeight > topRangePageOffset) {
                this.virtualTopRangeIndex = i;
                this.virtualPlaceholderTopHeight = heightCacheItem.lastTotalHeight;
                break;
              }
            }
          } else {
            let topRangeMatched = false;
            for (let i = startTopRangeIndex; i >= 0; i--) {
              const heightCacheItem = heightCacheList[i];
              if (heightCacheItem && heightCacheItem.totalHeight < topRangePageOffset) {
                this.virtualTopRangeIndex = i;
                this.virtualPlaceholderTopHeight = heightCacheItem.lastTotalHeight;
                topRangeMatched = true;
                break;
              }
            }
            !topRangeMatched && this._resetTopRange();
          }
          for (let i = this.virtualTopRangeIndex; i < heightCacheList.length; i++) {
            const heightCacheItem = heightCacheList[i];
            if (heightCacheItem && heightCacheItem.totalHeight > bottomRangePageOffset) {
              virtualBottomRangeIndex = i;
              virtualPlaceholderBottomHeight = lastHeightCache.totalHeight - heightCacheItem.totalHeight;
              reachedLimitBottom = true;
              break;
            }
          }
          if (!reachedLimitBottom || this.virtualBottomRangeIndex === 0) {
            this.virtualBottomRangeIndex = this.realTotalData.length ? this.realTotalData.length - 1 : this.pageSize;
            this.virtualPlaceholderBottomHeight = 0;
          } else {
            this.virtualBottomRangeIndex = virtualBottomRangeIndex;
            this.virtualPlaceholderBottomHeight = virtualPlaceholderBottomHeight;
          }
          this._updateVirtualList();
        }
      },
      // 更新fixedCell模式下topRangeIndex&placeholderTopHeight
      _updateFixedTopRangeIndex(scrollIndex) {
        let virtualTopRangeIndex = this.virtualCellHeight === 0 ? 0 : scrollIndex - (parseInt(this.finalVirtualPageHeight / this.virtualCellHeight) || 1) * this.preloadPage;
        virtualTopRangeIndex *= this.virtualListCol;
        virtualTopRangeIndex = Math.max(0, virtualTopRangeIndex);
        this.virtualTopRangeIndex = virtualTopRangeIndex;
        this.virtualPlaceholderTopHeight = virtualTopRangeIndex / this.virtualListCol * this.virtualCellHeight;
      },
      // 更新fixedCell模式下bottomRangeIndex&placeholderBottomHeight
      _updateFixedBottomRangeIndex(scrollIndex) {
        let virtualBottomRangeIndex = this.virtualCellHeight === 0 ? this.pageSize : scrollIndex + (parseInt(this.finalVirtualPageHeight / this.virtualCellHeight) || 1) * (this.preloadPage + 1);
        virtualBottomRangeIndex *= this.virtualListCol;
        virtualBottomRangeIndex = Math.min(this.realTotalData.length, virtualBottomRangeIndex);
        this.virtualBottomRangeIndex = virtualBottomRangeIndex;
        this.virtualPlaceholderBottomHeight = (this.realTotalData.length - virtualBottomRangeIndex) * this.virtualCellHeight / this.virtualListCol;
        this._updateVirtualList();
      },
      // 更新virtualList
      _updateVirtualList() {
        const shouldUpdateList = this.updateVirtualListFromDataChange || (this.lastVirtualTopRangeIndex !== this.virtualTopRangeIndex || this.lastVirtualBottomRangeIndex !== this.virtualBottomRangeIndex);
        if (shouldUpdateList) {
          this.updateVirtualListFromDataChange = false;
          this.lastVirtualTopRangeIndex = this.virtualTopRangeIndex;
          this.lastVirtualBottomRangeIndex = this.virtualBottomRangeIndex;
          this.virtualList = this.realTotalData.slice(this.virtualTopRangeIndex, this.virtualBottomRangeIndex + 1);
        }
      },
      // 重置动态cell模式下的高度缓存数据、虚拟列表和滚动状态
      _resetDynamicListState(resetVirtualList = false) {
        this.virtualHeightCacheList = [];
        if (resetVirtualList) {
          this.virtualList = [];
        }
        this.virtualTopRangeIndex = 0;
        this.virtualPlaceholderTopHeight = 0;
      },
      // 重置topRangeIndex和placeholderTopHeight
      _resetTopRange() {
        this.virtualTopRangeIndex = 0;
        this.virtualPlaceholderTopHeight = 0;
        this._updateVirtualList();
      },
      // 检测虚拟列表当前滚动位置，如发现滚动位置不正确则重新计算虚拟列表相关参数(为解决在App中可能出现的长时间进入后台后打开App白屏的问题)
      _checkVirtualListScroll() {
        if (this.finalUseVirtualList) {
          this.$nextTick(() => {
            this._getNodeClientRect(".zp-paging-touch-view").then((node) => {
              const currentTop = node ? node[0].top : 0;
              if (!node || currentTop === this.pagingOrgTop && this.virtualPlaceholderTopHeight !== 0) {
                this._updateVirtualScroll(0);
              }
            });
          });
        }
      },
      // 获取对应index的虚拟列表cell节点信息
      _getVirtualCellNodeByIndex(index2) {
        let inParent = false;
        return this._getNodeClientRect(`#${this.fianlVirtualCellIdPrefix}-${index2}`, this.finalUseInnerList, false, inParent);
      },
      // 处理使用内置列表时点击了cell事件
      _innerCellClick(item, index2) {
        this.$emit("innerCellClick", item, index2);
      }
    }
  };
  const systemInfo = uni.getSystemInfoSync();
  const _sfc_main$i = {
    name: "z-paging",
    components: {
      zPagingRefresh,
      zPagingLoadMore,
      zPagingEmptyView: __easycom_0$4
    },
    mixins: [
      commonLayoutModule,
      dataHandleModule,
      i18nModule,
      nvueModule,
      emptyModule,
      refresherModule,
      loadMoreModule,
      loadingModule,
      chatRecordModerModule,
      scrollerModule,
      backToTopModule,
      virtualListModule
    ],
    data() {
      return {
        // --------------静态资源---------------
        base64BackToTop: zStatic.base64BackToTop,
        // -------------全局数据相关--------------
        // 当前加载类型
        loadingType: Enum.LoadingType.Refresher,
        requestTimeStamp: 0,
        wxsPropType: "",
        renderPropScrollTop: -1,
        checkScrolledToBottomTimeOut: null,
        cacheTopHeight: -1,
        statusBarHeight: systemInfo.statusBarHeight,
        // --------------状态&判断---------------
        insideOfPaging: -1,
        isLoadFailed: false,
        isIos: systemInfo.platform === "ios",
        disabledBounce: false,
        fromCompleteEmit: false,
        disabledCompleteEmit: false,
        pageLaunched: false,
        active: false,
        // ---------------wxs相关---------------
        wxsIsScrollTopInTopRange: true,
        wxsScrollTop: 0,
        wxsPageScrollTop: 0,
        wxsOnPullingDown: false
      };
    },
    props: {
      // 调用complete后延迟处理的时间，单位为毫秒，默认0毫秒，优先级高于minDelay
      delay: {
        type: [Number, String],
        default: u.gc("delay", 0)
      },
      // 触发@query后最小延迟处理的时间，单位为毫秒，默认0毫秒，优先级低于delay（假设设置为300毫秒，若分页请求时间小于300毫秒，则在调用complete后延迟[300毫秒-请求时长]；若请求时长大于300毫秒，则不延迟），当show-refresher-when-reload为true或reload(true)时，其最小值为400
      minDelay: {
        type: [Number, String],
        default: u.gc("minDelay", 0)
      },
      // 设置z-paging的style，部分平台(如微信小程序)无法直接修改组件的style，可使用此属性代替
      pagingStyle: {
        type: Object,
        default: u.gc("pagingStyle", {})
      },
      // z-paging的高度，优先级低于pagingStyle中设置的height；传字符串，如100px、100rpx、100%
      height: {
        type: String,
        default: u.gc("height", "")
      },
      // z-paging的宽度，优先级低于pagingStyle中设置的width；传字符串，如100px、100rpx、100%
      width: {
        type: String,
        default: u.gc("width", "")
      },
      // z-paging的最大宽度，优先级低于pagingStyle中设置的max-width；传字符串，如100px、100rpx、100%。默认为空，也就是铺满窗口宽度，若设置了特定值则会自动添加margin: 0 auto
      maxWidth: {
        type: String,
        default: u.gc("maxWidth", "")
      },
      // z-paging的背景色，优先级低于pagingStyle中设置的background。传字符串，如"#ffffff"
      bgColor: {
        type: String,
        default: u.gc("bgColor", "")
      },
      // 设置z-paging的容器(插槽的父view)的style
      pagingContentStyle: {
        type: Object,
        default: u.gc("pagingContentStyle", {})
      },
      // z-paging是否自动高度，若自动高度则会自动铺满屏幕
      autoHeight: {
        type: Boolean,
        default: u.gc("autoHeight", false)
      },
      // z-paging是否自动高度时，附加的高度，注意添加单位px或rpx，若需要减少高度，则传负数
      autoHeightAddition: {
        type: [Number, String],
        default: u.gc("autoHeightAddition", "0px")
      },
      // loading(下拉刷新、上拉加载更多)的主题样式，支持black，white，默认black
      defaultThemeStyle: {
        type: String,
        default: u.gc("defaultThemeStyle", "black")
      },
      // z-paging是否使用fixed布局，若使用fixed布局，则z-paging的父view无需固定高度，z-paging高度默认为100%，默认为是(当使用内置scroll-view滚动时有效)
      fixed: {
        type: Boolean,
        default: u.gc("fixed", true)
      },
      // 是否开启底部安全区域适配
      safeAreaInsetBottom: {
        type: Boolean,
        default: u.gc("safeAreaInsetBottom", false)
      },
      // 开启底部安全区域适配后，是否使用placeholder形式实现，默认为否。为否时滚动区域会自动避开底部安全区域，也就是所有滚动内容都不会挡住底部安全区域，若设置为是，则滚动时滚动内容会挡住底部安全区域，但是当滚动到底部时才会避开底部安全区域
      useSafeAreaPlaceholder: {
        type: Boolean,
        default: u.gc("useSafeAreaPlaceholder", false)
      },
      // z-paging bottom的背景色，默认透明，传字符串，如"#ffffff"
      bottomBgColor: {
        type: String,
        default: u.gc("bottomBgColor", "")
      },
      // slot="top"的view的z-index，默认为99，仅使用页面滚动时有效
      topZIndex: {
        type: Number,
        default: u.gc("topZIndex", 99)
      },
      // z-paging内容容器父view的z-index，默认为1
      superContentZIndex: {
        type: Number,
        default: u.gc("superContentZIndex", 1)
      },
      // z-paging内容容器部分的z-index，默认为1
      contentZIndex: {
        type: Number,
        default: u.gc("contentZIndex", 1)
      },
      // z-paging二楼的z-index，默认为100
      f2ZIndex: {
        type: Number,
        default: u.gc("f2ZIndex", 100)
      },
      // 使用页面滚动时，是否在不满屏时自动填充满屏幕，默认为是
      autoFullHeight: {
        type: Boolean,
        default: u.gc("autoFullHeight", true)
      },
      // 是否监听列表触摸方向改变，默认为否
      watchTouchDirectionChange: {
        type: Boolean,
        default: u.gc("watchTouchDirectionChange", false)
      },
      // z-paging中布局的单位，默认为rpx
      unit: {
        type: String,
        default: u.gc("unit", "rpx")
      }
    },
    created() {
      if (this.createdReload && !this.refresherOnly && this.auto) {
        this._startLoading();
        this.$nextTick(this._preReload);
      }
    },
    mounted() {
      this.active = true;
      this.wxsPropType = u.getTime().toString();
      this.renderJsIgnore;
      if (!this.createdReload && !this.refresherOnly && this.auto) {
        u.delay(() => this.$nextTick(this._preReload), 0);
      }
      this.finalUseCache && this._setListByLocalCache();
      this.$nextTick(() => {
        this.systemInfo = uni.getSystemInfoSync();
        !this.usePageScroll && this.autoHeight && this._setAutoHeight();
        this.loaded = true;
        u.delay(() => {
          this.updateFixedLayout();
          this._updateCachedSuperContentHeight();
        });
      });
      this.updatePageScrollTopHeight();
      this.updatePageScrollBottomHeight();
      this.updateLeftAndRightWidth();
      if (this.finalRefresherEnabled && this.useCustomRefresher) {
        this.$nextTick(() => {
          this.isTouchmoving = true;
        });
      }
      this._onEmit();
      this.finalUseVirtualList && this._virtualListInit();
    },
    destroyed() {
      this._handleUnmounted();
    },
    unmounted() {
      this._handleUnmounted();
    },
    watch: {
      defaultThemeStyle: {
        handler(newVal) {
          if (newVal.length) {
            this.finalRefresherDefaultStyle = newVal;
          }
        },
        immediate: true
      },
      autoHeight(newVal) {
        this.loaded && !this.usePageScroll && this._setAutoHeight(newVal);
      },
      autoHeightAddition(newVal) {
        this.loaded && !this.usePageScroll && this.autoHeight && this._setAutoHeight(newVal);
      }
    },
    computed: {
      // 当前z-paging的内置样式
      finalPagingStyle() {
        const pagingStyle = { ...this.pagingStyle };
        if (!this.systemInfo)
          return pagingStyle;
        const { windowTop, windowBottom } = this;
        if (!this.usePageScroll && this.fixed) {
          if (windowTop && !pagingStyle.top) {
            pagingStyle.top = windowTop + "px";
          }
          if (windowBottom && !pagingStyle.bottom) {
            pagingStyle.bottom = windowBottom + "px";
          }
        }
        if (this.bgColor.length && !pagingStyle["background"]) {
          pagingStyle["background"] = this.bgColor;
        }
        if (this.height.length && !pagingStyle["height"]) {
          pagingStyle["height"] = this.height;
        }
        if (this.width.length && !pagingStyle["width"]) {
          pagingStyle["width"] = this.width;
        }
        if (this.maxWidth.length && !pagingStyle["max-width"]) {
          pagingStyle["max-width"] = this.maxWidth;
          pagingStyle["margin"] = "0 auto";
        }
        return pagingStyle;
      },
      // 当前z-paging内容的样式
      finalPagingContentStyle() {
        if (this.contentZIndex != 1) {
          this.pagingContentStyle["z-index"] = this.contentZIndex;
          this.pagingContentStyle["position"] = "relative";
        }
        return this.pagingContentStyle;
      },
      renderJsIgnore() {
        if (this.usePageScroll && this.useChatRecordMode || !this.refresherEnabled && this.scrollable || !this.useCustomRefresher) {
          this.$nextTick(() => {
            this.renderPropScrollTop = 10;
          });
        }
        return 0;
      },
      windowHeight() {
        if (!this.systemInfo)
          return 0;
        return this.systemInfo.windowHeight || 0;
      },
      windowBottom() {
        if (!this.systemInfo)
          return 0;
        let windowBottom = this.systemInfo.windowBottom || 0;
        if (this.safeAreaInsetBottom && !this.useSafeAreaPlaceholder && !this.useChatRecordMode) {
          windowBottom += this.safeAreaBottom;
        }
        return windowBottom;
      },
      isIosAndH5() {
        return false;
      }
    },
    methods: {
      // 当前版本号
      getVersion() {
        return `z-paging v${c.version}`;
      },
      // 设置nvue List的specialEffects
      setSpecialEffects(args) {
        this.setListSpecialEffects(args);
      },
      // 与setSpecialEffects等效，兼容旧版本
      setListSpecialEffects(args) {
        this.nFixFreezing = args && Object.keys(args).length;
        if (this.isIos) {
          this.privateRefresherEnabled = 0;
        }
        !this.usePageScroll && this.$refs["zp-n-list"].setSpecialEffects(args);
      },
      // 当app长时间进入后台后进入前台，因系统内存管理导致app重新加载时，进行一些适配处理
      _handlePageLaunch() {
        if (this.pageLaunched) {
          this.refresherThresholdUpdateTag = 1;
          this.$nextTick(() => {
            this.refresherThresholdUpdateTag = 0;
          });
          this._checkVirtualListScroll();
        }
        this.pageLaunched = true;
      },
      // 使手机发生较短时间的振动（15ms）
      _doVibrateShort() {
        if (this.isIos) {
          const UISelectionFeedbackGenerator = plus.ios.importClass("UISelectionFeedbackGenerator");
          const feedbackGenerator = new UISelectionFeedbackGenerator();
          feedbackGenerator.init();
          setTimeout(() => {
            feedbackGenerator.selectionChanged();
          }, 0);
        } else {
          plus.device.vibrate(15);
        }
      },
      // 设置z-paging高度
      async _setAutoHeight(shouldFullHeight = true, scrollViewNode = null) {
        const heightKey = "min-height";
        try {
          if (shouldFullHeight) {
            let finalScrollViewNode = scrollViewNode || await this._getNodeClientRect(".zp-scroll-view");
            let finalScrollBottomNode = await this._getNodeClientRect(".zp-page-bottom");
            if (finalScrollViewNode) {
              const scrollViewTop = finalScrollViewNode[0].top;
              let scrollViewHeight = this.windowHeight - scrollViewTop;
              scrollViewHeight -= finalScrollBottomNode ? finalScrollBottomNode[0].height : 0;
              const additionHeight = u.convertToPx(this.autoHeightAddition);
              const finalHeight = scrollViewHeight + additionHeight - (this.insideMore ? 1 : 0) + "px !important";
              this.$set(this.scrollViewStyle, heightKey, finalHeight);
              this.$set(this.scrollViewInStyle, heightKey, finalHeight);
            }
          } else {
            this.$delete(this.scrollViewStyle, heightKey);
            this.$delete(this.scrollViewInStyle, heightKey);
          }
        } catch (e) {
        }
      },
      // 组件销毁后续处理
      _handleUnmounted() {
        this.active = false;
        this._offEmit();
        this.useChatRecordMode && uni.offKeyboardHeightChange(this._handleKeyboardHeightChange);
      },
      // 触发更新是否超出页面状态
      _updateInsideOfPaging() {
        this.insideMore && this.insideOfPaging === true && setTimeout(this.doLoadMore, 200);
      },
      // 清除timeout
      _cleanTimeout(timeout2) {
        if (timeout2) {
          clearTimeout(timeout2);
          timeout2 = null;
        }
        return timeout2;
      },
      // 添加全局emit监听
      _onEmit() {
        uni.$on(c.errorUpdateKey, (errorMsg) => {
          if (this.loading) {
            if (!!errorMsg) {
              this.customerEmptyViewErrorText = errorMsg;
            }
            this.complete(false).catch(() => {
            });
          }
        });
        uni.$on(c.completeUpdateKey, (data) => {
          setTimeout(() => {
            if (this.loading) {
              if (!this.disabledCompleteEmit) {
                const type = data.type || "normal";
                const list = data.list || data;
                const rule = data.rule;
                this.fromCompleteEmit = true;
                switch (type) {
                  case "normal":
                    this.complete(list);
                    break;
                  case "total":
                    this.completeByTotal(list, rule);
                    break;
                  case "nomore":
                    this.completeByNoMore(list, rule);
                    break;
                  case "key":
                    this.completeByKey(list, rule);
                    break;
                }
              } else {
                this.disabledCompleteEmit = false;
              }
            }
          }, 1);
        });
      },
      // 销毁全局emit和listener监听
      _offEmit() {
        uni.$off(c.errorUpdateKey);
        uni.$off(c.completeUpdateKey);
      }
    }
  };
  const block0 = (Comp) => {
    (Comp.$wxs || (Comp.$wxs = [])).push("pagingWxs");
    (Comp.$wxsModules || (Comp.$wxsModules = {}))["pagingWxs"] = "bca0bb86";
  };
  const block1 = (Comp) => {
    (Comp.$renderjs || (Comp.$renderjs = [])).push("pagingRenderjs");
    (Comp.$renderjsModules || (Comp.$renderjsModules = {}))["pagingRenderjs"] = "a5d206f8";
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_z_paging_refresh = vue.resolveComponent("z-paging-refresh");
    const _component_z_paging_load_more = vue.resolveComponent("z-paging-load-more");
    const _component_z_paging_empty_view = resolveEasycom(vue.resolveDynamicComponent("z-paging-empty-view"), __easycom_0$4);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass({ "z-paging-content": true, "z-paging-content-full": !_ctx.usePageScroll, "z-paging-content-fixed": !_ctx.usePageScroll && _ctx.fixed, "z-paging-content-page": _ctx.usePageScroll, "z-paging-reached-top": _ctx.renderPropScrollTop < 1, "z-paging-use-chat-record-mode": _ctx.useChatRecordMode }),
        style: vue.normalizeStyle([_ctx.finalPagingStyle])
      },
      [
        vue.createCommentVNode(" 二楼view "),
        _ctx.showF2 && _ctx.showRefresherF2 ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            onTouchmove: _cache[0] || (_cache[0] = vue.withModifiers(() => {
            }, ["stop", "prevent"])),
            class: "zp-f2-content",
            style: vue.normalizeStyle([{ "transform": _ctx.f2Transform, "transition": `transform .2s linear`, "height": _ctx.superContentHeight + "px", "z-index": _ctx.f2ZIndex }])
          },
          [
            vue.renderSlot(_ctx.$slots, "f2", {}, void 0, true)
          ],
          36
          /* STYLE, NEED_HYDRATION */
        )) : vue.createCommentVNode("v-if", true),
        vue.createCommentVNode(" 顶部固定的slot "),
        !_ctx.usePageScroll && _ctx.zSlots.top ? vue.renderSlot(_ctx.$slots, "top", { key: 1 }, void 0, true) : _ctx.usePageScroll && _ctx.zSlots.top ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 2,
            class: "zp-page-top",
            onTouchmove: _cache[1] || (_cache[1] = vue.withModifiers(() => {
            }, ["stop", "prevent"])),
            style: vue.normalizeStyle([{ "top": `${_ctx.windowTop}px`, "z-index": _ctx.topZIndex }])
          },
          [
            vue.renderSlot(_ctx.$slots, "top", {}, void 0, true)
          ],
          36
          /* STYLE, NEED_HYDRATION */
        )) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass({ "zp-view-super": true, "zp-scroll-view-super": !_ctx.usePageScroll }),
            style: vue.normalizeStyle([_ctx.finalScrollViewStyle])
          },
          [
            _ctx.zSlots.left ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 0,
                class: vue.normalizeClass({ "zp-page-left": true, "zp-absoulte": _ctx.finalIsOldWebView })
              },
              [
                vue.renderSlot(_ctx.$slots, "left", {}, void 0, true)
              ],
              2
              /* CLASS */
            )) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass({ "zp-scroll-view-container": true, "zp-absoulte": _ctx.finalIsOldWebView }),
                style: vue.normalizeStyle([_ctx.scrollViewContainerStyle])
              },
              [
                vue.createElementVNode("scroll-view", {
                  ref: "zp-scroll-view",
                  class: vue.normalizeClass({ "zp-scroll-view": true, "zp-scroll-view-absolute": !_ctx.usePageScroll, "zp-scroll-view-hide-scrollbar": !_ctx.showScrollbar }),
                  style: vue.normalizeStyle([_ctx.chatRecordRotateStyle]),
                  "scroll-top": _ctx.scrollTop,
                  "scroll-x": _ctx.scrollX,
                  "scroll-y": _ctx.finalScrollable,
                  "enable-back-to-top": _ctx.finalEnableBackToTop,
                  "show-scrollbar": _ctx.showScrollbar,
                  "scroll-with-animation": _ctx.finalScrollWithAnimation,
                  "scroll-into-view": _ctx.scrollIntoView,
                  "lower-threshold": _ctx.finalLowerThreshold,
                  "upper-threshold": 5,
                  "refresher-enabled": _ctx.finalRefresherEnabled && !_ctx.useCustomRefresher,
                  "refresher-threshold": _ctx.finalRefresherThreshold,
                  "refresher-default-style": _ctx.finalRefresherDefaultStyle,
                  "refresher-background": _ctx.refresherBackground,
                  "refresher-triggered": _ctx.finalRefresherTriggered,
                  onScroll: _cache[12] || (_cache[12] = (...args) => _ctx._scroll && _ctx._scroll(...args)),
                  onScrolltolower: _cache[13] || (_cache[13] = (...args) => _ctx._onScrollToLower && _ctx._onScrollToLower(...args)),
                  onScrolltoupper: _cache[14] || (_cache[14] = (...args) => _ctx._onScrollToUpper && _ctx._onScrollToUpper(...args)),
                  onRefresherrestore: _cache[15] || (_cache[15] = (...args) => _ctx._onRestore && _ctx._onRestore(...args)),
                  onRefresherrefresh: _cache[16] || (_cache[16] = ($event) => _ctx._onRefresh(true))
                }, [
                  vue.createElementVNode(
                    "view",
                    {
                      class: "zp-paging-touch-view",
                      onTouchstart: _cache[4] || (_cache[4] = (...args) => _ctx.pagingWxs.touchstart && _ctx.pagingWxs.touchstart(...args)),
                      onTouchmove: _cache[5] || (_cache[5] = (...args) => _ctx.pagingWxs.touchmove && _ctx.pagingWxs.touchmove(...args)),
                      onTouchend: _cache[6] || (_cache[6] = (...args) => _ctx.pagingWxs.touchend && _ctx.pagingWxs.touchend(...args)),
                      onTouchcancel: _cache[7] || (_cache[7] = (...args) => _ctx.pagingWxs.touchend && _ctx.pagingWxs.touchend(...args)),
                      onMousedown: _cache[8] || (_cache[8] = (...args) => _ctx.pagingWxs.mousedown && _ctx.pagingWxs.mousedown(...args)),
                      onMousemove: _cache[9] || (_cache[9] = (...args) => _ctx.pagingWxs.mousemove && _ctx.pagingWxs.mousemove(...args)),
                      onMouseup: _cache[10] || (_cache[10] = (...args) => _ctx.pagingWxs.mouseup && _ctx.pagingWxs.mouseup(...args)),
                      onMouseleave: _cache[11] || (_cache[11] = (...args) => _ctx.pagingWxs.mouseleave && _ctx.pagingWxs.mouseleave(...args))
                    },
                    [
                      _ctx.finalRefresherFixedBacHeight > 0 ? (vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          key: 0,
                          class: "zp-fixed-bac-view",
                          style: vue.normalizeStyle([{ "background": _ctx.refresherFixedBackground, "height": `${_ctx.finalRefresherFixedBacHeight}px` }])
                        },
                        null,
                        4
                        /* STYLE */
                      )) : vue.createCommentVNode("v-if", true),
                      vue.createElementVNode("view", {
                        class: "zp-paging-main",
                        style: vue.normalizeStyle([_ctx.scrollViewInStyle, { "transform": _ctx.finalRefresherTransform, "transition": _ctx.refresherTransition }]),
                        "change:prop": _ctx.pagingWxs.propObserver,
                        prop: vue.wp(_ctx.wxsPropType),
                        "data-refresherThreshold": _ctx.finalRefresherThreshold,
                        "data-refresherF2Enabled": _ctx.refresherF2Enabled,
                        "data-refresherF2Threshold": _ctx.finalRefresherF2Threshold,
                        "data-isIos": _ctx.isIos,
                        "data-loading": _ctx.loading || _ctx.isRefresherInComplete,
                        "data-useChatRecordMode": _ctx.useChatRecordMode,
                        "data-refresherEnabled": _ctx.refresherEnabled,
                        "data-useCustomRefresher": _ctx.useCustomRefresher,
                        "data-pageScrollTop": _ctx.wxsPageScrollTop,
                        "data-scrollTop": _ctx.wxsScrollTop,
                        "data-refresherMaxAngle": _ctx.refresherMaxAngle,
                        "data-refresherNoTransform": _ctx.refresherNoTransform,
                        "data-refresherAecc": _ctx.refresherAngleEnableChangeContinued,
                        "data-usePageScroll": _ctx.usePageScroll,
                        "data-watchTouchDirectionChange": _ctx.watchTouchDirectionChange,
                        "data-oldIsTouchmoving": _ctx.isTouchmoving,
                        "data-refresherOutRate": _ctx.finalRefresherOutRate,
                        "data-refresherPullRate": _ctx.finalRefresherPullRate,
                        "data-hasTouchmove": _ctx.hasTouchmove,
                        "change:renderPropIsIosAndH5": _ctx.pagingRenderjs.renderPropIsIosAndH5Change,
                        renderPropIsIosAndH5: vue.wp(_ctx.isIosAndH5)
                      }, [
                        _ctx.showRefresher ? (vue.openBlock(), vue.createElementBlock(
                          "view",
                          {
                            key: 0,
                            class: "zp-custom-refresher-view",
                            style: vue.normalizeStyle([{ "margin-top": `-${_ctx.finalRefresherThreshold + _ctx.refresherThresholdUpdateTag}px`, "background": _ctx.refresherBackground, "opacity": _ctx.isTouchmoving ? 1 : 0 }])
                          },
                          [
                            vue.createElementVNode(
                              "view",
                              {
                                class: "zp-custom-refresher-container",
                                style: vue.normalizeStyle([{ "height": `${_ctx.finalRefresherThreshold}px`, "background": _ctx.refresherBackground }])
                              },
                              [
                                _ctx.useRefresherStatusBarPlaceholder ? (vue.openBlock(), vue.createElementBlock(
                                  "view",
                                  {
                                    key: 0,
                                    class: "zp-custom-refresher-status-bar-placeholder",
                                    style: vue.normalizeStyle([{ "height": `${_ctx.statusBarHeight}px` }])
                                  },
                                  null,
                                  4
                                  /* STYLE */
                                )) : vue.createCommentVNode("v-if", true),
                                vue.createCommentVNode(" 下拉刷新view "),
                                vue.createElementVNode("view", { class: "zp-custom-refresher-slot-view" }, [
                                  !(_ctx.zSlots.refresherComplete && _ctx.refresherStatus === _ctx.R.Complete) && !(_ctx.zSlots.refresherF2 && _ctx.refresherStatus === _ctx.R.GoF2) ? vue.renderSlot(_ctx.$slots, "refresher", {
                                    key: 0,
                                    refresherStatus: _ctx.refresherStatus
                                  }, void 0, true) : vue.createCommentVNode("v-if", true)
                                ]),
                                _ctx.zSlots.refresherComplete && _ctx.refresherStatus === _ctx.R.Complete ? vue.renderSlot(_ctx.$slots, "refresherComplete", { key: 1 }, void 0, true) : _ctx.zSlots.refresherF2 && _ctx.refresherStatus === _ctx.R.GoF2 ? vue.renderSlot(_ctx.$slots, "refresherF2", { key: 2 }, void 0, true) : !_ctx.showCustomRefresher ? (vue.openBlock(), vue.createBlock(_component_z_paging_refresh, {
                                  key: 3,
                                  ref: "refresh",
                                  class: "zp-custom-refresher-refresh",
                                  style: vue.normalizeStyle([{ "height": `${_ctx.finalRefresherThreshold - _ctx.finalRefresherThresholdPlaceholder}px` }]),
                                  status: _ctx.refresherStatus,
                                  defaultThemeStyle: _ctx.finalRefresherThemeStyle,
                                  defaultText: _ctx.finalRefresherDefaultText,
                                  pullingText: _ctx.finalRefresherPullingText,
                                  refreshingText: _ctx.finalRefresherRefreshingText,
                                  completeText: _ctx.finalRefresherCompleteText,
                                  goF2Text: _ctx.finalRefresherGoF2Text,
                                  defaultImg: _ctx.refresherDefaultImg,
                                  pullingImg: _ctx.refresherPullingImg,
                                  refreshingImg: _ctx.refresherRefreshingImg,
                                  completeImg: _ctx.refresherCompleteImg,
                                  refreshingAnimated: _ctx.refresherRefreshingAnimated,
                                  showUpdateTime: _ctx.showRefresherUpdateTime,
                                  updateTimeKey: _ctx.refresherUpdateTimeKey,
                                  updateTimeTextMap: _ctx.finalRefresherUpdateTimeTextMap,
                                  imgStyle: _ctx.refresherImgStyle,
                                  titleStyle: _ctx.refresherTitleStyle,
                                  updateTimeStyle: _ctx.refresherUpdateTimeStyle,
                                  unit: _ctx.unit
                                }, null, 8, ["style", "status", "defaultThemeStyle", "defaultText", "pullingText", "refreshingText", "completeText", "goF2Text", "defaultImg", "pullingImg", "refreshingImg", "completeImg", "refreshingAnimated", "showUpdateTime", "updateTimeKey", "updateTimeTextMap", "imgStyle", "titleStyle", "updateTimeStyle", "unit"])) : vue.createCommentVNode("v-if", true)
                              ],
                              4
                              /* STYLE */
                            )
                          ],
                          4
                          /* STYLE */
                        )) : vue.createCommentVNode("v-if", true),
                        vue.createElementVNode(
                          "view",
                          {
                            class: "zp-paging-container",
                            style: vue.normalizeStyle([{ justifyContent: _ctx.useChatRecordMode ? "flex-end" : "flex-start" }])
                          },
                          [
                            vue.createCommentVNode(" 全屏Loading "),
                            _ctx.showLoading && _ctx.zSlots.loading && !_ctx.loadingFullFixed ? vue.renderSlot(_ctx.$slots, "loading", { key: 0 }, void 0, true) : vue.createCommentVNode("v-if", true),
                            vue.createCommentVNode(" 主体内容 "),
                            vue.createElementVNode(
                              "view",
                              {
                                class: "zp-paging-container-content",
                                style: vue.normalizeStyle([_ctx.finalPlaceholderTopHeightStyle, _ctx.finalPagingContentStyle])
                              },
                              [
                                vue.createCommentVNode(" 虚拟列表顶部占位view "),
                                _ctx.useVirtualList ? (vue.openBlock(), vue.createElementBlock(
                                  "view",
                                  {
                                    key: 0,
                                    class: "zp-virtual-placeholder",
                                    style: vue.normalizeStyle([{ height: _ctx.virtualPlaceholderTopHeight + "px" }])
                                  },
                                  null,
                                  4
                                  /* STYLE */
                                )) : vue.createCommentVNode("v-if", true),
                                vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
                                vue.createCommentVNode(" 内置列表&虚拟列表 "),
                                _ctx.finalUseInnerList ? (vue.openBlock(), vue.createElementBlock(
                                  vue.Fragment,
                                  { key: 1 },
                                  [
                                    vue.renderSlot(_ctx.$slots, "header", {}, void 0, true),
                                    vue.createElementVNode(
                                      "view",
                                      {
                                        class: "zp-list-container",
                                        style: vue.normalizeStyle([_ctx.innerListStyle])
                                      },
                                      [
                                        _ctx.finalUseVirtualList ? (vue.openBlock(true), vue.createElementBlock(
                                          vue.Fragment,
                                          { key: 0 },
                                          vue.renderList(_ctx.virtualList, (item, index2) => {
                                            return vue.openBlock(), vue.createElementBlock("view", {
                                              class: "zp-list-cell",
                                              style: vue.normalizeStyle([_ctx.innerCellStyle]),
                                              id: `${_ctx.fianlVirtualCellIdPrefix}-${item[_ctx.virtualCellIndexKey]}`,
                                              key: item["zp_unique_index"],
                                              onClick: ($event) => _ctx._innerCellClick(item, _ctx.virtualTopRangeIndex + index2)
                                            }, [
                                              _ctx.useCompatibilityMode ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, "使用兼容模式请在组件源码z-paging.vue第103行中注释这一行，并打开下面一行注释")) : (vue.openBlock(), vue.createElementBlock(
                                                vue.Fragment,
                                                { key: 1 },
                                                [
                                                  vue.createCommentVNode(' <zp-public-virtual-cell v-if="useCompatibilityMode" :extraData="extraData" :item="item" :index="virtualTopRangeIndex+index" /> '),
                                                  vue.renderSlot(_ctx.$slots, "cell", {
                                                    item,
                                                    index: _ctx.virtualTopRangeIndex + index2
                                                  }, void 0, true)
                                                ],
                                                2112
                                                /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
                                              ))
                                            ], 12, ["id", "onClick"]);
                                          }),
                                          128
                                          /* KEYED_FRAGMENT */
                                        )) : (vue.openBlock(true), vue.createElementBlock(
                                          vue.Fragment,
                                          { key: 1 },
                                          vue.renderList(_ctx.realTotalData, (item, index2) => {
                                            return vue.openBlock(), vue.createElementBlock("view", {
                                              class: "zp-list-cell",
                                              key: index2,
                                              onClick: ($event) => _ctx._innerCellClick(item, index2)
                                            }, [
                                              vue.renderSlot(_ctx.$slots, "cell", {
                                                item,
                                                index: index2
                                              }, void 0, true)
                                            ], 8, ["onClick"]);
                                          }),
                                          128
                                          /* KEYED_FRAGMENT */
                                        ))
                                      ],
                                      4
                                      /* STYLE */
                                    ),
                                    vue.renderSlot(_ctx.$slots, "footer", {}, void 0, true)
                                  ],
                                  64
                                  /* STABLE_FRAGMENT */
                                )) : vue.createCommentVNode("v-if", true),
                                vue.createCommentVNode(" 聊天记录模式加载更多loading "),
                                _ctx.useChatRecordMode && _ctx.realTotalData.length >= _ctx.defaultPageSize && (_ctx.loadingStatus !== _ctx.M.NoMore || _ctx.zSlots.chatNoMore) && (_ctx.realTotalData.length || _ctx.showChatLoadingWhenReload && _ctx.showLoading) && !_ctx.isFirstPageAndNoMore ? (vue.openBlock(), vue.createElementBlock(
                                  "view",
                                  {
                                    key: 2,
                                    style: vue.normalizeStyle([_ctx.chatRecordRotateStyle])
                                  },
                                  [
                                    _ctx.loadingStatus === _ctx.M.NoMore && _ctx.zSlots.chatNoMore ? vue.renderSlot(_ctx.$slots, "chatNoMore", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createElementBlock(
                                      vue.Fragment,
                                      { key: 1 },
                                      [
                                        _ctx.zSlots.chatLoading ? vue.renderSlot(_ctx.$slots, "chatLoading", {
                                          key: 0,
                                          loadingMoreStatus: _ctx.loadingStatus
                                        }, void 0, true) : (vue.openBlock(), vue.createBlock(_component_z_paging_load_more, {
                                          key: 1,
                                          onDoClick: _cache[2] || (_cache[2] = ($event) => _ctx._onLoadingMore("click")),
                                          zConfig: _ctx.zLoadMoreConfig
                                        }, null, 8, ["zConfig"]))
                                      ],
                                      64
                                      /* STABLE_FRAGMENT */
                                    ))
                                  ],
                                  4
                                  /* STYLE */
                                )) : vue.createCommentVNode("v-if", true),
                                vue.createCommentVNode(" 虚拟列表底部占位view "),
                                _ctx.useVirtualList ? (vue.openBlock(), vue.createElementBlock(
                                  "view",
                                  {
                                    key: 3,
                                    class: "zp-virtual-placeholder",
                                    style: vue.normalizeStyle([{ height: _ctx.virtualPlaceholderBottomHeight + "px" }])
                                  },
                                  null,
                                  4
                                  /* STYLE */
                                )) : vue.createCommentVNode("v-if", true),
                                vue.createCommentVNode(" 上拉加载更多view "),
                                _ctx.showLoadingMoreDefault ? vue.renderSlot(_ctx.$slots, "loadingMoreDefault", { key: 4 }, void 0, true) : _ctx.showLoadingMoreLoading ? vue.renderSlot(_ctx.$slots, "loadingMoreLoading", { key: 5 }, void 0, true) : _ctx.showLoadingMoreNoMore ? vue.renderSlot(_ctx.$slots, "loadingMoreNoMore", { key: 6 }, void 0, true) : _ctx.showLoadingMoreFail ? vue.renderSlot(_ctx.$slots, "loadingMoreFail", { key: 7 }, void 0, true) : _ctx.showLoadingMoreCustom ? (vue.openBlock(), vue.createBlock(_component_z_paging_load_more, {
                                  key: 8,
                                  onDoClick: _cache[3] || (_cache[3] = ($event) => _ctx._onLoadingMore("click")),
                                  zConfig: _ctx.zLoadMoreConfig
                                }, null, 8, ["zConfig"])) : vue.createCommentVNode("v-if", true),
                                _ctx.safeAreaInsetBottom && _ctx.useSafeAreaPlaceholder && !_ctx.useChatRecordMode ? (vue.openBlock(), vue.createElementBlock(
                                  "view",
                                  {
                                    key: 9,
                                    class: "zp-safe-area-placeholder",
                                    style: vue.normalizeStyle([{ height: _ctx.safeAreaBottom + "px" }])
                                  },
                                  null,
                                  4
                                  /* STYLE */
                                )) : vue.createCommentVNode("v-if", true)
                              ],
                              4
                              /* STYLE */
                            ),
                            vue.createCommentVNode(" 空数据图 "),
                            _ctx.showEmpty ? (vue.openBlock(), vue.createElementBlock(
                              "view",
                              {
                                key: 1,
                                class: vue.normalizeClass({ "zp-empty-view": true, "zp-empty-view-center": _ctx.emptyViewCenter }),
                                style: vue.normalizeStyle([_ctx.emptyViewSuperStyle, _ctx.chatRecordRotateStyle])
                              },
                              [
                                _ctx.zSlots.empty ? vue.renderSlot(_ctx.$slots, "empty", {
                                  key: 0,
                                  isLoadFailed: _ctx.isLoadFailed
                                }, void 0, true) : (vue.openBlock(), vue.createBlock(_component_z_paging_empty_view, {
                                  key: 1,
                                  emptyViewImg: _ctx.finalEmptyViewImg,
                                  emptyViewText: _ctx.finalEmptyViewText,
                                  showEmptyViewReload: _ctx.finalShowEmptyViewReload,
                                  emptyViewReloadText: _ctx.finalEmptyViewReloadText,
                                  isLoadFailed: _ctx.isLoadFailed,
                                  emptyViewStyle: _ctx.emptyViewStyle,
                                  emptyViewTitleStyle: _ctx.emptyViewTitleStyle,
                                  emptyViewImgStyle: _ctx.emptyViewImgStyle,
                                  emptyViewReloadStyle: _ctx.emptyViewReloadStyle,
                                  emptyViewZIndex: _ctx.emptyViewZIndex,
                                  emptyViewFixed: _ctx.emptyViewFixed,
                                  unit: _ctx.unit,
                                  onReload: _ctx._emptyViewReload,
                                  onViewClick: _ctx._emptyViewClick
                                }, null, 8, ["emptyViewImg", "emptyViewText", "showEmptyViewReload", "emptyViewReloadText", "isLoadFailed", "emptyViewStyle", "emptyViewTitleStyle", "emptyViewImgStyle", "emptyViewReloadStyle", "emptyViewZIndex", "emptyViewFixed", "unit", "onReload", "onViewClick"]))
                              ],
                              6
                              /* CLASS, STYLE */
                            )) : vue.createCommentVNode("v-if", true)
                          ],
                          4
                          /* STYLE */
                        )
                      ], 12, ["change:prop", "prop", "data-refresherThreshold", "data-refresherF2Enabled", "data-refresherF2Threshold", "data-isIos", "data-loading", "data-useChatRecordMode", "data-refresherEnabled", "data-useCustomRefresher", "data-pageScrollTop", "data-scrollTop", "data-refresherMaxAngle", "data-refresherNoTransform", "data-refresherAecc", "data-usePageScroll", "data-watchTouchDirectionChange", "data-oldIsTouchmoving", "data-refresherOutRate", "data-refresherPullRate", "data-hasTouchmove", "change:renderPropIsIosAndH5", "renderPropIsIosAndH5"])
                    ],
                    32
                    /* NEED_HYDRATION */
                  )
                ], 46, ["scroll-top", "scroll-x", "scroll-y", "enable-back-to-top", "show-scrollbar", "scroll-with-animation", "scroll-into-view", "lower-threshold", "refresher-enabled", "refresher-threshold", "refresher-default-style", "refresher-background", "refresher-triggered"])
              ],
              6
              /* CLASS, STYLE */
            ),
            _ctx.zSlots.right ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 1,
                class: vue.normalizeClass({ "zp-page-right": true, "zp-absoulte zp-right": _ctx.finalIsOldWebView })
              },
              [
                vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
              ],
              2
              /* CLASS */
            )) : vue.createCommentVNode("v-if", true)
          ],
          6
          /* CLASS, STYLE */
        ),
        vue.createCommentVNode(" 底部固定的slot "),
        vue.createElementVNode(
          "view",
          {
            class: "zp-page-bottom-container",
            style: vue.normalizeStyle({ "background": _ctx.bottomBgColor })
          },
          [
            !_ctx.usePageScroll && _ctx.zSlots.bottom ? vue.renderSlot(_ctx.$slots, "bottom", { key: 0 }, void 0, true) : _ctx.usePageScroll && _ctx.zSlots.bottom ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 1,
                class: "zp-page-bottom",
                onTouchmove: _cache[17] || (_cache[17] = vue.withModifiers(() => {
                }, ["stop", "prevent"])),
                style: vue.normalizeStyle([{ "bottom": `${_ctx.windowBottom}px` }])
              },
              [
                vue.renderSlot(_ctx.$slots, "bottom", {}, void 0, true)
              ],
              36
              /* STYLE, NEED_HYDRATION */
            )) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" 聊天记录模式底部占位 "),
            _ctx.useChatRecordMode && _ctx.autoAdjustPositionWhenChat ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 2 },
              [
                vue.createElementVNode(
                  "view",
                  {
                    style: vue.normalizeStyle([{ height: _ctx.chatRecordModeSafeAreaBottom + "px" }])
                  },
                  null,
                  4
                  /* STYLE */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    class: "zp-page-bottom-keyboard-placeholder-animate",
                    style: vue.normalizeStyle([{ height: _ctx.keyboardHeight + "px" }])
                  },
                  null,
                  4
                  /* STYLE */
                )
              ],
              64
              /* STABLE_FRAGMENT */
            )) : vue.createCommentVNode("v-if", true)
          ],
          4
          /* STYLE */
        ),
        vue.createCommentVNode(" 点击返回顶部view "),
        _ctx.showBackToTopClass ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 3,
            class: vue.normalizeClass(_ctx.finalBackToTopClass),
            style: vue.normalizeStyle([_ctx.finalBackToTopStyle]),
            onClick: _cache[18] || (_cache[18] = vue.withModifiers((...args) => _ctx._backToTopClick && _ctx._backToTopClick(...args), ["stop"]))
          },
          [
            _ctx.zSlots.backToTop ? vue.renderSlot(_ctx.$slots, "backToTop", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createElementBlock("image", {
              key: 1,
              class: vue.normalizeClass(["zp-back-to-top-img", { "zp-back-to-top-img-inversion": _ctx.useChatRecordMode && !_ctx.backToTopImg.length }]),
              src: _ctx.backToTopImg.length ? _ctx.backToTopImg : _ctx.base64BackToTop
            }, null, 10, ["src"]))
          ],
          6
          /* CLASS, STYLE */
        )) : vue.createCommentVNode("v-if", true),
        vue.createCommentVNode(" 全屏Loading(铺满z-paging并固定) "),
        _ctx.showLoading && _ctx.zSlots.loading && _ctx.loadingFullFixed ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 4,
          class: "zp-loading-fixed"
        }, [
          vue.renderSlot(_ctx.$slots, "loading", {}, void 0, true)
        ])) : vue.createCommentVNode("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  if (typeof block0 === "function")
    block0(_sfc_main$i);
  if (typeof block1 === "function")
    block1(_sfc_main$i);
  const __easycom_5$1 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$7], ["__scopeId", "data-v-1aa372d7"], ["__file", "D:/uniapp/news-forum/uni_modules/z-paging/components/z-paging/z-paging.vue"]]);
  const BASE_URL = "http://192.168.64.1:8080/";
  function request(config2 = {}) {
    let {
      url: url2,
      data = {},
      method = "GET",
      header = {}
    } = config2;
    url2 = BASE_URL + url2;
    return new Promise((resolve, reject) => {
      uni.request({
        url: url2,
        data,
        method,
        header,
        success: (res) => {
          resolve(res.data);
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  }
  function apiQueryList(pageNo, key) {
    return request({
      url: "essay/getEssayIndex?page=" + pageNo + "&key=" + key
    });
  }
  function apiQueryHandUpList(pageNo) {
    return request({
      url: "essay/getEssayList?page=" + pageNo
    });
  }
  function apiGetEssay(essayId) {
    return request({
      url: "essay/getEssay?essayId=" + essayId
    });
  }
  function apiGetComment(essayId, pageNo) {
    return request({
      url: "comment/getComment?essayId=" + essayId + "&pageNo=" + pageNo + "&userId=" + uni.getStorageSync("userId")
    });
  }
  function apiIsToEssayLikes(essayId) {
    return request({
      url: "likes/isLikesToEssay?essayId=" + essayId + "&userId=" + uni.getStorageSync("userId")
    });
  }
  function apiAddComment(data = {}) {
    return request({
      url: "comment/addComment",
      data,
      method: "POST"
    });
  }
  function apiLikesEssay(data = {}) {
    return request({
      url: "likes/likes",
      data,
      method: "POST"
    });
  }
  function apiGetUser(userId) {
    return request({
      url: "user/getUser?userId=" + userId
    });
  }
  function apiGetMyInfo(data = {}) {
    return request({
      url: "user/getMyInfo",
      data,
      method: "POST"
    });
  }
  const _sfc_main$h = {
    __name: "index",
    setup(__props) {
      const paging = vue.ref();
      const list = vue.ref([]);
      const swiper = vue.ref([]);
      const queryList = async (pageNo, pageSize) => {
        let res = await apiQueryList(pageNo, "");
        swiper.value = res.list.slice(0, 3);
        paging.value.complete(res.list);
      };
      function toDetail(essayId) {
        uni.navigateTo({
          url: "/pages/detail/detail?essayId=" + essayId
        });
      }
      onShow(() => {
        queryList(1);
      });
      return (_ctx, _cache) => {
        const _component_custom_nav_bar = resolveEasycom(vue.resolveDynamicComponent("custom-nav-bar"), __easycom_0$5);
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$6);
        const _component_custom_refresher = resolveEasycom(vue.resolveDynamicComponent("custom-refresher"), __easycom_1$2);
        const _component_custom_nomore = resolveEasycom(vue.resolveDynamicComponent("custom-nomore"), __easycom_2$2);
        const _component_uni_list_item = resolveEasycom(vue.resolveDynamicComponent("uni-list-item"), __easycom_3);
        const _component_uni_list = resolveEasycom(vue.resolveDynamicComponent("uni-list"), __easycom_4);
        const _component_z_paging = resolveEasycom(vue.resolveDynamicComponent("z-paging"), __easycom_5$1);
        return vue.openBlock(), vue.createBlock(_component_z_paging, {
          ref_key: "paging",
          ref: paging,
          modelValue: list.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => list.value = $event),
          onQuery: queryList,
          class: "homeLayout"
        }, {
          top: vue.withCtx(() => [
            vue.createVNode(_component_custom_nav_bar)
          ]),
          refresher: vue.withCtx(({ refresherStatus }) => [
            vue.createVNode(_component_custom_refresher, { status: refresherStatus }, null, 8, ["status"])
          ]),
          loadingMoreNoMore: vue.withCtx(() => [
            vue.createCommentVNode(" 此处的custom-nomore为demo中自定义的组件，非z-paging的内置组件，请在实际项目中自行创建。这里插入什么view，没有更多数据就显示什么view "),
            vue.createVNode(_component_custom_nomore)
          ]),
          default: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "banner" }, [
              vue.createElementVNode("swiper", {
                "indicator-dots": "",
                "indicator-color": "rgab(255,255,255,0.5)",
                "indicator-active-color": "#fff",
                autoplay: "",
                circular: ""
              }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(swiper.value, (item) => {
                    return vue.openBlock(), vue.createElementBlock("swiper-item", null, [
                      vue.createElementVNode("image", {
                        src: item.essayImgs[0],
                        mode: "aspectFill",
                        onClick: ($event) => toDetail(item.essayId)
                      }, null, 8, ["src", "onClick"])
                    ]);
                  }),
                  256
                  /* UNKEYED_FRAGMENT */
                ))
              ])
            ]),
            vue.createElementVNode("view", { class: "notice" }, [
              vue.createElementVNode("view", { class: "left" }, [
                vue.createVNode(_component_uni_icons, {
                  type: "sound-filled",
                  size: "20",
                  color: "#1296db"
                }),
                vue.createElementVNode("text", { class: "text" }, "公告")
              ]),
              vue.createElementVNode("view", { class: "center" }, [
                vue.createElementVNode("swiper", {
                  vertical: "",
                  autoplay: "",
                  interval: "1500",
                  duration: "300",
                  circular: ""
                }, [
                  (vue.openBlock(), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(3, (item) => {
                      return vue.createElementVNode("swiper-item", null, " 此版本为测试版，含有许多bug ");
                    }),
                    64
                    /* STABLE_FRAGMENT */
                  ))
                ])
              ]),
              vue.createElementVNode("view", { class: "rigth" }, [
                vue.createVNode(_component_uni_icons, {
                  type: "right",
                  size: "16"
                })
              ])
            ]),
            vue.createElementVNode("view", { class: "list" }, [
              vue.createVNode(_component_uni_list, null, {
                default: vue.withCtx(() => [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(list.value, (item, index2) => {
                      return vue.openBlock(), vue.createBlock(_component_uni_list_item, {
                        direction: "column",
                        key: index2,
                        to: "/pages/detail/detail?essayId=" + item.essayId
                      }, {
                        header: vue.withCtx(() => [
                          vue.createElementVNode("view", { class: "header" }, [
                            vue.createElementVNode("image", {
                              class: "slot-image",
                              src: item.essayAuthorImg,
                              mode: "aspectFill"
                            }, null, 8, ["src"]),
                            vue.createElementVNode(
                              "text",
                              { class: "name" },
                              vue.toDisplayString(item.essayAuthorName),
                              1
                              /* TEXT */
                            )
                          ])
                        ]),
                        body: vue.withCtx(() => [
                          vue.createElementVNode(
                            "text",
                            { class: "body-1" },
                            vue.toDisplayString(item.essayTitle),
                            1
                            /* TEXT */
                          ),
                          vue.createElementVNode(
                            "text",
                            { class: "body-2" },
                            vue.toDisplayString(item.essayContent),
                            1
                            /* TEXT */
                          )
                        ]),
                        footer: vue.withCtx(() => [
                          vue.createElementVNode("view", { class: "footer-1" }, [
                            (vue.openBlock(true), vue.createElementBlock(
                              vue.Fragment,
                              null,
                              vue.renderList(item.essayImgs, (i) => {
                                return vue.openBlock(), vue.createElementBlock("image", {
                                  class: "footer-image",
                                  src: i,
                                  mode: "aspectFill"
                                }, null, 8, ["src"]);
                              }),
                              256
                              /* UNKEYED_FRAGMENT */
                            ))
                          ]),
                          vue.createElementVNode("view", { class: "footer-2" }, [
                            vue.createVNode(_component_uni_icons, {
                              class: "icons-1",
                              type: "chat",
                              size: "20"
                            }),
                            vue.createElementVNode(
                              "view",
                              { class: "likesText" },
                              vue.toDisplayString(item.essayReviews),
                              1
                              /* TEXT */
                            ),
                            vue.createVNode(_component_uni_icons, {
                              class: "icons-1",
                              type: "hand-up",
                              size: "20"
                            }),
                            vue.createElementVNode(
                              "view",
                              { class: "likesText" },
                              vue.toDisplayString(item.essayLikes),
                              1
                              /* TEXT */
                            )
                          ])
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["to"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                _: 1
                /* STABLE */
              })
            ])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]);
      };
    }
  };
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/uniapp/news-forum/pages/index/index.vue"]]);
  const _sfc_main$g = {
    __name: "hand-up",
    setup(__props) {
      const essayList = vue.ref([]);
      const paging = vue.ref();
      const queryList = async (pageNo, pageSize) => {
        let res = await apiQueryHandUpList(pageNo);
        paging.value.complete(res.list);
      };
      return (_ctx, _cache) => {
        const _component_custom_nav_bar = resolveEasycom(vue.resolveDynamicComponent("custom-nav-bar"), __easycom_0$5);
        const _component_custom_refresher = resolveEasycom(vue.resolveDynamicComponent("custom-refresher"), __easycom_1$2);
        const _component_custom_nomore = resolveEasycom(vue.resolveDynamicComponent("custom-nomore"), __easycom_2$2);
        const _component_uni_list_item = resolveEasycom(vue.resolveDynamicComponent("uni-list-item"), __easycom_3);
        const _component_uni_list = resolveEasycom(vue.resolveDynamicComponent("uni-list"), __easycom_4);
        const _component_z_paging = resolveEasycom(vue.resolveDynamicComponent("z-paging"), __easycom_5$1);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_z_paging, {
            ref_key: "paging",
            ref: paging,
            modelValue: essayList.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => essayList.value = $event),
            onQuery: queryList,
            class: "list"
          }, {
            top: vue.withCtx(() => [
              vue.createVNode(_component_custom_nav_bar, { title: "热点" })
            ]),
            refresher: vue.withCtx(({ refresherStatus }) => [
              vue.createVNode(_component_custom_refresher, { status: refresherStatus }, null, 8, ["status"])
            ]),
            loadingMoreNoMore: vue.withCtx(() => [
              vue.createCommentVNode(" 此处的custom-nomore为demo中自定义的组件，非z-paging的内置组件，请在实际项目中自行创建。这里插入什么view，没有更多数据就显示什么view "),
              vue.createVNode(_component_custom_nomore)
            ]),
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_list, null, {
                default: vue.withCtx(() => [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(essayList.value, (item, index2) => {
                      return vue.openBlock(), vue.createBlock(_component_uni_list_item, {
                        direction: "row",
                        key: index2,
                        to: "/pages/detail/detail?essayId=" + item.essayId
                      }, {
                        body: vue.withCtx(() => [
                          vue.createElementVNode("view", { class: "uni-list-box uni-content" }, [
                            vue.createElementVNode(
                              "view",
                              { class: "uni-title uni-ellipsis-2" },
                              vue.toDisplayString(item.essayTitle),
                              1
                              /* TEXT */
                            ),
                            vue.createElementVNode("view", { class: "uni-note" }, [
                              vue.createElementVNode(
                                "text",
                                null,
                                vue.toDisplayString(item.essayAuthorName),
                                1
                                /* TEXT */
                              ),
                              vue.createElementVNode(
                                "text",
                                null,
                                vue.toDisplayString(item.essayTime),
                                1
                                /* TEXT */
                              )
                            ])
                          ])
                        ]),
                        footer: vue.withCtx(() => [
                          vue.createElementVNode("view", {
                            class: "uni-thumb",
                            style: { "margin": "0" }
                          }, [
                            vue.createCommentVNode(" 当前判断长度只为简单判断类型，实际业务中，根据逻辑直接渲染即可 "),
                            vue.createElementVNode("image", {
                              class: "footerImage",
                              src: item.essayImgs,
                              mode: "aspectFill"
                            }, null, 8, ["src"])
                          ])
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["to"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]);
      };
    }
  };
  const PagesHandUpHandUp = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__file", "D:/uniapp/news-forum/pages/hand-up/hand-up.vue"]]);
  const _sfc_main$f = {
    __name: "user",
    setup(__props) {
      const user = vue.ref({
        userName: "未登录",
        userImg: "../../static/tx.png",
        likes: 0,
        reviews: 0,
        essay: 0
      });
      const login = vue.ref(false);
      const toInfo = (key) => {
        formatAppLog("log", "at pages/user/user.vue:71", 111111);
        uni.navigateTo({
          url: "/pages/user/userInfo?key=" + key
        });
      };
      const out = () => {
        uni.removeStorageSync("userId");
        uni.removeStorageSync("userImg");
        uni.removeStorageSync("userName");
        uni.reLaunch({
          url: "/pages/user/user"
        });
      };
      function toLogin() {
        if (uni.getStorageSync("userId") == "" || uni.getStorageSync("userId") == null) {
          uni.reLaunch({
            url: "/pages/login/login"
          });
        } else {
          formatAppLog("log", "at pages/user/user.vue:96", uni.getStorageSync("userId"));
          return;
        }
      }
      onShow(async () => {
        const userId = uni.getStorageSync("userId");
        formatAppLog("log", "at pages/user/user.vue:106", "获取到的 userId:", userId);
        if (userId != null && userId != "") {
          login.value = true;
          let res = await apiGetUser(userId);
          formatAppLog("log", "at pages/user/user.vue:112", res.data);
          user.value = res.data;
          uni.setStorageSync("userImg", user.value.userImg);
          uni.setStorageSync("userName", user.value.userName);
          formatAppLog("log", "at pages/user/user.vue:117", user.value);
        } else {
          uni.navigateTo({
            url: "/pages/login/login"
          });
        }
      });
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$6);
        return vue.openBlock(), vue.createElementBlock("view", { class: "userLayout" }, [
          login.value ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "button",
            onClick: out
          }, [
            vue.createElementVNode("view", { class: "text" }, "退出登录"),
            vue.createVNode(_component_uni_icons, {
              type: "forward",
              size: "25"
            })
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", { class: "userinfo" }, [
            vue.createElementVNode("view", { class: "avatar" }, [
              vue.createElementVNode("image", {
                src: user.value.userImg,
                class: "userImg",
                mode: "aspectFill"
              }, null, 8, ["src"])
            ]),
            vue.createElementVNode(
              "view",
              {
                class: "name",
                onClick: _cache[0] || (_cache[0] = ($event) => toLogin())
              },
              vue.toDisplayString(user.value.userName),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "menu" }, [
            vue.createElementVNode("view", { class: "list" }, [
              vue.createElementVNode("view", {
                class: "row",
                onClick: _cache[1] || (_cache[1] = ($event) => toInfo("essay"))
              }, [
                vue.createElementVNode("view", { class: "left" }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "compose",
                    size: "20",
                    color: "#1296db"
                  }),
                  vue.createElementVNode("view", { class: "text" }, "我的帖子")
                ]),
                vue.createElementVNode("view", { class: "right" }, [
                  vue.createElementVNode(
                    "view",
                    { class: "text" },
                    vue.toDisplayString(user.value.essay),
                    1
                    /* TEXT */
                  ),
                  vue.createVNode(_component_uni_icons, {
                    type: "right",
                    size: "20"
                  })
                ])
              ]),
              vue.createElementVNode("view", {
                class: "row",
                onClick: _cache[2] || (_cache[2] = ($event) => toInfo("comment"))
              }, [
                vue.createElementVNode("view", { class: "left" }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "chat",
                    size: "20",
                    color: "#1296db"
                  }),
                  vue.createElementVNode("view", { class: "text" }, "我的评论")
                ]),
                vue.createElementVNode("view", { class: "right" }, [
                  vue.createElementVNode(
                    "view",
                    { class: "text" },
                    vue.toDisplayString(user.value.reviews),
                    1
                    /* TEXT */
                  ),
                  vue.createVNode(_component_uni_icons, {
                    type: "right",
                    size: "20"
                  })
                ])
              ]),
              vue.createElementVNode("view", {
                class: "row",
                onClick: _cache[3] || (_cache[3] = ($event) => toInfo("likes"))
              }, [
                vue.createElementVNode("view", { class: "left" }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "hand-up",
                    size: "20",
                    color: "#1296db"
                  }),
                  vue.createElementVNode("view", { class: "text" }, "我的点赞")
                ]),
                vue.createElementVNode("view", { class: "right" }, [
                  vue.createElementVNode(
                    "view",
                    { class: "text" },
                    vue.toDisplayString(user.value.likes),
                    1
                    /* TEXT */
                  ),
                  vue.createVNode(_component_uni_icons, {
                    type: "right",
                    size: "20"
                  })
                ])
              ])
            ])
          ])
        ]);
      };
    }
  };
  const PagesUserUser = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-0f7520f0"], ["__file", "D:/uniapp/news-forum/pages/user/user.vue"]]);
  const popup = {
    data() {
      return {};
    },
    created() {
      this.popup = this.getParent();
    },
    methods: {
      /**
       * 获取父元素实例
       */
      getParent(name = "uniPopup") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  const _sfc_main$e = {
    name: "uniPopupMessage",
    mixins: [popup],
    props: {
      /**
       * 主题 success/warning/info/error	  默认 success
       */
      type: {
        type: String,
        default: "success"
      },
      /**
       * 消息文字
       */
      message: {
        type: String,
        default: ""
      },
      /**
       * 显示时间，设置为 0 则不会自动关闭
       */
      duration: {
        type: Number,
        default: 3e3
      },
      maskShow: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {};
    },
    created() {
      this.popup.maskShow = this.maskShow;
      this.popup.messageChild = this;
    },
    methods: {
      timerClose() {
        if (this.duration === 0)
          return;
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.popup.close();
        }, this.duration);
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-popup-message" }, [
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["uni-popup-message__box fixforpc-width", "uni-popup__" + $props.type])
        },
        [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createElementVNode(
              "text",
              {
                class: vue.normalizeClass(["uni-popup-message-text", "uni-popup__" + $props.type + "-text"])
              },
              vue.toDisplayString($props.message),
              3
              /* TEXT, CLASS */
            )
          ], true)
        ],
        2
        /* CLASS */
      )
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$6], ["__scopeId", "data-v-a4566996"], ["__file", "D:/uniapp/news-forum/uni_modules/uni-popup/components/uni-popup-message/uni-popup-message.vue"]]);
  class MPAnimation {
    constructor(options, _this) {
      this.options = options;
      this.animation = uni.createAnimation({
        ...options
      });
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config2 = {}) {
      let ref2 = this.$.$refs["ani"].ref;
      if (!ref2)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref2, {
          styles,
          ...config2
        }, (res) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config: config2
        } = obj;
        this._animateRun(styles, config2).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === "function" && fn();
        this.isEnd = true;
      }
    }
    step(config2 = {}) {
      this.animation.step(config2);
      return this;
    }
    run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(() => {
        typeof fn === "function" && fn();
      }, this.$.durationTime);
    }
  }
  const animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  const animateTypes2 = ["opacity", "backgroundColor"];
  const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this.animation[type](...args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  const _sfc_main$d = {
    name: "uniTransition",
    emits: ["click", "change"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      modeClass: {
        type: [Array, String],
        default() {
          return "fade";
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      styles: {
        type: Object,
        default() {
          return {};
        }
      },
      customClass: {
        type: String,
        default: ""
      },
      onceRender: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      // 生成样式数据
      stylesObject() {
        let styles = {
          ...this.styles,
          "transition-duration": this.duration / 1e3 + "s"
        };
        let transform = "";
        for (let i in styles) {
          let line = this.toLine(i);
          transform += line + ":" + styles[i] + ";";
        }
        return transform;
      },
      // 初始化动画条件
      transformStyles() {
        return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: "ease",
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      /**
       *  ref 触发 初始化动画
       */
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      /**
       * 点击组件触发回调
       */
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      /**
       * ref 触发 动画分组
       * @param {Object} obj
       */
      step(obj, config2 = {}) {
        if (!this.animation)
          return;
        for (let i in obj) {
          try {
            if (typeof obj[i] === "object") {
              this.animation[i](...obj[i]);
            } else {
              this.animation[i](obj[i]);
            }
          } catch (e) {
            formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:148", `方法 ${i} 不存在`);
          }
        }
        this.animation.step(config2);
        return this;
      },
      /**
       *  ref 触发 执行动画
       */
      run(fn) {
        if (!this.animation)
          return;
        this.animation.run(fn);
      },
      // 开始过度动画
      open() {
        clearTimeout(this.timer);
        this.transform = "";
        this.isShow = true;
        let { opacity, transform } = this.styleInit(false);
        if (typeof opacity !== "undefined") {
          this.opacity = opacity;
        }
        this.transform = transform;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            this.animation.run();
            this.$emit("change", {
              detail: this.isShow
            });
          }, 20);
        });
      },
      // 关闭过度动画
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      // 处理动画开始前的默认样式
      styleInit(type) {
        let styles = {
          transform: ""
        };
        let buildStyle = (type2, mode) => {
          if (mode === "fade") {
            styles.opacity = this.animationType(type2)[mode];
          } else {
            styles.transform += this.animationType(type2)[mode] + " ";
          }
        };
        if (typeof this.modeClass === "string") {
          buildStyle(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildStyle(type, mode);
          });
        }
        return styles;
      },
      // 处理内置组合动画
      tranfromInit(type) {
        let buildTranfrom = (type2, mode) => {
          let aniNum = null;
          if (mode === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode]](aniNum);
        };
        if (typeof this.modeClass === "string") {
          buildTranfrom(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildTranfrom(type, mode);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 0 : 1,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      // 内置动画类型与实际动画对应字典
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      // 驼峰转中横线
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
      ref: "ani",
      animation: $data.animationData,
      class: vue.normalizeClass($props.customClass),
      style: vue.normalizeStyle($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 14, ["animation"])), [
      [vue.vShow, $data.isShow]
    ]);
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$5], ["__file", "D:/uniapp/news-forum/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
  const _sfc_main$c = {
    name: "uniPopup",
    components: {},
    emits: ["change", "maskClick"],
    props: {
      // 开启动画
      animation: {
        type: Boolean,
        default: true
      },
      // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
      // message: 消息提示 ; dialog : 对话框
      type: {
        type: String,
        default: "center"
      },
      // maskClick
      isMaskClick: {
        type: Boolean,
        default: null
      },
      // TODO 2 个版本后废弃属性 ，使用 isMaskClick
      maskClick: {
        type: Boolean,
        default: null
      },
      backgroundColor: {
        type: String,
        default: "none"
      },
      safeArea: {
        type: Boolean,
        default: true
      },
      maskBackgroundColor: {
        type: String,
        default: "rgba(0, 0, 0, 0.4)"
      },
      borderRadius: {
        type: String
      }
    },
    watch: {
      /**
       * 监听type类型
       */
      type: {
        handler: function(type) {
          if (!this.config[type])
            return;
          this[this.config[type]](true);
        },
        immediate: true
      },
      isDesktop: {
        handler: function(newVal) {
          if (!this.config[newVal])
            return;
          this[this.config[this.type]](true);
        },
        immediate: true
      },
      /**
       * 监听遮罩是否可点击
       * @param {Object} val
       */
      maskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      isMaskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      // H5 下禁止底部滚动
      showPopup(show) {
      }
    },
    data() {
      return {
        duration: 300,
        ani: [],
        showPopup: false,
        showTrans: false,
        popupWidth: 0,
        popupHeight: 0,
        config: {
          top: "top",
          bottom: "bottom",
          center: "center",
          left: "left",
          right: "right",
          message: "top",
          dialog: "center",
          share: "bottom"
        },
        maskClass: {
          position: "fixed",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        },
        transClass: {
          backgroundColor: "transparent",
          borderRadius: this.borderRadius || "0",
          position: "fixed",
          left: 0,
          right: 0
        },
        maskShow: true,
        mkclick: true,
        popupstyle: "top"
      };
    },
    computed: {
      getStyles() {
        let res = { backgroundColor: this.bg };
        if (this.borderRadius || "0") {
          res = Object.assign(res, { borderRadius: this.borderRadius });
        }
        return res;
      },
      isDesktop() {
        return this.popupWidth >= 500 && this.popupHeight >= 500;
      },
      bg() {
        if (this.backgroundColor === "" || this.backgroundColor === "none") {
          return "transparent";
        }
        return this.backgroundColor;
      }
    },
    mounted() {
      const fixSize = () => {
        const {
          windowWidth,
          windowHeight,
          windowTop,
          safeArea,
          screenHeight,
          safeAreaInsets
        } = uni.getSystemInfoSync();
        this.popupWidth = windowWidth;
        this.popupHeight = windowHeight + (windowTop || 0);
        if (safeArea && this.safeArea) {
          this.safeAreaInsets = safeAreaInsets.bottom;
        } else {
          this.safeAreaInsets = 0;
        }
      };
      fixSize();
    },
    // TODO vue3
    unmounted() {
      this.setH5Visible();
    },
    activated() {
      this.setH5Visible(!this.showPopup);
    },
    deactivated() {
      this.setH5Visible(true);
    },
    created() {
      if (this.isMaskClick === null && this.maskClick === null) {
        this.mkclick = true;
      } else {
        this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;
      }
      if (this.animation) {
        this.duration = 300;
      } else {
        this.duration = 0;
      }
      this.messageChild = null;
      this.clearPropagation = false;
      this.maskClass.backgroundColor = this.maskBackgroundColor;
    },
    methods: {
      setH5Visible(visible = true) {
      },
      /**
       * 公用方法，不显示遮罩层
       */
      closeMask() {
        this.maskShow = false;
      },
      /**
       * 公用方法，遮罩层禁止点击
       */
      disableMask() {
        this.mkclick = false;
      },
      // TODO nvue 取消冒泡
      clear(e) {
        e.stopPropagation();
        this.clearPropagation = true;
      },
      open(direction) {
        if (this.showPopup) {
          return;
        }
        let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
        if (!(direction && innerType.indexOf(direction) !== -1)) {
          direction = this.type;
        }
        if (!this.config[direction]) {
          formatAppLog("error", "at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:310", "缺少类型：", direction);
          return;
        }
        this[this.config[direction]]();
        this.$emit("change", {
          show: true,
          type: direction
        });
      },
      close(type) {
        this.showTrans = false;
        this.$emit("change", {
          show: false,
          type: this.type
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopup = false;
        }, 300);
      },
      // TODO 处理冒泡事件，头条的冒泡事件有问题 ，先这样兼容
      touchstart() {
        this.clearPropagation = false;
      },
      onTap() {
        if (this.clearPropagation) {
          this.clearPropagation = false;
          return;
        }
        this.$emit("maskClick");
        if (!this.mkclick)
          return;
        this.close();
      },
      /**
       * 顶部弹出样式处理
       */
      top(type) {
        this.popupstyle = this.isDesktop ? "fixforpc-top" : "top";
        this.ani = ["slide-top"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
        this.$nextTick(() => {
          this.showPoptrans();
          if (this.messageChild && this.type === "message") {
            this.messageChild.timerClose();
          }
        });
      },
      /**
       * 底部弹出样式处理
       */
      bottom(type) {
        this.popupstyle = "bottom";
        this.ani = ["slide-bottom"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          /* paddingBottom: this.safeAreaInsets + 'px', */
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0"
        };
        if (type)
          return;
        this.showPoptrans();
      },
      /**
       * 中间弹出样式处理
       */
      center(type) {
        this.popupstyle = "center";
        this.ani = ["zoom-out", "fade"];
        this.transClass = {
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: this.borderRadius || "0"
        };
        if (type)
          return;
        this.showPoptrans();
      },
      left(type) {
        this.popupstyle = "left";
        this.ani = ["slide-left"];
        this.transClass = {
          position: "fixed",
          left: 0,
          bottom: 0,
          top: 0,
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0",
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPoptrans();
      },
      right(type) {
        this.popupstyle = "right";
        this.ani = ["slide-right"];
        this.transClass = {
          position: "fixed",
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0",
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPoptrans();
      },
      showPoptrans() {
        this.$nextTick(() => {
          this.showPopup = true;
          this.showTrans = true;
        });
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_0$3);
    return $data.showPopup ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["uni-popup", [$data.popupstyle, $options.isDesktop ? "fixforpc-z-index" : ""]])
      },
      [
        vue.createElementVNode(
          "view",
          {
            onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args))
          },
          [
            $data.maskShow ? (vue.openBlock(), vue.createBlock(_component_uni_transition, {
              key: "1",
              name: "mask",
              "mode-class": "fade",
              styles: $data.maskClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, null, 8, ["styles", "duration", "show", "onClick"])) : vue.createCommentVNode("v-if", true),
            vue.createVNode(_component_uni_transition, {
              key: "2",
              "mode-class": $data.ani,
              name: "content",
              styles: $data.transClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["uni-popup__wrapper", [$data.popupstyle]]),
                    style: vue.normalizeStyle($options.getStyles),
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["mode-class", "styles", "duration", "show", "onClick"])
          ],
          32
          /* NEED_HYDRATION */
        )
      ],
      2
      /* CLASS */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$4], ["__scopeId", "data-v-4dd3c44b"], ["__file", "D:/uniapp/news-forum/uni_modules/uni-popup/components/uni-popup/uni-popup.vue"]]);
  const _sfc_main$b = {
    __name: "login",
    setup(__props) {
      const formData = vue.ref({
        user: "",
        password: ""
      });
      const msgType = vue.ref("success");
      const messageText = vue.ref("登录成功");
      const message = vue.ref(null);
      const isFormComplete = vue.computed(() => {
        return formData.value.user.trim() !== "" && formData.value.password.trim() !== "";
      });
      const toLogin = () => {
        uni.request({
          url: "http://192.168.64.1:8080/user/login",
          method: "POST",
          data: {
            "userId": formData.value.user,
            "userPassword": formData.value.password
          }
        }).then((res) => {
          if (res.data.code === 1) {
            uni.setStorageSync("userId", res.data.data.userId);
            if (message.value && typeof message.value.open === "function") {
              message.value.open();
            }
            uni.reLaunch({
              url: "/pages/user/user"
            });
          } else {
            formatAppLog("log", "at pages/login/login.vue:96", "登录失败");
            msgType.value = "error";
            messageText.value = "账号或密码错误，请重试";
            if (message.value && typeof message.value.open === "function") {
              message.value.open();
            }
          }
        }).catch((error2) => {
          formatAppLog("log", "at pages/login/login.vue:104", "登录失败");
          msgType.value = "error";
          messageText.value = "服务器失联了，请稍后再尝试";
          if (message.value && typeof message.value.open === "function") {
            message.value.open();
          }
        });
      };
      function reback() {
        uni.switchTab({
          url: "/pages/user/user"
        });
      }
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$6);
        const _component_uni_forms_item = vue.resolveComponent("uni-forms-item");
        const _component_uni_forms = vue.resolveComponent("uni-forms");
        const _component_uni_popup_message = resolveEasycom(vue.resolveDynamicComponent("uni-popup-message"), __easycom_1);
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_2$1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "layout" }, [
          vue.createVNode(_component_uni_icons, {
            class: "icon",
            type: "left",
            size: "28",
            onClick: reback
          }),
          vue.createElementVNode("view", { class: "text" }, "登录账号"),
          vue.createElementVNode("view", { class: "form" }, [
            vue.createVNode(_component_uni_forms, { modelValue: formData.value }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_uni_forms_item, {
                  label: "账号",
                  name: "user"
                }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("view", { class: "input" }, [
                      vue.withDirectives(vue.createElementVNode(
                        "input",
                        {
                          class: "add1",
                          type: "text",
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.value.user = $event),
                          placeholder: "请输入账号",
                          "placeholder-style": "text-align: center;"
                        },
                        null,
                        512
                        /* NEED_PATCH */
                      ), [
                        [vue.vModelText, formData.value.user]
                      ])
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createVNode(_component_uni_forms_item, {
                  label: "密码",
                  name: "password"
                }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("view", { class: "input" }, [
                      vue.withDirectives(vue.createElementVNode(
                        "input",
                        {
                          class: "add2",
                          type: "password",
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.value.password = $event),
                          placeholder: "请输入密码",
                          "placeholder-style": "text-align: center;"
                        },
                        null,
                        512
                        /* NEED_PATCH */
                      ), [
                        [vue.vModelText, formData.value.password]
                      ])
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          vue.createElementVNode("button", {
            class: vue.normalizeClass(["button-1", { active: isFormComplete.value }]),
            disabled: !isFormComplete.value,
            value: "登录",
            onClick: toLogin
          }, "登录", 10, ["disabled"]),
          vue.createCommentVNode(" 提示信息弹窗 "),
          vue.createVNode(
            _component_uni_popup,
            {
              ref_key: "message",
              ref: message,
              type: "center",
              class: "popup"
            },
            {
              default: vue.withCtx(() => [
                vue.createVNode(_component_uni_popup_message, {
                  type: msgType.value,
                  message: messageText.value,
                  duration: 2e3,
                  class: "popup-message-center"
                }, null, 8, ["type", "message"])
              ]),
              _: 1
              /* STABLE */
            },
            512
            /* NEED_PATCH */
          )
        ]);
      };
    }
  };
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-e4e4508d"], ["__file", "D:/uniapp/news-forum/pages/login/login.vue"]]);
  const _sfc_main$a = {
    __name: "comment-item",
    props: ["item"],
    setup(__props) {
      const commentPopup = vue.ref(null);
      const content = vue.ref("");
      const setFocus = vue.ref(Boolean);
      const props2 = __props;
      const toCommentId = vue.ref(0);
      const rootCommentId = vue.ref(0);
      const subCommentName = vue.ref("");
      const essayId = vue.ref("");
      const likeComment = (commentId, likes) => {
        if (likes) {
          formatAppLog("log", "at components/comment-item/comment-item.vue:85", `取消点赞，评论ID: ${commentId}`);
          props2.item.isCommentLikes = false;
          props2.item.commentLikeCount -= 1;
        } else {
          formatAppLog("log", "at components/comment-item/comment-item.vue:90", `点赞，评论ID: ${commentId}`);
          props2.item.isCommentLikes = true;
          props2.item.commentLikeCount += 1;
        }
        uni.request({
          url: "http://localhost:8080/likes/likes",
          method: "POST",
          data: {
            "userId": uni.getStorageSync("userId"),
            "toCommentId": commentId,
            "likes": props2.item.isCommentLikes
          }
        });
      };
      const add = async () => {
        if (uni.getStorageSync("userId") == "" || uni.getStorageSync("userId") == null) {
          uni.showToast({
            title: "未登录",
            icon: "error"
          });
          formatAppLog("log", "at components/comment-item/comment-item.vue:114", "未登录");
        } else {
          let data = {
            content: content.value,
            userId: uni.getStorageSync("userId"),
            essayId: essayId.value,
            toCommentId: toCommentId.value,
            userImg: uni.getStorageSync("userImg"),
            userName: uni.getStorageSync("userName"),
            rootCommentId: rootCommentId.value,
            subCommentName: subCommentName.value
          };
          let res = await apiAddComment(data);
          uni.showToast({
            title: "发布评论成功！"
          });
          formatAppLog("log", "at components/comment-item/comment-item.vue:131", res);
          content.value = "";
          commentPopup.value.close();
          location.reload();
        }
      };
      const toReply = (a, b, c2, d) => {
        formatAppLog("log", "at components/comment-item/comment-item.vue:140", a);
        setFocus.value = true;
        commentPopup.value.open();
        toCommentId.value = a;
        rootCommentId.value = b;
        subCommentName.value = c2;
        essayId.value = d;
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$6);
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_2$1);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { class: "commentItem" }, [
              vue.createElementVNode("view", { class: "outer" }, [
                vue.createElementVNode("view", { class: "avatar" }, [
                  vue.createElementVNode("image", {
                    class: "prc",
                    src: __props.item.userImg
                  }, null, 8, ["src"])
                ]),
                vue.createElementVNode("view", { class: "content" }, [
                  vue.createElementVNode("view", { class: "userInfo" }, [
                    vue.createElementVNode("view", { class: "left" }, [
                      vue.createElementVNode(
                        "view",
                        { class: "name" },
                        vue.toDisplayString(__props.item.userName),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode(
                        "view",
                        { class: "time" },
                        vue.toDisplayString(__props.item.creatTime),
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "right" }, [
                      vue.createElementVNode("view", {
                        class: "like",
                        onClick: _cache[0] || (_cache[0] = ($event) => likeComment(__props.item.commentId, __props.item.isCommentLikes))
                      }, [
                        vue.createElementVNode(
                          "view",
                          { class: "num" },
                          vue.toDisplayString(__props.item.commentLikeCount),
                          1
                          /* TEXT */
                        ),
                        __props.item.isCommentLikes ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                          key: 0,
                          type: "hand-up-filled",
                          size: "20",
                          color: "#dd524d"
                        })) : (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                          key: 1,
                          type: "hand-up",
                          size: "20",
                          color: "#a7a7a7"
                        }))
                      ]),
                      vue.createElementVNode("view", { class: "remove" }, [
                        vue.createVNode(_component_uni_icons, {
                          type: "trash",
                          size: "20",
                          color: "#a7a7a7"
                        }),
                        vue.createElementVNode("text", null, "删除")
                      ])
                    ])
                  ]),
                  vue.createElementVNode("view", {
                    class: "reply",
                    onClick: _cache[1] || (_cache[1] = ($event) => toReply(__props.item.commentId, __props.item.commentId, __props.item.userName, __props.item.essayId))
                  }, [
                    vue.createElementVNode(
                      "text",
                      null,
                      vue.toDisplayString(__props.item.content),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ]),
              __props.item.subCommentList != 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "subReply"
              }, [
                vue.createElementVNode("view", { class: "list" }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(__props.item.subCommentList, (item, index2) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        class: "row",
                        key: index2,
                        onClick: ($event) => toReply(item.commentId, item.rootCommentId, item.userName, item.essayId)
                      }, vue.toDisplayString(item.userName) + " 回复 " + vue.toDisplayString(item.subCommentName) + "：" + vue.toDisplayString(item.content), 9, ["onClick"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  )),
                  vue.createElementVNode("view", { class: "row more" }, [
                    vue.createTextVNode(
                      " 共" + vue.toDisplayString(__props.item.subCommentCount) + "条回复 ",
                      1
                      /* TEXT */
                    ),
                    vue.createVNode(_component_uni_icons, {
                      type: "right",
                      color: "#a7a7a7",
                      size: "16"
                    })
                  ])
                ])
              ])) : vue.createCommentVNode("v-if", true)
            ]),
            vue.createVNode(
              _component_uni_popup,
              {
                type: "bottom",
                ref_key: "commentPopup",
                ref: commentPopup
              },
              {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", null, [
                    vue.createElementVNode("view", { class: "commentPopup" }, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        type: "text",
                        class: "ipt",
                        placeholder: "请输入评论内容",
                        maxlength: "50",
                        focus: setFocus.value,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => content.value = $event)
                      }, null, 8, ["focus"]), [
                        [vue.vModelText, content.value]
                      ]),
                      vue.createElementVNode("view", {
                        class: "button",
                        onClick: add
                      }, [
                        vue.createVNode(_component_uni_icons, {
                          type: "paperplane",
                          size: "26",
                          color: "#333"
                        })
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "safe-area-inset-bottom" })
                  ])
                ]),
                _: 1
                /* STABLE */
              },
              512
              /* NEED_PATCH */
            )
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-c7df51b2"], ["__file", "D:/uniapp/news-forum/components/comment-item/comment-item.vue"]]);
  const _sfc_main$9 = {
    __name: "detail",
    setup(__props) {
      const setFocus = vue.ref(Boolean);
      const commentPopup = vue.ref(null);
      const content = vue.ref("");
      vue.ref();
      const essay = vue.ref({
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
      const comments = vue.ref([]);
      const likes = vue.ref();
      const likeEssay = async (esssayId) => {
        if (uni.getStorageSync("userId") != null && uni.getStorageSync("userId") != "") {
          formatAppLog("log", "at pages/detail/detail.vue:105", likes.value);
          if (likes.value) {
            formatAppLog("log", "at pages/detail/detail.vue:107", `取消点赞，`);
            likes.value = false;
            essay.value.essayLikes -= 1;
          } else {
            formatAppLog("log", "at pages/detail/detail.vue:113", `点赞`);
            essay.value.essayLikes = 1 + essay.value.essayLikes;
            formatAppLog("log", "at pages/detail/detail.vue:115", essay.value.essayLikes);
            likes.value = true;
          }
          let data = {
            "userId": uni.getStorageSync("userId"),
            "essayId": essay.value.essayId,
            "likes": likes.value
          };
          await apiLikesEssay(data);
        } else {
          uni.showToast({
            title: "未登录",
            icon: "error"
          });
        }
      };
      const handComment = () => {
        formatAppLog("log", "at pages/detail/detail.vue:137", "评论");
        setFocus.value = true;
        commentPopup.value.open();
      };
      const addComment = async () => {
        if (uni.getStorageSync("userId") == "" || uni.getStorageSync("userId") == null) {
          uni.showToast({
            title: "未登录",
            icon: "error"
          });
          formatAppLog("log", "at pages/detail/detail.vue:150", "未登录");
        } else {
          let data = {
            content: content.value,
            userId: uni.getStorageSync("userId"),
            essayId: essay.value.essayId,
            userImg: uni.getStorageSync("userImg"),
            userName: uni.getStorageSync("userName")
          };
          let res = await apiAddComment(data);
          uni.showToast({
            title: "发布评论成功！"
          });
          formatAppLog("log", "at pages/detail/detail.vue:165", res);
          content.value = "";
          commentPopup.value.close();
          let commentRes = await apiGetComment(essay.value.essayId, 1);
          comments.value = commentRes.list;
        }
      };
      const reback = () => {
        uni.switchTab({
          url: "/pages/index/index"
        });
      };
      onLoad(async (e) => {
        formatAppLog("log", "at pages/detail/detail.vue:187", "跳转文章id", e.essayId);
        essay.value.essayId = e.essayId;
        let essayRes = await apiGetEssay(e.essayId);
        essay.value = essayRes.data;
        let commentRes = await apiGetComment(e.essayId, 1);
        comments.value = commentRes.list;
        let likesRes = await apiIsToEssayLikes(e.essayId);
        likes.value = likesRes.data;
      });
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$6);
        const _component_comment_item = resolveEasycom(vue.resolveDynamicComponent("comment-item"), __easycom_0$2);
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_2$1);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { class: "layout" }, [
              vue.createElementVNode(
                "view",
                {
                  class: "bar",
                  style: vue.normalizeStyle({ height: vue.unref(getStatusBarHeight)() + vue.unref(getTitleBarHeight)() + "px" })
                },
                [
                  vue.createElementVNode("view", { class: "left" }, [
                    vue.createVNode(_component_uni_icons, {
                      class: "icon",
                      type: "left",
                      size: "20",
                      onClick: reback
                    })
                  ]),
                  vue.createElementVNode("view", { class: "conten" }, [
                    vue.createElementVNode("view", { class: "conten-1" }, "正文")
                  ])
                ],
                4
                /* STYLE */
              ),
              vue.createElementVNode("view", { class: "img" }, [
                vue.createElementVNode(
                  "swiper",
                  {
                    "indicator-dots": "",
                    "indicator-color": "rgab(255,255,255,0.5)",
                    "indicator-active-color": "#000",
                    onChange: _cache[0] || (_cache[0] = (...args) => _ctx.change && _ctx.change(...args))
                  },
                  [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(essay.value.essayImgs, (item, index2) => {
                        return vue.openBlock(), vue.createElementBlock("swiper-item", { key: index2 }, [
                          vue.createElementVNode("image", {
                            src: item,
                            mode: "aspectFit"
                          }, null, 8, ["src"])
                        ]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ],
                  32
                  /* NEED_HYDRATION */
                )
              ]),
              vue.createElementVNode("view", { class: "content" }, [
                vue.createElementVNode("view", { class: "user" }, [
                  vue.createElementVNode("image", {
                    src: essay.value.essayAuthorImg,
                    mode: "aspectFill",
                    class: "userImg"
                  }, null, 8, ["src"]),
                  vue.createElementVNode(
                    "text",
                    { class: "text" },
                    vue.toDisplayString(essay.value.essayAuthorName),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode(
                  "view",
                  { class: "topic" },
                  vue.toDisplayString(essay.value.essayTitle),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  { class: "detail" },
                  vue.toDisplayString(essay.value.essayContent),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "timeAndIcons" }, [
                  vue.createElementVNode(
                    "view",
                    { class: "time" },
                    vue.toDisplayString(essay.value.essayTime),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("view", {
                    class: "likes",
                    onClick: _cache[1] || (_cache[1] = ($event) => likeEssay(essay.value.essayId))
                  }, [
                    likes.value ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                      key: 0,
                      type: "hand-up-filled",
                      size: "20",
                      class: "icon",
                      color: "#dd524d"
                    })) : (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                      key: 1,
                      type: "hand-up",
                      size: "20",
                      color: "#8f9095",
                      class: "icon"
                    })),
                    vue.createElementVNode(
                      "view",
                      { class: "likesText" },
                      vue.toDisplayString(essay.value.essayLikes),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ]),
              vue.createCommentVNode(" 评论组件 "),
              vue.createElementVNode("view", { class: "comments" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(comments.value, (item, index2) => {
                    return vue.openBlock(), vue.createBlock(_component_comment_item, {
                      key: index2,
                      item
                    }, null, 8, ["item"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              vue.createCommentVNode(" 底部组件 "),
              vue.createElementVNode("view", { class: "bottom" }, [
                vue.createElementVNode("view", { class: "line" }, [
                  vue.createElementVNode("view", {
                    class: "add",
                    onClick: _cache[2] || (_cache[2] = ($event) => handComment())
                  }, "参与讨论"),
                  vue.createVNode(_component_uni_icons, {
                    type: "paperplane",
                    size: "26",
                    color: "#333",
                    class: "icon"
                  })
                ])
              ])
            ]),
            vue.createVNode(
              _component_uni_popup,
              {
                type: "bottom",
                ref_key: "commentPopup",
                ref: commentPopup
              },
              {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", null, [
                    vue.createElementVNode("view", { class: "commentPopup" }, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        type: "text",
                        class: "ipt",
                        placeholder: "请输入评论内容",
                        maxlength: "50",
                        focus: setFocus.value,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => content.value = $event)
                      }, null, 8, ["focus"]), [
                        [vue.vModelText, content.value]
                      ]),
                      vue.createElementVNode("view", {
                        class: "button",
                        onClick: addComment
                      }, [
                        vue.createVNode(_component_uni_icons, {
                          type: "paperplane",
                          size: "26",
                          color: "#333"
                        })
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "safe-area-inset-bottom" })
                  ])
                ]),
                _: 1
                /* STABLE */
              },
              512
              /* NEED_PATCH */
            )
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesDetailDetail = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-eca06f3c"], ["__file", "D:/uniapp/news-forum/pages/detail/detail.vue"]]);
  const _sfc_main$8 = {
    __name: "add",
    setup(__props) {
      const imglist = vue.ref([]);
      const title = vue.ref("");
      const content = vue.ref("");
      const messageText = vue.ref("");
      const msgType = vue.ref("success");
      const isFormComplete = vue.computed(() => {
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
        formatAppLog("log", "at pages/add/add.vue:92", "选择图片");
        const essayId = generateRandomId(7);
        formatAppLog("log", "at pages/add/add.vue:94", "文章id" + essayId);
        uni.chooseImage({
          count: 9 - imglist.value.length,
          sizeType: ["compressed"],
          sourceType: ["album", "camera"],
          success: (res) => {
            imglist.value = imglist.value.concat(res.tempFilePaths);
            formatAppLog("log", "at pages/add/add.vue:101", "当前图片列表:", imglist.value);
          },
          fail: (err) => {
            formatAppLog("error", "at pages/add/add.vue:104", "图片选择失败", err);
          }
        });
      };
      const toAdd = async () => {
        formatAppLog("log", "at pages/add/add.vue:112", "开始上传图片和附加参数");
        const essayId = generateRandomId(7);
        formatAppLog("log", "at pages/add/add.vue:114", "文章id", essayId);
        let imgulr = "";
        const uploadPromises = imglist.value.map((item, index2) => {
          return new Promise((resolve, reject) => {
            uni.uploadFile({
              url: "http://192.168.64.1:8080/essay/uploadImg",
              // 上传图片的接口
              filePath: item,
              // 图片路径
              name: "essayImgs",
              // 上传字段名
              success: (uploadFileRes) => {
                formatAppLog("log", "at pages/add/add.vue:125", uploadFileRes.data, "=》》》》");
                try {
                  let imgData = JSON.parse(uploadFileRes.data);
                  imgulr += imgData.data + ",";
                  formatAppLog("log", "at pages/add/add.vue:129", "imgulr:", imgulr);
                  resolve();
                } catch (error2) {
                  reject("图片上传失败");
                }
              },
              fail: (error2) => {
                formatAppLog("error", "at pages/add/add.vue:136", "图片上传失败,因为内容过大,", error2);
                reject("图片上传失败");
              }
            });
          });
        });
        try {
          await Promise.all(uploadPromises);
          uni.request({
            url: "http://192.168.64.1:8080/essay/add",
            // 后端添加文章接口
            method: "POST",
            data: {
              "essayAuthorId": uni.getStorageSync("userId"),
              "essayTitle": title.value,
              "essayContent": content.value,
              "essayId": essayId,
              "essayImgs": imgulr.slice(0, -1),
              "essayAuthorName": uni.getStorageSync("userName")
            },
            success: (res) => {
              formatAppLog("log", "at pages/add/add.vue:160", "文章添加成功", res);
              uni.showToast({
                title: "文章发布成功！"
              });
              imglist.value = "";
              title.value = "";
              content.value = "";
              uni.navigateTo({
                url: "/pages/detail/detail?essayId=" + essayId
              });
            },
            fail: (err) => {
              formatAppLog("log", "at pages/add/add.vue:173", "文章添加失败", err);
              uni.showToast({
                title: "文章发布失败",
                icon: "error"
              });
            }
          });
        } catch (error2) {
          formatAppLog("error", "at pages/add/add.vue:181", "图片上传失败", error2);
          uni.showToast({
            title: "图片上传失败，请重试",
            icon: "none"
          });
        }
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$6);
        const _component_uni_popup_message = resolveEasycom(vue.resolveDynamicComponent("uni-popup-message"), __easycom_1);
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_2$1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "layout" }, [
          vue.createElementVNode("view", { class: "bar" }, " 发布 "),
          vue.createElementVNode("view", { class: "topic" }, [
            vue.createCommentVNode(" 图片 "),
            vue.createElementVNode("view", { class: "topic-1" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(imglist.value, (item, index2) => {
                  return vue.openBlock(), vue.createElementBlock("view", { key: index2 }, [
                    vue.createElementVNode("image", {
                      class: "upload",
                      src: item,
                      mode: "aspectFill"
                    }, null, 8, ["src"])
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              )),
              vue.createElementVNode("view", {
                class: "upload",
                onClick: upImage
              }, [
                vue.createVNode(_component_uni_icons, {
                  type: "plusempty",
                  size: "20",
                  class: ".add"
                })
              ])
            ]),
            vue.withDirectives(vue.createElementVNode(
              "textarea",
              {
                class: "add1",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => title.value = $event),
                type: "text",
                placeholder: "请输入标题",
                maxlength: "60",
                "auto-height": ""
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, title.value]
            ])
          ]),
          vue.createElementVNode("view", { class: "content" }, [
            vue.withDirectives(vue.createElementVNode(
              "textarea",
              {
                class: "add2",
                type: "text",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => content.value = $event),
                placeholder: "请输入内容",
                maxlength: "300",
                "auto-height": ""
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, content.value]
            ])
          ]),
          vue.createElementVNode("input", {
            type: "button",
            class: vue.normalizeClass(["button-1", { active: isFormComplete.value }]),
            disabled: !isFormComplete.value,
            value: "点击发布",
            onClick: toAdd
          }, null, 10, ["disabled"]),
          vue.createCommentVNode(" 提示信息弹窗 "),
          vue.createVNode(
            _component_uni_popup,
            {
              ref: "message",
              type: "message",
              class: "popup"
            },
            {
              default: vue.withCtx(() => [
                vue.createVNode(_component_uni_popup_message, {
                  type: msgType.value,
                  message: messageText.value,
                  duration: 2e3,
                  class: "popup-message-center"
                }, null, 8, ["type", "message"])
              ]),
              _: 1
              /* STABLE */
            },
            512
            /* NEED_PATCH */
          )
        ]);
      };
    }
  };
  const PagesAddAdd = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-e8d2fd40"], ["__file", "D:/uniapp/news-forum/pages/add/add.vue"]]);
  const _sfc_main$7 = {
    __name: "reply",
    setup(__props) {
      const commentPopup = ref(null);
      return (_ctx, _cache) => {
        const _component_comment_item = resolveEasycom(vue.resolveDynamicComponent("comment-item"), __easycom_0$2);
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$6);
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_2$1);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { class: "replyOut" }, [
              vue.createElementVNode("view", { class: "outer" }, [
                vue.createElementVNode("view", { class: "body" }, [
                  vue.createVNode(_component_comment_item)
                ]),
                vue.createElementVNode("view", { class: "list" }, [
                  (vue.openBlock(), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(4, (item) => {
                      return vue.createElementVNode("view", { class: "row" }, [
                        vue.createVNode(_component_comment_item)
                      ]);
                    }),
                    64
                    /* STABLE_FRAGMENT */
                  ))
                ])
              ])
            ]),
            vue.createVNode(
              _component_uni_popup,
              {
                type: "bottom",
                ref_key: "commentPopup",
                ref: commentPopup
              },
              {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", null, [
                    vue.createElementVNode("view", { class: "commentPopup" }, [
                      vue.createElementVNode("input", {
                        type: "text",
                        class: "ipt",
                        placeholder: "请输入评论内容",
                        maxlength: "50"
                      }),
                      vue.createElementVNode("view", { class: "button" }, [
                        vue.createVNode(_component_uni_icons, {
                          type: "paperplane",
                          size: "26",
                          color: "#333"
                        })
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "safeBottom" })
                  ])
                ]),
                _: 1
                /* STABLE */
              },
              512
              /* NEED_PATCH */
            )
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesDetailReply = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-4009e719"], ["__file", "D:/uniapp/news-forum/pages/detail/reply.vue"]]);
  const en$1 = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "Search enter content"
  };
  const zhHans$1 = {
    "uni-search-bar.cancel": "取消",
    "uni-search-bar.placeholder": "请输入搜索内容"
  };
  const zhHant$1 = {
    "uni-search-bar.cancel": "取消",
    "uni-search-bar.placeholder": "請輸入搜索內容"
  };
  const messages$1 = {
    en: en$1,
    "zh-Hans": zhHans$1,
    "zh-Hant": zhHant$1
  };
  const {
    t: t$1
  } = initVueI18n(messages$1);
  const _sfc_main$6 = {
    name: "UniSearchBar",
    emits: ["input", "update:modelValue", "clear", "cancel", "confirm", "blur", "focus"],
    props: {
      placeholder: {
        type: String,
        default: ""
      },
      radius: {
        type: [Number, String],
        default: 5
      },
      clearButton: {
        type: String,
        default: "auto"
      },
      cancelButton: {
        type: String,
        default: "auto"
      },
      cancelText: {
        type: String,
        default: ""
      },
      bgColor: {
        type: String,
        default: "#F8F8F8"
      },
      textColor: {
        type: String,
        default: "#000000"
      },
      maxlength: {
        type: [Number, String],
        default: 100
      },
      value: {
        type: [Number, String],
        default: ""
      },
      modelValue: {
        type: [Number, String],
        default: ""
      },
      focus: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: false,
        showSync: false,
        searchVal: ""
      };
    },
    computed: {
      cancelTextI18n() {
        return this.cancelText || t$1("uni-search-bar.cancel");
      },
      placeholderText() {
        return this.placeholder || t$1("uni-search-bar.placeholder");
      }
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(newVal) {
          this.searchVal = newVal;
          if (newVal) {
            this.show = true;
          }
        }
      },
      focus: {
        immediate: true,
        handler(newVal) {
          if (newVal) {
            if (this.readonly)
              return;
            this.show = true;
            this.$nextTick(() => {
              this.showSync = true;
            });
          }
        }
      },
      searchVal(newVal, oldVal) {
        this.$emit("input", newVal);
        this.$emit("update:modelValue", newVal);
      }
    },
    methods: {
      searchClick() {
        if (this.readonly)
          return;
        if (this.show) {
          return;
        }
        this.show = true;
        this.$nextTick(() => {
          this.showSync = true;
        });
      },
      clear() {
        this.searchVal = "";
        this.$nextTick(() => {
          this.$emit("clear", { value: "" });
        });
      },
      cancel() {
        if (this.readonly)
          return;
        this.$emit("cancel", {
          value: this.searchVal
        });
        this.searchVal = "";
        this.show = false;
        this.showSync = false;
        plus.key.hideSoftKeybord();
      },
      confirm() {
        plus.key.hideSoftKeybord();
        this.$emit("confirm", {
          value: this.searchVal
        });
      },
      blur() {
        plus.key.hideSoftKeybord();
        this.$emit("blur", {
          value: this.searchVal
        });
      },
      emitFocus(e) {
        this.$emit("focus", e.detail);
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$6);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-searchbar" }, [
      vue.createElementVNode(
        "view",
        {
          style: vue.normalizeStyle({ borderRadius: $props.radius + "px", backgroundColor: $props.bgColor }),
          class: "uni-searchbar__box",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.searchClick && $options.searchClick(...args))
        },
        [
          vue.createElementVNode("view", { class: "uni-searchbar__box-icon-search" }, [
            vue.renderSlot(_ctx.$slots, "searchIcon", {}, () => [
              vue.createVNode(_component_uni_icons, {
                color: "#c0c4cc",
                size: "18",
                type: "search"
              })
            ], true)
          ]),
          $data.show || $data.searchVal ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
            key: 0,
            focus: $data.showSync,
            disabled: $props.readonly,
            placeholder: $options.placeholderText,
            maxlength: $props.maxlength,
            class: "uni-searchbar__box-search-input",
            "confirm-type": "search",
            type: "text",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchVal = $event),
            style: vue.normalizeStyle({ color: $props.textColor }),
            onConfirm: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args)),
            onBlur: _cache[2] || (_cache[2] = (...args) => $options.blur && $options.blur(...args)),
            onFocus: _cache[3] || (_cache[3] = (...args) => $options.emitFocus && $options.emitFocus(...args))
          }, null, 44, ["focus", "disabled", "placeholder", "maxlength"])), [
            [vue.vModelText, $data.searchVal]
          ]) : (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 1,
              class: "uni-searchbar__text-placeholder"
            },
            vue.toDisplayString($props.placeholder),
            1
            /* TEXT */
          )),
          $data.show && ($props.clearButton === "always" || $props.clearButton === "auto" && $data.searchVal !== "") && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "uni-searchbar__box-icon-clear",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.clear && $options.clear(...args))
          }, [
            vue.renderSlot(_ctx.$slots, "clearIcon", {}, () => [
              vue.createVNode(_component_uni_icons, {
                color: "#c0c4cc",
                size: "20",
                type: "clear"
              })
            ], true)
          ])) : vue.createCommentVNode("v-if", true)
        ],
        4
        /* STYLE */
      ),
      $props.cancelButton === "always" || $data.show && $props.cancelButton === "auto" ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 0,
          onClick: _cache[6] || (_cache[6] = (...args) => $options.cancel && $options.cancel(...args)),
          class: "uni-searchbar__cancel"
        },
        vue.toDisplayString($options.cancelTextI18n),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$3], ["__scopeId", "data-v-f07ef577"], ["__file", "D:/uniapp/news-forum/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue"]]);
  const mpMixin = {};
  function email(value) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
  }
  function mobile(value) {
    return /^1([3589]\d|4[5-9]|6[1-2,4-7]|7[0-8])\d{8}$/.test(value);
  }
  function url(value) {
    return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(value);
  }
  function date(value) {
    if (!value)
      return false;
    if (number(value))
      value = +value;
    return !/Invalid|NaN/.test(new Date(value).toString());
  }
  function dateISO(value) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
  }
  function number(value) {
    return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value);
  }
  function string(value) {
    return typeof value === "string";
  }
  function digits(value) {
    return /^\d+$/.test(value);
  }
  function idCard(value) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
      value
    );
  }
  function carNo(value) {
    const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
    const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
    if (value.length === 7) {
      return creg.test(value);
    }
    if (value.length === 8) {
      return xreg.test(value);
    }
    return false;
  }
  function amount(value) {
    return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
  }
  function chinese(value) {
    const reg = /^[\u4e00-\u9fa5]+$/gi;
    return reg.test(value);
  }
  function letter(value) {
    return /^[a-zA-Z]*$/.test(value);
  }
  function enOrNum(value) {
    const reg = /^[0-9a-zA-Z]*$/g;
    return reg.test(value);
  }
  function contains(value, param) {
    return value.indexOf(param) >= 0;
  }
  function range$1(value, param) {
    return value >= param[0] && value <= param[1];
  }
  function rangeLength(value, param) {
    return value.length >= param[0] && value.length <= param[1];
  }
  function landline(value) {
    const reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
    return reg.test(value);
  }
  function empty(value) {
    switch (typeof value) {
      case "undefined":
        return true;
      case "string":
        if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length == 0)
          return true;
        break;
      case "boolean":
        if (!value)
          return true;
        break;
      case "number":
        if (value === 0 || isNaN(value))
          return true;
        break;
      case "object":
        if (value === null || value.length === 0)
          return true;
        for (const i in value) {
          return false;
        }
        return true;
    }
    return false;
  }
  function jsonString(value) {
    if (typeof value === "string") {
      try {
        const obj = JSON.parse(value);
        if (typeof obj === "object" && obj) {
          return true;
        }
        return false;
      } catch (e) {
        return false;
      }
    }
    return false;
  }
  function array(value) {
    if (typeof Array.isArray === "function") {
      return Array.isArray(value);
    }
    return Object.prototype.toString.call(value) === "[object Array]";
  }
  function object(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
  }
  function code(value, len = 6) {
    return new RegExp(`^\\d{${len}}$`).test(value);
  }
  function func(value) {
    return typeof value === "function";
  }
  function promise(value) {
    return object(value) && func(value.then) && func(value.catch);
  }
  function image(value) {
    const newValue = value.split("?")[0];
    const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
    return IMAGE_REGEXP.test(newValue);
  }
  function video(value) {
    const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
    return VIDEO_REGEXP.test(value);
  }
  function regExp(o) {
    return o && Object.prototype.toString.call(o) === "[object RegExp]";
  }
  const test = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    amount,
    array,
    carNo,
    chinese,
    code,
    contains,
    date,
    dateISO,
    digits,
    email,
    empty,
    enOrNum,
    func,
    idCard,
    image,
    jsonString,
    landline,
    letter,
    mobile,
    number,
    object,
    promise,
    range: range$1,
    rangeLength,
    regExp,
    string,
    url,
    video
  }, Symbol.toStringTag, { value: "Module" }));
  function strip(num, precision = 15) {
    return +parseFloat(Number(num).toPrecision(precision));
  }
  function digitLength(num) {
    const eSplit = num.toString().split(/[eE]/);
    const len = (eSplit[0].split(".")[1] || "").length - +(eSplit[1] || 0);
    return len > 0 ? len : 0;
  }
  function float2Fixed(num) {
    if (num.toString().indexOf("e") === -1) {
      return Number(num.toString().replace(".", ""));
    }
    const dLen = digitLength(num);
    return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
  }
  function checkBoundary(num) {
    {
      if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
        formatAppLog("warn", "at uni_modules/uv-ui-tools/libs/function/digit.js:45", `${num} 超出了精度限制，结果可能不正确`);
      }
    }
  }
  function iteratorOperation(arr, operation) {
    const [num1, num2, ...others] = arr;
    let res = operation(num1, num2);
    others.forEach((num) => {
      res = operation(res, num);
    });
    return res;
  }
  function times(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, times);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    const baseNum = digitLength(num1) + digitLength(num2);
    const leftValue = num1Changed * num2Changed;
    checkBoundary(leftValue);
    return leftValue / Math.pow(10, baseNum);
  }
  function divide(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, divide);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    checkBoundary(num1Changed);
    checkBoundary(num2Changed);
    return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
  }
  function round(num, ratio) {
    const base = Math.pow(10, ratio);
    let result = divide(Math.round(Math.abs(times(num, base))), base);
    if (num < 0 && result !== 0) {
      result = times(result, -1);
    }
    return result;
  }
  function range(min = 0, max = 0, value = 0) {
    return Math.max(min, Math.min(max, Number(value)));
  }
  function getPx(value, unit = false) {
    if (number(value)) {
      return unit ? `${value}px` : Number(value);
    }
    if (/(rpx|upx)$/.test(value)) {
      return unit ? `${uni.upx2px(parseInt(value))}px` : Number(uni.upx2px(parseInt(value)));
    }
    return unit ? `${parseInt(value)}px` : parseInt(value);
  }
  function sleep(value = 30) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, value);
    });
  }
  function os() {
    return uni.getSystemInfoSync().platform.toLowerCase();
  }
  function sys() {
    return uni.getSystemInfoSync();
  }
  function random(min, max) {
    if (min >= 0 && max > 0 && max >= min) {
      const gab = max - min + 1;
      return Math.floor(Math.random() * gab + min);
    }
    return 0;
  }
  function guid(len = 32, firstU = true, radix = null) {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    const uuid = [];
    radix = radix || chars.length;
    if (len) {
      for (let i = 0; i < len; i++)
        uuid[i] = chars[0 | Math.random() * radix];
    } else {
      let r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
      uuid[14] = "4";
      for (let i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[i == 19 ? r & 3 | 8 : r];
        }
      }
    }
    if (firstU) {
      uuid.shift();
      return `u${uuid.join("")}`;
    }
    return uuid.join("");
  }
  function $parent(name = void 0) {
    let parent = this.$parent;
    while (parent) {
      if (parent.$options && parent.$options.name !== name) {
        parent = parent.$parent;
      } else {
        return parent;
      }
    }
    return false;
  }
  function addStyle(customStyle, target = "object") {
    if (empty(customStyle) || typeof customStyle === "object" && target === "object" || target === "string" && typeof customStyle === "string") {
      return customStyle;
    }
    if (target === "object") {
      customStyle = trim(customStyle);
      const styleArray = customStyle.split(";");
      const style = {};
      for (let i = 0; i < styleArray.length; i++) {
        if (styleArray[i]) {
          const item = styleArray[i].split(":");
          style[trim(item[0])] = trim(item[1]);
        }
      }
      return style;
    }
    let string2 = "";
    for (const i in customStyle) {
      const key = i.replace(/([A-Z])/g, "-$1").toLowerCase();
      string2 += `${key}:${customStyle[i]};`;
    }
    return trim(string2);
  }
  function addUnit(value = "auto", unit = ((_b) => (_b = ((_a) => (_a = uni == null ? void 0 : uni.$uv) == null ? void 0 : _a.config)()) == null ? void 0 : _b.unit)() ? ((_d) => (_d = ((_c) => (_c = uni == null ? void 0 : uni.$uv) == null ? void 0 : _c.config)()) == null ? void 0 : _d.unit)() : "px") {
    value = String(value);
    return number(value) ? `${value}${unit}` : value;
  }
  function deepClone(obj, cache = /* @__PURE__ */ new WeakMap()) {
    if (obj === null || typeof obj !== "object")
      return obj;
    if (cache.has(obj))
      return cache.get(obj);
    let clone;
    if (obj instanceof Date) {
      clone = new Date(obj.getTime());
    } else if (obj instanceof RegExp) {
      clone = new RegExp(obj);
    } else if (obj instanceof Map) {
      clone = new Map(Array.from(obj, ([key, value]) => [key, deepClone(value, cache)]));
    } else if (obj instanceof Set) {
      clone = new Set(Array.from(obj, (value) => deepClone(value, cache)));
    } else if (Array.isArray(obj)) {
      clone = obj.map((value) => deepClone(value, cache));
    } else if (Object.prototype.toString.call(obj) === "[object Object]") {
      clone = Object.create(Object.getPrototypeOf(obj));
      cache.set(obj, clone);
      for (const [key, value] of Object.entries(obj)) {
        clone[key] = deepClone(value, cache);
      }
    } else {
      clone = Object.assign({}, obj);
    }
    cache.set(obj, clone);
    return clone;
  }
  function deepMerge(target = {}, source = {}) {
    target = deepClone(target);
    if (typeof target !== "object" || target === null || typeof source !== "object" || source === null)
      return target;
    const merged = Array.isArray(target) ? target.slice() : Object.assign({}, target);
    for (const prop in source) {
      if (!source.hasOwnProperty(prop))
        continue;
      const sourceValue = source[prop];
      const targetValue = merged[prop];
      if (sourceValue instanceof Date) {
        merged[prop] = new Date(sourceValue);
      } else if (sourceValue instanceof RegExp) {
        merged[prop] = new RegExp(sourceValue);
      } else if (sourceValue instanceof Map) {
        merged[prop] = new Map(sourceValue);
      } else if (sourceValue instanceof Set) {
        merged[prop] = new Set(sourceValue);
      } else if (typeof sourceValue === "object" && sourceValue !== null) {
        merged[prop] = deepMerge(targetValue, sourceValue);
      } else {
        merged[prop] = sourceValue;
      }
    }
    return merged;
  }
  function error(err) {
    {
      formatAppLog("error", "at uni_modules/uv-ui-tools/libs/function/index.js:250", `uvui提示：${err}`);
    }
  }
  function randomArray(array2 = []) {
    return array2.sort(() => Math.random() - 0.5);
  }
  if (!String.prototype.padStart) {
    String.prototype.padStart = function(maxLength, fillString = " ") {
      if (Object.prototype.toString.call(fillString) !== "[object String]") {
        throw new TypeError(
          "fillString must be String"
        );
      }
      const str = this;
      if (str.length >= maxLength)
        return String(str);
      const fillLength = maxLength - str.length;
      let times2 = Math.ceil(fillLength / fillString.length);
      while (times2 >>= 1) {
        fillString += fillString;
        if (times2 === 1) {
          fillString += fillString;
        }
      }
      return fillString.slice(0, fillLength) + str;
    };
  }
  function timeFormat(dateTime = null, formatStr = "yyyy-mm-dd") {
    let date2;
    if (!dateTime) {
      date2 = /* @__PURE__ */ new Date();
    } else if (/^\d{10}$/.test(dateTime == null ? void 0 : dateTime.toString().trim())) {
      date2 = new Date(dateTime * 1e3);
    } else if (typeof dateTime === "string" && /^\d+$/.test(dateTime.trim())) {
      date2 = new Date(Number(dateTime));
    } else if (typeof dateTime === "string" && dateTime.includes("-") && !dateTime.includes("T")) {
      date2 = new Date(dateTime.replace(/-/g, "/"));
    } else {
      date2 = new Date(dateTime);
    }
    const timeSource = {
      "y": date2.getFullYear().toString(),
      // 年
      "m": (date2.getMonth() + 1).toString().padStart(2, "0"),
      // 月
      "d": date2.getDate().toString().padStart(2, "0"),
      // 日
      "h": date2.getHours().toString().padStart(2, "0"),
      // 时
      "M": date2.getMinutes().toString().padStart(2, "0"),
      // 分
      "s": date2.getSeconds().toString().padStart(2, "0")
      // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (const key in timeSource) {
      const [ret] = new RegExp(`${key}+`).exec(formatStr) || [];
      if (ret) {
        const beginIndex = key === "y" && ret.length === 2 ? 2 : 0;
        formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex));
      }
    }
    return formatStr;
  }
  function timeFrom(timestamp = null, format = "yyyy-mm-dd") {
    if (timestamp == null)
      timestamp = Number(/* @__PURE__ */ new Date());
    timestamp = parseInt(timestamp);
    if (timestamp.toString().length == 10)
      timestamp *= 1e3;
    let timer = (/* @__PURE__ */ new Date()).getTime() - timestamp;
    timer = parseInt(timer / 1e3);
    let tips = "";
    switch (true) {
      case timer < 300:
        tips = "刚刚";
        break;
      case (timer >= 300 && timer < 3600):
        tips = `${parseInt(timer / 60)}分钟前`;
        break;
      case (timer >= 3600 && timer < 86400):
        tips = `${parseInt(timer / 3600)}小时前`;
        break;
      case (timer >= 86400 && timer < 2592e3):
        tips = `${parseInt(timer / 86400)}天前`;
        break;
      default:
        if (format === false) {
          if (timer >= 2592e3 && timer < 365 * 86400) {
            tips = `${parseInt(timer / (86400 * 30))}个月前`;
          } else {
            tips = `${parseInt(timer / (86400 * 365))}年前`;
          }
        } else {
          tips = timeFormat(timestamp, format);
        }
    }
    return tips;
  }
  function trim(str, pos = "both") {
    str = String(str);
    if (pos == "both") {
      return str.replace(/^\s+|\s+$/g, "");
    }
    if (pos == "left") {
      return str.replace(/^\s*/, "");
    }
    if (pos == "right") {
      return str.replace(/(\s*$)/g, "");
    }
    if (pos == "all") {
      return str.replace(/\s+/g, "");
    }
    return str;
  }
  function queryParams(data = {}, isPrefix = true, arrayFormat = "brackets") {
    const prefix = isPrefix ? "?" : "";
    const _result = [];
    if (["indices", "brackets", "repeat", "comma"].indexOf(arrayFormat) == -1)
      arrayFormat = "brackets";
    for (const key in data) {
      const value = data[key];
      if (["", void 0, null].indexOf(value) >= 0) {
        continue;
      }
      if (value.constructor === Array) {
        switch (arrayFormat) {
          case "indices":
            for (let i = 0; i < value.length; i++) {
              _result.push(`${key}[${i}]=${value[i]}`);
            }
            break;
          case "brackets":
            value.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
            break;
          case "repeat":
            value.forEach((_value) => {
              _result.push(`${key}=${_value}`);
            });
            break;
          case "comma":
            let commaStr = "";
            value.forEach((_value) => {
              commaStr += (commaStr ? "," : "") + _value;
            });
            _result.push(`${key}=${commaStr}`);
            break;
          default:
            value.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
        }
      } else {
        _result.push(`${key}=${value}`);
      }
    }
    return _result.length ? prefix + _result.join("&") : "";
  }
  function toast(title, duration = 2e3) {
    uni.showToast({
      title: String(title),
      icon: "none",
      duration
    });
  }
  function type2icon(type = "success", fill = false) {
    if (["primary", "info", "error", "warning", "success"].indexOf(type) == -1)
      type = "success";
    let iconName = "";
    switch (type) {
      case "primary":
        iconName = "info-circle";
        break;
      case "info":
        iconName = "info-circle";
        break;
      case "error":
        iconName = "close-circle";
        break;
      case "warning":
        iconName = "error-circle";
        break;
      case "success":
        iconName = "checkmark-circle";
        break;
      default:
        iconName = "checkmark-circle";
    }
    if (fill)
      iconName += "-fill";
    return iconName;
  }
  function priceFormat(number2, decimals = 0, decimalPoint = ".", thousandsSeparator = ",") {
    number2 = `${number2}`.replace(/[^0-9+-Ee.]/g, "");
    const n = !isFinite(+number2) ? 0 : +number2;
    const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    const sep = typeof thousandsSeparator === "undefined" ? "," : thousandsSeparator;
    const dec = typeof decimalPoint === "undefined" ? "." : decimalPoint;
    let s = "";
    s = (prec ? round(n, prec) + "" : `${Math.round(n)}`).split(".");
    const re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
      s[0] = s[0].replace(re, `$1${sep}$2`);
    }
    if ((s[1] || "").length < prec) {
      s[1] = s[1] || "";
      s[1] += new Array(prec - s[1].length + 1).join("0");
    }
    return s.join(dec);
  }
  function getDuration(value, unit = true) {
    const valueNum = parseInt(value);
    if (unit) {
      if (/s$/.test(value))
        return value;
      return value > 30 ? `${value}ms` : `${value}s`;
    }
    if (/ms$/.test(value))
      return valueNum;
    if (/s$/.test(value))
      return valueNum > 30 ? valueNum : valueNum * 1e3;
    return valueNum;
  }
  function padZero(value) {
    return `00${value}`.slice(-2);
  }
  function formValidate(instance, event) {
    const formItem = $parent.call(instance, "uv-form-item");
    const form = $parent.call(instance, "uv-form");
    if (formItem && form) {
      form.validateField(formItem.prop, () => {
      }, event);
    }
  }
  function getProperty(obj, key) {
    if (!obj) {
      return;
    }
    if (typeof key !== "string" || key === "") {
      return "";
    }
    if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      let firstObj = obj[keys[0]] || {};
      for (let i = 1; i < keys.length; i++) {
        if (firstObj) {
          firstObj = firstObj[keys[i]];
        }
      }
      return firstObj;
    }
    return obj[key];
  }
  function setProperty(obj, key, value) {
    if (!obj) {
      return;
    }
    const inFn = function(_obj, keys, v) {
      if (keys.length === 1) {
        _obj[keys[0]] = v;
        return;
      }
      while (keys.length > 1) {
        const k = keys[0];
        if (!_obj[k] || typeof _obj[k] !== "object") {
          _obj[k] = {};
        }
        keys.shift();
        inFn(_obj[k], keys, v);
      }
    };
    if (typeof key !== "string" || key === "")
      ;
    else if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      inFn(obj, keys, value);
    } else {
      obj[key] = value;
    }
  }
  function page() {
    var _a;
    const pages2 = getCurrentPages();
    const route2 = (_a = pages2[pages2.length - 1]) == null ? void 0 : _a.route;
    return `/${route2 ? route2 : ""}`;
  }
  function pages() {
    const pages2 = getCurrentPages();
    return pages2;
  }
  function getHistoryPage(back = 0) {
    const pages2 = getCurrentPages();
    const len = pages2.length;
    return pages2[len - 1 + back];
  }
  function setConfig({
    props: props2 = {},
    config: config2 = {},
    color = {},
    zIndex = {}
  }) {
    const {
      deepMerge: deepMerge2
    } = uni.$uv;
    uni.$uv.config = deepMerge2(uni.$uv.config, config2);
    uni.$uv.props = deepMerge2(uni.$uv.props, props2);
    uni.$uv.color = deepMerge2(uni.$uv.color, color);
    uni.$uv.zIndex = deepMerge2(uni.$uv.zIndex, zIndex);
  }
  const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    $parent,
    addStyle,
    addUnit,
    deepClone,
    deepMerge,
    error,
    formValidate,
    getDuration,
    getHistoryPage,
    getProperty,
    getPx,
    guid,
    os,
    padZero,
    page,
    pages,
    priceFormat,
    queryParams,
    random,
    randomArray,
    range,
    setConfig,
    setProperty,
    sleep,
    sys,
    timeFormat,
    timeFrom,
    toast,
    trim,
    type2icon
  }, Symbol.toStringTag, { value: "Module" }));
  class Router {
    constructor() {
      this.config = {
        type: "navigateTo",
        url: "",
        delta: 1,
        // navigateBack页面后退时,回退的层数
        params: {},
        // 传递的参数
        animationType: "pop-in",
        // 窗口动画,只在APP有效
        animationDuration: 300,
        // 窗口动画持续时间,单位毫秒,只在APP有效
        intercept: false,
        // 是否需要拦截
        events: {}
        // 页面间通信接口，用于监听被打开页面发送到当前页面的数据。hbuilderx 2.8.9+ 开始支持。
      };
      this.route = this.route.bind(this);
    }
    // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
    addRootPath(url2) {
      return url2[0] === "/" ? url2 : `/${url2}`;
    }
    // 整合路由参数
    mixinParam(url2, params) {
      url2 = url2 && this.addRootPath(url2);
      let query = "";
      if (/.*\/.*\?.*=.*/.test(url2)) {
        query = queryParams(params, false);
        return url2 += `&${query}`;
      }
      query = queryParams(params);
      return url2 += query;
    }
    // 对外的方法名称
    async route(options = {}, params = {}) {
      let mergeConfig = {};
      if (typeof options === "string") {
        mergeConfig.url = this.mixinParam(options, params);
        mergeConfig.type = "navigateTo";
      } else {
        mergeConfig = deepMerge(this.config, options);
        mergeConfig.url = this.mixinParam(options.url, options.params);
      }
      if (mergeConfig.url === page())
        return;
      if (params.intercept) {
        mergeConfig.intercept = params.intercept;
      }
      mergeConfig.params = params;
      mergeConfig = deepMerge(this.config, mergeConfig);
      if (typeof mergeConfig.intercept === "function") {
        const isNext = await new Promise((resolve, reject) => {
          mergeConfig.intercept(mergeConfig, resolve);
        });
        isNext && this.openPage(mergeConfig);
      } else {
        this.openPage(mergeConfig);
      }
    }
    // 执行路由跳转
    openPage(config2) {
      const {
        url: url2,
        type,
        delta,
        animationType,
        animationDuration,
        events
      } = config2;
      if (config2.type == "navigateTo" || config2.type == "to") {
        uni.navigateTo({
          url: url2,
          animationType,
          animationDuration,
          events
        });
      }
      if (config2.type == "redirectTo" || config2.type == "redirect") {
        uni.redirectTo({
          url: url2
        });
      }
      if (config2.type == "switchTab" || config2.type == "tab") {
        uni.switchTab({
          url: url2
        });
      }
      if (config2.type == "reLaunch" || config2.type == "launch") {
        uni.reLaunch({
          url: url2
        });
      }
      if (config2.type == "navigateBack" || config2.type == "back") {
        uni.navigateBack({
          delta
        });
      }
    }
  }
  const route = new Router().route;
  let timeout = null;
  function debounce(func2, wait2 = 500, immediate = false) {
    if (timeout !== null)
      clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait2);
      if (callNow)
        typeof func2 === "function" && func2();
    } else {
      timeout = setTimeout(() => {
        typeof func2 === "function" && func2();
      }, wait2);
    }
  }
  let flag;
  function throttle(func2, wait2 = 500, immediate = true) {
    if (immediate) {
      if (!flag) {
        flag = true;
        typeof func2 === "function" && func2();
        setTimeout(() => {
          flag = false;
        }, wait2);
      }
    } else if (!flag) {
      flag = true;
      setTimeout(() => {
        flag = false;
        typeof func2 === "function" && func2();
      }, wait2);
    }
  }
  const mixin = {
    // 定义每个组件都可能需要用到的外部样式以及类名
    props: {
      // 每个组件都有的父组件传递的样式，可以为字符串或者对象形式
      customStyle: {
        type: [Object, String],
        default: () => ({})
      },
      customClass: {
        type: String,
        default: ""
      },
      // 跳转的页面路径
      url: {
        type: String,
        default: ""
      },
      // 页面跳转的类型
      linkType: {
        type: String,
        default: "navigateTo"
      }
    },
    data() {
      return {};
    },
    onLoad() {
      this.$uv.getRect = this.$uvGetRect;
    },
    created() {
      this.$uv.getRect = this.$uvGetRect;
    },
    computed: {
      $uv() {
        var _a, _b;
        return {
          ...index,
          test,
          route,
          debounce,
          throttle,
          unit: (_b = (_a = uni == null ? void 0 : uni.$uv) == null ? void 0 : _a.config) == null ? void 0 : _b.unit
        };
      },
      /**
       * 生成bem规则类名
       * 由于微信小程序，H5，nvue之间绑定class的差异，无法通过:class="[bem()]"的形式进行同用
       * 故采用如下折中做法，最后返回的是数组（一般平台）或字符串（支付宝和字节跳动平台），类似['a', 'b', 'c']或'a b c'的形式
       * @param {String} name 组件名称
       * @param {Array} fixed 一直会存在的类名
       * @param {Array} change 会根据变量值为true或者false而出现或者隐藏的类名
       * @returns {Array|string}
       */
      bem() {
        return function(name, fixed, change) {
          const prefix = `uv-${name}--`;
          const classes = {};
          if (fixed) {
            fixed.map((item) => {
              classes[prefix + this[item]] = true;
            });
          }
          if (change) {
            change.map((item) => {
              this[item] ? classes[prefix + item] = this[item] : delete classes[prefix + item];
            });
          }
          return Object.keys(classes);
        };
      }
    },
    methods: {
      // 跳转某一个页面
      openPage(urlKey = "url") {
        const url2 = this[urlKey];
        if (url2) {
          uni[this.linkType]({
            url: url2
          });
        }
      },
      // 查询节点信息
      // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
      // 解决办法为在组件根部再套一个没有任何作用的view元素
      $uvGetRect(selector, all) {
        return new Promise((resolve) => {
          uni.createSelectorQuery().in(this)[all ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
            if (all && Array.isArray(rect) && rect.length) {
              resolve(rect);
            }
            if (!all && rect) {
              resolve(rect);
            }
          }).exec();
        });
      },
      getParentData(parentName = "") {
        if (!this.parent)
          this.parent = {};
        this.parent = this.$uv.$parent.call(this, parentName);
        if (this.parent.children) {
          this.parent.children.indexOf(this) === -1 && this.parent.children.push(this);
        }
        if (this.parent && this.parentData) {
          Object.keys(this.parentData).map((key) => {
            this.parentData[key] = this.parent[key];
          });
        }
      },
      // 阻止事件冒泡
      preventEvent(e) {
        e && typeof e.stopPropagation === "function" && e.stopPropagation();
      },
      // 空操作
      noop(e) {
        this.preventEvent(e);
      }
    },
    onReachBottom() {
      uni.$emit("uvOnReachBottom");
    },
    beforeDestroy() {
      if (this.parent && array(this.parent.children)) {
        const childrenList = this.parent.children;
        childrenList.map((child, index2) => {
          if (child === this) {
            childrenList.splice(index2, 1);
          }
        });
      }
    },
    // 兼容vue3
    unmounted() {
      if (this.parent && array(this.parent.children)) {
        const childrenList = this.parent.children;
        childrenList.map((child, index2) => {
          if (child === this) {
            childrenList.splice(index2, 1);
          }
        });
      }
    }
  };
  const icons = {
    "uvicon-level": "e68f",
    "uvicon-checkbox-mark": "e659",
    "uvicon-folder": "e694",
    "uvicon-movie": "e67c",
    "uvicon-star-fill": "e61e",
    "uvicon-star": "e618",
    "uvicon-phone-fill": "e6ac",
    "uvicon-phone": "e6ba",
    "uvicon-apple-fill": "e635",
    "uvicon-backspace": "e64d",
    "uvicon-attach": "e640",
    "uvicon-empty-data": "e671",
    "uvicon-empty-address": "e68a",
    "uvicon-empty-favor": "e662",
    "uvicon-empty-car": "e657",
    "uvicon-empty-order": "e66b",
    "uvicon-empty-list": "e672",
    "uvicon-empty-search": "e677",
    "uvicon-empty-permission": "e67d",
    "uvicon-empty-news": "e67e",
    "uvicon-empty-history": "e685",
    "uvicon-empty-coupon": "e69b",
    "uvicon-empty-page": "e60e",
    "uvicon-empty-wifi-off": "e6cc",
    "uvicon-reload": "e627",
    "uvicon-order": "e695",
    "uvicon-server-man": "e601",
    "uvicon-search": "e632",
    "uvicon-more-dot-fill": "e66f",
    "uvicon-scan": "e631",
    "uvicon-map": "e665",
    "uvicon-map-fill": "e6a8",
    "uvicon-tags": "e621",
    "uvicon-tags-fill": "e613",
    "uvicon-eye": "e664",
    "uvicon-eye-fill": "e697",
    "uvicon-eye-off": "e69c",
    "uvicon-eye-off-outline": "e688",
    "uvicon-mic": "e66d",
    "uvicon-mic-off": "e691",
    "uvicon-calendar": "e65c",
    "uvicon-trash": "e623",
    "uvicon-trash-fill": "e6ce",
    "uvicon-play-left": "e6bf",
    "uvicon-play-right": "e6b3",
    "uvicon-minus": "e614",
    "uvicon-plus": "e625",
    "uvicon-info-circle": "e69f",
    "uvicon-info-circle-fill": "e6a7",
    "uvicon-question-circle": "e622",
    "uvicon-question-circle-fill": "e6bc",
    "uvicon-close": "e65a",
    "uvicon-checkmark": "e64a",
    "uvicon-checkmark-circle": "e643",
    "uvicon-checkmark-circle-fill": "e668",
    "uvicon-setting": "e602",
    "uvicon-setting-fill": "e6d0",
    "uvicon-heart": "e6a2",
    "uvicon-heart-fill": "e68b",
    "uvicon-camera": "e642",
    "uvicon-camera-fill": "e650",
    "uvicon-more-circle": "e69e",
    "uvicon-more-circle-fill": "e684",
    "uvicon-chat": "e656",
    "uvicon-chat-fill": "e63f",
    "uvicon-bag": "e647",
    "uvicon-error-circle": "e66e",
    "uvicon-error-circle-fill": "e655",
    "uvicon-close-circle": "e64e",
    "uvicon-close-circle-fill": "e666",
    "uvicon-share": "e629",
    "uvicon-share-fill": "e6bb",
    "uvicon-share-square": "e6c4",
    "uvicon-shopping-cart": "e6cb",
    "uvicon-shopping-cart-fill": "e630",
    "uvicon-bell": "e651",
    "uvicon-bell-fill": "e604",
    "uvicon-list": "e690",
    "uvicon-list-dot": "e6a9",
    "uvicon-zhifubao-circle-fill": "e617",
    "uvicon-weixin-circle-fill": "e6cd",
    "uvicon-weixin-fill": "e620",
    "uvicon-qq-fill": "e608",
    "uvicon-qq-circle-fill": "e6b9",
    "uvicon-moments-circel-fill": "e6c2",
    "uvicon-moments": "e6a0",
    "uvicon-car": "e64f",
    "uvicon-car-fill": "e648",
    "uvicon-warning-fill": "e6c7",
    "uvicon-warning": "e6c1",
    "uvicon-clock-fill": "e64b",
    "uvicon-clock": "e66c",
    "uvicon-edit-pen": "e65d",
    "uvicon-edit-pen-fill": "e679",
    "uvicon-email": "e673",
    "uvicon-email-fill": "e683",
    "uvicon-minus-circle": "e6a5",
    "uvicon-plus-circle": "e603",
    "uvicon-plus-circle-fill": "e611",
    "uvicon-file-text": "e687",
    "uvicon-file-text-fill": "e67f",
    "uvicon-pushpin": "e6d1",
    "uvicon-pushpin-fill": "e6b6",
    "uvicon-grid": "e68c",
    "uvicon-grid-fill": "e698",
    "uvicon-play-circle": "e6af",
    "uvicon-play-circle-fill": "e62a",
    "uvicon-pause-circle-fill": "e60c",
    "uvicon-pause": "e61c",
    "uvicon-pause-circle": "e696",
    "uvicon-gift-fill": "e6b0",
    "uvicon-gift": "e680",
    "uvicon-kefu-ermai": "e660",
    "uvicon-server-fill": "e610",
    "uvicon-coupon-fill": "e64c",
    "uvicon-coupon": "e65f",
    "uvicon-integral": "e693",
    "uvicon-integral-fill": "e6b1",
    "uvicon-home-fill": "e68e",
    "uvicon-home": "e67b",
    "uvicon-account": "e63a",
    "uvicon-account-fill": "e653",
    "uvicon-thumb-down-fill": "e628",
    "uvicon-thumb-down": "e60a",
    "uvicon-thumb-up": "e612",
    "uvicon-thumb-up-fill": "e62c",
    "uvicon-lock-fill": "e6a6",
    "uvicon-lock-open": "e68d",
    "uvicon-lock-opened-fill": "e6a1",
    "uvicon-lock": "e69d",
    "uvicon-red-packet": "e6c3",
    "uvicon-photo-fill": "e6b4",
    "uvicon-photo": "e60d",
    "uvicon-volume-off-fill": "e6c8",
    "uvicon-volume-off": "e6bd",
    "uvicon-volume-fill": "e624",
    "uvicon-volume": "e605",
    "uvicon-download": "e670",
    "uvicon-arrow-up-fill": "e636",
    "uvicon-arrow-down-fill": "e638",
    "uvicon-play-left-fill": "e6ae",
    "uvicon-play-right-fill": "e6ad",
    "uvicon-arrow-downward": "e634",
    "uvicon-arrow-leftward": "e63b",
    "uvicon-arrow-rightward": "e644",
    "uvicon-arrow-upward": "e641",
    "uvicon-arrow-down": "e63e",
    "uvicon-arrow-right": "e63c",
    "uvicon-arrow-left": "e646",
    "uvicon-arrow-up": "e633",
    "uvicon-skip-back-left": "e6c5",
    "uvicon-skip-forward-right": "e61f",
    "uvicon-arrow-left-double": "e637",
    "uvicon-man": "e675",
    "uvicon-woman": "e626",
    "uvicon-en": "e6b8",
    "uvicon-twitte": "e607",
    "uvicon-twitter-circle-fill": "e6cf"
  };
  const props$1 = {
    props: {
      // 图标类名
      name: {
        type: String,
        default: ""
      },
      // 图标颜色，可接受主题色
      color: {
        type: String,
        default: "#606266"
      },
      // 字体大小，单位px
      size: {
        type: [String, Number],
        default: "16px"
      },
      // 是否显示粗体
      bold: {
        type: Boolean,
        default: false
      },
      // 点击图标的时候传递事件出去的index（用于区分点击了哪一个）
      index: {
        type: [String, Number],
        default: null
      },
      // 触摸图标时的类名
      hoverClass: {
        type: String,
        default: ""
      },
      // 自定义扩展前缀，方便用户扩展自己的图标库
      customPrefix: {
        type: String,
        default: "uvicon"
      },
      // 图标右边或者下面的文字
      label: {
        type: [String, Number],
        default: ""
      },
      // label的位置，只能右边或者下边
      labelPos: {
        type: String,
        default: "right"
      },
      // label的大小
      labelSize: {
        type: [String, Number],
        default: "15px"
      },
      // label的颜色
      labelColor: {
        type: String,
        default: "#606266"
      },
      // label与图标的距离
      space: {
        type: [String, Number],
        default: "3px"
      },
      // 图片的mode
      imgMode: {
        type: String,
        default: "aspectFit"
      },
      // 用于显示图片小图标时，图片的宽度
      width: {
        type: [String, Number],
        default: ""
      },
      // 用于显示图片小图标时，图片的高度
      height: {
        type: [String, Number],
        default: ""
      },
      // 用于解决某些情况下，让图标垂直居中的用途
      top: {
        type: [String, Number],
        default: 0
      },
      // 是否阻止事件传播
      stop: {
        type: Boolean,
        default: false
      },
      ...(_f = (_e = uni.$uv) == null ? void 0 : _e.props) == null ? void 0 : _f.icon
    }
  };
  const _sfc_main$5 = {
    name: "uv-icon",
    emits: ["click"],
    mixins: [mpMixin, mixin, props$1],
    data() {
      return {
        colorType: [
          "primary",
          "success",
          "info",
          "error",
          "warning"
        ]
      };
    },
    computed: {
      uClasses() {
        let classes = [];
        classes.push(this.customPrefix);
        classes.push(this.customPrefix + "-" + this.name);
        if (this.color && this.colorType.includes(this.color))
          classes.push("uv-icon__icon--" + this.color);
        return classes;
      },
      iconStyle() {
        let style = {};
        style = {
          fontSize: this.$uv.addUnit(this.size),
          lineHeight: this.$uv.addUnit(this.size),
          fontWeight: this.bold ? "bold" : "normal",
          // 某些特殊情况需要设置一个到顶部的距离，才能更好的垂直居中
          top: this.$uv.addUnit(this.top)
        };
        if (this.color && !this.colorType.includes(this.color))
          style.color = this.color;
        return style;
      },
      // 判断传入的name属性，是否图片路径，只要带有"/"均认为是图片形式
      isImg() {
        const isBase64 = this.name.indexOf("data:") > -1 && this.name.indexOf("base64") > -1;
        return this.name.indexOf("/") !== -1 || isBase64;
      },
      imgStyle() {
        let style = {};
        style.width = this.width ? this.$uv.addUnit(this.width) : this.$uv.addUnit(this.size);
        style.height = this.height ? this.$uv.addUnit(this.height) : this.$uv.addUnit(this.size);
        return style;
      },
      // 通过图标名，查找对应的图标
      icon() {
        const code2 = icons["uvicon-" + this.name];
        return code2 ? unescape(`%u${code2}`) : ["uvicon"].indexOf(this.customPrefix) > -1 ? this.name : "";
      }
    },
    methods: {
      clickHandler(e) {
        this.$emit("click", this.index);
        this.stop && this.preventEvent(e);
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uv-icon", ["uv-icon--" + _ctx.labelPos]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args))
      },
      [
        $options.isImg ? (vue.openBlock(), vue.createElementBlock("image", {
          key: 0,
          class: "uv-icon__img",
          src: _ctx.name,
          mode: _ctx.imgMode,
          style: vue.normalizeStyle([$options.imgStyle, _ctx.$uv.addStyle(_ctx.customStyle)])
        }, null, 12, ["src", "mode"])) : (vue.openBlock(), vue.createElementBlock("text", {
          key: 1,
          class: vue.normalizeClass(["uv-icon__icon", $options.uClasses]),
          style: vue.normalizeStyle([$options.iconStyle, _ctx.$uv.addStyle(_ctx.customStyle)]),
          "hover-class": _ctx.hoverClass
        }, vue.toDisplayString($options.icon), 15, ["hover-class"])),
        vue.createCommentVNode(' 这里进行空字符串判断，如果仅仅是v-if="label"，可能会出现传递0的时候，结果也无法显示 '),
        _ctx.label !== "" ? (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 2,
            class: "uv-icon__label",
            style: vue.normalizeStyle({
              color: _ctx.labelColor,
              fontSize: _ctx.$uv.addUnit(_ctx.labelSize),
              marginLeft: _ctx.labelPos == "right" ? _ctx.$uv.addUnit(_ctx.space) : 0,
              marginTop: _ctx.labelPos == "bottom" ? _ctx.$uv.addUnit(_ctx.space) : 0,
              marginRight: _ctx.labelPos == "left" ? _ctx.$uv.addUnit(_ctx.space) : 0,
              marginBottom: _ctx.labelPos == "top" ? _ctx.$uv.addUnit(_ctx.space) : 0
            })
          },
          vue.toDisplayString(_ctx.label),
          5
          /* TEXT, STYLE */
        )) : vue.createCommentVNode("v-if", true)
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$2], ["__scopeId", "data-v-b7a6dd5d"], ["__file", "D:/uniapp/news-forum/uni_modules/uv-icon/components/uv-icon/uv-icon.vue"]]);
  const props = {
    props: {
      // 内置图标名称，或图片路径，建议绝对路径
      icon: {
        type: String,
        default: ""
      },
      // 提示文字
      text: {
        type: String,
        default: ""
      },
      // 文字颜色
      textColor: {
        type: String,
        default: "#c0c4cc"
      },
      // 文字大小
      textSize: {
        type: [String, Number],
        default: 14
      },
      // 图标的颜色
      iconColor: {
        type: String,
        default: "#c0c4cc"
      },
      // 图标的大小
      iconSize: {
        type: [String, Number],
        default: 90
      },
      // 选择预置的图标类型
      mode: {
        type: String,
        default: "data"
      },
      //  图标宽度，单位px
      width: {
        type: [String, Number],
        default: 160
      },
      // 图标高度，单位px
      height: {
        type: [String, Number],
        default: 160
      },
      // 是否显示组件
      show: {
        type: Boolean,
        default: true
      },
      // 组件距离上一个元素之间的距离，默认px单位
      marginTop: {
        type: [String, Number],
        default: 0
      },
      ...(_h = (_g = uni.$uv) == null ? void 0 : _g.props) == null ? void 0 : _h.empty
    }
  };
  const _sfc_main$4 = {
    name: "uv-empty",
    mixins: [mpMixin, mixin, props],
    data() {
      return {
        icons: {
          car: "购物车为空",
          page: "页面不存在",
          search: "没有搜索结果",
          address: "没有收货地址",
          "wifi-off": "没有WiFi",
          order: "订单为空",
          coupon: "没有优惠券",
          favor: "暂无收藏",
          permission: "无权限",
          history: "无历史记录",
          news: "无新闻列表",
          message: "消息列表为空",
          list: "列表为空",
          data: "数据为空",
          comment: "暂无评论"
        }
      };
    },
    computed: {
      // 组件样式
      emptyStyle() {
        const style = {};
        style.marginTop = this.$uv.addUnit(this.marginTop);
        return this.$uv.deepMerge(style, this.$uv.addStyle(this.customStyle));
      },
      // 文本样式
      textStyle() {
        const style = {};
        style.color = this.textColor;
        style.fontSize = this.$uv.addUnit(this.textSize);
        return style;
      },
      // 判断icon是否图片路径
      isImg() {
        const isBase64 = this.icon.indexOf("data:") > -1 && this.icon.indexOf("base64") > -1;
        return this.icon.indexOf("/") !== -1 || isBase64;
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uv_icon = resolveEasycom(vue.resolveDynamicComponent("uv-icon"), __easycom_0);
    return _ctx.show ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: "uv-empty",
        style: vue.normalizeStyle([$options.emptyStyle])
      },
      [
        !$options.isImg ? (vue.openBlock(), vue.createBlock(_component_uv_icon, {
          key: 0,
          name: _ctx.mode === "message" ? "chat" : `empty-${_ctx.mode}`,
          size: _ctx.iconSize,
          color: _ctx.iconColor,
          "margin-top": "14"
        }, null, 8, ["name", "size", "color"])) : (vue.openBlock(), vue.createElementBlock("image", {
          key: 1,
          style: vue.normalizeStyle({
            width: _ctx.$uv.addUnit(_ctx.width),
            height: _ctx.$uv.addUnit(_ctx.height)
          }),
          src: _ctx.icon,
          mode: "widthFix"
        }, null, 12, ["src"])),
        vue.createElementVNode(
          "text",
          {
            class: "uv-empty__text",
            style: vue.normalizeStyle([$options.textStyle])
          },
          vue.toDisplayString(_ctx.text ? _ctx.text : $data.icons[_ctx.mode]),
          5
          /* TEXT, STYLE */
        ),
        vue.createElementVNode("view", { class: "uv-empty__wrap" }, [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])
      ],
      4
      /* STYLE */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$1], ["__scopeId", "data-v-6efcec67"], ["__file", "D:/uniapp/news-forum/uni_modules/uv-empty/components/uv-empty/uv-empty.vue"]]);
  const en = {
    "uni-load-more.contentdown": "Pull up to show more",
    "uni-load-more.contentrefresh": "loading...",
    "uni-load-more.contentnomore": "No more data"
  };
  const zhHans = {
    "uni-load-more.contentdown": "上拉显示更多",
    "uni-load-more.contentrefresh": "正在加载...",
    "uni-load-more.contentnomore": "没有更多数据了"
  };
  const zhHant = {
    "uni-load-more.contentdown": "上拉顯示更多",
    "uni-load-more.contentrefresh": "正在加載...",
    "uni-load-more.contentnomore": "沒有更多數據了"
  };
  const messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  let platform;
  setTimeout(() => {
    platform = uni.getSystemInfoSync().platform;
  }, 16);
  const {
    t
  } = initVueI18n(messages);
  const _sfc_main$3 = {
    name: "UniLoadMore",
    emits: ["clickLoadMore"],
    props: {
      status: {
        // 上拉的状态：more-loading前；loading-loading中；noMore-没有更多了
        type: String,
        default: "more"
      },
      showIcon: {
        type: Boolean,
        default: true
      },
      iconType: {
        type: String,
        default: "auto"
      },
      iconSize: {
        type: Number,
        default: 24
      },
      color: {
        type: String,
        default: "#777777"
      },
      contentText: {
        type: Object,
        default() {
          return {
            contentdown: "",
            contentrefresh: "",
            contentnomore: ""
          };
        }
      },
      showText: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        webviewHide: false,
        platform,
        imgBase64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlBMzU3OTlEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlBMzU3OUFEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOUEzNTc5N0Q5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOUEzNTc5OEQ5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt+ALSwAAA6CSURBVHja1FsLkFZVHb98LM+F5bHL8khA1iSeiyQBCRM+YGqKUnnJTDLGI0BGZlKDIU2MMglUiDApEZvSsZnQtBRJtKwQNKQMFYeRDR10WOLd8ljYXdh+v8v5fR3Od+797t1dnOnO/Ofce77z+J//+b/P+ZqtXbs2sJ9MJhNUV1cHJ06cCJo3bx7EPc2aNcvpy7pWrVoF+/fvDyoqKoI2bdoE9fX1F7TjN8a+EXBn/fkfvw942Tf+wYMHg9mzZwfjxo0LDhw4EPa1x2MbFw/fOGfPng1qa2tzcCkILsLDydq2bRsunpOTMM7TD/W/tZDZhPdeKD+yGxHhdu3aBV27dg3OnDlzMVANMheLAO3btw8KCwuDmpoaX5OxbgUIMEq7K8IcPnw4KCsrC/r37x8cP378/4cAXAB3vqSkJMuiDhTkw+XcuXNhOWbMmKBly5YhUT8xArhyFvP0BfwRsAuwxJZJsm/nzp2DTp06he/OU+cZ64K6o0ePBkOHDg2GDx8e6gEbJ5Q/NHNuAJQ1hgBeHUDlR7nVTkY8rQAvAi4z34vR/mPs1FoRsaCgIJThI0eOBC1atEiFGGV+5MiRoS45efJkqFjJFXV1dQuA012m2WcwTw98fy6CqBdsaiIO4CScrGPHjvk4odhavPquRtFWXEC25VgkREKOCh/qDSq+vn37htzD/mZTOmOc5U7zKzBPEedygWshcDyWvs30igAbU+6oyMgJBCFhwQE0fccxN60Ay9iebbjoDh06hMowjQxT4fXq1SskArmHZpkArvixp/kWzHdMeArExSJEaiXIjjRjRJ4DaAGWpibLzXN3Fm1vA5teBgh3j1Rv3bp1YgKwPdmf2p9zcyNYYgPKMfY0T5f5nNYdw158nJ8QawW4CLKwiOBSEgO/hok2eBydR+3dYH+PLxA5J8Vv0KBBwenTp0P2JWAx6+yFEBfs8lMY+y0SWMBNI9E4ThKi58VKTg3FQZS1RQF1cz27eC0QHMu+3E0SkUowjhVt5VdaWhp07949ZHv2Qd1EjDXM2cla1M0nl3GxAs3J9yREzyTdFVKVFOaE9qRA8GM0WebRuo9JGZKA7Mv2SeS/Z8+eoQ9BArMfFrLGo6jvxbhHbJZnKX2Rzz1O7QhJJ9Cs2ZMaWIyq/zhdeqPNfIoHd58clIQD+JSXl4dKlyIAuBdVXZwFVWKspSSoxE++h8x4k3uCnEhE4I5KwRiFWGOU0QWKiCYLbdoRMRKAu2kQ9vkfLU6dOhX06NEjlH+yMRZSinnuyWnYosVcji8CEA/6Cg2JF+IIUBqnGKUTCNwtwBN4f89RiK1R96DEgO2o0NDmtEdvVFdVVYV+P3UAPUEs6GFwV3PHmXkD4vh74iDFJysVI/MlaQhwKeBNTLYX5VuA8T4/gZxA4MRGFxDB6R7OmYPfyykGRJbyie+XnGYnQIC/coH9+vULiYrxrkL9ZA9+0ykaHIfEpM7ge8TiJ2CsHYwyMfafAF1yCGBHYIbCVDjDjKt7BeB51D+LgQa6OkG7IDYEEtvQ7lnXLKLtLdLuJBpE4gPUXcW2+PkZwOex+4cGDhwYDBkyRL7/HFcEwUGPo/8uWRUpYnfxGHco8HkewLHLyYmAawAPuIFZxhOpDfJQ8gbUv41yORAptMWBNr6oqMhWird5+u+iHmBb2nhjDV7HWBNQTgK8y11l5NetWzc5ULscAtSj7nbNI0skhWeUZCc0W4nyH/jO4Vz0u1IeYhbk4AiwM6tjxIWByHsoZ9qcIBPJd/y+DwPfBESOmCa/QF3WiZHucLlEDpNxcNhmheEOPgdQNx6/VZFQzFZ5TN08AHXQt2Ii3EdyFuUsPtTcGPhW5iMiCNELvz+Gdn9huG4HUJaW/w3g0wxV0XaG7arG2WeKiUWYM4Y7GO5ezshTARbbWGw/DvXkpp/ivVvE0JVoMxN4rpGzJMhE5Pl+xlATsDIqikP9F9D2z3h9nOksEUFhK+qO4rcPkoalMQ/HqJLIyb3F3JdjrCcw1yZ8joyJLR5gCo54etlag7qIoeNh1N1BRYj3DTFJ0elotxPlVzkGuYAmL0VSJVGAJA41c4Z6A3BzTLfn0HYwYKEI6CUAMzZEWvLsIcQOo1AmmyyM72nHJCfYsogflGV6jEk9vyQZXSuq6w4c16NsGcGZbwOPr+H1RkOk2LEzjNepxQkihHSCQ4ynAYNRx2zMKV92CQMWqj8J0BRE8EShxRFN6YrfCRhC0x3r/Zm4IbQCcmJoV0kMamllccR6FjHqUC5F2R/wS2dcymOlfAKOS4KmzQb5cpNC2MC7JhVn5wjXoJ44rYhLh8n0eXOCorJxa7POjbSlCGVczr34/RsAmrcvo9s+wGp3tzVhntxiXiJ4nvEYb4FJkf0O8HocAePmLvCxnL0AORraVekJk6TYjDabRVXfRE2lCN1h6ZQRN1+InUbsCpKwoBZHh0dODN9JBCUffItXxEavTQkUtnfTVAplCWL3JISz29h4NjotnuSsQKJCk8dF+kJR6RARjrqFVmfPnj3ZbK8cIJ0msd6jgHPGtfVTQ8VLmlvh4mct9sobRmPic0DyDQQnx/NlfYUgyz59+oScsH379pAwXABD32nTpoUHIToESeI5mnbE/UqDdyLcafEBf2MCqgC7NwxIbMREJQ0g4D4sfJwnD+AmRrII05cfMWJE+L1169bQr+fip06dGp4oJ83lmYd5wj/EmMa4TaHivo4EeCguYZBnkB5g2aWA69OIEnUHOaGysjIYMGBAMGnSpODYsWPZwCpFmm4lNq+4gSLQA7jcX8DwtjEyRC8wjabnXEx9kfWnTJkSJkAo90xpJVV+FmcVNeYAF5zWngS4C4O91MBxmAv8blLEpbjI5sz9MTdAhcgkCT1RO8mZkAjfiYpTEvStAS53Uw1vAiUGgZ3GpuQEYvoiBqlIan7kSDHnTwJQFNiPu0+5VxCVYhcZIjNrdXUDdp+Eq5AZ3Gkg8QAyVZRZIk4Tl4QAbF9cXJxNYZMAtAokgs4BrNxEpCtteXg7DDTMDKYNSuQdKsnJBek7HxewvxaosWxLYXtw+cJp18217wql4aKCfBNoEu0O5VU+PhctJ0YeXD4C6JQpyrlpSLTojpGGGN5YwNziChdIZLk4lvLcFJ9jMX3QdiImY9bmGQU+TRUL5CHITTRlgF8D9ouD1MfmLoEPl5xokIumZ2cfgMpHt47IW9N64Hsh7wQYYjyIugWuF5fCqYncXRd5vPMWyizzvhi/32+nvG0dZc9vR6fZOu0md5e+uC408FvKSIOZwXlGvxPv95izA2Vtvg1xKFWARI+vMX66HUhpQQb643uW1bSjuTWyw2SBvDrBvjFic1eGGlz5esq3ko9uSIlBRqPuFcCv8F4WIcN12nVaBd0SaYwI6PDDImR11JkqgHcPmQssjxIn6bUshygDFJUTxPMpHk+jfjPgupgdnYV2R/g7xSjtpah8RJBewhwf0gGK6XI92u4wXFEU40afJ4DN4h5LcAd+40HI3JgJecuT0c062W0i2hQJUTcxan3/CMW1PF2K6bbA+Daz4xRs1D3Br1Cm0OihKCqizW78/nXAF/G5TXrEcVzaNMH6CyMswqsAHqDyDLEyou8lwOXnKF8DjI6KjV3KzMBiXkDH8ij/H214J5A596ekrZ3F0zXlWeL7+P5eUrNo3/QwC15uxthuzidy7DzKRwEDaAViiDgKbTbz7CJnzo0bN7pIfIiid8SuPwn25o3QCmpnyjlZkyxPP8EomCJzrGb7GJMx7tNsq4MT2xMUYaiErZOluTzKsnz3gwCeCZyVRZJfYplNEokEjwrPtxlxjeYAk+F1F74VAzPxQRNYYdtpOUvWs8J1sGhBJMNsb7igN8plJs1eSmLIhLKE4rvaCX27gOhLpLOsIzJ7qn/i+wZzcvSOZ23/du8TZjwV8zHIXoP4R3ifBxiFz1dcVpa3aPntPE+c6TmIWE9EtcMmAcPdWAhYhAXxcLOQi9L1WhD1Sc8p1d2oL7XGiRKp8F4A2i8K/nfI+y/gsTDJ/YC/8+AD5Uh04KHiGl+cIFPnBDDrPMjwRGkLXyxO4VGbfQWnDH2v0bVWE3C9QOXlepbgjEfIJQI6XDG3z5ahD9cw2pS78ipB85wyScNTvsVzlzzhL8/jRrnmVjfFJK/m3m4nj9vbgQTguT8XZTjsm672R5uJKEaQmBI/c58gyus8ZDagLpEVSJBIyHp4jn++xqPV71OgQgJYEWOtZ/haxRtKmWOBu8xdBLftWltsY84zE6WIEy/eIOWL+BaayMx+KHtL7EAkqdNDLiEXmEMUHniedtJqg9HmZtfvt26vNi0BdG3Ft3g8ZOf7PAu59TxtzivLNIekyi+wD1i8CuUiD9FXAa8C+/xS3JPmZnomyc7H+fb4/Se0bk41Fel621r4cgVxbq91V4jVqwB7HTe2M7jgB+QWHavZkDRPmZcASoZEmBx6i75bGjPcMdL4/VKGFAGWZkGzPG0XAbdL9A81G5LOmUnC9hHKJeO7dcUMjblSl12867ElFTtaGl20xvvLGPdVz/8TVuU7y0x1PG7vtNg24oz9Uo/Z412++VFWI7Fcog9tu9Lm6gvRmIPv9x1xmQAu6RDkXtbOtlGEmpgD5Nvnyc0dcv0EE6cfdi1HmhMf9wDF3k3gtRvEedhxjpgfqPb9PU9iEJHnyOUA7bQUXh6kq/D7l2iTjWv7XOD530BDr8jIrus+srXjt4MzumJMHuTsBa63YKE1+RR5lBjEikCCnWKWiHdzOgKO+nRIBAF88za/IFmJ3eMZov4CYxGBabcpGL8EYx+SeMXJeRwHNsV/h+vdxeuhEpN3ZyNY78Gm2fknJxVGhyjixPiQvVkNzT1elD9Py/aTAL64Hb9vcYmC9zfdXdT/C1LeGbg4rnBaAihDFJH12W5ulfNCNe/xTsP3bp8ikzJs5BF+5PNfAQYAPaseTdsEcaYAAAAASUVORK5CYII="
      };
    },
    computed: {
      iconSnowWidth() {
        return (Math.floor(this.iconSize / 24) || 1) * 2;
      },
      contentdownText() {
        return this.contentText.contentdown || t("uni-load-more.contentdown");
      },
      contentrefreshText() {
        return this.contentText.contentrefresh || t("uni-load-more.contentrefresh");
      },
      contentnomoreText() {
        return this.contentText.contentnomore || t("uni-load-more.contentnomore");
      }
    },
    mounted() {
      var pages2 = getCurrentPages();
      var page2 = pages2[pages2.length - 1];
      var currentWebview = page2.$getAppWebview();
      currentWebview.addEventListener("hide", () => {
        this.webviewHide = true;
      });
      currentWebview.addEventListener("show", () => {
        this.webviewHide = false;
      });
    },
    methods: {
      onClick() {
        this.$emit("clickLoadMore", {
          detail: {
            status: this.status
          }
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "uni-load-more",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      !$data.webviewHide && ($props.iconType === "circle" || $props.iconType === "auto" && $data.platform === "android") && $props.status === "loading" && $props.showIcon ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          style: vue.normalizeStyle({ width: $props.iconSize + "px", height: $props.iconSize + "px" }),
          class: "uni-load-more__img uni-load-more__img--android-MP"
        },
        [
          vue.createElementVNode(
            "view",
            {
              class: "uni-load-more__img-icon",
              style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
            },
            null,
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            {
              class: "uni-load-more__img-icon",
              style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
            },
            null,
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            {
              class: "uni-load-more__img-icon",
              style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
            },
            null,
            4
            /* STYLE */
          )
        ],
        4
        /* STYLE */
      )) : !$data.webviewHide && $props.status === "loading" && $props.showIcon ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 1,
          style: vue.normalizeStyle({ width: $props.iconSize + "px", height: $props.iconSize + "px" }),
          class: "uni-load-more__img uni-load-more__img--ios-H5"
        },
        [
          vue.createElementVNode("image", {
            src: $data.imgBase64,
            mode: "widthFix"
          }, null, 8, ["src"])
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true),
      $props.showText ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 2,
          class: "uni-load-more__text",
          style: vue.normalizeStyle({ color: $props.color })
        },
        vue.toDisplayString($props.status === "more" ? $options.contentdownText : $props.status === "loading" ? $options.contentrefreshText : $options.contentnomoreText),
        5
        /* TEXT, STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_5 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render], ["__scopeId", "data-v-9245e42c"], ["__file", "D:/uniapp/news-forum/uni_modules/uni-load-more/components/uni-load-more/uni-load-more.vue"]]);
  const _sfc_main$2 = {
    __name: "search",
    setup(__props) {
      const queryParams2 = vue.ref({
        pageNum: 1,
        pageSize: 10,
        keyword: ""
      });
      const onCancel = () => {
        uni.navigateBack({
          delta: 1
        });
      };
      const historySearch = vue.ref(uni.getStorageSync("historySearch") || []);
      const recommendList = vue.ref(["怪物猎人", "steam", "孩子们"]);
      const noData = vue.ref(false);
      const noSearch = vue.ref(false);
      const classList = vue.ref([]);
      const onSearch = () => {
        uni.showLoading();
        historySearch.value = [.../* @__PURE__ */ new Set([queryParams2.value.keyword, ...historySearch.value])].slice(0, 10);
        initParams(queryParams2.value.keyword);
        searchData();
        formatAppLog("log", "at pages/search/search.vue:136", queryParams2.value.keyword);
      };
      const onClear = () => {
        initParams();
      };
      const clickTab = (value) => {
        initParams(value);
        onSearch();
      };
      const removeHistory = () => {
        uni.showModal({
          title: "是否清空历史搜索？",
          success: (res) => {
            if (res.confirm) {
              uni.removeStorageSync("historySearch");
              historySearch.value = [];
            }
          }
        });
      };
      const searchData = async () => {
        try {
          let res = await apiQueryList(queryParams2.value.pageNum, queryParams2.value.keyword);
          classList.value = [...classList.value, ...res.list];
          if (queryParams2.value.pageSize > res.list.length) {
            formatAppLog("log", "at pages/search/search.vue:173", queryParams2.value.pageSize);
            noData.value = true;
            formatAppLog("log", "at pages/search/search.vue:175", noData.value);
          }
          if (res.list.length == 0 && classList.value.length == 0)
            noSearch.value = true;
          formatAppLog("log", "at pages/search/search.vue:178", res);
        } finally {
          uni.hideLoading();
        }
      };
      const initParams = (value = "") => {
        classList.value = [];
        noData.value = false;
        noSearch.value = false;
        queryParams2.value = {
          pageNum: 1,
          pageSize: 10,
          keyword: value || ""
        };
      };
      onReachBottom(() => {
        if (noData.value) {
          formatAppLog("log", "at pages/search/search.vue:200", "没有更多数据");
          return;
        }
        queryParams2.value.pageNum++;
        searchData();
      });
      onUnload(() => {
        uni.removeStorageSync("storgClassList", classList.value);
      });
      return (_ctx, _cache) => {
        const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_0$1);
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$6);
        const _component_uv_empty = resolveEasycom(vue.resolveDynamicComponent("uv-empty"), __easycom_2);
        const _component_uni_list_item = resolveEasycom(vue.resolveDynamicComponent("uni-list-item"), __easycom_3);
        const _component_uni_list = resolveEasycom(vue.resolveDynamicComponent("uni-list"), __easycom_4);
        const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_5);
        return vue.openBlock(), vue.createElementBlock("view", { class: "searchLayout" }, [
          vue.createElementVNode("view", { class: "search" }, [
            vue.createVNode(_component_uni_search_bar, {
              onConfirm: onSearch,
              onCancel,
              onClear,
              focus: "",
              placeholder: "搜索",
              modelValue: queryParams2.value.keyword,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => queryParams2.value.keyword = $event)
            }, null, 8, ["modelValue"])
          ]),
          !classList.value.length || noSearch.value ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
            historySearch.value.length ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "history"
            }, [
              vue.createElementVNode("view", { class: "topTitle" }, [
                vue.createElementVNode("view", { class: "text" }, "最近搜索"),
                vue.createElementVNode("view", {
                  class: "icon",
                  onClick: removeHistory
                }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "trash",
                    size: "25"
                  })
                ])
              ]),
              vue.createElementVNode("view", { class: "tabs" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(historySearch.value, (tab) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "tab",
                      key: tab,
                      onClick: ($event) => clickTab(tab)
                    }, vue.toDisplayString(tab), 9, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ])) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("view", { class: "recommend" }, [
              vue.createElementVNode("view", { class: "topTitle" }, [
                vue.createElementVNode("view", { class: "text" }, "热门搜索")
              ]),
              vue.createElementVNode("view", { class: "tabs" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(recommendList.value, (tab) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "tab",
                      key: tab,
                      onClick: ($event) => clickTab(tab)
                    }, vue.toDisplayString(tab), 9, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ])
          ])) : vue.createCommentVNode("v-if", true),
          noSearch.value ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "noSearch"
          }, [
            vue.createVNode(_component_uv_empty, {
              mode: "search",
              icon: "http://cdn.uviewui.com/uview/empty/search.png"
            })
          ])) : (vue.openBlock(), vue.createElementBlock("view", { key: 2 }, [
            vue.createCommentVNode(" 列表 "),
            vue.createElementVNode("view", { class: "list" }, [
              vue.createVNode(_component_uni_list, null, {
                default: vue.withCtx(() => [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(classList.value, (item, index2) => {
                      return vue.openBlock(), vue.createBlock(_component_uni_list_item, {
                        direction: "column",
                        key: index2,
                        to: "/pages/detail/detail?essayId=" + item.essayId
                      }, {
                        header: vue.withCtx(() => [
                          vue.createElementVNode("view", { class: "header" }, [
                            vue.createElementVNode("image", {
                              class: "slot-image",
                              src: item.essayAuthorImg,
                              mode: "aspectFill"
                            }, null, 8, ["src"]),
                            vue.createElementVNode(
                              "text",
                              { class: "name" },
                              vue.toDisplayString(item.essayAuthorName),
                              1
                              /* TEXT */
                            )
                          ])
                        ]),
                        body: vue.withCtx(() => [
                          vue.createElementVNode(
                            "text",
                            { class: "body-1" },
                            vue.toDisplayString(item.essayTitle),
                            1
                            /* TEXT */
                          ),
                          vue.createElementVNode(
                            "text",
                            { class: "body-2" },
                            vue.toDisplayString(item.essayContent),
                            1
                            /* TEXT */
                          )
                        ]),
                        footer: vue.withCtx(() => [
                          vue.createElementVNode("view", { class: "footer-1" }, [
                            (vue.openBlock(true), vue.createElementBlock(
                              vue.Fragment,
                              null,
                              vue.renderList(item.essayImgs, (i) => {
                                return vue.openBlock(), vue.createElementBlock("image", {
                                  class: "footer-image",
                                  src: i,
                                  mode: "aspectFill"
                                }, null, 8, ["src"]);
                              }),
                              256
                              /* UNKEYED_FRAGMENT */
                            ))
                          ]),
                          vue.createElementVNode("view", { class: "footer-2" }, [
                            vue.createVNode(_component_uni_icons, {
                              class: "icons-1",
                              type: "chat",
                              size: "20"
                            }),
                            vue.createElementVNode(
                              "view",
                              { class: "likesText" },
                              vue.toDisplayString(item.essayReviews),
                              1
                              /* TEXT */
                            ),
                            vue.createVNode(_component_uni_icons, {
                              class: "icons-1",
                              type: "hand-up",
                              size: "20"
                            }),
                            vue.createElementVNode(
                              "view",
                              { class: "likesText" },
                              vue.toDisplayString(item.essayLikes),
                              1
                              /* TEXT */
                            )
                          ])
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["to"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            noData.value || classList.value.length ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "loadingLayout"
            }, [
              vue.createVNode(_component_uni_load_more, {
                status: noData.value ? "noMore" : "loading"
              }, null, 8, ["status"])
            ])) : vue.createCommentVNode("v-if", true)
          ]))
        ]);
      };
    }
  };
  const PagesSearchSearch = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-c10c040c"], ["__file", "D:/uniapp/news-forum/pages/search/search.vue"]]);
  const _sfc_main$1 = {
    __name: "userInfo",
    setup(__props) {
      const essayList = vue.ref([]);
      const paging = vue.ref();
      const title = vue.ref();
      const queryList = async (pageNo, pageSize) => {
        let data = {
          "pageNo": pageNo,
          "info": title.value,
          "userId": uni.getStorageSync("userId")
        };
        let res = await apiGetMyInfo(data);
        paging.value.complete(res.list);
      };
      onLoad((e) => {
        if (e.key === "essay") {
          title.value = "我的帖子";
        } else if (e.key == "comment") {
          title.value = "我的评论";
        } else {
          title.value = "我的点赞";
        }
      });
      const reback = () => {
        uni.navigateBack({
          delta: 1
          //返回层数，2则上上页
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$6);
        const _component_custom_refresher = resolveEasycom(vue.resolveDynamicComponent("custom-refresher"), __easycom_1$2);
        const _component_custom_nomore = resolveEasycom(vue.resolveDynamicComponent("custom-nomore"), __easycom_2$2);
        const _component_uni_list_item = resolveEasycom(vue.resolveDynamicComponent("uni-list-item"), __easycom_3);
        const _component_uni_list = resolveEasycom(vue.resolveDynamicComponent("uni-list"), __easycom_4);
        const _component_z_paging = resolveEasycom(vue.resolveDynamicComponent("z-paging"), __easycom_5$1);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_z_paging, {
            ref_key: "paging",
            ref: paging,
            modelValue: essayList.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => essayList.value = $event),
            onQuery: queryList,
            class: "list"
          }, {
            top: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "bar" }, [
                vue.createElementVNode("view", { class: "left" }, [
                  vue.createVNode(_component_uni_icons, {
                    class: "icon",
                    type: "left",
                    size: "30",
                    onClick: reback
                  })
                ]),
                vue.createElementVNode(
                  "view",
                  {
                    class: "bar-text",
                    style: vue.normalizeStyle({ height: vue.unref(getStatusBarHeight)() + vue.unref(getTitleBarHeight)() + "px", lineHeight: vue.unref(getStatusBarHeight)() + vue.unref(getTitleBarHeight)() + "px" })
                  },
                  vue.toDisplayString(title.value),
                  5
                  /* TEXT, STYLE */
                )
              ])
            ]),
            refresher: vue.withCtx(({ refresherStatus }) => [
              vue.createVNode(_component_custom_refresher, { status: refresherStatus }, null, 8, ["status"])
            ]),
            loadingMoreNoMore: vue.withCtx(() => [
              vue.createCommentVNode(" 此处的custom-nomore为demo中自定义的组件，非z-paging的内置组件，请在实际项目中自行创建。这里插入什么view，没有更多数据就显示什么view "),
              vue.createVNode(_component_custom_nomore)
            ]),
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_list, null, {
                default: vue.withCtx(() => [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(essayList.value, (item, index2) => {
                      return vue.openBlock(), vue.createBlock(_component_uni_list_item, {
                        direction: "row",
                        key: index2,
                        to: "/pages/detail/detail?essayId=" + item.essayId
                      }, {
                        body: vue.withCtx(() => [
                          vue.createElementVNode("view", { class: "uni-list-box uni-content" }, [
                            vue.createElementVNode(
                              "view",
                              { class: "uni-title uni-ellipsis-2" },
                              vue.toDisplayString(item.essayTitle),
                              1
                              /* TEXT */
                            ),
                            vue.createElementVNode("view", { class: "uni-note" }, [
                              vue.createElementVNode(
                                "text",
                                null,
                                vue.toDisplayString(item.essayAuthorName),
                                1
                                /* TEXT */
                              ),
                              vue.createElementVNode(
                                "text",
                                null,
                                vue.toDisplayString(item.essayTime),
                                1
                                /* TEXT */
                              )
                            ])
                          ])
                        ]),
                        footer: vue.withCtx(() => [
                          vue.createElementVNode("view", {
                            class: "uni-thumb",
                            style: { "margin": "0" }
                          }, [
                            vue.createElementVNode("image", {
                              class: "footerImage",
                              src: item.essayImgs,
                              mode: "aspectFill"
                            }, null, 8, ["src"])
                          ])
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["to"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]);
      };
    }
  };
  const PagesUserUserInfo = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2f34225a"], ["__file", "D:/uniapp/news-forum/pages/user/userInfo.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/hand-up/hand-up", PagesHandUpHandUp);
  __definePage("pages/user/user", PagesUserUser);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/detail/detail", PagesDetailDetail);
  __definePage("pages/add/add", PagesAddAdd);
  __definePage("pages/detail/reply", PagesDetailReply);
  __definePage("pages/search/search", PagesSearchSearch);
  __definePage("pages/user/userInfo", PagesUserUserInfo);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/uniapp/news-forum/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
