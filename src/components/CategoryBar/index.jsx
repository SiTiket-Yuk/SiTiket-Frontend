import Link from "next/link";
import React from "react";
const EventCategory = ({ categories }) => {
	return (
		<div className="flex flex-nowrap mt-8 text-base category ">
			<p className="font-bold pr-4">Kategori: </p>
			<div className=" text-sky-500 underline">
				{categories.map((category, index) => (
					<Link
						key={index}
						className="mr-3"
						/*{benerin hrefnya kalo discovery udah bisa}*/
						href={`/${category.toLowerCase()}`}
					>
						{category}
					</Link>
				))}
			</div>
		</div>
	);
};

export default EventCategory;
