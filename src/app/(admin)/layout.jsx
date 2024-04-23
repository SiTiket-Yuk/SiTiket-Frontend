import { DM_Sans } from "next/font/google";
import "../globals.css";
import SideNavigationBar from "@/components/SideNavigationBar";
import { Providers } from "../providers";

const dmSans = DM_Sans({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body className={dmSans.className}>
				<Providers>
					<div className="flex flex-row">
						
						{children}
					</div>
				</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
