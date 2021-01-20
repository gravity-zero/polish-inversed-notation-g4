import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../../storage/counterSlice";

export interface Props {}

export const Controls: React.FunctionComponent<Props> = ({ children }) => {
  const dispatch = useDispatch();

  function minus(): void {
    dispatch(decrement());
  }

  function plus(): void {
    dispatch(increment());
  }

  return (
    <div className="field is-grouped">
      <p className="control">
        <button
          className="button is-primary"
          aria-label="Decrement value"
          onClick={minus}
        >
          <span className="icon is-small">
            <i className="fas fa-minus" />
          </span>
        </button>
      </p>
      <p className="control">{children}</p>
      <p className="control">
        <button
          className="button is-primary"
          aria-label="Increment value"
          onClick={plus}
          data-e2e="counter-increment"
        >
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
        </button>
      </p>
    </div>
  );
};
