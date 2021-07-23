import React from "react";

import BadgesUI from "./badge";
import Markdown from "./markdown";
import { getBadges } from "./utils";

const Badges = ({ packageName }: { packageName: string }) => {
  const badges = getBadges(packageName);

  return (
    <>
      <BadgesUI badges={badges} />
      <Markdown badges={badges} />
    </>
  );
};

export default Badges;
