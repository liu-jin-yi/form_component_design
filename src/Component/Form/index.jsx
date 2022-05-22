import { Children, cloneElement } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
export const Form = ({ children, onSubmit, initialValue, ...props }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fieldValues = Object.fromEntries(formData.entries());
    onSubmit(fieldValues);
  };
  return (
    <form onSubmit={handleSubmit} {...props}>
      {Children.map(children, (child) => {
        if (child.type.name !== "Button") {
          return cloneElement(child, {
            ...child.props,
            initialValue: initialValue?.[child.props?.name],
          });
        }
        return child;
      })}
    </form>
  );
};

Form.Input = Input;
Form.Button = Button;
