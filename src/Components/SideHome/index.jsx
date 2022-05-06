import PropTypes from "prop-types";

import Wrapper from "./Wrapper";

const LoadingLogo = (props) => {
  const { counter } = props;
  return (
    <Wrapper {...props}>
      <div className="homeContentWrapper">
        <div className="homeHeading">
          <h2>
            <svg viewBox="0 0 450 50">
              <text y="35">From Fine</text>
            </svg>
            <svg viewBox="0 0 450 50">
              <text y="35">to Fun</text>
            </svg>
          </h2>
        </div>
      </div>
    </Wrapper>
  );
};

export default LoadingLogo;
