import styled from "styled-components";

import { device, theme } from "../../Theme";

const BORDER = "0px";

const Wrapper = styled.div`
  opacity: 0;
  display: none;
  overflow: hidden;
  position: relative;
  height: 100%;
  z-index: 99;
  transition: opacity 500ms ease-in-out;

  &.active {
    display: block;
    opacity: 1;
    transition: opacity 500ms ease-in-out;
  }

  .loadingLogoWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .loadingLogoInnerWrapper {
    width: 0;
    height: 200px;
    display: flex;
    justify-content: center;
    position: absolute;
    left: calc(50% - 150px);
    overflow: hidden;
  }

  .loadingLogoInnerWrapper:nth-of-type(2) {
    width: 300px;
  }

  .loadingLogoWrapper svg {
    width: 300px;
    height: 100%;
    position: absolute;
    left: 0;
  }

  .loadingLogoWrapper span {
    color: rgba(255, 255, 255, 0.5);
    font-weight: 800;
  }
`;

export default Wrapper;
