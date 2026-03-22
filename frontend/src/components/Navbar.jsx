import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "Users", path: "/users" },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(90deg, #1e3c72, #2a5298)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* 로고 */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          Data Validation System
        </Typography>

        {/* 메뉴 */}
        <Box>
          {menu.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Button
                key={item.name}
                component={Link}
                to={item.path}
                sx={{
                  color: "#fff",
                  marginLeft: 2,
                  fontWeight: isActive ? "bold" : "normal",
                  borderBottom: isActive ? "2px solid #fff" : "none",
                  borderRadius: 0,
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                {item.name}
              </Button>
            );
          })}
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;