/* eslint-disable react/prop-types */
import { useState } from "react";

import { IoMdClose } from "react-icons/io";
import { FaRegEyeSlash } from "react-icons/fa6";
import { HiOutlineEye } from "react-icons/hi";

function LoginPopup({ setShowLogin }) {
  // const { url, setToken } = useStores();
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
  });

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

  // const handleCreateAccount = (e) => {
  //   e.preventDefault();
  //   setLoginError("");
  // };

  // const onLogin = async (e) => {
  //   e.preventDefault();
  //   let newUrl = url;
  //   let response;
  //   if (currState === "Login") {
  //     newUrl += "/api/user/login";
  //     response = await axios.post(newUrl, data);
  //     if (response.data.success) {
  //       setToken(response.data.token);
  //       localStorage.setItem("token", response.data.token);
  //       setShowLogin(false);
  //     } else {
  //       setErrMessage("");
  //       setRegMessage("");
  //       setLoginError(response.data.message);
  //     }
  //   } else {
  //     newUrl += "/api/user/register";
  //     response = await axios.post(newUrl, data);
  //     if (response.data.success) {
  //       setRegMessage("registered successfully");
  //       setCurrState("Login");
  //       setErrMessage("");
  //     } else {
  //       setErrMessage(response.data.message);
  //     }
  //   }
  // };
  console.log(errMessage, regMessage);
  return (
    <div className="fixed z-[9999] w-[100%] h-[100%] bg-[#00000090] grid">
      <form className="place-self-center w-[max(23vw,330px)] text-[#303030] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-[8px] text-[14px] animate-[fadeIn_0.5s_ease-in-out] animate-fadeIn">
        {loginError && (
          <div className="reg-message-container">
            <img src="error.webp" />
            <p className="error-message">{loginError}</p>
          </div>
        )}
        {errMessage ? (
          <div className="reg-message-container">
            <img src="error.webp" />
            <p className="error-message">{errMessage}</p>
          </div>
        ) : (
          regMessage && (
            <div className="reg-message-container">
              <img src="right-icon.png" />
              <p className="reg-message">{regMessage} 🎉</p>
            </div>
          )
        )}

        <div className="flex justify-between items-center text-[black]">
          <h2 className="font-Poppins text-green-500 text-[20px] font-bold">
            {currState}
          </h2>
          {/* <img onClick={() => setShowLogin(false)} alt="" /> */}
          <IoMdClose
            onClick={() => setShowLogin(false)}
            alt=""
            size={30}
            className="cursor-pointer text-green-600 hover:text-red-500 transition-all 0.3s"
          />
        </div>
        <div className="flex flex-col gap-[20px]">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="your name"
              required
              className="outline-0 border-[1px] border-[#c9c9c9] focus:border-green-500 focus:border-[2px] p-[10px] rounded-[4px]"
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="your email"
            required
            className="outline-0 border-[1px] border-[#c9c9c9] focus:border-green-500 focus:border-[2px] p-[10px] rounded-[4px]"
          />
          <div className="relative">
            <input
              name="password"
              onChange={onChangeHandler}
              value={data.password}
              type="password"
              placeholder="password"
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
          {currState === "Login" ? (
            <></>
          ) : (
            <div className="relative">
              <input
                name="password"
                onChange={onChangeHandler}
                value={data.password}
                type="password"
                placeholder="confirm password"
                required
                className="outline-0 border-[1px] border-[#c9c9c9] focus:border-green-500 focus:border-[2px] p-[10px] rounded-[4px] w-full"
              />
              {confirmPassWatch ? (
                <FaRegEyeSlash
                  onClick={() => setConfirmPassWatch(!confirmPassWatch)}
                  className="absolute top-1/2 right-[5%] hover:text-green-500 cursor-pointer"
                />
              ) : (
                <HiOutlineEye
                  onClick={() => setConfirmPassWatch(!confirmPassWatch)}
                  className="absolute top-1/2 right-[5%] hover:text-green-500 cursor-pointer"
                />
              )}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-400 py-2 px-4 rounded-sm text-white"
        >
          {currState === "Sign up" ? "Create account" : "Login"}
        </button>
        <div className="flex items-start gap-[8px] -mt-[15px]">
          <input className="mt-[4.5px]" type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            {/* () => setCurrState("Sign up") */}
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
              {" "}
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
