import React from "./_snowpack/pkg/react.js";
const Form = ({onSubmit}) => {
  const [value, setValue] = React.useState("");
  const handleChange = (v) => {
    setValue(v.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };
  return /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement("div", {
    className: "input-group mb-3"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "form-control",
    type: "text",
    value,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement("div", {
    className: "input-group-append"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-outline-secondary",
    type: "submit"
  }, "Go"))));
};
export default Form;
