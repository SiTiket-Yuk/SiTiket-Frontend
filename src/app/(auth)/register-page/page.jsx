"use client";
import ImageHeroRegister from "../../../../public/images/ImageHeroRegister.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { Button, Popover, PopoverContent } from "@nextui-org/react";
import axios from "axios";
import InputFormFactory from "@/components/InputFormFactory";

const SITIKET_API = process.env.NEXT_PUBLIC_SITIKET_API;

/*
  Username input 
*/
const UsernameInputForm = ({
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
		<InputFormFactory
			type={type}
			data={username}
			dataError={usernameError}
			handleInputChange={handleUsernameChange}
			text={text}
		/>
	);
};

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
  Password confirm input
*/
const PasswordConfirmInputForm = ({
	password,
	passwordConfirm,
	setPasswordConfirm,
	type,
	text,
	passwordConfirmError,
	setPasswordConfirmError,
}) => {
	const handlePasswordConfirmChange = (event) => {
		const { value } = event.target;
		setPasswordConfirm(value);

		if (value !== password) {
			setPasswordConfirmError("Password tidak sesuai");
		} else {
			setPasswordConfirmError("");
		}
	};

	return (
		<InputFormFactory
			type={type}
			data={passwordConfirm}
			handleInputChange={handlePasswordConfirmChange}
			dataError={passwordConfirmError}
			text={text}
		/>
	);
};

/*
  Popover that show the email is already exist
  Options:
  1. Re-enter account with different email
  2. To Login Page
*/
const PopoverEmailExist = ({ email, hidePopup }) => {
	return (
		<Popover backdrop="opaque">
			<PopoverContent className="py-10 px-10 gap-5">
				<div className="font-bold text-xl">Email Sudah Terdaftar</div>
				<div className="flex flex-col items-center">
					<p className="font-medium">Lanjut masuk dengan email ini</p>
					<p className="font-medium">{email} ?</p>
				</div>
				<div className="flex flex-row gap-5">
					<Button
						className="w-[150px] py-3 select-none rounded-full text-white font-bold 
            text-xs shadow-md transition-all hover:shadow-lg focus:outline-none 
            focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 font-dm-sans bg-secondary"
						type="button"
						data-ripple-light="true"
						onPress={hidePopup}
					>
						Ubah email
					</Button>
					<Link href={{ pathname: "/login-page", query: { userEmail: email } }}>
						<Button
							className="w-[150px] py-3 select-none rounded-full text-white font-bold 
              text-xs shadow-md transition-all hover:shadow-lg focus:outline-none 
              focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 font-dm-sans bg-secondary"
							type="button"
							data-ripple-light="true"
						>
							Masuk
						</Button>
					</Link>
				</div>
			</PopoverContent>
		</Popover>
	);
};

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
			Daftar
		</Button>
	);
};

const RegisterForm = ({
	username,
	setUsername,
	email,
	setEmail,
	password,
	setPassword,
	passwordConfirm,
	setPasswordConfirm,
	usernameError,
	setUsernameError,
	emailError,
	setEmailError,
	passwordError,
	setPasswordError,
	passwordConfirmError,
	setPasswordConfirmError,
	isFormValid,
	handleSubmit,
}) => {
	const router = useRouter();

	return (
		<form className="mt-8 mb-2 max-w-screen-lg w-full">
			<div className="mb-4 flex flex-col gap-10 relative">
				<UsernameInputForm
					username={username}
					setUsername={setUsername}
					type={"text"}
					text={"username"}
					usernameError={usernameError}
					setUsernameError={setUsernameError}
				/>
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
				<PasswordConfirmInputForm
					password={password}
					passwordConfirm={passwordConfirm}
					setPasswordConfirm={setPasswordConfirm}
					type={"password"}
					text={"password"}
					passwordConfirmError={passwordConfirmError}
					setPasswordConfirmError={setPasswordConfirmError}
				/>
				<SubmitButton isValid={isFormValid} handleSubmit={handleSubmit} />
				<p
					className="block text-center font-sans text-base font-normal leading-relaxed 
        text-gray-700 antialiased link"
				>
					Sudah punya akun?
					<span
						className="ml-1 font-semibold text-gray-700 transition-colors hover:text-blue cursor-pointer"
						onClick={() => router.push("/login-page")}
					>
						Masuk
					</span>
				</p>
			</div>
		</form>
	);
};

const Register = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");

	const [usernameError, setUsernameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [passwordConfirmError, setPasswordConfirmError] = useState("");

	const [isFormValid, setIsFormValid] = useState(false);

	const [showPopoverFailedLogin, setShowPopoverEmailExist] = useState(false);

	// Check every inputed data changes, until its valid
	useEffect(() => {
		setIsFormValid(
			username.trim() !== "" &&
				email.trim() !== "" &&
				password.trim() !== "" &&
				passwordConfirm.trim() !== "" &&
				usernameError === "" &&
				emailError === "" &&
				passwordError === "" &&
				passwordConfirmError === ""
		);
	}, [
		setIsFormValid,
		username,
		email,
		password,
		passwordConfirm,
		usernameError,
		emailError,
		passwordError,
		passwordConfirmError,
	]);

	const hidePopoverEmailExist = () => {
		if (showPopoverFailedLogin) {
			setShowPopoverEmailExist(false);
		} else {
			setShowPopoverEmailExist(true);
		}
	};

	const router = useRouter();

	const handleSubmit = async () => {
		try {
			// Post user register
			const response = await axios.post(`${SITIKET_API}/api/register`, {
				username: username,
				email: email,
				password: password,
			});
			console.log(response.data);
			if (response.status === 200) {
				// CREATE: session
				const res = await fetch("/api/create-session", {
					method: "POST",
					body: JSON.stringify({ userId: response.data.uid }),
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
				setShowPopoverEmailExist(true);
			} else if (e.response.status === 500) {
				alert("server error, try again");
			}
		}
	};

	return (
		<div className="flex justify-center items-center">
			<div className="container mx-auto flex flex-col pt-20">
				<div className="flex flex-row justify-between">
					<Image
						className="fixed top-[150px] right-0 w-[50rem]"
						src={ImageHeroRegister}
						alt="Image Hero Register"
					/>
					<div className="flex flex-col items-center justify-center pl-32">
						<h1 className="text-2xl font-bold w-[550px]">
							Buat akun dan pesan tiket event favoritmu dengan mudah!
						</h1>
						<Suspense fallback={<>Loading...</>}>
							<RegisterForm
								username={username}
								setUsername={setUsername}
								email={email}
								setEmail={setEmail}
								password={password}
								setPassword={setPassword}
								passwordConfirm={passwordConfirm}
								setPasswordConfirm={setPasswordConfirm}
								usernameError={usernameError}
								setUsernameError={setUsernameError}
								emailError={emailError}
								setEmailError={setEmailError}
								passwordError={passwordError}
								setPasswordError={setPasswordError}
								passwordConfirmError={passwordConfirmError}
								setPasswordConfirmError={setPasswordConfirmError}
								isFormValid={isFormValid}
								handleSubmit={handleSubmit}
							/>
						</Suspense>
					</div>
				</div>
			</div>
			{showPopoverFailedLogin && (
				<PopoverEmailExist email={email} hidePopup={hidePopoverEmailExist} />
			)}
		</div>
	);
};

export default Register;
