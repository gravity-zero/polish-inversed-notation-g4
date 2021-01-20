import React from "react";
import Count from "./Count";
import Controls from "./Controls";
import AdditionalControls from "./AdditionalControls";

export interface Props {}

export const Counter: React.FunctionComponent<Props> = () => {
  return (
    <div className="full-page">
      <div className="hv-centered">
        <div className="vertical">
          <div className="h-centered standard-margin">
            <Controls>
              <Count />
            </Controls>
          </div>
          <div className="h-centered standard-margin">
            <AdditionalControls />
          </div>
        </div>
      </div>
    </div>
  );
};
