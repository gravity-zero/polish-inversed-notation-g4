import React from "react";
import Count from "./Count";
import Controls from "./Controls";
import AdditionalControls from "./AdditionalControls";

export interface Props {}

const Component: React.FunctionComponent<Props> = () => {
  return (
    <div style={{ margin: "1rem" }}>
      <Controls>
        <Count />
      </Controls>
      <AdditionalControls />
    </div>
  );
};

export default Component;
