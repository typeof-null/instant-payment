import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Role } from "../../types";
import { ArrowBack, Visibility, VisibilityOff } from "@mui/icons-material";
import { capitalizeFirstLetter } from "../../../../shared/utils/letters";

type Props = {
  role?: Role;
  onPrevStep: () => void;
};

function AuthStep({ role, onPrevStep }: Props) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: any) => {
    console.log(e, "change");
  };
  const handleSubmit = (e: any) => {
    const [username, _, password] = e.target;
    e.preventDefault();

    console.log(username.value, "username");
    console.log(password.value, "password");

    localStorage.setItem(
      "user",
      JSON.stringify({ username: username.value, password: password.value })
    );

    setTimeout(() => {
      navigate(0);
    }, 1000);
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) =>
    event.preventDefault();

  return (
    <Container
      sx={{
        paddingTop: "20px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <IconButton sx={{ margin: "0 auto 70px 0" }} onClick={onPrevStep}>
        <ArrowBack />
      </IconButton>

      <Typography
        variant="h4"
        fontWeight="700"
        color="text.primary"
        sx={{ marginBottom: "30px" }}
      >
        {`${capitalizeFirstLetter(role ?? "")} Login`}
      </Typography>

      <Box
        component="form"
        autoComplete="off"
        width={300}
        sx={{ margin: "0 auto 24px", fontWeight: "700" }}
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-textarea"
          label="Username"
          placeholder="Enter your user name"
          color="primary"
          sx={{
            width: "100%",
            marginBottom: "30px",
            borderRadius: "8px",
            color: "#515151",
          }}
          InputLabelProps={{
            focused: false,
            sx: {
              color: "#515151",
              fontWeight: "700",
            },
          }}
        />
        <FormControl
          variant="outlined"
          sx={{ width: "100%", marginBottom: "40px" }}
        >
          <InputLabel
            htmlFor="outlined-adornment-password"
            focused={false}
            sx={{
              color: "#515151",
              fontWeight: "700",
            }}
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
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          type="submit"
          sx={{
            color: "#2C0777",
            background: "#EAEAEA",
            borderRadius: "16px",
            padding: "10px 16px",
          }}
        >
          Log In
        </Button>
      </Box>
      <Button sx={{ color: "#008042", textDecoration: "underline" }}>
        Register
      </Button>
    </Container>
  );
}

export default AuthStep;
