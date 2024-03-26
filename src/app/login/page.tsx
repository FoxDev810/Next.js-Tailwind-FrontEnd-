"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  BsCheck,
  BsFacebook,
  BsInstagram,
  BsTwitterX,
  BsFillEnvelopeFill,
  BsPersonPlus,
} from "react-icons/bs";
import { useRouter } from "next/navigation";
import { debounce } from "lodash";
import "@/css/login.css";
import Footer from "@/components/landing/footer";
import toast, { Toaster } from "react-hot-toast";

const notify = () =>
  toast.error("User not found, Please register now!", {
    duration: 4000, // Display duration in milliseconds
    position: "top-right", // Change toast position
    style: {
      // Customize style
      border: "2px solid #333",
      color: "#fff",
      backgroundColor: "#333",
    },
  });

const Login: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [emailErrorDisplayed, setEmailErrorDisplayed] = useState(false);

  const resetErrorMessage = () => {
    if (errorMessage) setErrorMessage("");
  };

  const handleEmailChange = debounce((event) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);
    setEmailErrorDisplayed(false);

    if (enteredEmail === "info@gmail.com") {
      setEmailValid(true);
    } else {
      setEmailValid(false);
      if (!emailErrorDisplayed) {
        notify();
        setEmailErrorDisplayed(true);
      }
    }
  }, 1000);

  const emailTickIcon = email ? (
    emailValid ? (
      <BsCheck className="absolute right-0 top-1/4 text-title-md2 text-green-3" />
    ) : (
      <Link href={"/signup"} className="ml-2 flex items-center">
        <BsPersonPlus className="rounded-sm bg-gradient-to-b from-blue-1 to-green-2 p-2 text-5xl text-white" />
      </Link>
    )
  ) : null;

  const passwordTickIcon = passwordValid ? (
    <BsCheck className="absolute right-0 top-1/4 text-title-md2 text-green-3" />
  ) : null;

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredPassword = event.target.value;
    setPassword(enteredPassword);
    resetErrorMessage();

    if (enteredPassword === "user@123") {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };

  const handleSubmit = async () => {
    setDisabled(true);
    if (!email || !password) return;
    try {
      localStorage.setItem("email", email);
      router.push("/dashboard");
    } catch (error) {
      setErrorMessage((error as Error).message);
    } finally {
      setDisabled(false);
    }
  };
  return (
    <div className="bg-login h-dvh bg-cover bg-fixed bg-bottom bg-no-repeat">
      <div className="section_logo pt-12">
        <img
          src="/images/landing/logo.svg"
          className="section_logoimg"
          alt="Logo"
        />
      </div>
      <div className="login">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="login_with">
              <div className="login-line" />
              <div className="login-text">Login With</div>
              <div className="login-line" />
            </div>
            <div className="social-icons">
              <div
                className="social-icon"
                style={{
                  background:
                    "linear-gradient(45deg, #10618B 14.63%, #1088F2 85.37%)",
                }}
              >
                <div className="inner-circle">
                  <Link href="/facebook" className="outer-circle">
                    <BsFacebook />
                  </Link>
                </div>
              </div>
              <div
                className="social-icon"
                style={{
                  background:
                    "linear-gradient(45deg, #B542B2 14.63%, #8642B2 85.37%)",
                }}
              >
                <div className="inner-circle">
                  <Link href="/instagram" className="outer-circle">
                    <BsInstagram style={{ color: "#8C42B2" }} />
                  </Link>
                </div>
              </div>
              <div
                className="social-icon"
                style={{
                  background:
                    "linear-gradient(45deg, #000000 14.63%, #2E2E2E 14.63%, #000000 85.37%, #050505 85.37%)",
                }}
              >
                <div className="inner-circle">
                  <Link href="twitter" className="outer-circle">
                    <BsTwitterX style={{ color: "black" }} />
                  </Link>
                </div>
              </div>
              <div
                className="social-icon"
                style={{
                  background:
                    "linear-gradient(45deg, #B542B2 14.63%, #EE3C5A 85.37%)",
                }}
              >
                <div className="inner-circle">
                  <Link href="envelop" className="outer-circle">
                    <BsFillEnvelopeFill style={{ color: "#000000" }} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="login-divider" />
          <div className="col-lg-6">
            <div className="login_instead">
              <div className="login-line" />
              <div className="login-text">Instead Login</div>
              <div className="login-line" />
            </div>
            <div className="email_password">
              <div className="email">
                <div className="logo">
                  <img
                    src="/images/icon/icon-hand.png"
                    className="p-1"
                    alt="Logo"
                  />
                </div>
                <div>
                  <form className="relative flex">
                    <input
                      type="text"
                      className="login_form_type"
                      placeholder="Enter Email here"
                      onChange={handleEmailChange}
                    />
                    {emailTickIcon}
                  </form>
                </div>
              </div>
              {emailValid && (
                <div className="pass">
                  <div className="logo">
                    <img
                      src="/images/icon/icon-hand.png"
                      className="p-1"
                      alt="Logo"
                    />
                  </div>
                  <div>
                    <form className="relative flex text-center">
                      <input
                        type="password"
                        className="login_pass_type"
                        placeholder="Enter Password here"
                        onChange={handlePasswordChange}
                      />
                      {passwordTickIcon}
                    </form>
                  </div>
                </div>
              )}

              {!emailValid && emailErrorDisplayed && (
                // Enter Error code.
                <div></div>
              )}

              {emailValid && (
                <div className="submitbutton">
                  <button
                    className="rounded-sm bg-gradient-to-b from-blue-1 to-green-2 px-4 py-2 text-white"
                    onClick={handleSubmit}
                    disabled={disabled}
                  >
                    Login
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer />
        <Toaster />
      </div>
    </div>
  );
};

export default Login;
