// import LandingPage from "./components/Landing/LandingPage.jsx";
// import Header from "./components/Shared/Header.jsx";
// import { Box, Container, Grid, Typography } from "@mui/material";
// import { Card, CardContent, Button } from "@mui/material";
// function App() {
//   return (
//     <>
//       <Header />
//       <LandingPage />;
//       <Container>
//         <Typography variant="h1" gutterBottom>
//           Welcome to our Restaurant!
//         </Typography>
//         <Typography variant="body1" gutterBottom>
//           Experience the best dining with us. We offer a variety of delicious
//           dishes made from fresh ingredients. Join us for an unforgettable meal!
//         </Typography>

//         <Grid>
//           <Card sx={{ maxWidth: 345, margin: "20px auto" }}>
//             <Box sx={{ padding: "16px" }}>
//               <Typography variant="h2" gutterBottom>
//                 Card Title
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 This is a description of the card content. It provides more
//                 details
//               </Typography>
//               <Button>Learn More</Button>
//             </Box>
//           </Card>
//           <Card sx={{ maxWidth: 345, margin: "20px auto" }}>
//             <Box sx={{ padding: "16px" }}>
//               <Typography variant="h2" gutterBottom>
//                 Card Title
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 This is a description of the card content. It provides more
//                 details
//               </Typography>
//               <Button>Learn More</Button>
//             </Box>
//           </Card>
//           <Card sx={{ maxWidth: 345, margin: "20px auto" }}>
//             <Box sx={{ padding: "16px" }}>
//               <Typography variant="h2" gutterBottom>
//                 Card Title
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 This is a description of the card content. It provides more
//                 details
//               </Typography>
//               <Button>Learn More</Button>
//             </Box>
//           </Card>
//           <Card sx={{ maxWidth: 345, margin: "20px auto" }}>
//             <Box sx={{ padding: "16px" }}>
//               <Typography variant="h2" gutterBottom>
//                 Card Title
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 This is a description of the card content. It provides more
//                 details
//               </Typography>
//               <Button>Learn More</Button>
//             </Box>
//           </Card>
//         </Grid>
//       </Container>
//     </>
//   );
// }

// export default App;






import LandingPage from "./components/Landing/LandingPage.jsx";
import Header from "./components/Shared/Header.jsx";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Card, Button } from "@mui/material";

function App() {
  return (
    <>
      <Header />
      <LandingPage />
      <Container sx={{ py: 8 }}>
        {/* Adjusted variants for better visual hierarchy */}
        <Typography variant="h3" component="h1" align="center" fontWeight="bold" gutterBottom>
          Welcome to our Restaurant!
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: "700px", mx: "auto" }}>
          Experience the best dining with us. We offer a variety of delicious
          dishes made from fresh ingredients. Join us for an unforgettable meal!
        </Typography>

        {/* Added container and spacing to the Grid to actually align the cards */}
        <Grid container spacing={3} justifyContent="center">
          {/* Card 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', borderRadius: 3, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
              <Box sx={{ padding: "24px" }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Card Title
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  This is a description of the card content. It provides more
                  details
                </Typography>
                <Button variant="contained" fullWidth sx={{ borderRadius: 2 }}>Learn More</Button>
              </Box>
            </Card>
          </Grid>

          {/* Card 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', borderRadius: 3, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
              <Box sx={{ padding: "24px" }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Card Title
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  This is a description of the card content. It provides more
                  details
                </Typography>
                <Button variant="contained" fullWidth sx={{ borderRadius: 2 }}>Learn More</Button>
              </Box>
            </Card>
          </Grid>

          {/* Card 3 */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', borderRadius: 3, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
              <Box sx={{ padding: "24px" }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Card Title
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  This is a description of the card content. It provides more
                  details
                </Typography>
                <Button variant="contained" fullWidth sx={{ borderRadius: 2 }}>Learn More</Button>
              </Box>
            </Card>
          </Grid>

          {/* Card 4 */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', borderRadius: 3, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
              <Box sx={{ padding: "24px" }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Card Title
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  This is a description of the card content. It provides more
                  details
                </Typography>
                <Button variant="contained" fullWidth sx={{ borderRadius: 2 }}>Learn More</Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;