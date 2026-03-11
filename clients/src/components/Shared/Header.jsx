import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-evenly",
            gap: 2,
          }}
        >
          <Typography variant="h3">Resturant</Typography>

          <Container sx={{ display: "flex", gap: 2 }}>
            <Button>Home</Button>
            <Button>Menu</Button>
            <Button>Contact US</Button>
            <Button>Reserve Now</Button>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
