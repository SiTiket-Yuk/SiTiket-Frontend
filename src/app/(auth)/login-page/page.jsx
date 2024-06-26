"use client";

import ImageHeroLogin from "../../../../public/images/ImageHeroLogin.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { Button, Popover, PopoverContent } from "@nextui-org/react";
import axios from "axios";
import InputFormFactory from "@/components/InputFormFactory";

const SITIKET_API = process.env.NEXT_PUBLIC_SITIKET_API;

/*
  Email input 
*/
const EmailInputForm = ({
  email,
  setEmail,
  type,
  text,
  emailError,
  setEmailError,
}) => {
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);

    if (value.length === 0) {
      setEmailError("");
    } else if (!validateEmail(value)) {
      setEmailError("Masukkan format email yang sesuai");
    } else {
      setEmailError("");
    }
  };

  return (
    <InputFormFactory
      type={type}
      data={email}
      dataError={emailError}
      handleInputChange={handleEmailChange}
      text={text}
    />
  );
};

/*
  Password input 
*/
const PasswordInputForm = ({
  password,
  setPassword,
  type,
  text,
  passwordError,
  setPasswordError,
}) => {
  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);

    if (value.trim() === "") {
      setPasswordError("Password tidak boleh karakter kosong");
    } else if (value.length < 8) {
      setPasswordError("Password minimal 8 karakter");
    } else {
      setPasswordError("");
    }
  };

  return (
    <InputFormFactory
      type={type}
      data={password}
      handleInputChange={handlePasswordChange}
      dataError={passwordError}
      text={text}
    />
  );
};

/*
  Popover that show failed login 
*/
const PopoverFailedLogin = ({ hidePopup }) => {
  return (
    <Popover backdrop="opaque">
      <PopoverContent className="py-10 px-10 gap-5">
        <div className="font-bold text-xl">Kesalahan Saat Login</div>
        <div className="flex flex-col items-center">
          <p className="font-medium">
            Email atau Password yang Anda masukkan salah.
          </p>
          <p className="font-medium">Silahkan coba lagi</p>
        </div>
        <Button
          className="block w-full py-3 select-none rounded-full text-white 
          font-bold text-xs shadow-md transition-all hover:shadow-lg focus:outline-none 
          focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 font-dm-sans bg-secondary"
          type="button"
          data-ripple-light="true"
          onPress={hidePopup}
        >
          Kembali
        </Button>
      </PopoverContent>
    </Popover>
  );
};

/*
  Popover that show the inputed form email, is already exist
*/
const PopoverNotExist = ({ email, hidePopup }) => {
  return (
    <Popover backdrop="opaque">
      <PopoverContent className="py-10 px-10 gap-5">
        <div className="font-bold text-xl">Email Belum Terdaftar</div>
        <div className="flex flex-col items-center">
          <p className="font-medium">Buat akun dengan Email ini?</p>
          <p className="font-medium">{email}</p>
        </div>
        <div className="flex flex-row gap-5">
          <Link href="/register-page">
            <Button
              className="w-[150px] py-3 select-none rounded-full text-white font-bold 
              text-xs shadow-md transition-all hover:shadow-lg focus:outline-none 
              focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 font-dm-sans bg-secondary"
              type="button"
              data-ripple-light="true"
            >
              Buat Akun
            </Button>
          </Link>
          <Button
            className="w-[150px] py-3 select-none rounded-full text-white font-bold 
            text-xs shadow-md transition-all hover:shadow-lg focus:outline-none 
            focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 font-dm-sans bg-secondary"
            type="button"
            data-ripple-light="true"
            onPress={hidePopup}
          >
            Kembali
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

/*
  Button is clickable if Form is valid
*/
const SubmitButton = ({ isValid, handleSubmit }) => {
  return (
    <Button
      className="mt-14 ml-28 block w-[341px] h-[66px] select-none rounded-full bg-pink-400
    text-white font-bold text-xs shadow-md transition-all hover:shadow-lg focus:outline-none 
      focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 font-dm-sans"
      type="button"
      disabled={!isValid}
      style={{
        borderRadius: "40px",
        backgroundColor: isValid ? "#b5618d" : "#D4D4D4",
        color: isValid ? "#FFFFFF" : "#A5A5A5",
        fontSize: "18px",
      }}
      data-ripple-light="true"
      onPress={handleSubmit}
    >
      Masuk
    </Button>
  );
};

const LoginForm = ({
  email,
  setEmail,
  setPassword,
  password,
  emailError,
  setEmailError,
  passwordError,
  setPasswordError,
  isFormValid,
  handleSubmit,
}) => {
  const searchParams = useSearchParams();
  // Get email if user redirects from register PopoverEmailExist (\(auth)\register-page)
  const emailFromRegister = searchParams.get("userEmail");
  if (emailFromRegister != null) {
    setEmail(emailFromRegister);
  }

  return (
    <form className="mt-8 mb-2 max-w-screen-lg w-full">
      <div className="mb-4 flex flex-col gap-10 relative">
        <EmailInputForm
          email={email}
          setEmail={setEmail}
          type={"text"}
          text={"email"}
          emailError={emailError}
          setEmailError={setEmailError}
        />
        <PasswordInputForm
          password={password}
          setPassword={setPassword}
          type={"password"}
          text={"password"}
          passwordError={passwordError}
          setPasswordError={setPasswordError}
        />
        <SubmitButton isValid={isFormValid} handleSubmit={handleSubmit} />
        <p
          className="block text-center font-sans text-base font-normal leading-relaxed 
        text-gray-700 antialiased link"
        >
          Belum punya akun?
          <Link
            href="/register-page"
            className="ml-1 font-semibold text-gray-700 transition-colors hover:text-blue"
          >
            <span>Daftar</span>
          </Link>
        </p>
      </div>
    </form>
  );
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);

  const [showPopoverFailedLogin, setShowPopoverFailedLogin] = useState(false);
  const [showPopoverNotExist, setShowPopoverNotExist] = useState(false);

  const router = useRouter();

  // Check every inputed data changes, until its valid
  useEffect(() => {
    setIsFormValid(
      email.trim() !== "" &&
        password.trim() !== "" &&
        emailError === "" &&
        passwordError === ""
    );
  }, [setIsFormValid, email, password, emailError, passwordError]);

  const hidePopoverFailedLogin = () => {
    if (showPopoverFailedLogin) {
      setShowPopoverFailedLogin(false);
    } else {
      setShowPopoverFailedLogin(true);
    }
  };

  const hidePopoverNotExist = () => {
    if (showPopoverNotExist) {
      setShowPopoverNotExist(false);
    } else {
      setShowPopoverNotExist(true);
    }
  };

  const handleSubmit = async () => {
    try {
      // POST user login
      const response = await axios.post(`${SITIKET_API}/api/login`, {
        email: email,
        password: password,
      });
      if (response.status === 200) {
        // Create user session
        const res = await fetch("/api/create-session", {
          method: "POST",
          body: JSON.stringify({ user: response.data.uid, email: email }),
        });
        if (res.status === 200) {
          router.push("/landing-page");
        } else {
          console.error("Failed to create session");
        }
      }
    } catch (e) {
      console.log(e);
      if (e.response.status === 400) {
        setShowPopoverFailedLogin(true);
      } else if (e.response.status === 500) {
        alert("server error, try again");
      }
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="container mx-auto flex flex-col pt-20">
        <div className="flex flex-row-reverse justify-between">
          <Image
            className="fixed top-[150px] left-0 w-[50rem]"
            src={ImageHeroLogin}
            alt="Image Hero Login"
          />
          <div className="flex flex-col items-center justify-center pr-32">
            <h1 className="text-2xl font-bold w-[550px]">
              Kami senang melihatmu lagi! Masuk dan jelajahi pengalaman memesan
              tiket event favoritmu dengan mudah
            </h1>
            <Suspense fallback={<>Loading...</>}>
              <LoginForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                emailError={emailError}
                setEmailError={setEmailError}
                passwordError={passwordError}
                setPasswordError={setPasswordError}
                isFormValid={isFormValid}
                handleSubmit={handleSubmit}
              />
            </Suspense>
          </div>
        </div>
      </div>
      {showPopoverFailedLogin && (
        <PopoverFailedLogin hidePopup={hidePopoverFailedLogin} />
      )}
      {showPopoverNotExist && (
        <PopoverNotExist email={email} hidePopup={hidePopoverNotExist} />
      )}
    </div>
  );
};

export default Login;
