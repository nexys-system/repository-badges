import React from "react";

import { title } from "./config";

import Form from "./form";
import Badges from "./badge";

export default () => {
  const [value, setValue] = React.useState<string | undefined>(undefined);

  return (
    <>
      <h1>{title}</h1>
      <p>Enter the name of the package belwo</p>
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
