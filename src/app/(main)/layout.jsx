import { DM_Sans } from "next/font/google";
import "../globals.css";
import NavigationBar from "@/components/NavigationBar";
import FooterBar from "@/components/FooterBar";
import { Providers } from "../providers";
import AvatarDefault from "../../../public/imageDefault/AvatarDefault.png";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
	title: "SiTiket",
	description:
		"Aplikasi SiTiket adalah solusi yang memungkinkan pengguna " +
		"untuk mendaftar dan mengakses berbagai acara digital secara " +
		"gratis. Dengan antarmuka yang intuitif dan fitur-fitur canggih, " +
		"SiTiket membuka pintu akses yang mudah ke berbagai acara, mulai " +
		"dari seminar dan lokakarya hingga konser dan pertunjukan serta acara digital.",
};

const RootLayout = ({ children }) => {
	/*
	Handle User is authenticated or not in here
	*/

	return (
		<html lang="en">
			<body className={dmSans.className}>
				<Providers>
					<NavigationBar userIsLoggedIn={false} userAvatar={AvatarDefault} />
					{children}
					<FooterBar />
				</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
