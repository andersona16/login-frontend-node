import React from "react";
import { ButtonContainer } from "./styles";

interface CustomButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  disabled = false,
  type = "button",
  children,
  ...props
}) => {
  return (
    <ButtonContainer
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </ButtonContainer>
  );
};

export default CustomButton;
