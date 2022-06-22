import React from "react";
import { Fragment } from "react";
// import { Audio } from "react-loader-spinner";
import SyncLoader from "react-spinners/FadeLoader";
import { css } from "@emotion/react";

import "./Loader.css";
const ploader = () => {

  const override = css`
  color: red;
margin:auto;
border-color: red;
`;
  return (
    <Fragment>
      <div className="loaderCard">
        <div className="loader_logo_holder">
          <div className="loaderCard_Holder">
          <SyncLoader width={20}  height={30} color='grey'   css={override} />

          </div>
        </div>
      </div>
      
    </Fragment>
  );
};

export default ploader;
