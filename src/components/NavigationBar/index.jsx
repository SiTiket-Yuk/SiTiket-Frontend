import Image from "next/image";
import Link from "next/link";
import LogoLight from "../../../public/logo/LogoLight.png";

const NavigationBar = () => {
	return (
		<nav className="bg-blue">
			<div
				className="flex flex-wrap md:flex-row flex-col lg:mx-52 md:mx-20
				py-5 justify-between items-center"
			>
				<div className="flex md:flex-row md:gap-12 gap-1 flex-col items-center">
					<Link href="/" className="flex flex-row items-center">
						<Image
							className="object-cover h-13 w-12"
							src={LogoLight}
							alt="SiTiket Logo"
						/>
						<div className="flex flex-row pl-2 text-white text-3xl">
							si<div className="font-bold">tiket</div>
						</div>
					</Link>
					<Link
						href="#"
						className="block rounded text-xl text-navbar hover:text-white"
					>
						Discovery
					</Link>
					<Link
						href="#"
						className="block rounded text-xl text-navbar hover:text-white"
					>
						Tentang Kami
					</Link>
					<Link
						href="#"
						className="block rounded text-xl text-navbar hover:text-white"
					>
						Bantuan
					</Link>
				</div>
				<Link href="#">
					<div
						className="block rounded-full text-white font-bold border-white 
						border-2 p-3 px-5 over:bg-blue-300 hover:border-blue-100 hover:text-blue-100"
					>
						Buat Akun
					</div>
				</Link>
			</div>
		</nav>
	);
};

export default NavigationBar;
