"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Avatar } from "@nextui-org/react";
import InformationMessage from "@/components/InformationMessage";
import AvatarDefault from "../../../../public/imageDefault/AvatarDefault.png";

const InputFactory = ({ type, data, handleChangeInput, inputError, text }) => {
  return (
    <div
      className="relative h-[57px] w-[563px] min-w-[200px]"
      style={{
        marginBottom:
          inputError && inputError != `Masukkan ${data}` ? "20px" : "0px",
      }}
    >
      <input
        className="peer h-full w-full rounded-full border border-[#d4a4be] bg-transparent 
        px-6 py-3 font-sans text-base font-normal text-[#414141] outline outline-0 
        transition-all placeholder-shown:border-2 placeholder-shown:border-[#e7e7e7] 
        focus:border-2 focus:border-[#d4a4be] disabled:border-0 disabled:bg-blue-gray-50"
        placeholder=""
        type={type}
        value={data}
        onChange={handleChangeInput}
      />
      <label
        className="before:content['*'] after:content['*'] pointer-events-none absolute 
        left-6 -top-1 flex h-full w-full select-none text-[0px] text-[#929292] transition-all 
        before:pointer-events-none after:pointer-events-none peer-placeholder-shown:text-base 
        peer-placeholder-shown:leading-[4.1] peer-focus:text-[0px]"
      >
        Masukkan {text}
      </label>
      {inputError && (
        <p
          style={{
            position: "absolute",
            top: "120%",
            left: 3,
            color: "#AC0000",
          }}
        >
          {inputError}
        </p>
      )}
    </div>
  );
};

const SubmitForm = ({ isValid, handleSubmit }) => {
  return (
    <>
      <button
        className="mt-[16px] ml-[370px] block w-[194px] h-[54px] select-none rounded-full bg-pink-400 
      text-white font-medium text-xs shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2
      focus:ring-pink-400 focus:ring-opacity-50 mb-10"
        type="button"
        disabled={!isValid}
        style={{
          borderRadius: "40px",
          backgroundColor: isValid ? "#b5618d" : "#D4D4D4",
          color: isValid ? "#FFFFFF" : "#A5A5A5",
          fontSize: "15px",
        }}
        data-ripple-light="true"
        onClick={handleSubmit}
      >
        Simpan Perubahan
      </button>
    </>
  );
};

const ProfileSettings = () => {
  const [name, setName] = useState(""); // Change " " base GET Request
  const [email, setEmail] = useState(""); // Change " " based on GET Request
  const [phoneNumber, setPhoneNumber] = useState(""); // Nomor Telepon ???

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);

  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setIsFormValid(
      name.trim() !== "" &&
        email.trim() !== "" &&
        phoneNumber.trim() !== "" &&
        nameError === "" &&
        emailError === "" &&
        phoneNumberError === ""
    );
  }, [name, email, phoneNumber, nameError, emailError, phoneNumberError]);

  const handleCloseInfoMsg = () => {
    setShowSuccess(false);
  };

  const handleChangeName = (event) => {
    const { value } = event.target;
    setName(value);

    if (value.length === 0) {
      setNameError("");
    } else if (value.length > 0 && !value.trim()) {
      setNameError("Masukkan username yang sesuai");
    }
  };

  const handleChangeEmail = (event) => {
    const validateEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    };

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

  const handleChangePhoneNumber = (event) => {
    const { value } = event.target;
    setPhoneNumber(value);

    if (value == "") {
      setPhoneNumberError("");
    } else if (value.length < 11 || value.length > 13 || isNaN(value)) {
      setPhoneNumberError("Masukkan nomor yang sesuai");
    } else if (value.length >= 11 || value.length <= 13 || !isNaN(value)) {
      setPhoneNumberError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const TEST_SUBMIT = false;
    if (TEST_SUBMIT) {
      setShowSuccess(true);
    } else {
      setShowSuccess(true);
    }
  };
  return (
    <div className="flex flex-col h-[49.8rem]">
      <div className="pt-10 px-32 gap-20 flex flex-row">
        <Avatar src={AvatarDefault.src} className="w-[250px] h-[250px]" />
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5 mb-5">
            <p className="text-lg font-semibold">Nama Lengkap</p>
            <InputFactory
              type={"text"}
              data={name}
              handleChangeInput={handleChangeName}
              inputError={nameError}
              text={"username"}
            />
          </div>
          <div className="flex flex-col gap-5 mb-5">
            <p className="text-lg font-semibold">Email</p>
            <InputFactory
              type={"email"}
              data={email}
              handleChangeInput={handleChangeEmail}
              inputError={emailError}
              text={"email"}
            />
          </div>
          <div className="flex flex-col gap-5 mb-5">
            <p className="text-lg font-semibold">Nomor Telpon</p>
            <InputFactory
              type={"tel"}
              data={phoneNumber}
              handleChangeInput={handleChangePhoneNumber}
              inputError={phoneNumberError}
              text={"nomor telpon"}
            />
          </div>
          <SubmitForm isValid={isFormValid} handleSubmit={handleSubmit} />
        </form>
      </div>
      <div className="flex flex-row-reverse">
        {showSuccess && (
          <InformationMessage
            titleMsg={"Berhasil"}
            bodyMsg={"Perubahan berhasil disimpan"}
            onClose={handleCloseInfoMsg}
          />
        )}
      </div>
    </div>
  );
};

const ProfilePage = () => {
  return (
    <>
      <div className="grow">
        <div
          className="py-10 w-full flex justify-between px-9"
          style={{ boxShadow: "0px 2px 6px 0px rgba(20, 20, 43, 0.06)" }}
        >
          <h2 className="font-extrabold text-[28px] text-[#0076b5]">
            Pengaturan
          </h2>
          <Avatar src={AvatarDefault.src} />
        </div>

        <div className="px-9 flex flex-col">
          <h2 className="pt-10 font-semibold text-xl">Edit Profil</h2>
          <ProfileSettings />
        </div>
        <p className="text-end text-[#929292] text-lg pr-10 pb-4">
          Copyright © 2024 siTiket All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default ProfilePage;
