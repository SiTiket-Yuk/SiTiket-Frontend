"use client"
import Image from "next/image";
import Link from "next/link";
import LogoDark from "../../../../public/logo/LogoDark.png";
import Status from "../../../../public/logo/Status.svg";
import HapusMerah from "../../../../public/logo/HapusMerah.svg";
import LastEdit from "../../../../public/logo/LastEdit.svg";
import EventImagePoster from "../../../../public/imageEventsPoster/PostCopywriting.png";
import OrganizerImageLogo from "../../../../public/logo/LogoImpraktif.png";
import AvatarDefault from "../../../../public/imageDefault/AvatarDefault.png";
import {Avatar, DatePicker, useDisclosure, Checkbox, Textarea, DateRangePicker} from "@nextui-org/react";
import React, { useState} from 'react';
import { useRouter } from "next/navigation";
import Modal1Buttons from "@/components/Modal1Button";
import Modal2Buttons from "@/components/Modal2Buttons";
import {parseAbsoluteToLocal, parseDate} from "@internationalized/date";

const EditEvent = () => {
    const [isPublished, setIsPublished] = useState(true) //Hrusny cek ke database
    const [judul, setJudul] = useState("Indonesian Pharmacy Expo and Conference"); //Hrusny cek ke database
    const [date, setDate] = React.useState(parseAbsoluteToLocal("2021-04-07T18:45Z")); //Hrusny cek ke database
    const [tempat, setTempat] = useState("tes tempat"); //Hrusny cek ke database
    const [penyelenggara, setPenyelenggara] = useState("SwipeRX IPEC"); //Hrusny cek ke database
    const [deskripsi, setDeskripsi] = useState("Webinar nasional"); //Hrusny cek ke database
    const [eventImage, setEventImage] = useState({EventImagePoster}); //Hrusny cek ke database
    const [previewUrlEventImage, setPreviewUrlEventImage] = useState({EventImagePoster}); //Hrusny cek ke database
    const [organizerImage, setOrganizerImage] = useState({OrganizerImageLogo}); //Hrusny cek ke database
    const [previewUrlOrganizerImage, setPreviewUrlOrganizerImage] = useState({OrganizerImageLogo}); //Hrusny cek ke database
    const [harga, setHarga] = useState(50000); //Hrusny cek ke database
    const [jumlahTiket, setJumlahTiket] = useState(500); //Hrusny cek ke database
    const [rentangJual, setRentangJual] = React.useState({
        start: parseDate("2024-04-01"),
        end: parseDate("2024-04-08"),
      }); //Hrusny cek ke database

    const [judulError, setJudulError] = useState('');
    const [dateError, setDateError] = useState('');
    const [tempatError, setTempatError] = useState('');
    const [penyelenggaraError, setPenyelenggaraError] = useState('');
    const [deskripsiError, setDeskripsiError] = useState('');
    const [eventImageError, setEventImageError] = useState('');
    const [organizerImageError, setOrganizerImageError] = useState('');
    const [hargaError, setHargaError] = useState('');
    const [jumlahTiketError, setJumlahTiketError] = useState('');
    const [rentangJualError, setRentangJualError] = useState('');

    const [isTiketSayaClicked, setIsTiketSayaClicked] = useState(true);
    const [isKeluarClicked, setIsKeluarClicked] = useState(false);
    const { isOpen : isOpenKeluar, onOpen : onOpenKeluar, onOpenChange : onOpenChangeKeluar } = useDisclosure();
    const { isOpen: isOpenModalToDraft, onOpen: onOpenModalToDraft, onOpenChange: onOpenChangeToDraft } = useDisclosure();
    const { isOpen: isOpenModalPublish, onOpen: onOpenModalPublish, onOpenChange: onOpenChangePublish } = useDisclosure();
    const { isOpen: isOpenModalSaveDraft, onOpen: onOpenModalSaveDraft, onOpenChange: onOpenChangeSaveDraft } = useDisclosure();
    const { isOpen: isOpenModalToPublish, onOpen: onOpenModalToPublish, onOpenChange: onOpenChangeToPublish } = useDisclosure();
    const { isOpen: isOpenModalDeleteDraft, onOpen: onOpenModalDeleteDraft, onOpenChange: onOpenChangeDeleteDraft } = useDisclosure();
    const { isOpen: isOpenModalDeletePublish, onOpen: onOpenModalDeletePublish, onOpenChange: onOpenChangeDeletePublish } = useDisclosure();

    const [isFestivalSelected, setIsFestivalSelected] = React.useState(false); //Hrusny cek ke database
    const [isWebinarSelected, setIsWebinarSelected] = React.useState(true); //Hrusny cek ke database
    const [isWorkshopSelected, setIsWorkshopSelected] = React.useState(false); //Hrusny cek ke database
    const [isOlahragaSelected, setIsOlahragaSelected] = React.useState(false); //Hrusny cek ke database
    const [isBisnisSelected, setIsBisnisSelected] = React.useState(false); //Hrusny cek ke database

    const isDisabled =
        judulError || dateError || tempatError || penyelenggaraError || deskripsiError || organizerImageError ||
        eventImageError || hargaError || jumlahTiketError || rentangJualError ||
        (!isFestivalSelected && !isWebinarSelected && !isWorkshopSelected &&
        !isOlahragaSelected && !isBisnisSelected);

    const handleChangeToDraft = () => {
        // Logic untuk menangani penyerahan formulir
    };

    const handleChangePublish = () => {

    }

    const handleChangeSaveDraft = () => {

    }

    const handleChangeToPublish = () => {

    }

    const handleChangeDeleteDraft = () => {

    }

    const handleChangeDeletePublish = () => {
        
    }

    const handleChangeJudul = (event) => {
		const { value } = event.target;
		setJudul(value);

        if (value == ""){
            setJudulError('Masukkan judul');
        }else if(value.length > 0 && !value.trim()){
            setJudulError('Masukkan judul yang sesuai');
        } else if (value.length >= 0 && value.trim()){
            setJudulError('');
        }
    }

    const handleChangeTempat = (event) => {
		const { value } = event.target;
		setTempat(value);

        if (value == ""){
            setTempatError('Masukkan tempat');
        }else if(value.length > 0 && !value.trim()){
            setTempatError('Masukkan tempat yang sesuai');
        } else if (value.length >= 0 && value.trim()){
            setTempatError('');
        }
    }

    const handleChangePenyelenggara = (event) => {
		const { value } = event.target;
		setPenyelenggara(value);

        if (value == ""){
            setPenyelenggaraError('Masukkan penyelenggara');
        }else if(value.length > 0 && !value.trim()){
            setPenyelenggaraError('Masukkan nama penyelenggara yang sesuai');
        } else if (value.length >= 0 && value.trim()){
            setPenyelenggaraError('');
        }
    }

    const handleChangeDeskripsi = (event) => {
		const { value } = event.target;
		setDeskripsi(value);

        if (value == ""){
            setDeskripsiError('Masukkan deskripsi');
        }else if(value.length > 0 && !value.trim()){
            setDeskripsiError('Masukkan deskripsi yang sesuai');
        } else if (value.length >= 0 && value.trim()){
            setDeskripsiError('');
        }
    }

    const handleEventImageChange = (event) => {
        const file = event.target.files[0];
        setEventImage(file);

        if (file) {
            setEventImageError('');
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewUrlEventImage(reader.result);
            };
            reader.readAsDataURL(file);
            setEventImage(file);

          } else {
            setEventImageError('Masukkan gambar event');
          }
    }

    const handleOrganizerImageChange = (event) => {
        const file = event.target.files[0];
        setOrganizerImage(file);

        if (file) {
            setOrganizerImageError('');
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewUrlOrganizerImage(reader.result);
            };
            reader.readAsDataURL(file);
            setOrganizerImage(file);

          } else {
            setOrganizerImageError('Masukkan gambar event');
          }
    }

    const handleChangeHarga = (event) => {
		const { value } = event.target;
		setHarga(value);

        if (value == ""){
            setHargaError('Masukkan harga');
        } else {
            setHargaError('');
        }
    }

    const handleChangeJumlahTiket = (event) => {
		const { value } = event.target;
		setJumlahTiket(value);

        if (value == ""){
            setJumlahTiketError('Masukkan jumlah tiket');
        } else {
            setJumlahTiketError('');
        }
    }

    const router = useRouter();

    const handleLogOut = () => {
        router.push("/landing-page")
    }

    const handleKeluarClick = () => {
        setIsTiketSayaClicked(false);
        setIsKeluarClicked(true);
    };

    const handleTiketSayaClick = () => {
        setIsTiketSayaClicked(true);
        setIsKeluarClicked(false);
    };

	return (
        <div className="container h-[1637px] mx-auto flex">
            <div class="relative mx-auto w-full max-w-screen h-full  flex flex-row">
                <div class="flex flex-col w-1/4 h-full text-center bg-[#fbfbfb] text-neutral-700 rounded-br-[32px]" style={{ boxShadow: '0px 2px 6px 0px rgba(20, 20, 43, 0.06)'}}>
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

                    <button
                        className={`flex relative h-[50px] w-[229px] ${
                            isTiketSayaClicked ? 'bg-white' : 'bg-[#f9f9f9]'
                        } rounded-[15px] gap-4 items-center ml-[52px] mr-[63px] mt-[67px]`}
                        style={{
                            boxShadow: isTiketSayaClicked ? '0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02)' : 'none'
                        }}
                        onClick={handleTiketSayaClick}
                    >
                        <div
                            className={`flex h-[28px] w-[29px] ml-[24px] ${
                                isTiketSayaClicked ? 'bg-[#0076b5]' : 'bg-white'
                            } rounded-xl flex-col items-center justify-center`}
                        >
                            <div
                                className={`flex justify-center items-center px-2 ${
                                    isTiketSayaClicked ? 'bg-[#0076b5]' : 'bg-white'
                                } rounded-xl h-[28px] w-[29px]`}
                            >
                                <img
                                    loading="lazy"
                                    src={
                                        isTiketSayaClicked
                                            ? 'https://cdn.builder.io/api/v1/image/assets/TEMP/40a316b9c37b727e56296d19664bca7d003af26f281b653d7ce24214ab415e74?'
                                            : 'https://cdn.builder.io/api/v1/image/assets/TEMP/1d2ffbe294ec17f7afceb107e82f2527e5cba66e9fbcd2a552dacfbd0aa3a5ca?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&'
                                    }
                                    className={`w-full aspect-[1.45] ${
                                        isTiketSayaClicked ? 'fill-white' : 'fill-zinc-400 max-w-[13px]'
                                    }`}
                                />
                            </div>
                        </div>
                        <h2 className={`font-medium text-medium lg:text-base ${isTiketSayaClicked ? '' : 'text-[#b6b6b6]'}`}>
                            <Link href="/event-list">
                                <span>Event</span>
                            </Link>
                        </h2>
                    </button>

                    <button className="flex relative h-[50px] w-[229px] bg-[#f9f9f9] rounded-[15px] gap-4 items-center ml-[52px] mr-[63] mt-[16px]"> 
                        <div className="flex h-[28px] w-[29px] ml-[24px] bg-white rounded-xl flex-col items-center justify-center" > 
                            <div className="flex justify-center items-center px-2 bg-white rounded-xl h-[28px] w-[29px]" style={{ boxShadow: '0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02)'}} >
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3047d88fd1696c5d9ccfe8c79ab7bc98be73fcea0ff53a9add940ec16d80ad03?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&"
                                    className="w-full aspect-[0.93] fill-zinc-400 max-w-[13px]"
                                />
                            </div>       
                        </div>
                        
                        <h2 className="font-medium text-medium lg:text-base text-[#b6b6b6]"> {/*SINI BUTUH TOMBOL PINDAH PAGE KE PENGATURAN*/}
                            
                            <span>Pengaturan</span>
                            
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
                
                            onOpenKeluar();
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
                    isOpen={isOpenKeluar}
                    leftButton={"Ya"}
                    rightButton={"Kembali"}
                    onOpenChange={onOpenChangeKeluar}
                    onYesClick={handleLogOut}
                    /> 

                </div>


                <div class="flex flex-col w-3/4 h-full">
                    <div className="flex flex-col pl-6 pr-11 pt-9 pb-5 text-3xl font-bold leading-10 text-[#0076b5] whitespace-nowrap bg-white shadow-sm max-md:px-5">
                        <div className="flex gap-5 justify-between py-2.5 pl-2.5 max-md:flex-wrap max-md:max-w-full">
                            <div className="my-auto">Event</div>
                            
                            <div>
                                <Avatar size="lg" src={AvatarDefault.src}/>
                            </div>
                        </div>
                    </div>

                    <div class="relative flex flex-col pl-8 pr-11 h-screen ">
                        <div className="flex flex-row justify-between h-[93px] pt-8 pb-4">
                            <div className="pt-4 text-xl font-medium leading-5 text-black ">Tambah Event</div>
                        </div>

                        <div className="py-8 max-md:pr-5">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col w-[620px] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow max-md:mt-10">
                                        <div className="shrink-0 px-6 pt-6 bg-white rounded-lg border border-gray-200 border-solid min-h-[889px]">
                                            <div className="pb-4 mb-4 w-[506px] text-lg font-medium leading-5 text-neutral-700 border-b border-[#EBEBEB]">
                                                Detail Event
                                            </div>

                                            <div className="flex items-center">
                                                <label className="mb-7" style={{ cursor: 'pointer', display: 'inline-block' }}>
                                                    <input 
                                                        className=" w-[572px] h-[205px] rounded-[10px] bg-[#E5E5E5] items-center justify-center flex"
                                                        type="file"
                                                        accept=".png, .jpg, .jpeg, .svg"
                                                        onChange={handleEventImageChange}
                                                    />

                                                    {previewUrlEventImage && (
                                                        <img src={previewUrlEventImage} alt="Event Image Preview" 
                                                        className="-mt-[205px] w-[572px] h-[205px] rounded-[10px]"/>
                                                    )}
                                                </label>
                                            </div>
                                    
                                            
                                            
                                            <div className="relative mb-14 text-base font-medium leading-5 w-[572px] h-[57px] text-neutral-700">
                                                Judul
                                                <input 
                                                    type="text"
                                                    value={judul}
                                                    placeholder=" "
                                                    onChange={handleChangeJudul}
                                                    className="peer justify-center items-start px-6 py-3.5 mt-4 w-full bg-white rounded-xl border border-solid border-[#d4a4be]
                                                    text-[#414141] max-md:px-5 max-md:max-w-full outline outline-0 transition-all placeholder-shown:border-2 
                                                    placeholder-shown:border-neutral-200 focus:border-2 focus:border-[#d4a4be] disabled:bg-blue-gray-50"
                                                />
                                                <label
                                                    className="before:content[' '] after:content[' '] pointer-events-none absolute left-6 top-7 flex 
                                                            h-full w-full select-none text-[0px] text-[#929292] before:pointer-events-none 
                                                            after:pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.1] peer-focus:text-[0px]"
                                                >
                                                    Masukkan Judul
                                                </label>
                                            </div>

                                            <div className="flex gap-5 justify-between mb-7 text-base leading-5 max-md:flex-wrap">
                                                <div className="flex flex-col rounded-xl">
                                                    <div className="font-medium text-neutral-700">Tanggal & Waktu</div>
                                                    <DatePicker
                                                        size="lg"
                                                        variant="bordered"
                                                        radius="md"
                                                        isRequired
                                                        granularity="minute"
                                                        className="mt-3 w-[572px] text-[14px] justify-start flex border-neutral-200 text-neutral-400"
                                                        color="secondary"
                                                        value={date}
                                                        onChange={(newValue) => {
                                                            setDate(newValue);
                                                            setDateError('');
                                                        }}
                                                    >
                                                    </DatePicker>
                                                </div>
                                            </div>

                                            <div className="relative mb-14 text-base font-medium leading-5 w-[572px] h-[57px] text-neutral-700">
                                                Tempat
                                                <input 
                                                    type="text"
                                                    value={tempat}
                                                    placeholder=" "
                                                    onChange={handleChangeTempat}
                                                    className="peer justify-center items-start px-6 py-3.5 mt-4 w-full bg-white rounded-xl border border-solid border-[#d4a4be]
                                                    text-[#414141] max-md:px-5 max-md:max-w-full outline outline-0 transition-all placeholder-shown:border-2 
                                                    placeholder-shown:border-neutral-200 focus:border-2 focus:border-[#d4a4be] disabled:bg-blue-gray-50"
                                                />
                                                <label
                                                    className="before:content[' '] after:content[' '] pointer-events-none absolute left-6 top-7 flex 
                                                            h-full w-full select-none text-[0px] text-[#929292] before:pointer-events-none 
                                                            after:pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.1] peer-focus:text-[0px]"
                                                >
                                                    Masukkan Tempat
                                                </label>
                                            </div>

                                            <div className="relative mb-14 text-base font-medium leading-5 w-[572px] h-[57px] text-neutral-700">
                                                Penyelenggara
                                                <div className="flex flex-row">
                                                    <div>
                                                        <input 
                                                            type="text"
                                                            value={penyelenggara}
                                                            placeholder=" "
                                                            onChange={handleChangePenyelenggara}
                                                            className="peer justify-center items-start px-6 py-3.5 mt-4 w-[498.52px] bg-white rounded-xl border border-solid border-[#d4a4be]
                                                            text-[#414141] max-md:px-5 max-md:max-w-full outline outline-0 transition-all placeholder-shown:border-2 
                                                            placeholder-shown:border-neutral-200 focus:border-2 focus:border-[#d4a4be] disabled:bg-blue-gray-50"
                                                        />
                                                        <label
                                                            className="before:content[' '] after:content[' '] pointer-events-none absolute left-6 top-7 flex 
                                                                    h-full w-full select-none text-[0px] text-[#929292] before:pointer-events-none 
                                                                    after:pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.1] peer-focus:text-[0px]"
                                                        >
                                                            Masukkan Penyelenggara
                                                        </label>
                                                    </div>

                                                    <div className="flex items-center">
                                                        <label style={{ cursor: 'pointer', display: 'inline-block' }}>
                                                            <input 
                                                                className="shrink-0 aspect-[1.04] w-[57px] ml-4 mt-4 bg-[#E5E5E5] rounded-full"
                                                                type="file"
                                                                accept=".png, .jpg, .jpeg, .svg"
                                                                onChange={handleOrganizerImageChange}
                                                            />

                                                            {previewUrlOrganizerImage && (
                                                                <img src={previewUrlOrganizerImage} alt="Organizer Image Preview" 
                                                                className="-mt-[55px] ml-4 aspect-[1.04] w-[57px] rounded-full"/>
                                                            )}
                                                        </label>
                                                    </div>
                                                    
                                                </div>
                                            </div>

                                            <div className="relative text-base font-medium leading-5 w-[572px] min-h-[57px] text-neutral-700">
                                                Deskripsi
                                                <Textarea
                                                    variant="bordered"
                                                    minRows={1}
                                                    size="lg"
                                                    color="secondary"
                                                    radius="md"
                                                    value={deskripsi}
                                                    onChange={handleChangeDeskripsi}
                                                    placeholder="Tuliskan Deskripsi Event"
                                                    className="mt-4"
                                                />
                                            </div>

                                        </div>

                                        <div className="shrink-0 mt-5 px-6 pt-6 bg-white rounded-lg border border-gray-200 border-solid h-[314px]">
                                            <div className="pb-4 mb-6 w-[506px] text-lg font-medium leading-5 text-neutral-700 border-b border-[#EBEBEB]">
                                                Detail Tiket
                                            </div>

                                            <div className="flex flex-row gap-7">
                                                <div className="relative mb-14 text-base font-medium leading-5 w-[270px] h-[57px] text-neutral-700">
                                                    Harga
                                                    <input 
                                                        type="number"
                                                        value={harga}
                                                        placeholder=" "
                                                        min={0}
                                                        onChange={handleChangeHarga}
                                                        className="peer justify-center items-start px-6 py-3.5 mt-4 w-full bg-white rounded-xl border border-solid border-[#d4a4be]
                                                        text-[#414141] max-md:px-5 max-md:max-w-full outline outline-0 transition-all placeholder-shown:border-2 
                                                        placeholder-shown:border-neutral-200 focus:border-2 focus:border-[#d4a4be] disabled:bg-blue-gray-50"
                                                    />
                                                    <label
                                                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-6 top-7 flex 
                                                                h-full w-full select-none text-[0px] text-[#929292] before:pointer-events-none 
                                                                after:pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.1] peer-focus:text-[0px]"
                                                    >
                                                        Masukkan Harga
                                                    </label>
                                                </div>

                                                <div className="relative mb-14 text-base font-medium leading-5 w-[270px] h-[57px] text-neutral-700">
                                                    Jumlah Tiket
                                                    <input 
                                                        type="number"
                                                        value={jumlahTiket}
                                                        placeholder=" "
                                                        min={0}
                                                        onChange={handleChangeJumlahTiket}
                                                        className="peer justify-center items-start px-6 py-3.5 mt-4 w-full bg-white rounded-xl border border-solid border-[#d4a4be]
                                                        text-[#414141] max-md:px-5 max-md:max-w-full outline outline-0 transition-all placeholder-shown:border-2 
                                                        placeholder-shown:border-neutral-200 focus:border-2 focus:border-[#d4a4be] disabled:bg-blue-gray-50"
                                                    />
                                                    <label
                                                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-6 top-7 flex 
                                                                h-full w-full select-none text-[0px] text-[#929292] before:pointer-events-none 
                                                                after:pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.1] peer-focus:text-[0px]"
                                                    >
                                                        Jumlah Tiket Tersedia
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="flex flex-row gap-7">
                                                <div className="relative mb-14 text-base font-medium leading-5 h-[57px] text-neutral-700">
                                                    Rentang Penjualan
                                                    <DateRangePicker 
                                                        size="lg"
                                                        variant="bordered"
                                                        radius="md"
                                                        isRequired
                                                        className="mt-3 w-[568px] text-[14px] justify-start flex border-neutral-200 text-neutral-400"
                                                        color="secondary"
                                                        value={rentangJual}
                                                        onChange={(newValue) => {
                                                            setRentangJual(newValue);
                                                            setRentangJualError('');
                                                        }}
                                                    >
                                                    </DateRangePicker >
                                                </div> 
                                            </div>
                                            
                                        </div>

                                    </div>
                                </div>

                                <div className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col max-md:mt-10">
                                        <div className="shrink-0 px-6 pt-6 bg-white rounded-lg border border-gray-200 border-solid h-[266px]" >
                                            <div className="pb-4 mb-4 max-md:w-full text-lg font-medium leading-5 text-neutral-700 border-b border-[#EBEBEB]">
                                                Publish
                                            </div>

                                            <div>
                                                <div className="flex flex-row">
                                                    <Image
                                                        className="object-cover h-[14px] w-[14px] mt-[5px] mr-2"
                                                        src={Status}
                                                        alt="Status Logo"
                                                    />
                                                    Status : Published {/*harusnya cek ke database*/}
                                                </div>

                                                <div className="flex flex-row mt-4">
                                                    <Image
                                                        className="object-cover h-[14px] w-[14px] mt-[5px] mr-2"
                                                        src={LastEdit}
                                                        alt="Last Edit Logo"
                                                    />
                                                    Terakhir Diedit : 01/31/2024 {/*harusnya cek ke database*/}
                                                </div>

                                                <div className="flex flex-row pb-4 mt-4 text-[#BD3333] mb-3 max-md:w-full border-b border-[#EBEBEB]">
                                                    <button 
                                                        className="flex flex-row"
                                                        onClick={isPublished ? onOpenModalDeletePublish : onOpenModalDeleteDraft}>
                                                        <Image
                                                            className="object-cover h-[14px] w-[14px] mt-[5px] mr-2"
                                                            src={HapusMerah}
                                                            alt="Hapus Logo"
                                                        />
                                                        Hapus     
                                                    </button>
                                                    
                                                </div>

                                                <Modal2Buttons
                                                    message={"Apakah Anda yakin ingin menghapus draft event ini?"}
                                                    isOpen={isOpenModalDeleteDraft}
                                                    leftButton={"Ya"}
                                                    rightButton={"Kembali"}
                                                    onOpenChange={onOpenChangeDeleteDraft}
                                                    onYesClick={handleChangeDeleteDraft}
                                                />

                                                <Modal2Buttons
                                                    message={"Apakah Anda yakin ingin menghapus event ini?"}
                                                    isOpen={isOpenModalDeletePublish}
                                                    leftButton={"Ya"}
                                                    rightButton={"Kembali"}
                                                    onOpenChange={onOpenChangeDeletePublish}
                                                    onYesClick={handleChangeDeletePublish}
                                                />

                                                <div className="flex flex-row gap-4 pl-2 justify-center">
                                                    <button
                                                        className="block w-[135px] h-[42px] select-none rounded-full 
                                                                text-white font-bold text-xs shadow-md transition-all focus:outline-none focus:ring-2
                                                                focus:ring-pink-400 focus:ring-opacity-50 mb-10"
                                                        style={{
                                                            backgroundColor: isDisabled ? '#D4D4D4' : "#b5618d",
                                                            color: isDisabled ? '#A5A5A5' : "#FFFFFF",
                                                        }}
                                                        data-ripple-light="true"
                                                        onClick={isPublished ? (() => {
                                                            onOpenModalToDraft();
                                                            handleChangeToDraft();
                                                        }) : (() => {
                                                            onOpenModalSaveDraft();
                                                            handleChangeSaveDraft();
                                                        })}
                                                        disabled={isDisabled}
                                                    >
                                                        {isPublished ? "Jadikan Draft" : "Simpan Draft"}
                                                    </button>

                                                    <button
                                                        className="block w-[124px] h-[42px] select-none rounded-full 
                                                                text-white font-bold text-xs shadow-md transition-all focus:outline-none focus:ring-2
                                                                focus:ring-pink-400 focus:ring-opacity-50 mb-10"
                                                        type="submit"
                                                        style={{
                                                            backgroundColor: isDisabled ? '#D4D4D4' : "#b5618d",
                                                            color: isDisabled ? '#A5A5A5' : "#FFFFFF",
                                                        }}
                                                        data-ripple-light="true"
                                                        onClick={isPublished ? (() => {
                                                            onOpenModalPublish();
                                                            handleChangePublish();
                                                        }) : (() => {
                                                            onOpenModalToPublish();
                                                            handleChangeToPublish();
                                                        })}
                                                        disabled={isDisabled}
                                                    >
                                                        {isPublished ? "Publish Perubahan" : "Publish"}
                                                    </button>

                                                    <Modal2Buttons
                                                    message={"Apakah Anda yakin ingin menjadikan event ini sebagai draft?"}
                                                    isOpen={isOpenModalToDraft}
                                                    leftButton={"Ya"}
                                                    rightButton={"Kembali"}
                                                    onOpenChange={onOpenChangeToDraft}
                                                    onYesClick={handleChangeToDraft}
                                                    /> 

                                                    <Modal1Buttons
                                                    message={"Perubahan berhasil dipublish"}
                                                    isOpen={isOpenModalPublish}
                                                    buttonName={"Ok"}
                                                    onOpenChange={onOpenChangePublish}
                                                    />

                                                    <Modal1Buttons
                                                    message={"Draft event berhasil disimpan"}
                                                    isOpen={isOpenModalSaveDraft}
                                                    buttonName={"Ok"}
                                                    onOpenChange={onOpenChangeSaveDraft}
                                                    />

                                                    <Modal1Buttons
                                                    message={"Event berhasil dipublish"}
                                                    isOpen={isOpenModalToPublish}
                                                    buttonName={"Ok"}
                                                    onOpenChange={onOpenChangeToPublish}
                                                    />
                                                </div>
                                                
                                            </div>
                                        </div>

                                        <div className="shrink-0 mt-11 px-6 pt-6 bg-white rounded-lg border border-gray-200 border-solid h-[278px] max-md:mt-10">
                                            <div className="pb-4 mb-4 max-md:w-full text-lg font-medium leading-5 text-neutral-700 border-b border-[#EBEBEB]">
                                                Kategori
                                            </div>

                                            <div className="flex flex-col gap-4">
                                                <Checkbox 
                                                    isSelected={isFestivalSelected} 
                                                    color="secondary" 
                                                    radius="sm"
                                                    onValueChange={setIsFestivalSelected}
                                                >
                                                    Festival
                                                </Checkbox>

                                                <Checkbox 
                                                    isSelected={isWebinarSelected} 
                                                    color="secondary" 
                                                    radius="sm"
                                                    onValueChange={setIsWebinarSelected}
                                                >
                                                    Webinar
                                                </Checkbox>

                                                <Checkbox 
                                                    isSelected={isWorkshopSelected} 
                                                    color="secondary" 
                                                    radius="sm"
                                                    onValueChange={setIsWorkshopSelected}
                                                >
                                                    Workshop
                                                </Checkbox>

                                                <Checkbox 
                                                    isSelected={isOlahragaSelected} 
                                                    color="secondary" 
                                                    radius="sm"
                                                    onValueChange={setIsOlahragaSelected}
                                                >
                                                    Olahraga
                                                </Checkbox>

                                                <Checkbox 
                                                    isSelected={isBisnisSelected} 
                                                    color="secondary" 
                                                    radius="sm"
                                                    onValueChange={setIsBisnisSelected}
                                                >
                                                    Bisnis
                                                </Checkbox>
                                            </div>               
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </div> 
                </div>
            </div>
        </div>
	);  
};

export default EditEvent;