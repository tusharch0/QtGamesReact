import React from "react";
import styles from './Button.module.css'
interface Props {
  color?: "primary" | "danger";
  onClick: (alert:boolean) => void;
  name: string;
}
const Button = ({ color = "primary", name, onClick }: Props) => {
  return (
    <><button type="button" className={"btn btn-" + color} onClick={() => onClick(true)}>
      {name}
    </button>
    <button type= 'button' className = {styles.btnDanger}>
        cancel
      </button></>
  );
};

export default Button;
