import { DM_Sans } from "next/font/google";
import "../globals.css";
import SideNavigationBarAdmin from "@/components/SideNavigationBarAdmin";
import { Providers } from "../nextuiproviders";

const dmSans = DM_Sans({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Providers>
          <div className="flex flex-row">
            <SideNavigationBarAdmin />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
