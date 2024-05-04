import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Discl3 } from "./discl";

const SignIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any necessary form validation or submission logic here

    // Redirect to Input.jsx
    navigate("/input");
  };

  useEffect(() => {
    // Load the Google Sign-In library script
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Load the Facebook SDK script
    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/en_US/sdk.js";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    script.onload = () => {
      window.fbAsyncInit = function () {
        FB.init({
          appId: "YOUR_FACEBOOK_APP_ID",
          autoLogAppEvents: true,
          xfbml: true,
          version: "v13.0",
        });
      };
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main>
      <style jsx>{`
        .container {
          max-width: 400px;
          margin: 0 auto;
          margin-bottom: 40px;
          margin-top: 40px;
          flex-direction: column;
          padding: 0;
          box-shadow: 0 4px 4px 4px rgba(0, 0, 0, 0.1);
        }

        .signin {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .signin h2,
        .signin h4 {
          margin: 5px 0;
        }

        .content {
          padding: 20px;
        }

        .fb-login-button span {
          display: none;
        }

        .custom-fb-text {
          font-size: 12px;
          color: #000;
        }

        .connect {
          display: flex;
          gap: 10px;
          margin: 5px 5px;
        }

        .facebook,
        .google {
          width: 50%;
        }

        .g_id_signin,
        .fb-login-button {
          width: 100%;
        }

        @media screen and (max-width: 600px) {
          .container {
            max-width: 90%;
          }

          .header-content {
            flex-direction: column;
            text-align: center;
          }

          .header-left {
            margin-top: 10px;
          }

          .image-container {
            margin-top: 20px;
          }

          .image {
            max-width: 80%;
          }

          .signin {
            margin-top: 20px;
          }

          .footer__social-link {
            margin: 0 5px;
            font-size: 1.2rem;
          }

          .signin {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          form {
            width: 100%;
            border-radius: 5px;
          }

          .connect {
            display: flex;
            gap: 10px;
            margin: 5px 5px;
            flex-direction: row;
            align-items: center;
          }
        }

        .forgot a,
        .Register a {
          text-decoration: none;
          color: rgb(8, 59, 224);
        }

        form {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        label {
          margin: 10px 0 5px;
          font-weight: bold;
          text-align: left;
        }

        input {
          padding: 8px;
          margin-bottom: 15px;
          width: 100%;
          box-sizing: border-box;
          border: none;
          background-color: #eaeaea;
          border-radius: 5px;
        }

        .green {
          background-color: #4caf50;
          color: #fff;
          border: none;
          padding: 10px;
          border-radius: 5px;
          cursor: pointer;
          width: 100%;
          font-weight: bold;
        }
      `}</style>
      <Discl3 />
      <div className="container">
        <div className="signin">
          <h2>Sign In</h2>
          <h4>Sign in to your Account</h4>
        </div>
        <div className="content">
          <div className="connect">
            <div className="facebook">
              <div id="fb-root"></div>
              <div
                className="fb-login-button"
                data-width=""
                data-size="large"
                data-button-type=""
                data-layout=""
                data-auto-logout-link="true"
                data-use-continue-as="false"
              ></div>
            </div>
            <div className="google">
              <div
                id="g_id_onload"
                data-client_id="YOUR_GOOGLE_CLIENT_ID"
                data-login_uri="https://your.domain/your_login_endpoint"
                data-auto_prompt="false"
              ></div>
              <div
                className="g_id_signin"
                data-type="standard"
                data-size="large"
                data-theme="outline"
                data-text="sign_in_with"
                data-shape="rectangular"
                data-logo_alignment="left"
              ></div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username or Email address</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <p className="forgot">
              <a href="#">Forgot password?</a>
            </p>
            <button type="submit" className="green">
              Sign In
            </button>
            <h4 className="Register">
              Don't have an account? <a href="register.html">Register here</a>
            </h4>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
