import { DM_Sans } from "next/font/google";
import "../globals.css";
import NavigationBar from "@/components/NavigationBar";

const dmSans = DM_Sans({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body className={dmSans.className}>{children} </body>
		</html>
	);
};

export default RootLayout;
