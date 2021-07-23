import React from "react";

import { title } from "./config";

import Form from "./form";
import Badges from "./badge";

export default () => {
  const [value, setValue] = React.useState<string | undefined>(undefined);

  return (
    <div className="row">
      <div className="col-md-6">
        <h1>{title}</h1>

        <Form onSubmit={(v) => setValue(v)} />
      </div>

      <div className="col-md-6">{value && <Badges badge={value} />}</div>
    </div>
  );
};
