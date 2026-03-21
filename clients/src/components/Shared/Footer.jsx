import { Container , Box , Typography} from "@mui/material";

function Footer() {
  return (
   <Box sx={{ bgcolor: "primary.main", color: "primary.contrastText", py: 3, mt: 5 }}  >
    <Container maxWidth="lg">
      <Typography variant="h6" align="center" gutterBottom>
        &copy; 2026 Resturant. All rights reserved.
      </Typography>
    </Container>
   </Box>
  );
}   


export default Footer;