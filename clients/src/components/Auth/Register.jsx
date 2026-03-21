// import { useState,  useContext } from "react";
// import { Box, Button, TextField, Typography } from "@mui/material";
// import { UserContext } from "../../Context/UserContext.jsx";

// function Register() {
//   const { register } = useContext(UserContext);

//   const [userData, setUserData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     register(userData);
//   };

//   return (
//     <>
//       <Typography>Register</Typography>

//       <Box component="form" onSubmit={handleSubmit}>
//         <TextField
//           label="Name"
//           value={userData.name}
//           onChange={(e) => setUserData({ ...userData, name: e.target.value })}
//         ></TextField>

//         <TextField
//           label="Email"
//           value={userData.email}
//           onChange={(e) => setUserData({ ...userData, email: e.target.value })}
//         ></TextField>

//         <TextField
//           label="Password"
//           value={userData.password}
//           onChange={(e) =>
//             setUserData({ ...userData, password: e.target.value })
//           }
//         ></TextField>
//         <Button type="submite">register</Button>
//       </Box>
//     </>
//   );
// }

// export default Register;




import { useState, useContext } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { UserContext } from "../../Context/UserContext.jsx";

function Register() {
  const { register } = useContext(UserContext);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    register(userData);
  };

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: "40px",
          width: "380px",
          borderRadius: "15px",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" mb={3}>
          Register
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            value={userData.name}
            onChange={(e) =>
              setUserData({ ...userData, name: e.target.value })
            }
          />

          <TextField
            fullWidth
            label="Email"
            margin="normal"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />

          <Button
            type="submit"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: "#711922",
              color: "white",
              borderRadius: "10px",
              padding: "10px",
              "&:hover": {
                backgroundColor: "#9c2f3c",
              },
            }}
          >
            Register
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default Register;
