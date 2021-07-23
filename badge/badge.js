import React from "../_snowpack/pkg/react.js";
const Badges = ({badges}) => /* @__PURE__ */ React.createElement("ul", null, badges.map((badge, i) => /* @__PURE__ */ React.createElement("li", {
  key: i
}, /* @__PURE__ */ React.createElement("a", {
  target: "_blank",
  href: badge.link
}, /* @__PURE__ */ React.createElement("img", {
  src: badge.img
})))));
export default Badges;
