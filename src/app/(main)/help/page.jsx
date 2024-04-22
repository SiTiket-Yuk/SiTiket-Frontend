"use client";
import React, { useState } from "react";
import Modal1Button from "@/components/Modal1Button";
import { useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import IconHelpEmail from "../../../../public/images/IconHelpEmail.svg";
import IconHelpPhone from "../../../../public/images/IconHelpPhone.svg";

const Help = () => {
	const [nama, setNama] = useState("");
	const [namaError, setNamaError] = useState("Masukkan nama");
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState("Masukkan email");
	const [pesan, setPesan] = useState("");
	const [pesanError, setPesanError] = useState("Masukkan pesan");
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!validateEmail(email)) {
			setEmailError("Email tidak valid");
			return;
		}

		if (nama.length < 0 || nama.valueOf == " ") {
			setNamaError("Masukkan nama");
		} else {
			setNamaError("");
		}

		setNama("");
		setEmail("");
		setPesan("");

		//EDIT UNTUK CONNECT KE DATABASE
		// Kirim formulir jika input valid
		// ...
	};

	const handleChangeNama = (event) => {
		const { value } = event.target;
		setNama(value);

		if (value == "") {
			setNamaError("Masukkan nama");
		} else if (value.length > 0 && !value.trim()) {
			setNamaError("Masukkan nama yang sesuai");
		} else if (value.length >= 0 && value.trim()) {
			setNamaError("");
		}
	};

	const handleChangeEmail = (event) => {
		const { value } = event.target;
		setEmail(value);

		// Lakukan validasi email setiap kali nilai input berubah
		if (value == "") {
			setEmailError("Masukkan email");
		} else if (!validateEmail(value)) {
			setEmailError("Masukkan format email yang sesuai");
		} else {
			setEmailError("");
		}
	};

	const validateEmail = (email) => {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(email);
	};

	const handleChangePesan = (event) => {
		const { value } = event.target;
		setPesan(value);

		if (value == "") {
			setPesanError("Masukkan pesan");
		} else if (value.length > 0 && !value.trim()) {
			setPesanError("Masukkan pesan yang sesuai");
		} else if (value.length >= 0 && value.trim()) {
			setPesanError("");
		}
	};

	return (
		<>
			<div className="container w-[1106px] h-[676px] mx-auto flex flex-col mt-16 mb-[104px]">
				<div className="flex flex-col w-[1106px] h-[122px] text-center text-neutral-700">
					<div className="w-full text-5xl font-bold leading-[50.16px] max-md:max-w-full">
						Selalu ada untuk membantu kamu
					</div>
					<div className="self-center mt-4 text-base leading-7 w-[776px] max-md:max-w-full">
						Punya pertanyaan seputar pembuatan event atau pembelian tiket?
						Jangan ragu untuk bertanya langsung melalui form di bawah ini
					</div>
				</div>
				<div className="flex flex-row w-[1106px] h-[490px] mt-16">
					<div className="w-[356px] h-[426px] ml-[94px] mt-8 ">
						<div className="flex flex-col pb-20 max-w-[356px] text-neutral-700">
							<div className="w-full text-xl font-bold leading-5">
								Hubungi kami langsung melalui
							</div>
							<div className="flex gap-4 mt-8 whitespace-nowrap">
								<Image
									alt="email icon"
									loading="lazy"
									src={IconHelpEmail}
									className="shrink-0 w-12 aspect-square"
								/>
								<div className="flex flex-col justify-center px-1">
									<div className="text-base leading-5">Email:</div>
									<div className="mt-3 text-lg font-bold leading-5">
										support@sitiket.com
									</div>
								</div>
							</div>
							<div className="flex gap-4 mt-8">
								<Image
									alt="phone icon"
									loading="lazy"
									src={IconHelpPhone}
									className="shrink-0 w-12 aspect-square"
								/>
								<div className="flex flex-col justify-center px-1">
									<div className="text-base leading-5">Telpon</div>
									<div className="mt-3 text-lg font-bold leading-5">
										(+62) 888 - 999
									</div>
								</div>
							</div>
						</div>
					</div>
					<form
						className="w-[634px] h-[532px] ml-[22px]"
						onSubmit={handleSubmit}
					>
						<div
							className="flex flex-col h- p-8 text-sm font-medium leading-5 bg-white rounded-lg 
              border border-solid shadow-sm border-slate-200 max-w-[634px] text-neutral-700 max-md:px-5"
						>
							<div className="max-md:max-w-full font-semibold">Nama</div>
							<div
								className="relative h-[57px] w-[573px] min-w-[200px]"
								style={{
									marginBottom:
										namaError && namaError != "Masukkan nama" ? "20px" : "0px",
								}}
							>
								<input
									className="peer h-full w-full rounded-xl border border-[#d4a4be] bg-transparent px-6 py-3 
                  font-sans text-base font-normal text-[#414141] outline outline-0 placeholder-shown:border-2 
                  placeholder-shown:border-[#e7e7e7] focus:border-2 focus:border-[#d4a4be] disabled:border-0
                  disabled:bg-blue-gray-50"
									placeholder=" "
									type="text"
									value={nama}
									onChange={handleChangeNama}
								/>
								<label
									className="before:content[''] after:content[''] pointer-events-none absolute left-6 -top-1 
                  flex h-full w-full select-none text-[0px] text-[#929292] transition-all before:pointer-events-none 
                  after:pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.1] peer-focus:text-[0px]"
								>
									Masukkan nama
								</label>
								{namaError != "Masukkan nama" && namaError && (
									<p
										style={{
											position: "absolute",
											top: "120%",
											left: 3,
											color: "#AC0000",
										}}
									>
										{namaError}
									</p>
								)}
							</div>

							<div className="mt-6 max-md:max-w-full font-semibold">Email</div>
							<div
								className="relative h-[57px] w-[573px] min-w-[200px]"
								style={{
									marginBottom:
										emailError &&
										emailError == "Masukkan format email yang sesuai"
											? "20px"
											: "0px",
								}}
							>
								<input
									className="peer h-full w-full rounded-xl border border-[#d4a4be] bg-transparent px-6 py-3 
                  font-sans text-base font-normal text-[#414141] outline outline-0 transition-all 
                  placeholder-shown:border-2 placeholder-shown:border-[#e7e7e7] focus:border-2 
                  focus:border-[#d4a4be] disabled:border-0 disabled:bg-blue-gray-50"
									placeholder=" "
									type="email"
									value={email}
									onChange={handleChangeEmail}
								/>
								<label
									className="before:content['*'] after:content['*'] pointer-events-none absolute left-6 
                  -top-1 flex h-full w-full select-none text-[0px] text-[#929292] transition-all before:pointer-events-none
                  after:pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.1] peer-focus:text-[0px]"
								>
									Masukkan email
								</label>
								{emailError == "Masukkan format email yang sesuai" &&
									emailError && (
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

							<div className="mt-6 max-md:max-w-full font-semibold">Pesan</div>
							<div
								className="relative h-[132px] w-[573px] min-w-[200px]"
								style={{
									marginBottom:
										pesanError && pesanError != "Masukkan pesan"
											? "20px"
											: "0px",
								}}
							>
								<textarea
									className="peer resize-none h-full w-full rounded-xl border border-[#d4a4be] bg-transparent px-6 py-3 
                  font-sans text-base font-normal text-[#414141] outline outline-0 transition-all placeholder-shown:border-2 
                  placeholder-shown:border-[#e7e7e7] focus:border-2 focus:border-[#d4a4be] disabled:border-0 disabled:bg-blue-gray-50"
									placeholder=""
									type="text"
									value={pesan}
									onChange={handleChangePesan}
								/>
								<label
									className="before:content['*'] after:content['*'] pointer-events-none absolute left-6 -top-1 
                  flex h-full w-full select-none text-[0px] text-[#929292] transition-all before:pointer-events-none 
                  after:pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.1] peer-focus:text-[0px]"
								>
									Tuliskan pesan kamu
								</label>
								{pesanError != "Masukkan pesan" && pesanError && (
									<p
										style={{
											position: "absolute",
											top: "110%",
											left: 3,
											color: "#AC0000",
										}}
									>
										{pesanError}
									</p>
								)}
							</div>

							<button
								className="justify-center self-start px-5 py-3.5 mt-6 text-xs font-bold leading-4 text-center
              bg-neutral-300 rounded-[30px] text-neutral-400 max-md:px-5"
								type="submit"
								disabled={emailError || pesanError || namaError}
								style={{
									backgroundColor:
										emailError || pesanError || namaError
											? "#D4D4D4"
											: "#b5618d",
									color:
										emailError || pesanError || namaError
											? "#A5A5A5"
											: "#FFFFFF",
								}}
								onClick={onOpen}
							>
								Kirim pesan
							</button>
							<Modal1Button
								title={"Pesan berhasil dikirimkan!"}
								message={"Harap pantau email Anda untuk balasan lebih lanjut"}
								buttonName={"Ok"}
								isOpen={isOpen}
								onOpenChange={onOpenChange}
							/>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Help;
