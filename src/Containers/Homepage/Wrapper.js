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

  .contentWrapper {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .buttonWrapper {
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 50%;
    opacity: 0;
    transition: all 500ms ease-in-out 2000ms;
  }

  .buttonWrapper:before {
    content: "";
    height: 2px;
    background-color: ${theme.colors.greenDark.darker};
    width: 100%;
  }

  .buttonWrapper.active {
    opacity: 1;
    transition: opacity 500ms ease-in-out 9000ms;
  }

  .buttonWrapper a {
    position: relative;
    background: linear-gradient(
      to bottom right,
      ${theme.colors.greenDark.default},
      ${theme.colors.greenDark.dark}
    );
    border: 0;
    font-size: 0.8rem;
    padding: 12px 24px;
    margin: 2rem -50px 2rem 0;
    color: ${theme.colors.goldDark.default};
    z-index: 1;
    transition: all 600ms ease-in-out;
  }

  .buttonWrapper a:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom right,
      ${theme.colors.greenDark.darker},
      ${theme.colors.greenDark.default}
    );
    opacity: 0;
    z-index: -1;
    transition: all 600ms ease-in-out;
  }

  .buttonWrapper a:hover:before {
    opacity: 1;
    transition: all 600ms ease-in-out;
  }

  .innerContentWrapper {
    height: calc(60% - 120px);
    margin-top: 120px;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    margin-top: 5%;
    padding-left: 2.5%;
  }

  h2 {
    color: #222;
    font-size: 100px;
    line-height: 100px;
    white-space: nowrap;
    margin: 0;
    opacity: 0;
    transition: all 500ms ease-in-out 2000ms;
    margin-bottom: 1rem;
  }
  h2.active {
    opacity: 1;
    transition: all 500ms ease-in-out 2000ms;
  }
`;

export default Wrapper;
