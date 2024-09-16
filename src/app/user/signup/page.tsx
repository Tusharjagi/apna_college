"use client";

import { Box, Button, Container, Input, Typography } from "@mui/joy";
import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = () => {
    console.log("signUp in with:", username, password, confirmPassword);
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className="gap-6"
      >
        <Typography level="h4" component="h1">
          Login
        </Typography>
        <Box
          component="form"
          sx={{ mt: 1, width: "100%" }}
          noValidate
          className="grid gap-8"
        >
          <Input
            placeholder="Name"
            autoFocus
            required
            autoComplete="current-name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            color="success"
            variant="outlined"
          />
          <Input
            color="success"
            variant="outlined"
            autoComplete="current-password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            color="success"
            variant="outlined"
            autoComplete="current-password"
            placeholder="confirm password"
            type="password"
            value={password}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="solid"
            onClick={handleLogin}
            color="success"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
