import styled from "styled-components";

import { device, theme } from "../../Theme";

const Wrapper = styled.div`
  .homeContentWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    height: 90%;
  }

  .homeHeading {
  }

  & h2 svg:nth-of-type(1) {
    stroke: ${theme.colors.goldDark.default};
    stroke-width: 0.5;
  }
`;

export default Wrapper;
