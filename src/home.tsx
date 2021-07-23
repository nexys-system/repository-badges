import React from "react";

import { title } from "./config";

import Form from "./form";
import Badges from "./badge";

export default () => {
  const [value, setValue] = React.useState<string | undefined>(undefined);

  // url query params
  // look for ?q=packagename, if exists then sets it as value
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());

  if (!value && "q" in params) {
    setValue(params["q"]);
  }
  // end url query params

  return (
    <>
      <h1>{title}</h1>
      <p>Enter the name of the package below</p>
      <div className="row">
        <div className="col-md-3">
          <Form onSubmit={(v) => setValue(v)} />
        </div>

        <div className="col-md-9">
          {value && <Badges packageName={value} />}
        </div>
      </div>
    </>
  );
};
