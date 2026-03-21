// import Register from "../Auth/Register.jsx";
// import Footer from "../Shared/Footer.jsx";

// function LandingPage() {
//   return (
//     <>
//       <div
//         style={{
//           height: "70vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           textAlign: "center",
//           width: "100%",
//         }}
//       >
//         <div>
//           <h1>Welcome to our Restaurant</h1>
//           <p>Best food in town</p>
//         </div>
//       </div>
//       <Register />

//       <Footer />
//     </>
//   );
// }

// export default LandingPage;
// // i just added register component to the landing page and i will add the login component later on


// import { Box, Container, Grid, Typography, Card, Button } from "@mui/material";

// function LandingPage() {
//   return (
//     <Container sx={{ py: 8 }}>
//       <Typography
//         variant="h3"
//         component="h1"
//         align="center"
//         fontWeight="bold"
//         gutterBottom
//       >
//         Welcome to our Restaurant!
//       </Typography>

//       <Typography
//         variant="h6"
//         align="center"
//         color="text.secondary"
//         sx={{ mb: 6, maxWidth: "700px", mx: "auto" }}
//       >
//         Experience the best dining with us. We offer a variety of delicious
//         dishes made from fresh ingredients. Join us for an unforgettable meal!
//       </Typography>

//       <Grid container spacing={3} justifyContent="center">
//         {/* Card 1 */}
//         <Grid item xs={12} sm={6} md={3}>
//           <Card
//             sx={{
//               height: "100%",
//               borderRadius: 3,
//               boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//             }}
//           >
//             <Box sx={{ p: 3 }}>
//               <Typography variant="h5" fontWeight="bold" gutterBottom>
//                 Card Title
//               </Typography>

//               <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//                 This is a description of the card content. It provides more
//                 details
//               </Typography>

//               <Button variant="contained" fullWidth sx={{ borderRadius: 2 }}>
//                 Learn More
//               </Button>
//             </Box>
//           </Card>
//         </Grid>

//         {/* Card 2 */}
//         <Grid item xs={12} sm={6} md={3}>
//           <Card
//             sx={{
//               height: "100%",
//               borderRadius: 3,
//               boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//             }}
//           >
//             <Box sx={{ p: 3 }}>
//               <Typography variant="h5" fontWeight="bold" gutterBottom>
//                 Card Title
//               </Typography>

//               <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//                 This is a description of the card content. It provides more
//                 details
//               </Typography>

//               <Button variant="contained" fullWidth sx={{ borderRadius: 2 }}>
//                 Learn More
//               </Button>
//             </Box>
//           </Card>
//         </Grid>

//         {/* Card 3 */}
//         <Grid item xs={12} sm={6} md={3}>
//           <Card
//             sx={{
//               height: "100%",
//               borderRadius: 3,
//               boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//             }}
//           >
//             <Box sx={{ p: 3 }}>
//               <Typography variant="h5" fontWeight="bold" gutterBottom>
//                 Card Title
//               </Typography>

//               <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//                 This is a description of the card content. It provides more
//                 details
//               </Typography>

//               <Button variant="contained" fullWidth sx={{ borderRadius: 2 }}>
//                 Learn More
//               </Button>
//             </Box>
//           </Card>
//         </Grid>

//         {/* Card 4 */}
//         <Grid item xs={12} sm={6} md={3}>
//           <Card
//             sx={{
//               height: "100%",
//               borderRadius: 3,
//               boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//             }}
//           >
//             <Box sx={{ p: 3 }}>
//               <Typography variant="h5" fontWeight="bold" gutterBottom>
//                 Card Title
//               </Typography>

//               <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//                 This is a description of the card content. It provides more
//                 details
//               </Typography>

//               <Button variant="contained" fullWidth sx={{ borderRadius: 2 }}>
//                 Learn More
//               </Button>
//             </Box>
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// export default LandingPage;


import Header from "../Shared/Header.jsx";
import Footer from "../Shared/Footer.jsx";
function LandingPage() {
  return (
    <>
      <Footer />
    </>
  );
}

export default LandingPage;