import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/home/Home";
import TeamForm from "../features/teamForm/TeamForm";
import FieldComponent from "../features/baseballField/BaseballField";
import Bracket from "../features/bracket/Bracket";
import { me } from "./store";

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/teamform" element={<TeamForm />} />
          <Route path="/baseballfield" element={<FieldComponent />} />
          <Route path="/brackets" element={<Bracket />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/*"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
          {/* <Route
            path="/teamform"
            element={<TeamForm name="teamform" displayName="Team Form" />}
          ></Route> */}
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
