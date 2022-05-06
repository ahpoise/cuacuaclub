import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Wrapper from "./Wrapper";
import Background from "../../Components/Background";

const ContactsPage = (props) => {
  const { activePage } = props;

  return (
    <Wrapper {...props} className={activePage ? "active" : undefined}>
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
      />
      <div className="left"></div>
      <div></div>
    </Wrapper>
  );
};

export default ContactsPage;
