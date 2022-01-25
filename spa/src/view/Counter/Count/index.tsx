import React from "react";
import { useSelector } from "react-redux";
import { selectCount } from "../../../storage/counterSlice";

export interface Props {}

const Component: React.FunctionComponent<Props> = () => {
  const count = useSelector(selectCount);

  return (
    <span className="title is-3" data-e2e="counter-value">
      {count}
    </span>
  );
};

export default Component;
