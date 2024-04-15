import { FaAngleRight } from "react-icons/fa6";

const Breadcrumbs = ({ link1, pageName1, link2, pageName2, pageName3 }) => {
	return (
		<div className="flex flex-row items-center text-base mt-16 mb-10">
			<a href={link1} className="mr-4 text-cyan-500">
				{pageName1}
			</a>
			<FaAngleRight color="grey" />
			<a href={link2} className="mr-4 ml-2 text-cyan-500">
				{pageName2}
			</a>
			<FaAngleRight color="grey" />
			<p className="ml-2 text-neutral-400">{pageName3}</p>
		</div>
	);
};
export default Breadcrumbs;
