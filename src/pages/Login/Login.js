import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// components
import Input from "../../components/Input";
import Button from "../../components/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import ReplayIcon from "@mui/icons-material/Replay";

import Logo from "../../assets/images/logo.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [progress, setProgress] = useState(false);

  let navigate = useNavigate();

  const onSubmit = () => {
    setProgress(true);
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-flex">
          <div className="form-container">
            <div className="login-logo">
              <img src={Logo} alt="Logo" />
              <h2 className="login-title">Login</h2>
            </div>
            <Input
              type="text"
              label="Email-id"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              type="password"
              label="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <div className="remember-forgot-flex">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox className="custom-checkbox" disableRipple />
                  }
                  label="Remember me"
                />
              </FormGroup>
              <Link className="custom-link" href="#">
                Forgot Password?
              </Link>
            </div>
            <div className="submit-btn">
              <Button
                buttonText="Submit"
                onClick={onSubmit}
                progress={progress}
              />
            </div>
            <Link href="#" className="resend-code">
              Resend Confirmation Code
              <span className="resend-icon">
                <ReplayIcon />
              </span>
            </Link>
          </div>
          <div className="no-account">
            No account Yet?
            <Link href="#" className="resend-code">
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
