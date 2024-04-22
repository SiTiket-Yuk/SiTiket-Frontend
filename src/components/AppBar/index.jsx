import Image from "next/image";
import LogoLight from "../../../public/logo/LogoLight.svg";

const AppBar = () => {
	return (
		<nav className="bg-primary">
			<div
				className="flex flex-wrap md:flex-row flex-col lg:mx-52 md:mx-20
				py-5 justify-between items-center"
			>
				<div className="flex md:flex-row flex-col items-center">
					<Image
						className="object-cover h-13 w-12"
						src={LogoLight}
						alt="SiTiket Logo"
					/>
					<div className="flex flex-row pl-2 text-white text-3xl">
						si<div className="font-bold">tiket</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default AppBar;
