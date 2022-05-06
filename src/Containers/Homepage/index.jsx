import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Wrapper from "./Wrapper";
import Background from "../../Components/Background";
import LoadingLogo from "../../Components/LoadingLogo";
import SideHome from "../../Components/SideHome";

import ToFun from "../../SVG/toFun";

const Main = (props) => {
  const { loading, counter } = props;

  return (
    <Wrapper {...props} loading={loading}>
      <Background
        initialBgImgUrl={"./assets/imgs/cuacuaBg.png"}
        finalBgImgUrl={
          "./assets/imgs/f27fa50f-c44e-427e-9a77-d8a775abfbdc_cropped.png"
        }
        paneDirection="left"
        initialPostion="-50%"
        finalPosition="0"
        paneColor="#000"
        paneWidth="50%"
        animationDuration="1200"
        animationDelay="1000"
        loading={loading}
      />
      <LoadingLogo counter={counter} loading={loading} />
      <div className="contentWrapper">
        <div className="innerContentWrapper">
          <h2 className={!loading ? "active" : undefined}>FROM FINE</h2>
          {!loading && <ToFun />}
        </div>
        <div className={!loading ? "buttonWrapper active" : "buttonWrapper"}>
          <Link to="/book-a-table">RESERVATIONS</Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Main;
