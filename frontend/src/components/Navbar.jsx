import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <AppBar position="static">

      <Toolbar>

        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
        >
          Data Validation System
        </Typography>

        <Button
          color="inherit"
          component={Link}
          to="/"
        >
          Dashboard
        </Button>

        <Button
          color="inherit"
          component={Link}
          to="/users"
        >
          Users
        </Button>

      </Toolbar>

    </AppBar>
  );
}

export default Navbar;