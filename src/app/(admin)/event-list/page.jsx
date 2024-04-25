"use client"
import Image from "next/image";
import Link from "next/link";
import LogoDark from "../../../../public/logo/LogoDark.png";
import AvatarDefault from "../../../../public/imageDefault/AvatarDefault.png";
import {Avatar, Listbox, ListboxItem, ScrollShadow, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, 
		useDisclosure, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, DatePicker} from "@nextui-org/react";
import React, { useState} from 'react';
import { useRouter } from "next/navigation";
import Modal1Button from "@/components/Modal1Button";
import Modal2Buttons from "@/components/Modal2Buttons";
import {SearchIcon} from "../../../../public/logo/SearchIcon.jsx";
import {EditIcon} from "../../../../public/logo/EditIcon.jsx";
import {DeleteIcon} from "../../../../public/logo/DeleteIcon.jsx";
import {columns, users} from "./data";

const EventList = () => {
    const [isDateOpen, setisDateOpen] = React.useState(false);
    const handleOpenDate = (isDateOpen) => {
        setisDateOpen(isDateOpen);
    };

    const [date, setDate] = React.useState();

    const [pencarian, setPencarian] = useState('');

	const [selectedKeysCategory, setSelectedKeysCategory] = React.useState(new Set(["Kategori"]));
    const selectedValueCategory = React.useMemo(
        () => Array.from(selectedKeysCategory).join(", ").replaceAll("_", " "),
        [selectedKeysCategory]
    );

	const [isDropdownCategoryOpen, setisDropdownCategoryOpen] = React.useState(false);

	const handleOpenCategoryChange = (isDropdownCategoryOpen) => {
        setisDropdownCategoryOpen(isDropdownCategoryOpen);
    };

	const handleSelectionCategoryChange = (newSelectedKeys) => {
        setSelectedKeysCategory(newSelectedKeys);
        setisDropdownCategoryOpen(false);
    };


	const [selectedKeysStatus, setSelectedKeysStatus] = React.useState(new Set(["Status"]));
    const selectedValueStatus = React.useMemo(
        () => Array.from(selectedKeysStatus).join(", ").replaceAll("_", " "),
        [selectedKeysStatus]
    );

	const [isDropdownStatusOpen, setisDropdownStatusOpen] = React.useState(false);

	const handleOpenStatusChange = (isDropdownStatusOpen) => {
        setisDropdownStatusOpen(isDropdownStatusOpen);
    };

	const handleSelectionStatusChange = (newSelectedKeys) => {
        setSelectedKeysStatus(newSelectedKeys);
        setisDropdownStatusOpen(false);
    };


    const handleChange = (event) =>{
        const { value } = event.target;
		setPencarian(value);

		if (value.length == 0){
			setPencarian('');
		}
    }

    const items = [
		{
		  key: "new",
		  label: "New file",
		},
		{
		  key: "copy",
		  label: "Copy link",
		},
		{
		  key: "edit",
		  label: "Edit file",
		},
		{
		  key: "delete",
		  label: "Delete file",
		},
		{
			key: "tes",
			label: "Tes",
		  }
	  ];

    const [isTiketSayaClicked, setIsTiketSayaClicked] = useState(true);
    const [isKeluarClicked, setIsKeluarClicked] = useState(false);
    const { isOpen: isOpenKeluar, onOpen: onOpenKeluar, onOpenChange: onOpenChangeKeluar } = useDisclosure();
    const { isOpen: isOpenDeleteDraft, onOpen: onOpenDeleteDraft, onOpenChange: onOpenChangeDeleteDraft } = useDisclosure();
    const { isOpen: isOpenDeletePublished, onOpen: onOpenDeletePublished, onOpenChange: onOpenChangeDeletePublished  } = useDisclosure();

    const handleDelete = () => {
        //EDIT DISINI BUAT HAPUS EVENT :D
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

    const [eventPublished, setEventPublished] = useState(false);

	const renderCell = React.useCallback((user, columnKey) => {
		const cellValue = user[columnKey];
	
		switch (columnKey) {
		  case "tanggal":
			return (
				<p className="text-[#323C47] text-base">{cellValue}</p>
			);
		  case "judul":
			return (
				<p className="text-[#323C47] text-base">{cellValue}</p>
			);
		  case "penyelenggara":
			return (
				<p className="text-[#323C47] text-base">{cellValue}</p>
			);

			case "kategori":
			return (
				<p className="text-[#323C47] text-base">{cellValue}</p>
			);

			case "status":
			return (
				<p className="text-[#323C47] text-base">{cellValue}</p>
			);

		  case "aksi":
			return (
			  <div className="relative flex items-center gap-2">
                <button>
                    <Link href="/edit-event">
                        <EditIcon/>
                    </Link>
                </button>
				
                <button onClick={eventPublished ? onOpenDeletePublished : onOpenDeleteDraft}>
                    <DeleteIcon/>
                </button>

			  </div>
			);
		  default:
			return cellValue;
		}
	  }, []);

	return (
        <div className="container mx-auto flex">
            <div class="relative mx-auto w-full max-w-screen h-screen  flex flex-row">
                <div class="flex flex-col w-1/4 h-full text-center bg-[#F9F9F9] text-neutral-700 rounded-br-[32px]" style={{ boxShadow: '0px 2px 6px 0px rgba(20, 20, 43, 0.06)'}}>
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
                            <div className="pt-4 text-xl font-medium leading-5 text-black ">DAFTAR EVENT</div>
                            <div className="flex flex-row gap-4">
                                <div class="relative h-[45px] w-[253px]">
                                    <input
                                        class="peer h-full w-full rounded-full border border-[#F2F2F2] bg-transparent px-6 py-3 font-sans text-base font-normal text-[#414141] outline outline-0 transition-all placeholder-shown:border-2 placeholder-shown:border-[#F2F2F2] focus:border-2 focus:border-[#F2F2F2] disabled:border-0 disabled:bg-blue-gray-50"
                                        placeHolder="Cari Event"
                                        value={pencarian}
                                        onChange={handleChange}
                                    />
                                    {pencarian.length === 0 && (
                                        <div class="absolute inset-y-0 right-6 flex items-center  pointer-events-none" style={{ color: '#929292' }}>
                                            <SearchIcon size={18} />
                                        </div>
                                    )}
                                {pencarian && (
                                    <div className="mt-4 ml-[69px] w-[387px] h-[150px] bg-white shadow-sm rounded-lg border-2 border-[#F2F2F2]" style={{ position: 'absolute', left: '50%',
                                    transform: 'translate(-50%)', zIndex: 100}}>
                                        <ScrollShadow size={10} hideScrollBar className="h-[130px] mt-2 ml-1">
                                            <Listbox
                                                items={items}
                                                aria-label="Dynamic Actions"
                                                onAction={(key) => alert(key)}
                                                className="w-[375px]"
                                            >
                                                {(item) => (
                                                <ListboxItem
                                                    key={item.key}
                                                    color={"warning"}
                                                    
                                                    style={{ height: '46px' }}
                                                >
                                                    {item.label}
                                                </ListboxItem>
                                                )}
                                            </Listbox>
                                        </ScrollShadow>
                                        
                                    </div>
                                )}
                                </div>

                                
                                <button
                                    className="w-[118px] h-[42px] select-none rounded-full bg-pink-400 text-white text-center font-medium shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 font-dm-sans"
                                    type="submit"  
                                    style={{backgroundColor: '#b5618d',
                                    fontSize: '12px' }}
                                    data-ripple-light="true"
                                
                                >
                                    <Link href="/add-event">
                                        <span>Tambah Event</span>
                                    </Link>
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-row h-[76px]"> {/*SINI TEMPAT TAMBAH DROP DOWN*/}
							<div className=" mr-[19px]">
                                <DatePicker
                                    variant="bordered"
                                    radius="full"
                                    className="mt-[1px] w-[203px] text-[14px] justify-start flex border-[#D4D4D8]"
                                    color="secondary"
                                    selectorIcon={isDateOpen? <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/06b5e8c3af3067bafd7dcc2991a79b131a3feee938af51adb53ab18c3ccb1387?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&"
                                        className="w-full aspect-[1.59] fill-gray-500 max-w-[8px]"
                                    />  : <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e6ef689c401d3f820cb3bf26ba805bb901f12b0887240136d7d90056531f828?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&"
                                        className="w-full aspect-[1.59] fill-gray-500 max-w-[8px]"
                                    />}
                                    value={date}
                                    onOpenChange={handleOpenDate}  
                                    onChange={setDate}
                                    placeholderValue = {null}
                                >
                                </DatePicker>
                                    
                            </div>

                            <div class=" mr-[19px]">
                                <Dropdown onOpenChange={handleOpenCategoryChange}>
                                    <DropdownTrigger>
                                        <Button
                                            variant="bordered"
                                            className="capitalize h-[44px] w-[203px] rounded-full text-[14px] justify-start flex"
                                        >
                                            {selectedValueCategory}
                                            <span style={{ marginLeft: 'auto' }}>
                                                {isDropdownCategoryOpen ? (
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/06b5e8c3af3067bafd7dcc2991a79b131a3feee938af51adb53ab18c3ccb1387?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&"
                                                        className="w-full aspect-[1.59] fill-gray-500 max-w-[8px]"
                                                    />
                                                ) : (
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e6ef689c401d3f820cb3bf26ba805bb901f12b0887240136d7d90056531f828?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&"
                                                        className="w-full aspect-[1.59] fill-gray-500 max-w-[8px]"
                                                    />
                                                )}
                                            </span>
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu
                                        aria-label="Single selection example"
                                        variant="solid"
                                        disallowEmptySelection
                                        selectionMode="single"
                                        selectedKeys={selectedKeysCategory}
                                        onSelectionChange={handleSelectionCategoryChange}
                                        hideSelectedIcon
                                        className="rounded-lg"
                                        color="secondary"
                                    >
                                        <DropdownItem key="semua">Semua</DropdownItem>
                                        <DropdownItem key="webinar">Webinar</DropdownItem>
                                        <DropdownItem key="workshop">Workshop</DropdownItem>
                                        <DropdownItem key="bisnis">Bisnis</DropdownItem>
                                        <DropdownItem key="olahraga">Olahraga</DropdownItem>
                                        <DropdownItem key="festival">Festival</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
							</div>

                            <div class=" mr-[19px]">
							<Dropdown onOpenChange={handleOpenStatusChange}>
								<DropdownTrigger>
									<Button
										variant="bordered"
										className="capitalize h-[44px] w-[203px] rounded-full text-[14px] justify-start flex"
									>
										{selectedValueStatus}
										<span style={{ marginLeft: 'auto' }}>
											{isDropdownStatusOpen ? (
												<img
													loading="lazy"
													src="https://cdn.builder.io/api/v1/image/assets/TEMP/06b5e8c3af3067bafd7dcc2991a79b131a3feee938af51adb53ab18c3ccb1387?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&"
													className="w-full aspect-[1.59] fill-gray-500 max-w-[8px]"
												/>
											) : (
												<img
													loading="lazy"
													src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e6ef689c401d3f820cb3bf26ba805bb901f12b0887240136d7d90056531f828?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&"
													className="w-full aspect-[1.59] fill-gray-500 max-w-[8px]"
												/>
											)}
										</span>
									</Button>
								</DropdownTrigger>
								<DropdownMenu
									aria-label="Single selection example"
									variant="solid"
									disallowEmptySelection
									selectionMode="single"
									selectedKeys={selectedKeysStatus}
									onSelectionChange={handleSelectionStatusChange}
									hideSelectedIcon
									className="rounded-lg"
									color="secondary"
								>
									<DropdownItem key="semua">Semua</DropdownItem>
									<DropdownItem key="published">Published</DropdownItem>
									<DropdownItem key="draft">Draft</DropdownItem>
								</DropdownMenu>
							</Dropdown>
							</div>
                        </div>

                        <div className="h-full">
							<Table removeWrapper color="secondary"
        					selectionMode="multiple"
                            disabledKeys={"aksi"}
                            >
							<TableHeader columns={columns}>
								{(column) => (
								<TableColumn className="text-base text-[#000000]" key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
									{column.name}
								</TableColumn>
								)}
							</TableHeader>
							<TableBody items={users}>
								{(item) => (
								<TableRow key={item.id}>
									{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
								</TableRow>
								)}
							</TableBody>
							</Table>
                        </div> {/*SINI TEMPAT TAMBAH TABS*/}
                        
                    </div> 
                </div>
            </div>
                <Modal2Buttons
                message={"Apakah Anda yakin ingin menghapus draft Event ini?"}
                isOpen={isOpenDeleteDraft}
                leftButton={"Ya"}
                rightButton={"Kembali"}
                onOpenChange={onOpenChangeDeleteDraft}
                onYesClick={handleDelete}
                /> 
					

                <Modal2Buttons
                message={"Apakah Anda yakin ingin menghapus Event ini?"}
                isOpen={isOpenDeletePublished}
                leftButton={"Ya"}
                rightButton={"Kembali"}
                onOpenChange={onOpenChangeDeletePublished}
                onYesClick={handleDelete}
                />
        </div>
	);  
};

export default EventList;