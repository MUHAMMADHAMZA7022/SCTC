import React from "react";
import { css } from "@emotion/react";
import SyncLoader from "react-spinners/FadeLoader";
import "./Loader.css";
const Loader = () => {
    const override = css`
    color: red;
  margin:auto;
  border-color: red;
`;
  return (
      <div className="s">
       
          <SyncLoader   height={30} color='grey'  css={override} />
      </div>
  );
};

export default Loader;

