import React from "react";


interface ButtonProps {
  className?: string
  label: string,
  value?: string,
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

export const Button: React.FunctionComponent<ButtonProps> = ({ className, label, value, handleClick }) => {
  return <button type="button" className={className} onClick={handleClick} value={value}>{label}</button>;
};
