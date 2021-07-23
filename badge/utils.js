export const getBadges = (packageName) => {
  const npmUrl = "https://www.npmjs.com/package/" + packageName;
  const npmFuryBadge = `https://badge.fury.io/js/${encodeURIComponent(packageName)}.svg`;
  const npmShieldBadge = `https://img.shields.io/npm/v/${packageName}.svg`;
  const bundlephobia = {
    label: "Bundleophobia",
    img: `https://badgen.net/bundlephobia/min/${packageName}`,
    link: `https://bundlephobia.com/result?p=${packageName}`
  };
  const prettierBadge = {
    label: "Prettier",
    link: "https://prettier.io/",
    img: "https://img.shields.io/badge/code_style-prettier-ff69b4.svg"
  };
  return [
    {
      label: "NPM package",
      link: npmUrl,
      img: npmFuryBadge
    },
    {
      label: "NPM package",
      link: npmUrl,
      img: npmShieldBadge
    },
    bundlephobia,
    prettierBadge
  ];
};
