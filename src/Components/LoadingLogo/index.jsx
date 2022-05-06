import PropTypes from "prop-types";

import Wrapper from "./Wrapper";
import Logo from "../../SVG/cuacuaLogo";

const LoadingLogo = (props) => {
  const { counter, loading } = props;
  return (
    <Wrapper {...props} className={loading ? "active" : undefined}>
      <div className="loadingLogoWrapper">
        <div style={{ position: "relative", width: "300px", height: "200px" }}>
          <div
            className="loadingLogoInnerWrapper"
            style={{
              width: `${(300 * counter) / 100}px`,
            }}
          >
            <Logo />
          </div>
          <div
            className="loadingLogoInnerWrapper"
            style={{
              opacity: ".1",
            }}
          >
            <Logo />
          </div>
        </div>
        <span>{counter} %</span>
      </div>
    </Wrapper>
  );
};

export default LoadingLogo;
