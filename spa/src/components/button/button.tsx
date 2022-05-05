import React from "react";


interface Buttons { 
  label: string,
  value?: string,
  onclick: (e: any) => void
 }

export const Button: React.FunctionComponent<Buttons> = ({label, value, onclick}) => {
  return <button type="button" onClick={onclick} className="" value={value}>{label}</button>;
};
