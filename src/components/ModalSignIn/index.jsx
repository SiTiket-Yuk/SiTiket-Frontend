import React, { useState } from "react";
import Link from "next/link";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
} from "@nextui-org/react";

export default function ModalSignIn({
    title,
    buttonName,
    isOpen,
    onOpenChange,
    onClose,
}) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [nameError, setNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [signinError, setSigninError] = useState("");
    const [isEmailRegistered, setIsEmailRegistered] = useState(false);

	const registeredEmail = "example@example.com";

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setIsEmailRegistered(false);
        setEmailError("");
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
        setNameError("");
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError("");
    };

    const handleSignIn = () => {
        // Validasi input
        if (email === "" || password === "" || name === "") {
            setEmailError(email === "" ? "Masukkan email yang sesuai" : "");
            setNameError(name === "" ? "Masukkan nama" : "");
            setPasswordError(password === "" ? "Password minimal 8 karakter" : "");
            setSigninError("");
            setIsEmailRegistered(false);
            return;
        } 
		
        // Validasi email sudah terdaftar/tidak
        if (email === registeredEmail) {
            setIsEmailRegistered(true);
            setSigninError("Email sudah terdaftar");
        } else{
			setSigninError(""); 
		}
    };


    const validateEmail = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailError(!regex.test(email) ? "Masukkan email yang sesuai" : "");
    };

    const validateName = () => {
        setNameError(name === "" ? "Masukkan nama" : "");
    };

    const validatePassword = () => {
        setPasswordError(password.length < 8 ? "Password minimal 8 karakter" : "");
    };

    const isButtonDisabled = !email || !password || !!emailError || !!passwordError || !!nameError;

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} onClose={onClose}>
            <ModalContent className="p-8">
                <>
                    <ModalHeader className="flex flex-col text-center">
                        {title}
                    </ModalHeader>
                    <ModalBody>
                        <p className="text-center text-xl font-bold">Buat Akun</p>
                        <form>
                            <input
                                required
                                label="name"
                                placeholder="Masukkan Nama"
                                className="mt-4 mb-2 peer w-full rounded-full border border-[#d4a4be] bg-transparent 
                                        px-6 py-3 text-base font-normal text-[#414141] outline outline-0
                                        transition-all placeholder-shown:border-2 placeholder-shown:border-[#e7e7e7] 
                                        focus:border-2 focus:border-[#d4a4be] disabled:border-0 disabled:bg-blue-gray-50"
                                onChange={handleNameChange}
                                onBlur={validateName}
                            />
                            {nameError && (
                                <p className="text-red-500 text-sm">
                                    {nameError}
                                </p>
                            )}
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
                            onPress={!isEmailRegistered ? onClose : handleLogin}
                            disabled={isButtonDisabled || isEmailRegistered}
                        >
                            {buttonName}
                        </Button>
                    </ModalFooter>
                    {signinError && (
                        <p className="text-red-500 text-sm text-center mb-8">
                            {signinError}
                        </p>
                    )}
                    <p className="text-center mb-8">Sudah punya akun?
                        <Link href={`#`} className="pl-2 font-bold">Masuk</Link>
                    </p>
                </>
            </ModalContent>
        </Modal>
    );
}
