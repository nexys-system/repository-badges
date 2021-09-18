import * as __SNOWPACK_ENV__ from './_snowpack/env.js';

export const version = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_VERSION || "unsetversion";
export const sha = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_GIT_SHA || "unsetsha";
export const title = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_TITLE || "Repository Badges";
export const basename = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_URL;
const ghUrl = "https://github.com/nexys-system/repository-badges";
export const github = {sha: `${ghUrl}/commit/${sha}`, url: ghUrl};
