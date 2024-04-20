"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	Avatar,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from "@nextui-org/react";
import LogoLight from "../../../public/logo/LogoLight.png";
import IconTicket from "../../../public/images/IconTicket.png";

const NavigationBarSectionHyperLink = ({
	pageName,
	pageLink,
	isActive,
	onHyperlinkClick,
}) => {
	const handleClick = () => {
		onHyperlinkClick();
	};

	return (
		<Link
			href={`/${pageLink}`}
			onClick={handleClick}
			className={`block rounded text-xl text-navbar hover:text-white ${
				isActive ? "text-white" : ""
			}`}
		>
			{pageName}
		</Link>
	);
};

const AuthenticatedUser = ({ avatar }) => {
	return (
		<>
			<div className="flex flex-row gap-5 items-center">
				<Link href="/register-page">
					<Image src={IconTicket} alt="Icon Ticket" width={50} />
				</Link>
				<Dropdown>
					<DropdownTrigger>
						<Avatar className="hover:cursor-pointer" src={avatar} />
					</DropdownTrigger>
					<DropdownMenu
						aria-label="Static Actions"
						color="secondary"
						className="p-2"
					>
						<DropdownItem
							key="userTicket"
							href="/my-tiket"
							textValue="Tiket Saya"
						>
							<div className="text-base">Tiket Saya</div>
						</DropdownItem>
						<DropdownItem
							key="exploreEvent"
							href="/discovery"
							textValue="Jelajahi Event"
						>
							<div className="text-base">Jelajahi Event</div>
						</DropdownItem>
						<DropdownItem
							key="setting"
							href="/my-profile"
							textValue="Pengaturan"
						>
							<div className="text-base">Pengaturan</div>
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
		</>
	);
};

const GuestUser = () => {
	return (
		<>
			<Link href="/register-page">
				<div
					className="block rounded-full text-white font-bold border-white 
						border-2 p-3 px-5 over:bg-blue-300 hover:border-blue-100 hover:text-blue-100"
				>
					Buat Akun
				</div>
			</Link>
		</>
	);
};

const NavigationBar = ({ userIsLoggedIn, userAvatar }) => {
	const [activePage, setActivePage] = useState(-1);
	const currentPathname = usePathname();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const hyperLinkList = [
		{
			pageName: "Discovery",
			pageLink: "discovery",
		},
		{
			pageName: "Tentang Kami",
			pageLink: "about",
		},
		{
			pageName: "Bantuan",
			pageLink: "help",
		},
	];

	useEffect(() => {
		for (let index = 0; index < hyperLinkList.length; index++) {
			if (currentPathname === `/${hyperLinkList[index].pageLink}`) {
				setActivePage(index);
			}
		}
	}, [currentPathname, hyperLinkList]);
	const onHyperlinkClick = (index) => {
		setActivePage(index);
	};

	return (
		<nav className="bg-primary">
			<div
				className="flex flex-wrap md:flex-row flex-col lg:mx-52 md:mx-20
				py-5 justify-between items-center"
			>
				<div className="flex md:flex-row md:gap-12 gap-1 flex-col items-center">
					<Link
						href="/landing-page"
						onClick={() => onHyperlinkClick(-1)}
						className="flex flex-row items-center"
					>
						<Image
							className="object-cover h-13 w-12"
							src={LogoLight}
							alt="SiTiket Logo"
						/>
						<div className="flex flex-row pl-2 text-white text-3xl">
							si<div className="font-bold">tiket</div>
						</div>
					</Link>
					{hyperLinkList.map((hyperLink, index) => (
						<NavigationBarSectionHyperLink
							key={hyperLink.pageName}
							pageName={hyperLink.pageName}
							pageLink={hyperLink.pageLink}
							isActive={index === activePage}
							onHyperlinkClick={() => onHyperlinkClick(index)}
						/>
					))}
				</div>
				{userIsLoggedIn ? (
					<AuthenticatedUser avatar={userAvatar.src} />
				) : (
					<GuestUser />
				)}
			</div>
		</nav>
	);
};

export default NavigationBar;
