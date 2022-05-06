import styled from "styled-components";

import { device, theme } from "../../Theme";

const BORDER = "0px";
const TEXT_STROKE = "5";
const TRIANGLE_WIDTH = 400;
const TRIANGLE_STROKE_WIDTH = 20;
const TRIANGLE_BORDER_RADIUS = 10;
const TRIANGLE_POSITION_ADJUSTMENT = TRIANGLE_STROKE_WIDTH / 4;

let triangleWrapperHeight = Math.sqrt(
  TRIANGLE_WIDTH * TRIANGLE_WIDTH - (TRIANGLE_WIDTH / 2) * (TRIANGLE_WIDTH / 2)
);

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  .left {
    position: absolute;
    top: 0;
    left: 200%;
    width: 100%;
    height: 100%;
    background-color: red;
    transition: all 1200ms ease-in-out 1200ms;
  }

  &.active .left {
    left: 0;
    transition: all 1200ms ease-in-out 1200ms;
  }
`;

export default Wrapper;
