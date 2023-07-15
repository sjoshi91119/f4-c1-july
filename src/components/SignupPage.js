import { ReactDOM } from "react";
import { useState } from "react";
import Abstraction from "../images/Abstraction.svg";
import Facebook from "../images/Facebook.svg";
import Google from "../images/Google.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function SignupPage() {
  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
  });
  let [error, setError] = useState("");
  let [success, setSuccess] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  console.log("user :", user);

  function validateForm(event) {
    event.preventDefault();
    if (user.name.length < 3 || user.name.length > 30) {
      setSuccess("");
      return setError("Name should be min 3 char and max 30 char");
    } else if (!user.email.includes("@") || !user.email.includes(".")) {
      setSuccess("");
      return setError("Email should contain @ and .");
    } else if (user.password.length < 8 || user.password.length > 15) {
      setSuccess("");
      return setError("Password should be min 8 char and max 15 char");
    } else if (user.password !== user.confirmPassword) {
      setSuccess("");
      return setError("Password and Confirm Password should be same");
    }

    setSuccess("Successfully Created!");
    setError("");
  }

  return (
    <>
      <div className="container1">
        <img id="figure" src={Abstraction} alt="Abstraction's Pic" />

        <div className="form-box">
          <form onSubmit={validateForm}>
            <h1>Create Account</h1>
            <span id="alt-login-btns">
              <button id="g-btn">
                <img id="gb" src={Google} alt="Google Logo" />
                Sign up with Google
              </button>
              <button id="fb-btn">
                <img id="fb" src={Facebook} alt="Facebook Logo" />
                Sign up with Facebook
              </button>
            </span>
            <h5>-OR-</h5>
            <div className="fields">
              <input
                type="text"
                placeholder="Full Name"
                onChange={(event) =>
                  setUser({ ...user, name: event.target.value })
                }
              ></input>
              <input
                type="email"
                placeholder="Email Address"
                onChange={(event) =>
                  setUser({ ...user, email: event.target.value })
                }
              ></input>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={(event) =>
                    setUser({ ...user, password: event.target.value })
                  }
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="password-toggle"
                  id="fst"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>

              <div className="password-input">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  onChange={(event) =>
                    setUser({ ...user, confirmPassword: event.target.value })
                  }
                />
                <FontAwesomeIcon
                  icon={showConfirmPassword ? faEyeSlash : faEye}
                  className="password-toggle"
                  id="scnd"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              </div>
            </div>
            <button id="submit-btn" type="submit">
              Create Account
            </button>{" "}
            {error && <h4 className="error-text">Error: {error}</h4>}
            {success && <h4 className="success-text">{success}</h4>}
          </form>
        </div>
      </div>
    </>
  );
}

export default SignupPage;
