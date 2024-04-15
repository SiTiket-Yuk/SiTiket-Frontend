"use client"
import Image from "next/image";
import Link from "next/link";
import LogoDark from "../../../../public/logo/LogoDark.png";
import PaidEventCardDashboard from "@/components/PaidEventCardDashboard";
import EventCardDashboard from "@/components/EventCardDashboard";
import EventCardImg from "../../../../public/imageEvents/EventCardImg.png";
import AvatarDefault from "../../../../public/imageDefault/AvatarDefault.png";
import LogoBeekind from "../../../../public/logo/LogoBeekind.png";
import {Tabs, Tab, Avatar} from "@nextui-org/react";
import React, { useState} from 'react';
import {ScrollShadow, useDisclosure} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Modal2Buttons from "@/components/Modal2Buttons";


const Mytiket = () => {
    const [isTiketSayaClicked, setIsTiketSayaClicked] = useState(true);
    const [isKeluarClicked, setIsKeluarClicked] = useState(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
		<>
			<div className="container mx-auto flex">
                <div class="relative w-[344px] h-screen bg-[#f9f9f9]" style={{ boxShadow: '0px 2px 6px 0px rgba(20, 20, 43, 0.06)', borderBottomRightRadius: '32px' }}>
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
                            <Link href="/profilepage">
                                <span>Pengaturan</span>
                            </Link>
						</h2>
                    </button>

                    <div>

                    </div>

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

                <div className="container mx-auto flex flex-col">
                    <div class="relative lg:h-[126px] w-full bg-white flex items-center" style={{ boxShadow: '0px 2px 6px 0px rgba(20, 20, 43, 0.06)' }}>
                        <h2 className="ml-[32px] font-extrabold text-[28px] text-[#0076b5]">
                            Tiket Saya
                        </h2>
                        <div className="ml-[930px]">
                            <Avatar src={AvatarDefault.src}/>
                        </div>
                    </div>


                    <div className="ml-[31px] ">
                            <Tabs aria-label="Options" variant="underlined" size="lg" color="primary"
                            classNames={{
                            tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                            cursor: "w-full  bg-[#0075B4]",
                            tab: "max-w-fit px-14 h-[65px] w-[360px]",
                            tabContent: "group-data-[selected=true]:text-[#0075B4] group-data-[selected=true]:font-bold"
                            }}>
                                <Tab key="belumBayar" title="Belum Dibayar">
                                    <ScrollShadow size={5} hideScrollBar className="h-[465px]">
                                    <div className="pt-[24px]" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                        <EventCardDashboard 
                                        eventImg={EventCardImg}
                                        eventName={
                                            "Lorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum"
                                        }
                                        quantity={"1"}
                                        totalPayment={"1.000.000"}
                                        paymentDeadline={"31-04-2024, 12:00"}
                                        />
                                        <EventCardDashboard 
                                        eventImg={EventCardImg}
                                        eventName={
                                            "Lorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum"
                                        }
                                        quantity={"1"}
                                        totalPayment={"1.000.000"}
                                        paymentDeadline={"31-04-2024, 12:00"}
                                        />
                                        <EventCardDashboard 
                                        eventImg={EventCardImg}
                                        eventName={
                                            "Lorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum"
                                        }
                                        quantity={"1"}
                                        totalPayment={"1.000.000"}
                                        paymentDeadline={"31-04-2024, 12:00"}
                                        />
                                        
                                    </div>
                                    </ScrollShadow>
                                </Tab>
                                <Tab key="activeEvent" title="Event Aktif">
                                    <ScrollShadow size={5} hideScrollBar className="h-[465px]">
                                    <div className="pt-[25px]" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                        <PaidEventCardDashboard
                                            eventImg={EventCardImg}
                                            eventName="Lorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum"
                                            date="04 Agustus 2024"
                                            cost={100000}
                                            organizerLogo={LogoBeekind}
                                            organizerName="Lorem"
                                            quantity="1"
                                        />
                                    </div>
                                    </ScrollShadow>
                                </Tab>
                                <Tab key="pastEvent" title="Event Lalu">
                                    <div className="flex flex-col items-center justify-center h-full pt-[87px]">
                                        <div className="flex flex-col items-center justify-center">
                                            <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/37bec079981aa5ccc497e6602ffc473a3391eae6069e3f985bf3f685dfd1385b?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/37bec079981aa5ccc497e6602ffc473a3391eae6069e3f985bf3f685dfd1385b?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/37bec079981aa5ccc497e6602ffc473a3391eae6069e3f985bf3f685dfd1385b?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/37bec079981aa5ccc497e6602ffc473a3391eae6069e3f985bf3f685dfd1385b?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/37bec079981aa5ccc497e6602ffc473a3391eae6069e3f985bf3f685dfd1385b?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/37bec079981aa5ccc497e6602ffc473a3391eae6069e3f985bf3f685dfd1385b?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/37bec079981aa5ccc497e6602ffc473a3391eae6069e3f985bf3f685dfd1385b?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/37bec079981aa5ccc497e6602ffc473a3391eae6069e3f985bf3f685dfd1385b?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&"
                                            className="w-full aspect-[1.18] fill-rose-300 max-w-[280px]"
                                            />
                                            <div className="text-[#929292] mt-[27px] text-base">Belum ada tiket</div>  
                                        </div>
                                    </div>
                                </Tab>
                            </Tabs>
                        
                    </div>
                </div>

				
			</div>

		</>
	);
};

export default Mytiket;