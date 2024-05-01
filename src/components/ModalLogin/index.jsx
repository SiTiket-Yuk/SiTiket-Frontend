"useclient";
import React, { useState } from "react";
import Link from "next/link";
import ModalSignIn from "@/components/ModalSignIn";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
} from "@nextui-org/react";

export default function ModalLogin({
	title,
	buttonName,
	isOpen,
	onOpenChange,
	setloginConfirmation,
}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [loginError, setLoginError] = useState("");
    const [isValidCredentials, setIsValidCredentials] = useState(false);
	const [loginConfirmation, setLoginConfirmation] = useState(false);

	const registeredEmail = "example@example.com";
	const registeredPassword = "password123"

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        // validasi akun terdaftar/tidak
        if (email === "" && password === "") {
            setEmailError("Masukkan email yang sesuai");
            setPasswordError("Password minimal 8 karakter");
            setIsValidCredentials(false);
        } else if (email === registeredEmail && password === registeredPassword) {
            setIsValidCredentials(true);
            setLoginError("");
			setLoginConfirmation(true);
        } else {
            setIsValidCredentials(false);
            setLoginError("Email atau password salah");
            setEmailError(""); 
            setPasswordError("");
        }
    };

    const validateEmail = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            setEmailError("Masukkan email yang sesuai");
        } else {
            setEmailError("");
        }
    };

    const validatePassword = () => {
        if (password.length < 8) {
            setPasswordError("Password minimal 8 karakter");
        } else {
            setPasswordError("");
        }
    };

    const isLoginDisabled = !email || !password || !!emailError || !!passwordError;

	return (
			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent className="p-8">
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col text-center">
								{title}
							</ModalHeader>
							<ModalBody>
								<p className="text-center text-xl font-bold">Masuk untuk melanjutkan proses pembayaran
								</p>
								<form>
									<input
										required
										label="Email"
										placeholder="Masukkan Email"
										className="mt-4 mb-2 peer w-full rounded-full border border-[#d4a4be] bg-transparent 
										        px-6 py-3 text-base font-normal text-[#414141] outline outline-0
										        transition-all placeholder-shown:border-2 placeholder-shown:border-[#e7e7e7] 
										        focus:border-2 focus:border-[#d4a4be] disabled:border-0 disabled:bg-blue-gray-50"
										value={email}
										onChange={handleEmailChange}
                            			onBlur={validateEmail}
									/>
									{emailError && (
										<p className="text-red-500 text-sm">
											{emailError}
										</p>
									)}
									<input
										required
										placeholder="Masukkan Password"
										label="Password"
										className="mt-4 mb-2 peer w-full rounded-full border border-[#d4a4be] bg-transparent 
										        px-6 py-3 text-base font-normal text-[#414141] outline outline-0
										        transition-all placeholder-shown:border-2 placeholder-shown:border-[#e7e7e7] 
										        focus:border-2 focus:border-[#d4a4be] disabled:border-0 disabled:bg-blue-gray-50"
										value={password}
										onChange={handlePasswordChange}
										onBlur={validatePassword}
									/>
									{passwordError && (
										<p className="text-red-500 text-sm">
											{passwordError}
										</p>
									)}
								</form>

							</ModalBody>
							<ModalFooter>
                            <Button
                                color="secondary"
                                fullWidth
                                className="rounded-full"
                                onPress={isValidCredentials ? onClose : handleLogin}
                                disabled={isLoginDisabled}
                            >
                                {buttonName}
                            </Button>
							</ModalFooter>
							{loginError && (
                                <p className="text-red-500 text-sm text-center mb-8">
                                    {loginError}
                                </p>
                            )}
							<p className="text-center mb-8">Belum punya akun? 
								<Link href={`#`} className="pl-2 font-bold">Buat Akun
								</Link>
							</p>
						</>
					)}
				</ModalContent>
			</Modal>
	);
}
