"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
	Avatar,
	Listbox,
	ListboxItem,
	ScrollShadow,
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	useDisclosure,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Button,
	DatePicker,
} from "@nextui-org/react";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";
import AvatarDefault from "../../../../../public/imageDefault/AvatarDefault.png";
import { SearchIcon } from "../../../../../public/logo/SearchIcon.jsx";
import { EditIcon } from "../../../../../public/logo/EditIcon.jsx";
import { DeleteIcon } from "../../../../../public/logo/DeleteIcon.jsx";
import Modal2Buttons from "@/components/Modal2Buttons";
import { columns, users } from "./data";

const EventFilter = () => {
	const [date, setDate] = React.useState();
	const [isDateOpen, setisDateOpen] = React.useState(false);
	const handleOpenDate = (isDateOpen) => {
		setisDateOpen(isDateOpen);
	};
	const [selectedKeysCategory, setSelectedKeysCategory] = React.useState(
		new Set(["Kategori"])
	);
	const selectedValueCategory = React.useMemo(
		() => Array.from(selectedKeysCategory).join(", ").replaceAll("_", " "),
		[selectedKeysCategory]
	);
	const [isDropdownCategoryOpen, setisDropdownCategoryOpen] =
		React.useState(false);
	const handleOpenCategoryChange = (isDropdownCategoryOpen) => {
		setisDropdownCategoryOpen(isDropdownCategoryOpen);
	};
	const handleSelectionCategoryChange = (newSelectedKeys) => {
		setSelectedKeysCategory(newSelectedKeys);
		setisDropdownCategoryOpen(false);
	};
	const [selectedKeysStatus, setSelectedKeysStatus] = React.useState(
		new Set(["Status"])
	);
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

	return (
		<div className="flex flex-row h-[76px]">
			{" "}
			{/*SINI TEMPAT TAMBAH DROP DOWN*/}
			<div className="mr-[19px]">
				<DatePicker
					variant="bordered"
					radius="full"
					className="mt-[1px] w-[203px] text-[14px] justify-start flex border-[#D4D4D8]"
					color="secondary"
					selectorIcon={
						isDateOpen ? (
							<IoChevronUp style={{ color: "black" }} />
						) : (
							<IoChevronDown style={{ color: "black" }} />
						)
					}
					value={date}
					onOpenChange={handleOpenDate}
					onChange={setDate}
					placeholderValue={null}
				/>
			</div>
			<div className="mr-[19px]">
				<Dropdown onOpenChange={handleOpenCategoryChange}>
					<DropdownTrigger>
						<Button
							variant="bordered"
							className="capitalize h-[44px] w-[203px] rounded-full text-[14px] justify-start flex"
						>
							{selectedValueCategory}
							<span style={{ marginLeft: "auto" }}>
								{isDropdownCategoryOpen ? (
									<IoChevronUp style={{ color: "black" }} />
								) : (
									<IoChevronDown style={{ color: "black" }} />
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
			<div className="mr-[19px]">
				<Dropdown onOpenChange={handleOpenStatusChange}>
					<DropdownTrigger>
						<Button
							variant="bordered"
							className="capitalize h-[44px] w-[203px] rounded-full text-[14px] justify-start flex"
						>
							{selectedValueStatus}
							<span style={{ marginLeft: "auto" }}>
								{isDropdownStatusOpen ? (
									<IoChevronUp style={{ color: "black" }} />
								) : (
									<IoChevronDown style={{ color: "black" }} />
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
	);
};

const EventTable = () => {
	const {
		isOpen: isOpenDeleteDraft,
		onOpen: onOpenDeleteDraft,
		onOpenChange: onOpenChangeDeleteDraft,
	} = useDisclosure();
	const {
		isOpen: isOpenDeletePublished,
		onOpen: onOpenDeletePublished,
		onOpenChange: onOpenChangeDeletePublished,
	} = useDisclosure();

	const handleDelete = () => {
		//EDIT DISINI BUAT HAPUS EVENT :D
	};

	const [eventPublished, setEventPublished] = useState(false); //dunno how to set this

	const renderCell = React.useCallback(
		(user, columnKey) => {
			const cellValue = user[columnKey];

			switch (columnKey) {
				case "tanggal":
					return <p className="text-[#323C47] text-base">{cellValue}</p>;
				case "judul":
					return <p className="text-[#323C47] text-base">{cellValue}</p>;
				case "penyelenggara":
					return <p className="text-[#323C47] text-base">{cellValue}</p>;
				case "kategori":
					return <p className="text-[#323C47] text-base">{cellValue}</p>;
				case "status":
					return <p className="text-[#323C47] text-base">{cellValue}</p>;
				case "aksi":
					return (
						<div className="relative flex items-center gap-2">
							<button>
								<Link href="/edit-event">
									<EditIcon />
								</Link>
							</button>
							<button
								onClick={
									eventPublished ? onOpenDeletePublished : onOpenDeleteDraft
								}
							>
								<DeleteIcon />
							</button>

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
				default:
					return cellValue;
			}
		},
		[
			eventPublished,
			isOpenDeleteDraft,
			isOpenDeletePublished,
			onOpenChangeDeleteDraft,
			onOpenChangeDeletePublished,
			onOpenDeleteDraft,
			onOpenDeletePublished,
		]
	);

	return (
		<Table
			removeWrapper
			isHeaderSticky
			color="secondary"
			selectionMode="multiple"
			disabledKeys={"aksi"}
			classNames={{
				base: "h-[400px] overflow-auto",
			}}
		>
			<TableHeader columns={columns}>
				{(column) => (
					<TableColumn
						className="text-base text-[#000000]"
						key={column.uid}
						align={column.uid === "actions" ? "center" : "start"}
					>
						{column.name}
					</TableColumn>
				)}
			</TableHeader>

			<TableBody items={users}>
				{(item) => (
					<TableRow key={item.id}>
						{(columnKey) => (
							<TableCell>{renderCell(item, columnKey)}</TableCell>
						)}
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
};

const SearchEvent = () => {
	const [pencarian, setPencarian] = useState("");

	const handleChange = (event) => {
		const { value } = event.target;
		setPencarian(value);

		if (value.length == 0) {
			setPencarian("");
		}
	};

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
		},
	];

	return (
		<div className="relative h-[45px] w-[253px]">
			<input
				className="peer h-full w-full rounded-full border border-[#F2F2F2] bg-transparent px-6 py-3 
        font-sans text-base font-normal text-[#414141] outline outline-0 transition-all placeholder-shown:border-2 
        placeholder-shown:border-[#F2F2F2] focus:border-2 focus:border-[#F2F2F2] disabled:border-0 disabled:bg-blue-gray-50"
				placeHolder="Cari Event"
				value={pencarian}
				onChange={handleChange}
			/>
			{pencarian.length === 0 && (
				<div
					className="absolute inset-y-0 right-6 flex items-center  pointer-events-none"
					style={{ color: "#929292" }}
				>
					<SearchIcon size={18} />
				</div>
			)}
			{pencarian && (
				<div
					className="mt-4 ml-[69px] w-[387px] h-[150px] bg-white shadow-sm rounded-lg border-2 border-[#F2F2F2]"
					style={{
						position: "absolute",
						left: "50%",
						transform: "translate(-50%)",
						zIndex: 100,
					}}
				>
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
									style={{ height: "46px" }}
								>
									{item.label}
								</ListboxItem>
							)}
						</Listbox>
					</ScrollShadow>
				</div>
			)}
		</div>
	);
};

const EventList = () => {
	return (
		<div className="grow">
			<div
				className="py-10 w-full flex justify-between px-9"
				style={{ boxShadow: "0px 2px 6px 0px rgba(20, 20, 43, 0.06)" }}
			>
				<h2 className="font-extrabold text-[28px] text-[#0076b5]">Event</h2>
				<Avatar src={AvatarDefault.src} />
			</div>
			<div className="relative flex flex-col pl-8 pr-11">
				<div className="flex flex-row justify-between h-[93px] pt-8 pb-4">
					<div className="pt-4 text-xl font-medium leading-5 text-black">
						Daftar Event
					</div>
					<div className="flex flex-row gap-4">
						<SearchEvent />
						<Link href="/admin/add-event">
							<Button
								className="w-[118px] h-[42px] select-none rounded-full bg-pink-400 text-white 
                text-center font-medium shadow-md transition-all hover:shadow-lg focus:outline-none 
                focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 font-dm-sans"
								type="submit"
								style={{ backgroundColor: "#b5618d", fontSize: "12px" }}
								data-ripple-light="true"
							>
								<span>Tambah Event</span>
							</Button>
						</Link>
					</div>
				</div>
				<EventFilter />
				<EventTable />
			</div>
		</div>
	);
};

export default EventList;
