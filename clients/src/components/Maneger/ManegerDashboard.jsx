// import Sidebar from "../Shared/Sidebar";
// import { useState } from "react";
// import { Box, Typography } from "@mui/material";
// function ManagerDashboard() {
//   const [open, setOpen] = useState(true);

//   const toggleSideBar = () => {
//     setOpen(!open);
//   };
//   return (
//     <>
//       <Box
//         sx={{
//           display: "flex",
//           minWidth: "25px",
//           gap: 3,
//         }}
//       >
//         <Sidebar toggleSidebar={toggleSideBar} open={open} />

//         <Box sx={{ alignItems: "center" }}>
//           <Typography>manager dahsboadr</Typography>
//         </Box>
//       </Box>
//     </>
//   );
// }
// export default ManagerDashboard;




import Sidebar from "../Shared/Sidebar";
import { useState } from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

function ManagerDashboard() {
  const [open, setOpen] = useState(true);

  const toggleSideBar = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#f5f6fa",
      }}
    >
      <Sidebar toggleSidebar={toggleSideBar} open={open} />

      <Box sx={{ flex: 1, p: 4 }}>
        <Typography variant="h4" fontWeight="bold" mb={4}>
          Manager Dashboard
        </Typography>

        <Grid container spacing={3}>
          
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 3,
              }}
            >
              <Typography variant="h6">Total Orders</Typography>
              <Typography variant="h4" fontWeight="bold">
                24
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 3,
              }}
            >
              <Typography variant="h6">Total Users</Typography>
              <Typography variant="h4" fontWeight="bold">
                18
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 3,
              }}
            >
              <Typography variant="h6">Menu Items</Typography>
              <Typography variant="h4" fontWeight="bold">
                12
              </Typography>
            </Paper>
          </Grid>

        </Grid>
      </Box>
    </Box>
  );
}

export default ManagerDashboard;