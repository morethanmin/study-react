import React from "react";
import { Link, NavLink, Route } from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";

export default function Profiles() {
  return (
    <div>
      <h3>유저 목록:</h3>
      <ul>
        <li>
          <NavLink
            activeStyle={{ background: "black", color: "white" }}
            to="/profiles/velopert"
          >
            velopert
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{ background: "black", color: "white" }}
            to="/profiles/gildong"
          >
            gildong
          </NavLink>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>유저를 선택해주세요.</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
      <WithRouterSample />
    </div>
  );
}
