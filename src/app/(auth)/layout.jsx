import { DM_Sans } from "next/font/google";
import "../globals.css";
import AppBar from "@/components/AppBar";

const dmSans = DM_Sans({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body className={dmSans.className}>
				<AppBar />
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
