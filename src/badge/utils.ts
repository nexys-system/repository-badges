import { Badge } from "./type";
/*
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/nexys-system/mui-list-ts.svg)](http://isitmaintained.com/project/nexys-system/mui-list-ts "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/nexys-system/mui-list-ts.svg)](http://isitmaintained.com/project/nexys-system/mui-list-ts "Percentage of issues still open")
![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
[![Bundlephobia](https://badgen.net/bundlephobia/min/@nexys/mui-list)](https://bundlephobia.com/result?p=@nexys/mui-list@2.3.0)*/

export const getBadges = (packageName: string): Badge[] => {
  const npmUrl = "https://www.npmjs.com/package/" + packageName;
  const npmFuryBadge = `https://badge.fury.io/js/${encodeURIComponent(
    packageName
  )}.svg`;
  const npmShieldBadge = `https://img.shields.io/npm/v/${packageName}.svg`;
  /* this one rarely works
  const bundlephobia: Badge = {
    label: "Bundleophobia",
    img: `https://badgen.net/bundlephobia/min/${packageName}`,
    link: `https://bundlephobia.com/result?p=${packageName}`,
  };*/

  const prettierBadge = {
    label: "Prettier",
    link: "https://prettier.io/",
    img: "https://img.shields.io/badge/code_style-prettier-ff69b4.svg",
  };

  return [
    {
      label: "NPM package",
      link: npmUrl,
      img: npmFuryBadge,
    },
    {
      label: "NPM package",
      link: npmUrl,
      img: npmShieldBadge,
    },
    //bundlephobia,
    prettierBadge,
  ];
};
