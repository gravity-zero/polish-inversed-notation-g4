import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  incrementByAmount,
  incrementByAmountAsync,
} from "../../../storage/counterSlice";

const DEFAULT_AMOUNT = 2;

export interface Props {}

export const AdditionalControls: React.FunctionComponent<Props> = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState<number>(DEFAULT_AMOUNT);

  function onInputChange(event: React.SyntheticEvent<HTMLInputElement>): void {
    const value = Number((event.target as HTMLInputElement).value) || 0;
    setAmount(value);
  }

  function addAmount(): void {
    dispatch(incrementByAmount(amount));
  }

  function addAmountAsync(): void {
    dispatch(incrementByAmountAsync(amount));
  }

  return (
    <div className="field is-grouped">
      <p className="control">
        <input
          className="input is-small"
          aria-label="Set increment amount"
          value={amount}
          onChange={onInputChange}
        />
      </p>
      <p className="control">
        <button className="button is-small" onClick={addAmount}>
          Add amount
        </button>
      </p>
      <p className="control">
        <button className="button is-small" onClick={addAmountAsync}>
          Add async
        </button>
      </p>
    </div>
  );
};
