import React from "react";
import { ButtonTag } from "./styles";
import { Link } from "react-router-dom";

interface PropsButton {
  children?: any;
  type?: any;
  onClick?: any;
  buttonStyle: boolean;
  buttonSize: boolean;
}

export const Button = (props: PropsButton) => {
  return (
    <Link to="/sign-up" className="btn-mobile">
      <ButtonTag
        onClick={props.onClick}
        type={props.type}
        size={props.buttonSize}
        style={props.buttonStyle}
      >
        {props.children}
      </ButtonTag>
    </Link>
  );
};
