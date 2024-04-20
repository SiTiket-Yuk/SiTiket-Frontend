"use client";
import Image from "next/image";
import Link from "next/link";
import "./styles.css";
import LogoRegis from "../../../../public/logo/LogoRegis.png";
import React, { useEffect, useState } from "react";
import { Popover, PopoverContent } from "@nextui-org/react";
import axios from "axios";

const API_URL = process.env.API_URL;

const InputSubFormFactory = ({
	type,
	data,
	handleInputChange,
	dataError,
	text,
}) => {
	return (
		<div
			className="relative h-[57px] w-[563px] min-w-[200px]"
			style={{
				marginBottom:
					dataError && dataError != `Masukkan ${data}` ? "20px" : "0px",
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
				onChange={handleInputChange}
			/>
			<label
				className="before:content['*'] after:content['*'] pointer-events-none absolute 
        left-6 -top-1 flex h-full w-full select-none text-[0px] text-[#929292] transition-all 
        before:pointer-events-none after:pointer-events-none peer-placeholder-shown:text-base 
        peer-placeholder-shown:leading-[4.1] peer-focus:text-[0px]"
			>
				Masukkan {text}
			</label>
			{dataError && (
				<p
					style={{
						position: "absolute",
						top: "120%",
						left: 3,
						color: "#AC0000",
					}}
				>
					{dataError}
				</p>
			)}
		</div>
	);
};

const UsernameSubForm = ({
	username,
	setUsername,
	type,
	text,
	usernameError,
	setUsernameError,
}) => {
	const handleUsernameChange = (event) => {
		const { value } = event.target;
		setUsername(value);

		if (value.length === 0) {
			setUsernameError("");
		} else if (value.length > 0 && !value.trim()) {
			setUsernameError("Masukkan username yang sesuai");
		}
	};

	return (
		<>
			<InputSubFormFactory
				type={type}
				data={username}
				dataError={usernameError}
				handleInputChange={handleUsernameChange}
				text={text}
			/>
		</>
	);
};

const EmailSubForm = ({
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
		<>
			<InputSubFormFactory
				type={type}
				data={email}
				dataError={emailError}
				handleInputChange={handleEmailChange}
				text={text}
			/>
		</>
	);
};

const PasswordSubForm = ({
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
		<>
			<InputSubFormFactory
				type={type}
				data={password}
				handleInputChange={handlePasswordChange}
				dataError={passwordError}
				text={text}
			/>
		</>
	);
};

const RegisterSuccessMessage = ({ firstName }) => {
	return (
		<Popover backdrop="opaque" className="success-popup">
			<PopoverContent className="w-[463px] h-[258px]">
				<div className="success-content-top">
					Selamat Bergabung {firstName}!
				</div>
				<div className="success-content-bottom">
					Bersiaplah untuk petualangan yang seru! <br />
					Event-event terkini menanti untuk Anda eksplorasi
				</div>
				<div className="justify-center">
					<Link href={"/landing-page"}>
						<button
							className="block w-[326px] h-[41px] select-none rounded-full bg-pink-400 
            text-white font-bold text-xs shadow-md transition-all hover:shadow-lg focus:outline-none 
            focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 font-dm-sans"
							type="button"
							style={{
								marginTop: "70px",
								borderRadius: "40px",
								backgroundColor: "#b5618d",
								fontSize: "12px",
							}}
							data-ripple-light="true"
						>
							Ok
						</button>
					</Link>
				</div>
			</PopoverContent>
		</Popover>
	);
};

const RegisterFailedMessage = ({ togglePopup, email }) => {
	return (
		<Popover backdrop="opaque" className="error-popup">
			<PopoverContent className="w-[406px] h-[240px]">
				<div className="error-content-top">Email Sudah Terdaftar</div>
				<div className="error-content-bottom">
					Lanjut masuk dengan email ini <br />
					{email} ?
				</div>
				<div className="flex justify-center mt-[50px]">
					<button
						className="block w-[157px] h-[42px] select-none rounded-full bg-pink-400 
            text-white font-bold text-xs shadow-md transition-all hover:shadow-lg 
            focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 font-dm-sans"
						type="button"
						style={{
							borderRadius: "40px",
							backgroundColor: "#b5618d",
							fontSize: "12px",
							marginRight: "6px",
						}}
						data-ripple-light="true"
						onClick={togglePopup}
					>
						Ubah email
					</button>

					<Link
						class="transition-colors"
						href={{ pathname: "/login-page", query: { userEmail: email } }}
					>
						<button
							className="block w-[157px] h-[42px] select-none rounded-full bg-pink-400 
            text-white font-bold text-xs shadow-md transition-all hover:shadow-lg 
            focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 font-dm-sans"
							type="button"
							style={{
								marginLeft: "0px",
								borderRadius: "40px",
								backgroundColor: "#b5618d",
								fontSize: "12px",
								marginLeft: "6px",
							}}
							data-ripple-light="true"
						>
							<span>Masuk</span>
						</button>
					</Link>
				</div>
			</PopoverContent>
		</Popover>
	);
};

const SubmitForm = ({ isValid, handleSubmit }) => {
	return (
		<>
			<button
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
				onClick={handleSubmit}
			>
				Daftar
			</button>
		</>
	);
};

const RegisterForm = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [usernameError, setUsernameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");

	const [isFormValid, setIsFormValid] = useState(false);

	const [showPopupSuccess, setShowPopupSuccess] = useState(false);
	const [showPopupError, setShowPopupError] = useState(false);

	const firstName = username.split(" ")[0];

	useEffect(() => {
		setIsFormValid(
			username.trim() !== "" &&
				email.trim() !== "" &&
				password.trim() !== "" &&
				usernameError === "" &&
				emailError === "" &&
				passwordError === ""
		);
	}, [
		setIsFormValid,
		username,
		email,
		password,
		usernameError,
		emailError,
		passwordError,
	]);

	const togglePopup = () => {
		if (!showPopupError) {
			setShowPopupError(true);
		} else {
			setShowPopupError(false);
		}
	};

	// add async here
	const handleSubmit = (event) => {
		event.preventDefault();

		const TEST_SUBMIT = false;
		if (TEST_SUBMIT) {
			setShowPopupSuccess(true);
		} else {
			setShowPopupError(true);
		}
		/*
		try {
			const response = await axios.post(`${API_URL}/api/register`, {
				username,
				email,
				password,
			});

			if (response.data.success) {
				setShowPopupSuccess(true);
			}
		} catch (error) {
			setShowPopupError(true);
		}
    */
	};

	return (
		<form
			className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
			onSubmit={handleSubmit}
		>
			<div className="mb-4 flex flex-col gap-7">
				<UsernameSubForm
					username={username}
					setUsername={setUsername}
					type={"text"}
					text={"username"}
					usernameError={usernameError}
					setUsernameError={setUsernameError}
				/>
				<EmailSubForm
					email={email}
					setEmail={setEmail}
					type={"text"}
					text={"email"}
					emailError={emailError}
					setEmailError={setEmailError}
				/>
				<PasswordSubForm
					password={password}
					setPassword={setPassword}
					type={"password"}
					text={"password"}
					passwordError={passwordError}
					setPasswordError={setPasswordError}
				/>

				<SubmitForm isValid={isFormValid} handleSubmit={handleSubmit} />
				{showPopupSuccess && <RegisterSuccessMessage firstName={firstName} />}
				{showPopupError && (
					<RegisterFailedMessage togglePopup={togglePopup} email={email} />
				)}
			</div>
			<p className="mt-4 ml-44 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased link">
				Sudah punya akun?
				<Link
					href="/login-page"
					className="ml-1 font-semibold text-gray-700 transition-colors hover:text-blue"
				>
					<span>Masuk</span>
				</Link>
			</p>
		</form>
	);
};

const Register = () => {
	return (
		<div className="container mx-auto flex flex-col">
			<div className="flex md:flex-row md:gap-12 gap-1 flex-col items-center hero-image">
				<Image
					className="object-cover max-w-full h-auto"
					src={LogoRegis}
					alt="Register Logo"
				/>
			</div>
			<div
				className="flex min-h-window md:flex-row flex-col lg:px-52 md:px-32 
				sm:px-20 py-14 justify-between items-center"
			>
				<div className="flex md:flex-row md:gap-12 gap-1 flex-col items-center">
					<div
						className="relative flex flex-col rounded-xl bg-transparent bg-clip-border 
            text-gray-700 shadow-none"
						style={{ width: "650px", height: "87px" }}
					>
						<h4
							className="block font-zen-kaku-gothic-antique text-2xl font-bold leading-snug 
              tracking-normal text-blue-gray-900 antialiased"
							style={{ fontSize: "31.25px", color: "#424242" }}
						>
							Buat akun dan pesan tiket event favoritmu dengan mudah!
						</h4>
						<RegisterForm />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
