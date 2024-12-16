import React from "react";
interface Props {
  color?: "primary" | "danger";
  onClick: () => void;
  name: string;
}
const Button = ({ color = "primary", name, onClick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
