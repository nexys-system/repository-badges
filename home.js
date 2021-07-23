import React from "./_snowpack/pkg/react.js";
import {title} from "./config.js";
import Form from "./form.js";
import Badges from "./badge.js";
export default () => {
  const [value, setValue] = React.useState(void 0);
  return /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-md-6"
  }, /* @__PURE__ */ React.createElement("h1", null, title), /* @__PURE__ */ React.createElement(Form, {
    onSubmit: (v) => setValue(v)
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-md-6"
  }, value && /* @__PURE__ */ React.createElement(Badges, {
    badge: value
  })));
};
