import styled from "styled-components";

import { device, theme } from "../../Theme";

const TEXT_STROKE = "7";

const Wrapper = styled.div`
  width: 400px;
  height: auto;

  svg {
    fill: none;
    stroke: #fff;
    stroke-dashoffset: 2600;
    stroke-dasharray: 2600;
    width: 100%;
    height: 100%;
  }

  .letter {
    animation: letter-animation 3000ms forwards;
    stroke-width: ${TEXT_STROKE};
  }

  .t-1 {
    animation-delay: 3000ms;
  }
  .t-2 {
    animation-delay: 3500ms;
  }

  .o-1 {
    animation-delay: 4000ms;
  }

  .f-1 {
    animation-delay: 5000ms;
  }
  .f-3 {
    animation-delay: 5500ms;
  }
  .f-2 {
    animation-delay: 6000ms;
  }

  .u-1 {
    animation-delay: 6500ms;
    transform: translate(-15px, 0);
  }

  .n-1 {
    animation-delay: 7000ms;
    transform: translate(-15px, 0);
  }

  @keyframes letter-animation {
    0% {
      stroke-dashoffset: 2600;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }
`;

export default Wrapper;
