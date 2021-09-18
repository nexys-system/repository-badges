import React from "react";

const Form = ({ onSubmit }: { onSubmit: (v: string) => void }) => {
  const [value, setValue] = React.useState<string>("");

  const handleChange = (v: any) => {
    setValue(v.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          className={"form-control"}
          type={"text"}
          value={value}
          onChange={handleChange}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit">
            Go
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
