import { FormEvent, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function Login() {
  const navigate = useNavigate();
  const { role } = useLocation().state;
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleSubmit = (e: FormEvent) => {
    const [username, _, password] = e.target as unknown as HTMLInputElement[];
    e.preventDefault();

    fetch(`/mock-data/${role}s.json`)
      .then((res) => res.json())
      .then(({ data }) => {
        // will take the first user
        localStorage.setItem(
          "user",
          JSON.stringify({
            username: username.value,
            role: role,
            ...data[0],
          })
        );
      })
      .finally(() => {
        setTimeout(() => {
          navigate("/home", { state: { title: "Welcome" } });
          navigate(0);
        }, 1000);
      });
  };

  const labelSx = {
    color: "#A0A0A0",
    fontWeight: "500",
  };

  return (
    <Box
      component="section"
      display="flex"
      alignItems="center"
      flexDirection="column"
      sx={{ textAlign: "center" }}
    >
      <Typography
        fontSize={24}
        fontWeight="700"
        color="text.primary"
        sx={{ margin: "115px 0 30px" }}
      >
        {`${role} Login`}
      </Typography>

      <Box
        component="form"
        autoComplete="off"
        width={300}
        sx={{ marginBottom: "24px" }}
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-textarea"
          label="Username"
          placeholder="Enter your user name"
          color="primary"
          sx={{
            width: "100%",
            borderRadius: "8px",

            color: "#515151",
            marginBottom: "30px",
          }}
          InputProps={{
            sx: {
              borderRadius: "8px",
              height: "42px",
            },
          }}
          InputLabelProps={{
            size: "small",
            focused: false,
            sx: labelSx,
          }}
        />
        <FormControl
          variant="outlined"
          sx={{ width: "100%", marginBottom: "40px" }}
        >
          <InputLabel
            htmlFor="outlined-adornment-password"
            focused={false}
            sx={labelSx}
            size="small"
          >
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            label="Password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            sx={{
              height: "42px",
              borderRadius: "8px",
            }}
          />
        </FormControl>
        <Button
          type="submit"
          sx={{
            color: "text.secondary",
            background: "#EAEAEA",
            borderRadius: "16px",
            padding: "10px 16px",
            fontSize: "14px",
            fontWeight: 600,
          }}
        >
          Log In
        </Button>
      </Box>
      <Button
        sx={{
          color: "#008042",
          textDecoration: "underline",
          fontSize: "14px",
          padding: 0,
        }}
      >
        Register
      </Button>
    </Box>
  );
}

export default Login;
