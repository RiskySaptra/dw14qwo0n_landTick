import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { Avatar, IconButton, Menu, Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const Menus = unch => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClicks = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosed = () => {
    setAnchorEl(null);
  };
  const handleLogout = async () => {
    await localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <Grid>
        <h2>{unch.unch.user.user.user_name}</h2>
      </Grid>
      <Grid>
        <IconButton color="inherit" onClick={handleClicks}>
          <Avatar src="/static/images/avatar/1.jpg" />
        </IconButton>
      </Grid>
      <Grid>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClosed}
        >
          <Grid>
            <MenuItem dense onClick={handleClosed}>
              Profile
            </MenuItem>
            <MenuItem dense onClick={handleClosed}>
              My account
            </MenuItem>
            {unch.unch.user.user.role === "admin" ? (
              <NavLink
                to="/admin"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <MenuItem dense onClick={handleClosed}>
                  Admin Page
                </MenuItem>
              </NavLink>
            ) : (
              <></>
            )}
            <NavLink
              to="/"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <MenuItem dense onClick={handleLogout}>
                Logout
              </MenuItem>
            </NavLink>
          </Grid>
        </Menu>
      </Grid>
    </>
  );
};

export default Menus;
