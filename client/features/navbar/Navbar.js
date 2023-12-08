// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { logout } from "../../app/store";

// const Navbar = () => {
//   const isLoggedIn = useSelector((state) => !!state.auth.me.id);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const logoutAndRedirectHome = () => {
//     dispatch(logout());
//     navigate("/login");
//   };

//   return (
//     <div>
//       <h1>Tournament Tracker To stay up to date with weekend activities</h1>
//       <nav>
//         {isLoggedIn ? (
//           <div>
//             {/* The navbar will show these links after you log in */}
//             <Link to="/home">Home</Link>
//             <Link to="/teamform">Team Form</Link>
//             <button type="button" onClick={logoutAndRedirectHome}>
//               Logout
//             </button>
//           </div>
//         ) : (
//           <div>
//             {/* The navbar will show these links before you log in */}
//             <Link to="/agegroup">Age Brackets</Link>
//             <Link to="/login">Login</Link>
//             <Link to="/signup">Sign Up</Link>
//           </div>
//         )}
//       </nav>
//       <hr />
//     </div>
//   );
// };

// export default Navbar;
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";

const Navbar = () => {
  console.log("this is the TEAM FORM");

  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div>
      <h1>Tournament Tracker To stay up to date with weekend activities</h1>
      <nav>
        {isLoggedIn ? (
          <div>
            <Link to="/home">Home</Link>
            <Link to="/teamform">Team Form</Link>
            <Link to="/baseballfield">Baseball field</Link>
            <Link to="/brackets">Brackets</Link>

            <button type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            {/* <Link to="/teamform">Team Form</Link> */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
