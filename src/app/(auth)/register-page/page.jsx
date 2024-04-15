"use client"
import Image from "next/image";
import Link from "next/link";
import LogoLight from "../../../../public/logo/LogoLight.png";
import LogoRegis from "../../../../public/logo/LogoRegis.png";
import React, { useState } from 'react';
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";
import {Input} from "@nextui-org/react";

const Register = () => {
    const [nama, setNama] = useState('');
    const [namaError, setNamaError] = useState('Masukkan nama');
    const [showPopupSuccess, setshowPopupSuccess] = useState(false);
    const [showPopupError, setshowPopupError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('Masukkan email');
    const [passwordError, setPasswordError] = useState('Masukkan password');
    const firstName = nama.split(' ')[0];

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validateEmail(email)) {
          setEmailError('Email tidak valid');
          return;
        }
    
        if (password.length < 8) {
          setPasswordError('Password harus terdiri dari minimal 8 karakter');       
          return;
        }

        if (nama.length < 0 || nama.value == " ") {
            setNamaError('Masukkan nama');
          } else {
            setNamaError('');
          }
    
        //EDIT UNTUK CONNECT KE DATABASE
        // Kirim formulir jika input valid
        // ...
    };

    const handleChangeNama = (event) => {
        const { value } = event.target;
        setNama(value);

        if (value == ""){
            setNamaError('Masukkan nama');
        }else if(value.length > 0 && !value.trim()){
            setNamaError('Masukkan nama yang sesuai');
        } else if (value.length >= 0 && value.trim()){
            setNamaError('');
        }
    };

	const handleChangeEmail = (event) => {
		const { value } = event.target;
		setEmail(value);

		// Lakukan validasi email setiap kali nilai input berubah
		if (value == ''){
			setEmailError('Masukkan email');
		}else if (!validateEmail(value)) {
			setEmailError('Masukkan format email yang sesuai');
		} else if (value == 'tes@gmail.com'){ //EDIT UNTUK CEK DI DATABASE
            setEmailError('Email terdaftar');
        }else {
			setEmailError('');
		}
	};

    const handleChangePassword = (event) => {
        const { value } = event.target;
        setPassword(value);
        
        if (value.length == 0){
            setPasswordError('Masukkan password');
        }else if (value.length < 8 && value.length!=0) {
          setPasswordError('Password minimal 8 karakter');
        } else {
          setPasswordError('');
        }
      };

	const validateEmail = (email) => {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(email);
	};

    const togglePopup = () => {
        if (emailError == 'Email terdaftar'){
            setshowPopupError(!showPopupError);
        } else {
         //   UBAH DSINI UNTK PINDAH KE LANDING PAGE
            setshowPopupSuccess(!showPopupSuccess);
        }

    };

    return (
       <div className="container mx-auto flex flex-col">
            <nav className="bg-[#0075B4]">
			<div
				className="flex flex-wrap md:flex-row flex-col lg:px-52 md:px-32 
				sm:px-0 py-5 justify-between items-center"
			>
				<div className="flex md:flex-row md:gap-12 gap-1 flex-col items-center">
					<Link href="/" className="flex flex-row items-center">
						<Image
							className="object-cover h-13 w-12"
							src={LogoLight}
							alt="SiTiket Logo"
						/>
						<div className="flex flex-row pl-2 text-white text-3xl">
							si<div class="font-bold">tiket</div>
						</div>
					</Link>
			    </div>
            </div>
		    </nav>
			<div className="flex md:flex-row md:gap-12 gap-1 flex-col items-center" style={{ position:'fixed', right: '0px', top: '210px', width: '660px', height: '475px' }}>
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
                <div class="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none" style={{ width: '650px', height: '87px' }}>
				<h4 className="block font-zen-kaku-gothic-antique text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased" style={{ fontSize: '31.25px', color: '#424242' }}>
                    Buat akun dan pesan tiket event favoritmu dengan mudah!
                    </h4>
                    <form class="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
                    <div class="mb-4 flex flex-col gap-7">
						<div class="relative h-[57px] w-[563px] min-w-[200px]" style={{ marginBottom: namaError && namaError != 'Masukkan nama' ? '20px' : '0px' }}>
                        <input
                            class="peer h-full w-full rounded-full border border-[#d4a4be] bg-transparent px-6 py-3 font-sans text-base font-normal text-[#414141] outline outline-0 transition-all placeholder-shown:border-2 placeholder-shown:border-[#e7e7e7] focus:border-2 focus:border-[#d4a4be] disabled:border-0 disabled:bg-blue-gray-50"
                            placeHolder=" "
                            type = "text"
                            value = {nama}
                            onChange={handleChangeNama}
                        />
                        <label className="before:content['*'] after:content['*'] pointer-events-none absolute left-6 -top-1 flex h-full w-full select-none text-[0px] text-[#929292] transition-all before:pointer-events-none after:pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.1] peer-focus:text-[0px]">
                            Masukkan nama lengkap
                        </label>
                        {namaError != 'Masukkan nama' && namaError && <p style={{ position: 'absolute', top: '120%', left: 3, color: '#AC0000' }}>{namaError}</p>}
                        </div>
                        <div class="relative h-[57px] w-[563px] min-w-[200px]" style={{ marginBottom: emailError && emailError == 'Masukkan format email yang sesuai' ? '20px' : '0px' }}>
                        <input
                            class="peer h-full w-full rounded-full border border-[#d4a4be] bg-transparent px-6 py-3 font-sans text-base font-normal text-[#414141] outline outline-0 transition-all placeholder-shown:border-2 placeholder-shown:border-[#e7e7e7] focus:border-2 focus:border-[#d4a4be] disabled:border-0 disabled:bg-blue-gray-50"
                            placeHolder=" "
							type="email"
							value={email}
							onChange={handleChangeEmail}
						/>
                        <label className="before:content['*'] after:content['*'] pointer-events-none absolute left-6 -top-1 flex h-full w-full select-none text-[0px] text-[#929292] transition-all before:pointer-events-none after:pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.1] peer-focus:text-[0px]">
                            Masukkan email
                        </label>
						{emailError == 'Masukkan format email yang sesuai' && emailError && <p style={{ position: 'absolute', top: '120%', left: 3, color: '#AC0000' }}>{emailError}</p>}
                        </div>
                        <div class="relative h-[57px] w-[563px] min-w-[200px] " style={{ marginBottom: passwordError && passwordError != 'Masukkan password' ? '20px' : '0px' }}>
                        <input
                            type="password"
                            class="peer h-full w-full rounded-full border border-[#d4a4be] bg-transparent px-6 py-3 font-sans text-base font-normal text-[#414141] outline outline-0 transition-all placeholder-shown:border-2 placeholder-shown:border-[#e7e7e7] focus:border-2 focus:border-[#d4a4be] disabled:border-0 disabled:bg-blue-gray-50"
                            placeHolder=" "
                            value={password}
                            onChange={handleChangePassword}
                        />
                        <label className="before:content['*'] after:content['*'] pointer-events-none absolute left-6 -top-1 flex h-full w-full select-none text-[0px] text-[#929292] transition-all before:pointer-events-none after:pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.1] peer-focus:text-[0px]">
                            Masukkan password
                        </label>
                        {passwordError != 'Masukkan password' && passwordError && (
                        <p style={{ position: 'absolute', top: '120%', left: 0, color: '#AC0000' }}>
                            {passwordError}
                        </p>
                        )}
                        </div>
                    </div>
                   
                    <button
                        className="mt-14 ml-28 block w-[341px] h-[66px] select-none rounded-full bg-pink-400 text-white font-bold text-xs shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 font-dm-sans"
                        type="submit" disabled={(emailError != 'Email terdaftar' && emailError) || passwordError || namaError} 
                        style={{ borderRadius: '40px', backgroundColor: (emailError != 'Email terdaftar' && emailError) || passwordError || namaError ? '#D4D4D4' : '#b5618d',
                        color: (emailError != 'Email terdaftar' && emailError) || passwordError || namaError ? '#A5A5A5' : '#FFFFFF', fontSize: '18px' }}
                        data-ripple-light="true"
                        onClick={togglePopup}
                    >
                        Daftar
                    </button>

                    {showPopupSuccess && (
                        <Popover backdrop="opaque" style={{ top: '84px', left:'330px', width: '463px', height: '260px', borderRadius: '20px'}}>
                            <PopoverContent className="w-[463px] h-[258px]">
                            <div style={{ width: '300px', height: '20px', textAlign: 'center', marginTop:'10px', color: 'black', fontWeight: 'bold', fontSize: '20px' }}>
                            Selamat Bergabung {firstName}!
                            </div>
                            <div style={{ width: '326px', height: '5px', textAlign: 'center', marginTop:'21px', color: '#000000', lineHeight: '1.1', fontSize: '16.5px'}}>
                            Bersiaplah untuk petualangan yang seru! <br />
                            Event-event terkini menanti untuk Anda eksplorasi
                            </div>
                            <div style={{ justifyContent: 'center'}}>
                                <button
                                className="block w-[326px] h-[41px] select-none rounded-full bg-pink-400 text-white font-bold text-xs shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 font-dm-sans"
                                type="button"
                                style={{ marginTop: '70px', borderRadius: '40px', backgroundColor: '#b5618d', fontSize: '12px' }}
                                data-ripple-light="true"
                                onClick={togglePopup}
                                >
                                    Ok
                                </button>
                            </div>
                            
                            
                            </PopoverContent>
                        </Popover>

                    )}

                    {showPopupError && (
                        <Popover backdrop="opaque" style={{ top: '95px',left:'358.3px',width: '406px', height: '240px', borderRadius: '20px'}}>
                        <PopoverContent className="w-[406px] h-[240px]">
                        <div style={{ width: '300px', height: '20px', textAlign: 'center', marginTop:'10px', color: 'black', fontWeight: 'bold', fontSize: '20px' }}>
                        Email Sudah Terdaftar
                        </div>
                        <div style={{ width: '300px', height: '5px', textAlign: 'center', marginTop:'21px', color: '#121212', lineHeight: '1.1', fontSize: '16.5px' }}>
                        Lanjut masuk dengan email ini <br />
                        {email} ?
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop:'50px' }}>
                            <button
                            className="block w-[157px] h-[42px] select-none rounded-full bg-pink-400 text-white font-bold text-xs shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 font-dm-sans"
                            type="button"
                            style={{ borderRadius: '40px', backgroundColor: '#b5618d', fontSize: '12px', marginRight: '6px'  }}
                            data-ripple-light="true"
                            onClick={togglePopup}
                            >
                                Ubah email
                            </button>
                            <button
                            className="block w-[157px] h-[42px] select-none rounded-full bg-pink-400 text-white font-bold text-xs shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 font-dm-sans"
                            type="button"
                            style={{ marginLeft: '0px' , borderRadius: '40px', backgroundColor: '#b5618d', fontSize: '12px', marginLeft: '6px'  }}
                            data-ripple-light="true"
                            >
                                <Link href="/login-page" class="transition-colors">
                                <span>Masuk</span>
                                </Link>
                            </button>
                        </div>
                        
                        </PopoverContent>
                        </Popover>
                    )}
                     

                    <p class="mt-4 ml-44 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased link">
                        Sudah punya akun?
                        <Link href="/login-page" class="ml-1 font-semibold text-gray-700 transition-colors hover:text-blue">
                        <span>Masuk</span>
                        </Link>
                    </p>
                    </form>
                </div>
            </div>
			</div>
        </div>
    );
};



export default Register;