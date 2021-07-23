import React from "./_snowpack/pkg/react.js";
const Badges = ({badge}) => {
  const npmUrl = "https://www.npmjs.com/package/" + badge;
  const npmFuryBadge = `https://badge.fury.io/js/${encodeURIComponent(badge)}.svg`;
  const npmShieldBadge = `https://img.shields.io/npm/v/${badge}.svg`;
  const bundlephobia = {
    img: `https://badgen.net/bundlephobia/min/${badge}`,
    link: `https://bundlephobia.com/result?p=${badge}`
  };
  const prettierBadge = {
    link: "https://prettier.io/",
    img: "https://img.shields.io/badge/code_style-prettier-ff69b4.svg"
  };
  const badges = [
    {
      link: npmUrl,
      img: npmFuryBadge
    },
    {
      link: npmUrl,
      img: npmShieldBadge
    },
    bundlephobia,
    prettierBadge
  ];
  return /* @__PURE__ */ React.createElement("ul", null, badges.map((badge2, i) => /* @__PURE__ */ React.createElement("li", {
    key: i
  }, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: badge2.link
  }, /* @__PURE__ */ React.createElement("img", {
    src: badge2.img
  })))));
};
export default Badges;
