/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios"; // Make sure axios is imported
import { IoMdClose } from "react-icons/io";
import { FaRegEyeSlash } from "react-icons/fa6";
import { HiOutlineEye } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function LoginPopup({ setShowLogin }) {
  const [currState, setCurrState] = useState("Login");
  const [passWatch, setPassWatch] = useState(true);
  const [confirmPassWatch, setConfirmPassWatch] = useState(true);
  const [regMessage, setRegMessage] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [loginError, setLoginError] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const createAccountHandler = () => {
    setCurrState("Sign up");
    setLoginError("");
    setRegMessage("");
    setErrMessage("");
  };

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    let url = "http://localhost:3000"; // Replace with your actual backend URL
    let response;

    if (currState === "Login") {
      url += "/api/user/login"; // Endpoint for login
      try {
        response = await axios.post(url, {
          email: data.email,
          password: data.password,
        });

        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          setShowLogin(false); // Close the login popup
          console.log("Navigating to /dashboard");
          navigate("/dashboard"); // Navigate to dashboard
        } else {
          setErrMessage(response.data.message); // Set login error message
        }
      } catch (error) {
        setErrMessage("An error occurred during login.");
      }
    } else {
      url += "/api/user/register"; // Endpoint for registration
      try {
        response = await axios.post(url, {
          name: data.name,
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
        });

        if (response.data.success) {
          setRegMessage("Registered successfully 🎉");
          setCurrState("Login"); // Switch to login state after successful registration
          setErrMessage("");
        } else {
          setErrMessage(response.data.message); // Set registration error message
        }
      } catch (error) {
        setErrMessage("An error occurred during registration.");
      }
    }
  };

  return (
    <div className="fixed z-[9999] w-[100%] h-[100%] bg-[#00000090] grid">
      <form className="place-self-center w-[max(23vw,330px)] text-[#303030] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-[8px] text-[14px] animate-[fadeIn_0.5s_ease-in-out] animate-fadeIn">
        {loginError && (
          <div className="reg-message-container">
            <img src="error.webp" alt="Error" />
            <p className="error-message">{loginError}</p>
          </div>
        )}
        {errMessage ? (
          <div className="reg-message-container">
            <img src="error.webp" alt="Error" />
            <p className="error-message">{errMessage}</p>
          </div>
        ) : (
          regMessage && (
            <div className="reg-message-container">
              <img src="right-icon.png" alt="Success" />
              <p className="reg-message">{regMessage} 🎉</p>
            </div>
          )
        )}

        <div className="flex justify-between items-center text-[black]">
          <h2 className="font-Poppins text-green-500 text-[20px] font-bold">
            {currState}
          </h2>
          <IoMdClose
            onClick={() => setShowLogin(false)}
            alt=""
            size={30}
            className="cursor-pointer text-green-600 hover:text-red-500 transition-all 0.3s"
          />
        </div>
        <div className="flex flex-col gap-[20px]">
          {currState === "Login" ? null : (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your name"
              required
              className="outline-0 border-[1px] border-[#c9c9c9] focus:border-green-500 focus:border-[2px] p-[10px] rounded-[4px]"
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
            className="outline-0 border-[1px] border-[#c9c9c9] focus:border-green-500 focus:border-[2px] p-[10px] rounded-[4px]"
          />
          <div className="relative">
            <input
              name="password"
              onChange={onChangeHandler}
              value={data.password}
              type={passWatch ? "password" : "text"}
              placeholder="Password"
              required
              className="outline-0 border-[1px] border-[#c9c9c9] focus:border-green-500 focus:border-[2px] p-[10px] rounded-[4px] w-full"
            />
            {passWatch ? (
              <FaRegEyeSlash
                onClick={() => setPassWatch(!passWatch)}
                className="absolute top-1/2 right-[5%] transform -translate-y-1/2 cursor-pointer hover:text-green-500"
              />
            ) : (
              <HiOutlineEye
                onClick={() => setPassWatch(!passWatch)}
                className="absolute top-1/2 right-[5%] transform -translate-y-1/2 cursor-pointer hover:text-green-500"
              />
            )}
          </div>
          {currState === "Login" ? null : (
            <div className="relative">
              <input
                name="confirmPassword"
                onChange={onChangeHandler}
                value={data.confirmPassword}
                type={confirmPassWatch ? "password" : "text"}
                placeholder="Confirm password"
                required
                className="outline-0 border-[1px] border-[#c9c9c9] focus:border-green-500 focus:border-[2px] p-[10px] rounded-[4px] w-full"
              />
              {confirmPassWatch ? (
                <FaRegEyeSlash
                  onClick={() => setConfirmPassWatch(!confirmPassWatch)}
                  className="absolute top-1/2 right-[5%] -translate-y-1/2 hover:text-green-500 cursor-pointer"
                />
              ) : (
                <HiOutlineEye
                  onClick={() => setConfirmPassWatch(!confirmPassWatch)}
                  className="absolute top-1/2 right-[5%] -translate-y-1/2 hover:text-green-500 cursor-pointer"
                />
              )}
            </div>
          )}
        </div>
        <button
          type="submit"
          onClick={onLogin}
          className="bg-green-500 hover:bg-green-400 py-2 px-4 rounded-sm text-white"
        >
          {currState === "Sign up" ? "Create account" : "Login"}
        </button>
        <div className="flex items-start gap-[8px] -mt-[15px]">
          <input className="mt-[4.5px]" type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span
              className="text-green-500 font-[500] cursor-pointer"
              onClick={createAccountHandler}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setCurrState("Login")}
              className="cursor-pointer text-green-500"
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
