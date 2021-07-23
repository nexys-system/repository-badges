import React from "react";
import { Badge } from "./type";

const CopyIcon = ({}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    width={"20"}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>
);

const Markdown = ({ badges }: { badges: Badge[] }): JSX.Element => {
  const markdown = badges
    .map(({ label, link, img }) => `[![${label}](${img})](${link})`)
    .join("\n");

  return (
    <>
      <a
        style={{ cursor: "pointer" }}
        onClick={() =>
          navigator.clipboard.writeText(markdown).then((x) => alert("copied"))
        }
      >
        <CopyIcon /> Copy
      </a>
      <pre>{markdown}</pre>
    </>
  );
};

export default Markdown;
