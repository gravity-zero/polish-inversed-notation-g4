import React, { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import * as core from "../../core/index";
import './Calculator.css'


export interface Props { }

export const NPICalculator: React.FunctionComponent<Props> = () => {

  const [inputValue, setInputValue] = useState<string>("");
  const AddValueToMainInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    setInputValue(inputValue.concat(e.currentTarget.value));
  };
  const RemoveLastValueToMainInput = () => setInputValue(inputValue.slice(0, -1));
  const ResetMainInput = () => setInputValue("");
  const CallNPIResult = () => {
    const result = core.default(inputValue);
    if (result.status === "success") setInputValue((result.content).toString());
    else alert(result.content);
  };

  return (
    <div className="calculatorContainer">
      <input className="inputCalculator" type="text" id="mainInput" value={inputValue}></input>
      <div>
        <Button className="button functionalBtn" label="C" value="" handleClick={RemoveLastValueToMainInput} />
        <Button className="button functionalBtn" label="AC" value="" handleClick={ResetMainInput} />
        <Button className="button functionalBtn" label="^" value="^" handleClick={AddValueToMainInput} />
        <Button className="button operatorBtn" label="÷" value="/" handleClick={AddValueToMainInput} />
      </div>
      <div>
        <Button className="button" label="7" value="7" handleClick={AddValueToMainInput} />
        <Button className="button" label="8" value="8" handleClick={AddValueToMainInput} />
        <Button className="button" label="9" value="9" handleClick={AddValueToMainInput} />
        <Button className="button operatorBtn" label="x" value="*" handleClick={AddValueToMainInput} />
      </div>
      <div>
        <Button className="button" label="4" value="4" handleClick={AddValueToMainInput} />
        <Button className="button" label="5" value="5" handleClick={AddValueToMainInput} />
        <Button className="button" label="6" value="6" handleClick={AddValueToMainInput} />
        <Button className="button operatorBtn" label="-" value="-" handleClick={AddValueToMainInput} />
      </div>
      <div>
        <Button className="button" label="1" value="1" handleClick={AddValueToMainInput} />
        <Button className="button" label="2" value="2" handleClick={AddValueToMainInput} />
        <Button className="button" label="3" value="3" handleClick={AddValueToMainInput} />
        <Button className="button operatorBtn" label="+" value="+" handleClick={AddValueToMainInput} />
      </div>
      <div>
        <Button className="button largeBtn" label="0" value="0" handleClick={AddValueToMainInput} />
        <Button className="button operatorBtn" label="=" value="" handleClick={CallNPIResult} />
      </div>
      <div>
        <Button className="button functionalBtn mediumBtn" label="ESPACE" value=" " handleClick={AddValueToMainInput} />
        <Button className="button functionalBtn mediumBtn" label="NEGATE" value="NEGATE" handleClick={AddValueToMainInput} />
      </div>
    </div>
  )
};



