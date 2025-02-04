import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

function Error404page() {
  return (
    <div className="error-page-container">
      <h1 className="error-heading">404 Error - Page Not Found</h1>
      <h5 className="error-message">
        The page you are searching, does not exist.
        <br />
        Please enter the correct path or select below buttons to redirect on
        valid page.
      </h5>
      <div className="error-btn-group">
        <NavLink to="/" end>
          <Button variant="contained" className="error-btn">
            Home
          </Button>
        </NavLink>
        <NavLink to="/project/1" end>
          <Button variant="contained" className="error-btn">
            Projects
          </Button>
        </NavLink>
      </div>
    </div>
  );
}

export default Error404page;
