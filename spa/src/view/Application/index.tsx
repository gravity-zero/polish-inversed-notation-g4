import React, {useState} from "react";
import {Button} from "../../components/button/button";
import * as core from "../../core/index";

export interface Props {}

const Component: React.FunctionComponent<Props> = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const AddValueToMainInput = (e: any) => setInputValue(inputValue.concat(e.target?.value));
  const RemoveLastValueToMainInput = () => setInputValue(inputValue.slice(0, -1));
  const ResetMainInput = () => setInputValue("");
  const CallNPIResult = () => {
    const result = core.default(inputValue);
    if(result.status === "success") setInputValue((result.content).toString());
    else alert(result.content);
  };


  return <div className="main">
          <h1>Calculatrice pour notation Polonaise Inversé</h1>
          <div className="Calculatrice">
            <input type="text" id="mainInput" value={inputValue}></input>
            <Button label="Calculer" value="" onclick={CallNPIResult} />
            <div>
            <Button label="<-" value="" onclick={RemoveLastValueToMainInput} />
            <Button label="AC" value="" onclick={ResetMainInput} />
            </div>
            <div>
            <Button label="1" value="1" onclick={AddValueToMainInput} />
            <Button label="2" value="2" onclick={AddValueToMainInput} />
            <Button label="3" value="3" onclick={AddValueToMainInput} />
            </div>
            <div>
            <Button label="4" value="4" onclick={AddValueToMainInput} />
            <Button label="5" value="5" onclick={AddValueToMainInput} />
            <Button label="6" value="6" onclick={AddValueToMainInput} />
            </div>
            <div>
            <Button label="7" value="7" onclick={AddValueToMainInput} />
            <Button label="8" value="8" onclick={AddValueToMainInput} />
            <Button label="9" value="9" onclick={AddValueToMainInput} />
            </div>
            <div>
            <Button label="0" value="0" onclick={AddValueToMainInput} />
            <Button label="ESPACE" value=" " onclick={AddValueToMainInput} />
            </div>
            <div>
            <Button label="²" value="^" onclick={AddValueToMainInput} />
            <Button label="+" value="+" onclick={AddValueToMainInput} />
            <Button label="-" value="-" onclick={AddValueToMainInput} />
            <Button label="X" value="*" onclick={AddValueToMainInput} />
            <Button label="/" value="/" onclick={AddValueToMainInput} />
            </div>
          </div>
          </div>;
};

export default Component;
