import React from "react";
import { Badge } from "./type";

const Badges = ({ badges }: { badges: Badge[] }) => (
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

export default Badges;
