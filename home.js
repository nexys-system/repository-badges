import React from "./_snowpack/pkg/react.js";
import {title} from "./config.js";
import Form from "./form.js";
import Badges from "./badge/index.js";
export default () => {
  const [value, setValue] = React.useState(void 0);
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  if (!value && "q" in params) {
    setValue(params["q"]);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, title), /* @__PURE__ */ React.createElement("p", null, "Enter the name of the package below"), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-md-3"
  }, /* @__PURE__ */ React.createElement(Form, {
    onSubmit: (v) => setValue(v)
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-md-9"
  }, value && /* @__PURE__ */ React.createElement(Badges, {
    packageName: value
  }))));
};
