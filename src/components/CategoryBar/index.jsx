import Link from "next/link";
import React from "react";

const STRING_TYPE = typeof "STRING";

const EventCategory = ({ categories }) => {
	const eventCategories = [];

	if (typeof categories === STRING_TYPE) {
		eventCategories.push(categories);
	}

	return (
		<div className="flex flex-nowrap mt-8 text-base category ">
			<p className="font-bold pr-4">Kategori: </p>
			<div className=" text-sky-500 underline">
				{eventCategories.map((category, index) => (
					<Link
						key={index}
						className="mr-3"
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
