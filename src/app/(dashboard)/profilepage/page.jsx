"use client"
import Image from "next/image";
import Link from "next/link";
import LogoDark from "../../../../public/logo/LogoDark.png";
import InformationMessage from "@/components/InformationMessage";
import AvatarDefault from "../../../../public/imageDefault/AvatarDefault.png";
import {Avatar, useDisclosure} from "@nextui-org/react";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import Modal2Buttons from "@/components/Modal2Buttons";



const ProfilePage = () => {
    const [isPengaturanClicked, setIsPengaturanClicked] = useState(true);
    const [isKeluarClicked, setIsKeluarClicked] = useState(false);
    const [nama, setNama] = useState('Number 0'); //HARUSNYA CEK KE DATABASE UNTUK AMBIL NAMA
    const [email, setEmail] = useState('tes@gmail.com');  //HARUSNYA CEK KE DATABASE UNTUK AMBIL EMAIL
    const [nomortelp, setnomortelp] = useState('');
    const [namaError, setNamaError] = useState('');
    const [nomortelpError, setnomortelpError] = useState('');
    const [isModified, setIsModified] = useState(false);
    const [changeConfirmation, setChangeConfirmation] = useState(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const router = useRouter();

    const handleLogOut = () => {
        router.push("/landing-page")
    }

    const handleChangeSubmit = () => {
        setChangeConfirmation(true);
    }

    const handleCloseInfoMsg = () => {
        setChangeConfirmation(false);
    }
    
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

        if (value !== 'Number 0') {         //SESUAIKAN DENGAN NAMA DI DATABASE
            setIsModified(true);
        } else {
            setIsModified(false);
        }
    };

    const handleChangeNoTelp = (event) => {
        const { value } = event.target;
        setnomortelp(value);

        if (value == ""){
            setnomortelpError('');
        }else if(value.length < 11 || value.length > 13 || isNaN(value)){
            setnomortelpError('Masukkan nomor yang sesuai');
        } else if (value.length >= 11 || value.length <= 13 || !isNaN(value)){
            setnomortelpError('');
        }
    }

    const handleKeluarClick = () => {
        setIsPengaturanClicked(false);
        setIsKeluarClicked(true);
    };

    const handlePengaturanClick = () => {
        setIsPengaturanClicked(true);
        setIsKeluarClicked(false);
    };

	return (
		<>
			<div className="container mx-auto flex flex-row">
                <div class="relative flex flex-col h-screen w-[344px] bg-[#f9f9f9]" style={{ boxShadow: '0px 2px 6px 0px rgba(20, 20, 43, 0.06)', borderBottomRightRadius: '32px' }}>
                    <div className="flex items-center mt-[50px]">
                        <div className="flex gap-1 flex-col items-center mx-auto">
                            <Link href="/" className="flex flex-row items-center">
                                <Image
                                    className="object-cover h-13 w-12"
                                    src={LogoDark}
                                    alt="SiTiket Logo"
                                />
                                <div className="flex flex-row pl-2 text-black text-3xl">
                                    si<div class="font-bold">tiket</div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <button className="flex relative h-[50px] w-[229px] bg-[#f9f9f9] rounded-[15px] gap-4 items-center ml-[52px] mr-[63] mt-[67px]"> 
                        <div className="flex h-[28px] w-[29px] ml-[24px] bg-white rounded-xl flex-col items-center justify-center"> 
                            <div className="flex justify-center items-center px-2 bg-white rounded-xl h-[28px] w-[29px]">
                                <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d2ffbe294ec17f7afceb107e82f2527e5cba66e9fbcd2a552dacfbd0aa3a5ca?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&"
                                className="w-full aspect-[1.45] fill-zinc-400 max-w-[13px]"
                                />
                            </div>      
                        </div>
                        
                        <h2 className="font-medium text-medium lg:text-base text-[#b6b6b6]"> {/*SINI BUTUH TOMBOL PINDAH PAGE KE PENGATURAN*/}
                            <Link href="/mytiket">
                                <span>Tiket Saya</span>
                            </Link>
						</h2>
                    </button>

                    <button className="flex relative h-[50px] w-[229px] bg-[#f9f9f9] rounded-[15px] gap-4 items-center ml-[52px] mr-[63] mt-[16px]"> 
                        <div className="flex h-[28px] w-[29px] ml-[24px] bg-white rounded-xl flex-col items-center justify-center"> 
                            <div className="flex justify-center items-center px-2 bg-white rounded-xl h-[28px] w-[29px]"  style={{ boxShadow: '0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02)'}}>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/10bd22404fd3b59d28fd0aa135fac45e4dfc3c2343d64f6b37e3e74635eb1f39?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&"
                                    className="w-13 h-9 aspect-[0.93] fill-white"
                                    />
                            </div>       
                        </div>
                        
                        <h2 className="font-medium text-medium lg:text-base text-[#b6b6b6]"> {/*SINI BUTUH TOMBOL PINDAH PAGE KE JELAJAH TIKET*/}
                            <Link href="/discovery">
                                <span>Jelajah Tiket</span>
                            </Link>
						</h2>
                    </button>

                    <button
                        className={`flex relative h-[50px] w-[229px] ${
                            isPengaturanClicked ? 'bg-white' : 'bg-[#f9f9f9]'
                        } rounded-[15px] gap-4 items-center ml-[52px] mr-[63px] mt-[16px]`}
                        style={{
                            boxShadow: isPengaturanClicked ? '0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02)' : 'none'
                        }}
                        onClick={handlePengaturanClick}
                    >
                        <div
                            className={`flex h-[28px] w-[29px] ml-[24px] ${
                                isPengaturanClicked ? 'bg-[#0076b5]' : 'bg-white'
                            } rounded-xl flex-col items-center justify-center`}
                        >
                            <div
                                className={`flex justify-center items-center px-2 ${
                                    isPengaturanClicked ? 'bg-[#0076b5]' : 'bg-white'
                                } rounded-xl h-[28px] w-[29px]`}
                            >
                                <img
                                    loading="lazy"
                                    src={
                                        isPengaturanClicked
                                            ? 'https://cdn.builder.io/api/v1/image/assets/TEMP/8d3c34c30818df08431764f976c2c4f8d0c7e11ce7286b9949e97e56a7cda42f?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&'
                                            : 'https://cdn.builder.io/api/v1/image/assets/TEMP/3047d88fd1696c5d9ccfe8c79ab7bc98be73fcea0ff53a9add940ec16d80ad03?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&'
                                    }
                                    className={`w-full aspect-[0.93] ${
                                        isPengaturanClicked ? 'fill-white' : 'fill-zinc-400 max-w-[13px]'
                                    }`}
                                />
                            </div>
                        </div>
                        <h2 className={`font-medium text-medium lg:text-base ${isPengaturanClicked ? '' : 'text-[#b6b6b6]'}`}>
                            <Link href="/profilepage">
                                <span>Pengaturan</span>
                            </Link>
                        </h2>
                    </button>

                    <button
                        className={`flex relative h-[50px] w-[229px] ${
                            isKeluarClicked ? 'bg-white' : 'bg-[#f9f9f9]'
                        } rounded-[15px] gap-4 items-center ml-[52px] mr-[63] mt-[16px]`}
                        style={{
                            boxShadow: isKeluarClicked ? '0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02)' : 'none'
                        }}
                        onClick={() => {
                            handleKeluarClick();
                
                            onOpen();
                        }}
                    >
                        <div
                            className={`flex h-[28px] w-[29px] ml-[24px] ${
                                isKeluarClicked ? 'bg-[#0076b5]' : 'bg-white'
                            } rounded-xl flex-col items-center justify-center`}
                        >
                            <img
                                loading="lazy"
                                srcSet={
                                    isKeluarClicked
                                        ? 'https://cdn.builder.io/api/v1/image/assets/TEMP/2023233499aec6f153cf47b84b978cc74abe9d205adae607a30006cd353fc4fe?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&'
                                        : 'https://cdn.builder.io/api/v1/image/assets/TEMP/059a236190f90bf6c1dab42b826b32fd090031e430c8f730e003d48bd554aa3b?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&'
                                }
                                className={`w-full rounded-xl shadow-sm aspect-[0.96] max-w-[28px] ${
                                    isKeluarClicked ? 'shadow-none' : 'shadow-sm'
                                }`}
                            />
                        </div>
                        <h2 className={`font-medium text-medium lg:text-base ${isKeluarClicked ? '' : 'text-[#b6b6b6]'}`}>
                            Keluar
                        </h2>
                    </button>

                    <Modal2Buttons
                    message={"Apakah Anda yakin ingin keluar dari siTiket?"}
                    isOpen={isOpen}
                    leftButton={"Ya"}
                    rightButton={"Kembali"}
                    onOpenChange={onOpenChange}
                    onYesClick={handleLogOut}
                    />   
                </div>

                <div className="container flex flex-col">
                    <div className="flex flex-col">
                        <div class="h-[126px] w-full bg-white flex items-center" style={{ boxShadow: '0px 2px 6px 0px rgba(20, 20, 43, 0.06)' }}>
                            <h2 className="ml-[32px] font-extrabold text-[28px] text-[#0076b5]">
                                Pengaturan
                            </h2>
                            <div className="ml-[910px]">
                                <Avatar src={AvatarDefault.src}/>
                            </div>
                        </div>

                        <div className="flex flex-row">
                            <div className="flex flex-col">
                                <div className="ml-[31px] mt-[50px]">
                                    <div className="text-[#000000] font-bold text-[20px]">
                                        Edit Profil
                                    </div>
                                    <Avatar src={AvatarDefault.src} className="w-[160px] h-[160px] text-large ml-[101px] mt-[20px]"/>
                                </div>
                            </div>
                            <div className="mt-[110px] ml-[76px] text-[16px] text-[#414141] leading-[18px] flex flex-col gap-[50px] w-[800px]">
                                <div class="relative h-[57px] w-[563px] min-w-[200px]" style={{ marginBottom: namaError && namaError != 'Masukkan nama' ? '20px' : '0px' }}>
                                    Nama Lengkap
                                    <input
                                        class="mt-[13px] peer h-full w-full rounded-full border ${
                                            isModified ? 'border-[#d4a4be]' : 'border-[#e7e7e7]'
                                        } bg-transparent px-6 py-3 font-sans text-base font-normal text-[#414141] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#e7e7e7] focus:border-2 focus:border-[#d4a4be] disabled:border-0 disabled:bg-blue-gray-50"
                                        placeHolder=" "
                                        type = "text"
                                        value = {nama}
                                        onChange={handleChangeNama}
                                    />
                                    {namaError != 'Masukkan nama' && namaError && <p style={{ position: 'absolute', top: '170%', left: 3, color: '#AC0000' }}>{namaError}</p>}
                                </div>

                                <div class="relative h-[57px] w-[563px] min-w-[200px]">
                                    Email
                                    <input
                                        class="mt-[13px] peer h-full w-full rounded-full border border-[#e7e7e7] bg-transparent px-6 py-3 font-sans text-base font-normal text-[#414141] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#e7e7e7] focus:border-2 focus:border-[#d4a4be] disabled:border-2 disabled:bg-blue-gray-50"
                                        placeHolder=" "
                                        type="email"
                                        value={email}
                                        readOnly
                                    />
                                </div>

                                <div class="relative h-[57px] w-[563px] min-w-[200px]" style={{ marginBottom: nomortelpError ? '20px' : '0px' }}>
                                    Nomor Telpon
                                    <input
                                        class="mt-[13px] peer h-full w-full rounded-full border ${
                                            isModified ? 'border-[#d4a4be]' : 'border-[#e7e7e7]'
                                        } bg-transparent px-6 py-3 font-sans text-base font-normal text-[#414141] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#e7e7e7] focus:border-2 focus:border-[#d4a4be] disabled:border-0 disabled:bg-blue-gray-50"
                                        placeHolder=" "
                                        type = "tel"
                                        value = {nomortelp}
                                        pattern="\d{11,13}"
                                        onChange={handleChangeNoTelp}
                                    />
                                    <label className="before:content[''] after:content[''] pointer-events-none absolute left-6 -top-1 flex h-full w-full select-none text-[0px] text-[#929292] before:pointer-events-none after:pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:leading-[8] peer-focus:text-[0px]">
                                        Masukkan nomor telpon
                                    </label>
                                    {nomortelpError && <p style={{ position: 'absolute', top: '170%', left: 3, color: '#AC0000' }}>{nomortelpError}</p>}
                                </div>

                                <button
                                    className="mt-[16px] ml-[370px] block w-[194px] h-[54px] select-none rounded-full bg-pink-400 text-white font-medium text-xs shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 font-dm-sans"
                                    type="submit" disabled={nomortelpError || namaError} 
                                    style={{ borderRadius: '40px', backgroundColor: nomortelpError || namaError ? '#D4D4D4' : '#b5618d',
                                    color: nomortelpError || namaError ? '#A5A5A5' : '#FFFFFF', fontSize: '16px' }}
                                    data-ripple-light="true"
                                    onClick={handleChangeSubmit}
                                >
                                    Simpan Perubahan
                                </button>     
                            </div>
                        </div>          

                        <div className="flex justify-end mt-[12px]">
                            {changeConfirmation && (
                            <InformationMessage
                                titleMsg={"Berhasil"}
                                bodyMsg={"Perubahan berhasil disimpan"}
                                onClose={handleCloseInfoMsg}
                            />)} 
                        </div>
                    </div>
                </div>

				
			</div>

		</>
	);
};

export default ProfilePage;
