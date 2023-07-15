import Abstraction from "../images/Abstraction.svg";
import Facebook from "../images/Facebook.svg";
import Google from "../images/Google.svg";
function SignupPage() {
  return (
    <>
      <div className="container1">
        <img src={Abstraction} alt="Abstraction's Pic" />

        <div className="form-box">
          <form>
            <h1>Create Account</h1>
            <button className="btn1">
              <img src={Google} alt="google's Pic" /> Signup With Google
            </button>
            <button className="btn1">
              <img src={Facebook} alt="fb's Pic" /> Signup With Facebook
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignupPage;
