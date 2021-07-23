import React from "react";

interface Badge {
  link: string;
  img: string;
}

/*
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/nexys-system/mui-list-ts.svg)](http://isitmaintained.com/project/nexys-system/mui-list-ts "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/nexys-system/mui-list-ts.svg)](http://isitmaintained.com/project/nexys-system/mui-list-ts "Percentage of issues still open")
![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
[![Bundlephobia](https://badgen.net/bundlephobia/min/@nexys/mui-list)](https://bundlephobia.com/result?p=@nexys/mui-list@2.3.0)*/
const Badges = ({ badge }: { badge: string }) => {
  const npmUrl = "https://www.npmjs.com/package/" + badge;
  const npmFuryBadge = `https://badge.fury.io/js/${encodeURIComponent(
    badge
  )}.svg`;
  const npmShieldBadge = `https://img.shields.io/npm/v/${badge}.svg`;
  const bundlephobia: Badge = {
    img: `https://badgen.net/bundlephobia/min/${badge}`,
    link: `https://bundlephobia.com/result?p=${badge}`,
  };

  const prettierBadge = {
    link: "https://prettier.io/",
    img: "https://img.shields.io/badge/code_style-prettier-ff69b4.svg",
  };

  const badges = [
    {
      link: npmUrl,
      img: npmFuryBadge,
    },
    {
      link: npmUrl,
      img: npmShieldBadge,
    },
    bundlephobia,
    prettierBadge,
  ];

  return (
    <ul>
      {badges.map((badge, i) => (
        <li key={i}>
          <a target={"_blank"} href={badge.link}>
            <img src={badge.img} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Badges;
