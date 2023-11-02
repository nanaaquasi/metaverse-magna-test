import React from "react";
import NavHeader from "../../components/shared/NavHeader";

import "../../styles/forms.scss";
import "./Auth.scss";
import { useNavigate } from "react-router-dom";
import jwtService from "../../services/jwt.service";
import { login } from "../../services/auth.service";

const Login = () => {
  const navigate = useNavigate();

  const [isFormValidated, setIsFormValidated] = React.useState(false);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  //   check form values if valid
  React.useEffect(() => {
    if (email && password) {
      setIsFormValidated(true);
    } else {
      setIsFormValidated(false);
    }
  }, [email, password]);

  const onHandleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const requestBody = {
        email,
        password,
      };

      const response = await login(requestBody);

      if (response.data) {
        setIsSubmitting(false);
        jwtService.storeItem("token", response.data.token);
        jwtService.storeItem("userId", response.data.userId);
        navigate("/dashboard");
        window.location.reload();
      }
    } catch (error) {
      alert("Invalid credentials, please try again.");
      setIsSubmitting(false);
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
            <h1 className="main-content__header--title">
              Login to your account.
            </h1>
            <p className="main-content__header--description">
              Enter your account details below to login to your Breach account.
            </p>
          </div>

          <div className="main-content__form">
            <form className="signup-form" onSubmit={onHandleLogin}>
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

              <div className="form-group">
                <button
                  className={`button button--tertiary ${
                    !isFormValidated ? "button--tertiary--disabled" : ""
                  }`}
                >
                  {isSubmitting ? "Submitting...." : "Continue"}
                </button>
              </div>
            </form>

            <div className="form-footer text-center">
              <p>
                Don't have an account?{" "}
                <a
                  className="cursor-pointer"
                  onClick={() => navigate("/signup")}
                >
                  Join Breach
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
