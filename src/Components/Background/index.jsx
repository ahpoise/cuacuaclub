import PropTypes from "prop-types";

import Wrapper from "./Wrapper";

const Background = (props) => {
  const { loading } = props;
  return (
    <Wrapper {...props} className={!loading ? "active" : undefined}>
      <div className="bgFilter"></div>
      <div className={!loading ? "pane active" : "pane"}></div>
    </Wrapper>
  );
};

export default Background;
