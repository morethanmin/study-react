import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>
          <a
            href="#welcome"
            onClick={() => {
              this.props.onClick();
            }}
          >
            WEB
          </a>
        </h1>
        World Wide WEB
      </header>
    );
  }
}

//redux에 의존하는, component를 handling하는 코드임.
//connect를 이용해 redux를 위한 가짜 컴포넌트로 랩핑해서 걔를 export함.
export default connect(null, (dispatch) => {
  return {
    onClick: () => {
      dispatch({ type: "WELCOME" });
    },
  };
})(Header);
