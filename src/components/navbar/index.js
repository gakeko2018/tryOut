import React from "react";
import "./navbar.scss";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const Navbar = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <img
          src="/images/toki.jpg"
          alt="toki"
          style={{
            width: "30px",
            marginRight: "10px"
          }}
        />
        <h2>TOKI</h2>
        <h3>Airlines</h3>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
