import React from "../_snowpack/pkg/react.js";
import BadgesUI from "./badge.js";
import Markdown from "./markdown.js";
import {getBadges} from "./utils.js";
const Badges = ({packageName}) => {
  const badges = getBadges(packageName);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", null, "Package ", /* @__PURE__ */ React.createElement("code", null, packageName)), /* @__PURE__ */ React.createElement(BadgesUI, {
    badges
  }), /* @__PURE__ */ React.createElement(Markdown, {
    badges
  }));
};
export default Badges;
