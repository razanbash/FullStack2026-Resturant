// import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";

// function Header() {
//   return (
//     <>
//       <AppBar position="sticky">
//         <Toolbar
//           sx={{
//             display: "flex",
//             width: "100%",
//             flexDirection: "row",
//             justifyContent: "space-evenly",
//             gap: 2,
//           }}
//         >
//           <Typography variant="h3">Resturant</Typography>

//           <Container sx={{ display: "flex", gap: 2 }}>
//             <Button>Home</Button>
//             <Button>Menu</Button>
//             <Button>Contact US</Button>
//             <Button>Reserve Now</Button>
//           </Container>
//         </Toolbar>
//       </AppBar>
//     </>
//   );
// }

// export default Header;





import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

function Header() {
  const navigate = useNavigate();
  const { user, logout } = useContext(UserContext);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#6e1d26" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        <Typography variant="h6" fontWeight="bold">
          Resturant
        </Typography>

        <Box sx={{ display: "flex", gap: 3 }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>

          <Button color="inherit">Menu</Button>

          <Button color="inherit">Contact Us</Button>

          <Button color="inherit">Reserve Now</Button>

          {user ? (
            <Button onClick={logout} color="inherit">
              Logout
            </Button>
          ) : (
            <>
              <Button
                color="inherit"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>

              <Button
                color="inherit"
                onClick={() => navigate("/register")}
              >
                Register
              </Button>
            </>
          )}
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Header;