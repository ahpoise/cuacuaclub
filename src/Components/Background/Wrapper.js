import styled from "styled-components";

import { device, theme } from "../../Theme";

const BORDER = "0px";

const Wrapper = styled.div`
  width: calc(100% - (${BORDER} * 2));
  height: calc(100% - (${BORDER} * 2));
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: absolute;
  background: url(${({ initialBgImgUrl }) => initialBgImgUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -2;
  border: ${BORDER} solid #fff;

  &.active {
    background: url(${({ finalBgImgUrl, initialBgImgUrl }) =>
      finalBgImgUrl ? finalBgImgUrl : initialBgImgUrl});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .bgFilter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: -1;
  }

  .pane {
    background-color: ${({ paneColor }) => paneColor};
    width: ${({ paneWidth }) => paneWidth};
    height: 100%;
    position: absolute;
    top: 0;
    ${({ paneDirection }) => paneDirection}: ${({ initialPostion }) =>
      initialPostion};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all
      ${({ animationDuration }) =>
        animationDuration ? `${animationDuration}ms` : "0ms"}
      ease-in-out
      ${({ animationDelay }) =>
        animationDelay ? `${animationDelay}ms` : "0ms"};
  }

  .pane.active {
    ${({ paneDirection }) => paneDirection}: ${({ finalPosition }) =>
      finalPosition};
    transition: all
      ${({ animationDuration }) =>
        animationDuration ? `${animationDuration}ms` : "0ms"}
      ease-in-out
      ${({ animationDelay }) =>
        animationDelay ? `${animationDelay}ms` : "0ms"};
  }
`;

export default Wrapper;
