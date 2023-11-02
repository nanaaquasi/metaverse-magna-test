import React from "react";
import NavHeader from "../../components/shared/NavHeader";

import "../../styles/forms.scss";
import "./Auth.scss";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../services/auth.service";
import jwtService from "../../services/jwt.service";

const SignUp = () => {
  const navigate = useNavigate();

  const [isFormValidated, setIsFormValidated] = React.useState(false);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isRegistering, setIsRegistering] = React.useState(false);
  const [errorMessages, setErrorMessages] = React.useState("");
  //   check form values if valid
  React.useEffect(() => {
    if (email && password) {
      setIsFormValidated(true);
    } else {
      setIsFormValidated(false);
    }
  }, [email, password]);

  const onHandleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsRegistering(true);

    try {
      const requestBody = {
        email,
        password,
      };

      const response = await register(requestBody);

      if (response.data) {
        setIsRegistering(false);
        jwtService.storeItem("token", response.data.token);
        jwtService.storeItem("userId", response.data.userId);
        navigate("/welcome");
        window.location.reload();
      }
    } catch (error) {
      setIsRegistering(false);
      setErrorMessages(error.response.data.message);

      setTimeout(() => {
        setErrorMessages("");
      }, 5000);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="auth">
      <NavHeader />
      <div className="flex auth-wrapper">
        <div className="cursor-pointer nav-button" onClick={() => goBack()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="nav-button__icon"
          >
            <path
              d="M10 4L6 8L10 12"
              stroke="#181818"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <a>Back</a>
        </div>

        <div className="main-content">
          <div className="main-content__header">
            <h1 className="main-content__header--title">Join Breach</h1>
            <p className="main-content__header--description">
              Break through the noise and discover content that matters to you
              in under 3 minutes.
            </p>
          </div>

          <div className="main-content__form">
            <form className="signup-form" onSubmit={onHandleSignUp}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              {errorMessages && (
                <div className="form-group">
                  <p className="error-message">{errorMessages}!!</p>
                </div>
              )}

              <div className="form-group">
                <button
                  className={`button button--tertiary ${
                    !isFormValidated ? "button--tertiary--disabled" : ""
                  }`}
                >
                  {isRegistering ? "Submitting....." : "Continue"}
                </button>
              </div>
            </form>

            <div className="form-footer text-center">
              <p>
                Already have an account? <Link to={"/login"}>Log In</Link>
              </p>
            </div>
          </div>

          <div className="main-content__footer">
            <p>
              By signing up, you agree to Breach's <a>Terms</a> &{" "}
              <a>Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
