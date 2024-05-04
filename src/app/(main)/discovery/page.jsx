"use client";
import React, { useState } from "react";
import { Listbox, ListboxItem, ScrollShadow } from "@nextui-org/react";
import DiscoverySection from "./DiscoverySection.jsx";
import CardFilter from "./CardFilter.jsx";
import { SearchIcon } from "../../../../public/logo/SearchIcon.jsx";

const Discovery = ({ searchParams }) => {
	const [searchInput, setSearchInput] = useState("");
	const handleChange = (event) => {
		const { value } = event.target;
		setSearchInput(value);

		if (value.length === 0) {
			setSearchInput("");
		}
	};

	const items = [
		{
			key: "opsi1",
			label: "Opsi 1",
		},
		{
			key: "opsi2",
			label: "Opsi 2",
		},
		{
			key: "opsi3",
			label: "Opsi 3",
		},
		{
			key: "opsi4",
			label: "Opsi 4",
		},
	];

	return (
		<div className="container mx-auto max-w-[1100px]">
			<ScrollShadow hideScrollBar>
				<div className="flex justify-center mt-24">
					<div className="relative h-[57px] w-[1107px] min-w-[200px]">
						<input
							className="peer h-full w-full rounded-full border border-[#F2F2F2] 
              bg-transparent px-6 py-3 font-sans text-base font-normal text-[#414141] 
              outline outline-0 transition-all placeholder-shown:border-2 
              placeholder-shown:border-[#F2F2F2] focus:border-2 focus:border-[#F2F2F2] 
              disabled:border-0 disabled:bg-blue-gray-50"
							placeholder="Cari Event"
							value={searchInput}
							onChange={handleChange}
						/>
						{searchInput.length === 0 && (
							<div
								className="absolute inset-y-0 right-6 flex items-center pr-3 pointer-events-none"
								style={{ color: "#929292" }}
							>
								<SearchIcon size={18} />
							</div>
						)}
					</div>
				</div>

				{searchInput && (
					<div
						className="flex justify-start mt-4 w-[1107px] h-[217px] bg-white shadow-sm 
            rounded-lg border-2 border-[#F2F2F2]"
						style={{
							position: "absolute",
							left: "50%",
							transform: "translate(-50%)",
							zIndex: 100,
						}}
					>
						<ScrollShadow
							size={20}
							hideScrollBar
							classNameName="h-[200px] mt-2 ml-1"
						>
							<Listbox
								items={items}
								aria-label="Dynamic Actions"
								classNameName="w-[1095px]"
							>
								{(item) => (
									<ListboxItem
										key={item.key}
										className="hover:!bg-warning hover:!text-white h-[46px]"
										href="/"
									>
										{item.label}
									</ListboxItem>
								)}
							</Listbox>
						</ScrollShadow>
					</div>
				)}
			</ScrollShadow>

			{/* ------------------------------------------------------------------------- */}

			<div className="flex justify-between mt-14 mb-14">
				<CardFilter className="grow" />
				<div>
					<DiscoverySection searchParams={searchParams} />
				</div>
			</div>
		</div>
	);
};
export default Discovery;
