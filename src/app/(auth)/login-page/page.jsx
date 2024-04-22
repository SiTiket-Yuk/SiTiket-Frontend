"use client";
import Image from "next/image";
import Link from "next/link";
import LogoLogin from "../../../../public/logo/LogoLogin.png";
import "./styles.css";
import React, { Suspense, useEffect, useState } from "react";
import { Popover, PopoverContent } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";

const LoginForm = ({
	handleSubmit,
	emailError,
	email,
	handleChangeEmail,
	password,
	handleChangePassword,
	passwordError,
	togglePopup,
	showPopupSuccess,
	showPopupEmailSalah,
	showPopupPasswordSalah,
	showPopupBelumTerdaftar,
	fromParamEmail,
	setEmail,
}) => {
	useEffect(() => {
		const fromURLEmail = fromParamEmail.get("userEmail");
		if (fromURLEmail != null) {
			setEmail(fromURLEmail);
		}
	}, [fromParamEmail, setEmail]);

	return (
		<form
			className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
			onSubmit={handleSubmit}
		>
			<div class="mb-4 flex flex-col gap-7">
				<div
					className="relative h-[57px] w-[563px] min-w-[200px] "
					style={{
						marginBottom:
							emailError && emailError == "Masukkan format email yang sesuai"
								? "20px"
								: "0px",
					}}
				>
					<input
						class="peer h-full w-full rounded-full border border-[#d4a4be] bg-transparent px-6 py-3 
            font-sans text-base font-normal text-[#414141] outline outline-0 transition-all placeholder-shown:border-2 
            placeholder-shown:border-[#e7e7e7] focus:border-2 focus:border-[#d4a4be] disabled:border-0 disabled:bg-blue-gray-50"
						placeholder=" "
						type="email"
						value={email}
						onChange={handleChangeEmail}
					/>
					<label
						className="before:content[' '] after:content[' '] pointer-events-none absolute left-6 -top-1 
          flex h-full w-full select-none text-[0px] text-[#929292] transition-all before:pointer-events-none 
          after:pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.1] peer-focus:text-[0px]"
					>
						Masukkan email
					</label>
					{emailError && emailError == "Masukkan format email yang sesuai" && (
						<p
							style={{
								position: "absolute",
								top: "120%",
								left: 3,
								color: "#AC0000",
							}}
						>
							{emailError}
						</p>
					)}
				</div>

				<div
					className="relative h-[57px] w-[563px] min-w-[200px]"
					style={{
						marginBottom:
							passwordError &&
							passwordError == "Password harus terdiri dari minimal 8 karakter"
								? "20px"
								: "0px",
					}}
				>
					<input
						type="password"
						className="peer h-full w-full rounded-full border border-[#d4a4be] bg-transparent px-6 py-3 
            font-sans text-base font-normal text-[#414141] outline outline-0 transition-all placeholder-shown:border-2 
            placeholder-shown:border-[#e7e7e7] focus:border-2 focus:border-[#d4a4be] disabled:border-0 disabled:bg-blue-gray-50"
						placeholder=" "
						value={password}
						onChange={handleChangePassword}
					/>
					<label
						className="before:content[' '] after:content[' '] pointer-events-none absolute left-6 -top-1 flex 
          h-full w-full select-none text-[0px] text-[#929292] transition-all before:pointer-events-none 
          after:pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.1] peer-focus:text-[0px]"
					>
						Masukkan password
					</label>
					{passwordError && passwordError == "Password minimal 8 karakter" && (
						<p
							style={{
								position: "absolute",
								top: "120%",
								left: 0,
								color: "#AC0000",
							}}
						>
							{passwordError}
						</p>
					)}
				</div>
			</div>

			<button
				className="mt-14 ml-28 block w-[341px] h-[66px] select-none rounded-full bg-pink-400 text-white font-bold text-xs shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 font-dm-sans"
				type="button"
				disabled={
					emailError == "Masukkan email" ||
					passwordError == "Masukkan password" ||
					emailError == "Masukkan format email yang sesuai" ||
					passwordError == "Password minimal 8 karakter"
				}
				style={{
					borderRadius: "40px",
					backgroundColor:
						emailError == "Masukkan email" ||
						passwordError == "Masukkan password" ||
						emailError == "Masukkan format email yang sesuai" ||
						passwordError == "Password minimal 8 karakter"
							? "#D4D4D4"
							: "#b5618d",
					color:
						emailError == "Masukkan email" ||
						passwordError == "Masukkan password" ||
						emailError == "Masukkan format email yang sesuai" ||
						passwordError == "Password minimal 8 karakter"
							? "#A5A5A5"
							: "#FFFFFF",
					fontSize: "18px",
				}}
				data-ripple-light="true"
				onClick={togglePopup}
			>
				Masuk
			</button>

			{showPopupSuccess && (
				<Popover backdrop="opaque" className="success-popup">
					<PopoverContent className="w-[463px] h-[258px]">
						<div className="success-content-top">
							Selamat Datang Kembali ...!{" "}
							{/*UBAH DISINI UNTUK AMBIL NAMA DRI DATABASE*/}
						</div>
						<div className="success-content-bottom">
							Bersiaplah untuk petualangan yang seru! <br />
							Event-event terkini menanti untuk Anda eksplorasi
						</div>
						<div style={{ justifyContent: "center" }}>
							<button
								className="block w-[326px] h-[41px] select-none rounded-full bg-pink-400 text-white 
                font-bold text-xs shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2
              focus:ring-pink-400 focus:ring-opacity-50 font-dm-sans"
								type="button"
								style={{
									marginTop: "70px",
									borderRadius: "40px",
									backgroundColor: "#b5618d",
									fontSize: "12px",
								}}
								data-ripple-light="true"
								onClick={togglePopup}
							>
								Ok
							</button>
						</div>
					</PopoverContent>
				</Popover>
			)}

			{showPopupEmailSalah && (
				<Popover backdrop="opaque" className="error-popup">
					<PopoverContent className="w-[406px] h-[240px]">
						<div className="error-content-top">Kesalahan Saat Login</div>
						<div className="error-content-bottom">
							Email yang Anda masukkan salah. Silakan coba lagi
						</div>
						<div style={{ justifyContent: "center", marginTop: "55px" }}>
							<button
								className="block w-[326px] h-[42px] select-none rounded-full bg-pink-400 text-white 
                        font-bold text-xs shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2
                      focus:ring-pink-400 focus:ring-opacity-50 font-dm-sans"
								type="button"
								style={{
									borderRadius: "40px",
									backgroundColor: "#b5618d",
									fontSize: "12px",
								}}
								data-ripple-light="true"
								onClick={togglePopup}
							>
								Kembali
							</button>
						</div>
					</PopoverContent>
				</Popover>
			)}

			{showPopupPasswordSalah && (
				<Popover
					backdrop="opaque"
					style={{
						top: "69.5px",
						right: "421.5px",
						width: "406px",
						height: "240px",
						borderRadius: "20px",
					}}
				>
					<PopoverContent className="w-[406px] h-[240px]">
						<div
							style={{
								width: "300px",
								height: "20px",
								textAlign: "center",
								marginTop: "10px",
								color: "black",
								fontWeight: "bold",
								fontSize: "20px",
							}}
						>
							Kesalahan Saat Login
						</div>
						<div
							style={{
								width: "326px",
								height: "5px",
								textAlign: "center",
								marginTop: "21px",
								color: "black",
								lineHeight: "18px",
								fontSize: "16.5px",
							}}
						>
							Password yang Anda masukkan salah. Silakan coba lagi
						</div>
						<div style={{ justifyContent: "center", marginTop: "55px" }}>
							<button
								className="block w-[326px] h-[42px] select-none rounded-full bg-pink-400 text-white font-bold text-xs shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 font-dm-sans"
								type="button"
								style={{
									borderRadius: "40px",
									backgroundColor: "#b5618d",
									fontSize: "12px",
								}}
								data-ripple-light="true"
								onClick={togglePopup}
							>
								Kembali
							</button>
						</div>
					</PopoverContent>
				</Popover>
			)}

			{showPopupBelumTerdaftar && (
				<Popover
					backdrop="opaque"
					style={{
						top: "69.5px",
						right: "421.5px",
						width: "406px",
						height: "240px",
						borderRadius: "20px",
					}}
				>
					<PopoverContent className="w-[406px] h-[240px]">
						<div
							style={{
								width: "300px",
								height: "20px",
								textAlign: "center",
								marginTop: "10px",
								color: "black",
								fontWeight: "bold",
								fontSize: "20px",
							}}
						>
							Email Belum Terdaftar
						</div>
						<div
							style={{
								width: "326px",
								height: "5px",
								textAlign: "center",
								marginTop: "21px",
								color: "black",
								lineHeight: "18px",
								fontSize: "16.5px",
							}}
						>
							Buat akun dengan email ini <br />
							{email} ?
						</div>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								marginTop: "50px",
							}}
						>
							<button
								className="block w-[157px] h-[42px] select-none rounded-full bg-pink-400 text-white font-bold text-xs shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 font-dm-sans"
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
								Kembali
							</button>
							<button
								className="block w-[157px] h-[42px] select-none rounded-full bg-pink-400 text-white font-bold text-xs shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 font-dm-sans"
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
								<Link href="/register-page" class="transition-colors">
									<span>Buat Akun</span>
								</Link>
							</button>
						</div>
					</PopoverContent>
				</Popover>
			)}

			<p className="mt-4 ml-44 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased ">
				Belum punya akun?
				<Link
					href="/register-page"
					className="ml-1 font-semibold text-gray-700 transition-colors hover:text-blue"
				>
					<span>Daftar</span>
				</Link>
			</p>
		</form>
	);
};

const Login = () => {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [emailError, setEmailError] = useState("Masukkan email");
	const [passwordError, setPasswordError] = useState("Masukkan password");
	const [showPopupSuccess, setshowPopupSuccess] = useState(false);
	const [showPopupBelumTerdaftar, setshowPopupBelumTerdaftar] = useState(false);
	const [showPopupEmailSalah, setshowPopupEmailSalah] = useState(false);
	const [showPopupPasswordSalah, setshowPopupPasswordSalah] = useState(false);

	const searchParams = useSearchParams();

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!validateEmail(email)) {
			setEmailError("Email tidak valid");
			return;
		}

		if (password.length < 8) {
			setPasswordError("Password harus terdiri dari minimal 8 karakter");
			return;
		}

		//EDIT UNTUK CONNECT KE DATABASE
		// Kirim formulir jika input valid
		// ...
	};

	const handleChangeEmail = (event) => {
		const { value } = event.target;
		setEmail(value);

		if (value == "") {
			setEmailError("Masukkan email");
		} else if (!validateEmail(value)) {
			setEmailError("Masukkan format email yang sesuai");
		} else {
			setEmailError("");
		}
	};

	const handleChangePassword = (event) => {
		const { value } = event.target;
		setPassword(value);

		if (value == "") {
			setPasswordError("Masukkan password");
		} else if (value.length < 8 && value.length != 0) {
			setPasswordError("Password minimal 8 karakter");
		} else {
			setPasswordError("");
		}
	};

	const validateEmail = (email) => {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(email);
	};

	const cekPassword = () => {
		if (password === "12345678") {
			// UBAH DISINI UNTK CEK KE DATABASE
			return true;
		} else {
			return false;
		}
	};

	const cekEmail = () => {
		if (email === "tes@gmail.com") {
			// UBAH DISINI UNTK CEK KE DATABASE
			return true;
		} else {
			return false;
		}
	};

	const togglePopup = () => {
		if (cekEmail() == false) {
			if (cekPassword() == true) {
				setEmailError("Email salah");
				setshowPopupEmailSalah(!showPopupEmailSalah);
			} else {
				setEmailError("Email belum terdaftar");
				setshowPopupBelumTerdaftar(!showPopupBelumTerdaftar);
			}
		} else {
			if (cekPassword() == false) {
				setPasswordError("Password salah");
				setshowPopupPasswordSalah(!showPopupPasswordSalah);
			} else {
				setshowPopupSuccess(!showPopupSuccess);
			}
		}
	};

	return (
		<div className="mx-auto flex flex-col">
			<div className="flex md:flex-row md:gap-12 gap-1 flex-col items-center hero-image">
				<Image
					className="object-cover max-w-full h-auto"
					src={LogoLogin}
					alt="Login Logo"
				/>
			</div>
			<div
				className="flex min-h-window md:flex-row flex-col lg:px-52 md:px-32 
				sm:px-20 py-20 justify-between items-center"
				style={{ marginLeft: "500px" }}
			>
				<div className="flex md:flex-row md:gap-12 gap-1 flex-col items-center">
					<div
						className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none"
						style={{ width: "650px", height: "87px", marginTop: "10px" }}
					>
						<h4
							className="block font-zen-kaku-gothic-antique text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased"
							style={{ fontSize: "31.25px", color: "#424242" }}
						>
							Kami senang melihatmu lagi! Masuk dan jelajahi pengalaman memesan
							tiket event favoritmu dengan mudah
						</h4>
						<Suspense fallback={<>Loading...</>}>
							<LoginForm
								handleSubmit={handleSubmit}
								emailError={emailError}
								email={email}
								handleChangeEmail={handleChangeEmail}
								password={password}
								handleChangePassword={handleChangePassword}
								passwordError={passwordError}
								togglePopup={togglePopup}
								showPopupSuccess={showPopupSuccess}
								showPopupEmailSalah={showPopupEmailSalah}
								showPopupPasswordSalah={showPopupPasswordSalah}
								showPopupBelumTerdaftar={showPopupBelumTerdaftar}
								fromParamEmail={searchParams}
								setEmail={setEmail}
							/>
						</Suspense>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
